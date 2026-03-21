window.BOOK_DATA = {
  id: 'distribution',
  title: 'Distribution 3.0 für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Distribution',
  author: 'Bislin, Röösli',
  year: 2023,
  pages: 175,
  color: '#ea580c',
  chapters: [
    // ============================================================
    // KAPITEL 1: Grundlagen der Distribution
    // ============================================================
    {
      id: 'ch1', num: 'Kapitel 1', title: 'Grundlagen der Distribution',
      exercises: [
        // Ex 1 — Grundbegriffe der Distribution (Rep 1, S.25)
        {
          id: 1, type: 'match',
          q: 'Grundbegriffe der Distribution',
          instruction: 'Ordnen Sie die fünf grundsätzlichen Begriffe der Distribution ihrer Bedeutung zu.',
          pairs: [{l:'Strategische Distribution',r:'Die Bestimmung des Absatzwegs insgesamt'},{l:'Physische Distribution',r:'Die Festlegung der Infrastruktur in der Logistik'},{l:'Supply Chain Management',r:'Die Steuerung der Wertschöpfungskette'},{l:'Modell der Stufen',r:'Der Vertriebsweg eines Produkts über den Handel'},{l:'Träger der Distribution',r:'Die Abteilungen, die Distributionsaufgaben wahrnehmen'}],
          options: ['Die Bestimmung des Absatzwegs insgesamt','Die Festlegung der Infrastruktur in der Logistik','Die Steuerung der Wertschöpfungskette','Der Vertriebsweg eines Produkts über den Handel','Die Abteilungen, die Distributionsaufgaben wahrnehmen'],
          tips: ['Strategische Distribution betrifft den Absatzweg.','Physische Distribution betrifft die Logistik-Infrastruktur.','SCM steuert die gesamte Wertschöpfungskette.'],
          reveal: ['Strategische Distribution = Bestimmung des Absatzwegs insgesamt.','Physische Distribution = Festlegung der Infrastruktur in der Logistik.','Supply Chain Management = Steuerung der Wertschöpfungskette.','Modell der Stufen = Der Vertriebsweg eines Produkts über den Handel.','Träger der Distribution = Die Abteilungen, die Distributionsaufgaben wahrnehmen.']
        },
        // Ex 2 — Definition Distribution (Rep 2, S.25)
        {
          id: 2, type: 'text',
          q: 'Definition Distribution',
          instruction: 'Definieren Sie in Ihren eigenen Worten den Begriff "Distribution".',
          questions: [{q:'Definition Distribution:', keywords:['verfügbarmachung','marktleistung','produkt','dienstleistung','nachfragenden','aufgabe','zielsetzung'], minKeywords:3}],
          tips: ['Distribution ist ein zentraler Begriff des Marketingmix.','Es geht um die Verfügbarkeit von Produkten.','Denken Sie an die Aufgabe UND die Zielsetzung.'],
          reveal: ['Der Begriff "Distribution" umschreibt die Verfügbarmachung der Marktleistung (Produkt oder Dienstleistung) für die Nachfragenden.','Dies umschreibt sowohl die Aufgabe als auch die oberste Zielsetzung der Distribution.']
        },
        // Ex 3 — Drei Instrumente der Distribution (Rep 3, S.25)
        {
          id: 3, type: 'fill',
          q: 'Drei Instrumente der Distribution',
          instruction: 'Nennen Sie die drei klassischen Instrumente der Distribution.',
          template: '1. {0} | 2. {1} | 3. {2}',
          blanks: [['Strategische Distribution'],['Physische Distribution'],['Standortwahl']],
          tips: ['Die drei Instrumente bilden das Distributionssystem.','Ein Instrument befasst sich mit dem Absatzweg.','Ein Instrument befasst sich mit dem Ort der Warenübergabe.'],
          reveal: ['1. Strategische Distribution (Bestimmung des Absatzwegs).','2. Physische Distribution (Festlegung der Logistik-Infrastruktur).','3. Standortwahl (Evaluation des Orts der Warenübergabe).']
        },
        // Ex 4 — Dreistufige Distribution (Rep 4, S.25)
        {
          id: 4, type: 'match',
          q: 'Dreistufige Distribution',
          instruction: 'Ordnen Sie die Stufen der dreistufigen Distribution am Beispiel eines Weins aus Frankreich zu.',
          pairs: [{l:'1. Stufe',r:'Importfirma (in der Schweiz)'},{l:'2. Stufe',r:'Grosshandel'},{l:'3. Stufe',r:'Detailhandel'},{l:'Endstation',r:'Konsument/-in'}],
          options: ['Importfirma (in der Schweiz)','Grosshandel','Detailhandel','Konsument/-in'],
          tips: ['Die 1. Stufe ist der erste Zwischenhändler nach der Produktion.','Bei einem ausländischen Produkt ist die 1. Stufe oft ein Importeur.','Am Ende der Kette steht immer der Konsument.'],
          reveal: ['Produktion (Weinkeller in Frankreich) -> 1. Stufe: Importfirma -> 2. Stufe: Grosshandel -> 3. Stufe: Detailhandel -> Konsument/-in.','Jede Stufe bedeutet einen Eigentumswechsel.']
        },
        // Ex 5 — Minicase SCM (Rep 5, S.25)
        {
          id: 5, type: 'text',
          q: 'Minicase: Supply Chain Management',
          instruction: 'Eine global tätige Firma der Konsumgüterindustrie möchte den Markteintritt in der Schweiz. Definieren Sie die Organisation der Warenverfügbarkeit nach dem Modell der Distributionsflüsse.',
          questions: [{q:'Beschreiben Sie die relevanten Distributionsflüsse:', keywords:['warenfluss','geldfluss','informationsfluss','eigentumsfluss','kommunikationsfluss','transport','lager','import'], minKeywords:3}],
          tips: ['Es gibt fünf Distributionsflüsse zwischen Produktion und Konsumation.','Denken Sie an den physischen Warenfluss (Transport, Lager).','Der Informationsfluss umfasst Anfragen, Offerten, Bestellungen, Rechnungen.'],
          reveal: ['Warenfluss: Bewegung der Ware vom Produktionsland in die Schweiz, Entgegennahme in eigenes Lager oder Fremdlager, Weiterleiten an den Handel.','Geldfluss: Fliesst gemäss Vereinbarungen zwischen den Vertragsparteien.','Informationsfluss: Anfragen, Offerten, Bestellungen, Lieferpapiere und Rechnungen werden heute meist elektronisch verarbeitet.','Eigentumsfluss: Eigentumsübergang bei Gattungsware gemäss OR 184 ff.']
        },
        // Ex 6 — Richtig oder Falsch: Grundlagen
        {
          id: 6, type: 'tf',
          q: 'Richtig oder Falsch: Grundlagen',
          statements: [
            {s:'Distribution ist das dritte "P" (Place) im Marketingmix.', c:true, feedback:'Richtig. Die 4 Ps sind Product, Price, Place, Promotion.'},
            {s:'Bei einer 0-stufigen Distribution verkauft der Hersteller direkt an den Endkunden.', c:true, feedback:'0-stufig = kein Zwischenhändler = Direktvertrieb.'},
            {s:'Der Informationsfluss umfasst nur den Transport der physischen Ware.', c:false, feedback:'Der Informationsfluss umfasst Anfragen, Offerten, Bestellungen und Rechnungen. Der Warenfluss umfasst den physischen Transport.'},
            {s:'Supply Chain Management steuert nur die Logistik innerhalb eines Unternehmens.', c:false, feedback:'SCM steuert die gesamte Wertschöpfungskette von der Rohstoffgewinnung bis zum Endkunden.'}
          ],
          tips: ['Distribution = Place im Marketingmix.','0-stufig = direkt, 1-3 stufig = indirekt.','SCM ist unternehmensübergreifend.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Richtig.','Aussage 3: Falsch - Informationsfluss ist nicht der Warenfluss.','Aussage 4: Falsch - SCM ist unternehmensübergreifend.']
        },
        // Ex 7 — Distributionsflüsse (MC)
        {
          id: 7, type: 'mc',
          q: 'Distributionsflüsse (MC)',
          instruction: 'Welcher der folgenden ist KEIN Distributionsfluss?',
          options: ['Warenfluss','Geldfluss','Personalfluss','Eigentumsfluss'],
          answer: 2,
          tips: ['Es gibt fünf Distributionsflüsse.','Alle fliessen zwischen Produktion und Konsumation.','Personal gehört nicht zu den Distributionsflüssen.'],
          reveal: ['Die fünf Distributionsflüsse sind: Warenfluss, Geldfluss, Informationsfluss, Eigentumsfluss und Kommunikationsfluss.','Personalfluss ist kein Distributionsfluss.']
        },
        // Ex 8 — Lückentext: Stufenmodell
        {
          id: 8, type: 'fill',
          q: 'Lückentext: Stufenmodell',
          instruction: 'Ergänzen Sie die Lücken zum Stufenmodell der Distribution.',
          template: 'Bei der {0} Distribution verkauft der Hersteller direkt an den Endkunden (= {1}). Bei der indirekten Distribution durchläuft das Produkt {2} Zwischenstufen. Als Stufe gilt, wenn das {3} auf eine Drittfirma wechselt.',
          blanks: [['0-stufigen','nullstufigen'],['Direktvertrieb','direkte Distribution'],['1 bis 3','1-3','ein bis drei'],['Eigentum']],
          tips: ['0-stufig = kein Zwischenhändler.','Eine Stufe = ein Eigentumswechsel.','Indirekt kann 1-, 2- oder 3-stufig sein.'],
          reveal: ['0-stufig = Direktvertrieb (Hersteller an Konsument).','Indirekte Distribution = 1 bis 3 Zwischenstufen.','Als Stufe gilt ein Eigentumswechsel an eine Drittfirma (Handel oder Importfirma).']
        },
        // Ex 9 — Einflussfaktoren auf die Distribution
        {
          id: 9, type: 'text',
          q: 'Einflussfaktoren auf die Distribution',
          instruction: 'Nennen Sie mindestens vier Einflussfaktoren auf die Distribution und erklären Sie, warum Verpackung bei einem Körperpflegeprodukt eine grosse Bedeutung hat.',
          questions: [{q:'Einflussfaktoren und Begründung Verpackung:', keywords:['produkt','verpackung','marke','sortiment','serviceleistung','design','transport','stapelbar','gesetzlich','haltbarkeit'], minKeywords:4}],
          tips: ['Denken Sie an die Checkliste Einflussfaktoren (Abb. 1-4 im Buch).','Verpackung hat bei Transportgütern grosse Bedeutung.','Auch gesetzliche Vorschriften spielen eine Rolle.'],
          reveal: ['Einflussfaktoren: Produkt/Produktnutzen, Design, Verpackung, Marke, Sortiment, Serviceleistungen.','Verpackung bei Körperpflege: Sehr wichtig, muss bei Transportverpackung bedacht werden (Stapelbarkeit, Transportfähigkeit, Angabe Verderb-Datum, gesetzliche Vorschriften).']
        }
      ],
      learningData: {
        title: 'Grundlagen der Distribution',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Begriffe "Distribution" und "Aufgabe der Distribution" beschreiben.',
              'die Bedeutung der Distribution im Rahmen des Marketingmix erklären.',
              'die Träger und Einflussfaktoren der strategischen Distribution (Distributionspolitik) erkennen.',
              'die grundsätzlichen Fachbegriffe der Distribution nennen.'
            ]
          },
          {
            type: 'concept',
            title: '1.1 Definition und Aufgabe',
            content: 'Der Begriff "Distribution" umschreibt die Verfügbarmachung der Marktleistung (Produkt oder Dienstleistung) für die Nachfragenden. Dies umschreibt sowohl die Aufgabe als auch die oberste Zielsetzung der Distribution. Distribution ist das dritte "P" im Marketingmix (Place) und befasst sich mit allen Entscheidungen, die den Weg eines Produkts vom Hersteller zum Endkunden betreffen.',
            highlight: 'Distribution = Verfügbarmachung der Marktleistung für die Nachfragenden. Sie ist das "Place" im Marketingmix.'
          },
          {
            type: 'concept',
            title: '1.3 Instrumente der Distribution',
            content: 'Die Distribution lässt sich in drei Hauptinstrumente gliedern: 1. Strategische Distribution (Bestimmung des Absatzwegs insgesamt), 2. Physische Distribution (Festlegung der Infrastruktur in der Logistik), 3. Standortwahl (Evaluation des Orts der Warenübergabe). Dazu kommt das übergreifende Element des Serviceniveaus.',
            highlight: 'Die drei Instrumente der Distribution: Strategische Distribution, Physische Distribution und Standortwahl.'
          },
          {
            type: 'table',
            title: 'Übersicht Distributionssystem',
            headers: ['Instrument', 'Beschreibung', 'Unterbereiche'],
            rows: [
              ['Strategische Distribution', 'Bestimmung des Absatzwegs insgesamt', 'Direkt, Indirekt, Multichannel'],
              ['Physische Distribution', 'Festlegung der Infrastruktur in der Logistik', 'Lager, Transport, Informationsfluss'],
              ['Standortwahl', 'Evaluation des Orts der Warenübergabe', 'Standorttypen, Standortkriterien']
            ]
          },
          {
            type: 'concept',
            title: '1.5 Träger der Distribution',
            content: 'Die Marketingfunktionen (Verkauf, Marketinglogistik, Finanzen) und vorgelagert die Marktforschung sind Träger der Distribution. Sie gewährleisten, dass die gewünschten Marktleistungen für die Konsumentinnen und Konsumenten entsprechend verfügbar sind.',
            highlight: 'Träger der Distribution: 1. Strategische Distribution, 2. Physische Distribution, 3. Supply Chain Management, 4. Modell der Stufen, 5. Träger der Distribution (Abteilungen, die Distributionsaufgaben wahrnehmen).'
          },
          {
            type: 'concept',
            title: '1.7 Stufenmodell',
            content: 'Das Stufenmodell zeigt, dass die Distribution nach Anzahl der Zwischenstufen gegliedert werden kann. Man unterscheidet: 0-stufig (direkte Distribution) oder 1- bis 3-stufig (indirekte Distribution). Als Stufe gilt, wenn das Eigentum dazwischen auf eine Drittfirma (Handel oder Importfirma) wechselt.',
            highlight: '0-stufig = Direktvertrieb (Hersteller an Konsument). 1-3 stufig = indirekter Vertrieb über den Handel.'
          },
          {
            type: 'concept',
            title: '1.8 Modell der Distributionsflüsse/-ströme',
            content: 'Die Distributionsabläufe können nach Flüssen (Strömen) dargestellt werden. Zwischen Produktion und Konsumation fliessen fünf Ströme: 1. Warenfluss (physische Verschiebung), 2. Geldfluss (Zahlungen), 3. Informationsfluss (Anfragen, Offerten, Bestellungen, Rechnungen), 4. Eigentumsfluss (Eigentumswechsel), 5. Kommunikationsfluss.',
            highlight: 'Die 5 Distributionsflüsse: Warenfluss, Geldfluss, Informationsfluss, Eigentumsfluss, Kommunikationsfluss.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Distribution = Verfügbarmachung der Marktleistung (Place im Marketingmix).',
              'Drei Instrumente: Strategische Distribution, Physische Distribution, Standortwahl.',
              'Stufenmodell: 0-stufig (direkt) bis 3-stufig (indirekt).',
              'Fünf Distributionsflüsse: Waren, Geld, Information, Eigentum, Kommunikation.',
              'Supply Chain Management (SCM) steuert die gesamte Wertschöpfungskette.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Distribution', def: 'Verfügbarmachung der Marktleistung für die Nachfragenden.'},
              {term: 'Strategische Distribution', def: 'Bestimmung des Absatzwegs insgesamt (direkt, indirekt, Multichannel).'},
              {term: 'Physische Distribution', def: 'Festlegung der Infrastruktur in der Logistik (Lager, Transport, Informationsfluss).'},
              {term: 'Standortwahl', def: 'Evaluation des Orts der Warenübergabe.'},
              {term: 'Stufenmodell', def: 'Gliederung nach Anzahl Zwischenstufen (0- bis 3-stufig).'},
              {term: 'Distributionsflüsse', def: 'Waren-, Geld-, Informations-, Eigentums- und Kommunikationsfluss.'},
              {term: 'Supply Chain Management', def: 'Steuerung der gesamten Wertschöpfungskette vom Rohstoff bis zum Endkunden.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Distribution</strong> umschreibt die Verfügbarmachung der Marktleistung für die Nachfragenden und ist das dritte "P" (Place) im Marketingmix.',
              'Die drei <strong>Instrumente der Distribution</strong> sind: Strategische Distribution, Physische Distribution und Standortwahl.',
              'Das <strong>Stufenmodell</strong> unterscheidet zwischen 0-stufiger (direkter) und 1- bis 3-stufiger (indirekter) Distribution.',
              'Zwischen Produktion und Konsumation gibt es fünf <strong>Distributionsflüsse</strong>: Warenfluss, Geldfluss, Informationsfluss, Eigentumsfluss und Kommunikationsfluss.',
              '<strong>Supply Chain Management (SCM)</strong> steuert die gesamte Wertschöpfungskette und ist ein übergeordnetes Konzept der Distribution.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 2: Strategische Distribution
    // ============================================================
    {
      id: 'ch2', num: 'Kapitel 2', title: 'Strategische Distribution',
      exercises: [
        // Ex 10 — Wichtigster strategischer Entscheid (Rep 6, S.33)
        {
          id: 10, type: 'mc',
          q: 'Wichtigster strategischer Entscheid',
          instruction: 'Welches ist der wichtigste strategische Entscheid im Rahmen der Distribution?',
          options: ['Die Wahl des Standorts','Die Bestimmung des Distributionswegs','Die Festlegung der Logistik','Die Auswahl der Mitarbeitenden'],
          answer: 1,
          tips: ['Es geht um den grundsätzlichsten Entscheid.','Direkt, indirekt oder Kombination?','Dies bestimmt alle weiteren Distributionsentscheidungen.'],
          reveal: ['Der wichtigste strategische Entscheid ist die Bestimmung des Distributionswegs.','Zur Wahl stehen: Direktvertrieb, Vertrieb über den Handel oder eine Kombination davon (Multichannel).']
        },
        // Ex 11 — Duale Distribution (Rep 7, S.33)
        {
          id: 11, type: 'text',
          q: 'Duale Distribution',
          instruction: 'Was wird unter einer "dualen Distribution" verstanden?',
          questions: [{q:'Definition duale Distribution:', keywords:['direkt','indirekt','sowohl','handel','multichannel','bearbeitung','nachfragenden'], minKeywords:3}],
          tips: ['Dual bedeutet "zweifach".','Es geht um die gleichzeitige Nutzung zweier Wege.','Ein anderer Begriff ist "Multichanneling".'],
          reveal: ['Als Duale Distribution wird die Bearbeitung der Nachfragenden sowohl direkt (durch eigene Organe) wie auch indirekt (über den Handel) verstanden.','Es wird häufig als "Multichanneling" bezeichnet.']
        },
        // Ex 12 — Absatzkanäle und Handelskanäle (Rep 8, S.33)
        {
          id: 12, type: 'match',
          q: 'Absatzkanäle und Handelskanäle',
          instruction: 'Ordnen Sie die Absatzkanäle den passenden Handelskanälen zu.',
          pairs: [{l:'Grossverteiler',r:'Migros, Coop'},{l:'Discounter',r:'Denner, Aldi Schweiz, Lidl Schweiz'},{l:'Online',r:'Digitec.ch, Zalando.ch, Bergfreunde.de'}],
          options: ['Migros, Coop','Denner, Aldi Schweiz, Lidl Schweiz','Digitec.ch, Zalando.ch, Bergfreunde.de'],
          tips: ['Grossverteiler sind die grössten Detailhändler.','Discounter zeichnen sich durch niedrige Preise aus.','Online-Kanäle umfassen E-Commerce-Plattformen.'],
          reveal: ['Grossverteiler: Migros, Coop.','Discounter: Denner, Aldi Schweiz, Lidl Schweiz.','Online: Digitec.ch, Zalando.ch, Bergfreunde.de.']
        },
        // Ex 13 — Minicase Tapanah (Rep 9, S.33)
        {
          id: 13, type: 'text',
          q: 'Minicase: Indirekter Vertrieb vs. Multichannel',
          instruction: 'Kosmetikfirma Tapanah International: Vergleichen Sie indirekten Vertrieb und Multichannel. Welche Möglichkeit ist vorteilhafter?',
          questions: [{q:'Begründeter Vorschlag:', keywords:['indirekt','multichannel','fachhandel','drogerien','onlineshop','kosten','infrastruktur','markteintritt','goodwill','umsatzpotenzial'], minKeywords:4}],
          tips: ['Betrachten Sie die Entscheidungsmatrix (Kriterien gewichten).','Denken Sie an Umsatzpotenzial, Kundenbindung, Deckungsbeitrag, IT-Kosten.','Der Goodwill des Fachhandels ist wichtig.'],
          reveal: ['Nach Auswertung der Entscheidungsmatrix: Indirekter Vertriebsweg über den Fachhandel (Drogerien, Drogeriemärkte).','Begründung: Für den Markteintritt ist der Goodwill des Fachhandels wichtig. Das berechnete Umsatzpotenzial wird durch Multichanneling nicht massgeblich gesteigert. Die IT-Kosten sind nicht zu unterschätzen.']
        },
        // Ex 14 — RF: Strategische Distribution
        {
          id: 14, type: 'tf',
          q: 'RF: Strategische Distribution',
          statements: [
            {s:'Beim Direktvertrieb verkauft der Hersteller ohne Zwischenhändler an den Endkunden.', c:true, feedback:'Direkt = 0-stufig, kein Zwischenhändler.'},
            {s:'Multichannel bedeutet, dass nur ein einziger Vertriebskanal genutzt wird.', c:false, feedback:'Multichannel = mehrere Kanäle gleichzeitig (direkt und indirekt).'},
            {s:'Die Wahl des Distributionswegs ist der wichtigste strategische Entscheid.', c:true, feedback:'Dies bestimmt alle weiteren Distributionsentscheide.'},
            {s:'Duale Distribution und Multichannel sind unterschiedliche Konzepte.', c:false, feedback:'Duale Distribution wird häufig als Multichanneling bezeichnet.'}
          ],
          tips: ['Direkt = ohne Zwischenhändler.','Multi = mehrere.','Dual = zweifach = Multichannel.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Multi = mehrere Kanäle.','Aussage 3: Richtig.','Aussage 4: Falsch - gleicher Begriff.']
        },
        // Ex 15 — Distributionswege zuordnen (Tabelle/Check)
        {
          id: 15, type: 'match',
          q: 'Distributionswege zuordnen',
          instruction: 'Ordnen Sie die Beispiele dem richtigen Distributionsweg zu.',
          pairs: [
            { l: 'Firmeneigener Onlineshop', r: 'Direkt' },
            { l: 'Verkauf über Migros', r: 'Indirekt' },
            { l: 'Werksverkauf (Factory Outlet)', r: 'Direkt' },
            { l: 'Verkauf über Fachhandel', r: 'Indirekt' },
            { l: 'Eigener Aussendienst', r: 'Direkt' },
            { l: 'Verkauf über Grosshändler', r: 'Indirekt' }
          ],
          options: ['Direkt','Indirekt'],
          tips: ['Direkt = Hersteller verkauft selbst.','Indirekt = über Zwischenhändler.','Online-Shop des Herstellers = direkt.'],
          reveal: ['Direkt: Firmeneigener Onlineshop, Werksverkauf, Eigener Aussendienst.','Indirekt: Migros, Fachhandel, Grosshändler.']
        },
        // Ex 16 — Lückentext: Strategische Distribution
        {
          id: 16, type: 'fill',
          q: 'Lückentext: Strategische Distribution',
          instruction: 'Ergänzen Sie die Lücken zur strategischen Distribution.',
          template: 'Der wichtigste strategische Entscheid ist die Bestimmung des {0}. Zur Wahl stehen: {1}, Vertrieb über den {2} oder eine {3} davon (Multichannel).',
          blanks: [['Distributionswegs','Vertriebswegs'],['Direktvertrieb'],['Handel'],['Kombination']],
          tips: ['Es gibt drei Optionen für den Distributionsweg.','Die Kombination heisst auch Multichannel oder duale Distribution.'],
          reveal: ['Der wichtigste Entscheid = Bestimmung des Distributionswegs.','Optionen: Direktvertrieb, Handel (indirekt), Kombination (Multichannel).']
        },
        // Ex 17 — MC: Strategische Distribution
        {
          id: 17, type: 'mc',
          q: 'MC: Strategische Distribution',
          instruction: 'Welche Aussage zur dualen Distribution ist korrekt?',
          options: ['Duale Distribution nutzt ausschliesslich digitale Kanäle.','Duale Distribution bedeutet Bearbeitung der Nachfragenden sowohl direkt als auch indirekt.','Duale Distribution ist ein veraltetes Konzept.','Duale Distribution bezieht sich nur auf den B2B-Bereich.'],
          answer: 1,
          tips: ['Dual = zweifach.','Es geht um direkte UND indirekte Kanäle.','Der Begriff wird auch als Multichanneling verwendet.'],
          reveal: ['Duale Distribution = Bearbeitung sowohl direkt (eigene Organe) als auch indirekt (über den Handel).','Wird häufig als Multichanneling bezeichnet.']
        }
      ],
      learningData: {
        title: 'Strategische Distribution',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Begriffe der strategischen Distribution benennen und beschreiben.',
              'die Kriterien zur Auswahl von Distributionsweg, Distributionsstufen und Distributionskanälen erläutern und anwenden.'
            ]
          },
          {
            type: 'concept',
            title: '2.1 Definition',
            content: 'Die strategische Distribution umfasst sämtliche Entscheide, Massnahmen und Tätigkeiten, die es braucht, um den Weg der Marktleistung (eines Produkts) vom Produktionsbetrieb zu den Konsumentinnen und Konsumenten festzulegen. Dabei wird auch die Länge des Wegs durch die Anzahl der involvierten Handelsstufen bestimmt. Des Weiteren werden die betroffenen Distributionstechniken (z.B. Ladenverkauf, Onlineshop, ADM etc.), Distributionsorgane und -formen definiert.',
            highlight: 'Strategische Distribution = alle Entscheide zur Festlegung des Wegs der Marktleistung vom Hersteller zum Konsumenten.'
          },
          {
            type: 'concept',
            title: '2.2 Wahl des Distributionswegs',
            content: 'In der strategischen Distribution wird eine der absolut wichtigsten Entscheidungen im Rahmen des Marketingmix umgesetzt. Es betrifft die grundsätzliche Festlegung des Distributionswegs (auch: Absatzweg oder Vertriebsweg). Zur Wahl stehen drei Optionen: Direkte Distribution (Direktvertrieb), Multichannel (duale Distribution) und Indirekte Distribution (über den Handel).',
            highlight: 'Die Wahl des Distributionswegs ist der wichtigste strategische Entscheid: Direkt, Indirekt oder Multichannel.'
          },
          {
            type: 'svg',
            title: 'Direkte vs. indirekte Distribution',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="380" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Direkte vs. indirekte Distribution</text><text x="350" y="75" text-anchor="middle" font-size="14" font-weight="600" fill="#ea580c">Direkte Distribution (0-stufig)</text><rect x="80" y="95" width="150" height="50" rx="12" fill="#ea580c"/><text x="155" y="125" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Hersteller</text><path d="M235,120 L405,120" stroke="#ea580c" stroke-width="3" marker-end="url(#arrDi)"/><text x="320" y="112" text-anchor="middle" font-size="10" fill="#ea580c" font-weight="600">Direktvertrieb</text><rect x="410" y="95" width="150" height="50" rx="12" fill="#ea580c"/><text x="485" y="125" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Konsument</text><text x="350" y="195" text-anchor="middle" font-size="14" font-weight="600" fill="#ea580c">Indirekte Distribution (mehrstufig)</text><rect x="30" y="220" width="120" height="50" rx="12" fill="#ea580c"/><text x="90" y="250" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">Hersteller</text><path d="M155,245 L195,245" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrDi)"/><rect x="200" y="220" width="120" height="50" rx="12" fill="#fb923c"/><text x="260" y="242" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Grosshandel</text><text x="260" y="258" text-anchor="middle" font-size="9" fill="#fff">(1. Stufe)</text><path d="M325,245 L365,245" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrDi)"/><rect x="370" y="220" width="120" height="50" rx="12" fill="#fdba74"/><text x="430" y="242" text-anchor="middle" font-size="11" fill="#7c2d12" font-weight="700">Detailhandel</text><text x="430" y="258" text-anchor="middle" font-size="9" fill="#7c2d12">(2. Stufe)</text><path d="M495,245 L535,245" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrDi)"/><rect x="540" y="220" width="130" height="50" rx="12" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="605" y="250" text-anchor="middle" font-size="12" fill="#7c2d12" font-weight="700">Konsument</text><defs><marker id="arrDi" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ea580c"/></marker></defs><rect x="80" y="310" width="170" height="45" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/><text x="165" y="330" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Direkt</text><text x="165" y="346" text-anchor="middle" font-size="9" fill="#64748b">Kontrolle, Kundennahe</text><rect x="280" y="310" width="170" height="45" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/><text x="365" y="330" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Indirekt</text><text x="365" y="346" text-anchor="middle" font-size="9" fill="#64748b">Reichweite, Risikoverteilung</text><rect x="480" y="310" width="170" height="45" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/><text x="565" y="330" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Multichannel</text><text x="565" y="346" text-anchor="middle" font-size="9" fill="#64748b">Beides kombiniert</text></svg>'
          },
          {
            type: 'table',
            title: 'Vorteile und Nachteile der Distributionswege',
            headers: ['Distributionsweg', 'Vorteile', 'Nachteile'],
            rows: [
              ['Direkte Distribution', 'Qualitätssteigerung Serviceniveau, intensive Kundennähe, durchgehende Kontrolle, Flexibilität, keine Margenabgabe', 'Know-how muss aufgebaut werden, nicht alle Segmente erreichbar, hoher Aufwand, gesamtes Risiko selbst tragen'],
              ['Indirekte Distribution', 'Know-how des Handels (Kernkompetenz), alle Kundensegmente erreichbar, schnelle Marktabdeckung, Risiko-/Kostensplitting', 'Handel gibt Vertrieb vor, Kommunikation durch Handel gefiltert, Prozesse nicht kontrollierbar, Margenabgabe'],
              ['Multichannel', 'Sämtliche Kundensegmente erreichbar, schnelle Marktabdeckung, direkte Feedbacks vom Markt, Markttests möglich', 'Know-how für beide Wege aufwendig, hohe Investitionen, komplexe Koordination, herausfordernde Preispolitik']
            ]
          },
          {
            type: 'concept',
            title: '2.3 Bestimmung der Absatz- und Handelskanäle',
            content: 'Fällt die Entscheidung für eine indirekte Distribution, so ist festzulegen, über welche Zwischenhandelsstufen und Absatzkanäle der Vertrieb zu erfolgen hat. Entscheidend dabei ist, dass das Eigentum im juristischen Sinne beim Übergang in die nächste Stufe wechselt. Als Absatzkanäle bezeichnet man z.B. Grossverteiler, Warenhäuser, Discounter, Fachhandel etc. Als Handelskanäle definiert sind die in den Absatzkanälen enthaltenen, konkreten, von uns bearbeitbaren Kanäle des Detailhandels (z.B. Migros, Coop, Denner).',
            highlight: 'Absatzkanäle = z.B. Grossverteiler, Warenhäuser, Discounter. Handelskanäle = die konkreten Detailhändler darin (Migros, Coop, Denner).'
          },
          {
            type: 'methodenbox',
            title: 'Methodenbox: Entscheidungsmatrix strategische Distribution',
            content: 'Die Entscheidungsmatrix wird eingesetzt, wenn eine grundsätzliche Entscheidung zwischen zwei gegensätzlichen Möglichkeiten getroffen werden muss (z.B. direkt vs. indirekt). Das Ergebnis zeigt nachvollziehbar auf, wie der Entscheid zustande gekommen ist. Es müssen wichtige, relevante und auch polarisierende Kriterien gesetzt werden, die konkret auf die Situation ausgerichtet sind.',
            items: [
              'Wann einsetzen? Bei einer grundsätzlichen Entscheidung zwischen zwei Möglichkeiten.',
              'Was erhalten Sie? Ein nachvollziehbares Ergebnis mit Begründung.',
              'Mögliche Kriterien: Erreichbarkeit der Zielgruppe, Aufbau der Logistikinfrastruktur, Zeitbedarf Marktdurchdringung, Feedback aus dem Markt, Akzeptanz Hochpreis, Image/Glaubwürdigkeit.'
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Wahl des Distributionswegs ist der wichtigste strategische Entscheid in der Distribution.',
              'Drei Optionen: Direktvertrieb, indirekter Vertrieb (über den Handel), Multichannel (Kombination).',
              'Duale Distribution (Multichannel) = Bearbeitung der Nachfragenden sowohl direkt als auch indirekt.',
              'Absatzkanäle = Grossverteiler, Discounter, Warenhäuser etc. Handelskanäle = konkrete Detailhändler.',
              'Die Entscheidungsmatrix hilft bei der rationalen und nachvollziehbaren Wahl des Vertriebswegs.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Strategische Distribution', def: 'Alle Entscheide zur Festlegung des Wegs der Marktleistung vom Hersteller zum Konsumenten.'},
              {term: 'Direktvertrieb', def: 'Absatzweg ohne Einschaltung des Handels, direkt an die Konsumenten.'},
              {term: 'Indirekte Distribution', def: 'Absatzweg über den Handel (Eigenhändler), Distributionsaktivitäten durch herstellerfremde Organe.'},
              {term: 'Multichannel / Duale Distribution', def: 'Gleichzeitige Nutzung von direktem und indirektem Vertrieb.'},
              {term: 'Absatzkanal', def: 'Übergeordnete Kategorie im Handel (z.B. Grossverteiler, Warenhäuser, Discounter).'},
              {term: 'Handelskanal', def: 'Konkrete, bearbeitbare Kanäle innerhalb eines Absatzkanals (z.B. Migros, Coop, Denner).'},
              {term: 'Entscheidungsmatrix', def: 'Methode zur rationalen Entscheidungsfindung mit gewichteten Kriterien.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Wahl des Vertriebswegs</strong> ist eine der folgenschwersten Entscheidungen für ein Unternehmen. Sie ist eine strategische Entscheidung, daher langfristiger Natur und hat starke finanzielle Folgen.',
              'Festgelegt wird der grundsätzliche <strong>Distributionsweg</strong> (direkt, indirekt oder beides).',
              'Wird beim Entscheid der <strong>indirekte Vertrieb</strong> gewählt, so sind entsprechend die Absatzstufen, Absatz- und Handelskanäle zu bestimmen.',
              'Aus diesen Entscheidungen ergeben sich dann auch die <strong>Organe und Techniken</strong>, die für die Bearbeitung einzusetzen sind.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 3: Das Distributionskonzept
    // ============================================================
    {
      id: 'ch3', num: 'Kapitel 3', title: 'Das Distributionskonzept',
      exercises: [
        // Ex 18 — Sechs Schritte des Distributionskonzepts (Rep 10, S.61)
        {
          id: 18, type: 'match',
          q: 'Sechs Schritte des Distributionskonzepts',
          instruction: 'Ordnen Sie die sechs Schritte des Distributionskonzepts den Beschreibungen zu.',
          pairs: [{l:'1. Analyse',r:'Ausgangslage mit Interpretation (Fazit) erstellen'},{l:'2. Distributionsziele',r:'Quantitative und qualitative Soll-Zustände aus Vorgaben ableiten'},{l:'3. Strategien',r:'Grundsätzliche Ausrichtung der Distribution auf den Markt'},{l:'4. Massnahmen',r:'Tätigkeiten zur Zielerreichung bestimmen'},{l:'5. Budget',r:'Potenzielle Kosten aller Aktivitäten errechnen'},{l:'6. Kontrolle',r:'Zielerreichung (Punkte 2 und 3) kontrollieren'}],
          options: ['Ausgangslage mit Interpretation (Fazit) erstellen','Quantitative und qualitative Soll-Zustände aus Vorgaben ableiten','Grundsätzliche Ausrichtung der Distribution auf den Markt','Tätigkeiten zur Zielerreichung bestimmen','Potenzielle Kosten aller Aktivitäten errechnen','Zielerreichung (Punkte 2 und 3) kontrollieren'],
          tips: ['Das Distributionskonzept folgt dem allgemeinen Konzeptraster.','Es beginnt immer mit der Analyse.','Die Kontrolle steht am Ende.'],
          reveal: ['1. Analyse: Ausgangslage mit Fazit.','2. Distributionsziele: Soll-Zustände ableiten.','3. Strategien: Ausrichtung auf den Markt.','4. Massnahmen: Tätigkeiten bestimmen.','5. Budget: Kosten errechnen.','6. Kontrolle: Zielerreichung kontrollieren.']
        },
        // Ex 19 — Distributionsorgane und -techniken (Rep 11, S.61)
        {
          id: 19, type: 'match',
          q: 'Distributionsorgane und -techniken',
          instruction: 'Ordnen Sie die Beispiele den Kategorien Distributionsorgan oder Distributionstechnik zu.',
          pairs: [{l:'Aussendienstmitarbeitende (ADM)',r:'Distributionsorgan'},{l:'Besuche bei der Kundschaft',r:'Distributionstechnik'},{l:'Verkaufsmitarbeitende im eigenen Shop (VKM)',r:'Distributionsorgan'},{l:'Ladenverkauf',r:'Distributionstechnik'},{l:'Administrative Mitarbeitende IT (IDM)',r:'Distributionsorgan'},{l:'Onlineshop',r:'Distributionstechnik'}],
          options: ['Distributionsorgan','Distributionstechnik'],
          tips: ['Organe sind Personen oder Abteilungen.','Techniken sind die Art und Weise des Verkaufs.','ADM, VKM und IDM sind Organe.'],
          reveal: ['Distributionsorgane: ADM, VKM, IDM (= Personen/Abteilungen).','Distributionstechniken: Besuche bei Kundschaft, Ladenverkauf, Onlineshop (= Verkaufsarten).']
        },
        // Ex 20 — Distributionsgrad berechnen (Rep 12, S.61)
        {
          id: 20, type: 'calc',
          q: 'Distributionsgrad berechnen',
          instruction: 'Berechnen Sie die numerische und gewichtete Distribution: Kanal Coop (Schweiz), VS insgesamt: 900, Umsatz mit Leim: CHF 12 Mio., Produkt "Cementit", Umsatz dieser VS mit Leim: CHF 6 Mio., "Cementit" führen: 360 VS, Umsatz "Cementit" in der Schweiz: CHF 3 Mio.',
          fields: [
            {label:'Numerische Distribution (360/900 x 100)', answer:40, tolerance:1},
            {label:'Gewichtete Distribution (6/12 x 100)', answer:50, tolerance:1}
          ],
          tips: ['ND = Anzahl VS mit Produkt / Anzahl VS insgesamt x 100.','GD = Umsatz der VS mit Produkt in der Warengruppe / Gesamtumsatz Warengruppe x 100.','ND misst die Präsenz, GD die Umsatzbedeutung.'],
          reveal: ['Numerische Distribution: 360 / 900 x 100 = 40% (ND 40).','Gewichtete Distribution: 6 Mio. / 12 Mio. x 100 = 50% (GD 50).','Die GD ist höher als die ND, d.h. das Produkt ist in umsatzstarken Verkaufsstellen gelistet.']
        },
        // Ex 21 — Selektive Distribution: Pro und Kontra (Rep 13, S.61)
        {
          id: 21, type: 'text',
          q: 'Selektive Distribution: Pro und Kontra',
          instruction: 'Erarbeiten Sie eine Pro-Kontra-Liste für eine selektive Distribution gegenüber einer exklusiven Distribution.',
          questions: [{q:'Pro und Kontra selektive Distribution:', keywords:['zielgruppe','grössere','umsatz','marktdurchdringung','fachhandel','logistik','komplexer','preiskonflikte','POS','image'], minKeywords:4}],
          tips: ['Pro: grössere Zielgruppe, mehr Umsatz, schnellere Marktdurchdringung.','Kontra: Fachhandel reagiert negativ, Logistikaufbau komplexer.','Denken Sie auch an Preiskonflikte am POS.'],
          reveal: ['Pro selektive Distribution: Grössere Zielgruppe erreichen, mehr Umsatz erwirtschaften, schnellere Marktdurchdringung.','Kontra: Fachhandel reagiert negativ, Logistikaufbau komplexer, Preiskonflikte am POS, Imageabwertung (Verlust Profilierung), Irritation der Zielgruppen.','Entscheid: exklusive Distribution über den Fachhandel (Nachteile überwiegen).']
        },
        // Ex 22 — Distributionsfeld und -differenzierung
        {
          id: 22, type: 'mc',
          q: 'Distributionsfeld und -differenzierung',
          instruction: 'Was beschreibt die Distributionsdifferenzierung?',
          options: ['Die Wahl zwischen verschiedenen Transportmitteln','Die unterschiedliche Gestaltung der Distribution für verschiedene Marktsegmente','Die Berechnung des Distributionsgrads','Die Auswahl der Distributionsorgane'],
          answer: 1,
          tips: ['Differenzierung = Unterscheidung/Anpassung.','Es geht um verschiedene Marktsegmente.','Nicht alle Kunden werden gleich bedient.'],
          reveal: ['Distributionsdifferenzierung = Die unterschiedliche Gestaltung der Distribution je nach Marktsegment.','Bei der Distributionsdifferenzierung ist nur eine einzige Entscheidung möglich (exklusiv, selektiv oder intensiv).']
        },
        // Ex 23 — RF: Distributionskonzept
        {
          id: 23, type: 'tf',
          q: 'RF: Distributionskonzept',
          statements: [
            {s:'Das Distributionskonzept umfasst sechs Schritte: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle.', c:true, feedback:'Dies entspricht dem allgemeinen Konzeptraster.'},
            {s:'Die numerische Distribution misst die Umsatzbedeutung der Verkaufsstellen.', c:false, feedback:'Die numerische Distribution misst die Präsenz (Anteil VS). Die gewichtete Distribution misst die Umsatzbedeutung.'},
            {s:'Ein hoher Distributionsgrad bedeutet, dass das Produkt in vielen Verkaufsstellen erhältlich ist.', c:true, feedback:'Je höher der numerische Distributionsgrad, desto breiter die Verfügbarkeit.'},
            {s:'Die Distributionsrationalisierung betrifft nur den Transport.', c:false, feedback:'Sie umfasst: Auftragswesen, Transportverpackung, Transportpolitik, Lagerpolitik und Entsorgungspolitik.'}
          ],
          tips: ['ND = Präsenz, GD = Umsatzbedeutung.','Rationalisierung betrifft mehrere Bereiche.','Das Konzept folgt dem 6-Schritte-Raster.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - ND misst Präsenz, GD misst Umsatzbedeutung.','Aussage 3: Richtig.','Aussage 4: Falsch - betrifft mehrere Bereiche.']
        },
        // Ex 24 — Konzeptelemente zuordnen
        {
          id: 24, type: 'match',
          q: 'Konzeptelemente zuordnen',
          instruction: 'Ordnen Sie die Elemente dem richtigen Bereich des Distributionskonzepts zu.',
          pairs: [{l:'Distributionsorgane bestimmen',r:'Wer verkauft?'},{l:'Numerische Distribution festlegen',r:'Wie breit verteilen?'},{l:'Distributionsbindung verhandeln',r:'Vertragliche Bindung'},{l:'Kanalwahl treffen',r:'Welcher Kanal?'},{l:'Distributionsfeld definieren',r:'Wo verkaufen?'}],
          options: ['Wer verkauft?','Wie breit verteilen?','Vertragliche Bindung','Welcher Kanal?','Wo verkaufen?'],
          tips: ['Organe = Personen, die verkaufen.','Distributionsgrad = Breite der Verteilung.','Bindung = vertragliche Vereinbarungen.'],
          reveal: ['Distributionsorgane = Wer verkauft? (ADM, VKM, IDM).','Numerische Distribution = Wie breit verteilen?','Distributionsbindung = Vertragliche Bindung.','Kanalwahl = Welcher Kanal?','Distributionsfeld = Wo verkaufen?']
        },
        // Ex 25 — Lückentext: Distributionsgrad
        {
          id: 25, type: 'fill',
          q: 'Lückentext: Distributionsgrad',
          instruction: 'Ergänzen Sie die Definitionen zum Distributionsgrad.',
          template: 'Die {0} Distribution misst die {1} eines Produkts (Anteil der Verkaufsstellen). Die {2} Distribution misst die {3} (Umsatzanteil der VS).',
          blanks: [['numerische','Numerische'],['Präsenz'],['gewichtete','Gewichtete'],['Umsatzbedeutung']],
          tips: ['Numerisch = Anzahl (Präsenz).','Gewichtet = nach Umsatz bewertet.','ND kann tiefer sein als GD, wenn das Produkt in umsatzstarken VS ist.'],
          reveal: ['Numerische Distribution = Präsenz (Anteil VS mit Produkt an Gesamt-VS).','Gewichtete Distribution = Umsatzbedeutung (Umsatzanteil der VS an Gesamtumsatz der Warengruppe).']
        },
        // Ex 26 — POS-Massnahmen
        {
          id: 26, type: 'text',
          q: 'POS-Massnahmen',
          instruction: 'Nennen Sie drei typische Point-of-Sale-Massnahmen und erklären Sie deren Zweck.',
          questions: [{q:'POS-Massnahmen:', keywords:['display','platzierung','promotion','degustation','zweitplatzierung','regalplatzierung','preisaktion','verkostung','werbematerial'], minKeywords:3}],
          tips: ['POS = Point of Sale = Ort des Verkaufs.','Denken Sie an Massnahmen im Ladengeschäft.','Displays, Promotionen und Platzierungen sind typisch.'],
          reveal: ['Typische POS-Massnahmen: 1. Displays und Zweitplatzierungen (Aufmerksamkeit erhöhen), 2. Degustationen/Verkostungen (Produkt erlebbar machen), 3. Preisaktionen und Promotionen (Kaufanreiz schaffen).']
        }
      ],
      learningData: {
        title: 'Das Distributionskonzept',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Aufbau eines Distributionskonzepts beschreiben.',
              'die Konzeptschritte benennen und erklären.',
              'Distributionskonzepte von vorhergehenden Analysen ableiten und Lösungen entwickeln.',
              'die erarbeiteten Lösungen präsentieren.',
              'die Distributionskennziffern erläutern und berechnen.'
            ]
          },
          {
            type: 'concept',
            title: '3.1 Definition',
            content: 'Ein Distributionskonzept umfasst sämtliche Entscheide und Massnahmen, um die angestrebten Zielvorgaben zu erreichen. Damit die strategischen Entscheidungen des Marketings in der Distribution gezielt umgesetzt werden können, braucht es einen konkreten Vorgehensplan.',
            highlight: 'Distributionskonzept = konkreter Vorgehensplan mit allen Entscheiden und Massnahmen zur Umsetzung der Distributionsstrategie.'
          },
          {
            type: 'table',
            title: 'Die sechs Konzeptschritte',
            headers: ['Schritt', 'Konzeptschritt', 'Inhalt'],
            rows: [
              ['1.', 'Situationsanalyse', 'Analyse der Ausgangslage mit Interpretation (Fazit) erstellen, dabei Vorgaben / Rahmenbedingungen berücksichtigen'],
              ['2.', 'Ziele', 'Quantitative und qualitative Soll-Zustände aus Vorgaben (z.B. Marketingkonzept) ableiten'],
              ['3.', 'Strategien', 'Festlegung der grundsätzlichen Ausrichtung der Distribution auf den Markt, beginnend mit dem Entscheid «direkt oder indirekt»'],
              ['4.', 'Massnahmen', 'Einzelne Aktivitäten / Tätigkeiten zur Zielerreichung bestimmen (ausformuliert mit Termins, Kosten und Verantwortung)'],
              ['5.', 'Budget', 'Potenzielle Kosten aller Aktivitäten errechnen / übernehmen'],
              ['6.', 'Kontrolle', 'Zielerreichung (Punkte 2 und 3) kontrollieren']
            ]
          },
          {
            type: 'concept',
            title: '3.3 Konzeptelemente: Strategieansatz (12 Schritte)',
            content: 'Das Hauptelement eines Distributionskonzepts ist der Strategieansatz. Die Entscheidungen bilden die Basis für den Aufbau und die Struktur der Distribution. Die 12 Strategieschritte sind: 1. Distributionsart/-weg (direkt/indirekt), 2. Distributionsorgane (intern/extern), 3. Distributionstechniken (AD/ID/Internet), 4. Distributionsfeld (geografisch), 5. Distributionsdezentralisierung (Anzahl Stufen), 6. Kanalwahl (Absatzkanal/Handelskanäle), 7. Distributionsdifferenzierung (int./sel./exkl.), 8. Distributionsziele (operativ), 9. Distributionsrationalisierung (Logistik), 10. Distributionsbindung, 11. POS-Massnahmen (Einführung), 12. Distributionskonkurrenzierung.',
            highlight: 'Der Strategieansatz umfasst 12 Schritte, die alle strategischen Entscheidungen der Distribution abdecken.'
          },
          {
            type: 'concept',
            title: '3.4 Distributionsorgane',
            content: 'Als Organe werden Ausführende bezeichnet. Ein Unternehmen legt fest, ob die Marktleistung über interne oder externe Organe vertrieben werden soll. In der Praxis werden auch Kombinationen eingesetzt. Interne Organe: Aussendienstmitarbeitende (ADM), Verkaufsmitarbeitende (VKM), Innendienst (IDM). Externe Organe: Agenten (Handelsreisende), Makler, Kommissionäre. Diese Vermittler sind juristisch selbstständig, aber nie im Eigentum der Ware.',
            highlight: 'Distributionsorgane: Intern (ADM, VKM, IDM) oder extern (Agent, Makler, Kommissionär).'
          },
          {
            type: 'concept',
            title: '3.9 Distributionsgrad (ND/GD)',
            content: 'Die numerische Distribution (ND) misst die Präsenz eines Produkts: ND = Anzahl VS mit Produkt / Anzahl VS insgesamt x 100. Die gewichtete Distribution (GD) misst die Umsatzbedeutung: GD = Umsatz der VS, die das Produkt führen / Gesamtumsatz aller VS in der Produktgruppe x 100. Ist die GD höher als die ND, ist das Produkt in umsatzstarken VS gelistet.',
            highlight: 'ND = Präsenz (Anteil Verkaufsstellen). GD = Umsatzbedeutung (Umsatzanteil). GD > ND = Produkt in umsatzstarken VS.'
          },
          {
            type: 'concept',
            title: '3.12-3.14 Bindung, POS und Konkurrenzierung',
            content: 'Distributionsbindung: Lieferanten versuchen Kunden längerfristig zu binden durch Kundenzufriedenheit, Kundenbindungsprogramme, Franchising, Vorfinanzierung oder Konsignationsware. POS-Massnahmen bezeichnen Massnahmen am Verkaufspunkt (Regalplatz, Aktionspunkt): Displays, Zweitplatzierungen, Degustationen, Verkaufsförderungsaktionen. Distributionskonkurrenzierung: Beim Vertrieb über den Handel stösst man naturgemäss auf Konkurrenzprodukte.',
            highlight: 'Bindung durch Kundenzufriedenheit, POS-Massnahmen am Verkaufspunkt, Konkurrenzierung im Handel beachten.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Das Distributionskonzept folgt dem 6-Schritte-Konzeptraster: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle.',
              'Der Strategieansatz mit 12 Schritten ist das Herzstück des Distributionskonzepts.',
              'Distributionsorgane: intern (ADM, VKM, IDM) oder extern (Agent, Makler, Kommissionär).',
              'Numerische Distribution (ND) = Präsenz, Gewichtete Distribution (GD) = Umsatzbedeutung.',
              'POS-Massnahmen: Displays, Zweitplatzierungen, Degustationen am Verkaufspunkt.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Distributionskonzept', def: 'Konkreter Vorgehensplan mit allen Entscheiden und Massnahmen zur Umsetzung der Distributionsstrategie (6 Schritte).'},
              {term: 'Distributionsorgane', def: 'Ausführende der Distribution: intern (ADM, VKM, IDM) oder extern (Agent, Makler, Kommissionär).'},
              {term: 'Distributionstechniken', def: 'Vorgehensweisen für die Marktbearbeitung (Kundenbesuch, Ladenverkauf, Onlineshop etc.).'},
              {term: 'Distributionsfeld', def: 'Das zu bearbeitende Marktgebiet (geografisch), nicht immer der Gesamtmarkt.'},
              {term: 'Numerische Distribution (ND)', def: 'Anteil der Verkaufsstellen mit Produkt an der Gesamtzahl der Verkaufsstellen (Präsenz).'},
              {term: 'Gewichtete Distribution (GD)', def: 'Umsatzanteil der VS mit Produkt am Gesamtumsatz der Produktgruppe (Umsatzbedeutung).'},
              {term: 'POS-Massnahmen', def: 'Massnahmen am Verkaufspunkt: Displays, Zweitplatzierungen, Degustationen.'},
              {term: 'Distributionsbindung', def: 'Massnahmen zur längerfristigen Kundenbindung (Franchising, Kundenkarten, Warenkredite).'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Um die strategischen Entscheidungen des Marketings in der Distribution gezielt umsetzen zu können, braucht es ein <strong>Distributionskonzept</strong>.',
              'Für den Aufbau eines Konzepts hat sich ein allgemeingültiges <strong>Konzeptraster in sechs Schritten</strong> bewährt: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle.',
              'Das Hauptelement ist der <strong>Strategieansatz</strong> mit 12 Schritten: Distributionsweg, -organe, -techniken, -feld, Dezentralisierung, Kanalwahl, Differenzierung, Ziele, Rationalisierung, Bindung, POS-Massnahmen, Konkurrenzierung.',
              'Die <strong>Distributionskennzahlen</strong> (ND und GD) sind unabdingbar für die operative Zielkontrolle.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 4: Direkte und indirekte Distribution
    // ============================================================
    {
      id: 'ch4', num: 'Kapitel 4', title: 'Direkte und indirekte Distribution',
      exercises: [
        // Ex 27
        {
          id: 27, type: 'text',
          q: 'Interne und externe Organe',
          instruction: 'Welche beiden Arten von Organen sind in der direkten Distribution zu unterscheiden? Machen Sie dazu je zwei Beispiele.',
          questions: [{q:'Organe in der direkten Distribution:', keywords:['intern','extern','aussendienst','verkaufsladen','agenten','makler','eigene','mitarbeitende','fremd'], minKeywords:4}],
          tips: ['Es gibt interne und externe Organe.','Interne = eigene Mitarbeitende.','Externe = Agenten oder Makler.'],
          reveal: ['Interne Organe: Eigene Mitarbeitende im Aussendienst sowie der eigene Verkaufsladen.','Externe Organe: Agenten oder Makler.']
        },
        // Ex 28
        {
          id: 28, type: 'text',
          q: 'Ablauf Streckengeschäft (Dropshipping)',
          instruction: 'Beschreiben Sie kurz an einem Beispiel den Ablauf im Streckengeschäft (Dropshipping).',
          questions: [{q:'Ablauf Dropshipping:', keywords:['kunde','bestellt','händler','hersteller','direkt','liefert','versand','lager','kein','eigenes'], minKeywords:3}],
          tips: ['Beim Dropshipping hält der Händler keine eigenen Waren.','Die Ware wird direkt vom Hersteller an den Endkunden geschickt.','Der Händler ist nur Vermittler.'],
          reveal: ['Beim Dropshipping bestellt der Kunde bei einem Händler (z.B. Online-Shop). Der Händler leitet die Bestellung an den Hersteller weiter, der die Ware direkt an den Endkunden liefert. Der Händler hält kein eigenes Lager.','Beispiel: My Sport bietet modische Sportartikel im Internet an. Kunden bestellen bei My Sport, die Artikel werden direkt von den Herstellern an die Kunden geschickt.']
        },
        // Ex 29
        {
          id: 29, type: 'fill',
          q: 'Pop-up-Store Eigenheiten',
          instruction: 'Nennen Sie zwei spezifische Eigenheiten eines Pop-up-Stores.',
          template: 'Ein Pop-up-Store ist jeweils nur {0} an einem bestimmten Ort geöffnet. Neben dem Aspekt Verkauf können {1} im Fokus stehen.',
          blanks: [['kurzzeitig','zeitlich begrenzt','temporär'],['Bekanntheit','Bekanntheit und Imagebildung']],
          tips: ['Pop-up = taucht auf und verschwindet wieder.','Es geht nicht nur um Verkauf.','Auch Branding ist ein Ziel.'],
          reveal: ['1. Nur kurzzeitig an einem bestimmten Ort geöffnet.','2. Neben dem Aspekt Verkauf können Bekanntheit und Imagebildung im Fokus stehen.']
        },
        // Ex 30
        {
          id: 30, type: 'text',
          q: 'Minicase: Warenhauskanal',
          instruction: 'Tapanah (Schweiz) AG möchte neben dem Fachhandel auch in einen Warenhauskanal eintreten. Zur Auswahl: Manor (59 Filialen, CHF 2 Mrd.), Globus (13, CHF 850 Mio.), Coop City (31, CHF 780 Mio.), Loeb (3, CHF 75 Mio.). Welchen Kanal empfehlen Sie und warum?',
          questions: [{q:'Empfehlung mit Begründung:', keywords:['manor','filialen','marktdurchdringung','umsatzbedeutung','signalwirkung','gewichtet','kriterien','sortiment','eignung'], minKeywords:3}],
          tips: ['Bewerten Sie nach gewichteten Kriterien.','Anzahl Filialen = Marktdurchdringung.','Umsatzbedeutung und Signalwirkung beachten.'],
          reveal: ['Empfehlung: Manor - hohe Zahl der Verkaufsstellen (gute Marktdurchdringung), grosse Umsatzbedeutung, Signalwirkung auf andere Kanäle.','Manor hat 59 Filialen und CHF 2 Mrd. Umsatz - deutlich mehr als die Konkurrenz.']
        },
        // Ex 31
        {
          id: 31, type: 'tf',
          q: 'RF: Direkte und indirekte Distribution',
          statements: [
            {s:'Beim Grosshandel kauft der Endkonsument direkt ein.', c:false, feedback:'Der Grosshandel verkauft an den Detailhandel oder gewerbliche Abnehmer, nicht an Endkonsumenten.'},
            {s:'Merchandising umfasst alle Massnahmen zur Warenpräsentation am POS.', c:true, feedback:'Merchandising = Warenpräsentation und -pflege am Point of Sale.'},
            {s:'Franchising ist eine Form der direkten Distribution.', c:false, feedback:'Franchising ist eine Form der indirekten Distribution (über Franchisenehmer).'},
            {s:'Der Detailhandel (Einzelhandel) verkauft direkt an den Endkonsumenten.', c:true, feedback:'Detail = Einzelhandel = Verkauf an Endkonsumenten.'}
          ],
          tips: ['Grosshandel verkauft an Wiederverkäufer.','Merchandising = Warenpräsentation.','Franchising = indirekt, da über Partner.'],
          reveal: ['Aussage 1: Falsch - Grosshandel verkauft an Detailhandel.','Aussage 2: Richtig.','Aussage 3: Falsch - Franchising = indirekt.','Aussage 4: Richtig.']
        },
        // Ex 32
        {
          id: 32, type: 'match',
          q: 'Handelsformen zuordnen',
          instruction: 'Ordnen Sie die Handelsformen der richtigen Kategorie zu.',
          pairs: [{l:'Migros',r:'Grossverteiler'},{l:'Denner',r:'Discounter'},{l:'Digitec.ch',r:'Online-Händler'},{l:'Manor',r:'Warenhaus'},{l:'Landi',r:'Fachmarkt'}],
          options: ['Grossverteiler','Discounter','Online-Händler','Warenhaus','Fachmarkt'],
          tips: ['Migros und Coop sind Grossverteiler.','Denner ist ein Discounter.','Manor ist ein Warenhaus.'],
          reveal: ['Migros = Grossverteiler, Denner = Discounter, Digitec.ch = Online-Händler, Manor = Warenhaus, Landi = Fachmarkt.']
        },
        // Ex 33
        {
          id: 33, type: 'text',
          q: 'Eintritt in den Handel',
          instruction: 'Nennen Sie drei wichtige Aspekte, die beim Eintritt in den Handel zu beachten sind.',
          questions: [{q:'Aspekte Markteintritt Handel:', keywords:['listung','kondition','sortiment','regalplatz','margin','lieferfähigkeit','verpackung','mindestbestellung','promotion'], minKeywords:3}],
          tips: ['Die Listung ist der erste Schritt.','Konditionen müssen verhandelt werden.','Der Handel erwartet Lieferfähigkeit.'],
          reveal: ['Wichtige Aspekte: 1. Listung (Aufnahme ins Sortiment), 2. Konditionen (Rabatte, Boni, Zahlungsbedingungen), 3. Lieferfähigkeit und Mindestbestellmengen.']
        },
        // Ex 34
        {
          id: 34, type: 'mc',
          q: 'MC: Grosshandel vs. Detailhandel',
          instruction: 'Welche Aussage zum Grosshandel ist korrekt?',
          options: ['Der Grosshandel verkauft ausschliesslich an Endkonsumenten.','Der Grosshandel kauft grosse Mengen ein und verkauft an Detailhändler weiter.','Der Grosshandel ist immer ein Online-Handel.','Der Grosshandel betreibt nur eigene Ladengeschäfte.'],
          answer: 1,
          tips: ['Gross = grosse Mengen.','Grosshandel ≠ Endkonsument.','Grosshandel = Zwischenhändler.'],
          reveal: ['Der Grosshandel kauft Waren in grossen Mengen ein und verkauft sie an Detailhändler oder gewerbliche Abnehmer weiter.']
        },
        // Ex 35
        {
          id: 35, type: 'fill',
          q: 'Lückentext: Handel',
          instruction: 'Ergänzen Sie die Lücken zum Handel in der Distribution.',
          template: 'Der {0} kauft grosse Mengen ein und verkauft an den {1} weiter. Der Detailhandel verkauft direkt an den {2}. {3} ist ein Vertriebssystem, bei dem ein Franchisegeber einem Franchisenehmer das Recht einräumt, sein Geschäftskonzept zu nutzen.',
          blanks: [['Grosshandel'],['Detailhandel','Einzelhandel'],['Endkonsumenten','Konsumenten'],['Franchising']],
          tips: ['Gross = an Wiederverkäufer.','Detail = an Endkonsumenten.','Franchising = Geschäftskonzept-Lizenz.'],
          reveal: ['Grosshandel -> Detailhandel -> Endkonsument.','Franchising = Lizenzierung des Geschäftskonzepts.']
        }
      ],
      learningData: {
        title: 'Direkte und indirekte Distribution',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Distributionsweg darstellen, erklären und bewerten.',
              'die passenden Formen im Gross- und Detailhandel bestimmen.',
              'die Einflussfaktoren für die Sortimentsaufnahme gewichten.',
              'den Eintritt in den Handel methodisch vorbereiten.'
            ]
          },
          {
            type: 'concept',
            title: '4.1 Direktvertrieb (direkte Distribution)',
            content: 'Die grundsätzliche Entscheidung zwischen direkter und indirekter Distribution lässt sich aus dem Marketingkonzept ableiten. Für den direkten Weg muss ein Unternehmen die dafür nötigen Organe und Techniken bestimmen und anpassen. Einflussfaktoren sind: Ziele und Strategie des Anbieters, wirtschaftliche Faktoren (Ertragsziele, Kosten), Konkurrenz- und Marktsituation, Produkt/Sortiment, Distribution/Logistik, Kundschaft (Segmente, Kanäle). Der Direktvertrieb ist vor allem für Investitionsgüter und beratungsintensive Dienstleistungen geeignet.',
            highlight: 'Direktvertrieb eignet sich besonders für Investitionsgüter und beratungsintensive Dienstleistungen.'
          },
          {
            type: 'svg',
            title: 'Distributionskanal-Modelle (Stufenmodell)',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Distributionskanal-Modelle</text><text x="55" y="75" font-size="13" fill="#ea580c" font-weight="700">0-stufig</text><text x="55" y="90" font-size="10" fill="#94a3b8">(direkt)</text><rect x="140" y="62" width="110" height="36" rx="8" fill="#ea580c"/><text x="195" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Hersteller</text><path d="M255,80 L450,80" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="455" y="62" width="110" height="36" rx="8" fill="#ea580c"/><text x="510" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Konsument</text><text x="55" y="145" font-size="13" fill="#ea580c" font-weight="700">1-stufig</text><rect x="140" y="128" width="100" height="36" rx="8" fill="#ea580c"/><text x="190" y="151" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Hersteller</text><path d="M245,146 L305,146" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="310" y="128" width="100" height="36" rx="8" fill="#fb923c"/><text x="360" y="151" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Detailhandel</text><path d="M415,146 L450,146" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="455" y="128" width="110" height="36" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/><text x="510" y="151" text-anchor="middle" font-size="11" fill="#7c2d12" font-weight="700">Konsument</text><text x="55" y="215" font-size="13" fill="#ea580c" font-weight="700">2-stufig</text><rect x="120" y="198" width="90" height="36" rx="8" fill="#ea580c"/><text x="165" y="221" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Hersteller</text><path d="M215,216 L245,216" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="250" y="198" width="100" height="36" rx="8" fill="#f97316"/><text x="300" y="221" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Grosshandel</text><path d="M355,216 L385,216" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="390" y="198" width="100" height="36" rx="8" fill="#fb923c"/><text x="440" y="221" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Detailhandel</text><path d="M495,216 L525,216" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="530" y="198" width="100" height="36" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/><text x="580" y="221" text-anchor="middle" font-size="10" fill="#7c2d12" font-weight="700">Konsument</text><text x="55" y="290" font-size="13" fill="#ea580c" font-weight="700">3-stufig</text><rect x="80" y="273" width="80" height="36" rx="8" fill="#ea580c"/><text x="120" y="296" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Hersteller</text><path d="M165,291 L185,291" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="190" y="273" width="90" height="36" rx="8" fill="#c2410c"/><text x="235" y="296" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Importeur</text><path d="M285,291 L305,291" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="310" y="273" width="100" height="36" rx="8" fill="#f97316"/><text x="360" y="296" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Grosshandel</text><path d="M415,291 L435,291" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="440" y="273" width="90" height="36" rx="8" fill="#fb923c"/><text x="485" y="296" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">Detailhandel</text><path d="M535,291 L555,291" stroke="#ea580c" stroke-width="2" marker-end="url(#arrS)"/><rect x="560" y="273" width="90" height="36" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/><text x="605" y="296" text-anchor="middle" font-size="10" fill="#7c2d12" font-weight="700">Konsument</text><defs><marker id="arrS" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ea580c"/></marker></defs><text x="350" y="355" text-anchor="middle" font-size="12" fill="#64748b">Jede Stufe = ein Eigentumswechsel an eine Drittfirma</text><rect x="180" y="375" width="340" height="28" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/><text x="350" y="394" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Mehr Stufen = mehr Reichweite, aber weniger Kontrolle &amp; Marge</text></svg>'
          },
          {
            type: 'concept',
            title: '4.2 Handel (funktionelle und institutionelle Sicht)',
            content: 'Der Handel kann aus zwei Perspektiven betrachtet werden: Funktionell beschreibt er die Tätigkeiten des Handels (Überbrückung räumlicher, zeitlicher und quantitativer Spannungen). Institutionell beschreibt er die Organisationsformen des Handels. Die Hauptfunktionen des Handels umfassen: Warenbündelung (Sortimentsbildung), Raumüberbrückung (Transport), Zeitüberbrückung (Lagerhaltung), Mengenüberbrückung. Zusatzfunktionen: Beratung, Finanzierung, Werbung.',
            highlight: 'Handel funktionell = Tätigkeiten (Raum-, Zeit-, Mengenüberbrückung). Institutionell = Organisationsformen (Gross-/Detailhandel).'
          },
          {
            type: 'concept',
            title: '4.4 Grosshandel',
            content: 'Der Grosshandel kauft Waren in grossen Mengen ein und verkauft sie an Detailhändler oder gewerbliche Abnehmer weiter. Es gibt verschiedene Formen: Sortimentsgrosshandel (breites Sortiment in seiner Warengruppe), Spezialgrosshandel (tiefes Sortiment), sowie spezielle Formen wie Streckengeschäft (Dropshipping) und Rack Jobber. Beim Dropshipping bestellt der Kunde beim Händler, die Ware wird direkt vom Hersteller an den Endkunden geschickt.',
            highlight: 'Grosshandel: Sortimentsgrosshandel (breites Sortiment) vs. Spezialgrosshandel (tiefes Sortiment). Spezialformen: Dropshipping, Rack Jobber.'
          },
          {
            type: 'table',
            title: 'Arten von Detailhandelsgeschäften',
            headers: ['Typ', 'Beschreibung'],
            rows: [
              ['Laden / Gemischtwarenladen', 'Handelsbetriebe (bis 500 m²) mit breitem Sortiment für den täglichen Bedarf (\"Tante-Emma-Laden\")'],
              ['Fachgeschäfte', 'Artikel einer bestimmten Branche, mittlere Sortimentstiefe und -breite, persönliche Beratung'],
              ['Boutique', 'Art des Spezialhandels, sehr konzentriertes, eher exklusives Sortiment (Mode, Schmuck)'],
              ['Discounter', 'Kleinere Handelsbetriebe (bis 1\'000 m²) mit eingeschränktem Sortiment, ausgeprägte Tiefpreispolitik'],
              ['Grossverteiler', 'Namhafteste Anbieter im Detailhandel (Migros, Coop), zentral geführte Organisationen mit vielen Filialen'],
              ['Warenhaus', 'Grossflächige Betriebe mit breitem und tiefem Sortiment über mehrere Branchen']
            ]
          },
          {
            type: 'concept',
            title: '4.6 Eintritt in den Handel',
            content: 'Der Eintritt in den Handel verlangt eine spezielle Vorgehensweise zur Bestimmung der gewünschten Kanäle als Distributionspartner (Kanalwahl). Es müssen Listungsgebühren, Konditionen (Rabatte, Boni, Zahlungsbedingungen), Lieferfähigkeit und Mindestbestellmengen verhandelt werden. Die zunehmende Konzentration im Handel und das Klumpenrisiko müssen mitberücksichtigt werden.',
            highlight: 'Eintritt in den Handel: Listung, Konditionen, Lieferfähigkeit, Klumpenrisiko beachten.'
          },
          {
            type: 'methodenbox',
            title: 'Methodenbox: Gewichtete Nutzwertanalyse Kanalwahl',
            content: 'Diese Methode wird eingesetzt, wenn aus mehreren Möglichkeiten eine Wahl getroffen werden muss. Dabei sind jedoch nicht alle Kriterien gleich wichtig. Das Ergebnis zeigt nachvollziehbar auf, wie der Entscheid zustande gekommen ist. Es müssen sowohl qualitative wie auch quantitative Kriterien mit einer gewissen Bedeutung benutzt werden. Die Kriterien müssen differenzieren, d.h. nicht in jedem Kanal gleich sein.',
            items: [
              'Wann einsetzen? Wenn aus mehreren Möglichkeiten eine Wahl getroffen werden muss.',
              'Was erhalten Sie? Ein nachvollziehbares, gewichtetes Ergebnis.',
              'Was beachten? Qualitative und quantitative Kriterien, die zwischen den Kanälen differenzieren.'
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Direktvertrieb eignet sich besonders für Investitionsgüter und beratungsintensive Dienstleistungen.',
              'Handel hat Haupt- (Sortimentsbildung, Transport, Lagerhaltung) und Zusatzfunktionen (Beratung, Finanzierung).',
              'Grosshandel verkauft an Detailhandel, Detailhandel verkauft an Endkonsumenten.',
              'Arten von Detailhandelsgeschäften: Laden, Fachgeschäft, Boutique, Discounter, Grossverteiler, Warenhaus.',
              'Beim Eintritt in den Handel sind Listungsgebühren, Konditionen und Klumpenrisiko zu beachten.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Direktvertrieb', def: 'Vertrieb ohne Einschaltung des Handels, direkt an den Endkunden (geeignet für IG und DL).'},
              {term: 'Grosshandel', def: 'Kauft Waren in grossen Mengen und verkauft an Detailhändler oder gewerbliche Abnehmer weiter.'},
              {term: 'Detailhandel', def: 'Verkauf direkt an Endkonsumenten (Migros, Coop, Fachgeschäfte etc.).'},
              {term: 'Merchandising', def: 'Alle Massnahmen zur Warenpräsentation und -pflege am Point of Sale.'},
              {term: 'Dropshipping (Streckengeschäft)', def: 'Händler verkauft Ware, die direkt vom Hersteller an den Endkunden geliefert wird.'},
              {term: 'Rack Jobber', def: 'Grosshändler, der im Detailhandel selbst Regale bewirtschaftet und bestückt.'},
              {term: 'Listungsgebühr', def: 'Gebühr für die Aufnahme eines Produkts ins Sortiment des Handels.'},
              {term: 'Franchising', def: 'Vertriebssystem, bei dem ein Franchisegeber dem Franchisenehmer das Recht einräumt, sein Geschäftskonzept zu nutzen.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Beim <strong>Direktvertrieb</strong> müssen gemäss internen und externen Einflussfaktoren die vollständige Organisation der Vertriebsstruktur (Organe und Techniken) festgelegt werden. Er ist vor allem für Investitionsgüter und beratungsintensive Dienstleistungen geeignet.',
              'Beim <strong>indirekten Vertrieb</strong> sind die entsprechenden Handelsstufen zu bestimmen. Er ist für Konsumgüter mit grosser Marktdurchdringung geeignet.',
              'Im indirekten Vertrieb über <strong>Grosshandel</strong> und <strong>Detailhandel</strong> müssen verschiedene Formen mit ihren speziellen Eigenheiten beachtet werden, dazu kommen gesetzliche Einflussfaktoren.',
              'Der <strong>Eintritt in den Handel</strong> verlangt eine spezielle Vorgehensweise zur Bestimmung der gewünschten Kanäle als Distributionspartner (Kanalwahl).'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 5: Physische Distribution
    // ============================================================
    {
      id: 'ch5', num: 'Kapitel 5', title: 'Physische Distribution',
      exercises: [
        // Ex 36
        {
          id: 36, type: 'text',
          q: 'Marketinglogistik / Auftragswesen',
          instruction: 'Wie heisst der Teilbereich der Marketinglogistik, der für die Steuerung der Logistik zuständig ist? Beschreiben Sie diesen Teilbereich und begründen Sie seine zunehmende Wichtigkeit.',
          questions: [{q:'Teilbereich und Begründung:', keywords:['auftragswesen','informationsfluss','digitalisiert','automatisierung','elektronisch','hilfsmittel','kosten','effizienz'], minKeywords:3}],
          tips: ['Es geht um den Informationsfluss.','Dieser Bereich wird zunehmend digitalisiert.','Elektronische Hilfsmittel ermöglichen Kosteneinsparungen.'],
          reveal: ['Der Teilbereich heisst Auftragswesen und beinhaltet den Informationsfluss.','Dieser wird zunehmend digitalisiert. Die neuen elektronischen Hilfsmittel erlauben eine hohe Automatisierung, was zu Kosteneinsparungen führt.']
        },
        // Ex 37
        {
          id: 37, type: 'match',
          q: 'Vorteile und Nachteile Outsourcing',
          instruction: 'Ordnen Sie die Aussagen den Kategorien "Vorteil Outsourcing" oder "Nachteil Outsourcing" zu.',
          pairs: [{l:'Variable Kosten (Vereinbarung pro Einheit)',r:'Vorteil Outsourcing'},{l:'Abhängigkeit von externen Stellen',r:'Nachteil Outsourcing'},{l:'Kleinere Kapitalbindung in der Infrastruktur',r:'Vorteil Outsourcing'},{l:'Wertschöpfungsverlust (Teil der Gewinnmarge geht verloren)',r:'Nachteil Outsourcing'},{l:'Entlastung der Infrastruktur von nebensächlichen Tätigkeiten',r:'Vorteil Outsourcing'},{l:'Kleinere Kontrollmöglichkeit',r:'Nachteil Outsourcing'}],
          options: ['Vorteil Outsourcing','Nachteil Outsourcing'],
          tips: ['Vorteile beziehen sich auf Kostenreduktion und Flexibilität.','Nachteile betreffen Abhängigkeit und Kontrollverlust.','Drei Vorteile und drei Nachteile.'],
          reveal: ['Vorteile: Variable Kosten, kleinere Kapitalbindung, Entlastung von nebensächlichen Tätigkeiten.','Nachteile: Abhängigkeit von Externen, Wertschöpfungsverlust, kleinere Kontrollmöglichkeit.']
        },
        // Ex 38
        {
          id: 38, type: 'text',
          q: 'Vendor Managed Inventory',
          instruction: 'Definieren Sie den Begriff "Vendor Managed Inventory" (VMI).',
          questions: [{q:'Definition VMI:', keywords:['lieferant','lagerhaltung','kunden','verantwortlich','bestandsverwaltung','nachschub','disposition','bestandsführung'], minKeywords:3}],
          tips: ['Vendor = Lieferant.','Managed = verwaltet.','Inventory = Bestand/Lager.'],
          reveal: ['VMI umschreibt ein System, bei dem bereits bekannte Lieferanten für die Lagerhaltung der Kunden verantwortlich sind.','Die Lieferanten übernehmen die Bestandsverwaltung und die Nachschubdisposition beim Kunden.']
        },
        // Ex 39
        {
          id: 39, type: 'text',
          q: 'Minicase: Entsorgung zum Nulltarif',
          instruction: 'Die Geschäftsleitung der HUMAG will eine Entsorgung zum Nulltarif diskutieren. Erstellen Sie ein Best-Case- und Worst-Case-Szenario.',
          questions: [{q:'Best-Case und Worst-Case:', keywords:['best','worst','image','nachhaltig','kosten','kunden','presse','stammkundschaft','umsatz','risiko'], minKeywords:4}],
          tips: ['Best-Case: positive Auswirkungen auf Image und Kundenbindung.','Worst-Case: Kosten steigen, Image leidet.','Denken Sie an die 10-10-10-Methode.'],
          reveal: ['Best-Case: Dienstleistung trifft Nerv der Zeit, Stammkundschaft bestellt weiterhin, neue Nachfrager kommen dazu, Imagegewinn als nachhaltiger Hersteller.','Worst-Case: Dienstleistung unnütz, hohe Kosten, langjährige Stammkundschaft springt ab, Presse bezeichnet HUMAG als Etikettenschwindlerin.']
        },
        // Ex 40
        {
          id: 40, type: 'tf',
          q: 'RF: Physische Distribution',
          statements: [
            {s:'Die physische Distribution umfasst Lager, Transport und Informationsfluss.', c:true, feedback:'Dies sind die drei Hauptbereiche der physischen Distribution.'},
            {s:'Cross Docking bedeutet, dass Ware im Lager lange gelagert wird.', c:false, feedback:'Cross Docking bedeutet Umschlag ohne Lagerung: Ware wird direkt vom Wareneingang zum Warenausgang umgeleitet.'},
            {s:'Just in Time bedeutet Lieferung genau zum benötigten Zeitpunkt.', c:true, feedback:'JIT = Produktion und Lieferung genau dann, wenn die Ware benötigt wird.'},
            {s:'Outsourcing der Transportlogistik hat nur Vorteile.', c:false, feedback:'Es gibt auch Nachteile: Abhängigkeit, Wertschöpfungsverlust, kleinere Kontrollmöglichkeit.'}
          ],
          tips: ['Physische Distribution = Lager + Transport + Informationsfluss.','Cross Docking = ohne Lagerung.','JIT = zum richtigen Zeitpunkt.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Cross Docking = Umschlag ohne Lagerung.','Aussage 3: Richtig.','Aussage 4: Falsch - auch Nachteile.']
        },
        // Ex 41
        {
          id: 41, type: 'match',
          q: 'Logistikbegriffe zuordnen',
          instruction: 'Ordnen Sie die Logistikbegriffe den Beschreibungen zu.',
          pairs: [{l:'Cross Docking',r:'Umschlag ohne Lagerung'},{l:'Just in Time',r:'Lieferung genau zum benötigten Zeitpunkt'},{l:'Vendor Managed Inventory',r:'Lieferant verwaltet Kundenbestand'},{l:'Outsourcing',r:'Auslagerung von Tätigkeiten an Dritte'},{l:'Rückruf',r:'Rücknahme fehlerhafter Produkte'}],
          options: ['Umschlag ohne Lagerung','Lieferung genau zum benötigten Zeitpunkt','Lieferant verwaltet Kundenbestand','Auslagerung von Tätigkeiten an Dritte','Rücknahme fehlerhafter Produkte'],
          tips: ['Cross = quer durch (ohne zu lagern).','JIT = just = genau.','VMI = Vendor = Lieferant managed = verwaltet.'],
          reveal: ['Cross Docking = Umschlag ohne Lagerung.','JIT = Lieferung zum benötigten Zeitpunkt.','VMI = Lieferant verwaltet Kundenbestand.','Outsourcing = Auslagerung an Dritte.','Rückruf = Rücknahme fehlerhafter Produkte.']
        },
        // Ex 42
        {
          id: 42, type: 'fill',
          q: 'Bereiche der physischen Distribution',
          instruction: 'Ergänzen Sie die drei Bereiche der physischen Distribution.',
          template: 'Die drei Bereiche sind: 1. {0} (Lagerung der konsumbereiten Produkte), 2. {1} (Auslieferung an die Kundschaft), 3. {2} (Bestimmung der IT in der Logistik).',
          blanks: [['Lager','Lagerhaltung'],['Transport'],['Informationsfluss']],
          tips: ['Denken Sie an die drei Säulen der physischen Distribution.','Alle drei sind nötig für die Warenverteilung.'],
          reveal: ['1. Lager (Lagerhaltung der Produkte).','2. Transport (Auslieferung an die Kundschaft).','3. Informationsfluss (IT in der Logistik / Auftragswesen).']
        },
        // Ex 43
        {
          id: 43, type: 'mc',
          q: 'Entsorgungslogistik',
          instruction: 'Was gehört NICHT zur Entsorgungslogistik?',
          options: ['Recycling von Verpackungsmaterial','Rücknahme defekter Produkte','Neukundenakquisition','Entsorgung von Restbeständen'],
          answer: 2,
          tips: ['Entsorgungslogistik = Rückwärtslogistik.','Es geht um den Umgang mit Rückläufern und Abfall.','Neukundengewinnung gehört zum Verkauf, nicht zur Logistik.'],
          reveal: ['Neukundenakquisition gehört zum Verkauf, nicht zur Entsorgungslogistik.','Entsorgungslogistik umfasst: Recycling, Rücknahme, Entsorgung von Restbeständen.']
        },
        // Ex 44
        {
          id: 44, type: 'text',
          q: 'Bestimmung der Logistikkosten',
          instruction: 'Welche Kostenarten müssen bei der Bestimmung der Logistikkosten berücksichtigt werden?',
          questions: [{q:'Logistikkostenarten:', keywords:['transport','lager','verpackung','kommissionierung','administration','personal','versicherung','bestandskosten'], minKeywords:4}],
          tips: ['Denken Sie an alle Schritte der physischen Distribution.','Jeder Schritt verursacht Kosten.','Auch indirekte Kosten wie Versicherung zählen.'],
          reveal: ['Logistikkostenarten: Transportkosten, Lagerkosten, Verpackungskosten, Kommissionierungskosten, Administrationskosten, Personalkosten, Versicherungskosten, Bestandskosten.']
        },
        // Ex 45
        {
          id: 45, type: 'mc',
          q: 'Kontrolle in der physischen Distribution',
          instruction: 'Was ist das Hauptziel der Kontrolle in der physischen Distribution?',
          options: ['Maximierung der Lagerbestände','Sicherstellung des Serviceniveaus bei optimalen Kosten','Eliminierung aller Zwischenhändler','Ausschliessliche Nutzung eigener Transportmittel'],
          answer: 1,
          tips: ['Es geht um ein Gleichgewicht.','Serviceniveau und Kosten müssen ausbalanciert werden.','Weder Überbestände noch Lieferengpässe sind erwünscht.'],
          reveal: ['Hauptziel: Sicherstellung des vereinbarten Serviceniveaus bei gleichzeitiger Optimierung der Kosten.']
        }
      ],
      learningData: {
        title: 'Physische Distribution',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Begriffe der physischen Distribution nennen und erläutern.',
              'Konzepte im Rahmen der physischen Distribution entwerfen.',
              'Kriterien zur Wahl von Distributionspartnern nennen und erläutern.',
              'ausgewählte Distributionspartner beurteilen.'
            ]
          },
          {
            type: 'concept',
            title: '5.1 Logistikkonzept und Begriffe',
            content: 'Die physische Distribution wird auch als Marketinglogistik oder Distributionslogistik bezeichnet. Sie umfasst die Festlegung der Infrastruktur in der Logistik. Zentrales Ziel ist die Sicherstellung des Serviceniveaus bei gleichzeitiger Optimierung der Kosten. Dies ergibt einen Zielkonflikt: Das Unternehmen will tiefe Kosten, der Markt verlangt ein hohes Serviceniveau.',
            highlight: 'Physische Distribution = Marketinglogistik. Zielkonflikt: tiefe Kosten vs. hohes Serviceniveau.'
          },
          {
            type: 'concept',
            title: '5.3 Bereich der physischen Distribution',
            content: 'Der Bereich der physischen Distribution umfasst die gesamte Organisation vom Fertiglager bis zur Übergabe an die nächste Stufe. Die Marketinglogistik gliedert sich in: Auftragswesen (Informationsfluss, Steuerung), Fertiglager (Lagerhaltung der konsumbereiten Produkte), Transport (Auslieferung an die Kundschaft), Verpackung und Entsorgung.',
            highlight: 'Bereiche: Auftragswesen, Fertiglager, Transport, Verpackung, Entsorgung.'
          },
          {
            type: 'concept',
            title: '5.4 Serviceniveau und Lager',
            content: 'Das Serviceniveau definiert den Standard der Dienstleistung gegenüber dem Kunden (Lieferbereitschaft, Lieferzeit, Lieferzuverlässigkeit). Die Lagerhaltung verfolgt das Ziel, konsumbereite Produkte in der richtigen Menge, zur richtigen Zeit, am richtigen Ort bereitzustellen. Wichtige Lagerkennzahlen: Lagerumschlag, Lagerdauer, Mindestbestellmenge, Sicherheitsbestand.',
            highlight: 'Serviceniveau = Lieferbereitschaft, -zeit, -zuverlässigkeit. Lager: richtige Menge, Zeit, Ort.'
          },
          {
            type: 'concept',
            title: '5.5-5.7 Transport, Cross Docking, Verpackung',
            content: 'Transport: Die Wahl des Transportmittels hängt ab von Art der Ware, Distanz, Kosten und Zeitanforderungen (Strasse, Schiene, Wasser, Luft). Cross Docking ist ein Umschlagverfahren ohne Einlagerung: Ware wird direkt vom Wareneingang zum Warenausgang umgeleitet. Verpackung/Palettierung: Transportverpackung muss Stapelbarkeit, Transportfähigkeit und gesetzliche Vorschriften erfüllen. Entsorgungslogistik umfasst Recycling, Rücknahme und Entsorgung.',
            highlight: 'Cross Docking = Umschlag ohne Lagerung. Entsorgungslogistik = Rückwärtslogistik (Recycling, Rücknahme).'
          },
          {
            type: 'concept',
            title: '5.8 Spezialthemen: Outsourcing, JIT, Rückverfolgbarkeit',
            content: 'Outsourcing: Auslagerung von Logistiktätigkeiten an Dritte. Vorteile: variable Kosten, kleinere Kapitalbindung, Entlastung. Nachteile: Abhängigkeit, Wertschöpfungsverlust, kleinere Kontrollmöglichkeit. Just in Time (JIT): Lieferung genau zum benötigten Zeitpunkt, minimale Lagerhaltung. Vendor Managed Inventory (VMI): Der Lieferant übernimmt die Bestandsverwaltung beim Kunden. Rückverfolgbarkeit und Rückruf: Fähigkeit, den Weg eines Produkts durch alle Stufen nachzuverfolgen.',
            highlight: 'JIT = Lieferung zum richtigen Zeitpunkt. VMI = Lieferant verwaltet Kundenbestand. Outsourcing = Auslagerung an Dritte.'
          },
          {
            type: 'concept',
            title: '5.9 Logistikkosten und Kontrolle',
            content: 'Die Distributionskosten / Logistikkosten müssen möglichst tief gehalten werden, ohne das Serviceniveau zu senken. Kostenwirksame Einflussfaktoren: Betriebsmittel, Nachfrage/Trend, Mitarbeitende/Löhne, Prozesse/Abläufe, Gesetze/Vorgaben, Finanzen/Zinsen, Werkstoffe/Material. Massnahmen: Erarbeiten von Vorgaben und Richtwerten, Alternativen zum Serviceniveau abklären, permanente Kostenkontrolle.',
            highlight: 'Logistikkosten tief halten ohne Serviceniveau zu senken. Einflussfaktoren laufend kontrollieren.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Physische Distribution = Marketinglogistik (Lager, Transport, Informationsfluss).',
              'Zielkonflikt: tiefe Kosten (Unternehmen) vs. hohes Serviceniveau (Markt).',
              'Cross Docking = Umschlag ohne Lagerung, direkt vom Wareneingang zum Warenausgang.',
              'Just in Time (JIT) = Lieferung genau zum benötigten Zeitpunkt.',
              'Outsourcing: Vorteile (variable Kosten, Entlastung) vs. Nachteile (Abhängigkeit, Kontrollverlust).'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Physische Distribution', def: 'Marketinglogistik: Festlegung der Infrastruktur in der Logistik (Lager, Transport, Informationsfluss).'},
              {term: 'Serviceniveau', def: 'Standard der Dienstleistung: Lieferbereitschaft, Lieferzeit, Lieferzuverlässigkeit.'},
              {term: 'Cross Docking', def: 'Umschlagverfahren ohne Einlagerung: Ware direkt vom Wareneingang zum Warenausgang.'},
              {term: 'Just in Time (JIT)', def: 'Lieferung genau zum benötigten Zeitpunkt, minimale Lagerhaltung.'},
              {term: 'Vendor Managed Inventory (VMI)', def: 'System, bei dem der Lieferant die Lagerhaltung und Bestandsverwaltung beim Kunden übernimmt.'},
              {term: 'Outsourcing', def: 'Auslagerung von Logistiktätigkeiten an externe Dienstleister.'},
              {term: 'Entsorgungslogistik', def: 'Rückwärtslogistik: Recycling, Rücknahme, Entsorgung von Rückläufern und Abfall.'},
              {term: 'Rückverfolgbarkeit', def: 'Fähigkeit, den Weg eines Produkts durch alle Stufen der Wertschöpfungskette nachzuverfolgen.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>physische Distribution (Marketinglogistik)</strong> umfasst Lager, Transport und Informationsfluss (Auftragswesen).',
              'Das Hauptziel ist die <strong>Sicherstellung des Serviceniveaus</strong> bei gleichzeitiger Optimierung der Kosten (Zielkonflikt).',
              'Wichtige Konzepte: <strong>Cross Docking</strong> (Umschlag ohne Lagerung), <strong>JIT</strong> (Lieferung zum richtigen Zeitpunkt), <strong>VMI</strong> (Lieferant verwaltet Kundenbestand).',
              '<strong>Outsourcing</strong> der Logistik bietet Vorteile (variable Kosten, Entlastung), aber auch Nachteile (Abhängigkeit, Wertschöpfungsverlust).',
              'Die <strong>Logistikkosten</strong> sind laufend zu kontrollieren und zu optimieren.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 6: Distribution und Digitalisierung
    // ============================================================
    {
      id: 'ch6', num: 'Kapitel 6', title: 'Distribution und Digitalisierung',
      exercises: [
        // Ex 46
        {
          id: 46, type: 'text',
          q: 'EDI: Definition und Hauptvorteil',
          instruction: 'Was bedeutet EDI und worin besteht der Hauptvorteil bei seinem Einsatz für den Lieferanten?',
          questions: [{q:'EDI Definition und Vorteil:', keywords:['electronic','data','interchange','elektronisch','austausch','daten','automatisierung','administration','kosten','minimum','manuell'], minKeywords:4}],
          tips: ['EDI = Abkürzung für drei englische Wörter.','Der Hauptvorteil liegt in der Automatisierung.','Weniger manuelle Eingriffe = weniger Fehler und Kosten.'],
          reveal: ['EDI = Electronic Data Interchange: elektronischer Austausch genormter, formatierter Daten zwischen ICT-Systemen zweier oder mehrerer Partner mit einem Minimum an manuellen Eingriffen.','Hauptvorteil: Möglichkeit der Automatisierung von Abläufen in der Administration.']
        },
        // Ex 47
        {
          id: 47, type: 'text',
          q: 'ECR: Efficient Consumer Response',
          instruction: 'Was bedeutet ECR und worin besteht der Gewinn für den Handel bei seinem Einsatz?',
          questions: [{q:'ECR Definition und Gewinn:', keywords:['efficient','consumer','response','wertschöpfungskette','logistikdaten','marktforschung','sortimentsoptimierung','POS','nachfrageorientiert'], minKeywords:3}],
          tips: ['ECR = ganzheitliche Betrachtung der Wertschöpfungskette.','Logistikdaten werden für die Marktforschung aufbereitet.','Der Handel kann sein Sortiment am POS optimieren.'],
          reveal: ['ECR = Efficient Consumer Response: ganzheitliche Betrachtung der Wertschöpfungskette.','Logistikdaten werden zum Zwecke der Marktforschung aufbereitet und ausgewertet.','Gewinn für den Handel: Möglichkeit der Optimierung am POS (nachfrageorientierte Sortimentsgestaltung).']
        },
        // Ex 48
        {
          id: 48, type: 'text',
          q: 'RFID: Technologie und Hindernis',
          instruction: 'Was bedeutet RFID und worin besteht das grösste Hindernis, das seinen Einsatz verzögert?',
          questions: [{q:'RFID und Hindernis:', keywords:['chip','transponder','TAG','kleinsender','funk','warendaten','erfassen','übertragen','kosten','investition','infrastruktur','kontaktlos'], minKeywords:3}],
          tips: ['RFID nutzt einen Chip mit integriertem Kleinsender.','Daten werden per Funk übertragen.','Das grösste Hindernis sind die Investitionskosten.'],
          reveal: ['RFID = Radio Frequency Identification: Ein Chip mit integriertem Kleinsender (Transponder, TAG) ermöglicht das Übertragen und Erfassen von Warendaten per Funk.','Grösstes Hindernis: Die nötigen Investitionen in die Infrastruktur, die den kontaktlosen Datenaustausch ermöglichen sollen.']
        },
        // Ex 49
        {
          id: 49, type: 'text',
          q: 'Minicase: Elektronische Hilfsmittel',
          instruction: 'Welche elektronischen Hilfsmittel sind für ein Entsorgungslager sinnvoll und nötig? Erstellen Sie eine Entscheidungsmatrix.',
          questions: [{q:'Hilfsmittel und Bewertung:', keywords:['GTIN','QR-Code','RFID','manuell','rückverfolgung','fehlerquote','kosten','technisch','bedienung','entscheid'], minKeywords:4}],
          tips: ['Vergleichen Sie manuell, GTIN, QR-Code und RFID.','Bewerten Sie nach Rückverfolgbarkeit, Fehlerquote, Kosten etc.','Für ein Entsorgungslager ist Rückverfolgung wichtig.'],
          reveal: ['Empfehlung: GTIN (Strichcode) - Die Technik reicht für den Moment aus und die Kosten sind überschaubar.','Kriterien: Rückverfolgung möglich, Fehlerquote, Kosten (Einführung und Unterhalt), technischer Stand, Bedienungsfähigkeit, Abhängigkeit von Technik.']
        },
        // Ex 50
        {
          id: 50, type: 'tf',
          q: 'RF: Digitalisierung',
          statements: [
            {s:'Affiliate-Marketing erlaubt die Nutzung bestehender Vertriebskanäle anderer Websites.', c:true, feedback:'Affiliate-Marketing = Vertrieb über Partner-Websites gegen Provision.'},
            {s:'GTIN-Strichcodes können mehr Informationen speichern als QR-Codes.', c:false, feedback:'QR-Codes können mehr Informationen speichern als GTIN-Strichcodes.'},
            {s:'ECR dient der nachfrageorientierten Sortimentsoptimierung am POS.', c:true, feedback:'ECR wertet Logistikdaten für die Marktforschung aus und optimiert das Sortiment.'},
            {s:'EDI erfordert einen hohen Anteil an manuellen Eingriffen.', c:false, feedback:'EDI ermöglicht gerade ein Minimum an manuellen Eingriffen durch Automatisierung.'}
          ],
          tips: ['Affiliate = Partnerschaft.','QR-Codes sind leistungsfähiger als Strichcodes.','EDI = minimale manuelle Eingriffe.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - QR > GTIN.','Aussage 3: Richtig.','Aussage 4: Falsch - EDI minimiert manuelle Eingriffe.']
        },
        // Ex 51
        {
          id: 51, type: 'match',
          q: 'Digitale Technologien zuordnen',
          instruction: 'Ordnen Sie die Technologien ihrer Beschreibung zu.',
          pairs: [{l:'GTIN',r:'Strichcode für Warenkennzeichnung'},{l:'QR-Code',r:'Zweidimensionaler Code mit mehr Informationen'},{l:'RFID',r:'Funk-Chip (Transponder) für Warenerfassung'},{l:'EDI',r:'Elektronischer Datenaustausch zwischen Partnern'},{l:'ECR',r:'Ganzheitliche Wertschöpfungskettenbetrachtung'}],
          options: ['Strichcode für Warenkennzeichnung','Zweidimensionaler Code mit mehr Informationen','Funk-Chip (Transponder) für Warenerfassung','Elektronischer Datenaustausch zwischen Partnern','Ganzheitliche Wertschöpfungskettenbetrachtung'],
          tips: ['GTIN = der bekannte Strichcode.','QR = Quick Response, mehr Daten als Strichcode.','RFID = Radio Frequency Identification.'],
          reveal: ['GTIN = Strichcode.','QR-Code = mehr Informationen als Strichcode.','RFID = Funk-Chip (Transponder).','EDI = elektronischer Datenaustausch.','ECR = ganzheitliche Wertschöpfungskette.']
        },
        // Ex 52
        {
          id: 52, type: 'mc',
          q: 'Affiliate-Marketing',
          instruction: 'Was ist Affiliate-Marketing?',
          options: ['Direktverkauf über eigene Filialen','Nutzung bestehender Vertriebskanäle anderer Websites für den eigenen Vertrieb','Ausschliesslich Social-Media-Werbung','Verkauf über Grosshändler'],
          answer: 1,
          tips: ['Affiliate = Partner/Verbundener.','Es geht um die Nutzung fremder Kanäle.','Der Partner erhält eine Provision.'],
          reveal: ['Affiliate-Marketing = Nutzung bestehender Vertriebskanäle anderer Websites für den eigenen Vertrieb. Der Affiliate-Partner erhält eine Provision für vermittelte Verkäufe.']
        },
        // Ex 53
        {
          id: 53, type: 'fill',
          q: 'Lückentext: Digitalisierung',
          instruction: 'Ergänzen Sie die Lücken zur Digitalisierung in der Distribution.',
          template: 'Um die Logistikkosten tief zu halten, werden u.a. {0} eingesetzt. Diese erlauben einen hohen {1}. Die Basis bildet der Einsatz von {2}-Strichcodes im Lager sowie an der Kasse im Detailhandel.',
          blanks: [['elektronische Hilfsmittel'],['Automatisierungsgrad'],['GTIN']],
          tips: ['Elektronische Hilfsmittel reduzieren manuelle Arbeit.','Automatisierung spart Kosten.','GTIN ist der Standard-Strichcode.'],
          reveal: ['Elektronische Hilfsmittel ermöglichen hohen Automatisierungsgrad.','GTIN-Strichcodes sind die Basis im Lager und an der Kasse.']
        }
      ],
      learningData: {
        title: 'Distribution und Digitalisierung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'elektronische Hilfsmittel der Marketinglogistik erklären.',
              'Distributionsprozesse analysieren und optimieren.',
              'Begriffe der physischen Distribution im Zusammenhang mit der Digitalisierung erklären.'
            ]
          },
          {
            type: 'concept',
            title: '6.1 Digitalität in der Distribution',
            content: 'Die Digitalisierung schafft neue Möglichkeiten in der Distribution. Insbesondere im Bereich der Logistik stehen neue technische Hilfsmittel zur Verfügung. Diese erlauben es, die Logistikabläufe viel effizienter zu organisieren und senken gleichzeitig die Fehlerquote. Die digitalen Medien werden auch als komplementäre Vertriebsmethode oder -technik bezeichnet. Internet sollte jedoch nicht als «Kanal» bezeichnet werden, da dieser Begriff zu wenig exakt ist.',
            highlight: 'Digitalisierung ermöglicht effizientere Logistik und tiefere Fehlerquoten. Internet = Vertriebstechnik, nicht Kanal.'
          },
          {
            type: 'concept',
            title: '6.2 Affiliate-Marketing',
            content: 'Affiliate-Marketing ist die Nutzung bestehender Vertriebskanäle anderer Websites für den eigenen Vertrieb. Der Affiliate-Partner (Website-Betreiber) erhält eine Provision für vermittelte Verkäufe. Dies ermöglicht eine kostengünstige Erweiterung der Reichweite ohne eigene Infrastruktur aufbauen zu müssen.',
            highlight: 'Affiliate-Marketing = Vertrieb über Partner-Websites gegen Provision. Kostengünstige Reichweitenerweiterung.'
          },
          {
            type: 'table',
            title: 'Digitale Anwendungsbereiche in der Distribution',
            headers: ['Technologie', 'Beschreibung', 'Einsatzbereich'],
            rows: [
              ['GTIN (EAN)', 'Global Trade Item Number, der klassische Strichcode für Warenkennzeichnung', 'Lager, Kasse im Detailhandel, Warenidentifikation'],
              ['EDI', 'Electronic Data Interchange: elektronischer Austausch genormter Daten mit Minimum an manuellen Eingriffen', 'Automatisierung der Administration zwischen Partnern'],
              ['ECR', 'Efficient Consumer Response: ganzheitliche Betrachtung der Wertschöpfungskette', 'Nachfrageorientierte Sortimentsoptimierung am POS'],
              ['QR-Code', 'Zweidimensionaler Code, kann mehr Informationen speichern als Strichcode', 'Erweiterte Produktinformationen, Marketing'],
              ['RFID', 'Radio Frequency Identification: Chip mit Kleinsender (Transponder/TAG) für kontaktlose Datenübertragung', 'Warenflusssteuerung, Regalkontrolle, Diebstahlsicherung']
            ]
          },
          {
            type: 'concept',
            title: '6.3 RFID im Detail',
            content: 'RFID (Funkfrequenz-Identifikation) nutzt einen Chip mit integriertem Kleinsender (Transponder oder TAG), der das Übertragen und Erfassen von Warendaten per Funk ermöglicht. Damit wird im Warenflusssystem zu jedem Zeitpunkt automatisch der aktuelle Stand ausgewiesen. Weitere Einsatzmöglichkeiten: Regalkontrolle, Kassasystem, Diebstahlverhinderung. Grösstes Hindernis: die noch hohen Investitionskosten in die Infrastruktur.',
            highlight: 'RFID = kontaktloser Datenaustausch via Funk-Chip. Vorteil: automatische Warenflusssteuerung. Hindernis: hohe Investitionskosten.'
          },
          {
            type: 'methodenbox',
            title: 'Methodenbox: Gewichtete Entscheidungsmatrix Logistiktechniken',
            content: 'Diese Methode wird eingesetzt, wenn aus mehreren Vorschlägen eine Auswahl getroffen werden muss. Dabei werden die Kriterien gewichtet. Das Ergebnis zeigt nachvollziehbar auf, wie die Wahl zustande gekommen ist. Sind die richtigen Kriterien gesetzt worden, ist das Ergebnis in sich logisch. Die Relevanz der Kriterien entscheidet über die Aussagekraft dieser Methode.',
            items: [
              'Wann einsetzen? Wenn aus mehreren Vorschlägen eine Auswahl getroffen werden muss.',
              'Was erhalten Sie? Ein nachvollziehbares, gewichtetes Ergebnis.',
              'Was beachten? Die Relevanz der Kriterien entscheidet über die Aussagekraft.'
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Digitalisierung ermöglicht effizientere Logistik und senkt die Fehlerquote.',
              'GTIN-Strichcodes sind die Basis im Lager und an der Kasse.',
              'EDI = elektronischer Datenaustausch mit Minimum an manuellen Eingriffen.',
              'ECR = ganzheitliche Wertschöpfungskettenbetrachtung zur Sortimentsoptimierung.',
              'RFID = kontaktlose Warenerfassung per Funk, aber noch hohe Investitionskosten.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'GTIN (Global Trade Item Number)', def: 'Strichcode (EAN) für die Warenkennzeichnung im Lager und an der Kasse.'},
              {term: 'EDI (Electronic Data Interchange)', def: 'Elektronischer Austausch genormter, formatierter Daten zwischen ICT-Systemen mit Minimum an manuellen Eingriffen.'},
              {term: 'ECR (Efficient Consumer Response)', def: 'Ganzheitliche Betrachtung der Wertschöpfungskette zur nachfrageorientierten Sortimentsoptimierung am POS.'},
              {term: 'QR-Code (Quick Response)', def: 'Zweidimensionaler Code, der mehr Informationen speichern kann als ein Strichcode.'},
              {term: 'RFID', def: 'Radio Frequency Identification: Chip mit Kleinsender (Transponder/TAG) für kontaktlose Datenübertragung und Warenerfassung.'},
              {term: 'Affiliate-Marketing', def: 'Nutzung bestehender Vertriebskanäle anderer Websites gegen Provision.'},
              {term: 'Digitalisierung', def: 'Einsatz neuer technischer Hilfsmittel in der Logistik zur Effizienzsteigerung und Fehlerreduktion.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Digitalisierung</strong> schafft neue Möglichkeiten in der Distribution, insbesondere in der Logistik.',
              '<strong>Elektronische Hilfsmittel</strong> (GTIN, QR-Code, RFID) ermöglichen einen hohen Automatisierungsgrad und senken die Fehlerquote.',
              '<strong>EDI</strong> ermöglicht den elektronischen Datenaustausch mit minimalen manuellen Eingriffen.',
              '<strong>ECR</strong> dient der nachfrageorientierten Sortimentsoptimierung am POS durch ganzheitliche Betrachtung der Wertschöpfungskette.',
              '<strong>RFID</strong> bietet grösstes Potenzial für die Zukunft, wird aber noch durch hohe Investitionskosten gebremst.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 7: Standort / Standortwahl
    // ============================================================
    {
      id: 'ch7', num: 'Kapitel 7', title: 'Standort / Standortwahl',
      exercises: [
        // Ex 54
        {
          id: 54, type: 'text',
          q: 'Standortkriterien Bioladen',
          instruction: 'Nennen Sie die wichtigsten fünf Entscheidungskriterien für die Wahl eines Standorts für ein Lebensmittelgeschäft (Bioladen, Naturkost) in der Innenstadt.',
          questions: [{q:'Fünf Kriterien:', keywords:['frequenz','fussgänger','preis','miete','verkehrsanbindung','parkplätze','sichtbarkeit','begehbarkeit','lage','erreichbarkeit'], minKeywords:4}],
          tips: ['Denken Sie an Passantenfrequenz.','Mietpreise müssen marktüblich sein.','Erreichbarkeit (ÖV, Parkplätze) ist wichtig.'],
          reveal: ['1. Hohe Frequenzen (viele Fussgänger/Passanten).','2. Marktüblicher Preis (Miete oder Kauf im Rahmen).','3. Gute Verkehrsanbindung (ÖV oder Parkplätze in nächster Nähe).','4. Gute Sichtbarkeit (optisch gut sichtbar, kein Hinterhof).','5. Gute Begehbarkeit (keine Stolpertreppen oder andere Barrieren).']
        },
        // Ex 55
        {
          id: 55, type: 'text',
          q: 'Psychologische Marktnähe',
          instruction: 'Was versteht man unter "psychologischer Marktnähe"? Erklären Sie diesen Begriff.',
          questions: [{q:'Psychologische Marktnähe:', keywords:['gefühl','nähe','kundschaft','sprache','kultur','verständnis','identifikation','vertrauen'], minKeywords:3}],
          tips: ['Es geht nicht um geografische Distanz.','Denken Sie an kulturelle und sprachliche Nähe.','Kunden müssen sich verstanden fühlen.'],
          reveal: ['Psychologische Marktnähe: Das Gefühl der Nähe, das die Kundschaft hat.','Beispiele: Die richtige Sprache (Französisch in der Romandie), die richtige Technik (keine Dieselwolken hinter dem Lkw), kulturelles Verständnis.']
        },
        // Ex 56
        {
          id: 56, type: 'text',
          q: 'Standortbewertung: Marketing vs. Finanzabteilung',
          instruction: 'Welche Vorgehensweise drängt sich bei der Standortbewertung aus Sicht des Marketings und welche aus Sicht der Finanzabteilung auf?',
          questions: [{q:'Sicht Marketing und Finanzen:', keywords:['subjektiv','qualitativ','kundennähe','image','finanziell','quantitativ','kosten','nutzen','vergleich','rendite'], minKeywords:3}],
          tips: ['Marketing denkt an Kundennähe und Image.','Die Finanzabteilung denkt an Kosten und Rendite.','Beides sind gültige Perspektiven.'],
          reveal: ['Marketing: Subjektive (qualitative) Betrachtung - Kundennähe, Imagekomponenten.','Finanzabteilung: Finanzielle (quantitative) Betrachtung - Vergleich Kosten/Nutzen, Rendite.']
        },
        // Ex 57
        {
          id: 57, type: 'tf',
          q: 'RF: Standortwahl',
          statements: [
            {s:'Die Wahl eines Logistikstandorts hat unmittelbare Auswirkung auf das ganze Unternehmen.', c:true, feedback:'Standortentscheide sind langfristig und betreffen das ganze Unternehmen.'},
            {s:'Standortqualität wird ausschliesslich aus Kundensicht beurteilt.', c:false, feedback:'Standortqualität wird sowohl aus Kundensicht als auch unter Berücksichtigung anderer Faktoren (Steuern, Infrastruktur etc.) beurteilt.'},
            {s:'Die 10-10-10-Methode eignet sich gut für strategische Standortentscheidungen.', c:true, feedback:'Die Methode betrachtet Auswirkungen nach 10 Minuten, 10 Monaten und 10 Jahren.'},
            {s:'Psychologische Marktnähe bezieht sich auf die geografische Distanz zum Kunden.', c:false, feedback:'Psychologische Marktnähe bezieht sich auf das Gefühl der Nähe (Sprache, Kultur, Verständnis).'}
          ],
          tips: ['Standort = langfristige, ganzheitliche Entscheidung.','10-10-10 = drei Zeithorizonte.','Psychologisch ≠ geografisch.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - auch andere Faktoren.','Aussage 3: Richtig.','Aussage 4: Falsch - psychologisch ≠ geografisch.']
        },
        // Ex 58
        {
          id: 58, type: 'mc',
          q: 'MC: Standortfaktoren',
          instruction: 'Welcher Faktor ist KEIN typisches Standortkriterium?',
          options: ['Verkehrsanbindung','Mietkosten','Lieblingsfarbe des Geschäftsführers','Kundenfrequenz'],
          answer: 2,
          tips: ['Standortkriterien sind objektiv messbar oder bewertbar.','Persönliche Vorlieben sind keine Standortkriterien.'],
          reveal: ['Die Lieblingsfarbe des Geschäftsführers ist kein relevantes Standortkriterium.','Relevante Kriterien: Verkehrsanbindung, Mietkosten, Kundenfrequenz, Sichtbarkeit etc.']
        },
        // Ex 59
        {
          id: 59, type: 'match',
          q: 'Standorttypen',
          instruction: 'Ordnen Sie die Standorttypen ihrer Beschreibung zu.',
          pairs: [{l:'Verkaufsstelle',r:'Ort, wo Endkunden direkt kaufen'},{l:'Auslieferungslager',r:'Lager nahe beim Kunden für schnelle Lieferung'},{l:'Zentrallager',r:'Hauptlager mit grosser Kapazität'},{l:'Showroom',r:'Ausstellungsraum ohne direkten Verkauf'}],
          options: ['Ort, wo Endkunden direkt kaufen','Lager nahe beim Kunden für schnelle Lieferung','Hauptlager mit grosser Kapazität','Ausstellungsraum ohne direkten Verkauf'],
          tips: ['VS = Point of Sale.','Auslieferungslager = nahe beim Kunden.','Showroom = nur Ausstellung, kein Verkauf.'],
          reveal: ['Verkaufsstelle = Endkunden kaufen direkt.','Auslieferungslager = nahe beim Kunden.','Zentrallager = grosse Kapazität.','Showroom = Ausstellung ohne direkten Verkauf.']
        },
        // Ex 60
        {
          id: 60, type: 'fill',
          q: 'Lückentext: Standort',
          instruction: 'Ergänzen Sie die Lücken zur Standortwahl.',
          template: 'Die Standortbewertung kann sowohl aus {0} (qualitativer) wie auch aus {1} (quantitativer) Sicht erfolgen. Insbesondere die Wahl aus Sicht des Marketings beeinflusst die {2} aus Kundensicht.',
          blanks: [['subjektiver','qualitativer'],['finanzieller','quantitativer'],['Standortqualität']],
          tips: ['Zwei Perspektiven: qualitativ und quantitativ.','Marketing = qualitative/subjektive Sicht.','Finanzen = quantitative/finanzielle Sicht.'],
          reveal: ['Subjektive (qualitative) und finanzielle (quantitative) Sicht.','Marketing beeinflusst die Standortqualität aus Kundensicht.']
        }
      ],
      learningData: {
        title: 'Standort / Standortwahl',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Begriff "Standort" erklären.',
              'ein Konzept im Rahmen der Standortwahl entwerfen.',
              'Kriterien zur Standortwahl nennen und erläutern.'
            ]
          },
          {
            type: 'concept',
            title: '7.1 Standortentscheid allgemein',
            content: 'Die Standortwahl ist für ein Unternehmen von entscheidender Bedeutung. Bei Produktionsbetrieben wird primär auf herstellertechnische Erfordernisse geachtet. Die absatzpolitischen Überlegungen werden erst in zweiter Priorität beachtet. Im Rahmen der Distributionspolitik liegt der Schwerpunkt auf der Bestimmung des Standorts einer Verkaufsstelle (Ladengeschäft) oder auf des Orts der Warenübergabe (Abhollager, Rampe).',
            highlight: 'Die Standortwahl betrifft entweder die Verkaufsstelle (Ladengeschäft) oder den Ort der Warenübergabe (Abhollager, Rampe).'
          },
          {
            type: 'concept',
            title: '7.2 Standortkonzept',
            content: 'Das Standortkonzept umfasst sämtliche Entscheide und Massnahmen, die es braucht, um die von einem Unternehmen angestrebten Standortziele zu erreichen. Es ist die Schnittstelle zum Logistikkonzept. Die Umsetzung erfolgt über die jeweiligen Massnahmenpläne der betroffenen Abteilungen / Mitarbeitenden (Verkauf und Logistik). Der Strategieansatz mit Zielgebilde umfasst: 1. Standortziele (operativ), 2. Standorte: Anzahl (zentral/dezentral), 3. Sicht bestimmen (Marketing/Logistik), 4. Definition Kriterien (Sollvorstellungen), sowie Erreichbarkeit, Nachfrage/Kundennähe, Kosten und Serviceniveau.',
            highlight: 'Das Standortkonzept ist die Schnittstelle zum Logistikkonzept und umfasst alle Entscheide zur Erreichung der Standortziele.'
          },
          {
            type: 'concept',
            title: '7.3 Standortentscheid und Marketing',
            content: 'In den wenigsten Fällen entspricht der Standort den Marketingvorstellungen und -zielsetzungen. Gerade aber für das Marketing ist unter Umständen eine gute Lage sehr wichtig. So kann z.B. mit einem oder mehreren Auslieferungslagern eine bessere Marktnähe erreicht werden. Oder die bessere Verkehrsanbindung optimiert den Warenfluss, was wiederum direkten Einfluss auf die Marketinglogistik und deren Kosten hat.',
            highlight: 'Eine gute Lage kann über Auslieferungslager und bessere Verkehrsanbindung die Marktnähe und Marketinglogistik optimieren.'
          },
          {
            type: 'table',
            title: 'Kriterien beim Standortentscheid (B2C)',
            headers: ['Kriterium', 'Beispiel'],
            rows: [
              ['Zielgruppenerreichbarkeit', 'Geografische Nähe, z.B. Lebensmittel'],
              ['Höhe der Frequenzen', 'Bei Verkaufsstellen wie Kiosken'],
              ['Parkmöglichkeit resp. öffentlicher Verkehr', 'Bequemlichkeit für die Nachfragenden'],
              ['Konkurrenzsituation', 'Anzahl und Art der Konkurrenz'],
              ['Psychologische Marktnähe', 'Sprache, Mentalität'],
              ['Komplementärkonkurrenz bestehend', 'Kleider in einem Shoppingcenter'],
              ['Nachfrage nach unserer Marktleistung', 'Eher Ausland als Schweiz'],
              ['Kaufkraftverhältnisse', 'Eher Ausland als Schweiz'],
              ['Marktvolumen und -potenzial', 'Eher Ausland als Schweiz']
            ]
          },
          {
            type: 'concept',
            title: '7.4 Standortentscheid und andere Einflussfaktoren',
            content: 'Bei einem Standortentscheid können zusätzlich andere Kriterien verwendet werden. Politische und gesetzliche Faktoren umfassen: Standort-Goodwill (kulante Behandlung bei Neuansiedlung), Steuerbelastung (entscheidend ist der Firmensitz), Wirtschaftsförderungsmassnahmen, Arbeitsgesetzgebung, Raumplanungsgesetz, Eigentumsverhältnisse, Umweltauflagen und -vorschriften sowie das politische System. Übrige Faktoren sind: Prestigewert, Lohnniveau, Bedeutung von Gewerkschaften, Arbeitslosenquote, Wohnwert der Region/Klima, kulturelles und soziales Umfeld, Höhe der Kapitalkosten sowie Zugang zu Kapitalmärkten.',
            highlight: 'Neben marketingbezogenen Kriterien beeinflussen auch politische, gesetzliche und soziale Faktoren den Standortentscheid.'
          },
          {
            type: 'concept',
            title: '7.5 Standortbewertung, -beurteilung und -entscheid',
            content: 'Um einen Standort zu bewerten, gibt es unterschiedliche Methoden. In der Praxis hat sich die Entscheidungstabelle für eine fundierte Bewertungsgrundlage etabliert. Die qualitative Bewertung vergleicht subjektive Kriterien in einer Diskussion. Die quantitative Bewertung nutzt den Vergleich vom eingesetzten Kapital zum erwartenden Erfolg, den sogenannten Return on Invest (ROI). Mittels der 10-10-10-Methode (auch Zeitreise genannt) kann man sich die Auswirkungen eines Standortentscheids in verschiedenen Zeiträumen vorstellen: Was wird in 10 Minuten, 10 Monaten und 10 Jahren sein?',
            highlight: 'Standortbewertung kann qualitativ (subjektive Kriterien) oder quantitativ (ROI-Berechnung) erfolgen. Die 10-10-10-Methode hilft bei strategischen Entscheidungen.'
          },
          {
            type: 'methodenbox',
            title: '10-10-10-Methode (Zeitreise): Standortwahl',
            content: '1. Wann und wofür setzen Sie diese Methode ein? Die 10-10-10-Methode (auch Zeitreise genannt) eignet sich hervorragend, um strategische Entscheidungen zu überdenken. 2. Was erhalten Sie als Ergebnis? Eine fiktive Betrachtung: Welche Auswirkungen und Folgen werden diese Entscheidungen in 10 Minuten, 10 Monaten und 10 Jahren haben? 3. Was beachten Sie bei der 10-10-10-Methode beim Entscheid bezüglich der Standortwahl? Das Resultat ist eine subjektive Annahme, die den betroffenen Entscheidungsträger zu einem vertieften Betrachten des Projekts führen soll.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: '10-10-10-Methode', def: 'Zeitreise-Methode zur Überprüfung strategischer Entscheidungen: Was passiert in 10 Minuten, 10 Monaten, 10 Jahren?'},
              {term: 'Qualitative Bewertung', def: 'Subjektive Standortbewertung anhand von Kriterien wie Marketing, Finanzen, Politik, Kommunikation.'},
              {term: 'Quantitative Bewertung', def: 'Finanzielle Standortbewertung anhand von Return on Invest (ROI).'},
              {term: 'Standort', def: 'Ort einer Verkaufsstelle oder eines Lagers/Warenübergabe.'},
              {term: 'Standortkonzept', def: 'Alle Entscheide und Massnahmen zur Erreichung der angestrebten Standortziele; Schnittstelle zum Logistikkonzept.'},
              {term: 'Standortkriterien', def: 'Bewertungsfaktoren wie Frequenz, Erreichbarkeit, Konkurrenzsituation, psychologische Marktnähe.'},
              {term: 'Standortwahl', def: 'Entscheidungsprozess zur Bestimmung des besten Standorts für Verkauf oder Logistik.'}
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Wahl und Entscheidung für einen Logistikstandort hat unmittelbare Auswirkung auf das ganze Unternehmen.',
              'Insbesondere die Wahl aus Sicht des Marketings beeinflusst die Standortqualität aus Kundensicht.',
              'Die Standortbewertung kann sowohl aus subjektiver (qualitativer) wie auch aus finanzieller (quantitativer) Sicht erfolgen.',
              'Die 10-10-10-Methode eignet sich hervorragend, um strategische Entscheidungen zu überdenken.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Wahl und Entscheidung</strong> für einen Logistikstandort hat unmittelbare Auswirkung auf das ganze Unternehmen.',
              'Insbesondere die Wahl aus Sicht des Marketings (z.B. zentrale Lage) beeinflusst die <strong>Standortqualität</strong> aus Kundensicht.',
              'Dazu spielen auch andere Gründe eine Rolle (z.B. Steuerfluss). Die Kriterien sind jeweils sorgfältig unter Berücksichtigung der Situation zu bestimmen.',
              'Die Vorgehensweise bei der <strong>Standortbewertung</strong> kann sowohl aus <strong>subjektiver (qualitativer)</strong> wie auch aus <strong>finanzieller (quantitativer) Sicht</strong> erfolgen.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 8: Export
    // ============================================================
    {
      id: 'ch8', num: 'Kapitel 8', title: 'Export',
      exercises: [
        // Ex 61
        {
          id: 61, type: 'text',
          q: 'Direkter und indirekter Export',
          instruction: 'Was wird unter direktem resp. indirektem Export verstanden?',
          questions: [{q:'Direkter und indirekter Export:', keywords:['direkt','fakturiert','ausland','grenze','nach','indirekt','inland','vor','eigentum','wechselt'], minKeywords:4}],
          tips: ['Beim direkten Export wechselt das Eigentum nach der Grenze.','Beim indirekten Export wechselt es vor der Grenze.','Der Unterschied liegt im Ort des Eigentumswechsels.'],
          reveal: ['Direkter Export: Der Anbieter fakturiert auf einen Kunden im Ausland, das Eigentum wechselt nach der Grenze.','Indirekter Export: Der Anbieter fakturiert auf einen Kunden im Inland, das Eigentum wechselt vor der Grenze.']
        },
        // Ex 62
        {
          id: 62, type: 'text',
          q: 'Distributionsrelevante Aspekte im Export',
          instruction: 'Welche zusätzlichen distributionsrelevanten Aspekte sind im Export zu bedenken?',
          questions: [{q:'Zusätzliche Aspekte:', keywords:['gesetze','vorschriften','zoll','deklaration','transport','verpackung','kosten','währung','devisen','administrativ'], minKeywords:4}],
          tips: ['Im Export kommen länderspezifische Gesetze hinzu.','Zolldeklarationen sind nötig.','Transport- und Verpackungskosten steigen.'],
          reveal: ['Zu beachten: Länderspezifische Gesetze (Einfuhr und Vertrieb), Vorschriften administrativer Art (Zolldeklarationen), direkte Kosten (Transport, Verpackung), finanzielle Umstände (Währungsschwankungen, Devisenvorschriften).']
        },
        // Ex 63
        {
          id: 63, type: 'text',
          q: 'Schweiz und Export',
          instruction: 'Nennen Sie die Eigenheiten der Schweiz im Zusammenhang mit dem Export.',
          questions: [{q:'Eigenheiten Schweiz:', keywords:['EU','umgeben','warenaustausch','administrativ','aufwand','handelspartner','deutschland','grösster'], minKeywords:3}],
          tips: ['Die Schweiz liegt mitten in der EU.','Der Warenaustausch ist daher besonders relevant.','Deutschland ist der grösste Handelspartner.'],
          reveal: ['Alle Länder rund um die Schweiz sind in der EU. Der Warenaustausch zwischen CH und EU erfordert immer einen administrativen Aufwand, den EU-Länder untereinander nicht haben.','Grösster Handelspartner der Schweiz ist Deutschland.']
        },
        // Ex 64
        {
          id: 64, type: 'tf',
          q: 'RF: Export',
          statements: [
            {s:'Beim direkten Export wechselt das Eigentum nach der Grenze.', c:true, feedback:'Direkt = Fakturierung an Kunden im Ausland, Eigentum nach der Grenze.'},
            {s:'Der Export kann nur direkt erfolgen.', c:false, feedback:'Export kann sowohl direkt als auch indirekt vorgenommen werden.'},
            {s:'Im Export tragen die Organe teilweise eigene Namen wie Exportkommissionäre oder Distributoren.', c:true, feedback:'Im Export gibt es spezielle Organe wie Tochtergesellschaft, Exportkommissionäre/-makler, Distributoren.'},
            {s:'Deutschland ist der grösste Handelspartner der Schweiz.', c:true, feedback:'Dies ist korrekt.'}
          ],
          tips: ['Direkt = nach der Grenze.','Export = direkt oder indirekt.','Spezielle Export-Organe existieren.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - auch indirekt möglich.','Aussage 3: Richtig.','Aussage 4: Richtig.']
        },
        // Ex 65
        {
          id: 65, type: 'text',
          q: 'Minicase: Kriterienkatalog Export',
          instruction: 'Die AWAG sucht neue Absatzmärkte in Finnland, Schweden oder Norwegen. Erstellen Sie einen Kriterienkatalog für den Ländervergleich.',
          questions: [{q:'Kriterienkatalog:', keywords:['einwohner','bruttoinlandprodukt','gesundheitsausgaben','entwicklung','trend','senior','anteil','spitäler','infrastruktur'], minKeywords:4}],
          tips: ['Vergleichen Sie demografische Daten.','Wirtschaftliche Kennzahlen sind relevant.','Branchenspezifische Daten einbeziehen.'],
          reveal: ['Kriterienkatalog: 1. Anzahl Einwohner, 2. Entwicklung/Trend, 3. Anteil Senioren, 4. Bruttoinlandprodukt, 5. Gesundheitsausgaben pro Kopf, 6. Ärztedichte, 7. Anzahl Spitäler.']
        },
        // Ex 66
        {
          id: 66, type: 'match',
          q: 'Export-Organe zuordnen',
          instruction: 'Ordnen Sie die Export-Organe der richtigen Kategorie zu.',
          pairs: [{l:'Tochtergesellschaft',r:'Eigenes Organ im Ausland'},{l:'Exportkommissionär',r:'Externer Vermittler'},{l:'Lokaler Distributor',r:'Externer Händler im Zielmarkt'},{l:'Eigene Niederlassung',r:'Eigenes Organ im Ausland'}],
          options: ['Eigenes Organ im Ausland','Externer Vermittler','Externer Händler im Zielmarkt'],
          tips: ['Tochtergesellschaft und Niederlassung = eigene Organe.','Kommissionäre und Makler = externe Vermittler.','Distributoren = externe Händler.'],
          reveal: ['Eigene Organe: Tochtergesellschaft, Niederlassung.','Externe: Exportkommissionär (Vermittler), Distributor (Händler im Zielmarkt).']
        },
        // Ex 67
        {
          id: 67, type: 'mc',
          q: 'MC: Export',
          instruction: 'Welche Aussage zum indirekten Export ist korrekt?',
          options: ['Das Eigentum wechselt nach der Landesgrenze.','Der Anbieter fakturiert auf einen Kunden im Inland und das Eigentum wechselt vor der Grenze.','Es gibt keine Zolldeklarationen.','Der Anbieter muss immer eine Tochtergesellschaft gründen.'],
          answer: 1,
          tips: ['Indirekt = vor der Grenze.','Der Abnehmer im Inland übernimmt den Export.','Tochtergesellschaft = direkt.'],
          reveal: ['Indirekter Export: Fakturierung auf Kunden im Inland, Eigentum wechselt vor der Grenze. Der Abnehmer im Inland exportiert die Ware selbst.']
        }
      ],
      learningData: {
        title: 'Export',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Begriff "Export" erklären.',
              'Kriterien zur Wahl von Distributionspartnern im Export nennen und erläutern.',
              'ausgewählte Distributionspartner im Export beurteilen.'
            ]
          },
          {
            type: 'concept',
            title: '8.1 Beschrieb',
            content: 'Unter Export (oder Ausfuhr) versteht man die Lieferung von Waren in Drittländer. Andere Bezeichnungen sind "internationales Marketing", "multinationales Marketing" oder "Globalmarketing". Im Export kommt eine zusätzliche Komponente zu den bestehenden Tätigkeiten einer Firma im Inland hinzu -- im Minimum ist eine Grenze zu überqueren. Dies ist mit zusätzlichem Aufwand für die Logistik verbunden (betrifft sowohl den Informations- wie auch den Warenfluss).',
            highlight: 'Export = Lieferung von Waren in Drittländer. Es ist immer eine Grenze zu überqueren, was zusätzlichen logistischen Aufwand bedeutet.'
          },
          {
            type: 'concept',
            title: '8.2 Ansätze im Export',
            content: 'Beim direkten Export fakturiert der Anbieter auf einen Kunden im Ausland (Importeur/Handel/Konsumenten), also wechselt das Eigentum nach der Grenze. Der Ort der Warenübergabe im physischen Sinne hängt von den vereinbarten Konditionen ab, die in den sogenannten Incoterms geregelt sind. Beim indirekten Export fakturiert der Anbieter auf einen Kunden im Inland (Exporteur/Handel/Konsumenten), also wechselt das Eigentum vor der Grenze. Der Ort der Warenübergabe ist i.d.R. im Inland.',
            highlight: 'Direkter Export: Eigentum wechselt nach der Grenze. Indirekter Export: Eigentum wechselt vor der Grenze (Fakturierung auf Kunden im Inland).'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Export', def: 'Lieferung von Waren in Drittländer (Ausfuhr). Im Minimum ist eine Grenze zu überqueren.'},
              {term: 'Direkter Export', def: 'Anbieter fakturiert auf Kunden im Ausland; Eigentum wechselt nach der Grenze.'},
              {term: 'Indirekter Export', def: 'Anbieter fakturiert auf Kunden im Inland; Eigentum wechselt vor der Grenze.'},
              {term: 'Incoterms', def: 'International Commercial Terms: Internationale Handelsklauseln zur Interpretation von Handelsbedingungen im Aussenhandelsgeschäft.'},
              {term: 'Auslandsreisende', def: 'Eigene Aussendienstmitarbeitende, die im Namen des Anbieters auftreten.'},
              {term: 'Distributor', def: 'Selbstständiger Händler, tritt evtl. als offizielle Vertretung in einem Land auf. Kann Importeur, Grosshandel oder Detailhandel sein.'},
              {term: 'Exportkommissionär', def: 'Kauft unter eigenem Namen, aber auf Rechnung des Auftraggebers.'},
              {term: 'Exportmakler', def: 'Vermittelt Aufträge zwischen den interessierten Parteien.'},
              {term: 'Internet-/Online-Recherche', def: 'Methode zur Erhebung grundsätzlicher Informationen am Anfang eines Exportprojekts.'},
              {term: 'Zweigniederlassung', def: 'Eigene Filiale im Ausland, rechtlich unselbstständig.'}
            ]
          },
          {
            type: 'concept',
            title: '8.3 Distribution und Export',
            content: 'Beim Export ist die Aufgabe der Distribution, die Produkte den Nachfragern verfügbar zu machen. Daraus lassen sich zwei Herausforderungen ableiten: a) Wie ist der Zugang zu einem definierten ausländischen Markt zu finden? b) Wie hat die (Fein)verteilung im ausländischen Markt zu erfolgen? Die dafür nötigen Informationen können mittels Internet-/Online-Recherche erhoben werden. Relevante Informationen umfassen: Marktpotenzial des Landes, Potenzial in der Branche, Handelsschwernisse (Importgesetze, Zollvorschriften), soziodemografische Statistiken und politische Entwicklung.',
            highlight: 'Im Export sind zwei Fragen zentral: Wie gelangt man in den Markt? Und wie erfolgt die Feinverteilung vor Ort?'
          },
          {
            type: 'concept',
            title: '8.3.1 Zusätzliche Einflussfaktoren im Export',
            content: 'Aus den sich ergebenden Anforderungen an das Marketing und die Marketinglogistik lassen sich folgende Bereiche herauskristallisieren: Marktzugang (Eintritt in ein fremdes Land), Administration (Zoll), Recht und Gesetze (Lebensmittelgesetze, Zulassungsbedingungen/Normen, Einfuhrgesetze/Kontingente), Kosten (Zölle, Steuern), Finanzen (Währungsrisiko, Devisenausfuhr), Marktentfernung (längere Reaktionszeit), Kultur (Entwicklungsländer), Informationen (Sprache), Feinverteilung (andere Distributionssysteme).',
            highlight: 'Einflussfaktoren im Export: Marktzugang, Administration (Zoll), Recht und Gesetze, Kosten, Finanzen (Währungsrisiko), Kultur und Sprache.'
          },
          {
            type: 'concept',
            title: '8.3.2 Direkte oder indirekte Distribution im Export',
            content: 'Der Vertrieb in fremden Märkten kann grundsätzlich auf zwei verschiedenen Wegen erfolgen: direkt (durch eigene/fremde Absatzorgane im Namen des Herstellers) oder indirekt (durch den Handel/Absatzmittler). Eigene Organe der direkten Distribution sind: Auslandsreisende, Zweigniederlassung (rechtlich unselbstständig) und Tochtergesellschaft (rechtlich selbstständig). Fremde Organe: Exportmakler (-broker) und Exportkommissionär. Absatzmittler der indirekten Distribution sind: Exporteure (im Land des Herstellers), Importeure (im Zielland) und Distributoren (selbstständige Händler).',
            highlight: 'Direkte Distribution: eigene Reisende, Zweigniederlassung, Tochtergesellschaft. Indirekte Distribution: Exporteure, Importeure, Distributoren.'
          },
          {
            type: 'methodenbox',
            title: 'Internet-/Online-Recherche: Informationsbeschaffung',
            content: '1. Wann und wofür setzen Sie diese Methode ein? Diese Methode wird ganz am Anfang eines Projekts zur Erhebung von grundsätzlichen Informationen eingesetzt. 2. Was erhalten Sie als Ergebnis? Digitale Nachschlagewerke helfen, einen ersten Überblick über die Struktur eines bestimmten Themas zu gewinnen. 3. Was beachten Sie bei der Internet-/Online-Recherche beim Entscheid? Das Resultat hängt von den gewählten Suchkriterien ab und ist daher subjektiv. Die Fähigkeit, vertrauenswürdige Quellen zu erkennen und zu bewerten, ist mittlerweile eine wichtige Kernkompetenz im digitalen Zeitalter.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Export = Warenverkehr mit dem Ausland (Lieferung in Drittländer).',
              'Direkter Export: Eigentumswechsel nach der Grenze. Indirekter Export: Eigentumswechsel vor der Grenze.',
              'Incoterms regeln die Konditionen (Transportkosten, Risiko, Steuern) beim Export.',
              'Zusätzliche Einflussfaktoren: Zoll, Gesetze, Währungsrisiko, Kultur, Sprache.',
              'Eigene Organe: Auslandsreisende, Zweigniederlassung, Tochtergesellschaft.',
              'Fremde Organe/Absatzmittler: Exportmakler, Exportkommissionär, Exporteure, Importeure, Distributoren.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Als <strong>Export</strong> wird der Warenverkehr mit dem Ausland bezeichnet.',
              'Der Export kann <strong>direkt oder indirekt</strong> vorgenommen werden.',
              'Zu den üblichen Einflussfaktoren an die Logistik kommen im Export noch weitere spezielle Anforderungen dazu (z.B. andere Gesetze, spezielle Administration, zusätzliche Kosten usw.).',
              'Die Organe im Export tragen teilweise eigene Namen wie: <strong>Tochtergesellschaft, Exportkommissionäre/-makler, Distributoren</strong>.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 9: Distribution nach Gütern
    // ============================================================
    {
      id: 'ch9', num: 'Kapitel 9', title: 'Distribution nach Gütern',
      exercises: [
        // Ex 68
        {
          id: 68, type: 'text',
          q: 'Konsumgüter vs. Dienstleistungen',
          instruction: 'Welches ist der grundsätzliche Unterschied in der Distribution zwischen Konsumgütern und Dienstleistungen?',
          questions: [{q:'Unterschied:', keywords:['indirekt','direkt','materiell','immateriell','lager','transport','konsumgüter','dienstleistungen','physisch'], minKeywords:3}],
          tips: ['Konsumgüter sind materiell (physisch fassbar).','Dienstleistungen sind immateriell.','Dies hat Auswirkungen auf Lager und Transport.'],
          reveal: ['Konsumgüter werden i.d.R. indirekt vertrieben, Dienstleistungen werden häufig direkt vertrieben.','Konsumgüter sind materielle Güter (physisch fassbar), Dienstleistungen sind immaterielle Güter.','Dies hat direkte Auswirkungen auf Lager und Transport.']
        },
        // Ex 69
        {
          id: 69, type: 'text',
          q: 'Konsumgüter vs. Investitionsgüter',
          instruction: 'Welches ist der grundsätzliche Unterschied in der Distribution zwischen Konsumgütern und Investitionsgütern?',
          questions: [{q:'Unterschied:', keywords:['indirekt','direkt','viele','kleine','kunden','wenige','grosse','beratung','aufwand','umsatz'], minKeywords:3}],
          tips: ['Konsumgüter = viele kleine Kunden.','Investitionsgüter = wenige grosse Kunden.','Beratungsaufwand ist unterschiedlich.'],
          reveal: ['Konsumgüter: i.d.R. indirekt vertrieben, viele kleine Kunden, Massengeschäft.','Investitionsgüter: mehrheitlich direkt vertrieben, wenige grosse Kunden, hoher Beratungsaufwand und Bedeutung einzelner Kunden viel grösser.']
        },
        // Ex 70
        {
          id: 70, type: 'fill',
          q: 'Drei Güterarten',
          instruction: 'Ergänzen Sie die drei Güterarten.',
          template: 'In der Volkswirtschaft spricht man von drei Güterarten: 1. {0} (Gebrauch und Verbrauch werden von Privatpersonen konsumiert), 2. {1} (Gebrauch und Verbrauch werden von Firmen für eine weitere Verwendung gekauft), 3. {2} (persönlich oder unpersönlich, werden von Privaten wie auch von Firmen bezogen).',
          blanks: [['Konsumgüter'],['Investitionsgüter'],['Dienstleistungen']],
          tips: ['Konsumgüter = für Privatpersonen.','Investitionsgüter = für Firmen/Unternehmen.','Dienstleistungen = für beide.'],
          reveal: ['1. Konsumgüter (Privatpersonen).','2. Investitionsgüter (Firmen, weitere Verwendung).','3. Dienstleistungen (Private und Firmen).']
        },
        // Ex 71
        {
          id: 71, type: 'match',
          q: 'Tabelle: IG vs. DL Distribution',
          instruction: 'Ordnen Sie die Merkmale den Güterarten zu (Investitionsgüter vs. Dienstleistungen).',
          pairs: [
            { l: 'Langfristiger Kaufentscheid', r: 'Investitionsgüter' },
            { l: 'Relativ spontaner Kaufentscheid', r: 'Dienstleistungen' },
            { l: 'Sachliche Ansprache', r: 'Investitionsgüter' },
            { l: 'Emotional beeinflusste Kommunikation', r: 'Dienstleistungen' },
            { l: 'Grosses Volumen pro Auftrag', r: 'Investitionsgüter' },
            { l: 'Klein bis gross je nach Auftrag', r: 'Dienstleistungen' }
          ],
          options: ['Investitionsgüter','Dienstleistungen'],
          tips: ['IG = sachlich, langfristig, grosse Aufträge.','DL = spontaner, emotional, variabel.','Denken Sie an den Kaufprozess.'],
          reveal: ['IG: Langfristiger Kaufentscheid, sachliche Ansprache, grosses Volumen.','DL: Spontaner Kaufentscheid, emotionale Kommunikation, variables Volumen.']
        },
        // Ex 72
        {
          id: 72, type: 'tf',
          q: 'RF: Güterarten',
          statements: [
            {s:'Konsumgüter werden i.d.R. indirekt über den Handel vertrieben.', c:true, feedback:'Konsumgüter = Massengeschäft = indirekt über den Handel.'},
            {s:'Investitionsgüter werden meist direkt vertrieben.', c:true, feedback:'IG = wenige grosse Kunden = direkter Vertrieb.'},
            {s:'Dienstleistungen sind materielle Güter.', c:false, feedback:'Dienstleistungen sind immaterielle Güter (nicht fassbar).'},
            {s:'Formulardruck (Lieferscheine auf Papier) ist ein Investitionsgut.', c:true, feedback:'Es ist ein materielles Gut, das von Firmen für eine weitere Verwendung gekauft wird (wirtschaftliches, materielles Investitionsgut, Verbrauchsgut).'}
          ],
          tips: ['KG = indirekt, IG = direkt, DL = häufig direkt.','Dienstleistungen = immateriell.','Formulardruck = materiell, für Firmen.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Richtig.','Aussage 3: Falsch - immateriell.','Aussage 4: Richtig.']
        },
        // Ex 73
        {
          id: 73, type: 'mc',
          q: 'MC: Gütervertrieb',
          instruction: 'Welches Kriterium unterscheidet Investitionsgüter am stärksten von Konsumgütern in der Distribution?',
          options: ['Die Farbe der Verpackung','Der hohe Beratungsaufwand und die Bedeutung einzelner Kunden','Die Transportkosten','Die Werbemassnahmen'],
          answer: 1,
          tips: ['IG = wenige, grosse Kunden.','Die Beziehung zum einzelnen Kunden ist zentral.','Beratung ist bei IG viel intensiver.'],
          reveal: ['Bei Investitionsgütern ist der Beratungsaufwand im Vertrieb und die Bedeutung einzelner Kunden viel grösser als bei Konsumgütern.']
        },
        // Ex 74
        {
          id: 74, type: 'match',
          q: 'Kriterien der Differenzierung',
          instruction: 'Ordnen Sie die Beschreibungen den richtigen Güterarten zu.',
          pairs: [{l:'Viele kleine Kunden, Massengeschäft',r:'Konsumgüter'},{l:'Wenige grosse Kunden, hoher Beratungsaufwand',r:'Investitionsgüter'},{l:'Immateriell, persönlich oder unpersönlich',r:'Dienstleistungen'}],
          options: ['Konsumgüter','Investitionsgüter','Dienstleistungen'],
          tips: ['KG = Masse.','IG = Einzelkunden, Beratung.','DL = immateriell.'],
          reveal: ['Konsumgüter = viele kleine Kunden, Masse.','Investitionsgüter = wenige grosse Kunden, Beratung.','Dienstleistungen = immateriell.']
        }
      ],
      learningData: {
        title: 'Distribution nach Gütern',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'Güter im volkswirtschaftlichen Sinne definieren.',
              'Güterarten hierarchisch darstellen und erklären.',
              'Kriterien der Differenzierung der Güter nennen und erläutern.'
            ]
          },
          {
            type: 'concept',
            title: '9.1 Unterscheidung der Güter',
            content: 'Für die Verfügbarmachung einer Marktleistung gibt es sehr unterschiedliche Voraussetzungen. In der Volkswirtschaft wird zwischen Konsumgütern, Investitionsgütern und Dienstleistungen unterschieden. Die Güter des Markts werden zunächst in wirtschaftliche und freie Güter unterteilt. Wirtschaftliche Güter gliedern sich in materielle und immaterielle Güter. Materielle Güter umfassen Investitionsgüter und Konsumgüter (jeweils in Gebrauchs- und Verbrauchsgüter), immaterielle Güter umfassen Dienstleistungen, Rechte und Know-how.',
            highlight: 'Die Volkswirtschaft unterscheidet drei Güterarten: Konsumgüter, Investitionsgüter und Dienstleistungen. Die Verwendung (nicht das Gut selbst) bestimmt die Klassifizierung.'
          },
          {
            type: 'concept',
            title: '9.2 Konsumgüter',
            content: 'Konsumgüter sind Güter, die für die persönliche oder private Verwendung der Konsumentinnen und Konsumenten gedacht sind. Es handelt sich i.d.R. um Massengüter. Man kann sie zusätzlich unterscheiden in Gebrauchs- und Verbrauchsgüter. Eine andere Unterscheidung ist möglich in Alltags- und Luxusgüter. Konsumgüter haben eine physische Komponente. Der Vertrieb erfolgt mehrheitlich indirekt, d.h. über den Handel (Business-to-Consumer, B2C). Beim Vertrieb wird stark mit den Kommunikationsinstrumenten gearbeitet: Push-Marketing (auf den Handel) und Pull-Marketing (auf die Konsumenten). Das Ziel bei Konsumgütern ist eine breite Verfügbarkeit.',
            highlight: 'Konsumgüter = Massengüter für die private Verwendung. Vertrieb mehrheitlich indirekt über den Handel (B2C). Ziel: breite Verfügbarkeit.'
          },
          {
            type: 'concept',
            title: '9.3 Investitionsgüter',
            content: 'Investitionsgüter inkl. Produktionsgüter sind Güter, die für die Erstellung einer anderen Marktleistung eingesetzt werden. Sie können unterteilt werden in Produktionsmittel, Produktionsstoffe, Zusatzstoffe und Hilfsstoffe. Man kann sie zusätzlich unterscheiden in Gebrauchs- und Verbrauchsgüter. Investitionsgüter werden in ihrer Gesamtheit vom Kunden als Marktleistung (Produkt) wahrgenommen. Sie haben eine physische Komponente. Der Vertrieb erfolgt mehrheitlich direkt, d.h. mittels eigener Organe oder fremder Organe im Namen des Herstellers (Business-to-Business, B2B). Investitionsgüter sind oft spezifisch auf den Kunden ausgerichtet ("customized"). Der Vertrieb wird sachbezogen informiert und der persönliche Verkauf dominiert.',
            highlight: 'Investitionsgüter = Güter zur Erstellung anderer Marktleistungen. Vertrieb mehrheitlich direkt (B2B), persönlicher Verkauf dominiert.'
          },
          {
            type: 'concept',
            title: '9.4 Dienstleistungen',
            content: 'Dienstleistungen sind Leistungen, die immateriell und vergänglich sind. Sie werden von den jeweiligen Anbietern erbracht. Dienstleistungen haben i.d.R. keine physische Komponente, benötigen jedoch ein Trägermedium. Sie können persönlich (Steuerberatung) oder unpersönlich (SBB) erbracht werden. Sie setzen vielfach den direkten Kontakt zwischen den Anbietern und den Nachfragern voraus. Dienstleistungen werden daher meistens direkt angeboten. Es gibt jedoch einige gewichtige Ausnahmen, wo sie sowohl indirekt wie auch über Mischsysteme vertrieben werden. Beim Vertrieb wird mit Imagekomponenten gearbeitet und die persönliche Ansprache dominiert.',
            highlight: 'Dienstleistungen = immateriell und vergänglich. Vertrieb meistens direkt, persönliche Ansprache und Imagekomponenten dominieren.'
          },
          {
            type: 'table',
            title: 'Kriterien der Differenzierung: Konsumgüter',
            headers: ['Kriterium', 'Beschreibung'],
            rows: [
              ['Distributionsweg', 'In der Regel indirekt'],
              ['Anzahl Stufen', 'Vielfach über mehrere Stufen'],
              ['Entscheidungsträger', 'Wenige, oft nur Produktverwender/-in'],
              ['Kaufentscheid', 'Spontan'],
              ['Art der Kundschaft', 'Private'],
              ['Anzahl Nachfragende', 'Sehr viele (alle Konsument/-innen)'],
              ['Volumen pro Auftrag', 'Klein, aber viele Aufträge'],
              ['Verkaufsprozess', 'Einfach, Zug um Zug'],
              ['Erklärungsbedarf', 'Meistens klein'],
              ['Kundenbeziehung', 'Eher sachlich, aber emotional beeinflusst'],
              ['Physische Komponente', 'Ja, vorhanden'],
              ['Logistik', 'Aufwendig, da mehrere kleine Lager und viele Transporte'],
              ['Konkurrenz', 'Viele Konkurrenten, harter Kampf'],
              ['Preisgestaltung', 'Vom Markt beeinflusst']
            ]
          },
          {
            type: 'table',
            title: 'Kriterien der Differenzierung: Investitionsgüter',
            headers: ['Kriterium', 'Beschreibung'],
            rows: [
              ['Distributionsweg', 'In der Regel direkt'],
              ['Anzahl Stufen', 'Eher keine Stufen'],
              ['Entscheidungsträger', 'Viele möglich'],
              ['Kaufentscheid', 'Längere Abklärungen'],
              ['Art der Kundschaft', 'Firmen'],
              ['Anzahl Nachfragende', 'Eher wenige'],
              ['Volumen pro Auftrag', 'Gross, aber wenige Aufträge'],
              ['Verkaufsprozess', 'Schwierig, komplex'],
              ['Erklärungsbedarf', 'Vielfach sehr gross'],
              ['Kundenbeziehung', 'Sachlich'],
              ['Physische Komponente', 'Ja, vorhanden'],
              ['Logistik', 'Sehr aufwendig, Transport und evtl. Installationsarbeiten'],
              ['Konkurrenz', 'Genügend Konkurrenten, harter Kampf'],
              ['Preisgestaltung', 'Vom Markt beeinflusst']
            ]
          },
          {
            type: 'table',
            title: 'Kriterien der Differenzierung: Dienstleistungen',
            headers: ['Kriterium', 'Beschreibung'],
            rows: [
              ['Distributionsweg', 'In der Regel direkt'],
              ['Anzahl Stufen', 'Keine Stufen'],
              ['Entscheidungsträger', 'Mehrere möglich, je nach Angebot'],
              ['Kaufentscheid', 'Relativ spontan'],
              ['Art der Kundschaft', 'Private und Firmen'],
              ['Anzahl Nachfragende', 'Wenig bis viele, je nach Art des Angebots'],
              ['Volumen pro Auftrag', 'Klein bis gross, je nach Auftrag'],
              ['Verkaufsprozess', 'Einfach bis schwierig, je nach Angebot'],
              ['Erklärungsbedarf', 'Vielfach sehr gross und schwierig'],
              ['Kundenbeziehung', 'Persönlich, emotional beeinflusst'],
              ['Physische Komponente', 'Nein, nicht vorhanden'],
              ['Logistik', 'In der Regel wenig Aufwand'],
              ['Konkurrenz', 'Genügend Konkurrenten, harter Kampf'],
              ['Preisgestaltung', 'Kann frei ausgestaltet werden']
            ]
          },
          {
            type: 'methodenbox',
            title: 'Tabellarische Übersicht: Kriterien nach Güterarten',
            content: '1. Wann und wofür setzen Sie diese Methode ein? Diese Methode kann bei der Erstellung der Organisation eingesetzt werden, um verschiedene Anforderungen miteinander vergleichen zu können. 2. Was erhalten Sie als Ergebnis? Das Ergebnis ist eine Übersicht, die aufzeigt, wo die prägnanten Unterschiede zu finden sind. 3. Was beachten Sie bei den Kriterien nach Güterarten beim Entscheid? Das Resultat muss bezüglich Bedeutung hinterfragt werden. Nicht jeder Unterschied beeinflusst die Entscheidung gleich stark.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Konsumgüter', def: 'Güter für die persönliche/private Verwendung. Gebrauch und Verbrauch, Massengüter, Vertrieb über den Handel (B2C).'},
              {term: 'Investitionsgüter', def: 'Güter zur Erstellung anderer Marktleistungen. Inkl. Produktionsgüter, Vertrieb direkt (B2B).'},
              {term: 'Dienstleistungen', def: 'Immaterielle, vergängliche Leistungen. Persönlich oder unpersönlich erbracht, meist direkt vertrieben.'},
              {term: 'Gebrauchsgüter', def: 'Güter, die über längere Zeit genutzt werden (z.B. Zahnbürste, Werkzeugmaschine).'},
              {term: 'Verbrauchsgüter', def: 'Güter, die bei der Nutzung verbraucht werden (z.B. Zahnpasta, Schmierstoffe).'},
              {term: 'Produktionsgüter', def: 'Unterkategorie der Investitionsgüter: Produktionsmittel, -stoffe, Zusatz- und Hilfsstoffe.'},
              {term: 'Güterarten', def: 'Hierarchische Einteilung: Wirtschaftliche vs. freie Güter, materielle vs. immaterielle Güter.'},
              {term: 'Tabellarische Darstellung', def: 'Methode zum Vergleich von Kriterien verschiedener Güterarten in einer Übersicht.'}
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Es sind nicht die Güter selbst, die für die Klassifizierung sorgen, sondern vielmehr deren Verwendung.',
              'Konsumgüter: viele kleine Kunden, Massengeschäft, indirekt über Handel (B2C).',
              'Investitionsgüter: wenige grosse Kunden, hoher Beratungsaufwand, direkt (B2B).',
              'Dienstleistungen: immateriell, persönlich oder unpersönlich, meist direkt.',
              'Konsum- und Investitionsgüter sind meist materiell (physisch fassbar), Dienstleistungen sind immateriell.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'In der Volkswirtschaft spricht man von <strong>drei Güterarten</strong>.',
              '<strong>Konsumgüter</strong> (Gebrauch und Verbrauch) werden von Privatpersonen konsumiert.',
              '<strong>Investitionsgüter</strong> (Gebrauch und Verbrauch) werden von Firmen für eine weitere Verwendung gekauft.',
              '<strong>Dienstleistungen</strong> (persönlich oder unpersönlich) werden von Privaten wie auch von Firmen bezogen.',
              'Konsum- und Investitionsgüter sind meist materiell (physisch fassbar). Dienstleistungen sind i.d.R. immateriell (nicht fassbar).',
              'Die Güter werden verschieden vertrieben (direkt und indirekt).'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 10: Spezialgebiete und Ausblick in der Distribution
    // ============================================================
    {
      id: 'ch10', num: 'Kapitel 10', title: 'Spezialgebiete und Ausblick in der Distribution',
      exercises: [
        // Ex 75
        {
          id: 75, type: 'text',
          q: 'Alternative Vertriebsformen',
          instruction: 'Definieren Sie den Begriff "alternative Vertriebsformen" und nennen Sie je drei Beispiele von "stationärem Verkauf" sowie drei Beispiele von "Besuchsverkauf".',
          questions: [{q:'Definition und Beispiele:', keywords:['alternativ','klassisch','detailhandel','convenience','factory','outlet','automaten','mobil','online','e-shop','selecta'], minKeywords:4}],
          tips: ['Alternativ = unterscheidet sich vom klassischen Detailhandel.','Stationär = fester Standort.','Besuchsverkauf = der Verkäufer kommt zum Kunden.'],
          reveal: ['Alternative Vertriebsform = unterscheidet sich für Konsumenten nachvollziehbar vom klassischen Einkaufsakt.','Stationär: Convenience-Shops, Factory-Outlets, SB-Shops (Automaten).','Besuchsverkauf: Mobile Verkaufsstellen, Online-Verkauf (E-Shop), Vertrieb über Automaten (z.B. Selecta).']
        },
        // Ex 76
        {
          id: 76, type: 'match',
          q: 'Detailhandelspanel',
          instruction: 'Ordnen Sie die Kanäle den Kategorien "Im Detailhandelspanel enthalten" oder "Nicht enthalten" zu.',
          pairs: [
            { l: 'Coop', r: 'Enthalten' },
            { l: 'Migros', r: 'Enthalten' },
            { l: 'Denner', r: 'Enthalten' },
            { l: 'Volg', r: 'Enthalten' },
            { l: 'Aldi', r: 'Nicht enthalten' },
            { l: 'Lidl', r: 'Nicht enthalten' },
            { l: 'Otto\'s', r: 'Nicht enthalten' },
            { l: 'Landi', r: 'Nicht enthalten' }
          ],
          options: ['Enthalten','Nicht enthalten'],
          tips: ['Schweizer Traditionsdetailhändler sind meist enthalten.','Internationale Discounter und Spezialhändler oft nicht.','Coop, Migros, Denner, Volg = enthalten.'],
          reveal: ['Enthalten: Coop, Migros, Denner, Volg.','Nicht enthalten: Aldi, Lidl, Otto\'s, Landi.']
        },
        // Ex 77
        {
          id: 77, type: 'text',
          q: 'LSVA',
          instruction: 'Was versteht man unter "LSVA"? Erklären Sie den Begriff, beschreiben Sie ihn und nennen Sie das Ziel dieser Steuer.',
          questions: [{q:'LSVA:', keywords:['leistungsabhängig','schwerverkehr','abgabe','unternehmen','strassenverkehr','belasten','verlagerung','güter','bahn','schiene'], minKeywords:4}],
          tips: ['LSVA = Abkürzung aus vier Wörtern.','Es ist eine Steuer für Schwerverkehr.','Ziel: Verlagerung auf die Schiene.'],
          reveal: ['LSVA = Leistungsabhängige Schwerverkehrsabgabe.','Sie wird bei allen Unternehmen erhoben, die durch ihre Geschäftstätigkeit den Strassenverkehr in der Schweiz belasten.','Ziel: Vermehrte Verlagerung der Güter auf die Bahn (Schiene).']
        },
        // Ex 78
        {
          id: 78, type: 'tf',
          q: 'RF: Spezialgebiete',
          statements: [
            {s:'Category Management ist die strategische Steuerung von Warengruppen als eigenständige Geschäftseinheiten.', c:true, feedback:'CM optimiert Warengruppen als eigenständige Business Units.'},
            {s:'Die LSVA fördert den Strassentransport.', c:false, feedback:'Die LSVA fördert die Verlagerung des Güterverkehrs auf die Bahn, nicht den Strassentransport.'},
            {s:'Alternative Vertriebsformen unterscheiden sich vom klassischen Detailhandel.', c:true, feedback:'Sie sind für Konsumenten nachvollziehbar anders als der klassische Einkaufsakt.'},
            {s:'Im Detailhandelspanel sind alle Kanäle der Schweiz enthalten.', c:false, feedback:'Nicht alle Kanäle sind enthalten - z.B. fehlen Aldi, Lidl, Otto\'s und Landi.'}
          ],
          tips: ['CM = Warengruppen als Business Units.','LSVA = Verlagerung auf Schiene.','Detailhandelspanel ≠ alle Kanäle.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - fördert Verlagerung auf Bahn.','Aussage 3: Richtig.','Aussage 4: Falsch - nicht alle Kanäle enthalten.']
        },
        // Ex 79
        {
          id: 79, type: 'mc',
          q: 'Zukunft der Distribution',
          instruction: 'Welcher Trend wird die Distribution in Zukunft am stärksten prägen?',
          options: ['Rückkehr zum reinen Ladenverkauf','Zunehmende Digitalisierung und Omnichannel-Strategien','Abschaffung aller Zwischenhändler','Nur noch B2B-Distribution'],
          answer: 1,
          tips: ['Die Digitalisierung verändert alles.','Omnichannel = alle Kanäle verknüpft.','Der Trend geht zu mehr Kanälen, nicht weniger.'],
          reveal: ['Die zunehmende Digitalisierung und Omnichannel-Strategien werden die Distribution am stärksten prägen.','Kunden erwarten nahtlose Erlebnisse über alle Kanäle hinweg.']
        },
        // Ex 80
        {
          id: 80, type: 'text',
          q: 'Gesetze und Vorschriften',
          instruction: 'Nennen Sie drei Gesetze oder Vorschriften, die für die Distribution in der Schweiz relevant sind.',
          questions: [{q:'Gesetze/Vorschriften:', keywords:['lebensmittelgesetz','umweltschutz','arbeitsgesetz','LSVA','strassenverkehr','zoll','wettbewerbsrecht','datenschutz','verbraucherschutz'], minKeywords:3}],
          tips: ['Denken Sie an Lebensmittelsicherheit.','Umweltschutzgesetze betreffen die Logistik.','Auch Arbeitsgesetze und LSVA sind relevant.'],
          reveal: ['Relevante Gesetze: 1. Lebensmittelgesetz (bei Lebensmitteldistribution), 2. Umweltschutzgesetz (Entsorgung, Transport), 3. LSVA (Schwerverkehrsabgabe), sowie Strassenverkehrsgesetz, Arbeitsgesetz, Wettbewerbsrecht.']
        }
      ],
      learningData: {
        title: 'Spezialgebiete und Ausblick in der Distribution',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'alternative Vertriebsformen aufzählen.',
              'Gesetze, die speziell die Distribution betreffen, nennen.',
              'Themen der Zukunft in Distribution und Logistik nennen.'
            ]
          },
          {
            type: 'concept',
            title: '10.1 Alternative Vertriebsformen',
            content: 'Eine Vertriebsform wird dann als "alternativ" bezeichnet, wenn sie sich für die Konsumentinnen und Konsumenten in irgendeiner nachvollziehbaren Art vom "klassischen" Einkaufsakt unterscheidet. Als klassisch wird der Vertrieb über den Detailhandel (ein- oder mehrstufig) angesehen. Alternative Vertriebsformen eröffnen den Anbietern neue Möglichkeiten und werden vielfach zusätzlich zu den bestehenden Kanälen eingesetzt. Sie gliedern sich in stationären Verkauf (Platzverkauf) und Besuchsverkauf (Feldverkauf).',
            highlight: 'Alternative Vertriebsformen unterscheiden sich vom klassischen Detailhandel und gliedern sich in stationären Verkauf und Besuchsverkauf.'
          },
          {
            type: 'table',
            title: 'Übersicht alternative Vertriebsformen',
            headers: ['Stationärer Verkauf (persönlich)', 'Stationärer Verkauf (unpersönlich)', 'Besuchsverkauf (persönlich)', 'Besuchsverkauf (unpersönlich)'],
            rows: [
              ['Convenience-Shops', 'SB-Shops (Automaten)', 'Mobile Verkaufsstellen', 'Online-Verkauf (E-Shop)'],
              ['Factory-Outlets', '', 'Tür-zu-Tür-Verkauf', 'Vertrieb über Automaten'],
              ['Secondhand-Läden', '', 'Partyverkauf', 'Versand (Heimzustelldienst)'],
              ['Lagerläden für Mitglieder', '', 'Vertrieb an Events', 'Homeshopping'],
              ['Kundenklubs', '', '', ''],
              ['Showroom', '', '', ''],
              ['Verkauf ab Bauernhof', '', '', ''],
              ['Wochenmärkte', '', '', ''],
              ['Messeverkauf', '', '', '']
            ]
          },
          {
            type: 'concept',
            title: '10.2 Detailhandelspanel',
            content: 'Im Detailhandelspanel von Nielsen (früher GfK) sind die massgeblichen Kanäle des Schweizer Lebensmitteldetailhandels aufgeführt (Migros, Coop, Denner etc.). Folgende Informationen sind im Panel enthalten: Umsatz/Absatz, Marktanteile, Distribution, Durchschnittspreis, Promotionsanteile und Sortimentstiefe/-breite. Nielsen führt keine physischen Erhebungen am POS durch. Die Kennzahlen sind alle auf Basis der Scanning-Abverkaufsdaten (an der Kasse im Detailhandel) errechnet.',
            highlight: 'Das Detailhandelspanel von Nielsen liefert Kennzahlen wie Umsatz, Marktanteile und Distribution basierend auf Scanning-Abverkaufsdaten.'
          },
          {
            type: 'svg',
            title: 'Distributionskennzahlen (numerisch vs. gewichtet)',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Distributionskennzahlen</text><text x="350" y="52" text-anchor="middle" font-size="12" fill="#94a3b8">Numerische vs. gewichtete Distribution</text><rect x="40" y="75" width="300" height="175" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="190" y="100" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">Numerische Distribution (ND)</text><text x="190" y="125" text-anchor="middle" font-size="12" fill="#64748b">Anzahl VS mit Produkt</text><line x1="100" y1="133" x2="280" y2="133" stroke="#ea580c" stroke-width="2"/><text x="190" y="150" text-anchor="middle" font-size="12" fill="#64748b">Anzahl VS total</text><text x="290" y="142" font-size="14" fill="#64748b">x 100</text><text x="190" y="180" text-anchor="middle" font-size="11" fill="#94a3b8">= Präsenz (Verbreitung)</text><text x="190" y="200" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Beispiel: 360 / 900 x 100 = ND 40</text><text x="190" y="225" text-anchor="middle" font-size="10" fill="#94a3b8">\"In wie vielen Läden ist das Produkt?\"</text><rect x="360" y="75" width="300" height="175" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/><text x="510" y="100" text-anchor="middle" font-size="15" font-weight="700" fill="#ea580c">Gewichtete Distribution (GD)</text><text x="510" y="125" text-anchor="middle" font-size="12" fill="#64748b">Umsatz der VS mit Produkt</text><line x1="420" y1="133" x2="600" y2="133" stroke="#ea580c" stroke-width="2"/><text x="510" y="150" text-anchor="middle" font-size="12" fill="#64748b">Gesamtumsatz Warengruppe</text><text x="610" y="142" font-size="14" fill="#64748b">x 100</text><text x="510" y="180" text-anchor="middle" font-size="11" fill="#94a3b8">= Umsatzbedeutung</text><text x="510" y="200" text-anchor="middle" font-size="11" fill="#ea580c" font-weight="600">Beispiel: 6 Mio / 12 Mio x 100 = GD 50</text><text x="510" y="225" text-anchor="middle" font-size="10" fill="#94a3b8">\"Wie wichtig sind diese Läden?\"</text><rect x="80" y="280" width="540" height="110" rx="14" fill="#fef2f2" stroke="#ea580c" stroke-width="1.5"/><text x="350" y="305" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">Interpretation</text><rect x="100" y="318" width="230" height="55" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="215" y="340" text-anchor="middle" font-size="11" fill="#166534" font-weight="600">GD > ND</text><text x="215" y="358" text-anchor="middle" font-size="10" fill="#166534">Produkt in umsatzstarken</text><text x="215" y="372" text-anchor="middle" font-size="10" fill="#166534">Verkaufsstellen gelistet</text><rect x="370" y="318" width="230" height="55" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/><text x="485" y="340" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="600">GD &lt; ND</text><text x="485" y="358" text-anchor="middle" font-size="10" fill="#991b1b">Produkt eher in kleinen,</text><text x="485" y="372" text-anchor="middle" font-size="10" fill="#991b1b">umsatzschwachen VS gelistet</text></svg>'
          },
          {
            type: 'keyterms',
            title: 'Distributionskennzahlen',
            terms: [
              {term: 'Distribution verkaufend numerisch', def: 'Prozentualer Anteil der Anzahl Verkaufsstellen, die mindestens eine Packung während vier Wochen verkauft haben.'},
              {term: 'Distribution verkaufend gewichtet', def: 'Prozentuale Umsatzbedeutung der verkaufenden Verkaufsstellen.'},
              {term: 'Distributionslücke', def: 'Differenz der 4-wöchentlichen Distribution zur durchschnittlichen Distribution.'}
            ]
          },
          {
            type: 'concept',
            title: '10.3 Category Management (CM)',
            content: 'Unter dem Begriff "Category Management" werden Ansätze einer kooperativen Zusammenarbeit zwischen Industrie und Handel zusammengefasst. Das wesentliche Merkmal ist die Steuerung von Warengruppen als strategische Geschäftseinheiten (SGE). Oberstes Ziel des CM, sowohl der Hersteller wie auch des Handels, ist die Förderung von Umsatz und Gewinn durch höhere Kundenzufriedenheit. Das "Neue" dieses Ansatzes ist die Zuordnung von Produkten zu Warengruppen aus Sicht der Verbraucher. CM kann erst konsequent betrieben werden, seit eine effiziente Kundenorientierung durch die Vernetzung der Informationen mittels ECR möglich ist.',
            highlight: 'Category Management = kooperative Zusammenarbeit zwischen Industrie und Handel. Warengruppen werden aus Verbrauchersicht gebildet.'
          },
          {
            type: 'concept',
            title: '10.4 Gesetze und Vorschriften',
            content: 'Die Distribution wird in einigen Bereichen durch gesetzliche Vorgaben tangiert (z.B. Lebensmittelgesetz, LMG). Relevante Gesetze umfassen: Bauordnungsrecht und Baupolizeirecht (Einfluss auf Immobilien und Brandschutz), Bundesgesetz über den Umweltschutz/USG (Entsorgungslogistik und Verpackung), Bundesgesetz über den Schutz vor gefährlichen Stoffen/ChemG (Giftgesetz: Transport von Gütern). Speziell relevant für die Logistik sind Lkw-Gesetze und -Vorschriften: Verordnung über die Beförderung gefährlicher Güter (SDR), Fahrverbot an Sonn- und Feiertagen, Nachtfahrverbot, Gewichtslimiten (40t, kombinierter Verkehr 44t) und Kabotageverbot (Binnentransporte).',
            highlight: 'Gesetze wie Umweltschutzgesetz, Lebensmittelgesetz und Lkw-Vorschriften tangieren die Distribution direkt.'
          },
          {
            type: 'concept',
            title: 'LSVA',
            content: 'Seit 2001 wird in der Schweiz die neue Verkehrssteuer LSVA (Leistungsabhängige Schwerverkehrsabgabe) erhoben. Die Durchführung wurde dem Zoll übergeben. Sie ersetzt die bisherige "Schwerverkehrsabgabe". Die LSVA führt zu einer Mehrbelastung des Schwerverkehrs nach dem Verursacherprinzip. Sie wird bei denjenigen Unternehmen erhoben, die durch ihre Geschäftstätigkeit den Strassenverkehr in der Schweiz belasten. Das angestrebte Ziel ist eine vermehrte Verlagerung der Güter auf die Bahn. Die Steuer errechnet sich aus: Massgebliches Gewicht des Fahrzeugs, Tarifstufe (Emissionskategorie) und gefahrene km in der Schweiz.',
            highlight: 'LSVA = Leistungsabhängige Schwerverkehrsabgabe seit 2001. Ziel: Verlagerung des Güterverkehrs auf die Bahn.'
          },
          {
            type: 'concept',
            title: '10.5 Die Distribution in der Zukunft',
            content: 'Die Digitalisierung wird die Abläufe in der Distribution weiter verändern. Wichtige Zukunftstechnologien sind: Cargo sous terrain (CST) -- ein unterirdisches Tunnelsystem für Güterverkehr in der Schweiz ab ca. 2031; Drohnen -- flexibler, unabhängiger und ökologischer Transport, v.a. für dringende oder schwer erreichbare Sendungen; Roboterfahrzeuge -- autonome Lieferfahrzeuge auf der Strasse; 3-D-Printer -- Vor-Ort-Produktion, die lange Transportwege und Importkosten vermeidet; und neue Energieträger -- Elektrizität (Batterieantrieb), Wasserstoff (Brennstoffzellen) und Flüssiggas.',
            highlight: 'Zukunftstechnologien: Cargo sous terrain (CST), Drohnen, Roboterfahrzeuge, 3-D-Printer, alternative Energieträger.'
          },
          {
            type: 'concept',
            title: '10.5.1 Cargo sous terrain (CST)',
            content: 'CST beabsichtigt, ein neues, einzigartiges Logistiksystem zu bauen, das ab 2031 die Logistik in der Schweiz revolutionieren soll. Es handelt sich um ein Logistikprojekt der Zukunft, das insbesondere aus Sicht der Umweltentlastung, der Nachhaltigkeit, der Energieersparnis und der Verkehrsentlastung für die ganze Schweizer Volkswirtschaft von Interesse ist. Cargo sous terrain hat zum Ziel, ein unterirdisches Tunnelsystem in der Schweiz zu bauen. Elektrisch angetriebene Radfahrzeuge mit Induktionsschiene fahren mit einer konstanten Geschwindigkeit von 30 km/h durch den dreispurigen Tunnel. National- und Ständerat haben in der Schlussabstimmung eindeutig für das Bundesgesetz über den unterirdischen Gütertransport (UGüTG) gestimmt.',
            highlight: 'CST = unterirdisches Tunnelsystem für Güterverkehr mit elektrischen Fahrzeugen bei 30 km/h. Politische Grundlage seit 2021.'
          },
          {
            type: 'concept',
            title: '10.5.2 Drohnen in der Logistik',
            content: 'Drohnen versprechen, die Welt der Logistik nachhaltig zu verändern. Die Vorteile der unbemannten Luftfahrzeuge liegen klar auf der Hand. Pilotprojekte haben gezeigt, dass die Nutzung von Transportdrohnen längst nicht mehr in ferner Zukunft liegt. Mit Drohnen sind Transporte flexibler, unabhängiger von der Verkehrslage und ökologischer als ein Kurier auf der Strasse. Die Schweizerische Post leistete weltweit Pionierarbeit in der Drohnenlogistik. Als eines der ersten Unternehmen setzte sie von 2017 bis 2022 Drohnen für den Transport von Laborproben zwischen Spitälern und Laboren ein.',
            highlight: 'Drohnen ermöglichen flexiblen, verkehrsunabhängigen und ökologischen Transport. Die Schweizerische Post war Pionierin (2017-2022, Laborproben).'
          },
          {
            type: 'concept',
            title: '10.5.3-4 Roboterfahrzeuge und 3-D-Printer',
            content: 'Die fortschreitende Automatisierung/Roboterfahrzeuge erfordert kontinuierlich neue Lösungen im Logistikumfeld. In der Intralogistik innerhalb der Unternehmen sind diese schon längst im Einsatz. Vollständig automatische Fahrzeuge sollen den Verkehr der Zukunft vereinfachen und sicherer machen. 3-D-Druck wird die Logistik in den kommenden Jahren massiv verändern. Naheliegend ist der Einsatz in der Ersatzteillogistik. Es wird immer mehr Bereiche geben, in denen 3-D-Druck finanziell attraktiv sein wird. Flexibilität und Geschwindigkeit sind weitere Vorteile, die 3-D-Druck in der Logistik verschaffen kann. Zudem ermöglicht der Einsatz von 3-D-Druckern eine Vor-Ort-Produktion, wodurch lange Transportwege sowie Importkosten vermieden werden.',
            highlight: 'Roboterfahrzeuge: autonome Logistik im Innen- und Aussenbereich. 3-D-Druck: Vor-Ort-Produktion, Ersatzteillogistik, Wegfall von Transportwegen.'
          },
          {
            type: 'concept',
            title: '10.5.5 Entwicklung der Energieträger',
            content: 'Als Zukunftstechnologien in der Logistik werden zurzeit Elektrizität, Flüssiggas (kurzfristig) und Wasserstoff (mittel-/langfristig) angesehen. Die Entwicklung bei der Elektrizität, d.h. beim Batterieantrieb, ist rasant, die Infrastruktur wird laufend aufgerüstet (E-Tankstellen). Beim Wasserstoff (Brennstoffzellen) geht es zögerlicher vorwärts. Es gibt zurzeit in der Schweiz nur 12 Tankstellen. Flüssiggas ist zurzeit keine Alternative, da nach Energien gesucht wird, bei denen die Schweiz nicht abhängig ist vom Ausland.',
            highlight: 'Energieträger der Zukunft: Elektrizität (Batterieantrieb, rasante Entwicklung), Wasserstoff (langfristig, noch wenig Infrastruktur), Flüssiggas (keine echte Alternative).'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Alternative Vertriebsformen', def: 'Vertriebsformen, die sich vom klassischen Detailhandel unterscheiden (stationärer Verkauf und Besuchsverkauf).'},
              {term: 'Category Management (CM)', def: 'Kooperative Zusammenarbeit zwischen Industrie und Handel. Steuerung von Warengruppen als strategische Geschäftseinheiten.'},
              {term: 'Detailhandelspanel', def: 'Marktforschungsinstrument von Nielsen mit Kennzahlen des Schweizer Lebensmitteldetailhandels.'},
              {term: 'LSVA', def: 'Leistungsabhängige Schwerverkehrsabgabe seit 2001. Ziel: Verlagerung auf die Bahn.'},
              {term: 'Cargo sous terrain (CST)', def: 'Geplantes unterirdisches Tunnelsystem für Güterverkehr in der Schweiz ab ca. 2031.'},
              {term: 'Drohnen', def: 'Unbemannte Luftfahrzeuge für flexiblen, ökologischen Transport in der Logistik.'},
              {term: 'Roboterfahrzeuge', def: 'Autonome Fahrzeuge für den Gütertransport, in der Intralogistik bereits im Einsatz.'},
              {term: '3-D-Printer', def: 'Ermöglichen Vor-Ort-Produktion und vermeiden lange Transportwege. Einsatz v.a. in der Ersatzteillogistik.'},
              {term: 'Batterieantrieb', def: 'Elektrizität als Energieträger für Transportfahrzeuge, rasante Entwicklung der Infrastruktur.'},
              {term: 'Wasserstoff', def: 'Brennstoffzellen als mittel-/langfristiger Energieträger. In der Schweiz noch wenig Infrastruktur.'}
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Alternative Vertriebsformen ergänzen die klassischen Kanäle und erschliessen neue Zielgruppen.',
              'Das Detailhandelspanel von Nielsen liefert wichtige Distributionskennzahlen (numerisch, gewichtet, Distributionslücke).',
              'Category Management ordnet Produkte aus Verbrauchersicht in Warengruppen.',
              'LSVA belastet den Schwerverkehr nach Verursacherprinzip -- Ziel: Verlagerung auf die Bahn.',
              'Zukunftstechnologien: CST (unterirdisch), Drohnen, Roboterfahrzeuge, 3-D-Druck, neue Energieträger.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Alternative Vertriebsformen</strong> ermöglichen den Unternehmen die Erschliessung neuer Zielgruppen (z.B. E-Shop bringt jüngere Kundensegmente).',
              'Im <strong>Detailhandelspanel von Nielsen</strong> (früher GfK) sind die massgeblichen Kanäle des Schweizer Lebensmitteldetailhandels aufgeführt (Migros, Coop, Denner usw.).',
              '<strong>Category Management (CM)</strong> ist ein neuer Begriff für Warengruppenmanagement und wird auch von den Konsumentinnen und Konsumenten wahrgenommen.',
              'In der Distribution, speziell in der Logistik, gibt es spezifische <strong>Gesetze und Vorschriften</strong>, die zu beachten sind.',
              'Die Zukunft der Distribution wird stark durch die <strong>Digitalisierung</strong> beeinflusst. Themen sind <strong>Cargo sous terrain (CST), Drohnen</strong> und <strong>Roboterfahrzeuge, 3-D-Printer</strong> in der Logistik sowie die <strong>Entwicklung der Energieträger</strong>.'
            ]
          }
        ]
      }
    }
  ],

  // ============================================================
  // GLOSSARY
  // ============================================================
  glossary: [
    {term: 'Distribution', def: 'Verfügbarmachung der Marktleistung (Produkt oder Dienstleistung) für die Nachfragenden. Umschreibt sowohl die Aufgabe als auch die oberste Zielsetzung.'},
    {term: 'Distributionskanal', def: 'Weg, über den ein Produkt vom Hersteller zum Endkunden gelangt (direkt, indirekt oder Multichannel).'},
    {term: 'Distributionslogistik', def: 'Organisation der physischen Warenverteilung vom Hersteller bis zum Endkunden, inkl. Lager, Transport und Informationsfluss.'},
    {term: 'Direktvertrieb', def: '0-stufige Distribution: Hersteller verkauft direkt an den Endkunden ohne Zwischenhändler.'},
    {term: 'Indirekter Vertrieb', def: '1- bis 3-stufige Distribution über den Handel (Grosshandel, Detailhandel) an den Endkunden.'},
    {term: 'Mehrkanalvertrieb', def: 'Nutzung mehrerer Distributionskanäle gleichzeitig, um verschiedene Kundensegmente zu erreichen.'},
    {term: 'Omnichannel', def: 'Nahtlose Verknüpfung aller Vertriebskanäle (online und offline) für ein einheitliches Kundenerlebnis.'},
    {term: 'E-Commerce', def: 'Elektronischer Handel: Kauf und Verkauf von Waren und Dienstleistungen über das Internet.'},
    {term: 'Plattformökonomie', def: 'Geschäftsmodell, das auf digitalen Plattformen basiert und Anbieter und Nachfrager zusammenbringt (z.B. Amazon, Zalando).'},
    {term: 'Fulfillment', def: 'Gesamtheit aller Aktivitäten zur Auftragsabwicklung: Bestellung, Verpackung, Versand, Retouren.'},
    {term: 'Absatzmittler', def: 'Unternehmen, die als Zwischenhändler zwischen Hersteller und Endkunde fungieren (Gross- und Detailhandel).'},
    {term: 'Grosshandel', def: 'Handelsunternehmen, das Waren in grossen Mengen einkauft und an Detailhändler oder gewerbliche Abnehmer weiterverkauft.'},
    {term: 'Detailhandel', def: 'Einzelhandel: Verkauf von Waren direkt an den Endkonsumenten in kleinen Mengen.'},
    {term: 'Franchising', def: 'Vertriebssystem, bei dem ein Franchisegeber einem Franchisenehmer gegen Gebühr das Recht einräumt, sein Geschäftskonzept zu nutzen.'},
    {term: 'Vertikale Integration', def: 'Zusammenschluss von Unternehmen auf verschiedenen Stufen der Wertschöpfungskette (z.B. Hersteller kauft Händler).'},
    {term: 'Horizontale Integration', def: 'Zusammenschluss von Unternehmen auf der gleichen Stufe der Wertschöpfungskette (z.B. Fusion zweier Grosshändler).'},
    {term: 'Supply Chain', def: 'Gesamte Wertschöpfungskette von der Rohstoffgewinnung über die Produktion bis zur Auslieferung an den Endkunden.'},
    {term: 'Logistik', def: 'Planung, Steuerung und Kontrolle des Material-, Informations- und Wertflusses entlang der gesamten Supply Chain.'},
    {term: 'Lagerhaltung', def: 'Aufbewahrung von Waren in einem Lager bis zur Auslieferung oder Weiterverarbeitung.'},
    {term: 'Kommissionierung', def: 'Zusammenstellung von Teilmengen aus einem Gesamtbestand nach Kundenaufträgen.'},
    {term: 'Letzte Meile', def: 'Letzte Etappe der Lieferkette: Transport vom letzten Verteilzentrum bis zum Endkunden.'},
    {term: 'Category Management', def: 'Strategische Steuerung von Warengruppen als eigenständige Geschäftseinheiten zur Optimierung des Sortiments.'},
    {term: 'Trade Marketing', def: 'Marketingmassnahmen des Herstellers, die sich an den Handel richten, um die Zusammenarbeit zu optimieren.'},
    {term: 'Listung', def: 'Aufnahme eines Produkts in das Sortiment eines Handelsunternehmens.'},
    {term: 'Konditionenpolitik', def: 'Festlegung von Rabatten, Boni, Zahlungs- und Lieferbedingungen im Handel.'},
    {term: 'ECR (Efficient Consumer Response)', def: 'Ganzheitliche Betrachtung der Wertschöpfungskette. Logistikdaten werden zum Zwecke der Marktforschung aufbereitet und zur nachfrageorientierten Sortimentsoptimierung am POS eingesetzt.'},
    {term: 'POS (Point of Sale)', def: 'Ort des Verkaufs, an dem der Kunde die Ware kauft (z.B. Ladengeschäft, Online-Shop).'},
    {term: 'Warenwirtschaftssystem', def: 'IT-System zur Steuerung und Kontrolle des Warenflusses: Bestellung, Lagerhaltung, Verkauf, Statistik.'},
    {term: 'Numerische Distribution', def: 'Anteil der Verkaufsstellen, die ein bestimmtes Produkt führen, an der Gesamtzahl der Verkaufsstellen (in Prozent). Misst die Präsenz.'},
    {term: 'Gewichtete Distribution', def: 'Umsatzanteil der Verkaufsstellen, die ein Produkt führen, am Gesamtumsatz der Warengruppe (in Prozent). Misst die Umsatzbedeutung.'}
  ]
};
