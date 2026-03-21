window.BOOK_DATA = {
  id: 'marketingkonzept',
  title: 'Marketingkonzept, Marktanalyse und Marktleistung',
  shortTitle: 'Marketingkonzept',
  author: 'Friebe, Michel, Portmann, Reber, Schneider',
  year: 2022,
  pages: 280,
  color: '#dc2626',
  chapters: [
    // ================================================================
    // Chapter 1: Aufbau eines Marketingkonzepts (S.20)
    // ================================================================
    {
      id: 'ch1', num: 'Teil A \u2013 Kapitel 1', title: 'Aufbau eines Marketingkonzepts',
      exercises: [
        {
          id: 1, type: 'mc', title: 'Marketingkonzept und Erfolg',
          q: 'Kann ein Unternehmen ohne Marketingkonzept erfolgreich sein?',
          options: [
            'Nein, ohne Konzept ist kein Erfolg m\u00f6glich',
            'Ja, aber ein Konzept hilft bei systematischem Vorgehen und wichtigen Entscheidungen',
            'Ja, ein Konzept ist nur f\u00fcr grosse Unternehmen n\u00f6tig',
            'Nein, ein Marketingkonzept ist gesetzlich vorgeschrieben'
          ],
          answer: 1,
          tips: [
            'Denken Sie an Unternehmen, die von Einzelpersonen gef\u00fchrt werden.',
            'Es gibt Unternehmen, die intuitiv richtig handeln.'
          ],
          reveal: [
            'Es gibt Unternehmen, die ohne ausformuliertes Konzept erfolgreich sind, aber konzeptionell vorgehen.',
            'Ein Marketingkonzept hilft bei systematischem Vorgehen und unterst\u00fctzt wichtige Entscheidungen.'
          ]
        },
        {
          id: 2, type: 'fill', title: 'Die 6 Schritte des Marketingkonzepts',
          q: 'Erg\u00e4nzen Sie die 6 Schritte des Marketingkonzepts:',
          template: '1. Die {0}, 2. Die {1} (Ziele), 3. Die {2}, 4. Die {3} (Marketing-Mix), 5. Das {4} und die Realisation, 6. Die {5}',
          blanks: [['Analyse'],['Zielsetzung'],['Strategien'],['Instrumente'],['Budget'],['Kontrolle']],
          tips: ['Denken Sie an die logische Reihenfolge eines Planungsprozesses.'],
          reveal: ['Die 6 Schritte: Analyse, Zielsetzung, Strategien, Instrumente, Budget/Realisation, Kontrolle.']
        },
        {
          id: 3, type: 'mc', title: 'Marketingdefinition',
          q: 'Welche Marketingdefinitionen sind allgemeing\u00fcltig und nachvollziehbar?',
          options: [
            'A) Marketing ist darauf gerichtet, Bed\u00fcrfnisse und W\u00fcnsche durch Austauschprozesse zu befriedigen.',
            'B) Marketing ist marktgerichtete und marktgerechte Unternehmensf\u00fchrung.',
            'C) Marketing heisst, mit Werbung den Brand optimal zu positionieren.',
            'D) Marketing ist Planung, Koordination und Kontrolle aller auf die aktuellen und potenziellen M\u00e4rkte ausgerichteten Unternehmensaktivit\u00e4ten.'
          ],
          answer: 2,
          tips: ['Welche Definition beschr\u00e4nkt sich nur auf Werbung?'],
          reveal: [
            'C ist nicht allgemeing\u00fcltig \u2013 Marketing ist viel mehr als nur Werbung.',
            'A, B und D sind anerkannte Definitionen.'
          ]
        },
        {
          id: 4, type: 'mc', title: 'Konzeptebene',
          q: 'Ein neues Produkt wird eingef\u00fchrt. Daf\u00fcr erstellen Sie als Produktmanagerin ein Marketingkonzept. Um welche Art von Konzept handelt es sich?',
          options: [
            'Konzept auf Unternehmensebene',
            'Konzept auf SGF-Ebene (strategisches Gesch\u00e4ftsfeld)',
            'Konzept auf Marktleistungsebene',
            'Konzept auf Abteilungsebene'
          ],
          answer: 2,
          tips: ['Auf welcher Ebene arbeitet ein Produktmanager typischerweise?'],
          reveal: ['Da es um ein einzelnes Produkt geht, handelt es sich um ein Konzept auf der Ebene Marktleistung.']
        },
        {
          id: 5, type: 'tf', title: 'Iterativer Prozess',
          statements: [
            { s: 'In der Praxis baut man ein Marketingkonzept streng linear auf.', c: false, feedback: 'Die Erarbeitung ist ein iterativer Prozess \u2013 die Phasen beeinflussen sich gegenseitig.' },
            { s: 'Neue Informationen k\u00f6nnen die Analyse und Ziele jederzeit \u00e4ndern.', c: true, feedback: 'Richtig \u2013 deshalb ist der Prozess iterativ.' },
            { s: 'In der Pr\u00fcfung wird das Konzept oft linear dargestellt.', c: true, feedback: 'Aus didaktischen Gr\u00fcnden wird das Konzept in Pr\u00fcfungen oft linear aufgebaut.' }
          ],
          tips: [],
          reveal: []
        }
      ],
      learningData: {
        title: 'Aufbau eines Marketingkonzepts',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'erkl\u00e4ren, was Marketing ist und welche Bedeutung Kundenorientierung hat.',
              'die 6 Schritte eines Marketingkonzepts aufz\u00e4hlen und erl\u00e4utern.',
              'ein Marketingkonzept von anderen Konzeptarten unterscheiden.',
              'den iterativen Charakter des Marketingkonzepts verstehen.'
            ]
          },
          {
            type: 'concept',
            title: 'Was ist Marketing?',
            content: 'Ausgangspunkt jeder Marketingaktivit\u00e4t ist es, das Bed\u00fcrfnis der Kunden zu erkennen. Marketing umfasst alle T\u00e4tigkeiten und Anstrengungen eines Unternehmens, um ein Bed\u00fcrfnis des Markts zu erkennen, in ein entsprechendes Produkt oder eine Dienstleistung umzuwandeln und diese anschliessend auf dem Markt den Kunden mit Gewinn zu verkaufen.',
            highlight: 'Marketing = alle T\u00e4tigkeiten, um Bed\u00fcrfnisse zu erkennen, Produkte/DL zu schaffen und gewinnbringend zu verkaufen.'
          },
          {
            type: 'concept',
            title: 'Das Marketingkonzept',
            content: 'Das Marketingkonzept ist der \u00fcbergeordnete Rahmen f\u00fcr die T\u00e4tigkeiten im Marketing. Es stellt sicher, dass die einzelnen Elemente des Marketings zusammenpassen. Es schafft Ordnung und einen Orientierungsrahmen in der Marketingpraxis. In den meisten F\u00e4llen wird ein Marketingkonzept auf der Stufe einer strategischen Gesch\u00e4ftseinheit (SGE) formuliert.',
            highlight: 'Das Marketingkonzept umfasst in der Regel 6 Schritte: Analyse, Zielsetzung, Strategien, Instrumente (Marketing-Mix), Budget und Realisation, Kontrolle.'
          },
          {
            type: 'table',
            title: 'Die 6 Schritte des Marketingkonzepts',
            headers: ['Schritt', 'Fragestellung'],
            rows: [
              ['1. Analyse', 'Wo stehen wir? Welche St\u00e4rken, Schw\u00e4chen, Risiken und Chancen bestehen im und f\u00fcr unser Unternehmen?'],
              ['2. Ziele', 'Wohin wollen wir? Welche Zielsetzungen verfolgen wir im Marketing?'],
              ['3. Strategien', 'Wie erreichen wir die Ziele? Welche grunds\u00e4tzlichen Vorgehensweisen wollen wir definieren?'],
              ['4. Instrumente', 'Welche Massnahmen sind n\u00f6tig? (Marketing-Mix: Product, Price, Place, Promotion)'],
              ['5. Budget und Realisation', 'Welche Ressourcen brauchen wir daf\u00fcr?'],
              ['6. Kontrolle', 'Wie kontrollieren wir den Erfolg? Haben wir die Ziele tats\u00e4chlich erreicht?']
            ]
          },
          {
            type: 'concept',
            title: 'Konzeptarten',
            content: 'Marketingkonzepte k\u00f6nnen sich auf verschiedene Ebenen beziehen: auf ein gesamtes Unternehmen, auf ein strategisches Gesch\u00e4ftsfeld oder auf eine bestimmte Marktleistung. Sie unterscheiden sich nach Umfang/Ebene, Anlass, Empf\u00e4nger, Zweck und Ersteller. Ein Konzept auf der Ebene Marktleistung erstellt z.B. ein Product Manager f\u00fcr die Einf\u00fchrung einer neuen Hypothek.',
            highlight: 'Es gibt Konzepte auf Unternehmens-, Gesch\u00e4ftsfeld- und Marktleistungsebene.'
          },
          {
            type: 'concept',
            title: 'Iterativer Charakter',
            content: 'Die Erarbeitung eines Marketingkonzepts ist ein iterativer Prozess. Die Phasen werden laufend immer wieder durchgespielt. Jeden Tag treffen neue Informationen ein, die die Analyse beeinflussen oder die Ziele \u00e4ndern usw. In einer Pr\u00fcfungssituation ist es jedoch h\u00e4ufig so, dass das Marketingkonzept aus didaktischen Gr\u00fcnden linear aufgebaut wird.',
            highlight: 'In der Praxis ist das Marketingkonzept iterativ \u2013 in der Pr\u00fcfung wird es oft linear dargestellt.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Marketing beginnt beim Bed\u00fcrfnis der Kunden (Kundenorientierung).',
              'Das Marketingkonzept hat 6 Schritte: Analyse, Ziele, Strategien, Instrumente, Budget, Kontrolle.',
              'Es wird meist auf Stufe SGE (strategische Gesch\u00e4ftseinheit) formuliert.',
              'Konzepte unterscheiden sich nach Umfang, Anlass, Empf\u00e4nger, Zweck und Ersteller.',
              'Die Erarbeitung ist ein iterativer Prozess \u2013 die Phasen beeinflussen sich gegenseitig.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Ausgangspunkt jeder Marketingaktivit\u00e4t ist es, das <strong>Bed\u00fcrfnis</strong> der Kunden zu erkennen.',
              'Eine konsequente <strong>Kundenorientierung</strong> ist unerl\u00e4sslich, um Bed\u00fcrfnisse des Markts zu erkennen und mit einem Produkt oder einer Dienstleistung zu bedienen.',
              '<strong>Marketing</strong> umfasst alle T\u00e4tigkeiten, um ein Bed\u00fcrfnis des Markts zu erkennen, in ein Produkt umzuwandeln und gewinnbringend zu verkaufen.',
              'Das <strong>Marketingkonzept</strong> umfasst in der Regel 6 Schritte: Analyse, Ziele, Strategien, Instrumente (Marketing-Mix), Budget und Realisation, Kontrolle.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Marketing', def: 'Alle T\u00e4tigkeiten eines Unternehmens zur Erkennung von Marktbed\u00fcrfnissen und deren Befriedigung durch Produkte/DL.' },
              { term: 'Marketingkonzept', def: '\u00dcbergeordneter Rahmen f\u00fcr die Marketingt\u00e4tigkeiten mit 6 Schritten.' },
              { term: 'Kundenorientierung', def: 'Konsequente Ausrichtung aller Aktivit\u00e4ten an den Bed\u00fcrfnissen der Kunden.' },
              { term: 'Strategische Gesch\u00e4ftseinheit (SGE)', def: 'Organisatorische Einheit, die bestimmte strategische Gesch\u00e4ftsfelder bearbeitet.' },
              { term: 'Iterativer Prozess', def: 'Ein Prozess, bei dem die Phasen wiederholt durchlaufen und gegenseitig beeinflusst werden.' },
              { term: 'Marketing-Mix', def: 'Kombination der vier Instrumente: Product, Price, Place, Promotion (4P).' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 2: Marktdefinition und Abh\u00e4ngigkeiten (S.33-34)
    // ================================================================
    {
      id: 'ch2', num: 'Teil A \u2013 Kapitel 2', title: 'Marktdefinition und Abh\u00e4ngigkeiten',
      exercises: [
        {
          id: 6, type: 'match', title: 'Teilm\u00e4rkte oder Segmente?',
          q: 'Handelt es sich bei den folgenden Einteilungen um Teilm\u00e4rkte oder Segmente?',
          pairs: [
            { l: 'Studierende an Fachhochschulen, Universit\u00e4ten und ETHs, die B\u00fccher kaufen', r: 'Segment' },
            { l: 'Lehrmittel f\u00fcr Fachhochschulen, die von Verlagen produziert werden', r: 'Teilmarkt' },
            { l: 'Sportliche Fahrer, die BMW, Audi oder Ford Mustang lieben', r: 'Segment' },
            { l: 'Die Firma Dow Chemicals beliefert Unternehmen in der Kosmetik- und Automobilbranche mit Silikonen', r: 'Teilmarkt' }
          ],
          options: ['Teilmarkt', 'Segment'],
          tips: ['Teilm\u00e4rkte werden nach dem Angebot definiert, Segmente nach der Nachfrage (Kundengruppen).'],
          reveal: []
        },
        {
          id: 7, type: 'calc', title: 'S\u00e4ttigungsgrad berechnen',
          q: 'Berechnen Sie den S\u00e4ttigungsgrad f\u00fcr eine spezielle Software im Markt Europa.',
          rows: [
            { label: 'Marktvolumen 20_1', val: 'EUR 18 Mio.' },
            { label: 'Marktpotenzial 20_1', val: 'EUR 68 Mio.' },
            { label: 'Marktvolumen 20_2', val: 'EUR 31 Mio.' },
            { label: 'Marktpotenzial 20_2', val: 'EUR 75 Mio.' }
          ],
          inputs: [
            { label: 'S\u00e4ttigungsgrad 20_1 (in %)', answer: ['26.5', '26,5'], tolerance: 0.5 },
            { label: 'S\u00e4ttigungsgrad 20_2 (in %)', answer: ['41.3', '41,3'], tolerance: 0.5 }
          ],
          tips: ['S\u00e4ttigungsgrad = Marktvolumen / Marktpotenzial \u00d7 100'],
          reveal: [
            'S\u00e4ttigungsgrad 20_1: 18/68 = 26.5%',
            'S\u00e4ttigungsgrad 20_2: 31/75 = 41.3%',
            'Der S\u00e4ttigungsgrad steigt.'
          ]
        },
        {
          id: 8, type: 'text', title: 'Marktanteil berechnen',
          q: 'Berechnen Sie den wertm\u00e4ssigen Marktanteil und den relativen Marktanteil von LINK. Die Forschungsumsatztabelle zeigt: LINK = 32 855 von Total 227 889 (CHF 1000). Die gr\u00f6ssten drei Konkurrenten: IHA-GfK = 84 164, LINK = 32 855, DemoSCOPE = 18 775.',
          keywords: ['14.4', '14,4', '85.8', '85,8', 'marktanteil'],
          tips: [
            'Wertm\u00e4ssiger Marktanteil = eigener Umsatz / Gesamtumsatz',
            'Relativer Marktanteil = Marktanteil / Marktanteil der gr\u00f6ssten 3 Konkurrenten'
          ],
          reveal: [
            'Wertm\u00e4ssiger Marktanteil = 32 855 / 227 889 = 14.4%',
            'Relativer Marktanteil (gemessen an den 3 Gr\u00f6ssten) = 85.8% (32 855 / (84 164 + 18 775 + 11 887) / 3)'
          ]
        },
        {
          id: 9, type: 'text', title: 'SGF vs. SGE',
          q: 'Was ist der Unterschied zwischen einem strategischen Gesch\u00e4ftsfeld (SGF) und einer strategischen Gesch\u00e4ftseinheit (SGE)? Beschreiben Sie die beiden Begriffe sowie die Unterschiede.',
          keywords: ['markt', 'extern', 'intern', 'organisation', 'unternehmen', 'aussen', 'innen'],
          tips: ['SGF wird von aussen definiert, SGE von innen.'],
          reveal: [
            'Ein SGF ist ein \u00abMarkt im Markt\u00bb \u2013 es wird von aussen durch unterschiedliche Kunden, Konkurrenten und Angebote definiert.',
            'Eine SGE ist eine organisatorische Einheit im Unternehmen, die bestimmte SGF bearbeitet \u2013 sie wird von innen definiert.'
          ]
        },
        {
          id: 10, type: 'match', title: 'Marktgr\u00f6ssen ordnen',
          q: 'Ordnen Sie die Marktgr\u00f6ssen in aufsteigender Reihenfolge (1=kleinste, 4=gr\u00f6sste).',
          pairs: [
            { l: 'Marktanteil', r: '1' },
            { l: 'Marktvolumen', r: '2' },
            { l: 'Marktpotenzial', r: '3' },
            { l: 'Marktkapazit\u00e4t', r: '4' }
          ],
          options: ['1', '2', '3', '4'],
          tips: [],
          reveal: []
        },
        {
          id: 11, type: 'text', title: 'Minicase: Easy Building AG',
          q: 'Sie sind Marketingverantwortliche/r beim Bauberatungsunternehmen Easy Building AG. Ihre Kunden sind Bauherren (Privatpersonen). Erl\u00e4utern Sie das Marktsystem, in dem sich Easy Building bewegt.',
          keywords: ['kunden', 'konkurrenz', 'beeinflusser', 'umfeld', 'dienstleistung'],
          tips: ['Denken Sie an die Akteure im Marktsystem: Unternehmen, Kunden, Konkurrenz, Beeinflusser, Umfeld.'],
          reveal: [
            'Im Dienstleistungssektor fallen Handelspartner weg \u2013 direkter Kontakt zum Endkunden.',
            'Externe Beeinflusser: Architekturb\u00fcros, Hauseigent\u00fcmerverband, Medien.',
            'Umfeldfaktoren: Wirtschaft (Konjunktur, Zinspolitik), Technologie (Bautechnologien), Gesellschaft, Recht.'
          ]
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 3: Analyse I: Marktanalyse (S.58-59)
    // ================================================================
    {
      id: 'ch3', num: 'Teil A \u2013 Kapitel 3', title: 'Analyse I: Marktanalyse',
      exercises: [
        {
          id: 12, type: 'text', title: 'Kundenanalyse und CLV',
          q: 'Eine Buchhandlung sch\u00e4tzt, dass Stammkunden pro Monat im Durchschnitt ein Buch zu einem Preis von CHF 38 kaufen und 10 Jahre treu bleiben. Berechnen Sie den Customer Lifetime Value (Umsatz, nicht Deckungsbeitrag).',
          keywords: ['4560', '4\'560', '4560'],
          tips: ['CLV = Durchschnittsumsatz pro Monat \u00d7 12 Monate \u00d7 Anzahl Jahre'],
          reveal: ['CLV = CHF 38 \u00d7 12 \u00d7 10 = CHF 4\u2019560']
        },
        {
          id: 13, type: 'tf', title: 'Marktanalyse: Richtig oder falsch?',
          statements: [
            { s: 'Beim Benchmarking vergleicht man sich immer mit dem Branchenleader.', c: false, feedback: 'Man kann auch internes Benchmarking betreiben oder Best-in-Class aus anderen Branchen.' },
            { s: 'Bei einer ABC-Analyse generieren A-Kunden \u00fcberdurchschnittlich viel Umsatz.', c: true, feedback: 'A-Kunden machen ca. 80% des Umsatzes aus.' },
            { s: 'Ein iPhone ist ein High-Involvement-Produkt f\u00fcr die meisten Jugendlichen.', c: true, feedback: 'Hoher Preis, emotionale Bindung \u2013 typisch High-Involvement.' },
            { s: 'In einem Markt, der schnell w\u00e4chst, ist die Rivalit\u00e4t eher gering.', c: true, feedback: 'Bei Marktwachstum k\u00f6nnen alle Anbieter wachsen, der Wettbewerb ist weniger intensiv.' },
            { s: 'Je h\u00f6her die Markteintrittsbarrieren, desto h\u00f6her die m\u00f6gliche Rentabilit\u00e4t der etablierten Unternehmen.', c: true, feedback: 'Hohe Barrieren sch\u00fctzen bestehende Anbieter.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 14, type: 'mc', title: 'Externer Beeinflusser',
          q: 'Wenn Jasmin im Swisscom-Shop ein neues Samsung-Smartphone kauft, weil der Verk\u00e4ufer sie von den Vorteilen \u00fcberzeugt \u2013 ist der Verk\u00e4ufer dann ein externer Beeinflusser?',
          options: [
            'Ja, der Verk\u00e4ufer ist ein externer Beeinflusser',
            'Nein, der Verk\u00e4ufer ist kein externer Beeinflusser',
            'Es kommt auf die Situation an',
            'Nur wenn er nicht bei Swisscom angestellt ist'
          ],
          answer: 1,
          tips: ['Der Verk\u00e4ufer ist Teil des Vertriebskanals, nicht ein externer Beeinflusser.'],
          reveal: [
            'Nein. Der Verk\u00e4ufer ist Teil der Handelskette \u2013 kein externer Beeinflusser.',
            'Externe Beeinflusser sind z.B. Testmagazine, Medien, Verb\u00e4nde.'
          ]
        },
        {
          id: 15, type: 'mc', title: 'Externe Beeinflusser II',
          q: 'Wenn Feriensg\u00e4ste auf TripAdvisor ein Hotel kommentieren, sind sie dann externe Beeinflusser?',
          options: [
            'Nein, sie sind K\u00e4ufer',
            'Ja, sie sind externe Beeinflusser',
            'Nein, sie sind interne Beeinflusser',
            'Nur wenn sie bezahlt werden'
          ],
          answer: 1,
          tips: ['TripAdvisor-Bewertungen beeinflussen die Kaufentscheidung anderer.'],
          reveal: ['Ja. Bewertungen auf Plattformen wie TripAdvisor beeinflussen die Kaufentscheidung Dritter \u2013 das macht die Rezensenten zu externen Beeinflussern.']
        },
        {
          id: 16, type: 'mc', title: 'Emotion oder Motivation',
          q: 'Wenn ich beim Glacegenuss gl\u00fccklich bin, ist Gl\u00fcck eine Emotion oder eine Einstellung?',
          options: [
            'Eine Einstellung',
            'Eine Emotion',
            'Eine Motivation',
            'Ein Bed\u00fcrfnis'
          ],
          answer: 1,
          tips: ['Emotionen sind kurzfristige Gef\u00fchle, Einstellungen sind langfristig.'],
          reveal: ['Gl\u00fcck ist eine Emotion \u2013 ein kurzfristiges Gef\u00fchl im Moment des Genusses.']
        },
        {
          id: 17, type: 'tf', title: 'Konkurrenten und Qualit\u00e4t',
          statements: [
            { s: 'Konkurrenten, die kosteng\u00fcnstig produzieren, sind weniger gef\u00e4hrlich f\u00fcr ein Unternehmen, weil die Qualit\u00e4t der Produkte schlecht ist.', c: false, feedback: 'Kosteng\u00fcnstige Produktion bedeutet nicht automatisch schlechte Qualit\u00e4t. Kostenf\u00fchrerschaft kann sehr gef\u00e4hrlich sein.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 18, type: 'match', title: 'Five Forces: Hyatt-Hotel Z\u00fcrich',
          q: 'Ordnen Sie die folgenden Faktoren den f\u00fcnf Wettbewerbskr\u00e4ften nach Porter zu.',
          pairs: [
            { l: 'Airbnb-Vermietungsplattform', r: 'Ersatzprodukte' },
            { l: 'Booking.com-Reservationsplattform', r: 'Abnehmer' },
            { l: 'Tiefpreispolitik von Hilton in Z\u00fcrich', r: 'Rivalit\u00e4t' },
            { l: 'Fusion der gr\u00f6ssten Konferenz- und Messeveranstalter', r: 'Lieferanten' }
          ],
          options: ['Neue Konkurrenten', 'Abnehmer', 'Lieferanten', 'Ersatzprodukte', 'Rivalit\u00e4t'],
          tips: ['Denken Sie: wer ist Ersatzprodukt, wer verst\u00e4rkt die Verhandlungsmacht?'],
          reveal: []
        },
        {
          id: 19, type: 'text', title: 'Minicase: Ski and Fun AG',
          q: 'Fabio, der neue Gesch\u00e4ftsf\u00fchrer der \u00abSki and Fun AG\u00bb, hat festgestellt, dass der Verkauf \u00fcber kleine Fachgesch\u00e4fte und den eigenen Onlineshop noch nicht ausreicht. Er bittet Sie um eine Analyse m\u00f6glicher Absatzkan\u00e4le und erste Empfehlungen f\u00fcr zwei weitere Absatzwege.',
          keywords: ['distribution', 'kanal', 'online', 'plattform', 'handel', 'grosshandel', 'sport'],
          tips: [
            'Denken Sie an direkte und indirekte Absatzkan\u00e4le.',
            'Online-Plattformen, Sportfachhandel, Kaufh\u00e4user, Franchise.'
          ],
          reveal: ['M\u00f6gliche Absatzwege: Sportfachhandelsketten, Kaufh\u00e4user, Online-Plattformen (z.B. Galaxus, Amazon), Pop-up-Stores in Skigebieten.']
        },
        {
          id: 20, type: 'mc', title: 'Marktforschungsinstitute',
          q: 'Welches ist das gr\u00f6sste Schweizer Marktforschungsinstitut gemessen am Forschungsumsatz?',
          options: [
            'LINK Institut',
            'DemoSCOPE',
            'IHA-GfK AG',
            'gfs.bern'
          ],
          answer: 2,
          tips: ['Schauen Sie sich die Tabelle der Forschungsums\u00e4tze an.'],
          reveal: ['IHA-GfK AG (Hergiswil/Lausanne) ist mit Abstand das gr\u00f6sste Schweizer Marktforschungsinstitut.']
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 4: Analyse II: Unternehmens- und Umfeldanalyse (S.75-76)
    // ================================================================
    {
      id: 'ch4', num: 'Teil A \u2013 Kapitel 4', title: 'Analyse II: Unternehmens- und Umfeldanalyse',
      exercises: [
        {
          id: 21, type: 'text', title: 'BCG-Portfolio: Nur Cash Cows?',
          q: 'Ein Unternehmen erstellt eine Portfolioanalyse und stellt fest, dass alle vier Produkte Cash Cows sind. Beurteilen Sie diese Situation als vorteilhaft oder problematisch.',
          keywords: ['zukunft', 'wachstum', 'star', 'investition', 'innovation'],
          tips: ['Was passiert, wenn es keine Stars oder Question Marks gibt?'],
          reveal: [
            'Problematisch: Cash Cows generieren zwar Geld, aber ohne Stars oder Question Marks fehlen k\u00fcnftige Wachstumstr\u00e4ger.',
            'Langfristig braucht ein Unternehmen neue Produkte, die in wachsenden M\u00e4rkten positioniert sind.'
          ]
        },
        {
          id: 22, type: 'text', title: 'Umfeldanalyse und McKinsey',
          q: 'Welchen Einfluss hat die Umfeldanalyse auf die Bewertung einer strategischen Gesch\u00e4ftseinheit in der McKinsey-Matrix?',
          keywords: ['marktattraktivit\u00e4t', 'umfeld', 'extern', 'chancen', 'gefahren'],
          tips: ['Die McKinsey-Matrix betrachtet Marktattraktivit\u00e4t und Wettbewerbsvorteil.'],
          reveal: [
            'Die Umfeldanalyse fliesst in die Dimension Marktattraktivit\u00e4t ein.',
            'Politische, wirtschaftliche und technologische Faktoren beeinflussen die Attraktivit\u00e4t eines Marktes.'
          ]
        },
        {
          id: 23, type: 'mc', title: 'Kritischer Erfolgsfaktor oder SEP?',
          q: 'Eine Analyse ergibt, dass im \u00d6lgesch\u00e4ft die Gr\u00f6sse eine entscheidende Rolle spielt. Grosse Unternehmen sind erfolgreicher. Ist die Gr\u00f6sse ein kritischer Erfolgsfaktor oder eine strategische Erfolgsposition?',
          options: [
            'Strategische Erfolgsposition (SEP)',
            'Kritischer Erfolgsfaktor (KEF)',
            'Beides',
            'Keines von beiden'
          ],
          answer: 1,
          tips: ['KEF gelten f\u00fcr alle in der Branche. SEP sind unternehmensspezifisch.'],
          reveal: [
            'Die Gr\u00f6sse ist ein kritischer Erfolgsfaktor (KEF) \u2013 sie gilt f\u00fcr alle Unternehmen in der \u00d6lbranche.',
            'Eine SEP w\u00e4re eine unternehmensspezifische St\u00e4rke, z.B. ein patentiertes Bohrverfahren.'
          ]
        },
        {
          id: 24, type: 'match', title: 'SWOT-Analyse: MUSKELFIT Fitnesscenter',
          q: 'Ordnen Sie die Aussagen den SWOT-Bereichen zu (S=St\u00e4rke, W=Schw\u00e4che, O=Opportunity/Chance, T=Threat/Gefahr).',
          pairs: [
            { l: 'Es besteht ein starker Trend zu Outdooraktivit\u00e4ten.', r: 'T' },
            { l: 'Fitnesscenter hat optimalen Standort.', r: 'S' },
            { l: 'Wir verf\u00fcgen \u00fcber eine gute Kostenstruktur.', r: 'S' },
            { l: 'Im Vergleich zur Konkurrenz haben wir eine schlechte Kommunikationspolitik.', r: 'W' },
            { l: 'Es gibt einen Trend zu Fitness / K\u00f6rperbewusstsein.', r: 'O' },
            { l: 'Krankenkassen streichen Beitr\u00e4ge f\u00fcr Sport-Abos.', r: 'T' }
          ],
          options: ['S', 'W', 'O', 'T'],
          tips: ['Intern = St\u00e4rken/Schw\u00e4chen; Extern = Chancen/Gefahren'],
          reveal: []
        },
        {
          id: 25, type: 'match', title: 'McKinsey: M oder W?',
          q: 'Ordnen Sie die Bewertungskriterien den Dimensionen Marktattraktivit\u00e4t (M) oder Wettbewerbsvorteil (W) zu.',
          pairs: [
            { l: 'Mengenentwicklung', r: 'M' },
            { l: 'Ressourcenpotenzial', r: 'W' },
            { l: 'Marktanteilsentwicklung', r: 'W' },
            { l: 'Marktwachstumspotenzial', r: 'M' },
            { l: 'Effizienz der Abwicklungsprozesse', r: 'W' },
            { l: 'Kundenverhalten', r: 'M' }
          ],
          options: ['M', 'W'],
          tips: ['M betrifft den Markt als Ganzes, W betrifft das eigene Unternehmen.'],
          reveal: []
        },
        {
          id: 26, type: 'text', title: 'McKinsey-Portfolio interpretieren',
          q: 'Was k\u00f6nnen wir \u00fcber die Gesch\u00e4ftseinheiten A, B und C der Firma Anastasas sagen, wenn A geringe Marktattraktivit\u00e4t und mittleren Wettbewerbsvorteil hat, B mittlere Marktattraktivit\u00e4t und mittleren Wettbewerbsvorteil, und C hohe Marktattraktivit\u00e4t und hohen Wettbewerbsvorteil?',
          keywords: ['investition', 'selektiv', 'absch\u00f6pf', 'wachstum'],
          tips: ['Oben rechts = investieren, Mitte = selektiv, unten links = absch\u00f6pfen/desinvestieren.'],
          reveal: [
            'A: Absch\u00f6pfen oder Desinvestition empfohlen.',
            'B: Selektive Strategie \u2013 in einzelne Bereiche investieren.',
            'C: Investitionsstrategie \u2013 Wachstum vorantreiben.'
          ]
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 5: Marketingziele (S.85-86)
    // ================================================================
    {
      id: 'ch5', num: 'Teil A \u2013 Kapitel 5', title: 'Marketingziele',
      exercises: [
        {
          id: 27, type: 'fill', title: 'Zielhierarchie',
          q: 'Ordnen Sie die Zielebenen in die richtige Reihenfolge (von oben nach unten):',
          template: '1. {0}, 2. {1}, 3. {2}, 4. {3}',
          blanks: [['Unternehmensziele'],['Marketingoberziele'],['Marketingzwischenziele'],['Marketingunterziele']],
          tips: ['Von der obersten Ebene (Unternehmen) bis zur untersten (Unterziele).'],
          reveal: []
        },
        {
          id: 28, type: 'mc', title: 'Zielarten',
          q: 'Was sind strategische Ziele?',
          options: [
            'Kurzfristige Ziele bis 1 Jahr',
            'Langfristige Ziele von 3-5 Jahren',
            'Mittelfristige Ziele von 2-3 Jahren',
            'Ziele ohne Zeitbezug'
          ],
          answer: 1,
          tips: ['Strategisch = langfristig, operativ = mittelfristig, taktisch = kurzfristig.'],
          reveal: []
        },
        {
          id: 29, type: 'text', title: '5-W-Formulierung (Image)',
          q: 'Formulieren Sie das folgende Marketingziel anhand der 5 W: \u00abDas Image bei den Jungen soll verbessert werden.\u00bb',
          keywords: ['was', 'wie viel', 'wem', 'wann', 'wo'],
          tips: [
            'Die 5 W: Was, Wie viel, Wem, Wann, Wo.',
            'Beispiel: Was: Image verbessern, Wie viel: um 15%, Wem: bei 18-25-J\u00e4hrigen, Wann: bis Ende 20xx, Wo: Deutschschweiz.'
          ],
          reveal: [
            'Was: Image verbessern',
            'Wie viel: z.B. Imagewert von 3.2 auf 4.0 steigern',
            'Wem: bei der Zielgruppe 18-25-J\u00e4hrige',
            'Wann: bis Ende des Gesch\u00e4ftsjahres',
            'Wo: in der Deutschschweiz'
          ]
        },
        {
          id: 30, type: 'text', title: '5-W-Formulierung (Marktanteile)',
          q: 'Formulieren Sie das folgende Marketingziel anhand der 5 W: \u00abWir d\u00fcrfen keine Marktanteile verlieren.\u00bb',
          keywords: ['was', 'wie viel', 'wem', 'wann', 'wo'],
          tips: ['Was genau? Welcher Marktanteil? Bis wann? Wo?'],
          reveal: [
            'Was: Marktanteil halten',
            'Wie viel: z.B. mindestens 15% Marktanteil',
            'Wem: bei den bestehenden Kunden in der Zielgruppe',
            'Wann: bis Ende 20xx',
            'Wo: in der Schweiz'
          ]
        },
        {
          id: 31, type: 'text', title: '5-W-Formulierung (Produktlancierung)',
          q: 'Formulieren Sie das folgende Marketingziel anhand der 5 W: \u00abDie Produktlancierung muss ein voller Erfolg werden.\u00bb',
          keywords: ['was', 'wie viel', 'wem', 'wann', 'wo'],
          tips: ['Definieren Sie, was \u00abErfolg\u00bb konkret bedeutet.'],
          reveal: [
            'Was: Erfolgreiche Produktlancierung (z.B. Absatzziel erreichen)',
            'Wie viel: z.B. 10\u2019000 St\u00fcck im ersten Quartal',
            'Wem: bei der Zielgruppe Frauen 25-45',
            'Wann: bis 31.03.20xx',
            'Wo: in der Deutschschweiz'
          ]
        },
        {
          id: 32, type: 'match', title: 'Zielhierarchie ordnen',
          q: 'Bringen Sie die folgenden Ziele in eine Zielhierarchie (1=oberste Ebene, 3=unterste).',
          pairs: [
            { l: 'Umsatz von Produkt A im Jahr 20xx in der Schweiz: CHF 3.2 Mio.', r: '1' },
            { l: 'Kosten von Produkt A im Jahr 20xx in der Schweiz: CHF 2.5 Mio.', r: '2' },
            { l: 'Rendite von Produkt A im Jahr 20xx in der Schweiz: 15%', r: '3' }
          ],
          options: ['1', '2', '3'],
          tips: ['Rendite = Gewinn/Umsatz. Was leitet sich woraus ab?'],
          reveal: [
            '1. Umsatz (Oberziel)',
            '2. Kosten (muss zum Umsatz passen)',
            '3. Rendite (ergibt sich aus Umsatz und Kosten)'
          ]
        },
        {
          id: 33, type: 'match', title: 'Zielbeziehungen',
          q: 'Welche Beziehung besteht zwischen folgenden Zielen? Annahmen: 1) Umsatz steigt \u2192 Gewinn steigt, 2) Preis steigt \u2192 Umsatz konstant, 3) Preis steigt \u2192 Kunden unzufrieden, 4) Zuschlagskalkulation.',
          pairs: [
            { l: 'Umsatz und Gewinn', r: 'Zielkongruenz' },
            { l: 'Kundenzufriedenheit und Preis', r: 'Zielkonflikt' },
            { l: 'Umsatz und Marge', r: 'Zielindifferenz' }
          ],
          options: ['Zielkonflikt', 'Zielkongruenz', 'Zielindifferenz'],
          tips: ['Zielkonflikt: Ziele widersprechen sich. Zielkongruenz: Ziele unterst\u00fctzen sich. Zielindifferenz: keine Beziehung.'],
          reveal: []
        },
        {
          id: 34, type: 'match', title: 'SMART-Formel',
          q: 'Welches Element fehlt in der jeweiligen Zielformulierung (S=spezifisch, M=messbar, A=attraktiv, R=realistisch, T=terminiert)?',
          pairs: [
            { l: 'Ich will in 2 Wochen 4 Kilo abnehmen.', r: 'T' },
            { l: 'Mein Konzept f\u00fcr die Umnutzung des Dachgeschosses liegt per 31.05., 9 Uhr zur Verabschiedung vor.', r: 'T' },
            { l: 'Bis Anfang n\u00e4chster Woche erarbeite ich eine Grossofferte f\u00fcr die Firma Alpa AG.', r: 'R' },
            { l: 'Bis 15. Dezember 20xx versenden wir die Weihnachtsgeschenke an Firmenkunden.', r: 'T' }
          ],
          options: ['S', 'M', 'A', 'R', 'T'],
          tips: ['S=spezifisch, M=messbar, A=attraktiv/akzeptiert, R=realistisch, T=terminiert'],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 6: Marketingstrategien (S.112-113)
    // ================================================================
    {
      id: 'ch6', num: 'Teil A \u2013 Kapitel 6', title: 'Marketingstrategien',
      exercises: [
        {
          id: 35, type: 'match', title: 'Ansoff-Matrix zuordnen',
          q: 'Um welche Wachstumsstrategie nach Ansoff handelt es sich?',
          pairs: [
            { l: 'Starbucks betreibt nicht nur Restaurants, sondern verkauft Kaffee in Superm\u00e4rkten.', r: 'Marktentwicklung' },
            { l: 'Lindt-Schokoladen treten mit grossem Aufwand in den amerikanischen Markt ein.', r: 'Marktentwicklung' },
            { l: 'Das Plattenlabel Virgin betreibt eine Fluglinie und stellt Cola her.', r: 'Diversifikation' },
            { l: 'Google \u00fcbernimmt YouTube f\u00fcr USD 1.6 Mrd.', r: 'Diversifikation' }
          ],
          options: ['Marktpenetration', 'Produkt-/Sortimentsentwicklung', 'Marktentwicklung', 'Diversifikation'],
          tips: ['Marktpenetration: gleicher Markt, gleiches Produkt. Marktentwicklung: neuer Markt. Produktentwicklung: neues Produkt. Diversifikation: neuer Markt + neues Produkt.'],
          reveal: []
        },
        {
          id: 36, type: 'text', title: 'Konkurrenzstrategie vs. Marktentwicklung',
          q: 'Beschreiben Sie, wie ein Unternehmen nach der Konkurrenzstrategie und nach der Marktentwicklungsstrategie nach K\u00fchn wachsen kann. Wie ver\u00e4ndern sich Marktvolumen und Marktanteil?',
          keywords: ['marktvolumen', 'marktanteil', 'konkurrenz', 'verdrangt', 'neu'],
          tips: ['Konkurrenzstrategie: im bestehenden Markt wachsen. Marktentwicklung: neue M\u00e4rkte erschliessen.'],
          reveal: [
            'Konkurrenzstrategie: Marktanteil steigt, Marktvolumen bleibt gleich \u2013 man w\u00e4chst auf Kosten der Konkurrenz.',
            'Marktentwicklungsstrategie: Marktvolumen steigt, weil neue K\u00e4ufer gewonnen werden \u2013 Marktanteil kann steigen oder gleich bleiben.'
          ]
        },
        {
          id: 37, type: 'text', title: 'Warum Diversifikation?',
          q: 'Warum gibt es Unternehmen, die eine Diversifikationsstrategie verfolgen, obwohl eine Marktpenetration gem\u00e4ss Ansoff viel weniger risikoreich ist?',
          keywords: ['risiko', 'wachstum', 's\u00e4ttigung', 'synergie', 'chance', 'markt'],
          tips: ['Denken Sie an ges\u00e4ttigte M\u00e4rkte, neue Chancen, Risikoverteilung.'],
          reveal: ['M\u00f6gliche Gr\u00fcnde: Markt ist ges\u00e4ttigt, neue Wachstumschancen in anderen Branchen, Risikostreuung, Synergien nutzen, Attraktivit\u00e4t neuer M\u00e4rkte.']
        },
        {
          id: 38, type: 'text', title: 'Joint Venture Risiko',
          q: 'Ein Schweizer Produzent von Werkzeugmaschinen geht mit einem chinesischen Partner ein Joint Venture ein. Der Partner hat zwar nicht das Know-how, aber sehr g\u00fcnstige Arbeitskr\u00e4fte. Worin besteht das gr\u00f6sste Risiko f\u00fcr die Schweizer Firma?',
          keywords: ['know-how', 'technologie', 'kopieren', 'wissen', 'konkurrenz'],
          tips: ['Was k\u00f6nnte der Partner mit dem gewonnenen Wissen tun?'],
          reveal: ['Das gr\u00f6sste Risiko ist der Know-how-Transfer: Der chinesische Partner k\u00f6nnte das erlernte technische Wissen nutzen, um eigene Produkte herzustellen und zum Konkurrenten zu werden.']
        },
        {
          id: 39, type: 'mc', title: 'Massenmarketing vs. Segmentierung',
          q: 'Unter welchen Bedingungen ist ein Massenmarketing erfolgversprechender als eine Segmentierung?',
          options: [
            'Wenn die Kundenbed\u00fcrfnisse sehr heterogen sind',
            'Wenn die Kundenbed\u00fcrfnisse sehr homogen sind und der Markt gross genug ist',
            'Wenn das Unternehmen viele Ressourcen hat',
            'Wenn der Markt ges\u00e4ttigt ist'
          ],
          answer: 1,
          tips: ['Bei homogenen Bed\u00fcrfnissen lohnt sich keine Differenzierung.'],
          reveal: []
        },
        {
          id: 40, type: 'text', title: 'Alter als Segmentierungskriterium',
          q: 'Nennen Sie drei M\u00e4rkte, in denen das \u00abAlter\u00bb ein sinnvolles Segmentierungskriterium darstellt. Begr\u00fcnden Sie Ihre Wahl.',
          keywords: ['alter', 'generation', 'lebensphase'],
          tips: ['Denken Sie an Branchen, wo das Alter die Bed\u00fcrfnisse stark beeinflusst.'],
          reveal: ['Beispiele: 1) Versicherungen (Lebensversicherung, Pensionskasse), 2) Medien/Unterhaltung (TikTok vs. Fernsehen), 3) Gesundheit/Pharma (Kindermedizin vs. Alterspflege).']
        },
        {
          id: 41, type: 'text', title: 'Positionierungsstrategien',
          q: 'Nennen Sie die vier Positionierungsstrategien und geben Sie jeweils ein Beispiel.',
          keywords: ['pr\u00e4ferenz', 'leistung', 'kommunikation', 'preis', 'me-too'],
          tips: ['Es gibt vier Strategien: Pr\u00e4ferenzstrategie mittels Leistungsprofilierung, mittels Kommunikationsprofilierung, Preis-Mengen-Strategie und Me-too-Strategie.'],
          reveal: [
            '1. Pr\u00e4ferenzstrategie mittels Leistungsprofilierung (z.B. Apple)',
            '2. Pr\u00e4ferenzstrategie mittels Kommunikationsprofilierung (z.B. Red Bull)',
            '3. Preis-Mengen-Strategie (z.B. Aldi, Lidl)',
            '4. Me-too-Strategie (z.B. No-Name-Produkte)'
          ]
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 7: Marketingmix (S.138)
    // ================================================================
    {
      id: 'ch7', num: 'Teil A \u2013 Kapitel 7', title: 'Marketingmix',
      exercises: [
        {
          id: 42, type: 'text', title: 'Begriffe Marketingmix',
          q: 'Erkl\u00e4ren Sie die Begriffe \u00abMarketingmix\u00bb, \u00abSubmix\u00bb und \u00abTeilmix\u00bb.',
          keywords: ['instrument', 'kombination', '4p', 'product', 'price', 'place', 'promotion'],
          tips: ['Marketingmix = Gesamtheit, Submix = eines der 4P, Teilmix = Unterkategorie eines Submix.'],
          reveal: [
            'Marketingmix: Kombination aller Marketinginstrumente (4P).',
            'Submix: Eines der 4P (z.B. Produktmix).',
            'Teilmix: Unterkategorie eines Submix (z.B. Sortimentspolitik als Teil des Produktmix).'
          ]
        },
        {
          id: 43, type: 'text', title: 'Produktlebenszyklus: Telegramm',
          q: 'Der Telegrammdienst der Schweizer Post wurde 1999 eingestellt. Zwischen 1870 und 1900 wurden j\u00e4hrlich 1.7 Mio. Telegramme gesendet, Spitzenwert 1919: 8 Mio. Beschreiben Sie den Produktlebenszyklus des Telegramms.',
          keywords: ['einf\u00fchrung', 'wachstum', 'reife', 's\u00e4ttigung', 'degeneration', 'r\u00fcckgang'],
          tips: ['Zeichnen Sie gedanklich die klassische PLZ-Kurve.'],
          reveal: [
            'Einf\u00fchrung: ab 1852',
            'Wachstum: 1870-1919 (starkes Wachstum auf 8 Mio.)',
            'Reife/S\u00e4ttigung: nach 1919 (Spitzenwert nie mehr erreicht)',
            'Degeneration: Verdr\u00e4ngung durch Telefon, Telex, Fax, E-Mail',
            'Ende: 1999 Einstellung des Dienstes'
          ]
        },
        {
          id: 44, type: 'text', title: 'Internationaler Marketingmix: McDonald\'s',
          q: 'Welche Elemente des internationalen Marketingmix der Fast-Food-Kette McDonald\'s sind standardisiert und welche differenziert?',
          keywords: ['standard', 'differenz', 'preis', 'produkt', 'marke', 'werbung'],
          tips: ['Die Marke ist weltweit gleich, aber das Sortiment variiert nach Land.'],
          reveal: [
            'Standardisiert: Marke, Logo, grundlegendes Konzept, Big Mac.',
            'Etwas standardisiert bis gemischt: Werbung (global + lokal).',
            'Etwas differenziert: Produktsortiment (McRaclette in der Schweiz, McFalafel etc.).',
            'Differenziert: Preise (nach Kaufkraft des Landes).'
          ]
        },
        {
          id: 45, type: 'mc', title: 'Marketing in der Politik',
          q: 'Ist es legitim, auch in der Politik von Marketing zu sprechen?',
          options: [
            'Nein, Marketing ist nur f\u00fcr Produkte',
            'Ja, politische Parteien nutzen Marketingkonzepte f\u00fcr Wahlkampf und Positionierung',
            'Nur bei Wahlkampf',
            'Nein, Politik hat nichts mit Marketing zu tun'
          ],
          answer: 1,
          tips: ['Denken Sie an Wahlkampf, Parteiimage, Positionierung.'],
          reveal: ['Ja \u2013 Parteien nutzen Marketinginstrumente: Marktforschung, Zielgruppenansprache, Positionierung, Kommunikationsmix.']
        },
        {
          id: 46, type: 'match', title: 'Submix zuordnen',
          q: 'Ordnen Sie die Instrumente dem richtigen Submix zu.',
          pairs: [
            { l: 'Sortimentspolitik', r: 'Product' },
            { l: 'Rabattgew\u00e4hrung', r: 'Price' },
            { l: 'Wahl des Vertriebskanals', r: 'Place' },
            { l: 'Werbung und PR', r: 'Promotion' }
          ],
          options: ['Product', 'Price', 'Place', 'Promotion'],
          tips: [],
          reveal: []
        },
        {
          id: 47, type: 'mc', title: 'Standard-Dominanz-Modell',
          q: 'Was sind dominante Instrumente im Standard-Dominanz-Modell?',
          options: [
            'Instrumente mit geringem Einfluss',
            'Instrumente mit hoher Absatzbedeutung und grossem Freiheitsgrad',
            'Instrumente mit hoher Absatzbedeutung und geringem Freiheitsgrad',
            'Instrumente mit geringer Absatzbedeutung und geringem Freiheitsgrad'
          ],
          answer: 1,
          tips: ['Dominant = wichtig UND der Konkurrenz \u00fcberlegen (grosser Freiheitsgrad).'],
          reveal: ['Dominante Instrumente sind wichtig f\u00fcr den Absatz UND bieten Freiheitsgrade zur Differenzierung gegen\u00fcber der Konkurrenz.']
        },
        {
          id: 48, type: 'tf', title: 'Konsumg\u00fctermarketing',
          statements: [
            { s: 'Beim Konsumg\u00fctermarketing hat sich die Formel mit den 4 P (Product, Price, Place, Promotion) gut bew\u00e4hrt.', c: true, feedback: 'Richtig. Die 4P sind das klassische Modell f\u00fcr Konsumg\u00fctermarketing.' },
            { s: 'Bei personalintensiven Dienstleistungen reichen die 4P aus.', c: false, feedback: 'Falsch. Bei Dienstleistungen kommen 3 zus\u00e4tzliche P hinzu: People, Process, Physical Tangibles.' },
            { s: 'Investitionsg\u00fctermarketing besteht aus wenigen K\u00e4ufern mit enger Beziehung.', c: true, feedback: 'Richtig. Wenige K\u00e4ufer, enge Beziehung, Kaufentscheid durch mehrere Personen (Buying Center).' }
          ],
          tips: [],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 8: Produktmix I: das Produkt (Product) (S.150)
    // ================================================================
    {
      id: 'ch8', num: 'Teil A \u2013 Kapitel 8', title: 'Produktmix I: das Produkt (Product)',
      exercises: [
        {
          id: 49, type: 'match', title: 'Kernprodukt, formales oder erweitertes Produkt?',
          q: 'Bei einer Stadtrundfahrt: Handelt es sich um das Kernprodukt, das formale Produkt oder das erweiterte Produkt?',
          pairs: [
            { l: 'Die Touristen erhalten einen 20%-Rabattcoupon f\u00fcr ein Musical am Broadway.', r: 'Erweitertes Produkt' },
            { l: 'Die Tageskarte erlaubt, bei jeder Haltestelle auszusteigen. Busse verkehren im Halbstundentakt.', r: 'Formales Produkt' },
            { l: 'Der Bus stoppt, sodass die Touristen die Freiheitsstatue fotografieren k\u00f6nnen.', r: 'Kernprodukt' }
          ],
          options: ['Kernprodukt', 'Formales Produkt', 'Erweitertes Produkt'],
          tips: ['Kernprodukt = Grundnutzen, formales Produkt = konkretes Angebot, erweitertes Produkt = Zusatzleistungen.'],
          reveal: []
        },
        {
          id: 50, type: 'text', title: 'Convenience vs. Shopping vs. Spezialgut',
          q: 'Warum ist die Unterscheidung zwischen Convenience-G\u00fctern, Shopping-G\u00fctern und Spezialgut oft sinnvoll?',
          keywords: ['kauf', 'verhalten', 'vertrieb', 'preis', 'aufwand', 'involvement'],
          tips: ['Denken Sie an das unterschiedliche Kaufverhalten der Konsumenten.'],
          reveal: [
            'Die Unterscheidung hilft bei der Wahl der Marketingstrategie:',
            'Convenience: geringer Aufwand, breite Distribution',
            'Shopping: Vergleich, selektive Distribution',
            'Spezialgut: hohes Involvement, exklusive Distribution'
          ]
        },
        {
          id: 51, type: 'text', title: 'Sortimentsplanung',
          q: 'Herr Maitek m\u00f6chte in einem Skigebiet einen Laden er\u00f6ffnen. Beschreiben Sie m\u00f6gliche Sortimente entlang der Dimensionen Breite und Tiefe.',
          keywords: ['breit', 'tief', 'sortiment', 'flach', 'schmal'],
          tips: ['Breite = Anzahl Produktlinien, Tiefe = Anzahl Varianten pro Linie.'],
          reveal: [
            'Schmales/tiefes Sortiment: z.B. nur regionale Spezialit\u00e4ten in vielen Varianten.',
            'Breites/flaches Sortiment: Postkarten, Souvenirs, B\u00fccher, Snacks \u2013 wenige Varianten pro Kategorie.',
            'Empfehlung: H\u00e4ngt von Zielgruppe und Standort ab.'
          ]
        },
        {
          id: 52, type: 'fill', title: 'Sortimentsdimensionen',
          q: 'Erg\u00e4nzen Sie die vier Dimensionen der Sortimentspolitik:',
          template: '1. Die {0} (Anzahl Produktlinien), 2. Die {1} (Anzahl Produkttypen), 3. Die {2} (Anzahl Varianten pro Produkttyp), 4. Die {3} (Beziehung zwischen den Artikeln)',
          blanks: [['Breite'],['L\u00e4nge'],['Tiefe'],['Geschlossenheit']],
          tips: ['Denken Sie an Breite, L\u00e4nge, Tiefe, Geschlossenheit.'],
          reveal: []
        },
        {
          id: 53, type: 'mc', title: 'ABC-Analyse',
          q: 'Wof\u00fcr wird die ABC-Analyse im Sortimentsmanagement eingesetzt?',
          options: [
            'Zur Preisfestlegung',
            'Zur Gruppierung von Produkten nach Umsatz, Deckungsbeitrag oder Rentabilit\u00e4t',
            'Zur Bestimmung der Marktgr\u00f6sse',
            'Zur Wettbewerbsanalyse'
          ],
          answer: 1,
          tips: ['ABC = Klassifizierung nach Wichtigkeit.'],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 9: Produktmix II: die Produktentwicklung (S.167-168)
    // ================================================================
    {
      id: 'ch9', num: 'Teil A \u2013 Kapitel 9', title: 'Produktmix II: die Produktentwicklung',
      exercises: [
        {
          id: 54, type: 'calc', title: 'Break-even Produktinnovation',
          q: 'Ein Unternehmen entwickelt drei Produktideen bis zur Beta-Test-Phase. Pro Idee fallen CHF 18\u2019000 an. Das vielversprechendste wird lanciert mit Budget CHF 90\u2019000. Verkaufspreis CHF 2\u2019400, variable Kosten CHF 1\u2019200.',
          rows: [
            { label: 'Gesamtkosten Innovation', val: '3 \u00d7 18\u2019000 + 90\u2019000' },
            { label: 'Deckungsbeitrag/St\u00fcck', val: '2\u2019400 \u2212 1\u2019200' }
          ],
          inputs: [
            { label: 'Gesamtkosten (CHF)', answer: ['144000', '144\'000', '144 000'], tolerance: 0 },
            { label: 'DB pro St\u00fcck (CHF)', answer: ['1200', '1\'200', '1 200'], tolerance: 0 },
            { label: 'Break-even (St\u00fcck)', answer: ['120'], tolerance: 0 }
          ],
          tips: [
            'Gesamtkosten = Entwicklungskosten aller Ideen + Lancierungsbudget',
            'Break-even = Gesamtkosten / DB pro St\u00fcck'
          ],
          reveal: [
            'Gesamtkosten: 3 \u00d7 18\u2019000 + 90\u2019000 = 144\u2019000',
            'DB/St\u00fcck: 2\u2019400 \u2212 1\u2019200 = 1\u2019200',
            'Break-even: 144\u2019000 / 1\u2019200 = 120 St\u00fcck'
          ]
        },
        {
          id: 55, type: 'text', title: 'Testmarkt',
          q: 'A) Was versteht man unter einem Testmarkt? B) Nennen Sie zwei Nachteile von Testm\u00e4rkten.',
          keywords: ['region', 'begrenzt', 'test', 'kosten', 'konkurrenz', 'zeit', 'geheim'],
          tips: ['Ein Testmarkt ist ein geographisch begrenztes Gebiet f\u00fcr einen Markttest.'],
          reveal: [
            'A) Ein Testmarkt ist ein geographisch begrenztes Gebiet, in dem ein Produkt vor der eigentlichen Markteinf\u00fchrung getestet wird.',
            'B) Nachteile: 1) Kosten und Zeitaufwand, 2) Konkurrenz kann die Strategie beobachten und kopieren.'
          ]
        },
        {
          id: 56, type: 'text', title: 'Brainstorming vs. Brainwriting',
          q: 'A) Was ist der Unterschied zwischen Brainstorming und Brainwriting? B) Nennen Sie zwei Vorteile des Brainwritings.',
          keywords: ['m\u00fcndlich', 'schriftlich', 'anonym', 'leise', 'gruppe'],
          tips: ['Brainstorming = m\u00fcndlich, Brainwriting = schriftlich.'],
          reveal: [
            'A) Brainstorming: m\u00fcndliche Ideensammlung in der Gruppe. Brainwriting: schriftliche Ideensammlung.',
            'B) Vorteile Brainwriting: 1) Alle kommen zu Wort (nicht nur die Lauten), 2) Keine gegenseitige Beeinflussung, mehr Kreativit\u00e4t.'
          ]
        },
        {
          id: 57, type: 'match', title: 'Produktentwicklungsphasen',
          q: 'Ordnen Sie die Begriffe den sechs Phasen der Produktentwicklung zu.',
          pairs: [
            { l: 'Brainstorming', r: 'Ideengewinnung' },
            { l: 'Eliminierung von schlechten Ideen', r: 'Ideenauswahl' },
            { l: 'Target Costing', r: 'Wirtschaftlichkeitsanalyse' },
            { l: 'Marktbeobachtung', r: 'Einf\u00fchrung' },
            { l: 'Mindmapping', r: 'Ideengewinnung' },
            { l: 'Testmarkt', r: 'Beta- und Markttest' }
          ],
          options: ['Ideengewinnung', 'Ideenauswahl', 'Konzeptentwicklung und -test', 'Wirtschaftlichkeitsanalyse', 'Beta- und Markttest', 'Einf\u00fchrung'],
          tips: [],
          reveal: []
        },
        {
          id: 58, type: 'mc', title: 'Diffusionsprozess',
          q: 'Welche Gruppe von Adoptoren \u00fcbernimmt eine Innovation als Erstes?',
          options: [
            'Fr\u00fche Mehrheit',
            'Innovatoren',
            'Fr\u00fche Adopter',
            'Sp\u00e4te Mehrheit'
          ],
          answer: 1,
          tips: ['Der Diffusionsprozess beginnt mit den Innovatoren.'],
          reveal: ['Reihenfolge: 1. Innovatoren, 2. Fr\u00fche Adopter, 3. Fr\u00fche Mehrheit, 4. Sp\u00e4te Mehrheit, 5. Nachz\u00fcgler.']
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 10: Produktmix III: Verpackung (S.178-179)
    // ================================================================
    {
      id: 'ch10', num: 'Teil A \u2013 Kapitel 10', title: 'Produktmix III: Verpackung',
      exercises: [
        {
          id: 59, type: 'check', title: 'Funktionen der Verpackung',
          q: 'Welche der angegebenen Begriffe ist eine Funktion der Verpackung?',
          statements: [
            { s: 'Information', c: true },
            { s: 'Produktdifferenzierung', c: true },
            { s: 'Dosierfunktion', c: true },
            { s: 'Kosteng\u00fcnstig', c: false },
            { s: 'Stapelbarkeit', c: true },
            { s: 'Verkaufsfunktion', c: true }
          ],
          tips: ['\u00abKosteng\u00fcnstig\u00bb ist eine Anforderung, keine Funktion.'],
          reveal: []
        },
        {
          id: 60, type: 'text', title: '\u00d6kologische Anforderungen',
          q: 'Unternehmen versuchen heute, auch bei der Verpackung \u00f6kologische Anforderungen zu erf\u00fcllen. Nennen Sie zwei Massnahmen.',
          keywords: ['\u00f6ko', 'recyc', 'material', 'reduz', 'nachhaltig', 'bio', 'abbau'],
          tips: ['Denken Sie an Materialwahl, Recycling, Reduktion.'],
          reveal: [
            '1. Verwendung von recycelbaren oder biologisch abbaubaren Materialien.',
            '2. Reduktion des Verpackungsmaterials (weniger Plastik, d\u00fcnnere Verpackungen).'
          ]
        },
        {
          id: 61, type: 'mc', title: 'EUL',
          q: 'Was sind Effiziente Ladeeinheiten (EUL)?',
          options: [
            'Einzelne Verkaufsverpackungen',
            'Zusammenfassung von Einzeleinheiten zu gr\u00f6sseren Einheiten f\u00fcr die Logistik',
            'Recycling-Beh\u00e4lter',
            'Paletten f\u00fcr den Lufttransport'
          ],
          answer: 1,
          tips: ['EUL dienen der effizienten Logistik.'],
          reveal: []
        },
        {
          id: 62, type: 'match', title: 'Verpackungsarten',
          q: 'Ordnen Sie die Verpackungsarten richtig zu.',
          pairs: [
            { l: 'Steht in direktem Kontakt mit dem Produkt', r: 'Prim\u00e4rverpackung' },
            { l: 'Dient als Informationstr\u00e4ger und Werbemittel', r: 'Sekund\u00e4rverpackung' },
            { l: 'Dient als Lager- und Transporthilfsmittel', r: 'Terti\u00e4rverpackung' }
          ],
          options: ['Prim\u00e4rverpackung', 'Sekund\u00e4rverpackung', 'Terti\u00e4rverpackung'],
          tips: [],
          reveal: []
        },
        {
          id: 63, type: 'mc', title: 'GS1-Strichcode',
          q: 'Was ist der Zweck des GS1-Strichcodes auf der Verpackung?',
          options: [
            'Dekoration',
            'Identifikation des Produkts und Erm\u00f6glichung der automatisierten Datenerfassung',
            'Angabe des Preises',
            'Hinweis auf das Herkunftsland'
          ],
          answer: 1,
          tips: ['GS1 = Global Standards One.'],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 11: Preismix (Price) (S.195-196)
    // ================================================================
    {
      id: 'ch11', num: 'Teil A \u2013 Kapitel 11', title: 'Preismix (Price)',
      exercises: [
        {
          id: 64, type: 'calc', title: 'Deckungsbeitrag bei Rabattvarianten',
          q: 'Ein Verkaufsleiter analysiert Rabattvarianten. Richtpreis CHF 100, variable Kosten CHF 50.',
          rows: [
            { label: 'Ausgangssituation', val: 'Rabatt 5%, Netto CHF 95, Absatz 1000' },
            { label: 'Variante 1', val: 'Rabatt 0%, Netto CHF 100, Absatz 800' },
            { label: 'Variante 2', val: 'Rabatt 10%, Netto CHF 90, Absatz 1100' },
            { label: 'Variante 3', val: 'Rabatt 20%, Netto CHF 80, Absatz 1400' }
          ],
          inputs: [
            { label: 'DB gesamt Ausgangssituation', answer: ['45000', '45\'000', '45 000'], tolerance: 0 },
            { label: 'DB gesamt Variante 1', answer: ['40000', '40\'000', '40 000'], tolerance: 0 },
            { label: 'DB gesamt Variante 2', answer: ['44000', '44\'000', '44 000'], tolerance: 0 },
            { label: 'DB gesamt Variante 3', answer: ['42000', '42\'000', '42 000'], tolerance: 0 }
          ],
          tips: ['DB pro St\u00fcck = Netto \u2212 variable Kosten. DB gesamt = DB/St\u00fcck \u00d7 Absatz.'],
          reveal: [
            'Ausgangssituation: (95-50) \u00d7 1000 = 45\u2019000',
            'Variante 1: (100-50) \u00d7 800 = 40\u2019000',
            'Variante 2: (90-50) \u00d7 1100 = 44\u2019000',
            'Variante 3: (80-50) \u00d7 1400 = 42\u2019000',
            'Die Ausgangssituation liefert den h\u00f6chsten DB!'
          ]
        },
        {
          id: 65, type: 'mc', title: 'Rabattpolitik',
          q: 'Welche M\u00f6glichkeiten bestehen, um Neukunden zu gewinnen, ohne Bestandskunden durch Rabatte zu ver\u00e4rgern?',
          options: [
            'Allen den gleichen Rabatt geben',
            'Differenzierte Preise, Erstkundenrabatt, Mengenrabatt, Bundle-Angebote',
            'Preise f\u00fcr alle erh\u00f6hen',
            'Keine Rabatte geben'
          ],
          answer: 1,
          tips: [],
          reveal: []
        },
        {
          id: 66, type: 'mc', title: 'Preiselastizit\u00e4t',
          q: 'Eine Ferienwohnung in Davos: Hauptsaison CHF 1\u2019700/Woche (Auslastung 100%), Nebensaison CHF 1\u2019200/Woche (Auslastung 30%). Handelt es sich um eine positive Preiselastizit\u00e4t?',
          options: [
            'Ja, positive Preiselastizit\u00e4t',
            'Nein, die Nachfrage steigt trotz h\u00f6herem Preis \u2013 Sondersituation',
            'Es gibt keine Preiselastizit\u00e4t in der Hotellerie',
            'Kann nicht beurteilt werden'
          ],
          answer: 1,
          tips: ['Normalerweise: h\u00f6herer Preis = weniger Nachfrage.'],
          reveal: ['Nein, keine \u00abpositive Preiselastizit\u00e4t\u00bb im klassischen Sinne. Die hohe Nachfrage in der Hauptsaison trotz h\u00f6herem Preis ist durch saisonale Faktoren bedingt (Weihnachten, Skiferien), nicht durch den Preis.']
        },
        {
          id: 67, type: 'mc', title: 'Submix-Zusammenhang',
          q: 'Im Kapitel Preismix wird das Rabattsystem f\u00fcr BMW-H\u00e4ndler beschrieben. Obwohl es sich um den Submix Preis handelt, wird mindestens ein anderer Submix stark tangiert. Welcher?',
          options: [
            'Product',
            'Place (Distribution)',
            'Promotion',
            'Alle drei'
          ],
          answer: 1,
          tips: ['Rabatte f\u00fcr H\u00e4ndler beeinflussen die Vertriebsstruktur.'],
          reveal: ['Der Submix Place (Distribution) wird tangiert \u2013 Rabatte beeinflussen die Attraktivit\u00e4t des Vertriebskanals f\u00fcr H\u00e4ndler.']
        },
        {
          id: 68, type: 'tf', title: 'Preisgesetz und Regeln',
          statements: [
            { s: 'In der Schweiz regelt das Preisgesetz (PG), welche Preise erlaubt und welche verboten sind.', c: true, feedback: 'Richtig. Das Preisgesetz sch\u00fctzt Konsumenten vor \u00fcberh\u00f6hten Preisen.' },
            { s: 'Die Bundesverfassung verlangt, dass Unternehmen wie die Migros in allen Kantonen f\u00fcr das gleiche Produkt denselben Preis verlangen.', c: false, feedback: 'Falsch. Es gibt keine solche Pflicht \u2013 regionale Preisunterschiede sind erlaubt.' },
            { s: 'In der Schweiz darf man grunds\u00e4tzlich Produkte unter den eigenen Kosten verkaufen.', c: true, feedback: 'Grunds\u00e4tzlich ja, ausser es handelt sich um Missbrauch einer marktbeherrschenden Stellung.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 69, type: 'text', title: 'Preisdifferenzierung im Caf\u00e9',
          q: 'Sie er\u00f6ffnen ein Caf\u00e9 in der Z\u00fcrcher Innenstadt. Nennen Sie drei M\u00f6glichkeiten zur Preisdifferenzierung mit konkreten Beispielen.',
          keywords: ['zeit', 'happy', 'student', 'menge', 'region', 'kanal'],
          tips: ['Preisdifferenzierung: nach Zeit, Kundengruppe, Menge, Ort, Kanal.'],
          reveal: [
            '1. Zeitliche Differenzierung: Happy Hour am Nachmittag mit g\u00fcnstigeren Preisen.',
            '2. Pers\u00f6nliche Differenzierung: Studenten-/Seniorenrabatt.',
            '3. Mengendifferenzierung: \u00abKaffee-Abo\u00bb \u2013 10 Kaffees zum Preis von 8.'
          ]
        },
        {
          id: 70, type: 'mc', title: 'Preisbestimmung mit den 4 K',
          q: 'Die 4 K der Preisbestimmung sind:',
          options: [
            'Kosten, Kunden, Konkurrenz, Kapital',
            'Kosten, Konkurrenz, Konsumentenzahlungsbereitschaft, Kapazit\u00e4t',
            'Kaufkraft, Kosten, Konkurrenz, Kontrolle',
            'Kommunikation, Kosten, Kunden, Konkurrenz'
          ],
          answer: 1,
          tips: ['Die 4 K: Kosten, Konkurrenz, Konsumenten(zahlungsbereitschaft), Kapazit\u00e4t.'],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 12: Distributionsmix (Place) (S.203)
    // ================================================================
    {
      id: 'ch12', num: 'Teil A \u2013 Kapitel 12', title: 'Distributionsmix (Place)',
      exercises: [
        {
          id: 71, type: 'tf', title: 'Zielkonflikt Reichhaltigkeit/Reichweite',
          statements: [
            { s: 'Bei traditionellen Kan\u00e4len besteht ein Zielkonflikt zwischen Reichhaltigkeit und Reichweite.', c: true, feedback: 'Richtig. E-Commerce l\u00f6st diesen Konflikt teilweise auf.' },
            { s: 'E-Government-L\u00f6sungen haben denselben Zielkonflikt.', c: false, feedback: 'Nein \u2013 E-Government kann beides bieten: breite Reichweite und detaillierte Informationen.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 72, type: 'text', title: 'Fixkosten-Dilemma',
          q: 'Worin besteht das typische Dilemma zwischen Fixkosten und variablen Kosten bei der Gestaltung des Vertriebssystems?',
          keywords: ['fix', 'variabel', 'eigen', 'fremd', 'risiko', 'kontrolle'],
          tips: ['Eigener Vertrieb = hohe Fixkosten, aber Kontrolle. Fremder Vertrieb = variable Kosten, aber weniger Kontrolle.'],
          reveal: [
            'Eigener Vertrieb (z.B. eigene Filialen): Hohe Fixkosten, aber volle Kontrolle \u00fcber den Verkaufsprozess.',
            'Fremder Vertrieb (z.B. H\u00e4ndler): Geringere Fixkosten (v.a. variable Kosten/Provisionen), aber weniger Kontrolle \u00fcber Markenauftritt und Kundenerlebnis.'
          ]
        },
        {
          id: 73, type: 'mc', title: 'B2B E-Commerce',
          q: 'Warum verkaufen f\u00fcnf der gr\u00f6ssten zehn B2B-E-Commerce-Plattformen der Schweiz B\u00fcromaterialien?',
          options: [
            'Weil B\u00fcromaterialien teuer sind',
            'Weil B\u00fcromaterialien standardisiert, regelm\u00e4ssig bestellt und preissensibel sind',
            'Weil es keine Alternativen gibt',
            'Weil B\u00fcromaterialien emotional gekauft werden'
          ],
          answer: 1,
          tips: ['E-Commerce eignet sich besonders f\u00fcr standardisierte, regelm\u00e4ssig bestellte Produkte.'],
          reveal: []
        },
        {
          id: 74, type: 'match', title: 'Vertriebssystem-Kriterien',
          q: 'Ordnen Sie die Kriterien f\u00fcr die Wahl des Vertriebssystems richtig zu.',
          pairs: [
            { l: 'Wie gut erf\u00fcllt das System die Vertriebsaufgaben?', r: 'Funktionserf\u00fcllung' },
            { l: 'Wie breit ist das Produkt erh\u00e4ltlich?', r: 'Distributionsgrad' },
            { l: 'Kann das System mitwachsen?', r: 'Entwicklungsm\u00f6glichkeit' },
            { l: 'Wie stark kann man den Vertrieb steuern?', r: 'Beeinflussbarkeit' }
          ],
          options: ['Funktionserf\u00fcllung', 'Distributionsgrad', 'Entwicklungsm\u00f6glichkeit', 'Beeinflussbarkeit'],
          tips: [],
          reveal: []
        },
        {
          id: 75, type: 'text', title: 'Minicase: Moonshine E-Commerce',
          q: 'Ein Unternehmer l\u00e4sst seine Website bei Moonshine betreiben. Als privater Kunde m\u00f6chte er mehr Speicher f\u00fcr seine E-Mails. Der Callcenter-Mitarbeiter sagt, das sei nicht m\u00f6glich. Welche Problematik ergibt sich in der Distribution?',
          keywords: ['gesch\u00e4ft', 'privat', 'trennung', 'service', 'zufrieden', 'callcenter'],
          tips: ['Was passiert, wenn Gesch\u00e4fts- und Privatkundenbetreuung nicht koordiniert sind?'],
          reveal: ['Die Problematik: Fehlende Koordination zwischen Gesch\u00e4fts- und Privatkunden-Service. Der Callcenter-Mitarbeiter h\u00e4tte erkennen m\u00fcssen, dass der Kunde auch Gesch\u00e4ftskunde ist, und flexibel reagieren sollen.']
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 13: Kommunikationsmix (Promotion) (S.210-211)
    // ================================================================
    {
      id: 'ch13', num: 'Teil A \u2013 Kapitel 13', title: 'Kommunikationsmix (Promotion)',
      exercises: [
        {
          id: 76, type: 'text', title: 'Kommunikationsinstrumente nach Reichweite',
          q: 'Listen Sie die sechs Kommunikationsinstrumente Online-Kommunikation, pers\u00f6nlicher Verkauf, Direktmarketing, Werbung, PR und Verkaufsf\u00f6rderung in der Reihenfolge ihrer Reichweite auf.',
          keywords: ['werbung', 'pr', 'online', 'verkauf', 'direkt', 'f\u00f6rderung'],
          tips: ['Welches Instrument erreicht die meisten Menschen auf einmal?'],
          reveal: [
            '1. Online-Kommunikation (potenziell unbegrenzt)',
            '2. Werbung (Massenmedien)',
            '3. PR (breite \u00d6ffentlichkeit)',
            '4. Verkaufsf\u00f6rderung (punktuell breit)',
            '5. Direktmarketing (zielgerichtet)',
            '6. Pers\u00f6nlicher Verkauf (1:1)'
          ]
        },
        {
          id: 77, type: 'match', title: 'Medientypen',
          q: 'Ordnen Sie die Beispiele den Medientypen zu.',
          pairs: [
            { l: 'Kundenbewertung auf Google', r: 'Earned' },
            { l: 'Eigene Website', r: 'Owned' },
            { l: 'Facebook-Post eines Nutzers \u00fcber die Marke', r: 'Shared' },
            { l: 'Bannerwerbung auf 20min.ch', r: 'Paid' }
          ],
          options: ['Paid', 'Owned', 'Earned', 'Shared'],
          tips: [],
          reveal: []
        },
        {
          id: 78, type: 'text', title: 'Push vs. Pull',
          q: 'Der Haustierzubeh\u00f6rh\u00e4ndler \u00abNager & Co.\u00bb betreibt eine eigene Website mit informativen Rubriken und nutzt SEO mit regionalen Keywords. Handelt es sich um eine Pull- oder eine Push-Strategie?',
          keywords: ['pull', 'kunde', 'sucht', 'findet', 'inhalt', 'seo'],
          tips: ['Pull: Kunden kommen zum Anbieter. Push: Anbieter dr\u00e4ngt zum Kunden.'],
          reveal: ['Pull-Strategie: Der Kunde sucht aktiv nach Informationen und findet das Unternehmen \u00fcber SEO. Die Website zieht Kunden an, statt sie zu \u00abpushen\u00bb.']
        },
        {
          id: 79, type: 'tf', title: 'Online vs. Offline Kommunikation',
          statements: [
            { s: 'Offline-Kommunikationsinstrumente umfassen Werbung, Verkaufsf\u00f6rderung, pers\u00f6nlichen Verkauf, Direktmarketing und PR.', c: true, feedback: 'Richtig \u2013 das sind die klassischen Offline-Instrumente.' },
            { s: 'Influencer Marketing geh\u00f6rt zu den Offline-Instrumenten.', c: false, feedback: 'Falsch \u2013 Influencer Marketing ist ein Online-Kommunikationsinstrument.' },
            { s: 'Bei der Push-Strategie folgt der Kommunikationsfluss dem Warenfluss.', c: true, feedback: 'Richtig: Produzent \u2192 Handel \u2192 Endkonsument.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 80, type: 'text', title: 'Vor- und Nachteile Medientypen',
          q: 'Nennen Sie je einen Vorteil und einen Nachteil von Paid, Owned, Earned und Shared Media.',
          keywords: ['kontrolle', 'kosten', 'glaubw\u00fcrdig', 'reichweite', 'viral', 'negativ'],
          tips: ['Paid: Kontrolle vs. Kosten. Owned: volle Kontrolle vs. begrenzte Reichweite. Earned: Glaubw\u00fcrdigkeit vs. kein Einfluss. Shared: Viralit\u00e4t vs. negativer Content m\u00f6glich.'],
          reveal: [
            'Paid: + kontrollierbar, \u2013 kostenintensiv',
            'Owned: + volle Kontrolle, \u2013 begrenzte Reichweite',
            'Earned: + hohe Glaubw\u00fcrdigkeit, \u2013 kein direkter Einfluss',
            'Shared: + Viral-Potenzial, \u2013 auch negative Inhalte m\u00f6glich'
          ]
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 14: Marketingbudget und -kontrolle (S.227)
    // ================================================================
    {
      id: 'ch14', num: 'Teil A \u2013 Kapitel 14', title: 'Marketingbudget und -kontrolle',
      exercises: [
        {
          id: 81, type: 'text', title: 'Top-down vs. Bottom-up',
          q: 'Was macht in der Praxis Sinn: eine reine Top-down-Budgetierung, eine reine Bottom-up-Budgetierung oder eine Kombination davon?',
          keywords: ['kombination', 'gegenstrom', 'top', 'bottom', 'realistisch', 'praxis'],
          tips: ['Reine Top-down ignoriert operative Realit\u00e4t. Reine Bottom-up kann die strategischen Ziele verfehlen.'],
          reveal: ['In der Praxis ist eine Kombination (Gegenstromverfahren) am sinnvollsten: Top-down gibt den strategischen Rahmen vor, Bottom-up sorgt f\u00fcr realistische Sch\u00e4tzungen aus der operativen Ebene.']
        },
        {
          id: 82, type: 'calc', title: 'Budgetentscheid: Werbekampagne',
          q: 'F\u00fcr eine Werbekampagne werden zwei Varianten ausgearbeitet:',
          rows: [
            { label: 'Variante 1', val: 'Investition CHF 300\u2019000, Zusatz-DB CHF 440\u2019000' },
            { label: 'Variante 2', val: 'Investition CHF 500\u2019000, Zusatz-DB CHF 680\u2019000' }
          ],
          inputs: [
            { label: 'Netto-DB Variante 1 (CHF)', answer: ['140000', '140\'000', '140 000'], tolerance: 0 },
            { label: 'Netto-DB Variante 2 (CHF)', answer: ['180000', '180\'000', '180 000'], tolerance: 0 }
          ],
          tips: ['Netto-DB = Zusatz-DB \u2212 Investition'],
          reveal: [
            'Variante 1: 440\u2019000 \u2212 300\u2019000 = 140\u2019000',
            'Variante 2: 680\u2019000 \u2212 500\u2019000 = 180\u2019000',
            'Variante 2 ist vorzuziehen (h\u00f6herer Netto-DB).'
          ]
        },
        {
          id: 83, type: 'match', title: 'Arten der Marketingkontrolle',
          q: 'Ordnen Sie die Beispiele den vier Arten der Marketingkontrolle zu.',
          pairs: [
            { l: 'R\u00fccklaufquoten einer Coupon-Werbung', r: 'Effizienzkontrolle' },
            { l: 'Vergleich des DB mit den Kosten einer Coupon-Werbung', r: 'Profitabilit\u00e4tskontrolle' },
            { l: 'SWOT-Profil im Vergleich zu einem neuen Konkurrenten', r: 'Strategiekontrolle' },
            { l: 'Positionierung der eigenen Marken mittels Marktforschung', r: 'Strategiekontrolle' },
            { l: 'Zielerreichungsgrad des Verkaufsvolumens in der Ostschweiz im Jahr 200x', r: 'Jahresplankontrolle' }
          ],
          options: ['Jahresplankontrolle', 'Profitabilit\u00e4tskontrolle', 'Effizienzkontrolle', 'Strategiekontrolle'],
          tips: ['Jahresplankontrolle: Ziele erreicht? Profitabilit\u00e4t: Gewinn? Effizienz: Kosten-Nutzen? Strategie: Soll-Soll-Kontrolle.'],
          reveal: []
        },
        {
          id: 84, type: 'tf', title: 'Szenarien und Budgets',
          statements: [
            { s: 'Szenarien sind etwas f\u00fcr Leute, die entweder zu faul oder zu dumm sind, Prognosen zu erstellen.', c: false, feedback: 'Falsch! Szenarien sind ein wichtiges Instrument der strategischen Planung. Sie helfen, verschiedene Zukunftsszenarien durchzuspielen und sich vorzubereiten.' },
            { s: 'Auch kleine Unternehmen sollten ein Marketingbudget erstellen.', c: true, feedback: 'Richtig \u2013 ein Budget hilft bei der Ressourcenallokation und Kontrolle.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 85, type: 'match', title: 'Kontrollplan-Elemente',
          q: 'Ein Kontrollplan wird anhand der 4 W-Fragen strukturiert. Ordnen Sie zu.',
          pairs: [
            { l: 'Was? oder Zielobjekt / Zielgr\u00f6sse', r: 'Zielinhalt' },
            { l: 'Wie? oder Kontrollmethode', r: 'Methode' },
            { l: 'Wer? oder Verantwortlichkeit', r: 'Verantwortlicher' },
            { l: 'Wann? oder Zeitpunkt', r: 'Zeitplan' }
          ],
          options: ['Zielinhalt', 'Methode', 'Verantwortlicher', 'Zeitplan'],
          tips: [],
          reveal: []
        },
        {
          id: 86, type: 'mc', title: 'Marketinginformationssystem',
          q: 'Das Marketinginformationssystem (MIS) besteht h\u00e4ufig aus welchen Elementen?',
          options: [
            'Nur Marktforschung',
            'Internes Rapportwesen, Marktforschung und Marketing-Intelligence',
            'Nur interne Berichte',
            'ERP-System und CRM'
          ],
          answer: 1,
          tips: ['Das MIS kombiniert interne und externe Informationsquellen.'],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 15: Qualit\u00e4tsmanagement I: Grundlagen und \u00d6kologie (S.244-245)
    // ================================================================
    {
      id: 'ch15', num: 'Teil B \u2013 Kapitel 15', title: 'Qualit\u00e4tsmanagement I: Grundlagen und \u00d6kologie',
      exercises: [
        {
          id: 87, type: 'match', title: 'Muss-, Soll-, Plus-Faktoren',
          q: 'Sind die folgenden Attribute bei einer Autoreparatur Muss-, Soll- oder Plus-Faktoren?',
          pairs: [
            { l: 'Testen, ob Profil der Pneus dem Gesetz entspricht', r: 'Muss' },
            { l: 'Autositze reinigen', r: 'Soll' },
            { l: 'Freundlichkeit des Personals', r: 'Soll' },
            { l: 'Shuttleservice zum Arbeitsort', r: 'Plus' },
            { l: 'Hinweis auf Ablauf der Autobahnvignette', r: 'Plus' }
          ],
          options: ['Muss', 'Soll', 'Plus'],
          tips: ['Muss: gesetzlich/erwartet. Soll: guter Standard. Plus: \u00dcberraschung.'],
          reveal: []
        },
        {
          id: 88, type: 'tf', title: 'Total Quality Management',
          statements: [
            { s: 'Beim Total Quality Management steht die Produktqualit\u00e4t im Vordergrund.', c: false, feedback: 'TQM ist umfassender: es geht um die Qualit\u00e4t aller Prozesse im gesamten Unternehmen.' },
            { s: 'Das Erreichen von Kostenzielen geh\u00f6rt zu den Zielsetzungen von TQM.', c: true, feedback: 'Richtig \u2013 Qualit\u00e4t und Effizienz geh\u00f6ren zusammen.' },
            { s: 'Qualit\u00e4t ist ein Prozess, der nie zu Ende ist.', c: true, feedback: 'Richtig \u2013 kontinuierliche Verbesserung (KVP) ist ein Grundprinzip.' },
            { s: 'Benchmarking kann auch intern betrieben werden.', c: true, feedback: 'Richtig \u2013 Vergleich verschiedener Gesch\u00e4ftseinheiten innerhalb des Unternehmens.' },
            { s: 'F\u00fcr hervorragende Qualit\u00e4t sind die Kunden bereit, jeden Preis zu bezahlen.', c: false, feedback: 'Falsch \u2013 es gibt immer eine Zahlungsbereitschaft-Grenze.' },
            { s: 'TQM ist ein ganzheitlicher Ansatz, der nur optimale Resultate liefern kann, wenn er von den Mitarbeitenden unterst\u00fctzt wird.', c: true, feedback: 'Richtig \u2013 Mitarbeiterbeteiligung ist essenziell.' }
          ],
          tips: [],
          reveal: []
        },
        {
          id: 89, type: 'mc', title: 'QM-Grunds\u00e4tze',
          q: 'Welche Grunds\u00e4tze sind bei der erfolgreichen Umsetzung eines Qualit\u00e4tsmanagementsystems zu beachten? (Mehrere richtig)',
          options: [
            'A) Einbezug aller beteiligten Personen',
            'B) Festhalten an der beschlossenen Vorgehensweise',
            'C) Orientierung an Zielen',
            'D) Flexible Anwendung',
            'E) Gen\u00fcgend Ressourcen',
            'F) Anwendung m\u00f6glichst vieler Kennzahlen'
          ],
          answer: 0,
          tips: ['Alle ausser F sind korrekt \u2013 zu viele Kennzahlen schaden.'],
          reveal: [
            'A bis E sind korrekte Grunds\u00e4tze.',
            'F ist falsch: Es geht um die richtigen (nicht m\u00f6glichst viele) Kennzahlen.'
          ]
        },
        {
          id: 90, type: 'text', title: '\u00d6kologische Strategien',
          q: 'Welche Strategie zum Umgang mit \u00f6kologischen Themen verfolgen folgende Unternehmen? A) Ein Unternehmen senkt den Energieverbrauch, um Vorreiter zu bleiben. B) Ein Hersteller setzt auf Glasr\u00f6hrchen statt Plastikhalme.',
          keywords: ['defensiv', 'offensiv', 'innovativ', 'pionier', 'vorreiter', 'proaktiv'],
          tips: ['Unterscheiden Sie zwischen defensiver, selektiver und offensiver \u00d6kostrategie.'],
          reveal: [
            'A) Offensive Strategie: aktives Engagement als Vorreiter.',
            'B) Innovative Strategie: neues Material, Pionierrolle in der Branche.'
          ]
        },
        {
          id: 91, type: 'text', title: 'Umweltmassnahmen nach Kategorie',
          q: 'Zeigen Sie je zwei Handlungsanweisungen f\u00fcr die Massnahmenkategorien \u00abVermeiden\u00bb, \u00abVermindern\u00bb, \u00abVerwerten\u00bb und \u00abEntsorgen\u00bb auf.',
          keywords: ['vermeid', 'verminder', 'verwert', 'entsorg', 'recyc', 'reduz'],
          tips: ['Von Vermeiden (beste Option) bis Entsorgen (letzte Option).'],
          reveal: [
            'Vermeiden: z.B. Verpackung weglassen, digitale Rechnungen',
            'Vermindern: z.B. d\u00fcnnere Verpackungen, Energieeffizienz',
            'Verwerten: z.B. Recycling, Upcycling',
            'Entsorgen: z.B. fachgerechte Entsorgung, Sonderm\u00fcll'
          ]
        },
        {
          id: 92, type: 'mc', title: '\u00d6kologisches Engagement als Chance',
          q: 'Warum sollte das \u00f6kologische Engagement als Chance f\u00fcr das Unternehmen und das Marketing gesehen werden?',
          options: [
            'Weil es gesetzlich vorgeschrieben ist',
            'Weil es Kosten spart und das Image verbessert, neue Kundengruppen erschliesst und Innovationen f\u00f6rdert',
            'Weil es keine Nachteile hat',
            'Weil die Konkurrenz es auch macht'
          ],
          answer: 1,
          tips: [],
          reveal: []
        }
      ],
      learningData: null
    },

    // ================================================================
    // Chapter 16: Qualit\u00e4tsmanagement II: Reklamationswesen (S.251)
    // ================================================================
    {
      id: 'ch16', num: 'Teil B \u2013 Kapitel 16', title: 'Qualit\u00e4tsmanagement II: Reklamationswesen',
      exercises: [
        {
          id: 93, type: 'mc', title: 'Reklamationsmanagement und CRM',
          q: 'Weshalb geh\u00f6rt das Reklamationsmanagement in den Bereich CRM?',
          options: [
            'Weil CRM-Software Reklamationen verwaltet',
            'Weil Reklamationsmanagement dazu beitr\u00e4gt, Kundenbeziehungen zu pflegen und zu verbessern',
            'Weil es gesetzlich vorgeschrieben ist',
            'Weil Reklamationen nur von der IT bearbeitet werden'
          ],
          answer: 1,
          tips: [],
          reveal: []
        },
        {
          id: 94, type: 'text', title: 'Umgang mit Reklamationen',
          q: 'Wie gehen Sie mit Reklamationen um? Nennen Sie die wichtigsten Punkte bei der Bearbeitung von Beschwerden.',
          keywords: ['zuh\u00f6ren', 'verst\u00e4ndnis', 'l\u00f6sung', 'schnell', 'entschuld', 'dokument'],
          tips: ['Denken Sie an die vier Bausteine eines Antwortschreibens.'],
          reveal: [
            '1. Zuh\u00f6ren und Verst\u00e4ndnis zeigen.',
            '2. Sich entschuldigen.',
            '3. Schnelle und faire L\u00f6sung anbieten.',
            '4. Dokumentieren und Ursache analysieren.',
            '5. Follow-up: Sicherstellen, dass der Kunde zufrieden ist.'
          ]
        },
        {
          id: 95, type: 'text', title: 'Beschwerdeschreiben: Fluggesellschaft',
          q: 'Frau Gr\u00fcn hat auf ihrem Flug von \u00c4gypten das rechtzeitig bestellte vegetarische Essen nicht erhalten. Entwerfen Sie das Antwortschreiben auf die Beschwerde. Erw\u00e4hnen Sie die vier Bausteine.',
          keywords: ['entschuld', 'verst\u00e4ndnis', 'l\u00f6sung', 'massnahme', 'bedauer'],
          tips: ['Die vier Bausteine: Bedauern, Erkl\u00e4rung, L\u00f6sung, Pr\u00e4vention.'],
          reveal: [
            '1. Bedauern ausdr\u00fccken und sich entschuldigen.',
            '2. Erkl\u00e4rung: Was ist schiefgelaufen?',
            '3. Konkrete L\u00f6sung anbieten (z.B. Gutschein, Erm\u00e4ssigung).',
            '4. Pr\u00e4ventionsmassnahme: Was wird verbessert?'
          ]
        },
        {
          id: 96, type: 'mc', title: 'Reklamation als Chance',
          q: 'Wer reklamiert, ist immer ver\u00e4rgert oder entt\u00e4uscht. F\u00fcr einen Verk\u00e4ufer ist aber jede Reklamation auch eine Chance. Warum?',
          options: [
            'Der Kunde gibt direktes Feedback zur Produkt- und Leistungsoptimierung',
            'Der Kunde ist einfach schwierig',
            'Man kann den Kunden loswerden',
            'Reklamationen haben keine positiven Seiten'
          ],
          answer: 0,
          tips: ['Reklamationen liefern wertvolle Erkenntnisse.'],
          reveal: ['Ein Kunde, der reklamiert, gibt dem Unternehmen die Chance, sich zu verbessern. Ausserdem kann eine gute Reklamationsbehandlung die Kundenbindung sogar st\u00e4rken.']
        },
        {
          id: 97, type: 'text', title: 'Minicase: Druckerei',
          q: 'Sie sind Product Manager in einer Druckerei in Chur. Bereits zum dritten Mal innerhalb eines Monats erhalten Sie die R\u00fcckmeldung, dass Plakate f\u00fcr Kundenstopper besch\u00e4digt eingetroffen sind. Schildern Sie Ihre Reaktion, um die vier Ziele des Reklamationsmanagements zu erreichen.',
          keywords: ['ursache', 'qualit\u00e4t', 'verpackung', 'prozess', 'kunde', 'zufrieden', 'massnahme'],
          tips: ['Die vier Ziele: Kundenzufriedenheit wiederherstellen, Ursache beheben, Image sch\u00fctzen, Prozess verbessern.'],
          reveal: [
            '1. Sofortige Kontaktaufnahme mit dem Kunden, Entschuldigung und Ersatzlieferung.',
            '2. Interne Analyse: Verpackung, Versandprozess pr\u00fcfen.',
            '3. Ursache beheben (z.B. stabilere Verpackung, anderer Versanddienstleister).',
            '4. Dokumentation und Monitoring, um Wiederholung zu verhindern.'
          ]
        }
      ],
      learningData: null
    }
  ],

  // ================================================================
  // GLOSSARY
  // ================================================================
  glossary: [
    { term: 'Marketing', def: 'Alle T\u00e4tigkeiten und Anstrengungen eines Unternehmens, um Bed\u00fcrfnisse des Markts zu erkennen und in ein Produkt oder eine Dienstleistung umzuwandeln.' },
    { term: 'Marketingkonzept', def: '\u00dcbergeordneter Rahmen f\u00fcr die T\u00e4tigkeiten im Marketing. Umfasst 6 Schritte: Analyse, Ziele, Strategien, Instrumente, Budget, Kontrolle.' },
    { term: 'Marktanalyse', def: 'Systematische Untersuchung des Marktes: Kunden, Konkurrenz, Distribution und Beeinflusser.' },
    { term: 'Marktforschung', def: 'Systematische Erhebung, Aufbereitung und Analyse von Marktdaten zur fundierten Entscheidungsfindung.' },
    { term: 'Prim\u00e4rforschung', def: 'Erhebung neuer, bisher nicht vorhandener Daten (z.B. Befragungen, Beobachtungen, Experimente).' },
    { term: 'Sekund\u00e4rforschung', def: 'Auswertung bereits vorhandener Daten (z.B. Statistiken, Studien, Berichte).' },
    { term: 'SWOT-Analyse', def: 'Kombination von St\u00e4rken/Schw\u00e4chen (intern) mit Chancen/Gefahren (extern) zur Ableitung von Strategien.' },
    { term: 'PEST-Analyse', def: 'Auch PESTEL: Analyse der Umfeldfaktoren \u2013 Political, Economic, Social, Technological, Ecological, Legal.' },
    { term: 'Porters Five Forces', def: 'F\u00fcnf Wettbewerbskr\u00e4fte: Rivalit\u00e4t, Verhandlungsmacht der Lieferanten/Kunden, Bedrohung durch neue Konkurrenten/Ersatzprodukte.' },
    { term: 'Benchmarking', def: 'Vergleich des eigenen Unternehmens mit den Besten der Branche (Best-in-Class) oder intern.' },
    { term: 'Marktsegmentierung', def: 'Aufteilung des Gesamtmarktes in homogene Teilm\u00e4rkte und Kundengruppen.' },
    { term: 'Positionierung', def: 'Differenzierung gegen\u00fcber der Konkurrenz aus Kundensicht, dargestellt im Positionierungskreuz.' },
    { term: 'USP', def: 'Unique Selling Proposition \u2013 einzigartiges Verkaufsversprechen, das ein Produkt von der Konkurrenz abhebt.' },
    { term: 'Marketing-Mix', def: 'Kombination der Marketinginstrumente zur Umsetzung der Marketingstrategie.' },
    { term: '4P', def: 'Product, Price, Place, Promotion \u2013 die vier Instrumente des klassischen Marketing-Mix.' },
    { term: 'Produkt', def: 'Marktleistung: Kernprodukt, formales Produkt und erweitertes Produkt.' },
    { term: 'Preis', def: 'Preispolitik: Festlegung der Preise unter Ber\u00fccksichtigung von Kosten, Konkurrenz und Konsumentenzahlungsbereitschaft.' },
    { term: 'Place', def: 'Distributionspolitik: Wahl der Vertriebskan\u00e4le und -partner.' },
    { term: 'Promotion', def: 'Kommunikationspolitik: Werbung, Verkaufsf\u00f6rderung, PR, pers\u00f6nlicher Verkauf, Direktmarketing.' },
    { term: 'Produktlebenszyklus', def: 'Phasen eines Produkts: Einf\u00fchrung, Wachstum, Reife, S\u00e4ttigung, Degeneration.' },
    { term: 'BCG-Matrix', def: 'Boston-Consulting-Group-Portfolio: Stars, Cash Cows, Question Marks, Dogs \u2013 basierend auf Marktwachstum und Marktanteil.' },
    { term: 'Ansoff-Matrix', def: 'Wachstumsstrategien: Marktpenetration, Produktentwicklung, Marktentwicklung, Diversifikation.' },
    { term: 'Marktpotenzial', def: 'Maximal m\u00f6gliches Absatz-/Umsatzvolumen eines Marktes.' },
    { term: 'Marktvolumen', def: 'Tats\u00e4chlich realisiertes Absatz-/Umsatzvolumen aller Anbieter eines Marktes.' },
    { term: 'Marktanteil', def: 'Anteil eines Unternehmens am Marktvolumen (relativ oder absolut).' },
    { term: 'Marktwachstum', def: 'Prozentuale Ver\u00e4nderung des Marktvolumens \u00fcber eine bestimmte Periode.' },
    { term: 'Zielgruppe', def: 'Definierte Personengruppe, die mit Marketingmassnahmen angesprochen werden soll.' },
    { term: 'Buyer Persona', def: 'Fiktive, detaillierte Beschreibung eines idealen Kunden basierend auf Marktforschungsdaten.' },
    { term: 'Customer Journey', def: 'Der gesamte Weg des Kunden vom Erstkontakt bis zum Kauf und dar\u00fcber hinaus.' },
    { term: 'Wettbewerbsanalyse', def: 'Systematische Untersuchung der Konkurrenten hinsichtlich St\u00e4rken, Schw\u00e4chen und Strategien.' },
    { term: 'Branchenanalyse', def: 'Analyse der Branchenstruktur, oft mithilfe von Porters Five Forces.' },
    { term: 'Marketingstrategie', def: 'Langfristiger Plan zur Erreichung der Marketingziele, bestimmt den Weg zum Ziel.' },
    { term: 'Differenzierungsstrategie', def: 'Strategie, bei der sich ein Unternehmen durch einzigartige Leistungsmerkmale von der Konkurrenz abhebt.' },
    { term: 'Kostenf\u00fchrerschaft', def: 'Strategie, bei der ein Unternehmen die niedrigsten Kosten in der Branche anstrebt.' },
    { term: 'Nischenstrategie', def: 'Konzentration auf ein bestimmtes Marktsegment oder eine bestimmte Kundengruppe.' },
    { term: 'Marke', def: 'Zeichen, das die Marktleistung eines Unternehmens kennzeichnet und von der Konkurrenz differenziert.' },
    { term: 'Branding', def: 'Aufbau und F\u00fchrung einer Marke, um eine emotionale Bindung zum Kunden herzustellen.' },
    { term: 'Sortimentspolitik', def: 'Entscheidungen \u00fcber Breite, Tiefe, L\u00e4nge und Geschlossenheit des Produktsortiments.' },
    { term: 'Preispolitik', def: 'Alle Massnahmen zur Festlegung und Gestaltung der Preise f\u00fcr Produkte und Dienstleistungen.' },
    { term: 'Distributionspolitik', def: 'Alle Massnahmen zur \u00dcberbr\u00fcckung der r\u00e4umlichen und zeitlichen Distanz zwischen Hersteller und Endkunde.' },
    { term: 'Kommunikationspolitik', def: 'Alle Massnahmen zur Information und Beeinflussung von Zielgruppen \u00fcber das Unternehmen und seine Leistungen.' }
  ]
};
