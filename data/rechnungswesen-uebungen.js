// ─── Rechnungswesen Übungen – Extracted Book Data ───────────────────────────
// Source: buecher/rechnungswesen-uebungen.html (494KB, 16 chapters, 159 exercises)
// Extracted: 2026-03-20

window.BOOK_DATA = {
  id: 'rechnungswesen-uebungen',
  title: 'Rechnungswesen – Aufgaben und Übungen',
  shortTitle: 'Rechnungswesen Übungen',
  author: 'Compendio-Autorenteam',
  year: 2017,
  pages: 280,
  color: '#3b82f6',
  chapters: [
    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 1: Übersicht über das Fachgebiet
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch1',
      num: 'Kapitel 1',
      title: 'Übersicht über das Fachgebiet',
      exercises: [
        {
          id: 1,
          type: 'fill',
          q: 'Lückentext – Das Fachgebiet Rechnungswesen. Ergänzen Sie die fehlenden Begriffe zu den Hauptbereichen des Rechnungswesens.',
          template: 'A) Das Rechnungswesen kann in {0} Hauptbereiche gegliedert werden, nämlich das {1} Rechnungswesen (externer Abschluss mit Bilanz, {2} und evtl. weiteren Elementen) und das {3} Rechnungswesen (interner Abschluss mit der Erfassung der {4}).\n\nB) Die Hauptbereiche werden durch verschiedene {5} unterstützt. Dazu gehören beispielsweise die {6}, die {7} und die {8}.\n\nC) Das Rechnungswesen erfüllt im Unternehmen eine {9} für die Planung, {10}, Kontrolle und {11}.',
          blanks: [['zwei','2'],['finanzielle','finanzielles'],['Erfolgsrechnung'],['betriebliche','betriebliches'],['Kosten'],['Nebenbuchhaltungen'],['Lohnbuchhaltung'],['Debitorenbuchhaltung'],['Kreditorenbuchhaltung'],['wichtige Grundlage'],['Entscheidung'],['Führung','Fuehrung']],
          tips: ['Das Rechnungswesen hat zwei Hauptbereiche: einen externen und einen internen.','Die externe Seite erstellt Bilanz und Erfolgsrechnung, die interne erfasst die Kosten.','Nebenbuchhaltungen sind z.B. Lohn-, Debitoren- und Kreditorenbuchhaltung.'],
          reveal: ['Die zwei Hauptbereiche sind das finanzielle (externe) und das betriebliche (interne) Rechnungswesen. Warum diese Trennung? Extern richtet sich an Investoren, Banken und Steuerbehörden – intern dient der Unternehmensführung.','Die FIBU erstellt Bilanz und Erfolgsrechnung für aussenstehende Anspruchsgruppen. Die BEBU erfasst Kosten und dient der internen Steuerung (z.B. Kalkulation, Preisgestaltung).','Nebenbuchhaltungen (Lohn, Debitoren, Kreditoren) sind Hilfsrechnungen, die die Hauptbuchhaltung unterstützen. Prüfungstipp: Nebenbuchhaltungen sind NICHT eigenständige Hauptbereiche, sondern unterstützende Hilfsfunktionen.','Das Rechnungswesen ist Grundlage für Planung, Entscheidung, Kontrolle und Führung. Häufiger Fehler: Rechnungswesen ≠ Buchhaltung! RW ist der Oberbegriff und umfasst viel mehr.']
        },
        {
          id: 2,
          type: 'tf',
          q: 'Richtig oder falsch? – Buchhaltung und Rechnungswesen',
          statements: [
            {s:'Das Rechnungswesen ist im Unternehmen wichtige Grundlage für Planung, Entscheidung, Kontrolle und Führung.', c: true},
            {s:'Rechnungswesen und Buchhaltung sind letztlich das Gleiche, nämlich jeweils andere Ausdrücke für Finanzbuchhaltung.', c: false,reason:'Das Rechnungswesen umfasst mehr als nur die Buchhaltung. Es beinhaltet auch die Betriebsbuchhaltung, Hilfsrechnungen und Auswertungen.'},
            {s:'Neben der Finanzbuchhaltung ist die Betriebsbuchhaltung ein Hauptbereich des Rechnungswesens.', c: true},
            {s:'Die Debitoren- und Kreditorenbuchhaltung (Kunden- und Lieferantenbuchh.) sind Beispiele für Nebenbereiche (Hilfsrechnungen) des Rechnungswesens.', c: true},
            {s:'Die Buchhaltung kann über alle Vorgänge, die sich in einem Unternehmen ereignen, Auskunft geben.', c: false,reason:'Die Buchhaltung erfasst nur zahlenmässig erfassbare Vorgänge, nicht alle Vorgänge (z.B. keine qualitativen Aspekte wie Mitarbeiterzufriedenheit).'},
            {s:'Die Finanzbuchhaltung ist Grundlage für weitere Bereiche des Rechnungswesens.', c: true}
          ],
          tips: ['Rechnungswesen ist der Oberbegriff – Buchhaltung ist nur ein Teil davon.','Die Buchhaltung erfasst nur zahlenmässig messbare Geschäftsvorgänge.','Die Finanzbuchhaltung bildet die Basis für alle anderen Bereiche.'],
          reveal: ['Richtig: Das RW ist DIE zentrale Informationsquelle für die Unternehmensführung. Ohne RW keine fundierte Planung, Kontrolle oder Entscheidung möglich.','Falsch: Rechnungswesen ≠ Buchhaltung! Warum? RW ist der Oberbegriff und umfasst FIBU, BEBU, Hilfsrechnungen und Auswertungen. Buchhaltung ist nur ein Teilbereich. Prüfungstipp: Diese Verwechslung ist eine klassische Falle!','Richtig: FIBU (extern) und BEBU (intern) sind die zwei Hauptbereiche. Debitoren-/Kreditorenbuchhaltung sind Hilfsrechnungen – sie unterstützen, sind aber keine Hauptbereiche.','Falsch: Die Buchhaltung erfasst NUR zahlenmässig messbare Vorgänge. Qualitative Aspekte (Mitarbeiterzufriedenheit, Kundenloyalität) können nicht in Franken gemessen werden. Die FIBU bildet die Basis für BEBU und alle weiteren Auswertungen.']
        },
        {
          id: 3,
          type: 'match',
          q: 'Zuordnungsaufgabe – Bereiche des Rechnungswesens. Ordnen Sie die Begriffe den Bereichen des Rechnungswesens zu.',
          pairs: [
            {l:'A) Debitorenbuchhaltung (Kundenbuchhaltung)',r:'1 – Hilfsrechnungen'},
            {l:'B) Kalkulation',r:'3 – Hauptbereich Betriebsbuchhaltung'},
            {l:'C) Bilanz',r:'2 – Hauptbereich Finanzbuchhaltung'},
            {l:'D) Kostenartenrechnung',r:'3 – Hauptbereich Betriebsbuchhaltung'},
            {l:'E) Bilanz- und Erfolgsanalyse',r:'4 – Auswertung der Buchhaltung'},
            {l:'F) Kreditorenbuchhaltung (Lieferantenbuchhaltung)',r:'1 – Hilfsrechnungen'},
            {l:'G) Lohnbuchhaltung',r:'1 – Hilfsrechnungen'},
            {l:'H) Erfolgsrechnung',r:'2 – Hauptbereich Finanzbuchhaltung'}
          ],
          options: ['1 – Hilfsrechnungen','2 – Hauptbereich Finanzbuchhaltung','3 – Hauptbereich Betriebsbuchhaltung','4 – Auswertung der Buchhaltung'],
          tips: ['Finanzbuchhaltung = Bilanz + Erfolgsrechnung (extern).','Betriebsbuchhaltung = Kalkulation + Kostenrechnung (intern).','Hilfsrechnungen unterstützen: Debitoren, Kreditoren, Lohn.'],
          reveal: ['Hilfsrechnungen (Debitoren-, Kreditoren-, Lohnbuchhaltung): Diese unterstützen die Hauptbuchhaltung mit Detailinformationen. Warum separat? Weil z.B. die Debitorenbuchhaltung jeden einzelnen Kunden führt, während die FIBU nur den Gesamtsaldo zeigt.','Finanzbuchhaltung (Bilanz, Erfolgsrechnung): Das ist der externe Abschluss – gesetzlich vorgeschrieben und für Dritte bestimmt (Banken, Steuerbehörden, Investoren).','Betriebsbuchhaltung (Kalkulation, Kostenartenrechnung): Intern orientiert. Warum? Damit das Unternehmen weiss, was ein Produkt kostet und ob es profitabel ist. Merkhilfe: BEBU = «Betrieb von innen steuern».','Auswertungen (Bilanz- und Erfolgsanalyse): Diese basieren auf den Daten der FIBU und liefern Kennzahlen für Management-Entscheidungen.']
        },
        {
          id: 4,
          type: 'text',
          q: 'Was wird umschrieben? Geben Sie die Bezeichnung ein.',
          questions: [
            {label:'A',text:'(...) bildet den Verkehr des Unternehmens mit seinen Marktpartnern ab.',answers:['Finanzbuchhaltung','FIBU'],keywords:['finanzbuchhaltung','FIBU','extern','marktpartner','bilanz']},
            {label:'B',text:'Detaillierte Bestandsaufnahme der Ist-Bestände auf einen Stichtag hin.',answers:['Inventar'],keywords:['inventar','bestandsaufnahme','stichtag','verzeichnis']},
            {label:'C',text:'Erfassung und Abrechnung aller mit dem Personal zusammenhängender Aufwendungen.',answers:['Lohnbuchhaltung'],keywords:['lohnbuchhaltung','personal','löhne','sozialversicherung']},
            {label:'D',text:'Zeigt die Herkunft und Verwendung der finanziellen Mittel auf.',answers:['Geldflussrechnung','Mittelflussrechnung','Kapitalflussrechnung'],keywords:['geldflussrechnung','mittelfluss','herkunft','verwendung','liquidität']},
            {label:'E',text:'Auswertung von Abschlussrechnungen mit Kennzahlen.',answers:['Bilanz- und Erfolgsanalyse','Bilanzanalyse','Bilanz und Erfolgsanalyse'],keywords:['bilanzanalyse','erfolgsanalyse','kennzahlen','auswertung']},
            {label:'F',text:'(...) dient in erster Linie der Führung des Unternehmens mit Zahlen.',answers:['Betriebsbuchhaltung','BEBU','Betriebsbuchaltung'],keywords:['betriebsbuchhaltung','BEBU','intern','führung','kosten']}
          ],
          tips: ['Die Finanzbuchhaltung bildet den Verkehr mit externen Partnern ab.','Die Geldflussrechnung zeigt die Liquiditätsentwicklung.','Die Betriebsbuchhaltung dient der internen Führung.'],
          reveal: ['A) Finanzbuchhaltung (FIBU): Bildet den Verkehr mit Marktpartnern ab. Warum «extern»? Weil Bilanz und ER für Dritte (Banken, Aktionäre, Steuerbehörden) erstellt werden. B) Inventar: Die physische Bestandsaufnahme auf einen Stichtag. Nicht verwechseln mit «Inventur» (= der Vorgang des Zählens).','C) Lohnbuchhaltung: Eine Hilfsrechnung für alle Personalkosten (Löhne, Sozialversicherungen, Spesen). D) Geldflussrechnung: Zeigt Mittelherkunft und -verwendung. Prüfungstipp: Die GFR ist seit 2013 (OR 961d) für grössere Unternehmen Pflicht.','E) Bilanz- und Erfolgsanalyse: Wertet die Abschlussrechnungen mit Kennzahlen aus (z.B. Eigenkapitalquote, Liquiditätsgrade). F) Betriebsbuchhaltung (BEBU): Dient der internen Steuerung mit Zahlen. Häufiger Fehler: BEBU ≠ FIBU! Die BEBU ist freiwillig, die FIBU ist gesetzlich vorgeschrieben.']
        },
        {
          id: 5,
          type: 'mc',
          q: 'Multiple Choice – Grundlagen des Rechnungswesens',
          questions: [
            {id:'a', q:'Welche Aussage trifft auf die Finanzbuchhaltung zu?', options:['Sie dient ausschliesslich der internen Unternehmensführung.','Sie erstellt Bilanz und Erfolgsrechnung für externe Anspruchsgruppen.','Sie erfasst nur die Kosten der Produktion.','Sie ist eine Hilfsrechnung der Betriebsbuchhaltung.'], answer:1},
            {id:'b', q:'Was ist KEINE Nebenbuchhaltung (Hilfsrechnung)?', options:['Debitorenbuchhaltung','Kreditorenbuchhaltung','Erfolgsrechnung','Lohnbuchhaltung'], answer:2},
            {id:'c', q:'Welche Aufgabe hat die Betriebsbuchhaltung primär?', options:['Erstellung der Steuererklärung','Interne Führung des Unternehmens mit Zahlen','Verwaltung der Kundenrechnungen','Erstellung der Bilanz für die Bank'], answer:1}
          ],
          tips: ['Die FIBU ist extern orientiert, die BEBU intern.','Nebenbuchhaltungen sind Hilfsrechnungen – sie stehen neben der Hauptbuchhaltung.','Die BEBU liefert Zahlen für Kalkulation und interne Entscheidungen.'],
          reveal: ['A) Richtig ist: «Sie erstellt Bilanz und ER für externe Anspruchsgruppen.» Warum? Die FIBU (= finanzielles RW) richtet sich an Dritte wie Banken, Steuerbehörden, Aktionäre. Häufiger Fehler: Intern ist die BEBU zuständig, nicht die FIBU.','B) Die Erfolgsrechnung ist KEINE Hilfsrechnung, sondern ein Hauptbestandteil der FIBU. Warum? Hilfsrechnungen (Debitoren, Kreditoren, Lohn) liefern Detaildaten an die Hauptbuchhaltung – die ER ist selbst Teil des Hauptabschlusses.','C) Die BEBU dient primär der internen Führung mit Zahlen (Kostenrechnung, Kalkulation). Prüfungstipp: FIBU = extern + gesetzlich vorgeschrieben, BEBU = intern + freiwillig.']
        },
        {
          id: 6,
          type: 'sort',
          q: 'Sortieren Sie die Bereiche des Rechnungswesens nach ihrer hierarchischen Einordnung – vom übergeordneten Oberbegriff bis zur spezifischen Hilfsrechnung.',
          items: ['Rechnungswesen (Oberbegriff)','Finanzbuchhaltung (Hauptbereich extern)','Betriebsbuchhaltung (Hauptbereich intern)','Nebenbuchhaltungen (Hilfsrechnungen)','Auswertungen (Bilanz- und Erfolgsanalyse)'],
          correctOrder: [0,1,2,3,4],
          tips: ['Das Rechnungswesen ist der Oberbegriff für alles.','FIBU und BEBU sind die zwei Hauptbereiche.','Hilfsrechnungen und Auswertungen unterstützen die Hauptbereiche.'],
          reveal: ['An der Spitze steht das Rechnungswesen als Oberbegriff. Es gliedert sich in die zwei Hauptbereiche FIBU (extern) und BEBU (intern). Warum diese Reihenfolge? Die FIBU kommt vor der BEBU, weil sie die gesetzlich vorgeschriebene Grundlage bildet, auf der die BEBU aufbaut.','Nebenbuchhaltungen (Hilfsrechnungen) unterstützen die Hauptbuchhaltung mit Detaildaten. Auswertungen wie die Bilanz- und Erfolgsanalyse stehen am Ende, weil sie erst möglich sind, wenn die FIBU ihren Abschluss erstellt hat. Merkhilfe: Vom Allgemeinen zum Spezifischen – wie ein Organigramm.']
        },
        {
          id: 7,
          type: 'tf',
          q: 'Richtig oder falsch? – Funktionen und Grenzen des Rechnungswesens',
          statements: [
            {s:'Die Geldflussrechnung ist seit 2013 für grössere Unternehmen in der Schweiz Pflicht (OR 961d).', c: true},
            {s:'Die Betriebsbuchhaltung ist für alle Schweizer Unternehmen gesetzlich vorgeschrieben.', c: false, reason:'Die BEBU ist freiwillig und dient der internen Steuerung. Nur die FIBU ist gesetzlich vorgeschrieben.'},
            {s:'Das Inventar ist die detaillierte Bestandsaufnahme aller Vermögenswerte und Schulden auf einen Stichtag.', c: true},
            {s:'Die Finanzbuchhaltung liefert Informationen ausschliesslich für das Management des Unternehmens.', c: false, reason:'Die FIBU richtet sich primär an externe Anspruchsgruppen (Aktionäre, Banken, Steuerbehörden). Die BEBU ist für das interne Management.'},
            {s:'Kennzahlen wie die Eigenkapitalquote werden aus den Daten der Finanzbuchhaltung berechnet.', c: true},
            {s:'Die Lagerbuchhaltung ist ein Hauptbereich des Rechnungswesens.', c: false, reason:'Die Lagerbuchhaltung ist eine Nebenbuchhaltung (Hilfsrechnung), kein Hauptbereich.'}
          ],
          tips: ['Die FIBU ist extern und gesetzlich vorgeschrieben, die BEBU ist intern und freiwillig.','Hilfsrechnungen wie Lager-, Debitoren- und Kreditorenbuchhaltung sind keine Hauptbereiche.','Das Inventar ist eine Bestandsaufnahme, die Inventur ist der Vorgang des Zählens.'],
          reveal: ['Richtig: Die GFR ist seit 2013 für grössere Unternehmen Pflicht (OR 961d). Das Inventar ist die Bestandsaufnahme auf einen Stichtag. Kennzahlen werden aus FIBU-Daten berechnet. Warum? Weil die FIBU die einzige gesetzlich geregelte, standardisierte Datenquelle ist.','Falsch: Die BEBU ist NICHT vorgeschrieben – sie ist freiwillig und dient der internen Steuerung. Die FIBU richtet sich NICHT nur ans Management, sondern primär an externe Anspruchsgruppen. Die Lagerbuchhaltung ist eine Hilfsrechnung, KEIN Hauptbereich. Prüfungstipp: Nur FIBU und BEBU sind Hauptbereiche – alles andere sind Hilfsrechnungen oder Auswertungen.']
        },
        {
          id: 8,
          type: 'mc',
          q: 'Multiple Choice – Abgrenzungen und Zusammenhänge im Rechnungswesen',
          questions: [
            {id:'a', q:'Welches Element gehört NICHT zur Jahresrechnung gemäss OR?', options:['Bilanz','Erfolgsrechnung','Betriebsbuchhaltung','Anhang'], answer:2},
            {id:'b', q:'Was unterscheidet das Inventar von der Bilanz?', options:['Das Inventar ist detaillierter als die Bilanz.','Die Bilanz ist detaillierter als das Inventar.','Inventar und Bilanz sind identisch.','Das Inventar zeigt nur die Schulden.'], answer:0},
            {id:'c', q:'Für wen erstellt die Finanzbuchhaltung primär ihre Abschlüsse?', options:['Nur für die Geschäftsleitung','Nur für die Steuerbehörden','Für externe Anspruchsgruppen (Aktionäre, Banken, Steuerbehörden)','Nur für die Mitarbeitenden'], answer:2}
          ],
          tips: ['Die Jahresrechnung besteht aus Bilanz, Erfolgsrechnung und Anhang.','Das Inventar ist die detaillierte Liste, die Bilanz ist die zusammengefasste Darstellung.','Die FIBU richtet sich an verschiedene externe Anspruchsgruppen.'],
          reveal: ['A) Die BEBU gehört NICHT zur Jahresrechnung. Warum? Die Jahresrechnung (OR 958) besteht aus Bilanz, ER und Anhang – das sind Pflichtbestandteile der FIBU. Die BEBU ist intern und freiwillig.','B) Das Inventar ist detaillierter als die Bilanz. Warum? Das Inventar listet jeden einzelnen Vermögenswert auf (z.B. jedes Fahrzeug), die Bilanz fasst zusammen (z.B. «Fahrzeuge CHF 120 000»). Merkhilfe: Inventar = die lange Liste, Bilanz = die kurze Zusammenfassung.','C) Die FIBU richtet sich an externe Anspruchsgruppen: Aktionäre, Banken, Steuerbehörden, Gläubiger. Häufiger Fehler: «Nur für die Steuerbehörden» ist zu eng gefasst.']
        },
        {
          id: 9,
          type: 'fill',
          q: 'Lückentext – Gesetzliche Grundlagen und Pflichten im Rechnungswesen',
          template: 'Die {0} (OR 957 ff.) regelt die Pflichten der Rechnungslegung in der Schweiz. Jede Unternehmung muss mindestens eine {1}, eine {2} und einen {3} erstellen. Grössere Unternehmen müssen zusätzlich eine {4} und einen {5} vorlegen.\n\nDie Buchführung muss die {6} Lage des Unternehmens darstellen. Dabei gelten Grundsätze wie {7}, Wesentlichkeit und {8}.',
          blanks: [['Rechnungslegung','Rechnungslegungsvorschriften'],['Bilanz'],['Erfolgsrechnung'],['Anhang'],['Geldflussrechnung'],['Lagebericht'],['wirtschaftliche'],['Vollständigkeit'],['Vorsicht','Vorsichtsprinzip']],
          tips: ['Die Jahresrechnung umfasst Bilanz, ER und Anhang.','Grössere Unternehmen brauchen zusätzlich GFR und Lagebericht.','Die Grundsätze ordnungsmässiger Rechnungslegung (GoR) sind im OR verankert.'],
          reveal: ['Die Rechnungslegungsvorschriften (OR 957 ff.) sind die gesetzliche Basis. Jede Unternehmung muss Bilanz, Erfolgsrechnung und Anhang erstellen. Warum der Anhang? Er erklärt die angewandten Bewertungsgrundsätze und liefert Zusatzinformationen.','Grössere Unternehmen (Umsatz > CHF 40 Mio., Bilanzsumme > CHF 20 Mio., > 250 Mitarbeitende) müssen zusätzlich eine Geldflussrechnung und einen Lagebericht vorlegen.','Die Buchführung muss die wirtschaftliche Lage darstellen. Die GoR-Grundsätze (Vollständigkeit, Vorsicht, Wesentlichkeit, Klarheit) sollen sicherstellen, dass Abschlüsse vergleichbar und verlässlich sind. Prüfungstipp: Das Vorsichtsprinzip ist zentral – im Zweifel werden Vermögenswerte eher tiefer und Schulden eher höher angesetzt.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die zwei Hauptbereiche des Rechnungswesens unterscheiden (FIBU und BEBU)',
            'Die Rolle der Nebenbuchhaltungen (Hilfsrechnungen) kennen',
            'Die Funktion des Rechnungswesens im Unternehmen verstehen'
          ]},
          { type: 'concept', title: 'Zwei Hauptbereiche', content: 'Das Rechnungswesen gliedert sich in zwei Hauptbereiche: Das finanzielle Rechnungswesen (externer Abschluss mit Bilanz und Erfolgsrechnung) und das betriebliche Rechnungswesen (interner Abschluss mit der Erfassung der Kosten).', highlight: 'Finanzbuchhaltung = extern, Betriebsbuchhaltung = intern' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Finanzbuchhaltung (FIBU)', def: 'Externer Abschluss: Bilanz und Erfolgsrechnung. Bildet den Verkehr mit Marktpartnern ab.' },
            { term: 'Betriebsbuchhaltung (BEBU)', def: 'Interner Abschluss. Dient der Führung des Unternehmens mit Zahlen.' },
            { term: 'Nebenbuchhaltungen', def: 'Hilfsrechnungen wie Debitoren-, Kreditoren- und Lohnbuchhaltung.' },
            { term: 'Inventar', def: 'Detaillierte Bestandsaufnahme der Ist-Bestände auf einen Stichtag.' },
            { term: 'Geldflussrechnung', def: 'Zeigt die Herkunft und Verwendung der finanziellen Mittel (dritte Abschlussrechnung).' },
            { term: 'Bilanz- und Erfolgsanalyse', def: 'Auswertung von Abschlussrechnungen mit Kennzahlen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Das Rechnungswesen erfüllt im Unternehmen eine wichtige Grundlage für die Planung, Entscheidung, Kontrolle und Führung. Die Buchhaltung erfasst nur zahlenmässig erfassbare Geschäftsvorgänge.' },
          { type: 'svg', title: 'Uebersicht Rechnungswesen', svg: '<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><rect x="5" y="5" width="710" height="370" rx="12" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="360" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="#3b82f6">Bereiche des Rechnungswesens</text><rect x="220" y="50" width="280" height="40" rx="8" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="2"/><text x="360" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">Rechnungswesen</text><line x1="240" y1="90" x2="140" y2="120" stroke="#3b82f6" stroke-width="1.5"/><line x1="360" y1="90" x2="360" y2="120" stroke="#3b82f6" stroke-width="1.5"/><line x1="480" y1="90" x2="580" y2="120" stroke="#3b82f6" stroke-width="1.5"/><rect x="30" y="120" width="210" height="105" rx="8" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1.5"/><text x="135" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">Finanzbuchhaltung</text><text x="135" y="158" text-anchor="middle" font-size="11" fill="#1e40af">(FIBU – extern)</text><text x="135" y="180" text-anchor="middle" font-size="11" fill="#374151">Bilanz</text><text x="135" y="198" text-anchor="middle" font-size="11" fill="#374151">Erfolgsrechnung</text><text x="135" y="216" text-anchor="middle" font-size="11" fill="#374151">Geldflussrechnung</text><rect x="255" y="120" width="210" height="105" rx="8" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1.5"/><text x="360" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">Betriebsbuchhaltung</text><text x="360" y="158" text-anchor="middle" font-size="11" fill="#1e40af">(BEBU – intern)</text><text x="360" y="180" text-anchor="middle" font-size="11" fill="#374151">Kostenartenrechnung</text><text x="360" y="198" text-anchor="middle" font-size="11" fill="#374151">Kostenstellenrechnung</text><text x="360" y="216" text-anchor="middle" font-size="11" fill="#374151">Kalkulation</text><rect x="480" y="120" width="210" height="105" rx="8" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1.5"/><text x="585" y="142" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">Planungsrechnung</text><text x="585" y="158" text-anchor="middle" font-size="11" fill="#1e40af">(Controlling)</text><text x="585" y="180" text-anchor="middle" font-size="11" fill="#374151">Budgetierung</text><text x="585" y="198" text-anchor="middle" font-size="11" fill="#374151">Soll-Ist-Vergleich</text><text x="585" y="216" text-anchor="middle" font-size="11" fill="#374151">Investitionsrechnung</text><rect x="30" y="245" width="660" height="50" rx="8" fill="#3b82f6" fill-opacity="0.05" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/><text x="360" y="267" text-anchor="middle" font-size="13" font-weight="600" fill="#1e40af">Hilfsrechnungen (Nebenbuchhaltungen)</text><text x="360" y="285" text-anchor="middle" font-size="11" fill="#374151">Debitorenbuchhaltung | Kreditorenbuchhaltung | Lohnbuchhaltung | Anlagenbuchhaltung | Lagerbuchhaltung</text><rect x="100" y="315" width="520" height="40" rx="8" fill="#3b82f6" fill-opacity="0.05" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4,3"/><text x="360" y="337" text-anchor="middle" font-size="13" font-weight="600" fill="#1e40af">Auswertung / Ergaenzungen</text><text x="360" y="352" text-anchor="middle" font-size="11" fill="#374151">Bilanz- und Erfolgsanalyse | Kennzahlen | Konzernrechnung | Statistiken</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Zwei Hauptbereiche: Finanzbuchhaltung (extern) und Betriebsbuchhaltung (intern)',
            'Nebenbuchhaltungen (Debitoren, Kreditoren, Lohn) unterstützen die Hauptbuchhaltung',
            'Rechnungswesen ≠ Buchhaltung – RW ist der Oberbegriff',
            'Funktion: Grundlage für Planung, Entscheidung, Kontrolle und Führung'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 2: Bilanz – Ausweis von Vermögen und Schulden
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch2',
      num: 'Kapitel 2',
      title: 'Bilanz – Ausweis von Vermögen und Schulden',
      exercises: [
        { id: 10, type: 'fill', q: 'Lückentext – Aussagen zur Bilanz', tips: ['Die Bilanz zeigt Vermögen und Kapital zu einem bestimmten Zeitpunkt.','Aktiven = Vermögen (UV + AV), Passiven = Kapital (FK + EK).','Aktivseite = Mittelverwendung, Passivseite = Mittelherkunft.'], reveal: ['Die Bilanz ist eine Gegenüberstellung von Vermögen und Kapital auf einen Stichtag. Warum «Stichtag»? Weil die Bilanz eine Momentaufnahme zeigt (Zeitpunktrechnung), nicht einen Zeitraum.','Aktivseite = Mittelverwendung (wohin fliesst das Geld?): Umlaufvermögen (kurzfristig) und Anlagevermögen (langfristig). Passivseite = Mittelherkunft (woher kommt das Geld?): Fremdkapital und Eigenkapital.','Prüfungstipp: Die Bilanzgleichung lautet immer Aktiven = Passiven bzw. Vermögen = FK + EK. Diese Gleichung muss IMMER stimmen – sonst ist ein Fehler passiert.'], template: 'Die Bilanz ist eine {0} von {1} und Kapital auf einen bestimmten {2}. Die {3} zeigt die Verwendung des {4}: {5} (kurzfristig) und {6} (langfristig). Die {7} zeigt die Herkunft des Kapitals: {8} und {9}. Die {10} wird auch als Seite der Mittelherkunft des {11} bezeichnet.', blanks: [['Gegenüberstellung'],['Vermögen'],['Stichtag'],['Aktivseite'],['Vermögens'],['Umlaufvermögen'],['Anlagevermögen'],['Passivseite'],['Fremdkapital'],['Eigenkapital'],['Passivseite'],['Kapitals']] },
        { id: 11, type: 'tf', q: 'Richtig oder falsch? – Zusammenhänge in der Bilanz', tips: ['Die goldene Bilanzregel: Langfristiges Kapital ≥ Anlagevermögen.','Eigenkapital = Aktiven − Fremdkapital (immer!).','Rechtsformtypische EK-Posten: AG hat Aktienkapital, EU hat Eigenkapital.'], reveal: ['Richtig: AV und EK sind langfristig gebunden. EK = Aktiven − FK gilt IMMER, unabhängig von der Unternehmensgrösse oder Branche. Warum? Es ist eine mathematische Identität, keine Regel.','Falsch: FK ist NICHT immer höher als EK. Viele gut finanzierte KMU haben mehr EK als FK. Häufiger Fehler in der Prüfung: FK > EK ist typisch, aber keine Regel!','Richtig: Positives Nettoumlaufvermögen (UV − kurzfr. FK > 0) bei Einhaltung der goldenen Bilanzregel. Falsch: Die goldene Bilanzregel verlangt, dass langfristiges Kapital (EK + langfr. FK) ≥ AV – NICHT nur EK ≥ AV. Prüfungstipp: Das langfristige FK wird oft vergessen!'], statements: [{s:'Anlagevermögen und Eigenkapital zählen zum langfristigen Bereich.', c: true},{s:'Stets gilt: Eigenkapital = Aktiven – Fremdkapital.', c: true},{s:'Das Fremdkapital ist immer höher als das Eigenkapital.', c: false,reason:'Es gibt Unternehmen, bei denen das Eigenkapital höher ist als das Fremdkapital.'},{s:'Das Nettoumlaufvermögen ist positiv, wenn die goldene Bilanzregel eingehalten wird.', c: true},{s:'Der Block Eigenkapital enthält rechtsformtypische Posten.', c: true},{s:'Zur Einhaltung der goldenen Bilanzregel muss das Eigenkapital mindestens so hoch sein wie das Anlagevermögen.', c: false,reason:'Die goldene Bilanzregel besagt, dass das langfristige Kapital (EK + langfr. FK) mindestens so hoch sein muss wie das AV.'}] },
        { id: 12, type: 'calc', q: 'Ergänzung der fehlenden Grösse. Berechnen Sie die fehlende Grösse. Alle Beträge in CHF 1\'000.', tips: ['Grundformel: Vermögen = Fremdkapital + Eigenkapital.','Reinvermögen = Eigenkapital = Vermögen − Schulden.'], reveal: ['Grundformel: Vermögen = FK + EK, also EK = Vermögen − FK. Zeile 1: 570 − 290 = 280. Zeile 4: 600 − 490 = 110. Warum heisst EK auch «Reinvermögen»? Weil es das ist, was nach Abzug aller Schulden übrig bleibt.','Umgekehrt: Vermögen = EK + FK. Zeile 2: 100 + 320 = 420. Zeile 3: 200 + 750 = 950. Prüfungstipp: Immer zuerst die Formel aufschreiben, dann einsetzen. Häufiger Fehler: EK und FK verwechseln oder falsch addieren/subtrahieren.'], calcs: [{label:'Vermögen 570, Schulden 290 → Reinvermögen/EK',answer:280},{label:'Reinvermögen 100, Schulden 320 → Vermögen',answer:420},{label:'Eigenkapital 200, Fremdkapital 750 → Vermögen',answer:950},{label:'Vermögen 600, Fremdkapital 490 → EK',answer:110}] },
        { id: 13, type: 'match', q: 'Zuordnungsaufgabe – Bilanzpositionen. Ordnen Sie jede Position der richtigen Bilanzhauptgruppe zu (UV, AV, FK, EK).', tips: ['UV: Vermögen < 1 Jahr (Kasse, Bank, Forderungen, Vorräte).','AV: Vermögen > 1 Jahr (Immobilien, Maschinen, Fahrzeuge).','FK: Schulden. EK: Aktienkapital, Reserven.'], reveal: ['UV-Positionen: Liquide Mittel, Bankguthaben, Kasse, Post, Forderungen L+L, Wertschriften, Rohmaterial, Fertigfabrikate. Warum UV? Weil diese Werte innerhalb eines Jahres zu Geld werden (kurzfristig gebunden).','AV-Positionen: Fahrzeuge, Büromaschinen, Mobiliar, Immobilien, Aktivdarlehen (> 1 Jahr). Warum AV? Weil sie dem Unternehmen langfristig dienen und nicht zum Verkauf bestimmt sind.','FK-Positionen: Hypotheken, Verbindlichkeiten L+L, Darlehensschulden, Rückstellungen. Warum FK? Weil es Geld ist, das zurückbezahlt werden muss. Häufiger Fehler: Darlehensschulden mit Fälligkeit < 1 Jahr = kurzfristiges FK, NICHT AV!','EK-Positionen: Aktienkapital, Eigenkapital, Reserven. Prüfungstipp: Rückstellungen gehören zum FK (nicht EK!), weil sie wahrscheinliche Verpflichtungen darstellen.'], pairs: [{l:'Liquide Mittel',r:'UV'},{l:'Hypotheken',r:'FK'},{l:'Aktivdarlehen (Fälligkeit in 2 Jahren)',r:'AV'},{l:'Bankguthaben',r:'UV'},{l:'Kasse',r:'UV'},{l:'Aktienkapital',r:'EK'},{l:'Rohmaterial',r:'UV'},{l:'Forderungen aus Lieferungen und Leistungen',r:'UV'},{l:'Verbindlichkeiten aus Lieferungen und Leistungen',r:'FK'},{l:'Fahrzeuge',r:'AV'},{l:'Eigenkapital',r:'EK'},{l:'Büromaschinen und Informatik',r:'AV'},{l:'Mobiliar und Einrichtungen',r:'AV'},{l:'Darlehensschulden (Fälligkeit in 6 Monaten)',r:'FK'},{l:'Reserven',r:'EK'},{l:'Fertigfabrikatebestand',r:'UV'},{l:'Rückstellungen',r:'FK'},{l:'Immobilien',r:'AV'},{l:'Wertschriften',r:'UV'},{l:'Post',r:'UV'},{l:'Maschinen',r:'AV'}], options: ['UV','AV','FK','EK'] },
        { id: 14, type: 'match', q: 'Buchhalterische Kurzbezeichnungen. Wählen Sie den passenden buchhalterischen Begriff.', tips: ['Forderungen aus L+L = offene Kundenrechnungen (Debitoren).','Verbindlichkeiten aus L+L = offene Lieferantenrechnungen (Kreditoren).','Hypothek = Darlehen mit Grundpfand als Sicherheit.'], reveal: ['Flüssige Mittel: Kasse (Bargeld), Bank(guthaben), Post. Warum «flüssig»? Weil sofort verfügbar. Bank(schuld) ist das Gegenteil – ein Kontokorrentkredit, also FK. Häufiger Fehler: Bank kann Aktiv ODER Passiv sein!','Vorräte und Produktion: Warenbestand (Handel), Rohmaterialvorrat (Rohstoffe), Halbfabrikate (in Produktion), Fertigfabrikate (verkaufsbereit). Warum alles UV? Weil zum Verkauf oder Verbrauch bestimmt.','Sachanlagen: Fahrzeuge, Mobiliar (Einrichtung), Maschinen, Immobilien (Liegenschaften). Warum AV? Weil langfristig genutzt und nicht zum Verkauf bestimmt.','Forderungen L+L = offene Kundenrechnungen (Debitoren). Verbindlichkeiten L+L = offene Lieferantenrechnungen (Kreditoren). Aktivdarlehen = an Dritte gewährt (AV). Hypothek = erhalten gegen Grundpfand (FK). Prüfungstipp: «Aktiv»-darlehen = wir sind Gläubiger, also ein Vermögenswert.'], pairs: [{l:'Bargeld in der Kasse',r:'Kasse'},{l:'Schuld auf einem Kontokorrentkonto bei einer Bank',r:'Bank(schuld)'},{l:'Bestand an Transportmitteln',r:'Fahrzeuge'},{l:'Einrichtungsgegenstände im Laden oder Büro',r:'Mobiliar'},{l:'Zwischenprodukte (noch nicht fertiggestellte Produkte)',r:'Halbfabrikate'},{l:'Maschinen für die Erzeugung von Produkten',r:'Maschinen'},{l:'Liegenschaften, die zum Unternehmen gehören',r:'Immobilien'},{l:'Vorräte an Handelswaren',r:'Warenbestand'},{l:'Guthaben bei einer Bank',r:'Bank(guthaben)'},{l:'Noch nicht bezahlte Rechnungen von Lieferanten',r:'Verbindlichkeiten aus L+L'},{l:'Rohstoffe für die Verarbeitung',r:'Rohmaterialvorrat'},{l:'Guthaben bei der Post',r:'Post'},{l:'Fertig erstellte Erzeugnisse zum Verkauf',r:'Fertigfabrikate'},{l:'An einen Dritten gewährtes Darlehen',r:'Aktivdarlehen'},{l:'Erhaltenes Darlehen gegen Verpfändung der Liegenschaft',r:'Hypothek'},{l:'Offene Rechnungen an Kunden',r:'Forderungen aus L+L'}], options: ['Kasse','Bank(schuld)','Fahrzeuge','Mobiliar','Halbfabrikate','Maschinen','Immobilien','Warenbestand','Bank(guthaben)','Verbindlichkeiten aus L+L','Rohmaterialvorrat','Post','Fertigfabrikate','Aktivdarlehen','Hypothek','Forderungen aus L+L'] },
        { id: 15, type: 'text', q: 'Was wird umschrieben? (Bilanzpositionen)', tips: ['Flüssige Mittel = Kasse + Post + Bank.','Bilanzsumme = Total Aktiven = Total Passiven.','Umlaufvermögen = kurzfristig gebundene Vermögenswerte.'], reveal: ['A) Forderungen aus L+L (Debitoren): Offene Kundenrechnungen. B) Bilanzsumme: Total Aktiven = Total Passiven. Warum gleich? Weil jeder Franken Vermögen irgendwo finanziert sein muss. C) Verbindlichkeiten aus L+L (Kreditoren): Offene Lieferantenrechnungen.','D) Umlaufvermögen: Kurzfristig gebundene Werte. E) Post: Guthaben bei PostFinance. F) Flüssige Mittel: Kasse + Post + Bank – die liquidesten Vermögenswerte. G) Fertigfabrikate: Fertige Produkte im Lager, bereit zum Verkauf.','H) Passiven: Bilanzseite mit FK und EK (Mittelherkunft). I) Bilanz: Gegenüberstellung von Vermögen und Kapital. J) Aktiven: Bilanzseite mit dem Vermögen (Mittelverwendung). K) Anlagevermögen: Langfristig gebundenes Sachvermögen. Merkhilfe: Aktiven = «Was haben wir?», Passiven = «Wem gehört es?»'], questions: [{label:'A',text:'Guthaben gegenüber Kunden oder offene Kundenrechnungen.',answers:['Forderungen aus L+L','Forderungen','Debitoren'],keywords:['forderungen','debitoren','kunden','offen']},{label:'B',text:'Bezeichnung für die Summe der Aktiven und der Passiven.',answers:['Bilanzsumme'],keywords:['bilanzsumme','total','aktiven','passiven']},{label:'C',text:'Schulden gegenüber Lieferanten.',answers:['Verbindlichkeiten aus L+L','Kreditoren'],keywords:['verbindlichkeiten','kreditoren','lieferanten','schulden']},{label:'D',text:'Meist kurzfristige Vermögensposten.',answers:['Umlaufvermögen'],keywords:['umlaufvermögen','kurzfristig','UV','vermögen']},{label:'E',text:'Guthaben gegenüber der Post.',answers:['Post'],keywords:['post','guthaben','postfinance']},{label:'F',text:'Kasse, Post, Bank zusammengefasst.',answers:['Flüssige Mittel','Liquide Mittel'],keywords:['flüssige','liquide','kasse','post','bank']},{label:'G',text:'Vorrat an fertiggestellten Produkten.',answers:['Fertigfabrikate'],keywords:['fertigfabrikate','vorrat','fertig','produkte','lager']},{label:'H',text:'Bilanzseite mit Fremdkapital und Eigenkapital.',answers:['Passiven'],keywords:['passiven','fremdkapital','eigenkapital','mittelherkunft']},{label:'I',text:'Gegenüberstellung von Vermögen und Kapital.',answers:['Bilanz'],keywords:['bilanz','gegenüberstellung','vermögen','kapital','stichtag']},{label:'J',text:'Bilanzseite mit dem Vermögen.',answers:['Aktiven'],keywords:['aktiven','vermögen','mittelverwendung']},{label:'K',text:'Längerfristig gebundenes Sachvermögen.',answers:['Anlagevermögen'],keywords:['anlagevermögen','langfristig','AV','sachanlagen']}] },
        { id: 16, type: 'table', q: 'Bilanzpositionen in Bilanzschema einordnen', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" font-family="Inter,sans-serif"><rect x="1" y="1" width="598" height="298" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/><text x="300" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Bilanz</text><line x1="300" y1="38" x2="300" y2="290" stroke="#059669" stroke-width="2"/><line x1="10" y1="38" x2="590" y2="38" stroke="#059669" stroke-width="2"/><text x="155" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Aktiven</text><text x="445" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Passiven</text><line x1="10" y1="62" x2="298" y2="62" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><line x1="302" y1="62" x2="590" y2="62" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="20" y="82" font-size="12" font-weight="600" fill="#059669">Umlaufvermögen (UV)</text><text x="20" y="100" font-size="11" fill="#374151">• Flüssige Mittel</text><text x="20" y="116" font-size="11" fill="#374151">• Forderungen</text><text x="20" y="132" font-size="11" fill="#374151">• Vorräte</text><line x1="20" y1="142" x2="280" y2="142" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="20" y="160" font-size="12" font-weight="600" fill="#059669">Anlagevermögen (AV)</text><text x="20" y="178" font-size="11" fill="#374151">• Mobiliar</text><text x="20" y="194" font-size="11" fill="#374151">• Maschinen / Anlagen</text><text x="310" y="82" font-size="12" font-weight="600" fill="#059669">Kurzfristiges FK</text><text x="310" y="100" font-size="11" fill="#374151">• Verbindlichkeiten L+L</text><text x="310" y="116" font-size="11" fill="#374151">• Bankschulden</text><line x1="310" y1="126" x2="580" y2="126" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="310" y="144" font-size="12" font-weight="600" fill="#059669">Langfristiges FK</text><text x="310" y="162" font-size="11" fill="#374151">• Darlehen</text><line x1="310" y1="172" x2="580" y2="172" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="310" y="190" font-size="12" font-weight="600" fill="#059669">Eigenkapital (EK)</text><text x="310" y="208" font-size="11" fill="#374151">• Aktienkapital</text><text x="310" y="224" font-size="11" fill="#374151">• Reserven</text><line x1="10" y1="260" x2="290" y2="260" stroke="#059669" stroke-width="1.5"/><text x="20" y="278" font-size="12" font-weight="600" fill="#065f46">Total Aktiven</text><line x1="310" y1="260" x2="590" y2="260" stroke="#059669" stroke-width="1.5"/><text x="320" y="278" font-size="12" font-weight="600" fill="#065f46">Total Passiven</text></svg>', tips: ['Aktiven: zuerst UV, dann AV.','Passiven: zuerst FK, dann EK.','Rohmaterial/Fertigfabrikate → UV. Produktionsanlagen → AV.'], reveal: ['Branche: Produktionsbetrieb/Industrie. Warum? Rohmaterial, Halbfabrikate, Fertigfabrikate und Produktionsanlagen deuten auf Herstellung hin. Rechtsform: AG, erkennbar am Aktienkapital und den Reserven.','Bilanzgliederung: Aktiven → UV zuerst (Flüssige Mittel, Forderungen, Vorräte), dann AV (Mobiliar, Produktionsanlagen). Passiven → FK zuerst (Verb. L+L, Bankschuld, Darlehen), dann EK (Aktienkapital, Reserven). Prüfungstipp: Die Reihenfolge ist immer gleich – UV vor AV, FK vor EK.'], correctAktiven: ['Flüssige Mittel','Forderungen aus L+L','Rohmaterial und Halbfabrikate','Fertigfabrikate','Mobiliar und Büroeinrichtungen','Produktionsanlagen'], correctPassiven: ['Verbindlichkeiten aus L+L','Bankschuld','Darlehen (Darlehensschulden)','Aktienkapital','Reserven und Gewinnvortrag'] },
        { id: 17, type: 'table', q: 'Ergänzung der fehlenden Grössen (Papierindustrie)', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 350" font-family="Inter,sans-serif"><rect x="1" y="1" width="648" height="348" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/><text x="325" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Bilanz – Papierindustrie AG</text><line x1="325" y1="36" x2="325" y2="340" stroke="#059669" stroke-width="2"/><line x1="10" y1="36" x2="640" y2="36" stroke="#059669" stroke-width="2"/><text x="168" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Aktiven</text><text x="483" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Passiven</text><line x1="10" y1="60" x2="323" y2="60" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><line x1="327" y1="60" x2="640" y2="60" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="18" y="80" font-size="12" font-weight="600" fill="#059669">Umlaufvermögen</text><text x="18" y="100" font-size="11" fill="#374151">Flüssige Mittel</text><text x="290" y="100" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><text x="18" y="118" font-size="11" fill="#374151">Forderungen L+L</text><text x="290" y="118" text-anchor="end" font-size="11" fill="#374151">172</text><text x="18" y="136" font-size="11" fill="#374151">Vorräte</text><text x="290" y="136" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="240" y1="142" x2="305" y2="142" stroke="#374151" stroke-width="1"/><text x="18" y="158" font-size="11" font-weight="600" fill="#374151">Total UV</text><text x="290" y="158" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="18" y1="168" x2="305" y2="168" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="18" y="188" font-size="12" font-weight="600" fill="#059669">Anlagevermögen</text><text x="18" y="208" font-size="11" fill="#374151">Finanzanlagen</text><text x="290" y="208" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><text x="18" y="226" font-size="11" fill="#374151">Sachanlagen</text><text x="290" y="226" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="240" y1="232" x2="305" y2="232" stroke="#374151" stroke-width="1"/><text x="18" y="248" font-size="11" font-weight="600" fill="#374151">Total AV</text><text x="290" y="248" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><text x="335" y="80" font-size="12" font-weight="600" fill="#059669">Kurzfristiges FK</text><text x="335" y="100" font-size="11" fill="#374151">Verb. L+L</text><text x="615" y="100" text-anchor="end" font-size="11" fill="#374151">81</text><text x="335" y="118" font-size="11" fill="#374151">Bankschulden</text><text x="615" y="118" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><text x="335" y="136" font-size="11" fill="#374151">Rückstellungen</text><text x="615" y="136" text-anchor="end" font-size="11" fill="#374151">60</text><line x1="565" y1="142" x2="630" y2="142" stroke="#374151" stroke-width="1"/><text x="335" y="158" font-size="11" font-weight="600" fill="#374151">Total kurzfr. FK</text><text x="615" y="158" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="335" y1="168" x2="630" y2="168" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="335" y="188" font-size="12" font-weight="600" fill="#059669">Langfristiges FK</text><text x="335" y="208" font-size="11" fill="#374151">Darlehen + Hypotheken</text><text x="615" y="208" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="335" y1="218" x2="630" y2="218" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/><text x="335" y="238" font-size="12" font-weight="600" fill="#059669">Eigenkapital</text><text x="335" y="258" font-size="11" fill="#374151">Aktienkapital</text><text x="615" y="258" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><text x="335" y="276" font-size="11" fill="#374151">Reserven u. Gewinnvortrag</text><text x="615" y="276" text-anchor="end" font-size="11" font-weight="700" fill="#059669">?</text><line x1="10" y1="300" x2="315" y2="300" stroke="#059669" stroke-width="1.5"/><line x1="335" y1="300" x2="640" y2="300" stroke="#059669" stroke-width="1.5"/><text x="18" y="318" font-size="12" font-weight="700" fill="#065f46">Total Aktiven</text><text x="290" y="318" text-anchor="end" font-size="12" font-weight="700" fill="#065f46">625</text><text x="335" y="318" font-size="12" font-weight="700" fill="#065f46">Total Passiven</text><text x="615" y="318" text-anchor="end" font-size="12" font-weight="700" fill="#065f46">625</text></svg>', tips: ['Ordnen Sie alle Posten in die Bilanz ein.','Total Aktiven muss gleich Total Passiven sein.','Finanzanlagen und Sachanlagen gehören zum AV.'], reveal: ['Bilanzgleichung: Total Aktiven = Total Passiven = 625. Flüssige Mittel 90, Forderungen L+L 172, Vorräte 77 (UV = 339). Finanzanlagen 15, Sachanlagen 271 (AV = 286). Warum stimmt es? 339 + 286 = 625.','Passiven: Verb. L+L 81, Bankschulden 25, Rückstellungen 60 (kurzfr. FK = 166). Darlehen + Hypotheken 125 (langfr. FK). Aktienkapital 220, Reserven 114 (EK = 334). Total: 166 + 125 + 334 = 625. Prüfungstipp: Immer Gegenprobe machen – Aktiven = Passiven?'], fields: [{name:'Flüssige Mittel',answer:90},{name:'Vorräte',answer:77},{name:'Finanzanlagen',answer:15},{name:'Sachanlagen',answer:271},{name:'Bankschulden',answer:25},{name:'Darlehensschulden und Hypotheken',answer:125},{name:'Aktienkapital',answer:220},{name:'Reserven u. Gewinnvortrag',answer:114}] },
        { id: 18, type: 'table', q: 'Bilanzen für zwei Unternehmen erstellen', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250" font-family="Inter,sans-serif"><rect x="1" y="1" width="698" height="248" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/><text x="175" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">A) Detailhandel</text><rect x="15" y="32" width="320" height="205" rx="6" fill="none" stroke="#059669" stroke-width="1.5"/><line x1="175" y1="32" x2="175" y2="237" stroke="#059669" stroke-width="1.5"/><line x1="15" y1="55" x2="335" y2="55" stroke="#059669" stroke-width="1.5"/><text x="95" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Aktiven</text><text x="255" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Passiven</text><text x="25" y="75" font-size="10" fill="#374151">UV:</text><text x="25" y="130" font-size="10" fill="#374151">AV:</text><text x="185" y="75" font-size="10" fill="#374151">FK:</text><text x="185" y="170" font-size="10" fill="#374151">EK:</text><line x1="15" y1="210" x2="175" y2="210" stroke="#059669" stroke-width="1"/><line x1="175" y1="210" x2="335" y2="210" stroke="#059669" stroke-width="1"/><text x="25" y="228" font-size="10" font-weight="600" fill="#065f46">Total Aktiven</text><text x="185" y="228" font-size="10" font-weight="600" fill="#065f46">Total Passiven</text><text x="525" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">B) Produktionsbetrieb</text><rect x="365" y="32" width="320" height="205" rx="6" fill="none" stroke="#059669" stroke-width="1.5"/><line x1="525" y1="32" x2="525" y2="237" stroke="#059669" stroke-width="1.5"/><line x1="365" y1="55" x2="685" y2="55" stroke="#059669" stroke-width="1.5"/><text x="445" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Aktiven</text><text x="605" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Passiven</text><text x="375" y="75" font-size="10" fill="#374151">UV:</text><text x="375" y="130" font-size="10" fill="#374151">AV:</text><text x="535" y="75" font-size="10" fill="#374151">FK:</text><text x="535" y="170" font-size="10" fill="#374151">EK:</text><line x1="365" y1="210" x2="525" y2="210" stroke="#059669" stroke-width="1"/><line x1="525" y1="210" x2="685" y2="210" stroke="#059669" stroke-width="1"/><text x="375" y="228" font-size="10" font-weight="600" fill="#065f46">Total Aktiven</text><text x="535" y="228" font-size="10" font-weight="600" fill="#065f46">Total Passiven</text></svg>', tips: ['Berechnen Sie den fehlenden Posten so, dass Aktiven = Passiven.','Waren → Detailhandel. Rohmaterial + Maschinen → Industrie.','Einzelunternehmen: nur «Eigenkapital». AG: Aktienkapital + Reserven.'], reveal: ['A) EK = 610 − 450 = 160. Branche: Detailhandel (Warenvorrat deutet auf Handel). Rechtsform: Einzelunternehmen (nur «Eigenkapital», keine Aktien/Reserven). Warum EU? Weil bei einer AG «Aktienkapital» stehen würde.','B) Bankschuld = 900 − 867 = 33. Branche: Produktionsbetrieb (Rohmaterial, Maschinen). Rechtsform: AG (Aktienkapital + Reserven). Prüfungstipp: Die Rechtsform erkennt man an den EK-Posten: EU = «Eigenkapital», AG = «Aktienkapital + Reserven», GmbH = «Stammkapital».'], partA: {missingField:'Eigenkapital',answer:160,branche:'Detailhandel',rechtsform:'Einzelunternehmen'}, partB: {missingField:'Bankschuld',answer:33,branche:'Produktionsbetrieb',rechtsform:'Aktiengesellschaft (AG)'} },
        { id: 19, type: 'table', q: 'Bilanzen von Dienstleistungsunternehmen', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250" font-family="Inter,sans-serif"><rect x="1" y="1" width="698" height="248" rx="8" fill="#f0fdf4" stroke="#059669" stroke-width="2"/><text x="175" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">A)</text><rect x="15" y="32" width="320" height="205" rx="6" fill="none" stroke="#059669" stroke-width="1.5"/><line x1="175" y1="32" x2="175" y2="237" stroke="#059669" stroke-width="1.5"/><line x1="15" y1="55" x2="335" y2="55" stroke="#059669" stroke-width="1.5"/><text x="95" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Aktiven</text><text x="255" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Passiven</text><text x="25" y="75" font-size="10" fill="#374151">UV:</text><text x="25" y="130" font-size="10" fill="#374151">AV:</text><text x="185" y="75" font-size="10" fill="#374151">FK:</text><text x="185" y="170" font-size="10" fill="#374151">EK:</text><line x1="15" y1="210" x2="175" y2="210" stroke="#059669" stroke-width="1"/><line x1="175" y1="210" x2="335" y2="210" stroke="#059669" stroke-width="1"/><text x="25" y="228" font-size="10" font-weight="600" fill="#065f46">Total Aktiven</text><text x="185" y="228" font-size="10" font-weight="600" fill="#065f46">Total Passiven</text><text x="525" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">B)</text><rect x="365" y="32" width="320" height="205" rx="6" fill="none" stroke="#059669" stroke-width="1.5"/><line x1="525" y1="32" x2="525" y2="237" stroke="#059669" stroke-width="1.5"/><line x1="365" y1="55" x2="685" y2="55" stroke="#059669" stroke-width="1.5"/><text x="445" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Aktiven</text><text x="605" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Passiven</text><text x="375" y="75" font-size="10" fill="#374151">UV:</text><text x="375" y="130" font-size="10" fill="#374151">AV:</text><text x="535" y="75" font-size="10" fill="#374151">FK:</text><text x="535" y="170" font-size="10" fill="#374151">EK:</text><line x1="365" y1="210" x2="525" y2="210" stroke="#059669" stroke-width="1"/><line x1="525" y1="210" x2="685" y2="210" stroke="#059669" stroke-width="1"/><text x="375" y="228" font-size="10" font-weight="600" fill="#065f46">Total Aktiven</text><text x="535" y="228" font-size="10" font-weight="600" fill="#065f46">Total Passiven</text></svg>', tips: ['Vorauszahlungen von Kunden = kurzfristiges Fremdkapital.','Nicht fakturierte DL = UV.','Berechnen Sie die fehlende Position über: Aktiven = Passiven.'], reveal: ['A) Reserven = Total Aktiven − übriges Kapital = 613 − 241 = 372. B) Flüssige Mittel = Total Passiven − übrige Aktiven = 185 − 170 = 15. Warum? Bilanzgleichung: Aktiven = Passiven, also fehlende Position = Total − Summe der bekannten.','Besonderheiten bei Dienstleistungsunternehmen: «Nicht fakturierte Dienstleistungen» = UV (angefangene, aber noch nicht verrechnete Arbeiten). «Vorauszahlungen von Kunden» = kurzfristiges FK. Prüfungstipp: Vorauszahlungen sind Schulden, weil die Leistung noch erbracht werden muss!'], partA: {missingField:'Reserven',answer:372}, partB: {missingField:'Flüssige Mittel',answer:15} },
        { id: 20, type: 'text', q: 'Bilanz lesen und interpretieren. Beantworten Sie die folgenden Fragen zur Bilanzanalyse.', tips: ['Die Bilanz ist eine Zeitpunktrechnung – sie zeigt den Stand an einem Stichtag.','Aktiven zeigen die Mittelverwendung, Passiven die Mittelherkunft.','Umlaufvermögen = kurzfristig, Anlagevermögen = langfristig gebunden.','Eigenkapital = Aktiven − Fremdkapital. Immer die Bilanzgleichung prüfen!'], reveal: ['A) «Flüssige Mittel, Forderungen, Vorräte» → Das ist das Umlaufvermögen (UV). Warum? Diese Positionen sind kurzfristig gebunden und können innert eines Jahres in Bargeld umgewandelt werden. Merkhilfe: UV = alles, was «fliesst» oder sich rasch umschlägt.','B) Die Bilanzsumme sagt aus, wie gross das Unternehmen ist (Gesamtvermögen). Wichtig: Bilanzsumme Aktiven = Bilanzsumme Passiven (Bilanzgleichung). Warum? Jedes Vermögen muss irgendwie finanziert sein.','C) Der Eigenfinanzierungsgrad zeigt den Anteil des Eigenkapitals am Gesamtkapital. Je höher, desto unabhängiger ist das Unternehmen von Fremdkapitalgebern. In der Schweiz gilt ein EFG von mindestens 30–40% als gesund. Warum? Weil genug Puffer da ist, um Verluste aufzufangen.','D) Die goldene Bilanzregel besagt: Langfristiges Kapital (EK + langfr. FK) soll mindestens das Anlagevermögen decken. Warum? Weil langfristig gebundenes Vermögen auch langfristig finanziert sein muss – sonst droht eine Liquiditätskrise.','E) Das Nettoumlaufvermögen (NUV) = UV − kurzfr. FK. Ein positives NUV zeigt, dass das Unternehmen seine kurzfristigen Schulden mit kurzfristigen Mitteln decken kann. Prüfungstipp: NUV < 0 = Warnsignal, die goldene Bilanzregel ist verletzt!'], questions: [{id:'a',q:'Welche Bilanzposition ist gemeint: «Flüssige Mittel, Forderungen und Vorräte»?',keywords:['umlaufvermögen','UV','kurzfristig']},{id:'b',q:'Was sagt die Bilanzsumme über ein Unternehmen aus?',keywords:['grösse','gesamtvermögen','aktiven','passiven','gleichgewicht']},{id:'c',q:'Was zeigt der Eigenfinanzierungsgrad und welcher Wert gilt als gesund?',keywords:['eigenkapital','gesamtkapital','30','40','unabhängig']},{id:'d',q:'Was besagt die goldene Bilanzregel und warum ist sie wichtig?',keywords:['langfristig','anlagevermögen','kapital','finanzierung']},{id:'e',q:'Was ist das Nettoumlaufvermögen (NUV) und was bedeutet ein negativer Wert?',keywords:['UV','kurzfr','FK','warnsignal','liquidität']}] },
        { id: 21, type: 'fill', q: 'Kreuzworträtsel zum Thema Bilanz. Was ist in den Reihen gesucht?', tips: ['Südlich des Gotthards = Italienisch.','«Weniger am Rotieren» = Anlage...','Passiv sitzen = Passiven. Unterm Strich gleich = Bilanzsumme.'], reveal: ['BILANCIA (ital. für Waage): Die Bilanz muss immer im Gleichgewicht sein – Aktiven = Passiven. ANLAGEVERMÖGEN: «Weniger am Rotieren» = langfristig gebunden, dreht sich nicht schnell um wie das UV.','PASSIVEN: Kapitalseite (FK + EK). EIGENKAPITAL: Aktienkapital + Reserven + Gewinnvortrag. FREMDKAPITAL: Schulden gegenüber Dritten.','AKTIVEN: Vermögensposten – sie sind «aktiv» im Einsatz für das Unternehmen. BILANZSUMME: Total Aktiven = Total Passiven – «unterm Strich passt es links wie rechts». Merkhilfe: Die Bilanz ist wie eine Waage (bilancia) – sie muss immer ausgeglichen sein!'], template: '1. Südlich des Gotthards das Sinnbild für die Bilanz: {0}\n2. Auf der Aktivseite viel weniger am Rotieren: {1}\n3. Eine Ansammlung von Couch-Potatoes? Kapital hängt darunter ab: {2}\n4. Aktienkapital, Reserven und Gewinnvortrag gehören dazu: {3}\n5. Solches aufzunehmen, beschönigt der Bankräuber seine Tat: {4}\n6. Vermögensposten; bringen Schwung ins Vereinsleben: {5}\n7. Unterm Strich passt es links wie rechts: {6}', blanks: [['bilancia','Bilancia','BILANCIA'],['anlagevermoegen','anlagevermögen','Anlagevermögen','ANLAGEVERMÖGEN'],['passiven','Passiven','PASSIVEN'],['eigenkapital','Eigenkapital','EIGENKAPITAL'],['fremdkapital','Fremdkapital','FREMDKAPITAL'],['aktiven','Aktiven','AKTIVEN'],['bilanzsumme','Bilanzsumme','BILANZSUMME']] },
        {
          id: 22,
          type: 'sort',
          q: 'Sortieren Sie die folgenden Bilanzpositionen nach abnehmender Liquidität (am liquidesten zuerst).',
          items: ['Kasse (Bargeld)','Bankguthaben','Forderungen aus L+L','Warenvorrat','Mobiliar und Einrichtungen','Immobilien'],
          correctOrder: [0,1,2,3,4,5],
          tips: ['Liquidität = wie schnell kann ein Vermögenswert in Bargeld umgewandelt werden?','Kasse ist das liquideste – es IST bereits Bargeld.','Immobilien sind am wenigsten liquide – ein Verkauf dauert Monate.'],
          reveal: ['Kasse → Bank → Forderungen → Vorräte → Mobiliar → Immobilien. Warum diese Reihenfolge? Es geht um die Umwandlungsgeschwindigkeit in Bargeld. Kasse IST Bargeld. Bankguthaben kann sofort abgehoben werden. Forderungen werden innert 30-60 Tagen bezahlt.','Vorräte müssen zuerst verkauft werden. Mobiliar ist langfristig gebunden und hat einen begrenzten Wiederverkaufsmarkt. Immobilien sind am wenigsten liquide – ein Verkauf kann Monate dauern. Prüfungstipp: Die Bilanz-Gliederung folgt genau dieser Liquiditätsreihenfolge (UV → AV). Merkhilfe: Je weiter unten in der Bilanz, desto «eingefrorener» ist das Vermögen.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Aufbau und die Struktur einer Bilanz verstehen',
            'Bilanzpositionen den Hauptgruppen zuordnen (UV, AV, FK, EK)',
            'Die goldene Bilanzregel anwenden können',
            'Bilanzen für verschiedene Unternehmenstypen erstellen'
          ]},
          { type: 'concept', title: 'Aufbau der Bilanz', content: 'Die Bilanz ist eine summarische Gegenüberstellung von Vermögen und Kapital an einem Stichtag. Die Aktivseite zeigt die Zusammensetzung des Vermögens (Mittelverwendung), die Passivseite zeigt die Zusammensetzung des Kapitals (Mittelherkunft).', highlight: 'Aktiven = Vermögen, Passiven = Kapital (FK + EK)' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Umlaufvermögen (UV)', def: 'Kurzfristig gebundene Vermögenswerte: Kasse, Bank, Forderungen, Vorräte.' },
            { term: 'Anlagevermögen (AV)', def: 'Langfristig gebundene Vermögenswerte: Immobilien, Maschinen, Fahrzeuge.' },
            { term: 'Fremdkapital (FK)', def: 'Schulden des Unternehmens: Verbindlichkeiten, Darlehen, Hypotheken, Rückstellungen.' },
            { term: 'Eigenkapital (EK)', def: 'Eigene Mittel: Aktienkapital, Reserven, Gewinnvortrag. EK = Aktiven − FK.' },
            { term: 'Bilanzsumme', def: 'Total Aktiven = Total Passiven. Stets im Gleichgewicht.' },
            { term: 'Goldene Bilanzregel', def: 'Langfristiges Kapital (EK + langfr. FK) soll mindestens so hoch sein wie das Anlagevermögen.' },
            { term: 'Nettoumlaufvermögen', def: 'UV − kurzfristiges FK. Ist positiv, wenn die goldene Bilanzregel eingehalten wird.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Stets gilt: Eigenkapital = Aktiven − Fremdkapital. Das Fremdkapital ist NICHT immer höher als das Eigenkapital. Die Bilanz ist eine Zeitpunktrechnung (Stichtag).' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aktiven: zuerst UV (Liquiditätsreihenfolge), dann AV',
            'Passiven: zuerst FK (kurzfr. vor langfr.), dann EK',
            'Rechtsformtypische EK-Posten: AG → Aktienkapital + Reserven, EU → Eigenkapital',
            'Bilanzgleichung: Vermögen = Fremdkapital + Eigenkapital'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 3: Erfolgsrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch3',
      num: 'Kapitel 3',
      title: 'Erfolgsrechnung: Ausweis von Ertrag, Aufwand und Erfolg',
      exercises: [
        { id: 23, type: 'fill', q: 'Lückentext: Erfolgsrechnung', tips: ['Aufwand = Wertverzehr.','Die ER bezieht sich auf einen Zeitraum.','Geschäftsberichte nutzen meist die Staffelform.'], reveal: ['Aufwand = Wertverzehr: Einseitige Abnahme des Vermögens oder einseitige Zunahme der Schulden. Warum «einseitig»? Weil keine Gegenleistung (Ertrag) entsteht – das Unternehmen wird ärmer.','Die ER ist eine Zeitraumrechnung (z.B. 1.1.–31.12.), im Gegensatz zur Bilanz (Zeitpunktrechnung). In Geschäftsberichten wird die Staffelform (Berichtsform) verwendet, im Unterricht oft die Kontoform (T-Form).','Ertrag = Wertzuwachs: Einseitige Zunahme des Vermögens oder Abnahme der Schulden. Prüfungstipp: Aufwand und Ertrag sind immer erfolgswirksam – sie verändern den Gewinn/Verlust. Häufiger Fehler: «Ausgabe» ≠ «Aufwand» (z.B. Kauf einer Maschine = Ausgabe, aber kein Aufwand).'], template: 'Aufwand bedeutet eine einseitige {0} des Vermögens oder eine einseitige {1} der Schulden. Der allgemeine Ausdruck für den Wertverzehr heisst {2}. Die Erfolgsrechnung bezieht sich immer auf einen Zeit{3}. In Geschäftsberichten wird die ER meist in der {4} dargestellt. Ertrag bedeutet einen {5}: eine einseitige {6} des Vermögens oder eine einseitige {7} der Schulden.', blanks: [['Abnahme'],['Zunahme'],['Aufwand'],['raum'],['Berichtsform','Staffelform'],['Wertzuwachs'],['Zunahme'],['Abnahme']] },
        { id: 24, type: 'tf', q: 'Richtig oder falsch? Erfolgsrechnung', tips: ['Erfolg kann Gewinn ODER Verlust sein.','EBIT = Betriebsergebnis.'], reveal: ['Richtig: Gewinn = Ertragsüberschuss (Ertrag > Aufwand). Bruttogewinn ist ein Zwischenergebnis der gestuften ER. Der EBIT dient zum Branchenvergleich, weil er Finanzierung und Steuern ausklammert.','Falsch: «Erfolg» ist der Oberbegriff (nicht Gewinn!). Warum? Erfolg kann Gewinn ODER Verlust sein. Eine gestufte ER hat NICHT immer drei Stufen – die Stufung variiert je nach Unternehmen (zwei- oder dreistufig).','Falsch: In Geschäftsberichten wird die ER in der Berichtsform/Staffelform dargestellt, NICHT in der Kontoform. Warum? Die Staffelform zeigt die Zwischenergebnisse übersichtlicher. Richtig: «Betrieblich» und «neutral» ist eine einfache Stufung. Prüfungstipp: Kontoform = T-Form (Aufwand links, Ertrag rechts) – nur im Unterricht üblich.'], statements: [{s:'Gewinn bedeutet in der ER einen Ertragsüberschuss.', c: true},{s:'Gewinn ist der allgemeine Ausdruck für den Saldo der ER.', c: false,reason:'Der allgemeine Ausdruck ist «Erfolg».'},{s:'Eine gestufte ER hat immer drei Stufen.', c: false,reason:'Die Stufung variiert.'},{s:'Bruttogewinn ist ein Ergebnis in einer gestuften ER.', c: true},{s:'Der EBIT dient zum Vergleich betrieblicher Ergebnisse.', c: true},{s:'In Geschäftsberichten findet man die ER meist in Kontoform.', c: false,reason:'Meist in Berichtsform.'},{s:'Eine einfache Stufung ist «betrieblich» und «neutral».', c: true}] },
        { id: 25, type: 'table', q: 'Bezeichnung für Aufwand bzw. Ertrag. Bestimmen Sie A/E und die buchhalterische Bezeichnung.', tips: ['Aufwand = Wertverbrauch. Ertrag = Wertschöpfung.','Personal → Lohnaufwand. Miete → Raumaufwand.'], reveal: ['Aufwandspositionen: Personalaufwand (Löhne, Sozialversicherungen), Warenaufwand/Materialaufwand (Einkauf), Raumaufwand (Miete), Finanzaufwand (Darlehenszinsen), Abschreibungen, Energieaufwand, Unterhalt, Werbeaufwand, Verwaltungsaufwand. Warum alles Aufwand? Weil ein Wertverzehr stattfindet – das Unternehmen gibt Werte ab.','Ertragspositionen: Finanzertrag (Bankzinsen), Dienstleistungsertrag, Handelserlös/Warenertrag, Immobilienertrag (Vermietung), Produktionserlös. Warum Ertrag? Weil ein Wertzuwachs stattfindet – das Unternehmen nimmt Werte ein.','Prüfungstipp: Die Bezeichnung verrät oft die Kontenart. «...aufwand» = Aufwand, «...ertrag/...erlös» = Ertrag. Häufiger Fehler: Zinsertrag (Gutschrift auf Bankguthaben) vs. Zinsaufwand (Zahlung auf Darlehen) verwechseln.'], items: [{s:'Löhne und Beiträge an Sozialversicherungen',ae:'A',bez:['Personalaufwand']},{s:'Zins auf Bankguthaben gutgeschrieben',ae:'E',bez:['Finanzertrag','Zinsertrag']},{s:'Handelswaren gekauft und verbraucht',ae:'A',bez:['Handelswarenaufwand','Warenaufwand']},{s:'Rechnung für Dienstleistungen',ae:'E',bez:['Dienstleistungsertrag']},{s:'Material für Herstellung verbraucht',ae:'A',bez:['Materialaufwand']},{s:'Miete für Räumlichkeiten',ae:'A',bez:['Raumaufwand']},{s:'Zins für Darlehen bezahlt',ae:'A',bez:['Finanzaufwand','Zinsaufwand']},{s:'Handelswaren verkauft',ae:'E',bez:['Handelserlös','Warenertrag']},{s:'Abschreibungen auf Anlagegüter',ae:'A',bez:['Abschreibungen']},{s:'Räumlichkeiten vermietet',ae:'E',bez:['Immobilienertrag']},{s:'Selbst hergestellte Waren verkauft',ae:'E',bez:['Produktionserlös']},{s:'Elektrizität/Heizöl verbraucht',ae:'A',bez:['Energieaufwand']},{s:'Anlagegüter reparieren lassen',ae:'A',bez:['Unterhalt und Reparaturen']},{s:'Verwaltungsaufwand',ae:'A',bez:['Verwaltungsaufwand']},{s:'Inserate, Prospekte bezahlt',ae:'A',bez:['Werbeaufwand']},{s:'Sonstiger betrieblicher Aufwand',ae:'A',bez:['Sonstiger betrieblicher Aufwand']},{s:'Sonstiger betrieblicher Ertrag',ae:'E',bez:['Sonstiger betrieblicher Ertrag']},{s:'Betriebsfremde Erträge',ae:'E',bez:['Betriebsfremder Ertrag']},{s:'Ausserordentlicher Aufwand',ae:'A',bez:['Ausserordentlicher Aufwand']}] },
        { id: 26, type: 'text', q: 'Das Geschäft eines Unternehmens abbilden. Ertrags- und Aufwandsposten pro Branche.', tips: ['Der wichtigste Ertrag zeigt, was das Unternehmen verkauft.','Handel: Warenertrag. Industrie: Produktionserlöse.'], reveal: ['Handel: Warenertrag/Handelserlöse als Hauptertrag, Warenaufwand als grösster Aufwand. Industrie: Produktionserlöse, Material- und Energieaufwand. Warum unterschiedlich? Der Hauptertrag zeigt, was das Unternehmen verkauft – und der Hauptaufwand, was es dafür einsetzt.','Dienstleistung/Beratung: Dienstleistungs- bzw. Honorarertrag, Personalaufwand dominant (weil Menschen die «Maschinen» sind). Transport: Transportertrag, Treibstoff-/Fahrzeugaufwand. Banken: Zins- und Kommissionsertrag. Versicherungen: Prämienertrag, Schadenaufwand.','Prüfungstipp: An den typischen Erträgen und Aufwänden erkennt man die Branche. Wenn «Materialaufwand» und «Produktionserlös» auftauchen → Industrie. Wenn nur «Personalaufwand» und «Honorarertrag» → Beratung/DL.'], branches: [{name:'Handelsunternehmen',ertrag:['Warenertrag','Handelserlöse'],aufwand:['Warenaufwand','Personalaufwand','Raumaufwand']},{name:'Industrieunternehmen',ertrag:['Produktionserlöse'],aufwand:['Materialaufwand','Personalaufwand','Energieaufwand']},{name:'Dienstleistungsunternehmen',ertrag:['Dienstleistungserlöse'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Transportunternehmen',ertrag:['Transportertrag'],aufwand:['Treibstoffaufwand','Fahrzeugaufwand']},{name:'Beratungsunternehmen',ertrag:['Honorarertrag'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Gastgewerbe',ertrag:['Dienstleistungserlöse'],aufwand:['Warenaufwand','Personalaufwand']},{name:'Banken',ertrag:['Zinsertrag','Kommissionsertrag'],aufwand:['Zinsaufwand','Personalaufwand']},{name:'Versicherungen',ertrag:['Prämienertrag'],aufwand:['Schadenaufwand','Personalaufwand']}] },
        { id: 27, type: 'calc', q: 'Erstellen der Erfolgsrechnung. Berechnen Sie Total Aufwand, Ertrag und Ergebnis.', tips: ['Sortieren: Erträge und Aufwände trennen.','Gewinn = Ertrag − Aufwand.'], reveal: ['A) Architekturbüro: Gewinn CHF 29 600 (282 500 − 252 900). B) Handelsunternehmen: Verlust CHF 6 800 (340 000 − 346 800). Warum Verlust? Weil der Aufwand den Ertrag übersteigt – das Unternehmen hat mehr ausgegeben als eingenommen.','C) Motorrad-/Fahrradhandel: Gewinn CHF 39 200. D) Transportunternehmen: Gewinn CHF 36 000. Prüfungstipp: Zuerst alle Posten in Aufwand und Ertrag trennen, dann summieren und die Differenz berechnen. Häufiger Fehler: Ertragsposten als Aufwand einordnen oder umgekehrt.'], subsData: [{label:'A) Architekturbüro',totalAufwand:252900,totalErtrag:282500,result:29600,resultLabel:'Gewinn'},{label:'B) Handelsunternehmen',totalAufwand:346800,totalErtrag:340000,result:-6800,resultLabel:'Verlust'},{label:'C) Motorrad- und Fahrradhandel',totalAufwand:485900,totalErtrag:525100,result:39200,resultLabel:'Gewinn'},{label:'D) Transportunternehmen',totalAufwand:294000,totalErtrag:330000,result:36000,resultLabel:'Gewinn'}] },
        { id: 28, type: 'calc', q: 'Dreistufige Erfolgsrechnung einer Lederwarenhandlung', tips: ['Stufe 1: Betriebsgewinn.','Stufe 2: Neutral.','Stufe 3: Ausserordentlich.'], reveal: ['Stufe 1 – Betriebsgewinn: 170 000 − 153 100 = CHF 16 900. Das ist das Ergebnis des Kerngeschäfts. Stufe 2 – Neutraler Erfolg: 10 700 − 9 200 = CHF 1 500 (nicht zum Kerngeschäft gehörend, z.B. Wertschriftengewinne).','Stufe 3 – Ausserordentlicher Erfolg: 0 − 900 = CHF −900. Unternehmensgewinn: 16 900 + 1 500 − 900 = CHF 17 500. Warum drei Stufen? Um zu zeigen, woher der Erfolg kommt. Prüfungstipp: Der Betriebsgewinn ist am aussagekräftigsten – er zeigt, ob das Kerngeschäft profitabel ist.'], solution: {betrAufwand:153100,betrErtrag:170000,betriebsgewinn:16900,neutrAufwand:9200,neutrErtrag:10700,neutralerErfolg:1500,aoAufwand:900,aoErtrag:0,aoErfolg:-900,unternehmensgewinn:17500} },
        { id: 29, type: 'calc', q: 'Zweistufige Erfolgsrechnung einer Garage', tips: ['Bruttoerlös = Summe aller Verkaufserlöse.','Betriebsergebnis = Nettoerlös − betriebliche Aufwände.'], reveal: ['Bruttoerlös CHF 1 265 → abzgl. Erlösminderungen 130 → Nettoerlös CHF 1 135. Warum Erlösminderungen? Rabatte, Skonti, Retouren verringern den tatsächlichen Verkaufserlös.','Betriebsergebnis: 1 135 − 974 = CHF 161. Neutraler Erfolg: 65 − 23 = CHF 42. AO-Erfolg: CHF −70. Unternehmensgewinn: 161 + 42 − 70 = CHF 133. Prüfungstipp: Bei der zweistufigen ER ist der Nettoerlös der Ausgangspunkt. Häufiger Fehler: Erlösminderungen vergessen abzuziehen!'], solution: {bruttoerloes:1265,erlmind:130,nettoerloes:1135,betrAufwand:974,betriebsergebnis:161,neutrErtrag:65,neutrAufwand:23,neutralErfolg:42,aoErfolg:-70,unternehmensgewinn:133} },
        { id: 30, type: 'check', q: 'Wie wirken sich Vorgänge auf die Stufenergebnisse aus? (+, −, 0)', tips: ['+ = erhöht das Ergebnis, − = senkt es, 0 = keine Auswirkung.','Bruttogewinn: Nur Warenaufwand/-ertrag.'], reveal: ['Löhne: BG 0 (kein Warenaufwand/-ertrag), Betr −, UG −. Kursgewinne Wertschriften: BG 0, Betr 0 (nicht betrieblich), UG + (neutral). Warum wirken Löhne nicht auf den BG? Weil der Bruttogewinn nur Warenaufwand und Warenertrag berücksichtigt.','Warenverkäufe: BG +, Betr +, UG + (wirkt auf alle Stufen). Unterhalt Gewerbegebäude: BG 0, Betr 0 (nicht betrieblich, sondern neutral), UG −. Prüfungstipp: Frage dich immer: Ist es betrieblich oder neutral? Betrifft es den Warenbereich (→ BG) oder nicht? Häufiger Fehler: Unterhaltskosten am EIGENEN Gebäude sind neutral, nicht betrieblich.'], transactions: [{s:'Bezahlung der Löhne via Bank',bg:'0',betg:'-',ug:'-'},{s:'Kursgewinne auf Wertschriften',bg:'0',betg:'0',ug:'+'},{s:'Nachträgliche Rabatte auf Wareneinkäufen',bg:'+',betg:'+',ug:'+'},{s:'Bodenreinigung des Ladenlokals',bg:'0',betg:'-',ug:'-'},{s:'Warenverkäufe auf Kredit',bg:'+',betg:'+',ug:'+'},{s:'Unterhaltsarbeiten am Gewerbegebäude',bg:'0',betg:'0',ug:'-'},{s:'Abschreibung Ladeneinrichtung',bg:'0',betg:'-',ug:'-'},{s:'Mietaufwand und Gutschrift Immobilien',bg:'0',betg:'-',ug:'0'}] },
        { id: 31, type: 'text', q: 'Erfolgsrechnung verstehen und interpretieren. Beantworten Sie die folgenden Fragen zur ER.', tips: ['Die ER ist eine Zeitraumrechnung (Periode), die Bilanz eine Zeitpunktrechnung (Stichtag).','Kontoform = T-Form (Unterricht). Berichtsform = Staffelform (Geschäftsberichte).','EBIT = Betriebsergebnis. EBITDA = vor Abschreibungen.','Bruttogewinn = Nettoerlös − Warenaufwand. Reingewinn = nach allen Abzügen.'], reveal: ['A) Berichtsform (Staffelform): Schrittweise Berechnung von oben nach unten, wie eine Treppe. Die Kontoform (T-Form) stellt Aufwand links und Ertrag rechts dar – wird vor allem im Unterricht verwendet. Warum Berichtsform in der Praxis? Weil die Zwischenergebnisse (Bruttogewinn, EBIT etc.) übersichtlicher dargestellt werden.','B) EBIT = Earnings Before Interest and Taxes (Betriebsergebnis). Der EBIT zeigt, wie profitabel das Kerngeschäft ist – unabhängig von der Finanzierung (Zinsen) und der Steuersituation. Warum ist das wichtig? Weil so Unternehmen unterschiedlicher Grösse und Finanzierungsstruktur vergleichbar werden.','C) Bruttogewinn = Nettoerlös − Warenaufwand (Einstandswert). Er zeigt die Handelsmarge. Reingewinn = Endergebnis nach ALLEN Aufwänden (inkl. Zinsen, Steuern, a.o. Posten). Warum der Unterschied? Der Bruttogewinn zeigt nur die Warenmarge, der Reingewinn das tatsächliche Endergebnis für die Eigentümer.','D) EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization. Das D steht für Depreciation (Abschreibungen auf Sachanlagen) und das A für Amortization (Abschreibungen auf immaterielle Werte). Warum wird EBITDA verwendet? Er zeigt den operativen Cashflow-Proxy – wie viel Geld das operative Geschäft vor Investitions-Abschreibungen generiert.','E) Kontoform im Unterricht, Berichtsform in Geschäftsberichten. Prüfungstipp: Bei gestufter ER immer von oben nach unten vorgehen: Nettoerlös → Bruttogewinn → EBIT → Reingewinn. Häufiger Fehler: «Erfolg» mit «Gewinn» verwechseln – Erfolg ist der Oberbegriff und kann auch ein Verlust sein!'], questions: [{id:'a',q:'Was ist der Unterschied zwischen Berichtsform und Kontoform der ER?',keywords:['staffel','berichtsform','kontoform','T-Form','zwischenergebnis']},{id:'b',q:'Was zeigt der EBIT und warum ist er für Vergleiche wichtig?',keywords:['betriebsergebnis','zinsen','steuern','vergleich','kerngeschäft']},{id:'c',q:'Worin liegt der Unterschied zwischen Bruttogewinn und Reingewinn?',keywords:['nettoerlös','warenaufwand','marge','endergebnis','alle']},{id:'d',q:'Wofür stehen die Buchstaben in EBITDA?',keywords:['depreciation','amortization','abschreibung','interest','taxes']},{id:'e',q:'In welcher Darstellungsform wird die ER im Unterricht bzw. in Geschäftsberichten gezeigt?',keywords:['kontoform','unterricht','berichtsform','geschäftsbericht']}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Aufwand und Ertrag unterscheiden und den richtigen Konten zuordnen',
            'Eine gestufte Erfolgsrechnung aufstellen (zwei- und dreistufig)',
            'Die Darstellungsformen der ER kennen (Kontoform vs. Staffelform)',
            'Zwischenergebnisse wie Bruttogewinn, EBIT und Unternehmensgewinn berechnen'
          ]},
          { type: 'concept', title: 'Erfolgsrechnung', content: 'Die Erfolgsrechnung zeigt den Ertrag und Aufwand einer Periode (Zeitraum). Aufwand bedeutet Wertverzehr (Abnahme des Vermögens bzw. Zunahme der Schulden). Ertrag bedeutet Wertzuwachs. Das Ergebnis (Saldo) ist der Erfolg: Gewinn oder Verlust.', highlight: 'ER = Zeitraumrechnung (im Gegensatz zur Bilanz = Zeitpunktrechnung)' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aufwand', def: 'Wertverzehr: einseitige Abnahme des Vermögens oder einseitige Zunahme der Schulden.' },
            { term: 'Ertrag', def: 'Wertzuwachs: einseitige Zunahme des Vermögens oder einseitige Abnahme der Schulden.' },
            { term: 'Bruttogewinn', def: 'Nettoerlös − Warenaufwand (Einstandswert). Erstes Zwischenergebnis.' },
            { term: 'EBIT', def: 'Earnings Before Interest and Taxes. Betriebsergebnis, dient dem Vergleich.' },
            { term: 'Kontoform (T-Form)', def: 'Darstellung im Unterricht. Aufwand links, Ertrag rechts.' },
            { term: 'Staffelform (Berichtsform)', def: 'Darstellung in Geschäftsberichten. Schrittweise Berechnung.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: '«Erfolg» ist der Oberbegriff (nicht «Gewinn»). Gewinn = Ertragsüberschuss, Verlust = Aufwandsüberschuss. In Geschäftsberichten wird die ER meist in der Staffelform (Berichtsform) dargestellt, nicht in der Kontoform.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aufwand = Wertverzehr, Ertrag = Wertzuwachs, Erfolg = Saldo (Gewinn oder Verlust)',
            'ER ist eine Zeitraumrechnung (Periode), Bilanz eine Zeitpunktrechnung (Stichtag)',
            'Gestufte ER: Bruttogewinn → Betriebsergebnis (EBIT) → Unternehmensgewinn',
            'Kontoform (T-Form) im Unterricht, Staffelform (Berichtsform) in Geschäftsberichten'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 4: Bilanz und Erfolgsrechnung im Zusammenhang
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch4',
      num: 'Kapitel 4',
      title: 'Bilanz und Erfolgsrechnung im Zusammenhang',
      exercises: [
        { id: 32, type: 'tf', q: 'Geldflussrechnungen in verschiedenen Unternehmenssituationen', tips: ['GFR zeigt Geldzu- und -abflüsse in 3 Bereichen.','Positiver operativer Cashflow = Kerngeschäft generiert Geld.'], reveal: ['Richtig: Start-ups haben typischerweise negativen operativen Cashflow – sie investieren stark und haben noch wenig Einnahmen. Ein starkes Unternehmen hat positiven operativen CF. Warum? Weil das Kerngeschäft mehr Geld generiert als es verbraucht.','Falsch: Investoren wären NICHT glücklich mit Unternehmen B (negativer operativer CF = −130). Warum? Ein negativer operativer CF bedeutet, dass das Kerngeschäft Geld verbrennt. Auch falsch: «Nur bei B sind Erträge > Aufwand» – der operative CF sagt nichts direkt über Ertrag/Aufwand. Prüfungstipp: Operativer CF ist die wichtigste Kennzahl – er zeigt, ob das Unternehmen aus eigener Kraft überleben kann.'], statements: [{s:'Die GFR des Unternehmens C wäre am ehesten bei einem Start-up-Unternehmen vorzufinden.', c: true},{s:'Investoren wären am glücklichsten mit Unternehmen B.', c: false,reason:'Unternehmen B hat negativen operativen CF.'},{s:'Nur bei Unternehmen B sind die Erträge höher als die Aufwendungen.', c: false,reason:'Unternehmen B hat negativen operativen CF (-130).'},{s:'Die GFR von Unternehmen A findet man am ehesten bei einem starken Unternehmen.', c: true}] },
        { id: 33, type: 'text', q: 'Geldflussrechnung (GFR) verstehen und interpretieren. Beantworten Sie die folgenden Fragen zur GFR.', tips: ['Die GFR ist wie die ER eine Zeitraumrechnung.','Drei Bereiche: operativ (Geschäftstätigkeit), Investition, Finanzierung.','Praxis-Cashflow = Gewinn + Abschreibungen (vereinfacht).','Negativer operativer CF = Kerngeschäft generiert kein Geld.'], reveal: ['A) Die GFR hat drei Bereiche: 1) Operativer Bereich (Geschäftstätigkeit) – zeigt Geldzuflüsse/-abflüsse aus dem Kerngeschäft. 2) Investitionsbereich – zeigt Käufe/Verkäufe von Anlagen. 3) Finanzierungsbereich – zeigt Aufnahme/Rückzahlung von Kapital. Warum drei Bereiche? Um zu zeigen, WOHER das Geld kommt und WOHIN es fliesst.','B) Ein negativer operativer Cashflow bedeutet, dass das Kerngeschäft mehr Geld verbraucht als es generiert – das Unternehmen «verbrennt Geld». Bei Start-ups ist das normal (hohe Investitionen, noch wenig Umsatz). Bei etablierten Unternehmen ist es ein Warnsignal. Warum? Weil ein Unternehmen langfristig aus dem Kerngeschäft Geld generieren muss, um zu überleben.','C) Praxis-Cashflow = Gewinn + Abschreibungen. Warum + Abschreibungen? Weil Abschreibungen zwar den Gewinn mindern, aber keinen Geldabfluss darstellen (nicht-liquiditätswirksam). Der echte CF berücksichtigt zusätzlich Working-Capital-Veränderungen (Forderungen, Vorräte, Verbindlichkeiten).','D) Beispiel: Gewinn 50\'000, Abschreibungen 20\'000 → Praxis-CF = 70\'000. Warum ist der Praxis-CF höher als der Gewinn? Weil Abschreibungen «Buchaufwand» sind – kein Geld fliesst ab. Das Geld bleibt im Unternehmen. Prüfungstipp: Praxis-CF ≠ echter CF! Der echte CF berücksichtigt auch Veränderungen bei Debitoren, Kreditoren und Vorräten.','E) Die GFR ist eine Zeitraumrechnung (wie die ER), nicht eine Zeitpunktrechnung (wie die Bilanz). Warum? Sie zeigt die Geldbewegungen über eine Periode (z.B. 1.1.–31.12.). Prüfungstipp: Der operative CF ist die wichtigste Kennzahl – er zeigt, ob das Unternehmen aus eigener Kraft überleben kann.'], questions: [{id:'a',q:'Welche drei Bereiche hat die Geldflussrechnung?',keywords:['operativ','geschäftstätigkeit','investition','finanzierung']},{id:'b',q:'Was bedeutet ein negativer operativer Cashflow?',keywords:['verbrennt','kerngeschäft','mehr verbraucht','warnsignal']},{id:'c',q:'Wie berechnet man den Praxis-Cashflow und warum werden Abschreibungen addiert?',keywords:['gewinn','abschreibung','nicht-liquiditäts','geldabfluss']},{id:'d',q:'Berechnen Sie den Praxis-CF: Gewinn 50\'000, Abschreibungen 20\'000.',keywords:['70','praxis']},{id:'e',q:'Ist die GFR eine Zeitpunkt- oder Zeitraumrechnung?',keywords:['zeitraum','periode']}] },
        {
          id: 34,
          type: 'tf',
          q: 'Richtig oder falsch? – Zusammenhang Bilanz und Erfolgsrechnung',
          statements: [
            {s:'Der Erfolg kann doppelt nachgewiesen werden: in der Schlussbilanz und in der Erfolgsrechnung.', c: true},
            {s:'Bilanzkonten haben einen Anfangsbestand, Erfolgskonten nicht.', c: true},
            {s:'Erfolgswirksame Buchungen berühren nur Bilanzkonten.', c: false, reason:'Erfolgswirksame Buchungen berühren mindestens ein Erfolgskonto (Aufwand oder Ertrag). Nur erfolgsUNwirksame Buchungen berühren ausschliesslich Bilanzkonten.'},
            {s:'Die Schlussbilanz I zeigt den Stand nach der Erfolgsverbuchung.', c: false, reason:'SB I = VOR Erfolgsverbuchung. SB II = NACH Erfolgsverbuchung.'},
            {s:'Ein Aktivtausch ist eine erfolgsunwirksame Buchung.', c: true},
            {s:'Aufwandskonten werden am Periodenende über die Erfolgsrechnung abgeschlossen.', c: true}
          ],
          tips: ['Doppelter Erfolgsnachweis: Bilanz (EK-Veränderung) und ER (Ertrag − Aufwand).','SB I = vor, SB II = nach Erfolgsverbuchung.','Erfolgswirksam = mindestens ein Erfolgskonto betroffen.'],
          reveal: ['Richtig: Der Erfolg wird doppelt nachgewiesen – in der Bilanz (EK-Veränderung) und in der ER (Ertrag − Aufwand). Bilanzkonten haben Anfangsbestände, Erfolgskonten starten bei null. Warum? Weil Erfolgskonten nur die Veränderung einer Periode messen.','Falsch: Erfolgswirksame Buchungen berühren mindestens EIN Erfolgskonto – nicht nur Bilanzkonten! SB I = VOR Erfolgsverbuchung, SB II = NACH. Merkhilfe: I = «Initial» (noch unbereinigt), II = «Final». Richtig: AT, PT, KB, KR sind erfolgsUNwirksam. Aufwands-/Ertragskonten werden am Periodenende über die ER abgeschlossen.']
        },
        {
          id: 35,
          type: 'mc',
          q: 'Multiple Choice – Bilanz, ER und Geldflussrechnung',
          questions: [
            {id:'a', q:'Was zeigt die Schlussbilanz I?', options:['Den Stand nach Erfolgsverbuchung','Den Stand vor Erfolgsverbuchung','Nur die Erfolgskonten','Den Cashflow'], answer:1},
            {id:'b', q:'Was bedeutet ein negativer operativer Cashflow?', options:['Das Unternehmen macht Gewinn.','Das Kerngeschäft verbrennt Geld.','Das Unternehmen hat keine Schulden.','Die Investitionen sind zu hoch.'], answer:1},
            {id:'c', q:'Welche Buchung ist erfolgswirksam?', options:['Kauf Fahrzeug bar (AT)','Tilgung Darlehen über Bank (KR)','Zahlung Miete bar','Umwandlung kurzfr. Schuld in Darlehen (PT)'], answer:2}
          ],
          tips: ['SB I = vor Erfolgsverbuchung, SB II = nach.','Negativer operativer CF = Kerngeschäft generiert kein Geld.','Erfolgswirksam = berührt ein Aufwands- oder Ertragskonto.'],
          reveal: ['A) SB I = VOR Erfolgsverbuchung. Warum? Weil der Gewinn/Verlust erst nach Abschluss der ER ins EK überführt wird. SB II zeigt dann den finalen Stand.','B) Negativer operativer CF = Kerngeschäft verbrennt Geld. Das ist bei Start-ups normal, bei etablierten Unternehmen ein Warnsignal. Häufiger Fehler: Negativer CF ≠ Verlust in der ER (Cash vs. Buchgewinn).','C) Miete bar = erfolgswirksam, weil Aufwandskonto (Raumaufwand) betroffen. AT, KR, PT berühren nur Bilanzkonten → erfolgsUNwirksam. Prüfungstipp: Sobald ein Aufwands- oder Ertragskonto auftaucht, ist die Buchung erfolgswirksam.']
        },
        {
          id: 36,
          type: 'match',
          q: 'Zuordnung: Geschäftsfälle – erfolgswirksam oder erfolgsunwirksam?',
          pairs: [
            {l:'Kauf Fahrzeug gegen bar',r:'EU'},
            {l:'Zahlung der Monatsmiete',r:'EW'},
            {l:'Warenverkauf auf Kredit',r:'EW'},
            {l:'Banküberweisung auf Postkonto',r:'EU'},
            {l:'Abschreibung auf Maschinen',r:'EW'},
            {l:'Aufnahme eines Darlehens',r:'EU'},
            {l:'Zinszahlung auf Hypothek',r:'EW'},
            {l:'Rückzahlung Lieferantenrechnung',r:'EU'},
            {l:'Lohnzahlung via Bank',r:'EW'},
            {l:'Erhalt einer Kundenvorauszahlung',r:'EU'}
          ],
          options: ['EW','EU'],
          tips: ['Erfolgswirksam (EW): Berührt ein Aufwands- oder Ertragskonto.','Erfolgsunwirksam (EU): Berührt nur Bilanzkonten.','Frage dich: Verändert der Geschäftsfall den Gewinn/Verlust?'],
          reveal: ['Erfolgswirksam (EW): Mietzahlung (Raumaufwand), Warenverkauf (Warenertrag), Abschreibung (Abschreibungsaufwand), Zinszahlung (Finanzaufwand), Lohnzahlung (Personalaufwand). Warum? Weil jeweils ein Aufwands- oder Ertragskonto betroffen ist, was den Gewinn/Verlust verändert.','Erfolgsunwirksam (EU): Fahrzeugkauf bar (AT: Fahrzeuge+/Kasse−), Banküberweisung auf Post (AT: Post+/Bank−), Darlehensaufnahme (KB: Bank+/Darlehen+), Rückzahlung Lieferantenrechnung (KR: Verb.−/Bank−), Kundenvorauszahlung (KB: Bank+/Vorauszahlung+). Prüfungstipp: Bei EU-Buchungen sind NUR Bilanzkonten betroffen – kein Aufwand oder Ertrag.']
        },
        {
          id: 37,
          type: 'fill',
          q: 'Lückentext – Doppelter Erfolgsnachweis und Kontenarten',
          template: 'Der doppelte Erfolgsnachweis zeigt den Erfolg an zwei Stellen: In der {0} als Differenz zwischen EK-Endbestand und EK-Anfangsbestand, und in der {1} als Differenz zwischen Ertrag und Aufwand.\n\nEs gibt vier Kontenarten: {2} (Vermögen), {3} (Kapital), {4} (Wertverzehr) und {5} (Wertzuwachs). Die ersten beiden sind {6}, die letzten beiden sind {7}.\n\nDie Schlussbilanz vor Erfolgsverbuchung heisst {8}, die Schlussbilanz nach Erfolgsverbuchung heisst {9}.',
          blanks: [['Bilanz','Schlussbilanz'],['Erfolgsrechnung'],['Aktivkonten'],['Passivkonten'],['Aufwandskonten'],['Ertragskonten'],['Bilanzkonten','Bestandeskonten'],['Erfolgskonten'],['SB I','Schlussbilanz I'],['SB II','Schlussbilanz II']],
          tips: ['Bilanz und ER zeigen den gleichen Erfolg – nur aus unterschiedlichen Blickwinkeln.','Aktivkonten und Passivkonten sind Bilanzkonten.','SB I = vor, SB II = nach Erfolgsverbuchung.'],
          reveal: ['Der Erfolg erscheint an zwei Stellen: In der Bilanz als EK-Veränderung und in der ER als Ertrag − Aufwand. Warum doppelt? Zur Kontrolle – beide müssen den gleichen Betrag ergeben. Stimmen sie nicht überein, liegt ein Buchungsfehler vor.','Vier Kontenarten: Aktivkonten (Vermögen, Zunahme im Soll), Passivkonten (Kapital, Zunahme im Haben), Aufwandskonten (wie Aktivkonten: Zunahme im Soll), Ertragskonten (wie Passivkonten: Zunahme im Haben). Prüfungstipp: Aufwand verhält sich wie Aktiven, Ertrag wie Passiven.','SB I = vor Erfolgsverbuchung (EK noch auf Anfangsstand). SB II = nach Erfolgsverbuchung (Gewinn/Verlust ins EK übertragen). Merkhilfe: «I = Interim, II = Inklusive Erfolg».']
        },
        {
          id: 38,
          type: 'mc',
          q: 'Multiple Choice – Geldflussrechnung und Cashflow',
          questions: [
            {id:'a', q:'Aus welchen drei Bereichen besteht die Geldflussrechnung?', options:['Aktiven, Passiven, Eigenkapital','Geschäftstätigkeit, Investition, Finanzierung','Aufwand, Ertrag, Erfolg','Umlaufvermögen, Anlagevermögen, Fremdkapital'], answer:1},
            {id:'b', q:'Was ist der Praxis-Cashflow?', options:['Umsatz − Kosten','Gewinn + Abschreibungen','Einnahmen − Ausgaben','Aktiven − Passiven'], answer:1},
            {id:'c', q:'Für welche Unternehmen ist die GFR in der Schweiz Pflicht?', options:['Für alle Unternehmen','Nur für Aktiengesellschaften','Für grössere Unternehmen (OR 961d)','Nur für börsenkotierte Unternehmen'], answer:2}
          ],
          tips: ['Die GFR gliedert sich in drei Bereiche: operativ, Investition, Finanzierung.','Praxis-Cashflow ist eine vereinfachte Berechnung.','Die GFR-Pflicht gilt ab bestimmten Schwellenwerten.'],
          reveal: ['A) Die GFR hat drei Bereiche: Geschäftstätigkeit (operativ), Investitionstätigkeit, Finanzierungstätigkeit. Warum diese Gliederung? Um zu zeigen, woher das Geld kommt und wohin es fliesst.','B) Praxis-CF = Gewinn + Abschreibungen. Warum + Abschreibungen? Weil Abschreibungen zwar den Gewinn mindern, aber keinen Geldabfluss verursachen (es fliesst kein Geld). Der echte CF berücksichtigt zusätzlich Working-Capital-Veränderungen.','C) Grössere Unternehmen gemäss OR 961d: Umsatz > CHF 40 Mio., Bilanzsumme > CHF 20 Mio. oder > 250 Mitarbeitende (2 von 3 Kriterien in 2 aufeinanderfolgenden Jahren). Prüfungstipp: Die Schwellenwerte merken!']
        },
        {
          id: 39,
          type: 'tf',
          q: 'Richtig oder falsch? – Kontenarten und Buchungsregeln',
          statements: [
            {s:'Aufwandskonten nehmen im Soll zu – genau wie Aktivkonten.', c: true},
            {s:'Ertragskonten nehmen im Soll zu – genau wie Passivkonten.', c: false, reason:'Ertragskonten nehmen im HABEN zu (wie Passivkonten). Im Soll nehmen sie ab.'},
            {s:'Bilanzkonten haben einen Anfangs- und einen Endbestand.', c: true},
            {s:'Erfolgskonten werden mit dem Saldo der Vorperiode eröffnet.', c: false, reason:'Erfolgskonten haben KEINEN Anfangsbestand. Sie beginnen jede Periode bei null.'},
            {s:'Der Gewinn wird am Periodenende vom EK-Konto ins Aufwandskonto übertragen.', c: false, reason:'Der Gewinn wird ins Eigenkapital übertragen (SB I → SB II), nicht ins Aufwandskonto.'},
            {s:'Bei einer Kapitalbeschaffung (KB) nehmen eine Aktiv- und eine Passivposition zu.', c: true}
          ],
          tips: ['Aufwand verhält sich wie Aktivkonten (Zunahme im Soll).','Ertrag verhält sich wie Passivkonten (Zunahme im Haben).','Erfolgskonten starten jede Periode bei null.'],
          reveal: ['Richtig: Aufwand nimmt im Soll zu (wie Aktiven). Bilanzkonten haben Anfangs- und Endbestände. Bei KB: Aktiv+ und Passiv+ (z.B. Kauf auf Rechnung). Merkhilfe: «Aufwand = Geld geht weg = Aktivseite wird belastet».','Falsch: Ertragskonten nehmen im HABEN zu (nicht Soll) – wie Passivkonten. Erfolgskonten haben KEINEN Anfangsbestand – sie starten jede Periode bei null. Der Gewinn geht ins EK, NICHT ins Aufwandskonto. Prüfungstipp: Die häufigste Verwechslung ist Soll/Haben bei Ertragskonten.']
        },
        {
          id: 40,
          type: 'match',
          q: 'Zuordnung: Welche Abschlussrechnung zeigt was?',
          pairs: [
            {l:'Vermögen und Kapital auf einen Stichtag',r:'Bilanz'},
            {l:'Aufwand und Ertrag über eine Periode',r:'ER'},
            {l:'Geldzu- und -abflüsse in drei Bereichen',r:'GFR'},
            {l:'Zeitpunktrechnung',r:'Bilanz'},
            {l:'Zeitraumrechnung (Aufwand/Ertrag)',r:'ER'},
            {l:'Zeitraumrechnung (Geldflüsse)',r:'GFR'},
            {l:'Dient dem Branchenvergleich (EBIT)',r:'ER'},
            {l:'Zeigt ob Kerngeschäft Geld generiert',r:'GFR'}
          ],
          options: ['Bilanz','ER','GFR'],
          tips: ['Bilanz = Zeitpunktrechnung (Stichtag).','ER = Zeitraumrechnung (Periode).','GFR = Zeitraumrechnung (Geldflüsse).'],
          reveal: ['Bilanz: Vermögen und Kapital auf einen Stichtag (Zeitpunktrechnung). Warum Stichtag? Weil die Bilanz eine Momentaufnahme zeigt – wie ein Foto. ER: Aufwand und Ertrag über eine Periode (Zeitraumrechnung). Warum Zeitraum? Weil Aufwand und Ertrag über Zeit anfallen – wie ein Film.','GFR: Geldzu- und -abflüsse in drei Bereichen (Zeitraumrechnung). Warum drei Bereiche? Um zu unterscheiden, ob Geld aus dem Kerngeschäft (operativ), aus Investitionen oder aus Finanzierungsaktivitäten stammt. Prüfungstipp: EBIT kommt aus der ER (nicht GFR), der operative Cashflow aus der GFR (nicht ER).']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Zusammenhang zwischen Bilanz und Erfolgsrechnung verstehen',
            'Die Kontenarten der doppelten Buchhaltung kennen (Bilanz- und Erfolgskonten)',
            'Erfolgswirksame und erfolgsunwirksame Buchungen unterscheiden',
            'Die Geldflussrechnung als dritte Abschlussrechnung verstehen'
          ]},
          { type: 'concept', title: 'Doppelter Erfolgsnachweis', content: 'Die doppelte Buchhaltung basiert auf zwei Arten von Konten: Bilanzkonten (Aktiv- und Passivkonten) und Erfolgskonten (Aufwands- und Ertragskonten). Der Erfolg kann doppelt nachgewiesen werden: in der Schlussbilanz (Differenz Aktiven − FK) und in der Erfolgsrechnung (Differenz Ertrag − Aufwand).', highlight: 'Vor der Gewinnverbuchung: SB I, nach der Gewinnverbuchung: SB II' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Bilanzkonten', def: 'Aktiv- und Passivkonten. Haben einen Anfangsbestand und einen Endbestand.' },
            { term: 'Erfolgskonten', def: 'Aufwands- und Ertragskonten. Haben keinen Anfangsbestand.' },
            { term: 'Erfolgswirksam', def: 'Buchung berührt ein Erfolgskonto und verändert den Gewinn/Verlust.' },
            { term: 'Erfolgsunwirksam', def: 'Buchung berührt nur Bilanzkonten (AT, PT, KB, KR).' },
            { term: 'Geldflussrechnung (GFR)', def: 'Zeigt die Geldzu- und -abflüsse in drei Bereichen: operativ, Investition, Finanzierung.' },
            { term: 'Cashflow', def: 'Mittelzufluss aus der Geschäftstätigkeit. Praxis-Cashflow = Gewinn + Abschreibungen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Ein positiver operativer Cashflow bedeutet, dass das Kerngeschäft Geld generiert. Bei einem Startup ist ein negativer Cashflow zu Beginn normal. Ein starkes Unternehmen hat in der Regel einen positiven operativen Cashflow.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Doppelter Erfolgsnachweis: Bilanz (EK-Veränderung) und ER (Ertrag − Aufwand)',
            'Bilanzkonten haben Anfangsbestand, Erfolgskonten starten bei null',
            'Erfolgswirksam = mindestens ein Erfolgskonto betroffen; erfolgsunwirksam = nur Bilanzkonten',
            'GFR: drei Bereiche (operativ, Investition, Finanzierung), Praxis-CF = Gewinn + Abschreibungen'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 5: Buchführung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch5',
      num: 'Kapitel 5',
      title: 'Buchführung',
      exercises: [
        { id: 41, type: 'fill', q: 'Lückentext: Buchungsmöglichkeiten auf Bilanz- und Erfolgskonten', tips: ['AT: a+/a−, PT: p−/p+, KB: a+/p+, KR: a−/p−','Erfolgskonten haben keinen Anfangsbestand.'], reveal: ['Aktivtausch (AT): Ändert nur die Zusammensetzung der Aktiven, die Bilanzsumme bleibt gleich. Kapitalbeschaffung (KB): a+/p+ → Bilanzsumme steigt. Kapitalrückzahlung (KR): a−/p− → Bilanzsumme sinkt. Warum bleibt die Bilanzgleichung immer im Gleichgewicht? Weil jede Buchung zwei Konten betrifft.','Erfolgskonten: Aufwandskonto (Wertverzehr, Zunahme im Soll) und Ertragskonto (Wertzuwachs, Zunahme im Haben). Bilanzkonten haben einen Anfangsbestand und einen Endbestand. Erfolgskonten starten bei null. Prüfungstipp: Aufwandskonten verhalten sich wie Aktivkonten, Ertragskonten wie Passivkonten.'], template: 'Ein {0} ändert nur die {1} der Aktiven, die {2} bleibt gleich. Die Bilanzgleichung ist immer im {3}. Kapitalbeschaffung bedeutet {4}: Die Bilanzsumme {5}{6}. Eine {7} bedeutet a−/p−: Die Bilanzsumme {8}. Ein {9} erfasst Wertverzehr (Zunahme im Soll), ein {10} erfasst Wertzuwachs (Zunahme im Haben). Ertragskonten verhalten sich wie {11}. {12} haben einen Anfangsbestand und einen Endbestand. Aufwandskonten verhalten sich wie {13}, Ertragskonten wie {14}. Am Jahresende wird der Saldo eines {15}s in der ER ausgewiesen. {16} haben einen {17} und einen {18}.', blanks: [['Aktivtausch'],['Zusammensetzung'],['Bilanzsumme'],['Gleichgewicht','Bilanzgleichung'],['a+/p+'],['nimmt','steigt'],['zu'],['Kapitalrückzahlung'],['nimmt ab','sinkt'],['Aufwandskonto'],['Ertragskonto'],['Passivkonten'],['Bilanzkonten'],['Aktivkonten'],['Passivkonten'],['Ertragskonto'],['Bilanzkonten'],['Anfangsbestand'],['Endbestand','Schlussbestand']] },
        { id: 42, type: 'tf', q: 'Richtig oder falsch? Wirkungen von Bilanzveränderungen', tips: ['AT und PT verändern die Bilanzsumme nicht.','KB und KR verändern die Bilanzsumme.'], reveal: ['Richtig: PT verändert die Bilanzsumme nicht (nur Kapitalzusammensetzung ändert sich). KR verändert die BS (sie sinkt). Bei KB nehmen eine Aktiv- und eine Passivposition zu (BS steigt). Warum? Weil neues Kapital ins Unternehmen fliesst.','Falsch: AT erhöht die BS NICHT – nur die Vermögenszusammensetzung ändert sich (z.B. Kasse sinkt, Fahrzeug steigt). Beim AT sind BEIDE Konten auf der Aktivseite, nicht Aktiv+/Passiv−. Prüfungstipp: AT und PT = BS gleich, KB = BS steigt, KR = BS sinkt. Häufiger Fehler: AT mit KB verwechseln!'], statements: [{s:'Ein Passivtausch verändert die Bilanzsumme nicht.', c: true},{s:'Ein Aktivtausch erhöht die Bilanzsumme.', c: false,reason:'AT verändert die BS nicht.'},{s:'Kapitalrückzahlung führt zu BS-Veränderung.', c: true},{s:'Beim PT ändert sich die Kapitalzusammensetzung.', c: true},{s:'Bei KB nimmt eine Aktiv- und eine Passivposition zu.', c: true},{s:'Beim AT wird eine Aktiv- erhöht und eine Passivposition vermindert.', c: false,reason:'Beim AT sind beide auf der Aktivseite.'}] },
        { id: 43, type: 'fill', q: 'Lückentext: Aufgaben der Buchhaltung', tips: ['Die Buchhaltung dient dem Erfolgsausweis und der Vermögenskontrolle.'], reveal: ['Die Buchhaltung dient dem Erfolgsausweis (Gewinn oder Verlust ermitteln) und der Vermögenskontrolle (lückenlose Erfassung aller Geschäftsvorgänge). Warum «lückenlos»? Weil jeder Geschäftsvorgang dokumentiert werden muss – ohne Beleg keine Buchung!','Die Vermögenskontrolle umfasst die Überwachung von Vermögen und Schulden. Prüfungstipp: Die Buchhaltung hat zwei Hauptaufgaben: 1) Erfolgsermittlung (wie viel Gewinn/Verlust?) und 2) Vermögensübersicht (was haben wir, was schulden wir?).'], template: 'Die Buchhaltung dient dem {0}ausweis: Ermittlung von {1} oder Verlust. Die zweite Hauptaufgabe ist die {2}skontrolle: die {3} Erfassung des gesamten {4}. Dabei werden {5} und {6} lückenlos überwacht.', blanks: [['Erfolgs','Erfolg'],['Gewinn'],['Vermögen'],['lückenlose','lückenlos'],['Geschäftsverkehrs','Geschäftsverkehr'],['Vermögen'],['Schulden']] },
        { id: 44, type: 'tf', q: 'Richtig oder falsch? Zusammenhänge im Erfolgskonto', tips: ['Saldo = Differenz stärkere − schwächere Seite.','Erfolgskonten haben keinen Anfangsbestand.'], reveal: ['Richtig: Saldo = Differenz stärkere − schwächere Seite. Ist die Sollseite stärker, steht der Saldo im Haben (zum Ausgleich). Habensaldo eines Erfolgskontos = Ertragskonto. Warum? Weil Erträge im Haben zunehmen, also die Habenseite stärker ist.','Falsch: Saldo steht auf der SCHWÄCHEREN Seite (zum Ausgleich), nicht auf der stärkeren! Sollsaldo eines Erfolgskontos = Aufwandskonto (nicht Ertrag). Erfolgskonten haben KEINEN Anfangsbestand. Prüfungstipp: Der Saldo «gleicht aus» – er steht dort, wo weniger ist, um die Seiten auszugleichen.'], statements: [{s:'Der Saldo ergibt sich als Differenz zwischen stärkerer und schwächerer Seite.', c: true},{s:'Ist die Habenseite stärker, steht der Saldo im Haben.', c: false,reason:'Saldo steht auf der schwächeren Seite (im Soll).'},{s:'Ist die Sollseite stärker, steht der Saldo im Haben.', c: true},{s:'Sollsaldo eines Erfolgskontos = Ertrag.', c: false,reason:'Sollüberschuss = Aufwand.'},{s:'Erfolgskonten werden mit Anfangsbestand eröffnet.', c: false,reason:'Kein Anfangsbestand.'},{s:'Habensaldo eines Erfolgskontos = Ertragskonto.', c: true}] },
        { id: 45, type: 'match', q: 'Zuordnung: Begriffe der doppelten Buchhaltung', tips: ['SB I = vor Erfolgsverbuchung, SB II = nach.'], reveal: ['A) Buchungssatz = Kontoaufruf durch Kurzanweisung (Soll / Haben). B) SB II = Bilanz nach Erfolgsverbuchung. C) Gewinn auf Aktivseite (Vermögenszunahme) und Ertragsseite (Ertragsüberschuss). F) SB I = Bilanz vor Erfolgsverbuchung.','D) Oberstes Gebot = Ordnungsmässigkeit (keine Buchung ohne Beleg). E) Verlust auf Passivseite (EK-Abnahme) und Aufwandsseite (Aufwandsüberschuss). G) Doppelter Erfolgsnachweis. H) Vierkontentheorie (Aktiv, Passiv, Aufwand, Ertrag). Prüfungstipp: SB I vs. SB II ist eine klassische Prüfungsfrage – merke: I = vor, II = nach Erfolgsverbuchung.'], pairs: [{l:'A) Kontoaufruf durch Kurzanweisung',r:'4'},{l:'B) Bilanz nach Erfolgsverbuchung',r:'5'},{l:'C) Erfolg auf Aktivseite und Ertragsseite',r:'6'},{l:'D) Oberstes Gebot der Ordnungsmässigkeit',r:'8'},{l:'E) Erfolg auf Passivseite und Aufwandsseite',r:'2'},{l:'F) Bilanz vor Erfolgsverbuchung',r:'1'},{l:'G) Doppelter Erfolgsnachweis',r:'7'},{l:'H) Vierkontentheorie',r:'3'}], options: ['1','2','3','4','5','6','7','8'] },
        { id: 46, type: 'match', q: 'Zuordnung: Konten zu vier Kontenarten', tips: ['Aufwand/Ertrag = Erfolgskonten. Aktiv/Passiv = Bestandeskonten.'], reveal: ['Aufwandskonten (AW): Löhne, Sozialversicherungsaufwand, Materialaufwand, Mietzins, Unterhalt, Werbung, Versicherung. Warum Aufwand? Weil ein Wertverzehr stattfindet – das Unternehmen gibt Werte ab, ohne direkten Vermögenszuwachs.','Ertragskonten (ER): Warenertrag, Erlöse aus Arbeiten, Werbeeinnahmen, Mietzinseinnahmen. Warum Ertrag? Weil ein Wertzuwachs entsteht – das Unternehmen nimmt Werte ein.','Aktivkonten (AK): Kasse, Wertschriften, Fertigfabrikatevorrat, Handelswarenbestand, Rohmaterialvorrat. Passivkonten (PA): Aktienkapital, Bank(schuld), Verbindlichkeiten L+L, Rückstellungen, Reserven. Prüfungstipp: Bank kann Aktiv (Guthaben) ODER Passiv (Schuld) sein!'], pairs: [{l:'Löhne und Gehälter',r:'AW'},{l:'Aktienkapital',r:'PA'},{l:'Fertigfabrikatevorrat',r:'AK'},{l:'Bank(schuld)',r:'PA'},{l:'Warenertrag',r:'ER'},{l:'Sozialversicherungsaufwand',r:'AW'},{l:'Materialaufwand',r:'AW'},{l:'Kasse',r:'AK'},{l:'Mietzins Ladenlokal',r:'AW'},{l:'Erlöse aus Arbeiten',r:'ER'},{l:'Unterhalt und Reparaturen',r:'AW'},{l:'Werbung',r:'AW'},{l:'Werbeeinnahmen',r:'ER'},{l:'Wertschriften',r:'AK'},{l:'Verbindlichkeiten aus L+L',r:'PA'},{l:'Rückstellungen',r:'PA'},{l:'Handelswarenbestand',r:'AK'},{l:'Versicherung Fahrzeuge',r:'AW'},{l:'Reserven',r:'PA'},{l:'Rohmaterialvorrat',r:'AK'},{l:'Mietzinseinnahmen Personalwohnungen',r:'ER'}], options: ['AK','PA','AW','ER'] },
        { id: 47, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Buchungsmöglichkeiten', tips: ['AT: Aktiv+/Aktiv−. PT: Passiv−/Passiv+.','KB: Aktiv+/Passiv+. KR: Aktiv−/Passiv−.'], reveal: ['AT (1): Kauf Fahrzeug bar (Fahrzeug+/Kasse−), Barverkauf Gestell (Kasse+/Gestell−), Kunden zahlen auf Post (Post+/Forderungen−). Warum AT? Weil beide Konten auf der Aktivseite liegen – das eine steigt, das andere sinkt.','PT (2): Rückzahlung Hypothek über Bank-Kontokorrent – ACHTUNG: Wenn «über Bank» bei einer Bankschuld, dann p−/p+. KB (3): Kauf Mobiliar auf Rechnung (Mobiliar+/Verb.+), Darlehen erhalten bar (Kasse+/Darlehen+). KR (4): Bezahlung Lieferantenrechnung (Verb.−/Kasse−), Bezug Bargeld von Bankschuld (Kasse+/Bankschuld+... nein: Bankschuld ist Passiv, Kasse ist Aktiv → KR wenn Passiv− und Aktiv−). Prüfungstipp: Immer zuerst die betroffenen Konten identifizieren und dann prüfen, ob Aktiv oder Passiv.'], pairs: [{l:'A) Kauf Fahrzeug gegen bar',r:'1'},{l:'B) Kauf Mobiliar auf Rechnung',r:'3'},{l:'C) Bezahlung Lieferantenrechnungen',r:'4'},{l:'D) Barverkauf ausgedienten Gestells',r:'1'},{l:'E) Rückzahlung Hypothek über Bank',r:'2'},{l:'F) Darlehen erhalten, bar',r:'3'},{l:'G) Kunden zahlen auf Postkonto',r:'1'},{l:'H) Bezug Bargeld von Bank (Schuld)',r:'4'}], options: ['1','2','3','4'] },
        { id: 48, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Bilanz- und Erfolgskonten', tips: ['Buchungssatz: Soll/Haben bestimmt die Kontenarten.'], reveal: ['Typ 1 (Aktiv + Ertrag): Barverkauf Waren (Kasse/Warenertrag), DL-Ertrag auf Post (Post/DL-Ertrag), Zinsertrag auf Bank (Bank/Zinsertrag). Warum? Ein Aktivkonto nimmt zu und ein Ertragskonto nimmt zu → Wertzuwachs.','Typ 2 (Aufwand + Passiv): Wareneinkauf auf Rechnung (Warenaufwand/Verb. L+L). Typ 3 (Aufwand + Aktiv): Lohnzahlung über Bank (Personalaufwand/Bank), Mietzahlung bar (Raumaufwand/Kasse). Warum? Ein Aufwandskonto nimmt zu und ein Aktivkonto nimmt ab → Wertverzehr. Prüfungstipp: Bei erfolgswirksamen Buchungen ist IMMER ein Erfolgs- und ein Bilanzkonto betroffen.'], pairs: [{l:'A) Wareneinkauf auf Rechnung',r:'2'},{l:'B) Barverkauf von Waren',r:'1'},{l:'C) Lohnzahlung über Bank',r:'3'},{l:'D) Mietzahlung bar',r:'3'},{l:'E) DL-Ertrag auf Postkonto',r:'1'},{l:'F) Zinsertrag auf Bankkonto',r:'1'}], options: ['1','2','3'] },
        { id: 49, type: 'match', q: 'Wie verändert sich die Bilanzsumme?', tips: ['AT und PT: BS bleibt gleich.','KB: BS steigt. KR: BS sinkt.'], reveal: ['Gleich (GL): Bareinzahlung Postkonto (AT), Umwandlung Schuld in Darlehen (PT), Einlösung Wertschrift (AT), Rückstellung → Verbindlichkeit (PT). Warum gleich? Weil bei AT und PT die Bilanzsumme nicht verändert wird – es verschiebt sich nur innerhalb der gleichen Seite.','Zunahme (ZU): Kauf Mobiliar auf Rechnung (KB), Aufnahme Hypothek (KB). Abnahme (AB): Barzahlung Lieferantenrechnung (KR), Tilgung Darlehen via Bank (KR). Prüfungstipp: KB = neues Kapital kommt rein → BS steigt. KR = Kapital wird zurückgezahlt → BS sinkt. Merkhilfe: «Beschaffung = Bigger, Rückzahlung = Reduced».'], pairs: [{l:'A) Bareinzahlung Postkonto',r:'GL'},{l:'B) Kauf Mobiliar auf Rechnung',r:'ZU'},{l:'C) Barzahlung Lieferantenrechnung',r:'AB'},{l:'D) Umwandlung kurzfr. Schuld in Darlehen',r:'GL'},{l:'E) Tilgung Darlehen via Bank',r:'AB'},{l:'F) Aufnahme Hypothek',r:'ZU'},{l:'G) Einlösung Wertschrift',r:'GL'},{l:'H) Rückstellung → Verbindlichkeit',r:'GL'}], options: ['GL','ZU','AB'] },
        { id: 50, type: 'match', q: 'Notierung der Bilanzveränderung zu Geschäftsfällen', tips: ['AT: a+/a−.','KB: a+/p+.'], reveal: ['AT (a+/a−): Bareinzahlung Post (Post+/Kasse−), Einlösung Wertschrift (Kasse+/Wertschriften−). KB (a+/p+): Kauf Mobiliar auf Rechnung (Mobiliar+/Verb.+), Aufnahme Hypothek (Bank+/Hypothek+). Warum a+/p+? Weil Vermögen UND Schulden gleichzeitig steigen.','KR (a−/p−): Barzahlung Lieferantenrechnung (Kasse−/Verb.−), Tilgung Darlehen via Bank (Bank−/Darlehen−). PT (p−/p+): Umwandlung Schuld in Darlehen, Rückstellung → Verbindlichkeit. Prüfungstipp: Notiere immer zuerst die beiden Konten, dann prüfe ob a oder p, dann + oder −.'], pairs: [{l:'A) Bareinzahlung Postkonto',r:'AT'},{l:'B) Kauf Mobiliar auf Rechnung',r:'KB'},{l:'C) Barzahlung Lieferantenrechnung',r:'KR'},{l:'D) Umwandlung Schuld in Darlehen',r:'PT'},{l:'E) Tilgung Darlehen via Bank',r:'KR'},{l:'F) Aufnahme Hypothek',r:'KB'},{l:'G) Einlösung Wertschrift',r:'AT'},{l:'H) Rückstellung → Verbindlichkeit',r:'PT'}], options: ['AT','PT','KB','KR'] },
        { id: 51, type: 'match', q: 'Zuordnung: Buchungssätze zu Buchungsmöglichkeiten', tips: ['Buchungssatz Soll/Haben bestimmt die Buchungsmöglichkeit.'], reveal: ['AT (1): Maschinen/Kasse (Aktiv+/Aktiv−), Post/Forderungen L+L (Aktiv+/Aktiv−). PT (2): Darlehen/Hypothek (Passiv−/Passiv+), Verb. L+L/Rückstellungen (Passiv−/Passiv+). Warum? Weil beide Konten auf der gleichen Bilanzseite liegen.','KB (3): Mobiliar/Verb. L+L (Aktiv+/Passiv+), Fahrzeuge/Darlehen (Aktiv+/Passiv+). KR (4): Verb. L+L/Bank (Passiv−/Aktiv−), Bankschuld/Kasse (Passiv−/Aktiv−). Prüfungstipp: Beim Buchungssatz steht links das SOLL-Konto. Bei Aktivkonten bedeutet Soll = Zunahme, bei Passivkonten = Abnahme.'], pairs: [{l:'A) Maschinen / Kasse',r:'1'},{l:'B) Mobiliar / Verbindlichkeiten L+L',r:'3'},{l:'C) Verbindlichkeiten L+L / Bank',r:'4'},{l:'D) Darlehen / Hypothek',r:'2'},{l:'E) Bankschuld / Kasse',r:'4'},{l:'F) Post / Forderungen L+L',r:'1'},{l:'G) Fahrzeuge / Darlehen',r:'3'},{l:'H) Verbindlichkeiten L+L / Rückstellungen',r:'2'}], options: ['1','2','3','4'] },
        { id: 52, type: 'match', q: 'Grafische Aufgabe zu Erfolgsvorgängen', tips: ['Aufwandskonten: Soll = Zunahme.','Ertragskonten: Haben = Zunahme.'], reveal: ['Typ 1 – Aufwandsbuchung (Aufwand Soll / Aktiv Haben): Barzahlung Miete (Raumaufwand/Kasse), Lohnzahlung per Bank (Personalaufwand/Bank). Warum? Das Aufwandskonto nimmt im Soll zu, das Aktivkonto nimmt im Haben ab → Wertverzehr.','Typ 2 – Ertragsbuchung (Aktiv Soll / Ertrag Haben): Bareinnahme Warenverkauf (Kasse/Warenertrag), Bankgutschrift für DL (Bank/DL-Ertrag), Zinsertrag auf Post (Post/Zinsertrag). Typ 3 – Aufwand mit Passivzunahme: Wareneinkauf auf Rechnung (Warenaufwand/Verb. L+L). Prüfungstipp: Merke die drei Kombinationen: Aufwand/Aktiv, Aktiv/Ertrag, Aufwand/Passiv.'], pairs: [{l:'A) Barzahlung Miete',r:'1'},{l:'B) Bareinnahme Warenverkauf',r:'2'},{l:'C) Lohnzahlung per Bank',r:'1'},{l:'D) Bankgutschrift für DL',r:'2'},{l:'E) Wareneinkauf auf Rechnung',r:'3'},{l:'F) Zinsertrag auf Post',r:'2'}], options: ['1','2','3'] },
        { id: 53, type: 'text', q: 'Einzelfragen zum Thema Buchungstechnik', tips: ['Die Bilanz wird in Konten aufgelöst.','Journal = chronologisch. Hauptbuch = sachlich.'], reveal: ['A) Doppelte Buchhaltung: Jeder Geschäftsfall wird auf mindestens zwei Konten gebucht (Soll und Haben). B) Journal = chronologische Aufzeichnung (nach Datum). Hauptbuch = sachliche Ordnung (nach Konten). Warum beides? Das Journal zeigt «was passierte wann», das Hauptbuch zeigt «wie steht jedes Konto».','C) Ablauf: Eröffnungsbilanz → Konten eröffnen → Geschäftsfälle buchen → Konten abschliessen → ER erstellen → Erfolg verbuchen → Schlussbilanz. D) Doppelter Erfolgsnachweis: Gleicher Betrag in Bilanz (EK-Veränderung) und ER (Ertrag−Aufwand). E) Ohne Beleg keine Buchung! Prüfungstipp: Der Beleg ist das «Beweismittel» der Buchhaltung – er legitimiert jede Buchung.'], questions: [{id:'a',q:'Was bedeutet "doppelte Buchhaltung"?',keywords:['zwei konten','soll','haben']},{id:'b',q:'Journal vs. Hauptbuch?',keywords:['chronolog','sachlich']},{id:'c',q:'Ablauf Eröffnung bis Schlussbilanz?',keywords:['eröffnung','geschäftsf','abschluss']},{id:'d',q:'Was ist der doppelte Erfolgsnachweis?',keywords:['bilanz','erfolgsrechnung','beide']},{id:'e',q:'Rolle des Belegs?',keywords:['beleg','grundlage','keine buchung']}] },
        {
          id: 54,
          type: 'sort',
          q: 'Sortieren Sie die Schritte des Buchungsablaufs in die richtige Reihenfolge – vom Beginn bis zum Abschluss der Buchungsperiode.',
          items: ['Eröffnungsbilanz erstellen','Konten eröffnen (Anfangsbestände)','Geschäftsfälle im Journal erfassen','Buchungen ins Hauptbuch übertragen','Konten abschliessen (Salden ermitteln)','Erfolgsrechnung erstellen','Erfolg ins Eigenkapital verbuchen','Schlussbilanz II erstellen'],
          correctOrder: [0,1,2,3,4,5,6,7],
          tips: ['Der Ablauf beginnt mit der Eröffnungsbilanz und endet mit der Schlussbilanz II.','Das Journal ist chronologisch, das Hauptbuch sachlich geordnet.','SB I = vor Erfolgsverbuchung, SB II = nach Erfolgsverbuchung.'],
          reveal: ['Schritt 1-4: Eröffnungsbilanz → Konten eröffnen → Journal (chronologisch) → Hauptbuch (sachlich). Warum diese Reihenfolge? Die Eröffnungsbilanz liefert die Anfangsbestände. Das Journal erfasst jeden Geschäftsfall in der zeitlichen Reihenfolge. Das Hauptbuch ordnet die gleichen Buchungen nach Konten.','Schritt 5-8: Konten abschliessen → ER erstellen → Erfolg verbuchen → SB II. Warum zuerst ER, dann SB II? Weil der Gewinn/Verlust erst bekannt ist, wenn die ER fertig ist. Erst dann kann er ins EK übertragen werden (SB I → SB II). Prüfungstipp: Der komplette Ablauf ist ein Klassiker in der Prüfung!']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die vier Typen von Bilanzveränderungen kennen und anwenden',
            'Buchungssätze formulieren (Soll an Haben)',
            'Den Zusammenhang zwischen Journal und Hauptbuch verstehen',
            'Den doppelten Erfolgsnachweis in Bilanz und ER nachvollziehen'
          ]},
          { type: 'concept', title: 'Vier Bilanzveränderungstypen', content: 'Jeder Geschäftsfall verändert die Bilanz auf eine von vier Arten: Aktivtausch (a+/a−), Passivtausch (p−/p+), Kapitalbeschaffung (a+/p+) oder Kapitalrückzahlung (a−/p−). Beim AT und PT bleibt die Bilanzsumme gleich, bei KB steigt sie und bei KR sinkt sie.', highlight: 'AT und PT: Bilanzsumme bleibt gleich. KB: steigt. KR: sinkt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aktivtausch (AT)', def: 'Aktiv+ / Aktiv−. Bilanzsumme bleibt gleich. Bsp: Kauf Fahrzeug bar.' },
            { term: 'Passivtausch (PT)', def: 'Passiv− / Passiv+. Bilanzsumme bleibt gleich. Bsp: Darlehen in Hypothek umwandeln.' },
            { term: 'Kapitalbeschaffung (KB)', def: 'Aktiv+ / Passiv+. Bilanzsumme steigt. Bsp: Kauf Mobiliar auf Rechnung.' },
            { term: 'Kapitalrückzahlung (KR)', def: 'Aktiv− / Passiv−. Bilanzsumme sinkt. Bsp: Bezahlung Lieferantenrechnung.' },
            { term: 'Buchungssatz', def: 'Kontoaufruf: Soll an Haben (z.B. Maschinen / Kasse = Aktivtausch).' },
            { term: 'Journal', def: 'Chronologische Aufzeichnung aller Geschäftsfälle.' },
            { term: 'Hauptbuch', def: 'Sachliche Ordnung der Buchungen nach Konten.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Grundregel der doppelten Buchhaltung: Jeder Geschäftsfall wird auf mindestens zwei Konten gebucht (Soll und Haben). Ohne Beleg keine Buchung! Erfolgskonten haben keinen Anfangsbestand und werden am Periodenende über die ER abgeschlossen.' },
          { type: 'svg', title: 'Buchungssatz-Schema (Soll an Haben)', svg: '<svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="arBS" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/></marker></defs><rect x="5" y="5" width="710" height="410" rx="12" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="360" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="#3b82f6">Buchungssatz: Soll an Haben</text><rect x="180" y="50" width="360" height="45" rx="8" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="2"/><text x="360" y="70" text-anchor="middle" font-size="15" font-weight="700" fill="#1e40af">Sollkonto / Habenkonto</text><text x="360" y="88" text-anchor="middle" font-size="11" fill="#1e40af">(z.B. Maschinen / Kasse 50 000)</text><rect x="30" y="120" width="300" height="130" rx="10" fill="#3b82f6" fill-opacity="0.06" stroke="#3b82f6" stroke-width="1.5"/><text x="180" y="145" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">Aktivkonten</text><line x1="180" y1="155" x2="180" y2="240" stroke="#3b82f6" stroke-width="1"/><line x1="40" y1="158" x2="320" y2="158" stroke="#3b82f6" stroke-width="1"/><text x="110" y="175" text-anchor="middle" font-size="12" font-weight="600" fill="#1e40af">Soll (+)</text><text x="250" y="175" text-anchor="middle" font-size="12" font-weight="600" fill="#1e40af">Haben (−)</text><text x="110" y="200" text-anchor="middle" font-size="11" fill="#374151">Zunahme</text><text x="250" y="200" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><text x="110" y="220" text-anchor="middle" font-size="10" fill="#6b7280">Anfangsbestand</text><text x="250" y="220" text-anchor="middle" font-size="10" fill="#6b7280">Schlusssaldo</text><rect x="390" y="120" width="300" height="130" rx="10" fill="#3b82f6" fill-opacity="0.06" stroke="#3b82f6" stroke-width="1.5"/><text x="540" y="145" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">Passivkonten</text><line x1="540" y1="155" x2="540" y2="240" stroke="#3b82f6" stroke-width="1"/><line x1="400" y1="158" x2="680" y2="158" stroke="#3b82f6" stroke-width="1"/><text x="470" y="175" text-anchor="middle" font-size="12" font-weight="600" fill="#1e40af">Soll (−)</text><text x="610" y="175" text-anchor="middle" font-size="12" font-weight="600" fill="#1e40af">Haben (+)</text><text x="470" y="200" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><text x="610" y="200" text-anchor="middle" font-size="11" fill="#374151">Zunahme</text><text x="470" y="220" text-anchor="middle" font-size="10" fill="#6b7280">Schlusssaldo</text><text x="610" y="220" text-anchor="middle" font-size="10" fill="#6b7280">Anfangsbestand</text><rect x="30" y="270" width="300" height="55" rx="8" fill="#dc2626" fill-opacity="0.06" stroke="#dc2626" stroke-width="1"/><text x="180" y="292" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">Aufwandskonten</text><text x="110" y="315" text-anchor="middle" font-size="11" fill="#374151">Soll (+) Zunahme</text><text x="250" y="315" text-anchor="middle" font-size="11" fill="#6b7280">Haben (−)</text><rect x="390" y="270" width="300" height="55" rx="8" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1"/><text x="540" y="292" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Ertragskonten</text><text x="470" y="315" text-anchor="middle" font-size="11" fill="#6b7280">Soll (−)</text><text x="610" y="315" text-anchor="middle" font-size="11" fill="#374151">Haben (+) Zunahme</text><rect x="100" y="345" width="520" height="55" rx="8" fill="#3b82f6" fill-opacity="0.08"/><text x="360" y="365" text-anchor="middle" font-size="12" font-weight="600" fill="#1e40af">4 Bilanzveraenderungstypen</text><text x="135" y="385" text-anchor="middle" font-size="10" fill="#374151">Aktivtausch (a+/a−)</text><text x="270" y="385" text-anchor="middle" font-size="10" fill="#374151">Passivtausch (p−/p+)</text><text x="440" y="385" text-anchor="middle" font-size="10" fill="#374151">Kapitalbeschaffung (a+/p+)</text><text x="585" y="385" text-anchor="middle" font-size="10" fill="#374151">Kapitalrueckzahlung (a−/p−)</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aktivkonten: Zunahme im Soll, Abnahme im Haben',
            'Passivkonten: Zunahme im Haben, Abnahme im Soll',
            'Aufwandskonten: Zunahme im Soll (wie Aktivkonten)',
            'Ertragskonten: Zunahme im Haben (wie Passivkonten)',
            'SB I = vor Erfolgsverbuchung, SB II = nach Erfolgsverbuchung'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 6: Rechnungslegung – Vorschriften
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch6',
      num: 'Kapitel 6',
      title: 'Rechnungslegung – Vorschriften',
      exercises: [
        { id: 55, type: 'fill', q: 'Lückentext: Rechnungslegungs- und Bewertungsvorschriften', tips: ['OR 960 regelt Bewertung von Aktiven und Verbindlichkeiten.','Aktiven höchstens zu Anschaffungs- oder Herstellungskosten.','Einzelbewertung ist der Grundsatz, Zusammenfassung die Ausnahme.'], reveal: ['Gemäss OR 960 gilt grundsätzlich die Einzelbewertung – jeder Bilanzposten wird separat bewertet. Nur gleichartige Posten dürfen zusammengefasst werden. Warum? Damit stille Reserven nicht versteckt werden und die Bilanz ein möglichst genaues Bild zeigt.','Bei der Ersterfassung von Aktiven gibt es zwei Höchstwerte: Anschaffungskosten (für gekaufte Güter) und Herstellungskosten (für selbst produzierte Güter). Die Nutzungswertmethode kommt bei der Folgebewertung zum Einsatz. Prüfungstipp: Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Nebenkosten (Transport, Montage).','Häufiger Fehler: Verwechslung von Rechnungslegungsvorschriften und Bewertungsvorschriften. Die Rechnungslegungsvorschriften regeln die Darstellung (Form), die Bewertungsvorschriften den Wertansatz (Inhalt).'], template: 'Gemäss OR 960 gilt grundsätzlich die {0}. Nur gleichartige Posten dürfen {1} werden. Die {2} regeln die Darstellung der Jahresrechnung. Sie gelten unabhängig von Grösse und {3} des Unternehmens. Der {4} darf das {5} nicht übersteigen. Werte die im Wert {6} sind, werden mittels {7} oder durch {8} ermittelt. Bei der Ersterfassung gelten die {9} als Höchstwert. Bei der Folgebewertung kommt die {10} zum Einsatz. Selbst hergestellte Güter werden zu {11} aktiviert, eingekaufte Güter zu {12}.', blanks: [['Einzelbewertung'],['zusammengefasst'],['Rechnungslegungsvorschriften'],['Rechtsform'],['Bilanzwert'],['Eigenkapital'],['feststehende'],['Inventur'],['Schätzung'],['Anschaffungs- oder Herstellungskosten'],['Nutzungswertmethode'],['Herstellungskosten'],['Anschaffungskosten']] },
        { id: 56, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den Bewertungsvorschriften', tips: ['Für Aktiven Höchstbewertung, für FK Mindestbewertung.','Unterbewertung erlaubt (Vorsichtsprinzip).','Überbewertung von FK ist erlaubt – das ist Teil des Vorsichtsprinzips.'], reveal: ['Kernregel: Für Aktiven gelten Höchstbewertungsvorschriften (nicht Mindest-!), für FK gelten Mindestbewertungsvorschriften. Warum? Das Vorsichtsprinzip verlangt, dass man Vermögen eher zu tief und Schulden eher zu hoch ausweist. Merkhilfe: «Aktiven runter, Schulden rauf».','Unterbewertung der Aktiven ist erlaubt (stille Reserven bilden), Überbewertung jedoch nicht. Beim FK ist es umgekehrt: Überbewertung ist erlaubt. Häufiger Fehler in der Prüfung: «Unter- UND Überbewertung erlaubt» – das stimmt nur für FK, nicht für Aktiven.','Kasse, Post, Bank und leicht realisierbare Wertschriften stehen im Wert fest – hier sind keine stillen Reserven möglich. Bei der Ersterfassung gibt es zwei Höchstwerte: Anschaffungskosten (gekauft) und Herstellungskosten (selbst produziert).'], statements: [{s:'Für Aktiven gelten Mindestbewertungsvorschriften, für FK Höchstbewertungsvorschriften.', c: false,reason:'Umgekehrt.'},{s:'Der Ertragswert wird vor allem bei Immobilien angewendet.', c: false,reason:'Primär Anschaffungskosten abzüglich Abschreibungen.'},{s:'Kasse, Bank, leicht realisierbare Wertschriften stehen im Wert fest.', c: true},{s:'Unter- und Überbewertung der Aktiven ist erlaubt.', c: false,reason:'Nur Unterbewertung.'},{s:'Ersterfassung: zwei Höchstwerte (gekauft vs. selbst hergestellt).', c: true},{s:'Überbewertung von FK ist nicht erlaubt.', c: false,reason:'Überbewertung FK ist erlaubt (Vorsichtsprinzip).'}] },
        { id: 57, type: 'match', q: 'Zuordnungsaufgabe: Rechnungslegungsvorschriften', tips: ['Grundsätze: Klarheit, Verständlichkeit, Vollständigkeit.','Jahresrechnung: Bilanz, Erfolgsrechnung, Anhang.','Geschäftsbericht = Jahresrechnung + Lagebericht.'], reveal: ['Die Grundsätze ordnungsmässiger Rechnungslegung (GoR) umfassen Klarheit, Verständlichkeit, Vollständigkeit und Verlässlichkeit. Die Jahresrechnung besteht aus Bilanz, Erfolgsrechnung und Anhang. Warum ein Anhang? Er enthält Erläuterungen, die für das Verständnis der Zahlen notwendig sind.','Der Geschäftsbericht ist umfassender als die Jahresrechnung: Er enthält zusätzlich einen Lagebericht. Prüfungstipp: Grössere Unternehmen (Umsatz > CHF 20 Mio., Bilanzsumme > CHF 10 Mio., > 50 Vollzeitstellen – 2 von 3 Kriterien) unterliegen strengeren Vorschriften.','Die Buchführungspflicht ist in OR 957 geregelt. Juristische Personen sind in jedem Fall buchführungspflichtig. Einzelunternehmen und Personengesellschaften mit weniger als CHF 500 000 Umsatz können eine vereinfachte Buchführung führen.'], pairs: [{l:'1. Grundsätze ordnungsmässiger Rechnungslegung',r:'C'},{l:'2. Jahresrechnung',r:'E'},{l:'3. Lagebericht',r:'H'},{l:'4. Grundlage der Rechnungslegung',r:'A'},{l:'5. Geschäftsbericht',r:'B'},{l:'6. Buchführungspflicht',r:'F'},{l:'7. Strengere Vorgaben für grössere Unternehmen',r:'G'},{l:'8. Darstellungsformen der Erfolgsrechnung',r:'D'}], options: ['A','B','C','D','E','F','G','H'] },
        { id: 58, type: 'text', q: 'Theoriefragen zu den Bewertungsvorschriften', tips: ['Bewertung = Frankenwert jedem Posten zuordnen.','Niederstwertprinzip bei Vorräten.','Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Nebenkosten.'], reveal: ['Bewertung bedeutet, jedem Bilanzposten einen Frankenwert zuzuordnen. Bei der Bewertung von Vorräten gilt das Niederstwertprinzip: Man nimmt den tieferen Wert von Anschaffungs-/Herstellungskosten und aktuellem Marktwert. Warum? Das Vorsichtsprinzip verlangt, Vermögen nicht zu hoch auszuweisen.','«Lower of cost or market» ist die englische Bezeichnung für das Niederstwertprinzip. Bei den Laborgeräten bilanziert man zum tieferen Preis (CHF 2 950 statt CHF 5 290). Prüfungstipp: Immer fragen – was ist tiefer: Anschaffungswert oder aktueller Marktwert?','Anschaffungskosten gelten für Sachanlagen im Anlagevermögen. Die Berechnung: Katalogpreis − Rabatt − Skonto + Transport + Montage + Installation. Häufiger Fehler: Skonto vergessen oder Nebenkosten nicht dazurechnen.'], questions: [{id:'a',q:'Was ist Bewertung?',keywords:['Frankenwert','Bilanzposten','Wert']},{id:'b',q:'Laborgeräte: zu welchem Preis bilanzieren?',keywords:['2950','5290','Niederstwert']},{id:'c',q:'Lower of cost or market übersetzen',keywords:['Niederstwert','niedrigere']},{id:'d',q:'Für welche Position gilt «Anschaffungskosten»?',keywords:['Sachanlage','Anlagevermögen']}] },
        { id: 59, type: 'mc', q: 'Wählen Sie die Antwort: Bewertungsfragen beim Jahresabschluss', tips: ['Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Transport + Montage.','Vorräte: Niederstwertprinzip.','Wertschriften: Börsenkurs am Stichtag, wenn tiefer als Anschaffungswert.'], reveal: ['Spezialmaschine: CHF 129 000.– ist korrekt. Berechnung: Katalogpreis − Rabatt − Skonto + Transport + Montage. Warum werden Transport und Montage dazugerechnet? Weil sie notwendig sind, damit die Maschine betriebsbereit ist (= Anschaffungsnebenkosten).','Rohmaterialien: CHF 240.– ist korrekt (Niederstwertprinzip). Man vergleicht den Einstandspreis mit dem aktuellen Marktwert und nimmt den tieferen. Prüfungstipp: Bei Vorräten immer Niederstwertprinzip anwenden!','Wertschriften und Liegenschaften: Bei Wertschriften gilt der Börsenkurs am Bilanzstichtag (wenn tiefer). Bei Liegenschaften die Anschaffungskosten abzüglich Abschreibungen. Häufiger Fehler: Verkehrswert statt Buchwert verwenden.'], questions: [{id:'a',q:'Aktivierung Spezialmaschine?',options:['CHF 95 000.–','CHF 125 000.–','CHF 129 000.–','CHF 117 000.–'],answer:2},{id:'b',q:'Bewertung Rohmaterialien?',options:['CHF 250.–','CHF 240.–','CHF 265.–','CHF 275.–'],answer:1},{id:'c',q:'Wertschriften bilanzieren?',options:['Zum Anschaffungswert','Zum höheren Börsenkurs','Zum tieferen Börsenkurs am Stichtag','Zum Durchschnittswert'],answer:2},{id:'d',q:'Liegenschaft bilanzieren?',options:['750 000.–','386 000.–','450 000.–','610 000.–'],answer:2}] },
        { id: 60, type: 'sort', q: 'Bringen Sie die Schritte der Bewertung von Aktiven in die richtige Reihenfolge – vom Kauf bis zur Bilanz.', items: ['Anschaffungskosten ermitteln (Katalogpreis − Rabatt − Skonto + Nebenkosten)','Ersterfassung zum Höchstwert (Anschaffungs- oder Herstellungskosten)','Jährliche Abschreibung vornehmen','Buchwert mit aktuellem Wert vergleichen (Niederstwertprinzip)','Bilanzierung zum resultierenden Buchwert'], correctOrder: [0,1,2,3,4], tips: ['Der erste Schritt ist immer die Berechnung der Anschaffungskosten.','Nach der Ersterfassung folgen jährliche Abschreibungen.','Vor der Bilanzierung wird geprüft, ob der Buchwert noch gerechtfertigt ist.'], reveal: ['Die Bewertung folgt einem klaren Ablauf: Zuerst werden die Anschaffungskosten berechnet (Katalogpreis − Rabatt − Skonto + alle Nebenkosten wie Transport, Montage). Dann wird das Aktivum zum Höchstwert ersterfasst.','Nach der Ersterfassung wird jährlich abgeschrieben. Vor dem Bilanzstichtag prüft man, ob der Buchwert den aktuellen Wert nicht übersteigt (Niederstwertprinzip). Der resultierende Buchwert erscheint in der Bilanz.','Prüfungstipp: Diese Reihenfolge gilt für alle Sachanlagen. Bei Umlaufvermögen (z.B. Vorräte) entfällt die Abschreibung – dort gilt direkt das Niederstwertprinzip.'] },
        { id: 61, type: 'mc', q: 'Welche Aussagen zu den Grundsätzen ordnungsmässiger Rechnungslegung (GoR) sind korrekt?', tips: ['GoR sind in OR 958c geregelt.','Die Jahresrechnung muss ein zuverlässiges Bild der wirtschaftlichen Lage vermitteln.','Stetigkeit bedeutet: gleiche Methoden von Jahr zu Jahr.'], reveal: ['Die GoR umfassen: Klarheit, Verständlichkeit, Vollständigkeit, Verlässlichkeit und Stetigkeit. Warum Stetigkeit? Damit die Jahresabschlüsse verschiedener Jahre vergleichbar bleiben. Ein Methodenwechsel muss im Anhang offengelegt werden.','Die Jahresrechnung muss ein zuverlässiges Bild der wirtschaftlichen Lage vermitteln (true and fair view). Das bedeutet nicht, dass keine stillen Reserven erlaubt sind – aber die wesentlichen Informationen müssen korrekt sein.','Prüfungstipp: Die GoR sind Mindestanforderungen. Grössere Unternehmen und börsenkotierte Gesellschaften müssen zusätzliche Standards einhalten (z.B. Swiss GAAP FER oder IFRS).'], questions: [{id:'a',q:'Welcher Grundsatz verlangt, dass die gleichen Bewertungsmethoden von Jahr zu Jahr angewendet werden?',options:['Klarheit','Vollständigkeit','Stetigkeit','Verlässlichkeit'],answer:2},{id:'b',q:'Woraus besteht die Jahresrechnung gemäss OR?',options:['Bilanz und Erfolgsrechnung','Bilanz, Erfolgsrechnung und Anhang','Bilanz, Erfolgsrechnung, Anhang und Lagebericht','Geschäftsbericht und Revisionsbericht'],answer:1},{id:'c',q:'Ab welchem Umsatz gilt die ordentliche Revision?',options:['CHF 10 Mio.','CHF 20 Mio.','CHF 40 Mio.','CHF 100 Mio.'],answer:2}] },
        { id: 62, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Buchführungspflicht und Jahresrechnung', tips: ['Einzelunternehmen unter CHF 500 000 Umsatz: vereinfachte Buchführung (Milchbüchleinrechnung).','Juristische Personen sind immer buchführungspflichtig.','Der Anhang enthält Angaben zu Bewertungsgrundsätzen.'], reveal: ['Juristische Personen (AG, GmbH, Genossenschaften) sind immer buchführungspflichtig – unabhängig vom Umsatz. Einzelunternehmen und Personengesellschaften unter CHF 500 000 Umsatz dürfen eine vereinfachte Buchführung führen (Einnahmen-Ausgaben-Rechnung).','Der Anhang ist ein Pflichtbestandteil der Jahresrechnung. Er enthält Angaben zu den angewandten Bewertungsgrundsätzen, aussergewöhnlichen Positionen und weiteren gesetzlich verlangten Informationen. Warum ist der Anhang wichtig? Er macht die Zahlen in Bilanz und ER erst richtig interpretierbar.','Häufiger Fehler: Verwechslung von Jahresrechnung und Geschäftsbericht. Die Jahresrechnung (Bilanz + ER + Anhang) ist für alle Pflicht. Der Geschäftsbericht (Jahresrechnung + Lagebericht) nur für grössere Unternehmen.'], statements: [{s:'Einzelunternehmen mit CHF 300 000 Umsatz müssen eine doppelte Buchhaltung führen.', c: false,reason:'Unter CHF 500 000 Umsatz ist vereinfachte Buchführung erlaubt.'},{s:'Eine AG ist immer buchführungspflichtig, unabhängig vom Umsatz.', c: true},{s:'Der Anhang ist ein freiwilliger Bestandteil der Jahresrechnung.', c: false,reason:'Der Anhang ist ein Pflichtbestandteil gemäss OR 958.'},{s:'Der Geschäftsbericht ist für alle Unternehmen obligatorisch.', c: false,reason:'Nur für grössere Unternehmen (2 von 3 Grössenkriterien).'},{s:'Die Erfolgsrechnung kann als Produktions- oder Absatzerfolgsrechnung dargestellt werden.', c: true}] },
        { id: 63, type: 'calc', q: 'Berechnung der Anschaffungskosten verschiedener Anlagegüter', tips: ['Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Nebenkosten.','Nebenkosten: Transport, Montage, Installation, Zoll.','Skonto wird auf den bereits rabattierten Preis berechnet.'], reveal: ['Maschine: Katalogpreis CHF 80 000 − 10% Rabatt = CHF 72 000 − 2% Skonto = CHF 70 560 + Transport CHF 1 200 + Montage CHF 3 240 = CHF 75 000. Warum Nebenkosten dazu? Alles, was nötig ist, damit die Anlage betriebsbereit ist, gehört zu den Anschaffungskosten.','Fahrzeug: Katalogpreis CHF 45 000 − 15% Rabatt = CHF 38 250 − 3% Skonto = CHF 37 103 + Überführung CHF 897 = CHF 38 000. Prüfungstipp: Skonto immer auf den rabattierten Preis berechnen, nicht auf den Katalogpreis!','Häufiger Fehler: Vergessen, dass Rabatt VOR Skonto abgezogen wird. Die Reihenfolge ist immer: Katalogpreis → minus Rabatt → minus Skonto → plus Nebenkosten.'], calcs: [{label:'Maschine: Anschaffungskosten',answer:75000},{label:'Fahrzeug: Anschaffungskosten',answer:38000}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die gesetzlichen Rechnungslegungsvorschriften (OR) kennen',
            'Die Bewertungsvorschriften für Aktiven und Fremdkapital verstehen',
            'Den Aufbau eines Geschäftsberichts kennen (Jahresrechnung, Lagebericht)',
            'Die Grundsätze ordnungsmässiger Rechnungslegung anwenden'
          ]},
          { type: 'concept', title: 'Bewertungsvorschriften', content: 'Gemäss OR 960 ist bei Aktiven und Verbindlichkeiten grundsätzlich die Einzelbewertung vorgeschrieben. Für Aktiven gelten Höchstbewertungsvorschriften (max. Anschaffungs- oder Herstellungskosten), für Fremdkapital gelten Mindestbewertungsvorschriften. Eine Unterbewertung der Aktiven ist erlaubt (Vorsichtsprinzip), eine Überbewertung nicht.', highlight: 'Aktiven: Höchstbewertung. FK: Mindestbewertung. Unterbewertung erlaubt, Überbewertung nicht.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Jahresrechnung', def: 'Bilanz, Erfolgsrechnung und Anhang.' },
            { term: 'Geschäftsbericht', def: 'Jahresrechnung + Lagebericht (für grössere Unternehmen).' },
            { term: 'Buchführungspflicht', def: 'Nach OR 957 für juristische Personen in jedem Fall.' },
            { term: 'Anschaffungskosten', def: 'Katalogpreis − Rabatt − Skonto + Transport + Montage.' },
            { term: 'Herstellungskosten', def: 'Höchstwert für selbst produzierte Güter.' },
            { term: 'GoR', def: 'Grundsätze ordnungsmässiger Rechnungslegung: Klarheit, Verständlichkeit, Vollständigkeit, Verlässlichkeit.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Gemäss OR 960a gibt es bei der Ersterfassung von Aktiven zwei Höchstwerte: Anschaffungskosten (für gekaufte Güter) und Herstellungskosten (für selbst produzierte Güter). Kasse, Post- und Bankkonten sowie leicht realisierbare Wertschriften stehen im Wert fest.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aktiven: Höchstbewertung (Anschaffungs-/Herstellungskosten). FK: Mindestbewertung',
            'Unterbewertung Aktiven erlaubt (Vorsichtsprinzip), Überbewertung nicht',
            'Jahresrechnung = Bilanz + ER + Anhang; Geschäftsbericht = Jahresrechnung + Lagebericht',
            'GoR: Klarheit, Verständlichkeit, Vollständigkeit, Verlässlichkeit, Stetigkeit'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 7: Abschreibungen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch7',
      num: 'Kapitel 7',
      title: 'Abschreibungen',
      exercises: [
        { id: 64, type: 'fill', q: 'Lückentext: Wertanpassungen (Abschreibungen)', tips: ['Linear: Prozent der Anschaffungskosten.','Indirekte Abschreibung: Wertberichtigungskonto.','Leistungsabhängige Abschreibung: pro Leistungseinheit berechnet.'], reveal: ['Bei der linearen Abschreibung wird ein fester Prozentsatz der Anschaffungskosten abgeschrieben – der jährliche Betrag bleibt konstant. Warum «linear»? Weil die Abschreibung wie eine gerade Linie verläuft.','Bei der leistungsabhängigen Abschreibung wird der Abschreibungsbetrag pro Leistungseinheit berechnet. Der Jahresbetrag variiert je nach tatsächlicher Nutzung.','Die indirekte Abschreibung erfolgt über ein Wertberichtigungskonto (WB). Vorteil: Die ursprünglichen Anschaffungskosten bleiben sichtbar. Prüfungstipp: Die indirekte Methode ist aufschlussreicher.'], template: 'Bei der {0} Abschreibung wird ein fester Prozentsatz der {1} abgeschrieben. Bei der {2} Abschreibung wird der Betrag pro {3} berechnet. Es wird ein {4} ermittelt. Die {5} ist ein Konto für die {6} Abschreibungsmethode.', blanks: [['linearen','linear'],['Anschaffungskosten'],['leistungsabhängigen'],['Leistungseinheiten'],['Abschreibungsbetrag pro Leistungseinheit'],['Wertberichtigung','WB'],['indirekte','indirekten']] },
        { id: 65, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Sachanlagen und Abschreibungen', tips: ['Bei indirekter Abschreibung: kumulierte Abschreibungen aus WB-Konto.','WB ist ein Minus-Aktivkonto.','Degressive Abschreibung: Prozent des sinkenden Buchwerts.'], reveal: ['Die kumulierten Abschreibungen sind bei der indirekten Methode im WB-Konto ersichtlich. Bei der Umstellung von direkt auf indirekt bucht man: Anlagekonto / WB Anlagekonto.','Das WB-Konto ist ein Minus-Aktivkonto (nicht Passiv!). Es steht auf der Aktivseite der Bilanz und wird vom Anlagekonto abgezogen. Merkhilfe: WB reduziert den Wert eines Aktivums, also gehört es zur Aktivseite.','Bei der degressiven Abschreibung wird ein fester Prozentsatz des aktuellen Buchwerts abgeschrieben. Da der Buchwert jedes Jahr sinkt, wird auch der Abschreibungsbetrag kleiner. Der Wert null wird theoretisch nie erreicht.'], statements: [{s:'Kumulierte Abschreibungen bei indirekter Methode aus Konto Abschreibungen.', c: true},{s:'Bei Abschreibung vom Buchwert wird Wert null nicht erreicht.', c: true},{s:'Bei indirekter Abschreibung bleibt Betrag immer gleich.', c: false,reason:'Hängt von der Methode ab.'},{s:'Umstellung: Maschine an WB Maschine.', c: true},{s:'WB ist ein Minus-Passivkonto.', c: false,reason:'WB ist ein Minus-Aktivkonto.'},{s:'Degressive Abschreibung: Prozent des Buchwerts.', c: true}] },
        { id: 66, type: 'calc', q: 'Wirkungen von Über- bzw. Unterbewertungen im Fremdkapital', tips: ['Rückstellungen sind FK.','Bei richtiger Bewertung: Rückstellung = 60, EK = 500.','Überbewertung FK → EK wird zu tief ausgewiesen.'], reveal: ['Fall 1 (richtige Bewertung): Rückstellungen = 60, EK = 500. Die Bilanzgleichung: Aktiven = FK + EK. Wenn Aktiven gleich bleiben, bestimmt die Höhe der Rückstellungen das EK.','Fall 2 (Unterbewertung FK): Rückstellungen = 3, EK = 557. Warum steigt das EK? Weniger Rückstellungen → EK erscheint höher → Erfolg zu hoch ausgewiesen. Gemäss OR nicht erlaubt!','Fall 3 (Überbewertung FK): Rückstellungen = 90, EK = 470. Überbewertung FK ist erlaubt (Vorsichtsprinzip). Prüfungstipp: Rückstellungen sind ein beliebtes Instrument zur Bildung stiller Reserven.'], correctRueck: [60,3,90], correctEK: [500,557,470] },
        { id: 67, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Inventar und Inventur', tips: ['Inventar = Verzeichnis. Inventur = Tätigkeit der Bestandsaufnahme.','Inventar enthält alle zu bewertenden Posten.','Merkhilfe: InventUR = die TätigkeitUR (Tun/Durchführung).'], reveal: ['Inventar ist das Verzeichnis (Ergebnis), Inventur ist die Tätigkeit der Bestandsaufnahme (Zählen, Messen, Wiegen). Merkhilfe: InventUR = die DurchführUng. InventAR = das Resultat auf Papier.','Das Inventar umfasst alle zu bewertenden Posten – nicht nur belegte und nicht sämtliche. Warum nicht alle? Manche Posten sind nicht bewertbar (z.B. Goodwill bei Eigenentwicklung).','Häufiger Prüfungsfehler: Definitionen von Inventar und Inventur werden vertauscht. «Inventur ist ein Verzeichnis» ist falsch! Inventur ist die Tätigkeit, Inventar ist das Verzeichnis.'], statements: [{s:'Das Inventar ist ein Verzeichnis, Resultat einer Bestandsaufnahme.', c: true},{s:'Inventar enthält nur belegte Posten.', c: false,reason:'Alle zu bewertenden Posten.'},{s:'Inventur ist ein detailliertes Verzeichnis.', c: false,reason:'Inventur ist die Tätigkeit der Bestandsaufnahme. Das Inventar ist das Verzeichnis.'},{s:'Inventur ist die Tätigkeit der Bestandsaufnahme.', c: true},{s:'Inventar umfasst sämtliche Posten.', c: false,reason:'Nur die zu bewertenden.'},{s:'Inventar umfasst die zu bewertenden Posten.', c: true}] },
        { id: 68, type: 'text', q: 'Theoriefragen zur Abschreibung', tips: ['Indirekte Methode ist aufschlussreicher.','Abschreibungen sind nicht zahlungswirksam.','Bei direkter Abschreibung sind Anschaffungskosten nicht mehr ersichtlich.'], reveal: ['Die indirekte Methode ist aufschlussreicher, weil Anschaffungskosten und kumulierte Abschreibungen separat ersichtlich sind. Man sieht sofort, wie alt eine Anlage ist.','Linear = von Anschaffungskosten (konstanter Betrag). Degressiv = vom Buchwert (abnehmender Betrag). Prüfungstipp: «Linear» und «Anschaffungskosten» gehören zusammen.','Abschreibungen sind nicht zahlungswirksam – es fliesst kein Geld ab. Sie vermindern den Gewinn, aber nicht die Liquidität. Bei direkter Abschreibung sind Anschaffungskosten nicht mehr ermittelbar.'], questions: [{id:'a',q:'Welches Verfahren ist aufschlussreicher?',keywords:['indirekte','aufschlussreich']},{id:'b',q:'Abschreibung von Anschaffungskosten vs. Buchwert?',keywords:['konstant','linear','degressiv']},{id:'c',q:'Unterschied zu anderem Aufwand?',keywords:['nicht zahlungswirksam']},{id:'d',q:'Buchwert bei indirekter Abschreibung ermittelbar?',keywords:['ja','WB','Differenz']},{id:'e',q:'Anschaffungskosten bei direkter Abschreibung ermittelbar?',keywords:['nein','nicht','direkt']}] },
        { id: 69, type: 'sort', q: 'Sortieren Sie die Abschreibungsmethoden nach der Geschwindigkeit des Wertverlusts – von der schnellsten zur langsamsten Wertminderung in den ersten Jahren.', items: ['Degressive Abschreibung (vom Buchwert)','Lineare Abschreibung (von Anschaffungskosten)','Leistungsabhängige Abschreibung (bei geringer Nutzung)'], correctOrder: [0,1,2], tips: ['Degressiv: hoher Abschreibungsbetrag am Anfang, dann abnehmend.','Linear: gleichbleibender Betrag über die ganze Nutzungsdauer.','Leistungsabhängig: hängt von der tatsächlichen Nutzung ab.'], reveal: ['Die degressive Methode schreibt in den ersten Jahren am meisten ab, weil der Prozentsatz auf den (noch hohen) Buchwert angewendet wird. Beispiel: 40% von CHF 100 000 = CHF 40 000 im 1. Jahr, aber nur CHF 24 000 im 2. Jahr.','Die lineare Methode verteilt den Wertverlust gleichmässig. Bei CHF 100 000 und 5 Jahren Nutzungsdauer sind es konstant CHF 20 000 pro Jahr.','Die leistungsabhängige Methode bei geringer Nutzung führt zu den niedrigsten Abschreibungen. Prüfungstipp: In der Praxis wird oft die degressive Methode gewählt, weil der steuerlich höhere Aufwand in den ersten Jahren vorteilhaft ist.'] },
        { id: 70, type: 'calc', q: 'Lineare vs. degressive Abschreibung einer Maschine (Anschaffungskosten CHF 100 000, 5 Jahre Nutzungsdauer, linear 20%, degressiv 40%)', tips: ['Linear: 20% von CHF 100 000 = CHF 20 000 pro Jahr.','Degressiv: 40% vom jeweiligen Buchwert.','Nach 5 Jahren linear: Buchwert = 0. Degressiv: Buchwert > 0.'], reveal: ['Linear: Jedes Jahr CHF 20 000 Abschreibung. Buchwerte: 80 000 → 60 000 → 40 000 → 20 000 → 0. Der Betrag ist immer gleich, nur der Buchwert sinkt gleichmässig.','Degressiv: Jahr 1: 40% von 100 000 = 40 000 (BW 60 000). Jahr 2: 40% von 60 000 = 24 000 (BW 36 000). Jahr 3: 40% von 36 000 = 14 400 (BW 21 600). Der Buchwert erreicht theoretisch nie null.','Prüfungstipp: Bei degressiver Abschreibung ist der Gesamtabschreibungsbetrag nach gleicher Laufzeit tiefer als bei linear. In der Praxis wird oft bei einem bestimmten Restwert auf linear umgestellt.'], calcs: [{label:'Linear – Abschreibung Jahr 3',answer:20000},{label:'Linear – Buchwert nach Jahr 3',answer:40000},{label:'Degressiv – Abschreibung Jahr 1',answer:40000},{label:'Degressiv – Buchwert nach Jahr 2',answer:36000},{label:'Degressiv – Abschreibung Jahr 3',answer:14400}] },
        { id: 71, type: 'mc', q: 'Fragen zur direkten und indirekten Abschreibungsmethode', tips: ['Direkt: Abschreibung auf dem Anlagekonto selbst.','Indirekt: Abschreibung über WB-Konto.','WB steht auf der Aktivseite als Minusposten.'], reveal: ['Bei der direkten Methode wird der Abschreibungsbetrag direkt vom Anlagekonto abgezogen. Nachteil: Anschaffungskosten nicht mehr ersichtlich. Buchung: Abschreibungen / Anlagekonto.','Bei der indirekten Methode wird ein separates WB-Konto geführt. Buchung: Abschreibungen / WB Anlagekonto. Vorteil: Anschaffungskosten und kumulierte Abschreibungen jederzeit separat ersichtlich.','Prüfungstipp: Buchwert = Anlagekonto − WB-Konto. In der Bilanz erscheint bei indirekter Methode das Anlagekonto zum vollen Anschaffungswert.'], questions: [{id:'a',q:'Wie lautet die Buchung bei indirekter Abschreibung?',options:['Abschreibungen / Maschine','Maschine / WB Maschine','Abschreibungen / WB Maschine','WB Maschine / Abschreibungen'],answer:2},{id:'b',q:'Was ist ein Vorteil der indirekten Methode?',options:['Weniger Buchungen nötig','Anschaffungskosten bleiben sichtbar','Tiefere Steuern','Schnellere Abschreibung'],answer:1},{id:'c',q:'Wo steht das WB-Konto in der Bilanz?',options:['Passivseite als FK','Aktivseite als Minusposten','Erfolgsrechnung als Aufwand','Passivseite als Minus-EK'],answer:1}] },
        { id: 72, type: 'match', q: 'Ordnen Sie die Begriffe der richtigen Abschreibungsmethode zu.', tips: ['Linear = gleichbleibender Betrag.','Degressiv = abnehmender Betrag.','Direkt/Indirekt betrifft die Verbuchung, nicht die Berechnung.'], reveal: ['Die Berechnungsmethoden (linear, degressiv, leistungsabhängig) bestimmen WIE VIEL abgeschrieben wird. Die Verbuchungsmethoden (direkt, indirekt) bestimmen WIE es verbucht wird. Man kann jede Berechnungsmethode mit jeder Verbuchungsmethode kombinieren.','Gleichbleibender Betrag = linear (% der Anschaffungskosten). Abnehmender Betrag = degressiv (% des Buchwerts). WB-Konto = indirekte Methode. Merkhilfe: «Linear = Linie = gerade = gleichbleibend».','Prüfungstipp: «Abschreibung vom Buchwert» und «degressiv» sind Synonyme. «Abschreibung von den Anschaffungskosten» und «linear» sind Synonyme.'], pairs: [{l:'Gleichbleibender Abschreibungsbetrag',r:'Lineare Methode'},{l:'Abnehmender Abschreibungsbetrag',r:'Degressive Methode'},{l:'Prozent der Anschaffungskosten',r:'Lineare Methode'},{l:'Prozent des Buchwerts',r:'Degressive Methode'},{l:'WB-Konto wird geführt',r:'Indirekte Methode'},{l:'Anschaffungskosten nicht mehr sichtbar',r:'Direkte Methode'},{l:'Nutzung bestimmt den Betrag',r:'Leistungsabhängige Methode'}], options: ['Lineare Methode','Degressive Methode','Direkte Methode','Indirekte Methode','Leistungsabhängige Methode'] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Methoden der Abschreibung kennen (linear, degressiv, leistungsabhängig)',
            'Direkte und indirekte Abschreibungsmethode unterscheiden',
            'Wirkungen von Über- und Unterbewertungen im Fremdkapital verstehen',
            'Inventar und Inventur unterscheiden'
          ]},
          { type: 'concept', title: 'Abschreibungsmethoden', content: 'Bei den linearen Abschreibungen wird der jährliche Abschreibungsbetrag in Prozent der Anschaffungskosten berechnet (konstanter Betrag). Bei der degressiven Methode wird in Prozent des Buchwerts abgeschrieben (abnehmender Betrag). Bei der leistungsabhängigen Methode wird der Abschreibungsbetrag pro Leistungseinheit mit den beanspruchten Leistungseinheiten multipliziert.', highlight: 'Linear = % der Anschaffungskosten. Degressiv = % des Buchwerts.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Direkte Abschreibung', def: 'Abschreibung direkt auf dem Anlagekonto. Anschaffungskosten nicht mehr ersichtlich.' },
            { term: 'Indirekte Abschreibung', def: 'Abschreibung über ein Wertberichtigungskonto (WB). Anschaffungskosten bleiben sichtbar.' },
            { term: 'Wertberichtigung (WB)', def: 'Minus-Aktivkonto. Zeigt die kumulierten Abschreibungen.' },
            { term: 'Buchwert', def: 'Anschaffungskosten − kumulierte Abschreibungen.' },
            { term: 'Inventar', def: 'Verzeichnis (Ergebnis der Bestandsaufnahme).' },
            { term: 'Inventur', def: 'Tätigkeit der Bestandsaufnahme.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Das Wertberichtigungskonto (WB) ist ein Minus-Aktivkonto (nicht ein Passivkonto!). Bei der degressiven Abschreibung wird der Wert null normalerweise nicht erreicht. Abschreibungen sind nicht zahlungswirksam (kein Geldabfluss). Die indirekte Methode ist aufschlussreicher, da Anschaffungskosten und kumulierte Abschreibungen separat ersichtlich sind.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Linear = % der Anschaffungskosten (konstanter Betrag), degressiv = % des Buchwerts (abnehmend)',
            'Direkte Methode: auf dem Anlagekonto. Indirekte Methode: über WB-Konto (aufschlussreicher)',
            'WB ist ein Minus-Aktivkonto, Buchwert = Anlagekonto − WB',
            'Inventar = Verzeichnis (Ergebnis), Inventur = Tätigkeit der Bestandsaufnahme'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 8: Wertanpassungen und Rechnungsabgrenzungen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch8',
      num: 'Kapitel 8',
      title: 'Wertanpassungen und Rechnungsabgrenzungen',
      exercises: [
        { id: 73, type: 'fill', q: 'Lückentext: Wertanpassungen', tips: ['Verluste aus Forderungen vom Konto Debitoren abgeschrieben.','Bestandskorrekturen: Soll-Zunahme positiv, Haben-Abnahme negativ.','Endgültige Verluste werden direkt abgeschrieben.'], reveal: ['Endgültige Verluste aus Forderungen werden direkt vom Konto Forderungen L+L abgeschrieben. Warum direkt? Weil der Verlust feststeht und die Forderung definitiv uneinbringlich ist. Buchung: Verluste Forderungen / Forderungen L+L.','Bestandskorrekturen ergeben sich aus der Inventur. Zunahmen (Soll) wirken positiv auf den Periodenerfolg, Abnahmen (Haben) wirken negativ. Warum? Mehr Bestand = mehr Vermögen = höherer Gewinn.','Prüfungstipp: «Direkt» heisst direkt auf dem Bestandskonto buchen. «Indirekt» heisst über ein Wertberichtigungskonto. Bei tatsächlichen Verlusten immer direkt!'], template: 'Bei {0} Verlusten aus Forderungen wird der Betrag {1} vom Konto Forderungen L+L abgeschrieben. Nicht {2} Verluste werden {3} ein Wertberichtigungskonto erfasst. Das Aufwandkonto heisst {4}. {5} ergeben sich aus der Inventur. Zunahmen werden im {6} verbucht und wirken {7} auf den Periodenerfolg. Abnahmen werden im {8} verbucht und wirken {9}.', blanks: [['endgültigen'],['direkt'],['endgültigen'],['über','indirekt'],['Verluste Forderungen','Debitorenverluste'],['Bestandskorrekturen'],['Soll'],['negativ'],['Haben'],['positiv']] },
        { id: 74, type: 'fill', q: 'Lückentext: Rechnungsabgrenzungen', tips: ['ARA = Transitorische Aktiven.','Rückstellungen für ungewisse Verpflichtungen.','ARA: vorausbezahlter Aufwand oder noch ausstehender Ertrag.'], reveal: ['Transitorische Aktiven (ARA) entstehen, wenn Aufwand im Voraus bezahlt wurde (betrifft nächste Periode) oder Ertrag der laufenden Periode noch nicht erhalten wurde. Transitorische Passiven (PRA) wirken umgekehrt. Merkhilfe: ARA = «Aktivum, weil wir noch etwas zugut haben».','Ohne Abgrenzung wäre der Aufwand zu hoch oder zu tief ausgewiesen. Warum ist das wichtig? Das Periodizitätsprinzip verlangt, dass Aufwand und Ertrag der richtigen Periode zugeordnet werden.','Rückstellungen werden für ungewisse Verpflichtungen gebildet – unsicher bezüglich Höhe, Betrag und/oder Zeitpunkt. Prüfungstipp: Rückstellungen ≠ Rechnungsabgrenzungen! Rückstellungen betreffen unsichere Verpflichtungen, Abgrenzungen betreffen zeitliche Zuordnung.'], template: '{0} (ARA) entstehen, wenn Aufwand im Voraus bezahlt wurde oder Ertrag noch aussteht. {1} (PRA) entstehen bei noch nicht bezahltem Aufwand oder vorauserhaltenem Ertrag. Fall 1: Der {2} wurde im Voraus bezahlt und betrifft die {3} Periode. Ohne Abgrenzung wäre der Aufwand der {4} Periode {5} ausgewiesen. Fall 2: Der {6} betrifft die {7} Periode, wurde aber noch nicht bezahlt. Ohne Abgrenzung wäre der Aufwand der {8} Periode {9} ausgewiesen. Rückstellungen werden für Verpflichtungen gebildet, bei denen {10}, {11} und/oder {12} unsicher sind.', blanks: [['Transitorische Aktiven','TA'],['Transitorische Passiven','TP'],['Aufwand'],['nächste'],['nächste'],['zu hoch'],['Aufwand'],['laufende'],['laufende'],['zu tief'],['Höhe'],['Betrag'],['Zeitpunkt']] },
        { id: 75, type: 'tf', q: 'Richtig oder falsch? Forderungen, WB, transitorische Posten, Rückstellungen', tips: ['Verluste Forderungen ist ein Aufwandkonto.','ARA = UV, PRA = kurzfristiges FK.','Buchung Rückstellung: Aufwandkonto / Rückstellungen.'], reveal: ['Verluste Forderungen ist ein Aufwandkonto (nicht Ertragsminderung!). WB-Bestand ist abhängig vom Forderungsbestand – steigen die Forderungen, steigt auch die WB. Am Jahresende wird nur die Differenz zum bestehenden WB-Bestand gebucht, nicht der ganze Betrag.','ARA gehören zum Umlaufvermögen (Aktivseite), PRA zum kurzfristigen Fremdkapital (Passivseite). Warum? ARA = wir haben etwas vorausbezahlt, also haben wir ein «Guthaben» (Aktivum). PRA = wir schulden noch etwas (Passivum).','Die Buchung für Rückstellungen lautet: Aufwandkonto / Rückstellungen (nicht umgekehrt!). Warum? Die Bildung belastet den Aufwand und erhöht das FK. Häufiger Fehler: Soll und Haben bei Rückstellungen vertauschen.'], statements: [{s:'Verluste Forderungen ist Ertragsminderungskonto.', c: false,reason:'Es ist ein Aufwandkonto.'},{s:'WB-Bestand abhängig vom Forderungsbestand.', c: true},{s:'Am Ende wird immer der ganze WB-Betrag gebucht.', c: false,reason:'Nur die Differenz.'},{s:'ARA zum UV, PRA zum FK.', c: true},{s:'Gesamtrückstellungen für gleichartige Vorgänge.', c: true},{s:'Bildung Rückstellung ist erfolgswirksam.', c: true},{s:'Rückstellung: Soll Rückstellungen / Haben Erfolgskonto.', c: false,reason:'Umgekehrt: Soll Aufwandkonto / Haben Rückstellungen.'}] },
        { id: 76, type: 'calc', q: 'Berechnung WB Forderungen (Delkredere)', tips: ['WB in CHF = Forderungsbestand × WB-Satz in %.','Am Jahresende wird nur die Differenz zum bestehenden WB-Bestand gebucht.','Rückwärtsrechnung: Forderungsbestand = WB-Betrag / WB-Satz.'], reveal: ['Jahr 1: WB = 80 000 × 5% = CHF 4 000. Die Formel ist einfach: Forderungsbestand × WB-Satz = erforderlicher WB-Bestand. Warum pauschal? Weil man nicht jede einzelne Forderung beurteilen kann.','Jahr 2: Rückwärtsrechnung – Forderungsbestand = WB-Betrag / WB-Satz = 5 000 / 4% = CHF 125 000. Prüfungstipp: Bei Rückwärtsrechnungen den WB-Betrag durch den Prozentsatz teilen.','Häufiger Fehler: Den gesamten WB-Betrag buchen statt nur die Differenz. Wenn bereits CHF 3 000 WB vorhanden sind und CHF 4 000 nötig sind, wird nur die Differenz von CHF 1 000 gebucht.'], calcs: [{label:'Jahr 1',answer:4000},{label:'Jahr 2',answer:125000},{label:'Jahr 3',answer:4400},{label:'Jahr 4',answer:6}] },
        { id: 77, type: 'check', q: 'Geschäftsfälle betragsmässig zwischen zwei Jahren abgrenzen', tips: ['Prüfen: Buchung ins laufende oder nächste Jahr?','Verursachung im selben Jahr → keine Abgrenzung.','Vorausbezahlt = ARA, noch nicht bezahlt = PRA.'], reveal: ['Mietzins Nov.–Jan.: 2 Monate betreffen das laufende Jahr (Nov., Dez.), 1 Monat das nächste Jahr. Die Abgrenzung: ARA / Mietaufwand für CHF 4 000 (1 Monat vorausbezahlt). Warum ARA? Wir haben zu viel Aufwand verbucht.','Maschinenreparatur in Woche 50: Der Aufwand betrifft das laufende Jahr, aber die Rechnung fehlt. Lösung: PRA buchen (Reparaturaufwand / PRA). Warum? Der Aufwand ist entstanden, aber noch nicht bezahlt.','Warenbestellung ohne Lieferung: Keine Abgrenzung nötig! Warum? Solange die Ware nicht geliefert ist, ist kein Geschäftsvorfall entstanden. Prüfungstipp: Immer fragen – wann ist der Aufwand/Ertrag wirtschaftlich verursacht worden?'], geschaeftsfaelle: [{nr:1,text:'Mietzins 12 000.– für Nov. bis Jan. im Voraus bezahlt.',needsAbgrenzung:'Ja'},{nr:2,text:'Maschinenreparatur in Woche 50, Rechnung fehlt noch.',needsAbgrenzung:'Ja'},{nr:3,text:'Warenbestellung vor Jahresende, Lieferung im Jan.',needsAbgrenzung:'Nein'},{nr:4,text:'Zeitschriftenabos im Voraus, 6 000.– laufen noch ins 04.',needsAbgrenzung:'Ja'},{nr:5,text:'Säumige Mieter zahlen Dezembermieten.',needsAbgrenzung:'Nein'},{nr:6,text:'Darlehen ab 01.08., Zinszahlung Ende Jan. fällig.',needsAbgrenzung:'Ja'}] },
        { id: 78, type: 'mc', q: 'Welche Aussagen zu transitorischen Posten sind korrekt?', tips: ['ARA = Transitorische Aktiven = vorausbezahlter Aufwand oder ausstehender Ertrag.','PRA = Transitorische Passiven = noch nicht bezahlter Aufwand oder vorauserhaltener Ertrag.','Transitorische Posten werden am Anfang der neuen Periode aufgelöst.'], reveal: ['ARA entstehen in zwei Fällen: (1) Aufwand wurde im Voraus bezahlt (betrifft nächste Periode) oder (2) Ertrag der laufenden Periode wurde noch nicht erhalten. In beiden Fällen haben wir am Bilanzstichtag ein «Guthaben».','PRA entstehen ebenfalls in zwei Fällen: (1) Aufwand der laufenden Periode wurde noch nicht bezahlt oder (2) Ertrag wurde im Voraus erhalten (betrifft nächste Periode). In beiden Fällen «schulden» wir noch etwas.','Prüfungstipp: Transitorische Posten werden am Anfang der neuen Periode wieder aufgelöst (Gegenbuchung). So wird der Aufwand/Ertrag der richtigen Periode zugeordnet.'], questions: [{id:'a',q:'Versicherungsprämie CHF 12 000 für Jan.–Dez. im Oktober bezahlt. Welcher Posten entsteht am 31.12.?',options:['ARA CHF 9 000','PRA CHF 9 000','Kein transitorischer Posten','ARA CHF 3 000'],answer:3},{id:'b',q:'Mietzins Dezember noch nicht bezahlt. Welcher Posten?',options:['ARA','PRA','Rückstellung','Kein Posten'],answer:1},{id:'c',q:'Wann werden transitorische Posten aufgelöst?',options:['Am Bilanzstichtag','Am Anfang der neuen Periode','Bei Zahlung','Nie'],answer:1}] },
        { id: 79, type: 'tf', q: 'Richtig oder falsch? Rückstellungen und Abgrenzungen', tips: ['Rückstellungen: unsichere Verpflichtungen (Höhe, Zeitpunkt oder Eintritt unsicher).','Rechnungsabgrenzungen: zeitliche Zuordnung von bekannten Beträgen.','Bildung von Rückstellungen ist erfolgswirksam.'], reveal: ['Rückstellungen unterscheiden sich von Rechnungsabgrenzungen: Bei Rückstellungen ist mindestens eines unsicher (Höhe, Betrag oder Zeitpunkt). Bei Abgrenzungen sind die Beträge bekannt, es geht nur um die zeitliche Zuordnung.','Die Bildung einer Rückstellung belastet den Aufwand und ist damit erfolgswirksam. Warum wird sie trotzdem gebildet? Das Vorsichtsprinzip verlangt, dass erwartete Verluste sofort berücksichtigt werden.','Prüfungstipp: Rückstellungen können als stille Reserven missbraucht werden, wenn sie zu hoch gebildet werden. Beispiel: Garantierückstellung CHF 100 000 obwohl nur CHF 30 000 erwartet → CHF 70 000 stille Reserven.'], statements: [{s:'Rückstellungen werden für sichere Verpflichtungen mit bekanntem Betrag gebildet.', c: false,reason:'Für unsichere Verpflichtungen (Höhe, Zeitpunkt oder Eintritt unsicher).'},{s:'Die Auflösung einer nicht mehr benötigten Rückstellung erhöht den Gewinn.', c: true},{s:'Rechnungsabgrenzungen und Rückstellungen sind dasselbe.', c: false,reason:'Abgrenzungen = zeitliche Zuordnung bekannter Beträge. Rückstellungen = unsichere Verpflichtungen.'},{s:'Zu hohe Rückstellungen können stille Reserven im FK darstellen.', c: true},{s:'PRA gehören zum langfristigen Fremdkapital.', c: false,reason:'PRA gehören zum kurzfristigen FK.'}] },
        { id: 80, type: 'match', q: 'Ordnen Sie die Geschäftsfälle dem richtigen transitorischen Posten zu.', tips: ['Vorausbezahlt und betrifft nächste Periode → ARA.','Aufwand entstanden, aber noch nicht bezahlt → PRA.','Ertrag erhalten, aber betrifft nächste Periode → PRA.'], reveal: ['ARA-Fälle: Vorausbezahlte Versicherungsprämien, Miete im Voraus bezahlt, noch ausstehende Zinserträge. Warum ARA? Wir haben ein Guthaben – entweder haben wir zu viel bezahlt oder noch Geld zugut.','PRA-Fälle: Noch nicht bezahlte Löhne, im Voraus erhaltene Miete, aufgelaufene Schuldzinsen. Warum PRA? Wir schulden noch etwas – entweder haben wir noch nicht bezahlt oder zu viel erhalten.','Prüfungstipp: Fragen Sie sich immer: «Haben wir am 31.12. noch etwas zugut (ARA) oder schulden wir noch etwas (PRA)?»'], pairs: [{l:'Versicherung 3 Monate im Voraus bezahlt',r:'ARA'},{l:'Miete Dezember noch nicht bezahlt',r:'PRA'},{l:'Bankzins noch nicht gutgeschrieben',r:'ARA'},{l:'Miete Januar im Voraus erhalten',r:'PRA'},{l:'Strom Dezember, Rechnung kommt im Januar',r:'PRA'},{l:'Abo im Voraus bezahlt, läuft noch 4 Monate',r:'ARA'}], options: ['ARA','PRA'] },
        { id: 81, type: 'calc', q: 'Rechnungsabgrenzungen berechnen und verbuchen', tips: ['Zeitanteil berechnen: Monate der laufenden / nächsten Periode.','Vorausbezahlt → ARA. Noch nicht bezahlt → PRA.','Immer den Betrag berechnen, der die andere Periode betrifft.'], reveal: ['Versicherung CHF 3 600 für Sept.–Aug. bezahlt: 4 Monate laufendes Jahr (Sept.–Dez.), 8 Monate nächstes Jahr. ARA = 8/12 × 3 600 = CHF 2 400. Buchung: ARA / Versicherungsaufwand 2 400.','Darlehenszins 4% auf CHF 200 000, fällig am 31.03.: 9 Monate aufgelaufen (April–Dez.). PRA = 9/12 × 8 000 = CHF 6 000. Buchung: Zinsaufwand / PRA 6 000. Warum PRA? Der Aufwand ist entstanden, aber noch nicht bezahlt.','Prüfungstipp: Immer zuerst den Zeitanteil berechnen (Monate), dann den Betrag. Häufiger Fehler: Die falsche Anzahl Monate verwenden.'], calcs: [{label:'Versicherung ARA-Betrag',answer:2400},{label:'Darlehenszins PRA-Betrag',answer:6000}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Verluste aus Forderungen und Wertberichtigungen (Delkredere) verbuchen',
            'Aktive und passive Rechnungsabgrenzungen verstehen',
            'Transitorische Aktiven (ARA) und Passiven (PRA) unterscheiden',
            'Rückstellungen bilden und ihre Auswirkungen kennen'
          ]},
          { type: 'concept', title: 'Rechnungsabgrenzungen', content: 'Rechnungsabgrenzungen sorgen dafür, dass Aufwand und Ertrag der richtigen Periode zugeordnet werden. Aktive Rechnungsabgrenzungen (ARA/Transitorische Aktiven) grenzen Aufwand ab, der zwar verbucht, aber die nächste Periode betrifft, oder Ertrag, der die laufende Periode betrifft, aber noch nicht verbucht ist. Passive Rechnungsabgrenzungen (PRA/Transitorische Passiven) wirken umgekehrt.', highlight: 'ARA = Transitorische Aktiven (UV). PRA = Transitorische Passiven (kurzfr. FK).' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Debitorenverluste', def: 'Tatsächliche, endgültige Verluste aus Forderungen. Werden direkt vom Konto Forderungen L+L abgeschrieben.' },
            { term: 'Wertberichtigung Forderungen (Delkredere)', def: 'Pauschale Wertkorrektur auf dem Forderungsbestand. Bestand abhängig vom Forderungsbestand.' },
            { term: 'ARA (Transitorische Aktiven)', def: 'Vorausbezahlter Aufwand der nächsten Periode, oder noch nicht erhaltener Ertrag der laufenden Periode.' },
            { term: 'PRA (Transitorische Passiven)', def: 'Noch nicht bezahlter Aufwand der laufenden Periode, oder im Voraus erhaltener Ertrag der nächsten Periode.' },
            { term: 'Rückstellungen', def: 'Gebildet für ungewisse Verpflichtungen. Unsicherheit bei Höhe, Betrag und/oder Zeitpunkt des Eintretens.' },
            { term: 'Bestandskorrekturen', def: 'Differenzen aus der Inventur. Zunahmen wirken positiv, Abnahmen negativ auf den Periodenerfolg.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Bildung einer Rückstellung ist erfolgswirksam und belastet den Erfolg der Periode, in der die ungewisse Verpflichtung entsteht. Die Buchung lautet: Aufwandkonto / Rückstellungen (nicht umgekehrt!). Ohne Abgrenzung würde der Erfolg der Periode verzerrt dargestellt.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'ARA (Transitorische Aktiven) = vorausbezahlter Aufwand oder noch ausstehender Ertrag → UV',
            'PRA (Transitorische Passiven) = noch nicht bezahlter Aufwand oder vorauserhaltener Ertrag → kurzfr. FK',
            'Rückstellungen = unsichere Verpflichtungen (Höhe/Zeitpunkt unsicher), Buchung: Aufwand / Rückstellungen',
            'WB Forderungen (Delkredere): nur die Differenz zum bestehenden Bestand buchen'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 9: Stille Reserven und interne Rechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch9',
      num: 'Kapitel 9',
      title: 'Stille Reserven und interne Rechnung',
      exercises: [
        { id: 82, type: 'fill', q: 'Lückentext: stille Reserven', tips: ['Stille Reserven durch Unterbewertung Aktiven oder Überbewertung FK.','Bildung stiller Reserven mindert den ausgewiesenen Erfolg.','Auflösung stiller Reserven erhöht den externen Gewinn.'], reveal: ['Stille Reserven entstehen durch Unterbewertung von Aktiven oder Überbewertung von FK. Der Betrag der stillen Reserven ist die Differenz zwischen dem internen (echten) und dem externen (publizierten) Wert. Warum «still»? Weil sie in der externen Bilanz nicht erkennbar sind.','Die Bildung stiller Reserven mindert den extern ausgewiesenen Erfolg – der interne Gewinn ist höher als der externe. Die Auflösung erhöht den externen Gewinn. Prüfungstipp: Bildung = extern tiefer, Auflösung = extern höher.','Merkhilfe: Stille Reserven = Selbstfinanzierung. Das Unternehmen weist weniger Gewinn aus, behält aber mehr Substanz. Bei der Veränderung der stillen Reserven ist entscheidend: Betrag der Veränderung, nicht der Gesamtbestand.'], template: 'Stille Reserven sind {0} der Differenz zwischen internem und externem Wert. Der externe Wert ist {1} als der interne. Die Bildung stiller Reserven {2} den {3} ausgewiesenen Erfolg. Der {4} Gewinn bleibt unverändert. Die Auflösung stiller Reserven {5} den {6} Gewinn. Die {7} stiller Reserven macht bisher versteckte Werte sichtbar. Entscheidend ist nicht der Gesamtbestand, sondern der {8} und die {9} der stillen Reserven.', blanks: [['den Betrag','Betrag'],['tiefer','niedriger'],['mindert'],['externen'],['internen'],['erhöht'],['externen'],['Auflösung'],['Betrag'],['Veränderung']] },
        { id: 83, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den stillen Reserven', tips: ['Beim Konto Kasse keine stillen Reserven möglich.','Bildung stiller Reserven mindert den externen Gewinn.','EUR-Forderung zu tieferem Kurs = Unterbewertung = stille Reserve.'], reveal: ['Bildung stiller Reserven mindert den EXTERNEN Reingewinn (nicht den internen!). Der interne Gewinn bleibt unverändert. Häufiger Prüfungsfehler: «Bildung stiller Reserven erhöht den internen Reingewinn» – das ist falsch!','Beim Konto Kasse können KEINE stillen Reserven gebildet werden, weil Bargeld einen festen, überprüfbaren Wert hat. EUR-Forderungen können dagegen zu einem tieferen Kurs bewertet werden als dem tatsächlichen → stille Reserve.','Auflösung stiller Reserven: Der externe Gewinn wird in dieser Periode zu hoch ausgewiesen. Warum? Weil bisher versteckte Werte sichtbar werden. Beispiel: Vorräte waren zu tief bewertet, werden nun verkauft → Gewinn enthält die aufgelöste stille Reserve.'], statements: [{s:'Bildung stiller Reserven erhöht den internen Reingewinn.', c: false,reason:'Mindert den externen Gewinn.'},{s:'Beim Konto Kasse können stille Reserven gebildet werden.', c: false,reason:'Kasse hat festen Wert.'},{s:'EUR-Forderung zu tieferem Kurs = stille Reserven.', c: true},{s:'Stille Reserven sind «still», weil sie in der externen (publizierten) Bilanz nicht ersichtlich sind.', c: true},{s:'Auflösung stiller Reserven: Erfolg wird zu hoch ausgewiesen.', c: false,reason:'Extern zu hoch dargestellt.'},{s:'Unterbewertung Vorräte: Vorratsabnahme löst stille Reserven auf.', c: true}] },
        { id: 84, type: 'calc', q: 'Externe Schlussbilanz aus der internen ableiten', tips: ['Stille Reserven auf Aktiven: Extern = Intern − stille Reserve.','EK extern = Total A extern − Total FK extern.','Stille Reserven auf FK: Extern = Intern + stille Reserve.'], reveal: ['Vorräte extern = interner Wert − stille Reserve auf Vorräten. Mobilien extern = interner Wert − stille Reserve auf Mobilien. Warum minus? Unterbewertung bedeutet, dass der externe Wert tiefer ist als der interne.','Rückstellungen extern = interner Wert + stille Reserve auf FK. Warum plus? Überbewertung des FK bedeutet, dass extern mehr FK ausgewiesen wird als intern nötig wäre.','EK extern = Total Aktiven extern − Total FK extern. Prüfungstipp: Die Differenz zwischen internem und externem EK entspricht der Summe aller stillen Reserven. EK intern = EK extern + stille Reserven.'], fields: [{label:'Vorräte (extern)',answer:130},{label:'Mobilien (extern)',answer:225},{label:'Rückstellungen (extern)',answer:25},{label:'Eigenkapital (extern)',answer:250},{label:'Bilanzsumme (extern)',answer:455}] },
        { id: 85, type: 'calc', q: 'Bilanzgleichung und stille Reserven', tips: ['Stille Reserven = Unterbewertung Aktiven + Überbewertung FK.','Aktiven − FK = EK.','Wertunterschied: Intern − Extern.'], reveal: ['Externe Bilanz: Aktiven extern − FK extern = EK extern. Der Wertunterschied bei Aktiven ist negativ (extern tiefer als intern), bei FK positiv (extern höher als intern). Die Summe aller Wertunterschiede = stille Reserven.','Interne Bilanz: Aktiven intern = Aktiven extern + Unterbewertung. FK intern = FK extern − Überbewertung. EK intern = EK extern + alle stillen Reserven.','Prüfungstipp: Bei der Umrechnung immer die Vorzeichen beachten! Unterbewertung Aktiven = negative Differenz (extern tiefer). Überbewertung FK = positive Differenz (extern höher). Stille Reserve auf EK = Summe beider Differenzen.'], calcs: [{label:'A) Externe Bilanz: Aktiven',answer:1000},{label:'A) Wertunterschied: Aktiven',answer:-100},{label:'A) Wertunterschied: FK',answer:40},{label:'A) Wertunterschied: EK',answer:-140},{label:'A) Interne Bilanz: FK',answer:360},{label:'A) Interne Bilanz: EK',answer:740},{label:'B) Interne Bilanz: Aktiven',answer:910},{label:'B) Interne Bilanz: FK',answer:440},{label:'B) Wertunterschied: Aktiven',answer:-70},{label:'B) Wertunterschied: FK',answer:20},{label:'B) Externe Bilanz: FK',answer:460},{label:'B) Externe Bilanz: EK',answer:380}] },
        { id: 86, type: 'mc', q: 'Wählen Sie die Antwort: Stille Reserven bei einer AG', tips: ['Mobiliar CHF 1.– = Erinnerungsfranken.','Bildung stiller Reserven verkleinert den ausgewiesenen Gewinn.','Kasse, Post, Bank: keine stillen Reserven möglich.'], reveal: ['Mobiliar zu CHF 1.– = Erinnerungsfranken. Das Mobiliar ist noch vorhanden und hat einen Wert, wird aber nur zu CHF 1.– bilanziert. Die stille Reserve = tatsächlicher Wert − CHF 1.–. Warum CHF 1.–? Damit das Aktivum noch in der Bilanz erscheint.','EK einer AG besteht aus Aktienkapital, gesetzlichen Reserven, freiwilligen Reserven und Gewinnvortrag. Stille Reserven sind NICHT Teil des ausgewiesenen EK – sie sind ja «still» (versteckt).','Die Bildung stiller Reserven ist eine Form der Selbstfinanzierung. Warum? Das Unternehmen behält mehr Substanz, als es ausweist. Prüfungstipp: Wo keine stillen Reserven möglich sind: Kasse, Post, Bank (fester Wert).'], questions: [{id:'a',q:'Was bedeutet es, wenn Mobiliar zu CHF 1.– bilanziert wird?',options:['Das Mobiliar ist wertlos','Das Mobiliar wurde verkauft','Es handelt sich um einen Erinnerungsfranken – das Mobiliar hat einen höheren Wert','Das Mobiliar wurde vollständig abgeschrieben und entsorgt'],answer:2},{id:'b',q:'Was gehört zum Eigenkapital einer AG?',options:['Rückstellungen und Hypotheken','Stille Reserven und Darlehen','Aktienkapital, Reserven und Gewinnvortrag','Kreditoren und Obligationen'],answer:2},{id:'c',q:'Bei welchen Konten können keine stillen Reserven gebildet werden?',options:['Vorräte und Mobilien','Debitoren und Fahrzeuge','Kasse, Post und Bank','Maschinen und Immobilien'],answer:2},{id:'d',q:'Welche Aussage zu stillen Reserven ist richtig?',options:['Stille Reserven erhöhen den externen Gewinn','Stille Reserven sind Teil des ausgewiesenen EK','Stille Reserven entstehen nur bei Fremdkapital','Stille Reserven entstehen durch Unterbewertung von Aktiven oder Überbewertung von FK'],answer:3},{id:'e',q:'Warum gilt die Bildung stiller Reserven als Selbstfinanzierung?',options:['Weil Dividenden ausbezahlt werden','Weil das Unternehmen mehr Substanz behält, als es ausweist','Weil ein Bankkredit aufgenommen wird','Weil das Aktienkapital erhöht wird'],answer:1}] },
        { id: 87, type: 'sort', q: 'Sortieren Sie die Schritte der Bereinigung von der externen zur internen Bilanz in die richtige Reihenfolge.', items: ['Externe (publizierte) Bilanz als Ausgangspunkt nehmen','Stille Reserven auf Aktiven identifizieren (Unterbewertungen)','Stille Reserven auf FK identifizieren (Überbewertungen)','Aktiven um stille Reserven erhöhen (interner Wert)','FK um stille Reserven reduzieren (interner Wert)','EK als Differenz berechnen (EK intern = A intern − FK intern)'], correctOrder: [0,1,2,3,4,5], tips: ['Die externe Bilanz ist der Ausgangspunkt für die Bereinigung.','Zuerst die stillen Reserven identifizieren, dann die Werte anpassen.','Das EK ergibt sich immer als Restgrösse aus der Bilanzgleichung.'], reveal: ['Die Bereinigung beginnt immer mit der externen (publizierten) Bilanz. Dann werden alle stillen Reserven identifiziert – sowohl auf der Aktivseite (Unterbewertungen) als auch auf der Passivseite (Überbewertungen im FK).','Die Aktiven werden um die stillen Reserven erhöht (interner Wert = externer Wert + stille Reserve auf Aktiven). Das FK wird um die Überbewertung reduziert (interner Wert = externer Wert − stille Reserve auf FK).','Das interne EK ergibt sich als Restgrösse: EK intern = Aktiven intern − FK intern. Prüfungstipp: Das interne EK ist immer höher als das externe, weil die stillen Reserven dazukommen.'] },
        { id: 88, type: 'mc', q: 'Fragen zu stillen Reserven und ihren Auswirkungen', tips: ['Stille Reserven = interner Wert − externer Wert.','Bildung = externer Gewinn sinkt. Auflösung = externer Gewinn steigt.','Selbstfinanzierung = Gewinnthesaurierung + stille Reserven.'], reveal: ['Stille Reserven können auf verschiedenen Bilanzpositionen gebildet werden: Vorräte (Niederstwertprinzip übertrieben), Anlagen (zu hohe Abschreibungen), Rückstellungen (zu hoch gebildet). Nicht möglich: Kasse, Post, Bank.','Die Bildung stiller Reserven ist eine Form der Selbstfinanzierung: Das Unternehmen weist weniger Gewinn aus und behält mehr Substanz. Warum ist das erlaubt? Das Vorsichtsprinzip im OR erlaubt die Unterbewertung von Aktiven.','Prüfungstipp: Wenn stille Reserven aufgelöst werden (z.B. durch Verkauf unterbewerteter Vorräte), steigt der ausgewiesene Gewinn. Das kann den Eindruck erwecken, das Unternehmen sei profitabler als es tatsächlich ist.'], questions: [{id:'a',q:'Auf welcher Position können KEINE stillen Reserven gebildet werden?',options:['Vorräte','Maschinen','Kasse','Rückstellungen'],answer:2},{id:'b',q:'Was passiert mit dem externen Gewinn bei Bildung stiller Reserven?',options:['Er steigt','Er sinkt','Er bleibt gleich','Er wird null'],answer:1},{id:'c',q:'Eine AG löst stille Reserven von CHF 50 000 auf. Welche Auswirkung?',options:['Externer Gewinn sinkt um 50 000','Externer Gewinn steigt um 50 000','Interner Gewinn steigt um 50 000','Keine Auswirkung'],answer:1}] },
        { id: 89, type: 'tf', q: 'Richtig oder falsch? Vertiefung stille Reserven', tips: ['Interne Bilanz zeigt die echten (bereinigten) Werte.','Stille Reserven sind gemäss OR grundsätzlich erlaubt.','Die Veränderung der stillen Reserven beeinflusst den externen Gewinn.'], reveal: ['Die interne Bilanz zeigt die echten Werte – sie ist nur für die Geschäftsleitung bestimmt und wird nicht veröffentlicht. Warum zwei Bilanzen? Die externe Bilanz darf gemäss OR stille Reserven enthalten (Vorsichtsprinzip), die interne soll die Realität zeigen.','Stille Reserven sind gemäss OR grundsätzlich erlaubt (Vorsichtsprinzip). Aber: Zu hohe stille Reserven können den «true and fair view» verletzen. Börsenkotierte Unternehmen müssen stille Reserven offenlegen.','Nur die VERÄNDERUNG der stillen Reserven beeinflusst den Gewinn, nicht der Bestand. Beispiel: Stille Reserven von 100 auf 120 erhöht → externer Gewinn ist 20 tiefer als interner. Prüfungstipp: Bestand ≠ Veränderung!'], statements: [{s:'Die interne Bilanz wird veröffentlicht und ist für Aktionäre bestimmt.', c: false,reason:'Die interne Bilanz ist nur für die Geschäftsleitung.'},{s:'Stille Reserven sind gemäss OR grundsätzlich verboten.', c: false,reason:'Stille Reserven sind erlaubt (Vorsichtsprinzip).'},{s:'Nur die Veränderung der stillen Reserven beeinflusst den Periodengewinn.', c: true},{s:'Das interne EK ist immer höher als das externe EK.', c: true},{s:'Bei einem Verkauf von unterbewerteten Vorräten werden stille Reserven aufgelöst.', c: true}] },
        { id: 90, type: 'calc', q: 'Veränderung stiller Reserven und Gewinnauswirkung', tips: ['Veränderung stille Reserven = Bestand Ende − Bestand Anfang.','Zunahme stille Reserven → externer Gewinn tiefer als interner.','Abnahme stille Reserven → externer Gewinn höher als interner.'], reveal: ['Stille Reserven Anfang: CHF 80 000. Stille Reserven Ende: CHF 120 000. Veränderung: +40 000 (Zunahme). Warum ist der externe Gewinn tiefer? Weil CHF 40 000 zusätzlich «versteckt» wurden.','Interner Gewinn: CHF 150 000. Veränderung stille Reserven: +40 000. Externer Gewinn = 150 000 − 40 000 = CHF 110 000. Formel: Externer Gewinn = Interner Gewinn − Zunahme stille Reserven.','Prüfungstipp: Bei Abnahme stiller Reserven ist der externe Gewinn HÖHER als der interne. Formel: Externer Gewinn = Interner Gewinn + Abnahme stille Reserven.'], calcs: [{label:'Veränderung stille Reserven',answer:40000},{label:'Externer Gewinn',answer:110000}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Stille Reserven verstehen: Entstehung durch Unterbewertung Aktiven oder Überbewertung FK',
            'Bildung und Auflösung stiller Reserven und deren Auswirkung auf den Erfolg kennen',
            'Zwischen externer (publizierter) und interner (bereinigter) Bilanz unterscheiden'
          ]},
          { type: 'concept', title: 'Stille Reserven', content: 'Stille Reserven entstehen durch Unterbewertung von Aktiven oder Überbewertung von Fremdkapital. Sie sind in der publizierten (externen) Bilanz nicht erkennbar. Die Bildung stiller Reserven mindert den extern ausgewiesenen Erfolg, die Auflösung erhöht ihn. Die interne Bilanz zeigt die bereinigten (echten) Werte.', highlight: 'Bildung stiller Reserven → externer Gewinn sinkt. Auflösung → externer Gewinn steigt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Stille Reserven', def: 'Differenz zwischen dem internen (echten) Wert und dem extern ausgewiesenen Wert. Entstehen durch bewusste Unterbewertung.' },
            { term: 'Externe Bilanz', def: 'Die publizierte Bilanz mit möglicherweise stillen Reserven.' },
            { term: 'Interne Bilanz', def: 'Die bereinigte Bilanz mit den echten (höheren) Werten.' },
            { term: 'Erinnerungsfranken', def: 'Bilanzierung einer Anlage zu CHF 1.−, obwohl sie mehr wert ist (stille Reserven).' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Beim Konto Kasse können KEINE stillen Reserven gebildet werden (Bargeld hat einen festen Wert). Stille Reserven sind «still», weil sie in der externen Bilanz nicht erkennbar sind. Die Bildung stiller Reserven ist eine Form der Selbstfinanzierung.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Stille Reserven = Unterbewertung Aktiven oder Überbewertung FK (extern nicht erkennbar)',
            'Bildung stiller Reserven mindert den externen Gewinn, Auflösung erhöht ihn',
            'Interne Bilanz = echte Werte, externe Bilanz = publizierte Werte mit stillen Reserven',
            'Keine stillen Reserven möglich bei Kasse, Post, Bank (fester Wert)'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 10: Einführung in die Kostenrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch10',
      num: 'Kapitel 10',
      title: 'Einführung in die Kostenrechnung',
      exercises: [
        { id: 91, type: 'fill', q: 'Lückentext: Kostenrechnung', tips: ['Kosten nach Kostenarten, Kostenstellen und Kostenträgern.','Einzelkosten direkt, Gemeinkosten indirekt.','Sachliche Abgrenzungen: Differenz zwischen FIBU-Aufwand und BEBU-Kosten.'], reveal: ['Die Kostenrechnung gliedert Kosten nach drei Gesichtspunkten: Kostenarten (welche Kosten?), Kostenstellen (wo angefallen?) und Kostenträger (wofür angefallen?). Warum diese Dreiteilung? Sie ermöglicht eine vollständige Kostentransparenz.','Einzelkosten können einem Kostenträger direkt zugeordnet werden (z.B. Rohmaterial für Produkt A). Gemeinkosten müssen über die Kostenstellenrechnung verteilt werden (z.B. Miete, Strom).','Sachliche Abgrenzungen sind notwendig, weil FIBU-Aufwand und BEBU-Kosten nicht identisch sind. Beispiel: Kalkulatorischer Unternehmerlohn ist ein Kostenfaktor in der BEBU, aber kein Aufwand in der FIBU.'], template: 'Die Kostenrechnung gliedert Kosten nach drei Gesichtspunkten: {0} (welche Kosten?), {1} (wo angefallen?) und {2} (wofür angefallen?). {3} können einem Kostenträger direkt zugeordnet werden. {4} müssen über Verteilschlüssel umgelegt werden. In der Kostenstellenrechnung werden die {5} verteilt, während {6} direkt den Produkten zugeordnet werden. Die Überleitung von FIBU-Aufwand zu BEBU-Kosten erfolgt über {7}. Die erste Stufe heisst {8}, die zweite {9}. Die Verteilung der Gemeinkosten erfolgt nach dem {10}.', blanks: [['Kostenarten'],['Kostenstellen'],['Kostenträgern'],['Einzelkosten'],['Gemeinkosten'],['Gemeinkosten'],['Einzelkosten'],['sachliche Abgrenzungen'],['Kostenartenrechnung'],['Kostenstellenrechnung'],['Verursacherprinzip']] },
        { id: 92, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Kostenrechnung', tips: ['Direkte Kosten werden den Kostenträgern direkt zugeordnet.','Herstellkosten = Materialkosten + Fertigungskosten.','Selbstkosten = HK + VVGK.'], reveal: ['Direkte Kosten (Einzelkosten) werden direkt den KOSTENTRÄGERN zugeordnet, nicht den Kostenstellen! Häufiger Fehler: Verwechslung von Kostenstellen und Kostenträgern. Merkhilfe: Einzelkosten = direkt aufs Produkt.','Die Kostenstellenrechnung ist Grundlage für die Kostenträgerrechnung (nicht umgekehrt!). Reihenfolge: Kostenartenrechnung → Kostenstellenrechnung → Kostenträgerrechnung.','Herstellkosten = Materialkosten + Fertigungskosten. Selbstkosten = Herstellkosten + VVGK. Prüfungstipp: Material-GK + Fertigungs-GK ≠ Selbstkosten! Selbstkosten enthalten zusätzlich die VVGK.'], statements: [{s:'Direkte Kosten werden direkt den Kostenstellen belastet.', c: false,reason:'Direkt den Kostenträgern.'},{s:'Sachliche Abgrenzung = Differenz FIBU-Aufwand und BEBU-Kosten.', c: true},{s:'Aus der Kostenstellenrechnung sehen wir das Kostentotal der Produkte.', c: false,reason:'Kostenträgerrechnung zeigt das.'},{s:'Kostenstellenrechnung ist Grundlage für Kostenartenrechnung.', c: false,reason:'Umgekehrt.'},{s:'Material-GK + Fertigungs-GK = Selbstkosten.', c: false,reason:'Selbstkosten = HK + VVGK.'},{s:'Materialkosten + Fertigungskosten = Herstellkosten.', c: true}] },
        { id: 93, type: 'match', q: 'Zuordnung: Kostenart – Kostenstelle – Kostenträger', tips: ['Kostenarten: Gehälter, Zinsen, Versicherungen.','Kostenstellen: Verwaltung, Vertrieb, Kantine.','Kostenträger: die hergestellten Produkte.'], reveal: ['Kostenarten beantworten die Frage «Welche Kosten?» – z.B. Gehälter, Zinsen, Rohmaterial, Versicherungsprämien, kalkulatorische Abschreibungen. Alles, was einen Kostenfaktor beschreibt, ist eine Kostenart.','Kostenstellen beantworten die Frage «Wo angefallen?» – z.B. Vertrieb, Verwaltung, Kantine, Montage. Es sind die Orte/Abteilungen im Unternehmen, wo Kosten entstehen.','Kostenträger beantworten die Frage «Wofür angefallen?» – z.B. Kaffeemaschinen, Waschmaschinen, Bügeleisen. Es sind die hergestellten Produkte, die die Kosten «tragen». Prüfungstipp: Fragen Sie sich immer: Was? Wo? Wofür?'], pairs: [{l:'Werbekosten',r:'Kostenart'},{l:'Vertrieb',r:'Kostenstelle'},{l:'Kaffeemaschinen',r:'Kostenträger'},{l:'Kantine',r:'Kostenstelle'},{l:'Verwaltung',r:'Kostenstelle'},{l:'Gehälter',r:'Kostenart'},{l:'Kalkulatorische Abschreibungen',r:'Kostenart'},{l:'Waschmaschinen',r:'Kostenträger'},{l:'Rohmaterial',r:'Kostenart'},{l:'Zinsen',r:'Kostenart'},{l:'Bügeleisen',r:'Kostenträger'},{l:'Montage',r:'Kostenstelle'},{l:'Versicherungsprämien',r:'Kostenart'}], options: ['Kostenart','Kostenstelle','Kostenträger'] },
        { id: 94, type: 'text', q: 'Einzelfragen zum Thema Kostenrechnung', tips: ['Einzelkosten können einem Kostenträger direkt zugeordnet werden.','Drei Hauptkostenstellen: Material, Fertigung, V+V.','Sachliche Abgrenzung: Differenz FIBU-Aufwand und BEBU-Kosten.'], reveal: ['Einzelkosten sind direkt einem Kostenträger zurechenbar (z.B. Rohmaterial für ein bestimmtes Produkt). Die BEBU baut auf der FIBU auf – sie übernimmt die Aufwandpositionen und rechnet sie in Kosten um.','Die sachliche Abgrenzung ist die Differenz zwischen FIBU-Aufwand und BEBU-Kosten. Beispiele: Kalkulatorischer Unternehmerlohn (nur BEBU), ausserordentlicher Aufwand (nur FIBU). Die Kostenträgerrechnung zeigt die Stückkosten und den Gewinn/Verlust pro Produkt.','Die drei Hauptkostenstellen sind Material, Fertigung und Verwaltung/Vertrieb. Eine Bezugsgrösse ist der Verteilschlüssel für die Umlage der Gemeinkosten (z.B. Arbeitsstunden, Maschinenstunden, Material-Einzelkosten).'], questions: [{id:'A',q:'Merkmal von Einzelkosten?',keywords:['direkt','zugeordnet','Kostenträger']},{id:'B',q:'Worauf baut die BEBU auf?',keywords:['Finanzbuchhaltung','FIBU']},{id:'C',q:'Was ist eine sachliche Abgrenzung?',keywords:['Differenz','Aufwand','Kosten']},{id:'D',q:'Was besagt die Kostenträgerrechnung?',keywords:['Kosten','Produkt','Stückkosten']},{id:'E',q:'Drei Hauptkostenstellen?',keywords:['Material','Fertigung','Verwaltung']},{id:'F',q:'Was ist eine Bezugsgrösse?',keywords:['Verteilschlüssel','Umlage','Gemeinkosten']}] },
        { id: 95, type: 'calc', q: 'Aufwände in Kosten überführen', tips: ['Geschäftsinhaber bezog Material privat (−30).','Sozialkosten 25% vom bereinigten Lohn.','Positive Abgrenzung = kalkulatorische Kosten höher als FIBU-Aufwand.'], reveal: ['Materialaufwand: Abgrenzung −30, weil der Geschäftsinhaber Material privat bezogen hat. Kosten = 2 730 − 30 = 2 700. Warum minus? Der Privatbezug ist kein betrieblicher Aufwand.','Lohnaufwand: Abgrenzung −250 (Privatanteil des Inhaberlohns). Sozialaufwand: kalkulatorisch 25% von 3 000 = 750, FIBU nur 611, also Abgrenzung +139. Warum höher? Kalkulatorische Sozialkosten sind oft höher als die tatsächlichen.','Prüfungstipp: Negative Abgrenzung = FIBU-Aufwand enthält betriebsfremde Positionen (werden abgezogen). Positive Abgrenzung = kalkulatorische Kosten sind höher als der FIBU-Aufwand (werden hinzugerechnet).'], calcs: [{label:'Materialaufwand: Abgrenzung',answer:-30},{label:'Materialaufwand: Kosten',answer:2700},{label:'Lohnaufwand: Abgrenzung',answer:-250},{label:'Lohnaufwand: Kosten',answer:3000},{label:'Sozialaufwand: Abgrenzung',answer:139},{label:'Sozialaufwand: Kosten',answer:750},{label:'Zinsaufwand: Abgrenzung',answer:44},{label:'Zinsaufwand: Kosten',answer:200},{label:'Versicherungsaufwand: Abgrenzung',answer:18},{label:'Versicherungsaufwand: Kosten',answer:122}] },
        { id: 96, type: 'calc', q: 'Betriebsabrechnung der Produkte O und P. Folgende Daten liegen vor: Einzelmaterial Produkt O: CHF 400, Produkt P: CHF 400 (Total CHF 800). Material-Gemeinkosten CHF 200. Einzellöhne Produkt O: CHF 300, Produkt P: CHF 500 (Total CHF 800). Fertigungs-Gemeinkosten CHF 600. Der Unternehmerlohn beträgt CHF 180 (kalkulatorisch). Berechnen Sie den Unternehmerlohn, die GK pro Kostenstelle und die GK-Zuschlagssätze.', tips: ['Unternehmerlohn 180 berücksichtigen.','Zuschlagssätze berechnen.','Zuschlagssatz = GK der Kostenstelle / Bezugsgrösse × 100.'], reveal: ['Der Unternehmerlohn von CHF 180 muss als kalkulatorische Kosten berücksichtigt werden (sachliche Abgrenzung). Warum? In der FIBU erscheint kein Lohn für den Inhaber, aber in der BEBU muss er als Kostenfaktor einbezogen werden.','Material-GK-Zuschlag = 25%, Fertigungs-GK-Zuschlag = 75%. Berechnung: GK der jeweiligen Kostenstelle / Bezugsgrösse × 100. Die Bezugsgrösse ist bei Material die Material-Einzelkosten, bei Fertigung die Fertigungs-Einzelkosten.','Prüfungstipp: Zuschlagssätze immer in Prozent angeben. Häufiger Fehler: Bezugsgrösse verwechseln – Material-GK werden auf Material-EK bezogen, Fertigungs-GK auf Fertigungs-EK (Löhne).'], calcs: [{label:'Unternehmerlohn',answer:180},{label:'Material: Kostenstelle Material',answer:200},{label:'Material: Kostenstelle Fertigung',answer:600},{label:'Material-GK-Zuschlag in %',answer:25},{label:'Fertigungs-GK-Zuschlag in %',answer:75}] },
        { id: 97, type: 'calc', q: 'Zuschlagskalkulation Schreinerei Meier AG. Folgende Daten aus dem BAB liegen vor: Material-Einzelkosten (Bezugsgrösse): CHF 50\'000. Material-Gemeinkosten: CHF 12\'500. Fertigungs-Einzellöhne (Bezugsgrösse): CHF 80\'000. Fertigungs-Gemeinkosten: CHF 60\'000. Verwaltungs- und Vertriebsgemeinkosten (VVGK): CHF 30\'375. Herstellkosten total: CHF 202\'500. Berechnen Sie die Zuschlagssätze für Material, Fertigung und V+V.', tips: ['Zuschlagssatz = GK / Bezugsgrösse × 100.','Material-GK-ZS = Material-GK / Material-EK × 100.','V+V-Zuschlag bezieht sich auf die Herstellkosten.'], reveal: ['Material-GK-ZS = 12\'500 / 50\'000 × 100 = 25%. Die Bezugsgrösse bei Material sind immer die Material-Einzelkosten. Warum? Material-Gemeinkosten (Lagerkosten, Einkaufsabteilung) hängen proportional von den Materialkosten ab.','Fertigungs-GK-ZS = 60\'000 / 80\'000 × 100 = 75%. Die Bezugsgrösse bei Fertigung sind die Einzellöhne. Warum? Fertigungsgemeinkosten (Maschinenkosten, Meisterlöhne) hängen von der Fertigungszeit ab, die über Löhne gemessen wird.','V+V-ZS = 30\'375 / 202\'500 × 100 = 15%. Die Bezugsgrösse bei V+V sind die Herstellkosten. Herstellkosten = Mat-EK + Mat-GK + Fert-EK + Fert-GK = 50\'000 + 12\'500 + 80\'000 + 60\'000 = 202\'500. Prüfungstipp: V+V bezieht sich auf Herstellkosten, NICHT auf Einzelkosten!'], calcs: [{label:'Material-GK-Zuschlagssatz in %',answer:25},{label:'Fertigungs-GK-Zuschlagssatz in %',answer:75},{label:'Herstellkosten total (Kontrolle)',answer:202500},{label:'V+V-Zuschlagssatz in %',answer:15}] },
        { id: 98, type: 'calc', q: 'Betriebsabrechnung der Race Equipment AG. Gesamtes Rohmaterial CHF 3\'840, aufzuteilen im Verhältnis 88 (Snowboard) : 176 (Carving Ski). Gesamte Einzellöhne CHF 2\'240, aufzuteilen 2/6 Snowboard, 4/6 Carving Ski. Gemeinkosten laut BAB: Snowboard CHF 613, Carving Ski CHF 1\'667. Nettoerlös Snowboards CHF 3\'200, Carving Skis CHF 6\'400.', tips: ['Rohmaterial im Verhältnis 88:176.','Einzellöhne: 2/6 Snowboard, 4/6 Carving Ski.','Gewinn = Nettoerlös − Selbstkosten.'], reveal: ['Rohmaterial wird im Verhältnis 88:176 (= 1:2) aufgeteilt. Snowboards: 1/3 × Gesamtrohmaterial. Carving Skis: 2/3 × Gesamtrohmaterial. Warum dieses Verhältnis? Es spiegelt den tatsächlichen Materialverbrauch pro Produkt wider.','Einzellöhne: Snowboards 2/6 (= 1/3), Carving Skis 4/6 (= 2/3). Gemeinkosten werden über die Zuschlagssätze verteilt. Selbstkosten = Material-EK + Material-GK + Fertigungs-EK + Fertigungs-GK + VVGK.','Gewinn Snowboards: CHF 560, Gewinn Carving Skis: CHF 680. Prüfungstipp: Gewinn = Nettoerlös − Selbstkosten. Ist der Gewinn negativ, wird das Produkt mit Verlust verkauft → Preisanpassung oder Kostenreduktion nötig.'], calcs: [{label:'Total Rohmaterial Snowboards',answer:1280},{label:'Total Rohmaterial Carving Skis',answer:2560},{label:'Einzellöhne Snowboards',answer:747},{label:'Einzellöhne Carving Skis',answer:1493},{label:'Gewinn/Verlust Snowboards',answer:560},{label:'Gewinn/Verlust Carving Skis',answer:680}] },
        { id: 99, type: 'sort', q: 'Bringen Sie die drei Stufen der Kostenrechnung in die richtige Reihenfolge – vom Ausgangspunkt bis zum Endresultat.', items: ['Kostenartenrechnung (Welche Kosten sind angefallen?)','Kostenstellenrechnung (Wo sind die Kosten angefallen?)','Kostenträgerrechnung (Wofür sind die Kosten angefallen?)'], correctOrder: [0,1,2], tips: ['Die Kostenartenrechnung ist immer der erste Schritt.','Die Kostenstellenrechnung verteilt die Gemeinkosten.','Die Kostenträgerrechnung zeigt den Gewinn/Verlust pro Produkt.'], reveal: ['Die Kostenartenrechnung ist der Ausgangspunkt: Hier werden alle Kosten nach ihrer Art erfasst (Material, Löhne, Zinsen, etc.). Sie übernimmt die Werte aus der FIBU und bereinigt sie um sachliche Abgrenzungen.','Die Kostenstellenrechnung verteilt die Gemeinkosten auf die Orte, wo sie angefallen sind (Material, Fertigung, V+V). Warum dieser Zwischenschritt? Gemeinkosten können nicht direkt den Produkten zugeordnet werden.','Die Kostenträgerrechnung ist das Endresultat: Sie zeigt die Selbstkosten und den Gewinn/Verlust pro Produkt. Prüfungstipp: Die Reihenfolge ist immer gleich: Kostenarten → Kostenstellen → Kostenträger. Jede Stufe baut auf der vorherigen auf.'] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die drei Stufen der Kostenrechnung verstehen: Kostenarten, Kostenstellen, Kostenträger',
            'Einzelkosten und Gemeinkosten unterscheiden',
            'Sachliche Abgrenzungen zwischen FIBU und BEBU vornehmen',
            'Einen einfachen Betriebsabrechnungsbogen (BAB) erstellen'
          ]},
          { type: 'concept', title: 'Aufbau der Kostenrechnung', content: 'In der Betriebsbuchhaltung (BEBU) werden die Kosten nach drei Gesichtspunkten erfasst: Kostenarten (welche Kosten?), Kostenstellen (wo sind sie angefallen?) und Kostenträger (wofür sind sie angefallen?). Einzelkosten werden direkt den Kostenträgern zugeordnet, Gemeinkosten werden über die Kostenstellenrechnung verteilt.', highlight: 'Einzelkosten → direkt auf Kostenträger. Gemeinkosten → über Kostenstellen verteilt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kostenarten', def: 'Welche Kosten? Z.B. Material, Löhne, Zinsen, Versicherungen, Abschreibungen.' },
            { term: 'Kostenstellen', def: 'Wo sind die Kosten angefallen? Z.B. Material, Fertigung, Verwaltung, Vertrieb.' },
            { term: 'Kostenträger', def: 'Wofür sind die Kosten angefallen? Z.B. Produkt A, Produkt B.' },
            { term: 'Einzelkosten (direkte Kosten)', def: 'Kosten, die einem Kostenträger direkt zugeordnet werden können.' },
            { term: 'Gemeinkosten (indirekte Kosten)', def: 'Kosten, die nicht direkt zugeordnet werden können und über Kostenstellen umgelegt werden.' },
            { term: 'Sachliche Abgrenzung', def: 'Differenz zwischen Aufwand (FIBU) und Kosten (BEBU). Z.B. kalkulatorische Kosten.' },
            { term: 'Verursacherprinzip', def: 'Wer die Kosten verursacht, soll sie auch tragen.' },
            { term: 'Bezugsgrösse', def: 'Verteilschlüssel für die Umlage der Gemeinkosten auf Kostenträger.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Kostenstellenrechnung bildet die Grundlage für die Kostenträgerrechnung (nicht umgekehrt!). Herstellkosten = Materialkosten + Fertigungskosten. Selbstkosten = Herstellkosten + VVGK (Verwaltungs- und Vertriebsgemeinkosten).' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Drei Stufen: Kostenarten (welche?) → Kostenstellen (wo?) → Kostenträger (wofür?)',
            'Einzelkosten direkt auf Kostenträger, Gemeinkosten über Kostenstellen verteilt',
            'Sachliche Abgrenzungen: Überleitung FIBU-Aufwand zu BEBU-Kosten',
            'Herstellkosten = Material + Fertigung, Selbstkosten = HK + VVGK'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 11: Ausgewählte Fragen der Kostenrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch11',
      num: 'Kapitel 11',
      title: 'Ausgewählte Fragen der Kostenrechnung',
      exercises: [
        { id: 100, type: 'fill', q: 'Lückentext: Kostenrechnungssysteme', tips: ['Die Ist-Kostenrechnung verwendet tatsächliche Kosten.','Direct Costing: nur variable Kosten.','Vollkostenrechnung: alle Kosten auf Kostenträger.'], reveal: ['Die Ist-Kostenrechnung ist die ursprüngliche Form und verwendet die tatsächlich angefallenen Kosten. Die Normalkostenrechnung verwendet Durchschnittswerte aus der Vergangenheit – sie ist vergangenheitsorientiert.','Bei der Vollkostenrechnung werden ALLE Kosten (variable + fixe) auf die Kostenträger verrechnet. Bei der Teilkostenrechnung (Direct Costing) nur die variablen Kosten – die fixen Kosten werden als Block vom Gesamt-Deckungsbeitrag abgezogen.','Prüfungstipp: Im Direct Costing unterscheidet man zwischen proportionalen (variablen) und fixen Kosten, nicht zwischen Einzelkosten und Gemeinkosten. Diese Unterscheidung ist anders als bei der Vollkostenrechnung!'], template: 'Die {0} ist die ursprüngliche Form und verwendet die tatsächlich angefallenen {1}. Die {2} verwendet Durchschnittswerte und ist {3}. Bei der {4} werden alle Kosten auf die Kostenträger verrechnet. Bei der {5} werden nur die {6} Kosten zugerechnet, die {7} Kosten werden als Block abgezogen. Die Vollkostenrechnung unterscheidet zwischen {8} und {9}. Das Direct Costing unterscheidet zwischen {10} und {11} Kosten.', blanks: [['Ist-Kostenrechnung'],['Ist-Kosten'],['Normalkostenrechnung'],['vergangenheitsorientiert'],['Vollkostenrechnung'],['Teilkostenrechnung'],['variablen'],['fixen'],['Einzelkosten'],['Gemeinkosten'],['proportionalen'],['fixen']] },
        { id: 101, type: 'tf', q: 'Richtig oder falsch? Kostenrechnungssysteme', tips: ['Einzelkosten ≠ variable Kosten immer.','DB = Nettoerlös − variable Kosten.','Standardkostenrechnung = Vollkostensystem.'], reveal: ['Einzelkosten sind NICHT identisch mit variablen Kosten! Beispiel: Eine fixe Lizenzgebühr für ein bestimmtes Produkt ist eine fixe Einzelkosten. Und umgekehrt: Energiekosten sind variable Gemeinkosten. Die Begriffe beschreiben verschiedene Dimensionen.','Der Deckungsbeitrag (DB) = Nettoerlös − variable Kosten (NICHT Selbstkosten!). Der DB zeigt, wie viel ein Produkt zur Deckung der Fixkosten und zum Gewinn beiträgt. Häufiger Fehler: DB mit Bruttogewinn verwechseln.','Die Prozesskostenrechnung ist ein Vollkostensystem (nicht Teilkosten!). Sie ordnet Gemeinkosten über Prozesse und Aktivitäten zu. Die Standardkostenrechnung gehört ebenfalls zu den Vollkostensystemen.'], statements: [{s:'Einzelkosten = variable Kosten.', c: false,reason:'Nicht identisch.'},{s:'Standardkostenrechnung gehört zu Vollkostensystemen.', c: true},{s:'DB = Selbstkosten − variable Kosten.', c: false,reason:'DB = Nettoerlös − variable Kosten.'},{s:'Normalkostenrechnung und Ist-Kostenrechnung unterscheiden sich.', c: true},{s:'Prozesskostenrechnung ist ein Teilkostensystem.', c: false,reason:'Ist ein Vollkostensystem.'}] },
        { id: 102, type: 'text', q: 'Umschreibung von Fachbegriffen der Kostenrechnung', tips: ['Variable Kosten ändern sich mit der Beschäftigung.','Fixe Kosten bleiben bei Beschäftigungsänderung gleich.','Break-even = Gewinnschwelle = DB deckt genau die Fixkosten.'], reveal: ['Variable Kosten ändern sich proportional zur Beschäftigung (Produktionsmenge). Beispiele: Rohmaterial, Akkordlöhne, Energiekosten. Fixe Kosten bleiben bei Beschäftigungsänderung gleich. Beispiele: Miete, Versicherungen, Gehälter.','Der Deckungsbeitrag (DB) = Nettoerlös − variable Kosten. Er zeigt, wie viel ein Produkt zur Deckung der Fixkosten beiträgt. Solange der DB positiv ist, lohnt sich die Produktion (auch wenn der Vollkosten-Gewinn negativ wäre!).','Break-even (Gewinnschwelle/Nutzschwelle) = der Punkt, an dem der Gesamt-DB genau die Fixkosten deckt. Formel: Break-even-Menge = Fixkosten / DB pro Stück. Ab dieser Menge wird Gewinn erzielt.'], questions: [{id:'a',q:'Variable Kosten?',keywords:['proportional','Beschäftigung','veränderlich']},{id:'b',q:'Fixe Kosten?',keywords:['gleich','unverändert','konstant']},{id:'c',q:'Deckungsbeitrag?',keywords:['Erlös','variable','Kosten']},{id:'d',q:'Break-even?',keywords:['Gewinnschwelle','Nutzschwelle','Nullpunkt']}] },
        { id: 103, type: 'text', q: 'Kostenverläufe aufzeichnen', tips: ['Fixe Kosten: waagrechte Linie.','Variable Kosten: steigende Gerade durch Nullpunkt.','Gesamtkosten = fixe + variable Kosten.'], reveal: ['Fixe Kosten verlaufen als waagrechte (horizontale) Linie – unabhängig von der Produktionsmenge. Warum? Miete, Versicherung etc. fallen an, auch wenn nichts produziert wird.','Variable Kosten verlaufen als steigende Gerade durch den Nullpunkt. Bei null Produktion = null variable Kosten. Je mehr produziert wird, desto höher die variablen Kosten. Die Steigung entspricht den variablen Kosten pro Stück.','Gesamtkosten = fixe + variable Kosten. Im Diagramm: Die Gesamtkostenlinie beginnt auf Höhe der Fixkosten und steigt parallel zur variablen Kostenlinie. Der Break-even liegt dort, wo die Erlöslinie die Gesamtkostenlinie schneidet.'], questions: [{id:'a',q:'Beschreiben Sie den Verlauf fixer Kosten.',keywords:['waagrecht','konstant','horizontal']},{id:'b',q:'Beschreiben Sie den Verlauf variabler Kosten.',keywords:['steigend','proportional','Gerade']}] },
        { id: 104, type: 'calc', q: 'Betriebsabrechnung im Direct Costing. Produkt A: Nettoerlös CHF 40/Stk., variable Kosten CHF 28/Stk., Absatzmenge 8\'000 Stk. Fixkosten total CHF 80\'000.', tips: ['Im Direct Costing werden nur variable Kosten den Produkten zugerechnet.','Fixe Kosten werden als Block vom Gesamt-DB abgezogen.','DB = Nettoerlös − variable Kosten.'], reveal: ['Im Direct Costing wird der DB pro Produkt berechnet: Nettoerlös − variable Kosten = Deckungsbeitrag. Warum nur variable Kosten? Weil fixe Kosten unabhängig von der Produktion anfallen und nicht verursachungsgerecht zugeordnet werden können.','Der Gesamt-DB aller Produkte muss die fixen Kosten decken. Rest = Betriebsergebnis. Formel: Gesamt-DB − Fixkosten = Gewinn/Verlust.','Prüfungstipp: Ein Produkt mit negativem Vollkosten-Ergebnis kann trotzdem einen positiven DB haben. Solange der DB positiv ist, trägt das Produkt zur Fixkostendeckung bei und sollte NICHT aus dem Sortiment genommen werden!'], calcs: [{label:'DB pro Stück (CHF)',answer:12},{label:'DB total bei 8\'000 Stück (CHF)',answer:96000},{label:'Betriebsergebnis (CHF)',answer:16000},{label:'Nutzschwelle in Stück',answer:6667}] },
        { id: 105, type: 'mc', q: 'Fragen zum Deckungsbeitrag und Break-even', tips: ['DB = Nettoerlös − variable Kosten.','Break-even-Menge = Fixkosten / DB pro Stück.','Positiver DB → Produkt beibehalten.'], reveal: ['Der DB pro Stück zeigt, wie viel ein Produkt zur Deckung der Fixkosten beiträgt. Beispiel: Verkaufspreis CHF 50, variable Kosten CHF 30, DB = CHF 20 pro Stück.','Break-even-Menge = Fixkosten / DB pro Stück. Beispiel: Fixkosten CHF 100 000, DB CHF 20/Stück → Break-even bei 5 000 Stück. Ab dem 5 001. Stück wird Gewinn erzielt.','Prüfungstipp: Ein Produkt mit positivem DB sollte NICHT eliminiert werden, auch wenn es in der Vollkostenrechnung einen Verlust zeigt. Warum? Ohne das Produkt würden die Fixkosten auf die verbleibenden Produkte verteilt → deren Ergebnis verschlechtert sich.'], questions: [{id:'a',q:'Produkt X: Verkaufspreis CHF 80, variable Kosten CHF 55. Wie hoch ist der DB?',options:['CHF 25','CHF 55','CHF 80','CHF 135'],answer:0},{id:'b',q:'Fixkosten CHF 60 000, DB pro Stück CHF 15. Break-even-Menge?',options:['2 000 Stück','3 000 Stück','4 000 Stück','5 000 Stück'],answer:2},{id:'c',q:'Produkt Y hat negativen Vollkosten-Gewinn aber positiven DB. Was tun?',options:['Sofort eliminieren','Beibehalten, da DB positiv','Preis verdoppeln','Fixkosten dem Produkt zurechnen'],answer:1}] },
        { id: 106, type: 'match', q: 'Ordnen Sie die Begriffe dem richtigen Kostenrechnungssystem zu.', tips: ['Vollkostenrechnung: alle Kosten auf Kostenträger.','Teilkostenrechnung: nur variable Kosten auf Kostenträger.','Ist-Kosten vs. Normalkosten vs. Standardkosten.'], reveal: ['Vollkostensysteme verrechnen alle Kosten auf die Kostenträger: Ist-Kostenrechnung (tatsächliche Kosten), Normalkostenrechnung (Durchschnittswerte), Standardkostenrechnung (Plankosten), Prozesskostenrechnung (über Aktivitäten).','Teilkostensysteme verrechnen nur variable Kosten: Direct Costing ist das bekannteste. Fixe Kosten werden als Block vom Gesamt-DB abgezogen. Vorteil: Bessere Entscheidungsgrundlage für Sortiments- und Preispolitik.','Prüfungstipp: Die Prozesskostenrechnung ist ein Vollkostensystem (häufiger Fehler!). Sie ist besonders geeignet für Unternehmen mit hohem Gemeinkostenanteil.'], pairs: [{l:'Tatsächlich angefallene Kosten',r:'Ist-Kostenrechnung'},{l:'Durchschnittswerte aus der Vergangenheit',r:'Normalkostenrechnung'},{l:'Vorgegebene Plankosten',r:'Standardkostenrechnung'},{l:'Nur variable Kosten auf Produkte',r:'Direct Costing'},{l:'Kosten über Prozesse zuordnen',r:'Prozesskostenrechnung'},{l:'Deckungsbeitrag pro Produkt',r:'Direct Costing'}], options: ['Ist-Kostenrechnung','Normalkostenrechnung','Standardkostenrechnung','Direct Costing','Prozesskostenrechnung'] },
        { id: 107, type: 'calc', q: 'Break-even-Analyse: Gewinnschwelle berechnen', tips: ['Break-even-Menge = Fixkosten / DB pro Stück.','DB pro Stück = Verkaufspreis − variable Kosten pro Stück.','Ab der Break-even-Menge wird Gewinn erzielt.'], reveal: ['DB pro Stück = Verkaufspreis − variable Kosten = CHF 120 − CHF 80 = CHF 40. Break-even-Menge = Fixkosten / DB pro Stück = CHF 200 000 / CHF 40 = 5 000 Stück.','Gewinn bei 7 000 Stück: DB total = 7 000 × CHF 40 = CHF 280 000. Gewinn = CHF 280 000 − CHF 200 000 = CHF 80 000. Oder: (7 000 − 5 000) × CHF 40 = CHF 80 000.','Prüfungstipp: Der Break-even-Punkt kann auch als Umsatz berechnet werden: Break-even-Umsatz = Fixkosten / DB-Marge in %. DB-Marge = DB / Verkaufspreis = 40/120 = 33.3%. Break-even-Umsatz = 200 000 / 0.333 = CHF 600 000.'], calcs: [{label:'DB pro Stück (CHF)',answer:40},{label:'Break-even-Menge (Stück)',answer:5000},{label:'Gewinn bei 7 000 Stück (CHF)',answer:80000}] },
        { id: 108, type: 'tf', q: 'Richtig oder falsch? Variable und fixe Kosten', tips: ['Variable Kosten pro Stück bleiben konstant.','Fixe Kosten pro Stück sinken bei steigender Menge.','Sprungfixe Kosten: ab bestimmter Menge steigen die Fixkosten.'], reveal: ['Variable Kosten pro Stück bleiben konstant (z.B. immer CHF 30 Material pro Stück), aber die variablen Gesamtkosten steigen mit der Menge. Fixe Kosten sind umgekehrt: Die Gesamtkosten bleiben gleich, aber die Fixkosten pro Stück sinken bei steigender Menge (Fixkostendegression).','Nicht alle Kosten lassen sich klar trennen: Sprungfixe Kosten bleiben bis zu einer bestimmten Kapazitätsgrenze fix und springen dann auf ein höheres Niveau (z.B. zweite Maschine nötig). Mischkosten haben einen fixen und einen variablen Anteil (z.B. Telefonkosten mit Grundgebühr + Gesprächskosten).','Prüfungstipp: In der Prüfung wird oft nach Kosten pro Stück vs. Gesamtkosten gefragt. Merkhilfe: Variable = Gesamtkosten steigen, Stückkosten konstant. Fix = Gesamtkosten konstant, Stückkosten sinken.'], statements: [{s:'Variable Kosten pro Stück steigen mit zunehmender Produktionsmenge.', c: false,reason:'Variable Kosten pro Stück bleiben konstant, nur die Gesamtkosten steigen.'},{s:'Fixe Kosten pro Stück sinken bei steigender Produktionsmenge.', c: true},{s:'Sprungfixe Kosten gibt es nicht – Kosten sind entweder fix oder variabel.', c: false,reason:'Sprungfixe Kosten springen ab einer bestimmten Kapazitätsgrenze.'},{s:'Miete ist ein typisches Beispiel für fixe Kosten.', c: true},{s:'Rohmaterial ist ein typisches Beispiel für fixe Kosten.', c: false,reason:'Rohmaterial ist variabel – je mehr produziert wird, desto mehr Material wird benötigt.'}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Verschiedene Kostenrechnungssysteme kennen (Ist-, Normal-, Standardkostenrechnung)',
            'Voll- und Teilkostenrechnung unterscheiden',
            'Variable und fixe Kosten unterscheiden und grafisch darstellen',
            'Den Deckungsbeitrag berechnen (Nettoerlös − variable Kosten)'
          ]},
          { type: 'concept', title: 'Kostenrechnungssysteme', content: 'Die ursprüngliche Form ist die Ist-Kostenrechnung, bei der die tatsächlichen Kosten verrechnet werden. Bei der Vollkostenrechnung werden ALLE Kosten auf die Kostenträger verrechnet. Bei der Teilkostenrechnung (z.B. Direct Costing) werden nur die variablen Kosten den Kostenträgern zugerechnet; die fixen Kosten werden als Block vom Gesamt-Deckungsbeitrag abgezogen.', highlight: 'Vollkosten = alle Kosten. Teilkosten (Direct Costing) = nur variable Kosten.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Ist-Kostenrechnung', def: 'Verrechnet die tatsächlich angefallenen Kosten.' },
            { term: 'Normalkostenrechnung', def: 'Verwendet Durchschnittswerte aus der Vergangenheit.' },
            { term: 'Standardkostenrechnung', def: 'Vollkostensystem mit vorgegebenen Plankosten.' },
            { term: 'Variable Kosten', def: 'Kosten, die sich proportional zur Produktionsmenge verändern.' },
            { term: 'Fixe Kosten', def: 'Kosten, die unabhängig von der Produktionsmenge gleich bleiben.' },
            { term: 'Deckungsbeitrag (DB)', def: 'Nettoerlös − variable Kosten. Beitrag zur Deckung der Fixkosten und zum Gewinn.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Einzelkosten sind NICHT immer gleich variable Kosten (z.B. fixe Einzelkosten). Im Direct Costing werden nur variable Kosten den Kostenträgern zugerechnet. Nicht verrechnete fixe Kosten müssen durch den Gesamt-Deckungsbeitrag gedeckt werden.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Ist-Kostenrechnung = tatsächliche Kosten, Normalkostenrechnung = Durchschnittswerte',
            'Vollkostenrechnung: alle Kosten auf Kostenträger. Teilkostenrechnung: nur variable Kosten',
            'Variable Kosten ändern sich mit der Menge, fixe Kosten bleiben konstant',
            'Deckungsbeitrag = Nettoerlös − variable Kosten (Beitrag zur Deckung der Fixkosten)'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 12: Kalkulationen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch12',
      num: 'Kapitel 12',
      title: 'Kalkulationen: Berechnungen rund um Betriebsleistungen',
      exercises: [
        {
          id: 109, type: 'fill',
          q: 'Lückentext: Kalkulationsgrössen',
          template: 'A) Der Bruttogewinn ist die Differenz zwischen {0} und {1}.\n\nB) Nach Berücksichtigung von {2} und sonstigen Erträgen ergibt sich der {3} bzw. {4} des Handelsunternehmens.\n\nC) Beim Bruttogewinnzuschlag in Prozent wird der Bruttogewinn als Prozentsatz vom {5} (bei Gesamtkalkulation) bzw. vom {6} (bei Einzelkalkulation) ausgedrückt.\n\nD) Bei der Handelsmarge in Prozent wird der Bruttogewinn als Prozentsatz vom {7} (bei Gesamtkalkulation) bzw. vom {8} (bei Einzelkalkulation) ausgedrückt.\n\nE) Wenn wir vom Total der {9} die Material-Gemeinkosten abziehen, so erhalten wir die Einzelmaterialkosten. Diese Kosten werden direkt auf die {10} übertragen.\n\nF) Nettoerlös − Selbstkosten = {11}.\n\nG) Nettoerlös − Warenaufwand = {12}.\n\nH) Selbstkosten + Reingewinn = {13}.\n\nI) Gemeinkosten + Reingewinn = {14}.',
          blanks: [['Nettoerlös','Nettoumsatz'],['Warenaufwand','Einstand','Einstandswert'],['betriebsfremden Aufwänden','betriebsfremde Aufwände','Gemeinaufwand'],['Bruttogewinn'],['Reingewinn'],['Einstandswert','Einstand'],['Nettoerlös'],['Einstandswert','Einstand'],['Selbstkosten'],['Warenaufwand','Einstandswert'],['Nettoerlös','Kostenträger'],['Reingewinn'],['Selbstkosten','Bruttogewinn'],['Nettoerlös','Bruttoerlös'],['Nettoerlös']],
          tips: ['Bruttogewinn = Nettoerlös − Warenaufwand (Einstand).','Reingewinn = Bruttogewinn − Gemeinaufwand + sonstige Erträge.','Nettoerlös − Selbstkosten = Reingewinn.'],
          reveal: ['Die zentralen Gleichungen im Handel: Bruttogewinn = Nettoerlös − Warenaufwand (Einstand). Warum? Der Bruttogewinn zeigt, was nach Abzug des Wareneinkaufs übrig bleibt – noch OHNE Berücksichtigung der Gemeinkosten.','Bruttogewinnzuschlag vs. Handelsmarge: Beide drücken den Bruttogewinn in % aus, aber mit unterschiedlicher Bezugsgrösse. Der Zuschlag rechnet vom Einstand (kleinere Basis → höherer %), die Marge vom Nettoerlös (grössere Basis → tieferer %). Prüfungstipp: In CHF sind sie identisch, in % ist die Marge IMMER kleiner.','Produktionskalkulation: Materialkosten − Material-GK = Einzelmaterial. Nettoerlös − Selbstkosten = Reingewinn. Häufiger Fehler: Selbstkosten mit Herstellkosten verwechseln – Selbstkosten = HK + VVGK.']
        },
        {
          id: 110, type: 'tf',
          q: 'Richtig oder falsch? Kalkulation (Handelsbetrieb)',
          tips: ['Handelsmarge und Bruttogewinnzuschlag: In Franken sind sie gleich gross.','In Prozenten ist die Handelsmarge immer kleiner als der Bruttogewinnzuschlag.','Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand, der Reingewinnzuschlag auf den Selbstkosten.'],
          reveal: ['Handelsmarge und Bruttogewinnzuschlag sind in CHF identisch – beide entsprechen dem Bruttogewinn. Warum? Beide messen denselben Betrag, nur die prozentuale Bezugsgrösse unterscheidet sich. Merkhilfe: "In Franken gleich, in Prozent verschieden."','In Prozent ist die Handelsmarge IMMER kleiner als der Bruttogewinnzuschlag. Warum? Die Marge bezieht sich auf den Nettoerlös (grössere Zahl im Nenner), der Zuschlag auf den Einstand (kleinere Zahl). Häufiger Prüfungsfehler: Aussagen wie "in % gleich" oder "Marge grösser" sind FALSCH.','Zuschlagsbasis merken: Gemeinkostenzuschlag → auf Warenaufwand (Einstand). Reingewinnzuschlag → auf Selbstkosten. Prüfungstipp: Die Zuschläge kommen immer auf die VORHERIGE Stufe, nie auf den Nettoerlös.'],
          statements: [
            {s:'In Franken gemessen ist in einer bestimmten Situation die Handelsmarge bzw. der Bruttogewinnzuschlag gleich gross.', c: true},
            {s:'In Franken gemessen ist in einer bestimmten Situation die Handelsmarge höher als der Bruttogewinnzuschlag.', c: false,reason:'In Franken sind sie identisch.'},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation die Handelsmarge höher als der entsprechende Bruttogewinnzuschlag.', c: false,reason:'Die Handelsmarge in % ist immer kleiner, da sie auf dem grösseren Nettoerlös basiert.'},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation der Bruttogewinnzuschlag höher als die entsprechende Handelsmarge.', c: true},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation der Bruttogewinnzuschlag gleich hoch wie die entsprechende Handelsmarge.', c: false,reason:'Nur in Franken gleich, nicht in Prozent.'},
            {s:'Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand und der Reingewinnzuschlag auf den Selbstkosten.', c: true}
          ]
        },
        {
          id: 111, type: 'tf',
          q: 'Richtig oder falsch? Kalkulation (Produktionsbetrieb)',
          tips: ['Kalkulation = Ermittlung der Selbstkosten, nicht nur der Material-Gemeinkosten.','Material- + Fertigungskosten = Herstellkosten.','VVGK werden von den Herstellkosten subtrahiert, nicht von den Selbstkosten.'],
          reveal: ['Kalkulation ermittelt die SELBSTKOSTEN, nicht die Material-Gemeinkosten. Warum? Die Kalkulation soll die Gesamtkosten eines Produkts bestimmen – von den Materialeinzelkosten bis zu den VVGK. Nur so kann ein kostendeckender Preis festgelegt werden.','Kalkulationsschema: Material + Fertigung = Herstellkosten. HK + VVGK = Selbstkosten. Häufiger Fehler: Material + Fertigung = Selbstkosten. Das ist FALSCH – die VVGK fehlen! Merkhilfe: Selbstkosten = HK + VVGK.','Selbstkosten − VVGK = Herstellkosten (nicht Fertigungs-GK!). Materialeinzelkosten + Material-GK = Materialkosten. Prüfungstipp: Zeichne dir das Schema immer auf – es verhindert Verwechslungen.'],
          statements: [
            {s:'Bei der Kalkulation geht es um die Ermittlung der Material-Gemeinkosten.', c: false,reason:'Kalkulation ermittelt die Selbstkosten (Gesamtkosten eines Produkts).'},
            {s:'Die Kalkulationen können als Gesamt- oder Einzelkalkulation durchgeführt werden.', c: true},
            {s:'Das Kalkulationsschema besagt, wo Kosten entstanden sind.', c: true},
            {s:'Wenn wir die Material- und Fertigungskosten addieren, erhalten wir die Selbstkosten.', c: false,reason:'Mat.+Fert. = Herstellkosten. Selbstkosten = Herstellkosten + VVGK.'},
            {s:'Wenn wir von den Selbstkosten die Verwaltungs- und Vertriebs-Gemeinkosten subtrahieren, erhalten wir die Fertigungs-Gemeinkosten.', c: false,reason:'Selbstkosten − VVGK = Herstellkosten.'},
            {s:'Wenn wir die Materialeinzelkosten mit den Material-Gemeinkosten addieren, so erhalten wir das Total der Materialkosten.', c: true}
          ]
        },
        {
          id: 112, type: 'match',
          q: 'Zuordnung: Kalkulationsarten. Ordnen Sie den folgenden Punkten 1 bis 8 das Passende aus der Liste A bis H zu.',
          tips: ['Gesamtkalkulation = Kalkulation aller Waren.','Einkaufskalkulation = Kalkulation des Einstands.','Nachkalkulation = Kalkulation mit effektiven Werten.'],
          reveal: ['Gesamtkalkulation (D) = ganzes Sortiment, Einzelkalkulation (A) = ein Artikel. Warum die Unterscheidung? Die Gesamtkalkulation verwendet Durchschnittswerte, die Einzelkalkulation ermittelt den exakten Preis eines Produkts.','Einkaufskalkulation (E) ermittelt den Einstand, Verkaufskalkulation (G) den Listenpreis, Betriebskalkulation (H) die eigenen Leistungskosten. Aufbauend (F) = vom kleinen zum grossen Wert, Abbauend (B) = umgekehrt.','Nachkalkulation (C) arbeitet mit effektiven (IST-)Werten. Warum wichtig? Sie zeigt, ob die Vorkalkulation korrekt war und ob der tatsächliche Gewinn den geplanten erreicht hat. Prüfungstipp: Vor- vs. Nachkalkulation = Plan vs. Ist.'],
          pairs: [
            {l:'1. Gesamtkalkulation',r:'D – Kalkulation aller Waren (Sortiment)'},
            {l:'2. Einkaufskalkulation',r:'E – Kalkulation des Einstands'},
            {l:'3. Aufbauende Kalkulation',r:'F – Kalkulation vom kleineren zum grösseren Wert'},
            {l:'4. Einzelkalkulation',r:'A – Kalkulation für einen Artikel'},
            {l:'5. Betriebskalkulation',r:'H – Kalkulation der eigenen Leistungserstellung'},
            {l:'6. Abbauende Kalkulation',r:'B – Kalkulation vom grösseren zum kleineren Wert'},
            {l:'7. Verkaufskalkulation',r:'G – Kalkulation des Listenpreises'},
            {l:'8. Nachkalkulation',r:'C – Kalkulation mit effektiven Werten'}
          ],
          options: ['A – Kalkulation für einen Artikel','B – Kalkulation vom grösseren zum kleineren Wert','C – Kalkulation mit effektiven Werten','D – Kalkulation aller Waren (Sortiment)','E – Kalkulation des Einstands','F – Kalkulation vom kleineren zum grösseren Wert','G – Kalkulation des Listenpreises','H – Kalkulation der eigenen Leistungserstellung']
        },
        {
          id: 113, type: 'text',
          q: 'Einzelfragen zum Thema Kalkulation. Umschreiben Sie die Begriffe bzw. notieren Sie, welche Grösse aus der Gleichung resultiert.',
          tips: ['Gemeinaufwand des Handelsbetriebs = alle Kosten ausser Warenaufwand.','Einstandswert = Einkaufspreis + Bezugskosten − Rabatte.','Nettoerlös − Reingewinnzuschlag = Selbstkosten.'],
          reveal: ['Gemeinaufwand = alle Kosten ausser Warenaufwand (Personal, Miete, Versicherungen usw.). Warum "Gemein"? Diese Kosten können nicht direkt einem bestimmten Produkt zugeordnet werden – sie fallen für den ganzen Betrieb an.','Bruttogewinn − Gemeinaufwand + sonstige Erträge = Reingewinn. Einstand + Bruttogewinn = Nettoerlös. Nettoerlös − Handelsmarge = Einstandswert. Merkhilfe: Die Handelsmarge ist der Bruttogewinn, ausgedrückt in % des Nettoerlöses.','Einstandswert = Gesamtkosten der Warenbeschaffung (Einkaufspreis − Rabatt − Skonto + Bezugskosten). Prüfungstipp: "Einstand" und "Warenaufwand" sind Synonyme.'],
          questions: [
            {id:'A',q:'Gemeinaufwand des Handelsbetriebs',keywords:['Kosten','Warenaufwand','Gemein','Personal','Miete','indirekt']},
            {id:'B',q:'= Bruttogewinn − Gemeinaufwand + sonstige Erträge',keywords:['Reingewinn','Betriebsgewinn','Nettoergebnis']},
            {id:'C',q:'Einstandswert',keywords:['Einkaufspreis','Bezugskosten','Rabatt','Beschaffung','Lieferant']},
            {id:'D',q:'= Einstand + Bruttogewinn',keywords:['Nettoerlös','Verkaufspreis','Umsatz']},
            {id:'E',q:'= Nettoerlös − Handelsmarge',keywords:['Einstand','Warenaufwand','Einstandswert']}
          ]
        },
        {
          id: 114, type: 'calc',
          q: 'Kalkulation: Ergänzung fehlender Grössen. Ergänzen Sie die fehlenden Werte in den Einkaufs- und Verkaufskalkulationen.\n\nEinkaufskalkulationen:\nNr.1: Bruttokreditankauf CHF 1\'800, Rabatt 25%, Skonto 2%. Gesucht: Nettobarankauf.\nNr.2: Bruttokreditankauf CHF 2\'600, Rabatt 15%. Gesucht: Rabatt in CHF.\nNr.3: Bruttokreditankauf CHF 9\'400, Rabatt 20%, Skonto 2.5%. Gesucht: Nettobarankauf.\nNr.4: Bruttokreditankauf CHF 3\'000, Rabatt 22%, Skonto 2%. Gesucht: Nettobarankauf.\n\nVerkaufskalkulationen:\nNr.1: Nettobarverkauf CHF 1\'822.80, Skonto 2%, Rabatt 25%. Gesucht: Rabatt in CHF.\nNr.2: Nettokreditverkauf CHF 3\'702.60, Skonto 0%. Gesucht: Skonto in CHF.\nNr.3: Nettobarverkauf CHF 1\'875, Skonto 0%, Rabatt 25%. Gesucht: Bruttokreditverkauf.',
          tips: ['Einkaufskalkulation: Bruttokreditankauf − Rabatt = Nettokreditankauf − Skonto = Nettobarankauf + Bezugskosten = Einstand.','Rabatt wird vom Bruttokreditankauf berechnet.','Skonto wird vom Nettokreditankauf berechnet.'],
          reveal: ['Einkaufskalkulationen: Immer Bruttokreditankauf → Rabatt → Nettokreditankauf → Skonto → Nettobarankauf → Bezugskosten → Einstand. Rabatt wird VOR Skonto abgezogen. Rabatt bezieht sich auf den Listenpreis, Skonto auf den bereits rabattierten Preis.','Nr.1: 1800 − 25% = 1350 − 2% = 1323. Nr.2: 2600 × 15% = 390. Nr.3: 9400 − 20% = 7520 − 2.5% = 7332. Nr.4: 3000 − 22% = 2340 − 2% = 2293.20. Häufiger Fehler: Skonto VOR dem Rabatt abziehen ergibt falsche Werte!','Verkaufskalkulation rückwärts: Nr.1: NBV 1822.80 / 0.98 = 1860 (NKV) / 0.75 = 2480 (BKV), Rabatt = 620. Nr.2: NKV 3702.60, kein Skonto = 0. Nr.3: NBV 1875 / 0.75 = BKV 2500. Prüfungstipp: Bei Rückwärtsrechnung Division statt Multiplikation. Z.B. Nettobarverkauf / (1 − Skonto%) = Nettokreditverkauf.'],
          calcs: [
            {label:'Nr.1 Einkauf: Nettobarankauf (CHF)',answer:1323},
            {label:'Nr.2 Einkauf: Rabatt (CHF)',answer:390},
            {label:'Nr.3 Einkauf: Nettobarankauf (CHF)',answer:7332},
            {label:'Nr.4 Einkauf: Nettobarankauf (CHF)',answer:2293.20},
            {label:'Nr.1 Verkauf: Rabatt (CHF)',answer:620},
            {label:'Nr.2 Verkauf: Skonto (CHF)',answer:0},
            {label:'Nr.3 Verkauf: Bruttokreditverkauf (CHF)',answer:2500}
          ]
        },
        {
          id: 115, type: 'calc',
          q: 'Kalkulationsstaffel. Ein Möbelgeschäft kalkuliert ein Regalsystem. Listenpreis CHF 400.−, Wiederverkaufsrabatt 25%, Lieferantenskonto 2%, Bezugskosten CHF 56.−, Bruttogewinnzuschlag 40%, Verkaufsskonto 2%, Einführungsrabatt 20%.',
          tips: ['Listenpreis 400, Wiederverkaufsrabatt 25% = 300.','Lieferantenskonto 2% vom Nettokreditankauf.','Bruttogewinnzuschlag 40%, Skonto 2%, Einführungsrabatt 20%.'],
          reveal: ['Einkaufsseite: 400 − 25% Rabatt = 300 (Nettokreditankauf) − 2% Skonto (6) = 294 (Nettobarankauf) + 56 Bezugskosten = 350 (Einstand). Warum Bezugskosten addieren? Transportkosten gehören zum Einstandspreis, weil sie nötig sind, um die Ware ins Lager zu bringen.','Verkaufsseite: Einstand 350 + 40% BG-Zuschlag (140) = 490 (Nettobarverkauf) + 2% Skonto (10) = 500 (Nettokreditverkauf) + 20% Rabatt (125) = 625 (Bruttokreditverkauf). Merkhilfe: Beim Einkauf MINUS Rabatt/Skonto, beim Verkauf PLUS Rabatt/Skonto.','Prüfungstipp: Die Verkaufskalkulation baut auf – vom Einstand über BG-Zuschlag, Skonto, Rabatt zum Bruttokreditverkaufspreis. Der Bruttogewinnzuschlag (40%) wird auf den Einstand berechnet, NICHT auf den Nettoerlös!'],
          calcs: [
            {label:'Bruttokreditankauf (Listenpreis)',answer:400},
            {label:'− Rabatt (25%)',answer:100},
            {label:'= Nettokreditankauf',answer:300},
            {label:'− Skonto (2%)',answer:6},
            {label:'= Nettobarankauf',answer:294},
            {label:'+ Bezugskosten',answer:56},
            {label:'= Einstand',answer:350},
            {label:'+ Bruttogewinnzuschlag (40%)',answer:140},
            {label:'= Nettobarverkauf',answer:490},
            {label:'+ Skonto (2%)',answer:10},
            {label:'= Nettokreditverkauf',answer:500},
            {label:'+ Rabatt (20%)',answer:125},
            {label:'= Bruttokreditverkauf',answer:625}
          ]
        },
        {
          id: 116, type: 'calc',
          q: 'Durchschnittliche Zuschlagssätze (Gesamtkalkulation). Die Meier Trading AG erzielt einen Nettoumsatz von CHF 816\'000.−. Die Gemeinkosten betragen CHF 140\'000.− und der Bruttogewinn entspricht 27.5% des Einstandswerts.',
          tips: ['Nettoumsatz 816\'000, Gemeinkosten 140\'000, Bruttogewinn = 27.5% des Einstandswerts.','Einstandswert = Nettoumsatz − Bruttogewinn.','Reingewinn = Nettoumsatz − Einstandswert − Gemeinkosten.'],
          reveal: ['Einstandswert berechnen: NE = Einstand × 1.275 → Einstand = 816\'000 / 1.275 = 640\'000. Bruttogewinn = 176\'000. Warum so rechnen? Weil der BG als % des Einstandswerts gegeben ist, muss man den Einstand über die Gleichung herleiten.','Reingewinn = NE − Einstand − GK = 816\'000 − 640\'000 − 140\'000 = 36\'000. Selbstkosten = Einstand + GK = 780\'000. GK-Zuschlag = 140\'000 / 640\'000 × 100 = 21.88%. RG-Zuschlag = 36\'000 / 780\'000 × 100 = 4.62%.','Häufiger Fehler: Zuschlag auf falscher Basis berechnen. GK-Zuschlag → Basis Einstand. RG-Zuschlag → Basis Selbstkosten. Prüfungstipp: Der Reingewinn kann auch als NE − SK berechnet werden.'],
          calcs: [
            {label:'Einstandswert (CHF)',answer:640000},
            {label:'Bruttogewinn (CHF)',answer:176000},
            {label:'Reingewinn (CHF)',answer:36000},
            {label:'Selbstkosten (CHF)',answer:780000},
            {label:'Gemeinkostenzuschlag (%)',answer:21.88},
            {label:'Reingewinnzuschlag (%)',answer:4.62}
          ]
        },
        {
          id: 117, type: 'calc',
          q: 'Kalkulation einer Sitzplatzüberdachung (Modell Ticino). Einzelmaterial CHF 400, Einzellöhne 4 Std. à CHF 75, Material-GK 12.5%, Fertigungs-GK 1: 50% auf EL, Fertigungs-GK 2: 1 Std. à CHF 100, VVGK 10% der HK, Reingewinn 8% der SK.',
          tips: ['Einzelmaterial CHF 400, Einzellöhne 4 Stunden × CHF 75 = CHF 300.','Material-GK 12.5% auf EM, Fertigungs-GK 1: 50% auf EL, Fertigungs-GK 2: 1 Std. × CHF 100.','VVGK 10% der HK, Reingewinnzuschlag 8% der SK.'],
          reveal: ['Material: EM 400 + Mat-GK 12.5% (50) = 450. Fertigung: EL 4×75 = 300 + Fert-GK 1 (50%×300 = 150) + Fert-GK 2 (1×100) = 550. Warum zwei Fert-GK? GK 1 ist proportional zu den Einzellöhnen, GK 2 sind Maschinenkosten pro Stunde.','HK = 450 + 550 = 1000. VVGK 10% (100) → SK = 1100. RG 8% (88) → NE = 1188. Merkhilfe: Das Schema baut Stufe für Stufe auf – jeder Zuschlag bezieht sich auf die jeweilige Vorstufe.','Prüfungstipp: Achte auf die Zuschlagsbasis! Mat-GK → auf Einzelmaterial. Fert-GK → auf Einzellöhne (oder Maschinenstundensatz). VVGK → auf Herstellkosten. RG → auf Selbstkosten. Fehler bei der Basis führt zu komplett falschen Ergebnissen.'],
          calcs: [
            {label:'Einzelmaterial',answer:400},
            {label:'Material-Gemeinkosten (12.5%)',answer:50},
            {label:'Materialkosten',answer:450},
            {label:'Einzellöhne (4×75)',answer:300},
            {label:'Fertigungs-GK 1 (50% auf EL)',answer:150},
            {label:'Fertigungs-GK 2 (1×100)',answer:100},
            {label:'Fertigungskosten',answer:550},
            {label:'Herstellkosten',answer:1000},
            {label:'VVGK (10% der HK)',answer:100},
            {label:'Selbstkosten',answer:1100},
            {label:'Reingewinnzuschlag (8%)',answer:88},
            {label:'Nettoerlös',answer:1188}
          ]
        },
        {
          id: 118, type: 'calc',
          q: 'Kalkulation Surfbretter (Surf AG). EM CHF 1\'300, EL 32.5 Std. à CHF 60, Mat-GK 20%, Fert-GK CHF 78/Std., VVGK 20% der HK, Reingewinn 10% der SK, MWST 8.0%, Rabatt 5%, Skonto 2%.',
          tips: ['Einzelmaterial CHF 1\'300, Einzellöhne 32.5 Std. × CHF 60 = CHF 1\'950.','Material-GK 20%, Fertigungs-GK CHF 78/EL-Stunde, VVGK 20% der HK, Reingewinn 10% der SK.','MWST 8.0%, Rabatt 5%, Skonto 2%.'],
          reveal: ['Materialkosten: EM 1300 + 20% Mat-GK (260) = 1560. Fertigungskosten: EL 32.5×60 = 1950 + Fert-GK 32.5×78 = 2535 → Total 4485. HK = 1560 + 4485 = 6045. Warum Fert-GK pro EL-Stunde? Der Maschinenstundensatz (CHF 78) wird pro geleistete Arbeitsstunde berechnet.','SK = HK 6045 + VVGK 20% (1209) = 7254. RG 10% (725) = NE 7979. Zum Bruttokreditverkaufspreis: + Skonto 2%, + Rabatt 5%, + MWST 8% → ca. CHF 9254. Prüfungstipp: MWST wird IMMER als letztes draufgeschlagen!','Häufiger Fehler: Fert-GK mit der Produktionsmenge statt den EL-Stunden berechnen. Bei CHF 78/Std.: Fert-GK = Anzahl EL-Stunden × 78. MWST, Rabatt und Skonto kommen NACH dem Nettoerlös – sie sind nicht Teil der Selbstkosten.'],
          calcs: [
            {label:'Einzelmaterial',answer:1300},
            {label:'Material-GK (20%)',answer:260},
            {label:'Materialkosten',answer:1560},
            {label:'Einzellöhne (32.5×60)',answer:1950},
            {label:'Fertigungs-GK (32.5×78)',answer:2535},
            {label:'Fertigungskosten',answer:4485},
            {label:'Herstellkosten',answer:6045},
            {label:'VVGK (20%)',answer:1209},
            {label:'Selbstkosten',answer:7254},
            {label:'Reingewinn (10%)',answer:725},
            {label:'Nettoerlös',answer:7979},
            {label:'Bruttokreditverkaufspreis inkl. MWST (gerundet)',answer:9257}
          ]
        },
        {
          id: 119, type: 'sort',
          q: 'Sortieren Sie die Schritte der Einkaufskalkulation in die richtige Reihenfolge (von oben nach unten).',
          items: ['Nettobarankauf','Bruttokreditankauf (Listenpreis)','Einstand (Einstandspreis)','Nettokreditankauf','− Skonto','+ Bezugskosten','− Rabatt'],
          correctOrder: [1,6,3,4,0,5,2],
          tips: ['Der Listenpreis steht immer am Anfang.','Rabatt wird VOR Skonto abgezogen.','Bezugskosten kommen ganz am Schluss dazu.'],
          reveal: ['Korrekte Reihenfolge: Bruttokreditankauf (Listenpreis) → − Rabatt → Nettokreditankauf → − Skonto → Nettobarankauf → + Bezugskosten → Einstand. Warum diese Reihenfolge? Rabatt ist ein Preisnachlass auf den Listenpreis, Skonto ein Abzug für schnelle Zahlung – erst nach dem Rabatt.','Merkhilfe: "BRutto → Rabatt → Netto-Kredit → Skonto → Netto-Bar → Bezug → Einstand." Häufiger Fehler: Skonto VOR dem Rabatt abziehen. Skonto wird auf dem bereits rabattierten Preis berechnet.','Prüfungstipp: Bezugskosten (Transport, Verpackung) werden ADDIERT. Alle anderen Abzüge (Rabatt, Skonto) werden subtrahiert. Der Einstand ist der tatsächliche Beschaffungspreis der Ware.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Kalkulationsgrössen für Handels- und Produktionsbetriebe kennen',
            'Einkaufs- und Verkaufskalkulationen durchführen',
            'Das Kalkulationsschema eines Produktionsbetriebs anwenden',
            'Zuschlagssätze berechnen (Gemeinkostenzuschlag, Reingewinnzuschlag)'
          ]},
          { type: 'concept', title: 'Kalkulationsschema Handel', content: 'Im Handel: Bruttokreditankauf − Rabatt = Nettokreditankauf − Skonto = Nettobarankauf + Bezugskosten = Einstand (Warenaufwand). Einstand + Bruttogewinn = Nettoerlös. Bruttogewinnzuschlag basiert auf dem Einstandswert, Handelsmarge basiert auf dem Nettoerlös.', highlight: 'Handelsmarge und Bruttogewinnzuschlag: In Franken gleich, in Prozenten ist die Marge kleiner.' },
          { type: 'concept', title: 'Kalkulationsschema Produktion', content: 'Im Produktionsbetrieb: Einzelmaterial + Material-GK = Materialkosten. Einzellöhne + Fertigungs-GK = Fertigungskosten. Materialkosten + Fertigungskosten = Herstellkosten. Herstellkosten + VVGK = Selbstkosten. Selbstkosten + Reingewinn = Nettoerlös.', highlight: 'Herstellkosten = Material + Fertigung. Selbstkosten = HK + VVGK.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Einstandswert (Einstand)', def: 'Gesamtkosten der Beschaffung: Einkaufspreis − Rabatt − Skonto + Bezugskosten.' },
            { term: 'Bruttogewinn', def: 'Nettoerlös − Warenaufwand (Einstand).' },
            { term: 'Bruttogewinnzuschlag', def: 'Bruttogewinn in % des Einstandswerts (vom Kleineren zum Grösseren).' },
            { term: 'Handelsmarge', def: 'Bruttogewinn in % des Nettoerlöses (vom Grösseren zum Kleineren).' },
            { term: 'Herstellkosten', def: 'Materialkosten + Fertigungskosten.' },
            { term: 'Selbstkosten', def: 'Herstellkosten + Verwaltungs- und Vertriebsgemeinkosten (VVGK).' },
            { term: 'Reingewinn', def: 'Nettoerlös − Selbstkosten.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand (Einstand), der Reingewinnzuschlag auf den Selbstkosten. Nettoerlös − Selbstkosten = Reingewinn. Nettoerlös − Warenaufwand = Bruttogewinn.' },
          { type: 'svg', title: 'Kalkulationsschema (Einkauf und Verkauf)', svg: '<svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="arKS" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/></marker></defs><rect x="5" y="5" width="710" height="470" rx="12" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="360" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="#3b82f6">Kalkulationsschema</text><rect x="30" y="50" width="310" height="400" rx="10" fill="#3b82f6" fill-opacity="0.05" stroke="#3b82f6" stroke-width="1.5"/><text x="185" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">Einkaufskalkulation</text><rect x="50" y="90" width="270" height="30" rx="5" fill="#fff" stroke="#3b82f6" stroke-width="1"/><text x="185" y="110" text-anchor="middle" font-size="12" fill="#374151">Bruttokreditankauf (Listenpreis)</text><text x="50" y="138" font-size="12" fill="#dc2626">− Rabatt</text><rect x="50" y="148" width="270" height="30" rx="5" fill="#fff" stroke="#3b82f6" stroke-width="1"/><text x="185" y="168" text-anchor="middle" font-size="12" fill="#374151">= Nettokreditankauf</text><text x="50" y="196" font-size="12" fill="#dc2626">− Skonto</text><rect x="50" y="206" width="270" height="30" rx="5" fill="#fff" stroke="#3b82f6" stroke-width="1"/><text x="185" y="226" text-anchor="middle" font-size="12" fill="#374151">= Nettobarankauf</text><text x="50" y="254" font-size="12" fill="#059669">+ Bezugskosten</text><rect x="50" y="264" width="270" height="35" rx="6" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5"/><text x="185" y="287" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">= Einstand (Einstandspreis)</text><text x="185" y="320" text-anchor="middle" font-size="12" fill="#059669">+ Bruttogewinn</text><rect x="50" y="335" width="270" height="35" rx="6" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="1"/><text x="185" y="358" text-anchor="middle" font-size="13" font-weight="600" fill="#1e40af">= Nettoerloes</text><text x="185" y="395" text-anchor="middle" font-size="11" fill="#6b7280">Bruttogewinnzuschlag =</text><text x="185" y="412" text-anchor="middle" font-size="11" fill="#6b7280">BG × 100 / Einstand</text><text x="185" y="435" text-anchor="middle" font-size="11" fill="#6b7280">Handelsmarge =</text><text x="185" y="448" text-anchor="middle" font-size="11" fill="#6b7280">BG × 100 / Nettoerloes</text><rect x="380" y="50" width="310" height="400" rx="10" fill="#3b82f6" fill-opacity="0.05" stroke="#3b82f6" stroke-width="1.5"/><text x="535" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#1e40af">Produktionskalkulation</text><rect x="400" y="90" width="270" height="28" rx="5" fill="#fff" stroke="#3b82f6" stroke-width="1"/><text x="535" y="109" text-anchor="middle" font-size="11" fill="#374151">Einzelmaterial</text><text x="400" y="133" font-size="11" fill="#059669">+ Material-GK</text><rect x="400" y="140" width="270" height="28" rx="5" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1"/><text x="535" y="159" text-anchor="middle" font-size="11" font-weight="600" fill="#1e40af">= Materialkosten</text><rect x="400" y="178" width="270" height="28" rx="5" fill="#fff" stroke="#3b82f6" stroke-width="1"/><text x="535" y="197" text-anchor="middle" font-size="11" fill="#374151">Einzelloehne</text><text x="400" y="221" font-size="11" fill="#059669">+ Fertigungs-GK</text><rect x="400" y="228" width="270" height="28" rx="5" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1"/><text x="535" y="247" text-anchor="middle" font-size="11" font-weight="600" fill="#1e40af">= Fertigungskosten</text><rect x="400" y="268" width="270" height="32" rx="6" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1.5"/><text x="535" y="289" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">= Herstellkosten (HK)</text><text x="400" y="318" font-size="11" fill="#059669">+ Verwaltungs- und Vertriebs-GK</text><rect x="400" y="328" width="270" height="32" rx="6" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/><text x="535" y="349" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">= Selbstkosten (SK)</text><text x="400" y="380" font-size="11" fill="#059669">+ Reingewinn</text><rect x="400" y="388" width="270" height="32" rx="6" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-width="2"/><text x="535" y="409" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6">= Nettoerloes</text><text x="535" y="440" text-anchor="middle" font-size="11" fill="#6b7280">Reingewinnzuschlag =</text><text x="535" y="453" text-anchor="middle" font-size="11" fill="#6b7280">RG × 100 / Selbstkosten</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Handel: Listenpreis − Rabatt − Skonto + Bezugskosten = Einstand; Einstand + BG = Nettoerlös',
            'Produktion: Material-EK + Mat-GK + Fert-EK + Fert-GK = HK; HK + VVGK = Selbstkosten',
            'Bruttogewinnzuschlag = BG / Einstand × 100; Handelsmarge = BG / Nettoerlös × 100',
            'Reingewinnzuschlag = Reingewinn / Selbstkosten × 100'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 13: Entscheidungen auf Teilkostenbasis und Break-even-Analyse
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch13',
      num: 'Kapitel 13',
      title: 'Entscheidungen auf Teilkostenbasis und Break-even-Analyse',
      exercises: [
        {
          id: 120, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zur Preisfindung',
          tips: ['Der Deckungsbeitrag kann sich auf mehrere Perioden beziehen.','Kostendeckung ist EIN Kriterium bei der Preisfestsetzung.','Preissenkung führt in der Regel zu höherer Nachfragemenge.'],
          reveal: ['Langfristige Preisuntergrenze = volle Selbstkosten. Bei Zusatzaufträgen genügt kurzfristig die Deckung der variablen Kosten. Warum? Wenn ein Zusatzauftrag die variablen Kosten deckt, leistet er einen positiven Deckungsbeitrag zu den ohnehin anfallenden Fixkosten.','Umsatz = Preis × Menge. Daher kann der Umsatz durch Preisänderungen ODER Mengenänderungen beeinflusst werden. Eine Preiserhöhung führt nicht automatisch zu höherem Umsatz – wenn die Menge stärker sinkt als der Preis steigt, sinkt der Umsatz.','Prüfungstipp: Langfristig müssen ALLE Kosten gedeckt sein (Selbstkosten). Kurzfristig (Zusatzaufträge) reicht die Deckung der variablen Kosten. Die Betriebsrechnung kann nur eine Preisobergrenze bestimmen – am Markt entscheidet die Nachfrage.'],
          statements: [
            {s:'Der Deckungsbeitrag kann nicht nur auf eine Periode bezogen sein.', c: true},
            {s:'Kostendeckung ist eines der Kriterien bei der Preisfestsetzung.', c: true},
            {s:'Als langfristige Preisuntergrenze gelten die vollen Selbstkosten.', c: true},
            {s:'Bei der Preisfestsetzung von Zusatzaufträgen müssen stets die vollen Selbstkosten gedeckt sein.', c: false,reason:'Bei Zusatzaufträgen genügt es kurzfristig, wenn die variablen Kosten gedeckt sind (Preisuntergrenze).'},
            {s:'Mithilfe der Betriebsrechnung kann eine absolute Preisobergrenze bestimmt werden.', c: true},
            {s:'Nur durch eine Preisänderung kann der Umsatz (Erlös) beeinflusst werden.', c: false,reason:'Auch Mengenänderungen beeinflussen den Umsatz.'},
            {s:'Eine Preiserhöhung führt immer auch zu höherem Umsatz.', c: false,reason:'Höherer Preis kann zu tieferer Menge und somit zu tieferem Umsatz führen.'},
            {s:'Eine Preissenkung bewirkt in der Regel eine höhere Nachfragemenge.', c: true}
          ]
        },
        {
          id: 121, type: 'fill',
          q: 'Lückentext: Prinzip der Nutzschwelle',
          template: 'A) Die {0} bezeichnet jene Mengen- oder Umsatzgrösse, bei der das Unternehmen weder Gewinn noch Verlust erwirtschaftet. Der englische Begriff lautet {1}. Die Differenz zwischen Nettoerlös und variablen Kosten nennt man {2}. Im Handelsbetrieb entspricht diese Grösse dem Bruttogewinn.\n\nB) {3} sind alle Kosten, die unabhängig der Produktionsmenge resp. des Verkaufsumsatzes gleich gross bleiben. {4} steigen bzw. fallen, wenn die Produktionsmenge bzw. der Verkaufsumsatz steigt / sinkt.\n\nC) Die fixen Kosten entsprechen im Handelsbetrieb meist den {5}, da diese in den meisten Fällen eher fix sind.\n\nD) Entspricht der Deckungsbeitrag total den {6} Kosten, dann ist die Nutzschwelle erreicht. Ebenfalls wird die Nutzschwelle erreicht, wenn der {7} den Selbstkosten (Kostentotal) entspricht.',
          blanks: [['Nutzschwelle','Break-even','Break-even-Point'],['Break-even-Point','Break-even','Nutzschwelle'],['Deckungsbeitrag'],['Fixkosten','fixe Kosten','Fixe Kosten'],['Variable Kosten','variable Kosten'],['Gemeinkosten'],['fixen','fixe','Fixkosten'],['Nettoerlös','Umsatz','Nettoumsatz']],
          tips: ['Die Nutzschwelle = Break-even-Point.','Fixkosten sind unabhängig von der Produktionsmenge.','Deckungsbeitrag = Nettoerlös − variable Kosten.'],
          reveal: ['Die Nutzschwelle (Break-even-Point) = der Punkt, an dem weder Gewinn noch Verlust entsteht. Der Deckungsbeitrag (DB) = Nettoerlös − variable Kosten. Im Handelsbetrieb entspricht der DB dem Bruttogewinn. Warum? Weil die variablen Kosten im Handel dem Einstand (Warenaufwand) entsprechen.','Fixkosten bleiben konstant (Miete, Gehälter), variable Kosten ändern sich mit der Menge (Einstand). Im Handelsbetrieb: Gemeinkosten = meist fixe Kosten. An der Nutzschwelle: DB total = fixe Kosten, bzw. Nettoerlös = Selbstkosten.','Prüfungstipp: DB ist NICHT Nettoerlös − Selbstkosten! DB = Nettoerlös − VARIABLE Kosten. An der NS gilt NICHT NE = DB, sondern NE = Selbstkosten bzw. DB = Fixkosten.']
        },
        {
          id: 122, type: 'tf',
          q: 'Richtig oder falsch? Break-even-Analyse',
          tips: ['Wenn DB < Fixkosten → Verlust.','Im Warenhandel: Einstand = variable Kosten.','Proportionale Kosten verändern sich im gleichen Verhältnis wie die Verkaufshöhe.'],
          reveal: ['Gemeinkosten sind in der Regel FIXE Kosten (Miete, Gehälter, Versicherungen). Warum? Sie fallen unabhängig von der Produktions- oder Verkaufsmenge an. Im Handel: Einstand = variable Kosten, Gemeinkosten = Fixkosten.','DB = Nettoerlös − variable Kosten (NICHT Selbstkosten!). Häufigster Prüfungsfehler: DB mit Reingewinn (NE − SK) verwechseln. Proportionale Kosten verändern sich exakt im gleichen Verhältnis wie die Menge – sie sind eine Untergruppe der variablen Kosten.','Wenn DB total < Fixkosten → Verlust. Wenn DB total > Fixkosten → Gewinn. Merkhilfe: Der DB "deckt" erst die Fixkosten, was übrig bleibt ist Gewinn.'],
          statements: [
            {s:'Wenn die Summe der Deckungsbeiträge kleiner ist als die Höhe der Fixkosten, dann verbleibt ein Verlust.', c: true},
            {s:'Die Gemeinkosten sind in der Regel variable Kosten.', c: false,reason:'Gemeinkosten sind meist fixe Kosten.'},
            {s:'Im Warenhandel zählt der Einstand zu den variable Kosten.', c: true},
            {s:'Proportionale Kosten sind variable Kosten, die sich mit der Verkaufshöhe im gleichen Verhältnis verändern.', c: true},
            {s:'Im Warenhandel entspricht der Deckungsbeitrag der Differenz zwischen Nettoerlös und Selbstkosten.', c: false,reason:'DB = Nettoerlös − variable Kosten (nicht Selbstkosten).'},
            {s:'Der Deckungsbeitrag ist die Differenz von Nettoerlös und variablen Kosten.', c: true}
          ]
        },
        {
          id: 123, type: 'tf',
          q: 'Richtig oder falsch? Nutzschwellenanalyse',
          tips: ['An der Nutzschwelle: Nettoerlös = Deckungsbeitrag ist falsch (NE = Selbstkosten).','DB pro Stück × mengenmässige NS = wertmässige NS ist falsch (NS wertmässig = NS Menge × Preis).','Bei gestiegenen Fixkosten und gleichem NE steigt die Nutzschwelle.'],
          reveal: ['An der NS gilt: NE = Selbstkosten bzw. DB = Fixkosten. NICHT: NE = DB! Wertmässige NS = mengenmässige NS × NE pro Stück (NICHT × DB pro Stück!). Warum? Die wertmässige NS zeigt den Umsatz, nicht den DB.','DB = NE − variable Kosten (NICHT NE − Selbstkosten!). Erfolg = DB − Fixkosten. An der NS sind variable und fixe Kosten NICHT zwingend gleich hoch – das wäre nur Zufall. Häufiger Fehler: "An der NS: var.K = FK" ist FALSCH.','Bei höheren Fixkosten (var.K und NE gleich) steigt die NS. Bei tieferem NE pro Stück (Kosten gleich) STEIGT die mengenmässige NS, weil der DB/Stück sinkt. Prüfungstipp: Bei Gewinnziel wird die Formel zu (FK + Gewinnziel) / DB pro Stück.'],
          statements: [
            {s:'An der Nutzschwelle gilt: Nettoerlös = Deckungsbeitrag.', c: false,reason:'An der NS gilt: Nettoerlös = Selbstkosten, bzw. DB = Fixkosten.'},
            {s:'Der Erfolg ergibt sich aus der Differenz von Deckungsbeitrag und fixen Kosten.', c: true},
            {s:'Die wertmässige Nutzschwelle ergibt sich aus dem Deckungsbeitrag pro Stück mal der mengenmässigen Nutzschwelle.', c: false,reason:'Wertmässige NS = mengenmässige NS × Nettoerlös pro Stück.'},
            {s:'Der Deckungsbeitrag entspricht der Differenz zwischen Nettoerlös und Selbstkosten.', c: false,reason:'DB = Nettoerlös − variable Kosten.'},
            {s:'Soll ein bestimmter Gewinn mindestens erzielt werden, so erhöht sich der Deckungsbedarf in der Nutzschwellenanalyse.', c: true},
            {s:'An der Nutzschwelle sind die variablen Kosten immer genau so hoch wie die fixen Kosten.', c: false,reason:'Das ist nur zufällig so – an der NS gilt: DB = Fixkosten.'},
            {s:'Bei gestiegenen Fixkosten (variable Kosten und Nettoerlös bleiben gleich) wird auch die Nutzschwelle höher.', c: true},
            {s:'Bei geringerem Nettoerlös pro Stück (Kosten bleiben gleich) sinkt die Nutzschwelle.', c: false,reason:'Die mengenmässige NS steigt, da der DB pro Stück kleiner wird.'}
          ]
        },
        {
          id: 124, type: 'text',
          q: 'Betrachten Sie das Nutzschwellendiagramm und beantworten Sie die Fragen.',
          svg: '<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:Arial,sans-serif"><rect width="600" height="400" fill="#f8f9fa"/><line x1="70" y1="350" x2="570" y2="350" stroke="#333" stroke-width="2"/><line x1="70" y1="350" x2="70" y2="30" stroke="#333" stroke-width="2"/><polygon points="70,25 65,35 75,35" fill="#333"/><polygon points="575,350 565,345 565,355" fill="#333"/><text x="30" y="200" text-anchor="middle" transform="rotate(-90,30,200)" font-size="14" fill="#333" font-weight="bold">CHF</text><text x="320" y="390" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Absatzmenge</text><line x1="70" y1="250" x2="570" y2="250" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="8,4"/><text x="575" y="248" font-size="12" fill="#e74c3c" font-weight="bold">Fixkosten</text><line x1="70" y1="250" x2="570" y2="80" stroke="#e67e22" stroke-width="2.5"/><text x="575" y="78" font-size="12" fill="#e67e22" font-weight="bold">Gesamtkosten</text><line x1="70" y1="350" x2="570" y2="50" stroke="#27ae60" stroke-width="2.5"/><text x="575" y="48" font-size="12" fill="#27ae60" font-weight="bold">Nettoerlös</text><circle cx="370" cy="155" r="6" fill="#2c3e50"/><text x="370" y="140" text-anchor="middle" font-size="14" fill="#2c3e50" font-weight="bold">Nutzschwelle</text><line x1="370" y1="165" x2="370" y2="350" stroke="#2c3e50" stroke-width="1" stroke-dasharray="4,4"/><rect x="410" y="90" width="120" height="30" rx="5" fill="#27ae60" fill-opacity="0.15" stroke="#27ae60" stroke-width="1"/><text x="470" y="110" text-anchor="middle" font-size="16" fill="#27ae60" font-weight="bold">S (Gewinn)</text><rect x="180" y="220" width="120" height="30" rx="5" fill="#e74c3c" fill-opacity="0.15" stroke="#e74c3c" stroke-width="1"/><text x="240" y="240" text-anchor="middle" font-size="16" fill="#e74c3c" font-weight="bold">T (Verlust)</text><path d="M70,250 L370,155 L370,155" fill="none" stroke="none"/><polygon points="120,290 120,260 250,230 250,260" fill="#e74c3c" fill-opacity="0.08"/><polygon points="420,120 420,100 530,70 530,85" fill="#27ae60" fill-opacity="0.08"/></svg>',
          tips: ['Im Nutzschwellendiagramm: Fixkosten = horizontale Linie.','Gesamtkosten = Fixkosten + variable Kosten (Gerade ab FK-Niveau).','Nutzschwelle = Schnittpunkt von Nettoerlös- und Gesamtkostenkurve.'],
          reveal: ['Punkt S (oberhalb NS) = Gewinnzone: Nettoerlös > Gesamtkosten. Punkt T (unterhalb NS) = Verlustzone: Gesamtkosten > Nettoerlös. Die NS ist der Schnittpunkt beider Geraden.','Die 7 Bezeichnungen im Diagramm: 1) Kosten/Erlös (Y-Achse), 2) Absatz/Menge (X-Achse), 3) Nettoerlös-Gerade, 4) Gesamtkosten-Gerade, 5) Variable Kosten, 6) Fixkosten (horizontale Linie), 7) Nutzschwelle (Schnittpunkt).','Prüfungstipp: Die Fixkosten-Linie beginnt auf der Y-Achse und verläuft horizontal. Die Gesamtkosten-Gerade beginnt am Fixkosten-Niveau und steigt mit den variablen Kosten. Die NE-Gerade beginnt bei Null. Wo sich NE- und GK-Gerade schneiden = Nutzschwelle.'],
          questions: [
            {id:'A',q:'Was zeigt Punkt S im Diagramm (oberhalb der Nutzschwelle)?',keywords:['Gewinn','Nettoerlös','grösser','Kosten','positiv']},
            {id:'B',q:'Was zeigt Punkt T im Diagramm (unterhalb der Nutzschwelle)?',keywords:['Verlust','Kosten','grösser','Nettoerlös','negativ']},
            {id:'C',q:'Welche 7 Bezeichnungen gehören ins Nutzschwellendiagramm?',keywords:['Fixkosten','variable','Gesamtkosten','Nettoerlös','Nutzschwelle','Gewinn','Verlust']}
          ]
        },
        {
          id: 125, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Baumarkt). X-100 (VP 300, var.K 225, Beratung 15 Min.) vs. Z-300 (VP 450, var.K 315, Beratung 30 Min.). Berechnen Sie DB je Stück, DB je Minute und DB-Marge.',
          tips: ['DB pro Stück = Verkaufspreis − variable Kosten.','DB pro Minute = DB pro Stück / Zeitbedarf pro Stück.','Bei freier Kapazität: Produkt mit höherem DB/Stück bevorzugen. Bei Engpass: DB/Zeiteinheit massgebend.'],
          reveal: ['X-100: DB = 300 − 225 = 75/Stk, DB/Min = 75/15 = 5. Z-300: DB = 450 − 315 = 135/Stk, DB/Min = 135/30 = 4.5. Z-300 hat den höheren DB/Stück, aber X-100 den höheren DB/Minute!','DB-Marge: X-100 = 75/300 = 25%, Z-300 = 135/450 = 30%. Warum ist der DB/Min wichtiger als DB/Stück? Bei einem Engpass (begrenzte Beratungszeit) zählt, wie viel DB pro Zeiteinheit erwirtschaftet wird.','Prüfungstipp: Bei freier Kapazität → Produkt mit höherem DB/Stück bevorzugen. Bei Engpass → DB pro Engpasseinheit (Minute, Maschinenstunde) ist entscheidend. X-100 ist bei Zeitengpass die bessere Wahl!'],
          calcs: [
            {label:'DB je Stück X-100',answer:75},
            {label:'DB je Stück Z-300',answer:135},
            {label:'DB je Min. X-100',answer:5},
            {label:'DB je Min. Z-300',answer:4.5},
            {label:'DB-Marge X-100 (%)',answer:25},
            {label:'DB-Marge Z-300 (%)',answer:30}
          ]
        },
        {
          id: 126, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Bierausschank). Zapfbier (VP 4.00, var.K 2.00, 2 Min.), Flaschenbier (VP 4.50, var.K 3.50, 0.5 Min.). Berechnen Sie DB je Stück und DB je Minute.',
          tips: ['DB/Stück = Preis − variable Kosten.','DB/Minute bei Engpass entscheidend.','Zapfbier: DB 2.00/Stück, 1.00/Min. Flaschenbier: DB 1.00/Stück, 2.00/Min.'],
          reveal: ['Zapfbier: DB = 4.00 − 2.00 = 2.00/Stk, aber DB/Min = 2.00/2 = 1.00. Flaschenbier: DB = 4.50 − 3.50 = 1.00/Stk, DB/Min = 1.00/0.5 = 2.00. Überraschung: Flaschenbier hat den doppelten DB pro Minute!','Warum? Zapfbier braucht 4× so lang (2 Min vs. 0.5 Min). Bei Zeitengpass (voller Laden) ist Flaschenbier profitabler pro Minute. Prüfungstipp: Immer beide Kennzahlen berechnen – DB/Stück UND DB/Engpasseinheit.'],
          calcs: [
            {label:'DB je Stück Zapfbier',answer:2},
            {label:'DB je Stück Flaschenbier',answer:1},
            {label:'DB je Min. Zapfbier',answer:1},
            {label:'DB je Min. Flaschenbier',answer:2}
          ]
        },
        {
          id: 127, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Grillstand). Bratwurst (VP 7, var.K 3, 5 Min., max 20 Stück), Kotelett (VP 15, var.K 9, 8 Min., max 10 Stück). Berechnen Sie DB/Stück, Kapazität/Stunde und DB/Stunde.',
          tips: ['Bratwurst: VP 7, var.K 3, Grillzeit 5 Min. → DB 4/Stück.','Kotelett: VP 15, var.K 9, Grillzeit 8 Min. → DB 6/Stück.','Bei Engpass: DB/Stunde entscheidend. Bratwurst: 48/Std., Kotelett: 45/Std.'],
          reveal: ['Bratwurst: DB = 7 − 3 = 4/Stk, 60/5 = 12 Stk/Std → DB/Std = 48. Kotelett: DB = 15 − 9 = 6/Stk, 60/8 = 7.5 Stk/Std → DB/Std = 45. Kotelett hat höheren DB/Stück, aber Bratwurst den höheren DB/Stunde!','Warum Bratwurst bevorzugen bei Engpass? Trotz tieferem Stück-DB ist der DB/Std höher (48 vs. 45), weil mehr Würste pro Stunde gegrillt werden können. Prüfungstipp: Bei Engpass immer DB/Engpasseinheit vergleichen!'],
          calcs: [
            {label:'DB je Stück Bratwurst',answer:4},
            {label:'DB je Stück Kotelett',answer:6},
            {label:'Kapazität/Stunde Bratwurst',answer:12},
            {label:'Kapazität/Stunde Kotelett',answer:7.5},
            {label:'DB/Stunde Bratwurst',answer:48},
            {label:'DB/Stunde Kotelett',answer:45}
          ]
        },
        {
          id: 128, type: 'calc',
          q: 'Make or buy? (Transportleistungen). Eigener Fahrzeugbetrieb: Fixkosten CHF 36\'000/Jahr, variable Kosten CHF 0.50/km. Externe Logistik: CHF 0.90/km. Transportbedarf ca. 60\'000 km/Jahr.',
          tips: ['Variable Kosten eigen = CHF 0.50/km.','Fixkosten Fahrzeugbetrieb = CHF 36\'000/Jahr.','Vollkosten eigen = (36\'000 + 0.50 × 60\'000) / 60\'000 = CHF 1.10/km.'],
          reveal: ['Eigentransport: var.K = 0.50/km, Vollkosten bei 60\'000 km = (36\'000 + 30\'000) / 60\'000 = 1.10/km. Fremdbezug: 0.90/km. Bei 60\'000 km ist Fremdbezug günstiger (0.90 < 1.10). Warum? Die Fixkosten des eigenen Fuhrparks verteilen sich auf zu wenige Kilometer.','Kritische Menge: 36\'000 / (0.90 − 0.50) = 90\'000 km. Ab 90\'000 km lohnt sich der eigene Fuhrpark. Warum? Bei höherer Kilometerleistung sinken die Fixkosten pro km und die Vollkosten pro km fallen unter den Fremdbezugspreis.','Prüfungstipp: Make-or-Buy-Formel: Kritische Menge = Fixkosten / (Fremdbezugspreis − variable Kosten pro Stück). Unter der kritischen Menge → Buy, darüber → Make.'],
          calcs: [
            {label:'Variable Kosten pro km (eigen)',answer:0.50},
            {label:'Vollkosten pro km bei 60\'000 km (eigen)',answer:1.10},
            {label:'Kosten pro km Fremdbezug',answer:0.90},
            {label:'Kritische Transportleistung (km) bei der Make = Buy',answer:90000}
          ]
        },
        {
          id: 129, type: 'calc',
          q: 'Nutzschwelle eines Handelsbetriebs. Nettoerlös pro Stück CHF 16.−, Einstand pro Stück CHF 6.−, Gemeinkosten (alle fix) CHF 300\'000.−.',
          tips: ['Nettoerlös pro Stück CHF 16, Einstand CHF 6, Gemeinkosten (fix) CHF 300\'000.','DB pro Stück = 16 − 6 = 10.','Mengenmässige NS = FK / DB pro Stück = 300\'000 / 10 = 30\'000 Stück.'],
          reveal: ['DB pro Stück = NE − Einstand = 16 − 6 = 10. Mengenmässige NS = FK / DB pro Stück = 300\'000 / 10 = 30\'000 Stück. Warum? Bei 30\'000 Stück deckt der gesamte DB genau die Fixkosten.','Wertmässige NS = 30\'000 × 16 = 480\'000 CHF. Das ist der Umsatz, ab dem das Unternehmen Gewinn macht. Prüfungstipp: Wertmässige NS = mengenmässige NS × NE pro Stück (NICHT × DB pro Stück!).'],
          calcs: [
            {label:'DB pro Stück (CHF)',answer:10},
            {label:'Mengenmässige Nutzschwelle (Stück)',answer:30000},
            {label:'Wertmässige Nutzschwelle (CHF)',answer:480000}
          ]
        },
        {
          id: 130, type: 'calc',
          q: 'Verschiedene Berechnungen zu einem Ein-Produkt-Betrieb. Nettoumsatz 576\'000, variable Kosten 480\'000, fixe Kosten 87\'000, verkaufte Erzeugnisse 32\'000 Stück.',
          tips: ['Nettoumsatz 576\'000, variable Kosten 480\'000, fixe Kosten 87\'000, 32\'000 Stück.','Variable Kosten je Stück = 480\'000 / 32\'000 = 15.','DB je Stück = 18 − 15 = 3.'],
          reveal: ['NE/Stk = 576\'000/32\'000 = 18. Var.K/Stk = 480\'000/32\'000 = 15. DB/Stk = 18 − 15 = 3. DB total = 3 × 32\'000 = 96\'000. Warum pro Stück rechnen? Um die mengenmässige NS zu berechnen, braucht man den DB pro Stück.','Mengenmässige NS = FK / DB pro Stück = 87\'000 / 3 = 29\'000 Stück. Wertmässige NS = 29\'000 × 18 = 522\'000 CHF. Betriebserfolg = DB total − FK = 96\'000 − 87\'000 = 9\'000 CHF Gewinn.','Prüfungstipp: Betriebserfolg = DB − FK. Ist der DB grösser als die FK, resultiert ein Gewinn. Hier: 96\'000 − 87\'000 = 9\'000. Die 32\'000 verkauften Stück liegen über der NS von 29\'000, daher Gewinn.'],
          calcs: [
            {label:'Variable Kosten je Stück',answer:15},
            {label:'Nettoerlös je Stück',answer:18},
            {label:'Deckungsbeitrag je Stück',answer:3},
            {label:'Deckungsbeitrag total',answer:96000},
            {label:'Mengenmässige Nutzschwelle (Stück)',answer:29000},
            {label:'Wertmässige Nutzschwelle (CHF)',answer:522000},
            {label:'Betriebserfolg (CHF)',answer:9000}
          ]
        },
        {
          id: 131, type: 'sort',
          q: 'Sortieren Sie die Schritte der Nutzschwellenberechnung in die richtige Reihenfolge.',
          items: ['Wertmässige Nutzschwelle berechnen (NS Menge × NE/Stk)','Variable Kosten pro Stück bestimmen','Mengenmässige Nutzschwelle berechnen (FK / DB pro Stk)','Fixkosten ermitteln','Deckungsbeitrag pro Stück berechnen (NE − var.K)','Nettoerlös pro Stück bestimmen'],
          correctOrder: [5,1,4,3,2,0],
          tips: ['Zuerst müssen die Grunddaten bestimmt werden (NE und var.K pro Stück).','Der DB ergibt sich aus NE − variable Kosten.','Die mengenmässige NS wird VOR der wertmässigen NS berechnet.'],
          reveal: ['Korrekte Reihenfolge: 1) NE pro Stück bestimmen → 2) Variable Kosten pro Stück bestimmen → 3) DB pro Stück berechnen (NE − var.K) → 4) Fixkosten ermitteln → 5) Mengenmässige NS (FK / DB pro Stk) → 6) Wertmässige NS (NS Menge × NE/Stk).','Warum diese Reihenfolge? Jeder Schritt baut auf dem vorherigen auf. Ohne DB kann man die NS nicht berechnen, ohne NE und var.K keinen DB. Die wertmässige NS braucht die mengenmässige NS als Ausgangspunkt.','Prüfungstipp: Vergiss nicht, bei der wertmässigen NS mit dem NE/Stück zu multiplizieren (NICHT mit dem DB/Stück!). Häufiger Fehler in Prüfungen!']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Nutzschwelle (Break-even-Point) mengen- und wertmässig berechnen',
            'Entscheidungen auf Teilkostenbasis treffen (Deckungsbeitrag pro Stück und pro Engpasseinheit)',
            'Preisuntergrenzen für reguläre und Zusatzaufträge kennen',
            'Make-or-Buy-Entscheidungen auf Basis des Deckungsbeitrags treffen'
          ]},
          { type: 'concept', title: 'Nutzschwelle (Break-even)', content: 'Die Nutzschwelle bezeichnet jene Mengen- oder Umsatzgrösse, bei der das Unternehmen weder Gewinn noch Verlust erwirtschaftet. An der Nutzschwelle gilt: Deckungsbeitrag total = Fixkosten, bzw. Nettoerlös = Selbstkosten. Mengenmässige NS = Fixkosten / DB pro Stück. Wertmässige NS = mengenmässige NS × Nettoerlös pro Stück.', highlight: 'Nutzschwelle: DB total = Fixkosten. Gewinn = DB − Fixkosten.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Nutzschwelle (Break-even-Point)', def: 'Punkt, an dem weder Gewinn noch Verlust entsteht. DB = Fixkosten.' },
            { term: 'Deckungsbeitrag (DB)', def: 'Nettoerlös − variable Kosten. Beitrag zur Deckung der Fixkosten.' },
            { term: 'Langfristige Preisuntergrenze', def: 'Volle Selbstkosten müssen gedeckt sein.' },
            { term: 'Kurzfristige Preisuntergrenze', def: 'Variable Kosten müssen gedeckt sein (bei Zusatzaufträgen).' },
            { term: 'DB pro Engpasseinheit', def: 'Bei Engpass: DB / Zeiteinheit entscheidend, nicht DB / Stück.' },
            { term: 'Make or Buy', def: 'Eigenfertigung vs. Fremdbezug. Vergleich der Gesamtkosten bei kritischer Menge.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'DB ist NICHT Nettoerlös − Selbstkosten, sondern Nettoerlös − variable Kosten! An der Nutzschwelle gilt NICHT Nettoerlös = DB, sondern Nettoerlös = Selbstkosten bzw. DB = Fixkosten. Bei Engpass ist nicht der DB pro Stück entscheidend, sondern der DB pro Engpasseinheit (z.B. pro Minute, pro Maschinenstunde).' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Fixkosten im Handel = Gemeinkosten (meist fix)',
            'Variable Kosten im Handel = Einstand (Warenaufwand)',
            'Mengenmässige NS = Fixkosten / DB pro Stück',
            'Wertmässige NS = mengenmässige NS × Preis pro Stück',
            'Bei Gewinnziel: (Fixkosten + Gewinnziel) / DB pro Stück'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 14: Finanzielle Kennzahlen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14',
      num: 'Kapitel 14',
      title: 'Finanzielle Kennzahlen',
      exercises: [
        {
          id: 132, type: 'fill',
          q: 'Lückentext: Bilanz- und Erfolgsanalyse',
          template: 'A) Bei der zweckmässigen Gliederung einer Abschlussrechnung spricht man von einer {0} Bereinigung. Dazu gehört auch, dass die {1} von den entsprechenden Anlagekonten bzw. Forderungen aus Lieferungen und Leistungen (Debitoren) subtrahiert werden.\n\nB) Bei der materiellen Bereinigung handelt es sich um Korrekturen der {2}.\n\nC) Die Zahlungsbereitschaft wird mit den sogenannten {3} ermittelt.\n\nD) Beim Eigenfinanzierungsgrad wird das {4} ins Verhältnis zum {5} gesetzt.\n\nE) Die Sicherheit eines Unternehmens ermitteln wir mit der Kennzahl {6} oder {7}.',
          blanks: [['formellen','formelle'],['stillen Reserven','stille Reserven'],['stillen Reserven','stille Reserven'],['Liquiditätsgraden','Liquiditätsgrade','Liquidität'],['Eigenkapital'],['Gesamtkapital','Bilanzsumme'],['Anlagedeckungsgrad'],['Verschuldungsfaktor','Effektivverschuldung']],
          tips: ['Zweckmässige Gliederung = formelle Bereinigung.','Materielle Bereinigung = stille Reserven auflösen.','Eigenfinanzierungsgrad = EK / Gesamtkapital.'],
          reveal: ['Formelle Bereinigung = zweckmässige Gliederung (z.B. WB von Anlagekonten abziehen). Materielle Bereinigung = stille Reserven korrigieren, um die effektiven Werte zu zeigen. Warum? Nur mit bereinigten Werten sind aussagekräftige Kennzahlen möglich.','Liquiditätsgrade messen die Zahlungsbereitschaft. EFG = EK / GK × 100. Anlagedeckungsgrad und Verschuldungsfaktor messen die Sicherheit. Prüfungstipp: EFG + FFG = immer 100%.']
        },
        {
          id: 133, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zu Kennzahlen',
          tips: ['Fremdfinanzierungsgrad kann über 100% sein (wenn neg. EK).','Postüberweisung verbessert nicht den Liquiditätsgrad 2 (Aktivtausch).','Goldene Bilanzregel: Langfristiges Kapital ≥ Anlagevermögen.'],
          reveal: ['FFG über 100% ist möglich bei negativem EK (Überschuldung). Postüberweisung = Aktivtausch (Post↑, Debitoren↓) → KEIN Einfluss auf Liquiditätsgrad 2, da beide Positionen im Zähler sind. Goldene Bilanzregel: Langfristiges Kapital ≥ AV (NICHT: EK = 50% der Passiven!).','Umwandlung kurzfr. → langfr. Darlehen: Kurzfr. FK sinkt → ADG 2 steigt (mehr langfr. Kapital im Zähler). EK-Rendite von 3% ist sehr tief – mind. 8-10% gelten als gut. Buchwert/Aktie = EK / Anzahl Aktien (nicht Selbstfinanzierungsgrad!).','Prüfungstipp: Aktivtausch (z.B. Debitoren → Post) ändert KEINE Kennzahl, die nur Aktiv-Positionen im Zähler hat. Passivtausch (kurzfr. → langfr. FK) ändert Liquiditätsgrade UND Anlagedeckungsgrad 2!'],
          statements: [
            {s:'Ein Fremdfinanzierungsgrad von über 100% ist in der Praxis nicht möglich.', c: false,reason:'Bei negativem Eigenkapital (Überschuldung) ist der Fremdfinanzierungsgrad >100%.'},
            {s:'Eine Postüberweisung von Kunden verbessert den Liquiditätsgrad 2.', c: false,reason:'Aktivtausch (Post↑, Debitoren↓) – kein Einfluss auf Liquiditätsgrad 2.'},
            {s:'Die goldene Bilanzregel besagt, dass das Eigenkapital ca. 50% der Passiven betragen soll.', c: false,reason:'Die goldene Bilanzregel besagt: Langfristiges Kapital ≥ Anlagevermögen.'},
            {s:'Die Umwandlung eines kurzfristigen Darlehens in ein langfristiges erhöht den Anlagedeckungsgrad 2.', c: true},
            {s:'Eine Eigenkapitalrendite von 3% darf grundsätzlich als gut bezeichnet werden.', c: false,reason:'3% ist sehr tief; eine gute EK-Rendite liegt deutlich höher (mind. 8-10%).'},
            {s:'Mit dem Selbstfinanzierungsgrad kann man den Bilanzwert einer Aktie annähernd bestimmen.', c: false,reason:'Der Buchwert pro Aktie ergibt sich aus EK / Anzahl Aktien, nicht aus dem Selbstfinanzierungsgrad.'}
          ]
        },
        {
          id: 134, type: 'match',
          q: 'Zuordnung: Bilanz- und Erfolgsanalyse. Ordnen Sie den Punkten 1 bis 6 die passende Formel aus der Liste A bis L zu.',
          tips: ['Anlagedeckungsgrad 2 = (EK + langfristiges FK) × 100 / AV.','Liquiditätsgrad 2 = (Flüssige Mittel + kurzfristige Forderungen) × 100 / kurzfristiges FK.','Cashflow = Mittelzufluss aus Geschäftstätigkeit.'],
          reveal: ['ADG 2 (K) = (EK + langfr. FK) / AV × 100. Liquiditätsgrad 2 (J) = (FM + kurzfr. Ford.) / kurzfr. FK × 100. Nutzschwelle Menge (H) = FK / DB pro Stück. Warum verschiedene Formeln? Jede Kennzahl beleuchtet einen anderen Aspekt der finanziellen Gesundheit.','Debitorenfrist (A) = 360 / Debitorenumschlag (B). Wirtschaftlichkeit (L) = Ertrag / Aufwand. Prüfungstipp: Debitorenumschlag und Debitorenfrist sind invers zueinander – hoher Umschlag = kurze Frist = gut.'],
          pairs: [
            {l:'1. Anlagedeckungsgrad 2',r:'K – (EK + langfr. FK) × 100 / AV'},
            {l:'2. Nutzschwelle (Menge)',r:'H – Fixkosten / DB pro Stück'},
            {l:'3. Durchschn. Debitorenfrist',r:'A – Forderungen L+L × 360 / Kreditverkauf'},
            {l:'4. Liquiditätsgrad 2',r:'J – (FM + kurzfr. Forderungen) × 100 / kurzfr. FK'},
            {l:'5. Debitorenumschlag',r:'B – Kreditverkauf / Forderungen L+L'},
            {l:'6. Wirtschaftlichkeit',r:'L – Ertrag / Aufwand'}
          ],
          options: ['A – Forderungen L+L × 360 / Kreditverkauf','B – Kreditverkauf / Forderungen L+L','C – EK × 100 / Gesamtkapital','D – Reingewinn × 100 / EK','E – Reingewinn × 100 / Umsatz','F – FK × 100 / Gesamtkapital','G – FM × 100 / kurzfr. FK','H – Fixkosten / DB pro Stück','I – EK × 100 / AV','J – (FM + kurzfr. Forderungen) × 100 / kurzfr. FK','K – (EK + langfr. FK) × 100 / AV','L – Ertrag / Aufwand']
        },
        {
          id: 135, type: 'text',
          q: 'Wie heisst der Fachausdruck? Setzen Sie den Fachausdruck für die folgenden Umschreibungen zur Bilanz- und Erfolgsanalyse.',
          tips: ['Stille Reserven → Aktiven werden unterbewertet.','Abschreibungssatz → Jahresertrag in Prozent einer Anlage.','Bereinigte Bilanz → effektive Werte.'],
          reveal: ['Stille Reserven = unterbewertete Aktiven oder überbewertete Passiven. Warum "still"? Sie erscheinen nicht in der offiziellen Bilanz, sondern werden erst bei materieller Bereinigung sichtbar. Bereinigte Bilanz = Bilanz mit effektiven (korrigierten) Werten.','Cashflow = Gewinn + Abschreibungen (vereinfachte Formel). Warum Abschreibungen addieren? Abschreibungen sind ein Aufwand, der NICHT zu einem Geldabfluss führt – das Geld bleibt im Unternehmen. Der Cashflow zeigt die Innenfinanzierungskraft.'],
          questions: [
            {id:'A',q:'Aktiven wurden unterbewertet.',keywords:['Stille Reserven','stille','Reserven']},
            {id:'B',q:'Jahresertrag in Prozent einer Anlage.',keywords:['Abschreibungssatz','Abschreibung']},
            {id:'C',q:'Bilanz, die die effektiven Werte zeigt.',keywords:['Bereinigte Bilanz','bereinigt']},
            {id:'D',q:'Grösse, die Abschreibungen und Reingewinn darstellt.',keywords:['Cashflow','Cash-flow','Cash Flow']}
          ]
        },
        {
          id: 136, type: 'text',
          q: 'Theoriefragen zu Kennzahlen',
          tips: ['Hoher Fremdfinanzierungsgrad = hohe Zinslast + Abhängigkeit von Gläubigern.','Liquiditätsgrad 2 = (FM + kurzfr. Forderungen) / kurzfr. FK × 100. Sollte mind. 100% betragen.','Dividendenausschüttung reduziert das EK und damit die Liquidität.'],
          reveal: ['Hoher FFG: 1) Hohe Zinslast, 2) Abhängigkeit von Gläubigern/schlechte Bonität. Liquiditätsgrad 2 = (FM + kurzfr. Ford.) / kurzfr. FK × 100 → sollte mind. 100% betragen. Warum 100%? Damit kurzfristige Schulden jederzeit bezahlt werden können.','Tiefen LG 2 verbessern: Forderungen schneller einziehen, kurzfr. FK in langfr. umwandeln, nicht benötigte Aktiven verkaufen. Dividendenausschüttung reduziert FM und verschlechtert die Liquidität. Prüfungstipp: Dividende = Geldabfluss → FM↓ → LG sinkt.'],
          questions: [
            {id:'A',q:'Welche 2 wesentliche Nachteile hat ein zu hoher Fremdfinanzierungsgrad?',keywords:['Zinslast','Abhängigkeit','Gläubiger','Risiko','Verschuldung','Bonität']},
            {id:'B',q:'Was sagt der Liquiditätsgrad 2 aus und wie hoch sollte er sein?',keywords:['Zahlungsbereitschaft','100%','kurzfristig','Forderungen','flüssige Mittel']},
            {id:'C',q:'Wie kann ein tiefer Liquiditätsgrad 2 kurzfristig verbessert werden? Nennen Sie 2 Massnahmen.',keywords:['Forderungen','einziehen','kurzfristig','Darlehen','langfristig','Verkauf','Aktiven']},
            {id:'D',q:'Welchen Einfluss hat eine Dividendenausschüttung auf die Liquidität?',keywords:['sinkt','reduziert','Abfluss','negativ','Mittelabfluss','tiefere']}
          ]
        },
        {
          id: 137, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zur Anlageintensität. Anlageintensität Jahr 1: 40%, Jahr 2: 30%.',
          tips: ['Anlageintensität 40% → 60% UV, 40% AV.','Im Jahr 2 sinkt die Anlageintensität auf 30% → 70% UV.','Gesunkene Anlageintensität: Mögliche Gründe sind Abschreibungen, Desinvestitionen.'],
          reveal: ['Anlageintensität 40% → 60% UV, 40% AV. Im Jahr 2: 30% AV, 70% UV → weniger Mittel im AV gebunden. 60:40 = 3:2 (UV:AV) – die Aussage "3 Fr. UV zu 2 Fr. AV" ist rechnerisch korrekt. Mit 40% AI ist das Unternehmen eher NICHT anlageintensiv (z.B. Elektrizitätswerk hätte >60%).','Investitionen allein bestimmen NICHT die Anlageintensität – auch das UV kann sich verändert haben (z.B. höhere Vorräte). Gesunkene AI kann durch fehlende Neuinvestitionen ODER durch UV-Wachstum erklärt werden. Prüfungstipp: AI = AV/Bilanzsumme – beide Seiten beachten!'],
          statements: [
            {s:'Im Jahr 2 sind weniger Mittel im Anlagevermögen gebunden als im Jahr 1.', c: true},
            {s:'Im Jahr 1 entfallen auf 3 Franken, die im Umlaufvermögen gebunden sind, 2 Franken, die durch Investitionen gebunden sind.', c: true},
            {s:'Wahrscheinlich handelt es sich um ein anlageintensives Unternehmen wie z.B. ein Elektrizitätswerk.', c: false,reason:'Mit nur 40% Anlageintensität ist es eher nicht anlageintensiv.'},
            {s:'Es sind sicher keine neuen Investitionen vorgenommen worden, sonst wäre ja die Anlageintensität gestiegen.', c: false,reason:'Investitionen allein bestimmen nicht die Anlageintensität – auch das UV kann sich verändert haben.'},
            {s:'Die gesunkene Anlageintensität könnte darauf zurückzuführen sein, dass keine neuen Investitionen mehr vorgenommen worden sind.', c: true}
          ]
        },
        {
          id: 138, type: 'calc',
          q: 'Bilanz- und Erfolgsanalyse der RedTrade AG. UV (FM 260, Ford. L+L 3100, Vorräte 3700), AV (Einrichtungen 2000, Fahrzeuge 600, Immobilien 5700). Passiven: Kurzfr. FK (Verb. L+L 2900, Dividenden 600), Langfr. FK (Hypotheken 3900, Darlehen 900, Rückstell. 460), EK (Aktienkapital 5000, Res./Gew.vortrag 1600).',
          tips: ['Anlageintensität = AV / Bilanzsumme × 100.','Eigenfinanzierungsgrad = EK / Gesamtkapital × 100.','Liquiditätsgrad 2 = (FM + Ford. L+L) / kurzfr. FK × 100.'],
          reveal: ['Bilanzsumme = UV (260+3100+3700=7060) + AV (2000+600+5700=8300) = 15\'360. Anlageintensität = AV/BS × 100 = 8300/15360 = 54.04%. Warum? Die AI zeigt, wie stark das Vermögen langfristig gebunden ist. Über 50% = anlageintensiv.','FK = kurzfr. (2900+600=3500) + langfr. (3900+900+460=5260) = 8760. EK = 5000+1600 = 6600. Verschuldungsgrad = FK/GK × 100 = 8760/15360 = 57.03%. Eigenfinanzierungsgrad = EK/GK × 100 = 6600/15360 = 42.97%. Prüfungstipp: EFG + FFG = 100% (42.97% + 57.03% = 100%).','LG 2 = (FM+Ford.)/(kurzfr. FK) × 100 = (260+3100)/3500 = 3360/3500 = 96.00%. LG 3 = UV/kurzfr. FK × 100 = 7060/3500 = 201.71%. NWC = UV − kurzfr. FK = 7060 − 3500 = 3560. Prüfungstipp: LG 2 unter 100% = kritisch! Die kurzfristigen Schulden können nicht vollständig mit FM + Forderungen gedeckt werden.'],
          calcs: [
            {label:'Anlageintensität 20_2 (%)',answer:54.04},
            {label:'Verschuldungsgrad 20_2 (%)',answer:57.03},
            {label:'Eigenfinanzierungsgrad 20_2 (%)',answer:42.97},
            {label:'Liquiditätsgrad 2 (%)',answer:96.00},
            {label:'Liquiditätsgrad 3 (%)',answer:201.71},
            {label:'Net Working Capital (NUV)',answer:3560}
          ]
        },
        {
          id: 139, type: 'calc',
          q: 'Ermittlung der Eigenkapitalrentabilität. AV 1\'650\'000, EFG 60%, FKZ 9%, Intensität UV 45%, GK-Rentabilität 12%.',
          tips: ['EK-Rentabilität = Gewinn / EK × 100.','AV 1\'650\'000, EFG 60%, FKZ 9%, Intensität UV 45%.','Gesamtkapital = AV + UV. UV = AV × (Intensität UV / Intensität AV).'],
          reveal: ['AV 1\'650\'000, UV-Intensität 45% → AV-Intensität 55%. GK = 1\'650\'000/0.55 = 3\'000\'000. UV = 1\'350\'000. EK = 60% × 3\'000\'000 = 1\'800\'000. FK = 1\'200\'000. FK-Zins = 9% × 1\'200\'000 = 108\'000.','GK-Rentabilität 12% → Gesamtertrag = 12% × 3\'000\'000 = 360\'000. Gewinn = 360\'000 − 108\'000 = 252\'000. EK-Rendite = 252\'000/1\'800\'000 = 14%. Warum ist die EK-Rendite höher als die GK-Rendite? Wegen des Leverage-Effekts: Wenn die GK-Rendite höher ist als der FK-Zinssatz, profitiert das EK überproportional.'],
          calcs: [
            {label:'Umlaufvermögen',answer:1350000},
            {label:'Gesamtkapital (Bilanzsumme)',answer:3000000},
            {label:'Eigenkapital (60%)',answer:1800000},
            {label:'Fremdkapital (40%)',answer:1200000},
            {label:'FK-Zinsaufwand (9%)',answer:108000},
            {label:'Rentabilität des GK (%)',answer:12},
            {label:'Gewinn (GK-Rent. × GK − FK-Zins)',answer:252000},
            {label:'Eigenkapitalrentabilität (%)',answer:14}
          ]
        },
        {
          id: 140, type: 'calc',
          q: 'Rechnerische Zusammenhänge im DuPont-Schema. X: Umsatz 5\'000\'000, Gewinn 500\'000, Kapital 5\'000\'000. Y: Umsatz 10\'000\'000, Gewinn 500\'000. Z: Umsatz 10\'000\'000, Kapital 1\'000\'000, KapRent 10%.',
          tips: ['DuPont: Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag.','Umsatzrentabilität = Gewinn / Umsatz × 100.','Kapitalumschlag = Umsatz / Kapitaleinsatz.'],
          reveal: ['DuPont-Formel: Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag. X: UR = 500\'000/5\'000\'000 = 10%, KU = 5\'000\'000/5\'000\'000 = 1, KR = 10%. Y: UR = 5%, KU = 2, KR = 10%. Z: UR = 1%, KU = 10, KR = 10%.','Alle drei haben 10% Kapitalrentabilität, aber auf unterschiedlichem Weg! X: hohe Marge, tiefer Umschlag. Y: tiefe Marge, hoher Umschlag. Z: tiefe Marge, sehr hoher Umschlag. Warum wichtig? Je nach Branche (Luxus vs. Discounter) sind verschiedene Strategien optimal.','Prüfungstipp: Kapitalrentabilität kann durch höhere Marge ODER höheren Umschlag gesteigert werden. Ein Discounter hat typisch tiefe Marge, hohen Umschlag. Ein Luxusgeschäft: hohe Marge, tiefer Umschlag.'],
          calcs: [
            {label:'X: Umsatzrentabilität (%)',answer:10},
            {label:'X: Kapitalumschlag',answer:1},
            {label:'X: Kapitalrentabilität (%)',answer:10},
            {label:'Y: Umsatzrentabilität (%)',answer:5},
            {label:'Y: Kapitalumschlag',answer:2},
            {label:'Y: Kapitalrentabilität (%)',answer:10},
            {label:'Z: Umsatzrentabilität (%)',answer:1},
            {label:'Z: Kapitalumschlag',answer:10},
            {label:'Z: Kapitalrentabilität (%)',answer:10}
          ]
        },
        {
          id: 141, type: 'sort',
          q: 'Sortieren Sie diese Kennzahlen nach Kategorie: zuerst Liquidität, dann Finanzierung, dann Rentabilität.',
          items: ['Eigenkapitalrentabilität','Liquiditätsgrad 2 (Quick Ratio)','Eigenfinanzierungsgrad','Liquiditätsgrad 3 (Current Ratio)','Anlagedeckungsgrad 2','Umsatzrentabilität','Fremdfinanzierungsgrad','Gesamtkapitalrentabilität','Liquiditätsgrad 1 (Cash Ratio)'],
          correctOrder: [8,1,3,2,6,4,0,5,7],
          tips: ['Liquiditätskennzahlen messen die Zahlungsbereitschaft (LG 1, 2, 3).','Finanzierungskennzahlen zeigen die Kapitalstruktur (EFG, FFG, ADG).','Rentabilitätskennzahlen messen die Ertragskraft (EK-Rent., GK-Rent., Umsatzrent.).'],
          reveal: ['Liquidität (Zahlungsbereitschaft): LG 1 (Cash Ratio), LG 2 (Quick Ratio), LG 3 (Current Ratio). Warum diese Reihenfolge? LG 1 = nur FM, LG 2 = FM + Ford., LG 3 = FM + Ford. + Vorräte. Je höher die Stufe, desto mehr Aktiven werden einbezogen.','Finanzierung (Kapitalstruktur): EFG, FFG, ADG 2. EFG + FFG = 100%. ADG 2 misst die goldene Bilanzregel. Rentabilität (Ertragskraft): EK-Rent., Umsatzrent., GK-Rent. Alle messen den Gewinn im Verhältnis zu einer Bezugsgrösse.','Prüfungstipp: Die drei Gruppen nicht verwechseln! Liquidität = KANN das Unternehmen zahlen? Finanzierung = WIE ist das Unternehmen finanziert? Rentabilität = WIE VIEL verdient das Unternehmen?']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die wichtigsten Kennzahlen der Bilanz- und Erfolgsanalyse berechnen',
            'Liquiditätsgrade, Eigenfinanzierungsgrad und Anlagedeckungsgrad interpretieren',
            'Das DuPont-Schema verstehen (Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag)',
            'Formelle und materielle Bereinigung der Bilanz durchführen'
          ]},
          { type: 'concept', title: 'Kennzahlengruppen', content: 'Finanzielle Kennzahlen lassen sich in vier Gruppen einteilen: Liquiditätskennzahlen (Zahlungsbereitschaft), Finanzierungskennzahlen (Kapitalstruktur), Rentabilitätskennzahlen (Ertragskraft) und Aktivitätskennzahlen (Umschlag). Die Kennzahlen werden aus der bereinigten Bilanz und ER berechnet.', highlight: 'Vier Gruppen: Liquidität, Finanzierung, Rentabilität, Aktivität.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Liquiditätsgrad 2 (Quick Ratio)', def: '(Flüssige Mittel + kurzfr. Forderungen) / kurzfr. FK × 100. Sollte mindestens 100% betragen.' },
            { term: 'Eigenfinanzierungsgrad', def: 'Eigenkapital / Gesamtkapital × 100.' },
            { term: 'Fremdfinanzierungsgrad', def: '100% − Eigenfinanzierungsgrad. Kann bei Überschuldung über 100% liegen.' },
            { term: 'Anlagedeckungsgrad 2', def: '(EK + langfr. FK) / AV × 100. Goldene Bilanzregel: ≥ 100%.' },
            { term: 'Eigenkapitalrentabilität', def: 'Gewinn / EK × 100.' },
            { term: 'DuPont-Schema', def: 'Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag.' },
            { term: 'Cashflow', def: 'Praxis: Gewinn + Abschreibungen. Zeigt die Innenfinanzierungskraft.' },
            { term: 'Verschuldungsfaktor', def: 'Effektivverschuldung / Cashflow. Zeigt, wie viele Jahre nötig, um Schulden zu tilgen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die goldene Bilanzregel besagt NICHT, dass das EK ca. 50% der Passiven betragen soll, sondern dass langfristiges Kapital (EK + langfr. FK) mindestens so hoch sein muss wie das Anlagevermögen. Eine Postüberweisung von Kunden (Post↑, Debitoren↓) ist ein Aktivtausch und hat KEINEN Einfluss auf den Liquiditätsgrad 2.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Liquidität: LG 1 (Cash Ratio), LG 2 (Quick Ratio ≥ 100%), LG 3 (Current Ratio)',
            'Finanzierung: EFG + FFG = 100%, Anlagedeckungsgrad 2 ≥ 100% (goldene Bilanzregel)',
            'Rentabilität: EK-Rentabilität, GK-Rentabilität, Umsatzrentabilität',
            'DuPont-Schema: Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 15: Investitionen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch15',
      num: 'Kapitel 15',
      title: 'Investitionen: Entscheidungen über Mittelbindungen',
      exercises: [
        {
          id: 142, type: 'calc',
          q: 'Beurteilung von 3 Anlagen bei 2 Beschäftigungsstufen. Bau-AG: 3 Anlagen zur Auswahl (AK: 360\'000/300\'000/250\'000, Nutzungsdauer 8 J., Restwerte 20\'000/15\'000/10\'000, Kapazität 15\'000 Einheiten). Weitere Kostendaten: Anlage 1: Gehälter CHF 100\'000, übrige Fixkosten CHF 30\'000, variable Kosten CHF 13/Einheit. Anlage 2: Gehälter CHF 95\'000, übrige Fixkosten CHF 25\'000, variable Kosten CHF 13/Einheit. Anlage 3: Gehälter CHF 90\'000, übrige Fixkosten CHF 15\'000, variable Kosten CHF 14/Einheit.',
          tips: ['Kalkulatorische Abschreibung = (Anschaffung − Restwert) / Nutzungsdauer.','Fixkosten = Abschreibung + Gehälter + Nebenkosten.','Gesamtkosten = Fixkosten + variable Kosten × Menge.'],
          reveal: ['Kalk. Abschreibung = (Anschaffung − Restwert) / Nutzungsdauer. Anlage 1: (360\'000−20\'000)/8 = 42\'500. Anlage 2: (300\'000−15\'000)/8 = 35\'625. Anlage 3: (250\'000−10\'000)/8 = 30\'000. Warum Restwert abziehen? Der Restwert wird am Ende der ND erlöst und muss nicht abgeschrieben werden.','Gesamtkosten = Fixkosten + var.K × Menge. Bei 15\'000 Einheiten: Anlage 3 hat die tiefsten Gesamtkosten (345\'000). Aber Vorsicht: Bei höherer Auslastung kann eine teurere Anlage günstiger werden (tiefere var.K pro Stück). Prüfungstipp: Immer BEIDE Beschäftigungsstufen vergleichen!'],
          calcs: [
            {label:'Kalk. Abschreibung Anlage 1',answer:42500},
            {label:'Kalk. Abschreibung Anlage 2',answer:35625},
            {label:'Kalk. Abschreibung Anlage 3',answer:30000},
            {label:'Gesamtkosten Anlage 1 bei 15\'000 Einheiten',answer:367500},
            {label:'Gesamtkosten Anlage 2 bei 15\'000 Einheiten',answer:350625},
            {label:'Gesamtkosten Anlage 3 bei 15\'000 Einheiten',answer:345000}
          ]
        },
        {
          id: 143, type: 'calc',
          q: 'Beurteilung von 2 Investitionsalternativen. IndigoTrade AG: A: Auszahlung 80\'000, Einzahlungen J1-5: 26/24/22/18/15. B: Auszahlung 75\'000, Einzahlungen J1-3: 25/30/35. Kalk.Zinssatz 8%.',
          tips: ['Kapitalwert = Summe der abgezinsten Einzahlungen − Auszahlung.','Kalkulationszinssatz 8%.','Alternative A: 80\'000 Auszahlung, Einzahlungen 26+24+22+18+15.'],
          reveal: ['Kapitalwert = Summe der abgezinsten Einzahlungen − Auszahlung. Alt. A: Einzahlungen über 5 Jahre abzinsen mit 8% → KW = ca. 5554. Alt. B: Einzahlungen über 3 Jahre → KW = ca. 1652. Alternative A ist vorzuziehen (höherer KW).','Warum abzinsen? Geld heute ist mehr wert als Geld morgen (Zeitwert des Geldes). Abzinsungsfaktor Jahr n = 1/(1+i)^n. Prüfungstipp: Kapitalwert > 0 → Investition lohnt sich. Bei mehreren Alternativen: höchster KW = beste Wahl.'],
          calcs: [
            {label:'Kapitalwert Alternative A (CHF)',answer:5554},
            {label:'Kapitalwert Alternative B (CHF)',answer:1652}
          ]
        },
        {
          id: 144, type: 'calc',
          q: 'Nutzschwellenberechnung: Beispiel Produktionsbetrieb. Fixkosten Produktionsanlage CHF 57\'000, EL CHF 1.25/Stk., EM CHF 0.85/Stk., Fertigungszeit 2 Min./Stk., übrige Fixkosten V.u.V. CHF 129\'000, Verkaufspreis CHF 5.75/Stk.',
          tips: ['Fixkosten = CHF 57\'000 (Produktionsanlage) + CHF 129\'000 (übrige FK V.u.V.) = CHF 186\'000.','Einzelkosten pro Stück = CHF 1.25 (EL) + CHF 0.85 (EM) = CHF 2.10.','Fertigungszeit 2 Min. = 30 Stück/Stunde, 2000 Std. = 60\'000 Stück.'],
          reveal: ['FK = 57\'000 + 129\'000 = 186\'000. Var.K/Stk = EL 1.25 + EM 0.85 = 2.10. Bei 2\'000 Std. und 2 Min/Stk = 60\'000 Stk. HK/Stk = (57\'000 + 2.10×60\'000)/60\'000 = 5.20. SK total = HK total + VVGK = 186\'000 + 126\'000 = 312\'000.','NS = FK / (VP − var.K) = 186\'000 / (5.75 − 2.10) = 186\'000 / 3.65 = 50\'959 Stk. Warum VP 5.75? Der Verkaufspreis muss gegeben sein, um die NS zu berechnen. Prüfungstipp: Bei der NS-Berechnung nur variable Kosten pro Stück verwenden, NICHT die Herstellkosten!'],
          calcs: [
            {label:'Selbstkosten je Stück (bei 2\'000 Std.)',answer:5.20},
            {label:'Selbstkosten insgesamt (bei 2\'000 Std.)',answer:312000},
            {label:'Nutzschwelle in Stück (VP CHF 5.75)',answer:50959}
          ]
        },
        {
          id: 145, type: 'tf',
          q: 'Richtig oder falsch? Investitionsrechnungsverfahren',
          statements: [
            {s:'Die Kostenvergleichsrechnung ist ein dynamisches Verfahren.', c: false, reason:'Die Kostenvergleichsrechnung ist ein statisches Verfahren (kein Zeitfaktor).'},
            {s:'Bei der Kapitalwertmethode werden zukünftige Zahlungen auf den heutigen Wert abgezinst.', c: true},
            {s:'Sunk Costs (bereits getätigte Ausgaben) sollten bei der Investitionsentscheidung berücksichtigt werden.', c: false, reason:'Sunk Costs sind irreversibel und dürfen den Investitionsentscheid NICHT beeinflussen.'},
            {s:'Ein positiver Kapitalwert bedeutet, dass sich die Investition lohnt.', c: true},
            {s:'Die Pay-back-Methode berücksichtigt den Zeitwert des Geldes.', c: false, reason:'Die einfache Pay-back-Methode ist ein statisches Verfahren ohne Zeitwertberücksichtigung.'},
            {s:'Der Nutzen einer Investition kann auch in Kosteneinsparungen bestehen.', c: true}
          ],
          tips: ['Statische Verfahren berücksichtigen den Zeitfaktor NICHT.','Sunk Costs = versunkene Kosten, die nicht rückgängig gemacht werden können.','Kapitalwert > 0 = Investition lohnt sich.'],
          reveal: ['Statische Verfahren: Kostenvergleich, Gewinnvergleich, einfache Pay-back-Methode. Sie berücksichtigen den Zeitwert des Geldes NICHT. Dynamische Verfahren: Kapitalwertmethode, interne Zinsfussmethode. Warum dynamisch besser? CHF 1\'000 heute ist mehr wert als CHF 1\'000 in 5 Jahren.','Sunk Costs dürfen Entscheide NICHT beeinflussen. Warum? Sie sind bereits ausgegeben und können nicht mehr zurückgeholt werden – egal ob man investiert oder nicht. Nur zukünftige Kosten und Erträge sind entscheidungsrelevant.','Nutzen einer Investition: nicht nur Einnahmen, auch Kosteneinsparungen! Beispiel: Eine neue Maschine spart pro Jahr CHF 50\'000 Personalkosten – das ist genauso wertvoll wie CHF 50\'000 Mehreinnahmen. Prüfungstipp: Immer auch an Einsparungen denken!']
        },
        {
          id: 146, type: 'match',
          q: 'Zuordnung: Investitionsrechnungsverfahren. Ordnen Sie die Verfahren der richtigen Kategorie zu.',
          pairs: [
            {l:'Kostenvergleichsrechnung', r:'Statisch'},
            {l:'Gewinnvergleichsrechnung', r:'Statisch'},
            {l:'Kapitalwertmethode', r:'Dynamisch'},
            {l:'Einfache Pay-back-Methode', r:'Statisch'},
            {l:'Interne Zinsfussmethode', r:'Dynamisch'},
            {l:'Rentabilitätsvergleichsrechnung', r:'Statisch'}
          ],
          options: ['Statisch','Dynamisch'],
          tips: ['Statisch = ohne Zeitfaktor, dynamisch = mit Zeitwert des Geldes.','Die Kapitalwertmethode zinst zukünftige Zahlungen ab.','Die einfache Pay-back-Methode ist statisch (kein Abzinsen).'],
          reveal: ['Statische Verfahren (kein Zeitfaktor): Kostenvergleich, Gewinnvergleich, Rentabilitätsvergleich, einfache Pay-back-Methode. Diese rechnen mit Durchschnittswerten pro Jahr, ohne den Zeitwert des Geldes zu berücksichtigen.','Dynamische Verfahren (mit Zeitwert): Kapitalwertmethode und interne Zinsfussmethode. Warum "dynamisch"? Sie berücksichtigen, WANN die Zahlungen anfallen. CHF 1\'000 im Jahr 1 ist mehr wert als CHF 1\'000 im Jahr 5.','Prüfungstipp: Die dynamische Pay-back-Methode (mit Abzinsung) existiert auch – ist aber in der Basisversion nicht prüfungsrelevant. Die EINFACHE Pay-back-Methode ist statisch!']
        },
        {
          id: 147, type: 'calc',
          q: 'Amortisationsdauer (Pay-back). Investition: Anschaffungskosten CHF 120\'000, jährlicher Nettozufluss (Gewinn + Abschreibung) CHF 30\'000.',
          calcs: [
            {label:'Amortisationsdauer (Jahre)',answer:4},
            {label:'Kumulierter Rückfluss nach 3 Jahren (CHF)',answer:90000},
            {label:'Noch offener Betrag nach 3 Jahren (CHF)',answer:30000}
          ],
          tips: ['Amortisationsdauer = Anschaffungskosten / jährlicher Nettozufluss.','Nettozufluss = Gewinn + Abschreibung (da Abschreibung kein Geldabfluss ist).','Nach 3 Jahren: 3 × 30\'000 = 90\'000 → fehlen noch 30\'000.'],
          reveal: ['Pay-back = 120\'000 / 30\'000 = 4 Jahre. Warum Gewinn + Abschreibung als Rückfluss? Die Abschreibung ist zwar ein Aufwand in der ER, aber es fliesst kein Geld ab – das Geld bleibt im Unternehmen.','Nach 3 Jahren: 3 × 30\'000 = 90\'000 zurückgeflossen, 30\'000 fehlen noch. Je kürzer die Amortisationsdauer, desto geringer das Risiko. Prüfungstipp: Bei ungleichmässigen Rückflüssen kumuliert aufaddieren bis AK erreicht.']
        },
        {
          id: 148, type: 'fill',
          q: 'Lückentext: Investitionsarten und -verfahren',
          template: 'A) Bei der Investitionsrechnung unterscheidet man {0} und {1} Verfahren.\n\nB) Statische Verfahren berücksichtigen den {2} des Geldes nicht. Dynamische Verfahren hingegen {3} zukünftige Zahlungen auf den heutigen Wert.\n\nC) Bei der Kapitalwertmethode gilt: Kapitalwert {4} 0 bedeutet, die Investition lohnt sich.\n\nD) Bereits getätigte, nicht rückgängig zu machende Ausgaben heissen {5}. Sie dürfen den Investitionsentscheid {6} beeinflussen.\n\nE) Die {7} berechnet, wie lange es dauert, bis die Investition sich amortisiert hat.',
          blanks: [['statische'],['dynamische'],['Zeitwert','Zeitwerts'],['zinsen ab','diskontieren'],['grösser als','>','positiv'],['Sunk Costs','sunk costs','versunkene Kosten'],['nicht','NICHT'],['Pay-back-Methode','Amortisationsrechnung','Amortisationsdauer']],
          tips: ['Statisch = kein Zeitfaktor, dynamisch = mit Abzinsung.','Kapitalwert > 0 = Investition lohnt sich.','Sunk Costs = versunkene Kosten, irrelevant für neue Entscheide.'],
          reveal: ['Statische Verfahren (Kostenvergleich, Gewinnvergleich, Pay-back) ignorieren den Zeitwert des Geldes. Dynamische Verfahren (Kapitalwertmethode) zinsen zukünftige Zahlungen ab, weil CHF 1\'000 heute mehr wert ist als CHF 1\'000 in der Zukunft.','Sunk Costs sind bereits getätigte Ausgaben, die NICHT rückgängig gemacht werden können. Sie dürfen den Investitionsentscheid NICHT beeinflussen. Warum? Egal ob man weiterinvestiert oder nicht – das Geld ist ausgegeben. Nur ZUKÜNFTIGE Kosten und Erträge zählen.','Pay-back-Methode: Anschaffungskosten / jährlicher Rückfluss = Amortisationsdauer. Prüfungstipp: Je kürzer die Amortisationsdauer, desto geringer das Investitionsrisiko.']
        },
        {
          id: 149, type: 'sort',
          q: 'Sortieren Sie die Investitionsrechnungsverfahren: zuerst statische, dann dynamische Verfahren.',
          items: ['Kapitalwertmethode','Kostenvergleichsrechnung','Interne Zinsfussmethode','Gewinnvergleichsrechnung','Einfache Pay-back-Methode','Rentabilitätsvergleichsrechnung'],
          correctOrder: [1,3,5,4,0,2],
          tips: ['Statische Verfahren berücksichtigen KEINEN Zeitfaktor.','Die Kapitalwertmethode ist dynamisch (Abzinsung).','Die einfache Pay-back-Methode ist statisch.'],
          reveal: ['Statisch: Kostenvergleich, Gewinnvergleich, Rentabilitätsvergleich, einfache Pay-back. Diese rechnen mit Jahresdurchschnittswerten ohne den Zeitwert zu berücksichtigen. Dynamisch: Kapitalwertmethode, interne Zinsfussmethode.','Warum diese Einteilung? Statische Verfahren sind einfacher zu berechnen, aber weniger genau. Dynamische Verfahren berücksichtigen den Zeitwert und sind daher theoretisch besser, aber aufwändiger. In der Praxis werden oft beide verwendet.','Prüfungstipp: Merkhilfe – "Dynamisch = Diskontieren = Abzinsen". Wer abzinst, arbeitet dynamisch. Die Pay-back-Methode gibt es in einer einfachen (statischen) und einer dynamischen Version.']
        },
        {
          id: 150, type: 'tf',
          q: 'Richtig oder falsch? Investitionsentscheidungen',
          statements: [
            {s:'Bei der Kostenvergleichsrechnung wird die Alternative mit den tiefsten Gesamtkosten bevorzugt.', c: true},
            {s:'Ein Restwert am Ende der Nutzungsdauer erhöht die jährlichen Abschreibungskosten.', c: false, reason:'Ein Restwert SENKT die Abschreibung: (AK − Restwert) / ND.'},
            {s:'Bei der Kapitalwertmethode werden alle zukünftigen Zahlungen mit dem Kalkulationszinssatz abgezinst.', c: true},
            {s:'Die kalkulatorische Abschreibung berechnet sich als Anschaffungskosten geteilt durch die Nutzungsdauer.', c: false, reason:'Korrekt: (Anschaffungskosten − Restwert) / Nutzungsdauer.'},
            {s:'Ein negativer Kapitalwert bedeutet, dass die Investition sich nicht lohnt.', c: true},
            {s:'Kalkulatorische Zinsen werden auf dem durchschnittlich gebundenen Kapital berechnet.', c: true}
          ],
          tips: ['Restwert senkt die Abschreibung, nicht erhöht!','Kalk. Abschreibung = (AK − Restwert) / ND.','Durchschnittlich gebundenes Kapital = (AK + Restwert) / 2.'],
          reveal: ['Kostenvergleich: tiefste Gesamtkosten = beste Alternative. Restwert SENKT die Abschreibung. Formel: (AK − RW) / ND. Häufiger Fehler: Restwert vergessen! Beispiel: AK 100\'000, RW 10\'000, ND 10 J. → Abschreibung = 9\'000/Jahr (nicht 10\'000).','Kapitalwert < 0 → Investition lohnt sich NICHT, da die abgezinsten Rückflüsse die Anfangsinvestition nicht decken. Kalk. Zinsen auf durchschnittlich gebundenem Kapital = (AK + RW) / 2 × Zinssatz.','Prüfungstipp: Bei der Kostenvergleichsrechnung nicht nur variable Kosten vergleichen, sondern GESAMTKOSTEN (fix + variabel). Die kalkulatorischen Zinsen gehören zu den Fixkosten!']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Statische und dynamische Investitionsrechnungsverfahren unterscheiden',
            'Die Kapitalwertmethode anwenden (Barwert der Einzahlungen − Auszahlung)',
            'Kostenvergleichsrechnung und Gewinnvergleichsrechnung durchführen',
            'Die Amortisationsdauer (Pay-back) berechnen'
          ]},
          { type: 'concept', title: 'Investitionsrechnungsverfahren', content: 'Investitionsrechnungsverfahren werden grob gegliedert in statische Methoden (ohne Berücksichtigung des Zeitfaktors) und dynamische Methoden (mit Berücksichtigung des Zeitwerts des Geldes). Bei den Daten unterscheidet man zwischen vergangenheitsorientierten, zukunftsorientierten und irreversiblen Daten (sunk costs).', highlight: 'Statisch: kein Zeitfaktor. Dynamisch: Zeitwert des Geldes berücksichtigt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kostenvergleichsrechnung', def: 'Statisches Verfahren. Vergleicht die Gesamtkosten verschiedener Alternativen.' },
            { term: 'Gewinnvergleichsrechnung', def: 'Statisches Verfahren. Vergleicht den Gewinn verschiedener Alternativen.' },
            { term: 'Kapitalwertmethode', def: 'Dynamisches Verfahren. Kapitalwert = Summe der abgezinsten Einzahlungen − Auszahlung.' },
            { term: 'Pay-back-Methode (Amortisationsrechnung)', def: 'Berechnet die Dauer, bis die Investition sich amortisiert hat.' },
            { term: 'Barwert', def: 'Heutiger Wert einer zukünftigen Zahlung (abgezinst).' },
            { term: 'Kalkulationszinssatz', def: 'Zinssatz für die Abzinsung zukünftiger Zahlungen.' },
            { term: 'Sunk Costs', def: 'Bereits getätigte, irreversible Ausgaben. Dürfen Investitionsentscheid nicht beeinflussen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Nutzen einer Investition sind nicht nur zusätzliche Einnahmen, sondern auch Kosteneinsparungen. Ein Restwert am Ende der Nutzungsdauer senkt die jährlichen Abschreibungskosten. Bei der Kapitalwertmethode gilt: Kapitalwert > 0 → Investition lohnt sich.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Statische Verfahren (ohne Zeitfaktor): Kostenvergleich, Gewinnvergleich, Pay-back',
            'Dynamische Verfahren (mit Zeitwert): Kapitalwertmethode (Kapitalwert > 0 = lohnend)',
            'Kalk. Abschreibung = (Anschaffungskosten − Restwert) / Nutzungsdauer',
            'Sunk Costs (bereits getätigt) dürfen den Investitionsentscheid nicht beeinflussen'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 16: Planung, Budgetierung, Controlling, Finanzen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch16',
      num: 'Kapitel 16',
      title: 'Planung, Budgetierung, Controlling, Finanzen',
      exercises: [
        {
          id: 151, type: 'fill',
          q: 'Lückentext: Planung und Budgetkreislauf',
          template: 'A) Planen, Entscheiden, Anordnen, Kontrollieren sind Phasen des {0}. Über den Zielsetzungsprozess sind die {1} und die {2} Planung miteinander verbunden.\n\nB) Es gibt verschiedene Kategorien von Unternehmenszielen. Produktziele und Marktziele zählen zu den {3}. Liquiditätsziele, {4} und Sicherheitsziele sind {5}.\n\nC) Das geeignete Instrument für die strategische {6} sind Businesspläne.\n\nD) Die {7} legen offen, ob die {8} erreichbar sind. Wenn nein, kommt es zur {9} der Einzelpläne, bis die definierten Zielwerte erreicht sind. Wenn ja, kommt es zur {10}.',
          blanks: [['Managementkreislaufs','Managementkreislauf','Führungskreislauf'],['strategische','strategischen'],['operative','operativen'],['Leistungszielen','Leistungsziele'],['Rentabilitätsziele','Rentabilitätszielen'],['Finanzzielen','Finanzziele'],['Planung'],['Budgets','Budget'],['Zielwerte'],['Überarbeitung','Anpassung','Revision'],['Verabschiedung','Genehmigung']],
          tips: ['Planen, Entscheiden, Anordnen, Kontrollieren = Managementkreislauf.','Strategische Planung → Businesspläne.','Budgets legen offen, ob Zielwerte erreichbar sind.'],
          reveal: ['Der Managementkreislauf: Planen → Entscheiden → Anordnen → Kontrollieren. Strategische (langfristig) und operative (kurzfristig) Planung sind über den Zielsetzungsprozess verbunden. Leistungsziele = Produkt-/Marktziele. Finanzziele = Liquidität, Rentabilität, Sicherheit.','Businesspläne = Instrument für strategische Planung. Budgets legen offen, ob Zielwerte erreichbar sind. Wenn nicht: Überarbeitung der Einzelpläne. Wenn ja: Verabschiedung (Genehmigung). Prüfungstipp: Budget = operativ (1 Jahr), Businessplan = strategisch (mehrere Jahre).']
        },
        {
          id: 152, type: 'text',
          q: 'Theoriefragen zum Thema Planung und Budgetierung',
          tips: ['Businesspläne = strategisches Instrument.','Budgetierung: Bottom-up, Top-down oder Gegenstromverfahren.','Budgetsystem: Zeithorizont, Detaillierungsgrad, Erstellungsverfahren.'],
          reveal: ['Strategische Entwicklung → Businesspläne. Strategische Analyse → SWOT-Analyse, Mehrjahres-Finanzplan. Warum zwei Aspekte? Die Entwicklung zeigt, WOHIN das Unternehmen will. Die Analyse zeigt, WO es steht (Stärken, Schwächen, Umfeld).','Budgetsystem-Aspekte: 1) Zeithorizont (jährlich, rollierend), 2) Detaillierungsgrad (Grob-/Feinbudget), 3) Erstellungsverfahren (Top-down = GL gibt Ziele vor, Bottom-up = Abteilungen planen, Gegenstrom = Kombination). Prüfungstipp: Gegenstromverfahren gilt als beste Praxis, da es Vorgaben und Erfahrung verbindet.'],
          questions: [
            {id:'A',q:'Welches Instrument wird bevorzugtermassen für die strategische Entwicklung eingesetzt?',keywords:['Businessplan','Businesspläne','strategisch','Mehrjahresplan']},
            {id:'B',q:'Welches ist in der strategischen Planung der andere Aspekt neben der strategischen Entwicklung? Welche Instrumente werden dabei eingesetzt?',keywords:['Analyse','Mehrjahresplan','Budget','Kontrolle','Planung','Finanzplan']},
            {id:'C',q:'Welche Gestaltungsaspekte gibt es bei einem Budgetsystem? Nennen Sie mind. 1 Aspekt mit einer stichwortartigen Erläuterung.',keywords:['Zeithorizont','Detaillierungsgrad','Top-down','Bottom-up','Gegenstrom','rollierend','Erstellungsverfahren']}
          ]
        },
        {
          id: 153, type: 'calc',
          q: 'Kostenträgerabrechnung (Produktlinie OP, September). Prod. O: Ist-Menge 1\'500, Plan-Menge 1\'400, Plan-Preis CHF 32.00, Ist-Umsatz CHF 45\'750, variable Kosten CHF 28.00/Stk. (Plan und Ist). Prod. P: Ist-Menge 15\'000, Plan-Menge 15\'000, Plan-Preis CHF 5.25, Ist-Preis CHF 5.00, variable Kosten CHF 2.80/Stk. (Plan und Ist). Berechnen Sie Ist-Preise, Umsatzabweichungen und den Gesamt-Deckungsbeitrag.',
          tips: ['Ist-Preis = Ist-Umsatz / Ist-Menge.','Abweichung = Ist − Plan (bei Umsatz: positiv = günstig).','Gesamt-DB = Summe aller (Umsatz − variable Kosten).'],
          reveal: ['Prod. O: Ist-Preis = 45\'750 / 1\'500 = 30.50 CHF/Stk. Plan-Umsatz = 1\'400 × 32.00 = 44\'800. Ist-Umsatz = 45\'750. Mengenabweichung positiv (+100 Stk), aber Preisabweichung negativ (30.50 statt 32.00). Warum beides analysieren? So sieht man, WO die Abweichung entsteht.','Prod. P: Plan-Umsatz = 15\'000 × 5.25 = 78\'750. Ist-Umsatz = 15\'000 × 5.00 = 75\'000 → Abweichung −3\'750 (ungünstig, tieferer Preis). Ist var.K = 2.80/Stk. Gesamt-DB Ist = (45\'750 − 42\'000) + (75\'000 − 42\'000) = 3\'750 + 33\'000 = 36\'750. Prüfungstipp: Abweichungsanalyse immer in Menge × Preis aufteilen!'],
          calcs: [
            {label:'Ist-Preis Produkt O (CHF/Stk.)',answer:30.50},
            {label:'Plan-Umsatz Produkt O (CHF)',answer:44800},
            {label:'Abweichung Umsatz Produkt P (CHF)',answer:-3750},
            {label:'Deckungsbeitrag Produkt O Ist (CHF)',answer:3750},
            {label:'Deckungsbeitrag Produkt P Ist (CHF)',answer:33000},
            {label:'Gesamt-DB Ist (CHF)',answer:36750}
          ]
        },
        {
          id: 154, type: 'calc',
          q: 'Nutzschwellenberechnung mit Gewinnziel. Produkt C: Verkaufspreis CHF 40.−, Einstand CHF 20.−, Gemeinkosten (alle fix) CHF 160\'000.−.',
          tips: ['Nutzschwelle mengen = FK / DB pro Stück.','DB pro Stück = Verkaufspreis − Einstand = 40 − 20 = 20.','Für Gewinnziel: (FK + Gewinnziel) / DB pro Stück.'],
          reveal: ['DB/Stk = 40 − 20 = 20. NS mengen = 160\'000 / 20 = 8\'000 Stk. NS wert = 8\'000 × 40 = 320\'000 CHF. Für CHF 40\'000 Gewinn: (160\'000 + 40\'000) / 20 = 10\'000 Stk → 2\'000 zusätzliche Stück über der NS.','Zusätzliche Werbekosten CHF 10\'000: Diese müssen durch Mehr-Umsatz gedeckt werden. Erforderliche Mehrstücke = 10\'000 / 20 = 500 Stk. Mehr-Umsatz = 500 × 40 = 20\'000 CHF. Prüfungstipp: Die DB-Marge beträgt 50% (20/40). Jeder CHF Mehrkosten erfordert CHF 2 Mehr-Umsatz.'],
          calcs: [
            {label:'Nutzschwelle mengenmässig (Stück)',answer:8000},
            {label:'Nutzschwelle wertmässig (CHF)',answer:320000},
            {label:'Zusätzliche Stücke für Gewinn CHF 40\'000',answer:2000},
            {label:'Mehr-Umsatz für zusätzliche Werbekosten CHF 10\'000 (CHF)',answer:20000}
          ]
        },
        {
          id: 155, type: 'tf',
          q: 'Richtig oder falsch? Planung und Controlling',
          statements: [
            {s:'Keine Planung ohne Kontrolle, und keine Kontrolle ohne Planung.', c: true},
            {s:'Ein guter Controllingbericht sollte möglichst ausführlich und detailliert sein.', c: false, reason:'Ein guter Bericht enthält nur so viele Daten, wie der Empfänger benötigt – nicht mehr.'},
            {s:'Plan- und Ist-Rechnungen müssen die gleiche Struktur haben, damit ein sinnvoller Vergleich möglich ist.', c: true},
            {s:'Top-down-Budgetierung bedeutet, dass die Abteilungen ihre Budgets der Geschäftsleitung vorlegen.', c: false, reason:'Top-down = GL gibt Ziele vor. Bottom-up = Abteilungen planen.'},
            {s:'Das Gegenstromverfahren kombiniert Top-down und Bottom-up Budgetierung.', c: true},
            {s:'Strategische Planung ist kurzfristig ausgerichtet und arbeitet mit Jahresbudgets.', c: false, reason:'Strategische Planung = langfristig (Businesspläne). Operative Planung = kurzfristig (Budgets).'}
          ],
          tips: ['Controllingberichte: So kurz wie möglich, so ausführlich wie nötig.','Top-down = von oben nach unten, Bottom-up = von unten nach oben.','Strategisch = langfristig, operativ = kurzfristig.'],
          reveal: ['Planung und Kontrolle gehören zusammen – ohne Plan gibt es keinen Soll-Wert zum Vergleichen, ohne Kontrolle weiss man nicht, ob der Plan eingehalten wird. Controllingberichte sollten NICHT zu detailliert sein – nur die relevanten Abweichungen aufzeigen.','Top-down: GL gibt Zielwerte vor → Abteilungen setzen um. Bottom-up: Abteilungen planen → GL fasst zusammen. Gegenstrom: Kombination beider Richtungen. Warum Gegenstrom optimal? Es verbindet strategische Vorgaben mit operativem Know-how.','Strategisch = langfristig (3-5 Jahre, Businesspläne). Operativ = kurzfristig (1 Jahr, Budgets). Prüfungstipp: Verwechslungsgefahr! Businessplan ≠ Budget. Businessplan = Strategie, Budget = jährliche Umsetzung.']
        },
        {
          id: 156, type: 'match',
          q: 'Zuordnung: Unternehmensziele. Ordnen Sie die Ziele der richtigen Kategorie zu.',
          pairs: [
            {l:'Produktziele', r:'Leistungsziele'},
            {l:'Marktziele', r:'Leistungsziele'},
            {l:'Liquiditätsziele', r:'Finanzziele'},
            {l:'Rentabilitätsziele', r:'Finanzziele'},
            {l:'Sicherheitsziele', r:'Finanzziele'}
          ],
          options: ['Leistungsziele','Finanzziele'],
          tips: ['Leistungsziele beziehen sich auf Produkte und Märkte.','Finanzziele beziehen sich auf Geld, Rendite und Sicherheit.','Liquidität, Rentabilität und Sicherheit = Finanzziele.'],
          reveal: ['Leistungsziele: Was und wo verkaufen? Produktziele (Qualität, Sortiment, Innovation) und Marktziele (Marktanteil, neue Märkte, Zielgruppen). Finanzziele: Wie gut wirtschaften? Liquidität (zahlungsfähig bleiben), Rentabilität (genug verdienen), Sicherheit (Risiken minimieren).','Warum diese Unterscheidung? Leistungsziele bestimmen das WAS (Produkte/Märkte), Finanzziele das WIE GUT (Wirtschaftlichkeit). Beide müssen in der Planung berücksichtigt werden. Prüfungstipp: Liquidität ist das wichtigste Finanzziel – ohne Liquidität ist das Unternehmen zahlungsunfähig!']
        },
        {
          id: 157, type: 'tf',
          q: 'Richtig oder falsch? Soll-Ist-Vergleich und Abweichungsanalyse',
          statements: [
            {s:'Eine positive Umsatzabweichung (Ist > Soll) ist immer günstig.', c: true},
            {s:'Eine positive Kostenabweichung (Ist > Soll) ist günstig.', c: false, reason:'Höhere Ist-Kosten als geplant = ungünstig.'},
            {s:'Abweichungen können in Mengen- und Preisabweichungen aufgeteilt werden.', c: true},
            {s:'Wenn keine Abweichungen vorliegen, war die Planung perfekt.', c: false, reason:'Keine Abweichung kann auch Zufall sein oder durch gegenseitige Kompensation entstehen.'},
            {s:'Der Soll-Ist-Vergleich setzt voraus, dass Plan und Ist die gleiche Struktur haben.', c: true},
            {s:'Controlling bedeutet ausschliesslich Kontrolle.', c: false, reason:'Controlling = Steuerung UND Kontrolle. Der Begriff kommt von "to control" = steuern.'}
          ],
          tips: ['Positive Abweichung: gut beim Umsatz, schlecht bei Kosten.','Abweichungen in Menge × Preis aufteilen.','Controlling = steuern + kontrollieren.'],
          reveal: ['Positive Umsatzabweichung = günstig (mehr Umsatz als geplant). Positive Kostenabweichung = UNGÜNSTIG (mehr Kosten als geplant!). Merkhilfe: Beim Umsatz ist "mehr" gut, bei Kosten ist "mehr" schlecht.','Abweichungen immer in Mengen- und Preisabweichung aufteilen. Warum? Um zu verstehen, OB zu wenig/viel verkauft wurde (Menge) oder OB der Preis nicht stimmte. Keine Abweichung ≠ perfekte Planung – gegenläufige Effekte können sich aufheben!','Controlling ≠ nur Kontrolle! Es umfasst Planung, Steuerung UND Kontrolle. "To control" = steuern, lenken. Prüfungstipp: Controlling ist zukunftsorientiert (steuern), nicht nur rückblickend (kontrollieren).']
        },
        {
          id: 158, type: 'sort',
          q: 'Sortieren Sie die Phasen des Managementkreislaufs in die richtige Reihenfolge.',
          items: ['Kontrollieren','Entscheiden','Anordnen','Planen'],
          correctOrder: [3,1,2,0],
          tips: ['Der Kreislauf beginnt mit der Planung.','Nach dem Planen kommt das Entscheiden.','Am Ende wird kontrolliert – und dann beginnt der Kreislauf von vorn.'],
          reveal: ['Korrekte Reihenfolge: Planen → Entscheiden → Anordnen → Kontrollieren. Warum ein Kreislauf? Nach der Kontrolle fliessen die Erkenntnisse in die nächste Planungsrunde ein. Ohne Kontrolle weiss man nicht, ob die Planung korrekt war.','Merkhilfe: P-E-A-K (Planen, Entscheiden, Anordnen, Kontrollieren). Oder: "Plan machen, Entscheid fällen, Anweisung geben, Kontrolle ausüben." Prüfungstipp: Controlling ist NICHT die letzte Phase – der Kreislauf hat kein Ende, sondern beginnt immer wieder von vorn.']
        },
        {
          id: 159, type: 'text',
          q: 'Budgetierungsverfahren erklären',
          questions: [
            {id:'A', q:'Was bedeutet Top-down-Budgetierung?', keywords:['Geschäftsleitung','GL','oben','Vorgaben','Ziele','vorgeben']},
            {id:'B', q:'Was bedeutet Bottom-up-Budgetierung?', keywords:['Abteilungen','unten','Mitarbeiter','planen','erstellen']},
            {id:'C', q:'Was ist das Gegenstromverfahren und warum gilt es als optimal?', keywords:['Kombination','beide','Top-down','Bottom-up','Vorgaben','Erfahrung','optimal']}
          ],
          tips: ['Top-down = von oben nach unten.','Bottom-up = von unten nach oben.','Gegenstrom = Kombination beider Richtungen.'],
          reveal: ['Top-down: Die GL gibt Budgetziele vor, die Abteilungen setzen um. Vorteil: Schnell, strategisch ausgerichtet. Nachteil: Fehlende Praxisnähe, wenig Akzeptanz bei Mitarbeitern. Bottom-up: Abteilungen erstellen ihre Budgets, GL fasst zusammen. Vorteil: Praxisnah, hohe Akzeptanz. Nachteil: Zeitaufwändig, evtl. nicht strategiekonform.','Gegenstromverfahren: GL gibt Rahmen vor (Top-down), Abteilungen konkretisieren (Bottom-up), Abstimmung in mehreren Runden. Warum optimal? Es verbindet strategische Ausrichtung mit operativem Know-how und erzeugt hohe Akzeptanz. Prüfungstipp: In der Praxis wird meist das Gegenstromverfahren verwendet.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Managementkreislauf und Budgetkreislauf verstehen',
            'Strategische und operative Planung unterscheiden',
            'Budgets als Planungsinstrument einsetzen und interpretieren',
            'Soll-Ist-Vergleiche (Abweichungsanalysen) durchführen'
          ]},
          { type: 'concept', title: 'Planung und Budgetierung', content: 'Planen, Entscheiden, Anordnen und Kontrollieren sind die Phasen des Managementkreislaufs. Die strategische Planung arbeitet mit Businessplänen (Mehrjahrespläne), die operative Planung mit Budgets (Jahrespläne). Budgets legen offen, ob die definierten Zielwerte erreichbar sind. Wenn nicht, werden die Einzelpläne überarbeitet.', highlight: 'Strategisch = Businesspläne (langfristig). Operativ = Budgets (kurzfristig).' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Managementkreislauf', def: 'Planen → Entscheiden → Anordnen → Kontrollieren.' },
            { term: 'Strategische Planung', def: 'Langfristige Planung mit Businessplänen. Umfasst strategische Entwicklung und Analyse.' },
            { term: 'Operative Planung', def: 'Kurzfristige Planung mit Budgets (Jahresplanung).' },
            { term: 'Leistungsziele', def: 'Produktziele und Marktziele eines Unternehmens.' },
            { term: 'Finanzziele', def: 'Liquiditätsziele, Rentabilitätsziele und Sicherheitsziele.' },
            { term: 'Soll-Ist-Vergleich', def: 'Vergleich der geplanten Werte (Budget) mit den tatsächlichen Werten.' },
            { term: 'Controlling', def: 'Steuerung und Kontrolle. Kein Controllingbericht sollte ausführlicher sein als nötig.' },
            { term: 'Gegenstromverfahren', def: 'Budgeterstellung durch Kombination von Top-down und Bottom-up.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Es gilt: Keine Planung ohne Kontrolle, und keine Kontrolle ohne Planung. Damit eine sinnvolle Kontrolle möglich ist, müssen Plan- und Ist-Rechnungen die gleiche Struktur haben. Ein guter Controllingbericht ist NICHT ausführlich und detailliert, sondern enthält nur so viele Daten, wie der Empfänger benötigt.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Managementkreislauf: Planen → Entscheiden → Anordnen → Kontrollieren',
            'Strategisch = Businesspläne (langfristig), operativ = Budgets (Jahrespläne)',
            'Gegenstromverfahren: Kombination Top-down und Bottom-up (praxisnah + strategiekonform)',
            'Soll-Ist-Vergleich: Plan- und Ist-Rechnungen müssen gleiche Struktur haben'
          ]}
        ]
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // GLOSSAR
  // ═══════════════════════════════════════════════════════════════════════════
  glossary: [
    { term: 'Aktiven', def: 'Linke Bilanzseite. Zeigt das Vermögen des Unternehmens.' },
    { term: 'Passiven', def: 'Rechte Bilanzseite. Zeigt die Finanzierung (FK + EK).' },
    { term: 'Umlaufvermögen (UV)', def: 'Kurzfristige Vermögenswerte: Kasse, Bank, Forderungen, Vorräte.' },
    { term: 'Anlagevermögen (AV)', def: 'Langfristige Vermögenswerte: Immobilien, Maschinen, Fahrzeuge.' },
    { term: 'Fremdkapital (FK)', def: 'Schulden des Unternehmens: Verbindlichkeiten, Darlehen, Hypotheken.' },
    { term: 'Eigenkapital (EK)', def: 'Eigene Mittel: Aktienkapital, Reserven, Gewinnvortrag.' },
    { term: 'Bilanz', def: 'Gegenüberstellung von Vermögen und Kapital zu einem Stichtag.' },
    { term: 'Bilanzsumme', def: 'Total Aktiven = Total Passiven.' },
    { term: 'Erfolgsrechnung', def: 'Zeigt Aufwand und Ertrag einer Periode. Ergebnis = Gewinn/Verlust.' },
    { term: 'Finanzbuchhaltung', def: 'Externer Abschluss mit Bilanz und Erfolgsrechnung.' },
    { term: 'Betriebsbuchhaltung', def: 'Interner Abschluss, dient der Unternehmensführung.' },
    { term: 'Nebenbuchhaltungen', def: 'Hilfsbuchhaltungen: Debitoren, Kreditoren, Lohn.' },
    { term: 'Debitorenbuchhaltung', def: 'Erfasst offene Forderungen gegenüber Kunden.' },
    { term: 'Kreditorenbuchhaltung', def: 'Erfasst offene Verbindlichkeiten gegenüber Lieferanten.' },
    { term: 'Lohnbuchhaltung', def: 'Abrechnung von Löhnen und Sozialversicherungen.' },
    { term: 'Geldflussrechnung', def: 'Dritte Abschlussrechnung. Zeigt Liquiditätsveränderung.' },
    { term: 'Inventar', def: 'Detaillierte Bestandsaufnahme aller Vermögens- und Schuldenposten.' },
    { term: 'Liquidität', def: 'Fähigkeit, Zahlungsverpflichtungen fristgerecht zu erfüllen.' },
    { term: 'Flüssige Mittel', def: 'Kasse + Post + Bankguthaben.' },
    { term: 'Forderungen aus L+L', def: 'Offene Rechnungen an Kunden (Debitoren).' },
    { term: 'Verbindlichkeiten aus L+L', def: 'Offene Rechnungen von Lieferanten (Kreditoren).' },
    { term: 'Hypothek', def: 'Darlehen, besichert durch Grundpfand (Liegenschaft).' },
    { term: 'Goldene Bilanzregel', def: 'Langfristiges Kapital ≥ Anlagevermögen.' },
    { term: 'Nettoumlaufvermögen', def: 'UV − kurzfristiges FK. Sollte positiv sein.' },
    { term: 'Fertigfabrikate', def: 'Fertig produzierte Erzeugnisse, bereit zum Verkauf.' },
    { term: 'Halbfabrikate', def: 'Noch nicht fertiggestellte Zwischenprodukte.' },
    { term: 'Rückstellungen', def: 'Verbindlichkeiten mit unsicherem Betrag oder Zeitpunkt.' },
    { term: 'Wertschriften', def: 'Kurzfristige Finanzanlagen (Aktien, Obligationen).' },
    { term: 'Deckungsbeitrag', def: 'Verkaufspreis − variable Kosten.' },
    { term: 'Abschreibung', def: 'Wertminderung von Anlagevermögen über die Nutzungsdauer.' },
    { term: 'Kennzahlen', def: 'Rentabilität, Liquidität, Deckungsgrade, Umschlagsziffern.' },
    { term: 'Bilanzanalyse', def: 'Auswertung der Bilanz und Erfolgsrechnung mit Kennzahlen.' }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KONTENRAHMEN KMU (Reference Data)
  // ═══════════════════════════════════════════════════════════════════════════
  kontenrahmen: [
    { cls: 1, clsName: 'Aktiven', groups: [
      { grp: '10', name: 'Flüssige Mittel, Wertschriften, Forderungen', accounts: [
        { nr: '1000', n: 'Kasse' }, { nr: '1010', n: 'Post' }, { nr: '1020', n: 'Bankguthaben' },
        { nr: '1040', n: 'Kassenobligationen' }, { nr: '1060', n: 'Wertschriften (kurzfristig)' },
        { nr: '1100', n: 'Forderungen aus L+L (Debitoren)' }, { nr: '1109', n: 'WB Forderungen (Delkredere)' },
        { nr: '1140', n: 'Vorschüsse und Darlehen (kurzfr.)' }, { nr: '1170', n: 'Vorsteuer MWST' },
        { nr: '1176', n: 'Verrechnungssteuer' }, { nr: '1180', n: 'Sonstige kurzfristige Forderungen' }
      ]},
      { grp: '12', name: 'Vorräte und nicht fakturierte Dienstleistungen', accounts: [
        { nr: '1200', n: 'Handelswaren' }, { nr: '1210', n: 'Rohstoffe' },
        { nr: '1220', n: 'Halbfabrikate' }, { nr: '1230', n: 'Fertigfabrikate' },
        { nr: '1250', n: 'Nicht fakturierte Dienstleistungen' }, { nr: '1260', n: 'Fertige Erzeugnisse' },
        { nr: '1280', n: 'WB Vorräte' }
      ]},
      { grp: '13', name: 'Aktive Rechnungsabgrenzung', accounts: [
        { nr: '1300', n: 'ARA (Transitorische Aktiven)' }
      ]},
      { grp: '14', name: 'Finanzanlagen', accounts: [
        { nr: '1440', n: 'Wertschriften des AV' }, { nr: '1450', n: 'Darlehen (Aktivdarlehen)' },
        { nr: '1460', n: 'Festgelder (langfristig)' }, { nr: '1480', n: 'Beteiligungen' }
      ]},
      { grp: '15', name: 'Mobile Sachanlagen', accounts: [
        { nr: '1500', n: 'Maschinen und Apparate' }, { nr: '1510', n: 'Mobiliar und Einrichtungen' },
        { nr: '1520', n: 'Büromaschinen, Informatik' }, { nr: '1530', n: 'Fahrzeuge' },
        { nr: '1540', n: 'Werkzeuge und Geräte' }
      ]},
      { grp: '16', name: 'Immobile Sachanlagen', accounts: [
        { nr: '1600', n: 'Geschäftsliegenschaften' }, { nr: '1610', n: 'Wohnliegenschaften' },
        { nr: '1680', n: 'WB Immobilien' }
      ]},
      { grp: '17', name: 'Immaterielle Anlagen', accounts: [
        { nr: '1700', n: 'Patente, Marken, Lizenzen' }, { nr: '1770', n: 'Goodwill' },
        { nr: '1780', n: 'WB immaterielle Anlagen' }
      ]}
    ]},
    { cls: 2, clsName: 'Passiven', groups: [
      { grp: '20', name: 'Kurzfristiges Fremdkapital', accounts: [
        { nr: '2000', n: 'Verbindlichkeiten aus L+L (Kreditoren)' },
        { nr: '2030', n: 'Erhaltene Anzahlungen' }, { nr: '2050', n: 'Kontokorrent-Schulden' },
        { nr: '2100', n: 'Bankverbindlichkeiten (kurzfr.)' },
        { nr: '2120', n: 'Verbindlichkeiten Leasing (kurzfr.)' },
        { nr: '2200', n: 'Geschuldete MWST (Umsatzsteuer)' },
        { nr: '2206', n: 'Abrechnungskonto MWST' },
        { nr: '2210', n: 'Übrige geschuldete Steuern' },
        { nr: '2270', n: 'Quellensteuer' }, { nr: '2280', n: 'Direkte Steuern' }
      ]},
      { grp: '23', name: 'Passive Rechnungsabgrenzung und kurzfristige Rückstellungen', accounts: [
        { nr: '2300', n: 'PRA (Transitorische Passiven)' },
        { nr: '2330', n: 'Kurzfristige Rückstellungen' }
      ]},
      { grp: '24', name: 'Langfristiges Fremdkapital', accounts: [
        { nr: '2400', n: 'Bankverbindlichkeiten (langfr.)' },
        { nr: '2420', n: 'Verbindlichkeiten Leasing (langfr.)' },
        { nr: '2450', n: 'Darlehen (Passivdarlehen)' }, { nr: '2451', n: 'Hypotheken' },
        { nr: '2500', n: 'Obligationenanleihen' },
        { nr: '2600', n: 'Rückstellungen (langfr.)' }
      ]},
      { grp: '28', name: 'Eigenkapital', accounts: [
        { nr: '2800', n: 'Aktienkapital / Stammkapital' },
        { nr: '2810', n: 'Partizipationskapital' },
        { nr: '2850', n: 'Privat (Einzelunternehmen)' },
        { nr: '2891', n: 'Jahresgewinn oder -verlust' },
        { nr: '2900', n: 'Gesetzliche Kapitalreserve (Agio)' },
        { nr: '2950', n: 'Gesetzliche Gewinnreserve' },
        { nr: '2960', n: 'Freiwillige Gewinnreserve' },
        { nr: '2970', n: 'Gewinn- oder Verlustvortrag' },
        { nr: '2979', n: 'Bilanzgewinn oder -verlust' }
      ]}
    ]},
    { cls: 3, clsName: 'Betrieblicher Ertrag aus Lieferungen und Leistungen', groups: [
      { grp: '30', name: 'Produktionserlöse', accounts: [
        { nr: '3000', n: 'Produktionserlöse' }, { nr: '3010', n: 'Erlöse Nebenprodukte' }
      ]},
      { grp: '32', name: 'Handelserlöse', accounts: [
        { nr: '3200', n: 'Handelserlöse (Warenertrag)' }, { nr: '3210', n: 'Erlöse Handelswaren B' }
      ]},
      { grp: '34', name: 'Dienstleistungserlöse', accounts: [
        { nr: '3400', n: 'Dienstleistungserlöse' }, { nr: '3410', n: 'Honorarertrag' }
      ]},
      { grp: '36', name: 'Übrige Erlöse', accounts: [
        { nr: '3600', n: 'Übrige Erlöse aus L+L' }
      ]},
      { grp: '37', name: 'Eigenleistungen und Eigenverbrauch', accounts: [
        { nr: '3700', n: 'Eigenleistungen' }, { nr: '3710', n: 'Eigenverbrauch' }
      ]},
      { grp: '38', name: 'Erlösminderungen', accounts: [
        { nr: '3800', n: 'Skonti' }, { nr: '3805', n: 'Verluste Forderungen (Debitorenverluste)' },
        { nr: '3810', n: 'Rabatte, Preisnachlässe' },
        { nr: '3900', n: 'Bestandesänderungen Halb- und Fertigfabrikate' }
      ]}
    ]},
    { cls: 4, clsName: 'Aufwand für Material, Handelswaren, Dienstleistungen', groups: [
      { grp: '40', name: 'Materialaufwand', accounts: [
        { nr: '4000', n: 'Materialaufwand' }, { nr: '4070', n: 'Skonti auf Materialaufwand' },
        { nr: '4080', n: 'Bestandesänderungen Materialvorräte' }
      ]},
      { grp: '42', name: 'Handelswarenaufwand', accounts: [
        { nr: '4200', n: 'Handelswarenaufwand (Warenaufwand)' }, { nr: '4270', n: 'Skonti auf Handelswaren' },
        { nr: '4280', n: 'Bestandesänderungen Handelswaren' }
      ]},
      { grp: '44', name: 'Aufwand für Drittleistungen', accounts: [
        { nr: '4400', n: 'Aufwand für Drittleistungen' }, { nr: '4500', n: 'Energieaufwand (Produktion)' }
      ]}
    ]},
    { cls: 5, clsName: 'Personalaufwand', groups: [
      { grp: '50', name: 'Löhne und Gehälter', accounts: [
        { nr: '5000', n: 'Lohnaufwand' }, { nr: '5040', n: 'Leistungen Dritter (Temporäre)' },
        { nr: '5060', n: 'Erfolgsbeteiligungen' }
      ]},
      { grp: '52', name: 'Sozialversicherungsaufwand', accounts: [
        { nr: '5200', n: 'AHV, IV, EO, ALV' }, { nr: '5210', n: 'FAK (Familienausgleichskasse)' },
        { nr: '5220', n: 'BVG (Pensionskasse)' }, { nr: '5230', n: 'UVG (Unfallversicherung)' },
        { nr: '5240', n: 'KTG (Krankentaggeld)' }, { nr: '5250', n: 'Quellensteuer' }
      ]},
      { grp: '57', name: 'Übriger Personalaufwand', accounts: [
        { nr: '5700', n: 'Übriger Personalaufwand' }, { nr: '5800', n: 'Ausbildung und Weiterbildung' },
        { nr: '5810', n: 'Spesen' }, { nr: '5820', n: 'Personalverpflegung' },
        { nr: '5900', n: 'Leistungen von Sozialversicherungen' }
      ]}
    ]},
    { cls: 6, clsName: 'Übriger betrieblicher Aufwand, Abschreibungen, Finanzerfolg', groups: [
      { grp: '60', name: 'Raumaufwand', accounts: [
        { nr: '6000', n: 'Raumaufwand (Mietaufwand)' }, { nr: '6010', n: 'Nebenkosten (Heizung, Strom)' },
        { nr: '6040', n: 'Reinigung' }, { nr: '6050', n: 'Unterhalt Geschäftsräume' }
      ]},
      { grp: '61', name: 'Unterhalt und Reparaturen', accounts: [
        { nr: '6100', n: 'Unterhalt und Reparaturen Maschinen' },
        { nr: '6110', n: 'Unterhalt und Reparaturen Mobiliar' },
        { nr: '6120', n: 'Unterhalt und Reparaturen Fahrzeuge' },
        { nr: '6130', n: 'Leasingaufwand Mobilien' }
      ]},
      { grp: '62', name: 'Fahrzeug- und Transportaufwand', accounts: [
        { nr: '6200', n: 'Fahrzeugaufwand' }, { nr: '6210', n: 'Transportaufwand' },
        { nr: '6260', n: 'Betriebsversicherungen' }
      ]},
      { grp: '63', name: 'Sachversicherungen, Abgaben', accounts: [
        { nr: '6300', n: 'Sachversicherungen' }, { nr: '6360', n: 'Abgaben, Gebühren, Bewilligungen' }
      ]},
      { grp: '65', name: 'Verwaltungsaufwand', accounts: [
        { nr: '6500', n: 'Büromaterial, Drucksachen' }, { nr: '6503', n: 'Fachliteratur' },
        { nr: '6510', n: 'Telefon, Internet' }, { nr: '6520', n: 'Beiträge, Spenden' },
        { nr: '6530', n: 'Buchführung und Beratung' }, { nr: '6570', n: 'Informatikaufwand' },
        { nr: '6580', n: 'Rechts- und Beratungskosten' }
      ]},
      { grp: '66', name: 'Werbeaufwand', accounts: [
        { nr: '6600', n: 'Werbeaufwand' }, { nr: '6610', n: 'Reiseaufwand, Kundenspesen' },
        { nr: '6620', n: 'Messeaufwand' }
      ]},
      { grp: '68', name: 'Abschreibungen', accounts: [
        { nr: '6800', n: 'Abschreibungen Maschinen' }, { nr: '6810', n: 'Abschreibungen Mobiliar' },
        { nr: '6820', n: 'Abschreibungen Büromaschinen/IT' }, { nr: '6830', n: 'Abschreibungen Fahrzeuge' },
        { nr: '6840', n: 'Abschreibungen Immobilien' }, { nr: '6850', n: 'Abschreibungen immaterielle Anlagen' }
      ]},
      { grp: '69', name: 'Finanzaufwand und Finanzertrag', accounts: [
        { nr: '6900', n: 'Zinsaufwand (Finanzaufwand)' }, { nr: '6910', n: 'Bankspesen' },
        { nr: '6920', n: 'Kursverluste' }, { nr: '6940', n: 'Wertberichtigungen Finanzanlagen' },
        { nr: '6950', n: 'Zinsertrag (Finanzertrag)' }, { nr: '6960', n: 'Wertschriftenertrag' },
        { nr: '6970', n: 'Kursgewinne' }
      ]}
    ]},
    { cls: 7, clsName: 'Betrieblicher Nebenerfolg', groups: [
      { grp: '70', name: 'Ertrag Nebenbetrieb', accounts: [
        { nr: '7000', n: 'Ertrag Nebenbetrieb' }, { nr: '7010', n: 'Aufwand Nebenbetrieb' }
      ]},
      { grp: '75', name: 'Ertrag betriebliche Liegenschaften', accounts: [
        { nr: '7500', n: 'Ertrag betriebliche Liegenschaften' },
        { nr: '7510', n: 'Aufwand betriebliche Liegenschaften' }
      ]},
      { grp: '79', name: 'Erfolg aus Veräusserung von Anlagevermögen', accounts: [
        { nr: '7900', n: 'Gewinn aus Veräusserung Anlagevermögen' },
        { nr: '7910', n: 'Verlust aus Veräusserung Anlagevermögen' }
      ]}
    ]},
    { cls: 8, clsName: 'Ausserordentlicher, einmaliger oder periodenfremder Erfolg', groups: [
      { grp: '80', name: 'Betriebsfremder Erfolg', accounts: [
        { nr: '8000', n: 'Betriebsfremder Aufwand' }, { nr: '8100', n: 'Betriebsfremder Ertrag' }
      ]},
      { grp: '85', name: 'Ausserordentlicher / einmaliger / periodenfremder Erfolg', accounts: [
        { nr: '8500', n: 'Ausserordentlicher Aufwand' }, { nr: '8510', n: 'Ausserordentlicher Ertrag' },
        { nr: '8900', n: 'Direkte Steuern' }
      ]}
    ]},
    { cls: 9, clsName: 'Abschluss', groups: [
      { grp: '90', name: 'Erfolgsrechnung', accounts: [
        { nr: '9000', n: 'Eröffnungsbilanz' }, { nr: '9100', n: 'Erfolgsrechnung' },
        { nr: '9200', n: 'Jahresgewinn oder -verlust' }
      ]}
    ]}
  ]
};
