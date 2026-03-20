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
          headers: ['Vorökonomisch','Oekonomisch','Ziel'],
          rows: [
            {label: 'Distributionsgrad', correct: 1},
            {label: 'Mitarbeiterzufriedenheit', correct: 0},
            {label: 'Absatz', correct: 1},
            {label: 'Bekanntheitsgrad', correct: 0},
            {label: 'Kosten', correct: 1},
            {label: 'Kontaktqualität', correct: 0},
            {label: 'Umsatz', correct: 1},
            {label: 'Kundenempfehlungsrate', correct: 0},
            {label: 'Image', correct: 0},
            {label: 'Servicequalität', correct: 0}
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
          {
            type: 'svg',
            id: 'konzeptraster',
            title: 'Das 6-Schritte Konzeptraster (Abb. 1-2)'
          },
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
          type: 'check',
          q: 'Ordnen Sie die Segmentationskriterien der Kundengruppe zu (B2C und/oder B2B).',
          headers: ['B2C','B2B','Segmentationskriterien'],
          rows: [
            {label: 'Geografische Kriterien', correct: 2},
            {label: 'Soziodemografische Kriterien', correct: 0},
            {label: 'Organisatorische Kriterien', correct: 1},
            {label: 'Ökonomische Kriterien', correct: 1},
            {label: 'Psychografische Kriterien', correct: 0},
            {label: 'Informations- und Kaufverhalten', correct: 2},
            {label: 'Entscheidungsbezogene Kriterien', correct: 1},
            {label: 'Unternehmenskultur', correct: 1}
          ],
          multiCheck: true,
          correctChecks: [
            [true,true],
            [true,false],
            [false,true],
            [false,true],
            [true,false],
            [true,false],
            [false,true],
            [false,true]
          ],
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
      learningData: null
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
      learningData: null
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
      learningData: null
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
          headers: ['Aufbau','Ablauf','Hilfsmittel'],
          rows: [
            {label: 'Tourenplan', correct: 1},
            {label: 'Organigramm', correct: 0},
            {label: 'Verkaufsstufenplan', correct: 1},
            {label: 'Stellenbeschreibung', correct: 0},
            {label: 'Anforderungsprofil', correct: 0},
            {label: 'Aktionspläne', correct: 1},
            {label: 'Telefonskripte', correct: 1}
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
      learningData: null
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
          type: 'check',
          q: 'Handelt es sich bei den aufgeführten Beispielen um direkt finanzielle, indirekt finanzielle oder nichtfinanzielle Anreize?',
          headers: ['Direkt fin.','Indirekt fin.','Nichtfin.','Beispiel'],
          rows: [
            {label: 'Ausbildungszuschuss', correct: 1},
            {label: 'Spesenvergütung', correct: 0},
            {label: 'Auszeichnung', correct: 2},
            {label: 'Verkaufsprämie', correct: 0},
            {label: 'Zusätzliche Verantwortung', correct: 2},
            {label: 'Geschäftswagen', correct: 1},
            {label: 'Beteiligungszulage', correct: 0}
          ],
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
      learningData: null
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
      learningData: null
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
      learningData: null
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
      learningData: null
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
      learningData: null
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
