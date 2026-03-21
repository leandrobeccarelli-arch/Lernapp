window.BOOK_DATA = {
  id: 'verkaufsplanung',
  title: 'Verkaufsplanung für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Verkaufsplanung',
  author: 'Portmann, Meyer',
  year: 2023,
  pages: 231,
  color: '#4f46e5',
  chapters: [
    {
      id: 'ch1',
      num: 'Kapitel 1',
      title: 'Verkaufsplanungskonzept und Verkaufsziele',
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
          reveal: ['Schritt 1 ist die Analyse der Ausgangslage.','Schritt 2 definiert die Ziele (qualitativ und quantitativ).','Schritt 3 entwickelt die Strategien (Weg zum Ziel).','Schritt 4 erarbeitet Massnahmen mit Termin, Kosten, Verantwortung.','Schritt 5 stellt das Budget zusammen (mit Reserve).','Schritt 6 erstellt die Kontrollpläne.']
        },
        {
          id: 2,
          type: 'fill',
          q: 'Ergänzen Sie die Planungszeiträume der verschiedenen Verkaufszielarten.',
          template: 'Strategische Ziele: {0} | Operative Ziele: {1} | Taktische Ziele: {2}',
          blanks: ['Langfristig, 3 bis 5 Jahre','Mittelfristig, 2 bis 3 Jahre','Kurzfristig, bis 1 Jahr'],
          accept: [['Langfristig, 3 bis 5 Jahre','3 bis 5 Jahre','3-5 Jahre','langfristig'],['Mittelfristig, 2 bis 3 Jahre','2 bis 3 Jahre','2-3 Jahre','mittelfristig'],['Kurzfristig, bis 1 Jahr','bis 1 Jahr','kurzfristig']],
          tips: ['Es gibt drei Planungshorizonte: lang-, mittel- und kurzfristig.','Strategische Ziele haben den längsten Zeithorizont.','Taktische Ziele sind die kurzfristigsten.'],
          reveal: ['Strategische Ziele = langfristig, 3 bis 5 Jahre.','Operative Ziele = mittelfristig, 2 bis 3 Jahre.','Taktische Ziele = kurzfristig, bis 1 Jahr.']
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
          reveal: ['Vorökonomisch: Mitarbeiterzufriedenheit, Bekanntheitsgrad, Kontaktqualität, Kundenempfehlungsrate, Image, Servicequalität.','Ökonomisch: Distributionsgrad, Absatz, Kosten, Umsatz.','Vorökonomische Ziele werden durch Umfragen, Tests und Beobachtungen überprüft.']
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
          reveal: ['A) Damit Ziele beurteilt und kontrolliert werden können, müssen sie konkretisiert und definiert werden. Dies wird als Operationalisierung bezeichnet.','B) Was: Zielinhalt, Wie viel: Zielquantifizierung, Wem: Zielsegment, Wann: Zielperiode, Wo: Zielmarkt, Wer: Verantwortlichkeiten.']
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
          reveal: ['Was: Umsatz nach Produktlancierung.','Wie viel: CHF 750\'000.','Wem: Definierte Zielgruppe von KMU.','Wann: Bis zum 31.12.20xx.','Wo: Im Verkaufsgebiet A / Schweiz.','Wer: Verkaufsleiter.']
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
          reveal: ['Ökonomische Ziele haben quantitativen Charakter.','Sie sind online oder mittels Statistiken praktisch jederzeit und kurzfristig auswertbar.','Dies macht Aussage B korrekt.']
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
          reveal: ['Aussage 1: Richtig – exakte Definition.','Aussage 2: Falsch – qualitative Ziele sind schwieriger zu messen.','Aussage 3: Richtig – hierarchische Einordnung.','Aussage 4: Falsch – alle 6 W sind nötig.']
        },
        {
          id: 8,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'Im Verkauf gibt es {0}, strategische (3–5 Jahre), mittelfristige, {1} (2–3 Jahre) und taktische, {2} (bis 1 Jahr) Ziele. Zudem unterscheidet man zwischen ökonomischen ({3}) und vorökonomischen ({4}) Zielen.',
          blanks: ['langfristige','operative','kurzfristige','quantitativen','qualitativen'],
          accept: [['langfristige'],['operative'],['kurzfristige'],['quantitativen','quantitative'],['qualitativen','qualitative']],
          tips: ['Strategisch = langfristig, operativ = mittelfristig, taktisch = kurzfristig.','Ökonomisch = quantitativ, vorökonomisch = qualitativ.','Beide Zielarten müssen quantifizierbar sein.'],
          reveal: ['Langfristige = strategische Ziele (3–5 Jahre).','Operative = mittelfristige Ziele (2–3 Jahre).','Kurzfristige = taktische Ziele (bis 1 Jahr).','Ökonomisch = quantitativ, vorökonomisch = qualitativ.']
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
          reveal: ['Marktführerschaft und Gewinnmaximierung = Unternehmensziele.','Umsatzsteigerung und Kundenzufriedenheit = Marketingziele.','20 Neukunden pro Quartal = konkretes Verkaufsziel.']
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
          { type: 'svg', title: 'Das 6-Schritte Konzeptraster (Abb. 1-2)', svg: '<svg viewBox="0 0 700 100" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><marker id="vk-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><rect x="0" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="50" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Analyse</text><text x="50" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Ausgangslage</text><line x1="100" y1="50" x2="118" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="120" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="170" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Ziele</text><text x="170" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Definition</text><line x1="220" y1="50" x2="238" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="240" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="290" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Strategien</text><text x="290" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Weg zum Ziel</text><line x1="340" y1="50" x2="358" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="360" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="410" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Massnahmen</text><text x="410" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Aktionspl\u00e4ne</text><line x1="460" y1="50" x2="478" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="480" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="530" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Budget</text><text x="530" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Kosten</text><line x1="580" y1="50" x2="598" y2="50" stroke="#4f46e5" stroke-width="2" marker-end="url(#vk-arr)"/><rect x="600" y="25" width="100" height="50" rx="8" fill="#4f46e5"/><text x="650" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">6. Kontrolle</text><text x="650" y="62" text-anchor="middle" fill="#e0e7ff" font-size="8">Kontrollpl\u00e4ne</text></svg>' },
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
            id: 'verkaufskonzept-detail',
            title: 'Verkaufsplanungskonzept im Detail (Abb. 1-3)'
          },
          {
            type: 'concept',
            title: '1.3 Verkaufsziele',
            content: 'Nach der ausführlichen Situationsanalyse werden die Verkaufsziele definiert. Die Verkaufsziele sind verbindliche Kennzahlen oder Aussagen von Zuständen, die mithilfe der Verkaufsstrategien erreicht werden sollen. Sie werden von der Unternehmensvision, den Unternehmens- und den Marketingzielen abgeleitet und legen den Soll-Zustand fest, den der Bereich Verkauf kurz-, mittel- oder langfristig erreichen soll.',
            highlight: 'Verkaufsziele sind verbindliche Kennzahlen, die mithilfe der Verkaufsstrategien erreicht werden sollen.'
          },
          {
            type: 'svg',
            id: 'zielpyramide',
            title: 'Zielpyramide mit Zielhierarchien (Abb. 1-4)'
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
      exercises: [
        {
          id: 10,
          type: 'text',
          q: 'Erklären Sie den Unterschied zwischen «gebundenen Kunden» und «verbundenen Kunden» und nennen Sie je ein Beispiel.',
          keywords: ['vertraglich','technologisch','gebunden','nespresso','drucker','emotional','zufrieden','loyal','verbunden','stammkunden','fans'],
          solution: 'Gebundene Kunden sind vertraglich oder technologisch an das Unternehmen gebunden (z.B. Nespresso, Drucker). Verbundene Kunden sind emotional verbunden, zufrieden mit den Marktleistungen und loyal (z.B. Stammkunden, Fans von Sportvereinen).',
          questions: [
            {q: 'Gebundene Kunden:', keywords: ['vertraglich','technologisch','gebunden','nespresso','drucker'], minKeywords: 2},
            {q: 'Verbundene Kunden:', keywords: ['emotional','zufrieden','loyal','verbunden','stammkunden','fans'], minKeywords: 2}
          ],
          tips: ['Gebunden = durch Vertrag oder Technologie.','Verbunden = durch Zufriedenheit und Loyalität.','Beispiel gebunden: Nespresso-Kapseln, Drucker-Patronen.'],
          reveal: ['Gebundene Kunden sind vertraglich oder technologisch an das Unternehmen gebunden (z.B. Nespresso, Drucker).','Verbundene Kunden sind emotional verbunden, zufrieden mit den Marktleistungen und loyal (z.B. Stammkunden, Fans von Sportvereinen).']
        },
        {
          id: 11,
          type: 'text',
          q: 'Lohnt es sich Ihrer Meinung nach, verlorene Kunden zurückzugewinnen? Begründen Sie Ihre Meinung in mindestens drei Sätzen.',
          keywords: ['kostengünstiger','rückgewinnung','erfahrung','kennen','neukunden','akquisition','individuell','zurückgewinnen'],
          solution: 'Es lohnt sich, denn die Rückgewinnung ist kostengünstiger als die Akquisition von Neukunden. Verlorene Kunden kennen das Unternehmen bereits und haben Erfahrung. Mit individuellen Massnahmen können sie oft zurückgewonnen werden.',
          questions: [
            {q: 'Begründung:', keywords: ['kostengünstiger','rückgewinnung','erfahrung','kennen','neukunden','akquisition','individuell','zurückgewinnen'], minKeywords: 2}
          ],
          tips: ['Vergleichen Sie die Kosten: Rückgewinnung vs. Neukundenakquisition.','Verlorene Kunden kennen das Unternehmen bereits.','Denken Sie auch an den Fall, dass es nicht gelingt.'],
          reveal: ['Es lohnt sich, denn die Rückgewinnung ist kostengünstiger als die Akquisition von Neukunden.','Verlorene Kunden kennen das Unternehmen bereits und haben Erfahrung.','Mit individuellen Massnahmen können sie oft zurückgewonnen werden.','Gelingt dies nicht, kann dem Kunden Wertschätzung entgegengebracht werden.']
        },
        {
          id: 12,
          type: 'text',
          q: 'Worin unterscheiden sich strategische Geschäftsfelder und strategische Geschäftseinheiten? Nennen Sie zwei Unterschiede und geben Sie ein Beispiel für jeden Begriff.',
          keywords: ['markt','aussen','innen','organisatorisch','kunden','angebot','produktion'],
          solution: 'Strategisches Geschäftsfeld: eigenständiger Markt, definiert durch Angebot, Kunden und geografischen Markt. Von aussen, vom Markt her definiert. Strategische Geschäftseinheit: organisatorische Einheit im Unternehmen. Wird von innen, vom Unternehmen her definiert.',
          questions: [
            {q: 'Merkmale und Beispiele:', keywords: ['markt','aussen','innen','organisatorisch','kunden','angebot','produktion'], minKeywords: 3}
          ],
          tips: ['Geschäftsfeld = Marktperspektive (von aussen).','Geschäftseinheit = organisatorische Einheit im Unternehmen (von innen).','Ein SGF wird von aussen durch den Markt definiert.'],
          reveal: ['Strategisches Geschäftsfeld: eigenständiger Markt, definiert durch Angebot, Kunden und geografischen Markt. Von aussen, vom Markt her definiert.','Strategische Geschäftseinheit: organisatorische Einheit im Unternehmen. Wird von innen, vom Unternehmen her definiert.','Beispiel SGF: Büromöbel für Geschäftskunden.','Beispiel SGE: Produktionsabteilung für Büromöbel.']
        },
        {
          id: 13,
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
          reveal: ['Beide: Geografische Kriterien, Informations-/Kaufverhalten.','Nur B2C: Soziodemografische Kriterien, Psychografische Kriterien.','Nur B2B: Organisatorische Kriterien, Ökonomische Kriterien, Entscheidungsbezogene Kriterien, Unternehmenskultur.']
        },
        {
          id: 14,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufsstrategien',
          statements: [
            {s: 'Ein strategisches Geschäftsfeld wird von innen, vom Unternehmen her definiert.', c: false, feedback: 'Ein SGF wird von aussen, vom Markt her definiert.'},
            {s: 'Die Kundenselektion ist eine Subvariable der Verkaufsplanungsstrategie.', c: true, feedback: 'Produktselektion, Kundenselektion und Feldgrösse sind die drei Subvariablen.'},
            {s: 'Bei der ABC-Analyse werden Kunden nach ihrer Umsatzbedeutung eingeteilt.', c: true, feedback: 'A-Kunden = höchster Umsatz, C-Kunden = niedrigster.'},
            {s: 'Verbundene Kunden sind technologisch an das Unternehmen gebunden.', c: false, feedback: 'Verbundene Kunden sind emotional verbunden. Gebundene Kunden sind technologisch/vertraglich gebunden.'}
          ],
          tips: ['SGF = Marktperspektive (aussen).','ABC-Analyse teilt nach Umsatz ein.','Verbunden = emotional, Gebunden = vertraglich/technologisch.'],
          reveal: ['Aussage 1: Falsch – SGF = von aussen.','Aussage 2: Richtig.','Aussage 3: Richtig.','Aussage 4: Falsch – verbunden = emotional.']
        },
        {
          id: 15,
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
          reveal: ['Die drei Subvariablen sind: Produktselektion (Was?), Kundenselektion (Wen?), Feldgrösse (Wo?).','Kontaktvariablen gehören zu Kapitel 3.']
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
      exercises: [
        {
          id: 16,
          type: 'text',
          q: 'Erklären Sie die Begriffe «aktives Telefonmarketing» und «passives Telefonmarketing».',
          keywords: ['verkäufer','ruft','kunden','an','outbound','käufer','kunde','inbound'],
          solution: 'Aktiv (Outbound): Der Verkäufer ruft den Kunden an. Passiv (Inbound): Der Käufer ruft den Verkäufer an.',
          questions: [
            {q: 'Aktives Telefonmarketing:', keywords: ['verkäufer','ruft','kunden','an','outbound'], minKeywords: 2},
            {q: 'Passives Telefonmarketing:', keywords: ['käufer','kunde','ruft','verkäufer','an','inbound'], minKeywords: 2}
          ],
          tips: ['Aktiv = der Verkäufer ist der Initiator.','Passiv = der Kunde ist der Initiator.','Andere Begriffe: Outbound Call und Inbound Call.'],
          reveal: ['Aktiv (Outbound): Der Verkäufer ruft den Kunden an.','Passiv (Inbound): Der Käufer ruft den Verkäufer an.']
        },
        {
          id: 17,
          type: 'text',
          q: 'A) Welche Kundenart wird am intensivsten betreut und was ist der Grund dafür? B) Welche Kunden darf man nicht vernachlässigen?',
          keywords: ['A-Kunden','wichtigste','persönliche','beziehung','aufträge','zufriedenheit','intensiv','kleinere','B-Kunden','C-Kunden','wachsen','potenzial'],
          solution: 'A) A-Kunden werden am intensivsten betreut, da sie den höchsten Umsatz generieren. B) Auch kleinere Kunden (B/C) darf man nicht vernachlässigen, da sie wachsen können.',
          questions: [
            {q: 'A) Intensivste Betreuung:', keywords: ['A-Kunden','wichtigste','persönliche','beziehung','aufträge','zufriedenheit','intensiv'], minKeywords: 2},
            {q: 'B) Nicht vernachlässigen:', keywords: ['kleinere','B-Kunden','C-Kunden','wachsen','potenzial','vernachlässigen'], minKeywords: 2}
          ],
          tips: ['A-Kunden haben den höchsten Umsatz.','Die Betreuung sichert die persönliche Beziehung.','Auch kleinere Kunden können wachsen.'],
          reveal: ['A) A-Kunden werden am intensivsten betreut, da sie den höchsten Umsatz generieren. Die Betreuung sichert die persönliche Beziehung und die Zufriedenheit.','B) Man darf auch kleinere Kunden (B/C) nicht vernachlässigen, denn sie können rasch wachsen und Potenzial entwickeln.']
        },
        {
          id: 18,
          type: 'calc',
          q: 'Berechnen Sie die Gesamtanzahl der zu besuchenden Kunden basierend auf den Angaben der Tabellen (Abb. 3-12 und 3-13).',
          fields: [
            {label: 'A-Kunden Vertriebspartner (35 x 12)', answer: 420, tolerance: 0},
            {label: 'A-Kunden Musikstudios (15 x 3)', answer: 45, tolerance: 0},
            {label: 'B-Kunden Vertriebspartner (20 x 6)', answer: 120, tolerance: 0},
            {label: 'B-Kunden Musikstudios (30 x 4)', answer: 120, tolerance: 0},
            {label: 'B-Kunden Privatkunden (10 x 6)', answer: 60, tolerance: 0},
            {label: 'C-Kunden Vertriebspartner (10 x 4)', answer: 40, tolerance: 0},
            {label: 'C-Kunden Musikstudios (90 x 2)', answer: 180, tolerance: 0},
            {label: 'Total zu besuchende Kunden', answer: 985, tolerance: 0}
          ],
          tips: ['Multiplizieren Sie Anzahl Kunden mit der Periodizität.','Bestehende + Neukunden müssen zusammengezählt werden.','Privatkunden ohne Periodizität (-) werden nicht berechnet.'],
          reveal: ['A: 35x12=420, 15x3=45, 0=0 \u2192 465 Besuche.','B: 20x6=120, 30x4=120, 10x6=60 \u2192 300 Besuche.','C: 10x4=40, 90x2=180, 450x-=0 \u2192 220 Besuche.','Total: 465+300+220 = 985 Besuche.']
        },
        {
          id: 19,
          type: 'calc',
          q: 'Der AD-Mitarbeiter kann pro Arbeitstag 3 Kunden besuchen und ist 150 Tage im Verkauf tätig. Wie viele AD-MA werden benötigt für 985 Besuche?',
          fields: [
            {label: 'Formel: Besuche / (Tage x Besuche/Tag)', answer: 2.19, tolerance: 0.05},
            {label: 'Benötigte AD-MA (aufgerundet)', answer: 3, tolerance: 0}
          ],
          tips: ['Formel: Anzahl Besuche / (verkaufsaktive Tage x Besuche pro Tag).','985 / (150 x 3) = ?','Es muss aufgerundet werden, da kein halber MA möglich ist.'],
          reveal: ['985 / (150 x 3) = 985 / 450 = 2.19 AD-MA.','Ein AD-Mitarbeiter reicht nicht, es muss ein zweiter (bzw. dritter) angestellt werden.','Aufgerundet: 3 AD-MA (oder mindestens 2, wobei die restlichen Besuche anders abgedeckt werden).']
        },
        {
          id: 20,
          type: 'fill',
          q: 'Füllen Sie die fehlenden Begriffe und Erklärungen in der Tabelle aus.',
          template: 'Platzverkauf: {0} | Unpersönlicher Kontakt: Es findet kein {1} Kontakt statt. | Persönlicher Kontakt: Kontakt von {2} | Feldverkauf: Der {3} geht zum Kunden. | Channel Sales: Verkauf durch {4} | Mobile Sales: Marketing- und Verkaufsmassnahmen unter Verwendung {5}',
          blanks: ['Der Kunde kommt zum Verkäufer','zwischenmenschlicher','Mensch zu Mensch','Verkäufer','Vertriebspartner','mobiler Endgeräte'],
          accept: [['Der Kunde kommt zum Verkäufer','Kunde kommt zum Verkäufer'],['zwischenmenschlicher'],['Mensch zu Mensch'],['Verkäufer'],['Vertriebspartner'],['mobiler Endgeräte']],
          tips: ['Platzverkauf = Kunde kommt zum Verkäufer (z.B. im Laden).','Feldverkauf = Aussendienst, Verkäufer besucht Kunden.','Channel Sales = Verkauf über Partner/Vertriebskanäle.'],
          reveal: ['Platzverkauf: Der Kunde kommt zum Verkäufer.','Unpersönlicher Kontakt: kein zwischenmenschlicher Kontakt.','Persönlicher Kontakt: Mensch zu Mensch.','Feldverkauf: Der Verkäufer geht zum Kunden.','Channel Sales: Vertriebspartner.','Mobile Sales: mobile Endgeräte.']
        },
        {
          id: 21,
          type: 'text',
          q: 'A) Nennen Sie einen Unterschied im Angebot zwischen Konsumgütern und Dienstleistungen. B) Wer sind die Anbieter bei Konsumgütern und bei Investitionsgütern?',
          keywords: ['gegenständlich','immateriell','vorhanden','herstellung','verbrauch','handel','hersteller','professionell','verkaufsorganisation'],
          solution: 'A) Konsumgüter sind beim Kauf im Handel gegenständlich vorhanden. DL sind immateriell. B) Konsumgüter: meist Handel, auch Hersteller. Investitionsgüter: Hersteller und seine professionelle Verkaufsorganisation.',
          questions: [
            {q: 'A) Unterschied Konsumgüter vs. Dienstleistungen:', keywords: ['gegenständlich','immateriell','vorhanden','herstellung','verbrauch'], minKeywords: 2},
            {q: 'B) Anbieter:', keywords: ['handel','hersteller','professionell','verkaufsorganisation'], minKeywords: 2}
          ],
          tips: ['Konsumgüter sind im Handel gegenständlich vorhanden.','Dienstleistungen sind immateriell.','Bei Investitionsgütern: Hersteller und professionelle Verkaufsorganisation.'],
          reveal: ['A) Konsumgüter sind beim Kauf im Handel gegenständlich vorhanden. DL sind immateriell, Herstellung und Verbrauch fallen zusammen.','B) Konsumgütern: meist Handel, auch Hersteller. Investitionsgütern: Hersteller und seine professionelle Verkaufsorganisation.']
        },
        {
          id: 22,
          type: 'text',
          q: 'A) Wer sind die Käufer? B) Was ist die Kaufmotivation? C) Wie erfolgt der Kaufprozess bei Konsumgütern und bei Investitionsgütern?',
          keywords: ['private','institutionell','individuelle','unternehmensspezifisch','nicht systematisch','systematisch','emotional','rational','kurze','lange','entscheidungszeit'],
          solution: 'A) Konsumgüter: private Käufer. Investitionsgüter: institutionelle Käufer. B) Konsumgüter: individuelle Bedürfnisse. Investitionsgüter: unternehmensspezifische Bedürfnisse. C) Konsumgüter: nicht systematisch, kurze Entscheidungszeit, oft emotional. Investitionsgüter: systematisch, lange Entscheidungszeit.',
          questions: [
            {q: 'Antworten für A, B und C:', keywords: ['private','institutionell','individuelle','unternehmensspezifisch','nicht systematisch','systematisch','emotional','rational','kurze','lange','entscheidungszeit'], minKeywords: 4}
          ],
          tips: ['Konsumgüter = private Käufer, individuelle Bedürfnisse.','Investitionsgüter = institutionelle Käufer, unternehmensspezifisch.','Kaufprozess: Konsumgüter = emotional, kurz. Investitionsgüter = rational, lang.'],
          reveal: ['A) Konsumgüter: private Käufer. Investitionsgüter: institutionelle Käufer. DL: private und institutionelle.','B) Konsumgüter: individuelle Bedürfnisse. Investitionsgüter: unternehmensspezifische Bedürfnisse.','C) Konsumgüter: nicht systematisch, kurze Entscheidungszeit, oft emotional. Investitionsgüter: systematisch, lange Entscheidungszeit.']
        },
        {
          id: 23,
          type: 'text',
          q: 'A) Wodurch zeichnet sich der Verkaufsprozess von Dienstleistungen speziell aus? B) Worauf muss man beim Verkauf von Dienstleistungen achten?',
          keywords: ['immateriell','nicht demonstriert','unsicherheit','einfühlungsvermögen','überzeugungskraft','vertrauen','persönlichkeit'],
          solution: 'A) DL sind immateriell, die jeweilige Leistung kann nicht 1:1 demonstriert werden, was zu Unsicherheiten führt. B) Man benötigt Einfühlungsvermögen, Überzeugungskraft und eine gewinnende, vertrauenerweckende Persönlichkeit.',
          questions: [
            {q: 'A und B:', keywords: ['immateriell','nicht demonstriert','unsicherheit','einfühlungsvermögen','überzeugungskraft','vertrauen','persönlichkeit'], minKeywords: 3}
          ],
          tips: ['DL können nicht 1:1 demonstriert werden.','Der Kunde hat daher Unsicherheiten.','Der Verkäufer braucht besondere persönliche Eigenschaften.'],
          reveal: ['A) DL sind immateriell, die jeweilige Leistung kann nicht 1:1 demonstriert werden, was zu Unsicherheiten führt.','B) Man benötigt Einfühlungsvermögen, Überzeugungskraft und eine gewinnende, vertrauenerweckende Persönlichkeit.']
        },
        {
          id: 24,
          type: 'text',
          q: 'Erklären Sie den Unterschied zwischen den Begriffen «Cross-Selling» und «Up-Selling».',
          keywords: ['ergänzend','mehrwert','höhere','kosten','leistungen','angeboten','verkauft'],
          solution: 'Cross-Selling: Dem Kunden werden der Marktleistung ergänzende Leistungen angeboten und verkauft. Up-Selling: Dem Kunden werden Marktleistungen mit einem Mehrwert und in der Regel zu höheren Kosten verkauft.',
          questions: [
            {q: 'Cross-Selling vs. Up-Selling:', keywords: ['ergänzend','mehrwert','höhere','kosten','leistungen','angeboten','verkauft'], minKeywords: 3}
          ],
          tips: ['Cross = quer, also ergänzende Produkte.','Up = höher, also hochwertigere Produkte.','Beide Strategien zielen auf Mehrumsatz ab.'],
          reveal: ['Cross-Selling: Dem Kunden werden der Marktleistung ergänzende Leistungen angeboten und verkauft.','Up-Selling: Dem Kunden werden Marktleistungen mit einem Mehrwert und in der Regel zu höheren Kosten verkauft.']
        },
        {
          id: 25,
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
          reveal: ['Kontaktqualität ist die Schlüsselgrösse der Verkaufssubvariablen.','Sie definiert Art, Vorgehen, Inhalt, Dauer und Häufigkeit der Kontakte.','Antwort B ist korrekt.']
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
      exercises: [
        {
          id: 26,
          type: 'text',
          q: 'Worauf sollte man beim Aufteilen des geografischen Markts in Aussendienstgebiete besonders achten?',
          keywords: ['verdienstmöglichkeiten','arbeitslast','vergleichbar','gleich','AD','gebiete'],
          solution: 'Bei der Aufteilung in Verkaufsgebiete sollen die Verdienstmöglichkeiten und die Arbeitslast für alle AD vergleichbar sein.',
          questions: [
            {q: 'Kriterien:', keywords: ['verdienstmöglichkeiten','arbeitslast','vergleichbar','gleich','AD','gebiete'], minKeywords: 2}
          ],
          tips: ['Die Gebiete sollten fair aufgeteilt sein.','Denken Sie an Verdienstmöglichkeiten und Arbeitslast.','Alle AD sollten ähnliche Chancen haben.'],
          reveal: ['Bei der Aufteilung in Verkaufsgebiete sollen die Verdienstmöglichkeiten und die Arbeitslast für alle AD vergleichbar sein.']
        },
        {
          id: 27,
          type: 'text',
          q: 'Was versteht man unter dem Begriff «Kuchenprinzip»?',
          keywords: ['gleich','wochentag','region','immer','besucht','tourenplanung'],
          solution: 'Beim Kuchenprinzip besucht der Aussendienstmitarbeitende immer am gleichen Wochentag die gleiche Region.',
          questions: [
            {q: 'Erklärung:', keywords: ['gleich','wochentag','region','immer','besucht','tourenplanung'], minKeywords: 2}
          ],
          tips: ['Es geht um die Tourenplanung.','Der Name "Kuchen" deutet auf eine feste Aufteilung hin.','Jeder Wochentag hat eine feste Region.'],
          reveal: ['Beim Kuchenprinzip besucht der Aussendienstmitarbeitende immer am gleichen Wochentag die gleiche Region.','Das Blattprinzip kann losgelöst oder in Kombination mit dem Kuchenprinzip angewandt werden.']
        },
        {
          id: 28,
          type: 'text',
          q: 'Henrik Muster hat seine Routenplanung für den kommenden Tag mithilfe eines modernen Computerprogramms geplant. Was könnte seine Planung über den Haufen werfen? Nennen Sie drei Umstände.',
          keywords: ['krank','absagen','unwetter','stau','verkehr','treffen','verschoben','grund'],
          solution: '1. Der Kunde wird krank oder sagt ab. 2. Henrik könnte selbst krank werden. 3. Unwetter oder Verkehrsstau können die Anfahrt verzögern.',
          questions: [
            {q: 'Drei mögliche Störungen:', keywords: ['krank','absagen','unwetter','stau','verkehr','treffen','verschoben','grund'], minKeywords: 2}
          ],
          tips: ['Denken Sie an Kundenabsagen.','Wetter und Verkehr können die Planung stören.','Auch persönliche Gründe sind möglich.'],
          reveal: ['1. Der Kunde wird krank oder sagt aus anderem Grund ab.','2. Henrik könnte selbst krank werden (z.B. Grippe).','3. Unwetter (Schnee, Überschwemmungen) können die Anfahrt verzögern oder verunmöglichen.','Ein Verkehrsstau kann die Zeitplanung durcheinanderbringen.']
        },
        {
          id: 29,
          type: 'text',
          q: 'Nennen Sie drei Kriterien, die bei der Aufteilung von Verkaufsabteilungen wesentlich sind.',
          keywords: ['produkt','kunden','kundenklassen','kundengruppen','geograf','zeitlich','AD-Gebiete','strategisch','schlüssel'],
          solution: '1. Produktgruppen und/oder Produkte. 2. Kundenklassen, Kundengruppen oder einzelne Kunden. 3. Geografische Gebiete / AD-Gebiete.',
          questions: [
            {q: 'Drei Kriterien:', keywords: ['produkt','kunden','kundenklassen','kundengruppen','geograf','zeitlich','AD-Gebiete','strategisch','schlüssel'], minKeywords: 2}
          ],
          tips: ['Denken Sie an Produktgruppen, Kundentypen und Geografie.','Auch zeitliche Kriterien sind möglich.','Schlüsselkunden können ein Kriterium sein.'],
          reveal: ['1. Produktgruppen und/oder Produkte.','2. Kundenklassen, Kundengruppen oder einzelne Kunden (strategische/Schlüsselkunden).','3. Geografische Gebiete / AD-Gebiete.','4. Zeitliche Kriterien (Monat, Quartal, Halbjahr, Jahr).']
        },
        {
          id: 30,
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
          reveal: ['Alle vier gehören zur Einsatzplanung: Gliederungsplanung, Zeitplanung, Routen-/Tourenplanung, Verkaufsstufenplan.']
        },
        {
          id: 31,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'In den primären Verkaufsplänen werden {0} vorbereitet und geplant. Das sind die {1}- und Absatzpläne und die {2}. In der {3} werden die Bereichsziele auf tiefere hierarchische Ebenen delegiert.',
          blanks: ['Ressourcen','Umsatz','Einsatzpläne','Umsatzplanung'],
          accept: [['Ressourcen'],['Umsatz'],['Einsatzpläne'],['Umsatzplanung']],
          tips: ['Primäre VP bereitet Ressourcen vor.','Zwei Planarten: Umsatz-/Absatzpläne und Einsatzpläne.','Die Umsatzplanung delegiert Bereichsziele.'],
          reveal: ['In den primären Verkaufsplänen werden Ressourcen vorbereitet.','Das sind Umsatz-/Absatzpläne und Einsatzpläne.','In der Umsatzplanung werden Bereichsziele delegiert.']
        },
        {
          id: 32,
          type: 'tf',
          q: 'Richtig oder Falsch: Primäre Verkaufsplanung',
          statements: [
            {s: 'Die Einsatzplanung bestimmt unter anderem, welche Verkaufskontakte zu welchem Zeitpunkt stattfinden sollen.', c: true, feedback: 'Die Einsatzplanung bestimmt: welche Kontakte, wann, wo, zwischen wem.'},
            {s: 'Das Blattprinzip bedeutet, dass der AD immer am gleichen Wochentag die gleiche Region besucht.', c: false, feedback: 'Das ist das Kuchenprinzip. Das Blattprinzip ist flexibler.'},
            {s: 'Die Gliederungsplanung kann nach Produktgruppen, Kundengruppen oder Gebieten erfolgen.', c: true, feedback: 'Dies sind typische Gliederungskriterien.'}
          ],
          tips: ['Einsatzplanung = wer, wann, wo, was.','Kuchenprinzip = feste Wochentage pro Region.','Gliederung kann nach verschiedenen Kriterien erfolgen.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch – Blattprinzip ist flexibel, Kuchenprinzip ist fix.','Aussage 3: Richtig.']
        },
        {
          id: 33,
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
          reveal: ['Die primäre Verkaufsplanung umfasst Umsatz-/Absatzpläne und Einsatzpläne.','Verkaufsorganisation, Personal und Hilfsmittel gehören zur sekundären VP.']
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
            id: 'verkaufsplaene',
            title: 'Verkaufspläne (Ressourcenplanung) – Abb. 4-1'
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
      exercises: [
        {
          id: 34,
          type: 'text',
          q: 'Skizzieren Sie eine einfache Stablinienorganisation und beschreiben Sie die Aufgabe einer funktionalen Stabsstelle.',
          keywords: ['spezialisiert','beratung','unterstützung','weisungsbefugnis','funktional','aufgabe'],
          solution: 'Funktionale Stabsstellen sind spezialisierte Stellen (z.B. Qualitätssicherung, Rechtsabteilung). Je nach Aufgabe kann ihnen funktional Weisungsbefugnis übertragen werden.',
          questions: [
            {q: 'Aufgabe der funktionalen Stabsstelle:', keywords: ['spezialisiert','beratung','unterstützung','weisungsbefugnis','funktional','aufgabe'], minKeywords: 2}
          ],
          tips: ['Stabsstellen sind spezialisierte Stellen.','Sie haben beratende Funktion.','Je nach Aufgabe kann ihnen funktionale Weisungsbefugnis übertragen werden.'],
          reveal: ['Funktionale Stabsstellen sind spezialisierte Stellen (z.B. Qualitätssicherung, Rechtsabteilung).','Je nach Aufgabe kann ihnen funktional Weisungsbefugnis übertragen werden.','Die Linienorganisation bleibt dabei als Grundstruktur bestehen.']
        },
        {
          id: 35,
          type: 'text',
          q: 'Skizzieren Sie eine Matrixorganisation und zählen Sie je drei Vor- und Nachteile dieser Organisationsform auf.',
          keywords: ['mehrdimensional','koordination','kurze','kommunikation','flexibilität','konflikt','mehrfachunterstellung','einheit','leitung','kompromisse'],
          solution: 'Vorteile: Mehrdimensionale Koordination, kurze Kommunikationswege, hohe Flexibilität. Nachteile: Höheres Konfliktpotenzial durch Mehrfachunterstellung, keine Einheit der Leitung, Gefahr vieler schlechter Kompromisse.',
          questions: [
            {q: 'Vorteile (3):', keywords: ['mehrdimensional','koordination','kurze','kommunikation','flexibilität'], minKeywords: 2},
            {q: 'Nachteile (3):', keywords: ['konflikt','mehrfachunterstellung','einheit','leitung','kompromisse','keine'], minKeywords: 2}
          ],
          tips: ['Vorteile: kurze Wege, Flexibilität.','Nachteile: Konfliktpotenzial durch doppelte Unterstellung.','Denken Sie an die Einheit der Leitung.'],
          reveal: ['Vorteile: Mehrdimensionale Koordination, kurze Kommunikationswege, hohe Flexibilität.','Nachteile: Höheres Konfliktpotenzial durch Mehrfachunterstellung, keine Einheit der Leitung, Gefahr vieler schlechter Kompromisse.']
        },
        {
          id: 36,
          type: 'text',
          q: 'Skizzieren Sie das Raster für ein Anforderungsprofil.',
          keywords: ['fachlich','charakterlich','persönlich','muss','soll','kann','anforderungen','kriterium'],
          solution: 'Zeilen/Kriterien: Fachliche Anforderungen, Charakterliche Anforderungen, Persönliche Anforderungen. Spalten: Muss (zwingend), Soll (wünschenswert), Kann (Vorteil).',
          questions: [
            {q: 'Welche Kriterien und Spalten enthält ein Anforderungsprofil?', keywords: ['fachlich','charakterlich','persönlich','muss','soll','kann','anforderungen','kriterium'], minKeywords: 3}
          ],
          tips: ['Das Raster hat 3 Kriterienbereiche.','Die Spalten unterscheiden Muss, Soll und Kann.','Fachliche, charakterliche und persönliche Anforderungen.'],
          reveal: ['Zeilen/Kriterien: Fachliche Anforderungen, Charakterliche Anforderungen, Persönliche Anforderungen.','Spalten: Muss (zwingend), Soll (wünschenswert), Kann (Vorteil).']
        },
        {
          id: 37,
          type: 'text',
          q: 'Wie unterscheiden sich Muss-Kriterien von Soll-Kriterien in einem Anforderungsprofil?',
          keywords: ['zwingend','erfüllt','ausscheidet','kandidat','vorteil','müssen','nicht zwingend'],
          solution: 'Muss-Kriterien müssen zwingend erfüllt sein. Ist dies nicht der Fall, scheidet der Kandidat aus. Soll-Kriterien können erfüllt sein und sind ein Vorteil, müssen aber nicht zwingend erfüllt sein.',
          questions: [
            {q: 'Unterschied:', keywords: ['zwingend','erfüllt','ausscheidet','kandidat','vorteil','müssen','nicht zwingend'], minKeywords: 2}
          ],
          tips: ['Muss = zwingend erforderlich.','Soll = wünschenswert, aber nicht zwingend.','Fehlende Muss-Kriterien = Ausschluss.'],
          reveal: ['Muss-Kriterien müssen zwingend erfüllt sein. Ist dies nicht der Fall, scheidet der Kandidat aus.','Soll-Kriterien können erfüllt sein und sind in der Regel ein Vorteil, sie müssen aber nicht zwingend erfüllt sein.']
        },
        {
          id: 38,
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
          reveal: ['Aufbauorganisation: Organigramm, Stellenbeschreibung, Anforderungsprofil.','Ablauforganisation: Tourenplan, Verkaufsstufenplan, Aktionspläne, Telefonskripte.']
        },
        {
          id: 39,
          type: 'text',
          q: 'Veränderungsprozesse: Was sind mögliche Entwicklungen, die zu einer Veränderung führen? Zählen Sie 5 davon auf.',
          keywords: ['gesättigt','transparent','digitalisierung','wettbewerb','konkurrenz','internationalisierung','kundschaft','loyalität','vernetzung','technologisch','ressourcen','rationalisierung','fachkräfte'],
          solution: 'Gesättigte und transparente Märkte, Digitalisierung, intensiverer Wettbewerb, Beschleunigung der Internationalisierung, anspruchsvollere Kundschaften mit schwindender Loyalität.',
          questions: [
            {q: '5 Entwicklungen:', keywords: ['gesättigt','transparent','digitalisierung','wettbewerb','konkurrenz','internationalisierung','kundschaft','loyalität','vernetzung','technologisch','ressourcen','rationalisierung','fachkräfte'], minKeywords: 3}
          ],
          tips: ['Denken Sie an Marktveränderungen.','Auch technologische und gesellschaftliche Veränderungen.','Wettbewerb und Kundschaft verändern sich.'],
          reveal: ['Mögliche Entwicklungen: Gesättigte und transparente Märkte, Digitalisierung, intensiverer Wettbewerb und verschärfter Konkurrenzdruck, Beschleunigung der Internationalisierung, anspruchsvollere Kundschaften mit schwindender Loyalität, steigende Vernetzung, rasanter technologischer Wandel, Knappheit der Ressourcen, Rationalisierung und Spezialisierung, verstärkter Wettbewerb um Fachkräfte.']
        },
        {
          id: 40,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zur Organisationsstruktur.',
          template: 'Bei der organisatorischen Strukturierung wird zwischen {0} und {1} unterschieden. Die Aufbauorganisation ist {2} ausgelegt, die Ablauforganisation eher {3} ausgelegt.',
          blanks: ['Aufbauorganisation','Ablauforganisation','längerfristig','mittelfristig'],
          accept: [['Aufbauorganisation','Aufbau'],['Ablauforganisation','Ablauf'],['längerfristig'],['mittelfristig']],
          tips: ['Es gibt zwei Organisationsbereiche.','Aufbau = hierarchisches Gerüst.','Ablauf = Prozesse und Arbeitsschritte.'],
          reveal: ['Aufbauorganisation und Ablauforganisation.','Aufbau = längerfristig, Ablauf = mittelfristig.']
        },
        {
          id: 41,
          type: 'tf',
          q: 'Richtig oder Falsch: Organisation',
          statements: [
            {s: 'Die Aufbauorganisation definiert den organisatorischen Aufbau und ist längerfristig ausgelegt.', c: true, feedback: 'Die Aufbauorganisation bildet das hierarchische Gerüst.'},
            {s: 'Im Einliniensystem kann ein Mitarbeiter mehrere Vorgesetzte haben.', c: false, feedback: 'Im Einliniensystem hat jeder MA genau einen Vorgesetzten. Mehrere = Mehrliniensystem.'},
            {s: 'Eine Stelle ist eine organisatorische Einheit mit bestimmten Aufgaben, definierten Kompetenzen und entsprechender Verantwortung.', c: true, feedback: 'Dies ist die Definition einer Stelle (AKV-Prinzip).'},
            {s: 'Die Holokratie ist eine sehr hierarchische Organisationsform.', c: false, feedback: 'Holokratie ist eine alternative, flache Organisationsform ohne klassische Hierarchie.'}
          ],
          tips: ['Einliniensystem = ein Vorgesetzter.','AKV = Aufgaben, Kompetenzen, Verantwortung.','Holokratie = flache, selbstorganisierende Struktur.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch – Einliniensystem = ein Vorgesetzter.','Aussage 3: Richtig – AKV-Prinzip.','Aussage 4: Falsch – Holokratie = flach.']
        },
        {
          id: 42,
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
          reveal: ['Die Matrixorganisation zeichnet sich durch Mehrfachunterstellung aus.','Mitarbeitende haben sowohl einen funktionalen als auch einen divisionalen Vorgesetzten.']
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
          { type: 'svg', title: 'Organisationsformen: Einlinien-, Mehrliniensystem und Matrix', svg: '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="120" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Einliniensystem</text><rect x="80" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="120" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="100" y1="58" x2="70" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="140" y1="58" x2="170" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="30" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="70" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Abt. A</text><rect x="160" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="200" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Abt. B</text><line x1="50" y1="106" x2="50" y2="120" stroke="#4f46e5" stroke-width="1"/><line x1="90" y1="106" x2="90" y2="120" stroke="#4f46e5" stroke-width="1"/><rect x="30" y="120" width="30" height="20" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><rect x="70" y="120" width="30" height="20" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><text x="120" y="165" text-anchor="middle" fill="#78716c" font-size="9">Ein Vorgesetzter pro MA</text><text x="350" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Mehrliniensystem</text><rect x="310" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="350" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="330" y1="58" x2="300" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="370" y1="58" x2="400" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="260" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="300" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Fach A</text><rect x="390" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="430" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Fach B</text><rect x="320" y="125" width="60" height="22" rx="3" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1"/><text x="350" y="140" text-anchor="middle" fill="#3730a3" font-size="8">MA</text><line x1="300" y1="106" x2="340" y2="125" stroke="#4f46e5" stroke-width="1"/><line x1="430" y1="106" x2="360" y2="125" stroke="#4f46e5" stroke-width="1"/><text x="350" y="165" text-anchor="middle" fill="#78716c" font-size="9">Mehrere Vorgesetzte</text><text x="580" y="20" text-anchor="middle" fill="#3730a3" font-size="12" font-weight="bold">Matrixorganisation</text><rect x="540" y="30" width="80" height="28" rx="5" fill="#4f46e5"/><text x="580" y="49" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">GL</text><line x1="560" y1="58" x2="530" y2="78" stroke="#4f46e5" stroke-width="1.5"/><line x1="600" y1="58" x2="630" y2="78" stroke="#4f46e5" stroke-width="1.5"/><rect x="490" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="530" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Funktion</text><rect x="590" y="78" width="80" height="28" rx="5" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/><text x="630" y="97" text-anchor="middle" fill="#3730a3" font-size="9">Funktion</text><rect x="490" y="115" width="180" height="22" rx="3" fill="#4f46e5" opacity="0.8"/><text x="580" y="130" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">Projekt / Produkt (quer)</text><line x1="530" y1="106" x2="530" y2="115" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/><line x1="630" y1="106" x2="630" y2="115" stroke="#4f46e5" stroke-width="1" stroke-dasharray="3,2"/><text x="580" y="160" text-anchor="middle" fill="#78716c" font-size="9">Doppelte Unterstellung</text><rect x="10" y="190" width="680" height="60" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="1"/><text x="350" y="212" text-anchor="middle" fill="#3730a3" font-size="11" font-weight="bold">Kontroll- und Leitungsspanne: 5\u20137 Direktunterstellte pro Chef</text><text x="350" y="235" text-anchor="middle" fill="#78716c" font-size="10">Einlinie = Klarheit | Mehrlinie = Spezialisierung | Matrix = Flexibilit\u00e4t</text></svg>' },
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
      exercises: [
        {
          id: 43,
          type: 'text',
          q: 'Wann kann es Sinn machen, die Suche und die Rekrutierung von Mitarbeitenden extern durchführen zu lassen? Geben Sie zwei Fälle an.',
          keywords: ['keine','personalabteilung','überlastet','spezialist','führungskräfte','extern','vorhanden'],
          solution: 'Eine externe Rekrutierung macht Sinn, wenn: keine eigene Personalabteilung vorhanden ist, die eigene Personalabteilung überlastet ist, Spezialistinnen und Führungskräfte gesucht werden.',
          questions: [
            {q: 'Zwei Fälle:', keywords: ['keine','personalabteilung','überlastet','spezialist','führungskräfte','extern','vorhanden'], minKeywords: 2}
          ],
          tips: ['Denken Sie an die eigene Personalabteilung.','Spezialfälle erfordern externe Hilfe.','Bei Kapazitätsproblemen.'],
          reveal: ['Eine externe Rekrutierung macht Sinn, wenn: keine eigene Personalabteilung vorhanden ist, die eigene Personalabteilung überlastet ist, Spezialistinnen und Führungskräfte gesucht werden.']
        },
        {
          id: 44,
          type: 'text',
          q: 'Was sind die Ziele einer Verkaufsschulung?',
          keywords: ['wissen','fähigkeiten','verkaufen','erleichtern','umsatz','absatz','zufriedene','motivierte','mitarbeitende','kunden'],
          solution: 'In einer Verkaufsschulung sollen den Teilnehmenden Wissen und Fähigkeiten vermittelt werden, die ihnen das Verkaufen erleichtern. Im Zentrum stehen nicht nur Umsatz, Absatz und Gewinn, sondern zufriedene und motivierte Mitarbeitende und vor allem Kunden.',
          questions: [
            {q: 'Ziele:', keywords: ['wissen','fähigkeiten','verkaufen','erleichtern','umsatz','absatz','zufriedene','motivierte','mitarbeitende','kunden'], minKeywords: 3}
          ],
          tips: ['Schulungen vermitteln Wissen und Fähigkeiten.','Im Zentrum stehen nicht nur Umsatz und Absatz.','Auch Mitarbeiter- und Kundenzufriedenheit.'],
          reveal: ['In einer Verkaufsschulung sollen den Teilnehmenden Wissen und Fähigkeiten vermittelt werden, die ihnen das Verkaufen erleichtern.','Im Zentrum stehen nicht nur Umsatz, Absatz und Gewinn, sondern zufriedene und motivierte Mitarbeitende und vor allem Kunden.']
        },
        {
          id: 45,
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
          reveal: ['Direkt finanziell: Spesenvergütung, Verkaufsprämie, Beteiligungszulage.','Indirekt finanziell: Ausbildungszuschuss, Geschäftswagen.','Nichtfinanziell: Auszeichnung, Zusätzliche Verantwortung.']
        },
        {
          id: 46,
          type: 'text',
          q: 'Geben Sie je 2 Beispiele für zu beachtende Punkte in den sechs Phasen des Ausbildungskonzepts.',
          keywords: ['ist-situation','ausgangslage','zielsetzung','strategie','vorgehen','massnahmen','budget','kontrollen','lernziele'],
          solution: '1. Ist-Situation/Ausgangslage. 2. Zielsetzungen/Lernziele. 3. Strategie/Vorgehen. 4. Massnahmen. 5. Budget. 6. Kontrollen.',
          questions: [
            {q: 'Nennen Sie die 6 Phasen und je ein Beispiel:', keywords: ['ist-situation','ausgangslage','zielsetzung','strategie','vorgehen','massnahmen','budget','kontrollen','lernziele'], minKeywords: 4}
          ],
          tips: ['Das Ausbildungskonzept hat 6 Schritte.','Es folgt dem gleichen Raster wie das Konzeptraster.','Von der Analyse bis zur Kontrolle.'],
          reveal: ['1. Ist-Situation/Ausgangslage: Eigenes Unternehmen, Marktlage, Ausbildungsstand, Budget.','2. Zielsetzungen: Lernziele (Richt-, Grob- und Feinziele).','3. Strategie/Vorgehen: Zielgruppen, Rahmen, Zeitpunkt, Lehrmethoden.','4. Massnahmen: Termin setzen, Lokalität buchen, Programm festlegen.','5. Budget: Lokalität, Unterkunft, Hilfsmittel, Referenten.','6. Kontrollen: Lernkontrollen, Prüfungen, Fragebogen.']
        },
        {
          id: 47,
          type: 'text',
          q: 'Lyreco ist Distributor für Kaffeemaschinen von Nespresso. Aussendienstmitarbeitende besuchen Unternehmen. Was für ein Lohnsystem schlagen Sie vor?',
          keywords: ['fix','variabel','provision','lohnbestandteil','60','40','prämie','wettbewerb','maschinen'],
          solution: 'Vorschlag: ca. 60% fixer Lohnbestandteil und 40% variable Lohnbestandteile in Form von Provisionen für verkaufte Maschinen. Zusätzlich: Wettbewerbe für das ganze Team.',
          questions: [
            {q: 'Lohnsystem-Vorschlag:', keywords: ['fix','variabel','provision','lohnbestandteil','60','40','prämie','wettbewerb','maschinen'], minKeywords: 2}
          ],
          tips: ['Eine Kombination aus Fix und Variabel ist üblich.','Provisionen motivieren zum Verkaufen.','Wettbewerbe können zusätzlich motivieren.'],
          reveal: ['Vorschlag: ca. 60% fixer Lohnbestandteil und 40% variable Lohnbestandteile in Form von Provisionen für verkaufte Maschinen.','Zusätzlich: Wettbewerbe für das ganze Team, wobei die Chancen für Innen- und Aussendienst gleich sein sollen.','Die Verkündung der Gewinner erfolgt in feierlichem Rahmen.']
        },
        {
          id: 48,
          type: 'text',
          q: 'Welche drei grundsätzlichen Möglichkeiten zur Motivation der Mitarbeitenden gibt es? Nennen und erklären Sie die drei Möglichkeiten.',
          keywords: ['direkt finanziell','indirekt finanziell','nichtfinanziell','monetär','geld','leistung','anreiz','immateriell'],
          solution: '1. Direkt finanzielle Anreize: monetäre Leistungen. 2. Indirekt finanzielle Anreize: Leistungen, die Geldwerten entsprechen. 3. Nichtfinanzielle Anreize: ohne monetären Wert, aber nachhaltig motivierend.',
          questions: [
            {q: 'Drei Möglichkeiten:', keywords: ['direkt finanziell','indirekt finanziell','nichtfinanziell','monetär','geld','leistung','anreiz','immateriell'], minKeywords: 3}
          ],
          tips: ['Die drei Anreizarten unterscheiden sich nach dem monetären Wert.','Direkt finanziell = Geld ausbezahlt.','Nichtfinanziell = kein monetärer Wert, aber trotzdem motivierend.'],
          reveal: ['1. Direkt finanzielle (materielle) Anreize: monetäre Leistungen, in Geld ausgedrückt.','2. Indirekt finanzielle (indirekt materielle) Anreize: Leistungen, die Geldwerten entsprechen, aber nicht direkt finanziell ausbezahlt werden.','3. Nichtfinanzielle (immaterielle) Anreize: Leistungen oder Anreize ohne monetären Wert; sie wirken trotzdem nachhaltig motivierend.']
        },
        {
          id: 49,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zu Verkaufshilfsmitteln.',
          template: 'Es gibt {0} und {1} Verkaufshilfsmittel. Zu den technischen gehören {2}-, Informations- und Transporthilfen. Persönliche Hilfsmittel sind {3}.',
          blanks: ['technische','persönliche','Präsentations','immateriell'],
          accept: [['technische'],['persönliche'],['Präsentations'],['immateriell']],
          tips: ['Technische Hilfsmittel sind physisch/digital.','Persönliche Hilfsmittel sind immateriell.','Präsentationshilfen helfen bei der Produktdarstellung.'],
          reveal: ['Technische und persönliche Verkaufshilfsmittel.','Technisch: Präsentations-, Informations- und Transporthilfen.','Persönliche Hilfsmittel sind immateriell (z.B. Fachwissen, Auftreten).']
        },
        {
          id: 50,
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
          reveal: ['Buchhalter/in gehört nicht zu den Verkaufsberufen.','Zu den Verkaufsberufen gehören u.a.: VL, KAM, Verkaufsfachleute, AD-Mitarbeitende, Merchandiser, Sachbearbeitende, Telefonverkäufer, Verkaufsagenten, Influencer.']
        },
        {
          id: 51,
          type: 'tf',
          q: 'Employer Branding (RF)',
          statements: [
            {s: 'Employer Branding beschreibt Massnahmen, die ein Unternehmen ergreifen kann, um die eigene Marke zu stärken und sich als attraktiver Arbeitgeber darzustellen.', c: true, feedback: 'Exakte Definition von Employer Branding.'},
            {s: 'Das Ausbildungskonzept gliedert sich in 4 Schritte.', c: false, feedback: 'Es sind 6 Schritte: Analyse, Ziele, Strategie, Massnahmen, Budget, Kontrolle.'},
            {s: 'Verkaufshilfsmittel erleichtern und unterstützen die Verkaufskontakte.', c: true, feedback: 'Sie werden in technische und persönliche Hilfsmittel unterteilt.'}
          ],
          tips: ['Employer Branding = Arbeitgebermarke stärken.','Ausbildungskonzept folgt dem 6-Schritte-Raster.','Hilfsmittel unterstützen den Verkaufskontakt.'],
          reveal: ['Aussage 1: Richtig – Definition EB.','Aussage 2: Falsch – 6 Schritte, nicht 4.','Aussage 3: Richtig.']
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
            type: 'concept',
            title: '6.2 Einführung von neuen Mitarbeitenden',
            text: 'Mit der Unterzeichnung des Arbeitsvertrags ist der Vorgang der Personalsuche und -beschaffung noch nicht abgeschlossen. Die neuen Mitarbeitenden müssen rasch eingearbeitet und an das Unternehmen gebunden werden. Loyalität dem Unternehmen gegenüber ist das höchste Ziel.\n\nEine Bezugsperson (Gotte/Götti) soll bestimmt werden, die dem neuen Mitarbeitenden dabei hilft, sich fachlich und sozial in den Betrieb zu integrieren. Die Gotte oder der Götti ist auch seine Ansprechperson bei fachlichen Schwierigkeiten oder zwischenmenschlichen Problemen.'
          },
          { type: 'svg', title: 'Maslowsche Bed\u00fcrfnispyramide', svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="250" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Maslowsche Bed\u00fcrfnispyramide</text><polygon points="250,45 50,310 450,310" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><rect x="190" y="55" width="120" height="35" rx="6" fill="#4f46e5"/><text x="250" y="70" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Selbst-</text><text x="250" y="82" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">verwirklichung</text><rect x="155" y="100" width="190" height="35" rx="6" fill="#6366f1"/><text x="250" y="115" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Soziale Anerkennung</text><text x="250" y="128" text-anchor="middle" fill="#e0e7ff" font-size="8">Status, Karriere, Macht</text><rect x="120" y="145" width="260" height="35" rx="6" fill="#818cf8"/><text x="250" y="160" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Soziale Bed\u00fcrfnisse</text><text x="250" y="173" text-anchor="middle" fill="#e0e7ff" font-size="8">Freundschaft, Partnerschaft, Liebe</text><rect x="85" y="190" width="330" height="35" rx="6" fill="#a5b4fc"/><text x="250" y="205" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">2. Sicherheitsbed\u00fcrfnisse</text><text x="250" y="218" text-anchor="middle" fill="#3730a3" font-size="8">Wohnung, Arbeitsplatz, Gesundheit</text><rect x="55" y="235" width="390" height="35" rx="6" fill="#c7d2fe"/><text x="250" y="250" text-anchor="middle" fill="#312e81" font-size="9" font-weight="bold">1. K\u00f6rperliche Grundbed\u00fcrfnisse</text><text x="250" y="263" text-anchor="middle" fill="#3730a3" font-size="8">Atmung, W\u00e4rme, Trinken, Essen, Schlaf</text><text x="250" y="295" text-anchor="middle" fill="#78716c" font-size="10">H\u00f6here Bed\u00fcrfnisse werden erst relevant, wenn tiefere erf\u00fcllt sind</text><text x="480" y="80" text-anchor="end" fill="#4f46e5" font-size="9">Wachstums-</text><text x="480" y="93" text-anchor="end" fill="#4f46e5" font-size="9">bed\u00fcrfnisse</text><text x="480" y="220" text-anchor="end" fill="#818cf8" font-size="9">Defizit-</text><text x="480" y="233" text-anchor="end" fill="#818cf8" font-size="9">bed\u00fcrfnisse</text></svg>' },
          {
            type: 'concept',
            title: '6.3 Motivation im Verkauf',
            text: 'Die Motivationsplanung legt fest, wie die Verkaufsmitarbeitenden dazu motiviert werden können, ihre Aufgaben zu erfüllen. Es gibt drei Arten von Systemen für die Entlohnung:\n- 100% fixe Entlohnung\n- 100% variable Entlohnung\n- Kombination der fixen und der variablen Entlohnung\n\nFür die prinzipielle Darstellung von Bedürfnissen wird häufig das Modell von Maslow verwendet (Maslowsche Bedürfnispyramide):\n1. Körperliche Grundbedürfnisse (Atmung, Wärme, Trinken, Essen, Schlaf)\n2. Sicherheit (Wohnung, fester Arbeitsplatz, Gesetze, Versicherungen, Gesundheit)\n3. Soziale Beziehungen (Freundeskreis, Partnerschaft, Liebe, Kommunikation)\n4. Soziale Anerkennung (Status, Wohlstand, Gold, Macht, Karriere)\n5. Selbstverwirklichung (Individualität, Talententfaltung, Kunst, Philosophie)\n\nEs ist wichtig, dass externe Motivation allein möglicherweise nicht ausreicht. Interne Motivationsfaktoren wie intrinsische Motivation, die aus persönlichem Interesse an der Arbeit resultiert, spielen ebenfalls eine entscheidende Rolle bei der Entwicklung von Loyalität.'
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
      exercises: [
        {
          id: 52,
          type: 'text',
          q: 'Stellen Sie den BEP grafisch dar bzw. beschreiben Sie die Grafik.',
          keywords: ['schnittpunkt','erlös','kosten','nutzschwelle','gewinn','verlust','fixkosten','variable','umsatz'],
          solution: 'Der BEP ist der Schnittpunkt von Erlös- und Kostenkurve. Unterhalb: Verlust. Oberhalb: Gewinn. Bei der Nutzschwelle entsteht weder Gewinn noch Verlust.',
          questions: [
            {q: 'Beschreibung des BEP:', keywords: ['schnittpunkt','erlös','kosten','nutzschwelle','gewinn','verlust','fixkosten','variable','umsatz'], minKeywords: 3}
          ],
          tips: ['Der BEP ist der Schnittpunkt zweier Kurven.','Unterhalb = Verlust, oberhalb = Gewinn.','Die Fixkosten bilden die Basis.'],
          reveal: ['Der BEP (Break-even-Point) ist der Schnittpunkt von Erlös- und Kostenkurve.','Unterhalb: Verlust. Oberhalb: Gewinn.','Bei der Nutzschwelle entsteht weder Gewinn noch Verlust, ab deren Überschreiten beginnt die Gewinnzone.']
        },
        {
          id: 53,
          type: 'calc',
          q: 'Berechnen Sie die mengenmässige und die wertmässige Nutzschwelle. Verkaufspreis: CHF 140/Stück, variable Kosten: CHF 80/Stück, Fixkosten: CHF 800\'000.',
          fields: [
            {label: 'Deckungsbeitrag pro Stück (CHF)', answer: 60, tolerance: 0},
            {label: 'Mengenmässige NS (Stück)', answer: 13333, tolerance: 1},
            {label: 'Wertmässige NS (CHF)', answer: 1866620, tolerance: 200}
          ],
          tips: ['DB = Preis \u2212 variable Kosten.','Mengenmässige NS = Fixkosten / DB pro Stück.','Wertmässige NS = Menge x Preis.'],
          reveal: ['DB = 140 \u2212 80 = CHF 60/Stück.','Mengenmässige NS = 800\'000 / 60 = 13\'333 Stück.','Wertmässige NS = 13\'333 x 140 = CHF 1\'866\'620.']
        },
        {
          id: 54,
          type: 'text',
          q: 'A) Skizzieren Sie die Struktur des Aktionsplans. B) Wann macht es Sinn, Termine und Verantwortlichkeiten ins Verkaufskostenbudget zu integrieren?',
          keywords: ['aktion','massnahme','kosten','termin','verantwortlichkeit','zwischentotal','reserve','gesamttotal','budget','grundlage'],
          solution: 'A) Spalten: Aktion/Massnahme, Kosten CHF, Termin, Verantwortlichkeit. Zeilen: Einzelne Massnahmen, Zwischentotal, Reserve (ca. 10%), Gesamttotal. B) Die Integration macht Sinn, wenn der Aktionsplan als Grundlage für das Budget verwendet wird.',
          questions: [
            {q: 'A) Struktur und B) Integration:', keywords: ['aktion','massnahme','kosten','termin','verantwortlichkeit','zwischentotal','reserve','gesamttotal','budget','grundlage'], minKeywords: 3}
          ],
          tips: ['Der Aktionsplan enthält Massnahmen, Kosten, Termine, Verantwortlichkeiten.','Reserve ist ca. 10% der Kosten.','Integration macht Sinn, wenn der Aktionsplan als Budgetgrundlage dient.'],
          reveal: ['A) Spalten: Aktion/Massnahme, Kosten CHF, Termin, Verantwortlichkeit. Zeilen: Einzelne Massnahmen, Zwischentotal, Reserve (ca. 10%), Gesamttotal.','B) Die Integration macht Sinn, wenn der Aktionsplan als Grundlage für das Budget verwendet wird.']
        },
        {
          id: 55,
          type: 'fill',
          q: 'Ergänzen Sie die fehlenden Kostenarten im Verkaufskostenbudget.',
          template: '1. Budgetierter Umsatz | 2. {0} | 3. Variable Kosten ID und AD | 4. Total der Kosten | 5. {1} (ca. 10% der Kosten) | 6. Summe | 7. {2}',
          blanks: ['Fixe Kosten','Reserve','Betriebsergebnis'],
          accept: [['Fixe Kosten'],['Reserve'],['Betriebsergebnis']],
          tips: ['Die Kosten werden in fixe und variable aufgeteilt.','Es gibt eine Reserve von ca. 10%.','Die letzte Zeile zeigt das Betriebsergebnis.'],
          reveal: ['2. Fixe Kosten.','5. Reserve (ca. 10% der Kosten).','7. Betriebsergebnis (Erlös minus alle Kosten).']
        },
        {
          id: 56,
          type: 'text',
          q: 'Geben Sie je zwei Beispiele für fixe Kosten im Verkaufsinnendienst und Verkaufsaussendienst.',
          keywords: ['löhne','mieten','verkaufsräumlichkeiten','betriebskosten','versicherung','abschreibung','infrastruktur','fixer','anteil','fahrzeug','schulungen','leasing'],
          solution: 'ID: Löhne für alle im Innendienst Tätigen, Mieten für Verkaufsräumlichkeiten. AD: Löhne (fixer Anteil), Kosten für Verkaufsfahrten, regelmässige Schulungen.',
          questions: [
            {q: 'Fixe Kosten Innendienst:', keywords: ['löhne','mieten','verkaufsräumlichkeiten','betriebskosten','versicherung','abschreibung','infrastruktur'], minKeywords: 2},
            {q: 'Fixe Kosten Aussendienst:', keywords: ['löhne','fixer','anteil','kosten','fahrzeug','schulungen','leasing','abschreibung'], minKeywords: 2}
          ],
          tips: ['Fixe Kosten fallen unabhängig vom Umsatz an.','Löhne (fixer Anteil) sind immer dabei.','Denken Sie an räumliche und fahrzeugbezogene Kosten.'],
          reveal: ['ID: Löhne für alle im Innendienst Tätigen, Mieten für Verkaufsräumlichkeiten, Betriebskosten, kalkulatorische Zinsen und Abschreibungen.','AD: Löhne (fixer Anteil), Kosten für Verkaufsfahrten, regelmässige Schulungen, Leasing und/oder Abschreibungskosten der AD-Fahrzeuge.']
        },
        {
          id: 57,
          type: 'tf',
          q: 'Richtig oder Falsch: Budgetplanung',
          statements: [
            {s: 'Die Nutzschwelle ist der Punkt, bei dem weder Gewinn noch Verlust entsteht.', c: true, feedback: 'Exakte Definition des Break-even-Points.'},
            {s: 'Im Verkaufskostenbudget werden nur die variablen Kosten berücksichtigt.', c: false, feedback: 'Sowohl fixe als auch variable Kosten werden berücksichtigt.'},
            {s: 'Der Deckungsbeitrag berechnet sich als Verkaufspreis minus variable Kosten.', c: true, feedback: 'DB = Preis \u2212 variable Kosten.'},
            {s: 'Die Reserve im Budget beträgt typischerweise ca. 10% der Kosten.', c: true, feedback: 'Ca. 10% Reserve ist üblich.'}
          ],
          tips: ['NS = Break-even = weder Gewinn noch Verlust.','DB = Preis minus variable Kosten.','Das Budget enthält fixe UND variable Kosten.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch – fix + variabel.','Aussage 3: Richtig.','Aussage 4: Richtig.']
        },
        {
          id: 58,
          type: 'text',
          q: 'Nennen Sie je zwei Beispiele für variable Kosten im Verkaufsinnendienst und Aussendienst.',
          keywords: ['prämien','innendienst','marktforschung','beratung','extern','provision','verkäuferwettbewerbe','reisekosten','entschädigung','verpflegung','übernachtung','repräsentation','telekommunikation'],
          solution: 'ID: Prämien für den Innendienst, Ausgaben für sekundäre Marktforschung. AD: Provisionen, Reisekosten (Kilometergeld, Verpflegung, Übernachtung).',
          questions: [
            {q: 'Variable Kosten ID:', keywords: ['prämien','innendienst','marktforschung','beratung','extern'], minKeywords: 1},
            {q: 'Variable Kosten AD:', keywords: ['provision','verkäuferwettbewerbe','reisekosten','entschädigung','verpflegung','übernachtung','repräsentation','telekommunikation'], minKeywords: 2}
          ],
          tips: ['Variable Kosten hängen vom Umsatz/Leistung ab.','Provisionen sind typisch variabel.','Reise- und Repräsentationskosten sind AD-typisch.'],
          reveal: ['ID: Prämien für den Innendienst, Ausgaben für sekundäre Marktforschung, externe Beratung.','AD: Löhne (variabler Anteil), Provisionen, Verkäuferwettbewerbe, Reisekosten (Kilometergeld, Verpflegung, Übernachtung), Repräsentationskosten, Telekommunikation.']
        },
        {
          id: 59,
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
          reveal: ['Mengenmässige NS = Fixkosten / DB pro Stück.','Beispiel: 800\'000 / 60 = 13\'333 Stück.']
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
          { type: 'svg', title: 'Break-even-Diagramm', svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="250" y="25" text-anchor="middle" fill="#3730a3" font-size="14" font-weight="bold">Break-even-Diagramm</text><line x1="60" y1="40" x2="60" y2="300" stroke="#4f46e5" stroke-width="2"/><line x1="60" y1="300" x2="470" y2="300" stroke="#4f46e5" stroke-width="2"/><text x="30" y="170" text-anchor="middle" fill="#3730a3" font-size="10" font-weight="bold" transform="rotate(-90,30,170)">CHF (Kosten / Erl\u00f6s)</text><text x="265" y="325" text-anchor="middle" fill="#3730a3" font-size="10" font-weight="bold">Menge (St\u00fcck)</text><line x1="60" y1="220" x2="450" y2="220" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/><text x="455" y="218" fill="#ef4444" font-size="9">Fixkosten</text><line x1="60" y1="260" x2="450" y2="100" stroke="#f97316" stroke-width="2"/><text x="455" y="100" fill="#f97316" font-size="9">Gesamtkosten</text><line x1="60" y1="290" x2="450" y2="60" stroke="#16a34a" stroke-width="2.5"/><text x="455" y="60" fill="#16a34a" font-size="9">Erl\u00f6s</text><circle cx="270" cy="170" r="6" fill="#4f46e5"/><line x1="270" y1="170" x2="270" y2="300" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="4,3"/><text x="270" y="315" text-anchor="middle" fill="#4f46e5" font-size="9" font-weight="bold">BEP</text><text x="278" y="162" fill="#4f46e5" font-size="10" font-weight="bold">Break-even-Point</text><rect x="140" y="120" width="80" height="25" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/><text x="180" y="137" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold">Verlustzone</text><rect x="340" y="120" width="80" height="25" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/><text x="380" y="137" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold">Gewinnzone</text><text x="150" y="285" fill="#78716c" font-size="9">Variable Kosten</text><line x1="60" y1="260" x2="60" y2="220" stroke="#f97316" stroke-width="6" opacity="0.3"/></svg>' },
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
      exercises: [
        {
          id: 60,
          type: 'text',
          q: 'A) Welche Kontrollen bilden den Schwerpunkt im Verkauf? B) Beschreiben Sie die zwei Kontrollarten.',
          keywords: ['ergebnis','ausführung','kontrolle','ergebniskontrolle','ausführungskontrolle','ökonomisch','markt','umsatz','preis','kosten','qualitativ','handlungsweisen','mitarbeitende'],
          solution: 'A) Ergebnis- und Ausführungskontrollen. B) Ergebniskontrollen sind oft ökonomischer Natur (Markt-, Umsatz-, Preis-, Kostenkontrolle). Ausführungskontrollen bewerten Handlungsweisen von Mitarbeitenden.',
          questions: [
            {q: 'A) Schwerpunkt:', keywords: ['ergebnis','ausführung','kontrolle','ergebniskontrolle','ausführungskontrolle'], minKeywords: 2},
            {q: 'B) Beschreibung:', keywords: ['ökonomisch','markt','umsatz','preis','kosten','qualitativ','handlungsweisen','mitarbeitende'], minKeywords: 3}
          ],
          tips: ['Es gibt Ergebnis- und Ausführungskontrollen.','Ergebnis = quantitativ, ökonomisch.','Ausführung = qualitativ, Verhalten.'],
          reveal: ['A) Im Verkauf wird grundsätzlich zwischen Ergebnis- und Ausführungskontrollen unterschieden.','B) Ergebniskontrollen sind oft ökonomischer Natur (Markt-, Umsatz-, Preis-, Kostenkontrolle). Ausführungskontrollen sind qualitativer Natur und bewerten Handlungsweisen von Mitarbeitenden.']
        },
        {
          id: 61,
          type: 'text',
          q: 'Skizzieren Sie das Raster für einen Kontrollplan.',
          keywords: ['zielinhalt','quantifizierung','methode','zeitpunkt','korrektur','massnahmen','verantwortlich','was','wie viel','wie','wann','welche','wer'],
          solution: 'Kontrollplan-Raster: Zielinhalt (Was), Quantifizierung (Wie viel), Methode (Wie), Zeitpunkt (Wann), Korrekturmassnahmen (Welche), Verantwortlicher (Wer).',
          questions: [
            {q: 'Spalten des Kontrollplans:', keywords: ['zielinhalt','quantifizierung','methode','zeitpunkt','korrektur','massnahmen','verantwortlich','was','wie viel','wie','wann','welche','wer'], minKeywords: 4}
          ],
          tips: ['Der Kontrollplan hat 6 Spalten.','Er folgt den W-Fragen.','Von Was über Wie bis Wer.'],
          reveal: ['Kontrollplan-Raster: Zielinhalt (Was), Quantifizierung (Wie viel), Methode (Wie), Zeitpunkt (Wann), Korrekturmassnahmen (Welche), Verantwortlicher (Wer).']
        },
        {
          id: 62,
          type: 'text',
          q: 'Was versteht man unter Mystery-Shopping?',
          keywords: ['verdeckt','kunden','einsatz','überprüfung','service','dienstleistungsqualität','kundenorientierung','testkunden'],
          solution: 'Mystery-Shopping ist der Einsatz von verdeckten Kunden zur Überprüfung der Kundenorientierung sowie der Service- und Dienstleistungsqualität.',
          questions: [
            {q: 'Erklärung:', keywords: ['verdeckt','kunden','einsatz','überprüfung','service','dienstleistungsqualität','kundenorientierung','testkunden'], minKeywords: 2}
          ],
          tips: ['Mystery = verdeckt, geheim.','Shopping = Einkaufen.','Es geht um Qualitätsprüfung.'],
          reveal: ['Mystery-Shopping ist der Einsatz von verdeckten Kunden zur Überprüfung der Kundenorientierung sowie der Service- und Dienstleistungsqualität, vornehmlich in der Dienstleistungsbranche.']
        },
        {
          id: 63,
          type: 'match',
          q: 'Ordnen Sie die Methode dem jeweiligen Kontrollziel zu.',
          pairs: [
            {l: 'Erfolg von Schulungen und Trainings', r: 'Beobachtung/Auswertung von Verkaufsgesprächen'},
            {l: 'Verhalten an Messeständen überprüfen', r: 'Auswertung von Besuchsprotokollen und Beobachtung'},
            {l: 'Dienstleistungs- und Servicequalität überprüfen', r: 'Beobachtung/Einsatz von Testkunden (Mystery Shopping)'}
          ],
          options: ['Beobachtung/Auswertung von Verkaufsgesprächen','Auswertung von Besuchsprotokollen und Beobachtung','Beobachtung/Einsatz von Testkunden (Mystery Shopping)'],
          tips: ['Schulungserfolg wird durch Beobachtung von Gesprächen gemessen.','Messeverhalten durch Besuchsprotokolle.','Servicequalität durch Mystery Shopping.'],
          reveal: ['Schulungserfolg: Beobachtung und Auswertung von Verkaufsgesprächen/Verhandlungen.','Verhalten an Messeständen: Auswertung von Besuchsprotokollen und Beobachtung.','Servicequalität: Beobachtung, Einsatz von Testkunden (Mystery Shopping).']
        },
        {
          id: 64,
          type: 'text',
          q: 'Kontrolle der Kontrolle: Wieso wird überhaupt kontrolliert, was geschieht mit den Resultaten aus den Kontrollen?',
          keywords: ['analyse','ausgangslage','über','neuarbeitung','konzept','qualifikation','grundlage','variable','lohnbestandteile'],
          solution: 'Die Resultate fliessen in die Analyse der Ausgangslage bei der Über- oder Neuarbeitung von Konzepten ein. Zudem sind sie Basis für die Qualifikation und können Grundlage für variable Lohnbestandteile sein.',
          questions: [
            {q: 'Erklärung:', keywords: ['analyse','ausgangslage','über','neuarbeitung','konzept','qualifikation','grundlage','variable','lohnbestandteile'], minKeywords: 2}
          ],
          tips: ['Die Resultate fliessen zurück in die Planung.','Sie sind Basis für die Qualifikation.','Auch die variable Vergütung hängt davon ab.'],
          reveal: ['Die Resultate der Kontrollen fliessen in die Analyse der Ausgangslage bei der Über- oder Neuarbeitung von Konzepten ein.','Zudem sind sie eine wichtige Basis für die Qualifikation von Mitarbeitenden und können Grundlage für variable Lohnbestandteile sein.']
        },
        {
          id: 65,
          type: 'text',
          q: 'Welche Kontrollmethoden kennen Sie? Machen Sie je ein Beispiel dazu.',
          keywords: ['statistik','erhebung','beobachtung','auswertung','befragung','intern','extern','marktbericht','besuchsbericht','kundenbefragung'],
          solution: '1. Statistiken: interne und externe Auswertungen. 2. Erhebungen: Marktberichte. 3. Beobachtungen: Reisebegleitungen. 4. Auswertung: Besuchsberichte. 5. Befragung: Kundenbefragungen.',
          questions: [
            {q: 'Methoden und Beispiele:', keywords: ['statistik','erhebung','beobachtung','auswertung','befragung','intern','extern','marktbericht','besuchsbericht','kundenbefragung'], minKeywords: 3}
          ],
          tips: ['Es gibt 5 Hauptmethoden.','Von Statistiken bis Befragungen.','Jede Methode hat spezifische Anwendungen.'],
          reveal: ['1. Statistiken: interne und externe Auswertungen.','2. Erhebungen: Marktberichte und -untersuchungen aus sekundären Quellen.','3. Beobachtungen: Reise- und Besuchsbegleitungen.','4. Auswertung: Besuchsberichte, Wochenberichte, Messeprotokolle, Spesenabrechnungen.','5. Befragung: Kundenbefragungen, Gespräche mit Mitarbeitenden.']
        },
        {
          id: 66,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zum Thema Kontrolle im Verkauf.',
          template: '{0} bedeutet, einen Ist-Zustand mit einem gewünschten {1} zu vergleichen, das Ausmass der {2} zu ermitteln und allfällige korrektive Massnahmen einzuleiten. Kontrollmethoden sind: Voll- und {3}, interne und externe Kontrolle, Selbst- und {4} sowie konstruktive und destruktive Kontrolle.',
          blanks: ['Kontrolle','Soll-Zustand','Abweichung','Stichprobenkontrolle','Fremdkontrolle'],
          accept: [['Kontrolle'],['Soll-Zustand','Soll'],['Abweichung'],['Stichprobenkontrolle'],['Fremdkontrolle']],
          tips: ['Kontrolle = Ist vs. Soll.','Es gibt verschiedene Kontrollmethoden-Paare.','Stichprobe vs. Vollkontrolle.'],
          reveal: ['Kontrolle: Ist-Soll-Vergleich.','Abweichung ermitteln und Massnahmen einleiten.','Methoden: Voll-/Stichprobenkontrolle, intern/extern, Selbst-/Fremdkontrolle, konstruktiv/destruktiv.']
        },
        {
          id: 67,
          type: 'tf',
          q: 'Richtig oder Falsch: Kontrollplanung',
          statements: [
            {s: 'Quantitative/ökonomische Ziele sind einfacher zu kontrollieren als qualitative/psychologische Ziele.', c: true, feedback: 'Quantitative Ziele können direkt gemessen werden.'},
            {s: 'Der Kontrollprozess hat 5 Phasen.', c: true, feedback: 'Definition, Durchführung, Überwachung, Bewertung, Analyse & Feedback.'},
            {s: 'Mystery Shopping wird hauptsächlich in der Produktionsbranche eingesetzt.', c: false, feedback: 'Mystery Shopping wird vornehmlich in der Dienstleistungsbranche eingesetzt.'},
            {s: 'Konstruktive Kontrolle zielt auf Verbesserung ab, destruktive auf Fehlersuche.', c: true, feedback: 'Konstruktiv = fördernd, destruktiv = bestrafend/fehlerorientiert.'}
          ],
          tips: ['Quantitative Ziele = einfacher messbar.','Mystery Shopping = Dienstleistungsbranche.','Konstruktiv = positiv, destruktiv = negativ.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Richtig – 5 Phasen.','Aussage 3: Falsch – Dienstleistungsbranche.','Aussage 4: Richtig.']
        },
        {
          id: 68,
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
          reveal: ['Der Kontrollplan gliedert sich in: Zielinhalt, Quantifizierung, Methode, Zeitpunkt, Korrekturmassnahmen und Verantwortlicher.']
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
      exercises: [
        {
          id: 69,
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
          reveal: ['1. Vorbereitung: Informationsbeschaffung.','2. Eröffnung: Persönliche Begrüssung, Atmosphäre schaffen.','3. Angebot und Argumentation: Bedarfsanalyse, Präsentation, Verhandlung.','4. Abschluss: Kaufbereitschaft herbeiführen, abschliessen.','5. Verabschiedung: Definition und Absprache des weiteren Vorgehens.','6. After-Sales-Service: Gespräch nachbearbeiten, Beziehung pflegen.']
        },
        {
          id: 70,
          type: 'text',
          q: 'Nennen Sie zwei vorökonomische Ziele für ein bevorstehendes Verkaufsgespräch.',
          keywords: ['pflege','kontakt','präsentation','information','beziehung','marktleistung','image','zufriedenheit'],
          solution: '1. Pflege des Kontakts / der Beziehung. 2. Information und Präsentation einer neuen Marktleistung.',
          questions: [
            {q: 'Zwei vorökonomische Ziele:', keywords: ['pflege','kontakt','präsentation','information','beziehung','marktleistung','image','zufriedenheit'], minKeywords: 2}
          ],
          tips: ['Vorökonomisch = nicht direkt umsatzbezogen.','Denken Sie an Beziehungspflege.','Auch Informationsaustausch zählt.'],
          reveal: ['1. Pflege des Kontakts / der Beziehung.','2. Information und Präsentation einer neuen Marktleistung.']
        },
        {
          id: 71,
          type: 'text',
          q: 'Nennen Sie mindestens drei Präsentationshilfsmittel für die Tätigkeit des Verkäufers.',
          keywords: ['geschäftsunterlagen','fachartikel','testimonial','muster','modelle','bilder','pläne','skizzen','diagramm','präsentation','video','DVD'],
          solution: 'Geschäftsunterlagen und -drucksachen, Fachartikel/Testimonials, Muster/Modelle/Bilder, Pläne/Skizzen/Diagramme, Präsentationen/Videos.',
          questions: [
            {q: 'Präsentationshilfsmittel:', keywords: ['geschäftsunterlagen','fachartikel','testimonial','muster','modelle','bilder','pläne','skizzen','diagramm','präsentation','video','DVD'], minKeywords: 3}
          ],
          tips: ['Denken Sie an visuelle und haptische Hilfsmittel.','Geschäftsunterlagen und Drucksachen zählen.','Auch digitale Medien sind Hilfsmittel.'],
          reveal: ['Präsentationshilfsmittel: Geschäftsunterlagen und -drucksachen, Fachartikel/Testimonials, Muster/Modelle/Zeigebuecher/Bilder/Visualisierungen, Pläne/Skizzen/Diagramme, Präsentationen/Videos/DVDs.']
        },
        {
          id: 72,
          type: 'text',
          q: 'Was unternehmen Sie im Vorfeld eines Gesprächs, damit Sie für Einwände gewappnet sind?',
          keywords: ['liste','vorfeld','erarbeiten','team','verkaufsteam','produktverantwortlich','vorbereiten','möglichst','viele'],
          solution: 'Ich erarbeite im Vorfeld eine Liste. Damit ich mich auf möglichst viele Einwände vorbereiten kann, erarbeiten wir die Liste im Verkaufsteam zusammen mit den Produktverantwortlichen.',
          questions: [
            {q: 'Vorbereitung auf Einwände:', keywords: ['liste','vorfeld','erarbeiten','team','verkaufsteam','produktverantwortlich','vorbereiten','möglichst','viele'], minKeywords: 2}
          ],
          tips: ['Vorbereitung ist der Schlüssel.','Arbeiten Sie nicht alleine, sondern im Team.','Eine Liste aller möglichen Einwände hilft.'],
          reveal: ['Ich erarbeite im Vorfeld eine Liste. Damit ich mich auf möglichst viele Einwände vorbereiten kann, erarbeiten wir die Liste im Verkaufsteam zusammen mit den Produktverantwortlichen.']
        },
        {
          id: 73,
          type: 'text',
          q: 'Erklären Sie den Begriff «After-Sales-Service».',
          keywords: ['service','nach','kauf','marketingpolitik','kaufentscheidung','bestätigt','wiederhol','zusatzkauf','kundenzufriedenheit','kundenloyalität','kundenbindung'],
          solution: 'After-Sales-Service ist eine serviceorientierte Marketingpolitik, die nach einem Kauf die Kunden in ihrer Kaufentscheidung bestätigt, zu Wiederholungs- und Zusatzkäufen anregt und die langfristige Kundenbindung sicherstellt.',
          questions: [
            {q: 'Erklärung:', keywords: ['service','nach','kauf','marketingpolitik','kaufentscheidung','bestätigt','wiederhol','zusatzkauf','kundenzufriedenheit','kundenloyalität','kundenbindung'], minKeywords: 3}
          ],
          tips: ['After = nach, Sales = Verkauf.','Es geht um die Zeit NACH dem Kauf.','Ziel: Kundenzufriedenheit und -bindung.'],
          reveal: ['After-Sales-Service (auch After-Sales-Management) ist eine serviceorientierte Marketingpolitik, die nach einem Kauf die Kunden in ihrer Kaufentscheidung bestätigt, zu Wiederholungs- und Zusatzkäufen anregt, die Kundenzufriedenheit und Kundenloyalität erhöht und die langfristige Kundenbindung sicherstellt.']
        },
        {
          id: 74,
          type: 'text',
          q: 'Nennen und beschreiben Sie drei Massnahmen, die einen optimalen After-Sales-Service bei Investitionsgütern auszeichnen.',
          keywords: ['vertriebspartner','kontakt','kunden','support','beratung','hotline','reparatur','service','ersatzteil','logistik'],
          solution: '1. Engagierter Vertriebspartner mit persönlichen Kontakten zu Kunden. 2. Support und Beratung: Hotline für Kunden. 3. 24-h-Reparaturservice und rascher Ersatzteildienst.',
          questions: [
            {q: 'Drei Massnahmen:', keywords: ['vertriebspartner','kontakt','kunden','support','beratung','hotline','reparatur','service','ersatzteil','logistik'], minKeywords: 3}
          ],
          tips: ['Denken Sie an den gesamten Lebenszyklus des Produkts.','Support und Beratung sind wichtig.','Auch Ersatzteilversorgung gehört dazu.'],
          reveal: ['1. Engagierter Vertriebspartner mit persönlichen Kontakten zu Kunden, systematische Pflege (Zusatz- und Mehrverkauf).','2. Enger persönlicher Kontakt zum Vertrieb, Verbundenheit (Loyalität).','3. Support und Beratung: Hotline für Kunden.','4. 24-h-Reparaturservice bei Ausfall.','5. Rascher Ersatzteildienst: optimale Logistik.']
        },
        {
          id: 75,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken.',
          template: 'Das Verkaufsgespräch hat {0} Phasen. Es beginnt mit der {1} und endet mit dem {2}. In der Phase der {3} wird eine positive Atmosphäre geschaffen.',
          blanks: ['sechs','Vorbereitung','After-Sales-Service','Eröffnung'],
          accept: [['sechs','6'],['Vorbereitung'],['After-Sales-Service'],['Eröffnung']],
          tips: ['6 Phasen von der Vorbereitung bis zum After-Sales.','Die Eröffnung schafft die Atmosphäre.','Der After-Sales-Service pflegt die Beziehung.'],
          reveal: ['6 Phasen.','Beginnt mit der Vorbereitung.','Endet mit dem After-Sales-Service.','In der Eröffnung wird die Atmosphäre geschaffen.']
        },
        {
          id: 76,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufsgespräch',
          statements: [
            {s: 'Die Vorbereitung ist die erste Phase des Verkaufsgesprächs und umfasst die Informationsbeschaffung.', c: true, feedback: 'Korrekte Beschreibung der ersten Phase.'},
            {s: 'In der Abschlussphase wird hauptsächlich Small Talk geführt.', c: false, feedback: 'Small Talk gehört zur Eröffnung. In der Abschlussphase wird die Kaufbereitschaft herbeigeführt.'},
            {s: 'After-Sales-Service ist nur für Konsumgüter relevant.', c: false, feedback: 'After-Sales ist für alle Produktarten relevant, besonders bei Investitionsgütern.'}
          ],
          tips: ['Vorbereitung = Phase 1.','Abschluss = Kaufbereitschaft herbeiführen.','After-Sales ist universell wichtig.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch – Abschluss = Kaufentscheidung.','Aussage 3: Falsch – gilt für alle Produktarten.']
        },
        {
          id: 77,
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
          reveal: ['Die Bedarfsanalyse findet in der Phase "Angebot und Argumentation" statt.','Hier werden Bedürfnisse ermittelt, das Angebot präsentiert und verhandelt.']
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
          { type: 'svg', title: '6 Phasen des Verkaufsgespr\u00e4chs', svg: '<svg viewBox="0 0 650 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><marker id="vg-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4f46e5"/></marker></defs><text x="325" y="20" text-anchor="middle" fill="#3730a3" font-size="13" font-weight="bold">Die 6 Phasen des Verkaufsgespr\u00e4chs</text><rect x="5" y="40" width="90" height="65" rx="8" fill="#4f46e5"/><text x="50" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">1</text><text x="50" y="78" text-anchor="middle" fill="#e0e7ff" font-size="8" font-weight="bold">Vorbereitung</text><text x="50" y="92" text-anchor="middle" fill="#c7d2fe" font-size="7">Planung A-Z</text><line x1="95" y1="72" x2="108" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="110" y="40" width="90" height="65" rx="8" fill="#6366f1"/><text x="155" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">2</text><text x="155" y="78" text-anchor="middle" fill="#e0e7ff" font-size="8" font-weight="bold">Er\u00f6ffnung</text><text x="155" y="92" text-anchor="middle" fill="#c7d2fe" font-size="7">Atmosph\u00e4re</text><line x1="200" y1="72" x2="213" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="215" y="40" width="90" height="65" rx="8" fill="#818cf8"/><text x="260" y="60" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">3</text><text x="260" y="78" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">Argumentation</text><text x="260" y="92" text-anchor="middle" fill="#e0e7ff" font-size="7">Bedarf + Angebot</text><line x1="305" y1="72" x2="318" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="320" y="40" width="90" height="65" rx="8" fill="#a5b4fc"/><text x="365" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">4</text><text x="365" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Abschluss</text><text x="365" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Kaufentscheid</text><line x1="410" y1="72" x2="423" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="425" y="40" width="90" height="65" rx="8" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.5"/><text x="470" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">5</text><text x="470" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Verabschiedung</text><text x="470" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Dank + n\u00e4chste Schritte</text><line x1="515" y1="72" x2="528" y2="72" stroke="#4f46e5" stroke-width="2" marker-end="url(#vg-arr)"/><rect x="530" y="40" width="110" height="65" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="2"/><text x="585" y="60" text-anchor="middle" fill="#312e81" font-size="16" font-weight="bold">6</text><text x="585" y="78" text-anchor="middle" fill="#312e81" font-size="8" font-weight="bold">Aftersales-Service</text><text x="585" y="92" text-anchor="middle" fill="#3730a3" font-size="7">Nachbearbeitung</text><path d="M585,105 Q585,145 50,145 Q20,145 20,120 Q20,105 50,105" fill="none" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#vg-arr)"/><text x="325" y="140" text-anchor="middle" fill="#4f46e5" font-size="9" font-style="italic">Nach dem Kauf ist vor dem Kauf</text><text x="325" y="170" text-anchor="middle" fill="#78716c" font-size="10">Kundennutzen steht in jeder Phase im Vordergrund</text></svg>' },
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
      exercises: [
        {
          id: 78,
          type: 'text',
          q: 'Worin unterscheiden sich geschlossene und offene Fragen?',
          keywords: ['kurz','klar','beantwortet','raum','antwort','ja','nein','ausführlich','offen','geschlossen'],
          solution: 'Geschlossene Fragen lassen sich kurz und klar beantworten (Ja/Nein). Offene Fragen lassen Raum für die Antwort und fördern ein ausführliches Gespräch.',
          questions: [
            {q: 'Unterschied:', keywords: ['kurz','klar','beantwortet','raum','antwort','ja','nein','ausführlich','offen','geschlossen'], minKeywords: 3}
          ],
          tips: ['Geschlossene Fragen = Ja/Nein-Antworten.','Offene Fragen = ausführliche Antworten.','Offene Fragen beginnen oft mit W-Wörtern.'],
          reveal: ['Geschlossene Fragen lassen sich in der Regel kurz und klar beantworten (Ja/Nein).','Offene Fragen lassen Raum für die Antwort und fördern ein ausführliches Gespräch.']
        },
        {
          id: 79,
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
          reveal: ['Informationsfragen: Informationen gewinnen.','Suggestivfragen: Gegenüber beeinflussen.','Alternativfragen: Wahl erleichtern, Abschluss beschleunigen.','Gegenfragen: Reaktion auf Fragen.','Kontrollfragen: Übereinstimmung prüfen.','Motivationsfragen: Motive erfahren.','Rhetorische Fragen: Aufmerksamkeit gewinnen.','Fangfragen: Indirekte Antworten erhalten.']
        },
        {
          id: 80,
          type: 'text',
          q: 'A) Welche grundsätzlichen Arten von Einwänden kennen Sie? B) Wie lautet die Formel zur Überwindung von Einwänden?',
          keywords: ['echt','unecht','sachlich','begründet','vorwände','vorwand','verständnis','einwand','gegenfrage','repetition','frageform','antworten','VERA'],
          solution: 'A) Echte Einwände sind sachlich begründet. Unechte Einwände sind Vorwände. B) VERA: Verständnis, Einwand in Gegenfrage, Repetition, Antworten.',
          questions: [
            {q: 'A) Arten:', keywords: ['echt','unecht','sachlich','begründet','vorwände','vorwand'], minKeywords: 2},
            {q: 'B) VERA-Formel:', keywords: ['verständnis','einwand','gegenfrage','repetition','frageform','antworten','VERA'], minKeywords: 3}
          ],
          tips: ['Es gibt echte und unechte Einwände.','Die VERA-Formel hat 4 Schritte.','V-E-R-A ist ein Akronym.'],
          reveal: ['A) Echte Einwände sind meistens sachlich begründet. Unechte Einwände sind häufig Vorwände des Kunden.','B) VERA: V = Verständnis aufbringen, E = Einwand in Gegenfrage umwandeln, R = Repetition des Einwands in Frageform, A = Antworten.']
        },
        {
          id: 81,
          type: 'text',
          q: 'Welche Angaben im Zusammenhang mit dem Preis muss man bei einem Angebot machen?',
          keywords: ['menge','stück','kilogramm','tonne','zahlungsbedingungen','frist','rabatte','skonto','lieferbedingungen'],
          solution: 'Preise sind immer auf Mengen zu beziehen (pro Stück, pro Kilogramm). Wichtig sind ferner die Zahlungsbedingungen (Frist), allfällige Rabatte (Skonto) und die Lieferbedingungen.',
          questions: [
            {q: 'Preisangaben:', keywords: ['menge','stück','kilogramm','tonne','zahlungsbedingungen','frist','rabatte','skonto','lieferbedingungen'], minKeywords: 3}
          ],
          tips: ['Preise beziehen sich immer auf Mengen.','Denken Sie an Zahlungs- und Lieferbedingungen.','Auch Rabatte und Skonti gehören dazu.'],
          reveal: ['Preise sind immer auf Mengen zu beziehen (pro Stück, pro Kilogramm, pro Tonne usw.).','Wichtig sind ferner die Zahlungsbedingungen (Frist), allfällige Rabatte (Skonto) und die Lieferbedingungen.']
        },
        {
          id: 82,
          type: 'text',
          q: 'Sie arbeiten in der Firma und befinden sich in der Phase der Bedarfsanalyse. Welche Fragen stellen Sie einem Kunden?',
          keywords: ['offen','informationsfragen','motivationsfragen','kontrollfragen','bedürfnisse','grund','warum','was','wie'],
          solution: 'Grundsätzlich offene Fragen verwenden. Speziell: Informationsfragen, Motivationsfragen, evtl. Kontrollfragen.',
          questions: [
            {q: 'Welche Fragearten verwenden Sie?', keywords: ['offen','informationsfragen','motivationsfragen','kontrollfragen','bedürfnisse','grund','warum','was','wie'], minKeywords: 2}
          ],
          tips: ['Offene Fragen sind besonders geeignet.','Informationsfragen helfen, Bedürfnisse zu verstehen.','Motivationsfragen decken Beweggründe auf.'],
          reveal: ['Grundsätzlich offene Fragen verwenden.','Speziell: Informationsfragen (Was brauchen Sie?), Motivationsfragen (Warum ist Ihnen das wichtig?), evtl. Kontrollfragen (Habe ich Sie richtig verstanden?).']
        },
        {
          id: 83,
          type: 'text',
          q: 'Ein Unternehmen bietet eine Fensterputzmaschine an. Das Angebot endet mit: "Wenn Sie weitere Fragen haben, bitten wir Sie höflichst, sich erneut mit uns in Verbindung zu setzen." Formulieren Sie eine kundenfreundlichere Alternative.',
          keywords: ['gerne','kontakt','nächsten','tagen','aufnehmen','fragen','beantworten','gerät','vorführen','wunsch','freuen'],
          solution: '"Gerne werden wir in den nächsten Tagen Kontakt mit Ihnen aufnehmen, um noch offene Fragen zu beantworten und Ihnen das Gerät auf Wunsch auch vorzuführen."',
          questions: [
            {q: 'Alternative Formulierung:', keywords: ['gerne','kontakt','nächsten','tagen','aufnehmen','fragen','beantworten','gerät','vorführen','wunsch','freuen'], minKeywords: 2}
          ],
          tips: ['Seien Sie proaktiv, nicht passiv.','Bieten Sie einen konkreten nächsten Schritt an.','Verwenden Sie eine positive, einladende Sprache.'],
          reveal: ['Mögliche Lösung: "Gerne werden wir in den nächsten Tagen Kontakt mit Ihnen aufnehmen, um noch offene Fragen zu beantworten und Ihnen das Gerät auf Wunsch auch vorzuführen. Wir freuen uns auf diesen Kontakt und grüssen Sie inzwischen freundlich."']
        },
        {
          id: 84,
          type: 'fill',
          q: 'Ergänzen Sie die Lücken zur VERA-Formel.',
          template: 'V = {0} | E = Einwand in {1} umwandeln | R = {2} des Einwands in Frageform | A = {3}',
          blanks: ['Verständnis aufbringen','Gegenfrage','Repetition','Antworten'],
          accept: [['Verständnis aufbringen','Verständnis'],['Gegenfrage'],['Repetition'],['Antworten']],
          tips: ['VERA ist ein Akronym.','V steht für Verständnis.','Jeder Buchstabe repräsentiert einen Schritt.'],
          reveal: ['V = Verständnis aufbringen.','E = Einwand in Gegenfrage umwandeln.','R = Repetition des Einwands in Frageform.','A = Antworten.']
        },
        {
          id: 85,
          type: 'tf',
          q: 'Richtig oder Falsch: Verkaufstechnik',
          statements: [
            {s: 'Offene Fragen lassen Raum für die Antwort und fördern das Gespräch.', c: true, feedback: 'Offene Fragen beginnen oft mit W-Fragenwörtern.'},
            {s: 'Suggestivfragen dienen dazu, neutrale Informationen zu sammeln.', c: false, feedback: 'Suggestivfragen versuchen, das Gegenüber zu beeinflussen.'},
            {s: 'Echte Einwände sind meistens sachlich begründet.', c: true, feedback: 'Im Gegensatz zu unechten Einwänden, die oft Vorwände sind.'},
            {s: 'Die VERA-Formel hat 3 Schritte.', c: false, feedback: 'Die VERA-Formel hat 4 Schritte: V-E-R-A.'}
          ],
          tips: ['Offene Fragen = W-Fragen, ausführliche Antworten.','Suggestivfragen = beeinflussend, nicht neutral.','VERA = 4 Schritte.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch – Suggestivfragen beeinflussen.','Aussage 3: Richtig.','Aussage 4: Falsch – 4 Schritte (V-E-R-A).']
        },
        {
          id: 86,
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
          reveal: ['Kontrollfragen dienen dazu, den Grad der Übereinstimmung zu kontrollieren.','Beispiel: "Habe ich Sie richtig verstanden?"']
        },
        {
          id: 87,
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
          reveal: ['"Was ist Ihnen wichtig?" = Informationsfrage (offen, sammelt Informationen).','"Rot oder blau?" = Alternativfrage (bietet Wahl).','"Stimmen Sie zu?" = Suggestivfrage (legt Antwort nahe).','"Richtig verstanden?" = Kontrollfrage (prüft Übereinstimmung).']
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
