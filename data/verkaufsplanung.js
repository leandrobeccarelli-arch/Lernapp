window.BOOK_DATA = {
  id: 'verkaufsplanung',
  title: 'Verkaufsplanung für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Verkaufsplanung',
  author: 'Portmann, Meyer',
  year: 2023,
  totalPages: 231,
  pages: 231,
  color: '#4f46e5',
  chapters: [
    {
      id: 'ch1',
      num: 'Kapitel 1',
      title: 'Verkaufsplanungskonzept und Verkaufsziele',
      pageStart: 10, pageEnd: 28,
      exercises: [
        {
          id: 1,
          type: 'match',
          q: 'Welches sind die Schritte des allgemeingültigen Konzeptrasters? Ordnen Sie die Schritte den Nummern zu.',
          pairs: [
            {l: '1.', r: 'Analyse der Ausgangslage'},
            {l: '2.', r: 'Definition von Zielen'},
            {l: '3.', r: 'Entwicklung von Strategien'},
            {l: '4.', r: 'Erarbeitung von Massnahmen mit Termin, Kosten und Verantwortung'},
            {l: '5.', r: 'Zusammenstellen des Budgets (mit Reserve)'},
            {l: '6.', r: 'Erarbeitung der Kontrollpläne'}
          ],
          options: ['Analyse der Ausgangslage','Definition von Zielen','Entwicklung von Strategien','Erarbeitung von Massnahmen mit Termin, Kosten und Verantwortung','Zusammenstellen des Budgets (mit Reserve)','Erarbeitung der Kontrollpläne'],
          tips: ['Das Konzeptraster umfasst 6 aufeinander aufbauende Schritte.','Es beginnt immer mit der Analyse und endet mit der Kontrolle.','Merkhilfe: A-Z-S-M-B-K'],
          reveal: ['Die 6 Schritte: 1) Analyse → 2) Ziele → 3) Strategien → 4) Massnahmen → 5) Budget → 6) Kontrolle.','Warum diese Reihenfolge? Jeder Schritt baut auf dem vorherigen auf: Ohne Analyse kann man keine fundierten Ziele setzen, ohne Ziele keine Strategie ableiten, ohne Strategie keine Massnahmen planen.','Merkhilfe A-Z-S-M-B-K: Das Raster ist universell — es gilt für jedes Konzept im Marketing und Verkauf, nicht nur für die Verkaufsplanung.','Prüfungstipp: An der Prüfung wird oft ein «Teilkonzept» verlangt. Das Raster bildet immer die Grundstruktur — wer es kennt, hat sofort ein Gerüst.']
        },
        {
          id: 2,
          type: 'fill',
          q: 'Ergänzen Sie die Planungszeiträume der verschiedenen Verkaufszielarten.',
          template: 'Strategische Ziele: {0} | Operative Ziele: {1} | Taktische Ziele: {2}',
          blanks: ['Langfristig, 3 bis 5 Jahre','Mittelfristig, 2 bis 3 Jahre','Kurzfristig, bis 1 Jahr'],
          accept: [['Langfristig, 3 bis 5 Jahre','3 bis 5 Jahre','3-5 Jahre','langfristig'],['Mittelfristig, 2 bis 3 Jahre','2 bis 3 Jahre','2-3 Jahre','mittelfristig'],['Kurzfristig, bis 1 Jahr','bis 1 Jahr','kurzfristig']],
          tips: ['Es gibt drei Planungshorizonte: lang-, mittel- und kurzfristig.','Strategische Ziele haben den längsten Zeithorizont.','Taktische Ziele sind die kurzfristigsten.'],
          reveal: ['Strategische Ziele = langfristig (3–5 Jahre), Operative = mittelfristig (2–3 Jahre), Taktische = kurzfristig (bis 1 Jahr).','Warum diese Abstufung? Die Zeithorizonte spiegeln die Steuerungsebenen: Strategisch gibt die Richtung vor (z.B. «neue Märkte erschliessen»), operativ plant die Umsetzung (z.B. «Vertriebsstruktur aufbauen»), taktisch regelt das Tagesgeschäft (z.B. «20 Kundenbesuche/Woche»).','Häufiger Fehler: Operative und taktische Ziele werden verwechselt. Merke: Operativ = Jahresplanung, Taktisch = Wochen-/Monatsplanung.']
        },
        {
          id: 3,
          type: 'check',
          q: 'Sind die folgenden Verkaufsziele ökonomische oder vorökonomische Verkaufsziele?',
          statements: [
            {s: 'Distributionsgrad ist ein ökonomisches Verkaufsziel.', c: true},
            {s: 'Mitarbeiterzufriedenheit ist ein ökonomisches Verkaufsziel.', c: false},
            {s: 'Absatz ist ein ökonomisches Verkaufsziel.', c: true},
            {s: 'Bekanntheitsgrad ist ein ökonomisches Verkaufsziel.', c: false},
            {s: 'Kosten ist ein ökonomisches Verkaufsziel.', c: true},
            {s: 'Kontaktqualität ist ein ökonomisches Verkaufsziel.', c: false},
            {s: 'Umsatz ist ein ökonomisches Verkaufsziel.', c: true},
            {s: 'Kundenempfehlungsrate ist ein ökonomisches Verkaufsziel.', c: false},
            {s: 'Image ist ein ökonomisches Verkaufsziel.', c: false},
            {s: 'Servicequalität ist ein ökonomisches Verkaufsziel.', c: false}
          ],
          tips: ['Ökonomische Ziele sind quantitativ messbar (Zahlen, Geld).','Vorökonomische Ziele sind qualitativer Natur.','Beispiele ökonomisch: Umsatz, Absatz, Kosten, Distributionsgrad.'],
          reveal: ['Ökonomisch: Distributionsgrad, Absatz, Kosten, Umsatz — alles, was man direkt in Franken oder Stückzahlen messen kann.','Vorökonomisch: Mitarbeiterzufriedenheit, Bekanntheitsgrad, Kontaktqualität, Kundenempfehlungsrate, Image, Servicequalität — qualitative Grössen, die nur indirekt (Umfragen, Beobachtungen) messbar sind.','Warum die Unterscheidung? Ökonomische Ziele zeigen das Resultat, vorökonomische Ziele die Ursache. Beispiel: Hohe Servicequalität (vorökonomisch) führt zu mehr Umsatz (ökonomisch).','Knifflig: «Distributionsgrad» klingt qualitativ, ist aber ökonomisch — er wird als Prozentzahl berechnet (z.B. «Produkt in 80% der Verkaufsstellen verfügbar»).']
        },
        {
          id: 4,
          type: 'text',
          q: 'A) Was bedeutet Operationalisierung der Ziele? B) Wie werden Ziele operationalisiert?',
          keywords: ['konkretisiert','definiert','messbar','kontrolliert','beurteilt','was','wie viel','wem','wann','wo','wer'],
          solution: 'A) Damit Ziele beurteilt und kontrolliert werden können, müssen sie konkretisiert und definiert werden. Dies wird als Operationalisierung bezeichnet.\nB) Was: Zielinhalt, Wie viel: Zielquantifizierung, Wem: Zielsegment, Wann: Zielperiode, Wo: Zielmarkt, Wer: Verantwortlichkeiten.',
          questions: [
            {q: 'A) Was bedeutet Operationalisierung der Ziele?', keywords: ['konkretisiert','definiert','messbar','kontrolliert','beurteilt'], minKeywords: 2},
            {q: 'B) Nennen Sie die 6 W zur Operationalisierung.', keywords: ['was','wie viel','wem','wann','wo','wer'], minKeywords: 4}
          ],
          tips: ['Operationalisierung macht Ziele überprüfbar.','Die 6 W sind ein bewährtes Raster.','Alle 6 W müssen definiert sein, damit ein Ziel operationalisiert ist.'],
          reveal: ['A) Operationalisierung = Ziele so konkretisieren, dass sie messbar, kontrollierbar und beurteilbar werden.','Warum ist das wichtig? Ein Ziel wie «mehr verkaufen» ist nutzlos — niemand weiss, ob es erreicht wurde. Operationalisierung macht aus einem Wunsch ein kontrollierbares Ziel.','B) Die 6 W: Was (Zielinhalt), Wie viel (Quantifizierung), Wem (Zielsegment), Wann (Zielperiode), Wo (Zielmarkt), Wer (Verantwortung).','Prüfungstipp: Die 6 W sind ein Klassiker an der Prüfung. Wenn ein Ziel «operationalisiert» werden soll, einfach alle 6 W systematisch ausfüllen — fehlt eines, ist das Ziel unvollständig.']
        },
        {
          id: 5,
          type: 'text',
          q: 'Formulieren Sie das folgende Verkaufsziel anhand der 6 W: "Die Produktlancierung muss mit CHF 750\'000 Umsatz in der Schweiz ein voller Erfolg werden."',
          keywords: ['umsatz','750','produktlancierung','schweiz','verkaufsleiter','KMU','zielgruppe','dezember'],
          solution: 'Was: Umsatz nach Produktlancierung. Wie viel: CHF 750\'000. Wem: Definierte Zielgruppe von KMU. Wann: Bis zum 31.12.20xx. Wo: Im Verkaufsgebiet A / Schweiz. Wer: Verkaufsleiter.',
          questions: [
            {q: 'Formulieren Sie das Ziel mit den 6 W (Was, Wie viel, Wem, Wann, Wo, Wer).', keywords: ['umsatz','750','produktlancierung','schweiz','verkaufsleiter','KMU','zielgruppe','dezember'], minKeywords: 3}
          ],
          tips: ['Identifizieren Sie zuerst, welche W bereits im Satz enthalten sind.','Was = Produktlancierung, Wie viel = CHF 750\'000, Wo = Schweiz.','Ergänzen Sie die fehlenden W: Wem, Wann, Wer.'],
          reveal: ['Was: Umsatz nach Produktlancierung. Wie viel: CHF 750\'000. Wem: KMU. Wann: Bis 31.12.20xx. Wo: Schweiz. Wer: Verkaufsleiter.','Warum diese Zuordnung? Im Originaltext ist nur «Was» (Umsatz), «Wie viel» (750\'000) und «Wo» (Schweiz) erkennbar. Die übrigen W müssen sinnvoll ergänzt werden — das ist typisch für Prüfungsaufgaben.','Häufiger Fehler: «Wem» und «Wo» werden verwechselt. Wem = Zielgruppe (Personen/Firmen), Wo = geografischer Markt.','Lerneffekt: Operationalisierung heisst, aus einem vagen Satz ein vollständiges Ziel zu machen. In der Praxis fehlen fast immer 2–3 W — genau das übt diese Aufgabe.']
        },
        {
          id: 6,
          type: 'mc',
          q: 'Welche Aussage zu Verkaufszielen ist korrekt?',
          options: [
            'Vorökonomische Ziele sind immer quantitativ messbar.',
            'Ökonomische Ziele können mittels Statistiken jederzeit gemessen werden.',
            'Taktische Ziele haben einen Planungshorizont von 3–5 Jahren.',
            'Strategische Ziele sind kurzfristiger Natur.'
          ],
          answer: 1,
          tips: ['Ökonomische = quantitativ, Vorökonomische = qualitativ.','Strategisch = langfristig, Taktisch = kurzfristig.','Statistiken ermöglichen laufende Messung ökonomischer Ziele.'],
          reveal: ['Richtig: B — Ökonomische Ziele können mittels Statistiken jederzeit gemessen werden (z.B. Umsatzzahlen aus dem ERP).','Warum nicht A? Vorökonomische Ziele sind gerade NICHT quantitativ messbar — das ist ihr Merkmal. Sie erfordern Umfragen, Beobachtungen oder Tests.','Warum nicht C? Taktische Ziele sind kurzfristig (bis 1 Jahr). 3–5 Jahre = strategisch.','Warum nicht D? Strategische Ziele sind langfristiger Natur — genau das Gegenteil.','Merke: «Ökonomisch = quantitativ = sofort messbar» vs. «Vorökonomisch = qualitativ = aufwändig zu erheben».']
        },
        {
          id: 7,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufsplanung',
          statements: [
            {s: 'Ein Konzept ist ein umfassender gedanklicher Entwurf, der die Grundlage der nötigen Handlungen zur Zielerreichung darstellt.', c: true, feedback: 'Dies ist die Definition eines Konzepts.'},
            {s: 'Vorökonomische Ziele sind einfacher zu messen als ökonomische Ziele.', c: false, feedback: 'Vorökonomische Ziele sind schwieriger zu messen, da sie qualitativen Charakter haben.'},
            {s: 'Die Verkaufszielpyramide zeigt die hierarchische Einordnung: Unternehmensziele > Marketingziele > Verkaufsziele.', c: true, feedback: 'Die Zielhierarchie geht von oben (Unternehmen) nach unten (Verkauf).'},
            {s: 'Bei der Operationalisierung reicht es, 3 der 6 W zu definieren.', c: false, feedback: 'Alle 6 W müssen definiert sein, damit ein Ziel korrekt operationalisiert ist.'}
          ],
          tips: ['Die Zielhierarchie: Unternehmensziele > Marketingziele > Verkaufsziele.','Operationalisierung erfordert alle 6 W.','Vorökonomische Ziele werden durch Umfragen/Beobachtungen gemessen.'],
          reveal: ['Aussage 1: Richtig — Das ist die Lehrbuchdefinition. Ein Konzept ist kein Plan, sondern ein gedanklicher Entwurf, der als Grundlage für konkrete Handlungen dient.','Aussage 2: Falsch — Vorökonomische Ziele (Image, Zufriedenheit) sind schwieriger zu messen, weil man Umfragen oder Beobachtungen braucht. Ökonomische Ziele (Umsatz, Absatz) sind direkt aus Statistiken ablesbar.','Aussage 3: Richtig — Die Zielhierarchie: Unternehmensziele → Marketingziele → Verkaufsziele. Jede Ebene leitet sich aus der übergeordneten ab.','Aussage 4: Falsch — Alle 6 W müssen definiert sein. Fehlt auch nur eines (z.B. «Wer»), ist das Ziel nicht vollständig operationalisiert und kann nicht eindeutig kontrolliert werden.']
        },
        {
          id: 8,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'Im Verkauf gibt es {0}, strategische (3–5 Jahre), mittelfristige, {1} (2–3 Jahre) und taktische, {2} (bis 1 Jahr) Ziele. Zudem unterscheidet man zwischen ökonomischen ({3}) und vorökonomischen ({4}) Zielen.',
          blanks: ['langfristige','operative','kurzfristige','quantitativen','qualitativen'],
          accept: [['langfristige'],['operative'],['kurzfristige'],['quantitativen','quantitative'],['qualitativen','qualitative']],
          tips: ['Strategisch = langfristig, operativ = mittelfristig, taktisch = kurzfristig.','Ökonomisch = quantitativ, vorökonomisch = qualitativ.','Beide Zielarten müssen quantifizierbar sein.'],
          reveal: ['Langfristig = strategisch (3–5 J.), Operativ = mittelfristig (2–3 J.), Kurzfristig = taktisch (bis 1 J.).','Ökonomisch = quantitativ (in Zahlen messbar), Vorökonomisch = qualitativ (nur indirekt erhebbar).','Warum diese Paarungen? Die Zeitdimension bestimmt den Detailgrad: Strategische Ziele sind bewusst grob gehalten, taktische Ziele maximal konkret. Ähnlich bei den Zielarten: Ökonomische Ziele sind die «harten Fakten», vorökonomische die «weichen Faktoren», die ihnen vorausgehen.','Prüfungstipp: Oft wird nach beiden Dimensionen gleichzeitig gefragt — Zeitdimension UND Zielart. Wer beides sicher zuordnet, holt die Punkte.']
        },
        {
          id: 9,
          type: 'match',
          q: 'Ordnen Sie die folgenden Ziele der richtigen Hierarchieebene zu.',
          pairs: [
            {l: 'Marktführerschaft erreichen', r: 'Unternehmensziel'},
            {l: 'Umsatz um 10% steigern', r: 'Marketingziel'},
            {l: 'Kundenzufriedenheit erhöhen', r: 'Marketingziel'},
            {l: 'Gewinnmaximierung', r: 'Unternehmensziel'},
            {l: '20 Neukunden pro Quartal gewinnen', r: 'Verkaufsziel'}
          ],
          options: ['Unternehmensziel','Marketingziel','Verkaufsziel'],
          tips: ['Unternehmensziele sind die übergeordneten, strategischen Ziele.','Marketingziele leiten sich aus den Unternehmenszielen ab.','Verkaufsziele sind die operativsten und konkretesten.'],
          reveal: ['Unternehmensziele: Marktführerschaft, Gewinnmaximierung — übergeordnete, strategische Ausrichtung des gesamten Unternehmens.','Marketingziele: Umsatzsteigerung (+10%), Kundenzufriedenheit — leiten sich aus Unternehmenszielen ab und betreffen den gesamten Marketing-Mix.','Verkaufsziel: 20 Neukunden/Quartal — maximal konkret und operativ, direkt dem Verkaufsteam zuweisbar.','Warum diese Zuordnung? Je konkreter und operativer ein Ziel, desto tiefer in der Hierarchie. «Marktführerschaft» kann man nicht einer Einzelperson zuweisen — das ist strategisch. «20 Neukunden» hingegen ist ein klar messbares Verkaufsziel.','Häufiger Fehler: «Umsatz steigern» wird als Verkaufsziel eingestuft. Aber Umsatz hängt vom gesamten Marketing-Mix ab (Preis, Produkt, Distribution) — deshalb ist es ein Marketingziel.']
        },
        {
          id: 10,
          type: 'sort',
          q: 'Ordnen Sie die Zielpyramide von oben (strategisch) nach unten (operativ).',
          items: ['Vision / Leitbild', 'Unternehmensziele', 'Marketingziele', 'Verkaufsziele', 'Massnahmenziele'],
          tips: ['Ganz oben steht die langfristige Ausrichtung des Unternehmens.','Verkaufsziele werden von Marketingzielen abgeleitet.','Massnahmenziele sind die konkretesten, operativsten Ziele.'],
          reveal: ['Die Zielpyramide: Vision → Unternehmensziele → Marketingziele → Verkaufsziele → Massnahmenziele.','Warum diese Reihenfolge? Ziele werden Top-down abgeleitet — die Vision gibt die Richtung vor, daraus entstehen immer konkretere Ziele bis zur einzelnen Massnahme.','Merke: Die Anzahl der Einzelziele nimmt nach unten zu, aber jedes Ziel muss sich aus der übergeordneten Ebene ableiten lassen.']
        },
        {
          id: 11,
          type: 'match',
          q: 'Ordnen Sie die 6 W der Operationalisierung der richtigen Bedeutung zu.',
          pairs: [
            {l: 'Was', r: 'Zielinhalt'},
            {l: 'Wie viel', r: 'Zielquantifizierung'},
            {l: 'Wem', r: 'Zielsegment'},
            {l: 'Wann', r: 'Zielperiode'},
            {l: 'Wo', r: 'Zielmarkt'},
            {l: 'Wer', r: 'Zielverantwortung'}
          ],
          options: ['Zielinhalt','Zielquantifizierung','Zielsegment','Zielperiode','Zielmarkt','Zielverantwortung'],
          tips: ['Was = welches Ziel, Wie viel = konkreter Wert.','Wem = Zielgruppe/Segment, Wann = Termin.','Wo = Markt/Region, Wer = verantwortliche Person.'],
          reveal: ['Was: Zielinhalt — Welches Verkaufsziel soll erreicht werden?','Wie viel: Zielquantifizierung — Welcher Wert soll erreicht werden?','Wem: Zielsegment — Welche Zielgruppe?','Wann: Zielperiode — Bis wann?','Wo: Zielmarkt — In welchem Markt?','Wer: Zielverantwortung — Wer ist verantwortlich?','Warum alle 6 W? Fehlt nur eines, ist das Ziel nicht vollständig operationalisiert und kann nicht eindeutig kontrolliert werden. An der Prüfung: Ziele immer in Tabellenform mit allen 6 W darstellen.']
        },
        {
          id: 12,
          type: 'fill',
          q: 'Ergänzen Sie die SMART-Formel für die Zielformulierung.',
          template: 'Ziele müssen SMART formuliert sein: S = {0}, M = {1}, A = {2}, R = {3}, T = {4}.',
          blanks: ['spezifisch','messbar','attraktiv','realistisch','terminiert'],
          accept: [['spezifisch','spezifische'],['messbar','messbare'],['attraktiv','attraktive','akzeptiert'],['realistisch','realistische','realisierbar'],['terminiert','terminierte','zeitlich']],
          tips: ['S steht für klar und eindeutig formuliert.','M bedeutet: Man kann den Erfolg messen.','T bedeutet: Es gibt einen klaren Endtermin.'],
          reveal: ['SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.','Warum SMART? Ein Ziel wie «Umsatz steigern» klingt gut, ist aber weder spezifisch noch messbar. Erst mit SMART wird es kontrollierbar.','Beispiel SMART: «Den Umsatz im Bereich Bio-Produkte um 10% auf CHF 1.1 Mio bis 31.12.2027 in der Deutschschweiz steigern (VL: Max Müller).»','SMART und die 6 W ergänzen sich — zusammen garantieren sie eine vollständige Zieldefinition.']
        },
        {
          id: 13,
          type: 'match',
          q: 'Ordnen Sie die 6 Subvariablen der Verkaufsstrategie der richtigen W-Frage zu.',
          pairs: [
            {l: 'Produktselektion', r: 'Was'},
            {l: 'Kundenselektion', r: 'Wem'},
            {l: 'Feldgrösse', r: 'Wo'},
            {l: 'Kontaktqualität', r: 'Wie'},
            {l: 'Kontaktquantität', r: 'Wie viel'},
            {l: 'Kontaktperiodizität', r: 'Wann'}
          ],
          options: ['Was','Wem','Wo','Wie','Wie viel','Wann'],
          tips: ['Produktselektion = welches Produkt verkaufen.','Kundenselektion = an wen verkaufen.','Kontaktperiodizität = wie oft / wann kontaktieren.'],
          reveal: ['Die 6 Subvariablen definieren die Verkaufsstrategie:','Was (Produkt), Wem (Kunden), Wo (Feld), Wie (Qualität), Wie viel (Quantität), Wann (Periodizität).','Warum 6 Subvariablen? Die Strategie beantwortet den «Weg zum Ziel». Jede Variable deckt eine Dimension ab — zusammen ergeben sie den vollständigen Verkaufsansatz.','Prüfungstipp: Die Subvariablen sind bewusst als W-Fragen formuliert, genau wie die 6 W der Operationalisierung — aber verwechsle sie nicht! Die 6 W operationalisieren Ziele, die 6 Subvariablen definieren die Strategie.']
        },
        {
          id: 14,
          type: 'mc',
          q: 'Ein Verkaufsziel lautet: "Wir wollen den Umsatz steigern." Was fehlt bei diesem Ziel?',
          options: [
            'Es fehlt nur die Zielperiode (Wann).',
            'Es fehlen Quantifizierung, Segment, Termin, Markt und Verantwortung — das Ziel ist nicht operationalisiert.',
            'Es fehlt die SWOT-Analyse als Grundlage.',
            'Es fehlt die Unterscheidung zwischen ökonomisch und vorökonomisch.'
          ],
          answer: 1,
          tips: ['Prüfen Sie das Ziel anhand der 6 W.','Nur "Was" (Umsatz steigern) ist definiert.','Ein operationalisiertes Ziel braucht alle 6 W.'],
          reveal: ['Antwort B ist korrekt: Es fehlen 5 von 6 W.','Das Ziel enthält nur das «Was» (Umsatz steigern) — alles andere ist offen.','Warum nicht A? Es fehlt nicht nur der Termin, sondern auch Quantifizierung, Segment, Markt und Verantwortung.','Warum nicht C? Eine SWOT-Analyse ist Schritt 1 des Konzeptrasters, hat aber nichts mit der Zielformulierung selbst zu tun.','Warum nicht D? Die Unterscheidung ökonomisch/vorökonomisch beschreibt die Zielart, nicht die Qualität der Formulierung.','Merke: Ein vages Ziel ist das häufigste Problem in der Praxis — die Operationalisierung macht es kontrollierbar.']
        }
      ],
      learningData: {
        title: 'Verkaufsplanungskonzept und Verkaufsziele',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die sechs Schritte bei der Erstellung eines Verkaufsplanungskonzepts aufzählen.',
              'erklären, wie Zielgrössen im Verkauf erarbeitet werden.',
              'die verschiedenen Arten von Verkaufszielen unterscheiden.',
              'darstellen, wie Verkaufsziele operationalisiert werden.'
            ]
          },
          {
            type: 'concept',
            title: 'Was ist ein Konzept?',
            content: 'Ein Konzept ist ein umfassender gedanklicher Entwurf, der die Grundlage der nötigen Handlungen zur Zielerreichung darstellt und die Strategie zur Zielerreichung in einem schlüssigen Plan zusammenfasst. Der Konzeptraster ist ein professionelles Instrument für einen pragmatischen Ansatz zur Lösung von komplexen Aufgabenstellungen, die eine systematische und nachvollziehbare Planung nötig macht.',
            highlight: 'Ein Konzept ist die Grundlage der nötigen Handlungen zur Zielerreichung – es gibt jeder Lösung und Präsentation Struktur.'
          },
          { type: 'svg', title: 'Das 6-Schritte Konzeptraster (Abb. 1-2)', svg: '<svg viewBox="0 0 700 100" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="vk-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><rect x="0" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="50" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Analyse</text><text x="50" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Ausgangslage</text><line x1="100" y1="50" x2="118" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="120" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="170" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Ziele</text><text x="170" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Definition</text><line x1="220" y1="50" x2="238" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="240" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="290" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Strategien</text><text x="290" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Weg zum Ziel</text><line x1="340" y1="50" x2="358" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="360" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="410" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Massnahmen</text><text x="410" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Aktionspl\u00e4ne</text><line x1="460" y1="50" x2="478" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="480" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="530" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Budget</text><text x="530" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Kosten</text><line x1="580" y1="50" x2="598" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="600" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="650" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">6. Kontrolle</text><text x="650" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Kontrollpl\u00e4ne</text></svg>' },
          {
            type: 'table',
            title: 'Das Konzeptraster im Detail',
            headers: ['Schritt', 'Beschreibung'],
            rows: [
              ['1. Analyse der Ausgangslage', 'Zusammengefasst in einer Analyse der eigenen Stärken und Schwächen, auch der externen Chancen und Risiken (SWOT-Fazit)'],
              ['2. Definition der Ziele', 'Verkaufsziele vorökonomischer (qualitativer) und ökonomischer (quantitativer) Art'],
              ['3. Entwicklung der Strategien', 'Als der Weg zum Ziel, auf dem die obigen Ziele erreicht werden können. 6 Subvariablen: Produktselektion (was), Kundenselektion (wem), Feldgrösse (wo), Kontaktqualität (wie), Kontaktquantität (wie viel), Kontaktperiodizität (wann)'],
              ['4. Erarbeitung der Aktionspläne', 'Alle Einzelaktionen und/oder -massnahmen, um auf dem definierten Weg die Ziele zu erreichen. Diese verursachen pro Aktion/Massnahme Kosten und sind an einen Endtermin sowie an eine verantwortliche Person gebunden.'],
              ['5. Zusammenstellung des Budgets', 'Kosten der Einzelaktionen werden zu einem Gesamtbudget zusammengestellt.'],
              ['6. Erarbeitung der Kontrollpläne', 'Kontrollpläne zur Überprüfung der Zielerreichung.']
            ]
          },
          {
            type: 'concept',
            title: '1.2 Aufbau eines Verkaufsplanungskonzepts',
            content: 'Das Verkaufsplanungskonzept ist beim Aufbau des Vertriebs für eine Marktleistung oder einer Verkaufsabteilung die Grundlage für die Planung des Vorgehens in strategischer und operativer Hinsicht. Innerhalb des Verkaufsplanungskonzepts bilden die strategische Planung und die operative Umsetzung die Hauptschritte für den erfolgreichen Vertrieb der Marktleistung.',
            highlight: 'Das Verkaufsplanungskonzept ist die Grundlage für die strategische und operative Planung des Vertriebs.'
          },
          {
            type: 'svg',
            title: 'Verkaufsplanungskonzept im Detail (Abb. 1-3)',
            svg: '<svg viewBox="0 0 750 820" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="375" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Verkaufsplanungskonzept im Detail</text><rect x="20" y="45" width="710" height="70" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="67" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Situationsanalyse (Ist-Situation als Grundlage jedes Konzepts)</text><rect x="40" y="80" width="320" height="25" rx="4" fill="#fff" stroke="#4f46e5" stroke-width="1"/><text x="200" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Interne Analyse (Stärken und Schwächen)</text><rect x="390" y="80" width="320" height="25" rx="4" fill="#fff" stroke="#4f46e5" stroke-width="1"/><text x="550" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Externe Analyse (Chancen und Risiken)</text><line x1="375" y1="115" x2="375" y2="135" stroke="#4f46e5" stroke-width="2"/><polygon points="375,142 370,135 380,135" fill="#4f46e5"/><rect x="20" y="145" width="710" height="70" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="165" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Verkaufsziele (Definition, Hierarchieebene «Bereich»)</text><rect x="40" y="178" width="320" height="25" rx="4" fill="#fff" stroke="#4f46e5" stroke-width="1"/><text x="200" y="195" text-anchor="middle" fill="#3730a3" font-size="9">Vorökonomische / qualitative Verkaufsziele</text><rect x="390" y="178" width="320" height="25" rx="4" fill="#fff" stroke="#4f46e5" stroke-width="1"/><text x="550" y="195" text-anchor="middle" fill="#3730a3" font-size="9">Ökonomische / quantitative Verkaufsziele</text><line x1="375" y1="215" x2="375" y2="235" stroke="#4f46e5" stroke-width="2"/><polygon points="375,242 370,235 380,235" fill="#4f46e5"/><rect x="20" y="245" width="710" height="120" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="268" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Verkaufsstrategie – die 6 Subvariablen</text><rect x="40" y="280" width="160" height="35" rx="4" fill="#4f46e5"/><text x="120" y="293" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">① Produktselektion</text><text x="120" y="306" text-anchor="middle" fill="#e0e7ff" font-size="7">Was</text><rect x="220" y="280" width="160" height="35" rx="4" fill="#4f46e5"/><text x="300" y="293" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">② Kundenselektion</text><text x="300" y="306" text-anchor="middle" fill="#e0e7ff" font-size="7">Wem</text><rect x="400" y="280" width="160" height="35" rx="4" fill="#4f46e5"/><text x="480" y="293" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">③ Feldgrösse</text><text x="480" y="306" text-anchor="middle" fill="#e0e7ff" font-size="7">Wo</text><rect x="40" y="325" width="160" height="35" rx="4" fill="#6366f1"/><text x="120" y="338" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">④ Kontaktqualität</text><text x="120" y="351" text-anchor="middle" fill="#e0e7ff" font-size="7">Wie</text><rect x="220" y="325" width="160" height="35" rx="4" fill="#6366f1"/><text x="300" y="338" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">⑤ Kontaktquantität</text><text x="300" y="351" text-anchor="middle" fill="#e0e7ff" font-size="7">Wie viel</text><rect x="400" y="325" width="160" height="35" rx="4" fill="#6366f1"/><text x="480" y="338" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">⑥ Kontaktperiodizität</text><text x="480" y="351" text-anchor="middle" fill="#e0e7ff" font-size="7">Wann</text><line x1="375" y1="365" x2="375" y2="385" stroke="#4f46e5" stroke-width="2"/><polygon points="375,392 370,385 380,385" fill="#4f46e5"/><rect x="20" y="395" width="710" height="140" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="418" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Verkaufspläne (Planung der Ressourcen und der Infrastruktur)</text><rect x="40" y="430" width="320" height="95" rx="6" fill="#4f46e5"/><text x="200" y="450" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Primäre Verkaufspläne</text><text x="200" y="465" text-anchor="middle" fill="#e0e7ff" font-size="8">(Ressourcenplanung)</text><text x="60" y="485" fill="#e0e7ff" font-size="8">• Umsatzpläne</text><text x="60" y="498" fill="#e0e7ff" font-size="8">• Einsatz-/Gliederungspläne</text><text x="60" y="511" fill="#e0e7ff" font-size="8">• Reisepläne</text><rect x="390" y="430" width="320" height="95" rx="6" fill="#6366f1"/><text x="550" y="450" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Sekundäre Verkaufspläne</text><text x="550" y="465" text-anchor="middle" fill="#e0e7ff" font-size="8">(Infrastrukturplanung)</text><text x="410" y="485" fill="#e0e7ff" font-size="8">• Organisationspläne</text><text x="410" y="498" fill="#e0e7ff" font-size="8">• Personalpläne</text><text x="410" y="511" fill="#e0e7ff" font-size="8">• Verkaufshilfenpläne</text><line x1="375" y1="535" x2="375" y2="555" stroke="#4f46e5" stroke-width="2"/><polygon points="375,562 370,555 380,555" fill="#4f46e5"/><rect x="150" y="565" width="450" height="40" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="590" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Verkaufsbudget (Planung der Kosten)</text><line x1="375" y1="605" x2="375" y2="625" stroke="#4f46e5" stroke-width="2"/><polygon points="375,632 370,625 380,625" fill="#4f46e5"/><rect x="150" y="635" width="450" height="40" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="375" y="660" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Verkaufskontrolle (Kontrollplanung)</text></svg>'
          },
          {
            type: 'concept',
            title: '1.3 Verkaufsziele',
            content: 'Nach der ausführlichen Situationsanalyse werden die Verkaufsziele definiert. Die Verkaufsziele sind verbindliche Kennzahlen oder Aussagen von Zuständen, die mithilfe der Verkaufsstrategien erreicht werden sollen. Sie werden von der Unternehmensvision, den Unternehmens- und den Marketingzielen abgeleitet und legen den Soll-Zustand fest, den der Bereich Verkauf kurz-, mittel- oder langfristig erreichen soll.',
            highlight: 'Verkaufsziele sind verbindliche Kennzahlen, die mithilfe der Verkaufsstrategien erreicht werden sollen.'
          },
          {
            type: 'svg',
            title: 'Zielpyramide mit Zielhierarchien (Abb. 1-4)',
            svg: '<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="300" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Zielpyramide – Von der Vision zum Verkaufsziel</text><polygon points="300,50 80,300 520,300" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><rect x="240" y="65" width="120" height="35" rx="6" fill="#312e81"/><text x="300" y="80" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Vision / Leitbild</text><text x="300" y="93" text-anchor="middle" fill="#c7d2fe" font-size="7">Langfristige Ausrichtung</text><rect x="210" y="115" width="180" height="35" rx="6" fill="#4f46e5"/><text x="300" y="130" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Unternehmensziele</text><text x="300" y="143" text-anchor="middle" fill="#e0e7ff" font-size="7">Umsatz, Gewinn, Marktanteil</text><rect x="175" y="165" width="250" height="35" rx="6" fill="#6366f1"/><text x="300" y="180" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Marketingziele</text><text x="300" y="193" text-anchor="middle" fill="#e0e7ff" font-size="7">Marktposition, Kundenzufriedenheit</text><rect x="140" y="215" width="320" height="35" rx="6" fill="#818cf8"/><text x="300" y="230" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Verkaufsziele</text><text x="300" y="243" text-anchor="middle" fill="#e0e7ff" font-size="7">Absatz, Umsatz, DB, Kundenbesuche</text><rect x="105" y="265" width="390" height="30" rx="6" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1"/><text x="300" y="285" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">Massnahmenziele (operativ)</text><text x="560" y="90" fill="#4f46e5" font-size="9" font-weight="bold">Strategisch</text><text x="560" y="250" fill="#818cf8" font-size="9" font-weight="bold">Operativ</text><line x1="545" y1="95" x2="545" y2="240" stroke="#4f46e5" stroke-width="1.5" marker-end="url(#vk-arr2)"/><defs><marker id="vk-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><text x="300" y="330" text-anchor="middle" fill="#78716c" font-size="10">Ziele werden von oben nach unten abgeleitet (Top-down)</text></svg>'
          },
          {
            type: 'concept',
            title: 'Zielebenen und Zielhierarchie',
            content: 'In der Zielpyramide nimmt die Anzahl der Einzelziele mit zunehmendem Konkretisierungsgrad zu. Alle Ziele sind abhängig von den Unternehmenszielen. Die Summe der Einzelziele ergibt das Unternehmensziel. Die Unternehmensziele werden heruntergebrochen auf Bereichsebene (Verkaufsziele, Marketingziele, Produktionsziele, Finanzziele), dann auf Abteilungsebene (Verkaufsziele SGE1, SGE2, SGE3) und schliesslich auf Mitarbeiterebene.',
            highlight: 'Zielebenen: Alle Ziele sind abhängig von den Unternehmenszielen. Die Summe der Einzelziele ergibt das Unternehmensziel.'
          },
          {
            type: 'table',
            title: 'Arten von Verkaufszielen',
            headers: ['Zielart', 'Eigenschaft', 'Planungszeitraum', 'Beispiele'],
            rows: [
              ['Strategische Ziele', 'Langfristig, grundsätzliche Verhaltensweisen', '3 bis 5 Jahre', 'Wachstumsziele, Marktanteile, Kapitalrentabilität, Soll-Image'],
              ['Operative Ziele', 'Mittelfristig, konkrete Zielsetzungen', '2 bis 3 Jahre', 'Abgeleitet von strategischen Zielen, Budgets, Kosten, Erträge'],
              ['Taktische Ziele', 'Kurzfristig, Ausführungs- und Umsetzungsebene', 'Bis 1 Jahr', 'Konkrete Massnahmen und Aktionspläne']
            ]
          },
          {
            type: 'table',
            title: 'Vorökonomische vs. Ökonomische Verkaufsziele (Abb. 1-7)',
            headers: ['Vorökonomische (qualitative) Ziele', 'Ökonomische (quantitative) Ziele'],
            rows: [
              ['Image', 'Umsatz'],
              ['Wissen', 'Absatz'],
              ['Einstellung', 'Gewinn'],
              ['Verhalten', 'Marktanteil'],
              ['Bekanntheitsgrad', 'Deckungsbeitrag'],
              ['Kontaktqualität', 'Kosten'],
              ['Beratungs- und Servicequalität', 'ROI (Return on Investment)'],
              ['Kundenzufriedenheit', 'Distributionsgrad'],
              ['Kundenloyalität', 'Anzahl Neukunden'],
              ['Kundenempfehlungsrate', 'Anzahl zurückgewonnene Kunden'],
              ['Kundenbindungsrate', 'Reklamationsraten'],
              ['Mitarbeiterzufriedenheit', 'Kundenfluktuationsraten'],
              ['Mitarbeiterloyalität', 'Gefahrene Kilometer']
            ]
          },
          {
            type: 'concept',
            title: 'Vorökonomische Ziele – Voraussetzung für den ökonomischen Erfolg',
            content: 'Meist sind die vorökonomischen Verkaufsziele die Voraussetzung für die Erreichung der ökonomischen Ziele. Gerade nicht nur bei Dienstleistungen gilt der Zusammenhang: Bekanntheitsgrad führt zu Image, Image führt zu Produkt-/Beratungs- und Servicequalität, dies führt zu Kundenzufriedenheit, und schliesslich zum ökonomischen Erfolg in Form von Umsatz, Absatz und Gewinn.',
            highlight: 'Die vorökonomischen Ziele sind die Voraussetzung für die Erreichung der ökonomischen Ziele.'
          },
          {
            type: 'concept',
            title: '1.3.3 Operationalisierung von Verkaufszielen',
            content: 'Zielsetzungen müssen fair und erreichbar, dazu mess- und realisierbar sein. Damit sie beurteilt und kontrolliert werden können, müssen Ziele so konkret wie möglich definiert werden. Diese Konkretisierung wird auch Operationalisierung genannt. In der Praxis hat sich für eine korrekte und unmissverständliche Definition von Zielen ein Raster mit 6 W bewährt. Ziele müssen gemäss der SMART-Formel spezifisch, messbar, attraktiv, realistisch und terminiert formuliert oder operationalisiert sein.',
            highlight: 'Die Operationalisierung: Ziele müssen SMART sein – spezifisch, messbar, attraktiv, realistisch und terminiert.'
          },
          {
            type: 'table',
            title: 'Das 6-W-Raster zur Operationalisierung (Abb. 1-8)',
            headers: ['W-Frage', 'Bedeutung', 'Erklärung'],
            rows: [
              ['Was', 'Verkaufsziel / Zielinhalt', 'Welches Verkaufsziel soll erreicht werden?'],
              ['Wie viel', 'Zielquantifizierung', 'Wie lautet die Quantifizierung, der zu erreichende Wert?'],
              ['Wem', 'Zielsegment', 'Welches Marktsegment und daraus welche Zielgruppe soll erreicht werden?'],
              ['Wann', 'Zielperiode', 'Bis wann soll das Ziel erreicht werden? (Terminierung)'],
              ['Wo', 'Zielmarkt', 'Wie ist der geografische Markt definiert?'],
              ['Wer', 'Zielverantwortung', 'Wer ist für die Zielerreichung verantwortlich?']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Das Konzeptraster hat 6 Schritte: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle (Merkhilfe: A-Z-S-M-B-K).',
              'Das Verkaufsplanungskonzept bildet die Grundlage für strategische und operative Verkaufsplanung.',
              'Verkaufsziele werden von Unternehmens- und Marketingzielen abgeleitet (Zielpyramide).',
              'Es gibt 3 zeitliche Zielarten: strategisch (3–5 J.), operativ (2–3 J.), taktisch (bis 1 J.).',
              'Verkaufsziele sind entweder vorökonomisch (qualitativ) oder ökonomisch (quantitativ).',
              'Vorökonomische Ziele sind die Voraussetzung für ökonomischen Erfolg.',
              'Ziele werden mit dem 6-W-Raster operationalisiert: Was, Wie viel, Wem, Wann, Wo, Wer.',
              'Ziele müssen SMART formuliert sein: spezifisch, messbar, attraktiv, realistisch, terminiert.',
              'An Prüfungen: Ziele in Tabellenform operationalisieren – so sehen Experten, dass die Operationalisierung vollständig ist.'
            ]
          },
          {
            type: 'methodenbox',
            title: 'Methodenbox: Verkaufsplanungskonzept',
            items: [
              {q: '1. Wann und wofür setzen Sie diese Methode ein?', a: 'Ein Verkaufsplanungskonzept wird erstellt, wenn ein Unternehmen eine strukturierte und zielgerichtete Verkaufsstrategie für die Bearbeitung eines Geschäftsfelds erarbeiten will.'},
              {q: '2. Was erhalten Sie als Ergebnis?', a: 'Das Ergebnis ist eine umfassende und gut durchdachte Strategie, die als Leitfaden für die Verkaufsaktivitäten zur Bearbeitung eines oder mehrerer Geschäftsfelder dient. Es enthält konkrete Massnahmen und Pläne mit Kosten und Terminen, um die angestrebten Unternehmens- und Verkaufsziele zu erreichen.'},
              {q: '3. Was beachten Sie beim Erstellen?', a: 'Die Bearbeitung erfordert eine sorgfältige Analyse der Ausgangslage, die Definition von messbaren Zielen und darauf basierend die Entwicklung einer klaren Verkaufsstrategie (6 Subvariablen des Verkaufs). Anschliessend geht es um eine realistische Ressourcen- und Infrastruktur- sowie um die Personal-, Motivations- und Verkaufshilfsmittelplanung.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Der <strong>Verkaufsplanungskonzept</strong>-Raster ist grundsätzlich nach sechs Schritten aufgebaut: 1. Analyse der Ausgangslage (Marktanalyse), 2. Definition der Verkaufsziele, 3. Strategie entwickeln (mit 6 Subvariablen), 4. Erarbeitung der Verkaufspläne, 5. Budget zusammenstellen, 6. Kontrolle.',
              '<strong>Verkaufsziele</strong> sind verbindliche Kennzahlen oder Aussagen von Zuständen, die mithilfe der Verkaufsstrategien erreicht werden sollen. Sie werden von den Unternehmens- und den Marketingzielen abgeleitet.',
              'Im Verkauf gibt es folgende <strong>Verkaufszielarten</strong>: Langfristige, strategische (3–5 Jahre), mittelfristige, operative (2–3 Jahre) und taktische, kurzfristige (bis 1 Jahr) Ziele. Zudem: ökonomische (quantitative) und vorökonomische (qualitative) Ziele.',
              'Verkaufsziele müssen konkretisiert oder formuliert werden. Diese Umsetzung wird auch <strong>Operationalisierung der Ziele</strong> genannt. Zur Formulierung hat sich ein <strong>Raster mit 6 W</strong> bewährt: Was, Wie viel, Wem, Wann, Wo, Wer.',
              '<strong>Vorökonomische Ziele</strong> haben qualitativen Charakter. Die Auswertung und Überprüfung der Zielerreichung erfolgt mittels Untersuchungen, Umfragen, Tests oder Beobachtungen.',
              '<strong>Ökonomische Ziele</strong> haben quantitativen Charakter und sind online oder mittels Statistiken praktisch jederzeit und kurzfristig auswertbar, messbar und kontrollierbar.',
              '<strong>Beide Zielarten sind quantifizierbar und somit mess- und kontrollierbar.</strong>'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Customer Relationship Management (CRM)', def: 'Strategie zur systematischen Gestaltung der Beziehungen und Interaktionen mit bestehenden und potenziellen Kunden. Ein CRM-System ist ein Tool für Kontaktmanagement, Vertriebsmanagement und Produktivitätsverbesserung.'},
              {term: 'Konzeptraster', def: 'Allgemeingültiges 6-Schritte-Raster zur strukturierten Lösung komplexer Aufgabenstellungen (auch «Ankerkonzept» genannt).'},
              {term: 'Operationalisierung', def: 'Konkretisierung und Definition von Zielen, damit sie messbar und überprüfbar werden. Bewährt hat sich das 6-W-Raster.'},
              {term: 'Verkaufsplanungskonzept', def: 'Umfassender Entwurf mit 6 Schritten für die strategische und operative Verkaufsplanung.'},
              {term: 'Verkaufsziele', def: 'Verbindliche Kennzahlen oder Aussagen, die mithilfe der Verkaufsstrategien erreicht werden sollen.'},
              {term: 'Verkaufszielpyramide', def: 'Hierarchische Einordnung: Unternehmensziele > Bereichsziele > Abteilungsziele > Mitarbeiterziele.'},
              {term: 'Zielhierarchien', def: 'Die verschiedenen Ebenen der Ziele von der GL-Unternehmensebene bis zur Mitarbeiterebene.'},
              {term: 'Strategische Verkaufsziele', def: 'Langfristige Ziele (3–5 Jahre), abgeleitet von Unternehmens- und Marketingzielen.'},
              {term: 'Operative Verkaufsziele', def: 'Mittelfristige Ziele (2–3 Jahre), abgeleitet von strategischen Zielen.'},
              {term: 'Taktische Verkaufsziele', def: 'Kurzfristige Ziele (bis 1 Jahr), auf der Ausführungs- und Umsetzungsebene.'},
              {term: 'Qualitative Verkaufsziele', def: 'Vorökonomische Ziele wie Image, Zufriedenheit, Bekanntheit – messbar durch Umfragen und Beobachtungen.'},
              {term: 'Quantitative Verkaufsziele', def: 'Ökonomische Ziele wie Umsatz, Absatz, Gewinn – messbar durch Statistiken und Buchhaltungssysteme.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch2',
      num: 'Kapitel 2',
      title: 'Verkaufsstrategien',
      pageStart: 29, pageEnd: 48,
      exercises: [
        {
          id: 15,
          type: 'text',
          q: 'Erklären Sie den Unterschied zwischen «gebundenen Kunden» und «verbundenen Kunden» und nennen Sie je ein Beispiel.',
          keywords: ['vertraglich','technologisch','gebunden','nespresso','drucker','emotional','zufrieden','loyal','verbunden','stammkunden','fans'],
          solution: 'Gebundene Kunden sind vertraglich oder technologisch an das Unternehmen gebunden (z.B. Nespresso, Drucker). Verbundene Kunden sind emotional verbunden, zufrieden mit den Marktleistungen und loyal (z.B. Stammkunden, Fans von Sportvereinen).',
          questions: [
            {q: 'Gebundene Kunden:', keywords: ['vertraglich','technologisch','gebunden','nespresso','drucker'], minKeywords: 2},
            {q: 'Verbundene Kunden:', keywords: ['emotional','zufrieden','loyal','verbunden','stammkunden','fans'], minKeywords: 2}
          ],
          tips: ['Gebunden = durch Vertrag oder Technologie.','Verbunden = durch Zufriedenheit und Loyalität.','Beispiel gebunden: Nespresso-Kapseln, Drucker-Patronen.'],
          reveal: ['Gebunden = vertraglich oder technologisch ans Unternehmen gekettet (z.B. Nespresso-Kapselsystem, Drucker mit proprietären Patronen).','Verbunden = emotional loyal, freiwillig beim Unternehmen (z.B. Stammkunden eines Restaurants, Fans eines Sportvereins).','Warum die Unterscheidung? Gebundene Kunden bleiben, weil sie müssen — sie wechseln, sobald eine Alternative erscheint. Verbundene Kunden bleiben, weil sie wollen — sie sind wertvoller, weil ihre Loyalität belastbarer ist.','Prüfungstipp: Wenn im Aufgabentext «Lock-in» oder «Wechselkosten» steht → gebunden. Wenn «Zufriedenheit» oder «Loyalität» → verbunden.']
        },
        {
          id: 16,
          type: 'text',
          q: 'Lohnt es sich Ihrer Meinung nach, verlorene Kunden zurückzugewinnen? Begründen Sie Ihre Meinung in mindestens drei Sätzen.',
          keywords: ['kostengünstiger','rückgewinnung','erfahrung','kennen','neukunden','akquisition','individuell','zurückgewinnen'],
          solution: 'Es lohnt sich, denn die Rückgewinnung ist kostengünstiger als die Akquisition von Neukunden. Verlorene Kunden kennen das Unternehmen bereits und haben Erfahrung. Mit individuellen Massnahmen können sie oft zurückgewonnen werden.',
          questions: [
            {q: 'Begründung:', keywords: ['kostengünstiger','rückgewinnung','erfahrung','kennen','neukunden','akquisition','individuell','zurückgewinnen'], minKeywords: 2}
          ],
          tips: ['Vergleichen Sie die Kosten: Rückgewinnung vs. Neukundenakquisition.','Verlorene Kunden kennen das Unternehmen bereits.','Denken Sie auch an den Fall, dass es nicht gelingt.'],
          reveal: ['Ja, es lohnt sich — Rückgewinnung ist 5–7× günstiger als Neukundenakquisition.','Warum? Der verlorene Kunde kennt das Unternehmen bereits, der Aufbau von Vertrauen ist teilweise schon geschehen.','Selbst wenn die Rückgewinnung nicht gelingt, zeigt die Kontaktaufnahme Wertschätzung — das kann Negativmund-zu-Mund-Propaganda verhindern.','Häufiger Denkfehler: «Der Kunde ist weg, also lohnt es sich nicht mehr.» Falsch — ein individuelles Angebot oder eine persönliche Entschuldigung kostet wenig und kann viel bewirken.']
        },
        {
          id: 17,
          type: 'text',
          q: 'Worin unterscheiden sich strategische Geschäftsfelder und strategische Geschäftseinheiten? Nennen Sie zwei Unterschiede und geben Sie ein Beispiel für jeden Begriff.',
          keywords: ['markt','aussen','innen','organisatorisch','kunden','angebot','produktion'],
          solution: 'Strategisches Geschäftsfeld: eigenständiger Markt, definiert durch Angebot, Kunden und geografischen Markt. Von aussen, vom Markt her definiert. Strategische Geschäftseinheit: organisatorische Einheit im Unternehmen. Wird von innen, vom Unternehmen her definiert.',
          questions: [
            {q: 'Merkmale und Beispiele:', keywords: ['markt','aussen','innen','organisatorisch','kunden','angebot','produktion'], minKeywords: 3}
          ],
          tips: ['Geschäftsfeld = Marktperspektive (von aussen).','Geschäftseinheit = organisatorische Einheit im Unternehmen (von innen).','Ein SGF wird von aussen durch den Markt definiert.'],
          reveal: ['SGF (Strategisches Geschäftsfeld): Von aussen, vom Markt her definiert — beschreibt einen eigenständigen Teilmarkt (Angebot + Kunden + Geografie).','SGE (Strategische Geschäftseinheit): Von innen, vom Unternehmen her definiert — ist eine organisatorische Einheit, die ein SGF bearbeitet.','Warum die Unterscheidung? Ein SGF existiert unabhängig vom Unternehmen (es ist ein Markt). Eine SGE ist die interne Antwort darauf. Beispiel: Das SGF «Büromöbel für Geschäftskunden in der Deutschschweiz» existiert als Markt — die SGE «Abteilung Office Solutions» bearbeitet diesen Markt.','Prüfungstipp: Frage nach «aussen» oder «innen»? SGF = Marktperspektive, SGE = Organisationsperspektive.']
        },
        {
          id: 18,
          type: 'match',
          q: 'Ordnen Sie die Segmentationskriterien der Kundengruppe zu (B2C und/oder B2B).',
          pairs: [
            {l: 'Geografische Kriterien', r: 'Beide (B2C und B2B)'},
            {l: 'Soziodemografische Kriterien', r: 'B2C'},
            {l: 'Organisatorische Kriterien', r: 'B2B'},
            {l: 'Ökonomische Kriterien', r: 'B2B'},
            {l: 'Psychografische Kriterien', r: 'B2C'},
            {l: 'Informations- und Kaufverhalten', r: 'Beide (B2C und B2B)'},
            {l: 'Entscheidungsbezogene Kriterien', r: 'B2B'},
            {l: 'Unternehmenskultur', r: 'B2B'}
          ],
          options: ['B2C','B2B','Beide (B2C und B2B)'],
          tips: ['Geografische Kriterien gelten für beide Kundengruppen.','Soziodemografisch und psychografisch sind typisch B2C.','Organisatorische Kriterien und Unternehmenskultur sind B2B-spezifisch.'],
          reveal: ['Beide: Geografische Kriterien und Informations-/Kaufverhalten — diese gelten universell, egal ob Privatperson oder Firma.','Nur B2C: Soziodemografisch (Alter, Geschlecht, Einkommen) und Psychografisch (Lebensstil, Werte) — beschreiben Einzelpersonen, nicht Firmen.','Nur B2B: Organisatorisch, Ökonomisch, Entscheidungsbezogen, Unternehmenskultur — diese Kriterien gibt es nur bei Unternehmen.','Warum wichtig? Die richtige Segmentierung bestimmt die Verkaufsstrategie. B2B-Verkauf an ein KMU braucht andere Kriterien als B2C-Verkauf an Endkonsumenten.']
        },
        {
          id: 19,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufsstrategien',
          statements: [
            {s: 'Ein strategisches Geschäftsfeld wird von innen, vom Unternehmen her definiert.', c: false, feedback: 'Ein SGF wird von aussen, vom Markt her definiert.'},
            {s: 'Die Kundenselektion ist eine Subvariable der Verkaufsplanungsstrategie.', c: true, feedback: 'Produktselektion, Kundenselektion und Feldgrösse sind die drei Subvariablen.'},
            {s: 'Bei der ABC-Analyse werden Kunden nach ihrer Umsatzbedeutung eingeteilt.', c: true, feedback: 'A-Kunden = höchster Umsatz, C-Kunden = niedrigster.'},
            {s: 'Verbundene Kunden sind technologisch an das Unternehmen gebunden.', c: false, feedback: 'Verbundene Kunden sind emotional verbunden. Gebundene Kunden sind technologisch/vertraglich gebunden.'}
          ],
          tips: ['SGF = Marktperspektive (aussen).','ABC-Analyse teilt nach Umsatz ein.','Verbunden = emotional, Gebunden = vertraglich/technologisch.'],
          reveal: ['Aussage 1: Falsch — SGF wird von aussen, vom Markt her definiert. Verwechslungsgefahr mit SGE (von innen).','Aussage 2: Richtig — Produktselektion (Was), Kundenselektion (Wem) und Feldgrösse (Wo) definieren zusammen das strategische Geschäftsfeld.','Aussage 3: Richtig — ABC-Analyse: A-Kunden ≈ 20% der Kunden, aber ~80% des Umsatzes (Pareto-Prinzip).','Aussage 4: Falsch — Verbunden = emotional loyal (freiwillig). Gebunden = vertraglich/technologisch (gezwungen). Ein klassischer Prüfungs-Stolperstein.']
        },
        {
          id: 20,
          type: 'mc',
          q: 'Welche drei Subvariablen gehören zur Verkaufsplanungsstrategie?',
          options: [
            'Produktselektion, Preisgestaltung, Werbung',
            'Produktselektion, Kundenselektion, Feldgrösse',
            'Marktanalyse, Kundenselektion, Budgetplanung',
            'Feldgrösse, Kontaktqualität, Kontaktquantität'
          ],
          answer: 1,
          tips: ['Die Subvariablen betreffen Was, Wen und Wo.','Produktselektion = Was verkaufen wir?','Kontaktqualität und -quantität gehören zur Kontaktstrategie.'],
          reveal: ['Richtig: B — Produktselektion (Was), Kundenselektion (Wem), Feldgrösse (Wo).','Warum nicht A? Preisgestaltung und Werbung gehören zum Marketing-Mix, nicht zur Verkaufsstrategie.','Warum nicht C? Marktanalyse ist Schritt 1 des Konzeptrasters (Analyse), nicht eine Subvariable.','Warum nicht D? Kontaktqualität und -quantität sind zwar Subvariablen 4 und 5, aber es fehlt die Kundenselektion — und zusammen bilden sie nicht das SGF.','Merke: Die ersten 3 Subvariablen (Was, Wem, Wo) definieren das strategische Geschäftsfeld. Die letzten 3 (Wie, Wie viel, Wann) definieren die Kontaktstrategie.']
        },
        {
          id: 21,
          type: 'sort',
          q: 'Ordnen Sie die 6 Verkaufssubvariablen in der richtigen Reihenfolge.',
          items: ['Produktselektion (Was)', 'Kundenselektion (Wem)', 'Feldgrösse (Wo)', 'Kontaktqualität (Wie)', 'Kontaktquantität (Wie viel)', 'Kontaktperiodizität (Wann)'],
          tips: ['Die ersten 3 definieren das strategische Geschäftsfeld.','Die letzten 3 definieren die Kontaktstrategie.','Es beginnt mit dem Produkt und endet mit der Häufigkeit.'],
          reveal: ['Die 6 Subvariablen: 1. Produktselektion, 2. Kundenselektion, 3. Feldgrösse, 4. Kontaktqualität, 5. Kontaktquantität, 6. Kontaktperiodizität.','Warum diese Reihenfolge? Zuerst muss klar sein, WAS verkauft wird (Produkt), dann an WEN (Kunden) und WO (Feld). Erst danach wird definiert, WIE der Kontakt aussieht, WIE OFT und WANN.','Merke: Subvariablen 1–3 = SGF (strategisch), 4–6 = Kontaktstrategie (operativ).']
        },
        {
          id: 22,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zur ABC-Analyse.',
          template: 'A-Kunden machen ca. {0}% des Umsatzes aus und bilden ca. {1}% der Kunden. Die ABC-Analyse basiert auf dem {2}.',
          blanks: ['80','20','Pareto-Prinzip'],
          accept: [['80'],['20'],['Pareto-Prinzip','Pareto Prinzip','Paretoprinzip']],
          tips: ['Die ABC-Analyse folgt der 80/20-Regel.','Wenige Kunden machen den meisten Umsatz.','Das Prinzip wurde von Vilfredo Pareto formuliert.'],
          reveal: ['A-Kunden: ~20% der Kunden, aber ~80% des Umsatzes — sie verdienen die intensivste Betreuung.','Warum das Pareto-Prinzip? Es zeigt, dass die Verteilung fast nie gleichmässig ist. Im Verkauf heisst das: Fokussiere deine Ressourcen auf die wenigen, die den grössten Impact haben.','Häufiger Fehler: C-Kunden werden komplett ignoriert. Aber: C-Kunden von heute können A-Kunden von morgen sein — deshalb nicht vernachlässigen, sondern effizient betreuen.']
        },
        {
          id: 23,
          type: 'check',
          q: 'Welche Aussagen zu Verkaufsstrategien sind korrekt?',
          statements: [
            {s: 'Die Subvariablen 1–3 definieren zusammen das strategische Geschäftsfeld.', c: true},
            {s: 'Die Feldgrösse beschreibt die Anzahl der Verkaufsmitarbeitenden.', c: false},
            {s: 'Die ABC-Analyse hilft bei der Priorisierung von Kunden.', c: true},
            {s: 'Ein SGF wird von innen, vom Unternehmen her definiert.', c: false},
            {s: 'Verbundene Kunden sind emotional an das Unternehmen gebunden.', c: true},
            {s: 'Kundenselektion beantwortet die Frage «Wo?».', c: false}
          ],
          tips: ['Subvariablen 1–3: Was, Wem, Wo = SGF.','Feldgrösse = geografischer Zielmarkt.','Kundenselektion = Wem, nicht Wo.'],
          reveal: ['Korrekt: Subvariablen 1–3 = SGF (Produkt, Kunde, Feld), ABC-Analyse priorisiert Kunden, Verbundene Kunden sind emotional loyal.','Falsch: Feldgrösse ≠ Anzahl MA (= geografischer Markt), SGF ≠ von innen (= von aussen, vom Markt), Kundenselektion = «Wem» (nicht «Wo» — das ist Feldgrösse).','Warum diese Abgrenzung wichtig? An der Prüfung werden SGF/SGE und die W-Zuordnung der Subvariablen gerne als Stolpersteine eingebaut.']
        },
        {
          id: 24,
          type: 'match',
          q: 'Ordnen Sie die Kundentypen der richtigen ABC-Kategorie zu.',
          pairs: [
            {l: 'Grosskunde mit CHF 2 Mio. Jahresumsatz', r: 'A-Kunde'},
            {l: 'Gelegentlicher Käufer mit CHF 5\'000/Jahr', r: 'C-Kunde'},
            {l: 'Regelmässiger Kunde mit CHF 200\'000/Jahr', r: 'B-Kunde'},
            {l: 'Strategischer Partner mit Rahmenvertrag', r: 'A-Kunde'},
            {l: 'Einmalkäufer ohne Wiederholungsauftrag', r: 'C-Kunde'}
          ],
          options: ['A-Kunde','B-Kunde','C-Kunde'],
          tips: ['A-Kunden = höchster Umsatz oder strategische Bedeutung.','B-Kunden = solides Mittelfeld mit Potenzial.','C-Kunden = geringer Umsatz oder unregelmässig.'],
          reveal: ['A-Kunden: Grosskunde (hoher Umsatz) und strategischer Partner (Rahmenvertrag = langfristige Bindung).','B-Kunde: Regelmässig, solider Umsatz, aber nicht dominant.','C-Kunden: Gelegentlicher/Einmal-Käufer mit geringem Umsatz.','Warum ist ein strategischer Partner A-Kunde? Nicht nur der aktuelle Umsatz zählt — auch die strategische Bedeutung (Referenz, Marktzugang, Potenzial) kann einen Kunden zum A-Kunden machen.','Prüfungstipp: Bei der ABC-Zuordnung immer beide Dimensionen prüfen: aktueller Umsatz UND Potenzial/strategische Bedeutung.']
        }
      ],
      learningData: {
        title: 'Verkaufsstrategien',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die sechs Verkaufssubvariablen beschreiben.',
              'das Vorgehen bei der Produktselektion darlegen.',
              'darstellen, worauf es bei der Kundenselektion ankommt.',
              'erläutern, was man unter der Feldgrösse versteht.',
              'Hilfsmittel zur Entscheidungsfindung erklären.'
            ]
          },
          {
            type: 'concept',
            title: 'Die Verkaufsstrategie und ihre 6 Subvariablen',
            content: 'Die Verkaufsstrategie ist ein mittelfristiger Plan, der den groben Weg zur Erreichung der Verkaufsziele umreisst. Sie ist in die strategische Ebene einzuordnen. Bei der Entwicklung der Verkaufsstrategien geht man von sechs Subvariablen aus: 1. Produktselektion (was), 2. Kundenselektion (wem), 3. Feldgrösse (wo), 4. Kontaktqualität (wie), 5. Kontaktquantität (wie viel), 6. Kontaktperiodizität (wann). Die Subvariablen 1–3 definieren zusammen das strategische Geschäftsfeld.',
            highlight: 'Die 6 Verkaufssubvariablen: Produktselektion (was), Kundenselektion (wem), Feldgrösse (wo), Kontaktqualität (wie), Kontaktquantität (wie viel), Kontaktperiodizität (wann).'
          },
          {
            type: 'table',
            title: 'Die 6 Verkaufssubvariablen im Überblick',
            headers: ['Verkaufssubvariable', 'W', 'Kurzbeschreibung'],
            rows: [
              ['1. Produktselektion', 'Was', 'Produkt- und/oder Sortimentsstrategie'],
              ['2. Kundenselektion', 'Wem', 'Zielsegment-/Zielgruppenstrategie'],
              ['3. Feldgrösse', 'Wo', 'Geografischer Zielmarkt'],
              ['4. Kontaktqualität', 'Wie', 'Kontaktform und Gestaltung der Verkaufskontakte'],
              ['5. Kontaktquantität', 'Wie viel', 'Anzahl der Kontakte'],
              ['6. Kontaktperiodizität', 'Wann', 'Regelmässigkeit der Kontakte']
            ]
          },
          {
            type: 'concept',
            title: '2.1 Produktselektion – was',
            content: 'Mit der Produktselektion wird festgelegt, welche Sortimentsteile den Kunden angeboten werden sollen. Die Produktselektion darf nicht mit der Sortimentspolitik verwechselt werden: Die Sortimentspolitik setzt sich mit Tiefe und Breite des zukünftigen Angebots auseinander (Marketingentscheid), während die Produktselektion Schwerpunkte in der vorgegebenen Sortimentspolitik setzt. Die Sortimentsschwerpunkte werden beeinflusst durch: Kunden (Bedürfnisse, Preisniveau, Image), Umwelteinflüsse (Trends, Konjunktur, Technik) und Unternehmensseite (Umsatzpotenzial, Deckungsbeitrag, Profilierung).',
            highlight: 'Produktselektion setzt Schwerpunkte im bestehenden Sortiment – sie ist nicht dasselbe wie die Sortimentspolitik.'
          },
          {
            type: 'concept',
            title: 'SGF vs. SGE',
            content: 'Ein strategisches Geschäftsfeld (SGF) beschreibt die Kombination aus Markt und Produkten, die mit einer einheitlichen Marketing- oder Vertriebsstrategie bearbeitet werden. Es wird von aussen, also vom Markt her definiert durch das Angebot, die Kunden und den geografischen Markt. Eine strategische Geschäftseinheit (SGE) hingegen ist eine organisatorische Einheit im Unternehmen, die von innen definiert wird. Für jedes SGF wird ein separates Verkaufsplanungskonzept benötigt.',
            highlight: 'SGF = von aussen, vom Markt her definiert. SGE = von innen, vom Unternehmen her definiert.'
          },
          {
            type: 'svg',
            title: 'Teilmarktstrategie, Marktsegmentstrategie und Zielmarktstrategie (Abb. 2-1)',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk21g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient><linearGradient id="vk21g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Die drei Bestimmungsgr\u00f6ssen des strategischen Gesch\u00e4ftsfelds</text><rect x="30" y="50" width="250" height="80" rx="8" fill="url(#vk21g1)" stroke="#5c3d1e" stroke-width="1.5"/><text x="155" y="72" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Was</text><text x="155" y="90" text-anchor="middle" fill="#d4c8b8" font-size="10">Teilmarktstrategie:</text><text x="155" y="106" text-anchor="middle" fill="#d4c8b8" font-size="9">Ausgestaltung des Produkts oder</text><text x="155" y="119" text-anchor="middle" fill="#d4c8b8" font-size="9">der Dienstleistung</text><rect x="420" y="50" width="250" height="80" rx="8" fill="url(#vk21g1)" stroke="#5c3d1e" stroke-width="1.5"/><text x="545" y="72" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Wem</text><text x="545" y="90" text-anchor="middle" fill="#d4c8b8" font-size="10">Marktsegmentstrategie:</text><text x="545" y="106" text-anchor="middle" fill="#d4c8b8" font-size="9">Privat-, Firmenkunden (Klein-,</text><text x="545" y="119" text-anchor="middle" fill="#d4c8b8" font-size="9">Mittel- und Grossunternehmen)</text><line x1="280" y1="90" x2="320" y2="190" stroke="#8b6a3e" stroke-width="2"/><line x1="420" y1="90" x2="380" y2="190" stroke="#8b6a3e" stroke-width="2"/><circle cx="350" cy="200" r="45" fill="#f5f0eb" stroke="#5c3d1e" stroke-width="2"/><text x="350" y="205" text-anchor="middle" fill="#5c3d1e" font-size="13" font-weight="bold">SGF</text><line x1="350" y1="245" x2="350" y2="270" stroke="#8b6a3e" stroke-width="2"/><rect x="200" y="270" width="300" height="80" rx="8" fill="url(#vk21g2)" stroke="#5c3d1e" stroke-width="1.5"/><text x="350" y="295" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Wo</text><text x="350" y="313" text-anchor="middle" fill="#d4c8b8" font-size="10">Zielmarktstrategie:</text><text x="350" y="330" text-anchor="middle" fill="#d4c8b8" font-size="9">Ausrichtung lokal, regional,</text><text x="350" y="343" text-anchor="middle" fill="#d4c8b8" font-size="9">national, international, global</text><text x="350" y="375" text-anchor="middle" fill="#78716c" font-size="10">Die drei Subvariablen definieren zusammen das strategische Gesch\u00e4ftsfeld (SGF)</text></svg>'
          },
          {
            type: 'svg',
            title: 'Abgrenzungsdimensionen des strategischen Gesch\u00e4ftsfelds (Abb. 2-2)',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk22g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Abgrenzungsdimensionen des strategischen Gesch\u00e4ftsfelds</text><line x1="180" y1="350" x2="180" y2="60" stroke="#5c3d1e" stroke-width="2"/><line x1="180" y1="350" x2="520" y2="350" stroke="#5c3d1e" stroke-width="2"/><line x1="180" y1="350" x2="100" y2="400" stroke="#5c3d1e" stroke-width="2"/><text x="100" y="55" fill="#5c3d1e" font-size="11" font-weight="bold">Abgrenzung des</text><text x="100" y="70" fill="#5c3d1e" font-size="11" font-weight="bold">Leistungsspektrums</text><text x="165" y="110" fill="#5c3d1e" font-size="9" text-anchor="end">Generalist</text><text x="165" y="280" fill="#5c3d1e" font-size="9" text-anchor="end">Spezialist</text><rect x="200" y="90" width="180" height="220" rx="4" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5" opacity="0.6"/><rect x="220" y="100" width="140" height="190" rx="4" fill="url(#vk22g1)" opacity="0.3"/><rect x="240" y="110" width="100" height="160" rx="4" fill="url(#vk22g1)" opacity="0.4"/><rect x="260" y="120" width="60" height="130" rx="4" fill="url(#vk22g1)" opacity="0.5"/><text x="530" y="345" fill="#5c3d1e" font-size="11" font-weight="bold">Regionale</text><text x="530" y="360" fill="#5c3d1e" font-size="11" font-weight="bold">Gebietsabgrenzung</text><text x="240" y="370" fill="#5c3d1e" font-size="9">Lokal</text><text x="300" y="370" fill="#5c3d1e" font-size="9">Regional</text><text x="370" y="370" fill="#5c3d1e" font-size="9">National</text><text x="440" y="370" fill="#5c3d1e" font-size="9">Global</text><text x="200" y="413" fill="#5c3d1e" font-size="11" font-weight="bold">Abgrenzung Kundengruppe</text><text x="107" y="395" fill="#5c3d1e" font-size="8" transform="rotate(-45,107,395)">Grosse Firmen</text><text x="120" y="395" fill="#5c3d1e" font-size="8" transform="rotate(-45,120,395)">Mittlere Unt.</text><text x="133" y="395" fill="#5c3d1e" font-size="8" transform="rotate(-45,133,395)">KMU</text><text x="146" y="395" fill="#5c3d1e" font-size="8" transform="rotate(-45,146,395)">Privatkunden</text><text x="350" y="420" text-anchor="middle" fill="#78716c" font-size="10">Das SGF wird durch drei Dimensionen abgegrenzt: Leistung, Kundengruppe und Region</text></svg>'
          },
          {
            type: 'concept',
            title: '2.2 Kundenselektion – wem',
            content: 'Mit der Kundenselektion wird die Kundschaft (Käuferschaft) bestimmt. Dabei können unter Kunden Endkunden, Produktverwender (B2C), aber auch Vertriebspartner oder Wiederverkäufer (B2B) verstanden werden. Im Verkauf gibt es drei Arten von Kunden: bestehende Kunden, ehemalige Kunden und neue Kunden. Die Pflege bestehender Kunden (Customer Retention) ist günstiger als die Akquisition neuer Kunden.',
            highlight: '3 Kundenarten: Bestehende Kunden pflegen (Retention), ehemalige Kunden zurückgewinnen (Recovery), neue Kunden akquirieren (Recruitment).'
          },
          {
            type: 'concept',
            title: 'ABC-Analyse und Pareto-Prinzip',
            content: 'Die ABC-Analyse ist ein betriebswirtschaftliches Analyseverfahren zur Einteilung von Kunden in die Klassen A, B und C, die nach absteigender Bedeutung geordnet sind. Sie basiert auf dem Pareto-Prinzip (80/20-Regel): Ca. 20% der Kunden machen etwa 80% des Umsatzes aus. In der Praxis werden Kunden in vier Klassen eingeteilt: A-Kunden (5%, 50% Umsatz), B-Kunden (15%, 30% Umsatz), C-Kunden (30%, 15% Umsatz), D-Kunden (50%, 5% Umsatz). Die Beziehungspflege der A- und B-Kunden hat höchste Priorität.',
            highlight: 'Pareto-Prinzip: 20% der Kunden machen 80% des Umsatzes aus. A-/B-Kunden haben höchste Priorität.'
          },
          {
            type: 'concept',
            title: 'VUCA und Kundenportfolioanalyse',
            content: 'VUCA steht für Volatility (Schwankungen), Uncertainty (Unsicherheit), Complexity (Vielschichtigkeit) und Ambiguity (Mehrdeutigkeit). In der VUCA-Welt ist unklar, ob die umsatzstärksten Kunden von heute auch die von morgen sind. Die Kundenportfolioanalyse stellt die heutige und zukünftige Kundenattraktivität in einer Matrix gegenüber. Kunden werden als Stars, Cash Cows, Question Marks oder Dogs klassifiziert. Nicht nur Grosskunden, sondern auch mittlere und kleine Kunden mit Potenzial werden einbezogen.',
            highlight: 'VUCA = Volatility, Uncertainty, Complexity, Ambiguity. Kundenportfolioanalyse zeigt heutige und zukünftige Attraktivität.'
          },
          {
            type: 'svg',
            title: 'Die Kundenportfolioanalyse (Abb. 2-9)',
            svg: '<svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk29g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Die Kundenportfolioanalyse</text><line x1="120" y1="60" x2="120" y2="420" stroke="#5c3d1e" stroke-width="2"/><line x1="120" y1="420" x2="620" y2="420" stroke="#5c3d1e" stroke-width="2"/><text x="370" y="450" text-anchor="middle" fill="#5c3d1e" font-size="12" font-weight="bold">Kundenattraktivit\u00e4t heute</text><text x="60" y="245" text-anchor="middle" fill="#5c3d1e" font-size="12" font-weight="bold" transform="rotate(-90,60,245)">Kundenattraktivit\u00e4t in Zukunft</text><text x="110" y="75" text-anchor="end" fill="#78716c" font-size="10">100</text><text x="110" y="245" text-anchor="end" fill="#78716c" font-size="10">50</text><text x="110" y="418" text-anchor="end" fill="#78716c" font-size="10">0</text><text x="120" y="435" fill="#78716c" font-size="10">0</text><text x="365" y="435" text-anchor="middle" fill="#78716c" font-size="10">50</text><text x="610" y="435" text-anchor="end" fill="#78716c" font-size="10">100</text><line x1="120" y1="240" x2="620" y2="240" stroke="#8b6a3e" stroke-width="1" stroke-dasharray="6,3"/><line x1="370" y1="60" x2="370" y2="420" stroke="#8b6a3e" stroke-width="1" stroke-dasharray="6,3"/><rect x="125" y="65" width="240" height="170" rx="8" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><text x="245" y="120" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Question Marks</text><text x="245" y="145" text-anchor="middle" fill="#8b6a3e" font-size="28">?</text><text x="245" y="175" text-anchor="middle" fill="#78716c" font-size="9">Hohe Zukunft, tiefe Heute-Attraktivit\u00e4t</text><text x="245" y="190" text-anchor="middle" fill="#78716c" font-size="9">Strategie: Investieren oder aufgeben</text><rect x="375" y="65" width="240" height="170" rx="8" fill="#f5f0eb" stroke="#5c3d1e" stroke-width="2"/><text x="495" y="120" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Stars</text><text x="495" y="148" text-anchor="middle" fill="#8b6a3e" font-size="26">\u2605</text><text x="495" y="175" text-anchor="middle" fill="#78716c" font-size="9">Hohe Zukunft + hohe Heute-Attraktivit\u00e4t</text><text x="495" y="190" text-anchor="middle" fill="#78716c" font-size="9">Strategie: Halten und ausbauen</text><rect x="125" y="245" width="240" height="170" rx="8" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><text x="245" y="300" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Dogs</text><text x="245" y="330" text-anchor="middle" fill="#8b6a3e" font-size="22">\ud83d\udc15</text><text x="245" y="360" text-anchor="middle" fill="#78716c" font-size="9">Tiefe Zukunft + tiefe Heute-Attraktivit\u00e4t</text><text x="245" y="375" text-anchor="middle" fill="#78716c" font-size="9">Strategie: Minimaler Aufwand oder Abbau</text><rect x="375" y="245" width="240" height="170" rx="8" fill="#f5f0eb" stroke="#5c3d1e" stroke-width="2"/><text x="495" y="300" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Cash Cows</text><text x="495" y="330" text-anchor="middle" fill="#8b6a3e" font-size="22">\ud83d\udcb0</text><text x="495" y="360" text-anchor="middle" fill="#78716c" font-size="9">Tiefe Zukunft + hohe Heute-Attraktivit\u00e4t</text><text x="495" y="375" text-anchor="middle" fill="#78716c" font-size="9">Strategie: Absch\u00f6pfen und erhalten</text><circle cx="200" y="140" r="15" fill="#8b6a3e" opacity="0.3"/><circle cx="280" cy="160" r="25" fill="#8b6a3e" opacity="0.3"/><circle cx="450" cy="110" r="30" fill="#5c3d1e" opacity="0.3"/><circle cx="530" cy="140" r="20" fill="#5c3d1e" opacity="0.3"/><circle cx="200" cy="330" r="18" fill="#8b6a3e" opacity="0.2"/><circle cx="270" cy="350" r="12" fill="#8b6a3e" opacity="0.2"/><circle cx="450" cy="300" r="35" fill="#5c3d1e" opacity="0.25"/><circle cx="540" cy="340" r="22" fill="#5c3d1e" opacity="0.25"/><circle cx="14" cy="475" r="8" fill="#8b6a3e" opacity="0.4" transform="translate(136,0)"/><text x="165" y="479" fill="#78716c" font-size="9">Durchmesser der Blase = Umsatz des Kunden</text></svg>'
          },
          {
            type: 'concept',
            title: '2.3 Key-Account-Management und 2.4 Feldgrösse',
            content: 'Ein Key-Accounter ist ein Schlüsselkunde, der im Kundenportfolio eine besondere Stellung einnimmt. Im Allgemeinen sind Key-Accounter Kunden, die mindestens 50–60% des Umsatzes oder des Deckungsbeitrags ausmachen. Die Feldgrösse (wo) definiert den zu bearbeitenden, räumlichen oder auch geografischen Markt. Mit der Abgrenzung sollen Streuverluste vermieden werden. Streuverluste bedeuten finanzielle Verluste durch Verkaufs- oder Werbebotschaften an Empfänger ausserhalb der Zielgruppe.',
            highlight: 'Key-Accounter = Schlüsselkunden mit 50–60% Umsatzanteil. Feldgrösse = geografische Marktabgrenzung zur Vermeidung von Streuverlusten.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Verkaufsstrategie umfasst 6 Subvariablen: Produktselektion, Kundenselektion, Feldgrösse, Kontaktqualität, Kontaktquantität, Kontaktperiodizität.',
              'SGF = von aussen (Markt), SGE = von innen (Organisation). Nicht verwechseln!',
              'Bestehende Kunden pflegen ist 10-mal günstiger als Neukunden akquirieren.',
              '4 Typen ehemaliger Kunden: Ehemalige, Kündiger, Schläfer, Reduzierer.',
              'ABC-Analyse: A-Kunden (5% der Kunden, 50% des Umsatzes) haben höchste Priorität.',
              'Pareto-Prinzip: 20% Einsatz bewirkt 80% des Erfolgs.',
              'VUCA: In einer volatilen Welt sind heutige Topkunden nicht automatisch die von morgen.',
              'Key-Account-Management betreut Kunden mit mindestens 50–60% Umsatzanteil.',
              'Feldgrösse definiert den geografischen Markt – Streuverluste vermeiden!'
            ]
          },
          {
            type: 'methodenbox',
            title: 'Methodenbox: ABC-Analyse – das Pareto-Prinzip: Kundenanalyse',
            items: [
              {q: '1. Wann und wofür setzen Sie diese Methode ein?', a: 'Die ABC-Analyse ist ein betriebswirtschaftliches Verfahren, um den Ist-Zustand zu bewerten und Verbesserungen abzuleiten. Die Einteilung in A-, B- und C-Kategorien ermöglicht es, die Planung und die Entscheidungsfindung effizient und wirtschaftlich zu gestalten.'},
              {q: '2. Was erhalten Sie als Ergebnis?', a: 'Das Ergebnis der ABC-Analyse ist beispielsweise im Verkauf eine Klassifizierung der Kunden in A-, B- und C-Kunden. Kunden können mithilfe der ABC-Analyse nach Umsatz, Zahlungsbilanz oder Einkaufsrhythmus beurteilt werden.'},
              {q: '3. Was beachten Sie beim Erstellen einer ABC-Kundenanalyse?', a: 'Beim Erstellen ist es wichtig, dass man alle notwendigen Daten sammelt. Anschliessend wird dieser in A-, B- und C-Klassen aufgeteilt. Die Klassengrenzen: Klasse A = ca. 20% der Objekte und 80% des Gesamtwerts, Klasse B = ca. 30% und 15%, Klasse C = ca. 50% und 5%.'}
            ]
          },
          { type: 'svg', title: 'ABC-Kundenanalyse', svg: '<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="vk-abc1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#eef2ff"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">ABC-Kundenanalyse (Pareto-Prinzip)</text><line x1="100" y1="300" x2="620" y2="300" stroke="#374151" stroke-width="1.5"/><line x1="100" y1="50" x2="100" y2="300" stroke="#374151" stroke-width="1.5"/><text x="360" y="330" text-anchor="middle" fill="#374151" font-size="10">Anzahl Kunden (%)</text><text x="50" y="175" text-anchor="middle" fill="#374151" font-size="10" transform="rotate(-90,50,175)">Umsatzanteil (%)</text><text x="120" y="315" fill="#374151" font-size="9">0</text><text x="200" y="315" fill="#374151" font-size="9">20%</text><text x="355" y="315" fill="#374151" font-size="9">50%</text><text x="600" y="315" fill="#374151" font-size="9">100%</text><text x="90" y="304" fill="#374151" font-size="9" text-anchor="end">0</text><text x="90" y="254" fill="#374151" font-size="9" text-anchor="end">20%</text><text x="90" y="204" fill="#374151" font-size="9" text-anchor="end">40%</text><text x="90" y="154" fill="#374151" font-size="9" text-anchor="end">60%</text><text x="90" y="104" fill="#374151" font-size="9" text-anchor="end">80%</text><text x="90" y="64" fill="#374151" font-size="9" text-anchor="end">100%</text><rect x="100" y="100" width="104" height="200" rx="0" fill="#3730a3" opacity="0.9"/><text x="152" y="195" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">A</text><text x="152" y="215" text-anchor="middle" fill="#c7d2fe" font-size="9">20% Kunden</text><text x="152" y="230" text-anchor="middle" fill="#c7d2fe" font-size="9">80% Umsatz</text><rect x="204" y="262" width="156" height="38" rx="0" fill="#4f46e5" opacity="0.85"/><text x="282" y="280" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">B</text><text x="282" y="295" text-anchor="middle" fill="#e0e7ff" font-size="8">30% Kunden / 15% Umsatz</text><rect x="360" y="287" width="260" height="13" rx="0" fill="#a5b4fc" opacity="0.8"/><text x="490" y="297" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">C – 50% Kunden / 5% Umsatz</text><path d="M100,300 Q150,110 204,100 Q300,80 360,75 Q500,65 620,60" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/><text x="630" y="58" fill="#ef4444" font-size="9" font-weight="bold">Pareto-Kurve</text><line x1="204" y1="55" x2="204" y2="300" stroke="#374151" stroke-width="0.8" stroke-dasharray="4,3"/><line x1="360" y1="55" x2="360" y2="300" stroke="#374151" stroke-width="0.8" stroke-dasharray="4,3"/><text x="350" y="345" text-anchor="middle" fill="#78716c" font-size="10">Wenige Schlüsselkunden (A) generieren den Grossteil des Umsatzes</text></svg>' },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Verkaufsstrategie</strong> ist ein mittelfristiger Plan, der den groben Weg zur Erreichung der Verkaufsziele umreisst. Bei der Entwicklung geht man von <strong>sechs Subvariablen</strong> aus: 1. Produktselektion (was), 2. Kundenselektion (wem), 3. Feldgrösse (wo), 4. Kontaktform und -qualität (wie), 5. Kontaktquantität (wie viel), 6. Kontaktperiodizität (wann).',
              'Ein <strong>strategisches Geschäftsfeld</strong> (SGF) ist ein eigenständiger «Markt im Markt». Er definiert sich durch das Angebot (was), die Kunden (wem) und den geografischen Markt (wo). Eine <strong>strategische Geschäftseinheit</strong> (SGE) ist eine organisatorische Geschäftseinheit im Unternehmen.',
              'Mit der <strong>Produktselektion</strong> (was) wird festgelegt, welche Sortimentsteile den Kunden angeboten werden sollen.',
              'Mit der <strong>Kundenselektion</strong> (wem) wird die Zielgruppe bestimmt. Es gibt folgende Arten von Kunden: Bestehende Kunden, Ehemalige Kunden, Neue Kunden.',
              'Die <strong>ABC-Analyse</strong> ist ein betriebswirtschaftliches Analyseverfahren zur Einteilung von Kunden in verschiedene Klassen A, B und C, die nach absteigender Bedeutung geordnet sind.',
              'Die <strong>Feldgrösse</strong> (wo) definiert den zu bearbeitenden geografischen Markt.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'ABC-Analyse', def: 'Betriebswirtschaftliches Analyseverfahren zur Einteilung von Kunden in die Klassen A, B und C nach absteigender Umsatzbedeutung.'},
              {term: 'Strategisches Geschäftsfeld (SGF)', def: 'Eigenständiger «Markt im Markt», von aussen definiert durch Angebot, Kunden und geografischen Markt.'},
              {term: 'Strategische Geschäftseinheit (SGE)', def: 'Organisatorische Einheit im Unternehmen, von innen definiert.'},
              {term: 'Produktselektion', def: 'Festlegung, welche Sortimentsteile den Kunden angeboten werden (Subvariable «was»).'},
              {term: 'Kundenselektion', def: 'Bestimmung der Zielgruppe/Käuferschaft (Subvariable «wem»).'},
              {term: 'Feldgrösse', def: 'Definition des zu bearbeitenden geografischen Zielmarkts (Subvariable «wo»).'},
              {term: 'Kundenrückgewinnung (Customer Recovery)', def: 'Systematischer Prozess zur Rückgewinnung abgewanderter Kunden: Identifikation, Analyse, Massnahmen, Nachbetreuung.'},
              {term: 'Kundenwert', def: 'Berechnung: Ø-Umsatz/Kauf × Kaufhäufigkeit × Beziehungsdauer – Akquisitions- und Betreuungskosten.'},
              {term: 'Marktsegmentierung', def: 'Aufteilung eines heterogenen Gesamtmarkts in homogene Marktsegmente oder Käufergruppen.'},
              {term: 'Pareto-Prinzip', def: '80/20-Regel: Ca. 20% der Kunden erzeugen ca. 80% des Umsatzes.'},
              {term: 'VUCA-Prinzip', def: 'Volatility, Uncertainty, Complexity, Ambiguity – beschreibt die Unsicherheiten der modernen Geschäftswelt.'},
              {term: 'Key-Account-Management', def: 'Betreuung von Schlüsselkunden, die mindestens 50–60% des Umsatzes oder Deckungsbeitrags ausmachen.'},
              {term: 'Kundenportfolioanalyse', def: 'Matrixdarstellung der heutigen und zukünftigen Kundenattraktivität (Stars, Cash Cows, Question Marks, Dogs).'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch3',
      num: 'Kapitel 3',
      title: 'Verkaufsstrategien – Kontaktstrategie',
      pageStart: 49, pageEnd: 68,
      exercises: [
        {
          id: 25,
          type: 'text',
          q: 'Erklären Sie die Begriffe «aktives Telefonmarketing» und «passives Telefonmarketing».',
          keywords: ['verkäufer','ruft','kunden','an','outbound','käufer','kunde','inbound'],
          solution: 'Aktiv (Outbound): Der Verkäufer ruft den Kunden an. Passiv (Inbound): Der Käufer ruft den Verkäufer an.',
          questions: [
            {q: 'Aktives Telefonmarketing:', keywords: ['verkäufer','ruft','kunden','an','outbound'], minKeywords: 2},
            {q: 'Passives Telefonmarketing:', keywords: ['käufer','kunde','ruft','verkäufer','an','inbound'], minKeywords: 2}
          ],
          tips: ['Aktiv = der Verkäufer ist der Initiator.','Passiv = der Kunde ist der Initiator.','Andere Begriffe: Outbound Call und Inbound Call.'],
          reveal: ['Aktiv (Outbound): Der Verkäufer ruft den Kunden an — er ist der Initiator des Kontakts.','Passiv (Inbound): Der Käufer ruft den Verkäufer an — der Kunde kommt von selbst.','Warum die Unterscheidung? Die Gesprächsführung ist komplett anders: Bei Outbound muss der Verkäufer Interesse wecken (der Kunde hat nicht darum gebeten). Bei Inbound hat der Kunde bereits Interesse — der Verkäufer muss es nur noch in einen Abschluss umwandeln.','Prüfungstipp: Outbound = aktiv = teurer (mehr Aufwand pro Kontakt). Inbound = passiv = effizienter (Kunde hat bereits Kaufabsicht).']
        },
        {
          id: 26,
          type: 'text',
          q: 'A) Welche Kundenart wird am intensivsten betreut und was ist der Grund dafür? B) Welche Kunden darf man nicht vernachlässigen?',
          keywords: ['A-Kunden','wichtigste','persönliche','beziehung','aufträge','zufriedenheit','intensiv','kleinere','B-Kunden','C-Kunden','wachsen','potenzial'],
          solution: 'A) A-Kunden werden am intensivsten betreut, da sie den höchsten Umsatz generieren. B) Auch kleinere Kunden (B/C) darf man nicht vernachlässigen, da sie wachsen können.',
          questions: [
            {q: 'A) Intensivste Betreuung:', keywords: ['A-Kunden','wichtigste','persönliche','beziehung','aufträge','zufriedenheit','intensiv'], minKeywords: 2},
            {q: 'B) Nicht vernachlässigen:', keywords: ['kleinere','B-Kunden','C-Kunden','wachsen','potenzial','vernachlässigen'], minKeywords: 2}
          ],
          tips: ['A-Kunden haben den höchsten Umsatz.','Die Betreuung sichert die persönliche Beziehung.','Auch kleinere Kunden können wachsen.'],
          reveal: ['A) A-Kunden werden am intensivsten betreut — sie generieren den Grossteil des Umsatzes (Pareto: ~20% der Kunden = ~80% Umsatz).','B) Kleinere Kunden (B/C) dürfen nicht vernachlässigt werden — ein heutiger C-Kunde kann morgen ein A-Kunde sein.','Warum ist das prüfungsrelevant? Die Ressourcenverteilung im Verkauf ist ein Klassiker: Wer nur A-Kunden betreut, verpasst Wachstumspotenzial. Wer alle gleich betreut, verschwendet Ressourcen.','Merke: Die Kontaktperiodizität (Subvariable 6) regelt, wie oft welcher Kunde besucht wird — A häufiger, C seltener.']
        },
        {
          id: 27,
          type: 'calc',
          q: 'Berechnen Sie die Gesamtanzahl der zu besuchenden Kunden basierend auf der Kundensegmentierung und Kontaktperiodizität.',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" style="max-width:680px"><defs><linearGradient id="vp27h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f46e5"/><stop offset="100%" stop-color="#3730a3"/></linearGradient></defs><rect width="680" height="320" rx="12" fill="#f8fafc" stroke="#e2e8f0"/><text x="340" y="30" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#4f46e5">Kundensegmentierung und Kontaktperiodizität</text><rect x="20" y="45" width="640" height="28" rx="4" fill="url(#vp27h)"/><text x="30" y="64" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Segment</text><text x="180" y="64" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Kundentyp</text><text x="380" y="64" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Anzahl</text><text x="480" y="64" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Periodizität</text><text x="600" y="64" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Besuche</text><g font-family="Inter,sans-serif" font-size="11" fill="#334155"><rect x="20" y="78" width="640" height="24" fill="#eef2ff"/><text x="30" y="94" font-weight="600" fill="#4f46e5">A</text><text x="180" y="94">Vertriebspartner</text><text x="400" y="94" text-anchor="middle">35</text><text x="500" y="94" text-anchor="middle">12×/Jahr</text><text x="620" y="94" text-anchor="middle">?</text><rect x="20" y="102" width="640" height="24" fill="#f8fafc"/><text x="30" y="118" font-weight="600" fill="#4f46e5">A</text><text x="180" y="118">Musikstudios</text><text x="400" y="118" text-anchor="middle">15</text><text x="500" y="118" text-anchor="middle">3×/Jahr</text><text x="620" y="118" text-anchor="middle">?</text><rect x="20" y="126" width="640" height="24" fill="#eef2ff"/><text x="30" y="142" font-weight="600" fill="#6366f1">B</text><text x="180" y="142">Vertriebspartner</text><text x="400" y="142" text-anchor="middle">20</text><text x="500" y="142" text-anchor="middle">6×/Jahr</text><text x="620" y="142" text-anchor="middle">?</text><rect x="20" y="150" width="640" height="24" fill="#f8fafc"/><text x="30" y="166" font-weight="600" fill="#6366f1">B</text><text x="180" y="166">Musikstudios</text><text x="400" y="166" text-anchor="middle">30</text><text x="500" y="166" text-anchor="middle">4×/Jahr</text><text x="620" y="166" text-anchor="middle">?</text><rect x="20" y="174" width="640" height="24" fill="#eef2ff"/><text x="30" y="190" font-weight="600" fill="#6366f1">B</text><text x="180" y="190">Privatkunden</text><text x="400" y="190" text-anchor="middle">10</text><text x="500" y="190" text-anchor="middle">6×/Jahr</text><text x="620" y="190" text-anchor="middle">?</text><rect x="20" y="198" width="640" height="24" fill="#f8fafc"/><text x="30" y="214" font-weight="600" fill="#818cf8">C</text><text x="180" y="214">Vertriebspartner</text><text x="400" y="214" text-anchor="middle">10</text><text x="500" y="214" text-anchor="middle">4×/Jahr</text><text x="620" y="214" text-anchor="middle">?</text><rect x="20" y="222" width="640" height="24" fill="#eef2ff"/><text x="30" y="238" font-weight="600" fill="#818cf8">C</text><text x="180" y="238">Musikstudios</text><text x="400" y="238" text-anchor="middle">90</text><text x="500" y="238" text-anchor="middle">2×/Jahr</text><text x="620" y="238" text-anchor="middle">?</text><rect x="20" y="246" width="640" height="24" fill="#f1f5f9"/><text x="30" y="262" font-weight="600" fill="#94a3b8">C</text><text x="180" y="262" fill="#94a3b8">Privatkunden</text><text x="400" y="262" text-anchor="middle" fill="#94a3b8">85</text><text x="500" y="262" text-anchor="middle" fill="#94a3b8">–</text><text x="620" y="262" text-anchor="middle" fill="#94a3b8">–</text></g><rect x="20" y="275" width="640" height="28" rx="4" fill="#eef2ff" stroke="#c7d2fe"/><text x="30" y="294" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#4f46e5">Total zu besuchende Kunden</text><text x="620" y="294" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#4f46e5">?</text></svg>',
          fields: [
            {label: 'A-Kunden Vertriebspartner', answer: 420, tolerance: 0},
            {label: 'A-Kunden Musikstudios', answer: 45, tolerance: 0},
            {label: 'B-Kunden Vertriebspartner', answer: 120, tolerance: 0},
            {label: 'B-Kunden Musikstudios', answer: 120, tolerance: 0},
            {label: 'B-Kunden Privatkunden', answer: 60, tolerance: 0},
            {label: 'C-Kunden Vertriebspartner', answer: 40, tolerance: 0},
            {label: 'C-Kunden Musikstudios', answer: 180, tolerance: 0},
            {label: 'Total zu besuchende Kunden', answer: 985, tolerance: 0}
          ],
          tips: ['Multiplizieren Sie Anzahl Kunden mit der Periodizität.','Bestehende + Neukunden müssen zusammengezählt werden.','Privatkunden ohne Periodizität (-) werden nicht berechnet.'],
          reveal: ['A: 35×12=420 + 15×3=45 = 465 Besuche.','B: 20×6=120 + 30×4=120 + 10×6=60 = 300 Besuche.','C: 10×4=40 + 90×2=180 = 220 Besuche.','Total: 465 + 300 + 220 = 985 Besuche.','Warum «Periodizität × Anzahl»? Jede Kundengruppe hat eine definierte Besuchshäufigkeit (Kontaktperiodizität). A-Kunden werden z.B. 12× pro Jahr besucht, C-Kunden nur 2×. Diese Berechnung ist die Grundlage für die Personalplanung im Aussendienst.','Achtung: Privatkunden ohne Periodizität (–) fliessen NICHT in die Berechnung ein.']
        },
        {
          id: 28,
          type: 'calc',
          q: 'Der AD-Mitarbeiter kann pro Arbeitstag 3 Kunden besuchen und ist 150 Tage im Verkauf tätig. Wie viele AD-MA werden benötigt für 985 Besuche?',
          fields: [
            {label: 'Ergebnis der Berechnung', answer: 2.19, tolerance: 0.05},
            {label: 'Benötigte AD-MA (aufgerundet)', answer: 2, tolerance: 0}
          ],
          tips: ['Formel: Anzahl Besuche / (verkaufsaktive Tage x Besuche pro Tag).','985 / (150 x 3) = ?','Es muss aufgerundet werden, da kein halber MA möglich ist.'],
          reveal: ['Formel: 985 Besuche ÷ (150 Tage × 3 Besuche/Tag) = 985 ÷ 450 = 2.19 AD-MA.','Warum aufrunden auf 2? Man kann keinen 0.19 Mitarbeiter anstellen. Die restlichen Besuche übernimmt die Verkaufsleiterin.','Warum diese Berechnung? Sie ist der Kern der Einsatzplanung: Wie viele AD-Mitarbeitende braucht es, um alle geplanten Kundenbesuche abzudecken?','Prüfungstipp: Diese Berechnung kommt oft an der Prüfung. Formel merken: Gesamtbesuche ÷ (verkaufsaktive Tage × Besuche pro Tag) = benötigte AD-MA.']
        },
        {
          id: 29,
          type: 'fill',
          q: 'Füllen Sie die fehlenden Begriffe und Erklärungen in der Tabelle aus.',
          template: 'Platzverkauf: {0} | Unpersönlicher Kontakt: Es findet kein {1} Kontakt statt. | Persönlicher Kontakt: Kontakt von {2} | Feldverkauf: Der {3} geht zum Kunden. | Channel Sales: Verkauf durch {4} | Mobile Sales: Marketing- und Verkaufsmassnahmen unter Verwendung {5}',
          blanks: ['Der Kunde kommt zum Verkäufer','zwischenmenschlicher','Mensch zu Mensch','Verkäufer','Vertriebspartner','mobiler Endgeräte'],
          accept: [['Der Kunde kommt zum Verkäufer','Kunde kommt zum Verkäufer'],['zwischenmenschlicher'],['Mensch zu Mensch'],['Verkäufer'],['Vertriebspartner'],['mobiler Endgeräte']],
          tips: ['Platzverkauf = Kunde kommt zum Verkäufer (z.B. im Laden).','Feldverkauf = Aussendienst, Verkäufer besucht Kunden.','Channel Sales = Verkauf über Partner/Vertriebskanäle.'],
          reveal: ['Platzverkauf: Der Kunde kommt zum Verkäufer (z.B. Laden, Showroom).','Feldverkauf: Der Verkäufer geht zum Kunden (= Aussendienst).','Channel Sales: Verkauf über Vertriebspartner (indirekter Verkauf).','Mobile Sales: Verkauf via mobile Endgeräte (Smartphone, Tablet).','Warum die Unterscheidung? Die Kontaktart bestimmt die Kostenstruktur und die Personalplanung: Feldverkauf ist teuer (Reisekosten, Zeit), Platzverkauf günstiger (Kunde kommt selbst).','Persönlich vs. unpersönlich: Persönlicher Kontakt (Mensch zu Mensch) baut Vertrauen auf, ist aber ressourcenintensiv. Unpersönlicher Kontakt (z.B. E-Mail, Webshop) skaliert besser, baut aber weniger Beziehung auf.']
        },
        {
          id: 30,
          type: 'text',
          q: 'A) Nennen Sie einen Unterschied im Angebot zwischen Konsumgütern und Dienstleistungen. B) Wer sind die Anbieter bei Konsumgütern und bei Investitionsgütern?',
          keywords: ['gegenständlich','immateriell','vorhanden','herstellung','verbrauch','handel','hersteller','professionell','verkaufsorganisation'],
          solution: 'A) Konsumgüter sind beim Kauf im Handel gegenständlich vorhanden. DL sind immateriell. B) Konsumgüter: meist Handel, auch Hersteller. Investitionsgüter: Hersteller und seine professionelle Verkaufsorganisation.',
          questions: [
            {q: 'A) Unterschied Konsumgüter vs. Dienstleistungen:', keywords: ['gegenständlich','immateriell','vorhanden','herstellung','verbrauch'], minKeywords: 2},
            {q: 'B) Anbieter:', keywords: ['handel','hersteller','professionell','verkaufsorganisation'], minKeywords: 2}
          ],
          tips: ['Konsumgüter sind im Handel gegenständlich vorhanden.','Dienstleistungen sind immateriell.','Bei Investitionsgütern: Hersteller und professionelle Verkaufsorganisation.'],
          reveal: ['A) Konsumgüter sind gegenständlich vorhanden — man kann sie anfassen, testen, vergleichen. Dienstleistungen sind immateriell — Herstellung und Verbrauch fallen zusammen (z.B. Haarschnitt, Beratung).','B) Konsumgüter: meist über den Handel (z.B. Migros, Coop). Investitionsgüter: direkt vom Hersteller mit professioneller Verkaufsorganisation.','Warum relevant? Der Verkaufsprozess unterscheidet sich fundamental: Konsumgüter verkaufen sich oft «selbst» im Regal, Investitionsgüter erfordern persönliche Beratung, Demos und lange Verhandlungen.']
        },
        {
          id: 31,
          type: 'text',
          q: 'A) Wer sind die Käufer? B) Was ist die Kaufmotivation? C) Wie erfolgt der Kaufprozess bei Konsumgütern und bei Investitionsgütern?',
          keywords: ['private','institutionell','individuelle','unternehmensspezifisch','nicht systematisch','systematisch','emotional','rational','kurze','lange','entscheidungszeit'],
          solution: 'A) Konsumgüter: private Käufer. Investitionsgüter: institutionelle Käufer. B) Konsumgüter: individuelle Bedürfnisse. Investitionsgüter: unternehmensspezifische Bedürfnisse. C) Konsumgüter: nicht systematisch, kurze Entscheidungszeit, oft emotional. Investitionsgüter: systematisch, lange Entscheidungszeit.',
          questions: [
            {q: 'Antworten für A, B und C:', keywords: ['private','institutionell','individuelle','unternehmensspezifisch','nicht systematisch','systematisch','emotional','rational','kurze','lange','entscheidungszeit'], minKeywords: 4}
          ],
          tips: ['Konsumgüter = private Käufer, individuelle Bedürfnisse.','Investitionsgüter = institutionelle Käufer, unternehmensspezifisch.','Kaufprozess: Konsumgüter = emotional, kurz. Investitionsgüter = rational, lang.'],
          reveal: ['A) Konsumgüter: private Käufer. Investitionsgüter: institutionelle Käufer. DL: beide.','B) Konsumgüter: individuelle Bedürfnisse (z.B. «schmeckt mir»). Investitionsgüter: unternehmensspezifische Bedürfnisse (z.B. «steigert Produktivität um 15%»).','C) Konsumgüter: nicht systematisch, kurze Entscheidungszeit, oft emotional. Investitionsgüter: systematisch, lange Entscheidungszeit, rational.','Warum? Bei Investitionsgütern entscheidet ein Buying Center (mehrere Personen), der Prozess dauert Wochen bis Monate. Bei Konsumgütern entscheidet oft eine Person in Sekunden am Regal.']
        },
        {
          id: 32,
          type: 'text',
          q: 'A) Wodurch zeichnet sich der Verkaufsprozess von Dienstleistungen speziell aus? B) Worauf muss man beim Verkauf von Dienstleistungen achten?',
          keywords: ['immateriell','nicht demonstriert','unsicherheit','einfühlungsvermögen','überzeugungskraft','vertrauen','persönlichkeit'],
          solution: 'A) DL sind immateriell, die jeweilige Leistung kann nicht 1:1 demonstriert werden, was zu Unsicherheiten führt. B) Man benötigt Einfühlungsvermögen, Überzeugungskraft und eine gewinnende, vertrauenerweckende Persönlichkeit.',
          questions: [
            {q: 'A und B:', keywords: ['immateriell','nicht demonstriert','unsicherheit','einfühlungsvermögen','überzeugungskraft','vertrauen','persönlichkeit'], minKeywords: 3}
          ],
          tips: ['DL können nicht 1:1 demonstriert werden.','Der Kunde hat daher Unsicherheiten.','Der Verkäufer braucht besondere persönliche Eigenschaften.'],
          reveal: ['A) DL sind immateriell — man kann sie nicht vorführen, nicht anfassen, nicht testen. Das erzeugt beim Kunden Unsicherheit: «Bekomme ich wirklich, was versprochen wird?»','B) Deshalb braucht der Verkäufer: Einfühlungsvermögen (Unsicherheit verstehen), Überzeugungskraft (Vertrauen aufbauen) und eine gewinnende Persönlichkeit (der Verkäufer IST das Produkt).','Warum wichtig? Bei DL kauft der Kunde im Grunde ein Versprechen. Referenzen, Testimonials und persönliche Ausstrahlung sind daher wichtiger als bei Konsumgütern.']
        },
        {
          id: 33,
          type: 'text',
          q: 'Erklären Sie den Unterschied zwischen den Begriffen «Cross-Selling» und «Up-Selling».',
          keywords: ['ergänzend','mehrwert','höhere','kosten','leistungen','angeboten','verkauft'],
          solution: 'Cross-Selling: Dem Kunden werden der Marktleistung ergänzende Leistungen angeboten und verkauft. Up-Selling: Dem Kunden werden Marktleistungen mit einem Mehrwert und in der Regel zu höheren Kosten verkauft.',
          questions: [
            {q: 'Cross-Selling vs. Up-Selling:', keywords: ['ergänzend','mehrwert','höhere','kosten','leistungen','angeboten','verkauft'], minKeywords: 3}
          ],
          tips: ['Cross = quer, also ergänzende Produkte.','Up = höher, also hochwertigere Produkte.','Beide Strategien zielen auf Mehrumsatz ab.'],
          reveal: ['Cross-Selling: Ergänzende Produkte anbieten (z.B. Laptop → Tasche, Maus, Versicherung).','Up-Selling: Höherwertige Version anbieten (z.B. Standard → Premium, 128GB → 256GB).','Warum beide Strategien wichtig? Sie steigern den Umsatz pro Kunde ohne zusätzliche Akquisitionskosten. Ein bestehender Kunde, der bereits kauft, ist empfänglicher für Zusatzangebote als ein Neukunde.','Prüfungstipp: Cross = quer (andere Produkte dazu), Up = hoch (teurere Version). Nicht verwechseln! Beides zielt auf Mehrumsatz, aber der Weg ist verschieden.']
        },
        {
          id: 34,
          type: 'mc',
          q: 'Was ist die Kontaktqualität?',
          options: [
            'Die Anzahl der Kundenbesuche pro Periode.',
            'Die Schlüsselgrösse der Verkaufssubvariablen, die Art, Vorgehen, Inhalt, Dauer und Häufigkeit definiert.',
            'Die zeitliche Regelmässigkeit der Kundenbesuche.',
            'Die Bewertung der Kundenzufriedenheit nach einem Gespräch.'
          ],
          answer: 1,
          tips: ['Kontaktqualität = Wie wird kontaktiert?','Kontaktquantität = Wie oft?','Kontaktperiodizität = Wie regelmässig?'],
          reveal: ['Richtig: B — Die Kontaktqualität ist die Schlüsselgrösse der Verkaufssubvariablen (Subvariable 4: «Wie»).','Warum nicht A? Die Anzahl der Kundenbesuche pro Periode ist die Kontaktquantität (Subvariable 5: «Wie viel»).','Warum nicht C? Die zeitliche Regelmässigkeit ist die Kontaktperiodizität (Subvariable 6: «Wann»).','Warum nicht D? Die Kundenzufriedenheit ist ein vorökonomisches Ziel, keine Subvariable.','Merke: Qualität = WIE kontaktiert wird (Inhalt, Dauer, Art). Quantität = WIE OFT. Periodizität = WIE REGELMÄSSIG.']
        }
      ],
      learningData: {
        title: 'Verkaufsstrategien – Kontaktstrategie',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die verschiedenen Kontaktarten und Verkaufsformen nach verschiedenen Kriterien unterscheiden.',
              'die Unterschiede im Verkaufsprozess von verschiedenen Marktleistungen beschreiben.',
              'die Kontaktquantität und die Kontaktperiodizität erklären.',
              'die Anzahl der Mitarbeitenden im Verkauf berechnen.'
            ]
          },
          {
            type: 'concept',
            title: '3.1 Kontaktqualität – wie',
            content: 'Die Kontaktqualität ist die eigentliche Schlüsselgrösse der Verkaufssubvariablen. Sie definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit von Verkaufskontakten unabhängig davon, ob die Kontakte persönlich oder unpersönlich, im Aussen- oder im Innenverkauf erfolgen. Bei der Definition der Kontaktqualität kann eine Unterteilung in Kontaktarten und Verkaufsformen vorgenommen werden: nach dem Ort des Verkaufsgesprächs, nach der Art und Form oder nach Marktleistungen/Güterarten.',
            highlight: 'Kontaktqualität = Schlüsselgrösse. Sie definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit aller Verkaufskontakte.'
          },
          {
            type: 'concept',
            title: 'Innen- und Aussenverkauf',
            content: 'Beim Innenverkauf (Platzverkauf) geht die Initiative vom potenziellen Kunden aus. Dieser kommt an den Standort des Anbieters, um sich über dessen Marktleistungen zu informieren und zu kaufen. Beim Aussenverkauf (Feldverkauf) besucht der Verkäufer den potenziellen Kunden, um ihm seine Produkte persönlich vorzustellen und einen Verkaufsabschluss zu erzielen. Im Verkauf stehen sechs Kontaktmöglichkeiten im Vordergrund.',
            highlight: 'Platzverkauf = Initiative Kunde. Feldverkauf = Initiative Verkäufer.'
          },
          {
            type: 'table',
            title: 'Die 6 Kontaktmöglichkeiten im Verkauf',
            headers: ['Nr.', 'Kontaktmöglichkeit', 'Beschreibung'],
            rows: [
              ['1', 'Persönlicher Platzverkauf – Ladenverkauf (Store Sales)', 'Kunde kommt zum Verkäufer (z.B. Laden, Messe)'],
              ['2', 'Persönlicher Feldverkauf – Besuchsverkauf (Field Sales)', 'Verkäufer besucht den Kunden (Aussendienst)'],
              ['3', 'Mediengestützter Platz-/Feldverkauf (Tele Sales)', 'Telefonverkauf und Social-Media-Verkauf'],
              ['4', 'Indirekter persönlicher Verkauf (Channel Sales)', 'Verkauf via Vertriebspartner'],
              ['5', 'Unpersönlicher Platzverkauf (E-Commerce)', 'Verkaufen via Webshops'],
              ['6', 'Unpersönlicher Feldverkauf (Media Sales)', 'Mediengestützter Verkauf, Automatisierung']
            ]
          },
          {
            type: 'concept',
            title: 'Kundenzufriedenheit und Loyalität',
            content: 'Die Zufriedenheit der Kundschaft ist eine wichtige Voraussetzung, um Kundenbindung/Kundenloyalität aufzubauen. Sie entsteht dann, wenn die Qualität der Leistung (die subjektiv wahrgenommenen Leistungen) die Erwartungen des Kunden übersteigt. Zufriedene Kunden sind aber nicht automatisch loyal. Ein loyaler Kunde zeichnet sich durch sein Bekenntnis aus, Marktleistungen auch in Zukunft beim selben Anbieter zu kaufen. Rentable loyale Kunden sollten das Ziel jedes Unternehmens sein.',
            highlight: 'Zufriedene Kunden sind nicht automatisch loyal. Loyale Kunden sind zufrieden, aber zufriedene Kunden sind nicht zwingend loyal.'
          },
          {
            type: 'concept',
            title: '3.4 Kontaktquantität – wie viel',
            content: 'Mit der Kontaktquantität wird festgelegt, mit welcher Anzahl von persönlichen Kontakten der Kunde bearbeitet werden soll. Die Grundlagen für die Planung sind: Verkaufskostenbudget, Komplexitätsgrad der Marktleistung, Informationsstand des Kunden und Beziehungsintensität und -pflege. Grundsätzlich wird eine persönliche und nachhaltige Beziehung angestrebt.',
            highlight: 'Kontaktquantität = Anzahl persönlicher Kontakte. Abhängig von Budget, Komplexität, Informationsstand und Beziehungsintensität.'
          },
          {
            type: 'concept',
            title: '3.5 Kontaktperiodizität – wann',
            content: 'Die Kontaktperiodizität legt die zeitlichen Abstände zwischen den einzelnen Verkaufskontakten innerhalb eines bestimmten Verkaufsprozesses fest. Für jede Kundenklasse muss die Kontaktperiodizität in Abhängigkeit von der Kontaktqualität und der Kontaktquantität bestimmt werden. Dabei muss auch eine eventuelle Saisonalität der Marktleistung beachtet werden.',
            highlight: 'Kontaktperiodizität = zeitliche Abstände zwischen Kontakten. Unterscheidung nach Erst-, Einzel-, Folge- und regelmässigen Abschlüssen.'
          },
          {
            type: 'concept',
            title: '3.6 Personalaufwand berechnen',
            content: 'Die Formel zur Berechnung der Anzahl von Aussendienstmitarbeitenden lautet: AD = B / (Bt × Vt). Dabei ist AD = Anzahl AD-Mitarbeiter, B = Anzahl benötigte Besuche, Bt = Anzahl Besuche pro Tag, Vt = Anzahl verkaufsaktiver Tage. International geht man von ca. 180 bis 200 verkaufsaktiven Tagen aus. Im Schnitt sollten es 1888 Kundenbesuche pro Jahr sein, 1500 als absolutes Minimum.',
            highlight: 'Formel: AD = B / (Bt × Vt). Ca. 200 verkaufsaktive Tage pro Jahr.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Kontaktqualität ist die Schlüsselgrösse – sie definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit aller Kontakte.',
              'Es gibt 6 Kontaktmöglichkeiten: Store Sales, Field Sales, Tele Sales, Channel Sales, E-Commerce, Media Sales.',
              'Platzverkauf = Initiative Kunde, Feldverkauf = Initiative Verkäufer.',
              'Telefonmarketing: Aktiv (Outbound) = Verkäufer ruft an, Passiv (Inbound) = Kunde ruft an.',
              'Cross-Selling = ergänzende Produkte verkaufen, Up-Selling = höherwertige Produkte verkaufen.',
              'Zufriedene Kunden sind nicht automatisch loyal!',
              'Kontaktquantität hängt ab von: Budget, Komplexität, Informationsstand, Beziehungsintensität.',
              'Personalberechnung: AD = B / (Bt × Vt), ca. 200 verkaufsaktive Tage/Jahr.'
            ]
          },
          { type: 'svg', title: 'Die 6 Kontaktarten im Verkauf', svg: '<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="vk-ka1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3730a3"/><stop offset="100%" stop-color="#a5b4fc"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Die 6 Kontaktarten im Verkauf</text><text x="110" y="55" text-anchor="middle" fill="#4f46e5" font-size="9" font-weight="bold">High-Touch</text><text x="590" y="55" text-anchor="middle" fill="#a5b4fc" font-size="9" font-weight="bold">Low-Touch</text><line x1="170" y1="50" x2="530" y2="50" stroke="#c7d2fe" stroke-width="1.5"/><polygon points="530,50 522,46 522,54" fill="#c7d2fe"/><rect x="30" y="70" width="195" height="80" rx="10" fill="#3730a3"/><text x="128" y="100" text-anchor="middle" fill="#fff" font-size="22">&#x1f91d;</text><text x="128" y="125" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Persönlicher Besuch</text><text x="128" y="140" text-anchor="middle" fill="#c7d2fe" font-size="8">Face-to-Face / Aussendienst</text><rect x="250" y="70" width="195" height="80" rx="10" fill="#4f46e5"/><text x="348" y="100" text-anchor="middle" fill="#fff" font-size="22">&#x1f4de;</text><text x="348" y="125" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Telefon</text><text x="348" y="140" text-anchor="middle" fill="#e0e7ff" font-size="8">Aktiv &amp; passiv</text><rect x="470" y="70" width="195" height="80" rx="10" fill="#6366f1"/><text x="568" y="100" text-anchor="middle" fill="#fff" font-size="22">&#x2709;</text><text x="568" y="125" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Direct Mail / Brief</text><text x="568" y="140" text-anchor="middle" fill="#e0e7ff" font-size="8">Physische Post</text><rect x="30" y="175" width="195" height="80" rx="10" fill="#818cf8"/><text x="128" y="205" text-anchor="middle" fill="#fff" font-size="22">&#x1f4e7;</text><text x="128" y="230" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">E-Mail / Digital</text><text x="128" y="245" text-anchor="middle" fill="#e0e7ff" font-size="8">Newsletter, E-Mailing</text><rect x="250" y="175" width="195" height="80" rx="10" fill="#a5b4fc"/><text x="348" y="205" text-anchor="middle" fill="#312e81" font-size="22">&#x1f3aa;</text><text x="348" y="230" text-anchor="middle" fill="#312e81" font-size="10" font-weight="bold">Events / Messen</text><text x="348" y="245" text-anchor="middle" fill="#4f46e5" font-size="8">Networking, Präsentationen</text><rect x="470" y="175" width="195" height="80" rx="10" fill="#c7d2fe"/><text x="568" y="205" text-anchor="middle" fill="#312e81" font-size="22">&#x1f4f1;</text><text x="568" y="230" text-anchor="middle" fill="#312e81" font-size="10" font-weight="bold">Social Media</text><text x="568" y="245" text-anchor="middle" fill="#4f46e5" font-size="8">LinkedIn, Xing, Online</text><text x="350" y="290" text-anchor="middle" fill="#78716c" font-size="10">Der optimale Kontaktmix hängt von Kundenklasse und Verkaufsziel ab</text></svg>' },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die drei Subvariablen der <strong>Kontaktstrategie</strong> beinhalten: Kontaktqualität (wie), Kontaktquantität (wie viel), Kontaktperiodizität (wann).',
              'Die <strong>Kontaktqualität</strong> definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit von Verkaufskontakten und ist zudem die Grundlage zur Berechnung der benötigten personellen Ressourcen im Aussen- und im Innendienst.',
              'Beim <strong>Aussenverkauf (Feldverkauf)</strong> besucht die Verkäuferin den potenziellen Kunden. Beim <strong>Innenverkauf (Platzverkauf)</strong> geht die Initiative vom Kunden aus.',
              '<strong>Telefonmarketing</strong> ist eine flexible und günstige Möglichkeit zur Kommunikation. Aktives Telefonmarketing: Initiative beim Anbieter. Passives Telefonmarketing: Initiative beim Kunden.',
              'Beim <strong>Cross-Selling</strong> werden dem Kunden zusätzliche Produkte verkauft. Beim <strong>Up-Selling</strong> steht der Verkauf einer höherwertigen Marktleistung im Zentrum.',
              'Die <strong>Zufriedenheit des Kunden</strong> ist eine wichtige Voraussetzung, um Kundenbindung/Loyalität aufzubauen.',
              'Mit der <strong>Kontaktquantität</strong> wird festgelegt, mit welcher Anzahl von persönlichen Kontakten der Kunde bearbeitet werden soll.',
              'Die <strong>Kontaktperiodizität</strong> legt die zeitlichen Abstände zwischen den einzelnen Verkaufskontakten fest.',
              'Die <strong>Variablen für die Berechnung der Anzahl Mitarbeitenden</strong> im Verkauf sind: Anzahl der verkaufsaktiven Tage, Anzahl benötigte Besuche, Anzahl Besuche pro Tag.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Kontaktqualität', def: 'Schlüsselgrösse der Verkaufssubvariablen. Definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit der Verkaufskontakte.'},
              {term: 'Kontaktquantität', def: 'Festlegung der Anzahl persönlicher Kontakte zur optimalen Kundenbetreuung.'},
              {term: 'Kontaktperiodizität', def: 'Zeitliche Abstände zwischen den einzelnen Verkaufskontakten innerhalb eines Verkaufsprozesses.'},
              {term: 'Innenverkauf (Platzverkauf)', def: 'Initiative geht vom Kunden aus – er kommt an den Standort des Anbieters.'},
              {term: 'Aussenverkauf (Feldverkauf)', def: 'Initiative geht vom Verkäufer aus – er besucht den Kunden.'},
              {term: 'Telefonmarketing', def: 'Aktiv (Outbound): Verkäufer ruft an. Passiv (Inbound): Kunde ruft an.'},
              {term: 'Cross-Selling', def: 'Dem Kunden werden zum eigentlichen Verkauf zusätzliche, ergänzende Produkte oder Dienstleistungen verkauft.'},
              {term: 'Up-Selling', def: 'Verkauf einer höherwertigen Marktleistung im Vergleich zum ursprünglich gewünschten Produkt.'},
              {term: 'Kundenloyalität', def: 'Bekenntnis des Kunden, auch in Zukunft beim selben Anbieter zu kaufen.'},
              {term: 'Personalaufwand', def: 'Berechnung mit der Formel AD = B / (Bt × Vt). Ca. 200 verkaufsaktive Tage pro Jahr.'},
              {term: 'Verkaufsformen', def: 'Store Sales, Field Sales, Tele Sales, Channel Sales, E-Commerce, Media Sales.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch4',
      num: 'Kapitel 4',
      title: 'Primäre Verkaufsplanung',
      pageStart: 69, pageEnd: 88,
      exercises: [
        {
          id: 35,
          type: 'text',
          q: 'Worauf sollte man beim Aufteilen des geografischen Markts in Aussendienstgebiete besonders achten?',
          keywords: ['verdienstmöglichkeiten','arbeitslast','vergleichbar','gleich','AD','gebiete'],
          solution: 'Bei der Aufteilung in Verkaufsgebiete sollen die Verdienstmöglichkeiten und die Arbeitslast für alle AD vergleichbar sein.',
          questions: [
            {q: 'Kriterien:', keywords: ['verdienstmöglichkeiten','arbeitslast','vergleichbar','gleich','AD','gebiete'], minKeywords: 2}
          ],
          tips: ['Die Gebiete sollten fair aufgeteilt sein.','Denken Sie an Verdienstmöglichkeiten und Arbeitslast.','Alle AD sollten ähnliche Chancen haben.'],
          reveal: ['Warum vergleichbare Verdienstmöglichkeiten? Weil ungleiche Gebiete zu Frustration und hoher Fluktuation führen – ein AD in einem schwachen Gebiet wird demotiviert, egal wie gut er verkauft.','Warum auch die Arbeitslast? Ein Gebiet mit vielen kleinen Kunden erfordert mehr Fahrten und Besuche als ein Gebiet mit wenigen Grosskunden – beides muss bei der Planung berücksichtigt werden.','Prüfungstipp: Die Frage zielt immer auf ZWEI Kriterien ab – Verdienstmöglichkeiten UND Arbeitslast. Wer nur eines nennt, verliert Punkte.','Häufiger Fehler: Nur an die geografische Grösse denken. Ein kleines Stadtgebiet kann mehr Umsatzpotenzial haben als ein riesiges Landgebiet.']
        },
        {
          id: 36,
          type: 'text',
          q: 'Was versteht man unter dem Begriff «Kuchenprinzip»?',
          keywords: ['gleich','wochentag','region','immer','besucht','tourenplanung'],
          solution: 'Beim Kuchenprinzip besucht der Aussendienstmitarbeitende immer am gleichen Wochentag die gleiche Region.',
          questions: [
            {q: 'Erklärung:', keywords: ['gleich','wochentag','region','immer','besucht','tourenplanung'], minKeywords: 2}
          ],
          tips: ['Es geht um die Tourenplanung.','Der Name "Kuchen" deutet auf eine feste Aufteilung hin.','Jeder Wochentag hat eine feste Region.'],
          reveal: ['Warum heisst es «Kuchenprinzip»? Das Verkaufsgebiet wird wie ein Kuchen in feste Stücke (Regionen) aufgeteilt – jeder Wochentag hat sein festes «Kuchenstück».','Vorteil: Kunden wissen, wann der AD kommt → planbarer für beide Seiten, schafft Vertrauen und Routine.','Häufiger Fehler: Kuchenprinzip mit Blattprinzip verwechseln. Kuchen = fix (immer gleicher Tag, gleiche Region). Blatt = flexibel (Termine werden laufend angepasst).','Prüfungstipp: Beide Prinzipien werden oft kombiniert – das Kuchenprinzip als Grundstruktur, das Blattprinzip für kurzfristige Anpassungen.']
        },
        {
          id: 37,
          type: 'text',
          q: 'Henrik Muster hat seine Routenplanung für den kommenden Tag mithilfe eines modernen Computerprogramms geplant. Was könnte seine Planung über den Haufen werfen? Nennen Sie drei Umstände.',
          keywords: ['krank','absagen','unwetter','stau','verkehr','treffen','verschoben','grund'],
          solution: '1. Der Kunde wird krank oder sagt ab. 2. Henrik könnte selbst krank werden. 3. Unwetter oder Verkehrsstau können die Anfahrt verzögern.',
          questions: [
            {q: 'Drei mögliche Störungen:', keywords: ['krank','absagen','unwetter','stau','verkehr','treffen','verschoben','grund'], minKeywords: 2}
          ],
          tips: ['Denken Sie an Kundenabsagen.','Wetter und Verkehr können die Planung stören.','Auch persönliche Gründe sind möglich.'],
          reveal: ['Warum ist diese Frage prüfungsrelevant? Sie zeigt, dass selbst die beste digitale Planung nicht alle Risiken eliminiert – Flexibilität bleibt im AD unverzichtbar.','Drei Hauptstörungen: 1) Kundenabsage (Krankheit, Terminkonflikt) – häufigster Grund. 2) Eigene Krankheit des AD. 3) Externe Faktoren (Unwetter, Stau, Baustellen).','Prüfungstipp: Nennen Sie immer Störungen aus verschiedenen Kategorien (Kunde, eigene Person, Umwelt) – das zeigt strukturiertes Denken.','Häufiger Fehler: Nur «Stau» nennen. Die Prüfung erwartet verschiedenartige Störungen, nicht nur Verkehrsprobleme.']
        },
        {
          id: 38,
          type: 'text',
          q: 'Nennen Sie drei Kriterien, die bei der Aufteilung von Verkaufsabteilungen wesentlich sind.',
          keywords: ['produkt','kunden','kundenklassen','kundengruppen','geograf','zeitlich','AD-Gebiete','strategisch','schlüssel'],
          solution: '1. Produktgruppen und/oder Produkte. 2. Kundenklassen, Kundengruppen oder einzelne Kunden. 3. Geografische Gebiete / AD-Gebiete.',
          questions: [
            {q: 'Drei Kriterien:', keywords: ['produkt','kunden','kundenklassen','kundengruppen','geograf','zeitlich','AD-Gebiete','strategisch','schlüssel'], minKeywords: 2}
          ],
          tips: ['Denken Sie an Produktgruppen, Kundentypen und Geografie.','Auch zeitliche Kriterien sind möglich.','Schlüsselkunden können ein Kriterium sein.'],
          reveal: ['Warum nach Produktgruppen? Weil verschiedene Produkte unterschiedliches Fachwissen erfordern – ein Spezialist verkauft besser als ein Generalist.','Warum nach Kundenklassen? Grosskunden (Key Accounts) brauchen andere Betreuung als Kleinkunden – die Verkaufsstrategie unterscheidet sich fundamental.','Warum nach Geografie? Um Reisekosten zu minimieren und die Gebietsabdeckung effizient zu gestalten.','Prüfungstipp: Es gibt 4 Kriterien (Produkt, Kunde, Geografie, Zeit). Drei nennen reicht meist, aber wer alle vier kennt, punktet sicher.']
        },
        {
          id: 39,
          type: 'match',
          q: 'Ordnen Sie die Planungsarten der Einsatzplanung zu.',
          pairs: [
            {l: 'Gliederungsplanung', r: 'Gehört zur Einsatzplanung'},
            {l: 'Zeitplanung', r: 'Gehört zur Einsatzplanung'},
            {l: 'Routen- und Tourenplanung', r: 'Gehört zur Einsatzplanung'},
            {l: 'Verkaufsstufenplan', r: 'Gehört zur Einsatzplanung'}
          ],
          options: ['Gehört zur Einsatzplanung','Gehört nicht zur Einsatzplanung'],
          tips: ['Die Einsatzplanung enthält 4 Planungsarten.','Alle genannten Planungen gehören dazu.','Die Einsatzplanung ist Teil der primären Verkaufsplanung.'],
          reveal: ['Warum gehören alle vier dazu? Die Einsatzplanung beantwortet WER (Gliederung), WANN (Zeit), WO/WIE (Routen) und WAS (Verkaufsstufen) – alle vier Aspekte sind nötig für eine vollständige Planung.','Gliederungsplanung = Aufteilung nach Produkten/Kunden/Gebieten. Zeitplanung = wann welche Kontakte. Tourenplanung = effiziente Routenführung. Verkaufsstufenplan = systematisches Vorgehen.','Prüfungstipp: Alle vier Planungsarten auswendig können – sie werden oft als Aufzählungsfrage geprüft.']
        },
        {
          id: 40,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'In den primären Verkaufsplänen werden {0} vorbereitet und geplant. Das sind die {1}- und Absatzpläne und die {2}. In der {3} werden die Bereichsziele auf tiefere hierarchische Ebenen delegiert.',
          blanks: ['Ressourcen','Umsatz','Einsatzpläne','Umsatzplanung'],
          accept: [['Ressourcen'],['Umsatz'],['Einsatzpläne'],['Umsatzplanung']],
          tips: ['Primäre VP bereitet Ressourcen vor.','Zwei Planarten: Umsatz-/Absatzpläne und Einsatzpläne.','Die Umsatzplanung delegiert Bereichsziele.'],
          reveal: ['Warum «Ressourcen»? Primäre VP plant die konkreten Verkaufsressourcen (Personal, Zeit, Gebiete) – ohne diese Planung würde der Verkauf unkoordiniert ablaufen.','Warum zwei Planarten? Umsatz-/Absatzpläne legen die ZIELE fest (wie viel verkaufen?), Einsatzpläne legen den WEG fest (wie erreichen wir die Ziele?).','Warum Delegation in der Umsatzplanung? Bereichsziele müssen auf tiefere Ebenen heruntergebrochen werden, damit jeder AD weiss, was sein persönliches Ziel ist.','Prüfungstipp: Die Begriffe «primär» und «sekundär» nicht verwechseln – primär = direkte Verkaufsplanung, sekundär = unterstützende Planung (Organisation, Personal, Hilfsmittel).']
        },
        {
          id: 41,
          type: 'tf',
          q: 'Richtig oder Falsch: Primäre Verkaufsplanung',
          statements: [
            {s: 'Die Einsatzplanung bestimmt unter anderem, welche Verkaufskontakte zu welchem Zeitpunkt stattfinden sollen.', c: true, feedback: 'Die Einsatzplanung bestimmt: welche Kontakte, wann, wo, zwischen wem.'},
            {s: 'Das Blattprinzip bedeutet, dass der AD immer am gleichen Wochentag die gleiche Region besucht.', c: false, feedback: 'Das ist das Kuchenprinzip. Das Blattprinzip ist flexibler.'},
            {s: 'Die Gliederungsplanung kann nach Produktgruppen, Kundengruppen oder Gebieten erfolgen.', c: true, feedback: 'Dies sind typische Gliederungskriterien.'}
          ],
          tips: ['Einsatzplanung = wer, wann, wo, was.','Kuchenprinzip = feste Wochentage pro Region.','Gliederung kann nach verschiedenen Kriterien erfolgen.'],
          reveal: ['Aussage 1 RICHTIG: Warum? Die Einsatzplanung ist das operative Herzstück – sie koordiniert alle Kontakte nach dem Prinzip «wer besucht wen, wann, wo». Ohne sie wäre der Aussendienst planlos unterwegs.','Aussage 2 FALSCH: Warum? Hier werden Kuchen- und Blattprinzip absichtlich vertauscht. Das Kuchenprinzip = feste Wochentage pro Region (wie Kuchenstücke). Das Blattprinzip = flexibel, Termine werden laufend angepasst (wie ein loses Blatt). Diese Verwechslung ist eine beliebte Prüfungsfalle!','Aussage 3 RICHTIG: Warum? Die Gliederungsplanung muss flexibel sein, weil jedes Unternehmen andere Schwerpunkte hat – ein Pharma-Unternehmen gliedert nach Produktgruppen, ein Regionaler Anbieter nach Gebieten.']
        },
        {
          id: 42,
          type: 'mc',
          q: 'Was gehört zur primären Verkaufsplanung?',
          options: [
            'Verkaufsorganisationsplanung',
            'Personalplanung',
            'Umsatz- und Absatzplanung sowie Einsatzplanung',
            'Verkaufshilfsmittelplanung'
          ],
          answer: 2,
          tips: ['Primär = direkt mit dem Verkauf verbunden.','Sekundär = organisatorische und infrastrukturelle Voraussetzungen.','Umsatz/Absatz und Einsatz sind primär.'],
          reveal: ['Richtige Antwort: Umsatz-/Absatzplanung und Einsatzplanung. Warum? Weil diese Pläne DIREKT den Verkauf betreffen – was wird verkauft und wie wird der Einsatz organisiert.','Warum NICHT Verkaufsorganisationsplanung? Sie schafft die Struktur (Organigramm, Stellen), ist aber eine Voraussetzung, kein direkter Verkaufsplan → sekundär.','Warum NICHT Personalplanung? Mitarbeitende rekrutieren und schulen ist wichtig, aber eine unterstützende Funktion → sekundär.','Warum NICHT Verkaufshilfsmittelplanung? Hilfsmittel (Broschüren, CRM-Tools) unterstützen den Verkauf, sind aber nicht der Verkauf selbst → sekundär.','Prüfungstipp: Merkhilfe: Primär = «Was und Wie viel verkaufen wir?» Sekundär = «Womit und mit wem verkaufen wir?»']
        },
        {
          id: 43,
          type: 'sort',
          q: 'Ordnen Sie die Schritte des Verkaufsstufenplans in die korrekte Reihenfolge.',
          items: ['Analyse der Ausgangslage', 'Planung und Konzeption', 'Produktion von Hilfsmitteln', 'Versand eines Mailings', 'Rücklauf bearbeiten', 'Telefonische Nachfassaktion', 'Erstbesuche', 'Nachbearbeitung', 'Nachfassen', 'Zweitbesuche', 'Abschluss und Schlussbesprechung'],
          tips: ['Der Plan beginnt immer mit einer Analyse.','Nach dem Mailing folgen Rücklauf und Telefon.','Erst- und Zweitbesuche kommen nach der telefonischen Kontaktaufnahme.'],
          reveal: ['Warum diese Reihenfolge? Der Verkaufsstufenplan folgt einer logischen Kette: Zuerst verstehen (Analyse), dann vorbereiten (Planung, Produktion), dann kontaktieren (Mailing, Telefon), dann besuchen (Erst-/Zweitbesuch), dann abschliessen.','Warum kommt das Mailing VOR dem Telefon? Weil der Kunde zuerst schriftlich informiert wird – so hat er beim Telefonanruf bereits einen Bezugspunkt und fühlt sich nicht «kalt» angerufen.','Warum Erst- UND Zweitbesuche? Beim Erstbesuch wird das Angebot vorgestellt, beim Zweitbesuch werden offene Fragen geklärt und der Abschluss angestrebt. Nur selten wird beim ersten Besuch abgeschlossen.','Prüfungstipp: Die 11 Schritte werden häufig als Sortieraufgabe geprüft. Merkhilfe: A-P-P-V-R-T-E-N-N-Z-A (Anfangsbuchstaben).']
        }
      ],
      learningData: {
        title: 'Primäre Verkaufsplanung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Teile der primären und der sekundären Verkaufspläne aufzählen.',
              'eine Umsatzplanung durchführen.',
              'die einzelnen Möglichkeiten der Einsatzplanung darstellen.'
            ]
          },
          {
            type: 'concept',
            title: 'Primäre vs. Sekundäre Verkaufsplanung',
            content: 'Im Rahmen der primären Verkaufsplanung (Ressourcenplanung) geht es um die konkrete und detaillierte Planung von Absatz, Umsatz und Ertrag sowie um die Planung des Einsatzes der Mitarbeitenden im Verkauf. Anschliessend werden im Rahmen der sekundären Verkaufsplanung Organisation, Personal und Verkaufshilfen geplant, die für die Zielerreichung benötigt werden.',
            highlight: 'Primäre VP = Umsatz-/Absatzplanung + Einsatzplanung. Sekundäre VP = Organisation + Personal + Verkaufshilfsmittel.'
          },
          {
            type: 'svg',
            title: 'Verkaufspläne (Ressourcenplanung) – Abb. 4-1',
            svg: '<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="375" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Verkaufspläne – Primär und Sekundär</text><rect x="20" y="45" width="340" height="260" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="190" y="70" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Primäre Verkaufspläne</text><text x="190" y="85" text-anchor="middle" fill="#6366f1" font-size="9">(Ressourcenplanung)</text><rect x="40" y="100" width="140" height="90" rx="6" fill="#4f46e5"/><text x="110" y="120" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Umsatzpläne</text><text x="50" y="140" fill="#e0e7ff" font-size="7">• Produkte</text><text x="50" y="152" fill="#e0e7ff" font-size="7">• Kunden / K-Klassen</text><text x="50" y="164" fill="#e0e7ff" font-size="7">• AD-Gebiete / Regionen</text><text x="50" y="176" fill="#e0e7ff" font-size="7">• Zeiteinheiten / Branchen</text><rect x="200" y="100" width="140" height="90" rx="6" fill="#6366f1"/><text x="270" y="120" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Einsatzpläne</text><text x="210" y="140" fill="#e0e7ff" font-size="7">• Gliederungspläne</text><text x="210" y="152" fill="#e0e7ff" font-size="7">• Zeitpläne</text><text x="210" y="164" fill="#e0e7ff" font-size="7">• Reisepläne</text><text x="210" y="176" fill="#e0e7ff" font-size="7">• Verkaufsstufenpläne</text><rect x="390" y="45" width="340" height="260" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="560" y="70" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Sekundäre Verkaufspläne</text><text x="560" y="85" text-anchor="middle" fill="#6366f1" font-size="9">(Infrastrukturplanung)</text><rect x="405" y="100" width="100" height="90" rx="6" fill="#818cf8"/><text x="455" y="118" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Organisations-</text><text x="455" y="130" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">pläne</text><text x="415" y="150" fill="#e0e7ff" font-size="7">• Aufbau</text><text x="415" y="162" fill="#e0e7ff" font-size="7">• Ablauf</text><text x="415" y="174" fill="#e0e7ff" font-size="7">• Information</text><rect x="515" y="100" width="100" height="90" rx="6" fill="#a5b4fc" stroke="#4f46e5" stroke-width="1"/><text x="565" y="118" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">Personal-</text><text x="565" y="130" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">pläne</text><text x="525" y="150" fill="#3730a3" font-size="7">• Selektion</text><text x="525" y="162" fill="#3730a3" font-size="7">• Einführung</text><text x="525" y="174" fill="#3730a3" font-size="7">• Motivation</text><rect x="625" y="100" width="90" height="90" rx="6" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1"/><text x="670" y="118" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">Verkaufs-</text><text x="670" y="130" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">hilfen</text><text x="635" y="150" fill="#3730a3" font-size="7">• Präsentation</text><text x="635" y="162" fill="#3730a3" font-size="7">• Information</text><text x="635" y="174" fill="#3730a3" font-size="7">• Transport</text></svg>'
          },
          {
            type: 'concept',
            title: '4.1 Umsatz- und Absatzplanung',
            content: 'Der Verkaufsbereich eines Unternehmens kann verschiedene strategische Geschäftsfelder bearbeiten. In der Praxis wird ein Verkaufsbereich in Verkaufsabteilungen und Verkaufsgruppen unterteilt. Die Kenngrössen von Bereichszielen werden auf tiefere hierarchische Ebenen delegiert und verplant. Infrage kommt eine Gliederung nach: Produktgruppen und/oder Produkten, Kundenklassen/-gruppen, geografischen Gebieten, Aussendienstgebieten oder zeitlichen Kriterien (Monat, Quartal, Halbjahr, Jahr).',
            highlight: 'Umsatzplanung: Gliederung nach Produkten, Kunden, Gebieten, Aussendienstgebieten oder zeitlichen Kriterien.'
          },
          {
            type: 'concept',
            title: '4.2 Einsatzplanung',
            content: 'Mit der Einsatzplanung wird bestimmt, welche Verkaufskontakte, zu welchem Zeitpunkt, an welchem Ort und zwischen welchen Kontaktpersonen (Verkäufer – Kunde) stattfinden sollen. Die Einsatzplanung umfasst: Gliederungsplanung (Aufteilung der Gebiete), Zeitplanung (zeitliche Organisation), Routen-/Tourenplanung (geografische Optimierung) und den Verkaufsstufenplan (systematische Ablaufplanung).',
            highlight: 'Einsatzplanung: Welche Kontakte, wann, wo und zwischen wem? Umfasst Gliederung, Zeit, Touren und Verkaufsstufenplan.'
          },
          {
            type: 'concept',
            title: 'Routen- und Tourenplanung',
            content: 'Es gibt zwei Grundprinzipien der Tourenplanung: Das Kuchenprinzip (der AD besucht immer am gleichen Wochentag die gleiche Region, z.B. Montag = Nordschweiz) und das Blattprinzip (flexible Planung je nach Kundenbedürfnissen). Moderne CRM-Systeme und Tourenplaner wie portatour unterstützen die Tourenplanung, indem sie Kontakte auf Karten anzeigen und optimale Routen berechnen.',
            highlight: 'Kuchenprinzip = fixe Tage pro Region. Blattprinzip = flexible Planung. CRM-Tourenplaner optimieren Routen.'
          },
          {
            type: 'concept',
            title: '4.2.4 Verkaufsstufenpläne',
            content: 'Im Verkaufsstufenplan werden die einzelnen Stufen des Verkaufs definiert und das Vorgehen wird minuziös geplant. Dies trifft insbesondere auf den Verkauf von Investitionsgütern und kosten- und beratungsintensiven Dienstleistungen im B2B-Bereich zu. Die 11 Schritte umfassen: 1. Analyse der Ausgangslage, 2. Planung und Konzeption, 3. Produktion von Hilfsmitteln, 4. Versand eines Mailings, 5. Rücklauf bearbeiten, 6. Telefonische Nachfassaktion, 7. Erstbesuche, 8. Nachbearbeitung, 9. Nachfassen, 10. Zweitbesuche, 11. Abschluss und Schlussbesprechung.',
            highlight: 'Verkaufsstufenplan: 11 systematische Schritte von der Analyse bis zum Abschluss – besonders wichtig im B2B-Bereich.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Primäre VP = Umsatz-/Absatzplanung + Einsatzplanung.',
              'Sekundäre VP = Organisationsplanung + Personalplanung + Verkaufshilfsmittelplanung.',
              'Umsatzplanung kann nach Produkten, Kunden, Gebieten oder Zeiträumen gegliedert werden.',
              'Einsatzplanung: Was, Wann, Wo, Wer – umfasst Gliederung, Zeit, Touren, Verkaufsstufenplan.',
              'Kuchenprinzip = fixe Wochentage für Regionen. Blattprinzip = flexible Tourenplanung.',
              'CRM-Tourenplaner (z.B. portatour) optimieren Routen und sparen Arbeitszeit.',
              'Verkaufsstufenplan: 11 Schritte von Analyse bis Abschluss (v.a. B2B).',
              'Am Schluss jeder Verkaufsaktion steht ein Debriefing zur Optimierung.'
            ]
          },
          { type: 'svg', title: 'Verkaufsplanungsprozess', svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="vk-fun1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f46e5"/><stop offset="100%" stop-color="#3730a3"/></linearGradient><marker id="vk-fun-arr" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><text x="350" y="28" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Verkaufsplanungsprozess – vom Markt zum Umsatz</text><polygon points="120,50 580,50 520,120 180,120" fill="#3730a3"/><text x="350" y="80" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktpotenzial</text><text x="350" y="100" text-anchor="middle" fill="#c7d2fe" font-size="9">Gesamte theoretische Aufnahmekapazität</text><line x1="350" y1="120" x2="350" y2="138" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-fun-arr)"/><polygon points="180,145 520,145 490,215 210,215" fill="#4f46e5"/><text x="350" y="175" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktvolumen</text><text x="350" y="195" text-anchor="middle" fill="#e0e7ff" font-size="9">Tatsächlich realisierte Marktnachfrage</text><line x1="350" y1="215" x2="350" y2="233" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-fun-arr)"/><polygon points="210,240 490,240 460,295 240,295" fill="#6366f1"/><text x="350" y="262" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Absatzpotenzial</text><text x="350" y="280" text-anchor="middle" fill="#e0e7ff" font-size="9">Maximal erreichbarer Anteil</text><line x1="350" y1="295" x2="350" y2="313" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-fun-arr)"/><rect x="260" y="318" width="180" height="45" rx="8" fill="#818cf8"/><text x="350" y="338" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Absatzvolumen</text><text x="350" y="353" text-anchor="middle" fill="#e0e7ff" font-size="9">Geplanter Absatz → Umsatzplanung</text><text x="640" y="85" fill="#3730a3" font-size="9" font-weight="bold">breit</text><text x="640" y="340" fill="#818cf8" font-size="9" font-weight="bold">eng</text><line x1="630" y1="95" x2="630" y2="325" stroke="#4f46e5" stroke-width="1.5" marker-end="url(#vk-fun-arr)"/></svg>' },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>primäre Verkaufsplanung</strong> umfasst die Umsatz- und Absatzplanung sowie die Einsatzplanung. Die <strong>sekundäre Verkaufsplanung</strong> umfasst Organisationsplanung, Personalplanung und Verkaufshilfsmittelplanung.',
              'Bei der <strong>Umsatz- und Absatzplanung</strong> werden die Kenngrössen auf tiefere Ebenen heruntergebrochen: nach Produktgruppen, Kundenklassen, geografischen Gebieten oder zeitlichen Kriterien.',
              'Die <strong>Einsatzplanung</strong> bestimmt: welche Kontakte, zu welchem Zeitpunkt, an welchem Ort und zwischen welchen Kontaktpersonen stattfinden sollen.',
              'Die <strong>Tourenplanung</strong> kennt zwei Grundprinzipien: das Kuchenprinzip (fixe Tage pro Region) und das Blattprinzip (flexible Planung).',
              'Der <strong>Verkaufsstufenplan</strong> definiert das Vorgehen in 11 systematischen Schritten, insbesondere für den Verkauf von Investitionsgütern im B2B-Bereich.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Primäre Verkaufsplanung', def: 'Umsatz-/Absatzplanung und Einsatzplanung – direkt mit dem Verkauf verbunden.'},
              {term: 'Sekundäre Verkaufsplanung', def: 'Organisationsplanung, Personalplanung und Verkaufshilfsmittelplanung.'},
              {term: 'Umsatzplanung', def: 'Detaillierte Planung von Absatz, Umsatz und Ertrag, gegliedert nach Produkten, Kunden, Gebieten oder Zeiträumen.'},
              {term: 'Einsatzplanung', def: 'Bestimmt welche Kontakte, wann, wo und zwischen wem stattfinden sollen.'},
              {term: 'Gliederungsplanung', def: 'Aufteilung der Verkaufsgebiete auf die Mitarbeitenden.'},
              {term: 'Kuchenprinzip', def: 'AD besucht immer am gleichen Wochentag die gleiche Region.'},
              {term: 'Blattprinzip', def: 'Flexible Tourenplanung je nach Kundenbedürfnissen.'},
              {term: 'Routenplanung', def: 'Geografische Optimierung der Besuchsrouten, oft mit CRM-Tourenplanern.'},
              {term: 'Verkaufsstufenplan', def: 'Systematischer Ablaufplan in 11 Schritten von der Analyse bis zum Abschluss.'},
              {term: 'Streuverluste', def: 'Verluste durch Verkaufsbemühungen bei Personen ausserhalb der Zielgruppe.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch5',
      num: 'Kapitel 5',
      title: 'Sekundäre Verkaufsplanung – Verkaufsorganisation',
      pageStart: 89, pageEnd: 110,
      exercises: [
        {
          id: 44,
          type: 'text',
          q: 'Betrachten Sie die Stablinienorganisation und beschreiben Sie die Aufgabe einer funktionalen Stabsstelle.',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="100%" style="max-width:600px"><defs><linearGradient id="vp44h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f46e5"/><stop offset="100%" stop-color="#3730a3"/></linearGradient><linearGradient id="vp44s" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient></defs><rect width="600" height="300" rx="12" fill="#f8fafc" stroke="#e2e8f0"/><text x="300" y="28" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#4f46e5">Stablinienorganisation</text><rect x="220" y="42" width="160" height="36" rx="6" fill="url(#vp44h)"/><text x="300" y="65" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">Geschäftsleitung</text><rect x="420" y="42" width="140" height="36" rx="6" fill="url(#vp44s)" stroke="#f59e0b" stroke-dasharray="4,2"/><text x="490" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#fff">Stabsstelle</text><text x="490" y="70" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#fef3c7">(z.B. Recht, QS)</text><line x1="380" y1="60" x2="420" y2="60" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/><line x1="300" y1="78" x2="300" y2="110" stroke="#4f46e5" stroke-width="2"/><line x1="100" y1="110" x2="500" y2="110" stroke="#4f46e5" stroke-width="2"/><line x1="100" y1="110" x2="100" y2="130" stroke="#4f46e5" stroke-width="2"/><line x1="300" y1="110" x2="300" y2="130" stroke="#4f46e5" stroke-width="2"/><line x1="500" y1="110" x2="500" y2="130" stroke="#4f46e5" stroke-width="2"/><rect x="30" y="130" width="140" height="36" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="100" y="153" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#4f46e5">Verkauf</text><rect x="230" y="130" width="140" height="36" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="300" y="153" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#4f46e5">Produktion</text><rect x="430" y="130" width="140" height="36" rx="6" fill="#eef2ff" stroke="#c7d2fe"/><text x="500" y="153" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#4f46e5">Finanzen</text><line x1="100" y1="166" x2="100" y2="190" stroke="#94a3b8" stroke-width="1.5"/><line x1="50" y1="190" x2="150" y2="190" stroke="#94a3b8" stroke-width="1.5"/><line x1="50" y1="190" x2="50" y2="205" stroke="#94a3b8" stroke-width="1.5"/><line x1="150" y1="190" x2="150" y2="205" stroke="#94a3b8" stroke-width="1.5"/><rect x="15" y="205" width="70" height="28" rx="4" fill="#f1f5f9" stroke="#e2e8f0"/><text x="50" y="223" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Innendienst</text><rect x="115" y="205" width="70" height="28" rx="4" fill="#f1f5f9" stroke="#e2e8f0"/><text x="150" y="223" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#64748b">Aussendienst</text><g font-family="Inter,sans-serif" font-size="9" fill="#64748b"><rect x="30" y="255" width="16" height="3" rx="1" fill="#4f46e5"/><text x="52" y="260">Linienbefugnis (Weisungsrecht)</text><line x1="280" y1="257" x2="310" y2="257" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/><text x="316" y="260">Stabsstelle (beratend / funktionale Weisung)</text></g></svg>',
          keywords: ['spezialisiert','beratung','unterstützung','weisungsbefugnis','funktional','aufgabe'],
          solution: 'Funktionale Stabsstellen sind spezialisierte Stellen (z.B. Qualitätssicherung, Rechtsabteilung). Je nach Aufgabe kann ihnen funktional Weisungsbefugnis übertragen werden.',
          questions: [
            {q: 'Aufgabe der funktionalen Stabsstelle:', keywords: ['spezialisiert','beratung','unterstützung','weisungsbefugnis','funktional','aufgabe'], minKeywords: 2}
          ],
          tips: ['Stabsstellen sind spezialisierte Stellen.','Sie haben beratende Funktion.','Je nach Aufgabe kann ihnen funktionale Weisungsbefugnis übertragen werden.'],
          reveal: ['Warum «funktionale» Stabsstelle? Weil sie in ihrem Fachgebiet (Funktion) Weisungsbefugnis erhalten kann – im Gegensatz zu einer reinen Stabsstelle, die nur beraten darf.','Beispiel: Die Rechtsabteilung kann anweisen, einen Vertrag NICHT zu unterschreiben – das ist funktionale Weisungsbefugnis in rechtlichen Belangen, obwohl sie hierarchisch keine Linienfunktion hat.','Häufiger Fehler: Stabsstelle mit Linienstelle verwechseln. Stab = Beratung/Unterstützung, Linie = direkte Weisungsbefugnis. Die funktionale Stabsstelle ist ein Hybrid.','Prüfungstipp: Das Wort «funktional» ist der Schlüssel – es bedeutet, dass die Weisungsbefugnis auf ein bestimmtes Fachgebiet beschränkt ist, nicht generell gilt.']
        },
        {
          id: 45,
          type: 'text',
          q: 'Skizzieren Sie eine Matrixorganisation und zählen Sie je drei Vor- und Nachteile dieser Organisationsform auf.',
          keywords: ['mehrdimensional','koordination','kurze','kommunikation','flexibilität','konflikt','mehrfachunterstellung','einheit','leitung','kompromisse'],
          solution: 'Vorteile: Mehrdimensionale Koordination, kurze Kommunikationswege, hohe Flexibilität. Nachteile: Höheres Konfliktpotenzial durch Mehrfachunterstellung, keine Einheit der Leitung, Gefahr vieler schlechter Kompromisse.',
          questions: [
            {q: 'Vorteile (3):', keywords: ['mehrdimensional','koordination','kurze','kommunikation','flexibilität'], minKeywords: 2},
            {q: 'Nachteile (3):', keywords: ['konflikt','mehrfachunterstellung','einheit','leitung','kompromisse','keine'], minKeywords: 2}
          ],
          tips: ['Vorteile: kurze Wege, Flexibilität.','Nachteile: Konfliktpotenzial durch doppelte Unterstellung.','Denken Sie an die Einheit der Leitung.'],
          reveal: ['Warum mehrdimensionale Koordination als Vorteil? Weil Entscheidungen gleichzeitig aus Produkt- UND Regionalsicht getroffen werden – das verhindert einseitige Entscheide.','Warum Konfliktpotenzial als Nachteil? Ein Mitarbeiter hat ZWEI Vorgesetzte (z.B. Produktmanager + Regionalleiter). Wenn beide unterschiedliche Prioritäten setzen, entsteht ein Loyalitätskonflikt.','Warum «keine Einheit der Leitung»? Das klassische Managementprinzip besagt: Ein Mitarbeiter = ein Chef. Die Matrix bricht dieses Prinzip bewusst – mit allen Konsequenzen.','Prüfungstipp: Immer je 3 Vor- und 3 Nachteile lernen. Die Nachteile hängen alle mit der Mehrfachunterstellung zusammen – das ist der rote Faden.']
        },
        {
          id: 46,
          type: 'text',
          q: 'Skizzieren Sie das Raster für ein Anforderungsprofil.',
          keywords: ['fachlich','charakterlich','persönlich','muss','soll','kann','anforderungen','kriterium'],
          solution: 'Zeilen/Kriterien: Fachliche Anforderungen, Charakterliche Anforderungen, Persönliche Anforderungen. Spalten: Muss (zwingend), Soll (wünschenswert), Kann (Vorteil).',
          questions: [
            {q: 'Welche Kriterien und Spalten enthält ein Anforderungsprofil?', keywords: ['fachlich','charakterlich','persönlich','muss','soll','kann','anforderungen','kriterium'], minKeywords: 3}
          ],
          tips: ['Das Raster hat 3 Kriterienbereiche.','Die Spalten unterscheiden Muss, Soll und Kann.','Fachliche, charakterliche und persönliche Anforderungen.'],
          reveal: ['Warum 3 Kriterienbereiche? Fachlich (kann die Person den Job?), Charakterlich (passt sie ins Team?), Persönlich (bringt sie die nötigen Soft Skills mit?) – alle drei Dimensionen müssen geprüft werden.','Warum Muss/Soll/Kann? Nicht alle Anforderungen sind gleich wichtig. Muss = K.O.-Kriterium (z.B. Führerausweis für AD). Soll = stark gewünscht (z.B. Branchenerfahrung). Kann = Bonus (z.B. Fremdsprachen).','Prüfungstipp: In der Prüfung wird oft nach dem «Raster» gefragt – zeichnen Sie eine Tabelle mit 3 Zeilen (fachlich, charakterlich, persönlich) und 3 Spalten (Muss, Soll, Kann).','Häufiger Fehler: Fachliche und persönliche Anforderungen verwechseln. Fachlich = Ausbildung, Erfahrung. Persönlich = Belastbarkeit, Flexibilität, Auftreten.']
        },
        {
          id: 47,
          type: 'text',
          q: 'Wie unterscheiden sich Muss-Kriterien von Soll-Kriterien in einem Anforderungsprofil?',
          keywords: ['zwingend','erfüllt','ausscheidet','kandidat','vorteil','müssen','nicht zwingend'],
          solution: 'Muss-Kriterien müssen zwingend erfüllt sein. Ist dies nicht der Fall, scheidet der Kandidat aus. Soll-Kriterien können erfüllt sein und sind ein Vorteil, müssen aber nicht zwingend erfüllt sein.',
          questions: [
            {q: 'Unterschied:', keywords: ['zwingend','erfüllt','ausscheidet','kandidat','vorteil','müssen','nicht zwingend'], minKeywords: 2}
          ],
          tips: ['Muss = zwingend erforderlich.','Soll = wünschenswert, aber nicht zwingend.','Fehlende Muss-Kriterien = Ausschluss.'],
          reveal: ['Warum die Unterscheidung? Ohne klare Trennung würde man Kandidaten mit «Nice-to-have»-Lücken ausschliessen und den Talentpool unnötig einschränken.','Muss-Kriterien = Ausschlusskriterien (K.O.). Beispiel: Ein AD braucht zwingend einen Führerausweis – ohne ihn kann er keine Kunden besuchen, egal wie gut er verkauft.','Soll-Kriterien = Differenzierungskriterien. Beispiel: 5 Jahre Branchenerfahrung ist wünschenswert, aber ein talentierter Quereinsteiger kann das kompensieren.','Prüfungstipp: Es gibt auch «Kann-Kriterien» (Bonus/Vorteil). In der Prüfung wird oft nach dem Unterschied Muss vs. Soll gefragt – das Wort «zwingend» ist der Schlüssel.']
        },
        {
          id: 48,
          type: 'check',
          q: 'Kreuzen Sie an, ob die Hilfsmittel der Verkaufsorganisation zur Aufbau- oder Ablauforganisation gehören.',
          statements: [
            {s: 'Tourenplan gehört zur Ablauforganisation.', c: true},
            {s: 'Organigramm gehört zur Ablauforganisation.', c: false},
            {s: 'Verkaufsstufenplan gehört zur Ablauforganisation.', c: true},
            {s: 'Stellenbeschreibung gehört zur Ablauforganisation.', c: false},
            {s: 'Anforderungsprofil gehört zur Ablauforganisation.', c: false},
            {s: 'Aktionspläne gehören zur Ablauforganisation.', c: true},
            {s: 'Telefonskripte gehören zur Ablauforganisation.', c: true}
          ],
          tips: ['Aufbauorganisation = hierarchisches Gerüst (Organigramm, Stellen).','Ablauforganisation = Prozesse und Abläufe.','Tourenplanung und Aktionspläne sind Abläufe.'],
          reveal: ['Entscheidungsregel: Aufbau = WER macht WAS (Struktur, Hierarchie, Stellen). Ablauf = WIE wird es gemacht (Prozesse, Schritte, zeitliche Abfolge).','Warum Organigramm → Aufbau? Es zeigt die Hierarchie und Struktur – das ändert sich selten und ist langfristig angelegt.','Warum Tourenplan → Ablauf? Er beschreibt einen konkreten Prozess (Route, Zeitplan) – das ändert sich regelmässig und ist operativ.','Häufiger Fehler: Anforderungsprofil wird oft falsch der Ablauforganisation zugeordnet. Es gehört zur Aufbauorganisation, weil es die STELLE definiert, nicht den Prozess.','Prüfungstipp: Fragen Sie sich: «Beschreibt das Hilfsmittel eine Struktur oder einen Prozess?» Struktur = Aufbau, Prozess = Ablauf.']
        },
        {
          id: 49,
          type: 'text',
          q: 'Veränderungsprozesse: Was sind mögliche Entwicklungen, die zu einer Veränderung führen? Zählen Sie 5 davon auf.',
          keywords: ['gesättigt','transparent','digitalisierung','wettbewerb','konkurrenz','internationalisierung','kundschaft','loyalität','vernetzung','technologisch','ressourcen','rationalisierung','fachkräfte'],
          solution: 'Gesättigte und transparente Märkte, Digitalisierung, intensiverer Wettbewerb, Beschleunigung der Internationalisierung, anspruchsvollere Kundschaften mit schwindender Loyalität.',
          questions: [
            {q: '5 Entwicklungen:', keywords: ['gesättigt','transparent','digitalisierung','wettbewerb','konkurrenz','internationalisierung','kundschaft','loyalität','vernetzung','technologisch','ressourcen','rationalisierung','fachkräfte'], minKeywords: 3}
          ],
          tips: ['Denken Sie an Marktveränderungen.','Auch technologische und gesellschaftliche Veränderungen.','Wettbewerb und Kundschaft verändern sich.'],
          reveal: ['Warum sind diese Entwicklungen relevant? Weil sie zeigen, dass Verkaufsorganisationen sich ständig anpassen müssen – wer sich nicht verändert, verliert Marktanteile.','Kernkategorien: Markt (gesättigt, transparent), Technologie (Digitalisierung, Vernetzung), Wettbewerb (international, verschärft), Kunden (anspruchsvoller, weniger loyal), Ressourcen (Fachkräftemangel).','Prüfungstipp: 5 Entwicklungen nennen reicht. Wählen Sie aus verschiedenen Kategorien – das zeigt, dass Sie das Gesamtbild verstehen, nicht nur einen Aspekt.','Häufiger Fehler: Nur «Digitalisierung» nennen. Die Prüfung erwartet Vielfalt – denken Sie an Markt, Technologie, Wettbewerb, Kunden UND Ressourcen.']
        },
        {
          id: 50,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zur Organisationsstruktur.',
          template: 'Bei der organisatorischen Strukturierung wird zwischen {0} und {1} unterschieden. Die Aufbauorganisation ist {2} ausgelegt, die Ablauforganisation eher {3} ausgelegt.',
          blanks: ['Aufbauorganisation','Ablauforganisation','längerfristig','mittelfristig'],
          accept: [['Aufbauorganisation','Aufbau'],['Ablauforganisation','Ablauf'],['längerfristig'],['mittelfristig']],
          tips: ['Es gibt zwei Organisationsbereiche.','Aufbau = hierarchisches Gerüst.','Ablauf = Prozesse und Arbeitsschritte.'],
          reveal: ['Warum längerfristig vs. mittelfristig? Die Aufbauorganisation (Organigramm, Hierarchie) wird selten geändert – Umstrukturierungen sind aufwändig und verunsichern Mitarbeitende.','Die Ablauforganisation (Prozesse, Touren, Aktionspläne) wird regelmässig angepasst, z.B. bei neuen Produkten oder veränderten Marktbedingungen.','Prüfungstipp: «Längerfristig» und «mittelfristig» sind die Schlüsselwörter in der Lücke. Verwechseln Sie nicht: Aufbau ≠ kurzfristig, Ablauf ≠ langfristig.']
        },
        {
          id: 51,
          type: 'tf',
          q: 'Richtig oder Falsch: Organisation',
          statements: [
            {s: 'Die Aufbauorganisation definiert den organisatorischen Aufbau und ist längerfristig ausgelegt.', c: true, feedback: 'Die Aufbauorganisation bildet das hierarchische Gerüst.'},
            {s: 'Im Einliniensystem kann ein Mitarbeiter mehrere Vorgesetzte haben.', c: false, feedback: 'Im Einliniensystem hat jeder MA genau einen Vorgesetzten. Mehrere = Mehrliniensystem.'},
            {s: 'Eine Stelle ist eine organisatorische Einheit mit bestimmten Aufgaben, definierten Kompetenzen und entsprechender Verantwortung.', c: true, feedback: 'Dies ist die Definition einer Stelle (AKV-Prinzip).'},
            {s: 'Die Holokratie ist eine sehr hierarchische Organisationsform.', c: false, feedback: 'Holokratie ist eine alternative, flache Organisationsform ohne klassische Hierarchie.'}
          ],
          tips: ['Einliniensystem = ein Vorgesetzter.','AKV = Aufgaben, Kompetenzen, Verantwortung.','Holokratie = flache, selbstorganisierende Struktur.'],
          reveal: ['Aussage 1 RICHTIG: Warum? Die Aufbauorganisation bildet das «Skelett» des Unternehmens – sie wird bewusst längerfristig angelegt, weil häufige Umstrukturierungen die Mitarbeitenden verunsichern.','Aussage 2 FALSCH: Warum? Einliniensystem = EIN Vorgesetzter pro Mitarbeiter (klare Befehlskette). MehrFACHunterstellung gibt es im Mehrliniensystem oder der Matrixorganisation. Beliebte Prüfungsfalle!','Aussage 3 RICHTIG: Warum? AKV steht für Aufgaben, Kompetenzen, Verantwortung – diese drei Elemente definieren jede Stelle. Ohne eines der drei Elemente ist die Stelle unvollständig definiert.','Aussage 4 FALSCH: Warum? Holokratie ist das Gegenteil von hierarchisch – sie organisiert sich in selbstständigen «Kreisen» ohne klassische Chefhierarchie. Sie wird oft mit Agilität und Start-ups assoziiert.']
        },
        {
          id: 52,
          type: 'mc',
          q: 'Welche Organisationsform zeichnet sich durch Mehrfachunterstellung aus?',
          options: [
            'Einliniensystem',
            'Stablinienorganisation',
            'Matrixorganisation',
            'Holokratie'
          ],
          answer: 2,
          tips: ['Mehrfachunterstellung = mehr als ein Vorgesetzter.','Einlinie = ein Vorgesetzter.','Matrix kombiniert zwei Dimensionen.'],
          reveal: ['Richtige Antwort: Matrixorganisation. Warum? Weil sie bewusst zwei Dimensionen (z.B. Funktion + Region) kombiniert – jeder Mitarbeiter hat dadurch ZWEI Vorgesetzte.','Warum NICHT Einliniensystem? Es hat genau EINEN Vorgesetzten pro Mitarbeiter – das ist das Gegenteil von Mehrfachunterstellung.','Warum NICHT Stablinienorganisation? Stabsstellen beraten nur, sie haben keine (oder nur funktionale) Weisungsbefugnis – es gibt keine echte Mehrfachunterstellung.','Warum NICHT Holokratie? Sie hat gar keine klassischen Vorgesetzten – sie arbeitet mit Kreisen und Rollen statt mit Hierarchien.','Prüfungstipp: «Mehrfachunterstellung» = Matrixorganisation. Dieser Begriff ist quasi ein Synonym.']
        }
      ],
      learningData: {
        title: 'Sekundäre Verkaufsplanung – Verkaufsorganisationsplanung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- verschiedene Gliederungsarten und Organisationsformen der Verkaufsorganisation beschreiben\n- Stellenbeschreibungen und Anforderungsprofile erstellen\n- die Ablauforganisation und ihre Hilfsmittel darstellen\n- ein agiles Unternehmen beschreiben\n- die wichtigsten Entwicklungen für Change und Transformation nennen'
          },
          {
            type: 'concept',
            title: '5.1 Einführung in die Verkaufsorganisationsplanung',
            text: 'Bei der sekundären Verkaufsplanung geht es um die Frage, welche organisatorischen und infrastrukturellen Voraussetzungen vom Unternehmen geschaffen werden müssen, damit die gesetzten Ziele erreicht werden können. Zentrale Themen sind: Verkaufsorganisationsplanung, Personalplanung und Verkaufshilfsmittelplanung.\n\nBei der organisatorischen Strukturierung von Unternehmen wird zwischen Aufbau- und Ablauforganisation unterschieden. Die Aufbauorganisation definiert den organisatorischen Aufbau des Unternehmens und ist längerfristig ausgelegt. Sie bildet das hierarchische Gerüst einer Organisation. Die Ablauforganisation regelt die Gestaltung der Ablaufprozesse innerhalb der Organisation nach Arbeitsinhalt, Arbeitsschritten und Arbeitszuordnung.'
          },
          {
            type: 'concept',
            title: '5.2 Aufgaben der Verkaufsorganisation',
            text: 'Mit der Verkaufsorganisation sollen Voraussetzungen geschaffen werden, dass die Mitarbeitenden im Verkauf ihre Aufgaben bestmöglich und ohne Reibungsverluste erledigen können. Es gilt, klare Strukturen zu schaffen, die folgende Forderungen erfüllen:\n- Optimale Integration der Verkaufsorganisation in die Marketing- und Gesamtorganisation\n- Grösstmögliche Flexibilität im Hinblick auf Marktveränderungen und neue Kundenbedürfnisse\n- Hohe Entwicklungsmöglichkeiten in Bezug auf neue Verkaufstechniken und -hilfsmittel\n- Hohe Effizienz, denn Arbeitsvolumen, Arbeitsanforderungen und Erwartungen an die Verkaufsmitarbeiter steigen stetig'
          },
          {
            type: 'concept',
            title: '5.3 Gliederung der Verkaufsorganisation',
            text: 'Im Hinblick auf eine effiziente Verkaufsorganisation bieten sich folgende vier Gliederungskriterien an:\n\n1. Gliederung nach Funktionen: Die Aufteilung erfolgt nach Teilverkaufsfunktionen und -aufgaben (z.B. Produktion, F&E, Marketing und Verkauf, Personal, Administration). Vorteile: Besetzung der Stellen mit Spezialisten, klare Kompetenz- und Verantwortungsbereiche, einfache Koordination und Kontrolle. Nachteile: Ausgeprägtes Ressortdenken, lange Kommunikationswege, wenig Flexibilität.\n\n2. Gliederung nach Gebieten: Das Verkaufsgebiet wird in geografische Teilgebiete gegliedert. Vorteile: Klare Kompetenz- und Verantwortungsbereiche, Eingehen auf Sprach- und Mentalitätsunterschiede, kürzere Reisezeiten. Nachteile: Verzettelung/Verlust einer einheitlichen Verkaufspolitik, lange Kommunikationswege, wenig Flexibilität.\n\n3. Gliederung nach Produkten: Gliederungskriterium ist das Produkt bzw. eine Produktlinie. Vorteile: Spezialisierung der Verkaufsmitarbeitenden, schnelle und gezielte Massnahmen für einzelne Produkte, bessere Umsatz- und Gewinnmöglichkeiten. Nachteile: Ausgeprägtes Spartendenken, Doppelspurigkeiten, doppelte Anzahl an qualifizierten Führungskräften.\n\n4. Gliederung nach Kundengruppen: Bei dieser Organisationsstruktur sind spezialisierte Bereiche für verschiedene Kundensegmente und/oder Kundengruppen zuständig. Vorteile: Kundenbedürfnisse werden erkannt und individuell befriedigt, heterogenes Verkaufsprogramm, bessere Umsatz- und Gewinnmöglichkeiten. Nachteile: Hohe Infrastruktur- und Personalkosten, Doppelspurigkeiten, lange Kommunikationswege.'
          },
          { type: 'svg', title: 'Organisationsformen: Einlinien-, Mehrliniensystem und Matrix', svg: '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="120" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Einliniensystem</text><rect x="80" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="120" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="100" y1="58" x2="70" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="140" y1="58" x2="170" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="30" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="70" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Abt. A</text><rect x="160" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="200" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Abt. B</text><line x1="50" y1="106" x2="50" y2="120" stroke="#4f46e5" stroke-width="1"/><line x1="90" y1="106" x2="90" y2="120" stroke="#4f46e5" stroke-width="1"/><rect x="30" y="120" width="30" height="20" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><rect x="70" y="120" width="30" height="20" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><text x="120" y="165" text-anchor="middle" fill="#78716c" font-size="9">Ein Vorgesetzter pro MA</text><text x="350" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Mehrliniensystem</text><rect x="310" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="350" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="330" y1="58" x2="300" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="370" y1="58" x2="400" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="260" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="300" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Fach A</text><rect x="390" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="430" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Fach B</text><rect x="320" y="125" width="60" height="22" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><text x="350" y="140" text-anchor="middle" fill="#3730a3" font-size="8">MA</text><line x1="300" y1="106" x2="340" y2="125" stroke="#4f46e5" stroke-width="1"/><line x1="430" y1="106" x2="360" y2="125" stroke="#4f46e5" stroke-width="1"/><text x="350" y="165" text-anchor="middle" fill="#78716c" font-size="9">Mehrere Vorgesetzte</text><text x="580" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Matrixorganisation</text><rect x="540" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="580" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="560" y1="58" x2="530" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="600" y1="58" x2="630" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="490" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="530" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Funktion</text><rect x="590" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="630" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Funktion</text><rect x="490" y="115" width="180" height="22" rx="3" fill="#4f46e5" opacity="0.8"/><text x="580" y="130" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">Projekt / Produkt (quer)</text><line x1="530" y1="106" x2="530" y2="115" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/><line x1="630" y1="106" x2="630" y2="115" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/><text x="580" y="160" text-anchor="middle" fill="#78716c" font-size="9">Doppelte Unterstellung</text><rect x="10" y="190" width="680" height="60" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="1"/><text x="350" y="212" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Kontroll- und Leitungsspanne: 5\u20137 Direktunterstellte pro Chef</text><text x="350" y="235" text-anchor="middle" fill="#78716c" font-size="10">Einlinie = Klarheit | Mehrlinie = Spezialisierung | Matrix = Flexibilit\u00e4t</text></svg>' },
          {
            type: 'concept',
            title: '5.4 Organisationsformen',
            text: 'Bei allen Organisationskonzepten stellt sich zunächst die Grundfrage, wie der Aufbau der Instanzen vollzogen werden soll. Grundsätzlich stehen einander zwei verschiedene Konzepte gegenüber: Einliniensysteme und Mehrliniensysteme.\n\nEinliniensystem: Jeder Mitarbeiter ist nur einem Vorgesetzten unterstellt, was klare Kompetenzabgrenzungen und eindeutige Unterstellungsverhältnisse schafft. Die reinen Linienorganisationen wurden in der Praxis weitgehend durch Stablinienorganisationen abgelöst, bei denen spezialisierte Stabsstellen ohne Weisungsbefugnis die Linieninstanzen unterstützen.\n\nMehrliniensystem: Die Mitarbeiterin untersteht in fachtechnischer Hinsicht mehreren Vorgesetzten. Diese Leitungsstruktur wird beispielsweise in Matrix- und in Projektorganisationen realisiert. Der Vorteil liegt in der fachlichen Spezialisierung und in der Verkürzung der Anordnungs- und Kommunikationswege.\n\nKontroll- und Leitungsspanne: Unter Kontroll- und Leitungsspanne wird die Anzahl der Mitarbeitenden, die einem Vorgesetzten direkt unterstellt sind, verstanden. Nach den gängigen Organisationsprinzipien sollte ein Chef fünf bis sieben Direktunterstellte haben.'
          },
          {
            type: 'concept',
            title: '5.4.4 Agile Unternehmen – Holokratie',
            text: 'Holokratie (engl.: Holacracy) ist ein Führungsstil, der Führung ganz ohne Chef möglich machen soll. Holokratie setzt auf Prinzipien der Selbstorganisation, der Kybernetik, des agilen Projektmanagements und der kollektiven Intelligenz der Mitarbeitenden.\n\nIn der Holokratie gibt es ein Regel-Set, das für alle Mitarbeitenden gilt (inkl. des CEO). Entscheidungen werden gemeinschaftlich getroffen und die Unternehmensspitze «entmachtet». Die vier Säulen der Holokratie sind:\n1. Doppelte Verbindung (Double-Linking) – Kommunikation und Informationsaustausch zwischen Kreisen\n2. Trennung von operativen und Steuerungstreffen – Tagesgeschäft vs. Weiterentwicklung\n3. Zuständigkeiten und Rollenverteilung – klare Verteilung der Rollen\n4. Dynamische Steuerung – brauchbare und korrigierbare Entscheidungsfindung\n\nVorteile der Holokratie: Schnellere Entscheidungsfindung, höhere Agilität, alle Mitarbeitenden gleichberechtigt einbezogen, höhere Selbstbestimmung, transparente Prozesse, höhere Arbeitseffizienz, bessere Kommunikation, höhere Innovationskraft.'
          },
          {
            type: 'concept',
            title: '5.5 Hilfsmittel der Organisation',
            text: 'Die fünf wichtigsten organisatorischen Hilfsmittel sind:\n\n1. Organigramm: Grafische Darstellung, mit der die Aufbauorganisation eines Unternehmens aufgezeigt wird. Rechtecke = Instanzen, Kreise = ausführende Stellen, Dreiecke = Stabsstellen.\n\n2. Stellenbeschreibungen: Verbindliche Dokumente, um die organisatorische Einordnung, Aufgabe, Kompetenz, Verantwortung (AKV) und Informationsbeziehungen von Stellen festzulegen. Sie bestehen aus drei Teilen: organisatorische Einordnung, Arbeitsgebiet in Stichworten, Anforderungen an den Stelleninhaber.\n\n3. Anforderungsprofil: Grundlage für die Stellenausschreibung. Unterscheidet zwischen Muss-Kriterien (erfolgsentscheidend, max. 7), Soll-Kriterien (wünschenswert) und Kann-Kriterien (förderlich).\n\n4. Funktionsdiagramm: Matrixförmige Gegenüberstellung von Aufgaben und Stellen.\n\n5. Organisationshandbücher: Dokumente der Ablauf- und Aufbauorganisation.'
          },
          {
            type: 'concept',
            title: '5.6 Ablauforganisation',
            text: 'Die Ablauforganisation regelt die Gestaltung der Ablaufprozesse innerhalb der Organisation nach Arbeitsinhalt, Arbeitsschritten und Arbeitszuordnung. Sie legt die produktionstechnischen Verfahren und Prozesse und die damit verbundenen administrativen Abläufe und Informationsflüsse fest.\n\nMögliche Darstellungen der Ablauforganisation sind:\n- Diagramme (Fluss-/Ablauf-, Balkendiagramme)\n- Pläne (Stufen- und Netzpläne etc.)\n\nMit Flussdiagrammen können komplexe Geschäftsprozesse oder auch Abläufe einfach verständlich und nachvollziehbar grafisch dargestellt werden.'
          },
          {
            type: 'concept',
            title: '5.7 Reorganisation – Change und Transformation',
            text: 'Unter Reorganisation versteht man die Änderung einer bestehenden Organisationsstruktur innerhalb der Aufbau- oder der Ablauforganisation.\n\nDurch die Veränderungen in der Arbeitswelt sind Unternehmen gefordert, sich an die neue Situation anzupassen. Aktuelle Entwicklungen: Gesättigte und transparente Märkte, Digitalisierung, intensiverer Wettbewerb, Beschleunigung der Internationalisierung, anspruchsvollere Kunden, steigende Vernetzung, rasanter technologischer Wandel.\n\nWährend der Begriff «Change» auf eine einmalige Veränderung mit einem Anfang und einem Ende bezieht, beschreibt «Transformation» einen Prozess, der – einmal angestossen – nicht mehr zum Stillstand kommt. Es geht um einen fundamentalen und dauerhaften Wandel, bei dem ein Unternehmen sein Geschäftsmodell, seine Vision, Kultur wie auch Struktur und Arbeitsweise verändert.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Die Aufbauorganisation definiert den organisatorischen Aufbau des Unternehmens und ist längerfristig ausgelegt. Die Ablauforganisation regelt die Gestaltung der Ablaufprozesse und ist eher mittelfristig ausgelegt.\n\nBeim Einliniensystem ist jeder Mitarbeiter nur einem Vorgesetzten unterstellt. Beim Mehrliniensystem untersteht der Mitarbeiter in fachtechnischer Hinsicht mehreren Vorgesetzten.\n\nStellenbeschreibungen sind verbindliche Dokumente zur Festlegung der organisatorischen Einordnung, AKV und Informationsbeziehungen von Stellen.\n\nDas Anforderungsprofil ist die Grundlage für die Stellenausschreibung mit Muss-, Soll- und Kann-Kriterien.\n\nReorganisation ist die Änderung einer bestehenden Organisationsstruktur. Change ist eine einmalige Veränderung, Transformation ein fortlaufender Prozess.'
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Die Aufbauorganisation definiert den organisatorischen Aufbau des Unternehmens und ist längerfristig ausgelegt. Die Ablauforganisation regelt die Gestaltung der Ablaufprozesse innerhalb der Organisation nach Arbeitsinhalt, Arbeitsschritten und Arbeitszuordnung.\n\nBeim Einliniensystem ist jeder Mitarbeiter nur einem Vorgesetzten unterstellt. Beim Mehrliniensystem untersteht der Mitarbeiter in fachtechnischer Hinsicht mehreren Vorgesetzten. Unter Kontroll- und Leitungsspanne wird die Anzahl der Mitarbeitenden, die einem Vorgesetzten direkt unterstellt sind, verstanden.\n\nStellenbeschreibungen sind verbindliche Dokumente, mit denen die organisatorische Einordnung, Aufgabe, Kompetenz, Verantwortung sowie die Informationsbeziehungen von Stellen festgelegt und gegenüber anderen Stellen abgegrenzt werden.\n\nDas Anforderungsprofil ist die Grundlage für die Stellenausschreibung.\n\nDas Funktionsdiagramm ist eine matrixförmige Gegenüberstellung von Aufgaben und Stellen.\n\nReorganisation ist die Änderung einer bestehenden Organisationsstruktur innerhalb der Aufbau- oder der Ablauforganisation.\n\nAgile Führung (Holokratie) setzt auf Prinzipien Selbstorganisation, Kybernetik, agiles Projektmanagement und kollektive Intelligenz der Mitarbeitenden.\n\nBei Veränderungsprozessen sind Change und Transformation zwei voneinander abzugrenzende Phänomene.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Aufbauorganisation', def: 'Definiert den organisatorischen Aufbau eines Unternehmens und bildet dessen hierarchisches Gerüst. Ist längerfristig ausgelegt.'},
              {term: 'Ablauforganisation', def: 'Regelt die Gestaltung der Ablaufprozesse innerhalb der Organisation nach Arbeitsinhalt, Arbeitsschritten und Arbeitszuordnung.'},
              {term: 'Einliniensystem', def: 'Organisationsform, bei der jeder Mitarbeiter nur einem Vorgesetzten unterstellt ist.'},
              {term: 'Mehrliniensystem', def: 'Organisationsform, bei der Mitarbeitende in fachtechnischer Hinsicht mehreren Vorgesetzten unterstehen (z.B. Matrix- oder Projektorganisation).'},
              {term: 'Kontroll- und Leitungsspanne', def: 'Anzahl der Mitarbeitenden, die einem Vorgesetzten direkt unterstellt sind. Optimal: 5 bis 7 Direktunterstellte.'},
              {term: 'Stellenbeschreibung', def: 'Verbindliches Dokument zur organisatorischen Einordnung, Aufgabe, Kompetenz, Verantwortung (AKV) und Informationsbeziehungen einer Stelle.'},
              {term: 'Anforderungsprofil', def: 'Grundlage für die Stellenausschreibung mit Muss-, Soll- und Kann-Kriterien.'},
              {term: 'Organigramm', def: 'Grafische Darstellung der Aufbauorganisation eines Unternehmens.'},
              {term: 'Funktionsdiagramm', def: 'Matrixförmige Gegenüberstellung von Aufgaben und Stellen.'},
              {term: 'Holokratie', def: 'Führungsstil ohne klassische Hierarchie, basierend auf Selbstorganisation, Kybernetik und kollektiver Intelligenz.'},
              {term: 'Reorganisation', def: 'Änderung einer bestehenden Organisationsstruktur innerhalb der Aufbau- oder der Ablauforganisation.'},
              {term: 'Change', def: 'Einmalige Veränderung mit einem Anfang und einem Ende.'},
              {term: 'Transformation', def: 'Fortlaufender Prozess der fundamentalen und dauerhaften Veränderung eines Unternehmens.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch6',
      num: 'Kapitel 6',
      title: 'Sekundäre Verkaufsplanung – Personal und Verkaufshilfsmittel',
      pageStart: 111, pageEnd: 132,
      exercises: [
        {
          id: 53,
          type: 'text',
          q: 'Wann kann es Sinn machen, die Suche und die Rekrutierung von Mitarbeitenden extern durchführen zu lassen? Geben Sie zwei Fälle an.',
          keywords: ['keine','personalabteilung','überlastet','spezialist','führungskräfte','extern','vorhanden'],
          solution: 'Eine externe Rekrutierung macht Sinn, wenn: keine eigene Personalabteilung vorhanden ist, die eigene Personalabteilung überlastet ist, Spezialistinnen und Führungskräfte gesucht werden.',
          questions: [
            {q: 'Zwei Fälle:', keywords: ['keine','personalabteilung','überlastet','spezialist','führungskräfte','extern','vorhanden'], minKeywords: 2}
          ],
          tips: ['Denken Sie an die eigene Personalabteilung.','Spezialfälle erfordern externe Hilfe.','Bei Kapazitätsproblemen.'],
          reveal: ['Warum extern bei fehlender Personalabteilung? Kleine Unternehmen haben oft kein HR – dann fehlt das Know-how für professionelle Rekrutierung (Stellenausschreibung, Bewerbungsgespräche, Assessment).','Warum extern bei Überlastung? Wenn die HR-Abteilung gleichzeitig viele Stellen besetzen muss, leidet die Qualität – externe Profis entlasten und beschleunigen den Prozess.','Warum extern bei Spezialisten/Führungskräften? Headhunter haben ein Netzwerk und können auch passive Kandidaten (die nicht aktiv suchen) ansprechen – das ist bei Top-Positionen entscheidend.','Prüfungstipp: Die Frage verlangt «zwei Fälle» – nennen Sie die zwei stärksten Argumente und begründen Sie kurz.']
        },
        {
          id: 54,
          type: 'text',
          q: 'Was sind die Ziele einer Verkaufsschulung?',
          keywords: ['wissen','fähigkeiten','verkaufen','erleichtern','umsatz','absatz','zufriedene','motivierte','mitarbeitende','kunden'],
          solution: 'In einer Verkaufsschulung sollen den Teilnehmenden Wissen und Fähigkeiten vermittelt werden, die ihnen das Verkaufen erleichtern. Im Zentrum stehen nicht nur Umsatz, Absatz und Gewinn, sondern zufriedene und motivierte Mitarbeitende und vor allem Kunden.',
          questions: [
            {q: 'Ziele:', keywords: ['wissen','fähigkeiten','verkaufen','erleichtern','umsatz','absatz','zufriedene','motivierte','mitarbeitende','kunden'], minKeywords: 3}
          ],
          tips: ['Schulungen vermitteln Wissen und Fähigkeiten.','Im Zentrum stehen nicht nur Umsatz und Absatz.','Auch Mitarbeiter- und Kundenzufriedenheit.'],
          reveal: ['Warum nicht nur Umsatz und Absatz? Weil kurzfristige Verkaufszahlen ohne Kundenzufriedenheit nicht nachhaltig sind – ein unzufriedener Kunde kauft einmal, ein zufriedener kommt immer wieder.','Warum auch Mitarbeiterzufriedenheit? Motivierte Verkäufer verkaufen besser und bleiben länger im Unternehmen – die Schulung reduziert also auch Fluktuation und Rekrutierungskosten.','Warum «vor allem Kunden»? Der Kunde steht im Zentrum, weil er letztlich den Umsatz generiert. Schulungen sollen befähigen, Kundenbedürfnisse besser zu erkennen und zu erfüllen.','Prüfungstipp: Die Antwort muss BEIDE Aspekte enthalten – Wissen/Fähigkeiten vermitteln UND nicht nur Zahlen, sondern Zufriedenheit aller Beteiligten.']
        },
        {
          id: 55,
          type: 'match',
          q: 'Handelt es sich bei den aufgeführten Beispielen um direkt finanzielle, indirekt finanzielle oder nichtfinanzielle Anreize?',
          pairs: [
            {l: 'Ausbildungszuschuss', r: 'Indirekt finanziell'},
            {l: 'Spesenvergütung', r: 'Direkt finanziell'},
            {l: 'Auszeichnung', r: 'Nichtfinanziell'},
            {l: 'Verkaufsprämie', r: 'Direkt finanziell'},
            {l: 'Zusätzliche Verantwortung', r: 'Nichtfinanziell'},
            {l: 'Geschäftswagen', r: 'Indirekt finanziell'},
            {l: 'Beteiligungszulage', r: 'Direkt finanziell'}
          ],
          options: ['Direkt finanziell','Indirekt finanziell','Nichtfinanziell'],
          tips: ['Direkt finanziell = Geld.','Indirekt finanziell = Geldwert, aber nicht ausbezahlt.','Nichtfinanziell = kein monetärer Wert.'],
          reveal: ['Entscheidungsregel: Direkt finanziell = Geld fliesst direkt auf das Konto (Prämie, Provision, Spesen). Indirekt finanziell = hat Geldwert, wird aber nicht ausbezahlt (Firmenwagen, Ausbildung). Nichtfinanziell = kein Geldwert, aber motivierend (Anerkennung, Verantwortung).','Warum ist der Geschäftswagen indirekt finanziell? Er hat einen klaren Geldwert (Leasing, Benzin), wird aber nicht als Lohn ausbezahlt – der MA spart private Autokosten.','Warum ist «Zusätzliche Verantwortung» nichtfinanziell? Sie bringt kein Geld, aber Wertschätzung und persönliches Wachstum – das motiviert langfristig oft stärker als Geld.','Häufiger Fehler: Spesenvergütung als «indirekt finanziell» einordnen. Spesen werden direkt ausbezahlt → direkt finanziell, auch wenn sie Auslagen erstatten.']
        },
        {
          id: 56,
          type: 'text',
          q: 'Geben Sie je 2 Beispiele für zu beachtende Punkte in den sechs Phasen des Ausbildungskonzepts.',
          keywords: ['ist-situation','ausgangslage','zielsetzung','strategie','vorgehen','massnahmen','budget','kontrollen','lernziele'],
          solution: '1. Ist-Situation/Ausgangslage. 2. Zielsetzungen/Lernziele. 3. Strategie/Vorgehen. 4. Massnahmen. 5. Budget. 6. Kontrollen.',
          questions: [
            {q: 'Nennen Sie die 6 Phasen und je ein Beispiel:', keywords: ['ist-situation','ausgangslage','zielsetzung','strategie','vorgehen','massnahmen','budget','kontrollen','lernziele'], minKeywords: 4}
          ],
          tips: ['Das Ausbildungskonzept hat 6 Schritte.','Es folgt dem gleichen Raster wie das Konzeptraster.','Von der Analyse bis zur Kontrolle.'],
          reveal: ['Warum 6 Phasen? Das Ausbildungskonzept folgt dem bewährten Konzeptraster (Analyse → Ziele → Strategie → Massnahmen → Budget → Kontrolle). Jede Phase baut auf der vorherigen auf.','Warum mit Ist-Analyse starten? Ohne zu wissen, wo man steht (Ausbildungsstand, Budget), kann man keine sinnvollen Ziele setzen – sonst plant man an der Realität vorbei.','Warum Kontrollen am Schluss? Nur durch Lernkontrollen und Prüfungen weiss man, ob die Schulung gewirkt hat – ohne Kontrolle ist jede Investition ein Blindflug.','Prüfungstipp: Die 6 Schritte entsprechen dem allgemeinen Konzeptraster, das auch in anderen Planungen vorkommt. Wer das Raster einmal versteht, kann es überall anwenden.']
        },
        {
          id: 57,
          type: 'text',
          q: 'Lyreco ist Distributor für Kaffeemaschinen von Nespresso. Aussendienstmitarbeitende besuchen Unternehmen. Was für ein Lohnsystem schlagen Sie vor?',
          keywords: ['fix','variabel','provision','lohnbestandteil','60','40','prämie','wettbewerb','maschinen'],
          solution: 'Vorschlag: ca. 60% fixer Lohnbestandteil und 40% variable Lohnbestandteile in Form von Provisionen für verkaufte Maschinen. Zusätzlich: Wettbewerbe für das ganze Team.',
          questions: [
            {q: 'Lohnsystem-Vorschlag:', keywords: ['fix','variabel','provision','lohnbestandteil','60','40','prämie','wettbewerb','maschinen'], minKeywords: 2}
          ],
          tips: ['Eine Kombination aus Fix und Variabel ist üblich.','Provisionen motivieren zum Verkaufen.','Wettbewerbe können zusätzlich motivieren.'],
          reveal: ['Warum 60/40-Aufteilung? Der fixe Anteil (60%) gibt Sicherheit und deckt Grundbedürfnisse. Der variable Anteil (40%) motiviert zum aktiven Verkaufen. Zu viel variabel → Unsicherheit, zu wenig → kein Anreiz.','Warum Provisionen pro Maschine? Weil Lyreco als Distributor direkt an jeder verkauften Maschine verdient – die Provision koppelt den Lohn an den messbaren Verkaufserfolg.','Warum Teamwettbewerbe? Sie fördern den Zusammenhalt und verhindern, dass nur der AD motiviert ist. Der ID (Innendienst) unterstützt den Verkauf massgeblich und soll auch profitieren.','Prüfungstipp: Bei Lohnsystem-Fragen immer begründen, WARUM Sie dieses Verhältnis wählen. Die Prüfung will Argumentation, nicht nur Zahlen.']
        },
        {
          id: 58,
          type: 'text',
          q: 'Welche drei grundsätzlichen Möglichkeiten zur Motivation der Mitarbeitenden gibt es? Nennen und erklären Sie die drei Möglichkeiten.',
          keywords: ['direkt finanziell','indirekt finanziell','nichtfinanziell','monetär','geld','leistung','anreiz','immateriell'],
          solution: '1. Direkt finanzielle Anreize: monetäre Leistungen. 2. Indirekt finanzielle Anreize: Leistungen, die Geldwerten entsprechen. 3. Nichtfinanzielle Anreize: ohne monetären Wert, aber nachhaltig motivierend.',
          questions: [
            {q: 'Drei Möglichkeiten:', keywords: ['direkt finanziell','indirekt finanziell','nichtfinanziell','monetär','geld','leistung','anreiz','immateriell'], minKeywords: 3}
          ],
          tips: ['Die drei Anreizarten unterscheiden sich nach dem monetären Wert.','Direkt finanziell = Geld ausbezahlt.','Nichtfinanziell = kein monetärer Wert, aber trotzdem motivierend.'],
          reveal: ['Warum drei Kategorien? Weil Motivation nicht nur über Geld funktioniert. Studien zeigen: Ab einem gewissen Lohnniveau motivieren immaterielle Anreize stärker als Gehaltserhöhungen.','1. Direkt finanziell: Geld auf dem Konto (Provision, Prämie, Bonus). Wirkt sofort, aber der Effekt nutzt sich ab – die nächste Prämie muss höher sein.','2. Indirekt finanziell: Hat Geldwert, aber kein Cash (Firmenwagen, Weiterbildung, Pensionskassenbeiträge). Vorteil: Der MA profitiert täglich davon, nicht nur einmal.','3. Nichtfinanziell: Anerkennung, Verantwortung, Karrierechancen. Wirkt am nachhaltigsten, weil es die intrinsische Motivation anspricht.','Prüfungstipp: Bei der Erklärung immer ein konkretes Beispiel pro Kategorie nennen – das zeigt Praxisbezug.']
        },
        {
          id: 59,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zu Verkaufshilfsmitteln.',
          template: 'Es gibt {0} und {1} Verkaufshilfsmittel. Zu den technischen gehören {2}-, Informations- und Transporthilfen. Persönliche Hilfsmittel sind {3}.',
          blanks: ['technische','persönliche','Präsentations','immateriell'],
          accept: [['technische'],['persönliche'],['Präsentations'],['immateriell']],
          tips: ['Technische Hilfsmittel sind physisch/digital.','Persönliche Hilfsmittel sind immateriell.','Präsentationshilfen helfen bei der Produktdarstellung.'],
          reveal: ['Warum diese Zweiteilung? Technische Hilfsmittel kann man kaufen/beschaffen (Laptop, Broschüre, Auto). Persönliche Hilfsmittel muss man entwickeln (Fachwissen, Auftreten, Überzeugungskraft).','Warum sind persönliche Hilfsmittel «immateriell»? Weil man sie nicht anfassen kann – aber sie sind oft entscheidender als jede Broschüre. Ein kompetenter Verkäufer überzeugt auch ohne Hochglanz-Präsentation.','Technische Hilfsmittel in 3 Kategorien: Präsentationshilfen (Muster, Demos), Informationshilfen (CRM, Kataloge), Transporthilfen (Firmenwagen, Lieferwagen).','Prüfungstipp: Die Lücke «immateriell» wird oft vergessen. Merkhilfe: Technisch = materiell (anfassbar), Persönlich = immateriell (nicht anfassbar).']
        },
        {
          id: 60,
          type: 'mc',
          q: 'Welcher Beruf gehört NICHT zu den typischen Verkaufsberufen?',
          options: [
            'Key-Account-Manager/in',
            'Merchandiser / Sales Promoter',
            'Buchhalter/in',
            'Influencer'
          ],
          answer: 2,
          tips: ['Verkaufsberufe sind direkt am Verkaufsprozess beteiligt.','Influencer gelten heute als Verkaufsberuf.','Buchhaltung ist eine Finanzfunktion.'],
          reveal: ['Richtige Antwort: Buchhalter/in. Warum? Buchhaltung gehört zur Finanzabteilung und hat keinen direkten Bezug zum Verkaufsprozess – sie verbucht Ergebnisse, generiert aber keinen Umsatz.','Warum IST Key-Account-Manager ein Verkaufsberuf? KAM betreut die wichtigsten Kunden persönlich und ist direkt für deren Umsatz verantwortlich.','Warum IST Influencer ein Verkaufsberuf? Überraschend, aber korrekt: Influencer bewerben Produkte und generieren direkt Verkäufe – ein moderner Verkaufskanal.','Warum IST Merchandiser ein Verkaufsberuf? Er sorgt für optimale Produktplatzierung am POS (Point of Sale) und beeinflusst damit direkt die Kaufentscheidung.','Prüfungstipp: «Influencer» als Verkaufsberuf ist eine beliebte Fangfrage – viele ordnen ihn fälschlich dem Marketing zu.']
        },
        {
          id: 61,
          type: 'tf',
          q: 'Employer Branding (RF)',
          statements: [
            {s: 'Employer Branding beschreibt Massnahmen, die ein Unternehmen ergreifen kann, um die eigene Marke zu stärken und sich als attraktiver Arbeitgeber darzustellen.', c: true, feedback: 'Exakte Definition von Employer Branding.'},
            {s: 'Das Ausbildungskonzept gliedert sich in 4 Schritte.', c: false, feedback: 'Es sind 6 Schritte: Analyse, Ziele, Strategie, Massnahmen, Budget, Kontrolle.'},
            {s: 'Verkaufshilfsmittel erleichtern und unterstützen die Verkaufskontakte.', c: true, feedback: 'Sie werden in technische und persönliche Hilfsmittel unterteilt.'}
          ],
          tips: ['Employer Branding = Arbeitgebermarke stärken.','Ausbildungskonzept folgt dem 6-Schritte-Raster.','Hilfsmittel unterstützen den Verkaufskontakt.'],
          reveal: ['Aussage 1 RICHTIG: Warum? Employer Branding macht das Unternehmen als Arbeitgeber attraktiv – in Zeiten des Fachkräftemangels ist das entscheidend, um die besten Verkaufstalente zu gewinnen.','Aussage 2 FALSCH: Warum? Das Ausbildungskonzept hat 6 Schritte (nicht 4): Analyse, Ziele, Strategie, Massnahmen, Budget, Kontrolle. Die Zahl «4» ist eine bewusste Falle – sie passt zu keinem bekannten Modell.','Aussage 3 RICHTIG: Warum? Verkaufshilfsmittel (Broschüren, CRM, Muster) erleichtern den Kontakt zum Kunden und machen den Verkaufsprozess professioneller und effizienter.','Prüfungstipp: Bei RF-Aufgaben immer die genauen Zahlen prüfen – «4 statt 6 Schritte» ist eine typische Zahlenfalle.']
        },
        {
          id: 62,
          type: 'sort',
          q: 'Ordnen Sie die Stufen der Maslowschen Bedürfnispyramide von unten (Grundbedürfnisse) nach oben (Selbstverwirklichung).',
          items: ['Körperliche Grundbedürfnisse (Essen, Trinken, Schlaf)', 'Sicherheitsbedürfnisse (Wohnung, Arbeitsplatz)', 'Soziale Beziehungen (Freundschaft, Liebe)', 'Soziale Anerkennung (Status, Karriere)', 'Selbstverwirklichung (Talententfaltung)'],
          tips: ['Die Pyramide baut von unten nach oben auf.','Erst wenn eine Stufe befriedigt ist, wird die nächste relevant.','Sicherheit kommt vor sozialen Bedürfnissen.'],
          reveal: ['Warum diese Reihenfolge? Maslow sagt: Erst wenn eine tiefere Stufe befriedigt ist, wird die nächste relevant. Wer Hunger hat, denkt nicht an Karriere.','Warum von Grundbedürfnissen aufwärts? Essen/Trinken → Sicherheit → Soziales → Anerkennung → Selbstverwirklichung. Jede Stufe baut logisch auf der vorherigen auf.','Relevanz im Verkauf: Ein Verkäufer, der die Bedürfnisstufe seines Kunden erkennt, kann gezielt argumentieren. Beispiel: Sicherheitsbedürfnis → «Unser Produkt schützt Sie vor...»','Häufiger Fehler: Stufen 3 und 4 verwechseln. Soziale Beziehungen (Zugehörigkeit, Liebe) kommen VOR sozialer Anerkennung (Status, Karriere).']
        },
        {
          id: 63,
          type: 'sort',
          q: 'Ordnen Sie die sechs Schritte des Ausbildungskonzepts in die richtige Reihenfolge.',
          items: ['Analyse der Ist-Situation', 'Setzen der Ausbildungsziele', 'Entwicklung der Strategie', 'Planung der Massnahmen', 'Zusammenstellen des Budgets', 'Erarbeitung der Kontrollpläne'],
          tips: ['Das Konzept folgt dem bekannten 6-Schritte-Raster.','Zuerst analysieren, dann Ziele setzen.','Das Budget kommt vor der Kontrolle.'],
          reveal: ['Warum diese Reihenfolge? Man kann keine Ziele setzen, ohne die Ist-Situation zu kennen, und kein Budget planen, ohne die Massnahmen zu kennen – jeder Schritt liefert den Input für den nächsten.','Merkhilfe: A-Z-S-M-B-K (Analyse, Ziele, Strategie, Massnahmen, Budget, Kontrolle). Dieses Raster kommt in vielen Prüfungsfragen vor.','Warum Kontrolle am Schluss? Ohne Erfolgskontrolle weiss niemand, ob die Ausbildung gewirkt hat. Kontrolle schliesst den Kreis und liefert Inputs für die nächste Analyse.','Prüfungstipp: Dieses 6-Schritte-Raster ist identisch mit dem allgemeinen Konzeptraster – wer es einmal beherrscht, kann es auf jede Planungsaufgabe anwenden.']
        }
      ],
      learningData: {
        title: 'Sekundäre Verkaufsplanung – Personal und Verkaufshilfsmittel',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- die Personalauswahl von Verkaufsmitarbeitern und die Einführung von neuen Mitarbeitenden beschreiben\n- erklären, wie Verkaufsmitarbeiter motiviert werden können\n- darlegen, worauf bei der Ausbildung von Verkaufsmitarbeitern geachtet werden muss\n- die technischen und persönlichen Verkaufshilfsmittel unterscheiden\n- die verschiedenen Berufe im Verkauf und die besonderen Auftragsverhältnisse aufzählen'
          },
          {
            type: 'concept',
            title: '6.1 Auswahl von Verkaufsmitarbeitenden',
            text: 'Die Auswahl oder die Selektion der im Verkauf tätigen Mitarbeitenden kann in vier Schritte unterteilt werden:\n\n1. Ausarbeitung der Anforderungen: Die Anforderungen ergeben sich aus der Stellenbeschreibung und dem darin integrierten Anforderungs- und Leistungsprofil (berufliche, charakterliche und persönliche Anforderungen).\n\n2. Rekrutierungsmöglichkeiten und Auswahlverfahren definieren: Es gibt grundsätzlich zwei Möglichkeiten: zentrale und dezentrale Rekrutierung sowie interne oder externe Rekrutierung. Interne Rekrutierung umfasst z.B. interne Ausschreibungen via Intranet, Nachwuchsförderung, Talententwicklung, Versetzung. Externe Rekrutierung umfasst z.B. Stellenausschreibungen auf Job- und Social-Media-Plattformen, Suche via Personalvermittler/Headhunter, Arbeitsämter, Job- und Berufsmessen.\n\n3. Entscheid der Rekrutierung.\n\n4. Erfolgskontrolle: Anhand der Verkaufskosten und der erzielten Umsätze wird die Produktivität der Mitarbeitenden laufend überprüft und beurteilt.'
          },
          {
            type: 'svg',
            title: 'Rekrutierungsm\u00f6glichkeiten (Abb. 6-1)',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk61g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient><linearGradient id="vk61g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b6a3e"/><stop offset="100%" stop-color="#a0845c"/></linearGradient></defs><rect x="150" y="10" width="400" height="40" rx="8" fill="url(#vk61g1)"/><text x="350" y="36" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Rekrutierung von Mitarbeitenden</text><line x1="250" y1="50" x2="250" y2="75" stroke="#5c3d1e" stroke-width="2"/><line x1="450" y1="50" x2="450" y2="75" stroke="#5c3d1e" stroke-width="2"/><rect x="50" y="75" width="300" height="35" rx="6" fill="url(#vk61g2)"/><text x="200" y="98" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Interne Rekrutierung</text><rect x="380" y="75" width="280" height="35" rx="6" fill="url(#vk61g2)"/><text x="520" y="98" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Externe Rekrutierung</text><rect x="50" y="120" width="300" height="230" rx="8" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5"/><g fill="#5c3d1e" font-size="10"><circle cx="75" cy="150" r="3" fill="#8b6a3e"/><text x="85" y="154">Interne Ausschreibungen via</text><text x="85" y="167">Intranet und Infoboards</text><circle cx="75" cy="187" r="3" fill="#8b6a3e"/><text x="85" y="191">Nachwuchsf\u00f6rderung,</text><text x="85" y="204">Talententwicklung</text><circle cx="75" cy="224" r="3" fill="#8b6a3e"/><text x="85" y="228">Aus- und Weiterbildung</text><circle cx="75" cy="248" r="3" fill="#8b6a3e"/><text x="85" y="252">Versetzung, Umschulung</text><circle cx="75" cy="272" r="3" fill="#8b6a3e"/><text x="85" y="276">Eigene Mitarbeitende nutzen</text><text x="85" y="289">ihr Netzwerk</text><circle cx="75" cy="309" r="3" fill="#8b6a3e"/><text x="85" y="313">Hinweise auf Gesch\u00e4ftsfahrzeugen</text><circle cx="75" cy="333" r="3" fill="#8b6a3e"/><text x="85" y="337">Etc.</text></g><rect x="380" y="120" width="280" height="230" rx="8" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5"/><g fill="#5c3d1e" font-size="10"><circle cx="405" cy="150" r="3" fill="#8b6a3e"/><text x="415" y="154">Stellenausschreibungen in</text><text x="415" y="167">Printmedien</text><circle cx="405" cy="187" r="3" fill="#8b6a3e"/><text x="415" y="191">Stellenausschreibungen auf Job-</text><text x="415" y="204">und Social-Media-Plattformen</text><circle cx="405" cy="224" r="3" fill="#8b6a3e"/><text x="415" y="228">Suche via Personalvermittler,</text><text x="415" y="241">Headhunter, Tempor\u00e4rb\u00fcros</text><circle cx="405" cy="261" r="3" fill="#8b6a3e"/><text x="415" y="265">Arbeits\u00e4mter, RAV</text><circle cx="405" cy="285" r="3" fill="#8b6a3e"/><text x="415" y="289">Anschl\u00e4ge in Ausbildungsst\u00e4tten</text><circle cx="405" cy="309" r="3" fill="#8b6a3e"/><text x="415" y="313">Job- und Berufsmessen</text><circle cx="405" cy="333" r="3" fill="#8b6a3e"/><text x="415" y="337">Etc.</text></g><text x="350" y="372" text-anchor="middle" fill="#78716c" font-size="10">RAV = Regionales Arbeitsvermittlungszentrum</text></svg>'
          },
          {
            type: 'concept',
            title: '6.2 Einführung von neuen Mitarbeitenden',
            text: 'Mit der Unterzeichnung des Arbeitsvertrags ist der Vorgang der Personalsuche und -beschaffung noch nicht abgeschlossen. Die neuen Mitarbeitenden müssen rasch eingearbeitet und an das Unternehmen gebunden werden. Loyalität dem Unternehmen gegenüber ist das höchste Ziel.\n\nEine Bezugsperson (Gotte/Götti) soll bestimmt werden, die dem neuen Mitarbeitenden dabei hilft, sich fachlich und sozial in den Betrieb zu integrieren. Die Gotte oder der Götti ist auch seine Ansprechperson bei fachlichen Schwierigkeiten oder zwischenmenschlichen Problemen.'
          },
          { type: 'svg', title: 'Maslowsche Bed\u00fcrfnispyramide', svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="250" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Maslowsche Bed\u00fcrfnispyramide</text><polygon points="250,45 50,310 450,310" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><rect x="190" y="55" width="120" height="35" rx="6" fill="#4f46e5"/><text x="250" y="70" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Selbst-</text><text x="250" y="82" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">verwirklichung</text><rect x="155" y="100" width="190" height="35" rx="6" fill="#6366f1"/><text x="250" y="115" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Soziale Anerkennung</text><text x="250" y="128" text-anchor="middle" fill="#e0e7ff" font-size="8">Status, Karriere, Macht</text><rect x="120" y="145" width="260" height="35" rx="6" fill="#818cf8"/><text x="250" y="160" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Soziale Bed\u00fcrfnisse</text><text x="250" y="173" text-anchor="middle" fill="#e0e7ff" font-size="8">Freundschaft, Partnerschaft, Liebe</text><rect x="85" y="190" width="330" height="35" rx="6" fill="#a5b4fc"/><text x="250" y="205" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">2. Sicherheitsbed\u00fcrfnisse</text><text x="250" y="218" text-anchor="middle" fill="#3730a3" font-size="8">Wohnung, Arbeitsplatz, Gesundheit</text><rect x="55" y="235" width="390" height="35" rx="6" fill="#c7d2fe"/><text x="250" y="250" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">1. K\u00f6rperliche Grundbed\u00fcrfnisse</text><text x="250" y="263" text-anchor="middle" fill="#3730a3" font-size="8">Atmung, W\u00e4rme, Trinken, Essen, Schlaf</text><text x="250" y="295" text-anchor="middle" fill="#78716c" font-size="10">H\u00f6here Bed\u00fcrfnisse werden erst relevant, wenn tiefere erf\u00fcllt sind</text><text x="480" y="80" text-anchor="end" fill="#4f46e5" font-size="9">Wachstums-</text><text x="480" y="93" text-anchor="end" fill="#4f46e5" font-size="9">bed\u00fcrfnisse</text><text x="480" y="220" text-anchor="end" fill="#818cf8" font-size="9">Defizit-</text><text x="480" y="233" text-anchor="end" fill="#818cf8" font-size="9">bed\u00fcrfnisse</text></svg>' },
          {
            type: 'concept',
            title: '6.3 Motivation im Verkauf',
            text: 'Die Motivationsplanung legt fest, wie die Verkaufsmitarbeitenden dazu motiviert werden können, ihre Aufgaben zu erfüllen. Es gibt drei Arten von Systemen für die Entlohnung:\n- 100% fixe Entlohnung\n- 100% variable Entlohnung\n- Kombination der fixen und der variablen Entlohnung\n\nFür die prinzipielle Darstellung von Bedürfnissen wird häufig das Modell von Maslow verwendet (Maslowsche Bedürfnispyramide):\n1. Körperliche Grundbedürfnisse (Atmung, Wärme, Trinken, Essen, Schlaf)\n2. Sicherheit (Wohnung, fester Arbeitsplatz, Gesetze, Versicherungen, Gesundheit)\n3. Soziale Beziehungen (Freundeskreis, Partnerschaft, Liebe, Kommunikation)\n4. Soziale Anerkennung (Status, Wohlstand, Gold, Macht, Karriere)\n5. Selbstverwirklichung (Individualität, Talententfaltung, Kunst, Philosophie)\n\nEs ist wichtig, dass externe Motivation allein möglicherweise nicht ausreicht. Interne Motivationsfaktoren wie intrinsische Motivation, die aus persönlichem Interesse an der Arbeit resultiert, spielen ebenfalls eine entscheidende Rolle bei der Entwicklung von Loyalität.'
          },
          {
            type: 'svg',
            title: 'Finanzielle und nichtfinanzielle Anreize (Abb. 6-7)',
            svg: '<svg viewBox="0 0 750 480" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk67g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient><linearGradient id="vk67g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b6a3e"/><stop offset="100%" stop-color="#a0845c"/></linearGradient></defs><rect x="275" y="10" width="200" height="40" rx="8" fill="url(#vk67g1)"/><text x="375" y="36" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Anreize</text><line x1="300" y1="50" x2="225" y2="75" stroke="#5c3d1e" stroke-width="2"/><line x1="450" y1="50" x2="525" y2="75" stroke="#5c3d1e" stroke-width="2"/><rect x="100" y="75" width="200" height="35" rx="6" fill="url(#vk67g2)"/><text x="200" y="98" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Finanziell</text><rect x="450" y="75" width="200" height="35" rx="6" fill="url(#vk67g2)"/><text x="550" y="98" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Nichtfinanziell</text><line x1="150" y1="110" x2="110" y2="140" stroke="#8b6a3e" stroke-width="1.5"/><line x1="250" y1="110" x2="290" y2="140" stroke="#8b6a3e" stroke-width="1.5"/><rect x="30" y="140" width="160" height="30" rx="6" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5"/><text x="110" y="160" text-anchor="middle" fill="#5c3d1e" font-size="11" font-weight="bold">Direkt</text><rect x="210" y="140" width="160" height="30" rx="6" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5"/><text x="290" y="160" text-anchor="middle" fill="#5c3d1e" font-size="11" font-weight="bold">Indirekt</text><line x1="70" y1="170" x2="50" y2="200" stroke="#8b6a3e" stroke-width="1.5"/><line x1="150" y1="170" x2="170" y2="200" stroke="#8b6a3e" stroke-width="1.5"/><rect x="10" y="200" width="100" height="30" rx="5" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><text x="60" y="220" text-anchor="middle" fill="#5c3d1e" font-size="10" font-weight="bold">Fix</text><rect x="130" y="200" width="100" height="30" rx="5" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><text x="180" y="220" text-anchor="middle" fill="#5c3d1e" font-size="10" font-weight="bold">Variabel</text><rect x="10" y="240" width="100" height="100" rx="6" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><g fill="#5c3d1e" font-size="9"><circle cx="25" cy="262" r="2.5" fill="#8b6a3e"/><text x="32" y="265">Fixlohn</text><circle cx="25" cy="282" r="2.5" fill="#8b6a3e"/><text x="32" y="285">Fixe Spesen</text></g><rect x="130" y="240" width="100" height="100" rx="6" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><g fill="#5c3d1e" font-size="9"><circle cx="145" cy="262" r="2.5" fill="#8b6a3e"/><text x="152" y="265">Provisionen</text><circle cx="145" cy="282" r="2.5" fill="#8b6a3e"/><text x="152" y="285">Pr\u00e4mien</text></g><rect x="210" y="240" width="160" height="100" rx="6" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1"/><g fill="#5c3d1e" font-size="9"><circle cx="225" cy="262" r="2.5" fill="#8b6a3e"/><text x="232" y="265">Statussymbole</text><circle cx="225" cy="282" r="2.5" fill="#8b6a3e"/><text x="232" y="285">Freie Tage</text><circle cx="225" cy="302" r="2.5" fill="#8b6a3e"/><text x="232" y="305">Ausbildung</text><circle cx="225" cy="322" r="2.5" fill="#8b6a3e"/><text x="232" y="325">Gesch\u00e4ftswagen</text></g><rect x="450" y="140" width="200" height="200" rx="8" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="1.5"/><g fill="#5c3d1e" font-size="10"><circle cx="470" cy="170" r="3" fill="#8b6a3e"/><text x="480" y="174">Wertsch\u00e4tzung</text><circle cx="470" cy="195" r="3" fill="#8b6a3e"/><text x="480" y="199">Selbstverantwortung</text><circle cx="470" cy="220" r="3" fill="#8b6a3e"/><text x="480" y="224">Teambildung</text><circle cx="470" cy="245" r="3" fill="#8b6a3e"/><text x="480" y="249">Pers\u00f6nliches Lob</text><circle cx="470" cy="270" r="3" fill="#8b6a3e"/><text x="480" y="274">Homeoffice / Jobsharing</text><circle cx="470" cy="295" r="3" fill="#8b6a3e"/><text x="480" y="299">Auszeichnungen</text><circle cx="470" cy="320" r="3" fill="#8b6a3e"/><text x="480" y="324">Vertrauen</text></g><text x="375" y="400" text-anchor="middle" fill="#78716c" font-size="10">Finanzielle Anreize decken Defizitbed\u00fcrfnisse (Maslow 1\u20133),</text><text x="375" y="416" text-anchor="middle" fill="#78716c" font-size="10">nichtfinanzielle Anreize wirken nachhaltiger (Maslow 4\u20135)</text></svg>'
          },
          {
            type: 'concept',
            title: '6.4 Ausbildung der Mitarbeitenden im Verkauf',
            text: 'Ziel der Ausbildung sind die Erhöhung der Qualität der Verkaufspersonen und das Schliessen von Lücken zwischen Anforderungen und Fähigkeiten des Verkaufspersonals im Innen- und im Aussendienst.\n\nDie in der Ausbildung zu behandelnden Themen lassen sich in vier Bereiche unterteilen:\n1. Unternehmen\n2. Produkte\n3. Markt\n4. Fähigkeiten\n\nDas Ausbildungskonzept wird in sechs Schritten erarbeitet:\n1. Analyse der Ist-Situationen – Stand der Fähigkeiten und Kenntnisse\n2. Setzen der Ausbildungsziele bezogen auf Zielgruppen – Was soll erreicht werden?\n3. Entwicklung der Strategie – Wie wollen wir vorgehen?\n4. Planung der Massnahmen – Welche Massnahmen planen wir?\n5. Zusammenstellen des Budgets – Was wird es kosten?\n6. Erarbeitung der Kontrollpläne – Wie wird der Erfolg kontrolliert?'
          },
          {
            type: 'concept',
            title: '6.5 Planung der Verkaufshilfsmittel',
            text: 'Verkaufshilfsmittel erleichtern und unterstützen die Verkaufskontakte. Sie können grob in die beiden Kategorien «technische Hilfsmittel» und «persönliche Hilfsmittel» unterteilt werden.\n\nZu den technischen Hilfsmitteln gehören:\n- Präsentationshilfen: Unterstützen Demonstrationen und Illustrationen, visualisieren und erklären Marktleistungen\n- Informationshilfen: Ermöglichen den Austausch von Informationen zwischen Kunden und Verkäufern. Ein wichtiges Hilfsmittel dabei sind CRM-Systeme (Customer-Relationship-Management-Systeme)\n- Transporthilfen: Dienen zum Transport der Mitarbeitenden im Aussendienst\n\nPersönliche Hilfsmittel sind immateriell. Bei ihnen handelt es sich um Fähigkeiten, Wissen, Techniken usw., die zur Persönlichkeit und zum Charisma der Person gehören oder die speziell erlernt oder antrainiert werden können.'
          },
          {
            type: 'concept',
            title: '6.6 Fachkräftemangel – Employer Branding',
            text: 'Employer Branding beschreibt alle Massnahmen, die ein Unternehmen ergreifen kann, um die eigene Marke zu stärken und sich gegenüber potenziellen Bewerbern als passender und attraktiver Arbeitgeber darzustellen. Das Ziel von Employer Branding ist, im Markt als attraktiver Arbeitgeber wahrgenommen zu werden und die besten Mitarbeitenden für eine Anstellung gewinnen zu können.\n\nUm das Unternehmen als attraktiven Arbeitgeber zu positionieren, ist es wichtig, die Karrierewebsite der Marke hervorzuheben. Die besten Botschafter der Marke sind dabei die eigenen Mitarbeitenden.'
          },
          {
            type: 'concept',
            title: '6.7 Berufe im Verkauf',
            text: 'Die wichtigsten Berufe im Verkauf:\n\n- Verkaufsleiter/in: Verantwortlich für verschiedene absatzorientierte Funktionen, von der Grosskundenbetreuung bis zur Leitung von ganzen Absatzorganisationen. Konzipierung, Planung und Führung der Verkaufs- und Vertriebsorganisation.\n\n- Key-Account-Manager/in (KAM): Spielt bei der Marktbearbeitung eine wichtige Rolle. Verfügt über Fach- und Sozialkompetenz, betriebswirtschaftliches Know-how und ist auf der permanenten Suche nach optimalen Individuallösungen für seine Kunden.\n\n- Verkaufsfachleute: Personen mit umfassenden Kenntnissen und Fähigkeiten im Bereich des Verkaufs. Sie spielen eine entscheidende Rolle für Unternehmen, da sie massgeblich zum Umsatzwachstum und zur Kundengewinnung beitragen.\n\n- Influencer: Personen, die durch ihre Präsenz in sozialen Medien wie Instagram, Youtube, TikTok eine grosse Anzahl von Followern und Fans haben. Unternehmen nutzen häufig Influencer-Marketing, um ihre Produkte oder Dienstleistungen zu bewerben und ihre Reichweite zu nutzen.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Die Auswahl der im Verkauf tätigen Mitarbeitenden kann in vier Schritte unterteilt werden: 1. Ausarbeitung der Anforderungen, 2. Rekrutierungsmöglichkeiten und Personalauswahlverfahren abklären, 3. Entscheid der Rekrutierung, 4. Erfolgskontrolle.\n\nNeue Mitarbeitende sollen schnell eingearbeitet werden. Ziel ist, dass diese dem Unternehmen gegenüber loyal sind. Eine Bezugsperson (Gotte/Götti) hilft bei der fachlichen und sozialen Integration.\n\nDie Motivationsplanung legt fest, wie die Verkaufsmitarbeitenden motiviert werden können. Es gibt drei Entlohnungssysteme: 100% fix, 100% variabel, oder Kombination.\n\nVerkaufshilfsmittel werden in technische (Präsentations-, Informations-, Transporthilfen) und persönliche Hilfsmittel unterteilt.'
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Die Auswahl der im Verkauf tätigen Mitarbeitenden kann in vier Schritte unterteilt werden: Ausarbeitung der Anforderungen, Rekrutierungsmöglichkeiten und Personalauswahlverfahren abklären, Entscheid der Rekrutierung und Erfolgskontrolle.\n\nNeue Mitarbeitende sollen schnell eingearbeitet werden. Eine Bezugsperson (Gotte/Götti) soll bestimmt werden, die dem neuen Mitarbeitenden hilft, sich fachlich und sozial in den Betrieb zu integrieren.\n\nDie Motivationsplanung legt fest, wie die Verkaufsmitarbeitenden dazu motiviert werden können, ihre Aufgaben zu erfüllen. Es gibt drei Arten von Systemen für die Entlohnung: 100% fixe Entlohnung, 100% variable Entlohnung, Kombination der fixen und der variablen Entlohnung.\n\nVerkaufshilfsmittel erleichtern und unterstützen die Verkaufskontakte und werden in technische und persönliche Hilfsmittel unterteilt.\n\nEmployer Branding beschreibt alle Massnahmen, um die eigene Arbeitgebermarke zu stärken und die besten Mitarbeitenden zu gewinnen.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Personalauswahl', def: 'Vier-Schritte-Prozess: Anforderungen ausarbeiten, Rekrutierungsmöglichkeiten definieren, Entscheid treffen, Erfolgskontrolle durchführen.'},
              {term: 'Interne Rekrutierung', def: 'Besetzung von Stellen mit Mitarbeitenden aus dem eigenen Unternehmen (z.B. via Intranet, Nachwuchsförderung, Versetzung).'},
              {term: 'Externe Rekrutierung', def: 'Suche nach Kandidaten ausserhalb des Unternehmens (z.B. Job-Plattformen, Headhunter, Jobmessen).'},
              {term: 'Bezugsperson (Gotte/Götti)', def: 'Person, die neuen Mitarbeitenden bei der fachlichen und sozialen Integration in den Betrieb hilft.'},
              {term: 'Motivation', def: 'Die Differenz zwischen einem angestrebten Soll-Zustand und dem gegenwärtigen Ist-Zustand. Intrinsische und extrinsische Faktoren.'},
              {term: 'Bedürfnispyramide (Maslow)', def: 'Modell mit 5 Stufen: Grundbedürfnisse, Sicherheit, Soziale Beziehungen, Soziale Anerkennung, Selbstverwirklichung.'},
              {term: 'Vergütungssystem', def: 'System der Entlohnung im Verkauf. Muss transparent, gerecht, leistungsorientiert, flexibel und motivierend sein.'},
              {term: 'Ausbildungskonzept', def: 'Wird in 6 Schritten erarbeitet: Analyse, Ziele, Strategie, Massnahmen, Budget, Kontrollpläne.'},
              {term: 'Verkaufshilfsmittel', def: 'Technische (Präsentations-, Informations-, Transporthilfen) und persönliche Hilfsmittel (Fähigkeiten, Wissen, Charisma).'},
              {term: 'CRM-System', def: 'Customer-Relationship-Management-System zur Verwaltung von Kundenbeziehungen und Informationsaustausch.'},
              {term: 'Employer Branding', def: 'Massnahmen, um die eigene Marke als Arbeitgeber zu stärken und sich als attraktiver Arbeitgeber zu positionieren.'},
              {term: 'Influencer', def: 'Personen mit grosser Reichweite in sozialen Medien, die Meinungen und Kaufentscheidungen beeinflussen können.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch7',
      num: 'Kapitel 7',
      title: 'Verkaufskosten- und Budgetplanung',
      pageStart: 133, pageEnd: 152,
      exercises: [
        {
          id: 64,
          type: 'text',
          q: 'Stellen Sie den BEP grafisch dar bzw. beschreiben Sie die Grafik.',
          keywords: ['schnittpunkt','erlös','kosten','nutzschwelle','gewinn','verlust','fixkosten','variable','umsatz'],
          solution: 'Der BEP ist der Schnittpunkt von Erlös- und Kostenkurve. Unterhalb: Verlust. Oberhalb: Gewinn. Bei der Nutzschwelle entsteht weder Gewinn noch Verlust.',
          questions: [
            {q: 'Beschreibung des BEP:', keywords: ['schnittpunkt','erlös','kosten','nutzschwelle','gewinn','verlust','fixkosten','variable','umsatz'], minKeywords: 3}
          ],
          tips: ['Der BEP ist der Schnittpunkt zweier Kurven.','Unterhalb = Verlust, oberhalb = Gewinn.','Die Fixkosten bilden die Basis.'],
          reveal: ['Warum ist der BEP so wichtig? Er zeigt das Mindestverkaufsvolumen, um keine Verluste zu machen – jede Einheit darüber bringt Gewinn, jede darunter kostet Geld.','Warum schneiden sich die Kurven? Weil die Erlöskurve bei 0 startet und linear steigt, während die Kostenkurve bei den Fixkosten startet – irgendwann überholt der Erlös die Kosten.','Grafik-Aufbau: X-Achse = Menge, Y-Achse = CHF. Fixkosten = waagrechte Linie als Basis. Gesamtkosten = Fixkosten + variable Kosten (steigend). Erlös = steigt steiler als variable Kosten.','Prüfungstipp: In der Prüfung wird oft verlangt, den BEP zu ZEICHNEN. Üben Sie die Grafik – beschriften Sie Fixkosten, Gesamtkosten, Erlös, Verlustzone und Gewinnzone.']
        },
        {
          id: 65,
          type: 'calc',
          q: 'Berechnen Sie die mengenmässige und die wertmässige Nutzschwelle. Verkaufspreis: CHF 140/Stück, variable Kosten: CHF 80/Stück, Fixkosten: CHF 800\'000.',
          fields: [
            {label: 'Deckungsbeitrag pro Stück (CHF)', answer: 60, tolerance: 0},
            {label: 'Mengenmässige NS (Stück)', answer: 13333, tolerance: 1},
            {label: 'Wertmässige NS (CHF)', answer: 1866620, tolerance: 200}
          ],
          tips: ['DB = Preis \u2212 variable Kosten.','Mengenmässige NS = Fixkosten / DB pro Stück.','Wertmässige NS = Menge x Preis.'],
          reveal: ['Schritt 1: DB = Verkaufspreis − variable Kosten = 140 − 80 = CHF 60. Warum? Der DB zeigt, wie viel pro Stück zur Deckung der Fixkosten beiträgt.','Schritt 2: Mengenmässige NS = Fixkosten ÷ DB = 800\'000 ÷ 60 = 13\'333 Stück. Warum dividieren? Weil jedes Stück CHF 60 zur Fixkostendeckung beiträgt – nach 13\'333 Stück sind alle Fixkosten gedeckt.','Schritt 3: Wertmässige NS = Menge × Preis = 13\'333 × 140 = CHF 1\'866\'620. Dies ist der Mindestumsatz in Franken.','Häufiger Fehler: Bei der wertmässigen NS mit dem DB statt dem Verkaufspreis multiplizieren. Richtig ist: Menge × Verkaufspreis (nicht × DB).','Prüfungstipp: Immer zuerst den DB berechnen – er ist die Basis für alles Weitere. Formelkette: DB → Menge NS → Wert NS.']
        },
        {
          id: 66,
          type: 'text',
          q: 'A) Skizzieren Sie die Struktur des Aktionsplans. B) Wann macht es Sinn, Termine und Verantwortlichkeiten ins Verkaufskostenbudget zu integrieren?',
          keywords: ['aktion','massnahme','kosten','termin','verantwortlichkeit','zwischentotal','reserve','gesamttotal','budget','grundlage'],
          solution: 'A) Spalten: Aktion/Massnahme, Kosten CHF, Termin, Verantwortlichkeit. Zeilen: Einzelne Massnahmen, Zwischentotal, Reserve (ca. 10%), Gesamttotal. B) Die Integration macht Sinn, wenn der Aktionsplan als Grundlage für das Budget verwendet wird.',
          questions: [
            {q: 'A) Struktur und B) Integration:', keywords: ['aktion','massnahme','kosten','termin','verantwortlichkeit','zwischentotal','reserve','gesamttotal','budget','grundlage'], minKeywords: 3}
          ],
          tips: ['Der Aktionsplan enthält Massnahmen, Kosten, Termine, Verantwortlichkeiten.','Reserve ist ca. 10% der Kosten.','Integration macht Sinn, wenn der Aktionsplan als Budgetgrundlage dient.'],
          reveal: ['Warum diese 4 Spalten? Jede Massnahme braucht: WAS (Aktion), WIE VIEL (Kosten), WANN (Termin), WER (Verantwortlichkeit) – ohne eines dieser Elemente ist die Planung unvollständig.','Warum eine Reserve von ca. 10%? Weil immer unvorhergesehene Kosten entstehen (z.B. Preiserhöhungen, zusätzliche Materialien). Ohne Reserve wird das Budget bei der kleinsten Abweichung gesprengt.','Warum Integration ins Verkaufskostenbudget? Wenn der Aktionsplan direkt ins Budget fliesst, vermeidet man Doppelspurigkeiten und stellt sicher, dass alle Kosten berücksichtigt sind.','Prüfungstipp: Teil A verlangt die STRUKTUR (Spalten + Zeilen), Teil B die BEGRÜNDUNG für die Integration. Beide Teile beantworten!']
        },
        {
          id: 67,
          type: 'fill',
          q: 'Ergänzen Sie die fehlenden Kostenarten im Verkaufskostenbudget.',
          template: '1. Budgetierter Umsatz | 2. {0} | 3. Variable Kosten ID und AD | 4. Total der Kosten | 5. {1} (ca. 10% der Kosten) | 6. Summe | 7. {2}',
          blanks: ['Fixe Kosten','Reserve','Betriebsergebnis'],
          accept: [['Fixe Kosten'],['Reserve'],['Betriebsergebnis']],
          tips: ['Die Kosten werden in fixe und variable aufgeteilt.','Es gibt eine Reserve von ca. 10%.','Die letzte Zeile zeigt das Betriebsergebnis.'],
          reveal: ['Warum Fixe Kosten an Position 2? Sie werden zuerst aufgeführt, weil sie unabhängig vom Umsatz anfallen – sie sind die «Grundlast», die immer bezahlt werden muss (Miete, Löhne, Versicherungen).','Warum Reserve an Position 5? Sie kommt NACH dem Kostentotal, weil sie einen Prozentsatz der Gesamtkosten darstellt (ca. 10%). Ohne Reserve ist jedes Budget unrealistisch.','Warum Betriebsergebnis an Position 7? Es ist die «Bottom Line» – Umsatz minus alle Kosten (fix + variabel + Reserve). Es zeigt, ob der Verkauf profitabel ist.','Prüfungstipp: Die Reihenfolge im Budget ist logisch: Umsatz → Kosten (fix, variabel) → Total → Reserve → Summe → Ergebnis. Diese Struktur auswendig lernen!']
        },
        {
          id: 68,
          type: 'text',
          q: 'Geben Sie je zwei Beispiele für fixe Kosten im Verkaufsinnendienst und Verkaufsaussendienst.',
          keywords: ['löhne','mieten','verkaufsräumlichkeiten','betriebskosten','versicherung','abschreibung','infrastruktur','fixer','anteil','fahrzeug','schulungen','leasing'],
          solution: 'ID: Löhne für alle im Innendienst Tätigen, Mieten für Verkaufsräumlichkeiten. AD: Löhne (fixer Anteil), Kosten für Verkaufsfahrten, regelmässige Schulungen.',
          questions: [
            {q: 'Fixe Kosten Innendienst:', keywords: ['löhne','mieten','verkaufsräumlichkeiten','betriebskosten','versicherung','abschreibung','infrastruktur'], minKeywords: 2},
            {q: 'Fixe Kosten Aussendienst:', keywords: ['löhne','fixer','anteil','kosten','fahrzeug','schulungen','leasing','abschreibung'], minKeywords: 2}
          ],
          tips: ['Fixe Kosten fallen unabhängig vom Umsatz an.','Löhne (fixer Anteil) sind immer dabei.','Denken Sie an räumliche und fahrzeugbezogene Kosten.'],
          reveal: ['Warum sind Löhne «fix»? Weil sie unabhängig vom Umsatz bezahlt werden müssen – ob der AD 100 oder 0 Maschinen verkauft, sein Grundlohn bleibt gleich.','Warum Mieten als fixe Kosten im ID? Büros und Showrooms kosten jeden Monat gleich viel – egal wie viel verkauft wird. Sie sind nicht an den Verkaufserfolg gekoppelt.','Warum AD-Fahrzeuge als fixe Kosten? Leasing-Raten und Abschreibungen fallen monatlich an, unabhängig davon, wie viele Kunden besucht werden. Die Fahrten selbst (Benzin, Kilometer) können variabel sein.','Häufiger Fehler: Provisionen als fixe Kosten einordnen. Provisionen sind VARIABEL, weil sie vom Verkaufserfolg abhängen. Nur der Grundlohn ist fix.','Prüfungstipp: Fixe Kosten erkennt man an der Frage: «Fällt diese Kosten auch an, wenn NICHTS verkauft wird?» Wenn ja → fix.']
        },
        {
          id: 69,
          type: 'tf',
          q: 'Richtig oder Falsch: Budgetplanung',
          statements: [
            {s: 'Die Nutzschwelle ist der Punkt, bei dem weder Gewinn noch Verlust entsteht.', c: true, feedback: 'Exakte Definition des Break-even-Points.'},
            {s: 'Im Verkaufskostenbudget werden nur die variablen Kosten berücksichtigt.', c: false, feedback: 'Sowohl fixe als auch variable Kosten werden berücksichtigt.'},
            {s: 'Der Deckungsbeitrag berechnet sich als Verkaufspreis minus variable Kosten.', c: true, feedback: 'DB = Preis \u2212 variable Kosten.'},
            {s: 'Die Reserve im Budget beträgt typischerweise ca. 10% der Kosten.', c: true, feedback: 'Ca. 10% Reserve ist üblich.'}
          ],
          tips: ['NS = Break-even = weder Gewinn noch Verlust.','DB = Preis minus variable Kosten.','Das Budget enthält fixe UND variable Kosten.'],
          reveal: ['Aussage 1 RICHTIG: Warum? Die Nutzschwelle (BEP) ist per Definition der Punkt, wo Erlös = Kosten. Darunter Verlust, darüber Gewinn – das ist die Grundlage jeder Wirtschaftlichkeitsrechnung.','Aussage 2 FALSCH: Warum? Ein Budget, das nur variable Kosten enthält, wäre unvollständig und gefährlich. Fixkosten (Miete, Löhne, Versicherungen) fallen IMMER an und müssen zwingend eingeplant werden.','Aussage 3 RICHTIG: Warum? DB = Preis − variable Kosten. Der DB zeigt, wie viel pro verkaufter Einheit zur Deckung der Fixkosten beiträgt. Ohne DB kann man keine Nutzschwelle berechnen.','Aussage 4 RICHTIG: Warum? Die 10%-Reserve ist ein Erfahrungswert aus der Praxis. Sie fängt unvorhergesehene Kosten ab (Preiserhöhungen, Nachbestellungen, Notfallausgaben).']
        },
        {
          id: 70,
          type: 'text',
          q: 'Nennen Sie je zwei Beispiele für variable Kosten im Verkaufsinnendienst und Aussendienst.',
          keywords: ['prämien','innendienst','marktforschung','beratung','extern','provision','verkäuferwettbewerbe','reisekosten','entschädigung','verpflegung','übernachtung','repräsentation','telekommunikation'],
          solution: 'ID: Prämien für den Innendienst, Ausgaben für sekundäre Marktforschung. AD: Provisionen, Reisekosten (Kilometergeld, Verpflegung, Übernachtung).',
          questions: [
            {q: 'Variable Kosten ID:', keywords: ['prämien','innendienst','marktforschung','beratung','extern'], minKeywords: 1},
            {q: 'Variable Kosten AD:', keywords: ['provision','verkäuferwettbewerbe','reisekosten','entschädigung','verpflegung','übernachtung','repräsentation','telekommunikation'], minKeywords: 2}
          ],
          tips: ['Variable Kosten hängen vom Umsatz/Leistung ab.','Provisionen sind typisch variabel.','Reise- und Repräsentationskosten sind AD-typisch.'],
          reveal: ['Warum sind Provisionen variabel? Weil sie direkt an den Verkaufserfolg gekoppelt sind – mehr Verkäufe = mehr Provision. Kein Verkauf = keine Provision.','Warum Reisekosten variabel? Weil sie je nach Anzahl Kundenbesuche schwanken. Ein AD, der 20 Kunden besucht, hat höhere Reisekosten als einer mit 5 Besuchen.','Warum Prämien im ID variabel? Weil sie an Leistungsziele gekoppelt sind (z.B. Anzahl bearbeiteter Aufträge). Ohne Leistung keine Prämie.','Häufiger Fehler: Grundlohn mit variablem Lohnanteil verwechseln. Der Grundlohn ist FIX. Nur der leistungsabhängige Teil (Provision, Prämie) ist variabel.','Prüfungstipp: Variable Kosten erkennt man an der Frage: «Steigt diese Kosten, wenn MEHR verkauft wird?» Wenn ja → variabel.']
        },
        {
          id: 71,
          type: 'mc',
          q: 'Wie berechnet sich die mengenmässige Nutzschwelle?',
          options: [
            'Fixkosten \u00f7 Verkaufspreis',
            'Variable Kosten \u00f7 Deckungsbeitrag',
            'Fixkosten \u00f7 Deckungsbeitrag pro Stück',
            'Umsatz \u00f7 Fixkosten'
          ],
          answer: 2,
          tips: ['NS = Fixkosten / DB.','DB = Preis \u2212 variable Kosten.','Die NS gibt an, ab wie vielen Stück kein Verlust mehr entsteht.'],
          reveal: ['Richtige Antwort: Fixkosten ÷ DB pro Stück. Warum? Weil der DB zeigt, wie viel jedes Stück zur Fixkostendeckung beiträgt. Die Division ergibt, wie viele Stücke nötig sind, um ALLE Fixkosten zu decken.','Warum NICHT Fixkosten ÷ Verkaufspreis? Weil der Verkaufspreis auch die variablen Kosten enthält – die stehen nicht zur Fixkostendeckung zur Verfügung. Nur der DB (Preis minus variable Kosten) deckt Fixkosten.','Warum NICHT Variable Kosten ÷ DB? Weil die variablen Kosten pro Stück irrelevant sind für die Nutzschwelle – es geht darum, die FIXKOSTEN zu decken.','Warum NICHT Umsatz ÷ Fixkosten? Diese Formel ergibt keine sinnvolle Kennzahl. Die NS-Berechnung geht immer von den Fixkosten aus und teilt durch den DB.','Prüfungstipp: Die Formel NS = FK ÷ DB ist die wichtigste Formel im Kapitel Budgetplanung. Den DB immer zuerst berechnen!']
        }
      ],
      learningData: {
        title: 'Verkaufskosten- und Budgetplanung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- fixe und variable Kosten unterscheiden\n- den Deckungsbeitrag und den Break-even-Point berechnen\n- beschreiben, wie ein Verkaufsbudget aufgebaut sein soll'
          },
          {
            type: 'concept',
            title: '7.1 Kostenarten',
            text: 'In allen vorgängig geplanten Schritten, von der Analyse der Ausgangslage, der Festlegung der Ziele, der Entwicklung der Verkaufsstrategien bis zur Planung ihrer Umsetzung, fallen Kosten an. Diese Kosten werden im Verkaufskostenbudget zusammengefasst und übersichtlich und strukturiert dargestellt.\n\nGrundsätzlich spricht man von:\n- Fixen und variablen Kosten\n- Kosten im Verkaufsbereich\n\n7.1.1 Fixe und variable Kosten:\nFixkosten sind Kosten, die in konstanter Höhe anfallen, unabhängig davon, welche Menge von einem Produkt hergestellt wird. Beispiele: Miete, Zinsen, Löhne etc. Fixkosten sind Kosten, die nicht oder nur sehr begrenzt zu beeinflussen sind.\n\nVariable Kosten sind veränderliche Kosten, deren Höhe vom Geschäfts- und Auftragseingang abhängt. Die variablen Kosten tendieren daher auch gegen null, wenn die Produktion unterbrochen wird. Beispiele: Erfolgsprämien, Spesen, Material etc.\n\nGesamtkosten sind die Summe der fixen Kosten und der variablen Kosten.'
          },
          {
            type: 'concept',
            title: '7.2 Verkaufskostenplanung',
            text: 'Die mittelfristige Planung der Verkaufskosten ist eher als Grobplanung zu betrachten. Sie zeigt die Marschrichtung für die kommenden Jahre an und bildet die Basis für die detaillierte Budgetierung der Kosten.\n\nDie Grundlagen für die Verkaufskostenplanung bilden:\n- Vom Unternehmen vorgegebene Budgetierungsrichtlinien\n- Grösse der Verkaufsorganisation (Anzahl Mitarbeitende im Innen- und Aussendienst, Büroräumlichkeiten)\n- Art und Anzahl der Verkaufsaktivitäten\n- Umsatz und Gewinn aus realisiertem Umsatz\n\nThemen der Verkaufskostenplanung:\n- Deckungsbeitragsrechnung\n- Break-even-Point\n- Lohnkosten im Verkauf'
          },
          {
            type: 'concept',
            title: '7.2.1 Deckungsbeitragsrechnung',
            text: 'Der Deckungsbeitrag ist die Differenz in der Kosten- und Leistungsrechnung zwischen den erzielten Erlösen (Umsatz) und den variablen Kosten. Es handelt sich also um den Betrag, der zur Deckung der Fixkosten zur Verfügung steht.\n\nDie Zusammenhänge zwischen den einzelnen Kostenarten:\n- Erlös/Umsatz = variable Kosten + fixe Kosten + Gewinn\n- Selbstkosten = variable Kosten + fixe Kosten\n- Deckungsbeitrag = fixe Kosten + Gewinn'
          },
          { type: 'svg', title: 'Break-even-Diagramm', svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="250" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Break-even-Diagramm</text><line x1="60" y1="40" x2="60" y2="300" stroke="#4f46e5" stroke-width="2"/><line x1="60" y1="300" x2="470" y2="300" stroke="#4f46e5" stroke-width="2"/><text x="30" y="170" text-anchor="middle" fill="#3730a3" font-size="10" font-weight="bold" transform="rotate(-90,30,170)">CHF (Kosten / Erl\u00f6s)</text><text x="265" y="325" text-anchor="middle" fill="#3730a3" font-size="10" font-weight="bold">Menge (St\u00fcck)</text><line x1="60" y1="220" x2="450" y2="220" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/><text x="455" y="218" fill="#ef4444" font-size="9">Fixkosten</text><line x1="60" y1="260" x2="450" y2="100" stroke="#f97316" stroke-width="2"/><text x="455" y="100" fill="#f97316" font-size="9">Gesamtkosten</text><line x1="60" y1="290" x2="450" y2="60" stroke="#16a34a" stroke-width="2.5"/><text x="455" y="60" fill="#16a34a" font-size="9">Erl\u00f6s</text><circle cx="270" cy="170" r="6" fill="#4f46e5"/><line x1="270" y1="170" x2="270" y2="300" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="4,3"/><text x="270" y="315" text-anchor="middle" fill="#4f46e5" font-size="9" font-weight="bold">BEP</text><text x="278" y="162" fill="#4f46e5" font-size="10" font-weight="bold">Break-even-Point</text><rect x="140" y="120" width="80" height="25" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/><text x="180" y="137" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold">Verlustzone</text><rect x="340" y="120" width="80" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/><text x="380" y="137" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold">Gewinnzone</text><text x="150" y="285" fill="#78716c" font-size="9">Variable Kosten</text><line x1="60" y1="260" x2="60" y2="220" stroke="#f97316" stroke-width="6" opacity="0.3"/></svg>' },
          {
            type: 'concept',
            title: '7.2.2 Break-even-Point',
            text: 'Der Break-even-Point (BEP) ist der Punkt, bei dem sowohl die fixen wie auch die variablen Kosten gedeckt sind, bei dem es weder einen Gewinn noch einen Verlust gibt. Gleichbedeutende oder deutsche Ausdrücke für den BEP sind: Nutzschwelle, Gewinnschwelle, Toter Punkt, Punkt der vollen Kostendeckung.\n\nBerechnung des mengenmässigen BEP:\n1. Schritt: Deckungsbeitrag pro Stück = Erlös pro Einheit − variable Kosten\n2. Schritt: BEP in Stück = gesamte Fixkosten / Deckungsbeitrag pro Einheit\n\nBeispiel: Erlös pro Einheit CHF 20, variable Kosten CHF 8 = DB pro Stück CHF 12. Bei Fixkosten von CHF 150\'000: BEP = 150\'000 / 12 = 12\'500 Stück.\n\nDer wertmässige BEP = BEP in Stück × Erlös pro Einheit = 12\'500 × CHF 20 = CHF 250\'000.\n\nAnwendungsgebiete: Kontrolle der Kosten im Verhältnis zum Absatz, Analyse des Erfolgs, Budgetierung und Gewinnplanung, Entscheidung ob Eigen- oder Fremdfertigung (Outsourcing), Sortimentsplanung.'
          },
          {
            type: 'concept',
            title: '7.3 Verkaufskostenbudget',
            text: 'Das Verkaufskostenbudget umfasst die Erlöse und die Kosten, die im Verkaufsbereich anfallen. Grundsätzlich werden vom budgetierten Umsatz oder vom Erlös die fixen und die variablen Kosten abgezogen; daraus ergibt sich das Betriebs- oder Bereichsergebnis.\n\nIn der Praxis hat es sich bewährt, zum Total der budgetierten Kosten ca. 10% für Unvorhergesehenes einzurechnen. Das kann beispielsweise sein:\n- Kurzfristige, den Verkauf flankierende Aktionen (z.B. Social-Media-Postings, Radiospots)\n- Zusätzliche Verkaufshilfsmittel\n- Höhere Auslagen für die Produktion von Verkaufshilfsmitteln, Porto, Repräsentationskosten und Reisespesen'
          },
          {
            type: 'svg',
            title: 'Zusammenstellung des Verkaufskostenbudgets (Abb. 7-7)',
            svg: '<svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><linearGradient id="vk77g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5c3d1e"/><stop offset="100%" stop-color="#8b6a3e"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#5c3d1e" font-size="14" font-weight="bold">Zusammenstellung des Verkaufskostenbudgets</text><rect x="50" y="45" width="600" height="30" rx="4" fill="url(#vk77g1)"/><text x="60" y="65" fill="#fff" font-size="10" font-weight="bold">Kostenarten</text><text x="460" y="65" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Erl\u00f6s in CHF</text><text x="590" y="65" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Kosten in CHF</text><rect x="50" y="80" width="600" height="35" rx="0" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="0.5"/><text x="60" y="98" fill="#5c3d1e" font-size="10" font-weight="bold">1. Budgetierter Umsatz</text><text x="60" y="110" fill="#78716c" font-size="9">    der Verkaufsabteilung</text><text x="460" y="102" text-anchor="middle" fill="#5c3d1e" font-size="10">1 500 000</text><rect x="50" y="115" width="600" height="30" rx="0" fill="#5c3d1e" opacity="0.08" stroke="#8b6a3e" stroke-width="0.5"/><text x="60" y="135" fill="#5c3d1e" font-size="10" font-weight="bold">2. Fixe Kosten</text><rect x="50" y="145" width="600" height="110" rx="0" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="0.5"/><g fill="#78716c" font-size="9"><text x="75" y="162">Miete f\u00fcr R\u00e4umlichkeiten</text><text x="590" y="162" text-anchor="middle" fill="#5c3d1e">9 000</text><text x="75" y="178">L\u00f6hne f\u00fcr alle 5 Mitarbeitenden (Bruttol\u00f6hne)</text><text x="590" y="178" text-anchor="middle" fill="#5c3d1e">900 000</text><text x="75" y="194">Sozial- und Lohnnebenkosten (ca. 15% vom Bruttolohn)</text><text x="590" y="194" text-anchor="middle" fill="#5c3d1e">150 000</text><text x="75" y="210">Kalkulatorische Zinsen und Abschreibungen</text><text x="590" y="210" text-anchor="middle" fill="#5c3d1e">25 000</text><text x="75" y="226">Schulungen und Ausbildungen</text><text x="590" y="226" text-anchor="middle" fill="#5c3d1e">5 000</text><text x="75" y="242">Verkaufshilfsmittel / allenfalls weitere</text></g><rect x="50" y="255" width="600" height="30" rx="0" fill="#5c3d1e" opacity="0.08" stroke="#8b6a3e" stroke-width="0.5"/><text x="60" y="275" fill="#5c3d1e" font-size="10" font-weight="bold">3. Variable Kosten ID und AD</text><rect x="50" y="285" width="600" height="90" rx="0" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="0.5"/><g fill="#78716c" font-size="9"><text x="75" y="302">Pr\u00e4mien und Provisionen</text><text x="590" y="302" text-anchor="middle" fill="#5c3d1e">50 000</text><text x="75" y="318">Kosten f\u00fcr Telekommunikation</text><text x="590" y="318" text-anchor="middle" fill="#5c3d1e">1 000</text><text x="75" y="334">Portokosten</text><text x="590" y="334" text-anchor="middle" fill="#5c3d1e">500</text><text x="75" y="350">Ausgaben f\u00fcr prim\u00e4re Marktforschung</text><text x="590" y="350" text-anchor="middle" fill="#5c3d1e">10 000</text><text x="75" y="366">Kosten f\u00fcr externe Beratung / Repr\u00e4sentations-, Reisespesen</text><text x="590" y="366" text-anchor="middle" fill="#5c3d1e">5 000</text></g><rect x="50" y="380" width="600" height="25" rx="0" fill="url(#vk77g1)" opacity="0.7"/><text x="60" y="397" fill="#fff" font-size="10" font-weight="bold">4. Total der Kosten</text><text x="590" y="397" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">1 251 500</text><rect x="50" y="405" width="600" height="25" rx="0" fill="#f5f0eb" stroke="#8b6a3e" stroke-width="0.5"/><text x="60" y="422" fill="#5c3d1e" font-size="10" font-weight="bold">5. Reserve (ca. 10% der Kosten)</text><text x="590" y="422" text-anchor="middle" fill="#5c3d1e" font-size="10">120 000</text><rect x="50" y="430" width="600" height="25" rx="0" fill="url(#vk77g1)" opacity="0.5"/><text x="60" y="447" fill="#fff" font-size="10" font-weight="bold">6. Summen</text><text x="460" y="447" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">1 500 000</text><text x="590" y="447" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">1 271 500</text><rect x="50" y="455" width="600" height="40" rx="0" fill="#f5f0eb" stroke="#5c3d1e" stroke-width="1.5"/><text x="60" y="472" fill="#5c3d1e" font-size="10" font-weight="bold">7. Betriebs-/Abteilungsergebnis</text><text x="460" y="472" text-anchor="middle" fill="#5c3d1e" font-size="10" font-weight="bold">+228 500</text><text x="460" y="488" text-anchor="middle" fill="#78716c" font-size="9">= 15.2 % vom Erl\u00f6s</text></svg>'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Fixkosten sind Kosten, die in konstanter Höhe anfallen, unabhängig davon, welche Menge von einem Produkt erbracht wird.\n\nVariable Kosten dagegen sind veränderliche Kosten, deren Höhe vom Geschäfts- und Auftragseingang abhängt.\n\nDer Deckungsbeitrag ist die Differenz zwischen den erzielten Erlösen (Umsatz) und den variablen Kosten.\n\nDer Break-even-Point (BEP) ist der Punkt, bei dem sowohl die fixen wie auch die variablen Kosten gedeckt sind. BEP = Fixkosten / Deckungsbeitrag pro Stück.\n\nDas Verkaufskostenbudget sollte immer eine Reserve in der Höhe von ca. 10% für Unvorhergesehenes eingerechnet werden.'
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Fixkosten sind Kosten, die in konstanter Höhe anfallen, unabhängig davon, welche Menge von einem Produkt erbracht wird.\n\nDie variablen Kosten dagegen sind veränderliche Kosten, deren Höhe vom Geschäfts- und Auftragseingang abhängt.\n\nDer Deckungsbeitrag ist die Differenz in der Kosten- und Leistungsrechnung zwischen den erzielten Erlösen (Umsatz) und den variablen Kosten.\n\nDer Break-even-Point (BEP) oder auf Deutsch die Nutzschwelle ist der Punkt, bei dem sowohl die fixen wie auch die variablen Kosten gedeckt sind, bei dem sich weder ein Gewinn noch ein Verlust ergibt.\n\nDie Lohnkosten sind ein wichtiger Bestandteil des Verkaufskostenbudgets. Die Löhne können je nach Branche und Unternehmensgrösse unterschiedlich ausfallen und berechnet werden. Zusätzlich müssen noch ca. 25% für Sozialleistungen dazugerechnet werden.\n\nDas Verkaufskostenbudget umfasst die Erlöse und die Kosten, die im Verkaufsbereich anfallen. Grundsätzlich werden vom budgetierten Umsatz die fixen und variablen Kosten subtrahiert. Daraus ergibt sich das Betriebs- oder Bereichsergebnis. Es sollte immer eine Reserve in der Höhe von ca. 10% für Unvorhergesehenes eingerechnet werden.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Fixkosten', def: 'Kosten, die in konstanter Höhe anfallen, unabhängig von der produzierten Menge. Beispiele: Miete, Zinsen, Löhne.'},
              {term: 'Variable Kosten', def: 'Veränderliche Kosten, deren Höhe vom Geschäfts- und Auftragseingang abhängt. Beispiele: Erfolgsprämien, Spesen, Material.'},
              {term: 'Deckungsbeitrag', def: 'Differenz zwischen den erzielten Erlösen (Umsatz) und den variablen Kosten. Steht zur Deckung der Fixkosten zur Verfügung.'},
              {term: 'Break-even-Point (BEP)', def: 'Der Punkt, bei dem sowohl die fixen wie auch die variablen Kosten gedeckt sind (Nutzschwelle/Gewinnschwelle). BEP = Fixkosten / DB pro Stück.'},
              {term: 'Verkaufskostenbudget', def: 'Umfasst alle Erlöse und Kosten im Verkaufsbereich. Vom budgetierten Umsatz werden fixe und variable Kosten abgezogen = Betriebs-/Bereichsergebnis.'},
              {term: 'Verkaufskostenplanung', def: 'Mittelfristige Grobplanung der Verkaufskosten als Basis für die detaillierte Budgetierung.'},
              {term: 'Lohnkosten im Verkauf', def: 'Wichtiger Bestandteil des Verkaufskostenbudgets. Zusätzlich ca. 25% für Sozialleistungen (AHV, ALV, NBU, PK, Ferien).'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch8',
      num: 'Kapitel 8',
      title: 'Kontrollplanung im Verkauf',
      pageStart: 153, pageEnd: 172,
      exercises: [
        {
          id: 72,
          type: 'text',
          q: 'A) Welche Kontrollen bilden den Schwerpunkt im Verkauf? B) Beschreiben Sie die zwei Kontrollarten.',
          keywords: ['ergebnis','ausführung','kontrolle','ergebniskontrolle','ausführungskontrolle','ökonomisch','markt','umsatz','preis','kosten','qualitativ','handlungsweisen','mitarbeitende'],
          solution: 'A) Ergebnis- und Ausführungskontrollen. B) Ergebniskontrollen sind oft ökonomischer Natur (Markt-, Umsatz-, Preis-, Kostenkontrolle). Ausführungskontrollen bewerten Handlungsweisen von Mitarbeitenden.',
          questions: [
            {q: 'A) Schwerpunkt:', keywords: ['ergebnis','ausführung','kontrolle','ergebniskontrolle','ausführungskontrolle'], minKeywords: 2},
            {q: 'B) Beschreibung:', keywords: ['ökonomisch','markt','umsatz','preis','kosten','qualitativ','handlungsweisen','mitarbeitende'], minKeywords: 3}
          ],
          tips: ['Es gibt Ergebnis- und Ausführungskontrollen.','Ergebnis = quantitativ, ökonomisch.','Ausführung = qualitativ, Verhalten.'],
          reveal: ['Warum diese zwei Kontrollarten? Ergebniskontrollen messen quantitative Resultate (Umsatz, Kosten, Marktanteile) – sie zeigen, OB Ziele erreicht wurden. Ausführungskontrollen bewerten qualitativ das WIE (Verhalten, Gesprächsführung).','Prüfungstipp: Verwechsle die beiden nicht – Ergebnis = Zahlen (ökonomisch), Ausführung = Verhalten (qualitativ). Die Prüfung fragt oft nach konkreten Beispielen für beide Arten.','Häufiger Fehler: Nur Umsatzkontrolle nennen. Es gibt viele Ergebniskontrollen: Markt-, Umsatz-, Preis- und Kostenkontrolle.']
        },
        {
          id: 73,
          type: 'text',
          q: 'Skizzieren Sie das Raster für einen Kontrollplan.',
          keywords: ['zielinhalt','quantifizierung','methode','zeitpunkt','korrektur','massnahmen','verantwortlich','was','wie viel','wie','wann','welche','wer'],
          solution: 'Kontrollplan-Raster: Zielinhalt (Was), Quantifizierung (Wie viel), Methode (Wie), Zeitpunkt (Wann), Korrekturmassnahmen (Welche), Verantwortlicher (Wer).',
          questions: [
            {q: 'Spalten des Kontrollplans:', keywords: ['zielinhalt','quantifizierung','methode','zeitpunkt','korrektur','massnahmen','verantwortlich','was','wie viel','wie','wann','welche','wer'], minKeywords: 4}
          ],
          tips: ['Der Kontrollplan hat 6 Spalten.','Er folgt den W-Fragen.','Von Was über Wie bis Wer.'],
          reveal: ['Warum genau 6 Spalten? Jede Spalte beantwortet eine zentrale W-Frage: Was (Zielinhalt), Wie viel (Quantifizierung), Wie (Methode), Wann (Zeitpunkt), Welche (Korrekturmassnahmen), Wer (Verantwortlicher).','Prüfungstipp: Merke dir die W-Fragen-Logik – so kannst du die 6 Spalten auch unter Prüfungsdruck herleiten, ohne sie auswendig zu wissen.','Häufiger Fehler: «Budget» oder «Kosten» als Spalte nennen – diese gehören zum Verkaufskostenbudget, nicht zum Kontrollplan.']
        },
        {
          id: 74,
          type: 'text',
          q: 'Was versteht man unter Mystery-Shopping?',
          keywords: ['verdeckt','kunden','einsatz','überprüfung','service','dienstleistungsqualität','kundenorientierung','testkunden'],
          solution: 'Mystery-Shopping ist der Einsatz von verdeckten Kunden zur Überprüfung der Kundenorientierung sowie der Service- und Dienstleistungsqualität.',
          questions: [
            {q: 'Erklärung:', keywords: ['verdeckt','kunden','einsatz','überprüfung','service','dienstleistungsqualität','kundenorientierung','testkunden'], minKeywords: 2}
          ],
          tips: ['Mystery = verdeckt, geheim.','Shopping = Einkaufen.','Es geht um Qualitätsprüfung.'],
          reveal: ['Warum verdeckt? Nur wenn Mitarbeitende nicht wissen, dass sie getestet werden, zeigt sich ihr echtes Verhalten. Offene Kontrolle würde das Ergebnis verfälschen.','Warum Dienstleistungsbranche? Weil dort die Servicequalität direkt im Kundenkontakt entsteht und nur durch Erleben (nicht durch Zahlen) überprüfbar ist.','Prüfungstipp: Mystery Shopping ist eine Ausführungskontrolle (qualitativ), keine Ergebniskontrolle – wird gerne als Falle in MC-Fragen verwendet.']
        },
        {
          id: 75,
          type: 'match',
          q: 'Ordnen Sie die Methode dem jeweiligen Kontrollziel zu.',
          pairs: [
            {l: 'Erfolg von Schulungen und Trainings', r: 'Beobachtung/Auswertung von Verkaufsgesprächen'},
            {l: 'Verhalten an Messeständen überprüfen', r: 'Auswertung von Besuchsprotokollen und Beobachtung'},
            {l: 'Dienstleistungs- und Servicequalität überprüfen', r: 'Beobachtung/Einsatz von Testkunden (Mystery Shopping)'}
          ],
          options: ['Beobachtung/Auswertung von Verkaufsgesprächen','Auswertung von Besuchsprotokollen und Beobachtung','Beobachtung/Einsatz von Testkunden (Mystery Shopping)'],
          tips: ['Schulungserfolg wird durch Beobachtung von Gesprächen gemessen.','Messeverhalten durch Besuchsprotokolle.','Servicequalität durch Mystery Shopping.'],
          reveal: ['Warum Schulung → Gesprächsbeobachtung? Weil der Erfolg einer Schulung sich erst im realen Verkaufsgespräch zeigt – nur dort kann man prüfen, ob das Gelernte angewendet wird.','Warum Messe → Besuchsprotokolle? An Messen finden viele Kontakte gleichzeitig statt. Protokolle dokumentieren systematisch, was sonst vergessen ginge. Ergänzend hilft direkte Beobachtung.','Warum Servicequalität → Mystery Shopping? Service ist subjektiv – nur durch reales Erleben als Testkunde kann die tatsächliche Qualität aus Kundensicht beurteilt werden.']
        },
        {
          id: 76,
          type: 'text',
          q: 'Kontrolle der Kontrolle: Wieso wird überhaupt kontrolliert, was geschieht mit den Resultaten aus den Kontrollen?',
          keywords: ['analyse','ausgangslage','über','neuarbeitung','konzept','qualifikation','grundlage','variable','lohnbestandteile'],
          solution: 'Die Resultate fliessen in die Analyse der Ausgangslage bei der Über- oder Neuarbeitung von Konzepten ein. Zudem sind sie Basis für die Qualifikation und können Grundlage für variable Lohnbestandteile sein.',
          questions: [
            {q: 'Erklärung:', keywords: ['analyse','ausgangslage','über','neuarbeitung','konzept','qualifikation','grundlage','variable','lohnbestandteile'], minKeywords: 2}
          ],
          tips: ['Die Resultate fliessen zurück in die Planung.','Sie sind Basis für die Qualifikation.','Auch die variable Vergütung hängt davon ab.'],
          reveal: ['Warum kontrollieren? Kontrolle ist kein Selbstzweck – die Resultate fliessen zurück in die Planung (Analyse der Ausgangslage) und ermöglichen bessere Konzepte beim nächsten Mal.','Warum noch? Kontrollresultate sind Basis für die Mitarbeiter-Qualifikation und können variable Lohnbestandteile (Boni, Provisionen) begründen – das schafft Transparenz und Fairness.','Prüfungstipp: Kontrolle schliesst den Regelkreis (Planen → Umsetzen → Kontrollieren → Anpassen). Ohne Kontrolle fehlt die Grundlage für Verbesserungen.']
        },
        {
          id: 77,
          type: 'text',
          q: 'Welche Kontrollmethoden kennen Sie? Machen Sie je ein Beispiel dazu.',
          keywords: ['statistik','erhebung','beobachtung','auswertung','befragung','intern','extern','marktbericht','besuchsbericht','kundenbefragung'],
          solution: '1. Statistiken: interne und externe Auswertungen. 2. Erhebungen: Marktberichte. 3. Beobachtungen: Reisebegleitungen. 4. Auswertung: Besuchsberichte. 5. Befragung: Kundenbefragungen.',
          questions: [
            {q: 'Methoden und Beispiele:', keywords: ['statistik','erhebung','beobachtung','auswertung','befragung','intern','extern','marktbericht','besuchsbericht','kundenbefragung'], minKeywords: 3}
          ],
          tips: ['Es gibt 5 Hauptmethoden.','Von Statistiken bis Befragungen.','Jede Methode hat spezifische Anwendungen.'],
          reveal: ['Warum 5 verschiedene Methoden? Jede Methode liefert andere Erkenntnisse: Statistiken = harte Zahlen, Beobachtungen = Verhalten, Befragungen = subjektive Wahrnehmung. Nur die Kombination gibt ein vollständiges Bild.','Die 5 Methoden: 1) Statistiken (intern/extern), 2) Erhebungen (Marktberichte), 3) Beobachtungen (Reisebegleitungen), 4) Auswertung (Besuchsberichte, Messeprotokolle), 5) Befragung (Kunden, Mitarbeitende).','Prüfungstipp: Merke dir zu jeder Methode mindestens ein konkretes Beispiel – die Prüfung verlangt oft «Nennen Sie ein Beispiel».','Häufiger Fehler: Mystery Shopping als eigene Methode aufzählen – es ist ein Beispiel für Beobachtung, keine separate Methode.']
        },
        {
          id: 78,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zum Thema Kontrolle im Verkauf.',
          template: '{0} bedeutet, einen Ist-Zustand mit einem gewünschten {1} zu vergleichen, das Ausmass der {2} zu ermitteln und allfällige korrektive Massnahmen einzuleiten. Kontrollmethoden sind: Voll- und {3}, interne und externe Kontrolle, Selbst- und {4} sowie konstruktive und destruktive Kontrolle.',
          blanks: ['Kontrolle','Soll-Zustand','Abweichung','Stichprobenkontrolle','Fremdkontrolle'],
          accept: [['Kontrolle'],['Soll-Zustand','Soll'],['Abweichung'],['Stichprobenkontrolle'],['Fremdkontrolle']],
          tips: ['Kontrolle = Ist vs. Soll.','Es gibt verschiedene Kontrollmethoden-Paare.','Stichprobe vs. Vollkontrolle.'],
          reveal: ['Warum Ist-Soll-Vergleich? Ohne klaren Soll-Zustand (Ziel) kann keine sinnvolle Kontrolle stattfinden – deshalb ist Zieldefinition die Voraussetzung für jede Kontrolle.','Warum Gegensatzpaare bei den Methoden? Voll- vs. Stichprobe (Aufwand), intern vs. extern (Objektivität), Selbst- vs. Fremdkontrolle (Perspektive), konstruktiv vs. destruktiv (Wirkung). Jedes Paar zeigt eine andere Dimension.','Prüfungstipp: Die 4 Gegensatzpaare der Kontrollmethoden sind ein Klassiker in Prüfungen – lerne sie als Paare, nicht einzeln.']
        },
        {
          id: 79,
          type: 'tf',
          q: 'Richtig oder Falsch: Kontrollplanung',
          statements: [
            {s: 'Quantitative/ökonomische Ziele sind einfacher zu kontrollieren als qualitative/psychologische Ziele.', c: true, feedback: 'Quantitative Ziele können direkt gemessen werden.'},
            {s: 'Der Kontrollprozess hat 5 Phasen.', c: true, feedback: 'Definition, Durchführung, Überwachung, Bewertung, Analyse & Feedback.'},
            {s: 'Mystery Shopping wird hauptsächlich in der Produktionsbranche eingesetzt.', c: false, feedback: 'Mystery Shopping wird vornehmlich in der Dienstleistungsbranche eingesetzt.'},
            {s: 'Konstruktive Kontrolle zielt auf Verbesserung ab, destruktive auf Fehlersuche.', c: true, feedback: 'Konstruktiv = fördernd, destruktiv = bestrafend/fehlerorientiert.'}
          ],
          tips: ['Quantitative Ziele = einfacher messbar.','Mystery Shopping = Dienstleistungsbranche.','Konstruktiv = positiv, destruktiv = negativ.'],
          reveal: ['Aussage 1: RICHTIG – Quantitative Ziele (z.B. Umsatz CHF 500\'000) sind direkt messbar. Qualitative Ziele (z.B. Kundenzufriedenheit) erfordern aufwendigere Methoden wie Befragungen.','Aussage 2: RICHTIG – Die 5 Phasen: Definition → Durchführung → Überwachung → Bewertung → Analyse & Feedback. Merke: Der Prozess ist zyklisch, nicht einmalig.','Aussage 3: FALSCH – Mystery Shopping wird in der Dienstleistungsbranche eingesetzt, nicht in der Produktion. Warum? Weil dort die Qualität im direkten Kundenkontakt entsteht und nur durch Erleben prüfbar ist.','Aussage 4: RICHTIG – Konstruktive Kontrolle will fördern und verbessern. Destruktive Kontrolle sucht nur Fehler und wirkt demotivierend. In der Praxis soll Kontrolle immer konstruktiv sein.']
        },
        {
          id: 80,
          type: 'mc',
          q: 'Welche Elemente enthält ein Kontrollplan?',
          options: [
            'Nur Zielinhalt und Methode',
            'Zielinhalt, Quantifizierung, Methode, Zeitpunkt, Korrekturmassnahmen, Verantwortlicher',
            'Budget, Umsatz, Kosten, Gewinn',
            'Nur Ergebnis- und Ausführungskontrolle'
          ],
          answer: 1,
          tips: ['Der Kontrollplan hat 6 Elemente.','Er folgt den W-Fragen.','Budget und Kosten gehören zum Verkaufskostenbudget.'],
          reveal: ['Richtig ist B: Der Kontrollplan hat 6 Elemente (Was, Wie viel, Wie, Wann, Welche, Wer). Er deckt den gesamten Kontrollprozess systematisch ab.','Warum A falsch? «Nur Zielinhalt und Methode» greift viel zu kurz – ohne Quantifizierung weisst du nicht, wie viel, ohne Zeitpunkt nicht, wann kontrolliert wird.','Warum C falsch? Budget, Umsatz, Kosten und Gewinn sind Kennzahlen aus dem Verkaufskostenbudget, nicht Elemente eines Kontrollplans.','Warum D falsch? Ergebnis- und Ausführungskontrolle sind Kontrollarten, nicht Elemente eines Kontrollplans – das wird oft verwechselt.']
        },
        {
          id: 81,
          type: 'sort',
          q: 'Ordnen Sie die fünf Phasen des Kontrollprozesses in die richtige Reihenfolge.',
          items: ['Definition der Kontrollobjekte', 'Durchführung der Kontrollmassnahmen', 'Überwachung der Ausführung', 'Bewertung der Ergebnisse', 'Analyse und Feedback'],
          tips: ['Zuerst muss definiert werden, was kontrolliert wird.','Die Durchführung kommt vor der Überwachung.','Am Ende steht immer das Feedback.'],
          reveal: ['Warum diese Reihenfolge? Man muss zuerst wissen, WAS kontrolliert wird (Definition), bevor man Massnahmen durchführt. Die Überwachung prüft die Umsetzung, die Bewertung interpretiert Ergebnisse, und am Ende steht Feedback als Grundlage für Verbesserungen.','Prüfungstipp: Die Reihenfolge folgt einer logischen Kette – man kann nicht bewerten, was man nicht überwacht hat, und nicht überwachen, was man nicht durchgeführt hat.','Häufiger Fehler: Analyse & Feedback an den Anfang setzen. Die Analyse steht am Ende, weil sie auf den Ergebnissen aller vorherigen Phasen aufbaut.']
        }
      ],
      learningData: {
        title: 'Kontrollplanung im Verkauf',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- den Begriff «Kontrolle» erklären\n- die Kontrollmethoden und Kontrollarten aufzählen\n- den Kontrollprozess beschreiben\n- darlegen, wie die Verkaufskontrolle durchgeführt wird'
          },
          {
            type: 'concept',
            title: '8.1 Was bedeutet Kontrolle?',
            text: 'Das Setzen von Zielen macht nur dann Sinn, wenn die Zielerreichung und die Zielerfüllung auch kontrolliert werden. Nur so können aus den Resultaten Konsequenzen für neue Ziele und Massnahmen gezogen werden.\n\nKontrolle bedeutet:\n- einen gegebenen Ist-Zustand mit einem gewünschten Soll-Zustand zu vergleichen\n- das Ausmass der Abweichung zu ermitteln\n- die Ursachen der Abweichung zu analysieren\n- allfällige korrektive Massnahmen zur Optimierung dieses Zustands einzuleiten\n\nIm engeren Sinn bedeutet Kontrollieren: Überwachen, Prüfen, Inspizieren, Testen, Untersuchen sowie Messen und Vergleichen.\nIm weiteren Sinn gehören auch dazu: Informieren, Aktivieren, Werten und Richtigstellen.'
          },
          {
            type: 'concept',
            title: '8.1.1 Kontrolle als Führungsfunktion',
            text: 'Kontrolle ist eine nicht delegierbare Aufgabe von Führungskräften. Sie umfasst sowohl das Feststellen der Differenz von Soll- (Plan-) und Ist-Werten (Soll-Ist-Vergleich) als auch das Bestimmen von Korrekturmassnahmen.\n\nEin konstruktives Feedback der Vorgesetzten auf Resultate von Kontrollen wirkt sich positiv und motivierend auf Mitarbeitende aus. Kontrollmassnahmen dienen dazu, Aufgaben zu erleichtern, Prozesse zu optimieren und die Kundenzufriedenheit zu erhöhen.'
          },
          {
            type: 'concept',
            title: '8.1.2 Kontrollmethoden',
            text: 'Als Kontrollmethoden eignen sich beispielsweise folgende Mittel:\n- Statistiken: interne und externe\n- Erhebungen: Marktberichte und -untersuchungen aus sekundären Quellen\n- Beobachtungen: Reise- und Besuchsbegleitungen\n- Auswertung: Besuchsberichte, Wochenberichte, Messprotokolle, Spesenab­rechnungen, Korrespondenz\n- Befragung: Kundenbefragungen, Gespräche mit Mitarbeitenden'
          },
          {
            type: 'concept',
            title: '8.1.3 Kontrollarten',
            text: 'Die wichtigsten Kontrollarten sind:\n- Voll- oder Stichprobenkontrolle: Bei der Vollkontrolle wird jeder einzelne Artikel, Prozess oder jede Transaktion überprüft und kontrolliert (z.B. Finanzprüfungen, Sicherheitskontrollen). Bei der Stichprobenkontrolle werden nur ausgewählte Proben oder Teilmengen überprüft (z.B. Qualitätskontrolle, statistische Analyse, Audits).\n- Interne oder externe Kontrolle: Interne Kontrollen werden innerhalb der Organisation implementiert. Externe Kontrollen werden von unabhängigen, organisationsfremden Instanzen durchgeführt.\n- Selbst- oder Fremdkontrolle: Selbstkontrolle wird eigenständig durchgeführt. Fremdkontrolle wird von externen Instanzen oder Personen durchgeführt.\n- Konstruktive oder destruktive Kontrolle: Konstruktive Kontrolle zielt auf Verbesserung und Optimierung ab. Destruktive Kontrolle kann demotivierend wirken.'
          },
          {
            type: 'concept',
            title: '8.1.4 Kontrollprozess',
            text: 'Der Kontrollprozess umfasst fünf Schritte:\n\n1. Definition der Kontrollobjekte: Gemäss den gesetzten ökonomischen und psychologischen Zielen werden die Kontrollobjekte sowie deren untere und obere Toleranzwerte bestimmt.\n\n2. Durchführung der Kontrollmassnahmen: Bei der Durchführung werden die einzelnen Kontrollobjekte und ihre Ist-Werte während und am Ende des Prozesses erfasst.\n\n3. Überwachung der Ausführung der Kontrollmassnahmen: Kontrolle ist gut, Vertrauen ist besser. Die verantwortliche Person überwacht, ob die vorgesehenen Kontrollen und Korrekturmassnahmen wie geplant durchgeführt werden.\n\n4. Bewertung der Ergebnisse: Die Ergebnisse werden ausgewertet und die Resultate bewertet. Ziel ist festzustellen, ob die vorgesehenen Massnahmen wirksam, zielorientiert und budgetkonform sind.\n\n5. Analyse und Feedback: Die Resultate werden analysiert, ob eine positive oder negative Abweichung zum Sollwert vorliegt. Die Analyse dient als Grundlage für konstruktives Feedback und zur Optimierung.'
          },
          {
            type: 'concept',
            title: '8.2 Verkaufskontrolle',
            text: 'Bei der Verkaufskontrolle gilt als besondere Herausforderung, dass ihre Wirkung nicht isoliert von den anderen Marketinginstrumenten betrachtet werden kann. Trotzdem lassen sich die Verkaufsziele sehr wohl getrennt betrachten und kontrollieren.\n\nHauptarten von Kontrollen:\nErgebniskontrollen:\n- Marktkontrolle: Markttrends, Marktkennzahlen, Mitbewerber\n- Umsatzkontrolle: bezogen auf Kunde, Produktgruppe, Vertreter, Gebiet etc.\n- Preiskontrolle: Preis- und Rabatthöhe, bezogen auf z.B. Kundengruppen\n- Gewinnkontrolle: Margen-, Gewinn- und Deckungsbeitragskontrolle\n- Kostenkontrolle: Vergleiche mit dem Budget und/oder Vorgaben\n\nAusführungskontrollen werden häufig im Personalbereich angewendet. Dabei werden Handlungsabläufe und Handlungsweisen bewertet.\n\nQuantitative oder ökonomische Ziele sind in der Regel einfacher und mit geringerem Aufwand zu kontrollieren als qualitative oder psychologische Ziele.'
          },
          {
            type: 'concept',
            title: '8.2.3 Kontrollplan',
            text: 'Ein Kontrollplan ist ein Dokument oder eine Anleitung, die detaillierte Schritte und Massnahmen enthält, um die Durchführung und Überwachung bestimmter Prozesse oder Aktivitäten zu gewährleisten.\n\nEin Kontrollplan umfasst normalerweise folgende Elemente:\n- Zielsetzung: Legt das Ziel fest, das erreicht werden soll\n- Kontrollmassnahmen: Beschreibt die konkreten Massnahmen (Inspektionen, Überprüfungen, Tests, Messungen)\n- Prüfkriterien: Legt die Kriterien fest, anhand derer die Kontrolle erfolgt\n- Kontrollpunkte: Identifiziert die Punkte oder Phasen, an denen die Kontrolle durchgeführt werden soll\n- Häufigkeit der Kontrolle / Kontrolltermin: Gibt an, wie oft die Kontrolle durchgeführt werden soll\n- Verantwortlichkeiten: Weist bestimmten Personen oder Abteilungen die Verantwortung zu'
          },
          {
            type: 'methodenbox',
            title: 'Mystery-Shopping: Qualitätssicherung im Verkauf',
            text: '1. Wann und wofür setzen Sie diese Methode ein?\nMystery Shopping wird eingesetzt, um die Qualität des Kundenservice und der Verkaufsprozesse zu überprüfen, indem verdeckte Testkäufer als potenzielle Kunden auftreten und ihre Erfahrungen bewerten.\n\n2. Was erhalten Sie als Ergebnis?\nMystery-Shopping liefert Ergebnisse und Einsichten über die Kundenerfahrung, den Kundenservice und die Einhaltung der Qualitätsstandards eines Unternehmens aus Sicht eines Kunden.\n\n3. Was beachten Sie beim Mystery-Shopping?\nBei Mystery-Shopping ist es wichtig, klare Ziele und Kriterien festzulegen, um die gewünschten Aspekte zu bewerten. Zudem sollten die Testkäufer professionell geschult und instruiert werden, um eine objektive und zuverlässige Bewertung sicherzustellen.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Kontrolle bedeutet, einen Ist-Zustand mit einem gewünschten Soll-Zustand zu vergleichen, das Ausmass der Abweichung zu ermitteln, die Ursachen zu analysieren und allfällige korrektive Massnahmen einzuleiten.\n\nDie Kontrollplanung ist der letzte Schritt bei der Erarbeitung eines Verkaufsplanungskonzepts. Auf der Basis der erzielten Kontrollresultate ergibt sich eine neue oder geänderte Ausgangslage, die den gesamten Regelkreis der Verkaufsplanung erneut anstösst.\n\nDer Kontrollplan gliedert sich in: Zielinhalt, Quantifizierung, Methode, Zeitpunkt, Korrekturmassnahmen und Verantwortlichkeit.'
          },
          { type: 'svg', title: 'Kontrollprozess im Verkauf', svg: '<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="vk-ctrl1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4f46e5"/><stop offset="100%" stop-color="#3730a3"/></linearGradient><marker id="vk-ctrl-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><text x="350" y="28" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Kontrollprozess im Verkauf</text><circle cx="350" cy="185" r="45" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.5"/><text x="350" y="182" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Controlling</text><text x="350" y="196" text-anchor="middle" fill="#4f46e5" font-size="8">Regelkreis</text><rect x="275" y="45" width="150" height="40" rx="8" fill="#3730a3"/><text x="350" y="62" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Kontrollziele</text><text x="350" y="76" text-anchor="middle" fill="#c7d2fe" font-size="8">festlegen</text><rect x="530" y="110" width="150" height="40" rx="8" fill="#4f46e5"/><text x="605" y="127" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Soll-Werte</text><text x="605" y="141" text-anchor="middle" fill="#e0e7ff" font-size="8">bestimmen</text><rect x="500" y="245" width="150" height="40" rx="8" fill="#4f46e5"/><text x="575" y="262" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Ist-Werte</text><text x="575" y="276" text-anchor="middle" fill="#e0e7ff" font-size="8">erfassen</text><rect x="150" y="245" width="150" height="40" rx="8" fill="#6366f1"/><text x="225" y="262" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Soll-Ist-Vergleich</text><text x="225" y="276" text-anchor="middle" fill="#e0e7ff" font-size="8">durchführen</text><rect x="20" y="110" width="180" height="40" rx="8" fill="#3730a3"/><text x="110" y="127" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Abweichungsanalyse</text><text x="110" y="141" text-anchor="middle" fill="#c7d2fe" font-size="8">&amp; Massnahmen</text><path d="M425,55 Q530,55 530,110" stroke="#4f46e5" stroke-width="2" fill="none" marker-end="url(#vk-ctrl-arr)"/><path d="M640,150 Q640,250 650,245" stroke="#4f46e5" stroke-width="2" fill="none" marker-end="url(#vk-ctrl-arr)"/><path d="M500,265 Q400,300 300,265" stroke="#4f46e5" stroke-width="2" fill="none" marker-end="url(#vk-ctrl-arr)"/><path d="M150,265 Q60,250 60,150" stroke="#4f46e5" stroke-width="2" fill="none" marker-end="url(#vk-ctrl-arr)"/><path d="M110,110 Q110,55 275,55" stroke="#4f46e5" stroke-width="2" fill="none" marker-end="url(#vk-ctrl-arr)"/><text x="350" y="340" text-anchor="middle" fill="#78716c" font-size="10">Der Kontrollprozess bildet einen geschlossenen Regelkreis</text></svg>' },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Kontrolle bedeutet, einen Ist-Zustand mit einem gewünschten Soll-Zustand zu vergleichen, das Ausmass der Abweichung zu ermitteln, die Ursachen der Abweichung zu analysieren und allfällige korrektive Massnahmen zur Optimierung dieses Zustands einzuleiten.\n\nKontrollmethoden und -arten sind: Voll- und Stichprobenkontrolle, Interne und externe Kontrolle, Selbst- und Fremdkontrolle, Konstruktive und destruktive Kontrolle.\n\nQuantitative oder ökonomische Ziele sind in der Regel einfacher und mit geringerem Aufwand zu kontrollieren als qualitative oder psychologische Ziele.\n\nDer Kontrollprozess hat folgende Phasen: Definition des Kontrollobjekts, Durchführung der Kontrollmassnahmen, Überwachung der Ausführung der Kontrollmassnahmen, Bewertung der Ergebnisse, Analyse und Feedback.\n\nDer Kontrollplan gliedert sich in: Zielinhalt, Quantifizierung, Methode, Zeitpunkt, Korrekturmassnahmen und Verantwortlichkeit.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Kontrolle', def: 'Vergleich eines Ist-Zustands mit einem Soll-Zustand, Ermittlung der Abweichung, Analyse der Ursachen und Einleitung von Korrekturmassnahmen.'},
              {term: 'Kontrolle als Führungsfunktion', def: 'Nicht delegierbare Aufgabe von Führungskräften, umfasst Soll-Ist-Vergleich und Bestimmung von Korrekturmassnahmen.'},
              {term: 'Kontrollmethoden', def: 'Mittel zur Durchführung von Kontrollen: Statistiken, Erhebungen, Beobachtungen, Auswertungen, Befragungen.'},
              {term: 'Kontrollarten', def: 'Voll-/Stichprobenkontrolle, Interne/externe Kontrolle, Selbst-/Fremdkontrolle, Konstruktive/destruktive Kontrolle.'},
              {term: 'Kontrollprozess', def: 'Fünf Phasen: Kontrollobjekte definieren, Kontrollmassnahmen durchführen, Ausführung überwachen, Ergebnisse bewerten, Analyse und Feedback.'},
              {term: 'Ergebniskontrolle', def: 'Umfasst Markt-, Umsatz-, Preis-, Gewinn- und Kostenkontrolle.'},
              {term: 'Ausführungskontrolle', def: 'Bewertung von Handlungsabläufen und Handlungsweisen, häufig im Personalbereich angewendet.'},
              {term: 'Kontrollplan', def: 'Dokument mit Zielsetzung, Kontrollmassnahmen, Prüfkriterien, Kontrollpunkten, Häufigkeit und Verantwortlichkeiten.'},
              {term: 'Mystery-Shopping', def: 'Verdeckte Testkäufer überprüfen die Qualität des Kundenservice und der Verkaufsprozesse.'},
              {term: 'Verkaufskontrolle', def: 'Überprüfung der Verkaufsziele. Wirkung kann nicht isoliert von anderen Marketinginstrumenten betrachtet werden.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch9',
      num: 'Kapitel 9',
      title: 'Verkaufsgespräch',
      pageStart: 173, pageEnd: 194,
      exercises: [
        {
          id: 82,
          type: 'match',
          q: 'Zählen Sie die sechs Phasen des Verkaufsgesprächs auf und ordnen Sie die Tätigkeiten zu.',
          pairs: [
            {l: 'Vorbereitung', r: 'Informationsbeschaffung'},
            {l: 'Eröffnung', r: 'Persönliche Begrüssung, Atmosphäre schaffen'},
            {l: 'Angebot und Argumentation', r: 'Bedarfsanalyse, Präsentation, Verhandlung'},
            {l: 'Abschluss', r: 'Kaufbereitschaft herbeiführen, abschliessen'},
            {l: 'Verabschiedung', r: 'Definition und Absprache des weiteren Vorgehens'},
            {l: 'After-Sales-Service (Nachbearbeitung)', r: 'Gespräch nachbearbeiten, Beziehung pflegen'}
          ],
          options: ['Informationsbeschaffung','Persönliche Begrüssung, Atmosphäre schaffen','Bedarfsanalyse, Präsentation, Verhandlung','Kaufbereitschaft herbeiführen, abschliessen','Definition und Absprache des weiteren Vorgehens','Gespräch nachbearbeiten, Beziehung pflegen'],
          tips: ['Das Verkaufsgespräch hat 6 Phasen.','Es beginnt mit der Vorbereitung und endet mit dem After-Sales-Service.','Jede Phase hat spezifische Tätigkeiten.'],
          reveal: ['Warum genau diese Reihenfolge? Ohne Vorbereitung (1) fehlt Wissen über den Kunden. Ohne Eröffnung (2) kein Vertrauen. Ohne Bedarfsanalyse (3) kein passendes Angebot. Ohne Abschluss (4) kein Auftrag.','Warum Verabschiedung (5) als eigene Phase? Hier wird das weitere Vorgehen definiert – das zeigt Professionalität und sichert den nächsten Kontakt.','Warum After-Sales (6)? «Nach dem Kauf ist vor dem Kauf» – Kundenbindung und Wiederkauf hängen davon ab. Viele Verkäufer vernachlässigen diese Phase, was Folgegeschäft kostet.','Prüfungstipp: Die 6 Phasen und ihre Zuordnung sind ein Prüfungsklassiker. Merke dir zu jeder Phase die Kernaktivität.']
        },
        {
          id: 83,
          type: 'text',
          q: 'Nennen Sie zwei vorökonomische Ziele für ein bevorstehendes Verkaufsgespräch.',
          keywords: ['pflege','kontakt','präsentation','information','beziehung','marktleistung','image','zufriedenheit'],
          solution: '1. Pflege des Kontakts / der Beziehung. 2. Information und Präsentation einer neuen Marktleistung.',
          questions: [
            {q: 'Zwei vorökonomische Ziele:', keywords: ['pflege','kontakt','präsentation','information','beziehung','marktleistung','image','zufriedenheit'], minKeywords: 2}
          ],
          tips: ['Vorökonomisch = nicht direkt umsatzbezogen.','Denken Sie an Beziehungspflege.','Auch Informationsaustausch zählt.'],
          reveal: ['Warum «vorökonomisch»? Diese Ziele bringen keinen direkten Umsatz, schaffen aber die Grundlage dafür – z.B. Beziehungspflege führt langfristig zu Aufträgen.','Beispiele: 1) Pflege des Kontakts/der Beziehung, 2) Information über neue Marktleistung, 3) Image-Aufbau, 4) Kundenzufriedenheit erhöhen.','Häufiger Fehler: Umsatzziele oder Absatzziele als vorökonomisch nennen – diese sind ökonomisch! Vorökonomisch = kein direkter Geldfluss.']
        },
        {
          id: 84,
          type: 'text',
          q: 'Nennen Sie mindestens drei Präsentationshilfsmittel für die Tätigkeit des Verkäufers.',
          keywords: ['geschäftsunterlagen','fachartikel','testimonial','muster','modelle','bilder','pläne','skizzen','diagramm','präsentation','video','DVD'],
          solution: 'Geschäftsunterlagen und -drucksachen, Fachartikel/Testimonials, Muster/Modelle/Bilder, Pläne/Skizzen/Diagramme, Präsentationen/Videos.',
          questions: [
            {q: 'Präsentationshilfsmittel:', keywords: ['geschäftsunterlagen','fachartikel','testimonial','muster','modelle','bilder','pläne','skizzen','diagramm','präsentation','video','DVD'], minKeywords: 3}
          ],
          tips: ['Denken Sie an visuelle und haptische Hilfsmittel.','Geschäftsunterlagen und Drucksachen zählen.','Auch digitale Medien sind Hilfsmittel.'],
          reveal: ['Warum Hilfsmittel? Menschen nehmen 80% visuell wahr. Ein Muster in der Hand überzeugt mehr als jede Beschreibung – «Zeigen statt Erzählen».','Kategorien: Geschäftsunterlagen/Drucksachen, Fachartikel/Testimonials, Muster/Modelle/Bilder, Pläne/Skizzen/Diagramme, Präsentationen/Videos.','Prüfungstipp: Nenne mindestens 3 verschiedene Kategorien, nicht nur «PowerPoint». Die Vielfalt zeigt dein Verständnis.','Häufiger Fehler: Nur digitale Hilfsmittel nennen. Physische Muster und Modelle sind im B2B-Verkauf besonders wichtig.']
        },
        {
          id: 85,
          type: 'text',
          q: 'Was unternehmen Sie im Vorfeld eines Gesprächs, damit Sie für Einwände gewappnet sind?',
          keywords: ['liste','vorfeld','erarbeiten','team','verkaufsteam','produktverantwortlich','vorbereiten','möglichst','viele'],
          solution: 'Ich erarbeite im Vorfeld eine Liste. Damit ich mich auf möglichst viele Einwände vorbereiten kann, erarbeiten wir die Liste im Verkaufsteam zusammen mit den Produktverantwortlichen.',
          questions: [
            {q: 'Vorbereitung auf Einwände:', keywords: ['liste','vorfeld','erarbeiten','team','verkaufsteam','produktverantwortlich','vorbereiten','möglichst','viele'], minKeywords: 2}
          ],
          tips: ['Vorbereitung ist der Schlüssel.','Arbeiten Sie nicht alleine, sondern im Team.','Eine Liste aller möglichen Einwände hilft.'],
          reveal: ['Warum im Team erarbeiten? Einzelne Verkäufer kennen nur «ihre» Einwände. Im Team mit Produktverantwortlichen werden mehr Einwände gesammelt, und die besten Antworten können geteilt werden.','Warum eine Liste? Eine vorbereitete Einwandliste gibt Sicherheit im Gespräch. Wer auf einen Einwand sofort souverän reagiert, wirkt kompetent und überzeugend.','Prüfungstipp: Die Antwort muss ZWEI Aspekte enthalten: 1) Liste erarbeiten (Vorbereitung), 2) Im Team mit Produktverantwortlichen (Zusammenarbeit). Beides ist wichtig.']
        },
        {
          id: 86,
          type: 'text',
          q: 'Erklären Sie den Begriff «After-Sales-Service».',
          keywords: ['service','nach','kauf','marketingpolitik','kaufentscheidung','bestätigt','wiederhol','zusatzkauf','kundenzufriedenheit','kundenloyalität','kundenbindung'],
          solution: 'After-Sales-Service ist eine serviceorientierte Marketingpolitik, die nach einem Kauf die Kunden in ihrer Kaufentscheidung bestätigt, zu Wiederholungs- und Zusatzkäufen anregt und die langfristige Kundenbindung sicherstellt.',
          questions: [
            {q: 'Erklärung:', keywords: ['service','nach','kauf','marketingpolitik','kaufentscheidung','bestätigt','wiederhol','zusatzkauf','kundenzufriedenheit','kundenloyalität','kundenbindung'], minKeywords: 3}
          ],
          tips: ['After = nach, Sales = Verkauf.','Es geht um die Zeit NACH dem Kauf.','Ziel: Kundenzufriedenheit und -bindung.'],
          reveal: ['Warum After-Sales? Einen Neukunden zu gewinnen ist 5–7x teurer als einen bestehenden Kunden zu halten. After-Sales sichert Wiederkäufe und Weiterempfehlungen.','Die 4 Ziele: 1) Kaufentscheidung bestätigen (kognitive Dissonanz reduzieren), 2) Wiederholungs-/Zusatzkäufe anregen, 3) Kundenzufriedenheit/-loyalität erhöhen, 4) Langfristige Bindung sicherstellen.','Prüfungstipp: After-Sales ist NICHT nur «Reklamationen bearbeiten». Es ist eine proaktive, serviceorientierte Marketingpolitik – dieser Unterschied wird gerne geprüft.']
        },
        {
          id: 87,
          type: 'text',
          q: 'Nennen und beschreiben Sie drei Massnahmen, die einen optimalen After-Sales-Service bei Investitionsgütern auszeichnen.',
          keywords: ['vertriebspartner','kontakt','kunden','support','beratung','hotline','reparatur','service','ersatzteil','logistik'],
          solution: '1. Engagierter Vertriebspartner mit persönlichen Kontakten zu Kunden. 2. Support und Beratung: Hotline für Kunden. 3. 24-h-Reparaturservice und rascher Ersatzteildienst.',
          questions: [
            {q: 'Drei Massnahmen:', keywords: ['vertriebspartner','kontakt','kunden','support','beratung','hotline','reparatur','service','ersatzteil','logistik'], minKeywords: 3}
          ],
          tips: ['Denken Sie an den gesamten Lebenszyklus des Produkts.','Support und Beratung sind wichtig.','Auch Ersatzteilversorgung gehört dazu.'],
          reveal: ['Warum speziell bei Investitionsgütern? Investitionsgüter sind teuer und langlebig – Kunden erwarten umfassenden Service über den gesamten Lebenszyklus. Ein Produktionsausfall kann Tausende kosten.','Kernmassnahmen: 1) Engagierter Vertriebspartner mit persönlichen Kontakten, 2) Support/Beratung via Hotline, 3) 24h-Reparaturservice, 4) Rascher Ersatzteildienst mit optimaler Logistik.','Prüfungstipp: Nenne immer 3 Massnahmen und beschreibe sie kurz. Die Prüfung verlangt «nennen UND beschreiben» – nur Stichworte geben keine volle Punktzahl.','Häufiger Fehler: Nur «Garantie» nennen. Garantie ist eine Pflicht, kein aktiver After-Sales-Service.']
        },
        {
          id: 88,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'Das Verkaufsgespräch hat {0} Phasen. Es beginnt mit der {1} und endet mit dem {2}. In der Phase der {3} wird eine positive Atmosphäre geschaffen.',
          blanks: ['sechs','Vorbereitung','After-Sales-Service','Eröffnung'],
          accept: [['sechs','6'],['Vorbereitung'],['After-Sales-Service'],['Eröffnung']],
          tips: ['6 Phasen von der Vorbereitung bis zum After-Sales.','Die Eröffnung schafft die Atmosphäre.','Der After-Sales-Service pflegt die Beziehung.'],
          reveal: ['Warum 6 Phasen? Jede Phase hat eine klare Funktion – Vorbereitung (Wissen sammeln), Eröffnung (Vertrauen aufbauen), Argumentation (Bedarf decken), Abschluss (Entscheidung), Verabschiedung (nächste Schritte), After-Sales (Bindung).','Warum beginnt es mit Vorbereitung? Ohne Vorbereitung fehlt Wissen über den Kunden, seine Branche und seine Bedürfnisse – das Gespräch wäre unprofessionell.','Warum Atmosphäre in der Eröffnung? Vertrauen entsteht in den ersten Minuten. Ohne positive Atmosphäre blockt der Kunde ab und hört gar nicht erst richtig zu.']
        },
        {
          id: 89,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufsgespräch',
          statements: [
            {s: 'Die Vorbereitung ist die erste Phase des Verkaufsgesprächs und umfasst die Informationsbeschaffung.', c: true, feedback: 'Korrekte Beschreibung der ersten Phase.'},
            {s: 'In der Abschlussphase wird hauptsächlich Small Talk geführt.', c: false, feedback: 'Small Talk gehört zur Eröffnung. In der Abschlussphase wird die Kaufbereitschaft herbeigeführt.'},
            {s: 'After-Sales-Service ist nur für Konsumgüter relevant.', c: false, feedback: 'After-Sales ist für alle Produktarten relevant, besonders bei Investitionsgütern.'}
          ],
          tips: ['Vorbereitung = Phase 1.','Abschluss = Kaufbereitschaft herbeiführen.','After-Sales ist universell wichtig.'],
          reveal: ['Aussage 1: RICHTIG – Die Vorbereitung ist tatsächlich Phase 1. Warum? Bevor man den Kunden trifft, muss man Informationen beschaffen (Branche, Bedürfnisse, bisherige Kontakte). Ohne Vorbereitung kein professionelles Gespräch.','Aussage 2: FALSCH – Small Talk gehört zur Eröffnungsphase (Phase 2), wo Atmosphäre und Vertrauen aufgebaut werden. In der Abschlussphase (Phase 4) geht es um die Kaufbereitschaft – hier wird die Entscheidung herbeigeführt.','Aussage 3: FALSCH – After-Sales ist für ALLE Produktarten relevant, besonders bei Investitionsgütern (Maschinen, Anlagen). Warum? Weil dort der Service über den gesamten Lebenszyklus entscheidend für die Kundenbindung ist.']
        },
        {
          id: 90,
          type: 'mc',
          q: 'In welcher Phase des Verkaufsgesprächs findet die Bedarfsanalyse statt?',
          options: [
            'Vorbereitung',
            'Eröffnung',
            'Angebot und Argumentation',
            'Abschluss'
          ],
          answer: 2,
          tips: ['Die Bedarfsanalyse erfordert ein Gespräch mit dem Kunden.','Sie ist Teil der inhaltlichen Verhandlung.','In dieser Phase wird auch präsentiert und argumentiert.'],
          reveal: ['Richtig ist C: Angebot und Argumentation (Phase 3). Die Bedarfsanalyse ist der erste Schritt dieser Phase – erst Bedürfnisse verstehen, dann passend argumentieren und präsentieren.','Warum A falsch? In der Vorbereitung (Phase 1) sammelt man Informationen VOR dem Treffen. Die Bedarfsanalyse findet IM Gespräch mit dem Kunden statt.','Warum B falsch? Die Eröffnung (Phase 2) dient dem Beziehungsaufbau und der Atmosphäre – hier geht man noch nicht auf inhaltliche Bedürfnisse ein.','Warum D falsch? Im Abschluss (Phase 4) ist die Bedarfsanalyse längst abgeschlossen. Hier wird die Kaufentscheidung herbeigeführt.']
        },
        {
          id: 91,
          type: 'sort',
          q: 'Ordnen Sie die sechs Phasen des Verkaufsgesprächs in die korrekte Reihenfolge.',
          items: ['Vorbereitung', 'Eröffnung', 'Angebot und Argumentation', 'Abschluss', 'Verabschiedung', 'After-Sales-Service'],
          tips: ['Das Gespräch beginnt schon vor dem Treffen mit dem Kunden.','Die Eröffnung schafft Atmosphäre und Vertrauen.','After-Sales kommt ganz am Ende — nach dem Abschluss und der Verabschiedung.'],
          reveal: ['Warum diese Reihenfolge? Sie folgt dem natürlichen Gesprächsablauf: Erst vorbereiten, dann begrüssen, dann verhandeln, dann abschliessen, verabschieden und nachbetreuen.','Häufiger Fehler: Verabschiedung und After-Sales verwechseln. Verabschiedung = noch beim Kunden (nächste Schritte besprechen). After-Sales = nach dem Gespräch (Nachbearbeitung, Follow-up).','Prüfungstipp: «Nach dem Kauf ist vor dem Kauf» – der Prozess ist ein Kreislauf. After-Sales führt wieder zur Vorbereitung des nächsten Gesprächs.']
        }
      ],
      learningData: {
        title: 'Verkaufsgespräch',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- die sechs Phasen des Verkaufsgesprächs beschreiben\n- verschiedene Abschlusstechniken aufzählen\n- erklären, worauf es beim Aftersales-Service ankommt'
          },
          {
            type: 'concept',
            title: '9.1 Aufbau von nachhaltigen Kundenbeziehungen',
            text: 'Im Verkauf bezieht sich der Begriff «Beziehung» auf die Verbindung zwischen einer Verkaufsperson und seiner Kundin oder seinem Kunden, die Kundenbeziehung. Es geht darum, eine langfristige und vertrauensvolle Verbindung aufzubauen, bei der die Verkaufsperson die Bedürfnisse und Anforderungen der Kundschaft versteht und darauf eingeht.\n\nEine gute Beziehung im Verkauf beinhaltet mehr als nur den Austausch von Produkten oder Dienstleistungen gegen Geld. Sie basiert auf Kommunikation, Vertrauen, Zuverlässigkeit und der Bereitschaft des Verkäufers, den Kunden zu unterstützen und ihm Mehrwert zu bieten.\n\nUnter einer Beziehung versteht man eine auf gegenseitigem Vertrauen basierende persönliche Verbindung. Die zentralen Punkte dabei sind: Gegenseitiges Vertrauen und Gegenseitiger Nutzen.\n\nGeschäftsbeziehungen entstehen und entwickeln sich nicht von allein. Sie müssen systematisch gepflegt werden.'
          },
          { type: 'svg', title: '6 Phasen des Verkaufsgespr\u00e4chs', svg: '<svg viewBox="0 0 650 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="vg-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><text x="325" y="20" text-anchor="middle" fill="#3730a3" font-size="13" font-weight="bold">Die 6 Phasen des Verkaufsgespr\u00e4chs</text><rect x="5" y="40" width="90" height="65" rx="8" fill="#4f46e5"/><text x="50" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">1</text><text x="50" y="78" text-anchor="middle" fill="#e0e7ff" font-size="8" font-weight="bold">Vorbereitung</text><text x="50" y="92" text-anchor="middle" fill="#c7d2fe" font-size="7">Planung A-Z</text><line x1="95" y1="72" x2="108" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="110" y="40" width="90" height="65" rx="8" fill="#6366f1"/><text x="155" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">2</text><text x="155" y="78" text-anchor="middle" fill="#e0e7ff" font-size="8" font-weight="bold">Er\u00f6ffnung</text><text x="155" y="92" text-anchor="middle" fill="#c7d2fe" font-size="7">Atmosph\u00e4re</text><line x1="200" y1="72" x2="213" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="215" y="40" width="90" height="65" rx="8" fill="#818cf8"/><text x="260" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">3</text><text x="260" y="78" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">Argumentation</text><text x="260" y="92" text-anchor="middle" fill="#e0e7ff" font-size="7">Bedarf + Angebot</text><line x1="305" y1="72" x2="318" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="320" y="40" width="90" height="65" rx="8" fill="#a5b4fc"/><text x="365" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">4</text><text x="365" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Abschluss</text><text x="365" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Kaufentscheid</text><line x1="410" y1="72" x2="423" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="425" y="40" width="90" height="65" rx="8" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/><text x="470" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">5</text><text x="470" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Verabschiedung</text><text x="470" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Dank + n\u00e4chste Schritte</text><line x1="515" y1="72" x2="528" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="530" y="40" width="110" height="65" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="585" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">6</text><text x="585" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Aftersales-Service</text><text x="585" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Nachbearbeitung</text><path d="M585,105 Q585,145 50,145 Q20,145 20,120 Q20,105 50,105" fill="none" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#vg-arr)"/><text x="325" y="140" text-anchor="middle" fill="#4f46e5" font-size="9" font-style="italic">Nach dem Kauf ist vor dem Kauf</text><text x="325" y="170" text-anchor="middle" fill="#78716c" font-size="10">Kundennutzen steht in jeder Phase im Vordergrund</text></svg>' },
          {
            type: 'concept',
            title: '9.2 Sechs Phasen des Verkaufsgesprächs',
            text: 'Ein Verkaufsgespräch ist immer in etwa gleichen Phasen aufgebaut und gegliedert. Die sechs Phasen eines Verkaufsgesprächs sind:\n\n1. Vorbereitungsphase: Informationsbeschaffung, Social-Media-Profil anschauen, Gesprächsziele festlegen, Gesprächsstrategie und -verlauf planen, Kundennutzen erkennen, Einsatz von Hilfsmitteln, Aktives und passives Zuhören, Auftreten und Erscheinung, Zeit- und Routenplanung, Storechecks.\n\n2. Eröffnungsphase: Persönliche Begrüssung, Atmosphäre schaffen, Vorstellung des Unternehmens, Vorstellung der Verkaufsperson, Gesprächseinstieg.\n\n3. Angebots- und Argumentationsphase: Bedarfsanalyse, Präsentation und Beratung, Argumentation, Sandwichtechnik, Referenzen und Empfehlungen, Einwandbehandlung, Preisverhandlungen, Umgang mit Mitbewerbern, Einsatz von Fragebogen.\n\n4. Abschlussphase: Kaufbereitschaft herbeiführen, Abschluss, Bestätigung.\n\n5. Verabschiedung: Vereinbarung des weiteren Vorgehens, Dank.\n\n6. Aftersales-Service (Nachbearbeitung): Nach dem Kauf ist vor dem Kauf, Kontakte pflegen und nutzen.'
          },
          {
            type: 'concept',
            title: '9.3 Vorbereitungsphase',
            text: 'In der Vorbereitungsphase wird der Ablauf des Gesprächs von A bis Z geplant. Dabei soll immer der Kundennutzen im Vordergrund stehen.\n\nBei der Informationsbeschaffung geht es darum, sich von der Kundschaft und allenfalls auch von den Mitbewerbern ein möglichst abgerundetes Bild zu machen und die Ausgangslage/die Ist-Situation genau zu analysieren.\n\nKleidung und Erscheinungsbild: Die Kleidung ist ein Hilfsmittel für die Präsentation des Verkäufers. Saubere, gepflegte Kleidung ist ein Muss, um einen positiven Eindruck zu hinterlassen.\n\nBesuchs- und Zeitplanung: Nichts ist unangenehmer, als zu spät zu einem Gesprächstermin mit einem Kunden zu kommen. Ein zeitlicher Puffer ist auf jeden Fall einzuplanen.'
          },
          {
            type: 'concept',
            title: '9.4 Eröffnungsphase',
            text: 'In der Eröffnungsphase geht es vor allem um das Schaffen einer angenehmen Atmosphäre.\n\nPersönliche Begrüssung: Nichts ist persönlicher als der Name. Der Verkaufende sollte den Kunden, die Kundin daher immer mit dem Namen ansprechen und begrüssen. Visitenkarten sollten ausgetauscht werden.\n\nAtmosphäre schaffen: Dazu gehört ein vorbereitetes, aufgeräumtes und sauberes Sitzungszimmer. Ein aufmerksamer Gastgeber bietet zumindest einen Kaffee oder Tee an.\n\nGesprächseinstieg: Durch eine geschickte Überleitung wird die Aufmerksamkeit auf den Gegenstand des Fach- oder Verkaufsgesprächs gelenkt. Der geübte Verkäufer achtet auf persönliche Eigenheiten des Gegenübers und merkt sich diese für künftige Gespräche.'
          },
          {
            type: 'concept',
            title: '9.5 Angebots- und Argumentationsphase',
            text: 'In der Angebots- und Argumentationsphase wird der Bedarf des Kunden abgeklärt und es werden die Verkaufsverhandlungen geführt.\n\nBedarfsanalyse: In dieser Phase geht es darum, den Bedarf des Kunden genau zu erkennen. Es ist das Herzstück des Verkaufs. Dabei helfen der gezielte Einsatz von Fragetechniken (insbesondere offene Fragen), die Technik des aktiven Zuhörens sowie Befragungen.\n\nEinsatz von Fragebogen: Bei der Analyse der Bedürfnisse kann es im Verkaufsgespräch von Vorteil sein, vorbereitete Fragen einzusetzen, um Bedürfnisse oder den Bedarf von potenzieller Kundschaft gezielt zu ermitteln.'
          },
          {
            type: 'concept',
            title: '9.6 Abschlussphase',
            text: 'In keinem anderen Beruf liegen Erfolg und Misserfolg so nahe beieinander wie in dem des Verkaufenden. Misserfolge gehören zum Berufsalltag.\n\nKaufsignale: Der optimale Zeitpunkt für den Abschluss kündigt sich an, wenn die Kundin, der Kunde für einen Abschluss bereit ist. Signale: begründet konkretes Interesse am Produkt, beginnt die Preisdiskussion, stellt Fragen zur Lieferung, spricht über Serviceaspekte.\n\nDrei mögliche Ergebnisse eines Verkaufsgesprächs:\n1. Kundschaft kauft – der Verkauf war erfolgreich\n2. Kundschaft sagt «vielleicht» – mittels Alternativfragen zum Entscheid führen\n3. Kundschaft ist ablehnend – die Beweggründe für das Nein in Erfahrung bringen und den nächsten Kontakttermin vereinbaren'
          },
          {
            type: 'concept',
            title: '9.7 Verabschiedung und 9.8 Aftersales-Service',
            text: 'Verabschiedung: Die Verabschiedung nach einem Verkaufsgespräch ist fast genauso wichtig wie die Begrüssung. Es gilt, dem Kaufenden seinen Entscheid und das gute Gefühl zu bestätigen. Ein Wort, das Wunder wirkt, ist: «Danke.» Die Verabschiedung erfolgt nach ein paar persönlichen Worten – speditiv und freundlich.\n\nAftersales-Service (Nachbearbeitung): Das Aftersales-Management ist ein Teilschritt des Verkaufsprozesses, der idealerweise in eine neue Verkaufsphase mündet. Der Aftersales-Service ist ein Teilbereich des Customer Relationship Managements (CRM), also der Pflege sämtlicher Kundenbeziehungen. Darüber hinaus ist er ein Teilschritt des Verkaufsprozesses, der idealerweise in eine erneute Pre-Sales-Phase mündet, die zu zusätzlichen Verkäufen und erhöhter Kundenloyalität führt.\n\nIm Online-Handel stärkt ein guter Aftersales-Service das Vertrauen der Kundschaft und ist für den Kaufentscheid von zentraler Bedeutung.'
          },
          {
            type: 'concept',
            title: '9.9 Partnerschaft zwischen Einkauf und Verkauf',
            text: 'In vielen Unternehmen spielen Einkaufsleiter und Einkäuferinnen eine zentrale Rolle, denn durch ihre Arbeit bestimmen sie wesentlich Qualität, Verfügbarkeit und Kosten der jeweiligen Produkte. Aus Sicht des Verkäufers ergibt sich daraus eine Art Machtposition.\n\nDie Hauptaufgaben eines Einkäufers sind: Aufbau und Pflege von stabilen Lieferantenbeziehungen, um so optimale Einkaufskonditionen zu erarbeiten. Er ist dafür verantwortlich, dass die richtige Ware zum besten Preis in einer optimalen Qualität, just in time am gewünschten Ort verfügbar ist.\n\nIm modernen Einkauf basieren die Beziehungen auf partnerschaftlicher Zusammenarbeit. Einkauf und Verkauf arbeiten grundsätzlich mit den gleichen Methoden und Techniken und verfolgen das gleiche Ziel: den nachhaltigen Unternehmenserfolg.'
          },
          {
            type: 'methodenbox',
            title: 'Aktives und passives Zuhören: Verkaufsgespräch',
            text: '1. Wann und wofür setzen Sie diese Methode ein?\nAktives Zuhören: wenn man eine effektive Kommunikation und ein tieferes Verständnis erreichen möchte. Es wird angewendet, um dem Gesprächspartner Aufmerksamkeit zu schenken, seine Aussagen zu verstehen, Rückfragen zu stellen, Empathie zu zeigen und eine konstruktive Antwort zu geben.\nPassives Zuhören: wenn man Informationen aufnehmen und verstehen möchte, ohne aktiv in das Gespräch eingreifen zu müssen.\n\n2. Was erhalten Sie als Ergebnis?\nAktives Zuhören macht Gespräche interessanter, menschlicher. Es signalisiert dem Gegenüber (Kunden) Interesse, Respekt und Wertschätzung.\nPassives Zuhören führt nicht zu einem Austausch zwischen Kunden und Verkaufenden.\n\n3. Was beachten Sie beim aktiven und beim passiven Zuhören?\nAktives Zuhören: Aktiv sein, Augenkontakt halten, dem Gegenüber mit Mimik und Gestik zeigen, dass man aktiv dabei ist und zuhört und interessiert ist.\nPassives Zuhören: Die Worte fliessen am Empfänger vorbei, er nimmt nicht aktiv am Gespräch teil.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Die sechs Phasen des Verkaufsgesprächs sind: Vorbereitungsphase, Eröffnungsphase, Angebots- und Argumentationsphase, Abschlussphase, Verabschiedung und Aftersales-Service.\n\nDie Kundschaft kauft einen Nutzen und ist bereit, dafür einen Preis zu bezahlen. Dabei muss ihr der Nutzen höher erscheinen als der verlangte Preis.\n\nReferenzen und Empfehlungen erleichtern dem Kunden die Wahl des Unternehmens.\n\nDer Aftersales-Service ist ein Teilbereich des Customer Relationship Managements (CRM). Er ist ein Teilschritt des Verkaufsprozesses, der idealerweise in eine erneute Pre-Sales-Phase mündet.'
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Die sechs Phasen des Verkaufsgesprächs sind:\n1. Die Vorbereitungsphase\n2. Die Eröffnungsphase\n3. Die Angebots- und Argumentationsphase\n4. Die Abschlussphase\n5. Verabschiedung\n6. Aftersales-Service (Nachbearbeitung)\n\nReferenzen und Empfehlungen erleichtern dem Kunden die Wahl des Unternehmens, bei dem er Produkte und Dienstleistungen kauft.\n\nDie Kundschaft kauft einen Nutzen und ist bereit, dafür einen Preis zu bezahlen. Dabei muss ihr der Nutzen höher erscheinen als der verlangte Preis.\n\nDer Aftersales-Service ist ein Teilbereich des Customer Relationship Managements (CRM), also der Pflege sämtlicher Kundenbeziehungen. Darüber hinaus ist er ein Teilschritt des Verkaufsprozesses, der idealerweise in eine erneute Pre-Sales-Phase mündet, die zu zusätzlichen Verkäufen und erhöhter Kundenloyalität führt.\n\nIm Online-Handel stärkt ein guter Aftersales-Service das Vertrauen der Kundschaft und ist für den Kaufentscheid von zentraler Bedeutung.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Kundenbeziehung', def: 'Langfristige, vertrauensvolle Verbindung zwischen Verkaufsperson und Kunde, basierend auf gegenseitigem Vertrauen und gegenseitigem Nutzen.'},
              {term: 'Phasen des Verkaufsgesprächs', def: 'Sechs Phasen: Vorbereitung, Eröffnung, Angebot und Argumentation, Abschluss, Verabschiedung, Aftersales-Service.'},
              {term: 'Vorbereitungsphase', def: 'Phase, in der der Ablauf des Gesprächs geplant wird. Informationsbeschaffung, Gesprächsziele festlegen, Kundennutzen erkennen.'},
              {term: 'Eröffnungsphase', def: 'Phase zum Schaffen einer angenehmen Atmosphäre. Persönliche Begrüssung, Visitenkartenaustausch, Gesprächseinstieg.'},
              {term: 'Bedarfsanalyse', def: 'Herzstück des Verkaufs. Ermittlung des Kundenbedarfs durch Fragetechniken, aktives Zuhören und Befragungen.'},
              {term: 'Sandwichtechnik', def: 'Argumentationstechnik, bei der der Preis zwischen zwei nutzenorientierten Argumenten «verpackt» wird.'},
              {term: 'Kaufsignale', def: 'Zeichen, dass die Kundschaft für einen Abschluss bereit ist: konkretes Interesse, Preisdiskussion, Lieferfragen.'},
              {term: 'Aftersales-Service', def: 'Nachbearbeitung und Teilbereich des CRM. Idealerweise mündet er in eine erneute Pre-Sales-Phase mit zusätzlichen Verkäufen.'},
              {term: 'CRM (Customer Relationship Management)', def: 'Pflege sämtlicher Kundenbeziehungen über den gesamten Verkaufszyklus hinweg.'},
              {term: 'Aktives Zuhören', def: 'Aufmerksam sein, Augenkontakt halten, Rückfragen stellen, Empathie zeigen. Signalisiert Interesse, Respekt und Wertschätzung.'},
              {term: 'Passives Zuhören', def: 'Informationen aufnehmen ohne aktive Beteiligung am Gespräch. Kein echter Austausch.'},
              {term: 'Empfehlungsmarketing', def: 'Nutzung von Referenzen und Empfehlungen zufriedener Kunden zur Neukundengewinnung.'}
            ]
          }
        ]
      }
    },
    {
      id: 'ch10',
      num: 'Kapitel 10',
      title: 'Verkaufstechnik',
      pageStart: 195, pageEnd: 218,
      exercises: [
        {
          id: 92,
          type: 'text',
          q: 'Worin unterscheiden sich geschlossene und offene Fragen?',
          keywords: ['kurz','klar','beantwortet','raum','antwort','ja','nein','ausführlich','offen','geschlossen'],
          solution: 'Geschlossene Fragen lassen sich kurz und klar beantworten (Ja/Nein). Offene Fragen lassen Raum für die Antwort und fördern ein ausführliches Gespräch.',
          questions: [
            {q: 'Unterschied:', keywords: ['kurz','klar','beantwortet','raum','antwort','ja','nein','ausführlich','offen','geschlossen'], minKeywords: 3}
          ],
          tips: ['Geschlossene Fragen = Ja/Nein-Antworten.','Offene Fragen = ausführliche Antworten.','Offene Fragen beginnen oft mit W-Wörtern.'],
          reveal: ['Warum offene Fragen im Verkauf bevorzugt? Sie bringen den Kunden zum Reden – je mehr er erzählt, desto besser verstehst du seine Bedürfnisse. Offene Fragen beginnen mit W-Wörtern (Was, Wie, Warum).','Warum auch geschlossene Fragen nützlich? Zum Abschluss («Darf ich den Auftrag notieren?») oder zur Bestätigung («Ist das korrekt?»). Sie lenken und beschleunigen das Gespräch gezielt.','Prüfungstipp: Die Prüfung verlangt oft ein Beispiel pro Frageart – übe dir je 2 Beispiele ein. Häufiger Fehler: Geschlossene Fragen als «schlecht» bezeichnen – sie haben ihren Platz!']
        },
        {
          id: 93,
          type: 'match',
          q: 'Ordnen Sie den Fragearten ihren Sinn und Zweck zu.',
          pairs: [
            {l: 'Informationsfragen', r: 'Informationen gewinnen'},
            {l: 'Suggestivfragen', r: 'Versuch, das Gegenüber zu beeinflussen'},
            {l: 'Alternativfragen', r: 'Wahl erleichtern, Abschluss beschleunigen'},
            {l: 'Gegenfragen', r: 'Reaktion auf Fragen des Gesprächspartners'},
            {l: 'Kontrollfragen', r: 'Grad der Übereinstimmung kontrollieren'},
            {l: 'Motivationsfragen', r: 'Motive und Beweggründe erfahren'},
            {l: 'Rhetorische Fragen', r: 'Stilmittel, um Aufmerksamkeit zu gewinnen'},
            {l: 'Fangfragen', r: 'Geben Antwort auf Fragen, die der Verkäufer nicht direkt stellen kann'}
          ],
          options: ['Informationen gewinnen','Versuch, das Gegenüber zu beeinflussen','Wahl erleichtern, Abschluss beschleunigen','Reaktion auf Fragen des Gesprächspartners','Grad der Übereinstimmung kontrollieren','Motive und Beweggründe erfahren','Stilmittel, um Aufmerksamkeit zu gewinnen','Geben Antwort auf Fragen, die der Verkäufer nicht direkt stellen kann'],
          tips: ['Jede Frageart hat einen spezifischen Zweck.','Suggestivfragen versuchen zu beeinflussen.','Kontrollfragen prüfen die Übereinstimmung.'],
          reveal: ['Warum so viele Fragearten? Jede Situation im Verkaufsgespräch erfordert eine andere Technik: Bedarfsermittlung (Informations-/Motivationsfragen), Lenkung (Suggestiv-/Alternativfragen), Absicherung (Kontrollfragen).','Häufig verwechselt: Suggestivfragen vs. Rhetorische Fragen. Suggestiv = beeinflusst die Antwort («Sie wollen doch Qualität?»). Rhetorisch = erwartet gar keine Antwort, ist ein Stilmittel («Wer will nicht sparen?»).','Fangfragen sind speziell: Sie liefern Antworten auf Fragen, die man nicht direkt stellen kann. Beispiel: «Was halten Sie von Anbieter X?» verrät indirekt die Kaufkriterien.','Prüfungstipp: Lerne die 8 Fragearten mit je einem Beispiel – die Zuordnung Frageart → Zweck → Beispiel ist ein typisches Prüfungsformat.']
        },
        {
          id: 94,
          type: 'text',
          q: 'A) Welche grundsätzlichen Arten von Einwänden kennen Sie? B) Wie lautet die Formel zur Überwindung von Einwänden?',
          keywords: ['echt','unecht','sachlich','begründet','vorwände','vorwand','verständnis','einwand','gegenfrage','repetition','frageform','antworten','VERA'],
          solution: 'A) Echte Einwände sind sachlich begründet. Unechte Einwände sind Vorwände. B) VERA: Verständnis, Einwand in Gegenfrage, Repetition, Antworten.',
          questions: [
            {q: 'A) Arten:', keywords: ['echt','unecht','sachlich','begründet','vorwände','vorwand'], minKeywords: 2},
            {q: 'B) VERA-Formel:', keywords: ['verständnis','einwand','gegenfrage','repetition','frageform','antworten','VERA'], minKeywords: 3}
          ],
          tips: ['Es gibt echte und unechte Einwände.','Die VERA-Formel hat 4 Schritte.','V-E-R-A ist ein Akronym.'],
          reveal: ['Warum die Unterscheidung echt/unecht? Bei echten Einwänden (sachlich begründet) muss man inhaltlich argumentieren. Bei unechten (Vorwänden) muss man den wahren Grund herausfinden – verschiedene Strategien für verschiedene Situationen.','Warum VERA funktioniert: V (Verständnis) nimmt dem Kunden den Wind aus den Segeln. E (Gegenfrage) macht den Kunden zum Problemlöser. R (Repetition) zeigt, dass man zuhört. A (Antworten) liefert erst jetzt die Lösung.','Prüfungstipp: VERA muss in der richtigen Reihenfolge angewendet werden. Wer sofort antwortet (A) ohne Verständnis (V), wirkt abwehrend statt empathisch.','Häufiger Fehler: Einwände als Angriff sehen. Einwände zeigen Interesse – ein Kunde, der keine Einwände hat, ist oft einfach nicht interessiert.']
        },
        {
          id: 95,
          type: 'text',
          q: 'Welche Angaben im Zusammenhang mit dem Preis muss man bei einem Angebot machen?',
          keywords: ['menge','stück','kilogramm','tonne','zahlungsbedingungen','frist','rabatte','skonto','lieferbedingungen'],
          solution: 'Preise sind immer auf Mengen zu beziehen (pro Stück, pro Kilogramm). Wichtig sind ferner die Zahlungsbedingungen (Frist), allfällige Rabatte (Skonto) und die Lieferbedingungen.',
          questions: [
            {q: 'Preisangaben:', keywords: ['menge','stück','kilogramm','tonne','zahlungsbedingungen','frist','rabatte','skonto','lieferbedingungen'], minKeywords: 3}
          ],
          tips: ['Preise beziehen sich immer auf Mengen.','Denken Sie an Zahlungs- und Lieferbedingungen.','Auch Rabatte und Skonti gehören dazu.'],
          reveal: ['Warum Preis pro Menge? Ein Preis ohne Mengenbezug ist nicht vergleichbar. «CHF 50» sagt nichts – «CHF 50 pro kg» schon. So kann der Kunde verschiedene Angebote fair vergleichen.','Warum Zahlungs- und Lieferbedingungen? Sie beeinflussen den effektiven Preis massgeblich. 2% Skonto bei Zahlung innert 10 Tagen kann bei grossen Bestellungen viel ausmachen.','Prüfungstipp: Nenne immer alle 4 Angaben: Preis pro Menge, Zahlungsbedingungen (Frist), Rabatte/Skonto, Lieferbedingungen. Unvollständige Antworten geben Punktabzug.']
        },
        {
          id: 96,
          type: 'text',
          q: 'Sie arbeiten in der Firma und befinden sich in der Phase der Bedarfsanalyse. Welche Fragen stellen Sie einem Kunden?',
          keywords: ['offen','informationsfragen','motivationsfragen','kontrollfragen','bedürfnisse','grund','warum','was','wie'],
          solution: 'Grundsätzlich offene Fragen verwenden. Speziell: Informationsfragen, Motivationsfragen, evtl. Kontrollfragen.',
          questions: [
            {q: 'Welche Fragearten verwenden Sie?', keywords: ['offen','informationsfragen','motivationsfragen','kontrollfragen','bedürfnisse','grund','warum','was','wie'], minKeywords: 2}
          ],
          tips: ['Offene Fragen sind besonders geeignet.','Informationsfragen helfen, Bedürfnisse zu verstehen.','Motivationsfragen decken Beweggründe auf.'],
          reveal: ['Warum offene Fragen in der Bedarfsanalyse? Weil der Kunde erzählen soll, nicht nur Ja/Nein antworten. Nur so erfährst du seine wahren Bedürfnisse und Beweggründe.','Warum diese 3 Fragearten? Informationsfragen sammeln Fakten («Was brauchen Sie?»), Motivationsfragen decken Gründe auf («Warum ist Ihnen das wichtig?»), Kontrollfragen sichern das Verständnis ab («Habe ich richtig verstanden?»).','Häufiger Fehler: Suggestivfragen in der Bedarfsanalyse einsetzen – das verfälscht die Ergebnisse. Suggestivfragen gehören eher in die Abschlussphase.','Prüfungstipp: In der Bedarfsanalyse geht es ums Zuhören, nicht ums Verkaufen – die Fragearten müssen das widerspiegeln.']
        },
        {
          id: 97,
          type: 'text',
          q: 'Ein Unternehmen bietet eine Fensterputzmaschine an. Das Angebot endet mit: "Wenn Sie weitere Fragen haben, bitten wir Sie höflichst, sich erneut mit uns in Verbindung zu setzen." Formulieren Sie eine kundenfreundlichere Alternative.',
          keywords: ['gerne','kontakt','nächsten','tagen','aufnehmen','fragen','beantworten','gerät','vorführen','wunsch','freuen'],
          solution: '"Gerne werden wir in den nächsten Tagen Kontakt mit Ihnen aufnehmen, um noch offene Fragen zu beantworten und Ihnen das Gerät auf Wunsch auch vorzuführen."',
          questions: [
            {q: 'Alternative Formulierung:', keywords: ['gerne','kontakt','nächsten','tagen','aufnehmen','fragen','beantworten','gerät','vorführen','wunsch','freuen'], minKeywords: 2}
          ],
          tips: ['Seien Sie proaktiv, nicht passiv.','Bieten Sie einen konkreten nächsten Schritt an.','Verwenden Sie eine positive, einladende Sprache.'],
          reveal: ['Warum ist das Original schlecht? «Bitten wir Sie höflichst» legt die Aktivität auf den Kunden – der Verkäufer wartet passiv. Das signalisiert Desinteresse und ist kein aktiver Verkauf.','Warum die Alternative besser? «Gerne werden WIR Kontakt aufnehmen» zeigt Initiative. Das Unternehmen wird aktiv, bietet eine Vorführung an und gibt dem Kunden ein gutes Gefühl.','Prüfungstipp: Achte auf drei Prinzipien: 1) Proaktiv statt passiv, 2) Konkreter nächster Schritt statt vager Aussage, 3) Positive Sprache statt steifer Floskeln.']
        },
        {
          id: 98,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zur VERA-Formel.',
          template: 'V = {0} | E = Einwand in {1} umwandeln | R = {2} des Einwands in Frageform | A = {3}',
          blanks: ['Verständnis aufbringen','Gegenfrage','Repetition','Antworten'],
          accept: [['Verständnis aufbringen','Verständnis'],['Gegenfrage'],['Repetition'],['Antworten']],
          tips: ['VERA ist ein Akronym.','V steht für Verständnis.','Jeder Buchstabe repräsentiert einen Schritt.'],
          reveal: ['Warum diese Reihenfolge? Verständnis (V) zuerst, weil der Kunde sich gehört fühlen muss. Die Gegenfrage (E) macht ihn zum Mitdenker. Die Repetition (R) zeigt aktives Zuhören. Erst dann die Antwort (A).','Warum nicht sofort antworten? Wer sofort argumentiert, wirkt defensiv. VERA baut erst eine Brücke zum Kunden, bevor die Lösung kommt – das erhöht die Akzeptanz der Antwort enorm.','Prüfungstipp: VERA ist ein Akronym – jeder Buchstabe muss erklärt werden können. Häufiger Fehler: «R = Reaktion» statt «R = Repetition» – achte auf die genauen Begriffe.']
        },
        {
          id: 99,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufstechnik',
          statements: [
            {s: 'Offene Fragen lassen Raum für die Antwort und fördern das Gespräch.', c: true, feedback: 'Offene Fragen beginnen oft mit W-Fragenwörtern.'},
            {s: 'Suggestivfragen dienen dazu, neutrale Informationen zu sammeln.', c: false, feedback: 'Suggestivfragen versuchen, das Gegenüber zu beeinflussen.'},
            {s: 'Echte Einwände sind meistens sachlich begründet.', c: true, feedback: 'Im Gegensatz zu unechten Einwänden, die oft Vorwände sind.'},
            {s: 'Die VERA-Formel hat 3 Schritte.', c: false, feedback: 'Die VERA-Formel hat 4 Schritte: V-E-R-A.'}
          ],
          tips: ['Offene Fragen = W-Fragen, ausführliche Antworten.','Suggestivfragen = beeinflussend, nicht neutral.','VERA = 4 Schritte.'],
          reveal: ['Aussage 1: RICHTIG – Offene Fragen beginnen mit W-Wörtern (Was, Wie, Warum) und zwingen den Kunden zu ausführlichen Antworten. Das ist in der Bedarfsanalyse entscheidend, weil man Informationen sammeln will.','Aussage 2: FALSCH – Suggestivfragen sind NICHT neutral. Sie versuchen, das Gegenüber zu beeinflussen («Sie wollen doch sicher Qualität?»). Für neutrale Informationen nutzt man Informationsfragen.','Aussage 3: RICHTIG – Echte Einwände haben sachliche Gründe (z.B. «Der Preis ist zu hoch für unser Budget»). Unechte Einwände sind Vorwände – der Kunde will den wahren Grund nicht nennen.','Aussage 4: FALSCH – VERA hat 4 Schritte, nicht 3: Verständnis, Einwand in Gegenfrage, Repetition, Antworten. Häufiger Fehler: Die Repetition (R) vergessen – sie ist aber wichtig, um aktives Zuhören zu zeigen.']
        },
        {
          id: 100,
          type: 'mc',
          q: 'Welche Frageart dient dazu, den Grad der Übereinstimmung zu kontrollieren?',
          options: [
            'Informationsfragen',
            'Suggestivfragen',
            'Kontrollfragen',
            'Motivationsfragen'
          ],
          answer: 2,
          tips: ['Kontrolle = Überprüfung.','Kontrollfragen prüfen das Verständnis.','Informationsfragen sammeln Informationen.'],
          reveal: ['Richtig ist C: Kontrollfragen. Der Name sagt es bereits – «Kontrolle» der Übereinstimmung. Beispiel: «Habe ich Sie richtig verstanden?» oder «Sind wir uns einig?»','Warum A falsch? Informationsfragen sammeln neue Daten («Was brauchen Sie?»), sie prüfen nicht, ob man sich einig ist.','Warum B falsch? Suggestivfragen beeinflussen die Meinung des Gegenübers («Sie finden doch auch, dass...?»). Sie kontrollieren nicht, sondern lenken.','Warum D falsch? Motivationsfragen erfragen Gründe und Beweggründe («Warum ist Ihnen das wichtig?»). Sie dienen dem Verständnis, nicht der Kontrolle der Übereinstimmung.']
        },
        {
          id: 101,
          type: 'match',
          q: 'Ordnen Sie die Beispielfragen der richtigen Frageart zu.',
          pairs: [
            {l: '"Was ist Ihnen bei einem Produkt besonders wichtig?"', r: 'Informationsfrage'},
            {l: '"Möchten Sie das rote oder das blaue Modell?"', r: 'Alternativfrage'},
            {l: '"Stimmen Sie mir zu, dass Qualität wichtig ist?"', r: 'Suggestivfrage'},
            {l: '"Habe ich Ihre Anforderungen richtig verstanden?"', r: 'Kontrollfrage'}
          ],
          options: ['Informationsfrage','Alternativfrage','Suggestivfrage','Kontrollfrage'],
          tips: ['Informationsfragen sind offen und sammeln Daten.','Alternativfragen bieten eine Wahl.','Suggestivfragen legen eine Antwort nahe.'],
          reveal: ['Warum «Was ist Ihnen wichtig?» = Informationsfrage? Offene W-Frage, die neutral Informationen sammelt. Der Kunde kann frei antworten – keine Beeinflussung, keine Wahlvorgabe.','Warum «Rot oder blau?» = Alternativfrage? Bietet genau zwei Optionen – der Kunde wählt, aber beide führen zum Kauf. Trick: Die Frage ist nicht «ob», sondern «welches».','Warum «Stimmen Sie mir zu?» = Suggestivfrage? Die gewünschte Antwort («Ja») ist bereits in der Frage enthalten. Der Kunde wird in eine Richtung gelenkt.','Warum «Richtig verstanden?» = Kontrollfrage? Prüft, ob Verkäufer und Kunde auf dem gleichen Stand sind. Wichtig vor dem Abschluss, um Missverständnisse zu vermeiden.']
        }
      ],
      learningData: {
        title: 'Verkaufstechnik',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            text: 'Nach der Bearbeitung dieses Kapitels können Sie:\n- die verschiedenen Fragearten und deren Einsatz beschreiben\n- kritische Situationen im Verkauf meistern\n- mit Einwänden von Kunden umgehen\n- attraktive Angebote erstellen, beurteilen und entscheiden'
          },
          {
            type: 'concept',
            title: '10.1 Fragetechnik',
            text: 'Eine gute Verkaufstechnik besteht darin, möglichst die Antworten zu provozieren, die man haben möchte. «Wer fragt, der führt, und wer führt, der gewinnt.»\n\nMit der richtigen Fragestellung gibt die Verkaufsperson ihrem Gegenüber zudem das Gefühl, dass sie ihm zuhört. Das erleichtert es ihr, die Richtung des Gesprächs zu beeinflussen und zu bestimmen.\n\nDie Ziele der Fragetechnik sind:\n- Vertrautheit und Vertrauen aufbauen\n- Eine positive Grundstimmung erzielen\n- Die Wünsche und konkreten Bedürfnisse des Kunden erfahren\n- Ein kundschafts- und bedürfnisorientiertes Angebot präsentieren\n- Argumente gezielt auf Gegenargumente aufbauen\n- Den Gesprächsverlauf diplomatisch korrigieren und beeinflussen\n- Zeit gewinnen, um die nächsten Gedanken formulieren zu können\n- Übereinstimmung und einen Abschluss erzielen oder dann die Grundlage für ein weiteres Gespräch legen'
          },
          {
            type: 'concept',
            title: '10.1.1 Offene und geschlossene Fragen',
            text: 'Geschlossene Fragen sind Fragen, die mit einer kurzen, spezifischen Antwort beantwortet werden können. Sie begrenzen die Antwortmöglichkeiten und erfordern normalerweise nur ein «Ja» oder «Nein» oder eine bestimmte Antwortoption.\nBeispiele: «Können Sie sich eine Zusammenarbeit vorstellen?», «Darf ich Ihren Auftrag notieren?»\nGeschlossene Fragen sind nützlich, wenn man präzise Antworten benötigt oder bestimmte Aspekte klären möchte.\n\nOffene Fragen lassen Raum für die Antwort. Das Gegenüber soll die Frage mit einem Satz beantworten und Informationen preisgeben. Offene Fragen beginnen mit einem «W». Deshalb wird oft von W-Fragen (wer, wie, wann, was, wo, wie oft, weshalb, wofür, wie viel usw.) gesprochen.'
          },
          {
            type: 'concept',
            title: 'Weitere Fragearten',
            text: 'Es gibt folgende weitere Fragearten:\n- Informationsfragen: Offene Fragen, die gezielt Informationen sammeln. «Was ist Ihnen wichtig?»\n- Suggestivfragen: Fragen, die eine bestimmte Antwort nahelegen. «Sie stimmen doch zu, dass ...?»\n- Alternativfragen: Bieten eine Auswahl zwischen zwei oder mehr Optionen. «Rot oder blau?»\n- Gegenfragen: Antwort auf eine Frage mit einer Gegenfrage. Können als unhöflich empfunden werden.\n- Kontrollfragen: Prüfen, ob das Gesagte richtig verstanden wurde. «Habe ich Sie richtig verstanden?»\n- Motivationsfragen: Motivieren den Gesprächspartner. «Was gefällt Ihnen besonders?»\n- Rhetorische Fragen: Fragen, auf die keine Antwort erwartet wird. Dienen der Betonung.\n- Fangfragen: Können die Kundschaft in eine unangenehme Lage bringen und sollten im Verkauf vermieden werden.'
          },
          {
            type: 'concept',
            title: '10.2 Zehn Praxistipps zum Meistern von kritischen Situationen im Verkauf',
            text: 'Kritische Situationen im Verkauf erfordern Führungsstärke und Souveränität. Man sollte nicht allein in ein heikles Gespräch gehen, sondern beispielsweise den Vorgesetzten, eine interne Fachperson oder einen kompetenten Kollegen zuziehen.\n\nDie 10 Praxistipps:\n1. Verkürzung des Meetings – z.B. Hinweis auf bereits erfolgte Reservierung\n2. Ein bisschen Verwirrung stiften – zunächst über andere Themen sprechen\n3. Unterbrechungen erreichen – das Wort übernehmen, nachfragen\n4. Zuspielen der Bälle – Anwesenheit der Fachperson nutzen\n5. Gegenseitige Unterstützung – Ablenkung durch Fragen der Kollegen\n6. Bekundung von Gemeinsamkeiten – positive gemeinsame Erfahrungen betonen\n7. Fragetechnik – Gegenfragen stellen, um Handlungsvollmacht zu klären\n8. Verhandlungstechnik – vorbereitet sein, mit Gegenvorschlägen reagieren\n9. Kompromissbereitschaft zeigen – Lösungen suchen, die für beide Seiten funktionieren\n10. Ruhe bewahren – souverän und professionell bleiben'
          },
          {
            type: 'concept',
            title: '10.3 Einwandbehandlung',
            text: 'Die Kundschaft hat oft Einwände, mit denen sie erklärt, warum sie nicht auf Anhieb die vorgeschlagene Ware kaufen möchte. Wir können drei Gruppen von Ursachen für Einwände nennen:\n1. Die Einwände liegen bei den Kunden\n2. Die Einwände liegen bei den Marktleistungen\n3. Die Einwände liegen beim Verkaufsmitarbeitenden\n\nEchte Einwände sind meistens sachlich begründet. Unechte Einwände sind häufig Vorwände der Kunden.\n\nDie VERA-Formel zum Überwinden von Einwänden:\nV = Verständnis aufbringen\nE = Einwand in Frage umwandeln\nR = Repetition des Einwands in Frageform\nA = Antworten'
          },
          {
            type: 'concept',
            title: '10.4 Angebote erstellen, beurteilen und entscheiden',
            text: 'Angebote müssen einerseits die Bedürfnisse der Kundschaft abdecken, andererseits klar, präzise und eindeutig formuliert sein. Ein Angebot ist ein rechtlich bindender Vorschlag, der von einer Person oder einem Unternehmen gemacht wird, um bestimmte Waren oder Dienstleistungen zu bestimmten Bedingungen anzubieten.\n\nEin Angebot sollte grundsätzlich erst dann erstellt werden, wenn folgende Informationen zum Projekt vorhanden sind:\n- Die Bedürfnisse, Anforderungen und Erwartungen der Kundschaft sind klar\n- Das Budget ist vorhanden\n- Die am Entscheidungsprozess beteiligten Personen sind bekannt\n- Der Entscheidungsprozess ist bekannt\n\nDas Angebot besteht aus einem sachlichen und einem werbenden Teil. Der sachliche Teil enthält: genaue Angaben zum Produkt/Dienstleistung, Preis und allfällige Rabatte, Liefer- und Zahlungsbedingungen. Der werbende Teil hat das Ziel, das Kaufinteresse des Anfragenden zu stärken und sein Vertrauen zu gewinnen.'
          },
          {
            type: 'concept',
            title: '10.5 Die Angebotsformen und -arten / Social Selling',
            text: 'Ein Angebot kann mündlich, schriftlich oder elektronisch abgegeben werden, je nach den geltenden gesetzlichen Anforderungen und der Art des Geschäfts. Verbreitet ist die schriftliche Form.\n\nSocial Selling ist eine ganzheitliche Strategie zur Unterstützung des Verkaufsprozesses. Der im Netz veröffentlichte Content schafft Struktur, die dafür sorgt, den Kunden in jedem Stadium der Customer Journey durch den persönlichen Kontakt in der digitalen Welt zu erreichen.'
          },
          {
            type: 'methodenbox',
            title: 'Nutzwertanalyse und Entscheidungsmatrix: Angebotsentscheidung',
            text: 'Nutzwertanalyse: Angebotsentscheidung\n1. Wann und wofür setzen Sie diese Methode ein?\nDie Nutzwertanalyse ist ein Instrument zur Bewertung von Alternativen. Mit ihr werden Entscheidungsalternativen aufgrund von quantitativen und/oder qualitativen Kriterien miteinander verglichen und bewertet.\n\n2. Was erhalten Sie als Ergebnis?\nDas Ergebnis der Nutzwertanalyse ist die Alternative mit dem höchsten Nutzwert.\n\n3. Was beachten Sie speziell?\nFür eine Angebotsentscheidung ist es wichtig, dass die Bewertungskriterien und deren Gewichtung sorgfältig ausgewählt werden.\n\nEntscheidungsmatrix: Angebotsentscheidung\n1. Wann und wofür setzen Sie diese Methode ein?\nDie Entscheidungsmatrix ist ein Verfahren zur Bewertung von Alternativen und zur Entscheidungsfindung. Im Gegensatz zur Nutzwertanalyse werden bei der Entscheidungsmatrix alle Kriterien gleich behandelt.\n\n2. Was erhalten Sie als Ergebnis?\nDie Auswahl der besten Alternative aus verschiedenen Optionen unter Berücksichtigung definierter Kriterien.\n\n3. Was beachten Sie speziell?\nDie Kriterien müssen klar definiert und gewichtet sein, und die Entscheidungsmatrix sollte nicht zu viele Alternativen enthalten.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            text: 'Mit der richtigen Fragestellung gibt der Verkaufende seinem Gegenüber das Gefühl, dass er ihm zuhört. Das erleichtert es ihm, die Richtung des Gesprächs zu beeinflussen und zu bestimmen.\n\nGeschlossene Fragen lassen sich in der Regel kurz und klar beantworten. Offene Fragen dagegen lassen Raum für die Antwort.\n\nEs gibt folgende Fragearten: Informationsfragen, Suggestivfragen, Alternativfragen, Gegenfragen, Kontrollfragen, Motivationsfragen, rhetorische Fragen, Fangfragen.\n\nEchte Einwände sind meistens sachlich begründet. Unechte Einwände sind häufig Vorwände der Kunden.\n\nDie VERA-Formel: V = Verständnis aufbringen, E = Einwand in Frage umwandeln, R = Repetition des Einwands in Frageform, A = Antworten.\n\nDas Angebot besteht aus einem sachlichen und einem werbenden Teil.'
          },
          { type: 'svg', title: 'Fragetechniken im Verkaufsgespräch', svg: '<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="vk-fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f46e5"/><stop offset="100%" stop-color="#3730a3"/></linearGradient></defs><text x="350" y="28" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Fragetechniken im Verkaufsgespräch</text><polygon points="350,50 130,310 570,310" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.5"/><rect x="245" y="70" width="210" height="50" rx="8" fill="#3730a3"/><text x="350" y="91" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Offene Fragen</text><text x="350" y="108" text-anchor="middle" fill="#c7d2fe" font-size="9">W-Fragen: Wer, Was, Wie, Warum</text><rect x="220" y="145" width="260" height="50" rx="8" fill="#4f46e5"/><text x="350" y="166" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Alternativfragen</text><text x="350" y="183" text-anchor="middle" fill="#e0e7ff" font-size="9">A oder B? – Auswahl anbieten</text><rect x="195" y="220" width="310" height="50" rx="8" fill="#6366f1"/><text x="350" y="241" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Geschlossene Fragen</text><text x="350" y="258" text-anchor="middle" fill="#e0e7ff" font-size="9">Ja / Nein – Entscheidung herbeiführen</text><line x1="110" y1="280" x2="110" y2="80" stroke="#4f46e5" stroke-width="2"/><polygon points="110,75 105,85 115,85" fill="#4f46e5"/><text x="100" y="180" text-anchor="end" fill="#4f46e5" font-size="10" font-weight="bold" transform="rotate(-90,100,180)">Informationsgewinn</text><line x1="590" y1="80" x2="590" y2="280" stroke="#3730a3" stroke-width="2"/><polygon points="590,285 585,275 595,275" fill="#3730a3"/><text x="610" y="180" text-anchor="start" fill="#3730a3" font-size="10" font-weight="bold" transform="rotate(90,610,180)">Steuerung</text><text x="350" y="340" text-anchor="middle" fill="#78716c" font-size="10">Von breit (offen) zu eng (geschlossen) – gezielte Gesprächsführung</text></svg>' },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            text: 'Mit der richtigen Fragestellung gibt der Verkaufende seinem Gegenüber das Gefühl, dass er ihm zuhört. Das erleichtert es ihm, die Richtung des Gesprächs zu beeinflussen und zu bestimmen.\n\nGeschlossene Fragen lassen sich in der Regel kurz und klar beantworten. Offene Fragen dagegen lassen Raum für die Antwort.\n\nEs gibt folgende Fragearten: Informationsfragen, Suggestivfragen, Alternativfragen, Gegenfragen, Kontrollfragen, Motivationsfragen, rhetorische Fragen, Fangfragen.\n\nDie Kundschaft hat oft Einwände, mit denen sie erklärt, warum sie nicht auf Anhieb die vorgeschlagene Ware kaufen möchte. Wir können drei Gruppen von Ursachen für Einwände nennen: 1. Die Einwände liegen bei den Kunden, 2. Die Einwände liegen bei den Marktleistungen, 3. Die Einwände liegen beim Verkaufsmitarbeitenden.\n\nEchte Einwände sind meistens sachlich begründet. Unechte Einwände sind häufig Vorwände der Kunden.\n\nAngebote müssen attraktiv gestaltet werden, um die Aufmerksamkeit des Empfängers zu erhalten. Bei der Beurteilung von Angeboten unterscheidet man die formale Prüfung und die Wirtschaftlichkeitsprüfung.\n\nDas Angebot enthält die Informationen, die benötigt werden, um eine Bestellung aufzugeben. Es besteht aus einem sachlichen und einem werbenden Teil.\n\nUm über Angebote zu entscheiden, gibt es verschiedene Methoden zur rationalen Entscheidungsfindung: Nutzwertanalyse, Entscheidungsmatrix, Kosten-Nutzen-Analyse, Entscheidungsbaum, SWOT-Analyse, Pareto-Analyse, Entscheidungsregeln.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Fragetechnik', def: 'Kunst der richtigen Fragestellung im Verkauf. «Wer fragt, der führt, und wer führt, der gewinnt.»'},
              {term: 'Geschlossene Fragen', def: 'Fragen, die mit einer kurzen, spezifischen Antwort beantwortet werden können (Ja/Nein oder bestimmte Antwortoption).'},
              {term: 'Offene Fragen', def: 'Fragen, die Raum für die Antwort lassen. Beginnen mit einem «W» (W-Fragen: wer, wie, wann, was, wo...).'},
              {term: 'Informationsfragen', def: 'Offene Fragen, die gezielt Informationen über Bedürfnisse und Wünsche sammeln.'},
              {term: 'Suggestivfragen', def: 'Fragen, die eine bestimmte Antwort nahelegen.'},
              {term: 'Alternativfragen', def: 'Fragen, die eine Auswahl zwischen zwei oder mehr Optionen bieten.'},
              {term: 'Kontrollfragen', def: 'Fragen, die prüfen, ob das Gesagte richtig verstanden wurde.'},
              {term: 'Echte Einwände', def: 'Sachlich begründete Einwände der Kundschaft gegen ein Produkt oder eine Dienstleistung.'},
              {term: 'Unechte Einwände', def: 'Vorwände der Kunden, die nicht die eigentlichen Gründe für die Ablehnung widerspiegeln.'},
              {term: 'VERA-Formel', def: 'Methode zur Einwandbehandlung: V = Verständnis aufbringen, E = Einwand in Frage umwandeln, R = Repetition in Frageform, A = Antworten.'},
              {term: 'Angebot', def: 'Rechtlich bindender Vorschlag mit sachlichem Teil (Produkt, Preis, Bedingungen) und werbendem Teil (Kaufinteresse stärken).'},
              {term: 'Nutzwertanalyse', def: 'Instrument zur Bewertung von Alternativen anhand quantitativer und qualitativer Kriterien mit Gewichtung.'},
              {term: 'Entscheidungsmatrix', def: 'Verfahren zur Bewertung von Alternativen, bei dem alle Kriterien gleich behandelt werden.'},
              {term: 'Social Selling', def: 'Ganzheitliche Strategie zur Unterstützung des Verkaufsprozesses über digitale Kanäle und sozialen Medien.'}
            ]
          }
        ]
      }
    }
  ],
  glossary: [
    {term: 'Verkaufsplanung', def: 'Systematische Planung aller Verkaufsaktivitäten zur Erreichung der Verkaufsziele.'},
    {term: 'Verkaufsplanungskonzept', def: 'Umfassender gedanklicher Entwurf mit 6 Schritten: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle.'},
    {term: 'Operationalisierung', def: 'Konkretisierung und Definition von Zielen, damit sie messbar und überprüfbar werden.'},
    {term: '6-W-Raster', def: 'Was, Wie viel, Wem, Wann, Wo, Wer – zur Formulierung operationaler Verkaufsziele.'},
    {term: 'Strategische Ziele', def: 'Langfristige Ziele (3–5 Jahre).'},
    {term: 'Operative Ziele', def: 'Mittelfristige Ziele (2–3 Jahre).'},
    {term: 'Taktische Ziele', def: 'Kurzfristige Ziele (bis 1 Jahr).'},
    {term: 'Vorökonomische Ziele', def: 'Qualitative Ziele wie Image, Zufriedenheit, Bekanntheit.'},
    {term: 'Ökonomische Ziele', def: 'Quantitative Ziele wie Umsatz, Absatz, Marktanteil.'},
    {term: 'KAM (Key Account Management)', def: 'Betreuung und Pflege von Schlüsselkunden mit besonderer strategischer Bedeutung.'},
    {term: 'ABC-Analyse', def: 'Einteilung von Kunden nach Umsatzbedeutung: A (wichtigste), B (mittel), C (kleinste).'},
    {term: 'Kontaktstrategie', def: 'Planung von Kontaktqualität, -quantität und -periodizität im Verkauf.'},
    {term: 'Kontaktqualität', def: 'Art, Vorgehen, Inhalt, Dauer und Häufigkeit der Verkaufskontakte.'},
    {term: 'Kontaktquantität', def: 'Anzahl der Kundenbesuche pro Periode.'},
    {term: 'Kontaktperiodizität', def: 'Zeitliche Regelmässigkeit der Kundenbesuche.'},
    {term: 'Platzverkauf', def: 'Der Kunde kommt zum Verkäufer (z.B. Laden, Showroom).'},
    {term: 'Feldverkauf', def: 'Der Verkäufer geht zum Kunden (Aussendienst).'},
    {term: 'Cross-Selling', def: 'Dem Kunden werden ergänzende Leistungen angeboten.'},
    {term: 'Up-Selling', def: 'Dem Kunden werden höherwertige Leistungen verkauft.'},
    {term: 'Primäre Verkaufsplanung', def: 'Vorbereitung und Planung von Umsatz-, Absatzplänen und Einsatzplänen.'},
    {term: 'Einsatzplanung', def: 'Legt fest: welche Kontakte, zu welchem Zeitpunkt, an welchem Ort, zwischen welchen Personen.'},
    {term: 'Kuchenprinzip', def: 'Tourenplanung: AD besucht immer am gleichen Wochentag die gleiche Region.'},
    {term: 'Blattprinzip', def: 'Tourenplanung: Flexible Planung je nach Kundenbedürfnissen.'},
    {term: 'Aufbauorganisation', def: 'Hierarchisches Gerüst des Unternehmens, längerfristig ausgelegt.'},
    {term: 'Ablauforganisation', def: 'Gestaltung der Arbeitsprozesse, mittelfristig ausgelegt.'},
    {term: 'Einliniensystem', def: 'Jeder Mitarbeiter hat genau einen Vorgesetzten.'},
    {term: 'Mehrliniensystem', def: 'Ein Mitarbeiter kann mehrere Vorgesetzte haben.'},
    {term: 'Matrixorganisation', def: 'Kombination von funktionaler und divisionaler Organisation.'},
    {term: 'Anforderungsprofil', def: 'Beschreibt Muss-, Soll- und Kann-Kriterien für eine Stelle.'},
    {term: 'Stellenbeschreibung', def: 'Beschreibt Aufgaben, Kompetenzen und Verantwortung (AKV) einer Position.'},
    {term: 'Employer Branding', def: 'Massnahmen zur Stärkung der Arbeitgebermarke.'},
    {term: 'Vergütungssysteme', def: 'Fix + variabel: Gehalt, Provisionen, Prämien, nichtfinanzielle Anreize.'},
    {term: 'Break-even-Point (BEP)', def: 'Nutzschwelle: Schnittpunkt von Erlös- und Kostenkurve.'},
    {term: 'Nutzschwelle', def: 'Punkt, ab dem weder Gewinn noch Verlust entsteht.'},
    {term: 'Deckungsbeitrag', def: 'Verkaufspreis minus variable Kosten.'},
    {term: 'Verkaufskostenbudget', def: 'Zusammenstellung aller Verkaufskosten (fix + variabel, ID + AD).'},
    {term: 'Aktionsplan', def: 'Detailplanung mit Massnahmen, Kosten, Terminen und Verantwortlichkeiten.'},
    {term: 'Ergebniskontrolle', def: 'Kontrolle ökonomischer Ziele: Markt-, Umsatz-, Preis-, Kostenkontrolle.'},
    {term: 'Ausführungskontrolle', def: 'Kontrolle qualitativer Aspekte: Handlungsweisen der Mitarbeitenden.'},
    {term: 'Mystery Shopping', def: 'Einsatz verdeckter Kunden zur Überprüfung der Servicequalität.'},
    {term: 'Kontrollplan', def: 'Enthält: Zielinhalt, Quantifizierung, Methode, Zeitpunkt, Korrekturmassnahmen, Verantwortlicher.'},
    {term: 'Verkaufsgespräch', def: 'Strukturierter Dialog mit dem Kunden in 6 Phasen.'},
    {term: 'After-Sales-Service', def: 'Serviceorientierte Marketingpolitik nach dem Kauf.'},
    {term: 'VERA-Formel', def: 'V=Verständnis, E=Einwand in Gegenfrage, R=Repetition, A=Antworten.'},
    {term: 'Offene Fragen', def: 'Lassen Raum für ausführliche Antworten.'},
    {term: 'Geschlossene Fragen', def: 'Können kurz und klar beantwortet werden (Ja/Nein).'},
    {term: 'Gebundene Kunden', def: 'Vertraglich oder technologisch an das Unternehmen gebunden.'},
    {term: 'Verbundene Kunden', def: 'Emotional mit dem Unternehmen verbunden, loyal und zufrieden.'},
    {term: 'Channel Sales', def: 'Verkauf über Vertriebspartner.'},
    {term: 'Mobile Sales', def: 'Marketing- und Verkaufsmassnahmen unter Verwendung mobiler Endgeräte.'}
  ]
};
