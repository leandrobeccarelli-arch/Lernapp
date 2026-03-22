window.BOOK_DATA = {
  id: 'digitales-marketing',
  title: 'Digitales Marketing für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Digitales Marketing',
  author: 'Michael Klaas',
  year: 2020,
  pages: 166,
  color: '#0891b2',
  chapters: [
    // ============================================================
    // KAPITEL 1: Digitales Marketing verstehen (S.8-24)
    // ============================================================
    {
      id: 'ch1', num: 'Kapitel 1', title: 'Digitales Marketing verstehen',
      exercises: [
        {
          id: 1, type: 'text',
          q: 'Digitales Marketing als Teildisziplin',
          instruction: 'Beschreiben Sie in einigen kurzen Sätzen, warum das digitale Marketing als Teildisziplin des Marketings zu verstehen ist und nicht umgekehrt.',
          questions: [
            { q: 'Warum ist digitales Marketing eine Teildisziplin?', keywords: ['teildisziplin','klassisch','konzept','ergänz','technolog','digital','kanal','erweit'], minKeywords: 3 }
          ],
          tips: [
            'Digitales Marketing steht nicht für sich allein.',
            'Es nutzt die gleichen Konzepte wie klassisches Marketing.',
            'Es erweitert den Marketingmix um digitale Kanäle.'
          ],
          reveal: [
            'Das Marketing als Kernfunktion deckt sämtliche Marketingmassnahmen ab, unabhängig davon, ob diese in der Offline- oder Online-Welt stattfinden.',
            'Das digitale Marketing nutzt die gleichen Konzepte und Vorgehensweisen, ist aber auf die Nutzung digitaler Technologien beschränkt.',
            'Es ist somit eine Anreicherung der klassischen Marketingbemühungen, nicht etwas Eigenständiges.'
          ]
        },
        {
          id: 2, type: 'text',
          q: 'Web 1.0 vs. Web 2.0',
          instruction: 'Was ist der Unterschied zwischen dem Web 1.0 und dem Web 2.0?',
          questions: [
            { q: 'Unterschied Web 1.0 und Web 2.0?', keywords: ['statisch','interag','produz','konsum','kommentar','social','inhalte','erstell','prosumer'], minKeywords: 3 }
          ],
          tips: [
            'Web 1.0 war vor allem statisch.',
            'Web 2.0 ermöglicht Interaktion und eigene Inhalte.',
            'Der Begriff Prosumer spielt hier eine Rolle.'
          ],
          reveal: [
            'Web 1.0 war revolutionär, machte Informationen weltweit zugänglich, aber es war nicht möglich zu interagieren.',
            'Das Web war sehr statisch, Internetseiten wurden konzipiert und nur selten angepasst.',
            'Web 2.0 wird das veränderte Internet genannt: User können nicht nur Inhalte anschauen, sondern auch selbst Inhalte produzieren (Prosumer).'
          ]
        },
        {
          id: 3, type: 'text',
          q: 'Beispiele für Web 2.0',
          instruction: 'Nennen Sie Beispiele von Anwendungen, die zum Web 2.0 zählen.',
          questions: [
            { q: 'Beispiele für Web 2.0?', keywords: ['blog','podcast','social media','kommentar','bewertung','facebook','twitter','instagram','youtube','wiki'], minKeywords: 3 }
          ],
          tips: [
            'Denken Sie an Plattformen, auf denen User selbst Inhalte erstellen.',
            'Blogs, Podcasts und Social Media sind typische Beispiele.',
            'Kommentarfunktionen auf Websites zählen ebenfalls dazu.'
          ],
          reveal: [
            'Blog (eine Art Tagebuch im Internet)',
            'Podcast (meistens Audio- oder Videobeiträge)',
            'Social Media (Facebook, Twitter etc.)',
            'Kommentarfunktion (User können kommentieren und sogar Bewertungen abgeben)'
          ]
        },
        {
          id: 4, type: 'mc',
          q: 'Erfolgsfaktoren im digitalen Marketing',
          instruction: 'Welches sind die 5 Erfolgsfaktoren im digitalen Marketing? Wählen Sie die richtigen Aussagen.',
          options: [
            'Zielgruppen verstehen.',
            'Digitales Marketing unabhängig vom klassischen Marketing planen.',
            'Seriosität in den Mittelpunkt stellen.',
            'Aufmerksamkeit erregen und Geschichten erzählen.',
            'Die richtige Sprache sprechen.',
            'Zielorientiert arbeiten.',
            'Messen, messen, messen.'
          ],
          correct: [0, 3, 4, 5, 6],
          multi: true,
          tips: [
            'Es sind genau 5 Erfolgsfaktoren.',
            'Sie beginnen beim Kunden und enden beim Messen.',
            'Digitales Marketing wird NICHT unabhängig vom klassischen Marketing geplant.'
          ],
          reveal: [
            'Die 5 Erfolgsfaktoren sind: 1) Zielgruppen verstehen, 2) Aufmerksamkeit erregen und Geschichten erzählen, 3) Die richtige Sprache sprechen, 4) Zielorientiert arbeiten, 5) Messen, messen, messen.',
            'Die Aussagen \u00abDigitales Marketing unabhängig planen\u00bb und \u00abSeriosität in den Mittelpunkt\u00bb sind keine Erfolgsfaktoren.'
          ]
        },
        {
          id: 5, type: 'match',
          q: 'Vorteile der digitalen Transformation',
          instruction: 'Ordnen Sie die vier Hauptvorteile der digitalen Transformation den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Datenauswertung', r: 'Systematische Auswertung grosser Datenmengen und Optimierung der Marketingmassnahmen' },
            { l: 'Interaktivität', r: 'Stärkere Möglichkeiten der Kundenbindung durch wechselseitige Kommunikation' },
            { l: 'Personalisierung', r: 'Höhere Akzeptanz der Botschaften bei den Zielgruppen durch individuelle Ansprache' },
            { l: 'Automatisierung', r: 'Effizienzsteigerung und Kostenreduktion durch automatisierte Prozesse' }
          ],
          options: [
            'Systematische Auswertung grosser Datenmengen und Optimierung der Marketingmassnahmen',
            'Stärkere Möglichkeiten der Kundenbindung durch wechselseitige Kommunikation',
            'Höhere Akzeptanz der Botschaften bei den Zielgruppen durch individuelle Ansprache',
            'Effizienzsteigerung und Kostenreduktion durch automatisierte Prozesse'
          ],
          tips: [
            'Die vier Vorteile sind: Datenauswertung, Interaktivität, Personalisierung, Automatisierung.',
            'Jeder Vorteil hat eine spezifische Wirkung auf das Marketing.'
          ],
          reveal: [
            'Datenauswertung: Systematische Auswertung grosser Datenmengen führt zur Optimierung.',
            'Interaktivität: Stärkere Kundenbindung durch wechselseitige Kommunikation.',
            'Personalisierung: Höhere Akzeptanz durch individuelle Ansprache.',
            'Automatisierung: Effizienzsteigerung und Kostenreduktion.'
          ]
        },
        {
          id: 6, type: 'match',
          q: 'Grundlegende Begriffe abgrenzen',
          instruction: 'Ordnen Sie die Begriffe den richtigen Definitionen zu.',
          pairs: [
            { l: 'Digitales Marketing', r: 'Teildisziplin des klassischen Marketings, ergänzt um digitale Technologien' },
            { l: 'E-Commerce', r: 'Elektronischer Handel - technische Systeme für den Online-Verkauf' },
            { l: 'Web 2.0', r: 'Das veränderte Internet, bei dem User auch selbst Inhalte produzieren können' }
          ],
          options: [
            'Teildisziplin des klassischen Marketings, ergänzt um digitale Technologien',
            'Elektronischer Handel - technische Systeme für den Online-Verkauf',
            'Das veränderte Internet, bei dem User auch selbst Inhalte produzieren können'
          ],
          tips: [
            'Diese drei Begriffe werden oft verwechselt, sind aber nicht dasselbe.',
            'E-Commerce bezieht sich auf den Handel, nicht auf Marketing.'
          ],
          reveal: [
            'Digitales Marketing = Teildisziplin des klassischen Marketings mit digitalen Technologien.',
            'E-Commerce = Elektronischer Handel, technische Systeme für Online-Verkauf.',
            'Web 2.0 = User können Inhalte nicht nur konsumieren, sondern auch produzieren.'
          ]
        },
        {
          id: 7, type: 'tf',
          q: 'Digitale vs. klassische Massnahmen',
          instruction: 'Sind die folgenden Aussagen zu digitalen Massnahmen richtig oder falsch?',
          statements: [
            { s: 'Digitale Massnahmen haben kürzere Planungshorizonte als klassische.', c: true },
            { s: 'Die Kundenbeziehungen im digitalen Marketing sind weniger vielfältig als im klassischen Marketing.', c: false },
            { s: 'Die Reaktionszeiten im digitalen Marketing sind schneller als im klassischen Marketing.', c: true },
            { s: 'Digitales Marketing nutzt grundlegend andere Konzepte als klassisches Marketing.', c: false },
            { s: 'Die Instrumente im digitalen Marketing sind vielfältiger als im klassischen Marketing.', c: true }
          ],
          tips: [
            'Digitales Marketing ist eine Erweiterung, kein Ersatz.',
            'Es nutzt die gleichen Grundkonzepte, erweitert sie aber.'
          ],
          reveal: [
            'Kürzere Planungshorizonte: Richtig - digital ist agiler.',
            'Weniger vielfältige Beziehungen: Falsch - sie sind vielfältiger.',
            'Schnellere Reaktionszeiten: Richtig.',
            'Andere Konzepte: Falsch - gleiche Konzepte, erweitert um digitale Technologien.',
            'Vielfältigere Instrumente: Richtig.'
          ]
        },
        {
          id: 8, type: 'tf',
          q: 'Bereitschaft für digitales Marketing',
          instruction: 'Welche Aussagen zur Bereitschaft für digitales Marketing sind korrekt?',
          statements: [
            { s: 'Es muss Aktivitäten und Initiativen im Unternehmen zum Thema digitale Transformation geben.', c: true },
            { s: 'Digitales Marketing kann unabhängig vom klassischen Marketing betrieben werden.', c: false },
            { s: 'Das Unternehmen sollte Technologien nutzen, um sich online mit Kunden auszutauschen.', c: true },
            { s: 'Eine Kundendatenbank mit guter Datenqualität ist hilfreich für zielgerichtete Massnahmen.', c: true },
            { s: 'Es reicht, eine Website zu haben - weitere digitale Präsenz ist nicht nötig.', c: false }
          ],
          tips: [
            'Digitales Marketing muss in die Unternehmensstrategie eingebettet sein.',
            'Die Checkliste prüft die Bereitschaft des Unternehmens.'
          ],
          reveal: [
            'Initiativen zur digitalen Transformation: Richtig.',
            'Unabhängig betreiben: Falsch - muss integriert werden.',
            'Technologien für Kundenaustausch: Richtig.',
            'Gute Datenqualität: Richtig.',
            'Nur Website: Falsch - Kundengewinnung ist ein mehrstufiger Prozess.'
          ]
        },
        {
          id: 9, type: 'text',
          q: 'Bedeutung des digitalen Marketings argumentieren',
          instruction: 'Daniel Schmid möchte die Geschäftsleitung davon überzeugen, dass das Unternehmen auf digitales Marketing setzen soll. Nennen Sie mindestens zwei Gründe, weshalb sich digitales Marketing etabliert hat.',
          questions: [
            { q: 'Zwei Gründe für digitales Marketing:', keywords: ['daten','interaktiv','personal','automat','kosten','kund','reichweite','mess','effizienz','zielgrupp'], minKeywords: 3 }
          ],
          tips: [
            'Denken Sie an die vier Hauptvorteile der digitalen Transformation.',
            'Welche Argumente würden eine Geschäftsleitung überzeugen?'
          ],
          reveal: [
            'Systematische Auswertung grosser Datenmengen: Die Effektivität kann besser gemessen werden.',
            'Interaktive Kommunikation mit Kunden: Kunden können stärker einbezogen werden.',
            'Personalisierung: Marketing kann zielgerichteter ausgeführt werden.',
            'Automatisierung: Führt zu Kostenreduktion und höherer Effizienz.'
          ]
        },
        {
          id: 10, type: 'match',
          q: 'Chancen und Risiken des digitalen Marketings',
          instruction: 'Ordnen Sie die Aussagen als Chancen oder Risiken des digitalen Marketings zu.',
          pairs: [
            { l: 'Neue Märkte erschliessen', r: 'Chance' },
            { l: 'Negative Bewertungen verbreiten sich schnell', r: 'Risiko' },
            { l: 'Personalisierte Kundenansprache', r: 'Chance' },
            { l: 'Datenschutz-Anforderungen steigen', r: 'Risiko' }
          ],
          options: ['Chance', 'Risiko'],
          tips: [
            'Chancen eröffnen neue Möglichkeiten.',
            'Risiken stellen Herausforderungen dar.'
          ],
          reveal: [
            'Neue Märkte erschliessen = Chance: Digitales Marketing ermöglicht Zugang zu globalen Märkten.',
            'Negative Bewertungen = Risiko: Im Internet verbreiten sich negative Bewertungen schnell.',
            'Personalisierte Ansprache = Chance: Daten ermöglichen individuelle Kommunikation.',
            'Datenschutz = Risiko: Strenge Anforderungen an den Umgang mit Kundendaten.'
          ]
        }
      ],
      learningData: {
        title: 'Digitales Marketing verstehen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'erläutern, was die digitale Transformation ist und wie sie das Unternehmen beeinflusst.',
              'erklären, was man unter digitalem Marketing versteht.',
              'die Beziehung zwischen dem klassischen und dem digitalen Marketing beschreiben.',
              'Chancen, Risiken und Erfolgsfaktoren des digitalen Marketings erklären.'
            ]
          },
          {
            type: 'concept',
            title: '1.1 Die digitale Transformation im Marketing',
            content: 'Die Digitalisierung hat grosse Auswirkungen auf die Art und Weise, wie wir mit anderen kommunizieren, wie wir Unternehmen wahrnehmen und mit diesen interagieren. Die Eigenschaften der digitalen Medien wie die einfachere Auswertung von Massnahmen, die Interaktivität und die Möglichkeit der personalisierten Ansprache haben ganz neue Marketingmöglichkeiten geschaffen.',
            highlight: 'Die vier Hauptvorteile der digitalen Transformation für das Marketing: 1) Systematische Auswertung grosser Datenmengen, 2) Interaktivität in der Kommunikation, 3) Personalisierung von Marketingaktivitäten, 4) Automatisierung von Marketingaktivitäten.'
          },
          {
            type: 'svg',
            title: 'Die 4 Hauptvorteile der digitalen Transformation',
            svg: '<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Die 4 Hauptvorteile der digitalen Transformation für das Marketing</text><rect x="20" y="50" width="155" height="70" rx="10" fill="#0891b2"/><text x="97" y="78" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Datenauswertung</text><text x="97" y="95" text-anchor="middle" fill="#cffafe" font-size="8">Systematische Analyse</text><text x="97" y="108" text-anchor="middle" fill="#cffafe" font-size="8">grosser Datenmengen</text><rect x="190" y="50" width="155" height="70" rx="10" fill="#0e7490"/><text x="267" y="78" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Interaktivität</text><text x="267" y="95" text-anchor="middle" fill="#cffafe" font-size="8">Dialog statt</text><text x="267" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Einwegkommunikation</text><rect x="360" y="50" width="155" height="70" rx="10" fill="#155e75"/><text x="437" y="78" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Personalisierung</text><text x="437" y="95" text-anchor="middle" fill="#cffafe" font-size="8">Individuelle Ansprache</text><text x="437" y="108" text-anchor="middle" fill="#cffafe" font-size="8">pro Zielgruppe</text><rect x="530" y="50" width="150" height="70" rx="10" fill="#164e63"/><text x="605" y="78" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Automatisierung</text><text x="605" y="95" text-anchor="middle" fill="#cffafe" font-size="8">Effiziente Prozesse</text><text x="605" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Marketing Automation</text><rect x="120" y="140" width="460" height="28" rx="6" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/><text x="350" y="159" text-anchor="middle" fill="#164e63" font-size="10" font-weight="600">Digitales Marketing = Teildisziplin des klassischen Marketings + digitale Technologien</text></svg>'
          },
          {
            type: 'concept',
            title: '1.2 Grundlegende Begriffe',
            content: 'Im digitalen Marketing werden die drei Begriffe "digitales Marketing", "E-Commerce" und "Web 2.0" besprochen, die oft als Synonym verwendet werden, aber nicht das Gleiche bedeuten. Das Internet ermöglicht sowohl digitales Marketing als auch E-Commerce, wobei Web 2.0 und Social Media die technische Grundlage bilden.',
            highlight: 'Digitales Marketing ist eine Teildisziplin des klassischen Marketings. Es nutzt die gleichen Konzepte und Managementansätze, ergänzt diese aber um Elemente digitaler Technologien.'
          },
          {
            type: 'table',
            title: 'Digitales Marketing vs. klassisches Marketing',
            headers: ['Merkmal', 'Digitales Marketing', 'Klassisches Marketing'],
            rows: [
              ['Planungshorizonte', 'Kürzer, agiler', 'Länger, strukturierter'],
              ['Kundenbeziehungen', 'Vielfältiger, interaktiv', 'Weniger interaktiv'],
              ['Reaktionszeiten', 'Schneller', 'Langsamer'],
              ['Instrumente', 'Vielfältig, digital', 'Traditionell (Print, TV, Radio)'],
              ['Messbarkeit', 'Sehr gut messbar', 'Schwieriger messbar']
            ]
          },
          {
            type: 'svg',
            title: 'Die 5 Erfolgsfaktoren des digitalen Marketings',
            svg: '<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="dm-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Die 5 Erfolgsfaktoren des digitalen Marketings</text><rect x="10" y="50" width="120" height="55" rx="8" fill="#0891b2"/><text x="70" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Zielgruppen</text><text x="70" y="88" text-anchor="middle" fill="#cffafe" font-size="8">verstehen</text><line x1="135" y1="77" x2="148" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#dm-arr)"/><rect x="152" y="50" width="120" height="55" rx="8" fill="#0e7490"/><text x="212" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Aufmerksamkeit</text><text x="212" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Storytelling</text><line x1="277" y1="77" x2="290" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#dm-arr)"/><rect x="294" y="50" width="120" height="55" rx="8" fill="#155e75"/><text x="354" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Richtige Sprache</text><text x="354" y="88" text-anchor="middle" fill="#cffafe" font-size="8">online + offline</text><line x1="419" y1="77" x2="432" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#dm-arr)"/><rect x="436" y="50" width="120" height="55" rx="8" fill="#164e63"/><text x="496" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Zielorientiert</text><text x="496" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Call-to-Action</text><line x1="561" y1="77" x2="574" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#dm-arr)"/><rect x="578" y="50" width="112" height="55" rx="8" fill="#083344"/><text x="634" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Messen</text><text x="634" y="88" text-anchor="middle" fill="#cffafe" font-size="8">und optimieren</text><rect x="150" y="125" width="400" height="30" rx="6" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/><text x="350" y="145" text-anchor="middle" fill="#164e63" font-size="10" font-weight="600">Beginnt beim Kunden → endet bei der kontinuierlichen Optimierung</text></svg>'
          },
          {
            type: 'concept',
            title: '1.5 Erfolgsfaktoren des digitalen Marketings',
            content: 'Die fünf Erfolgsfaktoren des digitalen Marketings sind: 1) Zielgruppen verstehen (der Kunde ist Ausgangspunkt), 2) Aufmerksamkeit erregen und Geschichten erzählen (Storytelling), 3) Die richtige Sprache sprechen (online und offline gelten teilweise andere Regeln), 4) Zielorientiert arbeiten (jede Massnahme muss einen Call-to-Action enthalten), 5) Messen, messen, messen (und kontinuierlich optimieren).',
            highlight: 'Die 5 Erfolgsfaktoren: Zielgruppen verstehen, Aufmerksamkeit erregen und Geschichten erzählen, Die richtige Sprache sprechen, Zielorientiert arbeiten, Messen, messen, messen.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Digitales Marketing ist KEIN eigenständiges Marketing, sondern eine Teildisziplin des klassischen Marketings.',
              'Die 4 Hauptvorteile der digitalen Transformation: Datenauswertung, Interaktivität, Personalisierung, Automatisierung.',
              'Web 2.0 bedeutet: User können Inhalte nicht nur konsumieren, sondern auch selbst produzieren (Prosumer).',
              'E-Commerce ist NICHT gleichzusetzen mit digitalem Marketing - es bezieht sich auf elektronischen Handel.',
              'Die 5 Erfolgsfaktoren beginnen beim Kunden und enden beim Messen.',
              'Digitale Massnahmen unterscheiden sich durch: kürzere Planungshorizonte, vielfältigere Kundenbeziehungen, schnellere Reaktionszeiten, vielfältige Instrumente.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Digitale Transformation', def: 'Prozess der stetigen Weiterentwicklung digitaler Technologien, der Wirtschaft und Gesellschaft nachhaltig beeinflusst.'},
              {term: 'Digitales Marketing', def: 'Teildisziplin des klassischen Marketings, ergänzt um Elemente digitaler Technologien.'},
              {term: 'E-Commerce', def: 'Elektronischer Handel: Kauf und Verkauf von Waren und Dienstleistungen über das Internet.'},
              {term: 'Web 2.0', def: 'Das veränderte Internet: User konsumieren UND produzieren Inhalte (Prosumer).'},
              {term: 'Prosumer', def: 'Kunstwort aus Producer und Consumer — User erstellen und konsumieren Inhalte gleichzeitig.'},
              {term: 'Interaktivität', def: 'Möglichkeit des Dialogs zwischen Unternehmen und Kunden über digitale Kanäle.'},
              {term: 'Personalisierung', def: 'Individuelle Ansprache von Zielgruppen basierend auf deren Daten und Verhalten.'},
              {term: 'Marketing Automation', def: 'Automatisierung von Marketingprozessen durch Software zur Effizienzsteigerung.'}
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>digitale Transformation</strong> beschreibt den Prozess der stetigen Weiterentwicklung digitaler Technologien, der sowohl Wirtschaft als auch Gesellschaft nachhaltig beeinflusst.',
              'Das <strong>digitale Marketing</strong> ist eine Teildisziplin des klassischen Marketings. Es nutzt die gleichen Konzepte, ergänzt diese aber um Elemente digitaler Technologien und erweitert den Marketingmix um digitale Kanäle.',
              'Die fünf <strong>Erfolgsfaktoren</strong>: Zielgruppen verstehen, Aufmerksamkeit erregen, Die richtige Sprache sprechen, Zielorientiert arbeiten, Messen und optimieren.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 2: Marketingkonzept für das digitale Marketing (S.25-32)
    // ============================================================
    {
      id: 'ch2', num: 'Kapitel 2', title: 'Marketingkonzept für das digitale Marketing',
      exercises: [
        {
          id: 11, type: 'mc',
          q: 'Aussagen zum digitalen Marketingkonzept',
          instruction: 'Welche Aussagen zum digitalen Marketingkonzept sind richtig?',
          options: [
            'Die Strategie wird immer als Erstes erstellt, damit man darauf aufbauen und eine Analyse der Ist-Situation vornehmen kann.',
            'Ziele und Zielgruppen sind ein zentraler Bestandteil des Marketingkonzepts. Wer nicht versteht, mit wem er kommuniziert, hat meistens keinen Erfolg.',
            '\u00abZuhören\u00bb ist im digitalen Marketing keine geeignete Zielsetzung, weil die Möglichkeiten der Interaktivität nicht berücksichtigt werden.',
            'Digitales Marketing lässt sich nicht ohne Weiteres in klassische Marketingüberlegungen integrieren, weshalb sich die POST-Methode besser zur Erstellung eines digitalen Marketingkonzepts eignet als die klassischen sieben Stufen.'
          ],
          correct: [1],
          multi: true,
          tips: [
            'Nur eine Aussage ist korrekt.',
            'Die Analyse kommt immer VOR der Strategie.',
            'Zuhören ist ein gutes Ziel im digitalen Marketing.'
          ],
          reveal: [
            'Aussage 1: Falsch - Die Analyse kommt immer zuerst.',
            'Aussage 2: Richtig - Ziele und Zielgruppen sind zentral.',
            'Aussage 3: Falsch - Zuhören ist ein gutes Ziel, da es Hinweise auf Bedürfnisse der Zielgruppe liefert.',
            'Aussage 4: Falsch - Digitales Marketing lässt sich in klassische Konzepte integrieren.'
          ]
        },
        {
          id: 12, type: 'fill',
          q: 'Sechs Schritte des Marketingkonzepts',
          instruction: 'Aus welchen sechs Schritten besteht ein digitales Marketingkonzept?',
          template: '1. {0}, 2. {1}, 3. {2}, 4. {3}, 5. {4}, 6. {5}',
          blanks: [
            ['Analyse', 'Situationsanalyse'],
            ['Ziele'],
            ['Strategien', 'Strategie'],
            ['Instrumente', 'Marketingmix', 'Taktik'],
            ['Budget und Realisation', 'Budget', 'Realisation'],
            ['Kontrolle']
          ],
          tips: [
            'Das Konzept folgt einer logischen Reihenfolge.',
            'Es beginnt mit der Analyse und endet mit der Kontrolle.',
            'Die Instrumente werden auch als Marketingmix oder Taktik bezeichnet.'
          ],
          reveal: [
            'Schritt 1: Analyse (Situationsanalyse)',
            'Schritt 2: Ziele',
            'Schritt 3: Strategien',
            'Schritt 4: Instrumente (Marketingmix, Taktik)',
            'Schritt 5: Budget und Realisation',
            'Schritt 6: Kontrolle'
          ]
        },
        {
          id: 13, type: 'text',
          q: 'Critics und Joiners',
          instruction: 'Was versteht man unter \u00abCritics\u00bb und \u00abJoiners\u00bb, wenn man von der Zielgruppe im digitalen Marketing spricht?',
          questions: [
            { q: 'Was sind Critics?', keywords: ['kritisch','bewert','komment','aktiv'], minKeywords: 2 },
            { q: 'Was sind Joiners?', keywords: ['mitläufer','sozial','medien','aktiv','selten','eigene','beiträge'], minKeywords: 2 }
          ],
          tips: [
            'Diese Begriffe stammen aus der POST-Methode.',
            'Critics sind digital aktiv in einem bestimmten Sinne.',
            'Joiners sind auf sozialen Medien aktiv, aber eher passiv.'
          ],
          reveal: [
            'Critics: Kritische, digital aktive Zielgruppe, die gerne bewertet und kommentiert.',
            'Joiners: \u00abMitläufer\u00bb, die auf den sozialen Medien aktiv sind, aber seltener eigene Beiträge machen.'
          ]
        },
        {
          id: 14, type: 'text',
          q: 'Objectives für Creators (POST)',
          instruction: 'Welche Zielsetzungen (Objectives) nach POST-Methode eignen sich besonders für Creators?',
          questions: [
            { q: 'Zielsetzungen für Creators?', keywords: ['anreg','unterstütz','einbezieh','mitmach','erstell','inhalt','content','user generated'], minKeywords: 2 }
          ],
          tips: [
            'Creators sind User, die selbst Inhalte erstellen.',
            'Denken Sie an Zielsetzungen, die deren Aktivität fördern.'
          ],
          reveal: [
            'Für Creators eignen sich Zielsetzungen wie: Anregen, Unterstützen, Einbeziehen.',
            'Creators erstellen eigene Inhalte - man sollte sie zum Mitmachen motivieren und unterstützen.'
          ]
        },
        {
          id: 15, type: 'match',
          q: 'POST-Methode erklären',
          instruction: 'Ordnen Sie die Buchstaben der POST-Methode den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'P - People', r: 'Definition der Zielgruppe und deren Web-Verhalten' },
            { l: 'O - Objectives', r: 'Definition der Ziele und Intensität der Interaktion mit der Zielgruppe' },
            { l: 'S - Strategy', r: 'Festlegung, wie das Unternehmen agieren sollte, um die Ziele zu erreichen' },
            { l: 'T - Technology', r: 'Auswahl der passenden Instrumente und Technologien' }
          ],
          options: [
            'Definition der Zielgruppe und deren Web-Verhalten',
            'Definition der Ziele und Intensität der Interaktion mit der Zielgruppe',
            'Festlegung, wie das Unternehmen agieren sollte, um die Ziele zu erreichen',
            'Auswahl der passenden Instrumente und Technologien'
          ],
          tips: [
            'POST steht für People, Objectives, Strategy, Technology.',
            'Die Technologie kommt immer zuletzt!',
            'Zuerst muss man wissen, WER die Zielgruppe ist.'
          ],
          reveal: [
            'P = People: Zielgruppe und deren Web-Verhalten definieren.',
            'O = Objectives: Ziele und Intensität der Interaktion definieren.',
            'S = Strategy: Wie das Unternehmen agieren soll.',
            'T = Technology: Auswahl der Instrumente (Blog, Social Media, SEO etc.).'
          ]
        },
        {
          id: 16, type: 'tf',
          q: 'Klassisches Konzept vs. POST-Methode',
          instruction: 'Sind die folgenden Aussagen korrekt?',
          statements: [
            { s: 'Das klassische Marketingkonzept besteht aus sechs Schritten.', c: true },
            { s: 'Die POST-Methode ist eine Alternative zum klassischen Marketingkonzept.', c: true },
            { s: 'Bei der POST-Methode wird die Technologie als Erstes gewählt.', c: false },
            { s: 'Digitales Marketing kann in jeder Phase des klassischen Marketingkonzepts integriert werden.', c: true }
          ],
          tips: [
            'Die POST-Methode stellt People (Zielgruppe) an den Anfang.',
            'Technologie kommt bei POST immer zuletzt.'
          ],
          reveal: [
            'Sechs Schritte: Richtig.',
            'POST als Alternative: Richtig.',
            'Technologie zuerst: Falsch - Technology kommt zuletzt.',
            'Integration in jeder Phase: Richtig - digitale Überlegungen fliessen in alle Schritte ein.'
          ]
        },
        {
          id: 17, type: 'text',
          q: 'Marketingkonzept in 6 Schritten',
          instruction: 'Erstellen Sie ein kurzes Marketingkonzept in sechs Schritten für ein KMU, das online vermarkten möchte. Nennen Sie je einen Punkt pro Phase.',
          questions: [
            { q: 'Skizzieren Sie die 6 Schritte:', keywords: ['analyse','ziel','strateg','instrument','budget','kontroll','swot','online','digital','website','social'], minKeywords: 4 }
          ],
          tips: [
            'Beginnen Sie mit der Analyse der Ausgangslage.',
            'Definieren Sie dann Ziele, Strategien, Instrumente.',
            'Vergessen Sie Budget und Kontrolle nicht.'
          ],
          reveal: [
            '1. Analyse: Ist-Situation des Unternehmens (Offline und Online) bewerten, SWOT erstellen.',
            '2. Ziele: Z.B. Bekanntheit steigern, Absatz um 10% erhöhen.',
            '3. Strategie: Digitale Marketingstrategie ableiten, Content Marketing aufbauen.',
            '4. Instrumente: SEO, Social Media, Online Ads etc. einsetzen.',
            '5. Budget und Realisation: Kosten planen, Ressourcen zuteilen.',
            '6. Kontrolle: KPIs festlegen und regelmässig überprüfen.'
          ]
        },
        {
          id: 18, type: 'match',
          q: 'Struktur des digitalen Marketingkonzepts',
          instruction: 'Ordnen Sie die Phasen des Marketingkonzepts den richtigen Fragen zu.',
          pairs: [
            { l: 'Analyse', r: 'Wo stehen wir heute? (Ist-Zustand)' },
            { l: 'Ziele', r: 'Wo wollen wir hin? (Soll-Zustand)' },
            { l: 'Strategien', r: 'Wie kommen wir dorthin? (Weg zum Ziel)' },
            { l: 'Instrumente', r: 'Was setzen wir konkret ein? (Marketingmix)' }
          ],
          options: [
            'Wo stehen wir heute? (Ist-Zustand)',
            'Wo wollen wir hin? (Soll-Zustand)',
            'Wie kommen wir dorthin? (Weg zum Ziel)',
            'Was setzen wir konkret ein? (Marketingmix)'
          ],
          tips: [
            'Das Konzept folgt einer logischen Reihenfolge.',
            'Jede Phase beantwortet eine bestimmte Frage.'
          ],
          reveal: [
            'Analyse = Wo stehen wir heute?',
            'Ziele = Wo wollen wir hin?',
            'Strategien = Wie kommen wir dorthin?',
            'Instrumente = Was setzen wir konkret ein?'
          ]
        }
      ],
      learningData: {
        title: 'Marketingkonzept für das digitale Marketing',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die sechs Schritte des (digitalen) Marketingkonzepts beschreiben.',
              'die POST-Methode als Alternative zum klassischen Marketingkonzept erklären.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'Analyse', 'Budget', 'Instrumente (Marketingmix, Taktik)', 'Kontrolle', 'Marketingkonzept',
              'POST-Methode (People, Objectives, Strategy, Technology)', 'Realisation', 'Strategie', 'Ziele'
            ]
          },
          {
            type: 'concept',
            title: '2.1 Klassisches Marketingkonzept',
            content: 'Da das digitale Marketing ein integrativer Bestandteil des Marketings ist, gibt es in jeder Phase des Marketingkonzepts Anknüpfungspunkte für das digitale Marketing. Die Planung und Konzepterstellung erfolgen somit nach denselben Regeln wie im klassischen Marketing - die einzelnen Schritte werden einfach erweitert um Überlegungen zu den digitalen Medien.',
            highlight: 'Das digitale Marketingkonzept besteht aus sechs Schritten: 1) Analyse, 2) Ziele, 3) Strategien, 4) Instrumente, 5) Budget und Realisation, 6) Kontrolle.'
          },
          {
            type: 'table',
            title: 'Checkliste - Inhalte eines Marketingkonzepts',
            headers: ['Phase', 'Zu beantwortende Fragen'],
            rows: [
              ['Analyse', 'Was macht das Unternehmen? Was machen andere? Was bedeutet das für heute und morgen?'],
              ['Definition der Ziele', 'Welche Ziele leiten Sie aus der Analyse ab? Welche Zielgruppen stehen im Fokus?'],
              ['Definition der Strategie', 'Wie können die Ziele erreicht werden? Welche übergeordnete Vorgehensweise wählen Sie?'],
              ['Festlegen des Marketingmix', 'Welche Instrumente eignen sich, um die Ziele zu erreichen? Welche konkreten Massnahmen planen?'],
              ['Budget und Realisation', 'Welche Mittel stehen für die Durchführung zur Verfügung? Wer erledigt welche Aufgaben?'],
              ['Kontrolle', 'Wurden die Ziele erreicht? Wo gibt es Verbesserungen?']
            ]
          },
          {
            type: 'svg',
            title: 'Das 6-Schritte Marketingkonzept (digital)',
            svg: '<svg viewBox="0 0 700 100" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="dm2-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><rect x="0" y="25" width="100" height="50" rx="8" fill="#0891b2"/><text x="50" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Analyse</text><text x="50" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Ist-Zustand</text><line x1="100" y1="50" x2="118" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#dm2-arr)"/><rect x="120" y="25" width="100" height="50" rx="8" fill="#0e7490"/><text x="170" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Ziele</text><text x="170" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Soll-Zustand</text><line x1="220" y1="50" x2="238" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#dm2-arr)"/><rect x="240" y="25" width="100" height="50" rx="8" fill="#155e75"/><text x="290" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Strategien</text><text x="290" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Weg zum Ziel</text><line x1="340" y1="50" x2="358" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#dm2-arr)"/><rect x="360" y="25" width="100" height="50" rx="8" fill="#164e63"/><text x="410" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Instrumente</text><text x="410" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Marketingmix</text><line x1="460" y1="50" x2="478" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#dm2-arr)"/><rect x="480" y="25" width="100" height="50" rx="8" fill="#083344"/><text x="530" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Budget</text><text x="530" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Realisation</text><line x1="580" y1="50" x2="598" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#dm2-arr)"/><rect x="600" y="25" width="100" height="50" rx="8" fill="#0891b2"/><text x="650" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">6. Kontrolle</text><text x="650" y="62" text-anchor="middle" fill="#cffafe" font-size="8">KPIs messen</text></svg>'
          },
          {
            type: 'svg',
            title: 'POST-Methode für digitales Marketing',
            svg: '<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Die POST-Methode</text><rect x="20" y="50" width="155" height="65" rx="10" fill="#0891b2"/><text x="97" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">P – People</text><text x="97" y="95" text-anchor="middle" fill="#cffafe" font-size="9">Zielgruppe verstehen</text><rect x="190" y="50" width="155" height="65" rx="10" fill="#0e7490"/><text x="267" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">O – Objectives</text><text x="267" y="95" text-anchor="middle" fill="#cffafe" font-size="9">Ziele definieren</text><rect x="360" y="50" width="155" height="65" rx="10" fill="#155e75"/><text x="437" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">S – Strategy</text><text x="437" y="95" text-anchor="middle" fill="#cffafe" font-size="9">Vorgehen festlegen</text><rect x="530" y="50" width="150" height="65" rx="10" fill="#164e63"/><text x="605" y="75" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">T – Technology</text><text x="605" y="95" text-anchor="middle" fill="#cffafe" font-size="9">Instrumente wählen</text><rect x="150" y="135" width="400" height="25" rx="6" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/><text x="350" y="152" text-anchor="middle" fill="#164e63" font-size="10" font-weight="bold">Technologie kommt immer ZULETZT — zuerst Menschen und Ziele!</text></svg>'
          },
          {
            type: 'concept',
            title: '2.2 POST-Methode',
            content: 'Die 4-stufige POST-Methode - People, Objectives, Strategy, Technology - ist ein guter Leitfaden zur Entwicklung eines digitalen Marketingkonzepts. Die Methode basiert auf dem Ansatz, dass man zuerst verstehen muss, für wen das Konzept entwickelt wird und mit welchem Ziel. Erst am Ende werden Plattformen und Aktivitäten definiert.',
            highlight: 'Bei der POST-Methode kommt die Technologie immer zuletzt! Zuerst muss man wissen, WER die Zielgruppe ist (People), dann die Ziele definieren (Objectives), die Strategie festlegen (Strategy) und erst dann die passenden Instrumente wählen (Technology).'
          },
          {
            type: 'table',
            title: 'Digitale Zielgruppen (nach Li / Bernoff)',
            headers: ['Zielgruppe', 'Beschreibung'],
            rows: [
              ['Creators', 'Erstellen selbst Inhalte: Betreiben Blogs, schreiben Artikel, laden Videos hoch.'],
              ['Critics', 'Reagieren auf Inhalte: Kommentieren und bewerten, beteiligen sich auf Online-Foren.'],
              ['Collectors', 'Sammeln Inhalte: Abonnieren RSS-Feeds, sammeln und taggen Fotos.'],
              ['Joiners', 'Sind digital präsent, aber nicht sehr aktiv, haben ein Profil in den sozialen Netzwerken.'],
              ['Spectators', 'Noch weniger aktiv als Joiners: Lesen ab und zu Blogs, schauen Videos an, lesen Bewertungen.'],
              ['Inactives', 'Nichtnutzer von digitalen Plattformen / sozialen Medien.']
            ]
          },
          {
            type: 'concept',
            title: 'B) Objectives - Fünf Hauptziele',
            content: 'Die Entwickler der POST-Methode unterscheiden fünf Hauptziele für die Interaktion mit Zielgruppen:',
            highlight: 'Die fünf Objectives: 1) Zuhören (Monitoring der Gespräche), 2) Mitteilen (Teilnahme und Initiierung von Gesprächen), 3) Anregen (Identifikation und Motivation von Markenfans), 4) Unterstützen (Förderung der Kollaboration mit Kunden), 5) Einbeziehen (Integration von Kunden in Unternehmensprozesse).'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Das klassische Marketingkonzept besteht aus 6 Schritten: Analyse, Ziele, Strategien, Instrumente, Budget/Realisation, Kontrolle.',
              'Die POST-Methode ist eine Alternative speziell für das digitale Marketing.',
              'Bei POST kommt die Technologie immer ZULETZT - zuerst People, dann Objectives, Strategy, dann Technology.',
              'Digitale Zielgruppen lassen sich in Creators, Critics, Collectors, Joiners, Spectators und Inactives einteilen.',
              'Ein unerfahrenes Unternehmen sollte mit Zuhören beginnen und sich nach und nach den anderen Zielen widmen.',
              'Beide Methoden eignen sich gleichermassen zur Erstellung eines digitalen Marketingkonzepts.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Grundlage für die Durchführung digitaler Marketingmassnahmen ist ein <strong>digitales Marketingkonzept</strong>. Es besteht, analog dem klassischen Marketingkonzept, aus folgenden Teilen: Analyse, Ziele, Strategien, Instrumente (Marketingmix, Taktik), Budget und Realisation, Kontrolle.',
              'Als Alternative kann bei der Erstellung eines digitalen Marketingkonzepts die <strong>POST-Methode</strong> gearbeitet werden: People (Zielgruppe definieren), Objectives (Ziele definieren), Strategy (Vorgehen festlegen), Technology (Instrumente wählen).',
              'Digitales Marketing muss integriert werden in bestehende, analoge Marketingmassnahmen, damit ein einheitliches Erscheinungsbild gewährleistet ist.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 3: Analyse (Ist-Zustand) (S.33-62)
    // ============================================================
    {
      id: 'ch3', num: 'Kapitel 3', title: 'Analyse (Ist-Zustand)',
      exercises: [
        {
          id: 19, type: 'text',
          q: 'Zielsetzung der Analysephase',
          instruction: 'A) Beschreiben Sie die Zielsetzung der Analysephase in 3-4 Sätzen. B) Warum ist die Analysephase so wichtig?',
          questions: [
            { q: 'A) Zielsetzung der Analysephase:', keywords: ['information','daten','sammel','marketingkonzept','gestalt','analysemethode','ist-situation','ausgangslage'], minKeywords: 3 },
            { q: 'B) Warum ist sie wichtig?', keywords: ['voraussetzung','phase','grundlage','ableitung','ohne','fehlen','falsch','gefahr'], minKeywords: 2 }
          ],
          tips: [
            'Die Analysephase ist die erste Phase im Marketingkonzept.',
            'Ohne Analyse fehlt die Grundlage für alle weiteren Schritte.',
            'Es geht um das Sammeln relevanter Informationen und Daten.'
          ],
          reveal: [
            'A) Zielsetzung ist, alle relevanten Informationen und Daten zu sammeln, die zur Erstellung eines Marketingkonzepts oder zur Gestaltung von Marketingaktivitäten nötig sind.',
            'B) Die Analysephase ist die Voraussetzung für alle folgenden Phasen. Ohne Analyse fehlen wichtige Informationen für die Ableitung von Zielen und Strategien.'
          ]
        },
        {
          id: 20, type: 'text',
          q: 'Qualitative und quantitative Methoden',
          instruction: 'Warum ergeben sich aus der Kombination von qualitativen und quantitativen Methoden Vorteile in der Analyse?',
          questions: [
            { q: 'Vorteile der Kombination:', keywords: ['qualitativ','quantitativ','kombination','entdeck','neues','überprüf','stärk','umfrage','interview','bekannt'], minKeywords: 3 }
          ],
          tips: [
            'Qualitative Methoden entdecken Neues.',
            'Quantitative Methoden überprüfen Bekanntes.',
            'In der Kombination spielen die Stärken zusammen.'
          ],
          reveal: [
            'Qualitative Methoden (z.B. Interviews) dienen dem Entdecken von etwas Neuem oder Unerwartetem.',
            'Quantitative Methoden (z.B. Umfragen) überprüfen etwas Bekanntes.',
            'In der Kombination lassen sich die Stärken der Analysen ausspielen: erst qualitativ explorieren, dann quantitativ überprüfen.'
          ]
        },
        {
          id: 21, type: 'text',
          q: 'E-Mail als digitaler Touchpoint (B2B)',
          instruction: 'Warum ist die E-Mail vor allem für die Marketingkommunikation zwischen Unternehmen (B2B) ein erfolgreicher digitaler Touchpoint?',
          questions: [
            { q: 'E-Mail als B2B-Touchpoint:', keywords: ['offiziell','formell','strukturiert','postfach','newsletter','ablegen','später','empfänger','zugeschnitten','informationen'], minKeywords: 3 }
          ],
          tips: [
            'E-Mail ist die meistgenutzte digitale Kommunikationsform im Geschäftsumfeld.',
            'E-Mails sind formeller als Social-Media-Posts.',
            'Man kann E-Mails gut ablegen und später aufrufen.'
          ],
          reveal: [
            'E-Mail hat etwas \u00abOffizielles\u00bb und ist immer noch die meistgenutzte digitale Kommunikationsform im geschäftlichen Umfeld.',
            'E-Mail-Newsletter sind nicht so unverbindlich wie ein Post in einer Diskussionsgruppe auf Social Media.',
            'Man kann die E-Mail im Postfach ablegen und später aufrufen. Wichtig ist, dass die Informationen auf den Empfänger zugeschnitten sind.'
          ]
        },
        {
          id: 22, type: 'text',
          q: 'Kundengewinnung im Kundenlebenszyklus',
          instruction: 'Im Kundenlebenszyklus gibt es die Phase der Kundengewinnung. Warum ist sie so herausfordernd für Unternehmen?',
          questions: [
            { q: 'Herausforderung der Kundengewinnung:', keywords: ['identifiz','zeitpunkt','kanal','ansprache','interesse','produkt','richt','heraus'], minKeywords: 3 }
          ],
          tips: [
            'Es geht nicht nur darum, Kunden zu identifizieren.',
            'Der richtige Zeitpunkt und Kanal sind entscheidend.',
            'Kunden zeigen Interesse an verschiedenen Touchpoints.'
          ],
          reveal: [
            'Die Kundengewinnung setzt voraus, dass der Kunde identifiziert wird und Interesse zeigt.',
            'Die Herausforderung besteht nicht nur darin, Kunden zu identifizieren, sondern auch den richtigen Zeitpunkt und den richtigen Kanal für die Ansprache zu finden.'
          ]
        },
        {
          id: 23, type: 'text',
          q: 'Online- und Offline-Pflege',
          instruction: 'Warum sollte es keine Trennung zwischen Offline- und Online-Pflege der Kundenbeziehung geben?',
          questions: [
            { q: 'Keine Trennung:', keywords: ['durchmischung','online','offline','komplex','zufrieden','information','bekannt','beides'], minKeywords: 3 }
          ],
          tips: [
            'Kunden bewegen sich in beiden Welten.',
            'Informationen müssen konsistent sein.',
            'Die Kundenbeziehung ist komplex.'
          ],
          reveal: [
            'Ein Kunde ist niemals \u00abnur online\u00bb oder \u00abnur offline\u00bb unterwegs.',
            'Es gibt eine Durchmischung des Online-Bereichs mit der Offline-Welt.',
            'Die Kundenbeziehungen sind komplex. Der Kunde möchte, dass Informationen, die er online gegeben hat, auch offline bekannt sind und umgekehrt.'
          ]
        },
        {
          id: 24, type: 'match',
          q: 'Analyse-Begriffe zuordnen',
          instruction: 'Ordnen Sie die Begriffe den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Customer Journey', r: 'Phasen des Kaufentscheidungsprozesses' },
            { l: 'Sekundäre Marktforschung', r: 'Marktforschung aufgrund von schon bestehenden Daten' },
            { l: 'Zielgruppenanalyse', r: 'Analyse der Zielgruppen, mit denen das Unternehmen heute kommuniziert' },
            { l: 'Google Analytics', r: 'Software zur Datenverkehrsanalyse von Websites' },
            { l: 'Primäre Marktforschung', r: 'Marktforschung aufgrund der Erkenntnisse aus der Untersuchung der Marktteilnehmer' }
          ],
          options: [
            'Phasen des Kaufentscheidungsprozesses',
            'Marktforschung aufgrund von schon bestehenden Daten',
            'Analyse der Zielgruppen, mit denen das Unternehmen heute kommuniziert',
            'Software zur Datenverkehrsanalyse von Websites',
            'Marktforschung aufgrund der Erkenntnisse aus der Untersuchung der Marktteilnehmer'
          ],
          tips: [
            'Customer Journey beschreibt den Weg des Kunden.',
            'Sekundärforschung nutzt bereits vorhandene Daten.',
            'Google Analytics ist ein Analyse-Tool.'
          ],
          reveal: [
            'Customer Journey = Phasen des Kaufentscheidungsprozesses.',
            'Sekundäre Marktforschung = bestehende Daten nutzen.',
            'Zielgruppenanalyse = aktuelle Zielgruppen analysieren.',
            'Google Analytics = Website-Analyse-Software.',
            'Primäre Marktforschung = eigene Erhebung bei Marktteilnehmern.'
          ]
        },
        {
          id: 25, type: 'text',
          q: 'SWOT-Analyse: Intern und extern',
          instruction: 'Warum werden bei der SWOT-Analyse immer eine interne und eine externe Analyse vorausgesetzt?',
          questions: [
            { q: 'Warum beide Analysen?', keywords: ['intern','extern','stärken','schwächen','chancen','risiken','vergleich','konkurrenz','unternehmen','umfeld'], minKeywords: 3 }
          ],
          tips: [
            'Die interne Analyse betrachtet das eigene Unternehmen.',
            'Die externe Analyse betrachtet das Umfeld und die Konkurrenz.',
            'Nur die Kombination ergibt ein vollständiges Bild.'
          ],
          reveal: [
            'Bei der internen Analyse betrachtet man nur das Unternehmen und seine Stärken (S) und Schwächen (W).',
            'Aber es fehlt der Vergleich mit anderen - der Konkurrenz oder Unternehmen, die ihre Sache sehr gut machen.',
            'Nur wenn das Unternehmen weiss, wo es im Vergleich steht (externe Analyse), können Chancen (O) und Risiken (T) erkannt werden.',
            'Und nur auf Basis beider Analysen lässt sich die SWOT ableiten.'
          ]
        },
        {
          id: 26, type: 'tf',
          q: 'Primäre vs. Sekundäre Marktforschung',
          instruction: 'Ordnen Sie die Aussagen als richtig oder falsch ein.',
          statements: [
            { s: 'Primäre Marktforschung nutzt bereits vorhandene Daten.', c: false },
            { s: 'Google Analytics ist ein Tool für sekundäre Marktforschung.', c: false },
            { s: 'Interviews und Umfragen sind Methoden der primären Marktforschung.', c: true },
            { s: 'Die Customer Journey beschreibt die Phasen des Kaufentscheidungsprozesses.', c: true },
            { s: 'Eine Zielgruppenanalyse ist nur bei B2C-Unternehmen relevant.', c: false }
          ],
          tips: [
            'Primär = eigene Erhebung, Sekundär = bestehende Daten.',
            'Google Analytics liefert eigene Erstdaten.',
            'Customer Journey = Kaufentscheidungsprozess.'
          ],
          reveal: [
            'Primäre nutzt vorhandene Daten: Falsch - das ist sekundäre Marktforschung.',
            'Google Analytics sekundär: Falsch - es erhebt eigene Daten und ist eine Art primäre Datenquelle.',
            'Interviews/Umfragen primär: Richtig.',
            'Customer Journey: Richtig.',
            'Nur B2C: Falsch - auch B2B braucht Zielgruppenanalysen.'
          ]
        },
        {
          id: 27, type: 'match',
          q: 'SWOT-Analyse Elemente zuordnen',
          instruction: 'Ordnen Sie die SWOT-Elemente der richtigen Kategorie zu.',
          pairs: [
            { l: 'Strengths (Stärken)', r: 'Interne Analyse - positiv' },
            { l: 'Weaknesses (Schwächen)', r: 'Interne Analyse - negativ' },
            { l: 'Opportunities (Chancen)', r: 'Externe Analyse - positiv' },
            { l: 'Threats (Risiken)', r: 'Externe Analyse - negativ' }
          ],
          options: ['Interne Analyse - positiv', 'Interne Analyse - negativ', 'Externe Analyse - positiv', 'Externe Analyse - negativ'],
          tips: [
            'S und W gehören zur internen Analyse.',
            'O und T gehören zur externen Analyse.'
          ],
          reveal: [
            'Strengths = Interne Analyse, positiv (eigene Stärken).',
            'Weaknesses = Interne Analyse, negativ (eigene Schwächen).',
            'Opportunities = Externe Analyse, positiv (Chancen im Umfeld).',
            'Threats = Externe Analyse, negativ (Risiken im Umfeld).'
          ]
        }
      ],
      learningData: {
        title: 'Analyse (Ist-Zustand)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'verschiedene Vorgehensweisen für die Analyse der Ist-Situation in einem Unternehmen erklären.',
              'erläutern, wie sich die einzelnen Analysemethoden der primären und der sekundären digitalen Marktforschung voneinander unterscheiden.',
              'Analyse-Tools und Vorgehensweisen, die im Rahmen des digitalen Marketings eingesetzt werden können, nennen und beschreiben.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'Analyse-Tools', 'Customer Journey', 'digitale Marktforschung', 'Facebook Analytics',
              'Google Analytics', 'Konkurrenzanalyse', 'Kundenbeziehungszyklus', 'Kundenlebenszyklus',
              'primäre Marktforschung', 'sekundäre Marktforschung', 'Touchpoint-Analyse'
            ]
          },
          {
            type: 'concept',
            title: '3.1 Marktforschung',
            content: 'Marktforschung umfasst die Vorgehensweisen und Methoden zur systematischen Sammlung, Aufbereitung, Analyse und Bewertung von Daten bezogen auf eine Gegebenheit in einem Markt. Im digitalen Marketing steht die primäre Marktforschung im Vordergrund, weil jedes Unternehmen selbst einfach Daten erheben kann, z.B. durch die Nutzung von Google Analytics.',
            highlight: 'Primäre Marktforschung: Noch nicht vorhandene Daten werden erhoben (qualitativ und quantitativ). Sekundäre Marktforschung: Bereits vorhandene Daten werden genutzt und ausgewertet.'
          },
          {
            type: 'concept',
            title: '3.1.1 Primäre Marktforschung - 3 Schritte',
            content: 'Ein sinnvolles Vorgehen im digitalen Marketing gliedert sich in drei Schritte: Schritt 1: Mittels quantitativer Methoden herausfinden, welche Zielgruppen dem Unternehmen heute bekannt sind. Schritt 2: Mittels qualitativer Methoden (z.B. Tiefeninterviews) herausfinden, welche Bedürfnisse diese Zielgruppen haben. Schritt 3: Wieder mittels quantitativer Methoden überprüfen, ob die Ergebnisse der Interviews auch für andere Teile der Zielgruppen zutreffen.',
            highlight: 'Qualitative Methoden (Interviews, Beobachtungen) dienen dem Entdecken von Neuem. Quantitative Methoden (Befragungen, Experimente) dienen der Überprüfung von Bekanntem. Die Kombination beider Methoden ist für die Analyse der bestehenden digitalen Marketingaktivitäten wichtig.'
          },
          {
            type: 'concept',
            title: '3.2 Stärken und Schwächen (interne Analyse)',
            content: 'Der Startpunkt vieler Analysen beginnt mit der eigenen Leistung: Worin sind wir gut? Wo können wir uns verbessern? Innerhalb der internen Analyse werden folgende Fragestellungen betrachtet: Wo interagieren die Kunden mit uns (Touchpoint-Analyse)? Wie gut kennt das Unternehmen die Kunden (Kundenlebenszyklus)? Wie erleben die Kunden die Zusammenarbeit (Customer Journey)?',
            highlight: 'Digitale Analyse-Tools: Google Analytics (Website-Analyse) und Facebook Analytics (Social-Media-Analyse) sind die zwei wichtigsten Analyseprogramme, die breitflächig verfügbar, kostenlos nutzbar und von einer grossen Anzahl relevanter Kernfunktionen abgedeckt sind.'
          },
          {
            type: 'table',
            title: 'Google Analytics - Wichtigste Funktionen',
            headers: ['Bereich', 'Fragestellungen'],
            rows: [
              ['Besucheranzahl', 'Wie viele Besucher in einem Zeitraum? Zu welchem Zeitpunkt die meisten? Steigend oder sinkend?'],
              ['Nutzerverhalten', 'Verweildauer? Nutzungsdauer? Unique Users? Wiederkehrende Besucher? Absprungrate?'],
              ['Bewegung durch die Webpräsenz', 'Wie bewegen sich die Anwender durch die Webseite? Welche Zusammenhänge bestehen?'],
              ['Besucherdaten', 'Aus welchem Land? Welche Sprache? Welche Daten zu Alter und Geschlecht?'],
              ['Technische Details', 'Ladezeit der Seite? Über welchen Browser wird zugegriffen?'],
              ['Schlüsselwörter / Kanäle', 'Über welche Schlüsselwörter werden Seiten aufgefunden? Über welche Kanäle gelangen User auf die Seite?']
            ]
          },
          {
            type: 'concept',
            title: '3.2.2 Touchpoint-Analyse',
            content: 'In der Touchpoint-Analyse beurteilt das digitale Marketing, welche Art von Informationen über welche Kanäle an die Kunden weitergegeben werden. Touchpoints sind die Momente, in denen Unternehmen mit ihren Kunden interagieren. Beispiele im digitalen Bereich: Google Ad, Internetseite, Werbebanner, Internetvideo, E-Mail, Social-Media-Seiten, Blog, Onlineshop.',
            highlight: 'Neun Kriterien zur Beurteilung eines Touchpoints: 1) Art des Kontaktpunkts, 2) Beliebtheit, 3) Veränderbarkeit, 4) Individualisierbarkeit, 5) Kosten, 6) Bedürfnisabdeckung, 7) Kundengerechtigkeit, 8) Sinnhaftigkeit, 9) Verknüpfung mit anderen Touchpoints.'
          },
          {
            type: 'concept',
            title: '3.2.3 Kundenlebenszyklus',
            content: 'Der Kundenlebenszyklus kann in drei Phasen eingeteilt werden: 1. Phase Kundengewinnung (der potenzielle Kunde wird identifiziert), 2. Phase aktiver Kunde (Kundenbindung und Treue), 3. Phase passiver Kunde (Kunde hat sich vom Unternehmen abgewendet - Rückgewinnung versuchen). In allen Phasen ist die Kommunikation entscheidend.',
            highlight: 'Kundenlebenszyklus = wann und wie oft standen die Kunden mit uns in einer Beziehung? Kundenbeziehungszyklus = wie lange und wie intensiv war die Beziehung?'
          },
          {
            type: 'concept',
            title: '3.2.5 Customer Journey',
            content: 'Eine Customer Journey soll aufzeigen, wie ein Kunde die einzelnen Interaktionen in den von ihm genutzten Touchpoints erlebt. Der Aufbau orientiert sich an den Phasen des Marketingtrichters: Awareness (Bewusstsein), Consideration (Überlegung), Conversion (Umsetzung), Retention (Erhaltung), Advocacy (Befürwortung).',
            highlight: 'Die Customer Journey wird in 5 Schritten erstellt: 1) Phasen des Marketingtrichters skizzieren, 2) Touchpoints zuordnen, 3) Handlungen und Wahrnehmungen je Touchpoint erfassen, 4) Emotionen beschreiben, 5) Ideen und Verbesserungsvorschläge sammeln.'
          },
          {
            type: 'svg',
            title: 'Customer Journey (Marketingtrichter)',
            svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="380" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Customer Journey</text><text x="350" y="52" text-anchor="middle" font-size="12" fill="#94a3b8">Die Phasen des Marketingtrichters</text><rect x="40" y="80" width="120" height="100" rx="14" fill="#0891b2"/><text x="100" y="118" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Awareness</text><text x="100" y="138" text-anchor="middle" font-size="10" fill="#cffafe">Bewusstsein</text><text x="100" y="158" text-anchor="middle" font-size="9" fill="#cffafe">Kunde wird auf</text><text x="100" y="170" text-anchor="middle" font-size="9" fill="#cffafe">Angebot aufmerksam</text><path d="M165,130 L185,130" stroke="#0891b2" stroke-width="2.5" marker-end="url(#arrD)"/><rect x="190" y="80" width="120" height="100" rx="14" fill="#0e7490"/><text x="250" y="118" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Consideration</text><text x="250" y="138" text-anchor="middle" font-size="10" fill="#cffafe">Überlegung</text><text x="250" y="158" text-anchor="middle" font-size="9" fill="#cffafe">Kunde vergleicht</text><text x="250" y="170" text-anchor="middle" font-size="9" fill="#cffafe">Optionen</text><path d="M315,130 L335,130" stroke="#0891b2" stroke-width="2.5" marker-end="url(#arrD)"/><rect x="340" y="80" width="120" height="100" rx="14" fill="#155e75"/><text x="400" y="118" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Conversion</text><text x="400" y="138" text-anchor="middle" font-size="10" fill="#cffafe">Umsetzung</text><text x="400" y="158" text-anchor="middle" font-size="9" fill="#cffafe">Kunde kauft</text><text x="400" y="170" text-anchor="middle" font-size="9" fill="#cffafe">das Produkt</text><path d="M465,130 L485,130" stroke="#0891b2" stroke-width="2.5" marker-end="url(#arrD)"/><rect x="490" y="80" width="100" height="100" rx="14" fill="#164e63"/><text x="540" y="118" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">Retention</text><text x="540" y="138" text-anchor="middle" font-size="10" fill="#cffafe">Erhaltung</text><text x="540" y="158" text-anchor="middle" font-size="9" fill="#cffafe">Kunde bleibt</text><text x="540" y="170" text-anchor="middle" font-size="9" fill="#cffafe">treu</text><path d="M595,130 L610,130" stroke="#0891b2" stroke-width="2.5" marker-end="url(#arrD)"/><rect x="615" y="80" width="70" height="100" rx="14" fill="#083344"/><text x="650" y="115" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">Advo-</text><text x="650" y="130" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">cacy</text><text x="650" y="150" text-anchor="middle" font-size="9" fill="#cffafe">Kunde</text><text x="650" y="162" text-anchor="middle" font-size="9" fill="#cffafe">empfiehlt</text><defs><marker id="arrD" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><text x="100" y="220" text-anchor="middle" font-size="11" fill="#0891b2" font-weight="600">Touchpoints:</text><rect x="40" y="235" width="120" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="100" y="257" text-anchor="middle" font-size="9" fill="#164e63">Social Media</text><text x="100" y="271" text-anchor="middle" font-size="9" fill="#164e63">Google Ads</text><text x="100" y="285" text-anchor="middle" font-size="9" fill="#164e63">Blog, PR</text><rect x="190" y="235" width="120" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="250" y="257" text-anchor="middle" font-size="9" fill="#164e63">Website</text><text x="250" y="271" text-anchor="middle" font-size="9" fill="#164e63">Bewertungen</text><text x="250" y="285" text-anchor="middle" font-size="9" fill="#164e63">Newsletter</text><rect x="340" y="235" width="120" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="400" y="257" text-anchor="middle" font-size="9" fill="#164e63">Onlineshop</text><text x="400" y="271" text-anchor="middle" font-size="9" fill="#164e63">Bestellprozess</text><text x="400" y="285" text-anchor="middle" font-size="9" fill="#164e63">Chatbot</text><rect x="490" y="235" width="100" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="540" y="257" text-anchor="middle" font-size="9" fill="#164e63">E-Mail</text><text x="540" y="271" text-anchor="middle" font-size="9" fill="#164e63">App</text><text x="540" y="285" text-anchor="middle" font-size="9" fill="#164e63">Service</text><rect x="615" y="235" width="70" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="650" y="260" text-anchor="middle" font-size="9" fill="#164e63">Reviews</text><text x="650" y="274" text-anchor="middle" font-size="9" fill="#164e63">Referrals</text><text x="350" y="340" text-anchor="middle" font-size="11" fill="#94a3b8">Jede Phase hat spezifische Touchpoints, Handlungen und Emotionen</text></svg>'
          },
          {
            type: 'concept',
            title: '3.3 Chancen und Risiken (externe Analyse)',
            content: 'Die externe Analyse betrachtet das Umfeld des Unternehmens. Die klassischen Analyseformen PESTEL und Five Forces werden vorgestellt, ergänzt durch Konkurrenzanalyse und Benchmarking.',
            highlight: 'PESTELE steht für: P = politisch, E = wirtschaftlich (economics), S = sozial, T = technologisch, E = Umwelt (environmental), L = juristisch (legal), E = ethisch (neu).'
          },
          {
            type: 'concept',
            title: '3.3.2 Five Forces nach Porter',
            content: 'Porters Five Forces ist ein einfaches, aber leistungsstarkes Werkzeug, um die Wettbewerbsfähigkeit Ihres Unternehmensumfelds zu verstehen. Die fünf Kräfte sind: A) Rivalität im Wettbewerb, B) Stärke der Lieferanten, C) Macht der Nachfrager, D) Drohende Substitution, E) Bedrohung durch Neueintritte von Wettbewerbern.',
            highlight: 'Five Forces hilft, Chancen für eine Ausweitung der Aktivitäten zu erkennen und wo Risiken lauern.'
          },
          {
            type: 'concept',
            title: '3.4 SWOT-Analyse',
            content: 'Die SWOT-Analyse ist eine einfache Methode, mit der Sie die Stärken (Strengths) und Schwächen (Weaknesses) eines Unternehmens den Chancen (Opportunities) und Risiken (Threats) auf dem Markt gegenüberstellen können. Stärken und Schwächen beziehen sich auf das eigene Unternehmen (intern). Chancen und Risiken ergeben sich aus den Aktivitäten der Konkurrenten oder den Gegebenheiten des Markts an sich (extern).',
            highlight: 'Vier SWOT-Kombinationen: Stärken-Chancen (SO-Strategie), Stärken-Risiken (ST-Strategie), Schwächen-Chancen (WO-Strategie), Schwächen-Risiken (WT-Strategie). Die wichtigsten sind SO (Potenzial) und WT (grösste Gefahren).'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Analysephase ist die ERSTE und wichtigste Phase im Marketingkonzept - ohne sie fehlt die Grundlage für alles Weitere.',
              'Primäre Marktforschung erhebt NEUE Daten (Interviews, Umfragen), sekundäre nutzt BESTEHENDE Daten (Bilanz, CRM, Studien).',
              'Google Analytics und Facebook Analytics sind die zwei wichtigsten digitalen Analyse-Tools.',
              'Touchpoints sind die Momente, in denen Kunden mit dem Unternehmen interagieren.',
              'Der Kundenlebenszyklus hat drei Phasen: Kundengewinnung, aktiver Kunde, passiver Kunde.',
              'Die Customer Journey beschreibt die Phasen: Awareness, Consideration, Conversion, Retention, Advocacy.',
              'PESTELE analysiert politische, wirtschaftliche, soziale, technologische, Umwelt-, rechtliche und ethische Faktoren.',
              'Die SWOT-Analyse kombiniert interne Analyse (Stärken/Schwächen) mit externer Analyse (Chancen/Risiken).'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Das Ziel in der <strong>Analysephase</strong> ist, möglichst genau zu verstehen, wie sich die aktuelle Situation für das Unternehmen darstellt und mit wem das Unternehmen wie in der digitalen Welt kommuniziert.',
              'Die <strong>primäre Marktforschung</strong> gewinnt Erkenntnisse direkt aus der Untersuchung der Marktteilnehmer. Die <strong>sekundäre Marktforschung</strong> gewinnt Erkenntnisse aus bereits erhobenen Daten, Studien oder Experimenten.',
              'Bei der <strong>internen Analyse</strong> werden Stärken und Schwächen analysiert, unterstützt durch Tools wie <strong>Google Analytics</strong> und <strong>Facebook Analytics</strong>. Methoden: Touchpoint-Analyse, Kundenlebenszyklusanalyse, Kundenbeziehungszyklus, Customer Journey.',
              'Bei der <strong>externen Analyse</strong> werden Chancen und Risiken analysiert mittels: PESTEL(E), Five Forces, Konkurrenzanalyse, Benchmarking.',
              'Die Erkenntnisse aus allen Analysen werden in einer <strong>SWOT-Analyse</strong> zusammengeführt. Daraus werden geeignete Ziele und Strategien für das digitale Marketing abgeleitet.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 4: Zielsetzung und Strategien (S.63-77)
    // ============================================================
    {
      id: 'ch4', num: 'Kapitel 4', title: 'Zielsetzung und Strategien (Soll-Zustand)',
      exercises: [
        {
          id: 28, type: 'text',
          q: 'Zielgruppe vs. Kunde',
          instruction: 'Warum ist eine Zielgruppe nicht immer identisch mit dem Kunden? Beantworten Sie die Frage in einigen Sätzen.',
          questions: [
            { q: 'Zielgruppe vs. Kunde:', keywords: ['b2b','organisation','person','bezahlt','kauft','nutzer','website','entscheidung','nicht identisch'], minKeywords: 3 }
          ],
          tips: [
            'Speziell im B2B-Bereich ist der Unterschied relevant.',
            'Wer bezahlt, ist nicht immer der Nutzer.',
            'Die Zielgruppe der Website kann eine andere sein als der Kunde.'
          ],
          reveal: [
            'Speziell im B2B-Bereich sind Zielgruppe und Kunde oft nicht identisch.',
            'Der Kunde ist die Person oder Organisation, die bezahlt und kauft.',
            'Die Zielgruppe könnte z.B. der Bauarbeiter sein, der ein Werkzeug sucht. Bezahlt wird es durch den Chef.',
            'Da der Bauarbeiter der hauptsächliche Nutzer der Website ist, wird die Website auf seine Bedürfnisse zugeschnitten.'
          ]
        },
        {
          id: 29, type: 'text',
          q: 'Zielgruppen beschreiben',
          instruction: 'Was sind Zielgruppen und wie lässt sich eine Zielgruppe beschreiben?',
          questions: [
            { q: 'Was sind Zielgruppen?', keywords: ['gruppe','person','merkmal','angesprochen','marketingbotschaft','kriterien','geschlecht','alter','einkommen','wohnort','bedürfnis'], minKeywords: 3 }
          ],
          tips: [
            'Zielgruppen sind Gruppen mit gemeinsamen Merkmalen.',
            'Man beschreibt sie über verschiedene Kriterien.',
            'Im digitalen Marketing können Zielgruppen detaillierter definiert werden.'
          ],
          reveal: [
            'Zielgruppen sind Gruppen von Personen mit vergleichbaren Merkmalen, die gezielt angesprochen werden sollen.',
            'Man kann sie über Kriterien wie Geschlecht, Alter, Einkommen, Wohnort, Wünsche, Probleme und Bedürfnisse beschreiben.',
            'Dank digitaler Tools können Zielgruppen viel detaillierter definiert werden als im klassischen Marketing.'
          ]
        },
        {
          id: 30, type: 'text',
          q: 'Personas erklären',
          instruction: 'Was sind Personas und wie lässt sich eine Persona beschreiben?',
          questions: [
            { q: 'Was sind Personas?', keywords: ['fiktiv','virtuell','person','stellvertreter','zielgruppe','motive','bedürfnis','ziele','story','lebensnah'], minKeywords: 3 }
          ],
          tips: [
            'Eine Persona ist eine fiktive Person mit einer Geschichte.',
            'Sie repräsentiert eine Zielgruppe.',
            'Sie wird durch Motive, Bedürfnisse und Ziele charakterisiert.'
          ],
          reveal: [
            'Eine Persona ist die Beschreibung einer fiktiven (virtuellen) Person mit Story.',
            'Sie ist ein konstruierter, repräsentativer Stellvertreter einer Zielgruppe eines Angebots.',
            'Dieser Stellvertreter wird konkret und lebensnah charakterisiert, vor allem durch seine Motive, Bedürfnisse und Ziele.'
          ]
        },
        {
          id: 31, type: 'text',
          q: '5-S-Ziele: Sizzle',
          instruction: 'Die 5-S-Ziele beinhalten ein Ziel: Sizzle (Motivieren und begeistern). Was ist die wichtigste Voraussetzung zur Umsetzung dieses Ziels?',
          questions: [
            { q: 'Voraussetzung für Sizzle:', keywords: ['zielgruppe','kennen','begeistert','verstehen','vorstellung','analyse','konkret','inhalt','wo','soll'], minKeywords: 3 }
          ],
          tips: [
            'Wenn man motivieren und begeistern will, muss man wissen, was die Zielgruppe begeistert.',
            'Die konkrete Analyse der Zielgruppe ist Voraussetzung.'
          ],
          reveal: [
            'Die wichtigste Voraussetzung ist, dass bekannt ist, was genau die Zielgruppe begeistert.',
            'Man muss den Kunden verstehen und eine Vorstellung über Ziele und Verhaltensweisen haben.',
            'Die konkrete Analyse der Zielgruppe - welche Inhalte sollen gepostet werden, wie und wo - ist somit Voraussetzung für die Umsetzung.'
          ]
        },
        {
          id: 32, type: 'text',
          q: 'Content Marketing in der Strategie',
          instruction: 'Warum ist die Auseinandersetzung mit dem Content Marketing auf Ebene der Strategie so wichtig?',
          questions: [
            { q: 'Content Marketing in der Strategie:', keywords: ['kernelement','voraussetzung','inhalt','content','zielgrupp','spannend','binden','konkurrenz','differenz','unterscheid'], minKeywords: 3 }
          ],
          tips: [
            'Content Marketing ist ein Kernelement des digitalen Marketings.',
            'Es geht um die Entwicklung spannender Inhalte.',
            'Nur differenzierende Inhalte heben sich von der Konkurrenz ab.'
          ],
          reveal: [
            'Content Marketing ist ein Kernelement oder sogar eine Voraussetzung für erfolgreiches digitales Marketing.',
            'Content bedeutet Inhalt - es geht um die Entwicklung spannender Inhalte, mit denen das Unternehmen Zielgruppen an sich binden will.',
            'Es ist wichtig, sich bei der Entwicklung der Strategie damit auseinanderzusetzen, da dies das Hauptunterscheidungskriterium zur Konkurrenz darstellt.'
          ]
        },
        {
          id: 33, type: 'check',
          q: 'Aussagen zum Content Marketing',
          instruction: 'Sind die folgenden Aussagen zum Content Marketing korrekt?',
          statements: [
            { s: 'Reine Produktinformationen des Unternehmens dürfen nicht im Mittelpunkt stehen.', c: true },
            { s: 'Im Content Marketing sollte man nur über das Unternehmen sprechen.', c: false },
            { s: 'Die Kunden und Anwender müssen beim Content Marketing miteinbezogen werden.', c: true },
            { s: 'Im Content Marketing sollte man authentisch bleiben.', c: true },
            { s: 'Wenn jemand etwas Unwahres postet, verliert er das Vertrauen der User.', c: true }
          ],
          tips: [
            'Content Marketing stellt den Kunden in den Mittelpunkt, nicht das Unternehmen.',
            'Authentizität ist ein wichtiger Erfolgsfaktor.',
            'Unwahre Inhalte zerstören Vertrauen.'
          ],
          reveal: [
            'Keine reinen Produktinfos: Richtig - Kunden stehen im Mittelpunkt.',
            'Nur über Unternehmen sprechen: Falsch - es geht um die Kunden und deren Geschichten.',
            'Kunden einbeziehen: Richtig.',
            'Authentisch bleiben: Richtig.',
            'Unwahres postet = Vertrauen verlieren: Richtig.'
          ]
        },
        {
          id: 34, type: 'match',
          q: 'Elemente der digitalen Marketingstrategie',
          instruction: 'Ordnen Sie die drei Strategie-Überlegungen den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Markenstrategie', r: 'Welche übergeordneten Vorgaben gibt es für Sprache, Bild, Tonalität und Qualität?' },
            { l: 'Content-Strategie', r: 'Wie können die Produkte des Unternehmens in spannende Geschichten verpackt werden?' },
            { l: 'Kommunikationsstrategie', r: 'Welche Instrumente passen zum Unternehmen und unterstützen die Ziele?' }
          ],
          options: [
            'Welche übergeordneten Vorgaben gibt es für Sprache, Bild, Tonalität und Qualität?',
            'Wie können die Produkte des Unternehmens in spannende Geschichten verpackt werden?',
            'Welche Instrumente passen zum Unternehmen und unterstützen die Ziele?'
          ],
          tips: [
            'Die Markenstrategie definiert den Rahmen (Sprache, Bild etc.).',
            'Die Content-Strategie fokussiert auf Storytelling.',
            'Die Kommunikationsstrategie wählt die Instrumente.'
          ],
          reveal: [
            'Markenstrategie = Vorgaben für Sprache, Bild, Tonalität, Qualität.',
            'Content-Strategie = Produkte in spannende Geschichten verpacken.',
            'Kommunikationsstrategie = Instrumente wählen, die zu Unternehmen und Zielen passen.'
          ]
        },
        {
          id: 35, type: 'tf',
          q: 'Zielgruppen im digitalen Marketing',
          instruction: 'Sind die folgenden Aussagen richtig oder falsch?',
          statements: [
            { s: 'Zielgruppen im digitalen Marketing entsprechen den Zielgruppen im klassischen Marketing.', c: true },
            { s: 'Dank digitaler Tools können Zielgruppen detaillierter definiert werden.', c: true },
            { s: 'Personas sind reale Kunden des Unternehmens.', c: false },
            { s: 'Neben Zielgruppen werden im digitalen Marketing oft Personas erstellt.', c: true }
          ],
          tips: [
            'Zielgruppen sind im Prinzip die gleichen, aber digitale Tools ermöglichen mehr.',
            'Personas sind fiktive Personen.'
          ],
          reveal: [
            'Gleiche Zielgruppen: Richtig.',
            'Detailliertere Definition: Richtig - dank digitaler Tools.',
            'Personas reale Kunden: Falsch - Personas sind fiktive, repräsentative Personen.',
            'Personas erstellt: Richtig - sie ergänzen die Zielgruppendefinition.'
          ]
        },
        {
          id: 36, type: 'text',
          q: 'Persona für ein KMU erstellen',
          instruction: 'Entwickeln Sie eine Persona für ein KMU, das lokale Qualitätsprodukte online vermarkten möchte. Beschreiben Sie die Person in Stichpunkten.',
          questions: [
            { q: 'Persona beschreiben:', keywords: ['name','alter','beruf','hobby','bedürfnis','motivation','kanal','online','regional','qualität','kaufverhalten'], minKeywords: 4 }
          ],
          tips: [
            'Eine Persona braucht einen Namen, Alter und Hintergrund.',
            'Beschreiben Sie Hobbys, Bedürfnisse und Kaufverhalten.',
            'Welche digitalen Kanäle nutzt die Person?'
          ],
          reveal: [
            'Beispiel-Persona: Erika, 35, verheiratet, 1 Kind.',
            'Hobbys: Sport, Kochen, Wanderungen mit der Familie.',
            'Bedürfnisse: Hochwertige Lebensmittel aus der Region, gute Ernährung.',
            'Digitale Kanäle: Google, Bewertungsportale, Instagram.',
            'Kaufverhalten: Qualitätsbewusst, recherchiert online, kauft dann lokal oder im Onlineshop.'
          ]
        }
      ],
      learningData: {
        title: 'Zielsetzung und Strategien (Soll-Zustand)',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'Zielgruppen für das digitale Marketing definieren.',
              'Personas erstellen und deren Bedeutung für das digitale Marketing erläutern.',
              'Ziele anhand der 5 S und des RACE-Frameworks formulieren.',
              'zur Konkretisierung der Ziele die SMART-Methode anwenden.',
              'strategische Überlegungen im Bereich des Content Marketings anhand von Qualitätsmerkmalen begründen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              '5-S-Ziele', 'Content Marketing', 'Content-Strategie', 'Corporate Identity',
              'Kommunikationsstrategie', 'Markenstrategie', 'Persona', 'Personalisierung',
              'RACE-Framework', 'SMART-Methode', 'Storytelling', 'Ziele', 'Zielgruppe'
            ]
          },
          {
            type: 'concept',
            title: '4.1 Zielgruppen',
            content: 'Zielgruppen sind auch im Online-Marketing Gruppen von Personen (mit vergleichbaren Merkmalen), die gezielt auf etwas angesprochen bzw. mit einer Marketingbotschaft erreicht werden sollen. Der Unterschied zum klassischen Marketing liegt im Detaillierungsgrad der Zielgruppendefinition. Mit modernen digitalen Marketingzielgruppensegmentierungs-Tools können sehr detaillierte Zielgruppen beschrieben werden.',
            highlight: 'Im digitalen Marketing werden Zielgruppen anhand ihres Online-Verhaltens verfeinert. Vier spezifische Zielgruppen: Aktive Nutzer/Produzenten, Kommentatoren, Konsumenten, Inaktive. Nicht nur die aktiven Gruppen ansprechen - auch die grosse Masse der wenig Aktiven ist wichtig!'
          },
          {
            type: 'concept',
            title: '4.1.2 Personas',
            content: 'Die Nutzung von Personas zur Beschreibung von Kundenbedürfnissen hat in den letzten Jahren stark an Popularität gewonnen. Eine Persona ist ein konstruierter, repräsentativer Stellvertreter einer Zielgruppe. Dieser Stellvertreter wird konkret und lebensnah charakterisiert, vor allem durch seine Motive, Bedürfnisse und Ziele.',
            highlight: 'Eine Persona enthält zwingend: Alter, Beruf, Foto, Kernaussage als Zitat, Bedürfnisse/Ziele/Motivationen, Frustrationen/Herausforderungen, Verhaltensweisen (Mediennutzung, Kaufverhalten). Im digitalen Marketing greifen die meisten Unternehmen auf 3-5 Personas zurück.'
          },
          {
            type: 'svg',
            title: 'Die 5-S-Ziele im digitalen Marketing',
            svg: '<svg viewBox="0 0 700 130" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Die 5-S-Ziele im digitalen Marketing</text><rect x="20" y="45" width="125" height="65" rx="10" fill="#0891b2"/><text x="82" y="70" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Sell</text><text x="82" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Verkaufen</text><text x="82" y="100" text-anchor="middle" fill="#cffafe" font-size="7">Neukunden, Umsatz</text><rect x="155" y="45" width="125" height="65" rx="10" fill="#0e7490"/><text x="217" y="70" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Serve</text><text x="217" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Dienen</text><text x="217" y="100" text-anchor="middle" fill="#cffafe" font-size="7">Kundenzufriedenheit</text><rect x="290" y="45" width="125" height="65" rx="10" fill="#155e75"/><text x="352" y="70" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Sizzle</text><text x="352" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Begeistern</text><text x="352" y="100" text-anchor="middle" fill="#cffafe" font-size="7">Verweildauer, WOW</text><rect x="425" y="45" width="125" height="65" rx="10" fill="#164e63"/><text x="487" y="70" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Speak</text><text x="487" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Sprechen</text><text x="487" y="100" text-anchor="middle" fill="#cffafe" font-size="7">Botschafter schaffen</text><rect x="560" y="45" width="120" height="65" rx="10" fill="#083344"/><text x="620" y="70" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Save</text><text x="620" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Sparen</text><text x="620" y="100" text-anchor="middle" fill="#cffafe" font-size="7">Effizienz steigern</text></svg>'
          },
          {
            type: 'table',
            title: 'Die 5-S-Ziele',
            headers: ['Ziel', 'Beschreibung'],
            rows: [
              ['Sell (verkaufen)', 'Zielt auf die Neukundengewinnung, die Kundenbindung und die Steigerung des Verkaufs ab.'],
              ['Serve (dienen)', 'Steigerung der Kundenzufriedenheit, z.B. durch zusätzliche Leistungen oder eine engere Kommunikation.'],
              ['Sizzle (motivieren und begeistern)', 'Durch spannende Themen und Dienstleistungen soll die Verweildauer erhöht und Begeisterung erzeugt werden.'],
              ['Speak (sprechen)', 'Die Anzahl der für das Unternehmen aktiv eintretenden Kunden soll erhöht und Botschafter geschaffen werden.'],
              ['Save (sparen)', 'Kosten sollen durch die Nutzung von digitalen Marketinginstrumenten gespart werden - quantifizierbare Effizienzziele.']
            ]
          },
          {
            type: 'concept',
            title: '4.2.3 Das RACE-Framework',
            content: 'RACE ist ein alternativer Ansatz zur Definition von Zielkategorien im Marketing. Die einzelnen Zielstellungen sind, im Vergleich zu den 5 S, noch stärker auf die Aktivitäten im digitalen Marketing ausgelegt.',
            highlight: 'RACE: R = Reach/Reichweite (Gewinnung neuer Kunden), A = Act/Interaktion (Zielgruppen interagieren stärker mit dem Unternehmen), C = Convert/Konvertieren (Generierung von Kundenkontakten und Konvertieren), E = Engage/Engagement (Kunden an Wertschöpfungsprozessen beteiligen).'
          },
          {
            type: 'svg',
            title: 'RACE-Framework: Zielkategorien im digitalen Marketing',
            svg: '<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="rc-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">RACE-Framework</text><rect x="20" y="50" width="155" height="75" rx="10" fill="#0891b2"/><text x="97" y="75" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">R – Reach</text><text x="97" y="93" text-anchor="middle" fill="#cffafe" font-size="9">Reichweite aufbauen</text><text x="97" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Neue Kunden gewinnen</text><line x1="180" y1="87" x2="193" y2="87" stroke="#0891b2" stroke-width="2" marker-end="url(#rc-arr)"/><rect x="197" y="50" width="155" height="75" rx="10" fill="#0e7490"/><text x="274" y="75" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">A – Act</text><text x="274" y="93" text-anchor="middle" fill="#cffafe" font-size="9">Interaktion steigern</text><text x="274" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Engagement fördern</text><line x1="357" y1="87" x2="370" y2="87" stroke="#0891b2" stroke-width="2" marker-end="url(#rc-arr)"/><rect x="374" y="50" width="155" height="75" rx="10" fill="#155e75"/><text x="451" y="75" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">C – Convert</text><text x="451" y="93" text-anchor="middle" fill="#cffafe" font-size="9">Konvertieren</text><text x="451" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Leads → Kunden</text><line x1="534" y1="87" x2="547" y2="87" stroke="#0891b2" stroke-width="2" marker-end="url(#rc-arr)"/><rect x="551" y="50" width="130" height="75" rx="10" fill="#164e63"/><text x="616" y="75" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">E – Engage</text><text x="616" y="93" text-anchor="middle" fill="#cffafe" font-size="9">Engagement</text><text x="616" y="108" text-anchor="middle" fill="#cffafe" font-size="8">Kunden beteiligen</text><rect x="150" y="145" width="400" height="25" rx="6" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/><text x="350" y="163" text-anchor="middle" fill="#164e63" font-size="10" font-weight="600">Stärker auf digitale Aktivitäten ausgelegt als die 5-S-Ziele</text></svg>'
          },
          {
            type: 'concept',
            title: '4.2.5 Konkretisierung der Ziele: SMART',
            content: 'Die Zielsetzung wird konkretisiert, indem Sie sie SMART machen. Damit sie messbar sind (Erfolg oder Misserfolg), braucht es sogenannte KPIs - Key Performance Indicators, also Schlüsselkennzahlen für die Leistung des Unternehmens.',
            highlight: 'SMART: S = spezifisch, M = messbar, A = aktionsorientiert (achievable), R = realistisch, T = terminiert. Beispiele für KPIs: Anzahl Online-Bestellungen, Umsatz des E-Commerce-Bereichs, Anzahl Downloads, Besucherzahlen der Website, Anzahl neuer Kunden.'
          },
          {
            type: 'concept',
            title: '4.3 Strategien',
            content: 'Bei der Definition einer digitalen Marketingstrategie stehen drei Überlegungen im Zentrum: Die Markenstrategie (Vorgaben für Sprache, Bild, Tonalität, Qualität), die Content-Strategie (Produkte in spannende Geschichten verpacken) und die Kommunikationsstrategie (welche Instrumente passen zum Unternehmen).',
            highlight: 'Content Marketing ist ein Kernelement oder sogar eine Voraussetzung für erfolgreiches digitales Marketing. 8 Qualitätskriterien: Einzigartigkeit, Emotionen, Relevanz/Mehrwert, Multimedialität, Zielgruppengerechter Umfang, Zeitpunkt, Personalisierung, Qualität statt Quantität.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Zielgruppen im digitalen Marketing entsprechen den klassischen Zielgruppen, können aber dank digitaler Tools detaillierter definiert werden.',
              'Personas sind FIKTIVE Personen mit Story, die eine Zielgruppe repräsentieren - basierend auf realen Daten.',
              'Die 5-S-Ziele: Sell, Serve, Sizzle, Speak, Save.',
              'RACE-Framework: Reach, Act, Convert, Engage.',
              'Ziele müssen SMART sein: Spezifisch, Messbar, Aktionsorientiert, Realistisch, Terminiert.',
              'Content Marketing: Nicht das Unternehmen steht im Mittelpunkt, sondern der Kunde und seine Geschichten.',
              'Die wichtigste Voraussetzung für Sizzle ist, dass bekannt ist, was die Zielgruppe begeistert.',
              'Im Content Marketing ist Authentizität entscheidend - unwahre Inhalte zerstören Vertrauen.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Zielgruppen</strong> im digitalen Marketing entsprechen den Zielgruppen im klassischen Marketing. Dank digitaler Tools können sie aber viel detaillierter definiert werden. Neben Zielgruppen werden oft <strong>Personas</strong> erstellt - fiktive Personen, die dazu dienen, Zielgruppen mit ihren Motiven, Bedürfnissen und Zielen zu repräsentieren.',
              '<strong>Ziele</strong> werden oft mittels der <strong>5 S</strong> (Sell, Serve, Sizzle, Speak, Save) oder des <strong>RACE-Frameworks</strong> (Reach, Act, Convert, Engage) erarbeitet und anschliessend mit der <strong>SMART-Methode</strong> konkretisiert (spezifisch, messbar, aktionsorientiert, realistisch, terminiert).',
              '<strong>Strategien</strong> umfassen drei Bereiche: <strong>Markenstrategie</strong> (Vorgaben für Sprache, Bild, Tonalität), <strong>Content-Strategie</strong> (Produkte in spannende Geschichten verpacken) und <strong>Kommunikationsstrategie</strong> (Instrumente wählen, die zu Unternehmen und Zielen passen).'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 5: Instrumente - Teil 1 (S.78-95)
    // ============================================================
    {
      id: 'ch5', num: 'Kapitel 5', title: 'Instrumente - Teil 1',
      exercises: [
        {
          id: 37, type: 'text',
          q: 'Vorteile der Online-Werbung',
          instruction: 'Nennen Sie 4 Vorteile der Online-Werbung gegenüber der klassischen Werbung.',
          questions: [
            { q: '4 Vorteile der Online-Werbung:', keywords: ['reichweite','verfügbarkeit','kosten','flexibel','branding','messbar','echtzeit','skalier','zielgrupp','günstig'], minKeywords: 4 }
          ],
          tips: [
            'Denken Sie an Reichweite, Kosten, Flexibilität und Branding.',
            'Online-Werbung hat geringere Einstiegskosten.',
            'Sie bietet hohe Verfügbarkeit und Messbarkeit.'
          ],
          reveal: [
            '1) Grössere Reichweite',
            '2) Hohe Verfügbarkeit',
            '3) Geringe Einstiegskosten',
            '4) Hohe Flexibilität',
            '5) Starker Einfluss auf das Branding'
          ]
        },
        {
          id: 38, type: 'text',
          q: 'Promotions-Tools im digitalen Marketing',
          instruction: 'Welche 5 Arten von Promotions-Tools im digitalen Marketing sind Ihnen bekannt?',
          questions: [
            { q: '5 Promotions-Tools:', keywords: ['werbung','display','affiliate','verkaufsförderung','suchmaschine','pr','public relation','online pr','direktmarketing','e-mail','social','influencer','persönlich'], minKeywords: 4 }
          ],
          tips: [
            'Es geht um die klassischen Promotions-Tools, angepasst an digitale Kanäle.',
            'Denken Sie an Werbung, PR, Direktmarketing, Social Media und persönlichen Verkauf.'
          ],
          reveal: [
            'A) Werbung - Display-Werbung und damit verbunden Affiliate Marketing',
            'B) Verkaufsförderung - Suchmaschinenmarketing, digitales Marketing auf der Website',
            'C) Public Relations - Online PR',
            'D) Direktmarketing - E-Mail-Marketing, Social Commerce und Bewertungsplattformen',
            'E) Persönlicher Verkauf - Social Media Marketing, Influencer Marketing'
          ]
        },
        {
          id: 39, type: 'text',
          q: 'Bannerformate in der Online-Werbung',
          instruction: 'Nennen Sie 3 gängige Bannerformate in der Online-Werbung.',
          questions: [
            { q: '3 Bannerformate:', keywords: ['halfpage','skyscraper','leaderboard','bigsize','hockey','medium rectangle','layer','billboard','wallpaper'], minKeywords: 3 }
          ],
          tips: [
            'Es gibt viele verschiedene Bannerformate.',
            'Denken Sie an Halfpage Ad, Skyscraper, Leaderboard, Medium Rectangle etc.'
          ],
          reveal: [
            'Gängige Bannerformate sind z.B.: Halfpage Ad, Skyscraper Ad, Leaderboard/Bigsize, Hockey Stick, Medium Rectangle, Layer Ad, Billboard, Wallpaper.'
          ]
        },
        {
          id: 40, type: 'text',
          q: 'Vorteile des Suchmaschinenmarketings',
          instruction: 'Nennen Sie 2 Vorteile des Suchmaschinenmarketings.',
          questions: [
            { q: '2 Vorteile von SEM:', keywords: ['kurzfristig','buchbar','position','kapital','erfolgsorientiert','zahlt','klick','flexibel','skalier','echtzeit','messbar'], minKeywords: 2 }
          ],
          tips: [
            'Suchmaschinenmarketing (SEM) umfasst SEO und SEA.',
            'SEA-Anzeigen sind kurzfristig buchbar und erfolgsorientiert.',
            'Die Positionierung kann über das Budget gesteuert werden.'
          ],
          reveal: [
            'A) Anzeigen sind kurzfristig buchbar.',
            'B) Die Positionierung kann über das investierte Kapital gesteuert werden.',
            'C) Die Werbung ist erfolgsorientiert - man zahlt nur bei Klick.',
            'D) Kampagnen haben einen hohen Grad an Flexibilität.',
            'E) Kampagnen lassen sich gut skalieren.',
            'F) Der Erfolg kann in Echtzeit gemessen werden.'
          ]
        },
        {
          id: 41, type: 'text',
          q: 'Herausforderung bei Schlüsselwörtern',
          instruction: 'Warum kann die Auswahl geeigneter Schlüsselwörter eine Herausforderung sein?',
          questions: [
            { q: 'Herausforderung bei Keywords:', keywords: ['konkurrenz','abheben','generisch','häufig','gesucht','unbekannt','suchmaschine','synonym','kunde','eingibt'], minKeywords: 3 }
          ],
          tips: [
            'Man muss sich von der Konkurrenz abheben.',
            'Keywords müssen genug gesucht werden.',
            'Man weiss oft nicht genau, was Kunden eingeben.'
          ],
          reveal: [
            'Die Auswahl kann eine Herausforderung sein, da man sich auf der einen Seite von der Konkurrenz abheben muss, auf der anderen Seite aber auch generisch genug sein müssen, damit sie oft genug gesucht werden.',
            'Zudem ist oft unbekannt, was genau die Kunden in der Suchmaschine eingeben - sie nutzen vielleicht Synonyme oder Begriffe, die dem Marketing nicht bekannt sind.'
          ]
        },
        {
          id: 42, type: 'match',
          q: 'Google Ads Prozess - Reihenfolge',
          instruction: 'Bringen Sie die Schritte des Google Ads Prozesses in die richtige Reihenfolge.',
          pairs: [
            { l: 'Schritt 1', r: 'Festlegung, ob die Schaltung im Suchnetzwerk erfolgen soll' },
            { l: 'Schritt 2', r: 'Auswahl der Endgeräte, auf denen die Werbung angezeigt werden soll' },
            { l: 'Schritt 3', r: 'Festlegung des Tagesbudgets' },
            { l: 'Schritt 4', r: 'Erfassung des Anzeigentexts' },
            { l: 'Schritt 5', r: 'Erfassung der Zahlungsmodalitäten' }
          ],
          options: [
            'Festlegung, ob die Schaltung im Suchnetzwerk erfolgen soll',
            'Auswahl der Endgeräte, auf denen die Werbung angezeigt werden soll',
            'Festlegung des Tagesbudgets',
            'Erfassung des Anzeigentexts',
            'Erfassung der Zahlungsmodalitäten'
          ],
          tips: [
            'Der Prozess beginnt mit der Festlegung des Netzwerks.',
            'Der Anzeigentext wird vor den Zahlungsmodalitäten erfasst.'
          ],
          reveal: [
            '1. Festlegung, ob die Schaltung im Suchnetzwerk erfolgen soll.',
            '2. Auswahl der Endgeräte.',
            '3. Festlegung des Tagesbudgets.',
            '4. Erfassung des Anzeigentexts.',
            '5. Erfassung der Zahlungsmodalitäten.'
          ]
        },
        {
          id: 43, type: 'match',
          q: 'Digitaler Marketingmix (4 P)',
          instruction: 'Ordnen Sie die 4 P des digitalen Marketingmix den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Product', r: 'Produkt- und Sortimentsgestaltung im digitalen Kontext' },
            { l: 'Price', r: 'Preisgestaltung und Online-Preismodelle' },
            { l: 'Place', r: 'Distribution und Verfügbarkeit über digitale Kanäle' },
            { l: 'Promotion', r: 'Kommunikation und Werbung über digitale Instrumente' }
          ],
          options: [
            'Produkt- und Sortimentsgestaltung im digitalen Kontext',
            'Preisgestaltung und Online-Preismodelle',
            'Distribution und Verfügbarkeit über digitale Kanäle',
            'Kommunikation und Werbung über digitale Instrumente'
          ],
          tips: [
            'Die 4 P gelten auch im digitalen Marketing.',
            'Sie werden um digitale Aspekte ergänzt.'
          ],
          reveal: [
            'Product = Produkt- und Sortimentsgestaltung.',
            'Price = Preisgestaltung und Online-Preismodelle.',
            'Place = Distribution über digitale Kanäle.',
            'Promotion = Kommunikation und Werbung digital.'
          ]
        },
        {
          id: 44, type: 'tf',
          q: 'SEO vs. SEA unterscheiden',
          instruction: 'Sind die folgenden Aussagen richtig oder falsch?',
          statements: [
            { s: 'SEO steht für Search Engine Optimization und ist eine bezahlte Massnahme.', c: false },
            { s: 'SEA steht für Search Engine Advertising und umfasst bezahlte Anzeigen.', c: true },
            { s: 'SEM ist der Oberbegriff für SEO und SEA.', c: true },
            { s: 'Bei SEA zahlt man pro Einblendung der Anzeige.', c: false },
            { s: 'SEO-Massnahmen wirken langfristig, während SEA kurzfristig wirkt.', c: true }
          ],
          tips: [
            'SEO ist organisch (unbezahlt), SEA ist bezahlt.',
            'SEM umfasst beides.',
            'Bei SEA zahlt man typischerweise pro Klick (CPC).'
          ],
          reveal: [
            'SEO bezahlt: Falsch - SEO ist die organische (unbezahlte) Optimierung.',
            'SEA bezahlt: Richtig.',
            'SEM Oberbegriff: Richtig.',
            'SEA zahlt pro Einblendung: Falsch - man zahlt typischerweise pro Klick (CPC).',
            'SEO langfristig: Richtig - SEO braucht Zeit, wirkt aber nachhaltig.'
          ]
        },
        {
          id: 45, type: 'mc',
          q: 'Arten von Online-Anzeigen',
          instruction: 'Welche der folgenden gehören zu den gängigen Online-Werbeformaten?',
          options: [
            'Halfpage Ad',
            'Skyscraper Ad',
            'Leaderboard / Bigsize',
            'Medium Rectangle',
            'Printanzeige',
            'Layer Ad',
            'Radiowerbung'
          ],
          correct: [0, 1, 2, 3, 5],
          multi: true,
          tips: [
            'Es geht um digitale Werbeformate.',
            'Printanzeige und Radiowerbung sind klassische, nicht digitale Formate.'
          ],
          reveal: [
            'Halfpage Ad, Skyscraper Ad, Leaderboard/Bigsize, Medium Rectangle und Layer Ad sind gängige Online-Werbeformate.',
            'Printanzeige und Radiowerbung sind klassische (nicht digitale) Werbeformate.'
          ]
        },
        {
          id: 46, type: 'text',
          q: 'Keyword-Strategie',
          instruction: 'Was müssen Sie bei der Auswahl von Keywords für SEO und SEA beachten? Nennen Sie drei wichtige Punkte.',
          questions: [
            { q: 'Drei Punkte zur Keyword-Auswahl:', keywords: ['relevant','suchvolumen','konkurrenz','spezifisch','generisch','long-tail','synonym','kunde','sucht','balance'], minKeywords: 3 }
          ],
          tips: [
            'Keywords müssen relevant und gleichzeitig häufig genug gesucht werden.',
            'Die Konkurrenz um bestimmte Keywords spielt eine Rolle.',
            'Long-Tail-Keywords können eine gute Alternative sein.'
          ],
          reveal: [
            '1) Keywords müssen relevant für das Angebot sein und gleichzeitig genug Suchvolumen haben.',
            '2) Man muss die Konkurrenz berücksichtigen - bei sehr beliebten Keywords ist es schwieriger.',
            '3) Keywords sollten 3-5% des Textes ausmachen und natürlich integriert werden.'
          ]
        }
      ],
      learningData: {
        title: 'Instrumente - Teil 1',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Einfluss des digitalen Marketings auf die 4 P erläutern und Beispiele nennen.',
              'einen digitalen Marketingmix erstellen.',
              'die Funktionsweise von Online Ads (Display-Werbung und Affiliate Marketing) erläutern sowie deren Eignung und Wirkung abschätzen.',
              'erklären, was SEO (Search Engine Optimization) bedeutet und welche Aspekte zu einem guten Page Ranking führen.',
              'die Funktionsweise und Vorteile von SEA (Search Engine Advertising) beschreiben.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'Affiliate Marketing', 'Backlinks', 'Display-Werbung', 'Dynamic Pricing',
              'Keywords (Schlüsselwörter)', 'Marketingmix (4 P)', 'Off-Site-Optimierung',
              'On-Site-Optimierung', 'Page Ranking', 'SEA (Search Engine Advertising)',
              'SEM (Suchmaschinenmarketing)', 'SEO (Suchmaschinenoptimierung)',
              'Social Signals', 'User Experience', 'User Signals'
            ]
          },
          {
            type: 'concept',
            title: '5.1 Der digitale Marketingmix (4 P)',
            content: 'Der Marketingmix, die 4 P des Marketings, setzt sich aus den 4 Instrumenten Produktpolitik (Product), Preispolitik (Price), Distributionspolitik (Place) und Kommunikationspolitik (Promotion) zusammen. Das digitale Marketing wirkt bei allen 4 P aktiv mit, wird aber vorwiegend im Bereich der Kommunikationspolitik eingesetzt.',
            highlight: 'Digitale Erweiterungen der 4 P: Product (datenbasierte Angebotsgestaltung, personalisierter Service), Price (Dynamic Pricing, nachfrageorientierte Preisanpassungen), Place (Onlineshops, Serviceplattformen), Promotion (Online Ads, SEO/SEA, Social Media, E-Mail-Marketing, Influencer Marketing).'
          },
          {
            type: 'concept',
            title: '5.2 Online Ads (Online-Anzeigen)',
            content: 'Die Vorteile von Online-Werbung gegenüber klassischer Werbung sind: Grössere Reichweite, hohe Verfügbarkeit, geringe Einstiegskosten, hohe Flexibilität, starker Einfluss auf das Branding, mögliche Interaktionen, zielgruppenspezifische oder individuelle Ansprache.',
            highlight: 'Zwei Formen von Online Ads: Display-Werbung (Bannerwerbung) und Affiliate Marketing (Partnermarketing). Bei Affiliate Marketing bewerben Partnerunternehmen (Affiliates) die Produkte auf ihren Webseiten und erhalten eine Provision bei erfolgreicher Transaktion.'
          },
          {
            type: 'concept',
            title: '5.3 Suchmaschinenmarketing (SEM)',
            content: 'Suchmaschinenmarketing (SEM) umfasst zwei Bereiche: SEO (Suchmaschinenoptimierung) und SEA (Suchmaschinenwerbung). SEO steht für Search Engine Optimization, also die Optimierung der Online-Inhalte für Suchmaschinen. Ein hohes Ranking erhält eine Seite mit spannenden Inhalten und geeigneten Schlüsselwörtern, hoher Anzahl an Backlinks, hohem Traffic, professioneller Technik, gutem Anwendererlebnis und hoher Zahl an Social Signals.',
            highlight: 'SEO = organische (unbezahlte) Optimierung, wirkt langfristig. SEA = bezahlte Anzeigen (z.B. Google Ads), wirkt kurzfristig. Bei SEA zahlt man nur bei Klick (erfolgsorientiert).'
          },
          {
            type: 'svg',
            title: 'SEO vs. SEA im Vergleich',
            svg: '<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="400" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">SEO vs. SEA</text><text x="350" y="52" text-anchor="middle" font-size="12" fill="#94a3b8">Zwei Säulen des Suchmaschinenmarketings (SEM)</text><rect x="40" y="75" width="300" height="280" rx="16" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/><text x="190" y="105" text-anchor="middle" font-size="16" font-weight="700" fill="#0891b2">SEO</text><text x="190" y="122" text-anchor="middle" font-size="11" fill="#64748b">Search Engine Optimization</text><line x1="80" y1="135" x2="300" y2="135" stroke="#cffafe" stroke-width="1"/><text x="80" y="160" font-size="12" fill="#164e63" font-weight="600">Kosten:</text><text x="160" y="160" font-size="12" fill="#164e63">Keine Klickkosten</text><text x="80" y="185" font-size="12" fill="#164e63" font-weight="600">Wirkung:</text><text x="160" y="185" font-size="12" fill="#164e63">Langfristig</text><text x="80" y="210" font-size="12" fill="#164e63" font-weight="600">Ergebnis:</text><text x="160" y="210" font-size="12" fill="#164e63">Organisches Ranking</text><text x="80" y="235" font-size="12" fill="#164e63" font-weight="600">Aufwand:</text><text x="160" y="235" font-size="12" fill="#164e63">Hoch (Content, Technik)</text><text x="80" y="260" font-size="12" fill="#164e63" font-weight="600">Kontrolle:</text><text x="160" y="260" font-size="12" fill="#164e63">Begrenzt</text><rect x="80" y="280" width="220" height="55" rx="8" fill="#cffafe"/><text x="190" y="300" text-anchor="middle" font-size="10" fill="#0e7490" font-weight="600">On-Site: Inhalte, Keywords, Technik</text><text x="190" y="316" text-anchor="middle" font-size="10" fill="#0e7490" font-weight="600">Off-Site: Backlinks, Social Signals</text><text x="190" y="332" text-anchor="middle" font-size="10" fill="#0e7490" font-weight="600">User Signals: Verweildauer, Klicks</text><rect x="360" y="75" width="300" height="280" rx="16" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/><text x="510" y="105" text-anchor="middle" font-size="16" font-weight="700" fill="#e11d48">SEA</text><text x="510" y="122" text-anchor="middle" font-size="11" fill="#64748b">Search Engine Advertising</text><line x1="400" y1="135" x2="620" y2="135" stroke="#fecdd3" stroke-width="1"/><text x="400" y="160" font-size="12" fill="#881337" font-weight="600">Kosten:</text><text x="480" y="160" font-size="12" fill="#881337">Pay-per-Click (PPC)</text><text x="400" y="185" font-size="12" fill="#881337" font-weight="600">Wirkung:</text><text x="480" y="185" font-size="12" fill="#881337">Kurzfristig</text><text x="400" y="210" font-size="12" fill="#881337" font-weight="600">Ergebnis:</text><text x="480" y="210" font-size="12" fill="#881337">Bezahlte Anzeigen</text><text x="400" y="235" font-size="12" fill="#881337" font-weight="600">Aufwand:</text><text x="480" y="235" font-size="12" fill="#881337">Gering (schnell startbar)</text><text x="400" y="260" font-size="12" fill="#881337" font-weight="600">Kontrolle:</text><text x="480" y="260" font-size="12" fill="#881337">Hoch (Budget, Keywords)</text><rect x="400" y="280" width="220" height="55" rx="8" fill="#fecdd3"/><text x="510" y="300" text-anchor="middle" font-size="10" fill="#9f1239" font-weight="600">Google Ads: Textanzeigen</text><text x="510" y="316" text-anchor="middle" font-size="10" fill="#9f1239" font-weight="600">Erfolgsorientiert (nur bei Klick)</text><text x="510" y="332" text-anchor="middle" font-size="10" fill="#9f1239" font-weight="600">Echtzeit-Messung möglich</text><rect x="270" y="370" width="160" height="24" rx="6" fill="#0891b2"/><text x="350" y="387" text-anchor="middle" font-size="12" fill="#fff" font-weight="600">SEO + SEA = SEM</text></svg>'
          },
          {
            type: 'concept',
            title: '5.3.3 Suchmaschinenwerbung (SEA)',
            content: 'Bei SEA (Search Engine Advertising) handelt es sich um die entgeltliche Platzierung von kommerziellen Anzeigen, zunächst in Form einer kurzen Textbeschreibung. Vorteile: Anzeigen sind kurzfristig buchbar, die Positionierung kann über das investierte Kapital gesteuert werden, die Werbung ist erfolgsorientiert, Kampagnen haben hohe Flexibilität, sie lassen sich gut skalieren, und der Erfolg kann in Echtzeit gemessen werden.',
            highlight: 'Der Google Ads Prozess: 1) Festlegung des Netzwerks, 2) Auswahl der Endgeräte, 3) Festlegung des Tagesbudgets, 4) Erfassung des Anzeigentexts, 5) Definition der Schlüsselwörter, 6) Erfassung der Zahlungsmodalitäten.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Der digitale Marketingmix erweitert die klassischen 4 P um digitale Aspekte.',
              'Die Kommunikationspolitik (Promotion) ist der wichtigste Bereich für digitales Marketing.',
              'Die 5 Kommunikationsinstrumente: Werbung, Verkaufsförderung, PR, Direktmarketing, Persönlicher Verkauf.',
              'SEO (organisch, langfristig) und SEA (bezahlt, kurzfristig) bilden zusammen SEM (Suchmaschinenmarketing).',
              'Bei SEA zahlt man nur bei Klick - die Werbung ist erfolgsorientiert.',
              'Affiliate Marketing = Partnermarketing - Kosten entstehen nur bei erfolgreicher Transaktion.',
              'Die Auswahl geeigneter Keywords ist eine Herausforderung: genug gesucht und trotzdem differenzierend.',
              'On-Site-Optimierung (Inhalte, Technik) und Off-Site-Optimierung (Backlinks, Social Signals) sind beide für SEO wichtig.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Jedem der <strong>4 P</strong> im digitalen Marketingmix können unterschiedliche Instrumente des digitalen Marketings zugeordnet werden. Das digitale Marketing wird zwar vorwiegend im Bereich der <strong>Kommunikationspolitik</strong> eingesetzt, kann aber auch die Produktpolitik, die Preispolitik und die Distributionspolitik unterstützen.',
              'Die Kommunikationsinstrumente umfassen: <strong>Werbung</strong> (Display-Werbung, Affiliate Marketing), <strong>Verkaufsförderung</strong> (Search Engine Marketing, Marketing auf der Website), <strong>PR</strong> (Online PR), <strong>Direktmarketing</strong> (E-Mail-Marketing, Social Commerce), <strong>Persönlicher Verkauf</strong> (Social Media Marketing, Influencer Marketing).',
              '<strong>SEO</strong> optimiert Inhalte für Suchmaschinen (organisch, langfristig). <strong>SEA</strong> platziert bezahlte Anzeigen (kurzfristig buchbar, erfolgsorientiert, in Echtzeit messbar). Beide zusammen bilden <strong>SEM</strong>.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 6: Instrumente - Teil 2 (S.96-113)
    // ============================================================
    {
      id: 'ch6', num: 'Kapitel 6', title: 'Instrumente - Teil 2',
      exercises: [
        {
          id: 47, type: 'match',
          q: 'Erscheinungsformen einer Website',
          instruction: 'Ordnen Sie die Erscheinungsformen einer Website den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Corporate Website', r: 'Seite mit allen relevanten Informationen rund um das Unternehmen und dessen Produkte' },
            { l: 'Onlineshop', r: 'E-Commerce-Website für den Online-Verkauf von Produkten und Dienstleistungen' },
            { l: 'Microsite', r: 'Projekt- oder themenbezogene Seite, oft im Zusammenhang mit Kampagnen' },
            { l: 'Portal', r: 'Seite, die Informationen und Angebote bündelt (z.B. Reiseportal)' }
          ],
          options: [
            'Seite mit allen relevanten Informationen rund um das Unternehmen und dessen Produkte',
            'E-Commerce-Website für den Online-Verkauf von Produkten und Dienstleistungen',
            'Projekt- oder themenbezogene Seite, oft im Zusammenhang mit Kampagnen',
            'Seite, die Informationen und Angebote bündelt (z.B. Reiseportal)'
          ],
          tips: [
            'Es gibt vier Haupterscheinungsformen von Websites.',
            'Jede hat einen spezifischen Zweck.'
          ],
          reveal: [
            'Corporate Website: Alle Infos zum Unternehmen und Produkten.',
            'Onlineshop: E-Commerce für Online-Verkauf.',
            'Microsite: Projekt-/themenbezogene Kampagnenseite.',
            'Portal: Bündelt Informationen und Angebote.'
          ]
        },
        {
          id: 48, type: 'text',
          q: 'Blog vs. Unternehmens-Website',
          instruction: 'Welche Vorteile hat ein Blog gegenüber einer klassischen Unternehmens-Website aus Sicht des Marketings?',
          questions: [
            { q: 'Vorteile eines Blogs:', keywords: ['persönlich','kommunizier','kreativ','starr','autoren','wort','offen','flexibel','inhalt','aktuell'], minKeywords: 3 }
          ],
          tips: [
            'Ein Blog ist persönlicher und kreativer als eine Website.',
            'Verschiedene Autoren können zu Wort kommen.',
            'Blogs sind flexibler in der Inhaltserstellung.'
          ],
          reveal: [
            'Ein Blog eignet sich sehr gut, um in einer persönlichen Art zu kommunizieren.',
            'Die Website ist meistens etwas starr und lässt nicht so viele Möglichkeiten für Kreativität offen.',
            'Im Blog ist es möglich, diverse Autoren zu Wort kommen zu lassen.'
          ]
        },
        {
          id: 49, type: 'text',
          q: 'Anzahl Social-Media-Kanäle',
          instruction: 'Wie viele Social-Media-Kanäle sollte ein Unternehmen generell managen? Bitte argumentieren Sie mit 3-5 Sätzen.',
          questions: [
            { q: 'Anzahl Kanäle:', keywords: ['wenig','qualität','ressourcen','zielgruppe','kanal','betreuen','potenzial','erfolgreich','grundsatz'], minKeywords: 3 }
          ],
          tips: [
            'Grundsätzlich gilt: Weniger ist mehr!',
            'Die Auswahl richtet sich nach bestimmten Kriterien.',
            'Qualität geht vor Quantität.'
          ],
          reveal: [
            'Die Anzahl richtet sich nach: Auf welchen Kanälen sind die Zielgruppen aktiv? Wie viele Ressourcen stehen zur Verfügung? Auf welchem Kanal hat man das grösste Potenzial?',
            'Grundsätzlich gilt: Weniger ist oft mehr. Lieber wenige Kanäle sehr gut betreuen als viele Kanäle mit mittelmässiger Qualität.'
          ]
        },
        {
          id: 50, type: 'text',
          q: 'Influencer Marketing - Bedeutung',
          instruction: 'Warum hat Influencer Marketing so stark an Bedeutung gewonnen?',
          questions: [
            { q: 'Bedeutung von Influencer Marketing:', keywords: ['meinungsmacher','community','vertrauen','botschaft','wahrgenommen','authentisch','informationsflut','transparenz','wettbewerb'], minKeywords: 3 }
          ],
          tips: [
            'Influencer sind Meinungsmacher mit einer reichweitenstarken Community.',
            'Botschaften von Influencern werden als vertrauensvoller wahrgenommen.',
            'In der heutigen Informationsflut ist Vertrauen ein Wettbewerbsvorteil.'
          ],
          reveal: [
            'Influencer sind Meinungsmacher, denen Fans und ihre Community starkes Vertrauen entgegenbringen.',
            'Botschaften eines Unternehmens werden bei der Zielgruppe eher wahrgenommen, wenn sie ein Influencer sendet.',
            'Empfänger nehmen sie als vertrauensvoller und authentischer wahr.',
            'In der heutigen Informationsflut kann Vertrauen und Transparenz ein bedeutender Wettbewerbsvorteil sein.'
          ]
        },
        {
          id: 51, type: 'check',
          q: 'Aussagen zum Influencer Marketing',
          instruction: 'Kreuzen Sie die zutreffenden Aussagen zum Influencer Marketing an.',
          statements: [
            { s: 'Influencer sind Personen, die andere über die Online-Kanäle beeinflussen können.', c: true },
            { s: 'Das Ziel des Influencer Marketings ist, möglichst viele Personen zu erreichen.', c: false },
            { s: 'Es ist einfach für Unternehmen, gute Influencer zu finden.', c: false }
          ],
          tips: [
            'Influencer haben Einfluss über Online-Kanäle.',
            'Das Ziel ist nicht nur Reichweite, sondern Glaubwürdigkeit.',
            'Gute Influencer zu finden, ist eine Herausforderung.'
          ],
          reveal: [
            'Beeinflussen über Online-Kanäle: Trifft zu.',
            'Möglichst viele Personen erreichen: Trifft nicht zu - es geht um die richtigen Personen, nicht nur viele.',
            'Einfach gute Influencer finden: Trifft nicht zu - es ist eine Herausforderung.'
          ]
        },
        {
          id: 52, type: 'text',
          q: 'Social Media Marketing Fragen',
          instruction: 'Welche Fragen sollten bei der Umsetzung einer Social-Media-Strategie beantwortet werden?',
          questions: [
            { q: 'Fragen für Social-Media-Strategie:', keywords: ['kanal','tageszeit','inhalt','gestalt','post','kritisch','kommunikation','umgehen','wann','was','wie'], minKeywords: 3 }
          ],
          tips: [
            'Es geht um die praktische Umsetzung.',
            'Welche Kanäle, wann posten, wie gestalten?',
            'Der Umgang mit kritischer Kommunikation ist wichtig.'
          ],
          reveal: [
            '1) Welche Kanäle werden bewirtschaftet?',
            '2) Zu welcher Tageszeit wird gepostet?',
            '3) Welches Vorgehen ist für die Gestaltung der Inhalte definiert?',
            '4) Wie umgehen mit kritischer Kommunikation?'
          ]
        },
        {
          id: 53, type: 'tf',
          q: 'E-Mail-Marketing Grundlagen',
          instruction: 'Sind die folgenden Aussagen zum E-Mail-Marketing richtig oder falsch?',
          statements: [
            { s: 'E-Mail-Marketing umfasst den strategischen Einsatz von E-Mail, um Empfänger auf eine Online-Präsenz zu lenken.', c: true },
            { s: 'Für E-Mail-Marketing braucht man kein Einverständnis der Empfänger.', c: false },
            { s: 'Ein Newsletter sollte immer einen Call-to-Action enthalten.', c: true },
            { s: 'Die Öffnungsrate ist eine wichtige Kennzahl im E-Mail-Marketing.', c: true }
          ],
          tips: [
            'E-Mail-Marketing muss rechtlich konform sein (Double-Opt-in).',
            'Jede E-Mail sollte ein klares Ziel haben.',
            'Kennzahlen wie Öffnungsrate und Klickrate sind wichtig.'
          ],
          reveal: [
            'Strategischer Einsatz: Richtig.',
            'Kein Einverständnis: Falsch - Double-Opt-in ist rechtlich erforderlich.',
            'Call-to-Action: Richtig - jede E-Mail braucht ein Ziel.',
            'Oeffnungsrate wichtig: Richtig - sie zeigt, wie attraktiv der Betreff ist.'
          ]
        },
        {
          id: 54, type: 'text',
          q: 'Social Commerce und Bewertungsplattformen',
          instruction: 'Was versteht man unter Social Commerce und welche Vorteile hat die Nutzung von Bewertungsplattformen?',
          questions: [
            { q: 'Social Commerce und Bewertungsplattformen:', keywords: ['verkauf','social','media','produkt','bewert','interaktion','kunde','like','share','mundpropaganda','vertrauen'], minKeywords: 3 }
          ],
          tips: [
            'Social Commerce ermöglicht Verkauf über Social Media.',
            'Bewertungsplattformen schaffen Vertrauen.',
            'Interaktion zwischen Unternehmen und Kunden steht im Zentrum.'
          ],
          reveal: [
            'Social Commerce = Möglichkeit, ein Produkt innerhalb der eigenen Social-Media-Seiten zu verkaufen.',
            'Das Produkt kann von den Nutzern auch direkt auf Social Media bewertet werden.',
            'Vorteile: Interaktion mit Kunden (durch Likes/Shares/Bewertungen) und Interaktion zwischen Kunden (Mundpropaganda).'
          ]
        },
        {
          id: 55, type: 'text',
          q: 'Redaktionsplan erstellen',
          instruction: 'Was ist ein Redaktionsplan und warum ist er wichtig für das Content Marketing?',
          questions: [
            { q: 'Redaktionsplan:', keywords: ['plan','zeitlich','inhalt','organis','content','regelmässig','qualität','übersicht','kanal','themen'], minKeywords: 3 }
          ],
          tips: [
            'Ein Redaktionsplan organisiert Inhalte zeitlich.',
            'Er hilft bei der regelmässigen Veröffentlichung.',
            'Er gibt eine Übersicht über Themen, Kanäle und Zeitpunkte.'
          ],
          reveal: [
            'Ein Redaktionsplan ist ein zeitlicher und inhaltlicher Organisationsplan für Content-Marketing-Aktivitäten.',
            'Er ist wichtig, um regelmässig qualitativ hochwertige Inhalte zu veröffentlichen.',
            'Er enthält: Themen, Kanäle, Zeitpunkte, Verantwortliche und Format der Inhalte.'
          ]
        },
        {
          id: 56, type: 'tf',
          q: 'Online PR erklären',
          instruction: 'Sind die folgenden Aussagen zur Online PR richtig oder falsch?',
          statements: [
            { s: 'Bei der Online PR werden Kunden und Interessenten direkt adressiert.', c: false },
            { s: 'Online PR versucht, Aufmerksamkeit und Bekanntheit über die Zusammenarbeit mit Medien zu steigern.', c: true },
            { s: 'Online PR richtet sich an das Umfeld des Unternehmens.', c: true },
            { s: 'Online PR und Online-Werbung sind dasselbe.', c: false }
          ],
          tips: [
            'PR adressiert nicht direkt die Kunden.',
            'PR arbeitet mit Medien und dem Unternehmensumfeld.'
          ],
          reveal: [
            'Direkte Adressierung: Falsch - PR adressiert indirekt über Medien.',
            'Aufmerksamkeit über Medien: Richtig.',
            'Umfeld des Unternehmens: Richtig.',
            'PR = Werbung: Falsch - PR ist redaktionell, Werbung ist bezahlt.'
          ]
        }
      ],
      learningData: {
        title: 'Instrumente - Teil 2',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die unterschiedlichen Erscheinungsformen von Webseiten beschreiben.',
              'erläutern, was es bei der Umsetzung von Social Media Marketing in der Praxis zu beachten gibt.',
              'die Chancen und Risiken von Influencer Marketing beurteilen.',
              'die Funktionsweise von Social Commerce und Bewertungsplattformen erläutern sowie deren Wirkung abschätzen.',
              'rechtlich konforme und wirkungsstarke E-Mail-Marketing-Massnahmen planen.',
              'das Kosten-Nutzen-Verhältnis der einzelnen digitalen Marketinginstrumente abwägen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'Bewertungsplattform', 'Blog', 'CTA (Call-to-Action)', 'Double-Opt-in',
              'E-Mail-Marketing', 'Influencer Marketing', 'Microsite', 'Onlineshop',
              'Online PR', 'Permission Marketing', 'Portal', 'Redaktionsplan',
              'Social Commerce', 'Social Media Marketing', 'Website'
            ]
          },
          {
            type: 'concept',
            title: '6.1 Digitales Marketing auf der Website',
            content: 'Die Website ist ein wichtiger Bestandteil der Online-Kommunikation. In der Online-Kommunikation ist die Website das Kernstück. Auf der Website sollen schlussendlich die potenziellen Kunden und Interessenten landen. Websites sind komplexe Gebilde und müssen regelmässig erneuert werden.',
            highlight: 'Vier Erscheinungsformen von Websites: 1) Corporate Websites (alle relevanten Infos über das Unternehmen), 2) Onlineshops (E-Commerce, Verkauf), 3) Microsites (kleinere, themenbezogene Websites für Kampagnen), 4) Portale (Sammlung von Informationen oder Angeboten).'
          },
          {
            type: 'concept',
            title: '6.2-6.4 Social Media Marketing',
            content: 'Die sozialen Medien sind zu einem festen Bestandteil der täglichen Kommunikation geworden. Die Plattformen sind einfach und relativ schnell einzurichten. Es sollte jedoch ein klarer Fokus auf die relevantesten Plattformen gesetzt werden. Zentral sind spannende Inhalte und ausreichende Ressourcen.',
            highlight: 'Bei der Umsetzung von Social Media sind zu beantworten: Welche Kanäle werden bewirtschaftet? Zu welcher Tageszeit wird gepostet? Welches Vorgehen ist für die Gestaltung der Inhalte definiert? Wie umgehen mit kritischer Kommunikation? Ein Redaktionsplan ist unverzichtbar.'
          },
          {
            type: 'svg',
            title: 'Content Marketing Funnel (TOFU, MOFU, BOFU)',
            svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect width="700" height="420" rx="16" fill="#fafafa" stroke="#e5e7eb"/><text x="350" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">Content Marketing Funnel</text><polygon points="170,65 530,65 460,175 240,175" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/><text x="350" y="100" text-anchor="middle" font-size="15" font-weight="700" fill="#0891b2">TOFU</text><text x="350" y="118" text-anchor="middle" font-size="12" fill="#0e7490">Top of Funnel</text><text x="350" y="136" text-anchor="middle" font-size="11" fill="#64748b">Aufmerksamkeit &amp; Reichweite</text><text x="350" y="155" text-anchor="middle" font-size="10" fill="#94a3b8">Blog, Social Media, Videos, Infografiken</text><polygon points="240,180 460,180 410,280 290,280" fill="#cffafe" stroke="#0891b2" stroke-width="2"/><text x="350" y="210" text-anchor="middle" font-size="15" font-weight="700" fill="#0e7490">MOFU</text><text x="350" y="228" text-anchor="middle" font-size="12" fill="#155e75">Middle of Funnel</text><text x="350" y="246" text-anchor="middle" font-size="11" fill="#64748b">Interesse &amp; Vertrauen</text><text x="350" y="265" text-anchor="middle" font-size="10" fill="#94a3b8">E-Books, Webinare, Newsletter, Case Studies</text><polygon points="290,285 410,285 380,375 320,375" fill="#0891b2" stroke="#0891b2" stroke-width="2"/><text x="350" y="315" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">BOFU</text><text x="350" y="333" text-anchor="middle" font-size="12" fill="#cffafe">Bottom of Funnel</text><text x="350" y="351" text-anchor="middle" font-size="11" fill="#ecfeff">Conversion</text><text x="350" y="368" text-anchor="middle" font-size="10" fill="#a5f3fc">Demos, Angebote, Testimonials</text><text x="575" y="105" font-size="11" fill="#0891b2" font-weight="600">Viele Besucher</text><path d="M565,100 L540,100" stroke="#0891b2" stroke-width="1.5" marker-end="url(#arrF)"/><text x="575" y="230" font-size="11" fill="#0e7490" font-weight="600">Qualifizierte Leads</text><path d="M565,225 L470,225" stroke="#0e7490" stroke-width="1.5" marker-end="url(#arrF)"/><text x="575" y="335" font-size="11" fill="#155e75" font-weight="600">Kunden</text><path d="M565,330 L420,330" stroke="#155e75" stroke-width="1.5" marker-end="url(#arrF)"/><defs><marker id="arrF" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><text x="350" y="408" text-anchor="middle" font-size="11" fill="#94a3b8">Jede Stufe erfordert anderen Content — von informativ bis überzeugend</text></svg>'
          },
          {
            type: 'concept',
            title: '6.5 Influencer Marketing',
            content: 'Beim Influencer Marketing werden Meinungsmacher mit einer reichweitenstarken Community für Marketing- und Kommunikationszwecke eingesetzt. Die Zusammenarbeit mit Influencern hat in den letzten Jahren stark an Bedeutung gewonnen.',
            highlight: 'Influencer Marketing hat Chancen (hohe Reichweite, Glaubwürdigkeit bei Zielgruppe) und Risiken (schwer zu kontrollieren, gute Influencer sind schwer zu finden, Authentizität muss gewährleistet sein).'
          },
          {
            type: 'concept',
            title: '6.6 Social Commerce und Bewertungsplattformen',
            content: 'Unter Social Commerce versteht man die Möglichkeit, ein Produkt innerhalb der eigenen Social-Media-Seiten zu verkaufen. Bewertungsplattformen sind kostenlos, aber schwierig zu kontrollieren. Vorteile: Vertrauensbildung, Einbindung der Kunden, Interaktion zwischen den Kunden (Mundpropaganda).',
            highlight: 'Social Commerce und Bewertungsplattformen gelten heute als eine der wirksamsten Marketingmassnahmen, weil sie Vertrauen schaffen und Mundpropaganda fördern.'
          },
          {
            type: 'concept',
            title: '6.7 E-Mail-Marketing und Online PR',
            content: 'E-Mail-Marketing umfasst den strategischen Einsatz von E-Mail mit dem Ziel, den Empfänger auf eine bestimmte Online-Präsenz zu lenken. Bei der Online PR werden Kunden und Interessenten nicht direkt adressiert. Stattdessen versucht das Unternehmen durch die Zusammenarbeit mit Medien Aufmerksamkeit zu erlangen und die Bekanntheit zu steigern.',
            highlight: 'E-Mail-Marketing: Einfach umzusetzen, keine Streuverluste (Permission Marketing), höhere Rücklaufquoten. Online PR: Kostenlos, imagebildend, hohe Reichweiten, Glaubwürdigkeit (redaktionelles Umfeld).'
          },
          {
            type: 'table',
            title: 'Kosten-Nutzen der digitalen Instrumente',
            headers: ['Instrument', 'Kosten', 'Nutzen'],
            rows: [
              ['Online Ads', 'Variiert je nach Anbieter; Affiliate erst bei Transaktion', 'Grössere Reichweiten, Imageaufbau, gezielte Ansprache'],
              ['Suchmaschinenmarketing', 'SEO: kostenlos bis teuer; SEA: kostenpflichtig', 'SEM gehört in jedes digitale Marketingkonzept, Auffindbarkeit ist die Basis'],
              ['Website', 'Von günstig (Template) bis teuer (Agentur)', 'Kernstück des digitalen Marketings, Inhalt-Hub'],
              ['Social Media', 'Kostenlose Profile, aber aufwendig und zeitintensiv', 'Interaktion, Reichweite, Kundenbindung, Community'],
              ['E-Mail-Marketing', 'Sehr kosteneffizient, Initialaufwand für Datenbank', 'Keine Streuverluste, hohe Rücklaufquoten, Bekanntmachung'],
              ['Online PR', 'Kostenlos, setzt aber spannenden Content voraus', 'Imagebildend, hohe Reichweiten, Glaubwürdigkeit']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Website ist das KERNSTÜCK des digitalen Marketings - alle anderen Massnahmen verlinken darauf.',
              'Vier Erscheinungsformen: Corporate Websites, Onlineshops, Microsites, Portale.',
              'Social Media braucht einen Redaktionsplan und klare Vorgaben für Inhalte und Umgang mit Kritik.',
              'E-Mail-Marketing basiert auf Permission Marketing (Double-Opt-in) und hat keine Streuverluste.',
              'Online PR ist kostenlos und imagebildend, adressiert aber Kunden nicht direkt.',
              'Influencer Marketing birgt Chancen (Reichweite) und Risiken (Kontrolle, Authentizität).',
              'Bei der Wahl der Instrumente immer das Kosten-Nutzen-Verhältnis im Hinblick auf die Ziele abwägen.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Im digitalen Marketing ist die <strong>Website</strong> das Kernstück. Zentral ist die Verknüpfung mit anderen Kommunikationsmassnahmen. Erscheinungsformen: Corporate Websites, Onlineshops, Microsites, Portale.',
              'Die <strong>sozialen Medien</strong> sind zu einem festen Bestandteil geworden. Die Plattformen sind einfach einzurichten, aber es sollte ein klarer Fokus auf die relevantesten Plattformen gesetzt werden. Zentral sind spannende Inhalte und ausreichende Ressourcen.',
              '<strong>Social Commerce</strong> und <strong>Bewertungsplattformen</strong> ermöglichen Vertrauensbildung und Kundenbindung. <strong>E-Mail-Marketing</strong> ist kosteneffizient und hat keine Streuverluste. <strong>Online PR</strong> ist kostenlos und imagebildend.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 7: Budget und Realisation (S.114-130)
    // ============================================================
    {
      id: 'ch7', num: 'Kapitel 7', title: 'Budget und Realisation',
      exercises: [
        {
          id: 57, type: 'match',
          q: 'Preismodelle im digitalen Marketing',
          instruction: 'Ordnen Sie die Preismodelle den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'TKP / CPM', r: 'Tausender-Kontakt-Preis: Abrechnung pro 1000 ausgelieferte Bannereinblendungen' },
            { l: 'CPC', r: 'Cost per Click: Abrechnung nach Anzahl Klicks auf die Werbung' },
            { l: 'CPL', r: 'Cost per Lead: Abrechnung pro konkreter, vereinbarter Interaktion (z.B. Formularausfüllung)' }
          ],
          options: [
            'Tausender-Kontakt-Preis: Abrechnung pro 1000 ausgelieferte Bannereinblendungen',
            'Cost per Click: Abrechnung nach Anzahl Klicks auf die Werbung',
            'Cost per Lead: Abrechnung pro konkreter, vereinbarter Interaktion (z.B. Formularausfüllung)'
          ],
          tips: [
            'TKP/CPM rechnet nach Einblendungen ab.',
            'CPC rechnet nach Klicks ab.',
            'CPL rechnet nach generierten Leads ab.'
          ],
          reveal: [
            'TKP/CPM = Tausender-Kontakt-Preis, Abrechnung pro 1000 Sichtkontakte/Einblendungen.',
            'CPC = Cost per Click, Abrechnung nach Klicks auf die Werbung.',
            'CPL = Cost per Lead, Abrechnung pro konkreter Interaktion (Formular, Offertanfrage etc.).'
          ]
        },
        {
          id: 58, type: 'text',
          q: 'Budgetplan erklären',
          instruction: 'Was ist ein Budgetplan und wofür kann er eingesetzt werden?',
          questions: [
            { q: 'Budgetplan:', keywords: ['ausgaben','kosten','planungsperiode','zusammen','tabelle','monatlich','quartalsweise','zeitlich','übersicht'], minKeywords: 3 }
          ],
          tips: [
            'Ein Budgetplan fasst alle geplanten Ausgaben zusammen.',
            'Er stellt Kosten einer zeitlichen Dimension gegenüber.',
            'Er dient der Planung und Kontrolle der Ausgaben.'
          ],
          reveal: [
            'Der Budgetplan fasst alle geplanten Ausgaben und Kosten für die nächste Planungsperiode zusammen.',
            'Er stellt diese einer zeitlichen Dimension gegenüber.',
            'Kurz gesagt ist es eine Tabelle, in der die monatlichen oder quartalsweisen Ausgaben erfasst werden.'
          ]
        },
        {
          id: 59, type: 'text',
          q: 'Preisgestaltung im digitalen Marketing',
          instruction: 'Nennen Sie 2 Ansätze zur Preisgestaltung im digitalen Marketing.',
          questions: [
            { q: '2 Ansätze:', keywords: ['klassisch','personalisiert','abonnement','auktion','performance','bezahlung','preissystem','abo'], minKeywords: 2 }
          ],
          tips: [
            'Es gibt verschiedene innovative Preismodelle im digitalen Marketing.',
            'Denken Sie an klassische und digitale Ansätze.'
          ],
          reveal: [
            'Mögliche Ansätze: Klassische Preisgestaltung, Personalisierte Preissysteme, Abonnements, Auktionen, Performancegerechte Bezahlung.'
          ]
        },
        {
          id: 60, type: 'fill',
          q: 'Phasen der Realisation',
          instruction: 'Nennen Sie die typischen Phasen in der Realisation.',
          template: 'Die vier Phasen der Realisation sind: 1. {0}, 2. {1}, 3. {2}, 4. {3}',
          blanks: [
            ['Ideenfindung'],
            ['Skizzierung und Planung', 'Skizzierung'],
            ['Durchführung'],
            ['Umsetzung']
          ],
          tips: [
            'Die Realisation folgt einem logischen Ablauf.',
            'Es beginnt mit der Idee und endet mit der Umsetzung.'
          ],
          reveal: [
            'Phase 1: Ideenfindung',
            'Phase 2: Skizzierung und Planung',
            'Phase 3: Durchführung',
            'Phase 4: Umsetzung'
          ]
        },
        {
          id: 61, type: 'text',
          q: 'Arten von Marketingagenturen',
          instruction: 'Welche Arten von Marketingagenturen kennen Sie?',
          questions: [
            { q: 'Arten von Marketingagenturen:', keywords: ['werbeagentur','full-service','pr-agentur','dialogmarketing','media-agentur','design','branding','internet','digital'], minKeywords: 4 }
          ],
          tips: [
            'Es gibt viele verschiedene Agenturtypen.',
            'Manche sind auf bestimmte Bereiche spezialisiert.'
          ],
          reveal: [
            'Klassische Werbeagenturen oder Full-Service-Werbeagenturen, PR-Agenturen, Dialogmarketingagenturen, Media-Agenturen, Design-Agenturen, Branding-Agenturen, Internetagenturen oder Digitalagenturen.'
          ]
        },
        {
          id: 62, type: 'text',
          q: 'Arten von Digitalagenturen',
          instruction: 'Welche Arten von Digitalagenturen kennen Sie?',
          questions: [
            { q: 'Arten von Digitalagenturen:', keywords: ['content','social media','influencer','mobile','app','seo','online-marketing','performance'], minKeywords: 3 }
          ],
          tips: [
            'Digitalagenturen sind auf den digitalen Bereich spezialisiert.',
            'Es gibt verschiedene Spezialisierungen.'
          ],
          reveal: [
            'Content-Marketing-Agenturen, Social-Media-Marketing-Agenturen, Influencer-Marketing-Agenturen, Mobile-/App-Agenturen, SEO-Agenturen, Online-Marketing-Agenturen, Performance-Marketing-Agenturen.'
          ]
        },
        {
          id: 63, type: 'text',
          q: 'Kriterien für Agenturwahl',
          instruction: 'Nach welchen Kriterien können Agenturen vorausgewählt werden?',
          questions: [
            { q: 'Kriterien für Agenturwahl:', keywords: ['agenturtyp','erfahrung','referenz','leistungsportfolio','preis','flexibil','innovation','langfrist','beziehung','branche'], minKeywords: 3 }
          ],
          tips: [
            'Es gibt mehrere Kriterien, die bei der Auswahl wichtig sind.',
            'Erfahrung und Referenzen spielen eine Rolle.',
            'Die langfristige Beziehung ist wichtig.'
          ],
          reveal: [
            'Agenturtyp (abhängig von den Zielen), Erfahrung der Agentur in der Branche, Referenzen zu ähnlichen Marketingmassnahmen und Ruf, Leistungsportfolio, Preisgestaltung, Flexibilität, Innovationsgrad, Langfristige Beziehung anstreben.'
          ]
        },
        {
          id: 64, type: 'tf',
          q: 'Zusammenarbeit mit Agenturen',
          instruction: 'Sind die folgenden Aussagen zur Zusammenarbeit mit Agenturen richtig oder falsch?',
          statements: [
            { s: 'Ein durchdachtes, ausführliches Briefing ist wichtig für die Zusammenarbeit.', c: true },
            { s: 'Die Überprüfung der gelieferten Arbeiten ist nicht nötig, wenn man eine gute Agentur hat.', c: false },
            { s: 'Langfristige Beziehungen mit Agenturen sind effizienter als häufige Wechsel.', c: true },
            { s: 'Agenturen sind kein bedeutender Kostenfaktor.', c: false }
          ],
          tips: [
            'Briefing, Überprüfung und Rückmeldung sind wichtig.',
            'Langfristige Beziehungen schaffen Effizienz.',
            'Agenturen sind ein bedeutender Kostenfaktor.'
          ],
          reveal: [
            'Briefing wichtig: Richtig.',
            'Keine Überprüfung nötig: Falsch - genaue Überprüfung ist immer nötig.',
            'Langfristige Beziehungen: Richtig - je besser eine Agentur das Unternehmen kennt, desto effizienter.',
            'Kein Kostenfaktor: Falsch - Agenturen sind ein bedeutender Kostenfaktor.'
          ]
        },
        {
          id: 65, type: 'match',
          q: 'Budgetstruktur für digitales Marketing',
          instruction: 'Ordnen Sie die Kostenarten den richtigen Kategorien zu.',
          pairs: [
            { l: 'Lohn und Weiterbildung', r: 'Personalkosten' },
            { l: 'SEO-Projekt, Google Ads', r: 'Kosten Online Advertising' },
            { l: 'Social-Media-Management-Tools', r: 'Kosten Social Media Marketing' },
            { l: 'Content Marketing und Instagram-Betreuung', r: 'Agenturkosten' }
          ],
          options: ['Personalkosten', 'Kosten Online Advertising', 'Kosten Social Media Marketing', 'Agenturkosten'],
          tips: [
            'Die Budgetstruktur umfasst verschiedene Kostenkategorien.',
            'Jede Aktivität gehört zu einer bestimmten Kategorie.'
          ],
          reveal: [
            'Lohn und Weiterbildung = Personalkosten.',
            'SEO-Projekt und Google Ads = Kosten Online Advertising.',
            'Social-Media-Management-Tools = Kosten Social Media Marketing.',
            'Content Marketing und Instagram-Betreuung = Agenturkosten.'
          ]
        }
      ],
      learningData: {
        title: 'Budget und Realisation',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Kostenfaktoren und gängigen Preismodelle im digitalen Marketing erklären.',
              'einen einfachen Budgetplan erstellen.',
              'den Realisationsprozess in digitalen Marketingprojekten beschreiben.',
              'Dienstleister (Agenturen) aus dem Online-Marketing-Markt unterscheiden.',
              'die Anforderungen an die Zusammenarbeit mit Dienstleistern sowie an ein Agentur-Briefing in die eigene Arbeit einfliessen lassen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'Agentur', 'Briefing', 'Budget', 'Budgetplan', 'Change Management',
              'CPC (Cost per Click)', 'CPL (Cost per Lead)', 'CPO (Cost per Order)',
              'CPV (Cost per View)', 'Fixplatzierung', 'Go-live', 'Kostenfaktoren',
              'Pitch', 'Preismodelle', 'TKP (Tausender-Kontakt-Preis)'
            ]
          },
          {
            type: 'concept',
            title: '7.1 Budget',
            content: 'Die Budgetierung von Marketingaktivitäten ist eine herausfordernde Aufgabe, da viele unterschiedliche Kostenfaktoren berücksichtigt werden müssen. Ein durchschnittliches digitales Marketingbudget reicht von CHF 30\'000-145\'000 pro Jahr für viele kleine bis mittlere Unternehmen. Voraussetzung für den Budgetierungsprozess ist eine abgeschlossene Planung der Analyse, Zielsetzung, Strategiedefinition und Instrumentenwahl.',
            highlight: 'Relevante Kostenfaktoren im digitalen Marketing: Personalkosten, Kosten für den Betrieb der digitalen Touchpoints, Content-Entwicklung und -Verteilung, Online Monitoring, SEO, SEA, Social Media Marketing, Online Advertising, E-Mail-Marketing, IT-Kosten, Online-Marketing-Kampagnen, Agenturkosten.'
          },
          {
            type: 'table',
            title: 'Preismodelle in der Online-Werbung',
            headers: ['Preismodell', 'Beschreibung'],
            rows: [
              ['TKP / CPM (Cost per Mille)', 'Tausender-Kontakt-Preis - Kosten pro 1000 Einblendungen'],
              ['CPC (Cost per Click)', 'Kosten pro Klick auf die Werbeanzeige'],
              ['CPL (Cost per Lead)', 'Kosten pro generiertem Lead/Kontakt'],
              ['CPO (Cost per Order)', 'Kosten pro Bestellung/Transaktion'],
              ['CPV (Cost per View)', 'Kosten pro Ansicht (z.B. bei Videos)'],
              ['Fixplatzierung', 'Fester Preis für einen bestimmten Werbeplatz über einen definierten Zeitraum']
            ]
          },
          {
            type: 'svg',
            title: 'Preismodelle in der Online-Werbung',
            svg: '<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Preismodelle in der Online-Werbung</text><rect x="20" y="50" width="100" height="60" rx="8" fill="#0891b2"/><text x="70" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">TKP/CPM</text><text x="70" y="92" text-anchor="middle" fill="#cffafe" font-size="7">pro 1000</text><text x="70" y="102" text-anchor="middle" fill="#cffafe" font-size="7">Einblendungen</text><rect x="130" y="50" width="100" height="60" rx="8" fill="#0e7490"/><text x="180" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">CPC</text><text x="180" y="92" text-anchor="middle" fill="#cffafe" font-size="7">pro Klick</text><rect x="240" y="50" width="100" height="60" rx="8" fill="#155e75"/><text x="290" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">CPL</text><text x="290" y="92" text-anchor="middle" fill="#cffafe" font-size="7">pro Lead</text><rect x="350" y="50" width="100" height="60" rx="8" fill="#164e63"/><text x="400" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">CPO</text><text x="400" y="92" text-anchor="middle" fill="#cffafe" font-size="7">pro Bestellung</text><rect x="460" y="50" width="100" height="60" rx="8" fill="#083344"/><text x="510" y="75" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">CPV</text><text x="510" y="92" text-anchor="middle" fill="#cffafe" font-size="7">pro View</text><rect x="570" y="50" width="110" height="60" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/><text x="625" y="75" text-anchor="middle" fill="#164e63" font-size="10" font-weight="bold">Fixplatzierung</text><text x="625" y="92" text-anchor="middle" fill="#0891b2" font-size="7">Fester Preis/Zeit</text><rect x="80" y="130" width="540" height="28" rx="6" fill="#ecfeff" stroke="#0891b2" stroke-width="1"/><text x="350" y="149" text-anchor="middle" fill="#164e63" font-size="10">Reichweite → Interaktion → Kontakt → Kauf (zunehmende Verbindlichkeit)</text></svg>'
          },
          {
            type: 'concept',
            title: '7.2 Realisation',
            content: 'Die Realisation von Marketingprojekten erfolgt i.d.R. in 5 Schritten: 1) Ideenfindung, 2) Skizzieren des Projekts, 3) Planungsphase, 4) Durchführung, 5) Umsetzung. Dabei sollte die Umsetzung von Projekten von Change Management begleitet werden, um sicherzustellen, dass Veränderungen im Unternehmen für die Anwender durch kommunikative Massnahmen erleichtert werden.',
            highlight: 'Die 5 Schritte der Realisation: 1) Ideenfindung, 2) Skizzieren des Projekts, 3) Planungsphase, 4) Durchführung, 5) Umsetzung.'
          },
          {
            type: 'svg',
            title: 'Die 5 Schritte der Realisation',
            svg: '<svg viewBox="0 0 700 100" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="rl-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><rect x="10" y="25" width="120" height="50" rx="8" fill="#0891b2"/><text x="70" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Ideenfindung</text><text x="70" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Brainstorming</text><line x1="135" y1="50" x2="148" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#rl-arr)"/><rect x="152" y="25" width="120" height="50" rx="8" fill="#0e7490"/><text x="212" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Skizzieren</text><text x="212" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Grobkonzept</text><line x1="277" y1="50" x2="290" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#rl-arr)"/><rect x="294" y="25" width="120" height="50" rx="8" fill="#155e75"/><text x="354" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Planung</text><text x="354" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Detailplanung</text><line x1="419" y1="50" x2="432" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#rl-arr)"/><rect x="436" y="25" width="120" height="50" rx="8" fill="#164e63"/><text x="496" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Durchführung</text><text x="496" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Execution</text><line x1="561" y1="50" x2="574" y2="50" stroke="#0891b2" stroke-width="2" marker-end="url(#rl-arr)"/><rect x="578" y="25" width="112" height="50" rx="8" fill="#083344"/><text x="634" y="47" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Umsetzung</text><text x="634" y="62" text-anchor="middle" fill="#cffafe" font-size="8">Go-live</text></svg>'
          },
          {
            type: 'concept',
            title: '7.3 Zusammenarbeit mit Agenturen',
            content: 'Viele Unternehmen lagern Teile des digitalen Marketings an Agenturen aus. Die Inhalte des Briefings für Online-Medien unterscheiden sich kaum von klassischen Briefings, werden aber um Angaben zu den digitalen Präsenzen ergänzt. Wichtig ist, der Agentur rechtzeitig Rückmeldungen zu geben und die einzelnen Arbeiten genau zu überprüfen.',
            highlight: 'Agentur-Briefing für eine Website sollte enthalten: URL, bestehende Online-Präsenz, Vorstellungen zur Struktur, gewünschte Formate (Bilder, Videos), Funktionalitäten (Newsletter, Webshop, Social Media), Tracking-Tools, Responsiveness, Barrierefreiheit, CMS, Wartung und Pflege.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Das Budget bildet die Basis für das Management von Ressourcen und die Durchführung von digitalen Marketingaktivitäten.',
              'Wichtige Preismodelle: TKP/CPM, CPC, CPL, CPO, CPV, Fixplatzierung.',
              'Die Kosten für Agenturen variieren: klassische Preisgestaltung, personalisierte, Abonnements, Auktionen, performancebasiert.',
              'Die Realisation erfolgt in 5 Schritten: Ideenfindung, Skizzieren, Planungsphase, Durchführung, Umsetzung.',
              'Change Management begleitet die Umsetzung, um Veränderungen zu erleichtern.',
              'Ein klares Briefing und regelmässige Rückmeldungen sind entscheidend für die Zusammenarbeit mit Agenturen.',
              'Der Budgetplan ist das zentrale Steuerungs-Tool für das digitale Marketing.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Das <strong>Budget</strong> bildet die Basis für das Management von Ressourcen und die Durchführung von digitalen Marketingaktivitäten. Es gibt unterschiedliche <strong>Kostenarten</strong>: Personalkosten, Kosten für digitale Touchpoints, Content-Entwicklung, Online Monitoring, SEO, SEA, Social Media, Online Advertising, E-Mail-Marketing, IT-Kosten, Kampagnen, Agenturkosten.',
              'Gängige <strong>Preismodelle</strong> in der Online-Werbung: TKP/CPM, CPC, CPL, CPO, CPV, Fixplatzierung. Agenturen nutzen zudem: klassische, personalisierte, Abonnement-, Auktions- und performancebasierte Preisgestaltung.',
              'Die <strong>Realisation</strong> von Marketingprojekten erfolgt in 5 Schritten: Ideenfindung, Skizzieren, Planungsphase, Durchführung, Umsetzung. Die Umsetzung sollte von <strong>Change Management</strong> begleitet werden.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 8: Kontrolle (S.131-142)
    // ============================================================
    {
      id: 'ch8', num: 'Kapitel 8', title: 'Kontrolle',
      exercises: [
        {
          id: 66, type: 'text',
          q: 'Bedeutung von Kennzahlensystemen',
          instruction: 'Warum ist die Nutzung von Kennzahlensystemen im digitalen Marketing so wichtig?',
          questions: [
            { q: 'Bedeutung von KPIs:', keywords: ['erfolgsmessung','belegbar','ableiten','aktivitäten','konzept','strategi','kampagne','erfolgreich','umgesetzt','nachwei','investier'], minKeywords: 3 }
          ],
          tips: [
            'KPIs machen den Erfolg messbar und belegbar.',
            'Ohne Messung weiss man nicht, ob Massnahmen erfolgreich waren.',
            'KPIs helfen bei der Optimierung.'
          ],
          reveal: [
            'Die Erfolgsmessung der digitalen Marketingaktivitäten sollte ein zentraler Bestandteil des digitalen Marketings sein.',
            'Nur so lässt sich belegbar ableiten, wie erfolgreich die einzelnen Aktivitäten waren oder ob das Marketingkonzept, die Marketingstrategie oder die Kampagne erfolgreich umgesetzt wurden.',
            'Ohne Kennzahlen fehlt ein klarer Nachweis des Erfolgs und es wird in Aktionen investiert, die oft nicht den erwarteten Erfolg bringen.'
          ]
        },
        {
          id: 67, type: 'text',
          q: 'Kennzahlen im digitalen Marketing',
          instruction: 'Welche Kennzahlen werden zur Kontrolle der digitalen Marketingaktivitäten genutzt? Nennen Sie 3 Kennzahlen und erklären Sie diese.',
          questions: [
            { q: '3 Kennzahlen nennen und erklären:', keywords: ['ctr','klickrate','conversion','cost per','cpc','kosten','umsatz','roi','reichweite','impression','besucher','bounce','absprung'], minKeywords: 3 }
          ],
          tips: [
            'Es gibt technische und betriebswirtschaftliche Kennzahlen.',
            'CTR, Conversion Rate und CPC sind wichtige Kennzahlen.',
            'Kennzahlen sollten regelmässig überprüft werden.'
          ],
          reveal: [
            'Klickrate (CTR): Verhältnis zwischen Einblendungen und Klicks. CTR = Impressions / Klicks x 100.',
            'Cost per Conversion: Kosten, die pro beabsichtigter Transaktion anfallen.',
            'Kosten je Bestellung: Kosten der Kampagne geteilt durch die Anzahl der herbeigeführten Bestellungen.'
          ]
        },
        {
          id: 68, type: 'text',
          q: 'Technische und betriebswirtschaftliche Kennzahlen',
          instruction: 'A) Warum braucht es neben den technischen Kennzahlen auch betriebswirtschaftliche Kennzahlen? B) Nennen Sie 2 betriebswirtschaftliche Kennzahlen als Beispiel.',
          questions: [
            { q: 'A) Warum betriebswirtschaftliche Kennzahlen?', keywords: ['business','relevanz','geschäft','umsatz','transaktion','wiederkäufer','kundenwert','traffic','allein','nicht ausreich'], minKeywords: 2 },
            { q: 'B) 2 Beispiele:', keywords: ['umsatz','wiederkäufer','kundenwert','customer lifetime','kosten','bestellung','nettokäufe','retouren'], minKeywords: 2 }
          ],
          tips: [
            'Technische Kennzahlen (z.B. Traffic) reichen allein nicht aus.',
            'Betriebswirtschaftliche Kennzahlen zeigen die Geschäftsrelevanz.',
            'Sie zeigen, ob sich die Marketingaktivitäten auch finanziell lohnen.'
          ],
          reveal: [
            'A) Neben den technischen Kennzahlen, die oft eher technisch orientiert sind (Traffic-Daten), werden auch businessrelevante Interaktionen (betriebswirtschaftliche KPIs) ausgewertet. Diese sind wichtig, weil sie die Relevanz des Marketings für die allgemeinen Geschäftsaktivitäten aufzeigen.',
            'B) Beispiele: Umsatz, Anzahl Transaktionen, Warenkorbwert, Wiederkäufer, Kosten je Bestellung, Kundenwert (Customer Lifetime Value), Retouren.'
          ]
        },
        {
          id: 69, type: 'text',
          q: 'Social-Media-Datenanalysen',
          instruction: 'Gibt es Social-Media-Datenanalysen? Beantworten Sie die Frage in 2-3 Sätzen.',
          questions: [
            { q: 'Social-Media-Datenanalysen:', keywords: ['ja','plattform','integriert','analyse','tool','facebook','statistik','reichweite','fans','zusammensetzung','daten'], minKeywords: 3 }
          ],
          tips: [
            'Ja, es gibt Social-Media-Datenanalysen!',
            'Plattformen bieten eigene, integrierte Analyse-Tools an.',
            'Facebook z.B. bietet Seitenstatistiken für Administratoren.'
          ],
          reveal: [
            'Ja, es lassen sich diverse Daten via Social Media analysieren.',
            'Einige Plattformen bieten sogar integrierte Analysen an, also eigene Tools, die innerhalb ihrer Plattform die Daten schon analysieren und aufbereiten.',
            'Die bekannteste Plattform Facebook bietet für Administratoren von Seiten Statistiken an: Reichweite der Posts, neue Fans, Zusammensetzung der Fans etc.'
          ]
        },
        {
          id: 70, type: 'match',
          q: 'Kontroll-Begriffe zuordnen',
          instruction: 'Ordnen Sie die Begriffe den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'KPIs', r: 'Key Performance Indicators, Erfolgsfaktoren' },
            { l: 'Conversions', r: 'Anzahl der Website-Besucher, die eine gewünschte Transaktion durchgeführt haben' },
            { l: 'Cookies', r: 'Daten der Besucher einer Website, die gespeichert werden, um Seitenaufrufe zuzuordnen' },
            { l: 'Performance Marketing', r: 'Einsatz von Online-Marketing-Instrumenten mit dem Ziel, eine messbare Reaktion zu erzielen' },
            { l: 'Klicks', r: 'Anzahl der Besucher, die auf ein Werbemittel geklickt haben' }
          ],
          options: [
            'Key Performance Indicators, Erfolgsfaktoren',
            'Anzahl der Website-Besucher, die eine gewünschte Transaktion durchgeführt haben',
            'Daten der Besucher einer Website, die gespeichert werden, um Seitenaufrufe zuzuordnen',
            'Einsatz von Online-Marketing-Instrumenten mit dem Ziel, eine messbare Reaktion zu erzielen',
            'Anzahl der Besucher, die auf ein Werbemittel geklickt haben'
          ],
          tips: [
            'KPIs sind Schlüsselkennzahlen.',
            'Conversions sind gewünschte Aktionen.',
            'Performance Marketing fokussiert auf messbare Ergebnisse.'
          ],
          reveal: [
            'KPIs = Key Performance Indicators, Erfolgsfaktoren.',
            'Conversions = gewünschte Transaktionen (Kauf, Formular etc.).',
            'Cookies = gespeicherte Besucherdaten zur Zuordnung.',
            'Performance Marketing = messbare Reaktionen erzielen.',
            'Klicks = Besucher, die auf Werbemittel geklickt haben.'
          ]
        },
        {
          id: 71, type: 'text',
          q: 'A/B-Testing erklären',
          instruction: 'Was ist A/B-Testing und wofür wird es eingesetzt?',
          questions: [
            { q: 'A/B-Testing:', keywords: ['vergleich','variante','inhalt','form','position','headline','call-to-action','wirkung','besser','performance','webseite','newsletter'], minKeywords: 3 }
          ],
          tips: [
            'A/B-Testing vergleicht zwei Varianten.',
            'Es wird bei Webseiten und Newslettern eingesetzt.',
            'Man testet verschiedene Inhaltselemente.'
          ],
          reveal: [
            'Mittels A/B-Testing lassen sich verschiedene Inhaltselemente (Inhalt, Form und Positionierung von Headlines, Titeln, Call-to-Action etc.) vergleichen.',
            'Ziel ist es, die Wirkung verschiedener Varianten festzustellen.',
            'Es wird insbesondere zur Analyse von Webseiten und Newslettern eingesetzt.'
          ]
        },
        {
          id: 72, type: 'tf',
          q: 'Social Media Monitoring',
          instruction: 'Sind die folgenden Aussagen zum Social Media Monitoring richtig oder falsch?',
          statements: [
            { s: 'Social Media Monitoring liefert Informationen darüber, was in Social-Media-Plattformen über das Unternehmen gesagt wird.', c: true },
            { s: 'Social Media Monitoring ist nur für grosse Unternehmen relevant.', c: false },
            { s: 'Es gibt Tools, die den Prozess des Monitorings vereinfachen.', c: true },
            { s: 'Social Media Monitoring umfasst auch allgemeine Informationen im Internet.', c: true }
          ],
          tips: [
            'Monitoring ist für alle Unternehmensgrösssen relevant.',
            'Es gibt spezielle Tools dafür.',
            'Es geht nicht nur um Social Media, sondern auch um das Internet allgemein.'
          ],
          reveal: [
            'Informationen über Unternehmen: Richtig.',
            'Nur für grosse Unternehmen: Falsch - für alle relevant.',
            'Tools verfügbar: Richtig.',
            'Auch allgemeine Infos: Richtig - auch im Internet allgemein wird über Unternehmen gesprochen.'
          ]
        },
        {
          id: 73, type: 'text',
          q: 'Performance Marketing erklären',
          instruction: 'Was ist Performance Marketing und was ist das Ziel?',
          questions: [
            { q: 'Performance Marketing:', keywords: ['online-marketing','instrument','messbar','reaktion','transaktion','nutzer','maximierung','betriebswirtschaft','ergebnis','daten','leistung'], minKeywords: 3 }
          ],
          tips: [
            'Performance Marketing fokussiert auf messbare Ergebnisse.',
            'Es geht um die Maximierung betriebswirtschaftlicher Ergebnisse.',
            'Es nutzt die gesammelten Daten intensiv.'
          ],
          reveal: [
            'Performance Marketing ist eine spezielle Form des digitalen Marketings.',
            'Performance kann man mit Leistung übersetzen.',
            'Es ist der Einsatz von Online-Marketing-Instrumenten mit dem Ziel, eine messbare Reaktion und/oder Transaktion mit dem Nutzer zu erzielen.',
            'Beim Performance Marketing geht es um die Maximierung der betriebswirtschaftlichen Ergebnisse und um die Ausnutzung der gesammelten Daten.'
          ]
        },
        {
          id: 74, type: 'text',
          q: 'Net Promoter Score',
          instruction: 'Was ist der Net Promoter Score (NPS) und wofür wird er eingesetzt?',
          questions: [
            { q: 'Net Promoter Score:', keywords: ['kennzahl','zufriedenheit','kunden','weiterempfehl','einschätz','loyalität','skala','promoter','detractor'], minKeywords: 3 }
          ],
          tips: [
            'Der NPS misst die Kundenzufriedenheit.',
            'Er basiert auf der Frage nach der Weiterempfehlungsbereitschaft.',
            'Unternehmen nutzen ihn zunehmend.'
          ],
          reveal: [
            'Der Net Promoter Score ist eine Kennzahl, die immer mehr Unternehmen einsetzen, um die Zufriedenheit ihrer Kunden einzuschätzen.',
            'Er basiert auf der Frage: Wie wahrscheinlich ist es, dass Sie unser Unternehmen/Produkt weiterempfehlen?',
            'Kunden werden in Promotoren (begeistert), Passive und Detraktoren (unzufrieden) eingeteilt.'
          ]
        },
        {
          id: 75, type: 'match',
          q: 'Website Analytics Kennzahlen',
          instruction: 'Ordnen Sie die Kennzahlen den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Bounce Rate', r: 'Anteil der Besucher, die die Website nach nur einer Seite verlassen' },
            { l: 'CTR', r: 'Verhältnis zwischen Einblendungen und Klicks auf eine Anzeige' },
            { l: 'Conversion Rate', r: 'Prozentsatz der Besucher, die eine gewünschte Aktion durchführen' },
            { l: 'Page Impressions', r: 'Anzahl der Seitenaufrufe auf einer Website' }
          ],
          options: [
            'Anteil der Besucher, die die Website nach nur einer Seite verlassen',
            'Verhältnis zwischen Einblendungen und Klicks auf eine Anzeige',
            'Prozentsatz der Besucher, die eine gewünschte Aktion durchführen',
            'Anzahl der Seitenaufrufe auf einer Website'
          ],
          tips: [
            'Bounce Rate = Absprungrate.',
            'CTR = Click-Through Rate.',
            'Conversion Rate = Umwandlungsrate.'
          ],
          reveal: [
            'Bounce Rate = Absprungrate: Besucher, die nach einer Seite wieder gehen.',
            'CTR = Verhältnis Einblendungen zu Klicks.',
            'Conversion Rate = Anteil der Besucher, die eine gewünschte Aktion durchführen.',
            'Page Impressions = Seitenaufrufe.'
          ]
        }
      ],
      learningData: {
        title: 'Kontrolle',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Key Performance Indicators im digitalen Marketing beschreiben.',
              'erklären, wie Aktivitäten auf der Website und auf Social Media analysiert werden und welche Tools dafür eingesetzt werden.',
              'erläutern, was Social Media Monitoring ist und warum es für das Unternehmen wichtig ist.',
              'das Performance Marketing und sein Potenzial im digitalen Marketing beschreiben.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            items: [
              'A/B-Testing', 'Erfolgsmessung', 'Google Analytics', 'Key Performance Indicator (KPI)',
              'Marketing Controlling', 'Monitoring', 'Net Promoter Score (NPS)',
              'Performance Marketing', 'Social Media Analytics', 'Social Media Monitoring',
              'Website Analytics', 'Webtracking'
            ]
          },
          {
            type: 'concept',
            title: '8.1 Key Performance Indicators',
            content: 'Die Erfolgsmessung der digitalen Marketingaktivitäten sollte ein zentraler Bestandteil des digitalen Marketings sein. Nur so lässt sich belegbar ableiten, wie erfolgreich die einzelnen Aktivitäten waren oder ob das Marketingkonzept, die Marketingstrategie oder die Kampagne erfolgreich umgesetzt wurden. Für die Kontrolle der Marketingaktivitäten werden Kennzahlen verwendet. Man unterscheidet zwischen technischen und betriebswirtschaftlichen Kennzahlen.',
            highlight: 'Technische Kennzahlen dienen oft der Verbesserung des Kundenerlebnisses oder als Basis für technische Anpassungen. Betriebswirtschaftliche Kennzahlen zeigen den wirtschaftlichen Erfolg der Marketingaktivitäten auf.'
          },
          {
            type: 'table',
            title: 'KPIs im digitalen Marketing',
            headers: ['Kennzahl', 'Bedeutung'],
            rows: [
              ['Anzahl Bestellungen', 'Anzahl der durch einen Kampagnenbaustein, ein bestimmtes Werbemittel oder einen einzelnen Schlüsselbegriff erzielten Bestellungen'],
              ['Conversions', 'Anzahl der Website-Besucher, die eine gewünschte Transaktion durchgeführt haben (Kauf, Formularausfüllung, Newsletter-Abo etc.)'],
              ['Conversion Rate (CR)', 'Verhältnis zwischen erzielten Conversions und der Anzahl der Besucher (Klicks), die auf die Ziel-Website gelenkt wurden. CR = Conversions / Klicks · 100'],
              ['Cost per Click (CPC)', 'Die Kosten in Euro, die für einen neuen Besucher (Klick) gezahlt werden (auch «Cost per Click-Through»)'],
              ['Cost per Conversion', 'Die Kosten, die pro gewünschter Transaktion anfallen, heruntergebrochen auf Kampagnen-, Werbemittel- oder Schlüsselbegriffsebene'],
              ['Cost per Lead (CPL)', 'Die Kosten, die zur Erlangung jedes neuen Kontakts anfallen (im Prinzip identisch mit Cost per Conversion, da ein Lead auch gleichzeitig eine Conversion ist)'],
              ['Cost per Order (CPO)', 'Die Kosten, die pro Bestellung anfallen, pro Kampagne, pro Kampagnenbaustein oder pro einzelnem Werbemittel'],
              ['Gewinn je Franken (ROI)', 'Der Gewinn je eingesetztem Franken Werbebudget, pro Kampagne, pro Baustein oder pro einzelnem Werbemittel'],
              ['Klickrate (CTR)', 'Verhältnis zwischen den Einblendungen eines Werbemittels (Impressions) und der Anzahl Klicks. CTR = I / Klicks · 100'],
              ['Klicks', 'Anzahl der Besucher, die auf ein Werbemittel geklickt haben und so auf die Website des Werbetreibenden gelangt sind'],
              ['Kundenwert (Customer Lifetime Value)', 'Wirtschaftliche Kundenlebenszyklusbetrachtung: Der Wert eines Neukunden zum Zeitpunkt der Erstbestellung, basierend auf Vergangenheitswerten'],
              ['Nettokäufe', 'Anzahl der durch die Kampagne generierten Käufe, bereinigt um die Retouren'],
              ['Page Impressions (PIs)', 'Abruf einer Einzelseite innerhalb einer Website (auch Page Views genannt)'],
              ['Umsatz', 'Umsatz, der durch die Kampagne, einen Kampagnenbaustein oder ein einzelnes Werbemittel erreicht wurde'],
              ['Wiederkäufer', 'Anzahl der Wiederkäufer, die durch eine Kampagne akquiriert wurden und mehrfach gekauft haben']
            ]
          },
          {
            type: 'concept',
            title: '8.1.2 KPIs in der Praxis',
            content: 'Welche Kennzahlen genau im Unternehmen eingesetzt werden sollten, lässt sich pauschal nicht definieren. Die oben gezeigte Tabelle zeigt, wie komplex das Thema «Kontrolle» sein kann. Es ist möglich, viel Zeit und Geld in das Thema zu investieren und schlussendlich trotzdem nicht die richtigen Informationen zu haben. Speziell bei Unternehmen, die noch am Anfang des digitalen Marketings stehen, werden oft nur technische Kennzahlen genutzt, die niemand wirklich versteht oder weiss, wie sie genutzt werden können.',
            highlight: 'Vor der Kontrolle sollten grundsätzliche Fragen beantwortet werden: Warum kontrollieren? Was soll kontrolliert werden? Wie häufig wird kontrolliert?'
          },
          {
            type: 'concept',
            title: 'Kontrollbereiche im digitalen Marketing',
            content: 'Je komplexer die Aktivitäten im digitalen Marketing, desto komplexer auch die Kontrolle. Folgende Aktivitäten können beobachtet (= Monitoring) und ausgewertet werden:',
            highlight: 'Kontrollbereiche: Webseiten-Monitoring und Social Media Monitoring, Tracking von Newslettern und E-Mail-Kampagnen, Content Tracking, User Tracking (im Rahmen der gesetzlichen Vorgaben), Digital-Marketing-Kampagnen-Tracking, Allgemeine Kostenkontrolle.'
          },
          {
            type: 'concept',
            title: '8.2 Tools und Ansätze zur Kontrolle',
            content: 'Im Folgenden werden diejenigen Tools und Methoden vorgestellt, die in der Praxis am häufigsten für die Kontrolle eingesetzt werden: Net Promoter Score (NPS), Website Analytics, Social Media Analytics, Social Media Monitoring und A/B-Testing.'
          },
          {
            type: 'concept',
            title: '8.2.1 Net Promoter Score (NPS)',
            content: 'Der Net Promoter Score beschreibt die Bereitschaft der Kunden, das Unternehmen weiterzuempfehlen. Im Kern steht die Frage: «Wie wahrscheinlich ist es, dass Sie unser Unternehmen (unser Produkt, unsere Marke) einem Freund oder Kollegen weiterempfehlen werden?» Auf einer Skala von 0 bis 10 kann dies bewertet werden, wobei 10 der höchste Wert für die Weiterempfehlung ist.',
            highlight: 'NPS-Berechnung: Kunden mit 9-10 = Fürsprecher (Promotoren), 7-8 = Unentschiedene, 0-6 = Kritiker (Detraktoren). Fürsprecher-Anteil (%) minus Kritiker-Anteil (%) = NPS. Der NPS kann zwischen -100 und +100 liegen.'
          },
          {
            type: 'svg',
            title: 'Net Promoter Score (NPS) – Skala und Berechnung',
            svg: '<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Net Promoter Score (NPS)</text><text x="350" y="45" text-anchor="middle" fill="#78716c" font-size="10">«Wie wahrscheinlich empfehlen Sie uns weiter?» (0-10)</text><rect x="30" y="60" width="400" height="40" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/><text x="230" y="75" text-anchor="middle" fill="#dc2626" font-size="10" font-weight="bold">Kritiker (Detraktoren): 0–6</text><text x="230" y="90" text-anchor="middle" fill="#991b1b" font-size="9">Unzufrieden, könnten negativ berichten</text><rect x="440" y="60" width="100" height="40" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/><text x="490" y="75" text-anchor="middle" fill="#854d0e" font-size="10" font-weight="bold">Neutral: 7–8</text><text x="490" y="90" text-anchor="middle" fill="#854d0e" font-size="9">Unentschieden</text><rect x="550" y="60" width="120" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="610" y="75" text-anchor="middle" fill="#166534" font-size="10" font-weight="bold">Promotoren: 9–10</text><text x="610" y="90" text-anchor="middle" fill="#166534" font-size="9">Begeistert, empfehlen</text><rect x="100" y="120" width="500" height="35" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/><text x="350" y="143" text-anchor="middle" fill="#164e63" font-size="12" font-weight="bold">NPS = % Promotoren − % Kritiker (Wert: −100 bis +100)</text><text x="350" y="180" text-anchor="middle" fill="#78716c" font-size="10">Positiver NPS = mehr Promotoren als Kritiker → gutes Zeichen</text></svg>'
          },
          {
            type: 'concept',
            title: '8.2.2 Website Analytics',
            content: 'Web Analytics, auch Datenverkehrsanalyse, Web-Analyse oder Webtracking genannt, ist die wichtigste Auswertung im digitalen Marketing. Ein Grossteil der Unternehmen arbeitet dafür mit Google Analytics, weil es kostenlos ist. Es gibt aber diverse, kostenpflichtige Alternativen (wie z.B. Hotjar).',
            highlight: 'Web Analytics beantwortet drei Fragen: A) Was? (Woher kommen Besucher, welcher Content bringt die meisten Besucher, Usability/Heatmaps), B) Warum? (Website optimieren, Bedürfnisse der User besser verstehen), C) Wie? (Cookies, Seitenaufrufe, Sitzungen).'
          },
          {
            type: 'methodenbox',
            title: 'Besucherquellen in Web Analytics',
            text: 'Von woher gelangen die Besucher auf die Website? Organic Search = über Suchmaschinen, Social = über soziale Medien, Referral = über andere Webseiten, Direct = direkt über die Eingabe der URL, E-Mail = über E-Mails des Unternehmens (Newsletter, Event-Einladungen etc.).'
          },
          {
            type: 'concept',
            title: '8.2.3 Social Media Analytics',
            content: 'Zur Auswertung von Marketingaktivitäten auf den sozialen Medien bieten die verschiedenen Plattformen ihre eigenen Auswertungsinstrumente an. Sie sind meistens in ihren Funktionalitäten begrenzt, sind aber gratis und damit insbesondere für kleinere Unternehmen eine gute Möglichkeit. Am bekanntesten und häufigsten genutzt ist Facebook Analytics.'
          },
          {
            type: 'table',
            title: 'Social Media Analyse-Tools',
            headers: ['Plattform', 'Beschreibung'],
            rows: [
              ['Facebook', 'Sehr detaillierte Statistiken, die einen ersten Überblick geben, welche Beiträge gut angekommen sind und woher die Fans stammen'],
              ['Instagram', 'Eigene Analytics-Seiten, die sich gut mit Facebook verknüpfen lassen'],
              ['YouTube', 'Analyse-Tool, mit dem man unter anderem analysieren kann, welche Videos erfolgreich waren und wie viele Personen sie angeschaut haben'],
              ['Twitter', 'Allen Usern Analysemöglichkeiten: welche Tweets am erfolgreichsten waren und welche am meisten Follower erreicht haben'],
              ['Pinterest', 'Integrierte Analyse mit Business Account (business.pinterest.com), spezieller Zugang mit Zusatzfunktionen und umfangreicheren Analysen']
            ]
          },
          {
            type: 'concept',
            title: '8.2.4 Social Media Monitoring',
            content: 'Social Media Monitoring bedeutet «die Beobachtung relevanter Informationen auf den sozialen Medien». Monitoring-Tools erfassen Daten, zu denen sich das Unternehmen Alerts (automatische Benachrichtigungen) einrichten kann: Erwähnungen des Unternehmens, einer Marke oder eines Produkts in den Social Media, Analyse der Stimmung (positiv oder negativ/kritisch), Erwähnungen der Konkurrenz, bestimmte Themen (z.B. allgemeine Trends).',
            highlight: 'Über Social Media Monitoring können gewonnen werden: Stärken/Schwächen Ihrer Kampagnen, Stärken/Schwächen der Konkurrenz, Identifizierung von Influencern oder Meinungsführern. Es gibt kein Patentrezept - jedes Unternehmen muss die für sich relevanten Kriterien definieren.'
          },
          {
            type: 'concept',
            title: '8.2.5 A/B-Testing',
            content: 'Das A/B-Testing ermöglicht den Vergleich verschiedener Inhaltselemente, um die Wirkung von Marketingaktivitäten festzustellen. Es wird insbesondere zur Analyse von Webseiten und Newslettern eingesetzt. Es werden zwei Versionen einer Landingpage oder eines Newsletters erstellt. Die User werden zufällig auf die eine oder die andere Seite weitergeleitet. Nach einer bestimmten Zeit wird ausgewertet, welche Version mehr Klicks und weitere Interaktionen (Leads, Conversions etc.) erhalten hat.',
            highlight: 'Beispiele von Inhaltselementen für A/B-Tests: Headlines und Titel, Seitenstruktur/Menüführung, Betreffzeilen in E-Newslettern, Grösse/Form/Farbe von Buttons, Texte und Bilder auf Werbebannern.'
          },
          {
            type: 'concept',
            title: '8.3 Performance Marketing',
            content: 'Performance Marketing ist der Einsatz von Online-Marketing-Instrumenten mit dem Ziel, eine messbare Reaktion und/oder Transaktion mit dem Nutzer zu erzielen. Performance Marketing findet ausschliesslich über Online-Kanäle statt. Die Basis des Performance Marketings basiert auf der Messbarkeit und der ständigen Optimierung der Marketingmassnahmen. Die Hauptkanäle sind Suchmaschinenmarketing (SEA), Suchmaschinenoptimierung (SEO), E-Mail-Marketing und Affiliate Marketing.',
            highlight: 'Grundelemente des Performance Marketings: 1) Performance-Marketing-Strategie (Ziele, Kanäle, KPIs definieren), 2) Durchführung der Aktivitäten / Generierung des Traffics, 3) Messung (KPIs vollständig messen und berechnen), 4) Analyse (Optimierungspotenziale identifizieren), 5) Optimierung (Massnahmen umsetzen, Kampagne weiter optimieren).'
          },
          {
            type: 'svg',
            title: 'Performance Marketing – 5-Schritte-Kreislauf',
            svg: '<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif"><defs><marker id="pm-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#0891b2"/></marker></defs><text x="350" y="25" text-anchor="middle" fill="#164e63" font-size="14" font-weight="bold">Performance Marketing – Optimierungskreislauf</text><rect x="10" y="50" width="120" height="55" rx="8" fill="#0891b2"/><text x="70" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">1. Strategie</text><text x="70" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Ziele, Kanäle, KPIs</text><line x1="135" y1="77" x2="148" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#pm-arr)"/><rect x="152" y="50" width="120" height="55" rx="8" fill="#0e7490"/><text x="212" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">2. Durchführung</text><text x="212" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Traffic generieren</text><line x1="277" y1="77" x2="290" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#pm-arr)"/><rect x="294" y="50" width="120" height="55" rx="8" fill="#155e75"/><text x="354" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">3. Messung</text><text x="354" y="88" text-anchor="middle" fill="#cffafe" font-size="8">KPIs berechnen</text><line x1="419" y1="77" x2="432" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#pm-arr)"/><rect x="436" y="50" width="120" height="55" rx="8" fill="#164e63"/><text x="496" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">4. Analyse</text><text x="496" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Potenziale erkennen</text><line x1="561" y1="77" x2="574" y2="77" stroke="#0891b2" stroke-width="2" marker-end="url(#pm-arr)"/><rect x="578" y="50" width="112" height="55" rx="8" fill="#083344"/><text x="634" y="73" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">5. Optimierung</text><text x="634" y="88" text-anchor="middle" fill="#cffafe" font-size="8">Massnahmen anpassen</text><path d="M634,110 C634,140 70,140 70,110" stroke="#0891b2" stroke-width="1.5" fill="none" stroke-dasharray="5,3" marker-end="url(#pm-arr)"/><text x="350" y="145" text-anchor="middle" fill="#0891b2" font-size="9" font-weight="600">Kontinuierliche Optimierung (Kreislauf)</text></svg>'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Die Erfolgsmessung der digitalen Marketingaktivitäten ist ein zentraler Bestandteil des digitalen Marketings.',
              'Man unterscheidet technische Kennzahlen (Verbesserung des Kundenerlebnisses) und betriebswirtschaftliche Kennzahlen (wirtschaftlicher Erfolg).',
              'Der Net Promoter Score (NPS) misst die Weiterempfehlungsbereitschaft der Kunden auf einer Skala von 0-10.',
              'Website Analytics (z.B. Google Analytics) ist die wichtigste Auswertung im digitalen Marketing.',
              'Social Media Plattformen bieten eigene, meist kostenlose Analyse-Tools an.',
              'Social Media Monitoring beobachtet relevante Informationen auf sozialen Medien (Erwähnungen, Stimmung, Konkurrenz).',
              'A/B-Testing vergleicht zwei Varianten, um die bessere Performance zu ermitteln.',
              'Performance Marketing fokussiert auf messbare Reaktionen und besteht aus 5 Schritten: Strategie, Durchführung, Messung, Analyse, Optimierung.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die Aktivitäten des digitalen Marketings werden durch <strong>KPIs (Key Performance Indicators)</strong>, Kennzahlen, kontrolliert. Man unterscheidet technische und betriebswirtschaftlich ausgerichtete Kennzahlen. Die technischen Kennzahlen dienen oft der Verbesserung des Kundenerlebnisses oder als Basis für technische Anpassungen. Die betriebswirtschaftlichen Kennzahlen zeigen den wirtschaftlichen Erfolg der Marketingaktivitäten auf.',
              'Eine Kennzahl, die immer mehr Unternehmen einsetzen, um die Zufriedenheit ihrer Kunden einzuschätzen, ist der <strong>Net Promoter Score</strong>. Die einzelnen Aktivitäten kann man im Rahmen von <strong>Website und Social Media Analytics</strong> analysieren. Neben der Leistung der Website werden auch die Aktionen der Anwender dokumentiert.',
              'Die einzelnen <strong>Social-Media-Plattformen</strong> wie Facebook, Instagram oder Twitter bieten eigene, speziell auf ihre Plattform zugeschnittene Tools an, die oft weitere spezielle Kennzahlen enthalten, um das Verhalten der Anwender auszuwerten.',
              'Das <strong>Social Media Monitoring</strong> liefert Informationen darüber, was in den einzelnen Social-Media-Plattformen und auch allgemein im Internet über das Unternehmen gesagt wird. Um den Prozess zu vereinfachen, gibt es eine Reihe von Tools, die dem Marketingmitarbeiter helfen können.',
              'Mittels <strong>A/B-Testing</strong> lassen sich verschiedene Inhaltselemente (Inhalt, Form und Positionierung von Headlines, Titeln, Call-to-Action etc.) vergleichen, um deren Wirkung festzustellen.',
              'Beim <strong>Performance Marketing</strong> geht es um die Maximierung des betriebswirtschaftlichen Ergebnisses und um die Ausnutzung der gesammelten Daten.'
            ]
          }
        ]
      }
    }
  ],
  glossary: [
    { term: 'SEO', def: 'Search Engine Optimization - Suchmaschinenoptimierung. Massnahmen zur Verbesserung der organischen (unbezahlten) Platzierung in Suchmaschinen.' },
    { term: 'SEA', def: 'Search Engine Advertising - Suchmaschinenwerbung. Bezahlte Anzeigen in Suchmaschinen (z.B. Google Ads).' },
    { term: 'SEM', def: 'Search Engine Marketing - Suchmaschinenmarketing. Oberbegriff für SEO und SEA.' },
    { term: 'Content Marketing', def: 'Strategischer Marketingansatz, bei dem wertvolle, relevante Inhalte erstellt werden, um eine klar definierte Zielgruppe anzuziehen und zu binden.' },
    { term: 'Social Media Marketing', def: 'Nutzung sozialer Medien (Facebook, Instagram, LinkedIn etc.) für Marketingzwecke.' },
    { term: 'E-Mail-Marketing', def: 'Strategischer Einsatz von E-Mail, um den Empfänger auf eine bestimmte Online-Präsenz zu lenken und Geschäfte anzubahnen.' },
    { term: 'Display Advertising', def: 'Online-Werbung mit visuellen Anzeigen (Banner, Videos) auf Websites und in Apps.' },
    { term: 'Affiliate Marketing', def: 'Partnerprogramm, bei dem Vertriebspartner Produkte bewerben und bei Erfolg eine Provision erhalten.' },
    { term: 'Influencer Marketing', def: 'Einsatz von Meinungsmachern mit reichweitenstarker Community für Marketing- und Kommunikationszwecke.' },
    { term: 'Customer Journey', def: 'Die Phasen des Kaufentscheidungsprozesses, die ein Kunde durchläuft - von der Wahrnehmung bis zum Kauf und darüber hinaus.' },
    { term: 'Touchpoints', def: 'Kontaktpunkte, an denen Kunden mit dem Unternehmen, der Marke oder dem Produkt in Berührung kommen.' },
    { term: 'Conversion', def: 'Umwandlung eines Website-Besuchers in einen Kunden oder eine gewünschte Aktion (Kauf, Anmeldung etc.).' },
    { term: 'Conversion Rate', def: 'Prozentsatz der Besucher, die eine gewünschte Aktion durchführen, im Verhältnis zur Gesamtzahl der Besucher.' },
    { term: 'KPI', def: 'Key Performance Indicator - Schlüsselkennzahl zur Messung des Erfolgs von Marketingaktivitäten.' },
    { term: 'ROI', def: 'Return on Investment - Verhältnis zwischen Gewinn und investiertem Kapital.' },
    { term: 'CTR', def: 'Click-Through Rate - Klickrate. Verhältnis zwischen Einblendungen eines Werbemittels und der Anzahl der Klicks.' },
    { term: 'CPC', def: 'Cost per Click - Kosten pro Klick auf eine Werbeanzeige.' },
    { term: 'CPM', def: 'Cost per Mille (TKP) - Tausender-Kontakt-Preis. Kosten pro 1000 Einblendungen/Sichtkontakte.' },
    { term: 'Landing Page', def: 'Speziell gestaltete Webseite, auf die Besucher nach dem Klick auf eine Anzeige gelangen.' },
    { term: 'A/B-Testing', def: 'Vergleich von zwei Varianten (z.B. Webseiten, E-Mails), um die bessere Performance zu ermitteln.' },
    { term: 'Tracking', def: 'Verfolgung und Aufzeichnung des Nutzerverhaltens auf Websites und in digitalen Kanälen.' },
    { term: 'Analytics', def: 'Systematische Auswertung von Daten zur Messung und Optimierung von Marketingaktivitäten.' },
    { term: 'Retargeting', def: 'Erneutes Ansprechen von Nutzern, die bereits mit einer Website oder einem Produkt interagiert haben.' },
    { term: 'Remarketing', def: 'Ähnlich wie Retargeting - gezielte Werbung an Personen, die bereits Interesse gezeigt haben.' },
    { term: 'Organic Reach', def: 'Organische Reichweite - Anzahl der Personen, die Inhalte ohne bezahlte Werbung sehen.' },
    { term: 'Paid Reach', def: 'Bezahlte Reichweite - Anzahl der Personen, die durch bezahlte Werbung erreicht werden.' },
    { term: 'AIDA', def: 'Attention, Interest, Desire, Action - Werbewirkungsmodell für die Gestaltung von Marketingbotschaften.' },
    { term: 'Sales Funnel', def: 'Verkaufstrichter - Modell, das den Weg vom Interessenten zum Kunden in verschiedenen Phasen abbildet.' },
    { term: 'Lead Generation', def: 'Leadgenerierung - Gewinnung von Kontaktdaten potenzieller Kunden.' },
    { term: 'Marketing Automation', def: 'Automatisierung von Marketingprozessen durch Software zur Effizienzsteigerung.' },
    { term: 'Responsive Design', def: 'Webdesign-Ansatz, bei dem sich die Darstellung automatisch an verschiedene Bildschirmgrössen anpasst.' },
    { term: 'UX', def: 'User Experience - Nutzererfahrung. Gesamtheit der Erfahrungen eines Nutzers bei der Interaktion mit einem Produkt.' },
    { term: 'Bounce Rate', def: 'Absprungrate - Anteil der Besucher, die eine Website nach dem Aufrufen nur einer Seite wieder verlassen.' },
    { term: 'Engagement Rate', def: 'Interaktionsrate - Verhältnis der Interaktionen (Likes, Kommentare, Shares) zur Reichweite.' },
    { term: 'POST-Methode', def: 'People, Objectives, Strategy, Technology - Alternative Methode zur Erstellung eines digitalen Marketingkonzepts.' },
    { term: 'Digitale Transformation', def: 'Prozess der stetigen Weiterentwicklung digitaler Technologien, der Wirtschaft und Gesellschaft nachhaltig beeinflusst.' },
    { term: 'Web 2.0', def: 'Das veränderte Internet, bei dem User Inhalte nicht nur konsumieren, sondern auch selbst produzieren können.' },
    { term: 'Prosumer', def: 'Kunstwort aus Producer und Consumer - User, die Inhalte sowohl konsumieren als auch produzieren.' },
    { term: 'User Generated Content', def: 'Von Nutzern erstellte Inhalte (Bewertungen, Kommentare, Fotos etc.).' },
    { term: 'SWOT-Analyse', def: 'Analyse von Stärken (Strengths), Schwächen (Weaknesses), Chancen (Opportunities) und Risiken (Threats).' },
    { term: 'Persona', def: 'Fiktive, repräsentative Person, die eine Zielgruppe eines Angebots repräsentiert, charakterisiert durch Motive, Bedürfnisse und Ziele.' },
    { term: 'Cookies', def: 'Daten der Besucher einer Website, die gespeichert werden, um Seitenaufrufe oder Sitzungen Besuchern zuzuordnen.' },
    { term: 'Performance Marketing', def: 'Einsatz von Online-Marketing-Instrumenten mit dem Ziel, eine messbare Reaktion oder Transaktion mit dem Nutzer zu erzielen.' },
    { term: 'CPL', def: 'Cost per Lead - Kosten pro generiertem Lead/Kontakt.' },
    { term: 'Redaktionsplan', def: 'Plan zur zeitlichen und inhaltlichen Organisation von Content-Marketing-Aktivitäten.' },
    { term: 'Social Commerce', def: 'Verkauf von Produkten direkt über Social-Media-Plattformen.' },
    { term: 'Online PR', def: 'Public Relations im digitalen Bereich zur Steigerung der Aufmerksamkeit und Bekanntheit.' },
    { term: 'Double-Opt-in', def: 'Zweistufiges Bestätigungsverfahren für Newsletter-Anmeldungen (rechtlich erforderlich).' },
    { term: 'Microsite', def: 'Projekt- oder themenbezogene Seite, wird oft im Zusammenhang mit Kampagnen genutzt.' }
  ]
};
