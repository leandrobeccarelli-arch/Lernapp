window.BOOK_DATA = {
  id: 'marketingkonzept',
  title: 'Marketingkonzept, Marktanalyse und Marktleistung',
  shortTitle: 'Marketingkonzept',
  author: 'Friebe, Michel, Portmann, Reber, Schneider',
  year: 2022,
  totalPages: 280,
  pages: 280,
  color: '#dc2626',
  chapters: [
    // ================================================================
    // Chapter 1: Aufbau eines Marketingkonzepts (S.20)
    // ================================================================
    {
      id: 'ch1', pageStart: 10, pageEnd: 22, num: 'Teil A \u2013 Kapitel 1', title: 'Aufbau eines Marketingkonzepts',
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
          tips: ['Denken Sie an den Unterschied zwischen Theorie und Praxis.', 'Wie verläuft ein Planungsprozess in der Realität – streng nacheinander oder mit Rückschleifen?', 'Überlegen Sie, wie neue Erkenntnisse frühere Schritte beeinflussen können.'],
          reveal: ['Aussage 1: Falsch. Die Erarbeitung ist ein iterativer Prozess – die Phasen beeinflussen sich gegenseitig.', 'Aussage 2: Richtig. Richtig – deshalb ist der Prozess iterativ.', 'Aussage 3: Richtig. Aus didaktischen Gründen wird das Konzept in Prüfungen oft linear aufgebaut.']
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
          { type: 'svg', title: 'Die 6 Schritte des Marketingkonzepts', svg: '<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Die 6 Schritte des Marketingkonzepts</text><rect x="15" y="50" width="95" height="60" rx="8" fill="#9333ea"/><text x="62" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1. Analyse</text><text x="62" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Wo stehen wir?</text><polygon points="110,80 125,70 125,90" fill="#7e22ce"/><rect x="128" y="50" width="95" height="60" rx="8" fill="#7e22ce"/><text x="175" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2. Ziele</text><text x="175" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Wohin wollen wir?</text><polygon points="223,80 238,70 238,90" fill="#6b21a8"/><rect x="241" y="50" width="95" height="60" rx="8" fill="#6b21a8"/><text x="288" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3. Strategie</text><text x="288" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Wie erreichen?</text><polygon points="336,80 351,70 351,90" fill="#581c87"/><rect x="354" y="50" width="95" height="60" rx="8" fill="#581c87"/><text x="401" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4. Instrumente</text><text x="401" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Marketing-Mix</text><polygon points="449,80 464,70 464,90" fill="#7e22ce"/><rect x="467" y="50" width="95" height="60" rx="8" fill="#7e22ce"/><text x="514" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">5. Budget</text><text x="514" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Ressourcen?</text><polygon points="562,80 577,70 577,90" fill="#9333ea"/><rect x="580" y="50" width="105" height="60" rx="8" fill="#9333ea"/><text x="632" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">6. Kontrolle</text><text x="632" y="92" text-anchor="middle" fill="#e9d5ff" font-size="9">Ziele erreicht?</text><rect x="50" y="140" width="600" height="45" rx="10" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><text x="350" y="162" text-anchor="middle" fill="#581c87" font-size="12" font-weight="bold">Iterativer Prozess: Die Schritte werden laufend wiederholt und angepasst</text><text x="350" y="178" text-anchor="middle" fill="#7e22ce" font-size="10">Jeder Schritt kann R\u00fcckkopplungen auf vorherige Schritte ausl\u00f6sen</text><path d="M632,115 C632,210 62,210 62,115" fill="none" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arCh1)"/><defs><marker id="arCh1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#c084fc"/></marker></defs></svg>' },
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
      id: 'ch2', pageStart: 23, pageEnd: 34, num: 'Teil A \u2013 Kapitel 2', title: 'Marktdefinition und Abh\u00e4ngigkeiten',
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
          reveal: ['Studierende an Fachhochschulen, Universitäten und ETHs, die Bücher kaufen → Segment', 'Lehrmittel für Fachhochschulen, die von Verlagen produziert werden → Teilmarkt', 'Sportliche Fahrer, die BMW, Audi oder Ford Mustang lieben → Segment', 'Die Firma Dow Chemicals beliefert Unternehmen in der Kosmetik- und Automobilbranche mit Silikonen → Teilmarkt']
        },
        {
          id: 7, type: 'calc', title: 'S\u00e4ttigungsgrad berechnen',
          q: 'S\u00e4ttigungsgrad berechnen',
          instruction: 'Berechnen Sie den S\u00e4ttigungsgrad f\u00fcr eine spezielle Software im Markt Europa.\n\n\u2022 Marktvolumen 20_1: EUR 18 Mio.\n\u2022 Marktpotenzial 20_1: EUR 68 Mio.\n\u2022 Marktvolumen 20_2: EUR 31 Mio.\n\u2022 Marktpotenzial 20_2: EUR 75 Mio.',
          fields: [
            { label: 'S\u00e4ttigungsgrad 20_1 (in %)', answer: 26.5, tolerance: 0.02 },
            { label: 'S\u00e4ttigungsgrad 20_2 (in %)', answer: 41.3, tolerance: 0.02 }
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
          tips: ['Es geht um die Grösse der jeweiligen Marktkennzahl.', 'Marktanteil ist ein Teil des Marktvolumens – was ist grösser?', 'Die Reihenfolge: Anteil eines Unternehmens → tatsächlicher Gesamtmarkt → möglicher Gesamtmarkt → maximale Kapazität.'],
          reveal: ['Marktanteil → 1', 'Marktvolumen → 2', 'Marktpotenzial → 3', 'Marktkapazität → 4']
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
      learningData: {
        title: 'Marktdefinition und Abhängigkeiten',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Begriff «Markt» erklären.',
              'Segmente und Teilmärkte darstellen und voneinander abgrenzen.',
              'die Marktgrössen unterscheiden und berechnen.',
              'den Markt als System darstellen.',
              'das Marktsystem für Konsumgüter, Investitionsgüter und personalintensive Dienstleistungen beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: 'Marktdefinition und Marktabgrenzung',
            content: 'Die Marktdefinition ist ein wichtiges Fundament für ein stimmiges Marketingkonzept. Bei der Marktdefinition und -abgrenzung müssen wir uns nicht an den traditionellen Branchen orientieren, sondern herausfinden, was aus Sicht der Kunden ein Markt ist. Konkurrenten sind alle Anbieter, die das gleiche Kundenbedürfnis befriedigen.',
            highlight: 'Bevor wir mit einem Marketingkonzept beginnen, müssen wir uns einen Überblick über den Markt verschaffen, in dem wir agieren.'
          },
          {
            type: 'table',
            title: 'Begriffe der Marktdefinition',
            headers: ['Begriff', 'Beschreibung'],
            rows: [
              ['Grobmarktwahl', 'Die Marktwahl unterteilt den Markt in strategische Geschäftsfelder (SGF).'],
              ['Segmentierung', 'Die Segmentierung unterteilt ein SGF in Segmente und Teilmärkte.'],
              ['Teilmarkt', 'Wenn ein SGF nach der Art des Angebots unterteilt wird. (Lernhilfe: Angebot → TeilmArkt)'],
              ['Marktsegment', 'Wenn ein SGF nach der Art der Nachfrager (Kunden) unterteilt wird. (Lernhilfe: Nachfrage → SegmeNt)'],
              ['Strategisches Geschäftsfeld (SGF)', 'Ein «Markt im Markt» – wird von aussen durch unterschiedliche Kunden, Konkurrenten und Angebote definiert.'],
              ['Strategische Geschäftseinheit (SGE)', 'Eine organisatorische Einheit im Unternehmen, die bestimmte strategische Geschäftsfelder bearbeitet. Von innen definiert.']
            ]
          },
          {
            type: 'concept',
            title: 'Marktgrössen und Marktkennzahlen',
            content: 'Die Marktgrössen helfen bei der Analyse des Markts. Es gibt eine klare Hierarchie: Marktkapazität > Marktpotenzial > Marktvolumen > Marktanteil. Der Sättigungsgrad ergibt sich aus dem Verhältnis von Marktvolumen zu Marktpotenzial. In nicht gesättigten Märkten (< 80%) lohnt sich ein Neueintritt, bei gesättigten Märkten können Marktanteile nur auf Kosten der Konkurrenz gewonnen werden.',
            highlight: 'Marktkapazität > Marktpotenzial > Marktvolumen > Marktanteil. Sättigungsgrad = Marktvolumen / Marktpotenzial × 100.'
          },
          { type: 'svg', title: 'Marktgr\u00f6ssen-Pyramide', svg: '<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Hierarchie der Marktgr\u00f6ssen</text><polygon points="350,50 550,250 150,250" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><rect x="290" y="58" width="120" height="34" rx="8" fill="#581c87"/><text x="350" y="80" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktkapazit\u00e4t</text><rect x="265" y="100" width="170" height="34" rx="8" fill="#6b21a8"/><text x="350" y="122" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktpotenzial</text><rect x="240" y="142" width="220" height="34" rx="8" fill="#7e22ce"/><text x="350" y="164" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktvolumen</text><rect x="215" y="184" width="270" height="34" rx="8" fill="#9333ea"/><text x="350" y="206" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Marktanteil</text><text x="570" y="72" fill="#581c87" font-size="10">Absatz bei Preis = 0</text><text x="570" y="114" fill="#6b21a8" font-size="10">Optimaler Marketing-Einsatz</text><text x="570" y="156" fill="#7e22ce" font-size="10">Effektiv realisierter Umsatz</text><text x="570" y="198" fill="#9333ea" font-size="10">Anteil von Anbieter X</text><line x1="410" y1="75" x2="565" y2="72" stroke="#581c87" stroke-width="1" stroke-dasharray="3,2"/><line x1="435" y1="117" x2="565" y2="114" stroke="#6b21a8" stroke-width="1" stroke-dasharray="3,2"/><line x1="460" y1="159" x2="565" y2="156" stroke="#7e22ce" stroke-width="1" stroke-dasharray="3,2"/><line x1="485" y1="201" x2="565" y2="198" stroke="#9333ea" stroke-width="1" stroke-dasharray="3,2"/><rect x="180" y="235" width="340" height="30" rx="8" fill="#ede9fe"/><text x="350" y="255" text-anchor="middle" fill="#581c87" font-size="11">S\u00e4ttigungsgrad = Marktvolumen / Marktpotenzial \u00d7 100</text></svg>' },
          {
            type: 'table',
            title: 'Hierarchie der Marktgrössen',
            headers: ['Marktgrösse', 'Beschreibung'],
            rows: [
              ['Marktkapazität', 'Maximale Menge einer bestimmten Marktleistung, die zum Preis 0 in einem bestimmten Zeitraum im relevanten Markt abgesetzt werden könnte.'],
              ['Marktpotenzial', 'Gesamter Umsatz oder Absatz aller Anbieter einer bestimmten Marktleistung, der unter optimalem Einsatz der Marketinginstrumente bei heutiger Kaufkraft erzielt werden könnte.'],
              ['Marktvolumen', 'Gesamter von allen Anbietern effektiv realisierter Umsatz oder Absatz einer Marktleistung in einem bestimmten Zeitraum im relevanten Markt.'],
              ['Marktanteil', 'Prozentualer Umsatz- oder Absatzanteil von Anbieter X am Marktvolumen des relevanten Markts in einem bestimmten Zeitraum.'],
              ['Marktsättigungsgrad', 'Prozentualer Anteil des Marktvolumens am Marktpotenzial in einem bestimmten Zeitraum.']
            ]
          },
          {
            type: 'concept',
            title: 'Markt als System',
            content: 'Das Marktsystem nach R. Kühn bietet einen Gedankenrahmen, der hilft, die Beziehungen zwischen den verschiedenen Akteuren darzustellen. Beim Marktsystem für Konsumgüter sind die folgenden Akteure relevant: das eigene Unternehmen, Konkurrenz, Zwischenhandel, externe Beeinflusser, Endkunden/Käufer und interne Beeinflusser. Jedes Marktsystem wird von Umfeldfaktoren beeinflusst: Politik, Wirtschaft, Gesellschaft, Technologie, Ökologie und Recht.',
            highlight: 'Akteure im Marktsystem: Unternehmen, Konkurrenz, Zwischenhandel, externe Beeinflusser, Endkunden. Umfeld: Politik, Wirtschaft, Gesellschaft, Technologie, Ökologie, Recht.'
          },
          {
            type: 'concept',
            title: 'Marktsystem für Investitionsgüter',
            content: 'Im Gegensatz zum Konsumgütermarketing besteht beim Investitionsgütermarketing meistens ein direkter und intensiver Kundenkontakt. Beim Kauf von Investitionsgütern ist die Vielzahl der involvierten Personen bedeutend. Diese Gruppenentscheidung wird Buying Center genannt und umfasst fünf verschiedene Rollen: Benutzer, Einkäufer, Beeinflusser, Entscheider und Informationsselektierer (Gatekeeper).',
            highlight: 'Buying Center: Benutzer, Einkäufer, Beeinflusser, Entscheider, Gatekeeper.'
          },
          {
            type: 'concept',
            title: 'Marktsystem für personalintensive Dienstleistungen',
            content: 'Bei personalintensiven Dienstleistungen (z.B. Unternehmensberatung, Aus- und Weiterbildung, Gesundheitswesen) spielen die Mitarbeitenden eine entscheidende Rolle. Wir können hier drei Arten von Marketing unterscheiden: das externe Marketing (zwischen Unternehmen und Kunden), das interne Marketing (zwischen Unternehmen und Mitarbeitenden) und das interaktive Marketing (zwischen Mitarbeitenden und Kunden).',
            highlight: 'Drei Arten von Marketing bei Dienstleistungen: externes, internes und interaktives Marketing.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Marktdefinition immer aus Kundensicht \u2013 nicht nach Branchen.',
              'Teilmarkt = Unterteilung nach Angebot. Segment = Unterteilung nach Nachfragern.',
              'SGF wird von aussen definiert (Markt), SGE von innen (Organisation).',
              'Marktkapazit\u00e4t > Marktpotenzial > Marktvolumen > Marktanteil.',
              'S\u00e4ttigungsgrad = Marktvolumen / Marktpotenzial \u00d7 100.',
              'Buying Center (Investitionsg\u00fcter): Benutzer, Eink\u00e4ufer, Beeinflusser, Entscheider, Gatekeeper.',
              'Dienstleistungsmarketing: externes, internes und interaktives Marketing.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'In einem ersten Schritt der <strong>Marktabgrenzung</strong> wird der Markt definiert und von den anderen Märkten abgegrenzt.',
              'Der Markt wird weiter in <strong>strategische Geschäftsfelder</strong> (SGF) unterteilt, die anschliessend in <strong>Marktsegmente</strong> und <strong>Teilmärkte</strong> gegliedert werden.',
              'Um Ressourcen zu bündeln, fassen Unternehmen verschiedene ähnliche SGF zu einer <strong>strategischen Geschäftseinheit</strong> (SGE) zusammen.',
              'Die <strong>Marktgrössen</strong> helfen bei der Analyse: Marktkapazität, Marktpotenzial, Marktvolumen, Marktanteil, Marktsättigungsgrad.',
              'Das <strong>Marktsystem</strong> nach R. Kühn dient als Hilfe, um das eigene Marktsystem vereinfacht darzustellen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Grobmarktwahl', def: 'Unterteilung des Markts in strategische Geschäftsfelder (SGF).' },
              { term: 'Segmentierung', def: 'Unterteilung eines SGF in Segmente (nach Nachfragern) und Teilmärkte (nach Angebot).' },
              { term: 'SGF (Strategisches Geschäftsfeld)', def: 'Ein «Markt im Markt» – von aussen definiert durch unterschiedliche Kunden, Konkurrenten und Angebote.' },
              { term: 'SGE (Strategische Geschäftseinheit)', def: 'Organisatorische Einheit im Unternehmen, die bestimmte SGF bearbeitet – von innen definiert.' },
              { term: 'Marktpotenzial', def: 'Maximal erzielbarer Umsatz/Absatz unter optimalem Einsatz aller Marketinginstrumente.' },
              { term: 'Marktvolumen', def: 'Tatsächlich realisierter Umsatz/Absatz aller Anbieter im relevanten Markt.' },
              { term: 'Sättigungsgrad', def: 'Verhältnis von Marktvolumen zu Marktpotenzial (in Prozent).' },
              { term: 'Buying Center', def: 'Gruppe von Personen, die beim Kauf von Investitionsgütern involviert sind: Benutzer, Einkäufer, Beeinflusser, Entscheider, Gatekeeper.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 3: Analyse I: Marktanalyse (S.58-59)
    // ================================================================
    {
      id: 'ch3', pageStart: 35, pageEnd: 46, num: 'Teil A \u2013 Kapitel 3', title: 'Analyse I: Marktanalyse',
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
          tips: ['Es geht um verschiedene Analyseinstrumente und Marktmechanismen.', 'Benchmarking kann auf verschiedene Arten durchgeführt werden – nicht nur mit dem Branchenleader.', 'Denken Sie bei Involvement an den Preis und die emotionale Bedeutung des Produkts.'],
          reveal: ['Aussage 1: Falsch. Man kann auch internes Benchmarking betreiben oder Best-in-Class aus anderen Branchen.', 'Aussage 2: Richtig. A-Kunden machen ca. 80% des Umsatzes aus.', 'Aussage 3: Richtig. Hoher Preis, emotionale Bindung – typisch High-Involvement.', 'Aussage 4: Richtig. Bei Marktwachstum können alle Anbieter wachsen, der Wettbewerb ist weniger intensiv.', 'Aussage 5: Richtig. Hohe Barrieren schützen bestehende Anbieter.']
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
          tips: ['Denken Sie an die Wettbewerbsstrategien nach Porter.', 'Bedeutet günstiger Preis automatisch schlechte Qualität?', 'Kostenführerschaft ist eine bewusste Strategie – und kann sehr wirkungsvoll sein.'],
          reveal: ['Aussage 1: Falsch. Kostengünstige Produktion bedeutet nicht automatisch schlechte Qualität. Kostenführerschaft kann sehr gefährlich sein.']
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
          reveal: ['Airbnb-Vermietungsplattform → Ersatzprodukte', 'Booking.com-Reservationsplattform → Abnehmer', 'Tiefpreispolitik von Hilton in Zürich → Rivalität', 'Fusion der grössten Konferenz- und Messeveranstalter → Lieferanten']
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
      learningData: {
        title: 'Analyse I: Marktanalyse',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'als Basis für Marketingüberlegungen eine Marktanalyse entlang aller Akteure aus dem Marktsystem erstellen.',
              'mit verschiedenen Methoden eine Kundenanalyse durchführen.',
              'das Verhalten der Konsumenten erklären.',
              'erläutern, welche Elemente zur Beurteilung der Vertriebskanäle und des Handels bedeutsam sind.',
              'die Bedeutung von internen und externen Beeinflussern analysieren.',
              'anhand der Five Forces eine Wettbewerbsanalyse durchführen und das Verhalten der Konkurrenz aufzeigen.',
              'erklären, was man unter Benchmarks versteht, und Benchmarks erstellen.'
            ]
          },
          {
            type: 'svg',
            title: 'Marktforschungsprozess (5 Schritte)',
            svg: '<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="320" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Marktforschungsprozess</text><rect x="40" y="70" width="110" height="80" rx="12" fill="#dc2626"/><text x="95" y="102" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">1. Problem-</text><text x="95" y="118" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">definition</text><text x="95" y="138" text-anchor="middle" font-size="9" fill="#fecaca">Was wollen wir</text><text x="95" y="149" text-anchor="middle" font-size="9" fill="#fecaca">wissen?</text><path d="M155,110 L175,110" stroke="#dc2626" stroke-width="2" marker-end="url(#arrM)"/><rect x="180" y="70" width="110" height="80" rx="12" fill="#ef4444"/><text x="235" y="102" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">2. Forschungs-</text><text x="235" y="118" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">design</text><text x="235" y="138" text-anchor="middle" font-size="9" fill="#fecaca">Wie gehen wir</text><text x="235" y="149" text-anchor="middle" font-size="9" fill="#fecaca">vor?</text><path d="M295,110 L315,110" stroke="#dc2626" stroke-width="2" marker-end="url(#arrM)"/><rect x="320" y="70" width="110" height="80" rx="12" fill="#f87171"/><text x="375" y="102" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">3. Daten-</text><text x="375" y="118" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">erhebung</text><text x="375" y="138" text-anchor="middle" font-size="9" fill="#fef2f2">Primär / Sekundär</text><text x="375" y="149" text-anchor="middle" font-size="9" fill="#fef2f2">Feldforschung</text><path d="M435,110 L455,110" stroke="#dc2626" stroke-width="2" marker-end="url(#arrM)"/><rect x="460" y="70" width="110" height="80" rx="12" fill="#fca5a5"/><text x="515" y="102" text-anchor="middle" font-size="11" fill="#7f1d1d" font-weight="700">4. Daten-</text><text x="515" y="118" text-anchor="middle" font-size="11" fill="#7f1d1d" font-weight="700">analyse</text><text x="515" y="138" text-anchor="middle" font-size="9" fill="#991b1b">Auswertung &amp;</text><text x="515" y="149" text-anchor="middle" font-size="9" fill="#991b1b">Interpretation</text><path d="M575,110 L595,110" stroke="#dc2626" stroke-width="2" marker-end="url(#arrM)"/><rect x="600" y="70" width="80" height="80" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="640" y="102" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="700">5. Bericht</text><text x="640" y="120" text-anchor="middle" font-size="9" fill="#64748b">Empfehlungen</text><text x="640" y="132" text-anchor="middle" font-size="9" fill="#64748b">für Entscheid</text><defs><marker id="arrM" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#dc2626"/></marker></defs><rect x="80" y="200" width="250" height="50" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/><text x="205" y="222" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="600">Primärforschung (neu erheben)</text><text x="205" y="238" text-anchor="middle" font-size="10" fill="#64748b">Befragung, Beobachtung, Experiment</text><rect x="370" y="200" width="250" height="50" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/><text x="495" y="222" text-anchor="middle" font-size="12" fill="#e11d48" font-weight="600">Sekundärforschung (vorhanden)</text><text x="495" y="238" text-anchor="middle" font-size="10" fill="#64748b">Statistiken, Studien, Berichte</text><text x="350" y="290" text-anchor="middle" font-size="11" fill="#94a3b8">Quantitative Methoden (Zahlen) + Qualitative Methoden (Erkenntnisse)</text></svg>'
          },
          {
            type: 'concept',
            title: 'Kundenanalyse',
            content: 'In den allermeisten Unternehmen sind nicht alle Kunden gleich rentabel. Einige Kunden generieren viel mehr Erträge als andere. Es ist deshalb für die Analyse wichtig, zu erkennen, welche Kunden rentabel sind und welche nicht. Dazu beginnen wir mit zwei klassischen Kundenbewertungsmodellen, der ABC-Analyse und den Scoringmodellen. Anschliessend behandeln wir die Idee des Customer Lifetime Value (CLV).',
            highlight: 'Die Kundenanalyse hilft, die rentabelsten Kunden zu identifizieren und gezielt zu bearbeiten.'
          },
          {
            type: 'table',
            title: 'ABC-Analyse nach Umsatz',
            headers: ['Kategorie', 'Anteil Kundenstamm', 'Anteil Umsatz'],
            rows: [
              ['A-Kunden', '10–20%', 'ca. 60%'],
              ['B-Kunden', '25–40%', 'ca. 30%'],
              ['C-Kunden', '40–65%', 'ca. 10%']
            ]
          },
          {
            type: 'concept',
            title: 'Scoringmodelle',
            content: 'Eine weitere klassische Form der Kundenanalyse sind die Scoringmodelle, bei denen für jeden Kunden eine Punktzahl (Score) berechnet wird. Je höher der Score ausfällt, desto attraktiver ist der Kunde für ein Unternehmen. Faktoren wie letztes Transaktionsdatum, Anzahl Transaktionen, Erlöse, Kundenkontakte und Marketingaktionen fliessen in die Bewertung ein.',
            highlight: 'Je höher der Score, desto attraktiver ist der Kunde für das Unternehmen.'
          },
          {
            type: 'concept',
            title: 'Customer Lifetime Value (CLV)',
            content: 'Die Gewinnformel im Marketing lautet: Absatz × Preis = Umsatz, Umsatz – Kosten = Gewinn. Der wesentliche Unterschied der CLV-Betrachtung besteht darin, dass nicht die einzelne Transaktion eines Kunden isoliert betrachtet wird, sondern sämtliche Geldströme des Kunden während der gesamten Beziehung abgeschätzt werden. Im einfachsten Fall: Ø Preis × Häufigkeit × Beziehungsdauer = Kundenwert.',
            highlight: 'Der CLV betrachtet sämtliche Geldströme des Kunden während der gesamten Beziehung.'
          },
          {
            type: 'concept',
            title: 'Konsumentenforschung: Individualpsychologie',
            content: 'Die Individualpsychologie fokussiert auf das Verhalten Einzelner. Die psychischen Prozesse können grob unterteilt werden in: Erregende Vorgänge (aktivierend: Emotionen, Motivation, Einstellungen) und Gedankliche Vorgänge (kognitiv: Informationsaufnahme, Wahrnehmen, Lernen und Gedächtnis). Die Motivationspyramide von Maslow zeigt die Hierarchie der Bedürfnisse von physiologischen Bedürfnissen bis zur Selbstverwirklichung.',
            highlight: 'Psychische Prozesse unterteilen sich in aktivierende (Emotionen, Motivation, Einstellungen) und kognitive (Informationsaufnahme, Wahrnehmen, Lernen) Vorgänge.'
          },
          {
            type: 'table',
            title: 'Involvement und Kaufverhalten',
            headers: ['Involvement (Gedanklich / Gefühlsmässig)', 'Kaufverhalten', 'Bedeutung fürs Marketing'],
            rows: [
              ['Hoch / Hoch', 'Extensive Kaufentscheidung', 'Hohe Bedeutung von Fakten, Produktinformationen, Qualitätsmerkmalen, Testberichten, Konkurrenzvergleichen'],
              ['Hoch / Tief', 'Limitierte Kaufentscheidung', 'Hohe Bedeutung von bisherigen Kauferfahrungen, Kundenbeziehung'],
              ['Tief / Hoch', 'Impulsives Verhalten', 'Hohe Bedeutung von Farben, Atmosphäre, Produktplatzierung am POS, Sonderangeboten, Probeaktionen'],
              ['Tief / Tief', 'Zufallsauswahl, habituelles Verhalten', 'Hohe Bedeutung von Marken und Image']
            ]
          },
          {
            type: 'concept',
            title: 'Sozialpsychologie',
            content: 'Die Sozialpsychologie fokussiert darauf, wie das Verhalten anderer auf das Verhalten eines Individuums auswirkt. Innerhalb der Familie gibt es eine kulturell geprägte Rollenstruktur (Tätigkeitsaufteilung) und eine Beziehungsstruktur, die alle Mitglieder miteinander verbindet. Der Einfluss der Familie auf die Kaufentscheidung ist gross. Neben der Familie beeinflussen auch Bezugsgruppen und die weitere kulturelle Umwelt das Verhalten.',
            highlight: 'Verschiedene Kulturen zeichnen sich durch verschiedene Lebensstile aus – für Marketingleute sind Sprache und Lebensstil besonders relevant.'
          },
          {
            type: 'concept',
            title: 'Distributionsanalyse (Vertriebskanäle und Handel)',
            content: 'Bei der Distributionsanalyse steht die Frage im Vordergrund, welche Vertriebskanäle (direkter Vertrieb, indirekter Vertrieb, Mischformen) ein Unternehmen generell einsetzt und ob es damit den optimalen Umsatz erzielt. Die wichtigste Entscheidung ist die Frage nach direkten oder indirekten Vertriebskanälen. Die Vertriebskanäle übernehmen fünf verschiedene Funktionen: Information, Absatzförderung, Kontakte, Bestellungen und Verhandlungen.',
            highlight: 'Die Vertriebskanäle übernehmen fünf Funktionen: Information, Absatzförderung, Kontakte, Bestellungen und Verhandlungen.'
          },
          {
            type: 'table',
            title: 'Vor- und Nachteile der Vertriebsarten',
            headers: ['Vertriebsart', 'Vorteile', 'Nachteile'],
            rows: [
              ['Direkter Vertrieb', 'Hohe Beratungsqualität, direkte Steuerung der Vertriebskanäle, direkter Kundenkontakt', 'Hohe Kosten für Aufbau eines Distributionssystems, je nach Produkt mangelnde Akzeptanz der Kunden'],
              ['Indirekter Vertrieb', 'Schneller Markteintritt möglich, Händler übernehmen Teil des Debitorenrisikos sowie Lagerfunktion, Absatz grosser Mengen möglich', 'Tiefere Marge, kein direkter Kundenkontakt, wenig Einfluss auf die Beratungsqualität, Händler können Verkaufspreise und Rabatte selbst festlegen']
            ]
          },
          {
            type: 'concept',
            title: 'Analyse der internen und externen Beeinflusser',
            content: 'Ein Beeinflusser ist eine Person, die einen Kaufentscheid beeinflusst, jedoch weder Käufer noch Händler noch Verkäufer ist. Interne Beeinflusser sind Personen in Unternehmen und privaten Haushalten, die einen Kaufentscheid beeinflussen, jedoch nicht über den Kauf entscheiden. Externe Beeinflusser sind Marktteilnehmer, die Kaufempfehlungen abgeben, ohne selbst an der Transaktion teilzunehmen (z. B. Ärzte, Architekten, Journalisten).',
            highlight: 'Beeinflusser sind weder Käufer noch Händler, üben aber Einfluss auf den Kaufentscheid aus.'
          },
          {
            type: 'concept',
            title: 'Wettbewerbsanalyse (Five Forces nach Porter)',
            content: 'Im strategischen Marketing analysiert man die Konkurrenz anhand der fünf Wettbewerbskräfte von Porter: 1. Rivalität unter den bestehenden Unternehmen, 2. Bedrohung durch neue Anbieter, 3. Bedrohung durch Ersatzprodukte/-dienstleistungen, 4. Verhandlungsmacht der Kunden, 5. Verhandlungsmacht der Lieferanten. Starke Wettbewerbskräfte heizen den Wettbewerb an. Schwache Wettbewerbskräfte bedeuten höhere Gewinnmöglichkeiten.',
            highlight: 'Aus der Wettbewerbsanalyse lassen sich Schlüsse für die strategische Unternehmens- und Marketingplanung ableiten.'
          },
          {
            type: 'concept',
            title: 'Benchmarking',
            content: 'Benchmarking ist ein Konkurrenzvergleich: Man vergleicht das eigene Unternehmen, die eigenen Prozesse und Produkte. Man unterscheidet internes Benchmarking (Vergleiche innerhalb des Unternehmens), Konkurrenz- oder Branchenbenchmarking (Vergleiche mit direkten Konkurrenten) oder Best-in-Class (Vergleiche mit dem Besten überhaupt, auch ausserhalb der eigenen Branche). Die acht Marketing-Kernprozesse für Wettbewerbsvorteile sind: Preisgestaltung, Produktentwicklung, Distributionsmanagement, Marketingkommunikation, Verkauf, Marketinginformationsmanagement, Marketingplanung und Marketingumsetzung.',
            highlight: 'Benchmarking identifiziert Methoden für Effizienzsteigerung, besseres Produktdesign und erkennt die eigene Kostenposition.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'ABC-Analyse: A-Kunden (10\u201320%) machen ca. 60% des Umsatzes aus.',
              'CLV = \u00d8 Preis \u00d7 H\u00e4ufigkeit \u00d7 Beziehungsdauer.',
              'Psychische Prozesse: aktivierend (Emotionen, Motivation, Einstellungen) und kognitiv (Wahrnehmen, Lernen).',
              'Hohes Involvement = intensive Kaufentscheidung. Tiefes Involvement = Impuls-/Gewohnheitskauf.',
              'Five Forces (Porter): Rivalit\u00e4t, neue Anbieter, Substitute, Macht der Kunden, Macht der Lieferanten.',
              'Beeinflusser sind weder K\u00e4ufer noch H\u00e4ndler \u2013 \u00fcben aber Einfluss auf den Kaufentscheid aus.',
              'Benchmarking: intern, Branche oder Best-in-Class.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Der Kunde:</strong> Die Kundenanalyse geschieht mittels ABC-Analyse, Scoringmodellen und Customer-Lifetime-Value-Berechnungen. Verständnis über das Kundenverhalten erhalten Sie aus Erkenntnissen der Konsumentenforschung.',
              '<strong>Der Handel:</strong> Die Analyse des Handels unterscheidet zwischen direktem und indirektem Vertrieb, wobei die Vertriebskanäle bei Konsumgütern, Dienstleistungen und Investitionsgütern sehr unterschiedlich sind.',
              '<strong>Die Beeinflusser:</strong> Die internen und externen Beeinflusser unterscheiden sich von den Handelspartnern dadurch, dass sie nicht in die eigentliche Kauftransaktion involviert sind, sondern bei der Kaufentscheidung von ausserhalb (externe Beeinflusser) oder innerhalb der Käuferschaft (interne Beeinflusser) Einfluss geltend machen.',
              '<strong>Die Konkurrenz:</strong> Die Stärke der Konkurrenz und weiterer Wettbewerbskräfte lässt sich anhand von fünf Wettbewerbskräften messen (Five Forces von Porter). Beim Benchmarking wird das Unternehmen verglichen – intern, mit Konkurrenten oder Best-in-Class.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'ABC-Analyse', def: 'Kundenbewertungsmodell, das Kunden nach Umsatz in A- (Top 10–20%), B- (25–40%) und C-Kunden (40–65%) einteilt.' },
              { term: 'Customer Lifetime Value (CLV)', def: 'Kundenwert über die gesamte Beziehungsdauer: Ø Preis × Häufigkeit × Beziehungsdauer.' },
              { term: 'Scoringmodell', def: 'Bewertungssystem, bei dem für jeden Kunden eine Punktzahl berechnet wird, um die Attraktivität zu messen.' },
              { term: 'Konsumentenforschung', def: 'Erforschung der Faktoren, die das Kaufverhalten der Konsumenten beeinflussen (Individual- und Sozialpsychologie).' },
              { term: 'Involvement', def: 'Inneres Engagement, mit dem sich jemand einem Gegenstand oder einer Aktivität zuwendet – beeinflusst das Kaufverhalten.' },
              { term: 'Distributionsanalyse', def: 'Analyse der eingesetzten Vertriebskanäle (direkt/indirekt) und deren Eignung für den optimalen Umsatz.' },
              { term: 'Five Forces (Porter)', def: 'Modell zur Wettbewerbsanalyse mit fünf Kräften: Rivalität, neue Anbieter, Substitute, Verhandlungsmacht der Kunden und der Lieferanten.' },
              { term: 'Benchmarking', def: 'Konkurrenzvergleich: internes Benchmarking, Branchenbenchmarking oder Best-in-Class – Ziel ist die eigene Verbesserung.' },
              { term: 'Beeinflusser', def: 'Person, die einen Kaufentscheid beeinflusst, ohne selbst Käufer, Händler oder Verkäufer zu sein (intern oder extern).' },
              { term: 'Motivation (Maslow)', def: 'Hierarchie der Bedürfnisse von physiologischen Grundbedürfnissen bis zur Selbstverwirklichung.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 4: Analyse II: Unternehmens- und Umfeldanalyse (S.75-76)
    // ================================================================
    {
      id: 'ch4', pageStart: 47, pageEnd: 58, num: 'Teil A \u2013 Kapitel 4', title: 'Analyse II: Unternehmens- und Umfeldanalyse',
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
          reveal: ['Es besteht ein starker Trend zu Outdooraktivitäten. → T', 'Fitnesscenter hat optimalen Standort. → S', 'Wir verfügen über eine gute Kostenstruktur. → S', 'Im Vergleich zur Konkurrenz haben wir eine schlechte Kommunikationspolitik. → W', 'Es gibt einen Trend zu Fitness / Körperbewusstsein. → O', 'Krankenkassen streichen Beiträge für Sport-Abos. → T']
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
          reveal: ['Mengenentwicklung → M', 'Ressourcenpotenzial → W', 'Marktanteilsentwicklung → W', 'Marktwachstumspotenzial → M', 'Effizienz der Abwicklungsprozesse → W', 'Kundenverhalten → M']
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
      learningData: {
        title: 'Analyse II: Unternehmens- und Umfeldanalyse',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Methoden der Unternehmensanalyse beschreiben.',
              'eine Stärken-Schwächen-Analyse durchführen.',
              'die Umfeldanalyse, PESTEL, erklären.',
              'eine SWOT-Analyse erstellen.',
              'aufgrund der Markt-, Unternehmens- und Umfeldanalyse eine Diagnose über die kritischen Erfolgsfaktoren und die relevanten strategischen Erfolgspositionen machen.'
            ]
          },
          {
            type: 'concept',
            title: 'Unternehmensanalyse',
            content: 'Die Unternehmensanalyse fördert die unternehmenseigenen Stärken und Schwächen zutage. Sie umfasst einerseits die Analyse der Wertkette, andererseits geht es darum, die verschiedenen Produkte und strategischen Geschäftseinheiten in einem Portfolio darzustellen. Die Erkenntnisse werden in einer Stärken-Schwächen-Analyse verdichtet.',
            highlight: 'Die Unternehmensanalyse fördert die eigenen Stärken und Schwächen zutage.'
          },
          {
            type: 'concept',
            title: 'Wertkettenanalyse (nach Porter)',
            content: 'Die Wertkette identifiziert neun Bereiche, die Werte für den Kunden schaffen. Die fünf unteren Bereiche sind primäre Aktivitäten (Eingangslogistik, Operationen, Marketing und Vertrieb, Ausgangslogistik, Kundendienst), weil sie direkt produktiv sind. Die vier oberen Bereiche sind unterstützende Aktivitäten (Unternehmensinfrastruktur, Personalwirtschaft, Technologieentwicklung, Beschaffung). Die Gewinnspanne zeigt, dass der generierte Kundennutzen grösser ist als die generierten Kosten.',
            highlight: 'Die Wertkette ist ein Analyseinstrument, das dem Management helfen soll, Kosten und Nutzen aller Aktivitäten zu überprüfen.'
          },
          {
            type: 'table',
            title: 'BCG-Matrix: Vier Felder',
            headers: ['Feld', 'Marktwachstum', 'Relativer Marktanteil', 'Beschreibung'],
            rows: [
              ['Question Marks', 'Hoch', 'Niedrig', 'Hohe Investitionen nötig, um im Wachstumsmarkt mitzuhalten. Fragezeichen, ob weiter investiert werden soll.'],
              ['Stars', 'Hoch', 'Hoch', 'Erfolgreiche Produkte mit viel Umsatz, kosten aber viel Geld, um Marktanteile zu halten und den Markt weiterzuentwickeln.'],
              ['Cash Cows', 'Niedrig', 'Hoch', 'Marktwachstum verlangsamt sich. Keine hohen Investitionen mehr nötig. SGE liefern dem Unternehmen Geld (Cash Cow).'],
              ['Dogs', 'Niedrig', 'Niedrig', 'Sowohl Marktanteil als auch Marktwachstum niedrig. SGE sollten in ein anderes Feld überführt oder aufgelöst werden.']
            ]
          },
          {
            type: 'table',
            title: 'Vergleich BCG- und McKinsey-Matrix',
            headers: ['Kriterium', 'BCG-Matrix (4-Felder)', 'McKinsey-Matrix (9-Felder)'],
            rows: [
              ['Analyseeinheit', 'Vor allem Produkte, teilweise auch SGE', 'Vor allem SGE und ganze Unternehmen'],
              ['Stufe im Marketingkonzept', 'Teil der Unternehmensanalyse', 'Teil der Diagnose, basierend auf Unternehmens-, Markt- und Umfeldanalyse'],
              ['Dimensionen', 'Eindimensionale Achsen (relativer Marktanteil und Marktwachstum)', 'Mehrdimensionale Achsen (Wettbewerbsvorteil und Marktattraktivität)'],
              ['Betrachtungszeit', 'Ist-Zustand', 'Zukunftsbetrachtung, da Wettbewerbsvorteile und Marktattraktivität zukunftsgerichtet definiert sind']
            ]
          },
          {
            type: 'concept',
            title: 'Stärken- und Schwächen-Analyse',
            content: 'Für die erfolgreiche Ausarbeitung eines Marketingkonzepts müssen die Stärken und Schwächen des eigenen Unternehmens bekannt sein. Die Struktur mit sieben Dimensionen hat sich in der Praxis bewährt: 1. Kunden (Kundentreue, Zufriedenheit), 2. Produkte und Dienstleistungen (Produktvorteile, Marktanteile), 3. Distribution (Vertriebskanäle, Standortvorteile), 4. Kommunikation (Dialog, Reputation), 5. Preise und Kosten (Beschaffungskosten, Marketingkosten, Flexibilität), 6. Management (Unternehmenskultur, Organisation, Führungsstil), 7. Finanzen und Infrastruktur (Gewinn, Bilanzstruktur, Liquidität).',
            highlight: 'Häufige Darstellungsformen sind Kreuztabelle, Profil und Spinne.'
          },
          {
            type: 'concept',
            title: 'Umfeldanalyse (PESTEL)',
            content: 'Das Umfeld besteht aus mehreren Sphären. International hat sich die Abkürzung PESTEL durchgesetzt: P = Political (politische Aspekte), E = Economical (wirtschaftliche Konditionen), S = Social (gesellschaftliche Kräfte und Trends), T = Technology (technische Entwicklungen), E = Ecological (ökologische Anliegen), L = Legal (rechtliche Rahmenbedingungen). Anhand der Analyse der Entwicklungen in diesen Sphären lassen sich wichtige Schlüsse zu möglichen Chancen und Gefahren ziehen.',
            highlight: 'PESTEL beschreibt sechs verschiedene Sphären aus dem Marktsystem, die Chancen und Gefahren aufzeigen.'
          },
          {
            type: 'table',
            title: 'PESTEL-Faktoren',
            headers: ['Abk.', 'Sphäre', 'Indikatoren', 'Beispiel'],
            rows: [
              ['P', 'Politisch', 'Innenpolitik, Gewerkschaften, Steuern, Zölle', 'Eine Steuer auf Alcopops senkt den Konsum von Alcopops.'],
              ['E', 'Wirtschaftlich', 'Inflation, Arbeitslosigkeit, Preisniveau, Zugang zu Rohstoffen', 'Ein tiefes Zinsniveau führt zu einer erhöhten Nachfrage nach Wohneigentum.'],
              ['S', 'Sozial, kulturell', 'Ausbildung, Zuwanderung, Religion, Demografie, Lebensstile', 'Das lebenslange Lernen löst die einmalige Berufsausbildung ab.'],
              ['T', 'Technisch', 'Erfindungen, neue Produkte, neue Rohstoffe', 'Die Miniaturisierung von Telefonen und neue Übertragungstechniken lösen einen Mobiltelefonboom aus.'],
              ['E', 'Ökologisch', 'CO₂-Reduktion wird mittels Appellen und Steuern angestrebt', 'Die Nachfrage nach Hybridautos und Autos mit weniger Benzinverbrauch nimmt zu.'],
              ['L', 'Rechtlich', 'Die Buchpreisbindung in der Schweiz wird aufgehoben', 'Der Buchhandel ist frei in der Preisfestsetzung.']
            ]
          },
          {
            type: 'concept',
            title: 'SWOT-Analyse',
            content: 'Die Erkenntnisse aus der Umweltanalyse und der Marktanalyse (externe Chancen und Gefahren) werden mit den Ergebnissen aus der Unternehmensanalyse (interne Stärken und Schwächen) zusammengeführt. SWOT steht für: S = Strengths (Stärken), W = Weaknesses (Schwächen), O = Opportunities (Chancen), T = Threats (Gefahren). Chancen und Gefahren beziehen sich auf Entwicklungen in der Zukunft und kommen von aussen. Stärken und Schwächen sind intern und können vom Unternehmen direkt gesteuert werden.',
            highlight: 'Aus der Kombination der Stärken und Schwächen mit den Chancen und Gefahren ergeben sich vier SWOT-Strategien: SO, ST, WO, WT.'
          },
          {
            type: 'svg',
            title: 'SWOT-Matrix',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><linearGradient id="swG1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626" stop-opacity=".12"/><stop offset="100%" stop-color="#dc2626" stop-opacity=".04"/></linearGradient></defs><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="36" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">SWOT-Matrix</text><text x="265" y="70" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Intern</text><text x="535" y="70" text-anchor="middle" font-size="13" fill="#64748b" font-weight="600">Extern</text><line x1="400" y1="55" x2="400" y2="400" stroke="#cbd5e1" stroke-width="2"/><line x1="100" y1="85" x2="700" y2="85" stroke="#cbd5e1" stroke-width="2"/><text x="250" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="#dc2626">Stärken (S)</text><text x="550" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="#16a34a">Chancen (O)</text><rect x="110" y="112" width="280" height="120" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/><text x="250" y="140" text-anchor="middle" font-size="12" fill="#1e293b">Hohe Produktqualität</text><text x="250" y="162" text-anchor="middle" font-size="12" fill="#1e293b">Starke Marke</text><text x="250" y="184" text-anchor="middle" font-size="12" fill="#1e293b">Effiziente Prozesse</text><text x="250" y="206" text-anchor="middle" font-size="12" fill="#1e293b">Know-how der Mitarbeitenden</text><rect x="410" y="112" width="280" height="120" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/><text x="550" y="140" text-anchor="middle" font-size="12" fill="#1e293b">Neue Marktsegmente</text><text x="550" y="162" text-anchor="middle" font-size="12" fill="#1e293b">Technologische Trends</text><text x="550" y="184" text-anchor="middle" font-size="12" fill="#1e293b">Regulatorische Änderungen</text><text x="550" y="206" text-anchor="middle" font-size="12" fill="#1e293b">Wachsende Nachfrage</text><text x="250" y="254" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">Schwächen (W)</text><text x="550" y="254" text-anchor="middle" font-size="14" font-weight="700" fill="#7c3aed">Gefahren (T)</text><rect x="110" y="266" width="280" height="120" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/><text x="250" y="294" text-anchor="middle" font-size="12" fill="#1e293b">Hohe Kostenstruktur</text><text x="250" y="316" text-anchor="middle" font-size="12" fill="#1e293b">Schwache Online-Präsenz</text><text x="250" y="338" text-anchor="middle" font-size="12" fill="#1e293b">Geringe Innovationskraft</text><text x="250" y="360" text-anchor="middle" font-size="12" fill="#1e293b">Abhängigkeit von Lieferanten</text><rect x="410" y="266" width="280" height="120" rx="12" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/><text x="550" y="294" text-anchor="middle" font-size="12" fill="#1e293b">Starke Konkurrenz</text><text x="550" y="316" text-anchor="middle" font-size="12" fill="#1e293b">Konjunkturrückgang</text><text x="550" y="338" text-anchor="middle" font-size="12" fill="#1e293b">Neue Substitute</text><text x="550" y="360" text-anchor="middle" font-size="12" fill="#1e293b">Verändertes Kaufverhalten</text><rect x="6" y="160" width="90" height="30" rx="6" fill="#dc2626"/><text x="51" y="180" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Positiv ↑</text><rect x="6" y="310" width="90" height="30" rx="6" fill="#64748b"/><text x="51" y="330" text-anchor="middle" font-size="11" fill="#fff" font-weight="600">Negativ ↓</text></svg>'
          },
          {
            type: 'table',
            title: 'SWOT-Strategien',
            headers: ['Strategie', 'Kombination', 'Handlung'],
            rows: [
              ['SO-Strategien', 'Stärke trifft auf Chance', 'Stärken einsetzen, um Chancen zu nutzen und zu multiplizieren.'],
              ['WO-Strategien', 'Schwäche trifft auf Chance', 'Schwächen minimieren, um Chancen zu nutzen. Grösstes Verbesserungspotenzial.'],
              ['ST-Strategien', 'Stärke trifft auf Gefahr', 'Stärken einsetzen, um Gefahren zu verringern.'],
              ['WT-Strategien', 'Schwäche trifft auf Gefahr', 'Schwächen minimieren, um Gefahren abzuwenden. Keine Vorteile vorhanden.']
            ]
          },
          {
            type: 'concept',
            title: 'Diagnose: Kritische Erfolgsfaktoren (KEF)',
            content: 'Kritische Erfolgsfaktoren sind unbedingt notwendige Faktoren, damit ein Unternehmen in einer Branche am Markt überleben kann. Um Erfolgsfaktoren zu identifizieren, sollte sich das Unternehmen fragen: Welche Entwicklungen finden in der Umwelt statt? Welche Wettbewerbskräfte herrschen in der Branche? Für welche Eigenschaften des Produkts sind die Kunden bereit, einen Preis zu bezahlen? Erfolgsfaktoren können sich über die Jahre ändern.',
            highlight: 'Beherrscht ein Unternehmen einen Erfolgsfaktor, bietet er ein Nutzenpotenzial – eine Chance. Beherrscht es ihn nicht, wird er zur Gefahr.'
          },
          {
            type: 'concept',
            title: 'Strategische Erfolgspositionen (SEP) und Kernkompetenzen',
            content: 'Eine strategische Erfolgsposition (SEP) ist eine bewusst geschaffene Position der Stärke, die dem Unternehmen langfristig einen Vorsprung gegenüber der Konkurrenz sichert (Wettbewerbsvorteil). Das Unternehmen möchte mit der SWOT-Analyse Nutzenpotenziale entdecken. Nutzenpotenziale liegen nicht nur im Markt, sondern auch in den Leistungen und Unternehmensfunktionen. Kernkompetenzen sichern ein langfristiges Überleben des Unternehmens, weil sie Quellen für SEP darstellen, einzigartig und nachhaltig sind und vielfältig einsetzbar sind.',
            highlight: 'Kernkompetenzen sichern ein langfristiges Überleben, weil sie einzigartig, nachhaltig und schwer zu imitieren sind.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Wertkette (Porter): 5 prim\u00e4re + 4 unterst\u00fctzende Aktivit\u00e4ten.',
              'BCG-Matrix: Stars, Cash Cows, Question Marks, Dogs (Marktwachstum vs. Marktanteil).',
              'McKinsey-Matrix: 9 Felder, mehrdimensional, zukunftsgerichtet (Marktattraktivit\u00e4t vs. Wettbewerbsvorteil).',
              'PESTEL: Political, Economical, Social, Technological, Ecological, Legal.',
              'SWOT: St\u00e4rken/Schw\u00e4chen (intern) + Chancen/Gefahren (extern) \u2192 4 Strategien (SO, ST, WO, WT).',
              'KEF = branchenweite Erfolgsfaktoren. SEP = unternehmensspezifischer Wettbewerbsvorteil.',
              'Kernkompetenzen sind einzigartig, nachhaltig und schwer zu imitieren.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Unternehmensanalyse:</strong> Bei der Unternehmensanalyse geht es einerseits um die Analyse der Wertkette, andererseits muss das Unternehmen seine Produkte und strategischen Geschäftseinheiten als Gesamtheit betrachten (BCG-Portfolio, McKinsey-Portfolio).',
              '<strong>Stärken-Schwächen-Analyse:</strong> Die Stärken und Schwächen werden in sieben Dimensionen (Kunden, Produkte, Distribution, Kommunikation, Preise/Kosten, Management, Finanzen) analysiert und mit der Konkurrenz verglichen.',
              '<strong>PESTEL:</strong> Die Umfeldanalyse umfasst sechs Bereiche (P, E, S, T, E, L). Sie wird zusammen mit Erkenntnissen aus der Marktanalyse zu einer Chancen-Gefahren-Analyse verarbeitet.',
              '<strong>SWOT-Analyse:</strong> Die Resultate aus den unterschiedlichen Analysen werden in einer SWOT-Matrix zusammengeführt. Durch Kombination der Stärken/Schwächen mit den Chancen/Gefahren ergeben sich vier SWOT-Strategien: SO, ST, WO, WT.',
              '<strong>Diagnose:</strong> Der letzte Schritt ist die Interpretation der Analysedaten. Das Unternehmen möchte mit der SWOT-Analyse kritische Erfolgsfaktoren sowie Nutzenpotenziale identifizieren, die zu strategischen Erfolgspositionen (SEP) führen. Kernkompetenzen sichern ein langfristiges Überleben.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Wertkette (Porter)', def: 'Analyseinstrument mit neun Bereichen (5 primäre, 4 unterstützende Aktivitäten), das Kosten und Nutzen aller Aktivitäten überprüft.' },
              { term: 'Boston-Consulting-Group-Matrix', def: 'Portfolioanalyse mit vier Feldern (Stars, Cash Cows, Question Marks, Dogs) basierend auf Marktwachstum und relativem Marktanteil.' },
              { term: 'McKinsey-Matrix', def: '9-Felder-Matrix basierend auf Marktattraktivität und Wettbewerbsvorteil, zukunftsgerichtet und mehrdimensional.' },
              { term: 'Stärken-Schwächen-Analyse', def: 'Analyse in sieben Dimensionen (Kunden, Produkte, Distribution, Kommunikation, Preise/Kosten, Management, Finanzen) mit Vergleich zur Konkurrenz.' },
              { term: 'PESTEL', def: 'Umfeldanalyse mit sechs Sphären: Political, Economical, Social, Technological, Ecological, Legal.' },
              { term: 'SWOT-Analyse', def: 'Kombination von Stärken/Schwächen (intern) mit Chancen/Gefahren (extern) zu vier Strategien: SO, ST, WO, WT.' },
              { term: 'Kritische Erfolgsfaktoren (KEF)', def: 'Notwendige Faktoren, damit ein Unternehmen in einer Branche am Markt überleben kann.' },
              { term: 'Strategische Erfolgsposition (SEP)', def: 'Bewusst geschaffene Position der Stärke, die langfristig einen Wettbewerbsvorteil sichert.' },
              { term: 'Kernkompetenzen', def: 'Einzigartige, nachhaltige und vielfältig einsetzbare Fähigkeiten, die Quellen für SEP darstellen und schwer zu imitieren sind.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 5: Marketingziele (S.85-86)
    // ================================================================
    {
      id: 'ch5', pageStart: 59, pageEnd: 72, num: 'Teil A \u2013 Kapitel 5', title: 'Marketingziele',
      exercises: [
        {
          id: 27, type: 'fill', title: 'Zielhierarchie',
          q: 'Ordnen Sie die Zielebenen in die richtige Reihenfolge (von oben nach unten):',
          template: '1. {0}, 2. {1}, 3. {2}, 4. {3}',
          blanks: [['Unternehmensziele'],['Marketingoberziele'],['Marketingzwischenziele'],['Marketingunterziele']],
          tips: ['Von der obersten Ebene (Unternehmen) bis zur untersten (Unterziele).'],
          reveal: ['Lücke 1: Unternehmensziele', 'Lücke 2: Marketingoberziele', 'Lücke 3: Marketingzwischenziele', 'Lücke 4: Marketingunterziele']
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
          reveal: ['Richtige Antwort: Langfristige Ziele von 3-5 Jahren', 'Strategisch = langfristig, operativ = mittelfristig, taktisch = kurzfristig.']
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
          reveal: ['Umsatz und Gewinn → Zielkongruenz', 'Kundenzufriedenheit und Preis → Zielkonflikt', 'Umsatz und Marge → Zielindifferenz']
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
          reveal: ['Ich will in 2 Wochen 4 Kilo abnehmen. → T', 'Mein Konzept für die Umnutzung des Dachgeschosses liegt per 31.05., 9 Uhr zur Verabschiedung vor. → T', 'Bis Anfang nächster Woche erarbeite ich eine Grossofferte für die Firma Alpa AG. → R', 'Bis 15. Dezember 20xx versenden wir die Weihnachtsgeschenke an Firmenkunden. → T']
        }
      ],
      learningData: {
        title: 'Marketingziele',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die verschiedenen Zielarten unterscheiden.',
              'mithilfe der 5 W und der SMART-Formel \u00fcberpr\u00fcfbare Ziele formulieren.',
              'die Beziehungen der Ziele zueinander beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: 'Ziel und Zielgruppe',
            content: 'Unter einem Ziel verstehen wir einen erstrebenswerten Zustand in der Zukunft. Marketing umfasst viele m\u00e4chtige Instrumente, die den Erfolg oder den Niedergang eines Unternehmens massgeblich mitpr\u00e4gen k\u00f6nnen. Deshalb m\u00fcssen Marketing- und Verkaufsverantwortliche Zielgruppen definieren und Ziele formulieren. Nur so kann \u00fcberpr\u00fcft werden, ob die Strategien und Massnahmen erfolgreich sind.',
            highlight: 'Zielgruppen: Produktverwender, Zwischenhandel, externe Beeinflusser, eigene Mitarbeitende.'
          },
          {
            type: 'concept',
            title: 'Zielarten / Zielhierarchie',
            content: 'Eine Zielhierarchie liegt vor, wenn einzelne Ziele anderen Zielen unter- oder \u00fcbergeordnet werden k\u00f6nnen. Aufgrund der Zielhierarchie kann man die Ziele nach verschiedenen Kriterien einteilen: nach Ebenen, nach Konkretisierungsgrad, nach Zeithorizont und nach Beobachtbarkeit.',
            highlight: 'Ziele lassen sich nach 4 Kriterien gliedern: Ebenen, Konkretisierungsgrad, Zeithorizont, Beobachtbarkeit.'
          },
          {
            type: 'svg',
            title: 'Zielhierarchie-Pyramide',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="380" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="36" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Zielhierarchie-Pyramide</text><polygon points="350,60 580,340 120,340" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="188" y1="220" x2="512" y2="220" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/><line x1="240" y1="280" x2="460" y2="280" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/><rect x="280" y="80" width="140" height="44" rx="8" fill="#dc2626"/><text x="350" y="100" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Unternehmens-</text><text x="350" y="116" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">ziele</text><rect x="230" y="170" width="240" height="40" rx="8" fill="#ef4444"/><text x="350" y="196" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">Marketingziele</text><rect x="180" y="240" width="340" height="34" rx="8" fill="#f87171"/><text x="350" y="263" text-anchor="middle" font-size="13" fill="#fff" font-weight="600">Instrumentalziele (4P)</text><rect x="140" y="300" width="420" height="30" rx="8" fill="#fca5a5"/><text x="350" y="321" text-anchor="middle" font-size="12" fill="#7f1d1d" font-weight="600">Massnahmenziele (konkrete Aktionen)</text><text x="630" y="100" text-anchor="start" font-size="11" fill="#64748b">Strategisch</text><text x="630" y="104" text-anchor="start" font-size="10" fill="#94a3b8">(langfristig)</text><text x="630" y="193" text-anchor="start" font-size="11" fill="#64748b">Operativ</text><text x="630" y="207" text-anchor="start" font-size="10" fill="#94a3b8">(mittelfristig)</text><text x="630" y="265" text-anchor="start" font-size="11" fill="#64748b">Taktisch</text><text x="630" y="279" text-anchor="start" font-size="10" fill="#94a3b8">(kurzfristig)</text><path d="M620,98 L612,98" stroke="#94a3b8" stroke-width="1"/><path d="M620,193 L560,193" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/><path d="M620,265 L530,265" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/></svg>'
          },
          {
            type: 'table',
            title: 'Zielarten nach Ebenen',
            headers: ['Stufe', 'Zielart', 'Beispiel'],
            rows: [
              ['1. Stufe', 'Unternehmensziele', 'Marketingziele, Produktionsziele, Beschaffungsziele usw.'],
              ['2. Stufe', 'Marketingoberziele', 'Ziele f\u00fcr die SGE 1, SGE 2 usw.'],
              ['3. Stufe', 'Marketingzwischenziele', 'Ziele pro Marketingsubmix, z.B. Ziele f\u00fcr die Kommunikation'],
              ['4. Stufe', 'Marketingunterziele', 'Ziele der einzelnen konkreten Massnahmen, z.B. Werbeziele, Verkaufsziele']
            ]
          },
          {
            type: 'concept',
            title: 'Ziele nach Konkretisierungsgrad',
            content: 'Es gibt strategische, operative und taktische Ziele. Strategische Marketingziele beziehen sich auf das Gesamtunternehmen und sind langfristig ausgelegt. Operative Marketingziele konkretisieren die strategischen Ziele mittelfristig. Taktische Marketingziele beinhalten die konkreten Aktivit\u00e4ten, um die \u00fcbergeordneten operativen Ziele zu erreichen.',
            highlight: 'Strategische Ziele = langfristig, operative Ziele = mittelfristig, taktische Ziele = kurzfristige Massnahmen.'
          },
          {
            type: 'concept',
            title: 'Qualitative und quantitative Ziele',
            content: 'Marketingziele werden in qualitative und quantitative Ziele unterteilt. Vor\u00f6konomische (qualitative) Ziele sind oft theoretische Konstrukte, die nicht direkt beobachtbar sind (z.B. Image, Zufriedenheit). \u00d6konomische (quantitative) Ziele haben einen direkten Einfluss auf den Unternehmenserfolg und lassen sich einfach messen (z.B. Umsatz, Gewinn). Die Service-Gewinn-Kette postuliert: Je besser die Produkt- und Servicequalit\u00e4t, desto zufriedener die Kunden, was sich positiv auf Umsatz, Marktanteil und Profitabilit\u00e4t auswirkt.',
            highlight: 'Qualitative Ziele = vor\u00f6konomisch (Image, Zufriedenheit). Quantitative Ziele = \u00f6konomisch (Umsatz, Gewinn).'
          },
          {
            type: 'concept',
            title: 'Operationalisierung von Zielen (5 W und SMART)',
            content: 'Die 5 W helfen bei der Zieloperationalisierung: 1. Was? (Zielinhalt), 2. Wie viel? (Zielquantifizierung), 3. Wem? (Zielsegment), 4. Wann? (Zielperiode), 5. Wo? (Zielmarkt). Damit die Ziele SMART sind, m\u00fcssen sie: (S) spezifisch/konkret, (M) messbar, (A) realistischerweise erreichbar, (R) ergebnisorientiert und (T) termingebunden sein.',
            highlight: '5 W: Was, Wie viel, Wem, Wann, Wo. SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.'
          },
          {
            type: 'concept',
            title: 'Beziehungen zwischen Zielen',
            content: 'Da in der Marketingpraxis selten nur ein einziges Ziel verfolgt wird, ist es wichtig, die Beziehungen zwischen den verschiedenen Zielen zu verstehen. Zielkongruenz: Ziele erg\u00e4nzen und verst\u00e4rken sich gegenseitig. Zielkonflikt: Die Erreichung eines Ziels steht im Konflikt mit der Erreichung eines anderen. Zielindifferenz: Zwei Ziele tangieren sich nicht.',
            highlight: 'Zielkongruenz = Ziele f\u00f6rdern sich. Zielkonflikt = Ziele behindern sich. Zielindifferenz = Ziele sind unabh\u00e4ngig.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Zielhierarchie: Unternehmensziele \u2192 Marketingoberziele \u2192 Marketingzwischenziele \u2192 Marketingunterziele.',
              'Strategisch = langfristig (3\u20135 J.), operativ = mittelfristig, taktisch = kurzfristig.',
              'Qualitative Ziele = vor\u00f6konomisch (Image, Zufriedenheit). Quantitative = \u00f6konomisch (Umsatz, Gewinn).',
              '5 W zur Zielformulierung: Was, Wie viel, Wem, Wann, Wo.',
              'SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.',
              'Zielkongruenz = f\u00f6rdern sich. Zielkonflikt = behindern sich. Zielindifferenz = unabh\u00e4ngig.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Ein <strong>Ziel</strong> ist ein erstrebenswerter Zustand in der Zukunft. Eine <strong>Zielhierarchie</strong> besteht aus \u00fcber- und untergeordneten Zielen.',
              'Ziele lassen sich nach verschiedenen Kriterien gliedern: <strong>Ebenen</strong> (Unternehmens- bis Marketingunterziele), <strong>Konkretisierungsgrad</strong> (strategisch, operativ, taktisch), <strong>Zeithorizont</strong> (lang-, mittel-, kurzfristig), <strong>Beobachtbarkeit</strong> (qualitativ/vor\u00f6konomisch vs. quantitativ/\u00f6konomisch).',
              'Ziele sind \u00fcberpr\u00fcfbar, wenn sie einen eindeutigen <strong>Zielinhalt</strong> beschreiben (was?), <strong>messbar</strong> sind (wie viel?), die <strong>Zielgruppe</strong> bezeichnen (wem?) und sowohl den zeitlichen (wann?) als auch den r\u00e4umlichen Bezug (wo?) angeben.',
              'Ziele stehen in vielf\u00e4ltigen Beziehungen zueinander: <strong>Zielkonflikt</strong>, <strong>Zielkongruenz</strong> oder <strong>Zielindifferenz</strong>.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Marketingziele', def: 'Erstrebenswerte Zust\u00e4nde, die durch Marketingaktivit\u00e4ten erreicht werden sollen.' },
              { term: 'Zielhierarchie', def: 'Hierarchische Ordnung von Zielen auf verschiedenen Ebenen.' },
              { term: 'SMART-Formel', def: 'Kriterien f\u00fcr gute Ziele: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.' },
              { term: '5 W', def: 'Die f\u00fcnf Fragen zur Operationalisierung: Was, Wie viel, Wem, Wann, Wo.' },
              { term: 'Zielkonflikt', def: 'Situation, in der die Erreichung eines Ziels die Erreichung eines anderen behindert.' },
              { term: 'Zielkongruenz', def: 'Situation, in der sich Ziele gegenseitig f\u00f6rdern und verst\u00e4rken.' },
              { term: 'Vor\u00f6konomische Ziele', def: 'Qualitative Ziele wie Image, Zufriedenheit \u2013 nicht direkt messbar.' },
              { term: '\u00d6konomische Ziele', def: 'Quantitative Ziele wie Umsatz, Gewinn \u2013 direkt messbar.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 6: Marketingstrategien (S.112-113)
    // ================================================================
    {
      id: 'ch6', pageStart: 73, pageEnd: 86, num: 'Teil A \u2013 Kapitel 6', title: 'Marketingstrategien',
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
          reveal: ['Starbucks betreibt nicht nur Restaurants, sondern verkauft Kaffee in Supermärkten. → Marktentwicklung', 'Lindt-Schokoladen treten mit grossem Aufwand in den amerikanischen Markt ein. → Marktentwicklung', 'Das Plattenlabel Virgin betreibt eine Fluglinie und stellt Cola her. → Diversifikation', 'Google übernimmt YouTube für USD 1.6 Mrd. → Diversifikation']
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
          reveal: ['Richtige Antwort: Wenn die Kundenbedürfnisse sehr homogen sind und der Markt gross genug ist', 'Bei homogenen Bedürfnissen lohnt sich keine Differenzierung.']
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
      learningData: {
        title: 'Marketingstrategien',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die verschiedenen Marketingstrategien beschreiben.',
              'die 4 Wachstumsstrategien nach Ansoff erkl\u00e4ren.',
              'erl\u00e4utern, warum eine Segmentierung oft erfolgversprechender ist als Massenmarketing.',
              'erkl\u00e4ren, wie eine Marke, ein Produkt oder ein Unternehmen positioniert wird.',
              'verschiedene Strategien hinsichtlich der Marke nennen.',
              'Synergien bei der Evaluation und der Kombination von Marketingstrategien erkennen.'
            ]
          },
          {
            type: 'concept',
            title: 'Strategiemix',
            content: 'Die Idee des Marketingmix ist die optimale Kombination (= Mix) verschiedener Marketinginstrumente. Analog dazu gibt es einen Strategiemix. In der Praxis stellt sich n\u00e4mlich nicht die Frage, ob man eine Wachstumsstrategie, eine Positionierungsstrategie oder eine Markenstrategie w\u00e4hlt. Die Aufgabe besteht darin, eine optimale Kombination der Strategien zu finden. Kriterien: kritische Erfolgsfaktoren, strategische Erfolgspositionen, Strategiekombination f\u00fcr Synergien.',
            highlight: 'Der Strategiemix kombiniert verschiedene strategische Ans\u00e4tze optimal miteinander.'
          },
          {
            type: 'concept',
            title: 'Wachstumsstrategien nach Ansoff',
            content: 'Die Ansoff-Matrix zeigt vier Wachstumsstrategien basierend auf zwei Dimensionen (Markt und Produkt): Marktpenetration (bestehende Produkte in bestehenden M\u00e4rkten, \u00abmehr vom selben\u00bb), Produkt-/Sortimentsentwicklung (neue Produkte f\u00fcr bestehende Kunden), Marktentwicklung (bestehende Produkte in neuen M\u00e4rkten/Segmenten), Diversifikation (neue Produkte in neuen M\u00e4rkten). Die strategische L\u00fccke (Gap-Analyse) zeigt die Differenz zwischen gew\u00fcnschter und erwarteter Umsatzentwicklung.',
            highlight: 'Ansoff-Matrix: Marktpenetration, Produktentwicklung, Marktentwicklung, Diversifikation.'
          },
          {
            type: 'svg',
            title: 'Ansoff-Matrix (Wachstumsstrategien)',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="36" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Ansoff-Matrix</text><text x="350" y="75" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b">Produkte</text><text x="260" y="95" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="600">Bestehend</text><text x="510" y="95" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="600">Neu</text><text x="80" y="220" text-anchor="middle" font-size="14" font-weight="600" fill="#64748b" transform="rotate(-90,80,220)">Märkte</text><text x="120" y="190" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="600">Bestehend</text><text x="120" y="320" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="600">Neu</text><line x1="385" y1="105" x2="385" y2="400" stroke="#cbd5e1" stroke-width="2"/><line x1="140" y1="245" x2="635" y2="245" stroke="#cbd5e1" stroke-width="2"/><rect x="150" y="112" width="225" height="125" rx="14" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="262" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">Marktpenetration</text><text x="262" y="178" text-anchor="middle" font-size="11" fill="#64748b">«Mehr vom Selben»</text><text x="262" y="196" text-anchor="middle" font-size="11" fill="#64748b">Bestehende Produkte,</text><text x="262" y="212" text-anchor="middle" font-size="11" fill="#64748b">bestehende Märkte</text><rect x="395" y="112" width="225" height="125" rx="14" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text x="507" y="155" text-anchor="middle" font-size="15" font-weight="700" fill="#e11d48">Produktentwicklung</text><text x="507" y="178" text-anchor="middle" font-size="11" fill="#64748b">Neue Produkte für</text><text x="507" y="196" text-anchor="middle" font-size="11" fill="#64748b">bestehende Kunden</text><rect x="150" y="252" width="225" height="125" rx="14" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text x="262" y="295" text-anchor="middle" font-size="15" font-weight="700" fill="#e11d48">Marktentwicklung</text><text x="262" y="318" text-anchor="middle" font-size="11" fill="#64748b">Bestehende Produkte</text><text x="262" y="336" text-anchor="middle" font-size="11" fill="#64748b">in neuen Märkten</text><rect x="395" y="252" width="225" height="125" rx="14" fill="#fecdd3" stroke="#be123c" stroke-width="2"/><text x="507" y="295" text-anchor="middle" font-size="15" font-weight="700" fill="#be123c">Diversifikation</text><text x="507" y="318" text-anchor="middle" font-size="11" fill="#64748b">Neue Produkte</text><text x="507" y="336" text-anchor="middle" font-size="11" fill="#64748b">in neuen Märkten</text><text x="648" y="175" text-anchor="middle" font-size="20" fill="#fca5a5">→</text><text x="648" y="195" text-anchor="middle" font-size="10" fill="#94a3b8">Risiko ↑</text></svg>'
          },
          {
            type: 'concept',
            title: 'Diversifikation',
            content: 'Bei der Diversifikation werden neue M\u00e4rkte oder Segmente mit neuen Produkten und Dienstleistungen bearbeitet. Man unterscheidet drei Arten: Horizontale Diversifikation (neue Produkte mit Synergien zu bestehenden Produktlinien), Vertikale Diversifikation (Einstieg in vor- oder nachgelagerte Branchen, z.B. Vorw\u00e4rts- oder R\u00fckw\u00e4rtsintegration) und Laterale Diversifikation (v\u00f6llig neue Gesch\u00e4ftsfelder ohne Bezug zum bisherigen Gesch\u00e4ft).',
            highlight: 'Diversifikation: horizontal (verwandte Produkte), vertikal (Wertsch\u00f6pfungskette), lateral (branchenfremd).'
          },
          {
            type: 'concept',
            title: 'Internationale Strategien',
            content: 'Bei der Marktentwicklung steht die Internationalisierung der M\u00e4rkte im Vordergrund. Formen der Internationalisierung: Export, Lizenzvergabe, Franchising, Joint Venture und eigene Tochtergesellschaften. Eine wichtige Frage ist die Standardisierung vs. Differenzierung: Bei Standardisierung wird auf der ganzen Welt das Gleiche angeboten, bei Differenzierung wird \u00fcberall etwas anderes angeboten. Voraussetzungen f\u00fcr globale M\u00e4rkte: \u00e4hnliche Marktbed\u00fcrfnisse und \u00e4hnliche Marktressourcen.',
            highlight: 'Internationalisierungsformen: Export, Lizenzvergabe, Franchising, Joint Venture, Tochtergesellschaft.'
          },
          {
            type: 'concept',
            title: 'Segmentierungsstrategien',
            content: 'Die Segmentierung ber\u00fccksichtigt, dass Kunden unterschiedliche Bed\u00fcrfnisse haben. Bei der Segmentierung werden \u00e4hnliche Kunden in Segmenten zusammengefasst. Bei Privatkunden werden 4 Segmentierungskriterien unterschieden: geografische, demografische, psychografische und kaufverhaltensbezogene Kriterien. Die Spannweite reicht vom Massenmarketing (\u00abeine Gr\u00f6sse f\u00fcr alle\u00bb) bis zum Individualmarketing (massgeschneidert). F\u00fcr die Umsetzung von Individualmarketing werden die Instrumente des Customer Relationship Management (CRM) genutzt.',
            highlight: 'Segmentierung: geografisch, demografisch, psychografisch, kaufverhaltensbezogen.'
          },
          {
            type: 'concept',
            title: 'Positionierungsstrategien',
            content: 'Positionierung beschreibt, wie sich eine Marke, ein Produkt oder ein Unternehmen gegen\u00fcber der Konkurrenz unterscheidet. Entscheidend ist die Wahrnehmung der Kunden. Die Differenzierung kann \u00fcber einen h\u00f6heren Nutzen oder weniger Kosten erfolgen. Ziele der Positionierung: Abheben durch Wahl der SGF (Grobpositionierung), Abheben mittels differenziertem Angebot (Feinpositionierung), auf Positionierung abgestimmte Marketingkommunikation (Markierung/Branding).',
            highlight: 'Positionierung = wie sich ein Angebot in der Kundenwahrnehmung von der Konkurrenz unterscheidet.'
          },
          {
            type: 'concept',
            title: 'Strategien hinsichtlich der Marke',
            content: 'Eine Marke signalisiert die Herkunft eines Produkts und dient der Identifizierung und Differenzierung. Markenstrategien: Herstellermarkenstrategie (Hersteller positioniert als Markenartikel), Handelsmarkenstrategie (z.B. Eigenmarken wie M-Budget), No-Name-Strategie und Me-too-Strategie. Markenentwicklungsstrategien: Sortimentserweiterung (Line Extension), Markenerweiterung (Brand Extension), Multimarken und Neue Marke.',
            highlight: 'Markenstrategien: Herstellermarke, Handelsmarke, No-Name, Me-too. Entwicklung: Line/Brand Extension, Multimarken.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Ansoff-Matrix: Marktpenetration, Produktentwicklung, Marktentwicklung, Diversifikation.',
              'Diversifikation: horizontal (verwandt), vertikal (Wertsch\u00f6pfungskette), lateral (branchenfremd).',
              'Internationalisierung: Export \u2192 Lizenz \u2192 Franchising \u2192 Joint Venture \u2192 Tochtergesellschaft.',
              'Segmentierung: geografisch, demografisch, psychografisch, kaufverhaltensbezogen.',
              'Positionierung = wie Kunden das Angebot im Vergleich zur Konkurrenz wahrnehmen.',
              'Markenstrategien: Herstellermarke, Handelsmarke, No-Name, Me-too.',
              'CRM erm\u00f6glicht Individualmarketing und Kundenbindung.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Beim <strong>Strategiemix</strong> geht es darum, die richtigen strategischen Ans\u00e4tze miteinander zu kombinieren basierend auf Erfolgsfaktoren und Zielen.',
              '<strong>Wachstumsstrategien</strong> nach Ansoff: Marktpenetration, Produktentwicklung, Marktentwicklung, Diversifikation. Solche L\u00fccken werden mit der <strong>Gap-Analyse</strong> erkannt.',
              'Bei der <strong>Internationalisierung</strong> gibt es verschiedene Formen: Export, Lizenzvergabe, Franchising, Joint Venture und Tochtergesellschaften. Wichtig: Standardisierung vs. Differenzierung.',
              'Die <strong>Segmentierung</strong> ber\u00fccksichtigt, dass Kunden unterschiedliche Bed\u00fcrfnisse haben. 4 Kriterien: geografisch, demografisch, psychografisch, kaufverhaltensbezogen.',
              '<strong>Positionierung</strong> zeigt, wie sich ein Unternehmen von der Konkurrenz abhebt. Sie ist eng mit der <strong>Marke</strong> verbunden.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Strategiemix', def: 'Optimale Kombination verschiedener Marketingstrategien.' },
              { term: 'Ansoff-Matrix', def: '4-Felder-Matrix mit den Wachstumsstrategien: Marktpenetration, Produktentwicklung, Marktentwicklung, Diversifikation.' },
              { term: 'Gap-Analyse', def: 'Analyse der Wachstumsl\u00fccke zwischen gew\u00fcnschter und erwarteter Umsatzentwicklung.' },
              { term: 'Marktpenetration', def: 'Wachstum durch \u00abmehr vom selben\u00bb \u2013 bestehende Produkte in bestehenden M\u00e4rkten.' },
              { term: 'Diversifikation', def: 'Wachstum durch neue Produkte in neuen M\u00e4rkten (horizontal, vertikal, lateral).' },
              { term: 'Segmentierung', def: 'Zusammenfassung von Kunden mit \u00e4hnlichen Bed\u00fcrfnissen in Segmente.' },
              { term: 'Positionierung', def: 'Wahrnehmung eines Angebots gegen\u00fcber der Konkurrenz aus Kundensicht.' },
              { term: 'CRM', def: 'Customer Relationship Management \u2013 Instrumente f\u00fcr Individualmarketing und Kundenbindung.' },
              { term: 'Markenstrategie', def: 'Strategische Entscheidung zur Markenf\u00fchrung (Hersteller-, Handelsmarke, No-Name, Me-too).' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 7: Marketingmix (S.138)
    // ================================================================
    {
      id: 'ch7', pageStart: 87, pageEnd: 100, num: 'Teil A \u2013 Kapitel 7', title: 'Marketingmix',
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
          tips: ['Die 4P stehen für Product, Price, Place und Promotion.', 'Überlegen Sie: Betrifft das Instrument das Produkt selbst, den Preis, den Vertrieb oder die Kommunikation?', 'Rabatte gehören zum Preis, Kanäle zur Distribution, Werbung zur Kommunikation.'],
          reveal: ['Sortimentspolitik → Product', 'Rabattgewährung → Price', 'Wahl des Vertriebskanals → Place', 'Werbung und PR → Promotion']
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
          tips: ['Es geht um die Unterschiede zwischen Konsumgüter-, Dienstleistungs- und Investitionsgütermarketing.', 'Dienstleistungen haben besondere Eigenschaften – welche zusätzlichen P braucht es?', 'Denken Sie an People, Process und Physical Tangibles als Erweiterung der 4P.'],
          reveal: ['Aussage 1: Richtig. Richtig. Die 4P sind das klassische Modell für Konsumgütermarketing.', 'Aussage 2: Falsch. Falsch. Bei Dienstleistungen kommen 3 zusätzliche P hinzu: People, Process, Physical Tangibles.', 'Aussage 3: Richtig. Richtig. Wenige Käufer, enge Beziehung, Kaufentscheid durch mehrere Personen (Buying Center).']
        }
      ],
      learningData: {
        title: 'Marketingmix',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die Begriffe \u00abMarketingmix\u00bb, \u00abTeilmix\u00bb und \u00abSubmix\u00bb erkl\u00e4ren.',
              'das Standard-Dominanz-Modell beschreiben.',
              'den Produktlebenszyklus darstellen.',
              'die Besonderheiten des internationalen Marketingmix erl\u00e4utern.',
              'Branchenunterschiede bei der Gestaltung des Marketingmix auff\u00fchren.'
            ]
          },
          {
            type: 'concept',
            title: 'Begriffsdefinition',
            content: 'Als Marketingmix bezeichnen wir die Kombination aller Marketinginstrumente zur Umsetzung der Marketingstrategie. Der Marketingmix wird aus der Strategie abgeleitet und besteht aus verschiedenen Submixen: den 4 P (Product, Price, Place, Promotion). Die Submixe fassen verschiedene Marketinginstrumente zusammen. Die Instrumente werden durch Marketingmassnahmen konkretisiert.',
            highlight: 'Marketingmix = Kombination aller Marketinginstrumente. Submixe: Product, Price, Place, Promotion (4P).'
          },
          {
            type: 'svg',
            title: '4P-Modell des Marketingmix',
            svg: '<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="400" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="36" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Die 4 P des Marketingmix</text><circle cx="350" cy="205" r="52" fill="#dc2626"/><text x="350" y="200" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Marketing-</text><text x="350" y="216" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">mix</text><rect x="60" y="70" width="200" height="110" rx="14" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/><text x="160" y="100" text-anchor="middle" font-size="16" font-weight="700" fill="#dc2626">Product</text><text x="160" y="120" text-anchor="middle" font-size="11" fill="#64748b">Sortiment, Qualität</text><text x="160" y="136" text-anchor="middle" font-size="11" fill="#64748b">Marke, Verpackung</text><text x="160" y="152" text-anchor="middle" font-size="11" fill="#64748b">Service, Garantie</text><line x1="260" y1="140" x2="300" y2="185" stroke="#dc2626" stroke-width="2"/><rect x="440" y="70" width="200" height="110" rx="14" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text x="540" y="100" text-anchor="middle" font-size="16" font-weight="700" fill="#e11d48">Price</text><text x="540" y="120" text-anchor="middle" font-size="11" fill="#64748b">Listenpreis, Rabatte</text><text x="540" y="136" text-anchor="middle" font-size="11" fill="#64748b">Zahlungsbedingungen</text><text x="540" y="152" text-anchor="middle" font-size="11" fill="#64748b">Preisdifferenzierung</text><line x1="440" y1="140" x2="400" y2="185" stroke="#e11d48" stroke-width="2"/><rect x="60" y="240" width="200" height="110" rx="14" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text x="160" y="270" text-anchor="middle" font-size="16" font-weight="700" fill="#e11d48">Place</text><text x="160" y="290" text-anchor="middle" font-size="11" fill="#64748b">Vertriebskanäle</text><text x="160" y="306" text-anchor="middle" font-size="11" fill="#64748b">Standort, Logistik</text><text x="160" y="322" text-anchor="middle" font-size="11" fill="#64748b">Lagerhaltung</text><line x1="260" y1="280" x2="300" y2="225" stroke="#e11d48" stroke-width="2"/><rect x="440" y="240" width="200" height="110" rx="14" fill="#fecdd3" stroke="#be123c" stroke-width="2"/><text x="540" y="270" text-anchor="middle" font-size="16" font-weight="700" fill="#be123c">Promotion</text><text x="540" y="290" text-anchor="middle" font-size="11" fill="#64748b">Werbung, PR</text><text x="540" y="306" text-anchor="middle" font-size="11" fill="#64748b">Verkaufsförderung</text><text x="540" y="322" text-anchor="middle" font-size="11" fill="#64748b">Persönlicher Verkauf</text><line x1="440" y1="280" x2="400" y2="225" stroke="#be123c" stroke-width="2"/><text x="350" y="388" text-anchor="middle" font-size="12" fill="#94a3b8">Die optimale Kombination aller Instrumente bestimmt den Markterfolg.</text></svg>'
          },
          {
            type: 'concept',
            title: 'Ziele des Marketingmix',
            content: 'Das qualitative Ziel bei der Gestaltung des optimalen Marketingmix lautet: Die Marketinginstrumente sind so eingesetzt, dass sie den strategischen Vorgaben entsprechen und sich gegenseitig erg\u00e4nzen. Das quantitative Ziel lautet: Die Marketingziele werden mit minimalem Mitteleinsatz (Finanzen, Personal etc.) erreicht. Neben dem Teilmix \u00abKunden\u00bb gibt es je nach Situation auch die Teilmixe \u00abHandel\u00bb und \u00abexterne Beeinflusser\u00bb.',
            highlight: 'Qualitatives Ziel: optimale Abstimmung. Quantitatives Ziel: minimaler Mitteleinsatz f\u00fcr maximale Wirkung.'
          },
          {
            type: 'concept',
            title: 'Standard-Dominanz-Modell',
            content: 'Die Marketinginstrumente lassen sich mithilfe des Standard-Dominanz-Modells anhand von zwei Dimensionen kategorisieren: Absatzbedeutung und Freiheitsgrad. Dominante Instrumente haben hohe Absatzbedeutung und grossen Freiheitsgrad \u2013 sie erhalten h\u00f6chste Priorit\u00e4t. Standardinstrumente haben hohe Absatzbedeutung aber wenig Freiheitsgrad. Komplement\u00e4re Instrumente sind auf beiden Dimensionen nur mittelstark ausgepr\u00e4gt. Marginale Instrumente werden kaum eingesetzt.',
            highlight: '4 Kategorien: Dominante (wichtig + frei), Standard (wichtig + wenig frei), Komplement\u00e4re, Marginale Instrumente.'
          },
          {
            type: 'concept',
            title: 'Produktlebenszyklus (PLZ)',
            content: 'Der Produktlebenszyklus beschreibt eine typische Entwicklung \u00fcber sechs Phasen: Entwicklung, Einf\u00fchrung, Wachstum, Reife, S\u00e4ttigung und R\u00fcckgang. Der Marketingmix muss den Gegebenheiten der jeweiligen Phase dynamisch angepasst werden. F\u00fcr die Erstellung eines Marketingkonzepts ist es z.B. von grosser Bedeutung, ob ein Produkt neu auf den Markt eingef\u00fchrt wird oder ob es bereits zu den bekannten Produkten geh\u00f6rt.',
            highlight: 'PLZ-Phasen: Entwicklung, Einf\u00fchrung, Wachstum, Reife, S\u00e4ttigung, R\u00fcckgang.'
          },
          {
            type: 'svg',
            title: 'Produktlebenszyklus-Kurve',
            svg: '<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="360" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Produktlebenszyklus (PLZ)</text><line x1="80" y1="280" x2="660" y2="280" stroke="#334155" stroke-width="2"/><line x1="80" y1="280" x2="80" y2="55" stroke="#334155" stroke-width="2"/><text x="40" y="170" text-anchor="middle" font-size="12" fill="#64748b" transform="rotate(-90,40,170)">Umsatz / Gewinn</text><text x="370" y="310" text-anchor="middle" font-size="12" fill="#64748b">Zeit</text><path d="M100,275 C120,270 140,260 170,240 C200,220 230,180 280,130 C320,90 360,70 400,65 C440,62 470,68 500,80 C530,95 550,120 570,155 C590,190 610,230 630,265" fill="none" stroke="#dc2626" stroke-width="3"/><path d="M100,278 C130,276 160,270 190,258 C220,245 260,210 300,170 C330,145 360,130 390,125 C420,122 445,128 470,140 C495,155 520,180 540,210 C560,240 580,260 610,275" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="8,5" opacity=".5"/><text x="620" y="258" font-size="9" fill="#dc2626">Umsatz</text><text x="620" y="270" font-size="9" fill="#dc2626" opacity=".6">Gewinn</text><line x1="170" y1="55" x2="170" y2="280" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/><line x1="280" y1="55" x2="280" y2="280" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/><line x1="400" y1="55" x2="400" y2="280" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/><line x1="500" y1="55" x2="500" y2="280" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/><line x1="580" y1="55" x2="580" y2="280" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,4"/><rect x="100" y="322" width="70" height="22" rx="4" fill="#fef2f2"/><text x="135" y="337" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">Entwicklung</text><rect x="180" y="322" width="70" height="22" rx="4" fill="#fee2e2"/><text x="215" y="337" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">Einf\u00fchrung</text><rect x="260" y="322" width="70" height="22" rx="4" fill="#fecaca"/><text x="295" y="337" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">Wachstum</text><rect x="340" y="322" width="60" height="22" rx="4" fill="#fca5a5"/><text x="370" y="337" text-anchor="middle" font-size="9" fill="#991b1b" font-weight="600">Reife</text><rect x="430" y="322" width="70" height="22" rx="4" fill="#f87171"/><text x="465" y="337" text-anchor="middle" font-size="9" fill="#fff" font-weight="600">S\u00e4ttigung</text><rect x="530" y="322" width="80" height="22" rx="4" fill="#dc2626"/><text x="570" y="337" text-anchor="middle" font-size="9" fill="#fff" font-weight="600">R\u00fcckgang</text></svg>'
          },
          {
            type: 'concept',
            title: 'Internationaler Marketingmix und Branchenunterschiede',
            content: 'Beim internationalen Marketingmix geht es um die Frage: Standardisierung oder Differenzierung? Bei einer kommunikativen Anpassung wird nur die Kommunikation angepasst (z.B. Markennamen, Werbebotschaften). Bei einer Anpassung der Marktleistung wird auch das Produkt l\u00e4nderspezifisch angepasst. Die Gestaltung des Marketingmix ist zudem abh\u00e4ngig von der Branche: Konsumg\u00fctermarketing (viele kleine Kunden, standardisiert), Investitionsg\u00fctermarketing (wenige grosse Kunden, komplex) und Dienstleistungsmarketing (nicht greifbar, pers\u00f6nlicher Kontakt).',
            highlight: 'International: Standardisierung vs. Differenzierung. Branchen: Konsum-, Investitionsg\u00fcter-, Dienstleistungsmarketing.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Marketingmix = Kombination aller Instrumente (4P: Product, Price, Place, Promotion).',
              'Submix = ein P (z.B. Produktmix). Teilmix = Unterkategorie (z.B. Sortimentspolitik).',
              'Standard-Dominanz-Modell: dominante Instrumente haben hohe Absatzbedeutung UND grossen Freiheitsgrad.',
              'PLZ-Phasen: Entwicklung \u2192 Einf\u00fchrung \u2192 Wachstum \u2192 Reife \u2192 S\u00e4ttigung \u2192 R\u00fcckgang.',
              'International: Standardisierung vs. Differenzierung (Produkt und Kommunikation).',
              'Dienstleistungsmarketing: 4P + People, Process, Physical Tangibles = 7P.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Als <strong>Marketingmix</strong> bezeichnen wir die Kombination aller Marketinginstrumente zur Umsetzung der Marketingstrategie. Er besteht aus den <strong>4 P</strong> (Product, Price, Place, Promotion).',
              'Die Marketinginstrumente lassen sich mithilfe des <strong>Standard-Dominanz-Modells</strong> nach Absatzbedeutung und Freiheitsgrad kategorisieren und priorisieren.',
              'Der <strong>Produktlebenszyklus</strong> (PLZ) beschreibt sechs Phasen: Entwicklung, Einf\u00fchrung, Wachstum, Reife, S\u00e4ttigung und R\u00fcckgang. Der Marketingmix muss dynamisch angepasst werden.',
              'Beim internationalen Marketingmix geht es um die <strong>Standardisierung</strong> bzw. <strong>Differenzierung</strong> von Leistungen und Prozessen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Marketingmix', def: 'Kombination aller Marketinginstrumente (4P) zur Umsetzung der Strategie.' },
              { term: 'Submix', def: 'Einzelner Bereich des Marketingmix: Product, Price, Place oder Promotion.' },
              { term: 'Standard-Dominanz-Modell', def: 'Modell zur Priorisierung von Instrumenten nach Absatzbedeutung und Freiheitsgrad.' },
              { term: 'Produktlebenszyklus', def: 'Typische Entwicklung eines Produkts \u00fcber 6 Phasen von der Entwicklung bis zum R\u00fcckgang.' },
              { term: 'Standardisierung', def: 'Einheitliches Marketing weltweit \u2013 gleiche Leistungen und Prozesse.' },
              { term: 'Differenzierung', def: 'Anpassung des Marketingmix an l\u00e4nderspezifische Gegebenheiten.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 8: Produktmix I: das Produkt (Product) (S.150)
    // ================================================================
    {
      id: 'ch8', pageStart: 101, pageEnd: 114, num: 'Teil A \u2013 Kapitel 8', title: 'Produktmix I: das Produkt (Product)',
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
          reveal: ['Die Touristen erhalten einen 20%-Rabattcoupon für ein Musical am Broadway. → Erweitertes Produkt', 'Die Tageskarte erlaubt, bei jeder Haltestelle auszusteigen. Busse verkehren im Halbstundentakt. → Formales Produkt', 'Der Bus stoppt, sodass die Touristen die Freiheitsstatue fotografieren können. → Kernprodukt']
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
          reveal: ['Lücke 1: Breite', 'Lücke 2: Länge', 'Lücke 3: Tiefe', 'Lücke 4: Geschlossenheit']
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
          reveal: ['Richtige Antwort: Zur Gruppierung von Produkten nach Umsatz, Deckungsbeitrag oder Rentabilität', 'ABC = Klassifizierung nach Wichtigkeit.']
        }
      ],
      learningData: {
        title: 'Produktmix I: das Produkt (Product)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'erkl\u00e4ren, was man unter Marktleistung versteht.',
              'die Formen der Marktleistung beschreiben.',
              'die Dimensionen des Sortiments erl\u00e4utern.'
            ]
          },
          {
            type: 'concept',
            title: 'Formen der Marktleistung',
            content: 'Unter dem Begriff \u00abMarktleistung\u00bb fassen wir alle Produkte, Dienstleistungen und Ideen zusammen, die Konsumenten und Organisationen erwerben k\u00f6nnen. Ein Produkt ist alles, was im Markt angeboten werden kann, um Kundenw\u00fcnsche zu befriedigen. Eine Dienstleistung umfasst jede Handlung oder jeden Nutzen, der nicht greifbar ist. Die meisten angebotenen Leistungen sind heute eine Kombination von Produkten und Dienstleistungen.',
            highlight: 'Marktleistung = Produkte + Dienstleistungen + Ideen. Reine Produkte und reine Dienstleistungen sind selten.'
          },
          {
            type: 'concept',
            title: 'Entwicklung von Marktleistungen',
            content: 'Viele Unternehmen entwickeln ihre Marktleistungen vom reinen Produkt hin zu Dienstleistungen, L\u00f6sungen/Solutions oder sogar Plattformen. Es gibt vier Entwicklungsstufen: Produkt (einfache Verkaufstransaktion), Dienstleistung (erbringt eine Leistung, h\u00e4ufig in Kombination mit einem Produkt), L\u00f6sung/Solution (Kombination von Produkten und Dienstleistungen, die in den Leistungsprozess des Kunden integriert sind) und Plattform (f\u00fchrt Anbieter mit Nachfragern zusammen).',
            highlight: '4 Stufen: Produkt \u2192 Dienstleistung \u2192 L\u00f6sung/Solution \u2192 Plattform.'
          },
          {
            type: 'concept',
            title: 'Produktebenen',
            content: 'Die Definition des Produkts umfasst drei Ebenen: Das Kernprodukt (was ist der Kundennutzen?), das formale Produkt (welche Eigenschaften muss das Produkt zwingend besitzen?) und das erweiterte Produkt (welche Eigenschaften w\u00fcrden den Nutzen des Produkts steigern, \u00fcber das Kernprodukt hinaus?). Es muss auch definiert werden, inwieweit die Marktleistung standardisiert oder individualisiert wird und ob M\u00f6glichkeiten zur Mass Customization bestehen.',
            highlight: 'Produktebenen: Kernprodukt (Nutzen), formales Produkt (Eigenschaften), erweitertes Produkt (Zusatznutzen).'
          },
          { type: 'svg', title: 'Der Marketing-Mix: Die 4P', svg: '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Der Marketing-Mix: Die 4P</text><circle cx="350" cy="145" r="45" fill="#581c87"/><text x="350" y="141" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Marketing-</text><text x="350" y="157" text-anchor="middle" fill="#e9d5ff" font-size="13" font-weight="bold">Mix</text><rect x="40" y="55" width="150" height="80" rx="10" fill="#9333ea"/><text x="115" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Product</text><text x="115" y="103" text-anchor="middle" fill="#e9d5ff" font-size="10">Marktleistung</text><text x="115" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Sortiment, Qualit\u00e4t, Design</text><line x1="190" y1="95" x2="305" y2="135" stroke="#c084fc" stroke-width="2"/><rect x="510" y="55" width="150" height="80" rx="10" fill="#7e22ce"/><text x="585" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Price</text><text x="585" y="103" text-anchor="middle" fill="#e9d5ff" font-size="10">Preispolitik</text><text x="585" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Rabatte, Konditionen</text><line x1="510" y1="95" x2="395" y2="135" stroke="#c084fc" stroke-width="2"/><rect x="40" y="155" width="150" height="80" rx="10" fill="#6b21a8"/><text x="115" y="185" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Place</text><text x="115" y="203" text-anchor="middle" fill="#e9d5ff" font-size="10">Distribution</text><text x="115" y="218" text-anchor="middle" fill="#e9d5ff" font-size="9">Vertriebskan\u00e4le, Logistik</text><line x1="190" y1="195" x2="305" y2="155" stroke="#c084fc" stroke-width="2"/><rect x="510" y="155" width="150" height="80" rx="10" fill="#a855f7"/><text x="585" y="185" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Promotion</text><text x="585" y="203" text-anchor="middle" fill="#e9d5ff" font-size="10">Kommunikation</text><text x="585" y="218" text-anchor="middle" fill="#e9d5ff" font-size="9">Werbung, PR, Online</text><line x1="510" y1="195" x2="395" y2="155" stroke="#c084fc" stroke-width="2"/></svg>' },
          {
            type: 'concept',
            title: 'Sortiment',
            content: 'Unter Sortiment versteht man die Summe aller Marktleistungen, die ein Unternehmen anbietet. Bei der Sortimentspolitik werden vier Dimensionen definiert: die Breite (Anzahl Produktlinien), die L\u00e4nge (Anzahl Produkttypen), die Tiefe (Anzahl Varianten pro Produkttyp) und die Geschlossenheit (Beziehung zwischen den Artikeln). Die ABC-Analyse gruppiert Produkte anhand von Kennzahlen wie Umsatz, Deckungsbeitrag oder Rentabilit\u00e4t.',
            highlight: 'Sortimentsdimensionen: Breite, L\u00e4nge, Tiefe, Geschlossenheit. ABC-Analyse zur Priorisierung.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Marktleistung = Produkte + Dienstleistungen + Ideen.',
              '4 Entwicklungsstufen: Produkt \u2192 Dienstleistung \u2192 L\u00f6sung/Solution \u2192 Plattform.',
              'Produktebenen: Kernprodukt (Nutzen), formales Produkt (Eigenschaften), erweitertes Produkt (Zusatznutzen).',
              'Sortimentsdimensionen: Breite, L\u00e4nge, Tiefe, Geschlossenheit.',
              'ABC-Analyse gruppiert Produkte nach Umsatz, Deckungsbeitrag oder Rentabilit\u00e4t.',
              'Mass Customization = individuelle Anpassung bei Massenproduktion.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Im <strong>Submix Produkte</strong> werden alle Entscheidungen zusammengefasst, die die Marktleistung (Produkte und Dienstleistungen) betreffen.',
              'Die <strong>Definition des Produkts</strong> umfasst drei Ebenen: Kernprodukt (Kundennutzen), formales Produkt (zwingende Eigenschaften) und erweitertes Produkt (\u00fcber das Kernprodukt hinaus).',
              'Bei der <strong>Sortimentspolitik</strong> werden Breite, L\u00e4nge, Tiefe und Geschlossenheit des Sortiments definiert.',
              'Die <strong>ABC-Analyse</strong> gruppiert Produkte anhand von Kennzahlen wie Umsatz, Deckungsbeitrag oder Rentabilit\u00e4t.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Marktleistung', def: 'Alle Produkte, Dienstleistungen und Ideen, die ein Unternehmen am Markt anbietet.' },
              { term: 'Kernprodukt', def: 'Der grundlegende Kundennutzen eines Produkts.' },
              { term: 'Formales Produkt', def: 'Die zwingend notwendigen Eigenschaften eines Produkts.' },
              { term: 'Erweitertes Produkt', def: 'Zus\u00e4tzliche Eigenschaften, die den Nutzen \u00fcber das Kernprodukt hinaus steigern.' },
              { term: 'Sortiment', def: 'Summe aller Marktleistungen eines Unternehmens.' },
              { term: 'ABC-Analyse', def: 'Instrument zur Klassifizierung von Produkten nach Umsatz, Deckungsbeitrag oder Rentabilit\u00e4t.' },
              { term: 'Mass Customization', def: 'Individuelle Anpassung von Produkten bei gleichzeitiger Massenproduktion.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 9: Produktmix II: die Produktentwicklung (S.167-168)
    // ================================================================
    {
      id: 'ch9', pageStart: 115, pageEnd: 128, num: 'Teil A \u2013 Kapitel 9', title: 'Produktmix II: die Produktentwicklung',
      exercises: [
        {
          id: 54, type: 'calc', title: 'Break-even Produktinnovation',
          q: 'Break-even Produktinnovation',
          instruction: 'Ein Unternehmen entwickelt drei Produktideen bis zur Beta-Test-Phase.\n\n\u2022 Entwicklungskosten pro Idee: CHF 18\u2019000\n\u2022 Anzahl Ideen: 3\n\u2022 Lancierungsbudget (beste Idee): CHF 90\u2019000\n\u2022 Verkaufspreis: CHF 2\u2019400\n\u2022 Variable Kosten: CHF 1\u2019200',
          fields: [
            { label: 'Gesamtkosten (CHF)', answer: 144000, tolerance: 0.01 },
            { label: 'DB pro St\u00fcck (CHF)', answer: 1200, tolerance: 0.01 },
            { label: 'Break-even (St\u00fcck)', answer: 120, tolerance: 0.01 }
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
          tips: ['Die sechs Phasen verlaufen von der Idee bis zur Markteinführung.', 'Kreativitätstechniken wie Brainstorming gehören zum Anfang des Prozesses.', 'Target Costing prüft die Wirtschaftlichkeit, ein Testmarkt testet vor der Einführung.'],
          reveal: ['Brainstorming → Ideengewinnung', 'Eliminierung von schlechten Ideen → Ideenauswahl', 'Target Costing → Wirtschaftlichkeitsanalyse', 'Marktbeobachtung → Einführung', 'Mindmapping → Ideengewinnung', 'Testmarkt → Beta- und Markttest']
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
      learningData: {
        title: 'Produktmix II: die Produktentwicklung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'erl\u00e4utern, wie neue Produkte und Dienstleistungen entwickelt werden.',
              'erkl\u00e4ren, wie mithilfe der Kreativit\u00e4tstechniken Ideen f\u00fcr neue Marktleistungen gewonnen werden.',
              'den Prozess der Ideenauswahl, der Konzeptentwicklung sowie Testverfahren und Wirtschaftlichkeitsanalysen beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: 'Innovationsprozess',
            content: 'Die Entwicklung von neuen Produkten und Dienstleistungen vollzieht sich h\u00e4ufig in sechs Phasen: 1. Ideengewinnung, 2. Ideenauswahl, 3. Konzeptentwicklung und -test, 4. Wirtschaftlichkeitsanalyse, 5. Beta-Test und Markttest, 6. Markteinf\u00fchrung. In jeder Phase scheiden einige Ideen aus. Das Scheitern in einer sp\u00e4ten Phase ist teurer als in einer fr\u00fchen. Der Prozess wird als Ideen- und Innovationstrichter dargestellt.',
            highlight: '6 Phasen: Ideengewinnung \u2192 Ideenauswahl \u2192 Konzeptentwicklung \u2192 Wirtschaftlichkeitsanalyse \u2192 Beta-/Markttest \u2192 Markteinf\u00fchrung.'
          },
          { type: 'svg', title: 'Die 6 Phasen des Innovationsprozesses', svg: '<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Innovationstrichter: 6 Phasen der Produktentwicklung</text><polygon points="80,50 620,50 500,260 200,260" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><text x="350" y="70" text-anchor="middle" fill="#7e22ce" font-size="10">Viele Ideen</text><text x="350" y="250" text-anchor="middle" fill="#581c87" font-size="10">Wenige Produkte am Markt</text><rect x="115" y="82" width="155" height="36" rx="8" fill="#9333ea"/><text x="192" y="105" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1. Ideengewinnung</text><rect x="430" y="82" width="155" height="36" rx="8" fill="#7e22ce"/><text x="507" y="105" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2. Ideenauswahl</text><polygon points="270,100 285,93 285,107" fill="#a855f7"/><rect x="290" y="82" width="135" height="36" rx="8" fill="#f5f3ff" stroke="#9333ea" stroke-width="1"/><text x="357" y="100" text-anchor="middle" fill="#581c87" font-size="9">Brainstorming</text><text x="357" y="112" text-anchor="middle" fill="#7e22ce" font-size="9">Brainwriting, Mindmap</text><rect x="155" y="130" width="170" height="36" rx="8" fill="#6b21a8"/><text x="240" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3. Konzeptentwicklung</text><text x="240" y="161" text-anchor="middle" fill="#e9d5ff" font-size="9">und Konzepttest</text><rect x="375" y="130" width="170" height="36" rx="8" fill="#581c87"/><text x="460" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4. Wirtschaftlichkeit</text><text x="460" y="161" text-anchor="middle" fill="#e9d5ff" font-size="9">Break-even-Analyse</text><rect x="195" y="182" width="150" height="36" rx="8" fill="#7e22ce"/><text x="270" y="200" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">5. Beta-/Markttest</text><text x="270" y="213" text-anchor="middle" fill="#e9d5ff" font-size="9">Testmarkt</text><rect x="380" y="182" width="130" height="36" rx="8" fill="#9333ea"/><text x="445" y="200" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">6. Einf\u00fchrung</text><text x="445" y="213" text-anchor="middle" fill="#e9d5ff" font-size="9">Marktlancierung</text><polygon points="325,150 340,143 340,157" fill="#a855f7"/><polygon points="345,200 360,193 360,207" fill="#a855f7"/></svg>' },
          {
            type: 'concept',
            title: 'Ideengewinnung und Kreativit\u00e4tstechniken',
            content: 'Die Suche nach Ideen sollte nicht dem Zufall \u00fcberlassen, sondern systematisch gesteuert werden. Es gibt verschiedene Ideenquellen und Kreativit\u00e4tstechniken: Brainstorming (m\u00fcndliche Ideensammlung in der Gruppe, keine Kritik erlaubt), Brainwriting (schriftliche Variante, z.B. 6-3-5-Methode), Mindmapping und weitere Techniken. Neben Eigenentwicklung k\u00f6nnen neue Produkte auch durch Akquisitionen eingekauft werden (Kauf ganzer Unternehmen, Lizenzen, Kooperationsvertr\u00e4ge).',
            highlight: 'Kreativit\u00e4tstechniken: Brainstorming (m\u00fcndlich), Brainwriting (schriftlich), Mindmapping.'
          },
          {
            type: 'concept',
            title: 'Wirtschaftlichkeitsanalyse und Tests',
            content: 'Bei der Wirtschaftlichkeitsanalyse wird gepr\u00fcft, ob die Produktidee auch wirtschaftlich tragbar ist (Break-even-Berechnung). Beim Beta-Test und Markttest werden die verbleibenden Ideen intern und im Markt getestet. Ein Testmarkt ist ein geografisch begrenztes Gebiet f\u00fcr einen Markttest. Nachteile: Kosten und Zeitaufwand, Konkurrenz kann die Strategie beobachten.',
            highlight: 'Wirtschaftlichkeitsanalyse = Break-even. Testmarkt = geografisch begrenzter Markttest.'
          },
          {
            type: 'concept',
            title: 'Markteinf\u00fchrung und Diffusion',
            content: 'Bei der Markteinf\u00fchrung muss ber\u00fccksichtigt werden, dass sich Kunden in ihrer Innovationsneigung unterscheiden. Folgende Segmente k\u00f6nnen unterschieden werden: Innovatoren (die Ersten, ca. 2.5%), fr\u00fche Adopter (Meinungsf\u00fchrer, ca. 13.5%), fr\u00fche Mehrheit (ca. 34%), sp\u00e4te Mehrheit (ca. 34%) und Nachz\u00fcgler (ca. 16%).',
            highlight: 'Diffusion: Innovatoren \u2192 Fr\u00fche Adopter \u2192 Fr\u00fche Mehrheit \u2192 Sp\u00e4te Mehrheit \u2192 Nachz\u00fcgler.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              '6 Phasen: Ideengewinnung \u2192 Ideenauswahl \u2192 Konzeptentwicklung \u2192 Wirtschaftlichkeitsanalyse \u2192 Beta-/Markttest \u2192 Einf\u00fchrung.',
              'Sp\u00e4tes Scheitern ist teurer als fr\u00fches \u2013 daher fr\u00fch selektieren.',
              'Kreativit\u00e4tstechniken: Brainstorming (m\u00fcndlich), Brainwriting (schriftlich), Mindmapping.',
              'Wirtschaftlichkeitsanalyse = Break-even-Berechnung.',
              'Testmarkt = geografisch begrenzter Markttest vor der Lancierung.',
              'Diffusion: Innovatoren (2.5%) \u2192 Fr\u00fche Adopter (13.5%) \u2192 Fr\u00fche Mehrheit (34%) \u2192 Sp\u00e4te Mehrheit (34%) \u2192 Nachz\u00fcgler (16%).'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Entwicklung von neuen Produkten und Dienstleistungen</strong> vollzieht sich h\u00e4ufig in sechs Phasen.',
              'Nach der <strong>Ideengewinnung</strong> folgt die <strong>Ideenauswahl</strong>, bei der Erfolg versprechende Ideen identifiziert werden.',
              'Diese Ideen durchlaufen die <strong>Konzeptentwicklung</strong> und den <strong>Konzepttest</strong>. Es folgt eine <strong>Wirtschaftlichkeitsanalyse</strong>, die im positiven Fall zu einem <strong>Beta- und Markttest</strong> f\u00fchrt.',
              'Bei der <strong>Markteinf\u00fchrung</strong> muss die Innovationsneigung der Kunden ber\u00fccksichtigt werden: Innovatoren, fr\u00fche Adopter, fr\u00fche und sp\u00e4te Mehrheit und die Nachz\u00fcgler.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Innovationstrichter', def: 'Modell, das zeigt, wie aus vielen Ideen wenige Produkte am Markt resultieren.' },
              { term: 'Brainstorming', def: 'M\u00fcndliche Kreativit\u00e4tstechnik zur Ideensammlung in der Gruppe.' },
              { term: 'Brainwriting', def: 'Schriftliche Kreativit\u00e4tstechnik, z.B. 6-3-5-Methode.' },
              { term: 'Konzeptentwicklung', def: 'Phase, in der aus Ideen konkrete Produktkonzepte entwickelt werden.' },
              { term: 'Wirtschaftlichkeitsanalyse', def: 'Pr\u00fcfung der wirtschaftlichen Tragbarkeit (z.B. Break-even).' },
              { term: 'Testmarkt', def: 'Geografisch begrenztes Gebiet f\u00fcr einen Markttest vor der Einf\u00fchrung.' },
              { term: 'Markteinf\u00fchrung', def: 'Die Lancierung eines neuen Produkts auf dem Markt.' },
              { term: 'Innovatoren', def: 'Erste Gruppe, die eine Innovation \u00fcbernimmt (ca. 2.5% der K\u00e4ufer).' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 10: Produktmix III: Verpackung (S.178-179)
    // ================================================================
    {
      id: 'ch10', pageStart: 129, pageEnd: 142, num: 'Teil A \u2013 Kapitel 10', title: 'Produktmix III: Verpackung',
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
          reveal: ['Funktionen der Verpackung: Information, Produktdifferenzierung, Dosierfunktion, Stapelbarkeit, Verkaufsfunktion.', '\u00abKosteng\u00fcnstig\u00bb ist keine Funktion, sondern eine Anforderung an die Verpackung.']
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
          reveal: ['Richtige Antwort: Zusammenfassung von Einzeleinheiten zu grösseren Einheiten für die Logistik', 'EUL dienen der effizienten Logistik.']
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
          tips: ['Primär bedeutet «erste» – was berührt das Produkt direkt?', 'Sekundär ist die zweite Schicht – hier steht die Kommunikation im Vordergrund.', 'Tertiär ist die äusserste Schicht – denken Sie an Transport und Lagerung.'],
          reveal: ['Steht in direktem Kontakt mit dem Produkt → Primärverpackung', 'Dient als Informationsträger und Werbemittel → Sekundärverpackung', 'Dient als Lager- und Transporthilfsmittel → Tertiärverpackung']
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
          reveal: ['Richtige Antwort: Identifikation des Produkts und Ermöglichung der automatisierten Datenerfassung', 'GS1 = Global Standards One.']
        }
      ],
      learningData: {
        title: 'Produktmix III: Verpackung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die Funktionen der Verpackung nennen.',
              'die Ziele der Verpackungsgestaltung darstellen.',
              'die Verpackungsarten aufz\u00e4hlen und erkl\u00e4ren.',
              'die \u00f6kologische Dimension der Verpackung beschreiben.',
              'rechtliche / gesetzliche Grundlagen der Verpackung nennen.'
            ]
          },
          {
            type: 'concept',
            title: 'Funktionen der Verpackung',
            content: 'Die Verpackung und das optische Auftreten eines Produkts haben sowohl eine funktionale als auch eine strategische Bedeutung. Die Verpackung hat folgende Funktionen: Schutz, Information, Verkaufsfunktion, Dosierfunktion, Werbefunktion, Produktdifferenzierung, Stapelbarkeit und Identifikationsfunktion. Die Bed\u00fcrfnisse des Markts machen f\u00fcr dasselbe Produkt unterschiedliche Verpackungsarten n\u00f6tig.',
            highlight: 'Verpackungsfunktionen: Schutz, Information, Verkauf, Dosierung, Werbung, Differenzierung, Stapelbarkeit.'
          },
          {
            type: 'concept',
            title: 'Verpackungsarten',
            content: 'Es gibt Einweg- und Mehrwegverpackungen. Je nach Einsatz unterscheidet man Verkaufs-, Sammel- und Transportverpackungen. Prim\u00e4rverpackungen stehen in direktem Kontakt mit dem verpackten Gegenstand und erf\u00fcllen hohe hygienische Anforderungen. Sekund\u00e4rverpackungen dienen als M\u00f6glichkeit f\u00fcr Zusatzinformationen. Terti\u00e4rverpackungen dienen als Lager- und Transporthilfsmittel.',
            highlight: 'Prim\u00e4r = direkter Kontakt. Sekund\u00e4r = Informationstr\u00e4ger. Terti\u00e4r = Lager/Transport.'
          },
          { type: 'svg', title: 'Die 3 Verpackungsstufen', svg: '<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Die 3 Verpackungsstufen</text><rect x="230" y="140" width="240" height="70" rx="10" fill="#f5f3ff" stroke="#c084fc" stroke-width="2"/><text x="350" y="168" text-anchor="middle" fill="#581c87" font-size="13" font-weight="bold">Terti\u00e4rverpackung</text><text x="350" y="185" text-anchor="middle" fill="#7e22ce" font-size="10">Lager- und Transporthilfsmittel</text><text x="350" y="200" text-anchor="middle" fill="#9333ea" font-size="9">z.B. Palette, Container</text><rect x="260" y="90" width="180" height="55" rx="10" fill="#ede9fe" stroke="#a855f7" stroke-width="2"/><text x="350" y="113" text-anchor="middle" fill="#581c87" font-size="13" font-weight="bold">Sekund\u00e4rverpackung</text><text x="350" y="130" text-anchor="middle" fill="#7e22ce" font-size="10">Information und Werbung</text><rect x="290" y="48" width="120" height="48" rx="10" fill="#9333ea"/><text x="350" y="68" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Prim\u00e4r</text><text x="350" y="84" text-anchor="middle" fill="#e9d5ff" font-size="10">Direkter Kontakt</text><text x="50" y="75" fill="#581c87" font-size="11" font-weight="bold">Prim\u00e4r:</text><text x="50" y="92" fill="#7e22ce" font-size="10">Direkter Produktkontakt</text><text x="50" y="107" fill="#9333ea" font-size="9">z.B. Flasche, Tube</text><line x1="140" y1="85" x2="288" y2="72" stroke="#c084fc" stroke-width="1" stroke-dasharray="3,2"/><text x="540" y="110" fill="#581c87" font-size="11" font-weight="bold">Sekund\u00e4r:</text><text x="540" y="127" fill="#7e22ce" font-size="10">Umverpackung</text><text x="540" y="142" fill="#9333ea" font-size="9">z.B. Kartonschachtel</text><line x1="538" y1="120" x2="442" y2="117" stroke="#c084fc" stroke-width="1" stroke-dasharray="3,2"/><text x="540" y="180" fill="#581c87" font-size="11" font-weight="bold">Terti\u00e4r:</text><text x="540" y="197" fill="#7e22ce" font-size="10">Transportverpackung</text><text x="540" y="212" fill="#9333ea" font-size="9">z.B. Palette, Karton</text><line x1="538" y1="190" x2="472" y2="180" stroke="#c084fc" stroke-width="1" stroke-dasharray="3,2"/><rect x="130" y="225" width="440" height="22" rx="6" fill="#ede9fe"/><text x="350" y="240" text-anchor="middle" fill="#581c87" font-size="10">Einweg- vs. Mehrwegverpackungen je nach \u00f6kologischen und logistischen Anforderungen</text></svg>' },
          {
            type: 'concept',
            title: 'GS1-Strichcode und gesetzliche Grundlagen',
            content: 'Auf der Verpackung findet sich der GS1-Strichcode, mit dem das Produkt identifiziert werden kann. Effiziente Ladeeinheiten (EUL) sind die Zusammenfassung von Einzeleinheiten zu gr\u00f6sseren Einheiten mit dem Ziel, die Effizienz in der Logistikkette zu steigern. Die gesetzlichen Vorschriften f\u00fcr die Verpackung sind je Produkt verschieden und m\u00fcssen bei der Verpackungsgestaltung ber\u00fccksichtigt werden (u.a. Angabe der Zutaten, Hinweise auf allergene Stoffe, Angabe des Herkunftslands).',
            highlight: 'GS1-Strichcode zur Produktidentifikation. EUL f\u00fcr effiziente Logistik.'
          },
          {
            type: 'concept',
            title: 'Verpackung und \u00d6kologie',
            content: 'Bei der Wahl der Verpackungsart ist auf \u00f6kologische, hygienische und logistische Aspekte zu achten. Nachhaltige Verpackungsl\u00f6sungen gewinnen zunehmend an Bedeutung: Verwendung von recycelbaren oder biologisch abbaubaren Materialien, Reduktion des Verpackungsmaterials und Vermeidung unn\u00f6tiger Verpackungen.',
            highlight: '\u00d6kologische Verpackung: recycelbar, biologisch abbaubar, Material reduzieren.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Verpackungsfunktionen: Schutz, Information, Verkauf, Dosierung, Werbung, Differenzierung, Stapelbarkeit.',
              'Prim\u00e4rverpackung = direkter Kontakt mit Produkt. Sekund\u00e4r = Informationstr\u00e4ger. Terti\u00e4r = Lager/Transport.',
              'Einweg- vs. Mehrwegverpackungen \u2013 abh\u00e4ngig von \u00f6kologischen und logistischen Anforderungen.',
              'GS1-Strichcode dient der Produktidentifikation und automatisierten Datenerfassung.',
              'EUL (Effiziente Ladeeinheiten) steigern die Effizienz in der Logistikkette.',
              '\u00d6kologische Verpackung: recycelbar, biologisch abbaubar, Material reduzieren.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Verpackung</strong> hat viele Aufgaben: Schutz-, Informations- und Werbefunktion.',
              'Es gibt <strong>Einweg- und Mehrwegverpackungen</strong>. Je nach Einsatz: Verkaufs-, Sammel- und Transportverpackungen.',
              '<strong>Prim\u00e4rverpackungen</strong> stehen in direktem Kontakt mit dem Produkt. <strong>Sekund\u00e4rverpackungen</strong> dienen als Informationstr\u00e4ger. <strong>Terti\u00e4rverpackungen</strong> als Lager- und Transporthilfsmittel.',
              'Auf der Verpackung findet sich der <strong>GS1-Strichcode</strong>. Die <strong>gesetzlichen Vorschriften</strong> sind je Produkt verschieden.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Prim\u00e4rverpackung', def: 'Verpackung in direktem Kontakt mit dem Produkt (z.B. Flasche).' },
              { term: 'Sekund\u00e4rverpackung', def: 'Umverpackung f\u00fcr Zusatzinformationen und Werbung.' },
              { term: 'Terti\u00e4rverpackung', def: 'Lager- und Transportverpackung (z.B. Palette).' },
              { term: 'GS1-Strichcode', def: 'Standardisierter Code zur Identifikation von Produkten.' },
              { term: 'EUL', def: 'Effiziente Ladeeinheiten \u2013 Zusammenfassung zu gr\u00f6sseren Einheiten f\u00fcr die Logistik.' },
              { term: 'Verpackungs\u00f6kologie', def: '\u00d6kologische Aspekte bei der Wahl und Gestaltung von Verpackungen.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 11: Preismix (Price) (S.195-196)
    // ================================================================
    {
      id: 'ch11', pageStart: 143, pageEnd: 156, num: 'Teil A \u2013 Kapitel 11', title: 'Preismix (Price)',
      exercises: [
        {
          id: 64, type: 'calc', title: 'Deckungsbeitrag bei Rabattvarianten',
          q: 'Deckungsbeitrag bei Rabattvarianten',
          instruction: 'Ein Verkaufsleiter analysiert Rabattvarianten. Berechnen Sie den Gesamt-DB.\n\n\u2022 Richtpreis: CHF 100, variable Kosten: CHF 50\n\u2022 Ausgangssituation: Rabatt 5%, Netto CHF 95, Absatz 1\u2019000\n\u2022 Variante 1: Rabatt 0%, Netto CHF 100, Absatz 800\n\u2022 Variante 2: Rabatt 10%, Netto CHF 90, Absatz 1\u2019100\n\u2022 Variante 3: Rabatt 20%, Netto CHF 80, Absatz 1\u2019400',
          fields: [
            { label: 'DB gesamt Ausgangssituation (CHF)', answer: 45000, tolerance: 0.01 },
            { label: 'DB gesamt Variante 1 (CHF)', answer: 40000, tolerance: 0.01 },
            { label: 'DB gesamt Variante 2 (CHF)', answer: 44000, tolerance: 0.01 },
            { label: 'DB gesamt Variante 3 (CHF)', answer: 42000, tolerance: 0.01 }
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
          tips: ['Es geht um Preisdifferenzierung – nicht alle Kunden müssen den gleichen Preis zahlen.', 'Welche Rabattformen richten sich gezielt an neue Kunden, ohne bestehende Kunden zu benachteiligen?', 'Denken Sie an Erstkundenrabatt, Mengenrabatt oder Produktbündel.'],
          reveal: ['Richtige Antwort: Differenzierte Preise, Erstkundenrabatt, Mengenrabatt, Bundle-Angebote']
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
          tips: ['Es geht um gesetzliche Rahmenbedingungen der Preispolitik in der Schweiz.', 'Müssen alle Filialen eines Unternehmens die gleichen Preise verlangen?', 'Denken Sie an das Preisgesetz (PG) und das Kartellrecht.'],
          reveal: ['Aussage 1: Richtig. Richtig. Das Preisgesetz schützt Konsumenten vor überhöhten Preisen.', 'Aussage 2: Falsch. Falsch. Es gibt keine solche Pflicht – regionale Preisunterschiede sind erlaubt.', 'Aussage 3: Richtig. Grundsätzlich ja, ausser es handelt sich um Missbrauch einer marktbeherrschenden Stellung.']
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
          reveal: ['Richtige Antwort: Kosten, Konkurrenz, Konsumentenzahlungsbereitschaft, Kapazität', 'Die 4 K: Kosten, Konkurrenz, Konsumenten(zahlungsbereitschaft), Kapazität.']
        }
      ],
      learningData: {
        title: 'Preismix (Price)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die Ziele der Preispolitik nennen.',
              'die Modelle der Preistheorie beschreiben.',
              'erkl\u00e4ren, wie die Preisbestimmung erfolgt.',
              'die Rabatt- und Konditionenpolitik erl\u00e4utern.',
              'die gesetzlichen Grundlagen des Preismix darstellen.'
            ]
          },
          {
            type: 'concept',
            title: 'Preispolitik',
            content: 'Der Preismix oder die Preispolitik ist eines der m\u00e4chtigsten Instrumente im Marketing, das ganze Marktstrukturen ver\u00e4ndern kann. Im Marketingmix ist das P f\u00fcr Price der einzige Bereich, der Einnahmen f\u00fcr das Unternehmen generiert \u2013 die \u00fcbrigen 3 P haben vor allem Kosten zur Folge. Die Unternehmen streben mit der Preisfestsetzung oft das Ziel der Gewinnmaximierung an. Dabei gilt: Wenn der Preis steigt, sinkt die nachgefragte Menge.',
            highlight: 'Price ist der einzige Submix, der Einnahmen generiert. Ziel: optimaler Preis zwischen Gewinnmaximierung und Absatzmenge.'
          },
          {
            type: 'concept',
            title: 'Preistheorie und Preiselastizit\u00e4t',
            content: 'Wenn der Gewinn maximiert werden soll, m\u00fcssen die variablen Kosten und die Nachfragekurve bekannt sein. Der Preis wird dann so festgelegt, dass der Deckungsbeitrag (Preis \u2013 variable Kosten) maximal ist. Eine wichtige Gr\u00f6sse ist die Preiselastizit\u00e4t der Nachfrage: das Verh\u00e4ltnis einer relativen Nachfrage\u00e4nderung zu einer relativen Preis\u00e4nderung. Unelastische Nachfrage: grosse Preis\u00e4nderung hat wenig Einfluss. Elastische Nachfrage: kleine Preis\u00e4nderungen wirken sich stark auf die Nachfrage aus.',
            highlight: 'Preiselastizit\u00e4t: unelastisch = Preis\u00e4nderung hat wenig Wirkung. Elastisch = starke Wirkung auf Nachfrage.'
          },
          {
            type: 'svg',
            title: 'Preiselastizit\u00e4t der Nachfrage',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="380" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Preiselastizit\u00e4t der Nachfrage</text><line x1="100" y1="320" x2="640" y2="320" stroke="#334155" stroke-width="2"/><line x1="100" y1="320" x2="100" y2="55" stroke="#334155" stroke-width="2"/><text x="55" y="190" text-anchor="middle" font-size="13" fill="#64748b" transform="rotate(-90,55,190)">Preis (P)</text><text x="370" y="352" text-anchor="middle" font-size="13" fill="#64748b">Menge (Q)</text><path d="M140,80 L250,300" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/><text x="200" y="75" font-size="13" fill="#dc2626" font-weight="700">Unelastisch</text><text x="200" y="92" font-size="10" fill="#94a3b8">(z.B. Medikamente)</text><path d="M300,100 L600,280" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/><text x="500" y="95" font-size="13" fill="#7c3aed" font-weight="700">Elastisch</text><text x="500" y="112" font-size="10" fill="#94a3b8">(z.B. Luxusg\u00fcter)</text><line x1="140" y1="150" x2="250" y2="150" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/><line x1="140" y1="220" x2="250" y2="220" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/><line x1="170" y1="150" x2="170" y2="320" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/><line x1="205" y1="220" x2="205" y2="320" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/><text x="115" y="148" font-size="10" fill="#dc2626">P1</text><text x="115" y="218" font-size="10" fill="#dc2626">P2</text><text x="165" y="338" font-size="10" fill="#dc2626">Q1</text><text x="200" y="338" font-size="10" fill="#dc2626">Q2</text><path d="M120,152 L120,218" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrowR)"/><text x="107" y="188" font-size="9" fill="#dc2626">\u0394P</text><path d="M170,335 L205,335" stroke="#dc2626" stroke-width="1.5"/><text x="187" y="350" font-size="9" fill="#dc2626">\u0394Q klein</text><line x1="380" y1="150" x2="520" y2="150" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/><line x1="380" y1="220" x2="520" y2="220" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/><line x1="410" y1="150" x2="410" y2="320" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/><line x1="520" y1="220" x2="520" y2="320" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/><text x="365" y="148" font-size="10" fill="#7c3aed">P1</text><text x="365" y="218" font-size="10" fill="#7c3aed">P2</text><text x="405" y="338" font-size="10" fill="#7c3aed">Q1</text><text x="515" y="338" font-size="10" fill="#7c3aed">Q2</text><path d="M410,335 L520,335" stroke="#7c3aed" stroke-width="1.5"/><text x="465" y="350" font-size="9" fill="#7c3aed">\u0394Q gross</text></svg>'
          },
          {
            type: 'concept',
            title: 'Preisbestimmung mit den 4 K',
            content: 'In der Praxis ist die genaue Berechnung des optimalen Preises oft schwierig. Praktiker bestimmen den Preis h\u00e4ufig \u00fcber die 4 K: Kosten (eigene Kostenstruktur), Konkurrenz (Preise der Wettbewerber), Konsumenten (Zahlungsbereitschaft der Kunden) und Kapazit\u00e4t (verf\u00fcgbare Kapazit\u00e4ten des Unternehmens).',
            highlight: '4 K der Preisbestimmung: Kosten, Konkurrenz, Konsumenten(zahlungsbereitschaft), Kapazit\u00e4t.'
          },
          {
            type: 'concept',
            title: 'Preisdifferenzierung und Rabatte',
            content: 'Ein wichtiges Instrument der Preispolitik ist die Preisdifferenzierung: f\u00fcr mehr oder weniger dasselbe Produkt werden unterschiedliche Preise verlangt. Dies funktioniert, wenn es Segmente gibt, die bereit sind, mehr zu bezahlen. In der Anwendung wird oft umgedreht: Segmenten mit geringerer Zahlungsbereitschaft werden Rabatte gew\u00e4hrt (z.B. Studenten, Senioren, Gruppentouristen). Zum Preismix z\u00e4hlen verschiedene Funktions-, Mengen-, Zeit-, Aktions- oder Treue-Rabatte sowie Konditionen.',
            highlight: 'Preisdifferenzierung: verschiedene Preise f\u00fcr das gleiche Produkt je nach Segment. Rabatte als Instrument.'
          },
          {
            type: 'concept',
            title: 'Gesetzliche Grundlagen',
            content: 'Die gesetzlichen Grundlagen des Preismix sind in verschiedenen Gesetzen geregelt. Sie sch\u00fctzen die Konsumenten vor Benachteiligungen durch m\u00e4chtige Unternehmen: Gesetz gegen den unlauteren Wettbewerb (UWG), Kartellgesetz (KG), Verordnung \u00fcber die Bekanntgabe von Preisen (PVB) und Preis\u00fcberwachungsgesetz (P\u00fcG).',
            highlight: 'Preisgesetze: UWG, Kartellgesetz, Preisbekanntgabeverordnung, Preis\u00fcberwachungsgesetz.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Price ist der einzige Submix, der Einnahmen generiert \u2013 die anderen 3P verursachen Kosten.',
              '4 K der Preisbestimmung: Kosten, Konkurrenz, Konsumenten(zahlungsbereitschaft), Kapazit\u00e4t.',
              'Preiselastizit\u00e4t: unelastisch = Preis\u00e4nderung hat wenig Wirkung. Elastisch = starke Wirkung.',
              'Deckungsbeitrag = Verkaufspreis \u2212 variable Kosten.',
              'Preisdifferenzierung: verschiedene Preise f\u00fcr das gleiche Produkt nach Segment (Zeit, Menge, Kundengruppe).',
              'Rabattarten: Funktions-, Mengen-, Zeit-, Aktions- und Treuerabatte.',
              'Preisgesetze: UWG, Kartellgesetz, PVB, Preis\u00fcberwachungsgesetz.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'In der \u00f6konomischen Theorie ist das Ziel der Preisbildung die <strong>Gewinnmaximierung</strong>. In der Praxis verfolgen Unternehmen jedoch auch andere Ziele.',
              'Eine wichtige Gr\u00f6sse ist die <strong>Preiselastizit\u00e4t</strong> der Nachfrage. In der Praxis wird der Preis h\u00e4ufig \u00fcber die <strong>4 K</strong> bestimmt: Kosten, Konkurrenz, Konsumenten, Kapazit\u00e4t.',
              'Ein wichtiges Instrument ist die <strong>Preisdifferenzierung</strong>. Zum Preismix z\u00e4hlen auch verschiedene <strong>Rabatte</strong> und <strong>Konditionen</strong>.',
              'Die <strong>gesetzlichen Grundlagen</strong> finden sich im UWG, Kartellgesetz, der PVB und dem P\u00fcG.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Preispolitik', def: 'Alle Entscheidungen rund um die Preisgestaltung im Marketingmix.' },
              { term: 'Preiselastizit\u00e4t', def: 'Verh\u00e4ltnis der Nachfrage\u00e4nderung zur Preis\u00e4nderung.' },
              { term: '4 K', def: 'Kosten, Konkurrenz, Konsumenten(zahlungsbereitschaft), Kapazit\u00e4t.' },
              { term: 'Preisdifferenzierung', def: 'Unterschiedliche Preise f\u00fcr das gleiche Produkt nach Segmenten.' },
              { term: 'Deckungsbeitrag', def: 'Verkaufspreis minus variable Kosten.' },
              { term: 'Rabatte', def: 'Preisnachl\u00e4sse (Funktions-, Mengen-, Zeit-, Aktions-, Treuerabatte).' },
              { term: 'Kartellgesetz', def: 'Gesetz zur Verhinderung von Wettbewerbsbeschr\u00e4nkungen und Preisabsprachen.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 12: Distributionsmix (Place) (S.203)
    // ================================================================
    {
      id: 'ch12', pageStart: 157, pageEnd: 172, num: 'Teil A \u2013 Kapitel 12', title: 'Distributionsmix (Place)',
      exercises: [
        {
          id: 71, type: 'tf', title: 'Zielkonflikt Reichhaltigkeit/Reichweite',
          statements: [
            { s: 'Bei traditionellen Kan\u00e4len besteht ein Zielkonflikt zwischen Reichhaltigkeit und Reichweite.', c: true, feedback: 'Richtig. E-Commerce l\u00f6st diesen Konflikt teilweise auf.' },
            { s: 'E-Government-L\u00f6sungen haben denselben Zielkonflikt.', c: false, feedback: 'Nein \u2013 E-Government kann beides bieten: breite Reichweite und detaillierte Informationen.' }
          ],
          tips: ['Es geht um den Trade-off zwischen Informationstiefe und Erreichbarkeit.', 'Digitale Kanäle können diesen Zielkonflikt teilweise auflösen.', 'Überlegen Sie, ob Online-Plattformen gleichzeitig viele Menschen erreichen UND detaillierte Infos bieten können.'],
          reveal: ['Aussage 1: Richtig. Richtig. E-Commerce löst diesen Konflikt teilweise auf.', 'Aussage 2: Falsch. Nein – E-Government kann beides bieten: breite Reichweite und detaillierte Informationen.']
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
          reveal: ['Richtige Antwort: Weil Büromaterialien standardisiert, regelmässig bestellt und preissensibel sind', 'E-Commerce eignet sich besonders für standardisierte, regelmässig bestellte Produkte.']
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
          tips: ['Jedes Kriterium bewertet einen bestimmten Aspekt des Vertriebssystems.', 'Distributionsgrad = Wie breit verfügbar ist das Produkt?', 'Beeinflussbarkeit = Wie viel Kontrolle hat das Unternehmen über den Kanal?'],
          reveal: ['Wie gut erfüllt das System die Vertriebsaufgaben? → Funktionserfüllung', 'Wie breit ist das Produkt erhältlich? → Distributionsgrad', 'Kann das System mitwachsen? → Entwicklungsmöglichkeit', 'Wie stark kann man den Vertrieb steuern? → Beeinflussbarkeit']
        },
        {
          id: 75, type: 'text', title: 'Minicase: Moonshine E-Commerce',
          q: 'Ein Unternehmer l\u00e4sst seine Website bei Moonshine betreiben. Als privater Kunde m\u00f6chte er mehr Speicher f\u00fcr seine E-Mails. Der Callcenter-Mitarbeiter sagt, das sei nicht m\u00f6glich. Welche Problematik ergibt sich in der Distribution?',
          keywords: ['gesch\u00e4ft', 'privat', 'trennung', 'service', 'zufrieden', 'callcenter'],
          tips: ['Was passiert, wenn Gesch\u00e4fts- und Privatkundenbetreuung nicht koordiniert sind?'],
          reveal: ['Die Problematik: Fehlende Koordination zwischen Gesch\u00e4fts- und Privatkunden-Service. Der Callcenter-Mitarbeiter h\u00e4tte erkennen m\u00fcssen, dass der Kunde auch Gesch\u00e4ftskunde ist, und flexibel reagieren sollen.']
        }
      ],
      learningData: {
        title: 'Distributionsmix (Place)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die Instrumente des Distributionsmix erl\u00e4utern.',
              'erkl\u00e4ren, welche Faktoren die Auswahl der Distributionspartner bestimmen.',
              'die Kriterien zur Wahl des geeigneten Vertriebssystems beschreiben.',
              'Vor- und Nachteile von E-Commerce-L\u00f6sungen erkl\u00e4ren.',
              'die Vertriebsarten im E-Commerce beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: 'Distributionsmix',
            content: 'Mit dem Distributionsmix werden alle Instrumente aufeinander abgestimmt, die f\u00fcr die Organisation und die physische Durchf\u00fchrung des Verkaufs und der Verteilung notwendig sind. Der Distributionsmix sorgt daf\u00fcr, dass die Kunden die Marktleistung dann und dort kaufen k\u00f6nnen, wenn sie sie ben\u00f6tigen. Das Resultat einer guten Verkaufsorganisation sind kurze Wege zum Verk\u00e4ufer, kompetente und freundliche Kundenberatung, jederzeitige Bestellm\u00f6glichkeiten und jederzeit abrufbare Liefertermine.',
            highlight: 'Distributionsmix = Organisation der Vertriebswege zum Kunden. Ziel: Marktleistung dort verf\u00fcgbar, wo Kunden sie brauchen.'
          },
          {
            type: 'concept',
            title: 'Direkter und indirekter Vertrieb',
            content: 'Der direkte Vertrieb wird durch unternehmenseigene Vertriebskan\u00e4le organisiert. Der indirekte Vertrieb erfolgt durch unternehmensfremde Vertriebskan\u00e4le. Diese generelle Entscheidung wird auf strategischer Ebene gef\u00e4llt. Auf operativer Ebene m\u00fcssen die Distributionspartner ausgew\u00e4hlt, die konkreten Absatzkan\u00e4le definiert und miteinander kombiniert werden (inkl. Multichanneling) sowie E-Commerce-M\u00f6glichkeiten ausgelotet werden.',
            highlight: 'Direkter Vertrieb = eigene Kan\u00e4le. Indirekter Vertrieb = fremde Kan\u00e4le (H\u00e4ndler, Absatzmittler).'
          },
          { type: 'svg', title: 'Direkter vs. Indirekter Vertrieb', svg: '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Direkter vs. Indirekter Vertrieb</text><rect x="270" y="45" width="160" height="40" rx="10" fill="#581c87"/><text x="350" y="70" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Hersteller</text><text x="170" y="55" text-anchor="middle" fill="#581c87" font-size="12" font-weight="bold">Direkt</text><rect x="30" y="55" width="12" height="175" rx="4" fill="#9333ea"/><line x1="350" y1="85" x2="150" y2="115" stroke="#9333ea" stroke-width="2" marker-end="url(#arD12)"/><rect x="60" y="105" width="180" height="40" rx="8" fill="#9333ea"/><text x="150" y="130" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Endkunde</text><text x="150" y="160" text-anchor="middle" fill="#7e22ce" font-size="10">Eigene Filialen, Webshop,</text><text x="150" y="175" text-anchor="middle" fill="#7e22ce" font-size="10">Aussendienst, Telefon</text><text x="530" y="55" text-anchor="middle" fill="#581c87" font-size="12" font-weight="bold">Indirekt</text><rect x="658" y="55" width="12" height="175" rx="4" fill="#7e22ce"/><line x1="350" y1="85" x2="530" y2="115" stroke="#7e22ce" stroke-width="2" marker-end="url(#arD12)"/><rect x="440" y="105" width="180" height="40" rx="8" fill="#7e22ce"/><text x="530" y="130" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Absatzmittler</text><text x="530" y="152" text-anchor="middle" fill="#e9d5ff" font-size="9">Grosshandel, Detailhandel</text><line x1="530" y1="145" x2="530" y2="175" stroke="#7e22ce" stroke-width="2" marker-end="url(#arD12)"/><rect x="440" y="170" width="180" height="40" rx="8" fill="#6b21a8"/><text x="530" y="195" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Endkunde</text><rect x="120" y="215" width="460" height="35" rx="8" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><text x="350" y="232" text-anchor="middle" fill="#581c87" font-size="11" font-weight="bold">Multichanneling: Kombination verschiedener Vertriebskan\u00e4le</text><text x="350" y="245" text-anchor="middle" fill="#7e22ce" font-size="9">E-Commerce: eigene Site vs. Marktplatz (Amazon, Ebay)</text><defs><marker id="arD12" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#7e22ce"/></marker></defs></svg>' },
          {
            type: 'concept',
            title: 'Multichanneling und E-Commerce',
            content: 'W\u00e4hlt ein Produzent f\u00fcr den Absatz seines Produkts unterschiedliche Vertriebskan\u00e4le f\u00fcr die einzelnen Zielkundensegmente, spricht man von Multichanneling (Mehrkanaldistribution). Im E-Commerce unterscheidet man zwischen E-Commerce-Sites (eigene Kontrolle \u00fcber Customer Experience, Aufbau einer Kundenbindung) und Marktpl\u00e4tzen (schnellerer Markteintritt, geringe Investitionen, aber weniger Differenzierungsm\u00f6glichkeiten).',
            highlight: 'Multichanneling = verschiedene Vertriebskan\u00e4le. E-Commerce: eigene Site vs. Marktplatz (z.B. Amazon, Ebay).'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Distributionsmix = Organisation der Vertriebswege zum Kunden.',
              'Direkter Vertrieb = eigene Kan\u00e4le (hohe Fixkosten, volle Kontrolle).',
              'Indirekter Vertrieb = fremde Kan\u00e4le (geringere Fixkosten, weniger Kontrolle).',
              'Multichanneling = verschiedene Vertriebskan\u00e4le f\u00fcr verschiedene Segmente.',
              'E-Commerce: eigene Site (Kundenbindung) vs. Marktplatz (schneller Markteintritt).',
              'Distributionsgrad = Mass f\u00fcr die Erh\u00e4ltlichkeit eines Produkts im Markt.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Bei der <strong>Distribution</strong> geht es um die Gestaltung der Vertriebswege zum Kunden. Es wird zwischen <strong>direkten</strong> und <strong>indirekten Vertriebskan\u00e4len</strong> unterschieden.',
              'Die Vertriebskan\u00e4le sind f\u00fcr den Weg vom Hersteller bis zum Verbraucher verantwortlich. Bei <strong>Multichanneling</strong> werden verschiedene Vertriebskan\u00e4le kombiniert.',
              'Unter <strong>Distributionspartner</strong> versteht man eine Organisation oder Person, die das Unternehmen bei der Distribution unterst\u00fctzt.',
              'Im <strong>E-Commerce</strong> unterscheidet man zwischen eigenen E-Commerce-Sites und Marktpl\u00e4tzen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Distributionsmix', def: 'Alle Instrumente f\u00fcr Organisation und Durchf\u00fchrung von Verkauf und Verteilung.' },
              { term: 'Direkter Vertrieb', def: 'Vertrieb \u00fcber unternehmenseigene Kan\u00e4le (z.B. eigene Filialen, Webshop).' },
              { term: 'Indirekter Vertrieb', def: 'Vertrieb \u00fcber unternehmensfremde Kan\u00e4le (z.B. H\u00e4ndler, Absatzmittler).' },
              { term: 'Distributionsgrad', def: 'Mass f\u00fcr die Erh\u00e4ltlichkeit eines Produkts im Markt.' },
              { term: 'Multichanneling', def: 'Mehrkanaldistribution \u2013 verschiedene Vertriebskan\u00e4le f\u00fcr verschiedene Segmente.' },
              { term: 'E-Commerce', def: 'Elektronischer Handel \u00fcber eigene Sites oder Marktpl\u00e4tze.' },
              { term: 'Distributionspartner', def: 'Organisation oder Person, die bei der Distribution unterst\u00fctzt (z.B. Grossh\u00e4ndler).' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 13: Kommunikationsmix (Promotion) (S.210-211)
    // ================================================================
    {
      id: 'ch13', pageStart: 173, pageEnd: 188, num: 'Teil A \u2013 Kapitel 13', title: 'Kommunikationsmix (Promotion)',
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
          tips: ['Die vier Medientypen unterscheiden sich durch Kontrolle und Ursprung.', 'Paid = bezahlt, Owned = eigene Kanäle, Earned = verdient durch Qualität, Shared = geteilt von Nutzern.', 'Wer hat den Inhalt erstellt und wer kontrolliert ihn?'],
          reveal: ['Kundenbewertung auf Google → Earned', 'Eigene Website → Owned', 'Facebook-Post eines Nutzers über die Marke → Shared', 'Bannerwerbung auf 20min.ch → Paid']
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
          tips: ['Unterscheiden Sie zwischen klassischen Offline- und modernen Online-Instrumenten.', 'Influencer Marketing basiert auf sozialen Medien – ist das offline oder online?', 'Bei Push wird der Kunde «angestossen», bei Pull sucht der Kunde aktiv.'],
          reveal: ['Aussage 1: Richtig. Richtig – das sind die klassischen Offline-Instrumente.', 'Aussage 2: Falsch. Falsch – Influencer Marketing ist ein Online-Kommunikationsinstrument.', 'Aussage 3: Richtig. Richtig: Produzent → Handel → Endkonsument.']
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
      learningData: {
        title: 'Kommunikationsmix (Promotion)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die wichtigsten Offline-Kommunikationsinstrumente nennen und erkl\u00e4ren.',
              'die wichtigsten Online-Kommunikationsinstrumente nennen und erkl\u00e4ren.',
              'Push-Strategie und Pull-Strategie in der Kommunikation unterscheiden.'
            ]
          },
          {
            type: 'concept',
            title: 'Offline-Kommunikationsinstrumente',
            content: 'Unternehmen stehen eine Vielzahl an Instrumenten zur Verf\u00fcgung, um mit ihren Zielgruppen zu kommunizieren. Offline-Kommunikationsinstrumente umfassen: Werbung (unpers\u00f6nliche Einweg-Kommunikation, sehr grosse Reichweite), Verkaufsf\u00f6rderung (alle Kommunikationsarten auf verschiedenen Stufen), Pers\u00f6nlicher Verkauf (pers\u00f6nliche Zweiwegkommunikation), Direktmarketing (unpers\u00f6nliche Zweiwegkommunikation, z.B. Mail, E-Mail) und Public Relations (Einwegkommunikation, grosse Reichweite).',
            highlight: 'Offline-Instrumente: Werbung, Verkaufsf\u00f6rderung, Pers\u00f6nlicher Verkauf, Direktmarketing, Public Relations.'
          },
          {
            type: 'concept',
            title: 'Online-Kommunikationsinstrumente',
            content: 'Die Instrumente der Online-Kommunikation erg\u00e4nzen bei den meisten Unternehmen die Instrumente der Offline-Kommunikation. Online-Kommunikationsinstrumente umfassen: Eigene Website, Onlinewerbung, E-Mail-Marketing, Social Media Marketing, Influencer Marketing und Mobile Marketing. Das erweiterte Medientypenmodell teilt die Kommunikationsinstrumente in Paid (bezahlte Werbung), Shared (geteilte Inhalte auf Social Media), Earned (verdiente Medienpr\u00e4senz) und Owned Media (eigene Kan\u00e4le) ein.',
            highlight: 'Online-Instrumente: Website, Onlinewerbung, E-Mail, Social Media, Influencer, Mobile. Medientypen: Paid, Shared, Earned, Owned.'
          },
          { type: 'svg', title: 'POSE-Medientypenmodell', svg: '<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Medientypenmodell: Paid, Owned, Shared, Earned</text><rect x="30" y="55" width="150" height="110" rx="10" fill="#9333ea"/><text x="105" y="82" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Paid</text><text x="105" y="100" text-anchor="middle" fill="#e9d5ff" font-size="10">Bezahlte Medien</text><line x1="40" y1="112" x2="170" y2="112" stroke="#e9d5ff" stroke-width="0.5"/><text x="105" y="128" text-anchor="middle" fill="#e9d5ff" font-size="9">Onlinewerbung</text><text x="105" y="142" text-anchor="middle" fill="#e9d5ff" font-size="9">Display Ads</text><text x="105" y="156" text-anchor="middle" fill="#e9d5ff" font-size="9">Sponsoring</text><rect x="200" y="55" width="150" height="110" rx="10" fill="#7e22ce"/><text x="275" y="82" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Owned</text><text x="275" y="100" text-anchor="middle" fill="#e9d5ff" font-size="10">Eigene Kan\u00e4le</text><line x1="210" y1="112" x2="340" y2="112" stroke="#e9d5ff" stroke-width="0.5"/><text x="275" y="128" text-anchor="middle" fill="#e9d5ff" font-size="9">Eigene Website</text><text x="275" y="142" text-anchor="middle" fill="#e9d5ff" font-size="9">Newsletter</text><text x="275" y="156" text-anchor="middle" fill="#e9d5ff" font-size="9">Blog, App</text><rect x="370" y="55" width="150" height="110" rx="10" fill="#6b21a8"/><text x="445" y="82" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Shared</text><text x="445" y="100" text-anchor="middle" fill="#e9d5ff" font-size="10">Geteilte Inhalte</text><line x1="380" y1="112" x2="510" y2="112" stroke="#e9d5ff" stroke-width="0.5"/><text x="445" y="128" text-anchor="middle" fill="#e9d5ff" font-size="9">Social Media Posts</text><text x="445" y="142" text-anchor="middle" fill="#e9d5ff" font-size="9">User-Shares</text><text x="445" y="156" text-anchor="middle" fill="#e9d5ff" font-size="9">Community</text><rect x="540" y="55" width="130" height="110" rx="10" fill="#581c87"/><text x="605" y="82" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Earned</text><text x="605" y="100" text-anchor="middle" fill="#e9d5ff" font-size="10">Verdiente Pr\u00e4senz</text><line x1="550" y1="112" x2="660" y2="112" stroke="#e9d5ff" stroke-width="0.5"/><text x="605" y="128" text-anchor="middle" fill="#e9d5ff" font-size="9">Presseberichte</text><text x="605" y="142" text-anchor="middle" fill="#e9d5ff" font-size="9">Kundenbewertungen</text><text x="605" y="156" text-anchor="middle" fill="#e9d5ff" font-size="9">Word-of-Mouth</text><rect x="80" y="190" width="250" height="35" rx="8" fill="#f5f3ff" stroke="#9333ea" stroke-width="1.5"/><text x="205" y="208" text-anchor="middle" fill="#581c87" font-size="11" font-weight="bold">Offline-Instrumente</text><text x="205" y="221" text-anchor="middle" fill="#7e22ce" font-size="9">Werbung, VKF, Pers. Verkauf, DM, PR</text><rect x="370" y="190" width="250" height="35" rx="8" fill="#ede9fe" stroke="#7e22ce" stroke-width="1.5"/><text x="495" y="208" text-anchor="middle" fill="#581c87" font-size="11" font-weight="bold">Online-Instrumente</text><text x="495" y="221" text-anchor="middle" fill="#7e22ce" font-size="9">Website, Social Media, E-Mail, Mobile</text><rect x="100" y="240" width="500" height="24" rx="6" fill="#ede9fe"/><text x="350" y="256" text-anchor="middle" fill="#581c87" font-size="10">Push-Strategie: Anbieter dr\u00e4ngt zum Kunden | Pull-Strategie: Kunde sucht aktiv</text></svg>' },
          {
            type: 'concept',
            title: 'Push- und Pull-Strategie',
            content: 'Bez\u00fcglich der Wirkungsrichtung unterscheiden wir zwischen Push-Strategie und Pull-Strategie. Bei der Push-Strategie folgt der Kommunikationsfluss dem Warenfluss: vom Produzenten zum Handel und zum Endkonsumenten. Bei der Pull-Strategie wird versucht, die Kundenpr\u00e4ferenzen aufzubauen und Kundentreue zu erreichen \u2013 der Kunde sucht aktiv nach dem Produkt.',
            highlight: 'Push = Anbieter dr\u00e4ngt zum Kunden (Warenfluss). Pull = Kunde sucht aktiv den Anbieter.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Offline-Instrumente: Werbung, Verkaufsf\u00f6rderung, Pers\u00f6nlicher Verkauf, Direktmarketing, PR.',
              'Online-Instrumente: Website, Onlinewerbung, E-Mail, Social Media, Influencer, Mobile Marketing.',
              'Medientypen: Paid (bezahlt), Owned (eigene), Earned (verdient), Shared (geteilt).',
              'Push-Strategie: Kommunikationsfluss folgt dem Warenfluss (Produzent \u2192 Handel \u2192 Endkunde).',
              'Pull-Strategie: Kunde sucht aktiv den Anbieter \u2013 Pr\u00e4ferenzen werden aufgebaut.',
              'Werbung = gr\u00f6sste Reichweite. Pers\u00f6nlicher Verkauf = h\u00f6chste Wirkung pro Kontakt.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Den Unternehmen stehen eine Vielzahl an Instrumenten zur Verf\u00fcgung, um mit ihren Zielgruppen zu kommunizieren.',
              '<strong>Offline-Kommunikationsinstrumente</strong>: Werbung, Verkaufsf\u00f6rderung, Pers\u00f6nlicher Verkauf, Direktmarketing, Public Relations.',
              '<strong>Online-Kommunikationsinstrumente</strong>: Eigene Website, Onlinewerbung, E-Mail-Marketing, Social Media Marketing, Influencer Marketing, Mobile Marketing.',
              'Das erweiterte <strong>Medientypenmodell</strong> teilt die Instrumente in Paid, Shared, Earned und Owned Media ein.',
              'Bez\u00fcglich der Wirkungsrichtung: <strong>Push-Strategie</strong> (Produzent \u2192 Handel \u2192 Endkunde) vs. <strong>Pull-Strategie</strong> (Kunde sucht Anbieter).'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Werbung', def: 'Unpers\u00f6nliche Einwegkommunikation mit sehr grosser Reichweite.' },
              { term: 'Verkaufsf\u00f6rderung', def: 'Alle Kommunikationsarten auf verschiedenen Stufen (z.B. Produktproben, Merchandising).' },
              { term: 'Pers\u00f6nlicher Verkauf', def: 'Pers\u00f6nliche Zweiwegkommunikation zwischen Verk\u00e4ufer und Kunde.' },
              { term: 'Public Relations', def: 'Pflege der Beziehungen zur \u00d6ffentlichkeit (Pressemitteilungen, Events, Sponsoring).' },
              { term: 'Paid Media', def: 'Bezahlte Werbung (z.B. Anzeigen, Bannerwerbung).' },
              { term: 'Owned Media', def: 'Eigene Kan\u00e4le (z.B. Website, Blog, Newsletter).' },
              { term: 'Earned Media', def: 'Verdiente Medienpr\u00e4senz (z.B. Presseberichte, Kundenbewertungen).' },
              { term: 'Push-Strategie', def: 'Kommunikationsfluss folgt dem Warenfluss vom Produzenten zum Endkunden.' },
              { term: 'Pull-Strategie', def: 'Kunde sucht aktiv nach dem Produkt \u2013 Kundenpr\u00e4ferenzen werden aufgebaut.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 14: Marketingbudget und -kontrolle (S.227)
    // ================================================================
    {
      id: 'ch14', pageStart: 189, pageEnd: 206, num: 'Teil A \u2013 Kapitel 14', title: 'Marketingbudget und -kontrolle',
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
          q: 'Budgetentscheid: Werbekampagne',
          instruction: 'F\u00fcr eine Werbekampagne werden zwei Varianten ausgearbeitet. Berechnen Sie den Netto-DB.\n\n\u2022 Variante 1: Investition CHF 300\u2019000, Zusatz-DB CHF 440\u2019000\n\u2022 Variante 2: Investition CHF 500\u2019000, Zusatz-DB CHF 680\u2019000',
          fields: [
            { label: 'Netto-DB Variante 1 (CHF)', answer: 140000, tolerance: 0.01 },
            { label: 'Netto-DB Variante 2 (CHF)', answer: 180000, tolerance: 0.01 }
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
          reveal: ['Rücklaufquoten einer Coupon-Werbung → Effizienzkontrolle', 'Vergleich des DB mit den Kosten einer Coupon-Werbung → Profitabilitätskontrolle', 'SWOT-Profil im Vergleich zu einem neuen Konkurrenten → Strategiekontrolle', 'Positionierung der eigenen Marken mittels Marktforschung → Strategiekontrolle', 'Zielerreichungsgrad des Verkaufsvolumens in der Ostschweiz im Jahr 200x → Jahresplankontrolle']
        },
        {
          id: 84, type: 'tf', title: 'Szenarien und Budgets',
          statements: [
            { s: 'Szenarien sind etwas f\u00fcr Leute, die entweder zu faul oder zu dumm sind, Prognosen zu erstellen.', c: false, feedback: 'Falsch! Szenarien sind ein wichtiges Instrument der strategischen Planung. Sie helfen, verschiedene Zukunftsszenarien durchzuspielen und sich vorzubereiten.' },
            { s: 'Auch kleine Unternehmen sollten ein Marketingbudget erstellen.', c: true, feedback: 'Richtig \u2013 ein Budget hilft bei der Ressourcenallokation und Kontrolle.' }
          ],
          tips: ['Es geht um strategische Planungsinstrumente und deren Nutzen.', 'Szenarien helfen, sich auf verschiedene Zukunftsentwicklungen vorzubereiten.', 'Ein Marketingbudget ist für jedes Unternehmen sinnvoll – unabhängig von der Grösse.'],
          reveal: ['Aussage 1: Falsch. Falsch! Szenarien sind ein wichtiges Instrument der strategischen Planung. Sie helfen, verschiedene Zukunftsszenarien durchzuspielen und sich vorzubereiten.', 'Aussage 2: Richtig. Richtig – ein Budget hilft bei der Ressourcenallokation und Kontrolle.']
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
          tips: ['Die 4 W-Fragen: Was, Wie, Wer, Wann.', 'Jede W-Frage entspricht einem Planungselement.', '«Was» definiert den Inhalt, «Wie» die Methode, «Wer» die Verantwortung, «Wann» den Zeitpunkt.'],
          reveal: ['Was? oder Zielobjekt / Zielgrösse → Zielinhalt', 'Wie? oder Kontrollmethode → Methode', 'Wer? oder Verantwortlichkeit → Verantwortlicher', 'Wann? oder Zeitpunkt → Zeitplan']
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
          reveal: ['Richtige Antwort: Internes Rapportwesen, Marktforschung und Marketing-Intelligence', 'Das MIS kombiniert interne und externe Informationsquellen.']
        }
      ],
      learningData: {
        title: 'Marketingbudget und -kontrolle',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'erkl\u00e4ren, mit welchen Methoden ein Marketingbudget erstellt wird.',
              'den typischen Aufbau eines Budgets aufzeigen.',
              'ein einfaches Marketingbudget erstellen.',
              'verschiedene Arten der Marketingkontrolle erkl\u00e4ren und einen Kontrollplan aufstellen.'
            ]
          },
          {
            type: 'concept',
            title: 'Budgetierung',
            content: 'Marketingaktivit\u00e4ten kosten Geld. Dieses Budget wird idealerweise im Voraus beantragt. Es gibt zwei verbreitete Ans\u00e4tze: Bei der Top-down-Budgetierung wird das Budget von der Gesch\u00e4ftsleitung vorgegeben und auf die einzelnen Abteilungen heruntergebrochen. Bei der Bottom-up-Budgetierung stellen die Abteilungen die ben\u00f6tigten Mittel aufgrund der geplanten Aktivit\u00e4ten zusammen. In der Praxis findet ein laufender Abgleichungsprozess statt.',
            highlight: 'Top-down = Budget wird von oben vorgegeben. Bottom-up = Budget wird von unten zusammengestellt.'
          },
          {
            type: 'concept',
            title: 'Ad-hoc-Budgetierung und Budgetszenarien',
            content: 'Neben der kontinuierlichen Budgetierung wird auch ad hoc budgetiert, d.h. bei konkreten Ereignissen (z.B. Markteintritt, Event, Lancierung einer Kundentreuekarte). Wird dem Aufwand ein Ertrag gegen\u00fcbergestellt, lassen sich Nettodeckungsbeitrag und Marketing-ROI berechnen. Da das Budget auf Annahmen und Prognosen beruht, macht es h\u00e4ufig Sinn, verschiedene m\u00f6gliche Budgetszenarien (Best-Case, erwartetes Szenario, Worst-Case) auszuarbeiten.',
            highlight: 'Budgetszenarien: Best-Case, erwartetes Szenario, Worst-Case. Ad-hoc-Budgetierung bei konkreten Projekten.'
          },
          {
            type: 'concept',
            title: 'Marketingkontrolle',
            content: 'Der letzte Schritt bei der Umsetzung eines Marketingkonzepts ist die Kontrolle. Es gibt vier Arten: Die Jahresplankontrolle soll sicherstellen, dass die Jahresziele erreicht werden. Die Profitabilit\u00e4tskontrolle fragt, wo das Unternehmen Gewinne bzw. Verluste macht. Die Effizienzkontrolle untersucht die Wirkungen der einzelnen Marketinginstrumente. Die Strategiekontrolle ist eine eigentliche Soll-Soll-Kontrolle.',
            highlight: '4 Kontrollarten: Jahresplankontrolle, Profitabilit\u00e4tskontrolle, Effizienzkontrolle, Strategiekontrolle.'
          },
          { type: 'svg', title: 'Die 4 Arten der Marketingkontrolle', svg: '<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Die 4 Arten der Marketingkontrolle</text><rect x="30" y="50" width="150" height="100" rx="10" fill="#9333ea"/><text x="105" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Jahresplan-</text><text x="105" y="91" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">kontrolle</text><line x1="40" y1="100" x2="170" y2="100" stroke="#e9d5ff" stroke-width="0.5"/><text x="105" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Wurden die Jahres-</text><text x="105" y="131" text-anchor="middle" fill="#e9d5ff" font-size="9">ziele erreicht?</text><text x="105" y="144" text-anchor="middle" fill="#e9d5ff" font-size="9">Soll-Ist-Vergleich</text><rect x="200" y="50" width="150" height="100" rx="10" fill="#7e22ce"/><text x="275" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Profitabilit\u00e4ts-</text><text x="275" y="91" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">kontrolle</text><line x1="210" y1="100" x2="340" y2="100" stroke="#e9d5ff" stroke-width="0.5"/><text x="275" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Wo entstehen</text><text x="275" y="131" text-anchor="middle" fill="#e9d5ff" font-size="9">Gewinne/Verluste?</text><text x="275" y="144" text-anchor="middle" fill="#e9d5ff" font-size="9">DB-Analyse</text><rect x="370" y="50" width="150" height="100" rx="10" fill="#6b21a8"/><text x="445" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Effizienz-</text><text x="445" y="91" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">kontrolle</text><line x1="380" y1="100" x2="510" y2="100" stroke="#e9d5ff" stroke-width="0.5"/><text x="445" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Wirkung der</text><text x="445" y="131" text-anchor="middle" fill="#e9d5ff" font-size="9">Instrumente?</text><text x="445" y="144" text-anchor="middle" fill="#e9d5ff" font-size="9">Kosten-Nutzen</text><rect x="540" y="50" width="130" height="100" rx="10" fill="#581c87"/><text x="605" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Strategie-</text><text x="605" y="91" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">kontrolle</text><line x1="550" y1="100" x2="660" y2="100" stroke="#e9d5ff" stroke-width="0.5"/><text x="605" y="118" text-anchor="middle" fill="#e9d5ff" font-size="9">Soll-Soll-Kontrolle:</text><text x="605" y="131" text-anchor="middle" fill="#e9d5ff" font-size="9">Stimmt die Strategie</text><text x="605" y="144" text-anchor="middle" fill="#e9d5ff" font-size="9">noch?</text><rect x="80" y="175" width="540" height="55" rx="10" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><text x="350" y="197" text-anchor="middle" fill="#581c87" font-size="12" font-weight="bold">Kontrollplan: 4 W-Fragen</text><text x="175" y="218" text-anchor="middle" fill="#7e22ce" font-size="11">Was? (Zielobjekt)</text><text x="310" y="218" text-anchor="middle" fill="#7e22ce" font-size="11">Wie? (Methode)</text><text x="435" y="218" text-anchor="middle" fill="#7e22ce" font-size="11">Wer? (Verantw.)</text><text x="560" y="218" text-anchor="middle" fill="#7e22ce" font-size="11">Wann? (Zeitplan)</text></svg>' },
          {
            type: 'concept',
            title: 'Kontrollplan und Marketinginformationssystem',
            content: 'Der Kontrollplan beinhaltet die Informationen, welches Zielobjekt mit welcher Erhebungsmethode durch wen und wann kontrolliert wird (4 W: Was, Wie, Wer, Wann). Das Marketinginformationssystem (MIS) besteht h\u00e4ufig aus drei Elementen: internes Rapportwesen, Marktforschung und Marketing-Intelligence. Es liefert die Informationsgrundlage f\u00fcr Marketingentscheidungen.',
            highlight: 'Kontrollplan: Was, Wie, Wer, Wann. MIS = Rapportwesen + Marktforschung + Marketing-Intelligence.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Top-down = Budget von oben vorgegeben. Bottom-up = Budget von unten zusammengestellt.',
              'Gegenstromverfahren (Kombination) ist in der Praxis am sinnvollsten.',
              'Budgetszenarien: Best-Case, erwartetes Szenario, Worst-Case.',
              '4 Kontrollarten: Jahresplankontrolle, Profitabilit\u00e4tskontrolle, Effizienzkontrolle, Strategiekontrolle.',
              'Kontrollplan: Was (Zielobjekt), Wie (Methode), Wer (Verantwortlicher), Wann (Zeitpunkt).',
              'MIS = internes Rapportwesen + Marktforschung + Marketing-Intelligence.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Das <strong>Budget</strong> ist die Konkretisierung eines Plans im Hinblick auf die finanziellen Konsequenzen. Die Budgetierung kann <strong>top down</strong> oder <strong>bottom up</strong> vorgenommen werden.',
              'Wir unterscheiden: <strong>Top-down-Budgetierung</strong>, <strong>Bottom-up-Budgetierung</strong>, <strong>Ad-hoc-Budgetierung</strong> und <strong>Budgetszenarien</strong>.',
              'Bei der <strong>Kontrolle</strong> werden vier Arten unterschieden: Jahresplankontrolle, Profitabilit\u00e4tskontrolle, Effizienzkontrolle, Strategiekontrolle.',
              'Das <strong>Marketinginformationssystem</strong> (MIS) liefert die Grundlage f\u00fcr Marketingentscheidungen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Marketingbudget', def: 'Finanzplan f\u00fcr alle geplanten Marketingaktivit\u00e4ten.' },
              { term: 'Top-down-Budgetierung', def: 'Budget wird von der Gesch\u00e4ftsleitung vorgegeben und heruntergebrochen.' },
              { term: 'Bottom-up-Budgetierung', def: 'Budget wird von den Abteilungen aufgrund geplanter Aktivit\u00e4ten erstellt.' },
              { term: 'Budgetszenarien', def: 'Verschiedene Zukunftsszenarien (Best-, Expected-, Worst-Case) f\u00fcr die Budgetplanung.' },
              { term: 'Jahresplankontrolle', def: 'Kontrolle, ob die gesetzten Jahresziele erreicht werden.' },
              { term: 'Effizienzkontrolle', def: 'Analyse der Wirkung einzelner Marketinginstrumente unter Ber\u00fccksichtigung der Kosten.' },
              { term: 'Kontrollplan', def: 'Plan mit Was (Zielobjekt), Wie (Methode), Wer (Verantwortlicher), Wann (Zeitpunkt).' },
              { term: 'MIS', def: 'Marketinginformationssystem \u2013 internes Rapportwesen, Marktforschung, Marketing-Intelligence.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 15: Qualit\u00e4tsmanagement I: Grundlagen und \u00d6kologie (S.244-245)
    // ================================================================
    {
      id: 'ch15', pageStart: 207, pageEnd: 226, num: 'Teil B \u2013 Kapitel 15', title: 'Qualit\u00e4tsmanagement I: Grundlagen und \u00d6kologie',
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
          reveal: ['Testen, ob Profil der Pneus dem Gesetz entspricht → Muss', 'Autositze reinigen → Soll', 'Freundlichkeit des Personals → Soll', 'Shuttleservice zum Arbeitsort → Plus', 'Hinweis auf Ablauf der Autobahnvignette → Plus']
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
          tips: ['TQM steht für Total Quality Management – «Total» bedeutet umfassend.', 'Es geht nicht nur um Produktqualität, sondern um alle Prozesse im Unternehmen.', 'Denken Sie an kontinuierliche Verbesserung (KVP) und die Rolle der Mitarbeitenden.'],
          reveal: ['Aussage 1: Falsch. TQM ist umfassender: es geht um die Qualität aller Prozesse im gesamten Unternehmen.', 'Aussage 2: Richtig. Richtig – Qualität und Effizienz gehören zusammen.', 'Aussage 3: Richtig. Richtig – kontinuierliche Verbesserung (KVP) ist ein Grundprinzip.', 'Aussage 4: Richtig. Richtig – Vergleich verschiedener Geschäftseinheiten innerhalb des Unternehmens.', 'Aussage 5: Falsch. Falsch – es gibt immer eine Zahlungsbereitschaft-Grenze.', 'Aussage 6: Richtig. Richtig – Mitarbeiterbeteiligung ist essenziell.']
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
          tips: ['Ökologisches Engagement kann mehr sein als eine Pflicht.', 'Denken Sie an Imagegewinn, Kosteneinsparungen und neue Zielgruppen.', 'Nachhaltigkeit kann auch Innovationen im Unternehmen fördern.'],
          reveal: ['Richtige Antwort: Weil es Kosten spart und das Image verbessert, neue Kundengruppen erschliesst und Innovationen fördert']
        }
      ],
      learningData: {
        title: 'Qualit\u00e4tsmanagement I: Grundlagen und \u00d6kologie',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'erkl\u00e4ren, was man unter Qualit\u00e4t und Qualit\u00e4tsmanagement versteht.',
              'die Bedeutung des Kano-Modells mit Muss-, Soll- und Plus-Faktoren f\u00fcr das Qualit\u00e4tsmanagement beschreiben.',
              'die Aufgabenbereiche des Qualit\u00e4tsmanagements erl\u00e4utern.',
              'anhand der ISO-Normen 9000 ff. und des Total Quality Managements die Bedeutung von Qualit\u00e4tsmanagementsystemen aufzeigen.',
              'die Zusammenh\u00e4nge zwischen \u00d6konomie und \u00d6kologie beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: 'Was ist Qualit\u00e4t?',
            content: 'Im Marketing wird unter Qualit\u00e4t die F\u00e4higkeit eines Produkts oder einer Dienstleistung verstanden, Kundenbed\u00fcrfnisse zu befriedigen. Zum Konzept der Qualit\u00e4t geh\u00f6rt auch die \u00dcbereinstimmung der Anspr\u00fcche mit der Marktleistung. Ein Produkt oder eine Dienstleistung kann die Kundenbed\u00fcrfnisse durch seine Eigenschaften befriedigen.',
            highlight: 'Qualit\u00e4t = F\u00e4higkeit einer Marktleistung, Kundenbed\u00fcrfnisse zu befriedigen.'
          },
          {
            type: 'concept',
            title: 'Kano-Modell: Muss-, Soll- und Plus-Faktoren',
            content: 'Das Kano-Modell unterscheidet drei Faktoren der Kundenzufriedenheit: Muss-Faktoren sind Eigenschaften, die auf jeden Fall erwartet werden und erf\u00fcllt sein m\u00fcssen (z.B. funktionierendes Produkt). Soll-Faktoren werden ebenfalls erwartet und sollten erf\u00fcllt sein (z.B. schnelle Lieferung). Plus-Faktoren werden nicht erwartet und k\u00f6nnen die Kunden deshalb positiv \u00fcberraschen (z.B. pers\u00f6nliche Dankesbotschaft). Die Gestaltung des Kundendiensts ist dabei von zentraler Bedeutung.',
            highlight: 'Kano-Modell: Muss-Faktoren (Grundanforderung), Soll-Faktoren (erwartet), Plus-Faktoren (\u00dcberraschung).'
          },
          {
            type: 'svg',
            title: 'Kano-Modell der Kundenzufriedenheit',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Kano-Modell</text><line x1="100" y1="220" x2="620" y2="220" stroke="#334155" stroke-width="2" marker-end="url(#arrK)"/><line x1="350" y1="390" x2="350" y2="50" stroke="#334155" stroke-width="2" marker-end="url(#arrK)"/><defs><marker id="arrK" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#334155"/></marker></defs><text x="630" y="216" font-size="12" fill="#64748b">Erf\u00fcllungsgrad</text><text x="630" y="230" font-size="10" fill="#94a3b8">hoch \u2192</text><text x="356" y="48" font-size="12" fill="#64748b">Zufriedenheit</text><text x="102" y="236" font-size="10" fill="#94a3b8">\u2190 niedrig</text><text x="356" y="404" font-size="10" fill="#94a3b8">\u2190 Unzufriedenheit</text><path d="M380,360 C400,300 450,240 550,180" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/><circle cx="550" cy="180" r="4" fill="#dc2626"/><text x="560" y="170" font-size="13" fill="#dc2626" font-weight="700">Muss-Faktoren</text><text x="560" y="186" font-size="10" fill="#94a3b8">(Basisfaktoren)</text><text x="420" y="360" font-size="10" fill="#dc2626">Fehlend = sehr unzufrieden</text><path d="M150,300 C200,270 350,220 580,120" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/><circle cx="580" cy="120" r="4" fill="#16a34a"/><text x="160" y="318" font-size="13" fill="#16a34a" font-weight="700">Soll-Faktoren</text><text x="160" y="334" font-size="10" fill="#94a3b8">(Leistungsfaktoren)</text><text x="545" y="112" font-size="10" fill="#16a34a">Linear: mehr = zufriedener</text><path d="M130,210 C200,200 300,185 450,100 C500,75 530,65 560,60" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/><circle cx="560" cy="60" r="4" fill="#7c3aed"/><text x="445" y="72" font-size="13" fill="#7c3aed" font-weight="700">Plus-Faktoren</text><text x="445" y="88" font-size="10" fill="#94a3b8">(Begeisterungsfaktoren)</text><text x="130" y="200" font-size="10" fill="#7c3aed">Nicht erwartet, \u00fcberrascht positiv</text></svg>'
          },
          {
            type: 'concept',
            title: 'Qualit\u00e4tsmanagement (QM)',
            content: 'Das Qualit\u00e4tsmanagement (QM) umfasst verschiedene Strategien und Verfahren, die grunds\u00e4tzlich zum Ziel haben, die Qualit\u00e4t von Produkten, Dienstleistungen und Prozessen sicherzustellen. Der QM-Prozess basiert auf vier Schritten: 1. Planen (Ziele zur Qualit\u00e4tsverbesserung formulieren), 2. Entscheiden (Qualit\u00e4tsaktionsplan), 3. Umsetzen (mit Commitment, Culture, Costs), 4. Kontrollieren (Benchmarking, Ableiten neuer Ziele). Aufgabenbereiche: Qualit\u00e4tsplanung, Qualit\u00e4tslenkung, Qualit\u00e4tssicherung.',
            highlight: 'QM-Prozess: Planen \u2192 Entscheiden \u2192 Umsetzen \u2192 Kontrollieren. Aufgaben: Planung, Lenkung, Sicherung.'
          },
          {
            type: 'concept',
            title: 'Qualit\u00e4tsmanagementsysteme: ISO 9000 und TQM',
            content: 'Die bekanntesten Qualit\u00e4tsmanagementsysteme sind die ISO-Normen 9000 ff. und das Total Quality Management (TQM). TQM ist eine Unternehmensphilosophie, die Qualit\u00e4t als zentrales Ziel in allen Bereichen des Unternehmens verankert. TQM kann auch an Grenzen stossen: Qualit\u00e4tsverbesserungen sind mit Kosten verbunden, und der kontinuierliche Verbesserungsprozess darf nicht zu viele Aktivit\u00e4ten der Mitarbeitenden binden.',
            highlight: 'ISO 9000 = internationaler Standard. TQM = Qualit\u00e4t als Unternehmensphilosophie in allen Bereichen.'
          },
          {
            type: 'concept',
            title: '\u00d6kologiemanagement',
            content: 'Der gesellschaftliche Anspruch an die Unternehmen, sich nachhaltig mit Umweltschutzfragen zu besch\u00e4ftigen, hat in den letzten Jahren stark zugenommen. Ein bewusstes \u00d6kologiemanagement bietet auch neue Marktchancen: Imagevorteile, Kosteneinsparungen durch Ressourcenreduktion, Qualit\u00e4tsverbesserungen und Vermeidung von Haftungsrisiken. Strategien: Defensiv (nur offensichtliche Marketingnutzen absch\u00f6pfen) oder Offensiv (aktiv mit \u00f6kologischen Themen Wettbewerbsvorteile realisieren und neue M\u00e4rkte erschliessen).',
            highlight: '\u00d6kologiemanagement als Chance: Imagevorteile, Kosteneinsparung, Qualit\u00e4t, Risikovermeidung.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Qualit\u00e4t = F\u00e4higkeit einer Marktleistung, Kundenbed\u00fcrfnisse zu befriedigen.',
              'Kano-Modell: Muss-Faktoren (Grundanforderung), Soll-Faktoren (erwartet), Plus-Faktoren (\u00dcberraschung).',
              'QM-Prozess: Planen \u2192 Entscheiden \u2192 Umsetzen \u2192 Kontrollieren.',
              'ISO 9000 = internationaler Standard. TQM = Qualit\u00e4t als Philosophie in allen Bereichen.',
              'TQM braucht Unterst\u00fctzung der Mitarbeitenden \u2013 ohne Commitment kein Erfolg.',
              '\u00d6kologiemanagement: defensiv (Minimum) oder offensiv (Wettbewerbsvorteil).',
              'Umweltmassnahmen: Vermeiden > Vermindern > Verwerten > Entsorgen.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Qualit\u00e4t</strong> einer Marktleistung ist die F\u00e4higkeit, Kundenbed\u00fcrfnisse zu befriedigen. <strong>Muss-Faktoren</strong> m\u00fcssen erf\u00fcllt sein, <strong>Soll-Faktoren</strong> werden erwartet, <strong>Plus-Faktoren</strong> \u00fcberraschen positiv.',
              'Das Unternehmen muss durch ein st\u00e4ndiges <strong>Qualit\u00e4tsmanagement</strong> die Leistungserstellung kontrollieren und verbessern. Aufgaben: <strong>Qualit\u00e4tsplanung</strong>, <strong>Qualit\u00e4tslenkung</strong>, <strong>Qualit\u00e4tssicherung</strong>.',
              'Die bekanntesten <strong>Qualit\u00e4tsmanagementsysteme</strong> sind ISO-Normen 9000 ff. und Total Quality Management.',
              'Heute kann kein Unternehmen mehr auf <strong>\u00d6kologiemanagement</strong> verzichten. Strategien: <strong>defensiv</strong> oder <strong>offensiv</strong>.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Qualit\u00e4t', def: 'F\u00e4higkeit eines Produkts oder einer Dienstleistung, Kundenbed\u00fcrfnisse zu befriedigen.' },
              { term: 'Kano-Modell', def: 'Modell mit Muss-, Soll- und Plus-Faktoren zur Analyse der Kundenzufriedenheit.' },
              { term: 'Muss-Faktoren', def: 'Grundanforderungen, die auf jeden Fall erf\u00fcllt sein m\u00fcssen.' },
              { term: 'Plus-Faktoren', def: 'Nicht erwartete Eigenschaften, die den Kunden positiv \u00fcberraschen.' },
              { term: 'Qualit\u00e4tsmanagement', def: 'Strategien und Verfahren zur Sicherstellung der Qualit\u00e4t.' },
              { term: 'ISO 9000', def: 'Internationaler Standard f\u00fcr Qualit\u00e4tsmanagementsysteme.' },
              { term: 'Total Quality Management', def: 'Unternehmensphilosophie, die Qualit\u00e4t in allen Bereichen verankert.' },
              { term: '\u00d6kologiemanagement', def: 'Systematisches Management \u00f6kologischer Aspekte \u2013 bietet Marktchancen und reduziert Risiken.' }
            ]
          }
        ]
      }
    },

    // ================================================================
    // Chapter 16: Qualit\u00e4tsmanagement II: Reklamationswesen (S.251)
    // ================================================================
    {
      id: 'ch16', pageStart: 227, pageEnd: 260, num: 'Teil B \u2013 Kapitel 16', title: 'Qualit\u00e4tsmanagement II: Reklamationswesen',
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
          tips: ['CRM steht für Customer Relationship Management – Kundenbeziehungsmanagement.', 'Was hat der Umgang mit Beschwerden mit Kundenbeziehungen zu tun?', 'Eine gut bearbeitete Reklamation kann die Kundenbindung sogar stärken.'],
          reveal: ['Richtige Antwort: Weil Reklamationsmanagement dazu beiträgt, Kundenbeziehungen zu pflegen und zu verbessern']
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
      learningData: {
        title: 'Qualit\u00e4tsmanagement II: Reklamationswesen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels k\u00f6nnen Sie ...',
            items: [
              'die Begriffe \u00abReklamationsmanagement\u00bb oder \u00abBeschwerdemanagement\u00bb definieren.',
              'das Reklamations- oder Beschwerdemanagement ins CRM einordnen.',
              'die Ziele des Reklamations- oder Beschwerdemanagements beschreiben.',
              'Reklamationen und Beschwerden erfolgreich behandeln.'
            ]
          },
          {
            type: 'concept',
            title: 'Reklamations- oder Beschwerdemanagement \u2013 Definition',
            content: 'Beschwerde, Beanstandung oder Reklamation sind negative \u00c4usserungen von Kunden, Lieferanten oder anderen Gesch\u00e4ftspartnern in Bezug auf Marktleistungen (Produkte oder Dienstleistungen), das Verhalten von Mitarbeitenden oder das Unternehmen als Ganzes. Das Reklamationsmanagement ist ein Mittel des Qualit\u00e4tsmanagements im Marketing. Es umfasst alle systematischen Massnahmen, die ein Unternehmen bei Reklamationen und Beschwerden umsetzt, um die Kundenzufriedenheit trotz einer negativen Erfahrung aufrechtzuerhalten.',
            highlight: 'Reklamationsmanagement = alle systematischen Massnahmen bei Beschwerden, um Kundenzufriedenheit aufrechtzuerhalten.'
          },
          {
            type: 'concept',
            title: 'Einordnung ins CRM',
            content: 'Das Reklamationsmanagement ist ein wichtiger Bestandteil des CRM (Customer Relationship Management). Diese unternehmerische Grundhaltung bezweckt, dem Kunden langfristig eine kontinuierliche Wertsch\u00f6pfung aus der Gesch\u00e4ftsbeziehung zu bieten \u2013 \u00fcber die gesamte Lebenszeit der Kundenbeziehung hinweg. Neben der Bindung von neuen und bestehenden Kunden geht es auch um die Kundenr\u00fcckgewinnung: \u00abK\u00fcndiger\u00bb, \u00abSchl\u00e4fer\u00bb/\u00abStammleichen\u00bb und \u00abReduzierer\u00bb.',
            highlight: 'Reklamationsmanagement = Teil des CRM. Ziel: langfristige Kundenbeziehung und Kundenr\u00fcckgewinnung.'
          },
          {
            type: 'concept',
            title: 'Ziele des Beschwerdemanagements',
            content: 'Die wichtigsten Ziele eines professionellen Reklamations- oder Beschwerdemanagements sind: Die Wiederherstellung von Kundenzufriedenheit, die Steigerung der Servicequalit\u00e4t durch z\u00fcgiges L\u00f6sen von Kundenanliegen, die Vermeidung und Reduzierung von Fehler-, Folge- und Beschwerdekosten sowie die Nutzung der Beschwerdeinformationen f\u00fcr betriebliche Risiken und Chancen. Erfolgreich gel\u00f6ste Beschwerden haben eine stark emotionale Wirkung und st\u00e4rken die Kundenbindung.',
            highlight: 'Ziele: Kundenzufriedenheit wiederherstellen, Servicequalit\u00e4t steigern, Kosten senken, Informationen nutzen.'
          },
          { type: 'svg', title: 'Beschwerdeprozess: 4 Bausteine', svg: '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="28" text-anchor="middle" fill="#581c87" font-size="16" font-weight="bold">Reklamationsmanagement: Beschwerdeprozess</text><rect x="40" y="55" width="130" height="80" rx="10" fill="#9333ea"/><text x="105" y="80" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">1. Bezug</text><line x1="50" y1="90" x2="160" y2="90" stroke="#e9d5ff" stroke-width="0.5"/><text x="105" y="107" text-anchor="middle" fill="#e9d5ff" font-size="9">Reklamation</text><text x="105" y="120" text-anchor="middle" fill="#e9d5ff" font-size="9">konkret benennen</text><polygon points="170,95 185,87 185,103" fill="#a855f7"/><rect x="195" y="55" width="130" height="80" rx="10" fill="#7e22ce"/><text x="260" y="80" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">2. Verst\u00e4ndnis</text><line x1="205" y1="90" x2="315" y2="90" stroke="#e9d5ff" stroke-width="0.5"/><text x="260" y="107" text-anchor="middle" fill="#e9d5ff" font-size="9">Emotionale Wellen</text><text x="260" y="120" text-anchor="middle" fill="#e9d5ff" font-size="9">gl\u00e4tten</text><polygon points="325,95 340,87 340,103" fill="#a855f7"/><rect x="350" y="55" width="130" height="80" rx="10" fill="#6b21a8"/><text x="415" y="80" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">3. L\u00f6sung</text><line x1="360" y1="90" x2="470" y2="90" stroke="#e9d5ff" stroke-width="0.5"/><text x="415" y="107" text-anchor="middle" fill="#e9d5ff" font-size="9">Sachverhalt schildern</text><text x="415" y="120" text-anchor="middle" fill="#e9d5ff" font-size="9">und L\u00f6sung anbieten</text><polygon points="480,95 495,87 495,103" fill="#a855f7"/><rect x="505" y="55" width="160" height="80" rx="10" fill="#581c87"/><text x="585" y="80" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">4. Schluss</text><line x1="515" y1="90" x2="655" y2="90" stroke="#e9d5ff" stroke-width="0.5"/><text x="585" y="107" text-anchor="middle" fill="#e9d5ff" font-size="9">Bedauern, positiver</text><text x="585" y="120" text-anchor="middle" fill="#e9d5ff" font-size="9">Ausblick</text><rect x="60" y="155" width="580" height="85" rx="10" fill="#f5f3ff" stroke="#c084fc" stroke-width="1.5"/><text x="350" y="177" text-anchor="middle" fill="#581c87" font-size="12" font-weight="bold">4 Ziele des Reklamationsmanagements</text><rect x="80" y="190" width="250" height="20" rx="4" fill="#ede9fe"/><text x="205" y="204" text-anchor="middle" fill="#581c87" font-size="10">Kundenzufriedenheit wiederherstellen</text><rect x="350" y="190" width="270" height="20" rx="4" fill="#ede9fe"/><text x="485" y="204" text-anchor="middle" fill="#581c87" font-size="10">Servicequalit\u00e4t steigern</text><rect x="80" y="215" width="250" height="20" rx="4" fill="#ede9fe"/><text x="205" y="229" text-anchor="middle" fill="#581c87" font-size="10">Fehler- und Folgekosten senken</text><rect x="350" y="215" width="270" height="20" rx="4" fill="#ede9fe"/><text x="485" y="229" text-anchor="middle" fill="#581c87" font-size="10">Beschwerdeinformationen nutzen</text></svg>' },
          {
            type: 'concept',
            title: 'Umgang mit Beschwerden \u2013 10 Punkte',
            content: 'Bei der erfolgreichen Bearbeitung von Reklamationen sind 10 Punkte hilfreich: 1. Nehmen Sie sich Zeit, 2. H\u00f6ren Sie aufmerksam zu, 3. Zeigen Sie Verst\u00e4ndnis, 4. Suchen Sie die Schuld nicht beim Kunden, 5. Entschuldigen Sie sich, 6. Danken Sie f\u00fcr den Hinweis, 7. Bieten Sie eine L\u00f6sung an, 8. Halten Sie Ihre Versprechen ein, 9. Pr\u00fcfen Sie die Zufriedenheit nach, 10. Dokumentieren Sie die Reklamation.',
            highlight: 'Grundregel: Zuh\u00f6ren, Verst\u00e4ndnis zeigen, Schuld nicht beim Kunden suchen, L\u00f6sung anbieten, Follow-up.'
          },
          {
            type: 'concept',
            title: 'Antwortschreiben auf Beschwerden',
            content: 'Das Antwortschreiben auf Beschwerden kann in vier Teile gegliedert werden: 1. Bezug deutlich machen (genau angeben, auf welche Reklamation Bezug genommen wird), 2. Verst\u00e4ndnis zeigen (emotionale Wellen gl\u00e4tten), 3. Sachverhalt / L\u00f6sung (Sachverhalt schildern und L\u00f6sung anbieten \u2013 Begriffe wie \u00abProblem\u00bb, \u00abSchuld\u00bb vermeiden), 4. Schluss (nochmals Bedauern ausdr\u00fccken und positiven Ausblick geben).',
            highlight: '4 Bausteine: 1. Bezug, 2. Verst\u00e4ndnis, 3. Sachverhalt/L\u00f6sung, 4. Schluss.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Reklamationsmanagement = alle systematischen Massnahmen bei Beschwerden.',
              'Reklamationsmanagement ist Teil des CRM \u2013 Ziel: langfristige Kundenbeziehung.',
              'Ziele: Kundenzufriedenheit wiederherstellen, Servicequalit\u00e4t steigern, Kosten senken, Infos nutzen.',
              'Erfolgreich gel\u00f6ste Beschwerden st\u00e4rken die Kundenbindung \u2013 Reklamation = Chance.',
              '10 Punkte: Zuh\u00f6ren, Verst\u00e4ndnis, nicht Kunde beschuldigen, Entschuldigung, L\u00f6sung, Follow-up.',
              'Antwortschreiben: 4 Bausteine \u2013 Bezug, Verst\u00e4ndnis, Sachverhalt/L\u00f6sung, Schluss.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Beschwerde, Beanstandung oder Reklamation</strong> sind negative \u00c4usserungen von Kunden, Lieferanten oder anderen Gesch\u00e4ftspartnern \u00fcber Marktleistungen oder das Verhalten von Mitarbeitenden.',
              'Das <strong>Reklamationswesen</strong> (auch Beschwerdemanagement genannt) umfasst alle systematischen Massnahmen, um die <strong>Kundenzufriedenheit</strong> trotz einer negativen Erfahrung aufrechtzuerhalten.',
              'Das Reklamationswesen ist <strong>Bestandteil des CRM</strong>. Reklamationen sind eine Chance. Es gibt <strong>10 Stufen bei der Bearbeitung</strong> von Beschwerden.',
              'Das <strong>Antwortschreiben</strong> auf Beschwerden sollte vier Bausteine enthalten: Bezug deutlich machen, Verst\u00e4ndnis zeigen, Sachverhalt/L\u00f6sung, Schluss.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schl\u00fcsselbegriffe',
            terms: [
              { term: 'Reklamation', def: 'Negative \u00c4usserung eines Kunden bez\u00fcglich Marktleistung oder Verhalten.' },
              { term: 'Beschwerdemanagement', def: 'Alle systematischen Massnahmen bei Reklamationen und Beschwerden.' },
              { term: 'CRM', def: 'Customer Relationship Management \u2013 langfristige Pflege der Kundenbeziehung.' },
              { term: 'Kundenbindung', def: 'Massnahmen, um bestehende Kunden langfristig an das Unternehmen zu binden.' },
              { term: 'Kundenr\u00fcckgewinnung', def: 'Massnahmen, um verlorene oder inaktive Kunden zur\u00fcckzugewinnen.' },
              { term: 'Antwortschreiben', def: 'Strukturierte Antwort auf eine Beschwerde mit vier Bausteinen.' }
            ]
          }
        ]
      }
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
