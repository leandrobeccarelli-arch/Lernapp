#!/usr/bin/env python3
"""
Inhaltsprüfung: App-Merksätze und Schlüsselbegriffe gegen Original-Buchseiten (Haiku Vision).
Ausgabe: verify_results.json
"""

import anthropic
import base64
import json
import os
import re
import subprocess

BOOKS_DIR = os.path.dirname(os.path.abspath(__file__))
SCREENSHOTS_DIR = os.path.join(BOOKS_DIR, "screenshots")
DATA_DIR = os.path.join(BOOKS_DIR, "data")

BOOKS = [
    "projektmanagement",
    "selbstmanagement",
    "kommunikation-grundlagen",
    "verkaufsplanung",
    "distribution",
    "digitales-marketing",
    "kommunikation-instrumente",
    "marketingkonzept",
]

client = anthropic.Anthropic()  # liest ANTHROPIC_API_KEY aus Umgebung


def load_book_data(book_id: str) -> dict:
    path = os.path.join(DATA_DIR, f"{book_id}.js")
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()
    # window.BOOK_DATA = {...} → JSON extrahieren
    src = re.sub(r"^window\.BOOK_DATA\s*=\s*", "", src.strip())
    src = src.rstrip(";")
    return json.loads(src)


def encode_image(path: str) -> str:
    with open(path, "rb") as f:
        return base64.standard_b64encode(f.read()).decode("utf-8")


def screenshots_for_chapter(book_id: str, page_start: int, page_end: int) -> list[dict]:
    """Gibt base64-kodierte Bilder für den Seitenbereich zurück (max. 5 Seiten)."""
    folder = os.path.join(SCREENSHOTS_DIR, book_id)
    images = []
    end = min(page_end, page_start + 4)  # max 5 Seiten pro Kapitel
    for p in range(page_start, end + 1):
        path = os.path.join(folder, f"seite_{p:03d}.jpg")
        if os.path.exists(path):
            images.append({
                "type": "image",
                "source": {"type": "base64", "media_type": "image/jpeg", "data": encode_image(path)},
            })
    return images


def extract_check_content(chapter: dict) -> dict:
    """Extrahiert Merksätze und Schlüsselbegriffe aus einem Kapitel."""
    out = {"merke": [], "keyterms": []}
    for sec in chapter.get("learningData", {}).get("sections", []):
        if sec.get("type") == "merke":
            items = sec.get("items") or []
            if not items and sec.get("content"):
                items = [sec["content"]]
            out["merke"].extend(items)
        elif sec.get("type") == "keyterms":
            for t in sec.get("terms", []):
                out["keyterms"].append(f'{t["term"]}: {t["def"]}')
    return out


SYSTEM_PROMPT = (
    "Du bist ein präziser Verifikations-Assistent. "
    "Vergleiche den gegebenen App-Inhalt mit den Buchseiten-Bildern. "
    "Antworte NUR mit validem JSON, kein Text davor oder danach."
)

USER_PROMPT_TEMPLATE = """\
Buch: {book_id}, Kapitel: {ch_num} – {ch_title}

APP-INHALT ZU PRÜFEN:

MERKSÄTZE:
{merke}

SCHLÜSSELBEGRIFFE:
{keyterms}

AUFGABE:
Prüfe jeden Punkt gegen die Buchseiten-Bilder.
Antworte mit JSON in diesem Format:
{{
  "status": "ok" | "fehler" | "nicht_prüfbar",
  "probleme": [
    {{
      "typ": "merke" | "keyterm",
      "text": "<der problematische Text aus der App>",
      "problem": "<kurze Erklärung: falsch, fehlt im Buch, falsche Def.>"
    }}
  ]
}}
Wenn alles stimmt: status "ok", leere probleme-Liste.
Wenn Seiten zu unscharf/fehlen: status "nicht_prüfbar".
Nur echte inhaltliche Abweichungen melden, keine Stilunterschiede.
"""


def verify_chapter(book_id: str, chapter: dict) -> dict:
    content = extract_check_content(chapter)
    if not content["merke"] and not content["keyterms"]:
        return {"status": "übersprungen", "probleme": [], "grund": "kein merke/keyterms"}

    images = screenshots_for_chapter(
        book_id, chapter.get("pageStart", 1), chapter.get("pageEnd", 5)
    )
    if not images:
        return {"status": "nicht_prüfbar", "probleme": [], "grund": "keine Screenshots"}

    merke_text = "\n".join(f"- {m}" for m in content["merke"]) or "(keine)"
    keyterms_text = "\n".join(f"- {k}" for k in content["keyterms"]) or "(keine)"

    user_text = USER_PROMPT_TEMPLATE.format(
        book_id=book_id,
        ch_num=chapter.get("num", "?"),
        ch_title=chapter.get("title", "?"),
        merke=merke_text,
        keyterms=keyterms_text,
    )

    messages = [{"role": "user", "content": images + [{"type": "text", "text": user_text}]}]

    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=512,
        system=SYSTEM_PROMPT,
        messages=messages,
    )

    raw = response.content[0].text.strip()
    # JSON aus der Antwort extrahieren
    m = re.search(r"\{.*\}", raw, re.DOTALL)
    if m:
        try:
            return json.loads(m.group())
        except json.JSONDecodeError:
            return {"status": "parse_fehler", "probleme": [], "raw": raw[:200]}
    return {"status": "parse_fehler", "probleme": [], "raw": raw[:200]}


def main():
    results = {}
    total_problems = 0

    for book_id in BOOKS:
        print(f"\n{'='*50}")
        print(f"Buch: {book_id}")
        data = load_book_data(book_id)
        book_results = []

        for ch in data.get("chapters", []):
            ch_label = f'{ch.get("num","?")} – {ch.get("title","?")}'
            result = verify_chapter(book_id, ch)
            n_problems = len(result.get("probleme", []))
            total_problems += n_problems

            status_icon = "✓" if result["status"] == "ok" else ("⚠" if n_problems else "·")
            print(f"  {status_icon} {ch_label}: {result['status']}", end="")
            if n_problems:
                print(f" ({n_problems} Problem(e))")
                for p in result["probleme"]:
                    print(f"      [{p['typ']}] {p['text'][:60]}... → {p['problem']}")
            else:
                print()

            book_results.append({
                "ch_num": ch.get("num"),
                "ch_title": ch.get("title"),
                "pages": f"{ch.get('pageStart')}-{ch.get('pageEnd')}",
                **result,
            })

        results[book_id] = book_results

    out_path = os.path.join(BOOKS_DIR, "verify_results.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*50}")
    print(f"Gesamt: {total_problems} Problem(e) gefunden.")
    print(f"Ergebnisse gespeichert: {out_path}")


if __name__ == "__main__":
    main()
