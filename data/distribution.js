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
          items: ['Strategische Distribution','Physische Distribution','Supply Chain Management','Modell der Stufen','Träger der Distribution'],
          options: ['Die Bestimmung des Absatzwegs insgesamt','Die Festlegung der Infrastruktur in der Logistik','Die Steuerung der Wertschöpfungskette','Der Vertriebsweg eines Produkts über den Handel','Die Abteilungen, die Distributionsaufgaben wahrnehmen'],
          correct: ['Die Bestimmung des Absatzwegs insgesamt','Die Festlegung der Infrastruktur in der Logistik','Die Steuerung der Wertschöpfungskette','Der Vertriebsweg eines Produkts über den Handel','Die Abteilungen, die Distributionsaufgaben wahrnehmen'],
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
          segments: ['1. ',{blank:true, answer:['Strategische Distribution'], width:220},' | 2. ',{blank:true, answer:['Physische Distribution'], width:220},' | 3. ',{blank:true, answer:['Standortwahl'], width:180}],
          tips: ['Die drei Instrumente bilden das Distributionssystem.','Ein Instrument befasst sich mit dem Absatzweg.','Ein Instrument befasst sich mit dem Ort der Warenübergabe.'],
          reveal: ['1. Strategische Distribution (Bestimmung des Absatzwegs).','2. Physische Distribution (Festlegung der Logistik-Infrastruktur).','3. Standortwahl (Evaluation des Orts der Warenübergabe).']
        },
        // Ex 4 — Dreistufige Distribution (Rep 4, S.25)
        {
          id: 4, type: 'match',
          q: 'Dreistufige Distribution',
          instruction: 'Ordnen Sie die Stufen der dreistufigen Distribution am Beispiel eines Weins aus Frankreich zu.',
          items: ['1. Stufe','2. Stufe','3. Stufe','Endstation'],
          options: ['Importfirma (in der Schweiz)','Grosshandel','Detailhandel','Konsument/-in'],
          correct: ['Importfirma (in der Schweiz)','Grosshandel','Detailhandel','Konsument/-in'],
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
            {s:'Distribution ist das dritte "P" (Place) im Marketingmix.', correct:true, feedback:'Richtig. Die 4 Ps sind Product, Price, Place, Promotion.'},
            {s:'Bei einer 0-stufigen Distribution verkauft der Hersteller direkt an den Endkunden.', correct:true, feedback:'0-stufig = kein Zwischenhändler = Direktvertrieb.'},
            {s:'Der Informationsfluss umfasst nur den Transport der physischen Ware.', correct:false, feedback:'Der Informationsfluss umfasst Anfragen, Offerten, Bestellungen und Rechnungen. Der Warenfluss umfasst den physischen Transport.'},
            {s:'Supply Chain Management steuert nur die Logistik innerhalb eines Unternehmens.', correct:false, feedback:'SCM steuert die gesamte Wertschöpfungskette von der Rohstoffgewinnung bis zum Endkunden.'}
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
          correct: 2,
          tips: ['Es gibt fünf Distributionsflüsse.','Alle fliessen zwischen Produktion und Konsumation.','Personal gehört nicht zu den Distributionsflüssen.'],
          reveal: ['Die fünf Distributionsflüsse sind: Warenfluss, Geldfluss, Informationsfluss, Eigentumsfluss und Kommunikationsfluss.','Personalfluss ist kein Distributionsfluss.']
        },
        // Ex 8 — Lückentext: Stufenmodell
        {
          id: 8, type: 'fill',
          q: 'Lückentext: Stufenmodell',
          instruction: 'Ergänzen Sie die Lücken zum Stufenmodell der Distribution.',
          segments: ['Bei der ',{blank:true, answer:['0-stufigen','nullstufigen'], width:140},' Distribution verkauft der Hersteller direkt an den Endkunden (= ',{blank:true, answer:['Direktvertrieb','direkte Distribution'], width:180},'). Bei der indirekten Distribution durchläuft das Produkt ',{blank:true, answer:['1 bis 3','1-3','ein bis drei'], width:100},' Zwischenstufen. Als Stufe gilt, wenn das ',{blank:true, answer:['Eigentum'], width:120},' auf eine Drittfirma wechselt.'],
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
          correct: 1,
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
          items: ['Grossverteiler','Discounter','Online'],
          options: ['Migros, Coop','Denner, Aldi Schweiz, Lidl Schweiz','Digitec.ch, Zalando.ch, Bergfreunde.de'],
          correct: ['Migros, Coop','Denner, Aldi Schweiz, Lidl Schweiz','Digitec.ch, Zalando.ch, Bergfreunde.de'],
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
            {s:'Beim Direktvertrieb verkauft der Hersteller ohne Zwischenhändler an den Endkunden.', correct:true, feedback:'Direkt = 0-stufig, kein Zwischenhändler.'},
            {s:'Multichannel bedeutet, dass nur ein einziger Vertriebskanal genutzt wird.', correct:false, feedback:'Multichannel = mehrere Kanäle gleichzeitig (direkt und indirekt).'},
            {s:'Die Wahl des Distributionswegs ist der wichtigste strategische Entscheid.', correct:true, feedback:'Dies bestimmt alle weiteren Distributionsentscheide.'},
            {s:'Duale Distribution und Multichannel sind unterschiedliche Konzepte.', correct:false, feedback:'Duale Distribution wird häufig als Multichanneling bezeichnet.'}
          ],
          tips: ['Direkt = ohne Zwischenhändler.','Multi = mehrere.','Dual = zweifach = Multichannel.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Multi = mehrere Kanäle.','Aussage 3: Richtig.','Aussage 4: Falsch - gleicher Begriff.']
        },
        // Ex 15 — Distributionswege zuordnen (Tabelle/Check)
        {
          id: 15, type: 'table',
          q: 'Distributionswege zuordnen',
          instruction: 'Ordnen Sie die Beispiele dem richtigen Distributionsweg zu.',
          headers: ['Direkt','Indirekt','Beispiel'],
          rows: [
            {label:'Firmeneigener Onlineshop', correct:0},
            {label:'Verkauf über Migros', correct:1},
            {label:'Werksverkauf (Factory Outlet)', correct:0},
            {label:'Verkauf über Fachhandel', correct:1},
            {label:'Eigener Aussendienst', correct:0},
            {label:'Verkauf über Grosshändler', correct:1}
          ],
          tips: ['Direkt = Hersteller verkauft selbst.','Indirekt = über Zwischenhändler.','Online-Shop des Herstellers = direkt.'],
          reveal: ['Direkt: Firmeneigener Onlineshop, Werksverkauf, Eigener Aussendienst.','Indirekt: Migros, Fachhandel, Grosshändler.']
        },
        // Ex 16 — Lückentext: Strategische Distribution
        {
          id: 16, type: 'fill',
          q: 'Lückentext: Strategische Distribution',
          instruction: 'Ergänzen Sie die Lücken zur strategischen Distribution.',
          segments: ['Der wichtigste strategische Entscheid ist die Bestimmung des ',{blank:true, answer:['Distributionswegs','Vertriebswegs'], width:180},'. Zur Wahl stehen: ',{blank:true, answer:['Direktvertrieb'], width:150},', Vertrieb über den ',{blank:true, answer:['Handel'], width:120},' oder eine ',{blank:true, answer:['Kombination'], width:140},' davon (Multichannel).'],
          tips: ['Es gibt drei Optionen für den Distributionsweg.','Die Kombination heisst auch Multichannel oder duale Distribution.'],
          reveal: ['Der wichtigste Entscheid = Bestimmung des Distributionswegs.','Optionen: Direktvertrieb, Handel (indirekt), Kombination (Multichannel).']
        },
        // Ex 17 — MC: Strategische Distribution
        {
          id: 17, type: 'mc',
          q: 'MC: Strategische Distribution',
          instruction: 'Welche Aussage zur dualen Distribution ist korrekt?',
          options: ['Duale Distribution nutzt ausschliesslich digitale Kanäle.','Duale Distribution bedeutet Bearbeitung der Nachfragenden sowohl direkt als auch indirekt.','Duale Distribution ist ein veraltetes Konzept.','Duale Distribution bezieht sich nur auf den B2B-Bereich.'],
          correct: 1,
          tips: ['Dual = zweifach.','Es geht um direkte UND indirekte Kanäle.','Der Begriff wird auch als Multichanneling verwendet.'],
          reveal: ['Duale Distribution = Bearbeitung sowohl direkt (eigene Organe) als auch indirekt (über den Handel).','Wird häufig als Multichanneling bezeichnet.']
        }
      ],
      learningData: null
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
          items: ['1. Analyse','2. Distributionsziele','3. Strategien','4. Massnahmen','5. Budget','6. Kontrolle'],
          options: ['Ausgangslage mit Interpretation (Fazit) erstellen','Quantitative und qualitative Soll-Zustände aus Vorgaben ableiten','Grundsätzliche Ausrichtung der Distribution auf den Markt','Tätigkeiten zur Zielerreichung bestimmen','Potenzielle Kosten aller Aktivitäten errechnen','Zielerreichung (Punkte 2 und 3) kontrollieren'],
          correct: ['Ausgangslage mit Interpretation (Fazit) erstellen','Quantitative und qualitative Soll-Zustände aus Vorgaben ableiten','Grundsätzliche Ausrichtung der Distribution auf den Markt','Tätigkeiten zur Zielerreichung bestimmen','Potenzielle Kosten aller Aktivitäten errechnen','Zielerreichung (Punkte 2 und 3) kontrollieren'],
          tips: ['Das Distributionskonzept folgt dem allgemeinen Konzeptraster.','Es beginnt immer mit der Analyse.','Die Kontrolle steht am Ende.'],
          reveal: ['1. Analyse: Ausgangslage mit Fazit.','2. Distributionsziele: Soll-Zustände ableiten.','3. Strategien: Ausrichtung auf den Markt.','4. Massnahmen: Tätigkeiten bestimmen.','5. Budget: Kosten errechnen.','6. Kontrolle: Zielerreichung kontrollieren.']
        },
        // Ex 19 — Distributionsorgane und -techniken (Rep 11, S.61)
        {
          id: 19, type: 'match',
          q: 'Distributionsorgane und -techniken',
          instruction: 'Ordnen Sie die Beispiele den Kategorien Distributionsorgan oder Distributionstechnik zu.',
          items: ['Aussendienstmitarbeitende (ADM)','Besuche bei der Kundschaft','Verkaufsmitarbeitende im eigenen Shop (VKM)','Ladenverkauf','Administrative Mitarbeitende IT (IDM)','Onlineshop'],
          options: ['Distributionsorgan','Distributionstechnik'],
          correct: ['Distributionsorgan','Distributionstechnik','Distributionsorgan','Distributionstechnik','Distributionsorgan','Distributionstechnik'],
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
          correct: 1,
          tips: ['Differenzierung = Unterscheidung/Anpassung.','Es geht um verschiedene Marktsegmente.','Nicht alle Kunden werden gleich bedient.'],
          reveal: ['Distributionsdifferenzierung = Die unterschiedliche Gestaltung der Distribution je nach Marktsegment.','Bei der Distributionsdifferenzierung ist nur eine einzige Entscheidung möglich (exklusiv, selektiv oder intensiv).']
        },
        // Ex 23 — RF: Distributionskonzept
        {
          id: 23, type: 'tf',
          q: 'RF: Distributionskonzept',
          statements: [
            {s:'Das Distributionskonzept umfasst sechs Schritte: Analyse, Ziele, Strategien, Massnahmen, Budget, Kontrolle.', correct:true, feedback:'Dies entspricht dem allgemeinen Konzeptraster.'},
            {s:'Die numerische Distribution misst die Umsatzbedeutung der Verkaufsstellen.', correct:false, feedback:'Die numerische Distribution misst die Präsenz (Anteil VS). Die gewichtete Distribution misst die Umsatzbedeutung.'},
            {s:'Ein hoher Distributionsgrad bedeutet, dass das Produkt in vielen Verkaufsstellen erhältlich ist.', correct:true, feedback:'Je höher der numerische Distributionsgrad, desto breiter die Verfügbarkeit.'},
            {s:'Die Distributionsrationalisierung betrifft nur den Transport.', correct:false, feedback:'Sie umfasst: Auftragswesen, Transportverpackung, Transportpolitik, Lagerpolitik und Entsorgungspolitik.'}
          ],
          tips: ['ND = Präsenz, GD = Umsatzbedeutung.','Rationalisierung betrifft mehrere Bereiche.','Das Konzept folgt dem 6-Schritte-Raster.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - ND misst Präsenz, GD misst Umsatzbedeutung.','Aussage 3: Richtig.','Aussage 4: Falsch - betrifft mehrere Bereiche.']
        },
        // Ex 24 — Konzeptelemente zuordnen
        {
          id: 24, type: 'match',
          q: 'Konzeptelemente zuordnen',
          instruction: 'Ordnen Sie die Elemente dem richtigen Bereich des Distributionskonzepts zu.',
          items: ['Distributionsorgane bestimmen','Numerische Distribution festlegen','Distributionsbindung verhandeln','Kanalwahl treffen','Distributionsfeld definieren'],
          options: ['Wer verkauft?','Wie breit verteilen?','Vertragliche Bindung','Welcher Kanal?','Wo verkaufen?'],
          correct: ['Wer verkauft?','Wie breit verteilen?','Vertragliche Bindung','Welcher Kanal?','Wo verkaufen?'],
          tips: ['Organe = Personen, die verkaufen.','Distributionsgrad = Breite der Verteilung.','Bindung = vertragliche Vereinbarungen.'],
          reveal: ['Distributionsorgane = Wer verkauft? (ADM, VKM, IDM).','Numerische Distribution = Wie breit verteilen?','Distributionsbindung = Vertragliche Bindung.','Kanalwahl = Welcher Kanal?','Distributionsfeld = Wo verkaufen?']
        },
        // Ex 25 — Lückentext: Distributionsgrad
        {
          id: 25, type: 'fill',
          q: 'Lückentext: Distributionsgrad',
          instruction: 'Ergänzen Sie die Definitionen zum Distributionsgrad.',
          segments: ['Die ',{blank:true, answer:['numerische','Numerische'], width:140},' Distribution misst die ',{blank:true, answer:['Präsenz'], width:120},' eines Produkts (Anteil der Verkaufsstellen). Die ',{blank:true, answer:['gewichtete','Gewichtete'], width:140},' Distribution misst die ',{blank:true, answer:['Umsatzbedeutung'], width:160},' (Umsatzanteil der VS).'],
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
      learningData: null
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
          segments: ['Ein Pop-up-Store ist jeweils nur ',{blank:true, answer:['kurzzeitig','zeitlich begrenzt','temporär'], width:160},' an einem bestimmten Ort geöffnet. Neben dem Aspekt Verkauf können ',{blank:true, answer:['Bekanntheit','Bekanntheit und Imagebildung'], width:200},' im Fokus stehen.'],
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
            {s:'Beim Grosshandel kauft der Endkonsument direkt ein.', correct:false, feedback:'Der Grosshandel verkauft an den Detailhandel oder gewerbliche Abnehmer, nicht an Endkonsumenten.'},
            {s:'Merchandising umfasst alle Massnahmen zur Warenpräsentation am POS.', correct:true, feedback:'Merchandising = Warenpräsentation und -pflege am Point of Sale.'},
            {s:'Franchising ist eine Form der direkten Distribution.', correct:false, feedback:'Franchising ist eine Form der indirekten Distribution (über Franchisenehmer).'},
            {s:'Der Detailhandel (Einzelhandel) verkauft direkt an den Endkonsumenten.', correct:true, feedback:'Detail = Einzelhandel = Verkauf an Endkonsumenten.'}
          ],
          tips: ['Grosshandel verkauft an Wiederverkäufer.','Merchandising = Warenpräsentation.','Franchising = indirekt, da über Partner.'],
          reveal: ['Aussage 1: Falsch - Grosshandel verkauft an Detailhandel.','Aussage 2: Richtig.','Aussage 3: Falsch - Franchising = indirekt.','Aussage 4: Richtig.']
        },
        // Ex 32
        {
          id: 32, type: 'match',
          q: 'Handelsformen zuordnen',
          instruction: 'Ordnen Sie die Handelsformen der richtigen Kategorie zu.',
          items: ['Migros','Denner','Digitec.ch','Manor','Landi'],
          options: ['Grossverteiler','Discounter','Online-Händler','Warenhaus','Fachmarkt'],
          correct: ['Grossverteiler','Discounter','Online-Händler','Warenhaus','Fachmarkt'],
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
          correct: 1,
          tips: ['Gross = grosse Mengen.','Grosshandel ≠ Endkonsument.','Grosshandel = Zwischenhändler.'],
          reveal: ['Der Grosshandel kauft Waren in grossen Mengen ein und verkauft sie an Detailhändler oder gewerbliche Abnehmer weiter.']
        },
        // Ex 35
        {
          id: 35, type: 'fill',
          q: 'Lückentext: Handel',
          instruction: 'Ergänzen Sie die Lücken zum Handel in der Distribution.',
          segments: ['Der ',{blank:true, answer:['Grosshandel'], width:140},' kauft grosse Mengen ein und verkauft an den ',{blank:true, answer:['Detailhandel','Einzelhandel'], width:150},' weiter. Der Detailhandel verkauft direkt an den ',{blank:true, answer:['Endkonsumenten','Konsumenten'], width:160},'. ',{blank:true, answer:['Franchising'], width:130},' ist ein Vertriebssystem, bei dem ein Franchisegeber einem Franchisenehmer das Recht einräumt, sein Geschäftskonzept zu nutzen.'],
          tips: ['Gross = an Wiederverkäufer.','Detail = an Endkonsumenten.','Franchising = Geschäftskonzept-Lizenz.'],
          reveal: ['Grosshandel -> Detailhandel -> Endkonsument.','Franchising = Lizenzierung des Geschäftskonzepts.']
        }
      ],
      learningData: null
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
          items: ['Variable Kosten (Vereinbarung pro Einheit)','Abhängigkeit von externen Stellen','Kleinere Kapitalbindung in der Infrastruktur','Wertschöpfungsverlust (Teil der Gewinnmarge geht verloren)','Entlastung der Infrastruktur von nebensächlichen Tätigkeiten','Kleinere Kontrollmöglichkeit'],
          options: ['Vorteil Outsourcing','Nachteil Outsourcing'],
          correct: ['Vorteil Outsourcing','Nachteil Outsourcing','Vorteil Outsourcing','Nachteil Outsourcing','Vorteil Outsourcing','Nachteil Outsourcing'],
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
            {s:'Die physische Distribution umfasst Lager, Transport und Informationsfluss.', correct:true, feedback:'Dies sind die drei Hauptbereiche der physischen Distribution.'},
            {s:'Cross Docking bedeutet, dass Ware im Lager lange gelagert wird.', correct:false, feedback:'Cross Docking bedeutet Umschlag ohne Lagerung: Ware wird direkt vom Wareneingang zum Warenausgang umgeleitet.'},
            {s:'Just in Time bedeutet Lieferung genau zum benötigten Zeitpunkt.', correct:true, feedback:'JIT = Produktion und Lieferung genau dann, wenn die Ware benötigt wird.'},
            {s:'Outsourcing der Transportlogistik hat nur Vorteile.', correct:false, feedback:'Es gibt auch Nachteile: Abhängigkeit, Wertschöpfungsverlust, kleinere Kontrollmöglichkeit.'}
          ],
          tips: ['Physische Distribution = Lager + Transport + Informationsfluss.','Cross Docking = ohne Lagerung.','JIT = zum richtigen Zeitpunkt.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Cross Docking = Umschlag ohne Lagerung.','Aussage 3: Richtig.','Aussage 4: Falsch - auch Nachteile.']
        },
        // Ex 41
        {
          id: 41, type: 'match',
          q: 'Logistikbegriffe zuordnen',
          instruction: 'Ordnen Sie die Logistikbegriffe den Beschreibungen zu.',
          items: ['Cross Docking','Just in Time','Vendor Managed Inventory','Outsourcing','Rückruf'],
          options: ['Umschlag ohne Lagerung','Lieferung genau zum benötigten Zeitpunkt','Lieferant verwaltet Kundenbestand','Auslagerung von Tätigkeiten an Dritte','Rücknahme fehlerhafter Produkte'],
          correct: ['Umschlag ohne Lagerung','Lieferung genau zum benötigten Zeitpunkt','Lieferant verwaltet Kundenbestand','Auslagerung von Tätigkeiten an Dritte','Rücknahme fehlerhafter Produkte'],
          tips: ['Cross = quer durch (ohne zu lagern).','JIT = just = genau.','VMI = Vendor = Lieferant managed = verwaltet.'],
          reveal: ['Cross Docking = Umschlag ohne Lagerung.','JIT = Lieferung zum benötigten Zeitpunkt.','VMI = Lieferant verwaltet Kundenbestand.','Outsourcing = Auslagerung an Dritte.','Rückruf = Rücknahme fehlerhafter Produkte.']
        },
        // Ex 42
        {
          id: 42, type: 'fill',
          q: 'Bereiche der physischen Distribution',
          instruction: 'Ergänzen Sie die drei Bereiche der physischen Distribution.',
          segments: ['Die drei Bereiche sind: 1. ',{blank:true, answer:['Lager','Lagerhaltung'], width:150},' (Lagerung der konsumbereiten Produkte), 2. ',{blank:true, answer:['Transport'], width:130},' (Auslieferung an die Kundschaft), 3. ',{blank:true, answer:['Informationsfluss'], width:170},' (Bestimmung der IT in der Logistik).'],
          tips: ['Denken Sie an die drei Säulen der physischen Distribution.','Alle drei sind nötig für die Warenverteilung.'],
          reveal: ['1. Lager (Lagerhaltung der Produkte).','2. Transport (Auslieferung an die Kundschaft).','3. Informationsfluss (IT in der Logistik / Auftragswesen).']
        },
        // Ex 43
        {
          id: 43, type: 'mc',
          q: 'Entsorgungslogistik',
          instruction: 'Was gehört NICHT zur Entsorgungslogistik?',
          options: ['Recycling von Verpackungsmaterial','Rücknahme defekter Produkte','Neukundenakquisition','Entsorgung von Restbeständen'],
          correct: 2,
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
          correct: 1,
          tips: ['Es geht um ein Gleichgewicht.','Serviceniveau und Kosten müssen ausbalanciert werden.','Weder Überbestände noch Lieferengpässe sind erwünscht.'],
          reveal: ['Hauptziel: Sicherstellung des vereinbarten Serviceniveaus bei gleichzeitiger Optimierung der Kosten.']
        }
      ],
      learningData: null
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
            {s:'Affiliate-Marketing erlaubt die Nutzung bestehender Vertriebskanäle anderer Websites.', correct:true, feedback:'Affiliate-Marketing = Vertrieb über Partner-Websites gegen Provision.'},
            {s:'GTIN-Strichcodes können mehr Informationen speichern als QR-Codes.', correct:false, feedback:'QR-Codes können mehr Informationen speichern als GTIN-Strichcodes.'},
            {s:'ECR dient der nachfrageorientierten Sortimentsoptimierung am POS.', correct:true, feedback:'ECR wertet Logistikdaten für die Marktforschung aus und optimiert das Sortiment.'},
            {s:'EDI erfordert einen hohen Anteil an manuellen Eingriffen.', correct:false, feedback:'EDI ermöglicht gerade ein Minimum an manuellen Eingriffen durch Automatisierung.'}
          ],
          tips: ['Affiliate = Partnerschaft.','QR-Codes sind leistungsfähiger als Strichcodes.','EDI = minimale manuelle Eingriffe.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - QR > GTIN.','Aussage 3: Richtig.','Aussage 4: Falsch - EDI minimiert manuelle Eingriffe.']
        },
        // Ex 51
        {
          id: 51, type: 'match',
          q: 'Digitale Technologien zuordnen',
          instruction: 'Ordnen Sie die Technologien ihrer Beschreibung zu.',
          items: ['GTIN','QR-Code','RFID','EDI','ECR'],
          options: ['Strichcode für Warenkennzeichnung','Zweidimensionaler Code mit mehr Informationen','Funk-Chip (Transponder) für Warenerfassung','Elektronischer Datenaustausch zwischen Partnern','Ganzheitliche Wertschöpfungskettenbetrachtung'],
          correct: ['Strichcode für Warenkennzeichnung','Zweidimensionaler Code mit mehr Informationen','Funk-Chip (Transponder) für Warenerfassung','Elektronischer Datenaustausch zwischen Partnern','Ganzheitliche Wertschöpfungskettenbetrachtung'],
          tips: ['GTIN = der bekannte Strichcode.','QR = Quick Response, mehr Daten als Strichcode.','RFID = Radio Frequency Identification.'],
          reveal: ['GTIN = Strichcode.','QR-Code = mehr Informationen als Strichcode.','RFID = Funk-Chip (Transponder).','EDI = elektronischer Datenaustausch.','ECR = ganzheitliche Wertschöpfungskette.']
        },
        // Ex 52
        {
          id: 52, type: 'mc',
          q: 'Affiliate-Marketing',
          instruction: 'Was ist Affiliate-Marketing?',
          options: ['Direktverkauf über eigene Filialen','Nutzung bestehender Vertriebskanäle anderer Websites für den eigenen Vertrieb','Ausschliesslich Social-Media-Werbung','Verkauf über Grosshändler'],
          correct: 1,
          tips: ['Affiliate = Partner/Verbundener.','Es geht um die Nutzung fremder Kanäle.','Der Partner erhält eine Provision.'],
          reveal: ['Affiliate-Marketing = Nutzung bestehender Vertriebskanäle anderer Websites für den eigenen Vertrieb. Der Affiliate-Partner erhält eine Provision für vermittelte Verkäufe.']
        },
        // Ex 53
        {
          id: 53, type: 'fill',
          q: 'Lückentext: Digitalisierung',
          instruction: 'Ergänzen Sie die Lücken zur Digitalisierung in der Distribution.',
          segments: ['Um die Logistikkosten tief zu halten, werden u.a. ',{blank:true, answer:['elektronische Hilfsmittel'], width:200},' eingesetzt. Diese erlauben einen hohen ',{blank:true, answer:['Automatisierungsgrad'], width:200},'. Die Basis bildet der Einsatz von ',{blank:true, answer:['GTIN'], width:100},'-Strichcodes im Lager sowie an der Kasse im Detailhandel.'],
          tips: ['Elektronische Hilfsmittel reduzieren manuelle Arbeit.','Automatisierung spart Kosten.','GTIN ist der Standard-Strichcode.'],
          reveal: ['Elektronische Hilfsmittel ermöglichen hohen Automatisierungsgrad.','GTIN-Strichcodes sind die Basis im Lager und an der Kasse.']
        }
      ],
      learningData: null
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
            {s:'Die Wahl eines Logistikstandorts hat unmittelbare Auswirkung auf das ganze Unternehmen.', correct:true, feedback:'Standortentscheide sind langfristig und betreffen das ganze Unternehmen.'},
            {s:'Standortqualität wird ausschliesslich aus Kundensicht beurteilt.', correct:false, feedback:'Standortqualität wird sowohl aus Kundensicht als auch unter Berücksichtigung anderer Faktoren (Steuern, Infrastruktur etc.) beurteilt.'},
            {s:'Die 10-10-10-Methode eignet sich gut für strategische Standortentscheidungen.', correct:true, feedback:'Die Methode betrachtet Auswirkungen nach 10 Minuten, 10 Monaten und 10 Jahren.'},
            {s:'Psychologische Marktnähe bezieht sich auf die geografische Distanz zum Kunden.', correct:false, feedback:'Psychologische Marktnähe bezieht sich auf das Gefühl der Nähe (Sprache, Kultur, Verständnis).'}
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
          correct: 2,
          tips: ['Standortkriterien sind objektiv messbar oder bewertbar.','Persönliche Vorlieben sind keine Standortkriterien.'],
          reveal: ['Die Lieblingsfarbe des Geschäftsführers ist kein relevantes Standortkriterium.','Relevante Kriterien: Verkehrsanbindung, Mietkosten, Kundenfrequenz, Sichtbarkeit etc.']
        },
        // Ex 59
        {
          id: 59, type: 'match',
          q: 'Standorttypen',
          instruction: 'Ordnen Sie die Standorttypen ihrer Beschreibung zu.',
          items: ['Verkaufsstelle','Auslieferungslager','Zentrallager','Showroom'],
          options: ['Ort, wo Endkunden direkt kaufen','Lager nahe beim Kunden für schnelle Lieferung','Hauptlager mit grosser Kapazität','Ausstellungsraum ohne direkten Verkauf'],
          correct: ['Ort, wo Endkunden direkt kaufen','Lager nahe beim Kunden für schnelle Lieferung','Hauptlager mit grosser Kapazität','Ausstellungsraum ohne direkten Verkauf'],
          tips: ['VS = Point of Sale.','Auslieferungslager = nahe beim Kunden.','Showroom = nur Ausstellung, kein Verkauf.'],
          reveal: ['Verkaufsstelle = Endkunden kaufen direkt.','Auslieferungslager = nahe beim Kunden.','Zentrallager = grosse Kapazität.','Showroom = Ausstellung ohne direkten Verkauf.']
        },
        // Ex 60
        {
          id: 60, type: 'fill',
          q: 'Lückentext: Standort',
          instruction: 'Ergänzen Sie die Lücken zur Standortwahl.',
          segments: ['Die Standortbewertung kann sowohl aus ',{blank:true, answer:['subjektiver','qualitativer'], width:150},' (qualitativer) wie auch aus ',{blank:true, answer:['finanzieller','quantitativer'], width:150},' (quantitativer) Sicht erfolgen. Insbesondere die Wahl aus Sicht des Marketings beeinflusst die ',{blank:true, answer:['Standortqualität'], width:160},' aus Kundensicht.'],
          tips: ['Zwei Perspektiven: qualitativ und quantitativ.','Marketing = qualitative/subjektive Sicht.','Finanzen = quantitative/finanzielle Sicht.'],
          reveal: ['Subjektive (qualitative) und finanzielle (quantitative) Sicht.','Marketing beeinflusst die Standortqualität aus Kundensicht.']
        }
      ],
      learningData: null
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
            {s:'Beim direkten Export wechselt das Eigentum nach der Grenze.', correct:true, feedback:'Direkt = Fakturierung an Kunden im Ausland, Eigentum nach der Grenze.'},
            {s:'Der Export kann nur direkt erfolgen.', correct:false, feedback:'Export kann sowohl direkt als auch indirekt vorgenommen werden.'},
            {s:'Im Export tragen die Organe teilweise eigene Namen wie Exportkommissionäre oder Distributoren.', correct:true, feedback:'Im Export gibt es spezielle Organe wie Tochtergesellschaft, Exportkommissionäre/-makler, Distributoren.'},
            {s:'Deutschland ist der grösste Handelspartner der Schweiz.', correct:true, feedback:'Dies ist korrekt.'}
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
          items: ['Tochtergesellschaft','Exportkommissionär','Lokaler Distributor','Eigene Niederlassung'],
          options: ['Eigenes Organ im Ausland','Externer Vermittler','Externer Händler im Zielmarkt','Eigenes Organ im Ausland'],
          correct: ['Eigenes Organ im Ausland','Externer Vermittler','Externer Händler im Zielmarkt','Eigenes Organ im Ausland'],
          tips: ['Tochtergesellschaft und Niederlassung = eigene Organe.','Kommissionäre und Makler = externe Vermittler.','Distributoren = externe Händler.'],
          reveal: ['Eigene Organe: Tochtergesellschaft, Niederlassung.','Externe: Exportkommissionär (Vermittler), Distributor (Händler im Zielmarkt).']
        },
        // Ex 67
        {
          id: 67, type: 'mc',
          q: 'MC: Export',
          instruction: 'Welche Aussage zum indirekten Export ist korrekt?',
          options: ['Das Eigentum wechselt nach der Landesgrenze.','Der Anbieter fakturiert auf einen Kunden im Inland und das Eigentum wechselt vor der Grenze.','Es gibt keine Zolldeklarationen.','Der Anbieter muss immer eine Tochtergesellschaft gründen.'],
          correct: 1,
          tips: ['Indirekt = vor der Grenze.','Der Abnehmer im Inland übernimmt den Export.','Tochtergesellschaft = direkt.'],
          reveal: ['Indirekter Export: Fakturierung auf Kunden im Inland, Eigentum wechselt vor der Grenze. Der Abnehmer im Inland exportiert die Ware selbst.']
        }
      ],
      learningData: null
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
          segments: ['In der Volkswirtschaft spricht man von drei Güterarten: 1. ',{blank:true, answer:['Konsumgüter'], width:150},' (Gebrauch und Verbrauch werden von Privatpersonen konsumiert), 2. ',{blank:true, answer:['Investitionsgüter'], width:170},' (Gebrauch und Verbrauch werden von Firmen für eine weitere Verwendung gekauft), 3. ',{blank:true, answer:['Dienstleistungen'], width:170},' (persönlich oder unpersönlich, werden von Privaten wie auch von Firmen bezogen).'],
          tips: ['Konsumgüter = für Privatpersonen.','Investitionsgüter = für Firmen/Unternehmen.','Dienstleistungen = für beide.'],
          reveal: ['1. Konsumgüter (Privatpersonen).','2. Investitionsgüter (Firmen, weitere Verwendung).','3. Dienstleistungen (Private und Firmen).']
        },
        // Ex 71
        {
          id: 71, type: 'table',
          q: 'Tabelle: IG vs. DL Distribution',
          instruction: 'Ordnen Sie die Merkmale den Güterarten zu (Investitionsgüter vs. Dienstleistungen).',
          headers: ['Investitionsgüter','Dienstleistungen','Merkmal'],
          rows: [
            {label:'Langfristiger Kaufentscheid', correct:0},
            {label:'Relativ spontaner Kaufentscheid', correct:1},
            {label:'Sachliche Ansprache', correct:0},
            {label:'Emotional beeinflusste Kommunikation', correct:1},
            {label:'Grosses Volumen pro Auftrag', correct:0},
            {label:'Klein bis gross je nach Auftrag', correct:1}
          ],
          tips: ['IG = sachlich, langfristig, grosse Aufträge.','DL = spontaner, emotional, variabel.','Denken Sie an den Kaufprozess.'],
          reveal: ['IG: Langfristiger Kaufentscheid, sachliche Ansprache, grosses Volumen.','DL: Spontaner Kaufentscheid, emotionale Kommunikation, variables Volumen.']
        },
        // Ex 72
        {
          id: 72, type: 'tf',
          q: 'RF: Güterarten',
          statements: [
            {s:'Konsumgüter werden i.d.R. indirekt über den Handel vertrieben.', correct:true, feedback:'Konsumgüter = Massengeschäft = indirekt über den Handel.'},
            {s:'Investitionsgüter werden meist direkt vertrieben.', correct:true, feedback:'IG = wenige grosse Kunden = direkter Vertrieb.'},
            {s:'Dienstleistungen sind materielle Güter.', correct:false, feedback:'Dienstleistungen sind immaterielle Güter (nicht fassbar).'},
            {s:'Formulardruck (Lieferscheine auf Papier) ist ein Investitionsgut.', correct:true, feedback:'Es ist ein materielles Gut, das von Firmen für eine weitere Verwendung gekauft wird (wirtschaftliches, materielles Investitionsgut, Verbrauchsgut).'}
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
          correct: 1,
          tips: ['IG = wenige, grosse Kunden.','Die Beziehung zum einzelnen Kunden ist zentral.','Beratung ist bei IG viel intensiver.'],
          reveal: ['Bei Investitionsgütern ist der Beratungsaufwand im Vertrieb und die Bedeutung einzelner Kunden viel grösser als bei Konsumgütern.']
        },
        // Ex 74
        {
          id: 74, type: 'match',
          q: 'Kriterien der Differenzierung',
          instruction: 'Ordnen Sie die Beschreibungen den richtigen Güterarten zu.',
          items: ['Viele kleine Kunden, Massengeschäft','Wenige grosse Kunden, hoher Beratungsaufwand','Immateriell, persönlich oder unpersönlich'],
          options: ['Konsumgüter','Investitionsgüter','Dienstleistungen'],
          correct: ['Konsumgüter','Investitionsgüter','Dienstleistungen'],
          tips: ['KG = Masse.','IG = Einzelkunden, Beratung.','DL = immateriell.'],
          reveal: ['Konsumgüter = viele kleine Kunden, Masse.','Investitionsgüter = wenige grosse Kunden, Beratung.','Dienstleistungen = immateriell.']
        }
      ],
      learningData: null
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
          items: ['Coop','Migros','Denner','Volg','Aldi','Lidl','Otto\'s','Landi'],
          options: ['Enthalten','Nicht enthalten'],
          correct: ['Enthalten','Enthalten','Enthalten','Enthalten','Nicht enthalten','Nicht enthalten','Nicht enthalten','Nicht enthalten'],
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
            {s:'Category Management ist die strategische Steuerung von Warengruppen als eigenständige Geschäftseinheiten.', correct:true, feedback:'CM optimiert Warengruppen als eigenständige Business Units.'},
            {s:'Die LSVA fördert den Strassentransport.', correct:false, feedback:'Die LSVA fördert die Verlagerung des Güterverkehrs auf die Bahn, nicht den Strassentransport.'},
            {s:'Alternative Vertriebsformen unterscheiden sich vom klassischen Detailhandel.', correct:true, feedback:'Sie sind für Konsumenten nachvollziehbar anders als der klassische Einkaufsakt.'},
            {s:'Im Detailhandelspanel sind alle Kanäle der Schweiz enthalten.', correct:false, feedback:'Nicht alle Kanäle sind enthalten - z.B. fehlen Aldi, Lidl, Otto\'s und Landi.'}
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
          correct: 1,
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
      learningData: null
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
