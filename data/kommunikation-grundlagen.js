window.BOOK_DATA = {
  id: 'kommunikation-grundlagen',
  title: 'Grundlagen der Kommunikation für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Kommunikation Grundlagen',
  author: 'Markus Aerni',
  year: 2023,
  pages: 167,
  color: '#be185d',
  chapters: [
    // ============================================================
    // KAPITEL 1: Grundlagen der Kommunikationspolitik (S. 10-26)
    // ============================================================
    {
      id: 'ch1', num: 'Kapitel 1 (Teil A)', title: 'Grundlagen der Kommunikationspolitik',
      exercises: [
        {
          id: 1, type: 'text',
          q: 'Anspruchsgruppen der Unternehmenskommunikation',
          instruction: 'Rep. 1 (S. 26): Welche Beziehungen verschiedener Anspruchsgruppen sind in der Unternehmenskommunikation zu berücksichtigen?',
          questions: [
            { q: 'Nennen Sie die drei wesentlichen Beziehungen.', keywords: ['mitarbeitenden','kunden','unternehmen','beziehung'], minKeywords: 2 }
          ],
          tips: ['Denken Sie an die drei Hauptakteure: Unternehmen, Mitarbeitende, Kunden.','Jede Beziehung zwischen zwei dieser Gruppen ist relevant.','Es geht um die Kommunikation zwischen diesen Gruppen.'],
          reveal: ['Die Beziehung eines Unternehmens mit seinen Mitarbeitenden.','Die Beziehung eines Unternehmens mit seinen Kunden.','Die Beziehung der Mitarbeitenden eines Unternehmens mit dessen Kunden.']
        },
        {
          id: 2, type: 'check',
          q: 'Kommunikationsinstrumente: einseitig vs. Dialog',
          instruction: 'Rep. 2 (S. 26): Ordnen Sie zu, ob die Kommunikationsinstrumente einseitig oder auf Dialog ausgerichtet sind.',
          statements: [
            { s: 'Mediawerbung: Dialog', c: false },
            { s: 'Persönlicher Verkauf: Dialog', c: true },
            { s: 'Verkaufsförderung: Dialog', c: false },
            { s: 'Event-Marketing: Dialog', c: true },
            { s: 'Mitarbeitendenkommunikation: Dialog', c: true },
            { s: 'Sponsoring: Dialog', c: false }
          ],
          tips: ['Einseitig = keine direkte Rückmeldung möglich.','Dialog = direkte Interaktion mit der Zielgruppe.','Mediawerbung ist typisch einseitig, persönlicher Verkauf immer auf Dialog.'],
          reveal: ['Mediawerbung: Einseitig (Massenkommunikation).','Persönlicher Verkauf: Dialog (immer zweiseitig).','Verkaufsförderung: Einseitig (selten auf Dialog).','Event-Marketing: Dialog (meistens zweiseitig).','Mitarbeitendenkommunikation: Dialog (immer zweiseitig).','Sponsoring: Einseitig (meistens).']
        },
        {
          id: 3, type: 'text',
          q: 'Herausforderungen der Dienstleistungskommunikation',
          instruction: 'Rep. 3 (S. 26): Beschreiben Sie zwei hauptsächliche Herausforderungen der Dienstleistungskommunikation.',
          questions: [
            { q: 'Nennen Sie zwei Herausforderungen.', keywords: ['immateriell','physisch','nicht greifbar','versprechen','erfüllung','leistung','qualität','voraus'], minKeywords: 2 }
          ],
          tips: ['Denken Sie daran: Dienstleistungen sind nicht physisch greifbar.','Man kann kein Produkt zeigen \u2013 man muss ein Versprechen kommunizieren.','Die Qualität ist vor der Inanspruchnahme schwer zu beurteilen.'],
          reveal: ['Das Produkt ist immateriell, also physisch nicht erlebbar.','In der Kommunikation kann oft kein Produkt dargestellt werden, es muss vielmehr ein Versprechen für die Erfüllung einer Leistung abgegeben werden.']
        },
        {
          id: 4, type: 'text',
          q: 'Faktoren für strategische Kommunikationspolitik',
          instruction: 'Rep. (S. 38, Frage 4): Beschreiben Sie mindestens drei wichtige Faktoren, die eine strategische Kommunikationspolitik unverzichtbar machen.',
          questions: [
            { q: 'Nennen Sie mindestens drei Faktoren.', keywords: ['austauschbar','produktwettbewerb','medien','informationsüberlastung','selektiv','dynamik','unkoordiniert','zielgruppen'], minKeywords: 3 }
          ],
          tips: ['Marktleistungen sind austauschbar geworden.','Die grosse Anzahl verfügbarer Medien erfordert professionelle Mediaplanung.','Unkoordinierte Kommunikation verhindert ein geschlossenes Bild.'],
          reveal: ['Marktleistungen sind austauschbar geworden; ein ausschliesslicher Produktwettbewerb existiert kaum mehr.','Die grosse und weiter zunehmende Anzahl verfügbarer Medien erfordert eine professionelle Mediaplanung.','Ein oft unkoordinierter Einsatz vieler Kommunikationsmassnahmen verhindert bei den Zielgruppen eine geschlossene Wahrnehmung.','Die allgemeine Informationsüberlastung führt zu einem selektiveren, fragmentarischeren Informationskonsum.']
        },
        {
          id: 5, type: 'fill',
          q: 'Kommunikationsinstrumente nennen',
          instruction: 'Ergänzen Sie die wichtigsten Kommunikationsinstrumente.',
          template: 'Die wichtigsten Kommunikationsinstrumente sind: Persönliche Kommunikation, {0}, Verkaufsförderung, {1}, Messen und Ausstellungen, {2}, {3}, Dialogmarketing, {4}, Social-Media-Kommunikation.',
          blanks: [
            ['Mitarbeitendenkommunikation'],
            ['Event-Marketing','Event Marketing'],
            ['Mediawerbung'],
            ['Public Relations','PR'],
            ['Sponsoring']
          ],
          tips: ['Es gibt 10 wichtige Kommunikationsinstrumente.','Denken Sie an interne und externe Instrumente.','Sponsoring ist die Förderung von Personen/Organisationen gegen Gegenleistungen.'],
          reveal: ['Mitarbeitendenkommunikation (intern).','Event-Marketing (Veranstaltungen).','Mediawerbung (TV, Print, Online etc.).','Public Relations (Öffentlichkeitsarbeit).','Sponsoring (Förderung gegen Gegenleistungen).']
        },
        {
          id: 6, type: 'tf',
          q: 'Push- vs. Pull-Strategie',
          statements: [
            { s: 'Bei der Push-Strategie wird das Produkt über den Handel zum Endkunden gedrängt.', c: true, feedback: 'Push = Hersteller \u2192 Handel \u2192 Endkunde.' },
            { s: 'Bei der Pull-Strategie kommuniziert das Unternehmen direkt an den Endkunden.', c: true, feedback: 'Pull = Endkunde fragt Produkt beim Handel nach.' },
            { s: 'Mediawerbung ist ein typisches Instrument der Push-Strategie.', c: false, feedback: 'Mediawerbung ist typisch für die Pull-Strategie (direkte Ansprache des Endkunden).' },
            { s: 'Verkaufsförderung am POS ist ein typisches Instrument der Push-Strategie.', c: true, feedback: 'VKF am POS unterstützt den Abverkauf im Handel (Push).' }
          ],
          tips: ['Push = Produkt wird in den Markt gedrängt (via Handel).','Pull = Nachfrage wird beim Endkunden erzeugt.','Mediawerbung erzeugt Nachfrage beim Konsumenten (Pull).'],
          reveal: ['Push-Strategie: Kommunikation über den Handel (VKF, Handelsrabatte).','Pull-Strategie: Kommunikation direkt an den Endkunden (Mediawerbung, PR).','Aussage 3 ist falsch: Mediawerbung = Pull.','In der Praxis werden oft beide Strategien kombiniert.']
        },
        {
          id: 7, type: 'mc',
          q: 'Kommunikation im Marketing-Mix (MC)',
          instruction: 'Welches P im Marketing-Mix steht für die Kommunikationspolitik?',
          options: ['Product','Price','Place','Promotion'],
          answer: 3,
          tips: ['Die 7 P sind: Product, Price, Place, Promotion, People, Process, Physical Evidence.','Kommunikation = Werbung, PR, VKF etc.','Promotion umfasst alle kommunikativen Aktivitäten.'],
          reveal: ['Promotion steht für die Kommunikationspolitik.','Sie umfasst alle Massnahmen zur Darstellung des Unternehmens und seiner Leistungen.','Dies ist eines der 7 P im erweiterten Marketing-Mix.']
        },
        {
          id: 8, type: 'match',
          q: 'Kommunikation in verschiedenen Märkten',
          instruction: 'Ordnen Sie die Aussagen dem richtigen Markttyp zu.',
          pairs: [
            { l: 'Differenzierung durch Kommunikation zentral', r: 'Konsumgüter (B2C)' },
            { l: 'Vertrauen, Qualität und Service im Vordergrund', r: 'Investitionsgüter (B2B)' },
            { l: 'Testimonials und Kundenbewertungen schaffen Vertrauen', r: 'Dienstleistungen' },
            { l: 'Massenkommunikation mit einfachen, funktionalen Ständen', r: 'Konsumgüter (B2C)' }
          ],
          options: ['Konsumgüter (B2C)','Investitionsgüter (B2B)','Dienstleistungen'],
          tips: ['B2C = grosse Zielgruppen, starker Wettbewerb.','B2B = individuelle Lösungen, wenige Kunden.','Dienstleistungen = immateriell, schwer greifbar.'],
          reveal: ['Konsumgüter: Massenkommunikation, Differenzierung durch Kommunikation.','Investitionsgüter: Vertrauen, Qualität, Service.','Dienstleistungen: Testimonials, Kundenbewertungen.']
        }
      ],
      learningData: {
        title: 'Grundlagen der Kommunikationspolitik',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Bedeutung der Kommunikation innerhalb des Marketings beschreiben.',
              'die wichtigsten Kommunikationsinstrumente nennen.',
              'die Kommunikation in den Phasen des Produktlebenszyklus und in den Phasen des Diffusionsprozesses beschreiben.',
              'Kommunikationsinstrumente den Zielen des Relationship Marketing zuordnen.',
              'die unterschiedlichen Formen der Kommunikation in verschiedenen Märkten darstellen.',
              'Push- und Pull-Strategien der Kommunikation unterscheiden.'
            ]
          },
          {
            type: 'concept',
            title: '1.1 Begriffsdefinition',
            content: 'Kommunikation ist die Übermittlung von Informationen und Bedeutungsinhalten zum Zweck der Steuerung von Meinungen, Einstellungen, Erwartungen und Verhaltensweisen ausgewählter Zielgruppen gemäss spezifischen Zielen. Informationen werden im Kommunikationsprozess codiert und müssen vom Empfänger entschlüsselt werden.',
            highlight: 'Kommunikation ist die Übermittlung von Informationen zum Zweck der Steuerung von Meinungen, Einstellungen und Verhaltensweisen.'
          },
          {
            type: 'concept',
            title: '1.2 Kommunikationspolitik',
            content: 'Die Kommunikationspolitik ist ein Instrument zur Darstellung von Unternehmen und Marktleistungen. Sie wird auch Kommunikations-Mix genannt und stellt eines der 7 P im Marketing-Mix dar (Promotion). Die Kommunikationspolitik umfasst die Gesamtheit der Kommunikationsinstrumente und -massnahmen, die eingesetzt werden, um den relevanten Zielgruppen das Unternehmen und seine Leistungen darzustellen.',
            highlight: 'Die Kommunikationspolitik ist eines der 7 P im Marketing-Mix und umfasst alle Kommunikationsinstrumente und -massnahmen.'
          },
          {
            type: 'table',
            title: 'Kommunikationsinstrumente nach Funktion',
            headers: ['Instrument', 'Typisch einseitig', 'Typisch auf Dialog (zweiseitig)'],
            rows: [
              ['Mediawerbung', 'Meist einseitig', 'Möglich, falls Response-Möglichkeiten vorhanden'],
              ['Dialogmarketing', 'Selten', 'Meistens'],
              ['Persönlicher Verkauf', 'Nie', 'Immer'],
              ['Verkaufsförderung', 'Selten', 'Meistens, falls Response-Möglichkeit vorhanden'],
              ['Public Relations', 'Selten', 'Meistens'],
              ['Sponsoring', 'Meistens', 'Gelegentlich, falls Event-Plattformen vorhanden'],
              ['Messen / Ausstellungen', 'Selten', 'Meistens'],
              ['Event-Marketing', 'Selten', 'Meistens'],
              ['Online- und Social-Media-Kommunikation', 'Selten', 'Meistens'],
              ['Mitarbeitendenkommunikation', 'Nie', 'Immer']
            ]
          },
          {
            type: 'concept',
            title: '1.3 Kommunikation in verschiedenen Märkten',
            content: 'Die Form der Kommunikation unterscheidet sich je nach Markt: Bei Konsumgütern (B2C) sind die Zielgruppen gross, der Wettbewerb ist stark und die Differenzierung durch Kommunikation zentral. Bei Investitionsgütern (B2B) stehen Vertrauen, Qualität und Service im Vordergrund. Bei Dienstleistungen ist die Qualität schwer im Voraus zu demonstrieren \u2013 Testimonials und Kundenbewertungen schaffen Vertrauen.',
            highlight: 'Die Wahl der Kommunikationsinstrumente hängt von der Phase im Produktlebenszyklus, dem Involvement der Zielgruppe, den Kommunikationszielen, dem Produkt und der Absatzstrategie ab.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Kommunikation = Übermittlung von Informationen zur Steuerung von Meinungen, Einstellungen und Verhaltensweisen.',
              'Die Kommunikationspolitik ist eines der 7 P im Marketing-Mix (Promotion).',
              'Die wichtigsten Kommunikationsinstrumente: Persönliche Kommunikation, Mitarbeitendenkommunikation, Verkaufsförderung, Event-Marketing, Messen, Mediawerbung, PR, Dialogmarketing, Sponsoring, Social-Media-Kommunikation.',
              'Manche Instrumente sind einseitig (Mediawerbung), andere auf Dialog ausgerichtet (Persönlicher Verkauf).',
              'Die Wahl der Instrumente hängt ab von: Produktlebenszyklusphase, Involvement, Zielen, Produkt, Absatzstrategie (Push vs. Pull).',
              'Konsumgüterkommunikation (B2C): Massenkommunikation, Differenzierung durch Kommunikation.',
              'Investitionsgüterkommunikation (B2B): Vertrauen, Qualität, Service.',
              'Dienstleistungskommunikation: Testimonials und Kundenbewertungen schaffen Vertrauen.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Kommunikation</strong> ist die Übermittlung von Informationen und Bedeutungsinhalten zum Zweck der Steuerung von Meinungen, Einstellungen, Erwartungen und Verhaltensweisen bestimmter Adressaten gemäss spezifischen Zielsetzungen.',
              'Die <strong>Kommunikationspolitik</strong> ist ein Instrument zur Darstellung von Unternehmen und Marktleistungen. Die wichtigsten <strong>Kommunikationsinstrumente</strong> sind: Persönliche Kommunikation, Mitarbeitendenkommunikation, Verkaufsförderung, Event-Marketing, Messen und Ausstellungen, Mediawerbung, Public Relations, Dialogmarketing, Sponsoring, Social-Media-Kommunikation.',
              'Die Wahl der Instrumente hängt von <strong>5 Faktoren</strong> ab: Phase im Produktlebenszyklus, Involvement der Zielgruppe, Kommunikationsziele, Produkt selbst, gewählte Absatzstrategie (Push vs. Pull).'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Kommunikation', def: 'Übermittlung von Informationen zur Steuerung von Meinungen, Einstellungen und Verhaltensweisen.' },
              { term: 'Kommunikationspolitik', def: 'Gesamtheit der Kommunikationsinstrumente und -massnahmen (= Promotion, eines der 7 P).' },
              { term: 'Kommunikationsprozess', def: 'Sender codiert Botschaft \u2192 Medium \u2192 Empfänger decodiert \u2192 Feedback.' },
              { term: 'Push-Strategie', def: 'Kommunikation über den Handel zum Endkunden (Verkäufer drängt Produkt in den Markt).' },
              { term: 'Pull-Strategie', def: 'Kommunikation direkt an den Endkunden, der das Produkt dann beim Handel nachfragt.' },
              { term: 'Involvement', def: 'Grad des Interesses der Zielgruppe an der Produktkategorie.' },
              { term: 'Diffusionsprozess', def: 'Ausbreitung einer Innovation im Markt über die Zeit (Innovatoren \u2192 Early Adopters \u2192 Mehrheit \u2192 Nachzügler).' }
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 2: Unternehmenskommunikation (S. 27-38)
    // ============================================================
    {
      id: 'ch2', num: 'Kapitel 2 (Teil A)', title: 'Unternehmenskommunikation',
      exercises: [
        {
          id: 9, type: 'text',
          q: 'Notwendigkeit strategischer Kommunikationspolitik',
          instruction: 'Erklären Sie, weshalb eine strategische Kommunikationspolitik notwendig ist.',
          questions: [
            { q: 'Nennen Sie mindestens zwei Gründe.', keywords: ['unsicherheit','veränderungen','wettbewerb','medien','informationsüberlastung','differenzierung','zielgruppen','strategisch'], minKeywords: 2 }
          ],
          tips: ['Denken Sie an Veränderungen auf Unternehmens-, Wettbewerbs- und Kundenebene.','Die grosse Menge an Medien erfordert Koordination.','Unkoordinierte Kommunikation schadet dem Image.'],
          reveal: ['Aktuelle Unsicherheiten der Umwelt (Marktturbulenzen, Wettbewerbsdruck, Technologiedynamik).','Zunehmende Anzahl verfügbarer Medien erfordert professionelle Planung.','Informationsüberlastung führt zu selektivem Konsum.','Nur ein strategisches Vorgehen sichert ein optimales Kosten-Nutzen-Verhältnis.']
        },
        {
          id: 10, type: 'match',
          q: 'Kommunikationsebenen',
          instruction: 'Rep. 5 (S. 38): Ordnen Sie die Entscheide der richtigen Ebene zu.',
          pairs: [
            { l: 'Strategische Zielsetzungen des Gesamtunternehmens inkl. Positionierung', r: 'Gesamtkommunikation' },
            { l: 'Einzusetzende Kommunikationsinstrumente', r: 'Gesamtkommunikation' },
            { l: 'Strategieplanung des entsprechenden Kommunikationsinstruments', r: 'Fachabteilung' },
            { l: 'Massnahmenplanung / Disposition', r: 'Fachabteilung' }
          ],
          options: ['Gesamtkommunikation','Fachabteilung'],
          tips: ['Gesamtkommunikation = strategische Ebene, das ganze Unternehmen betreffend.','Fachabteilung = operative Ebene, instrumentenspezifisch.','Positionierung ist immer eine strategische Entscheidung.'],
          reveal: ['Gesamtkommunikation: Strategische Zielsetzungen, Positionierung, einzusetzende Instrumente.','Fachabteilung: Strategieplanung des Instruments, Massnahmenplanung.']
        },
        {
          id: 11, type: 'text',
          q: 'Funktionale und instrumentelle Integration',
          instruction: 'Rep. 6 (S. 38): Beschreiben Sie für ein Süssgetränke-Unternehmen eine mögliche Form der funktionalen und der instrumentellen Integration.',
          questions: [
            { q: 'Beschreiben Sie je ein Beispiel für funktionale und instrumentelle Integration.', keywords: ['PR','werbung','verkaufsförderung','abgestimmt','imageaufbau','promotionen','absatz','instrumente'], minKeywords: 3 }
          ],
          tips: ['Funktionale Integration: Instrumente ergänzen sich gegenseitig.','Instrumentelle Integration: verschiedene Instrumente werden aufeinander abgestimmt.','Denken Sie an ein konkretes Beispiel: z.B. PR + Werbung + VKF.'],
          reveal: ['Gesamtkommunikation: Die Instrumente PR, Werbung und VKF ergänzen sich in der Entwicklung von Imageaufbau und -pflege, Steigerung der Produktbekanntheit und den Absatz durch Promotionen sicherstellen.','Fachabteilung: Sponsoring könnte im Fall eines attraktiven Publikums-Events zusätzliche Impulse zur Belebung der Marke und für den Absatz ermöglichen.']
        },
        {
          id: 12, type: 'text',
          q: 'Horizontale und vertikale Integration',
          instruction: 'Rep. 7 (S. 38): Beschreiben Sie für ein Süssgetränke-Unternehmen je eine mögliche Form der horizontalen und der vertikalen Integration.',
          questions: [
            { q: 'Beschreiben Sie je ein Beispiel.', keywords: ['horizontal','vertikal','händler','endverbraucher','zeitgleich','abgestimmt','werbevorlagen','promotionen'], minKeywords: 3 }
          ],
          tips: ['Horizontal: Alle Händler erhalten gleichzeitig abgestimmte Werbemittel.','Vertikal: Händler UND Endverbraucher werden zielgruppengerecht informiert.','Denken Sie an ein Sponsoring-Event als Beispiel.'],
          reveal: ['Horizontal: Sämtliche Händler sind zeitgleich und abgestimmt auf deren jeweilige Kundschaft mit Informationen zu neuen Werbevorlagen und geplanten Promotionen zu bedienen.','Vertikal: Aussendienstmitarbeitende, Händler und Endverbraucher werden zielgruppengerecht mit den relevanten Informationen zu Sonderpromotionen rund um ein Sponsoring-Event informiert.']
        },
        {
          id: 13, type: 'match',
          q: 'Integrationsformen der Kommunikation',
          instruction: 'Ordnen Sie die Integrationsformen der richtigen Beschreibung zu.',
          pairs: [
            { l: 'Einheitliche Botschaften und Argumente über alle Instrumente', r: 'Inhaltliche Integration' },
            { l: 'Einheitliches Erscheinungsbild (Logo, Farben, Schriften)', r: 'Formale Integration' },
            { l: 'Abstimmung der zeitlichen Abfolge der Kommunikation', r: 'Zeitliche Integration' }
          ],
          options: ['Inhaltliche Integration','Formale Integration','Zeitliche Integration'],
          tips: ['Es gibt drei Formen der Integration.','Inhaltlich = WAS kommuniziert wird.','Formal = WIE es aussieht. Zeitlich = WANN kommuniziert wird.'],
          reveal: ['Inhaltliche Integration: einheitliche Botschaften und Argumente.','Formale Integration: einheitliches visuelles Erscheinungsbild.','Zeitliche Integration: abgestimmte zeitliche Abfolge der Massnahmen.']
        },
        {
          id: 14, type: 'tf',
          q: 'Richtig oder Falsch: Unternehmenskommunikation',
          statements: [
            { s: 'Auf der Ebene der Gesamtkommunikation werden Entscheide über den Einsatz der Kommunikationsinstrumente gefällt.', c: true, feedback: 'Die Gesamtkommunikation betrifft strategische Entscheide des ganzen Unternehmens.' },
            { s: 'Inhaltliche, formale und zeitliche Integration sind die drei Formen der integrierten Kommunikation.', c: true, feedback: 'Diese drei Formen sorgen für ein einheitliches, authentisches Bild.' },
            { s: 'Die Fachabteilung entscheidet über die Positionierung des Unternehmens.', c: false, feedback: 'Die Positionierung ist eine strategische Entscheidung auf Ebene der Gesamtkommunikation.' },
            { s: 'Das 5-Schritte-Kommunikationskonzept beginnt mit der Kontrolle.', c: false, feedback: 'Es beginnt mit der Analyse (Situationsanalyse), gefolgt von Strategie, Realisation/Budgetierung und Kontrolle.' }
          ],
          tips: ['Gesamtkommunikation = strategisch, Fachabteilung = operativ.','Es gibt drei Integrationsformen: inhaltlich, formal, zeitlich.','Das Kommunikationskonzept folgt dem klassischen Planungsprozess.'],
          reveal: ['Aussage 1: Richtig \u2013 strategische Entscheide auf Gesamtebene.','Aussage 2: Richtig \u2013 inhaltliche, formale, zeitliche Integration.','Aussage 3: Falsch \u2013 Positionierung = Gesamtkommunikation.','Aussage 4: Falsch \u2013 Beginn mit Analyse/Situationsanalyse.']
        },
        {
          id: 15, type: 'match',
          q: 'Kommunikationskonzept: 5 Schritte',
          instruction: 'Ordnen Sie die 5 Schritte des Kommunikationskonzepts in die richtige Reihenfolge.',
          pairs: [
            { l: '1.', r: 'Analyse (Situationsanalyse)' },
            { l: '2.', r: 'Kommunikationsstrategie' },
            { l: '3.', r: 'Kreative Umsetzung' },
            { l: '4.', r: 'Realisation / Budgetierung' },
            { l: '5.', r: 'Kontrolle (Controlling)' }
          ],
          options: ['Analyse (Situationsanalyse)','Kommunikationsstrategie','Kreative Umsetzung','Realisation / Budgetierung','Kontrolle (Controlling)'],
          tips: ['Jedes Konzept beginnt mit einer Analyse.','Die Strategie folgt auf die Analyse.','Kontrolle ist der letzte Schritt.'],
          reveal: ['1. Analyse (Situationsanalyse) \u2013 Wo stehen wir?','2. Kommunikationsstrategie \u2013 Wo wollen wir hin?','3. Kreative Umsetzung \u2013 Wie setzen wir es um?','4. Realisation / Budgetierung \u2013 Was kostet es?','5. Kontrolle (Controlling) \u2013 Haben wir die Ziele erreicht?']
        },
        {
          id: 16, type: 'match',
          q: 'Kontrolle: Prozess-, Wirkungs-, Effizienzanalyse',
          instruction: 'Ordnen Sie die Kontrollarten der richtigen Beschreibung zu.',
          pairs: [
            { l: 'Ob und in welcher Form das Projekt im zeitlichen Ablauf durchgeführt wurde', r: 'Prozessanalyse' },
            { l: 'Kognitive, affektive und konative Reaktionen der Zielgruppen', r: 'Wirkungsanalyse' },
            { l: 'Kosten-Nutzen-Vergleich der Kommunikationsaktivitäten', r: 'Effizienzanalyse' }
          ],
          options: ['Prozessanalyse','Wirkungsanalyse','Effizienzanalyse'],
          tips: ['Prozess = zeitlicher Ablauf.','Wirkung = Reaktionen der Zielgruppen.','Effizienz = Kosten-Nutzen-Verhältnis.'],
          reveal: ['Prozessanalyse: Durchführung des Projekts im zeitlichen Ablauf.','Wirkungsanalyse: Reaktionen der Zielgruppen (kognitiv, affektiv, konativ).','Effizienzanalyse: Kosten-Nutzen-Vergleich.']
        }
      ],
      learningData: {
        title: 'Unternehmenskommunikation',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'erklären, weshalb eine strategische Kommunikationspolitik notwendig ist.',
              'die Kommunikationsstrategien auf unterschiedlichen Ebenen beschreiben.',
              'Kommunikationsmassnahmen anhand der unterschiedlichen Integrationsebenen sinnvoll aufeinander abstimmen.'
            ]
          },
          {
            type: 'concept',
            title: '2.1 Notwendigkeit einer strategischen Kommunikationspolitik',
            content: 'Zentrale Veränderungen auf Unternehmens-, Wettbewerbs-, Kunden- und Umfeldebene begründen den Zwang zu einem strategischen Vorgehen in der Kommunikationspolitik: Unsicherheiten der Umwelt (Marktturbulenzen, Wettbewerbsdruck, Deregulierung), austauschbare Marktleistungen (Kommunikationswettbewerb statt Produktwettbewerb) und zunehmende Verlagerung der Kommunikationsinstrumente (von klassischen hin zu digitalen Instrumenten).',
            highlight: 'Ein strategischer Ansatz in der Unternehmens- und Marketingkommunikation ist notwendig, um ein optimales Kosten-Nutzen-Verhältnis zu erreichen.'
          },
          {
            type: 'concept',
            title: '2.2 Kommunikationsstrategien auf unterschiedlichen Ebenen',
            content: 'Kommunikationspolitische Entscheidungen müssen auf unterschiedlichen Ebenen getroffen werden: Auf der Ebene der Gesamtkommunikation werden zentrale Entscheidungen gefällt (strategische Zielsetzungen, Leitbild, Kommunikationsinstrumente). Auf der Ebene der Kommunikationsabteilung wird der Einsatz der jeweiligen Instrumente geplant (z. B. Werbung, PR, Sponsoring, Social Media). Die Strategieerarbeitung erfolgt top-down, die Konzepterstellung bottom-up.',
            highlight: 'Gesamtkommunikation = strategische Ebene; Kommunikationsabteilung = taktische Ebene.'
          },
          {
            type: 'concept',
            title: '2.3 Kommunikation, strategisch geplant',
            content: 'Die strategisch geplante Kommunikation (integrierte Kommunikation) umfasst 6 Merkmale: Sie ist ein Ziel der Unternehmenskommunikation (UCP), ein Managementprozess (Analyse, Planung, Organisation, Durchführung, Kontrolle), umfasst sämtliche internen und externen Kommunikationsinstrumente, schafft Einheit in der Kommunikation, steigert die Effizienz und erzeugt ein einheitliches Erscheinungsbild bei den Zielgruppen.',
            highlight: 'Integrierte Kommunikation = inhaltliche, formale und zeitliche Abstimmung aller Kommunikationsmassnahmen.'
          },
          {
            type: 'table',
            title: 'Integrationsebenen der strategisch geplanten Kommunikation',
            headers: ['Formen', 'Gegenstand', 'Ziele', 'Zeithorizont'],
            rows: [
              ['Inhaltliche Integration (funktional, instrumental, horizontal, vertikal)', 'Thematische Abstimmung durch Verbindungslinien', 'Konsistenz, Eigenständigkeit, Kongruenz', 'Langfristig'],
              ['Formale Integration', 'Einhaltung formaler Gestaltungsprinzipien', 'Präsenz, Prägnanz, Klarheit', 'Mittel- bis langfristig'],
              ['Zeitliche Integration', 'Abstimmung innerhalb und zwischen Planungsperioden', 'Konsistenz, Kontinuität', 'Kurz- bis mittelfristig']
            ]
          },
          {
            type: 'concept',
            title: '2.4 Hierarchisierung der Kommunikationsinstrumente',
            content: 'Bei der Konzepterstellung auf Ebene der Gesamtkommunikation spielt die Hierarchisierung der Instrumente eine wichtige Rolle. Es werden ein bis maximal zwei Leitinstrumente definiert, die sich durch beste Eignung zum Transport der Leitidee, grosses Beeinflussungspotenzial und Führungsfunktion für andere Instrumente auszeichnen. Weitere Kategorien: Kristallisationsinstrumente (herausragende Bedeutung für Zielgruppe), Integrationsinstrumente (hohes Integrationspotenzial), Folgeinstrumente (einzelne Kommunikationsaufgaben).',
            highlight: 'Leitinstrumente beanspruchen einen dominanten Anteil des Kommunikationsbudgets.'
          },
          {
            type: 'concept',
            title: '2.5 Konzept auf Ebene Gesamtkommunikation',
            content: 'Ein Kommunikationskonzept auf Ebene der Gesamtkommunikation umfasst 5 Phasen: 1. Situationsanalyse (SWOT-Analyse, kommunikative Problemstellung), 2. Zielgruppen, Ziele, Strategien (Positionierung, Kommunikations-Zielgruppen, Leitidee), 3. Kommunikationsmassnahmen (Hierarchisierung der Instrumente, Regeln für CI/CD), 4. Realisation/Budgetierung (Verteilung des Budgets), 5. Kontrolle/Controlling (Prozess-, Wirkungs- und Effizienzanalysen).',
            highlight: 'Die 5 Phasen des Kommunikationskonzepts: Analyse, Zielgruppen/Ziele/Strategien, Massnahmen, Realisation/Budget, Kontrolle.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Eine strategische Kommunikationspolitik ist unverzichtbar wegen austauschbarer Marktleistungen, Verlagerung der Instrumente und Unsicherheiten der Umwelt.',
              'Entscheidungen werden auf zwei Ebenen getroffen: Gesamtkommunikation (strategisch) und Kommunikationsabteilung (taktisch).',
              'Die integrierte Kommunikation umfasst inhaltliche, formale und zeitliche Integration.',
              'Leitinstrumente übernehmen die Führungsfunktion im Kommunikations-Mix.',
              'Ein Kommunikationskonzept durchläuft 5 Phasen: Analyse, Ziele, Massnahmen, Budget, Kontrolle.',
              'Kontrolle umfasst Prozessanalysen, Wirkungsanalysen und Effizienzanalysen.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Veränderungen auf der Ebene des Unternehmens, des Wettbewerbs, der Kunden und des Umfelds machen ein <strong>strategisches Vorgehen</strong> in der Kommunikationspolitik notwendig.',
              'Auf der <strong>Ebene der Gesamtkommunikation</strong> werden Entscheidungen gefällt, die das ganze Unternehmen betreffen. Auf der <strong>Ebene der Kommunikationsabteilung</strong> werden Entscheide über den Einsatz der Kommunikationsinstrumente getroffen.',
              'Wichtig ist, dass die Kommunikationsbemühungen auf den unterschiedlichen Ebenen sorgfältig aufeinander abgestimmt werden. Man unterscheidet <strong>inhaltliche, formale und zeitliche Integration</strong>.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Unternehmenskommunikation', def: 'Alle Kommunikationsaktivitäten für das Unternehmen selbst sowie die Marketingkommunikation (Corporate Communication + Business Communication).' },
              { term: 'Strategisches Kommunikationskonzept', def: 'Verbindliche, mittel- bis langfristige Schwerpunktfestlegung für die Gesamtkommunikation des Unternehmens.' },
              { term: 'Inhaltliche Integration', def: 'Thematische Abstimmung durch Verbindungslinien (Slogans, Kernbotschaften, Schlüsselbilder) für ein einheitliches Erscheinungsbild.' },
              { term: 'Formale Integration', def: 'Einhaltung formaler Gestaltungsprinzipien (Logos, Schrifttyp, Grösse, Farbe) für ein einheitliches visuelles Erscheinungsbild.' },
              { term: 'Zeitliche Integration', def: 'Kurz- bis mittelfristige Einsatzplanung und Abstimmung der Kommunikationsinstrumente und -mittel.' },
              { term: 'Leitinstrument', def: 'Kommunikationsinstrument mit der besten Eignung zum Transport der Leitidee, grossem Beeinflussungspotenzial und Führungsfunktion.' },
              { term: 'Cross-Impact-Analyse', def: 'Instrument zur Hierarchisierung von Kommunikationsinstrumenten durch Analyse der gegenseitigen Beeinflussung.' }
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 3: Corporate Identity und Corporate Image (S. 39-44)
    // ============================================================
    {
      id: 'ch3', num: 'Kapitel 3 (Teil A)', title: 'Corporate Identity und Corporate Image',
      exercises: [
        {
          id: 17, type: 'text',
          q: 'CI vs. Corporate Image',
          instruction: 'Rep. 8 (S. 44): Was ist der zentrale Unterschied zwischen der Corporate Identity und dem Corporate Image?',
          questions: [
            { q: 'Erklären Sie den Unterschied.', keywords: ['selbstbild','fremdbild','identität','wahrnehmung','innen','aussen','unternehmen','zielgruppen'], minKeywords: 3 }
          ],
          tips: ['Identity = wie sich das Unternehmen selbst sieht (Selbstbild).','Image = wie das Unternehmen von aussen gesehen wird (Fremdbild).','Im Idealfall stimmen beide überein.'],
          reveal: ['Corporate Identity: Selbstbild \u2013 wie das Unternehmen von aussen gesehen werden möchte.','Corporate Image: Fremdbild \u2013 wie das Unternehmen von den Zielgruppen tatsächlich gesehen wird.','Idealerweise sind Selbstbild und Fremdbild deckungsgleich.']
        },
        {
          id: 18, type: 'text',
          q: 'Corporate Culture',
          instruction: 'Rep. 9 (S. 44): Welche Inhalte definiert die Corporate Culture?',
          questions: [
            { q: 'Nennen Sie Inhalte der Corporate Culture.', keywords: ['werte','normen','verhaltens','handlungsweisen','charakter','prinzipien','rituale','personalpolitik'], minKeywords: 2 }
          ],
          tips: ['Corporate Culture umfasst die gelebten Werte und Normen.','Es geht um den Charakter des Unternehmens.','Wenn die Culture nicht gelebt wird, leidet die CI.'],
          reveal: ['Prinzipien werden nicht durchgesetzt, Rituale nicht gepflegt.','Der Personalpolitik und den Bedürfnissen der Mitarbeitenden wird nicht ausreichend Beachtung geschenkt.','Die Vorgesetzten sind inkonsequent in ihrem Verhalten.','Den Worten der Unternehmensleitung folgen nicht die entsprechenden Taten.']
        },
        {
          id: 19, type: 'text',
          q: 'Corporate Behaviour',
          instruction: 'Rep. 10 (S. 44): Nennen Sie zwei mögliche Aufgaben und Funktionen des Corporate Behaviour eines nationalen Detailhandelsunternehmens.',
          questions: [
            { q: 'Aufgaben und Funktionen:', keywords: ['personalpolitik','kundenorientierung','sortiment','weiterbildung','kulanz','reklamation','sozial','gesellschaftlich'], minKeywords: 2 }
          ],
          tips: ['CB = das gelebte Verhalten des Unternehmens.','Denken Sie an Verhalten gegenüber Kunden, Mitarbeitenden und Gesellschaft.','Ein Detailhändler hat direkten Kundenkontakt.'],
          reveal: ['Motivierende Personalpolitik mittels sorgfältiger Selektion und gezielter Weiterbildung der Mitarbeitenden.','Konsequente Kundenorientierung durch bedürfnisorientierte Sortiments- und Preispolitik.','Kulanz bei Reklamationen.','Förderung von sozialen, kulturellen und gesellschaftlich relevanten Organisationen und Events.']
        },
        {
          id: 20, type: 'fill',
          q: 'Elemente des Corporate Designs',
          instruction: 'Rep. 11 (S. 44): Nennen Sie mindestens vier Elemente des Corporate Designs.',
          template: 'Die Elemente des Corporate Designs sind: {0}, {1}, {2}, {3}.',
          blanks: [
            ['Logo','Logo / Signet'],
            ['Farbsystem','einprägsames Farbsystem'],
            ['Bildsprache','treffende Bildsprache'],
            ['Layout-System','verbindliches Layout-System']
          ],
          tips: ['CD = das visuelle Erscheinungsbild.','Denken Sie an alles, was man SEHEN kann.','Es gibt mindestens 5 Elemente: Logo/Signet, guter Name, Bildsprache, Farbsystem, Layout-System.'],
          reveal: ['Logo / Signet.','Guter Name.','Treffende Bildsprache.','Einprägsames Farbsystem.','Verbindliches Layout-System.']
        },
        {
          id: 21, type: 'text',
          q: 'CI abweicht vom Corporate Image',
          instruction: 'Rep. 12 (S. 44): Warum kann die Corporate Identity vom Corporate Image abweichen?',
          questions: [
            { q: 'Erklären Sie mögliche Gründe.', keywords: ['selbstbild','gelebt','konsequent','wahrnehmung','intern','zielgruppen','vorstellungen'], minKeywords: 2 }
          ],
          tips: ['CI = was das Unternehmen sein möchte.','Image = was es tatsächlich ist.','Wenn die CI nicht konsequent gelebt wird, weicht das Image ab.'],
          reveal: ['Wenn das definierte Selbstbild nicht von allen internen Zielgruppen konsequent gelebt und umgesetzt wird.','Die Wahrnehmung der externen Zielgruppen entspricht nicht den Vorstellungen des Unternehmens.']
        },
        {
          id: 22, type: 'match',
          q: 'CI-Elemente zuordnen',
          instruction: 'Ordnen Sie die Definitionen den richtigen CI-Elementen zu.',
          pairs: [
            { l: 'Alle Werte, Normen und Handlungsweisen, die den Charakter prägen', r: 'Corporate Culture' },
            { l: 'Gesamtheit der formalen Kommunikationsprozesse', r: 'Corporate Communication' },
            { l: 'Das wirkliche, gelebte Verhalten des Unternehmens', r: 'Corporate Behaviour' },
            { l: 'Das definierte visuelle Erscheinungsbild', r: 'Corporate Design' },
            { l: 'Marktleistung des Unternehmens', r: 'Corporate Performance' }
          ],
          options: ['Corporate Culture','Corporate Communication','Corporate Behaviour','Corporate Design','Corporate Performance'],
          tips: ['Culture = Werte und Normen.','Communication = formale Kommunikation.','Behaviour = gelebtes Verhalten.','Design = visuelles Erscheinungsbild.','Performance = Marktleistung.'],
          reveal: ['Corporate Culture: Werte, Normen, Handlungsweisen.','Corporate Communication: formale Kommunikationsprozesse.','Corporate Behaviour: gelebtes Verhalten.','Corporate Design: visuelles Erscheinungsbild.','Corporate Performance: Marktleistung.']
        },
        {
          id: 23, type: 'tf',
          q: 'Richtig oder Falsch: CI',
          statements: [
            { s: 'Die Corporate Identity ist das Fremdbild des Unternehmens.', c: false, feedback: 'CI ist das Selbstbild. Das Fremdbild ist das Corporate Image.' },
            { s: 'Corporate Design umfasst Logo, Farbsystem, Bildsprache und Layout-System.', c: true, feedback: 'Dies sind die visuellen Elemente des CD.' },
            { s: 'Corporate Behaviour beschreibt nur das Verhalten gegenüber Kunden.', c: false, feedback: 'CB umfasst das Verhalten gegenüber allen Anspruchsgruppen.' },
            { s: 'Im Idealfall stimmen Corporate Identity und Corporate Image überein.', c: true, feedback: 'Selbstbild und Fremdbild sollten deckungsgleich sein.' }
          ],
          tips: ['CI = Selbstbild, Image = Fremdbild.','CD umfasst visuelle Elemente.','CB = gelebtes Verhalten gegenüber ALLEN Anspruchsgruppen.'],
          reveal: ['Aussage 1: Falsch \u2013 CI = Selbstbild.','Aussage 2: Richtig \u2013 visuelle CD-Elemente.','Aussage 3: Falsch \u2013 CB gegenüber allen Anspruchsgruppen.','Aussage 4: Richtig \u2013 Idealfall = deckungsgleich.']
        }
      ],
      learningData: {
        title: 'Corporate Identity und Corporate Image',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'Corporate Identity und Corporate Image unterscheiden.',
              'die Begriffe Corporate Culture, Corporate Performance, Corporate Behaviour, Corporate Communication und Corporate Design beschreiben.',
              'die zentralen Fragestellungen bei der Entwicklung einer Corporate Identity auf den Unternehmensalltag anwenden.'
            ]
          },
          {
            type: 'concept',
            title: '3.1 Corporate Identity (CI)',
            content: 'Die Corporate Identity ist die Identität und das Selbstverständnis eines Unternehmens, abgeleitet von der Unternehmens-Vision. Es handelt sich um die strategisch geplante und operativ eingesetzte Selbstdarstellung eines Unternehmens nach innen und aussen. Zur CI gehören fünf Elemente: Corporate Culture (Unternehmenskultur), Corporate Behaviour (Unternehmensverhalten), Corporate Communication (Unternehmenskommunikation), Corporate Design (visuelles Erscheinungsbild), Corporate Performance (Marktleistung).',
            highlight: 'Corporate Identity = strategisch geplante Selbstdarstellung eines Unternehmens nach innen und nach aussen.'
          },
          {
            type: 'concept',
            title: '3.1.1 Corporate Culture',
            content: 'Die Unternehmenskultur ist die Gesamtheit von Normen, Wertvorstellungen, Verhaltens- und Handlungsweisen, die den Charakter, den Stil, die Atmosphäre und das Erscheinungsbild eines Unternehmens prägen. Sie bestimmt das Klima, den Umgang der Menschen miteinander und strahlt nach innen und aussen aus. Hauptkategorien: Verhaltensweisen (Bräuche, Traditionen), Gruppennormen und Werte, Prinzipien (z. B. Produktqualität), Philosophie, Spielregeln, Klima, verwurzelte Talente, Denkgewohnheiten, Symbole mit Integrationskraft.',
            highlight: 'Die Unternehmenskultur durchdringt alle Unternehmensebenen.'
          },
          {
            type: 'concept',
            title: '3.1.2-3.1.4 Corporate Behaviour, Communication & Design',
            content: 'Corporate Behaviour ist das tatsächliche Verhalten des Unternehmens gegenüber allen Anspruchsgruppen (bedingtes monetäres und nichtmonetäres Verhalten). Daraus entsteht Glaubwürdigkeit. Corporate Communication umfasst alle strategischen Kommunikationsaktivitäten (kurz-, mittel- und langfristige Instrumente und Massnahmen). Corporate Design ist das definierte visuelle Erscheinungsbild: guter Name, Logo/Signet, sekundäre Erkennungsmerkmale, einprägsames Farbsystem, Typografie, Bildsprache, Layout-System, Claim.',
            highlight: 'Corporate Behaviour erzeugt Glaubwürdigkeit; Corporate Design macht die Werte und Zielvorstellungen rasch sichtbar.'
          },
          {
            type: 'concept',
            title: '3.2 Corporate Image',
            content: 'Das Corporate Image ist das Bild, das von aussen (Öffentlichkeit, Markt) wahrgenommen wird (Firmenimage/Fremdbild). Idealerweise sind Corporate Identity und Corporate Image deckungsgleich. Image ist immer eine subjektive Wahrnehmung, immer eine Wirkung (nie eine Ursache), kann nicht direkt gestaltet werden (nur beeinflusst durch Kommunikation, Verhalten, Marktleistung) und schafft Präferenzen. Neben dem Corporate Image gibt es auch Produktimage, Markenimage und Branchenimage.',
            highlight: 'Das Corporate Image sollte im Idealfall deckungsgleich mit der Vision des Unternehmens sein.'
          },
          {
            type: 'table',
            title: 'Elemente der Corporate Identity',
            headers: ['Begriff', 'Erklärung'],
            rows: [
              ['Corporate Culture', 'Alle Werte, Normen, Verhaltens- und Handlungsweisen, die den Charakter des Unternehmens prägen.'],
              ['Corporate Communication', 'Gesamtheit der auf externe und interne Zielgruppen bezogenen, formalen Kommunikationsprozesse eines Unternehmens.'],
              ['Corporate Behaviour', 'Das wirkliche, gelebte Verhalten eines Unternehmens, das durch die Anspruchsgruppen wahrnehmbaren Aktivitäten.'],
              ['Corporate Design', 'Das definierte visuelle Erscheinungsbild eines Unternehmens nach innen und aussen.'],
              ['Corporate Performance', 'Marktleistung des Unternehmens (Angebot, Fähigkeiten, vorhandene Ressourcen etc.).']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Corporate Identity (CI) = Selbstbild des Unternehmens nach innen und aussen.',
              'Corporate Image = Fremdbild, wie das Unternehmen von der Öffentlichkeit wahrgenommen wird.',
              'Im Idealfall stimmen CI und Image überein \u2013 das ist allerdings kaum zu 100% zu erreichen.',
              'Die 5 CI-Elemente: Culture, Behaviour, Communication, Design, Performance.',
              'Image kann nicht direkt gestaltet werden \u2013 es ist immer eine subjektive Wahrnehmung.',
              'Der Gesamteindruck eines Unternehmens darf kein Zufall sein.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Corporate Identity</strong> ist das Bild, das sich das Unternehmen nach innen und aussen gibt. Man unterscheidet fünf Bereiche: Corporate Culture, Corporate Communication, Corporate Behaviour, Corporate Design und Corporate Performance.',
              'Das <strong>Corporate Image</strong> ist das Bild, das sich der Markt oder die Öffentlichkeit vom Unternehmen machen. Es sollte im Idealfall deckungsgleich sein mit der Vision des Unternehmens.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Corporate Identity', def: 'Identität und Selbstverständnis eines Unternehmens \u2013 die strategisch geplante Selbstdarstellung nach innen und aussen.' },
              { term: 'Corporate Culture', def: 'Gesamtheit von Normen, Wertvorstellungen und Handlungsweisen, die den Charakter des Unternehmens prägen.' },
              { term: 'Corporate Behaviour', def: 'Das tatsächliche, gelebte Verhalten eines Unternehmens gegenüber allen Anspruchsgruppen.' },
              { term: 'Corporate Communication', def: 'Alle strategischen Kommunikationsaktivitäten (intern und extern) eines Unternehmens.' },
              { term: 'Corporate Design', def: 'Das definierte visuelle Erscheinungsbild (Logo, Farben, Schrift, Layout, Claim).' },
              { term: 'Corporate Performance', def: 'Die eigentliche Marktleistung des Unternehmens als Resultat der gelebten CI.' },
              { term: 'Corporate Image', def: 'Das Fremdbild \u2013 wie das Unternehmen von der Öffentlichkeit und dem Markt wahrgenommen wird.' }
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 4: Public Relations - Grundlagen (S. 45-55)
    // ============================================================
    {
      id: 'ch4', num: 'Kapitel 4 (Teil A)', title: 'Public Relations \u2013 Grundlagen',
      exercises: [
        {
          id: 24, type: 'tf',
          q: 'PR: Richtig oder Falsch',
          statements: [
            { s: 'Public Relations und Unternehmenskommunikation sind synonym gebrauchte Begriffe.', c: true, feedback: 'Beide Begriffe werden oft synonym verwendet.' },
            { s: 'Gemeinnützige Organisationen brauchen keine PR.', c: false, feedback: 'PR sind für gemeinnützige Organisationen sehr wichtig, da sie mit geringen finanziellen Mitteln Aufmerksamkeit und Goodwill schaffen müssen.' },
            { s: 'PR umfassen nur Aktivitäten eines Unternehmens auf Gebieten, in denen Marketing direkt aktiv ist.', c: false, feedback: 'PR umfassen auch Aktivitäten in Bereichen, in denen Marketing nicht direkt aktiv ist (z.B. Finanzen, Personalwesen).' },
            { s: 'Auch öffentliche Verwaltungen versuchen mit PR das Verständnis und das Vertrauen der Bevölkerung zu gewinnen.', c: true, feedback: 'Auch nicht-kommerzielle Organisationen betreiben PR.' },
            { s: 'Die obersten Repräsentanten der Unternehmen sind für PR verantwortlich.', c: true, feedback: 'PR ist Chefsache \u2013 die oberste Führungsebene trägt die Verantwortung.' }
          ],
          tips: ['PR = Öffentlichkeitsarbeit, nicht nur Marketing.','Auch Non-Profit-Organisationen brauchen PR.','PR umfasst alle Unternehmensbereiche.'],
          reveal: ['Aussage 1: Richtig \u2013 synonyme Begriffe.','Aussage 2: Falsch \u2013 gemeinnützige Organisationen brauchen PR besonders.','Aussage 3: Falsch \u2013 PR geht über Marketing hinaus.','Aussage 4: Richtig \u2013 auch öffentliche Verwaltungen betreiben PR.','Aussage 5: Richtig \u2013 PR ist Chefsache.']
        },
        {
          id: 25, type: 'match',
          q: 'Interne und externe PR-Ziele',
          instruction: 'Rep. 15 (S. 55): Ordnen Sie die PR-Ziele der internen oder externen PR zu.',
          pairs: [
            { l: 'Wir-Gefühl fördern', r: 'Intern' },
            { l: 'Vertrauen der Aktionäre in die Unternehmensstrategie stärken', r: 'Extern' },
            { l: 'Image bei Kunden aufbauen und pflegen', r: 'Extern' },
            { l: 'Bei den Behörden Verständnis für Entlassungen schaffen', r: 'Extern' },
            { l: 'Akzeptanz für schwierige Managemententscheide schaffen', r: 'Intern' },
            { l: 'Ängste und Unsicherheiten abbauen', r: 'Intern' }
          ],
          options: ['Intern','Extern'],
          tips: ['Intern = Mitarbeitende, Führungskräfte.','Extern = Kunden, Aktionäre, Behörden, Öffentlichkeit.','Wir-Gefühl und Akzeptanz betreffen Mitarbeitende (intern).'],
          reveal: ['Intern: Wir-Gefühl fördern, Akzeptanz für schwierige Entscheide schaffen, Ängste und Unsicherheiten abbauen.','Extern: Vertrauen der Aktionäre stärken, Image bei Kunden aufbauen, Verständnis bei Behörden schaffen.']
        },
        {
          id: 26, type: 'fill',
          q: 'Funktionen der PR',
          instruction: 'Rep. 16 (S. 55): Nennen Sie die Funktionen der PR.',
          template: 'Die Funktionen der PR sind: {0}, {1}, {2}, Imagefunktion, {3}, Absatzförderungsfunktion, {4}, Kontinuitätsfunktion.',
          blanks: [
            ['Informationsfunktion'],
            ['Kontaktfunktion'],
            ['Führungsfunktion'],
            ['Harmonisierungsfunktion'],
            ['Stabilisierungsfunktion']
          ],
          tips: ['Es gibt 8 Funktionen der PR.','Beginnen Sie mit Informations- und Kontaktfunktion.','Die Harmonisierungsfunktion gleicht interne und externe Kommunikation ab.'],
          reveal: ['Informationsfunktion.','Kontaktfunktion.','Führungsfunktion.','Imagefunktion.','Harmonisierungsfunktion.','Absatzförderungsfunktion.','Stabilisierungsfunktion.','Kontinuitätsfunktion.']
        },
        {
          id: 27, type: 'match',
          q: 'PR-Massnahmen zuordnen',
          instruction: 'Rep. 17 (S. 69): Welche PR-Massnahmen würden Sie in den folgenden Situationen wählen?',
          pairs: [
            { l: 'Ein neues Arbeitsplatzreglement soll allen Mitarbeitenden mitgeteilt werden', r: 'Intranet' },
            { l: 'Ein neues Produkt soll vorgestellt werden', r: 'Medienkonferenz / Plakate' }
          ],
          options: ['Intranet','Medienkonferenz / Plakate'],
          tips: ['Intern = Intranet, Mitarbeitendenzeitung.','Extern = Medienkonferenz, Pressemitteilung.','Ein neues Reglement betrifft alle Mitarbeitenden (intern).'],
          reveal: ['Arbeitsplatzreglement: Intranet (interne Kommunikation).','Neues Produkt: Medienkonferenz und/oder Plakate (externe Kommunikation).']
        },
        {
          id: 28, type: 'match',
          q: 'PR-Massnahmen bei Krisen',
          instruction: 'Rep. 18 (S. 69): Welche PR-Massnahmen passen zu diesen Situationen?',
          pairs: [
            { l: 'Die Stimmung im Unternehmen soll verbessert werden', r: 'Betriebsausflug, Briefkasten/Intranetforum für Vorschläge' },
            { l: 'Die neuesten Unternehmenszahlen sind negativ bzw. der Gewinn ist stark zurückgegangen', r: 'Gespräche mit Lieferanten und Kapitalgebern, Medienmitteilung, Information der Mitarbeitenden' }
          ],
          options: ['Betriebsausflug, Briefkasten/Intranetforum für Vorschläge','Gespräche mit Lieferanten und Kapitalgebern, Medienmitteilung, Information der Mitarbeitenden'],
          tips: ['Stimmung = interne Massnahmen, die Zusammenhalt fördern.','Negative Zahlen = transparente Kommunikation nach innen und aussen.','Wichtig: Intern vor extern informieren!'],
          reveal: ['Stimmung verbessern: Betriebsausflug, Briefkasten oder Intranetforum für Vorschläge und Beschwerden.','Negative Zahlen: Gespräche mit Lieferanten und Kapitalgebern, Information der Medien durch schriftliche Medienmitteilung, Information der Mitarbeitenden in Versammlung.']
        },
        {
          id: 29, type: 'text',
          q: 'PR-Kommunikationsmix für Steuerberatung',
          instruction: 'Rep. 19 (S. 69): Zwei Steuerfachleute gründen eine Beratungspraxis auf dem Land. Wie könnte ein sinnvoller PR-Kommunikationsmix aussehen?',
          questions: [
            { q: 'Beschreiben Sie den PR-Kommunikationsmix.', keywords: ['werbebriefe','public relations','persönlicher verkauf','presse','artikel','lokalradio','medien'], minKeywords: 3 }
          ],
          tips: ['Auf dem Land ist persönlicher Kontakt besonders wichtig.','Lokale Medien (Presse, Lokalradio) sind relevant.','Werbebriefe an potenzielle Kunden sind eine Möglichkeit.'],
          reveal: ['Werbebriefe an alle infrage kommenden Unternehmen.','Herausgabe von Informationen über neue gesetzliche Entwicklungen, Artikel in der Lokalpresse, Vorträge (Public Relations).','Persönliche Vorstellungsgespräche, um vor Ort Kontakte zu knüpfen (persönlicher Verkauf).']
        },
        {
          id: 30, type: 'text',
          q: 'PR-Massnahmen für Partyservice',
          instruction: 'Rep. 20 (S. 69): Ein neu gegründeter Partyservice möchte sich in der regionalen Öffentlichkeit bekannt machen. Nennen Sie drei mögliche PR-Massnahmen.',
          questions: [
            { q: 'Drei PR-Massnahmen:', keywords: ['artikel','presse','interviews','medien','einladen','apéro','PR-inserate','veranstaltung'], minKeywords: 2 }
          ],
          tips: ['Denken Sie an lokale Medien und Veranstaltungen.','Direkte Einladungen an Medienschaffende.','PR-Inserate in regionalen Medien.'],
          reveal: ['Artikel und Berichte in der Presse über Ziele und Tätigkeiten, evtl. Interviews im Lokalradio.','Lokale Medienschaffende zu einem Apéro einladen.','PR-Inserate in der regionalen Presse über die Idee und Geschichte des Partyservice.']
        },
        {
          id: 31, type: 'mc',
          q: 'PR: Grundsatz Intern vor Extern (MC)',
          instruction: 'Welcher Grundsatz gilt für die Publikation von Informationen in der PR?',
          options: ['Extern vor intern','Intern vor extern','Gleichzeitig intern und extern','Nur extern, intern ist nicht relevant'],
          answer: 1,
          tips: ['Die internen Zielgruppen sollen immer zuerst informiert werden.','Dies ist besonders wichtig bei kritischen Nachrichten.','Mitarbeitende sollten nicht aus den Medien erfahren, was im Unternehmen passiert.'],
          reveal: ['Der Grundsatz lautet: Intern vor extern.','Die internen Zielgruppen werden immer vor den externen Zielgruppen informiert.','Dies ist besonders bei kritischen Nachrichten von Bedeutung.']
        }
      ],
      learningData: {
        title: 'Public Relations \u2013 Grundlagen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale der Public Relations erklären und die verschiedenen PR-Arten unterscheiden.',
              'erklären, was man unter dem standesethisch richtigen Verhalten versteht.',
              'die Funktionen und die Wirkungsweise der Public Relations beschreiben.',
              'die Kommunikationsinstrumente voneinander abgrenzen und die Grundprinzipien der PR beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: '4.1 Definition der Public Relations (PR)',
            content: 'Public Relations sind die bewusste, geplante und kontinuierliche Beziehungspflege zu allen relevanten internen und externen Ziel-/Personen-/Bezugsgruppen mit dem Ziel, Verständnis und Vertrauen zu schaffen und damit gleichzeitig Ziele der Unternehmenskommunikation zu erreichen. PR soll einen Konsens mit den Teilöffentlichkeiten im Umfeld der Organisation schaffen. Besondere Aufmerksamkeit wird den Bezugsgruppen (Stakeholdern) gewidmet.',
            highlight: 'Public Relations = Management von Kommunikationsprozessen von Organisationen mit ihren Anspruchs- resp. Dialoggruppen.'
          },
          {
            type: 'concept',
            title: '4.2 Arten der PR',
            content: 'Es gibt verschiedene PR-Arten: PR für Unternehmen (Beziehungsmanagement innerhalb und ausserhalb), PR für öffentliche Verwaltungen (Informations- und Verständigungsprozess), PR für gemeinnützige Organisationen (Aufmerksamkeit und Goodwill für NPOs), PR für politische Organisationen (Meinungsbildung) und PR als Dienstleistung (externe PR-Spezialisten, PR-Agenturen). PR sind grundsätzlich Chefsache, aber PR-Spezialisten beraten und setzen Strategien um.',
            highlight: 'PR sind mehr als Informationsvermittlung \u2013 sie sind Beziehungsmanagement innerhalb und ausserhalb des Unternehmens.'
          },
          {
            type: 'concept',
            title: '4.3 Ethik in den PR',
            content: 'Für die Mitglieder von pr suisse sind der Kodex von Athen und der Kodex von Lissabon bindend. BPRA-Agenturen haben sich auf die Stockholm Charta der ICCO verpflichtet. Die drei Kodizes definieren standesethisch richtiges Verhalten: Achtung der Menschenrechte, keine Irreführung oder Täuschung, Respekt vor der Unabhängigkeit der Medien, keine Erfolgsgarantien, keine Einnahme von Rabatten oder Provisionen, Offenlegung von Interessenbindungen, Fairness gegenüber allen Bezugsgruppen.',
            highlight: 'Ethisches Verhalten: Keine Irreführung, keine Täuschung, Respekt vor Medienunabhängigkeit, Fairness.'
          },
          {
            type: 'concept',
            title: '4.4 Funktionen und Wirkung der PR',
            content: 'Man unterscheidet interne PR (Pflege der Beziehungen zwischen Unternehmen und Mitarbeitenden) und externe PR (Pflege der Beziehungen zu externen Bezugsgruppen wie Presse, Nachbarn, Behörden, Kunden). Interne PR fördert Wissen, Dialog, Identität, Vertrauen, Zusammengehörigkeit und Motivation. Externe PR sichert Information, positives Image, Beziehungen, Vertrauen und Transparenz.',
            highlight: 'PR umfassen sämtliche Massnahmen zur Pflege der Beziehung zu internen Anspruchsgruppen sowie der definierten Öffentlichkeit.'
          },
          {
            type: 'table',
            title: 'Funktionen der Public Relations',
            headers: ['Funktion', 'Beschreibung'],
            rows: [
              ['Informationsfunktion', 'Vermittlung von Informationen nach innen und nach aussen (Öffentlichkeit).'],
              ['Kontaktfunktion', 'Aufbau und Aufrechterhaltung von Verbindungen zu allen relevanten Lebensbereichen.'],
              ['Führungsfunktion', 'Repräsentation geistiger und realer Machtfaktoren und Schaffung von Verständnis für Entscheidungen.'],
              ['Imagefunktion', 'Aufbau, Änderung und Pflege des Vorstellungsbilds von einem Meinungsgegenstand.'],
              ['Harmonisierungsfunktion', 'Beitrag zur Harmonisierung der wirtschaftlichen und gesellschaftlichen Verhältnisse (Human Relations).'],
              ['Absatzförderungsfunktion', 'Förderung des Absatzes durch Anerkennung in der Öffentlichkeit.'],
              ['Stabilisierungsfunktion', 'Erhöhung der Standfestigkeit des Unternehmens in kritischen Situationen.'],
              ['Kontinuitätsfunktion', 'Bewahrung eines einheitlichen Stils nach innen und nach aussen.']
            ]
          },
          {
            type: 'concept',
            title: '4.6-4.7 PR-Ziele und PR-Massnahmen',
            content: 'PR-Ziele tragen zum Erreichen von unternehmerischen Zielen bei und werden in kognitiv-orientierte (Wissen, Bekanntheit), affektiv-orientierte (Image, Vertrauen, Glaubwürdigkeit) und konativ-orientierte Ziele (Verhalten) unterteilt. PR-Massnahmen werden in interne und externe unterschieden und können mündlich (persönliche Gespräche, Veranstaltungen), schriftlich (offline: Broschüren, Berichte; online: Intranet, E-Mail, Blogs), oder akustisch/visuell (CD-Anwendungen, Fotos, Imagefilme) umgesetzt werden.',
            highlight: 'PR-Ziele: kognitiv (Wissen), affektiv (Image/Vertrauen), konativ (Verhalten).'
          },
          {
            type: 'concept',
            title: '4.8-4.9 Abgrenzung und Organisation',
            content: 'Die Abgrenzung zwischen Mediawerbung, Produkt-PR und Unternehmens-PR erfolgt u. a. nach Zielsetzung, Kommunikationsform, Einsatzebene, Funktion, Zielpublikum, Zutritt zu Medien, Einfluss auf Veröffentlichung, Wirkung der Botschaft, Dauer und Interessenlage. Die PR-Abteilung ist als Stabsstelle auf Stufe Unternehmensleitung organisiert, um den direkten Zugang zur Führungsspitze sicherzustellen.',
            highlight: 'Die PR-Abteilung ist als Stabsstelle der Unternehmensleitung organisiert.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'PR = bewusste, geplante und kontinuierliche Beziehungspflege zu allen relevanten Zielgruppen.',
              'Grundsatz: Tue Gutes und sprich darüber.',
              'PR sind Chefsache \u2013 aber PR-Spezialisten beraten und setzen Strategien um.',
              'Ethik: Keine Irreführung, keine Täuschung, Respekt vor Medienunabhängigkeit.',
              'Interne PR vor externer PR \u2013 Mitarbeitende sollen nicht aus den Medien erfahren, was im Unternehmen passiert.',
              '8 PR-Funktionen: Information, Kontakt, Führung, Image, Harmonisierung, Absatzförderung, Stabilisierung, Kontinuität.',
              'PR-Zielgruppen werden auch als Anspruchs-, Bezugs-, Dialoggruppen oder Stakeholder bezeichnet.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Public Relations</strong> sind die bewusste, geplante und kontinuierliche Beziehungspflege zu allen relevanten internen und externen Zielgruppen mit dem Ziel, Verständnis und Vertrauen zu schaffen.',
              'Man unterscheidet grundsätzlich <strong>interne PR</strong> (Pflege der Beziehungen zwischen Unternehmen und Mitarbeitenden) und <strong>externe PR</strong> (Pflege der Beziehungen zwischen Unternehmen und externen Bezugsgruppen).',
              'Die <strong>PR-Zielgruppen, -Ziele und -Massnahmen</strong> werden ebenfalls in interne und externe aufgeteilt. Dabei gilt: Interne PR (Mitarbeitendenkommunikation) immer vor der externen PR.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Public Relations', def: 'Management von Kommunikationsprozessen einer Organisation mit ihren Anspruchs-/Dialoggruppen (Stakeholdern).' },
              { term: 'Interne PR', def: 'Pflege der Beziehungen zwischen Unternehmen und Mitarbeitenden durch kontinuierliche Information.' },
              { term: 'Externe PR', def: 'Pflege der Beziehungen zwischen Unternehmen und externen Bezugsgruppen (Presse, Behörden, Kunden).' },
              { term: 'Dialoggruppen / Stakeholder', def: 'Die Gruppen, mit denen das Unternehmen das Gespräch suchen und eine verbindliche Kommunikation aufbauen sollte.' },
              { term: 'Kodex von Athen', def: 'Ethischer Verhaltenskodex für PR-Fachleute (bindend für pr suisse-Mitglieder).' },
              { term: 'Imagefunktion', def: 'PR-Funktion zum Aufbau, zur Änderung und Pflege des Vorstellungsbilds eines Meinungsgegenstands.' },
              { term: 'Produkt-PR', def: 'Verbraucherorientierte Medienarbeit für Produkte, Marken oder Dienstleistungen (ergänzt klassische Werbung).' }
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 5: Public-Relations-Disziplinen (S. 56-69)
    // ============================================================
    {
      id: 'ch5', num: 'Kapitel 5 (Teil A)', title: 'Public-Relations-Disziplinen',
      exercises: [
        {
          id: 32, type: 'fill',
          q: 'PR-Disziplinen nennen',
          instruction: 'Ergänzen Sie die wichtigsten PR-Disziplinen.',
          template: 'Die PR-Disziplinen sind: Interne PR / {0}, {1} / Media Relations, {2}, {3}, Public Affairs / Lobbying, Standort-PR / {4}, {5}.',
          blanks: [
            ['Human Relations','Mitarbeitendenkommunikation'],
            ['Medienarbeit','Media Relations'],
            ['Produkte-PR'],
            ['Investor Relations'],
            ['Community Relations'],
            ['Krisen-PR']
          ],
          tips: ['Es gibt 7 PR-Disziplinen.','Media Relations ist die Hauptaufgabe der PR-Abteilung.','Investor Relations richtet sich an Aktionäre und Kapitalgeber.'],
          reveal: ['Interne PR / Human Relations / Mitarbeitendenkommunikation.','Medienarbeit / Media Relations.','Produkte-PR.','Investor Relations.','Public Affairs / Lobbying.','Standort-PR / Community Relations.','Krisen-PR.']
        },
        {
          id: 33, type: 'mc',
          q: 'Media Relations (MC)',
          instruction: 'Was ist die Hauptaufgabe der Media Relations?',
          options: ['Werbeanzeigen in Medien schalten','Die PR-Botschaft in den definierten Medien zu publizieren','Social-Media-Kanäle betreuen','Events für Journalisten organisieren'],
          answer: 1,
          tips: ['Media Relations = Medienarbeit.','Es geht um die Verbreitung von PR-Botschaften.','Ziel: positive oder objektive Berichterstattung.'],
          reveal: ['Die Hauptaufgabe ist die Publizierung der PR-Botschaft in den definierten Medien.','Ziel ist eine positive und/oder objektive Berichterstattung.','Events für Journalisten sind ein Mittel, nicht die Hauptaufgabe.']
        },
        {
          id: 34, type: 'tf',
          q: 'PR-Arbeit leichter machen',
          statements: [
            { s: 'Warten Sie mit Veröffentlichungen nie zu lange \u2013 die Öffentlichkeit sollte teilweise oder vollständig informiert sein.', c: true, feedback: 'Proaktive Kommunikation ist wichtig.' },
            { s: 'Öffentlichkeitsarbeit sollte nur in Krisenzeiten betrieben werden.', c: false, feedback: 'Kontinuierliche PR-Arbeit ist wichtig. In ruhigen Zeiten wird das Fundament gelegt.' },
            { s: 'PR sollte für Schleichwerbung oder Haus- und Hofmeldungen missbraucht werden.', c: false, feedback: 'PR darf nicht für Schleichwerbung missbraucht werden. PR-Leute sind für ihre Aufgaben freizuhalten.' },
            { s: 'Initiativen von Mitarbeitenden zur Verbesserung der Kommunikation sollten unterstützt werden.', c: true, feedback: 'Mitarbeitende sollten in die Kommunikation eingebunden und ihre Initiativen gefördert werden.' }
          ],
          tips: ['Kontinuierliche Öffentlichkeitsarbeit ist wichtig.','PR wirkt langfristig \u2013 Image kann nur langfristig gebaut werden.','PR-Leute sind keine Feuerwehrleute, sondern Krisenmanager.'],
          reveal: ['Aussage 1: Richtig \u2013 proaktive Kommunikation.','Aussage 2: Falsch \u2013 kontinuierliche PR ist essentiell.','Aussage 3: Falsch \u2013 PR darf nicht missbraucht werden.','Aussage 4: Richtig \u2013 Mitarbeitende einbinden.']
        },
        {
          id: 35, type: 'mc',
          q: 'Produkte-PR vs. Mediawerbung (MC)',
          instruction: 'Was ist ein Kennzeichen der Produkte-PR im Vergleich zur Mediawerbung?',
          options: ['Produkte-PR ist immer bezahlt','Produkte-PR nutzt die gleichen Instrumente wie Unternehmensbezogene PR, richtet sich aber an Marketing-Zielgruppen','Produkte-PR ersetzt die Mediawerbung vollständig','Produkte-PR richtet sich nur an interne Zielgruppen'],
          answer: 1,
          tips: ['Produkte-PR = verbraucherorientierte Medienarbeit.','Die Instrumente sind gleich wie bei der Unternehmens-PR.','Die Zielgruppen entsprechen denen der Marketing-Kommunikation.'],
          reveal: ['Produkte-PR ist verbraucherorientierte Medienarbeit für Produkte, Marken oder Dienstleistungen.','Sie arbeitet mit den gleichen Instrumenten wie die unternehmensbezogene PR.','Die Zielgruppen entsprechen aber den Marketing-Zielgruppen.']
        },
        {
          id: 36, type: 'text',
          q: 'PR mit Public Relations arbeiten',
          instruction: 'Wie können Sie als PR-Verantwortlicher sicherstellen, dass die PR-Arbeit nachhaltig und glaubwürdig ist?',
          questions: [
            { q: 'Nennen Sie mindestens drei Punkte.', keywords: ['kontinuierlich','langfristig','transparent','glaubwürdig','intern vor extern','proaktiv','ehrlich','dialog'], minKeywords: 2 }
          ],
          tips: ['PR wirkt langfristig.','Glaubwürdigkeit ist das höchste Gut.','Intern vor extern informieren.'],
          reveal: ['Kontinuierliche und proaktive Kommunikation \u2013 nicht nur in Krisenzeiten.','Transparenz und Ehrlichkeit in der Kommunikation.','Intern vor extern: Mitarbeitende immer zuerst informieren.','Dialog mit den Zielgruppen pflegen.','Langfristigen Imageaufbau betreiben.']
        },
        {
          id: 37, type: 'match',
          q: 'PR-Disziplinen zuordnen',
          instruction: 'Ordnen Sie die Beschreibungen den richtigen PR-Disziplinen zu.',
          pairs: [
            { l: 'Kommunikation mit Aktionären und Kapitalgebern', r: 'Investor Relations' },
            { l: 'Kontakt zu Behörden und Politikern', r: 'Public Affairs / Lobbying' },
            { l: 'Kommunikation bei Unglücken und negativen Ereignissen', r: 'Krisen-PR' },
            { l: 'Beziehungspflege mit Anwohnern und lokaler Gemeinschaft', r: 'Standort-PR / Community Relations' }
          ],
          options: ['Investor Relations','Public Affairs / Lobbying','Krisen-PR','Standort-PR / Community Relations'],
          tips: ['Investor Relations = Finanzmarkt.','Public Affairs = Politik und Behörden.','Krisen-PR = Umgang mit negativen Ereignissen.'],
          reveal: ['Investor Relations: Aktionäre und Kapitalgeber.','Public Affairs: Behörden und Politiker (Lobbying).','Krisen-PR: Unglücke, negative Ereignisse.','Standort-PR: lokale Gemeinschaft und Anwohner.']
        },
        {
          id: 38, type: 'tf',
          q: 'PR: Richtig oder Falsch (erweitert)',
          statements: [
            { s: 'Public Relations wirken kurzfristig und sind daher für kurzfristige Kampagnen geeignet.', c: false, feedback: 'PR wirken langfristig. Image kann nur langfristig gebaut werden.' },
            { s: 'PR-Experten sind keine Feuerwehrleute \u2013 Image kann nur langfristig gebaut und beurteilt werden.', c: true, feedback: 'PR ist ein langfristiges Instrument.' },
            { s: 'Die internen Zielgruppen werden immer vor den externen Zielgruppen informiert.', c: true, feedback: 'Grundsatz: Intern vor extern.' }
          ],
          tips: ['PR = langfristiges Instrument.','Image braucht Zeit zum Aufbau.','Intern vor extern ist ein zentraler PR-Grundsatz.'],
          reveal: ['Aussage 1: Falsch \u2013 PR wirken langfristig.','Aussage 2: Richtig \u2013 Image braucht Zeit.','Aussage 3: Richtig \u2013 Grundsatz intern vor extern.']
        }
      ],
      learningData: {
        title: 'Public-Relations-Disziplinen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die einzelnen PR-Disziplinen nennen und die Funktionsweise der jeweiligen PR-Massnahmen (Instrumente) erklären.',
              'die jeweiligen Zielgruppen definieren und Ziele formulieren.',
              'die Zusammenarbeit mit Medien (Media Relations) und deren Bedürfnisse erklären.',
              'die Inhalte einer Medienmappe erklären und begründen.'
            ]
          },
          {
            type: 'table',
            title: 'Übersicht der PR-Disziplinen',
            headers: ['PR-Disziplin', 'Kurzbeschreibung'],
            rows: [
              ['Interne PR / Human Relations', 'Gestaltet die Beziehungen innerhalb der Organisation, pflegt den Dialog mit Mitarbeitenden.'],
              ['Medienarbeit / Media Relations', 'Aufbau und Kontakt zu Redaktionen, Medienschaffenden bei allen Mediengattungen.'],
              ['Investor Relations', 'Kommunikation mit Gruppen, die ein finanzielles Interesse am Unternehmen haben (Anleger, Analysten, Banken).'],
              ['Public Affairs / Lobbying', 'Kommunikation mit politischen Institutionen und Personen im Umfeld des Unternehmens.'],
              ['Community Relations', 'Standort-PR, richtet sich an die Standortbevölkerung und das nachbarschaftliche Umfeld.'],
              ['Krisen-PR', 'Konzeption von PR-Strategien und -Massnahmen in kritischen Situationen zur Wahrung der Glaubwürdigkeit.'],
              ['Produkt-PR', 'Medienarbeit für ein Produkt oder eine Dienstleistung (ergänzt klassische Werbe- und VKF-Massnahmen).']
            ]
          },
          {
            type: 'concept',
            title: '5.1.1 Interne PR / Human Relations',
            content: 'Die interne Kommunikation umfasst die Botschaftsübermittlung zwischen den Mitarbeitenden auf unterschiedlichen hierarchischen Ebenen. Es gibt zwei Formen: die interne Unternehmenskommunikation (Transparenz, Glaubwürdigkeit) und die externe Kommunikation (wirtschaftliche Beziehungen und Öffentlichkeitsarbeit). Zentraler Grundsatz: intern vor extern. Funktionen: Identifizierung mit dem Unternehmen, Dialog, Verständnis für Entscheidungen, Motivation. Instrumente: Bulletin Boards, Team-Treffen, Betriebsversammlung, Newsletter, E-Mail, Blogs, Intranet.',
            highlight: 'Grundsatz der Unternehmenskommunikation: Intern vor extern \u2013 interne Zielgruppen immer zuerst informieren.'
          },
          {
            type: 'concept',
            title: '5.1.2 Medienarbeit / Media Relations',
            content: 'Die Medienarbeit umfasst die Bereitstellung von Informationen für die Medien, die Nutzung von Medien für die gezielte Platzierung eigener Botschaften sowie die Herstellung und Verbreitung von Medienerzeugnissen. Zwei Zielgruppen: Empfänger von Medienbotschaften und Medienschaffende. Medienarbeit ist eine Querschnittsaufgabe für sämtliche Aufgabenstellungen der PR. Wichtig: Klare Trennung zwischen redaktionellem Text und Veröffentlichungen zu werblichen Zwecken (keine Schleichwerbung).',
            highlight: 'Medienarbeit ist die Querschnittsaufgabe für sämtliche Aufgabenstellungen der Public Relations.'
          },
          {
            type: 'concept',
            title: '5.1.3-5.1.4 Investor Relations und Public Affairs',
            content: 'Investor Relations (IR) umfassen die professionelle Kommunikation mit allen Finanz- und Kapitalmarktrelevanten Zielgruppen (Investoren, Analysten, Medien). Standards: Transparenz, Ehrlichkeit, Verständlichkeit, Glaubwürdigkeit, Kontinuität. Instrumente: Jahresbericht, Generalversammlung, Medienkonferenzen, Aktionärsbriefe, Lobbying. Public Affairs (PA) gestalten die betrieblichen Beziehungen zur sozialen und politischen Umwelt. Lobbying bezeichnet die Beziehungspflege zu Schlüsselpersonen in Politik und Wirtschaft.',
            highlight: 'IR: Transparenz, Ehrlichkeit, Verständlichkeit, Glaubwürdigkeit, Kontinuität.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Es gibt 7 PR-Disziplinen: Interne PR, Media Relations, Investor Relations, Public Affairs, Community Relations, Krisen-PR, Produkt-PR.',
              'Media Relations ist die zentrale Disziplin \u2013 eine Querschnittsaufgabe für alle PR-Bereiche.',
              'Grundsatz: Intern vor extern \u2013 interne Zielgruppen immer zuerst informieren.',
              'PR wirken langfristig \u2013 Image kann nur langfristig gebildet und beurteilt werden.',
              'Schleichwerbung ist unethisch: Klare Trennung zwischen redaktionellem Text und Werbung.',
              'Unterbinden Sie keine Initiativen von Mitarbeitenden zur Verbesserung der Kommunikation.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die Public Relations arbeiten mit unterschiedlichen Disziplinen. Je nach Zielsetzung und Strategie werden folgende <strong>PR-Disziplinen</strong> unterschieden: Interne PR / Human Relations, Medienarbeit / Media Relations, Produkte-PR, Investor Relations, Public Affairs / Lobbying, Standort-PR / Community Relations, Krisen-PR.',
              'Eine der Hauptaufgaben von PR-Schaffenden sind die <strong>Media Relations</strong>. Denn alle PR-Disziplinen brauchen Medienschaffende, um die PR-Botschaft in den definierten Medien zu publizieren.',
              'Für die Publikation von Informationen gilt der zentrale Grundsatz: <strong>Intern vor extern</strong>. Die internen Zielgruppen werden immer vor den externen Zielgruppen informiert.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Media Relations', def: 'Aufbau und Pflege des Kontakts zu Redaktionen und Medienschaffenden \u2013 Querschnittsaufgabe der PR.' },
              { term: 'Investor Relations', def: 'Professionelle Kommunikation mit Finanz- und Kapitalmarktrelevanten Zielgruppen.' },
              { term: 'Public Affairs', def: 'Gestaltung der Beziehungen zur sozialen und politischen Umwelt des Unternehmens.' },
              { term: 'Lobbying', def: 'Beziehungspflege zu Schlüsselpersonen in Politik und Wirtschaft zur Interessenvertretung.' },
              { term: 'Community Relations', def: 'Standort-PR \u2013 richtet sich an die Standortbevölkerung und das nachbarschaftliche Umfeld.' },
              { term: 'Krisen-PR', def: 'Konzeption von PR-Strategien und -Massnahmen in kritischen Situationen zur Wahrung der Glaubwürdigkeit.' },
              { term: 'Produkt-PR', def: 'Verbraucherorientierte Medienarbeit für Produkte, Marken oder Dienstleistungen.' },
              { term: 'Medienmitteilung', def: 'Zentrales Instrument der Medienarbeit zur Kommunikation von Neuigkeiten an die Presse.' }
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 6: Markenpflege und -führung (S. 70-89)
    // ============================================================
    {
      id: 'ch6', num: 'Kapitel 6 (Teil A)', title: 'Markenpflege und -führung',
      exercises: [
        {
          id: 39, type: 'mc',
          q: 'Marke und Gewinn (MC)',
          instruction: 'Rep. 21 (S. 89): Stimmt die Aussage: \u00abJe bekannter die Marke, desto höher der Gewinn\u00bb?',
          options: ['Ja, das stimmt immer','Nein, die Aussage stimmt so sicherlich nicht \u2013 es gibt eine Korrelation, aber keine direkte Kausalität','Ja, Bekanntheit führt automatisch zu höherem Gewinn','Nein, Bekanntheit hat keinen Einfluss auf den Gewinn'],
          answer: 1,
          tips: ['Bekanntheit und Gewinn korrelieren, aber nicht zwingend kausal.','Beispiel Swissair: sehr bekannte Marke, ging aber in Konkurs.','Finanzstarke Unternehmen können mehr in ihre Marken investieren.'],
          reveal: ['Die Aussage stimmt so sicherlich nicht.','Starke und bekannte Marken korrelieren positiv mit dem Gewinn.','Allerdings kann die Korrelation auch dadurch zustande kommen, dass finanzstarke Unternehmen mehr in ihre Marken investieren.','Beispiel: Swissair war eine sehr bekannte Marke, ging aber in Konkurs.']
        },
        {
          id: 40, type: 'text',
          q: 'Nachteil einer Dachmarke',
          instruction: 'Rep. 22 (S. 89): Was ist der Nachteil einer Dachmarke wie z.B. Swisscom?',
          questions: [
            { q: 'Erklären Sie den Nachteil.', keywords: ['isoliert','differenzier','assoziieren','problem','dominoeffekt','marke','ganzes'], minKeywords: 2 }
          ],
          tips: ['Eine Dachmarke fasst alle Produkte unter einer Marke zusammen.','Was passiert, wenn ein Teilbereich ein Problem hat?','Denken Sie an den Dominoeffekt.'],
          reveal: ['Einzelne Angebote lassen sich nicht isoliert differenzierend positionieren.','Die Kunden assoziieren die neuen Dienstleistungen mit dem bestehenden Swisscom-Image.','Bei einem Problem in einem Teilbereich wird die Marke als Ganzes tangiert (Dominoeffekt).']
        },
        {
          id: 41, type: 'text',
          q: 'Markenwert berechnen',
          instruction: 'Rep. 23 (S. 89): Worin besteht die Schwierigkeit bei der Berechnung des Markenwerts des World Wide Fund for Nature (WWF)?',
          questions: [
            { q: 'Erklären Sie die Schwierigkeit.', keywords: ['gewinnorientiert','gewinne','künftig','modell','nicht','abgestellt'], minKeywords: 2 }
          ],
          tips: ['Der WWF ist eine Non-Profit-Organisation.','Die meisten Markenwert-Modelle basieren auf künftigen Gewinnen.','Wie berechnet man den Markenwert ohne Gewinnziel?'],
          reveal: ['Der WWF ist nicht gewinnorientiert.','Bei den Modellen zur Markenwertberechnung wird aber auf künftige Gewinne abgestellt.','Daher ist die Berechnung des Markenwerts für Non-Profit-Organisationen schwierig.']
        },
        {
          id: 42, type: 'text',
          q: 'Markenbewertung durch verschiedene Experten',
          instruction: 'Rep. 24 (S. 89): Warum kommen zwei Fachleute bei der Bewertung der Marke Swatch zu unterschiedlichen Ergebnissen?',
          questions: [
            { q: 'Formulieren Sie zwei Begründungen.', keywords: ['methoden','berechnung','annahmen','gewinne','divergieren','indikatoren','variablen','einfluss'], minKeywords: 2 }
          ],
          tips: ['Es gibt verschiedene Methoden der Berechnung.','Annahmen über künftige Gewinne können divergieren.','Markenwerte können nur anhand von Indikatoren abgeschätzt werden.'],
          reveal: ['Es gibt verschiedene Methoden der Berechnung.','Die Annahmen über künftige Gewinne können divergieren.','Man kann nie genau abschätzen, welchen Einfluss die Marke auf den Kaufentscheid hat.','Man kann die Markenstärke nur anhand von Indikatoren abschätzen.']
        },
        {
          id: 43, type: 'text',
          q: 'Markendehnungsstrategie',
          instruction: 'Rep. 25 (S. 89): Welches sind die Risiken und Chancen einer Markendehnungsstrategie im Vergleich zu \u00abEin Produkt / Eine Marke\u00bb?',
          questions: [
            { q: 'Nennen Sie Risiken und Chancen.', keywords: ['risiko','kernzielgruppe','unerwünscht','chance','bekanntheit','synergien','verwässerung','premium'], minKeywords: 2 }
          ],
          tips: ['Markendehnung nutzt eine bestehende Marke für neue Produkte.','Risiko: Die Kernzielgruppe fühlt sich nicht mehr angesprochen.','Chance: Synergien in der Kommunikation.'],
          reveal: ['Risiko: Die Kernzielgruppe betrachtet die zusätzliche Ansprache neuer Zielgruppen als unerwünscht.','Beispiel Gap: Die Premiummarke wurde durch Gap Warehouse verwässert.','Chance: Synergien in Bekanntheit und Kommunikation.']
        },
        {
          id: 44, type: 'match',
          q: 'Markenstrategien zuordnen',
          instruction: 'Ordnen Sie die Markenstrategien der richtigen Beschreibung zu.',
          pairs: [
            { l: 'Line Extension', r: 'Neue Variante unter bestehender Marke in gleicher Kategorie' },
            { l: 'Multibrands', r: 'Mehrere Marken in gleicher Produktkategorie' },
            { l: 'Brand Extension', r: 'Bestehende Marke in neuer Produktkategorie' },
            { l: 'Markeneinführung', r: 'Völlig neue Marke für neues Produkt' }
          ],
          options: ['Neue Variante unter bestehender Marke in gleicher Kategorie','Mehrere Marken in gleicher Produktkategorie','Bestehende Marke in neuer Produktkategorie','Völlig neue Marke für neues Produkt'],
          tips: ['Line Extension = gleiche Kategorie, gleiche Marke.','Brand Extension = neue Kategorie, gleiche Marke.','Multibrands = gleiche Kategorie, verschiedene Marken.'],
          reveal: ['Line Extension (Linienerweiterung): z.B. neuer Geschmack einer bestehenden Marke.','Multibrands (Mehrmarkenstrategie): z.B. P&G mit verschiedenen Waschmittelmarken.','Brand Extension (Markenerweiterung): z.B. Bic von Kugelschreibern zu Feuerzeugen.','Markeneinführung: komplett neue Marke für ein neues Produkt.']
        },
        {
          id: 45, type: 'match',
          q: 'Markenbegriffe',
          instruction: 'Ordnen Sie die Markenbegriffe den richtigen Definitionen zu.',
          pairs: [
            { l: 'Der Name, den ein Hersteller seinem Produkt gibt', r: 'Herstellermarke' },
            { l: 'Der Name, unter dem ein Händler Produkte vertreibt', r: 'Handelsmarke' },
            { l: 'USP des Unternehmens', r: 'Unique Selling Proposition' },
            { l: 'UCP der Kommunikation', r: 'Unique Communication Proposition' }
          ],
          options: ['Herstellermarke','Handelsmarke','Unique Selling Proposition','Unique Communication Proposition'],
          tips: ['Herstellermarke = von Produzent benannt.','Handelsmarke = vom Händler benannt (z.B. Migros Budget).','USP = einzigartiges Verkaufsversprechen.'],
          reveal: ['Herstellermarke: Vom Hersteller benannt und geführt.','Handelsmarke: Vom Händler unter eigenem Namen vertrieben.','USP: Strategische Erfolgsposition \u2013 einmalige Leistung.','UCP: Unique Communication Proposition \u2013 einzigartige Kommunikationsaussage.']
        },
        {
          id: 46, type: 'tf',
          q: 'Richtig oder Falsch: Markenpflege',
          statements: [
            { s: 'Der Markenwert kann aus finanzwirtschaftlicher oder aus Marketing-Perspektive berechnet werden.', c: true, feedback: 'Finanzwirtschaftlich: künftig generierbare Erträge. Marketing: Wirkung auf Konsumenten.' },
            { s: 'Bei einer Dachmarke können einzelne Produkte isoliert positioniert werden.', c: false, feedback: 'Bei einer Dachmarke stehen alle Produkte unter einem Markendach \u2013 isolierte Positionierung ist schwierig.' },
            { s: 'Positionierung bedeutet, die Wahrnehmung der Kunden in Bezug auf Produkteigenschaften im Vergleich zur Konkurrenz zu steuern.', c: true, feedback: 'Positionierung = Steuerung der Wahrnehmung relativ zur Konkurrenz.' },
            { s: 'Eine starke Marke stellt keinen echten Vermögenswert für das Unternehmen dar.', c: false, feedback: 'Eine gute Marke stellt einen echten Vermögenswert dar und ermöglicht Differenzierung.' }
          ],
          tips: ['Markenwert = Vermögenswert.','Dachmarke = alle Produkte unter einer Marke.','Positionierung = Wahrnehmung im Vergleich zur Konkurrenz.'],
          reveal: ['Aussage 1: Richtig \u2013 zwei Perspektiven der Markenwertberechnung.','Aussage 2: Falsch \u2013 Dachmarke = keine isolierte Positionierung.','Aussage 3: Richtig \u2013 Definition der Positionierung.','Aussage 4: Falsch \u2013 Marke = Vermögenswert.']
        }
      ],
      learningData: {
        title: 'Markenpflege und -führung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Markenbegriffe erläutern.',
              'die Funktionen einer Marke beschreiben.',
              'Methoden zur Berechnung des Markenwerts nennen.',
              'erläutern, wie Markenentscheidungen getroffen werden, und darauf aufbauend eine Markenstrategie definieren.',
              'eine Positionierung als Basis einer starken Markenstrategie vornehmen.'
            ]
          },
          {
            type: 'concept',
            title: '6.1 Markenbegriffe',
            content: 'Eine Marke im rechtlichen Sinn ist ein geschütztes Kennzeichen, mit dem ein Unternehmen seine Waren oder Dienstleistungen von solchen anderer Unternehmen unterscheidet. Aus Sicht des Marketings ist eine Marke ein Vorstellungsbild in den Köpfen der Konsumenten \u2013 ein individuelles, differenzierendes Versprechen, das Produkte, Dienstleistungen oder Unternehmen an ihre Kunden binden soll.',
            highlight: 'Eine Marke ist ein Vorstellungsbild in den Köpfen der Konsumenten und dient der Identifikation, Differenzierung und Vertrauensbildung.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe Marke',
            terms: [
              { term: 'Marke (Brand)', def: 'Ein Name, Begriff, Zeichen, Symbol oder eine Kombination daraus zur Kennzeichnung und Differenzierung von Produkten/Dienstleistungen.' },
              { term: 'Markenname', def: 'Der verbal wiedergebbare, artikulierbare Teil der Marke (z. B. Ovomaltine, Rivella, Ferrari).' },
              { term: 'Markenzeichen', def: 'Der erkennbare, aber nicht verbal wiedergebbare Teil der Marke (z. B. ein Symbol, eine Farbgebung, eine Schrift).' },
              { term: 'Warenzeichen', def: 'Eine rechtlich geschützte Marke, die dem Anbieter die ausschliessliche Nutzung des Namens oder Zeichens sichert.' },
              { term: 'Urheberrecht (Copyright)', def: 'Der Markeninhaber hat durch Eintragung beim Institut für Geistiges Eigentum das ausschliessliche Nutzungsrecht für einen Markennamen und ein Markenzeichen.' }
            ]
          },
          {
            type: 'concept',
            title: '6.2 Funktion der Marke',
            content: 'Marken schaffen einen echten Unternehmenswert durch Überlebensfähigkeit, Differenzierung und Kapitalisierbarkeit. Für den Kunden erfüllt die Marke wichtige Funktionen: Identifikation (Wiedererkennung), Orientierungshilfe (präferenzprägende Funktion bei der Auswahl), Vertrauen (durch Bekanntheit und Ruf), Qualitätsversprechen (Garantie für Sicherheit und Kompetenz) sowie Image- und Prestigefunktion.',
            highlight: 'Die Marke sichert die Überlebensfähigkeit von Unternehmen und dient dem Kunden als Identifikation, Orientierungshilfe, Qualitätsversprechen und Vertrauensgeber.'
          },
          {
            type: 'concept',
            title: '6.3 Wert einer Marke',
            content: 'Der Markenwert kann aus zwei Perspektiven betrachtet werden: Die finanzwirtschaftliche Perspektive berechnet den Markenwert als Summe der zukünftig generierbaren Erträge (z. B. Interbrand, Brand Finance). Die Marketingperspektive (verhaltenswissenschaftliche Perspektive) bezieht sich auf den Erfolg der Marke bei Konsumenten (z. B. BrandAsset Valuator mit den Faktoren Differenzierung, Relevanz, Wertschätzung und Vertrautheit).',
            highlight: 'Der Markenwert wird finanzwirtschaftlich (zukünftige Erträge) oder aus Marketingperspektive (Wahrnehmung bei Konsumenten) berechnet.'
          },
          {
            type: 'concept',
            title: '6.4 Markenstrategien',
            content: 'Grundlegende Markenstrategien berücksichtigen drei Kriterien: Institutionelle Stellung des Markenträgers (Herstellermarke, Dienstleistungsmarke, Handelsmarke), Geographische Reichweite (regional, national, international) und Zahl der markierten Güter (Einzelmarke, Dachmarke, Familienmarke). Bei der Markendehnung gibt es drei Markenentwicklungsstrategien: Linienerweiterung (Line Extension), Markenerweiterung (Brand Extension) und Mehrmarkenstrategie (Multibrands). Sollte eine Markendehnung keine Option sein, kommt die Markeneinführung (New Brand) in Frage.',
            highlight: 'Grundlegende Markenstrategien: Einzelmarke, Dachmarke, Familienmarke. Markendehnungsstrategien: Linienerweiterung, Markenerweiterung, Mehrmarkenstrategie.'
          },
          {
            type: 'table',
            title: 'Vor- und Nachteile der Markenstrategien',
            headers: ['Strategieansatz', 'Vorteile', 'Nachteile'],
            rows: [
              ['Einzelmarke', 'Kann sehr genau im Zielsegment positioniert werden. Mehrere Marken im selben Markt möglich.', 'Hoher Aufwand. Jede Marke muss das gesamte Markenbudget allein tragen.'],
              ['Dachmarke', 'Vorteile bei Einführung neuer Produkte. Geringeres Risiko, da Konsumenten die Marke kennen. Kostenvorteile.', 'Unklare Profilierung einzelner Produkte. Dominoeffekt bei Krisen (Imagetransfer).'],
              ['Familienmarke', 'Profitiert von Profilierungsvorteilen der Einzelmarke und Kostenvorteilen der Dachmarke.', 'Nachteile der Einzel- und Dachmarkenstrategie müssen nicht explizit in Kauf genommen werden, Gefahr besteht aber trotzdem.']
            ]
          },
          {
            type: 'concept',
            title: '6.5 Strategische Positionierung',
            content: 'Die Positionierung ist ein zentraler Bestandteil und Basis einer Marken- und Kommunikationsstrategie. Es geht darum zu bestimmen, wie das Unternehmen bzw. die Marke aufgrund der aktuellen Marktstellung von den Hauptzielgruppen in Bezug auf die wichtigsten Mitbewerber mittel- bis langfristig gesehen werden möchte. Die Entwicklung einer strategischen Positionierung erfolgt in 4 Schritten: (1) Analyse des Wahrnehmungsraums aus Kundensicht, (2) Einbeziehung von Konkurrenzunternehmen, (3) Festlegung der strategischen Positionierung (Soll-Positionierung), (4) Gegenüberstellung der Ist- und Soll-Position.',
            highlight: 'Die strategische Positionierung bestimmt, wie ein Unternehmen von den Zielgruppen im Vergleich zur Konkurrenz wahrgenommen werden soll. Sie ist Ausgangspunkt jeder Markenstrategie.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe Positionierung',
            terms: [
              { term: 'USP (Unique Selling Proposition)', def: 'Ein einzigartiger, leistungsspezifischer Produktvorteil des Produkt- und Preis-Mix (z. B. Innovation, Langlebigkeit, Design, Technologie, Vertrieb).' },
              { term: 'UCP (Unique Communication Proposition)', def: 'Ein einzigartiges Kommunikationsargument, das die fehlende Leistungsdifferenz durch eine kommunikative Differenzierung kompensiert.' },
              { term: 'Positionierungsraum', def: 'Der Entscheidungs- und Wahrnehmungsraum, in dem Konsumenten Produkte nach Nutzenversprechen bewerten. Ist ein abstraktes Gebilde in den Köpfen der Abnehmer.' },
              { term: 'Positioning Statement', def: 'Ein schlagwortartiger Kurzsatz, der die Schlüsselelemente zusammenfasst, die eine Marke ausmachen und sie von Konkurrenzprodukten unterscheiden.' }
            ]
          },
          {
            type: 'merke',
            title: 'Merke: Verwässerungsgefahr',
            content: 'Bei Linien- und Markenerweiterung besteht das Risiko der Verwässerung einer Marke. Beim Versuch, eine Marke an veränderte Wünsche und Bedürfnisse anzupassen, kann das bisher aufgebaute Image eine schwer zu überbrückende Barriere darstellen. Um- und Neupositionierungen von Marken erfordern Know-how und viel Fingerspitzengefühl. Bei Linienerweiterungen sowie bei Mehrmarkenstrategien besteht zudem die Gefahr der Kannibalisierung der Kernmarke.'
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Markenentscheidungen sind Orientierungspunkt für alle Massnahmen der Kommunikationspolitik, denn eine gute <strong>Marke</strong> stellt einen echten Vermögenswert für das Unternehmen dar, indem sie die Differenzierung von der Konkurrenz ermöglicht.',
              'Der <strong>Markenwert</strong> kann aus finanzwirtschaftlicher Perspektive (Summe zukünftig generierbarer Erträge) oder aus Marketing-Perspektive (Wirkung der Marke auf Konsumenten) berechnet werden.',
              '<strong>Grundlegende Markenstrategien</strong> (bei Einführung neuer Marken) berücksichtigen 3 Kriterien: Eigentümer der Marke (Hersteller-/Handelsmarke), Geografische Reichweite (regional, national, international), Zahl der markierten Güter (Einzelmarken, Dachmarken, Familienmarkenstrategien).',
              'Bei der Markendehnung gibt es 3 <strong>Markenentwicklungsstrategien</strong>: Linienerweiterung, Markenerweiterung, Mehrmarkenstrategie \u2013 oder die Möglichkeit einer Markeneinführung.',
              'Die <strong>strategische Positionierung</strong> ist Ausgangspunkt jeder Markenstrategie. Dabei steht die Wahrnehmung der Kunden im Vergleich zur Konkurrenz im Vordergrund, woraus eine <strong>USP</strong> oder <strong>UCP</strong> abgeleitet wird.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 7: Relationship Marketing (S. 91-103)
    // ============================================================
    {
      id: 'ch7', num: 'Kapitel 7 (Teil A)', title: 'Kundenbeziehungsmanagement I: Relationship Marketing',
      exercises: [
        {
          id: 47, type: 'match',
          q: 'Kundenlebenszyklus',
          instruction: 'Ordnen Sie die Phasen des Kundenlebenszyklus in die richtige Reihenfolge.',
          pairs: [
            { l: '1. Phase', r: 'Kundenakquisition (Recruitment)' },
            { l: '2. Phase', r: 'Kundenbindung (Retention)' },
            { l: '3. Phase', r: 'Kundenrückgewinnung (Recovery)' }
          ],
          options: ['Kundenakquisition (Recruitment)','Kundenbindung (Retention)','Kundenrückgewinnung (Recovery)'],
          tips: ['Zuerst muss ein Kunde gewonnen werden.','Dann wird er gebunden.','Wenn er verloren geht, wird versucht ihn zurückzugewinnen.'],
          reveal: ['1. Kundenakquisition (Recruitment): Neukunden gewinnen.','2. Kundenbindung (Retention): Bestehende Kunden binden.','3. Kundenrückgewinnung (Recovery): Verlorene Kunden zurückgewinnen.']
        },
        {
          id: 48, type: 'text',
          q: 'CRM-Definition',
          instruction: 'Erklären Sie, was Customer Relationship Management (CRM) ist.',
          questions: [
            { q: 'Definieren Sie CRM.', keywords: ['ganzheitlich','ansatz','kundenbezogen','prozesse','marketing','vertrieb','kundendienst','datenbank'], minKeywords: 3 }
          ],
          tips: ['CRM ist ein ganzheitlicher Ansatz der Unternehmensführung.','Es integriert alle kundenbezogenen Prozesse.','CRM-Datenbanken ermöglichen differenzierte Kundenansprache.'],
          reveal: ['CRM ist ein ganzheitlicher Ansatz der Unternehmensführung.','Es integriert alle kundenbezogenen Prozesse in Marketing, Vertrieb, Kundendienst sowie Forschung und Entwicklung.','CRM-Datenbanken erfassen Daten für eine differenzierte und individualisierte Kundenansprache.']
        },
        {
          id: 49, type: 'match',
          q: 'Up-Selling vs. Cross-Selling',
          instruction: 'Rep. 29: Ordnen Sie die Beschreibungen dem richtigen Konzept zu.',
          pairs: [
            { l: 'Dem Kunden wird eine höherwertige Marktleistung verkauft', r: 'Up-Selling' },
            { l: 'Dem Kunden wird ein Zusatzprodukt angeboten', r: 'Cross-Selling' }
          ],
          options: ['Up-Selling','Cross-Selling'],
          tips: ['Up = nach oben = höherwertig.','Cross = quer = ergänzend/zusätzlich.','Beispiel Up-Selling: grösseres Hotelzimmer. Cross-Selling: Reiseversicherung dazu.'],
          reveal: ['Up-Selling: Dem Kunden wird eine höherwertige Marktleistung verkauft.','Cross-Selling: Dem Kunden werden ergänzende Leistungen/Zusatzprodukte angeboten.']
        },
        {
          id: 50, type: 'mc',
          q: 'Kundenbindungsarten (MC)',
          instruction: 'Rep. 28: Welche der folgenden Aussagen beschreibt die Kundenverbundenheit korrekt?',
          options: ['Kundengebundenheit durch emotionale Verbindung','Kundenverbundenheit durch vertragliche Bindung','Kundenverbundenheit durch emotionale Verbindung, Zufriedenheit und Loyalität','Kundenverbundenheit durch technologische Abhängigkeit'],
          answer: 2,
          tips: ['Verbundenheit = emotional.','Gebundenheit = vertraglich/technologisch.','Verbundene Kunden sind zufrieden und loyal.'],
          reveal: ['Kundenverbundenheit entsteht durch emotionale Verbindung, Zufriedenheit und Loyalität.','Kundengebundenheit entsteht durch vertragliche oder technologische Bindung (z.B. Nespresso-Kapseln).','Verbundene Kunden sind wertvoller, da sie freiwillig bleiben.']
        },
        {
          id: 51, type: 'text',
          q: 'Relationship Marketing Definition',
          instruction: 'Was ist Relationship Marketing und worauf konzentriert es sich?',
          questions: [
            { q: 'Erklären Sie Relationship Marketing.', keywords: ['langfristig','kundenbeziehung','bestehend','bindung','customer journey','marktleistung','individualisier'], minKeywords: 3 }
          ],
          tips: ['Relationship Marketing = Beziehungsmarketing.','Fokus auf bestehende Kunden, nicht Neukunden.','Kundenzufriedenheit ist Voraussetzung für Kundenbindung.'],
          reveal: ['Relationship Marketing konzentriert sich auf die Etablierung langfristiger Kundenbeziehungen mit bestehenden Kunden.','Kundenzufriedenheit ist Voraussetzung für langfristige Kundenbindung.','Ziel: Marktleistungen zu individualisieren.']
        },
        {
          id: 52, type: 'match',
          q: 'Produktarten einer Stadtrundfahrt',
          instruction: 'Rep. 27 (S. 103): Ordnen Sie die Beispiele der richtigen Produktart zu.',
          pairs: [
            { l: 'Beförderung der Touristen auf einer bestimmten Route', r: 'Kernprodukt' },
            { l: 'Führung und Erklärung durch eine kompetente Führerin in einer verständlichen Sprache', r: 'Formales Produkt' },
            { l: 'Persönliche und empathische Betreuung, allenfalls servierte Erfrischungen oder abgegebene Souvenirs', r: 'Erweitertes Produkt' }
          ],
          options: ['Kernprodukt','Formales Produkt','Erweitertes Produkt'],
          tips: ['Kernprodukt = die grundlegende Leistung.','Formales Produkt = die Ausgestaltung der Leistung.','Erweitertes Produkt = zusätzliche Services und Extras.'],
          reveal: ['Kernprodukt: Beförderung der Touristen auf einer bestimmten Route.','Formales Produkt: Führung und Erklärung durch kompetente Führerin.','Erweitertes Produkt: Persönliche Betreuung, Erfrischungen, Souvenirs.']
        },
        {
          id: 53, type: 'match',
          q: 'CRM-Software Funktionen',
          instruction: 'Rep. 30: Ordnen Sie die CRM-Software-Funktionen den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Detaillierte Adress-/Kontakt- und Kundeninformation', r: 'Kontaktdaten' },
            { l: 'Verwaltung von Kontakten, Aufgaben und Terminen', r: 'Kontaktmanagement' },
            { l: 'Integrierte E-Mail-, Newsletter- und Serienbrieffunktion', r: 'Kommunikation' },
            { l: 'Einfaches Erstellen von Berichten, Statistiken und Auswertungen', r: 'Reporting' }
          ],
          options: ['Kontaktdaten','Kontaktmanagement','Kommunikation','Reporting'],
          tips: ['Kontaktdaten = die gespeicherten Informationen.','Kontaktmanagement = die Verwaltung der Kontakte.','Kommunikation = E-Mail, Newsletter etc.'],
          reveal: ['Kontaktdaten: Adress-, Kontakt- und Kundeninformation.','Kontaktmanagement: Verwaltung von Kontakten, Aufgaben und Terminen.','Kommunikation: E-Mail-, Newsletter- und Serienbrieffunktion.','Reporting: Berichte, Statistiken und Auswertungen.']
        },
        {
          id: 54, type: 'tf',
          q: 'Richtig oder Falsch: Relationship Marketing',
          statements: [
            { s: 'Kundenzufriedenheit entsteht nur durch die Kernleistung.', c: false, feedback: 'Kundenzufriedenheit entsteht durch die Kern-, formale und erweiterte Leistung.' },
            { s: 'Cross-Selling bedeutet, dem Kunden höherwertige Produkte zu verkaufen.', c: false, feedback: 'Cross-Selling = ergänzende Produkte. Up-Selling = höherwertige Produkte.' },
            { s: 'Der Kundenlebenszyklus besteht aus drei Phasen: Akquisition, Bindung, Rückgewinnung.', c: true, feedback: 'Recruitment, Retention, Recovery.' },
            { s: 'CRM integriert alle kundenbezogenen Prozesse.', c: true, feedback: 'CRM ist ein ganzheitlicher Ansatz für alle kundenbezogenen Prozesse.' }
          ],
          tips: ['Kundenzufriedenheit = Kern + formale + erweiterte Leistung.','Cross = quer = ergänzend, Up = nach oben = höherwertig.','Kundenlebenszyklus: 3 Phasen.'],
          reveal: ['Aussage 1: Falsch \u2013 auch formale und erweiterte Leistung.','Aussage 2: Falsch \u2013 Cross-Selling = ergänzend.','Aussage 3: Richtig \u2013 drei Phasen.','Aussage 4: Richtig \u2013 ganzheitlicher Ansatz.']
        }
      ],
      learningData: {
        title: 'Kundenbeziehungsmanagement I: Relationship Marketing',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Entwicklung des Kundenbeziehungsmanagements zum CRM darstellen.',
              'die Faktoren der Kundenbindung beschreiben.',
              'die zwei Möglichkeiten der Kundenpflege erläutern.'
            ]
          },
          {
            type: 'concept',
            title: '7.1 Begriffsdefinition',
            content: 'Das zentrale Element des Relationship Marketings (Kundenbeziehungsmarketing) ist die Fokussierung auf die Etablierung langfristiger Kundenbeziehungen mit bestehenden Kunden. Ein möglichst grosser Teil der Marketing- und Verkaufsressourcen soll statt in die Neukundengewinnung in das Kundenbeziehungsmanagement investiert werden. Relationship Marketing ist eine ganzheitliche Unternehmensführung durch abteilungsübergreifende Integration aller kundenbezogener Prozesse in Marketing, Vertrieb, Kundendienst, Forschung und Entwicklung.',
            highlight: 'Die Kundenbindung stellt die zentrale Denkhaltung im Marketing dar und prägt sämtliche Marketing- und Kommunikationsmassnahmen mit.'
          },
          {
            type: 'concept',
            title: '7.1.2 Der Kundenlebenszyklus',
            content: 'Der Kundenlebenszyklus beschreibt den zeitlichen Verlauf und die unterschiedlichen Phasen einer Kundenbeziehung. Er besteht aus drei Hauptphasen: (1) Kundenakquisition (Recruitment) mit Anbahnungs- und Sozialisationsphase, (2) Kundenbindung (Retention) mit Wachstums- und Reifephase, (3) Kundenrückgewinnung (Recovery) mit Gefährdungs-, Auflösungs- und Abstinenzphase.',
            highlight: 'Der Kundenlebenszyklus besteht aus drei Phasen: Kundenakquisition (Recruitment), Kundenbindung (Retention) und Kundenrückgewinnung (Recovery).'
          },
          {
            type: 'concept',
            title: '7.1.3 Kundenzufriedenheit und Kundenbindung',
            content: 'Kundenzufriedenheit ist eine wichtige Voraussetzung für Kundenbindung und -loyalität. Das Zufriedenheitsniveau wird in drei Ebenen unterteilt: Enttäuschte Kunden (Erwartungen nicht erfüllt), Zufriedene Kunden (Erwartungen in etwa erfüllt) und Begeisterte Kunden (Erwartungen übertroffen). Die Kundenbindung erfolgt über psychologische Bindung (Vertrauen, Kundenloyalität, Zugehörigkeitsgefühl) und faktische Bindung (ökonomische, vertragliche, technologische Wechselbarrieren).',
            highlight: 'Kundenbindung basiert auf psychologischer Bindung (Kundenverbundenheit) und faktischer Bindung (Kundengebundenheit). Variety Seeking kann trotz Zufriedenheit zu Abwanderung führen.'
          },
          {
            type: 'table',
            title: 'Vorteile des Relationship Marketing',
            headers: ['Rentabilitätsaspekte', 'Wachstumsaspekte', 'Sicherheitsaspekte'],
            rows: [
              ['Geringere Transaktionskosten bei Stammkunden', 'Mehr Weiterempfehlungen durch Stammkunden', 'Grössere Planungssicherheit durch stabile Geschäftsbeziehungen'],
              ['Erkennen von zukünftigem Nutzen von Beziehungen', 'Vermehrte Cross-Buying-Effekte (Zusatzkäufe)', 'Höhere Fehlertoleranz der Kunden (Beschwerdemanagement)'],
              ['Steigende Rentabilität von Stammkunden im Zeitverlauf', 'Höhere Kauffrequenz im Verlauf der Geschäftsbeziehung', 'Kundenbindung als Markteintrittsbarriere']
            ]
          },
          {
            type: 'concept',
            title: '7.2 Customer Relationship Management \u2013 CRM',
            content: 'CRM umfasst einerseits ein umfassendes kundenorientiertes, technologiegestütztes Kunden-Managementkonzept, andererseits ein rein operatives technologisches Instrument zur Bearbeitung von Kundendaten. CRM stellt den Kunden in den Mittelpunkt und ermöglicht eine differenzierte Bearbeitung verschiedener Kundensegmente. Die CRM-Datenbank dient zur differenzierten Kundenbearbeitung mit Funktionen wie Kontaktdaten, Kontaktmanagement, Kommunikation, Marketing und Vertrieb, Zugriff/Erreichbarkeit, Archiv, Reporting, Kompatibilität und Datenschutz.',
            highlight: 'CRM ist ein ganzheitlicher Ansatz der Unternehmensführung. Es integriert alle kundenbezogenen Prozesse in Marketing, Vertrieb, Kundendienst sowie Forschung und Entwicklung.'
          },
          {
            type: 'concept',
            title: '7.3 Massnahmen des Relationship Marketing',
            content: 'Die wichtigsten Leitgedanken eines erfolgreichen Relationship Marketing sind: Kundenorientierung (konsequente Ausrichtung an den Bedürfnissen der Kunden), Langfristigkeit der Kundenbeziehungen, Wirtschaftlichkeitsorientierung (Fokus auf langfristig profitable Kunden, Customer Lifetime Value), Individualisierung der Kundenbeziehung, Systematisierung (über den gesamten Kundenbeziehungslebenszyklus) und Effizienz- und Effektivitätssteigerungen.',
            highlight: 'Kundenbindung kann über psychologische oder faktische Massnahmen erreicht werden. Cross-Selling und Up-Selling sind zentrale Instrumente zur Umsatzsteigerung bei bestehenden Kunden.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Relationship Marketing', def: 'Kundenbeziehungsmarketing mit Fokus auf langfristige Beziehungen zu bestehenden Kunden.' },
              { term: 'CRM (Customer Relationship Management)', def: 'Ganzheitlicher Ansatz zur Unternehmensführung, der alle kundenbezogenen Prozesse integriert und optimiert.' },
              { term: 'Kundenlebenszyklus', def: 'Die drei Phasen einer Kundenbeziehung: Akquisition (Recruitment), Bindung (Retention), Rückgewinnung (Recovery).' },
              { term: 'Cross-Selling', def: 'Zusatzverkäufe von ergänzenden Produkten an bestehende Kunden (Kernangebot wird mit flankierenden Produkten erweitert).' },
              { term: 'Up-Selling', def: 'Verkauf von höherwertigen Produkten an bestehende Kunden zur Steigerung der Zahlungsbereitschaft.' },
              { term: 'Customer Lifetime Value', def: 'Der langfristige Wert eines Kunden als Grundlage für die Wirtschaftlichkeitsorientierung im Relationship Marketing.' },
              { term: 'Variety Seeking', def: 'Wunsch des Kunden nach Abwechslung, der trotz Zufriedenheit zum Wechsel von Marke, Produkt oder Anbieter führen kann.' }
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Das <strong>Relationship Marketing</strong> konzentriert sich auf die Etablierung langfristiger Kundenbeziehungen mit bestehenden Kunden.',
              'Das <strong>Customer Relationship Management (CRM)</strong> ist ein ganzheitlicher Ansatz der Unternehmensführung. Es integriert alle kundenbezogenen Prozesse in Marketing, Vertrieb, Kundendienst sowie Forschung und Entwicklung.',
              'In <strong>CRM-Datenbanken</strong> werden Daten erfasst und analysiert, was eine differenzierte und individualisierte Kundenansprache während der gesamten <strong>Customer Journey</strong> ermöglicht.',
              'Der <strong>Kundenlebenszyklus</strong> besteht aus drei Phasen: Kundenakquisition (Recruitment), Kundenbindung (Retention) und Kundenrückgewinnung (Recovery).',
              '<strong>Kundenzufriedenheit</strong> ist Voraussetzung für langfristige Kundenbindung, wobei zwischen der Kernleistung, der formalen Leistung und der erweiterten Leistung zu unterscheiden ist.',
              'Massnahmen zur Kundenbindung umfassen <strong>Cross-Selling</strong> (Zusatzverkäufe) und <strong>Up-Selling</strong> (Verkauf höherwertiger Produkte).'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 8: Persönliche Kommunikation (S. 105-115)
    // ============================================================
    {
      id: 'ch8', num: 'Kapitel 8 (Teil A)', title: 'Kundenbeziehungsmanagement II: persönliche Kommunikation',
      exercises: [
        {
          id: 55, type: 'text',
          q: 'Kundenanalyse',
          instruction: 'Erklären Sie, warum eine systematische Kundenanalyse für die persönliche Kommunikation wichtig ist.',
          questions: [
            { q: 'Warum ist Kundenanalyse wichtig?', keywords: ['bedürfnisse','segmentierung','individuell','ansprache','daten','zufriedenheit','potential','zielgruppe'], minKeywords: 3 }
          ],
          tips: ['Ohne Kenntnis der Kunden keine zielgerichtete Kommunikation.','Segmentierung ermöglicht individuelle Ansprache.','Kundendaten helfen, Potenziale zu erkennen.'],
          reveal: ['Kundenanalyse ermöglicht eine zielgerichtete, individuelle Ansprache.','Durch Segmentierung können Kunden nach Bedürfnissen gruppiert werden.','Kundendaten helfen, Potenziale zu erkennen und die Zufriedenheit zu messen.']
        },
        {
          id: 56, type: 'match',
          q: 'Segmentationskriterien B2B-Markt',
          instruction: 'Rep. 32 (S. 115): Ordnen Sie die Kriterien-Arten den Segmentationskriterien für Geschäftskunden zu.',
          pairs: [
            { l: 'Wirtschaftsgebiet', r: 'Geografische Kriterien' },
            { l: 'Finanzkennzahlen', r: 'Ökonomische Kriterien' },
            { l: 'Unternehmensgrösse', r: 'Organisatorische Kriterien' },
            { l: 'Innovationsfreudigkeit', r: 'Entscheidungsträgerbezogene Kriterien' },
            { l: 'Lieferantentreue', r: 'Unternehmenskulturelle Kriterien' }
          ],
          options: ['Geografische Kriterien','Ökonomische Kriterien','Organisatorische Kriterien','Entscheidungsträgerbezogene Kriterien','Unternehmenskulturelle Kriterien'],
          tips: ['Geografisch = Standort, Wirtschaftsgebiet.','Okonomisch = Finanzkennzahlen, Umsatz.','Organisatorisch = Grösse, Struktur.'],
          reveal: ['Geografische Kriterien: Wirtschaftsgebiet.','Okonomische Kriterien: Finanzkennzahlen.','Organisatorische Kriterien: Unternehmensgrösse.','Entscheidungsträgerbezogene Kriterien: Innovationsfreudigkeit.','Unternehmenskulturelle Kriterien: Lieferantentreue.']
        },
        {
          id: 57, type: 'mc',
          q: 'Warmakquise (MC)',
          instruction: 'Rep. 33 (S. 115): Welche zwei der Aussagen treffen auf die Akquisitionsart \u00abWarmakquise\u00bb zu?',
          options: ['Telefonmarketing eignet sich hier gut','Diese Art der Akquisition ist weniger kostengünstig','Konzentration auf bestehende Kontakte','Zugehen auf potenzielle Kunden, zu denen bisher kein Kontakt besteht'],
          answer: 0,
          tips: ['Warmakquise = Kontaktaufnahme mit bestehenden Kontakten.','Kaltakquise = Kontaktaufnahme ohne vorherigen Kontakt.','Telefonmarketing eignet sich gut für Warmakquise.'],
          reveal: ['Warmakquise: Telefonmarketing eignet sich hier gut UND Konzentration auf bestehende Kontakte.','Bei der Warmakquise besteht bereits ein Kontakt zum potenziellen Kunden.','Kaltakquise: Zugehen auf potenzielle Kunden ohne vorherigen Kontakt.']
        },
        {
          id: 58, type: 'tf',
          q: 'Passives Telefonmarketing',
          statements: [
            { s: 'Beim passiven Telefonmarketing geht die Initiative vom Verkäufer aus.', c: false, feedback: 'Beim passiven Telefonmarketing geht die Initiative vom Kunden aus.' },
            { s: 'Beim passiven Telefonmarketing geht die Initiative vom Kunden aus.', c: true, feedback: 'Der Kunde ruft an, z.B. bei einem Service-Center.' },
            { s: '24/7-Service und Pikettdienste gehören zum passiven Telefonmarketing.', c: true, feedback: 'Diese Dienste warten auf Anrufe von Kunden.' },
            { s: 'Das passive Telefonmarketing eignet sich besonders zur Akquisition von Neukunden.', c: false, feedback: 'Passive Dienste warten auf Kundenanfragen, sie akquirieren nicht aktiv.' }
          ],
          tips: ['Passiv = der Kunde kommt zum Unternehmen.','Aktiv = das Unternehmen geht zum Kunden.','24/7-Service = wartet auf Anrufe.'],
          reveal: ['Aussage 1: Falsch \u2013 Initiative geht vom Kunden aus.','Aussage 2: Richtig \u2013 Kunde ruft an.','Aussage 3: Richtig \u2013 diese Dienste warten auf Anrufe.','Aussage 4: Falsch \u2013 passiv eignet sich nicht zur aktiven Akquisition.']
        },
        {
          id: 59, type: 'text',
          q: 'Gebundene vs. verbundene Kunden',
          instruction: 'Rep. 35 (S. 115): Erklären Sie den Unterschied zwischen gebundenen und verbundenen Kunden und nennen Sie je ein Beispiel.',
          questions: [
            { q: 'Unterschied und Beispiele:', keywords: ['vertraglich','technologisch','emotional','zufrieden','loyal','nespresso','drucker','stammkunden','fans'], minKeywords: 3 }
          ],
          tips: ['Gebunden = durch Vertrag oder Technologie.','Verbunden = durch Emotion und Zufriedenheit.','Gebundene Kunden bleiben, weil sie müssen. Verbundene, weil sie wollen.'],
          reveal: ['Gebundene Kunden: vertraglich oder technologisch an das Unternehmen gebunden (z.B. Nespresso, Drucker).','Verbundene Kunden: emotional mit dem Unternehmen verbunden, zufrieden und loyal (z.B. Stammkunden, Fans von Sportvereinen).']
        },
        {
          id: 60, type: 'text',
          q: 'Rückgewinnung verlorener Kunden',
          instruction: 'Rep. 36 (S. 115): Lohnt es sich, verlorene Kunden zurückzugewinnen?',
          questions: [
            { q: 'Begründen Sie Ihre Meinung.', keywords: ['kostengünstiger','neukunden','kennen','erfahrung','individuell','massnahmen','wertschätzung'], minKeywords: 2 }
          ],
          tips: ['Rückgewinnung ist oft kostengünstiger als Neukundenakquisition.','Verlorene Kunden kennen das Unternehmen bereits.','Auch wenn es nicht gelingt, kann Wertschätzung gezeigt werden.'],
          reveal: ['Es lohnt sich, denn die Rückgewinnung ist kostengünstiger als die Akquisition von Neukunden.','Verlorene Kunden kennen das Unternehmen bereits und haben Erfahrung.','Mit individuellen Massnahmen können sie oft zurückgewonnen werden.','Gelingt dies nicht, kann Wertschätzung entgegengebracht werden, was einen späteren Neuanfang erleichtert.']
        },
        {
          id: 61, type: 'text',
          q: 'Kommunikationsmassnahmen bei Firma Runco',
          instruction: 'Rep. 37 (S. 115): Bei der Firma Runco läuft es nicht rund: unklare Zuständigkeiten, Lieferterminprobleme, schlechte Reklamationskultur. Beschreiben Sie drei Kommunikationsmassnahmen.',
          questions: [
            { q: 'Drei Kommunikationsmassnahmen:', keywords: ['besprechungen','zuständigkeiten','single point of contact','newsletter','informationen','produkte','einsatz','kunden'], minKeywords: 3 }
          ],
          tips: ['Denken Sie an interne und externe Massnahmen.','Klare Zuständigkeiten schaffen (Single Point of Contact).','Regelmässige Information an Kunden.'],
          reveal: ['Regelmässige persönliche Besprechungen mit A- und B-Kunden.','Regelung der Zuständigkeiten \u2013 Single Point of Contact für jeden Kunden.','Kunden regelmässig mit Informationen versorgen (Newsletter, Newsmails).']
        },
        {
          id: 62, type: 'tf',
          q: 'Richtig oder Falsch: Persönliche Kommunikation',
          statements: [
            { s: 'Warmakquise bedeutet, potenzielle Kunden ohne vorherigen Kontakt anzusprechen.', c: false, feedback: 'Warmakquise = bestehende Kontakte. Kaltakquise = ohne vorherigen Kontakt.' },
            { s: 'Beim passiven Telefonmarketing geht die Initiative vom Kunden aus.', c: true, feedback: 'Der Kunde ruft an (z.B. bei einem Service-Center).' },
            { s: 'Verbundene Kunden sind durch Verträge an das Unternehmen gebunden.', c: false, feedback: 'Verbundene Kunden = emotional verbunden. Gebundene = vertraglich gebunden.' },
            { s: 'Die Rückgewinnung verlorener Kunden ist oft kostengünstiger als Neukundenakquisition.', c: true, feedback: 'Verlorene Kunden kennen das Unternehmen bereits.' }
          ],
          tips: ['Warm = bestehender Kontakt, Kalt = kein Kontakt.','Passiv = Kunde kommt, Aktiv = Unternehmen geht.','Verbunden = emotional, Gebunden = vertraglich.'],
          reveal: ['Aussage 1: Falsch \u2013 Warmakquise = bestehende Kontakte.','Aussage 2: Richtig \u2013 Kunde ruft an.','Aussage 3: Falsch \u2013 verbunden = emotional.','Aussage 4: Richtig \u2013 Rückgewinnung günstiger.']
        }
      ],
      learningData: {
        title: 'Kundenbeziehungsmanagement II: persönliche Kommunikation',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'eine Analyse von Privatkunden durchführen.',
              'die verschiedenen Kundenarten erläutern.',
              'Ziele und Methoden der persönlichen Kommunikation entlang des Kundenlebenszyklus anwenden.',
              'zurückzugewinnende Kunden mittels Berechnung des Kundenwerts bestimmen.'
            ]
          },
          {
            type: 'concept',
            title: '8.1 Kundenanalyse',
            content: 'Die Kundenanalyse dient der Bewertung bestehender, ehemaliger und potenzieller Kunden hinsichtlich ihrer Bedürfnisse, ihrer Attraktivität und ihres Optimierungspotenzials. Kunden werden in Segmente eingeteilt. Für die Segmentierung gelten dieselben Kriterien wie übergeordnet im Marketing: Geografische Kriterien (Land, Region, PLZ), Demografische Kriterien (Alter, Geschlecht, Einkommen), Psychologische Kriterien (Lebensstil, Einstellungen, Motive) und Kriterien des Verhaltens (Kaufhäufigkeit, Markenwahl, Mediennutzung).',
            highlight: 'Es ist 10-mal billiger, einen bestehenden Kunden zu pflegen, zu binden und die Kundenbeziehung zu intensivieren, als einen neuen Kunden zu akquirieren.'
          },
          {
            type: 'concept',
            title: '8.2 Kundenarten',
            content: 'Kundenarten werden nach drei Perspektiven unterschieden: Nach den Umständen des Kaufs (Sehkunde, Laufkunde, Stammkunde), nach dem Verhalten des Kunden (der redselige Kunde, der schweigsame Kunde, der reizbare Kunde, der ruhige Kunde, der unentschlossene Kunde, der sichere Kunde), und nach der Kundenbeziehung (Bestehende Kunden: verbundene und gebundene; Ehemalige Kunden: Kündiger, Schläfer, Reduzierer; Variety Seekers; Potenzielle Kunden).',
            highlight: 'Im Beziehungsmarketing ist hauptsächlich die Kundenart nach der Beziehung entscheidend: Bestehende, Ehemalige, Variety Seekers und Potenzielle Kunden.'
          },
          {
            type: 'table',
            title: 'Kundenarten nach Umständen des Kaufs',
            headers: ['Kundenart', 'Kundenverhalten', 'Verkäuferverhalten'],
            rows: [
              ['Sehkunde', 'Information, Preisvergleich, Zeitüberbrückung', 'Nicht aufdrängen, bei Bedarf bereitwillig Auskünfte geben, auf Qualität und Angebote hinweisen.'],
              ['Laufkunde', 'Beabsichtigter Kauf, weil Angebot preisgünstig ist, oder kommt zufällig vorbei.', 'Auf Preis und Angebot anderer Waren aufmerksam machen, versuchen einen Stammkunden zu machen.'],
              ['Stammkunde', 'Freut sich, wenn er ins Geschäft kommt. Besuch kann auch aus Notwendigkeit sein.', 'Zuvorkommende, persönliche und individuelle Bedienung und Betreuung.']
            ]
          },
          {
            type: 'concept',
            title: '8.3 Ziele und Methoden der persönlichen Kommunikation',
            content: 'Die persönliche Kommunikation ist ein zentrales Element des Relationship Marketing. Ihre Ziele orientieren sich an den drei Phasen des Kundenlebenszyklus: Kundenakquisition (Recruitment) mittels Kalt- und Warmakquise, v. a. durch Telefonmarketing; Kundenbindung (Retention) durch Fokussierung auf Schlüsselkunden (Key Accounts) und persönliche Kundenverbindung; Kundenrückgewinnung (Recovery) durch individuelle Rückgewinnungsmassnahmen basierend auf dem Kundenwert.',
            highlight: 'Die persönliche Kommunikation spielt entlang des gesamten Kundenlebenszyklus eine wichtige Rolle: bei der Akquisition, der Kundenbindung und der Rückgewinnung.'
          },
          {
            type: 'concept',
            title: '8.3.1 Kundenakquisition \u2013 Telefonmarketing',
            content: 'Die am häufigsten eingesetzte Massnahme der persönlichen Kommunikation bei der Kundenakquisition ist das Telefonmarketing. Man unterscheidet zwischen passivem Telefonmarketing (Initiative vom Kunden: Bestellungen, Anfragen, Reklamationen, Service) und aktivem Telefonmarketing (Initiative vom Verkäufer: Gewinnung von Interessenten, Vereinbarung von Terminen, Nachfassen von Offerten, direkte Verkäufe). Unter Kaltakquisition versteht man die direkte Kontaktaufnahme mit potenziellen Kunden ohne vorherigen Kontakt. Warmakquisition konzentriert sich auf bestehende Kontakte.',
            highlight: 'Beim aktiven Telefonmarketing dürfen nur Kunden, ehemalige Kunden und Interessierte, die zuvor ihr Einverständnis gegeben haben, kontaktiert werden.'
          },
          {
            type: 'concept',
            title: '8.3.2 Kundenbindung \u2013 Key Accounts',
            content: 'Bei der Kundenbindung erfolgt die Fokussierung oft auf Schlüsselkunden (Key Accounts) mit hohem Kundenwert und hohem Umsatz oder strategischer Bedeutung. Key Accounts werden durch Verkaufsleiter oder spezialisierte Schlüsselkundenbetreuer (Key Account Manager) persönlich betreut. Die Kundenbindung läuft auf zwei Ebenen: der fachlichen (Austausch der Güter) und der persönlichen, zwischenmenschlichen Ebene. Massnahmen umfassen u. a.: Kundenklub, Kundenextra, persönliche Ansprechperson, Feedback einholen, Beschwerden ernst nehmen, persönliche Atmosphäre, exklusive Angebote.',
            highlight: 'Unternehmen mit erfolgreicher Kundenbindung generieren zwischen 4% und 8% höhere Erträge.'
          },
          {
            type: 'concept',
            title: '8.3.3 Kundenrückgewinnung',
            content: 'Die Kundenrückgewinnung beginnt mit der Identifikation abgewanderter Kunden (Kündiger, Schläfer, Reduzierer), gefolgt von einer Analyse des Kundenwerts. Der Brutto-Kundenwert ergibt sich aus Durchschnittsumsatz pro Kunde x Kaufhäufigkeit pro Jahr x Beziehungsdauer in Jahren. Der Netto-Kundenwert erhält man nach Abzug der Kosten für Bearbeitung und Betreuung. Individuelle Rückgewinnungsmassnahmen umfassen: bevorzugter Kontaktweg, individuelles Rückgewinnungsangebot, zusätzliche Serviceleistungen und Problemlösungen. Selbst bei Misserfolg werden wertvolle Informationen über Abwanderungsgründe gesammelt.',
            highlight: 'Zur Berechnung des Brutto-Kundenwerts: Durchschnittsumsatz pro Kunde x Kaufhäufigkeit pro Jahr x Beziehungsdauer in Jahren. Minus Kosten = Netto-Kundenwert.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Kundenanalyse', def: 'Bewertung bestehender, ehemaliger und potenzieller Kunden hinsichtlich Bedürfnisse, Attraktivität und Optimierungspotenzial.' },
              { term: 'Segmentierung', def: 'Einteilung in homogene Kundengruppen nach geografischen, demografischen, psychologischen und verhaltensbezogenen Kriterien.' },
              { term: 'Kaltakquisition', def: 'Direkte Kontaktaufnahme mit potenziellen Kunden, zu denen bisher keine Beziehung besteht.' },
              { term: 'Warmakquisition', def: 'Kontaktaufnahme mit bestehenden Kontakten oder Interessenten, zu denen bereits eine Beziehung aufgebaut werden konnte.' },
              { term: 'Key Accounts', def: 'Schlüsselkunden mit hohem Kundenwert, die persönlich durch Verkaufsleiter oder Key Account Manager betreut werden.' },
              { term: 'Kundenwert', def: 'Der wirtschaftliche Wert eines Kunden, berechnet aus Durchschnittsumsatz x Kaufhäufigkeit x Beziehungsdauer, abzüglich Bearbeitungskosten.' },
              { term: 'Stammkunde', def: 'Kunde, der regelmässig und wiederholt bei einem Unternehmen einkauft und eine emotionale Bindung aufgebaut hat.' }
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Bei der <strong>Kundenanalyse</strong> werden bestehende, ehemalige und potenzielle Kunden betreffend ihre Bedürfnisse, ihre Attraktivität und ihr Optimierungspotenzial bewertet.',
              'Anschliessend wird mit dem Wissen um die verschiedenen <strong>Kundenarten</strong> das persönliche Verkaufsgespräch vorbereitet. Die persönliche Kommunikation spielt entlang des gesamten Kundenlebenszyklus eine wichtige Rolle.',
              'Bei der <strong>Akquisition</strong> geht es um die Gewinnung von neuen Kunden oder Mandaten durch persönliche Ansprache. Mittels Telefonmarketing kann Kalt- und Warmakquise betrieben werden.',
              'Bei der <strong>Kundenbindung</strong> steht die Betreuung von Schlüsselkunden (Key Accounts) im Vordergrund.',
              'Bei der <strong>Kundenrückgewinnung</strong> werden bei denjenigen Kunden mit einem hohen Kundenwert individuelle Rückgewinnungsmassnahmen definiert. Die definierten Angebote werden durch persönliche Kommunikation vermittelt.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 9: Mitarbeitendenkommunikation (S. 116-120)
    // ============================================================
    {
      id: 'ch9', num: 'Kapitel 9 (Teil A)', title: 'Mitarbeitendenkommunikation',
      exercises: [
        {
          id: 63, type: 'text',
          q: 'Risiken fehlender Mitarbeitendenkommunikation',
          instruction: 'Rep. 38 (S. 120): Welche Risiken bergen eine kaum existierende oder eine inkonsistente Mitarbeitendenkommunikation?',
          questions: [
            { q: 'Nennen Sie mindestens vier Risiken.', keywords: ['wissenstransfer','kommunizieren','informationen','fluktuation','motivation','abwesenheit','krankheit'], minKeywords: 3 }
          ],
          tips: ['Wenn Mitarbeitende nicht informiert werden, sinkt die Motivation.','Fehlende Kommunikation führt zu hoher Fluktuation.','Informationen werden nicht weitergegeben.'],
          reveal: ['Wissenstransfer findet kaum statt.','Mitarbeitende kommunizieren wenig miteinander.','Informationen werden nicht weitergegeben.','Hohe Mitarbeitendenfluktuation.','Fehlende Mitarbeitendenmotivation.','Hohe Abwesenheitsrate (Krankheit, Unfall, Unwohlsein).']
        },
        {
          id: 64, type: 'fill',
          q: 'Erfolgsfaktoren der Mitarbeitendenkommunikation',
          instruction: 'Rep. 39 (S. 120): Welches sind die zentralen Erfolgsfaktoren der Mitarbeitendenkommunikation?',
          template: 'Die zentralen Erfolgsfaktoren sind: {0}, {1}, {2}, {3}, {4}.',
          blanks: [
            ['Reichweite'],
            ['Echtzeit'],
            ['Transparenz'],
            ['Interaktion'],
            ['Glaubwürdigkeit']
          ],
          tips: ['Es gibt fünf zentrale Erfolgsfaktoren.','Denken Sie daran: Die Kommunikation muss alle erreichen (Reichweite).','Sie muss zeitnah (Echtzeit) und transparent sein.'],
          reveal: ['Reichweite: Alle Mitarbeitenden erreichen.','Echtzeit: Zeitnahe Kommunikation.','Transparenz: Offene und ehrliche Information.','Interaktion: Dialogmöglichkeiten bieten.','Glaubwürdigkeit: Vertrauenswürdige Kommunikation.']
        },
        {
          id: 65, type: 'fill',
          q: 'Themenbereiche der Mitarbeitendenkommunikation',
          instruction: 'Rep. 40 (S. 120): Welche vier Themenbereiche müssen durch eine erfolgreiche Mitarbeitendenkommunikation abgedeckt werden?',
          template: 'Die vier Themenbereiche sind: {0}, {1}, {2}, {3}.',
          blanks: [
            ['Information'],
            ['Wissenstransfer'],
            ['Dialog'],
            ['Motivation']
          ],
          tips: ['Mitarbeitende brauchen Informationen und Wissen.','Dialog ermöglicht Rückmeldungen.','Motivation hält die Mitarbeitenden engagiert.'],
          reveal: ['Information: Mitarbeitende über Unternehmen informieren.','Wissenstransfer: Wissen teilen und weitergeben.','Dialog: Rückmeldungen ermöglichen.','Motivation: Engagement und Einsatzbereitschaft fördern.']
        },
        {
          id: 66, type: 'text',
          q: 'Befindlichkeiten der Mitarbeitenden ermitteln',
          instruction: 'Rep. 41 (S. 120): Beschreiben Sie zwei Massnahmen, wie sich die Befindlichkeiten und Bedürfnisse der Mitarbeitenden ermitteln lassen.',
          questions: [
            { q: 'Zwei Massnahmen:', keywords: ['umfrage','extern','anonymisiert','präsentation','plenum','persönlich','jour fixe','vorgesetzte','thema'], minKeywords: 2 }
          ],
          tips: ['Anonyme Umfragen liefern ehrliche Ergebnisse.','Persönliche Gespräche mit Vorgesetzten.','Die Ergebnisse müssen kommuniziert werden.'],
          reveal: ['Mitarbeitendenumfrage: extern durchgeführt, anonymisiert, mit Präsentation der Ergebnisse im Plenum.','Persönliche Kommunikation: Jour fixe mit Vorgesetzten, wo die Mitarbeitendenzufriedenheit als eigenes Thema behandelt wird.']
        },
        {
          id: 67, type: 'text',
          q: 'Kommunikationsmassnahmen für Mitarbeitende',
          instruction: 'Rep. 42 (S. 120): Beschreiben Sie vier Kommunikationsmassnahmen zuhanden der Mitarbeitenden, mit denen Sie die Kommunikationskultur optimieren wollen.',
          questions: [
            { q: 'Vier Massnahmen:', keywords: ['kaffeepause','CEO','newsletter','intranet','lessons learned','mitarbeiterblog','persönlich','team','information'], minKeywords: 3 }
          ],
          tips: ['Persönliche Kommunikation ist besonders wertvoll.','Newsletter und Intranet für breite Information.','Innovative Formate wie Mitarbeiterblog oder Lessons Learned.'],
          reveal: ['Persönliche Kommunikation: Kaffeepause mit dem CEO (1x pro Monat).','Newsletter: Pro Ausgabe wird ein Mitarbeiter / eine Mitarbeiterin vorgestellt.','Intranet: Lessons Learned \u2013 Fehler, die stattgefunden haben (anonymisiert).','Mitarbeiterblog zum Thema: Wie halte ich mich fit und sorge für mein Wohlergehen?']
        },
        {
          id: 68, type: 'tf',
          q: 'Richtig oder Falsch: Mitarbeitendenkommunikation',
          statements: [
            { s: 'Die Mitarbeitendenkommunikation ist ein dauerhafter Regelkreis, der ununterbrochen weitergeführt werden muss.', c: true, feedback: 'Mitarbeitendenkommunikation ist ein kontinuierlicher Prozess.' },
            { s: 'Bei der direkten Mitarbeitendenkommunikation steht der unmittelbare Informationsaustausch im Vordergrund.', c: true, feedback: 'Direkte Kommunikation = persönlicher Austausch.' },
            { s: 'Die indirekte Mitarbeitendenkommunikation nutzt nur digitale Kanäle.', c: false, feedback: 'Indirekte Kommunikation nutzt Kommunikationsmittel (auch gedruckte) zur Informationsübermittlung.' }
          ],
          tips: ['Mitarbeitendenkommunikation ist ein Regelkreis.','Direkt = persönlich, unmittelbar.','Indirekt = über Kommunikationsmittel (digital und gedruckt).'],
          reveal: ['Aussage 1: Richtig \u2013 dauerhafter Regelkreis.','Aussage 2: Richtig \u2013 unmittelbarer Austausch.','Aussage 3: Falsch \u2013 auch gedruckte Medien (Mitarbeitendenzeitung etc.).']
        }
      ],
      learningData: {
        title: 'Mitarbeitendenkommunikation',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Notwendigkeit einer funktionierenden Mitarbeitendenkommunikation erläutern.',
              'Ziele und Methoden der Mitarbeitendenkommunikation erklären und anwenden.',
              'die verschiedenen Strategiearbeiten der Mitarbeitendenkommunikation aufführen.',
              'die verschiedenen Massnahmen der Mitarbeitendenkommunikation beschreiben.'
            ]
          },
          {
            type: 'concept',
            title: '9.1 Mitarbeitendenkommunikation',
            content: 'In der Unternehmens- und der Marketingkommunikation nimmt die Mitarbeitendenkommunikation einen besonderen Stellenwert ein. Zur Mitarbeitendenkommunikation gehören alle Massnahmen des Managements, die der Kommunikation mit den Mitarbeitenden dienen. Sie ist ein zentrales Element der Unternehmenskultur (Corporate Culture) sowie der Unternehmens- und der Marketingkommunikation. Die Mitarbeitendenkommunikation muss langfristig geplant, auch in hektischen oder wirtschaftlich kritischen Zeiten lückenlos umgesetzt und zu jeder Zeit ehrlich und glaubwürdig sein.',
            highlight: 'Die Mitarbeitendenkommunikation ist ein zentrales Element der Unternehmenskultur (Corporate Culture) sowie der Unternehmens- und der Marketingkommunikation.'
          },
          {
            type: 'concept',
            title: '9.1.1 Grundsätze der Mitarbeitendenkommunikation',
            content: 'Die interne Kommunikation bezeichnet den Dialog zwischen den Vorgesetzten und ihren Mitarbeitenden sowie den täglichen Austausch zwischen den Mitarbeitenden selbst. Damit der interne Dialog gelingt, müssen folgende Faktoren berücksichtigt werden: Reichweite (die richtigen Kommunikationskanäle für das Unternehmen auswählen), Echtzeit (alle Informationen müssen in Echtzeit zugänglich sein, z. B. via Intranet), Transparenz (Mitarbeitende im Voraus über Veränderungen informieren), Interaktion (Mitarbeitende in Entscheidungen einbinden) und Glaubwürdigkeit (Walk as you talk \u2013 Management muss Vorbild sein).',
            highlight: 'Motivierte Mitarbeitende prägen zudem die persönliche Kommunikation zur externen Zielgruppe, was essenziell ist für ein erfolgreiches Relationship Marketing.'
          },
          {
            type: 'concept',
            title: '9.1.2 Strategien der Mitarbeitendenkommunikation',
            content: 'Mitarbeitendenkommunikation bezieht sich auf verbale und nonverbale Kommunikation und unterscheidet zwischen formeller (offiziell definierte Kanäle) und informeller Kommunikation (Flurfunk, Gerüchteküche). Sie verläuft in vier Richtungen: Vertikale Kommunikation (wechselseitig zwischen verschiedenen Hierarchieebenen), Horizontale Kommunikation (wechselseitig auf gleicher Hierarchieebene), Top-down-Kommunikation (einseitig von Führungsebene zu Mitarbeitenden) und Bottom-up-Kommunikation (einseitig von Mitarbeitenden zu Führungsebene). Die vier grundsätzlichen Themenbereiche sind: Information, Wissenstransfer, Dialog und Motivation.',
            highlight: 'Erfolgreiche Mitarbeitendenkommunikation ist themen- oder anlassbezogen, eindeutig (Botschaft), zielgenau (Adressat) und termingerecht.'
          },
          {
            type: 'concept',
            title: '9.1.3 Instrumente der Mitarbeitendenkommunikation',
            content: 'Wichtige Instrumente der Mitarbeitendenkommunikation sind: Persönliche Kommunikation (direkter Austausch zwischen Geschäftsleitung, Kader und Mitarbeitenden \u2013 nichts kann die persönliche Interaktion ersetzen), Newsletter (One-Way-Kommunikation für allgemeine Informationen), Intranet (Social Intranet mit dynamischer Wissensvermittlung und Interaktionsmöglichkeiten), Mitarbeitendenzeitung (allgemeine Informationen wie Unternehmensanlässe, Team-Aktivitäten) und Mitarbeitendenblog (Mitarbeitende berichten persönlich über ihren Arbeitsalltag).',
            highlight: 'Die Mitarbeitendenkommunikation ist ein dauerhafter Regelkreis, der ununterbrochen weitergeführt und betrieben werden muss.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Mitarbeitendenkommunikation', def: 'Alle Massnahmen des Managements, die der Kommunikation mit den Mitarbeitenden dienen (direkt und über Kommunikationsmittel).' },
              { term: 'Vertikale Kommunikation', def: 'Wechselseitige Kommunikation zwischen Mitarbeitenden auf unterschiedlichen Hierarchieebenen.' },
              { term: 'Horizontale Kommunikation', def: 'Wechselseitige Kommunikation zwischen Mitarbeitenden auf gleicher Hierarchieebene.' },
              { term: 'Top-down-Kommunikation', def: 'Einseitige Kommunikation von der Führungsebene zu den Mitarbeitenden.' },
              { term: 'Bottom-up-Kommunikation', def: 'Einseitige Kommunikation von Mitarbeitenden zu Führungsebene (Berichte, Reportings).' },
              { term: 'Intranet / Social Intranet', def: 'Digitale Plattform für die interne Kommunikation, die in Echtzeit relevante Informationen zugänglich macht und Interaktion ermöglicht.' }
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Bei der <strong>Mitarbeitendenkommunikation</strong> werden bestehende, idealerweise auch ehemalige und potenzielle Mitarbeitende betreffend ihre Bedürfnisse und ihre Motivation angesprochen und das Optimierungspotenzial der Kommunikationsprozesse laufend beurteilt und umgesetzt.',
              'Anschliessend werden mit dem Wissen um die unterschiedlichen Kommunikationsbedürfnisse der <strong>internen Zielgruppen</strong> die geeigneten Massnahmen vorbereitet.',
              'Bei der direkten, persönlichen Mitarbeitendenkommunikation steht der unmittelbare <strong>Informationsaustausch</strong> im Vordergrund.',
              'Bei der indirekten Mitarbeitendenkommunikation über <strong>Kommunikationsmittel</strong> liegt der Fokus auf der mehrheitlich einseitigen Informationsübermittlung zuhanden der Adressaten.',
              'Die Mitarbeitendenkommunikation ist ein dauerhafter <strong>Regelkreis</strong>, der ununterbrochen weitergeführt und betrieben werden muss.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 10: Corporate Media (S. 122-133)
    // ============================================================
    {
      id: 'ch10', num: 'Kapitel 10 (Teil B)', title: 'Corporate Media',
      exercises: [
        {
          id: 69, type: 'match',
          q: 'PESO-Modell',
          instruction: 'Ordnen Sie die vier Grundarten von Content dem PESO-Modell zu.',
          pairs: [
            { l: 'Bezahlte Werbung und gesponserte Inhalte', r: 'Paid Media' },
            { l: 'Durch Dritte verdiente Medienpräsenz', r: 'Earned Media' },
            { l: 'Von Nutzern geteilte Inhalte in sozialen Medien', r: 'Shared Media' },
            { l: 'Unternehmenseigene Medien wie Website und Blog', r: 'Owned Media' }
          ],
          options: ['Paid Media','Earned Media','Shared Media','Owned Media'],
          tips: ['P = Paid (bezahlt).','E = Earned (verdient durch Qualität).','S = Shared (geteilt in Social Media).','O = Owned (eigene Medien).'],
          reveal: ['Paid Media: Bezahlte Werbung und gesponserte Inhalte.','Earned Media: Durch Dritte verdiente Medienpräsenz (Presseberichte, Empfehlungen).','Shared Media: Von Nutzern geteilte Inhalte in sozialen Medien.','Owned Media: Unternehmenseigene Medien (Website, Blog, Kundenmagazin).']
        },
        {
          id: 70, type: 'text',
          q: 'Owned vs. Earned Content',
          instruction: 'Rep. 43 (S. 133): Nennen Sie je einen Vorteil und einen Nachteil von Owned Content im Vergleich zu Earned Content.',
          questions: [
            { q: 'Vorteil und Nachteil:', keywords: ['kontrolle','inhalt','reichweite','glaubwürdigkeit','akzeptanz','blogger','experten','kompetenzträger'], minKeywords: 3 }
          ],
          tips: ['Owned Content = volle Kontrolle über den Inhalt.','Earned Content = höhere Glaubwürdigkeit.','Denken Sie an die Vor- und Nachteile beider Formen.'],
          reveal: ['Owned Content \u2013 Vorteil: Volle Kontrolle über den Inhalt. Nachteil: Wenig oder keine Kontrolle über die Reichweite.','Earned Content \u2013 Vorteil: Höhere Reichweite, Glaubwürdigkeit und Akzeptanz. Nachteil: Der Content muss verdient werden (bei Bloggern, Medienschaffenden, Kompetenzträgern).']
        },
        {
          id: 71, type: 'match',
          q: 'Vorteile von Corporate Media',
          instruction: 'Rep. 44 (S. 133): Ordnen Sie die Vorteile den richtigen Corporate-Media-Formen zu.',
          pairs: [
            { l: 'Mehr Content auf der eigenen Website = mehr Traffic, mehr Potenzial, von der Zielgruppe gefunden zu werden', r: 'Corporate Blog' },
            { l: 'Kann die Abhängigkeit von Fachmedien reduzieren', r: 'Kundenmagazin' },
            { l: 'Kann Wertschätzung für Mitarbeitende sein (Motivation nach innen) und Employer Branding stärken', r: 'Mitarbeitermagazin' }
          ],
          options: ['Corporate Blog','Kundenmagazin','Mitarbeitermagazin'],
          tips: ['Blog = Website-Content, SEO-Vorteile.','Kundenmagazin = Alternative zu Fachmedien.','Mitarbeitermagazin = Motivation und Employer Branding.'],
          reveal: ['Corporate Blog: Mehr Traffic durch mehr Content auf der eigenen Website.','Kundenmagazin: Reduziert Abhängigkeit von Fachmedien.','Mitarbeitermagazin: Wertschätzung und Employer Branding.']
        },
        {
          id: 72, type: 'text',
          q: 'Zusätzliche Inhalte im Jahresbericht',
          instruction: 'Rep. 45 (S. 133): Welche zusätzlichen Informationen könnte ein Unternehmen nebst den reinen Geschäftszahlen in seinen Jahresberichten veröffentlichen?',
          questions: [
            { q: 'Nennen Sie mögliche Inhalte.', keywords: ['produkte','dienstleistungen','neuentwicklungen','social responsibility','volunteering','jubiläum','feiern'], minKeywords: 2 }
          ],
          tips: ['Ein Jahresbericht kann mehr als nur Zahlen enthalten.','Denken Sie an Produkte, soziale Verantwortung, Mitarbeitende.','Auch Jubiläen und besondere Events können erwähnt werden.'],
          reveal: ['Produkte, Dienstleistungen und Neuentwicklungen.','Social-Responsibility-Aktivitäten (Volunteering für NGO-Aktionen).','Jubiläumsanlässe, spezielle Feiern.']
        },
        {
          id: 73, type: 'mc',
          q: 'Storytelling (MC)',
          instruction: 'Was ist das Ziel von Storytelling in der Unternehmenskommunikation?',
          options: ['Möglichst viele Fakten und Zahlen zu präsentieren','Die Zielgruppe durch erzählerische Vermittlung emotional anzusprechen','Nur interne Mitarbeitende zu informieren','Werbebotschaften möglichst oft zu wiederholen'],
          answer: 1,
          tips: ['Storytelling = Geschichten erzählen.','Emotionale Ansprache ist der Kern.','Geschichten bleiben besser in Erinnerung als Fakten.'],
          reveal: ['Storytelling zielt auf die emotionale Ansprache der Zielgruppe durch erzählerische Vermittlung.','Geschichten bleiben besser in Erinnerung als reine Fakten.','Storytelling kann für interne und externe Kommunikation genutzt werden.']
        },
        {
          id: 74, type: 'text',
          q: 'Informationsüberflutung',
          instruction: 'Erklären Sie, warum die Informationsüberflutung eine Herausforderung für Corporate Media darstellt.',
          questions: [
            { q: 'Erklären Sie die Herausforderung.', keywords: ['vielzahl','kanäle','selektieren','filtern','relevanz','content','aufmerksamkeit','zielgruppe'], minKeywords: 3 }
          ],
          tips: ['Nutzer haben heute eine Vielzahl an Informationsquellen.','Sie müssen stärker selektieren und filtern.','Nur relevante Inhalte werden wahrgenommen.'],
          reveal: ['Nutzer haben heute eine Vielzahl an Informationskanälen.','Sie müssen stärker selektieren, um relevante Informationen zu filtern.','Nur Content mit hoher Relevanz für die Zielgruppe wird wahrgenommen.','Die richtige Ansprache und die richtigen Themen sind entscheidend.']
        },
        {
          id: 75, type: 'tf',
          q: 'Richtig oder Falsch: Corporate Media',
          statements: [
            { s: 'Das PESO-Modell beschreibt vier Grundarten von Content: Paid, Earned, Shared, Owned.', c: true, feedback: 'P-E-S-O sind die vier Grundarten.' },
            { s: 'Corporate Publishing hat den Nachteil, dass mittels Owned Media nur wenig zielgerichtet kommuniziert werden kann.', c: false, feedback: 'Owned Media ermöglicht gerade sehr zielgerichtete Kommunikation, da das Unternehmen die volle Kontrolle hat.' },
            { s: 'Ein Kundenmagazin kann die Abhängigkeit von Fachmedien reduzieren.', c: true, feedback: 'Ein eigenes Medium ersetzt teilweise die Abhängigkeit von externen Fachmedien.' }
          ],
          tips: ['PESO = Paid, Earned, Shared, Owned.','Owned Media = volle Kontrolle, zielgerichtete Kommunikation.','Kundenmagazin = eigenes Medium.'],
          reveal: ['Aussage 1: Richtig \u2013 PESO-Modell.','Aussage 2: Falsch \u2013 Owned Media = zielgerichtet.','Aussage 3: Richtig \u2013 Kundenmagazin reduziert Abhängigkeit.']
        }
      ],
      learningData: {
        title: 'Corporate Media',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'den Begriff Corporate Media (Corporate Publishing) definieren.',
              'die Bedeutung von Storytelling innerhalb der Corporate Media erläutern.',
              'die Instrumente bzw. Medien von Corporate Media aufzählen und deren Einsatzgebiet erklären.'
            ]
          },
          {
            type: 'concept',
            title: '10.1 Die vier Grundarten von Content (PESO-Modell)',
            content: 'Das PESO-Modell unterscheidet vier Grundarten von Content: Owned Content (Inhalt, über den Kommunikationsfachleute volle Kontrolle haben \u2013 z. B. Blog, Website, Newsroom), Paid Content (Inhalt, bei dem volle Kontrolle über die Reichweite besteht \u2013 z. B. Banner, Display, bezahlte Unterstützung), Earned Content (Inhalt, den sich ein Unternehmen verdienen muss \u2013 z. B. redaktionelle PR, Textplatzierungen, Interviews) und Social Content (Inhalt, der gemeinsam mit der Öffentlichkeit gestaltet wird \u2013 z. B. Postings, Kommentare, Forenbeiträge).',
            highlight: 'Die vier Content-Arten im PESO-Modell: Paid (bezahlt), Earned (verdient), Social (geteilt), Owned (eigener Inhalt).'
          },
          {
            type: 'concept',
            title: '10.2 Was sind Corporate Media?',
            content: 'Unter Corporate Media (CM) bzw. Corporate Publishing (CP) versteht man die journalistische und periodische Unternehmenskommunikation mit eigenen Medien (Owned Media). Corporate Publishing umfasst traditionell Printerzeugnisse wie Kundenzeitschriften, Mitarbeiterzeitschriften und Firmenzeitungen. Hinzu kommen Corporate-TV, Corporate Blogs und Mobile Communication. Die Instrumente des CM lassen sich in interne Zielgruppen (Unternehmenspublikationen, Haus- und Mitarbeiterpublikationen, E-Mail-Newsletter, Corporate-TV) und externe Zielgruppen (Geschäftsberichte, Imagebroschüren, Kundenpublikationen, Corporate Books, Online-Plattformen, Blogs und Podcasts) unterteilen.',
            highlight: 'Corporate Media sind vom Unternehmen selbst erstellte und verbreitete Inhalte (Owned Media), die zielgruppennahe Mitarbeiter- und Kundenpublikationen umfassen.'
          },
          {
            type: 'concept',
            title: '10.3 Merkmale der Corporate Media',
            content: 'Wichtige Grundsätze der Corporate Media sind: Inhalt (journalistische Aufbereitung, die durch Relevanz und Glaubwürdigkeit überzeugt statt durch werbliche Ansprache), Kontinuität (stetige Präsenz zur langfristigen Vermittlung von Botschaften und Vertrauensbildung), Mehrwert (besondere Aufmerksamkeit und Wertschätzung durch Einladungen zu Events, Klubvorteile, Service-Hotlines, Coupons), Individualität (individuelle Ausrichtung an die verschiedenen Zielgruppen) und Crossmediale Vernetzung (optimale Vernetzung aller Kommunikationskanäle für Synergieeffekte).',
            highlight: 'Corporate Media liefern wertvolle Markeninhalte: Inhalt, Kontinuität, Mehrwert, Individualität und crossmediale Vernetzung sind die zentralen Grundsätze.'
          },
          {
            type: 'concept',
            title: '10.4 Storytelling',
            content: 'Geschichten gewinnen eher die Aufmerksamkeit des Publikums als Hard Facts und bleiben deutlich länger im Gedächtnis haften. Die Idee hinter Storytelling: Nicht das Produkt, sondern das Bedürfnis dahinter steht im Fokus. Die wichtigsten Regeln: Jede Geschichte braucht einen guten Grund (Relevanz), muss zum richtigen Zeitpunkt erzählt werden (Aufhänger), braucht einen Helden (Fokus) und einen roten Faden (Stringenz), jede gute Geschichte berührt emotional, und man erzählt keine Geschichte zweimal.',
            highlight: 'Storytelling: Nicht das Produkt, sondern das Bedürfnis dahinter steht im Fokus. Eine gute Storyline funktioniert unabhängig vom Kommunikationskanal.'
          },
          {
            type: 'concept',
            title: '10.5 Massnahmen der Corporate Media',
            content: 'Die wichtigsten Instrumente für interne Zielgruppen sind: Intranet / Social Intranet (zentrale redaktionelle Bereitstellung und dynamische Wissensvermittlung), Hauszeitungen (Berichterstattung über unternehmerische Aktivitäten), Mitarbeiterzeitschriften (Verbreitung unternehmens- und branchenrelevanter Informationen). Für externe Zielgruppen: Kundenzeitschriften (periodisch erscheinende Instrumente der Unternehmenskommunikation), Geschäftsberichte (Jahresrechnung, Lagebericht, Konzernrechnung \u2013 zentrales Mittel der Selbstdarstellung), Corporate Books, Corporate TV/Audio, E-Mail-Newsletter, Corporate Blogs/Vlogs/Podcasts und Corporate Social Media.',
            highlight: 'Corporate Media können für interne Zielgruppen (Mitarbeitende) und externe Zielgruppen (Kunden, Händler) eingesetzt werden.'
          },
          {
            type: 'table',
            title: 'Blog-Arten und ihre Funktionen',
            headers: ['Blog-Art', 'Beschreibung'],
            rows: [
              ['Knowledge', 'Erfahrungsspeicher der Organisation, persönliche Journale der Mitarbeitenden.'],
              ['Meeting', 'Protokollieren Inhalte von Treffen, können via Passwort geschlossen geführt werden.'],
              ['Service', 'Zusätzliche Informationen zu Produkten, Verbesserungsvorschläge ermöglichen.'],
              ['Kampagnen', 'Temporär angelegt, unterstützen PR- oder Werbekampagnen.'],
              ['Themen', 'Unternehmen zeigen Kompetenz in relevanten Bereichen (z. B. Gesundheitsthemen).'],
              ['Produkt und Marken', 'Produkt steht im Mittelpunkt, bei Marken-Blogs die Marke.'],
              ['Customer Relationship', 'Schaffung einer Community, die an die Marke binden soll.'],
              ['CEO oder Executive', 'Mitglieder des Vorstands schreiben persönlich und namentlich.'],
              ['Employee', 'Weblogs von Mitarbeitenden \u2013 Unternehmen stellt lediglich Technik und Raum bereit.']
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Corporate Media / Corporate Publishing', def: 'Journalistische und periodische Unternehmenskommunikation mit eigenen Medien (Owned Media).' },
              { term: 'PESO-Modell', def: 'Vier Grundarten von Content: Paid (bezahlt), Earned (verdient durch PR), Social (geteilt in sozialen Medien), Owned (eigene Medien).' },
              { term: 'Owned Content', def: 'Inhalte, über die das Unternehmen volle Kontrolle hat (Blog, Website, Newsroom), aber wenig Kontrolle über Reichweite.' },
              { term: 'Storytelling', def: 'Präsentationsform, bei der Informationen in Geschichten verpackt werden, um Emotionen zu wecken und im Gedächtnis zu bleiben.' },
              { term: 'Kundenzeitschrift', def: 'Periodisch erscheinendes Instrument der Unternehmenskommunikation im Zeitschriften- oder Zeitungslayout mit redaktionellem Inhalt.' },
              { term: 'Corporate Social Media', def: 'Einsatz von Social-Media-Webseiten und Social-Media-Marketing-Aktivitäten von Unternehmen.' }
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die Digitalisierung sowie die Nutzung der Online-Medien bringt sowohl Vorteile als auch Nachteile mit sich. Auf der einen Seite haben Nutzer eine grosse Auswahl an Kanälen, auf der anderen Seite resultiert daraus eine starke <strong>Informationsüberflutung</strong>.',
              'Hier kommt <strong>Corporate Publishing</strong> ins Spiel: mittels Owned Media (unternehmenseigene Medien) kann zielgerichteter kommuniziert werden.',
              'Ein <strong>Corporate Blog</strong> auf der Unternehmenswebseite bietet mehr Content und Potenzial, besser von der Zielgruppe gefunden zu werden.',
              'Ein <strong>Kundenmagazin</strong> ersetzt in Teilen die Abhängigkeit von Fachmedien als eigenes Medium für relevante Informationen.',
              'Ein <strong>Mitarbeitermagazin</strong> kann den Employer Brand stärken und die Wertschätzung der eigenen Mitarbeitenden verdeutlichen.'
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 11: Zusammenarbeit mit Agenturen (S. 134-149)
    // ============================================================
    {
      id: 'ch11', num: 'Kapitel 11 (Teil B)', title: 'Zusammenarbeit mit Agenturen',
      exercises: [
        {
          id: 76, type: 'fill',
          q: 'Evaluation einer Kommunikationsagentur',
          instruction: 'Rep. 46 (S. 149): Beschreiben Sie die drei Wege zur Evaluation einer Kommunikationsagentur.',
          template: 'Die drei Wege sind: 1. {0}, 2. {1}, 3. {2}.',
          blanks: [
            ['Direkter Weg ohne Evaluationsverfahren','Direkter Weg'],
            ['Weg über eine Agenturpräsentation','Agenturpräsentation'],
            ['Weg über die Wettbewerbs-/Konkurrenzpräsentation (Pitch)','Pitch']
          ],
          tips: ['Es gibt drei verschiedene Wege, eine Agentur zu evaluieren.','Der einfachste Weg ist die direkte Beauftragung.','Der aufwendigste ist der Pitch (Wettbewerbspräsentation).'],
          reveal: ['1. Direkter Weg ohne Evaluationsverfahren.','2. Weg über eine Agenturpräsentation.','3. Weg über die Wettbewerbs-/Konkurrenzpräsentation (Pitch).']
        },
        {
          id: 77, type: 'match',
          q: 'Entschädigungsarten für Agenturen',
          instruction: 'Rep. 47 (S. 149): Ordnen Sie die Entschädigungsarten den richtigen Beschreibungen zu.',
          pairs: [
            { l: 'Honorar-Pauschale unter präziser Formulierung der zu erbringenden Leistung', r: 'Honorar-Pauschale' },
            { l: 'Agenturhonorar gem. BSW/ASW: 17,65% von allen Rechnungsbeträgen', r: 'Agenturhonorar Werbung' },
            { l: 'Stundenansätze, zusammengesetzt aus Lohnbasis und betriebswirtschaftlichem Faktor', r: 'Aufwand / Cost Plus' }
          ],
          options: ['Honorar-Pauschale','Agenturhonorar Werbung','Aufwand / Cost Plus'],
          tips: ['Pauschale = fixer Betrag für definierte Leistung.','Agenturhonorar = prozentual (17,65% gem. BSW/ASW).','Cost Plus = Stundenansätze nach Aufwand.'],
          reveal: ['Honorar-Pauschale: Fixer Betrag für definierte Leistung.','Agenturhonorar Werbung: 17,65% von allen Rechnungsbeträgen (BSW/ASW).','Aufwand / Cost Plus: Stundenansätze nach tatsächlichem Aufwand.']
        },
        {
          id: 78, type: 'fill',
          q: 'Inhalte eines Kommunikationsbriefings',
          instruction: 'Rep. 48 (S. 149): Nennen Sie die wesentlichen Inhalte eines Kommunikationsbriefings.',
          template: 'Die wesentlichen Inhalte sind: 1. Vollständige {0}, 2. {1}: Was wollen wir von der Agentur?, 3. {2}, 4. Ausrichtung ({3}).',
          blanks: [
            ['Auftraggeberadresse','Auftraggeberadresse: Wer sind wir?'],
            ['Aufgabe / Rahmenbedingungen','Aufgabe'],
            ['Situationsanalyse','Situationsanalyse: Wo steht unser Angebot im Markt?'],
            ['Soll-Positionen']
          ],
          tips: ['Ein Briefing ist die Aufgabenbeschreibung an die Agentur.','Es muss klar sein: WER gibt den Auftrag, WAS ist die Aufgabe, WO stehen wir, WOHIN wollen wir.','Die Soll-Positionen beschreiben die Ziele.'],
          reveal: ['1. Auftraggeberadresse: Wer sind wir?','2. Aufgabe / Rahmenbedingungen: Was wollen wir von der Agentur?','3. Situationsanalyse: Wo steht unser Angebot im Markt?','4. Ausrichtung (Soll-Positionen): Wo wollen wir hin?']
        },
        {
          id: 79, type: 'text',
          q: 'Situationsanalyse im Briefing',
          instruction: 'Rep. 49 (S. 149): Nennen Sie vier Punkte, die bei der Situationsanalyse im Kommunikationsbriefing aufgeführt werden müssen.',
          questions: [
            { q: 'Vier Punkte der Situationsanalyse:', keywords: ['markt','angebot','distribution','käufer','beeinflusser','konkurrenz','vorschriften','informationslücken'], minKeywords: 3 }
          ],
          tips: ['Situationsanalyse = Wo stehen wir im Markt?','Denken Sie an Markt, Produkt, Distribution, Kunden, Konkurrenz.','Auch Informationslücken gehören dazu.'],
          reveal: ['Markt (Definition, Situation, Trends, Marktentwicklung, eigene Ziele).','Angebotsleistung / Leistungsprogramm: Was bieten wir an?','Distribution (Absatzkanäle): Wie vermarkten wir unser Produkt?','Käufer / Konsumenten: Wer sind unsere Kunden?','Beeinflusser: Wer sind die Kaufbeeinflusser?','Konkurrenz: Wer sind unsere Mitbewerber?','Vorschriften und Bedingungen: Was ist speziell zu beachten?','Informationslücken: Was wissen wir nicht?']
        },
        {
          id: 80, type: 'text',
          q: 'Soll-Positionen im Briefing',
          instruction: 'Rep. 50 (S. 149): Nennen Sie vier Punkte, die bei den Soll-Positionen im Kommunikationsbriefing aufgeführt werden müssen.',
          questions: [
            { q: 'Vier Punkte der Soll-Positionen:', keywords: ['vision','marketingziele','strategie','potenzial','positionierung','wettbewerbsvorteile','USP','kommunikationsplattform','zeitplan','budget'], minKeywords: 3 }
          ],
          tips: ['Soll-Positionen = Wohin wollen wir?','Denken Sie an Visionen, Ziele, Strategie, Budget.','Die Kommunikationsplattform beschreibt den Auftritt.'],
          reveal: ['Visionen: Wie stellen wir uns die Zukunft vor?','Marketingziele (Umsätze, Marktanteile, Distribution): Was wollen wir erreichen?','Marketingstrategie: Wie gehen wir vor?','Positionierung, Wettbewerbsvorteile USP, SEP, UCP.','Kommunikationsplattform (Kommunikationsstrategie): Wie sehen wir unseren Auftritt?','Zeitplan / Termine: Wann wollen wir auftreten?','Budgetrahmen: Was können wir investieren?']
        },
        {
          id: 81, type: 'mc',
          q: 'Arten von Agenturen (MC)',
          instruction: 'Welche Art von Agentur ist NICHT typisch im Kommunikationsbereich?',
          options: ['Werbeagentur','PR-Agentur','Event-Agentur','Steuerberatungsagentur'],
          answer: 3,
          tips: ['Kommunikationsagenturen sind spezialisiert auf Kommunikationsaufgaben.','Es gibt Werbe-, PR-, Media-, Online-Kommunikations-, Event- und Sponsoring-Agenturen.','Steuerberatung gehört nicht zur Kommunikation.'],
          reveal: ['Typische Kommunikationsagenturen: Werbe-, PR-, Media-, Online-Kommunikations-, Event- und Sponsoring-Agenturen.','Eine Steuerberatungsagentur ist keine Kommunikationsagentur.']
        },
        {
          id: 82, type: 'tf',
          q: 'Richtig oder Falsch: Zusammenarbeit mit Agenturen',
          statements: [
            { s: 'Ein Kommunikationsbriefing enthält Informationen zu Ausgangslage, Zielen, Zielgruppen, Budget und Timing.', c: true, feedback: 'Das Briefing ist die zentrale Aufgabenbeschreibung an die Agentur.' },
            { s: 'Die partnerschaftliche Zusammenarbeit zwischen Auftraggeber und Agentur ist weniger wichtig als der Preis.', c: false, feedback: 'Partnerschaftliche Zusammenarbeit ist entscheidend für den Erfolg.' },
            { s: 'Es gibt drei Wege zur Evaluation einer Agentur: direkt, Agenturpräsentation und Pitch.', c: true, feedback: 'Diese drei Wege haben unterschiedliche Aufwands- und Qualitätsstufen.' },
            { s: 'Beim Agenturhonorar Werbung beträgt der übliche Satz gemäss BSW/ASW 17,65% von allen Rechnungsbeträgen.', c: true, feedback: 'Dies ist der branchenmässige Satz für Agenturhonorare in der Werbung.' }
          ],
          tips: ['Das Briefing ist das zentrale Instrument der Zusammenarbeit.','Partnerschaft > Preis.','17,65% ist der BSW/ASW-Satz.'],
          reveal: ['Aussage 1: Richtig \u2013 Briefing-Inhalte.','Aussage 2: Falsch \u2013 Partnerschaft ist entscheidend.','Aussage 3: Richtig \u2013 drei Evaluationswege.','Aussage 4: Richtig \u2013 17,65% BSW/ASW-Satz.']
        }
      ],
      learningData: {
        title: 'Zusammenarbeit mit Agenturen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die Aufgaben des Kommunikationsmanagers beschreiben.',
              'die wichtigsten Arten von Kommunikationsagenturen nennen.',
              'die wichtigsten Faktoren der Zusammenarbeit mit einer Kommunikationsagentur erläutern.',
              'ein vollständiges Kommunikationsbriefing erstellen.'
            ]
          },
          {
            type: 'concept',
            title: '11.1 Arten von Kommunikationsagenturen',
            content: 'Ein Unternehmen ist in vielen Bereichen nicht in der Lage, sämtliche Kommunikationsaufgaben intern wahrzunehmen. Gründe dafür sind: fehlendes Spezialwissen, nicht ausreichende Kreativität, fehlende Beziehungen zu Medienschaffenden, knappe interne Ressourcen und Betriebsblindheit. Die sechs wichtigsten Typen von Kommunikationsagenturen sind: Werbeagenturen, PR-Agenturen, Mediaagenturen, Online-Kommunikations-Agenturen, Event-Agenturen und Sponsoring-Agenturen.',
            highlight: 'Es gibt spezialisierte Agenturen für beinahe jeden Fachbereich: Werbe-, PR-, Media-, Online-Kommunikations-, Event- und Sponsoring-Agenturen.'
          },
          {
            type: 'concept',
            title: '11.1.1 Werbeagenturen',
            content: 'Eine Werbeagentur ist ein Dienstleistungsunternehmen, das die Beratung, Konzeption, Planung, Gestaltung und Realisierung von Werbe- und sonstigen Kommunikationsmassnahmen übernimmt. Eine Full-Service-Werbeagentur bietet das gesamte Leistungsspektrum an: Marktforschung, Konsumentenforschung, Mediaforschung; Entwicklung von Kommunikationsstrategien; Konzeption, Gestaltung und Produktion; Analyse und Kontrolle der Werbewirkung. Etats werden meist über Pitches (Wettbewerbe) vergeben. Wichtige Berufe in Agenturen: Beratung, Account Planning, Kreation sowie Berater/Grafiker/Texter.',
            highlight: 'Eine Full-Service-Werbeagentur bietet das gesamte Spektrum von Marktforschung über Strategieentwicklung bis zur Werbewirkungskontrolle.'
          },
          {
            type: 'concept',
            title: '11.1.2-11.1.6 Weitere Agenturtypen',
            content: 'PR-Agenturen können die komplette Öffentlichkeitsarbeit übernehmen: PR-Konzepte entwickeln, Pressemeldungen schreiben, Kundenzeitschriften entwerfen sowie den Kontakt zu Redaktoren und die Pflege des Medienverteilers übernehmen. Mediaagenturen beraten bei der Streuung eines Werbeetats in verschiedenen Medien und erstellen Mediastrategien und -pläne (inkl. Mediaeinkauf). Online-Kommunikations-Agenturen konzentrieren sich auf das digitale Marketing (Websites, SEO, Content-Marketing, Social Media, Affiliate Marketing). Event-Agenturen sind auf die Organisation und Abwicklung von Events spezialisiert. Sponsoring-Agenturen helfen bei der Steigerung des Bekanntheits- und Sympathiegrads.',
            highlight: 'Mediaagenturen erstellen Mediastrategien und -pläne; Online-Agenturen kümmern sich um den gesamten digitalen Auftritt eines Unternehmens.'
          },
          {
            type: 'concept',
            title: '11.2 Evaluation einer Kommunikationsagentur',
            content: 'Bei der Evaluation einer Agentur werden drei Auswahlverfahren unterschieden: (1) Direktwahl \u2013 intuitive Agenturwahl aufgrund früherer Kontakte, Empfehlungen oder bekannter Kampagnen. Variante: Vergabe eines Einzelauftrags. (2) Agenturpräsentation \u2013 eine Shortlist von 3 bis 4 Kandidaten wird zusammengestellt, basierend auf Bekanntheit, Referenzen und Presseberichten. Die Beurteilung erfolgt nach gleichen Kriterien mittels Checkliste. (3) Wettbewerbspräsentation (Pitch) \u2013 Agenturen erarbeiten Strategien und Ideen auf Basis eines Briefings.',
            highlight: 'Drei Evaluationswege: Direktwahl (intuitiv), Agenturpräsentation (Shortlist 3-4 Kandidaten), Wettbewerbspräsentation/Pitch (mit echten Problemlösungen).'
          },
          {
            type: 'concept',
            title: '11.3 Honorare und Entschädigung',
            content: 'Die drei häufigsten Entschädigungsarten in der Zusammenarbeit mit Kommunikationsagenturen sind: Agenturhonorar (Abrechnung nach Aufwand oder pauschal), Kommission/Provision (prozentuale Vergütung auf vermitteltes Medievolumen \u2013 der BSW/ASW-Satz beträgt 17,65% auf die Nettokosten) und Success Fee (erfolgsabhängige Vergütung). Die wichtigste Grundlage einer erfolgreichen Zusammenarbeit ist eine partnerschaftliche Beziehung zwischen Auftraggeber und Agentur.',
            highlight: 'Die drei häufigsten Entschädigungsarten: Agenturhonorar, Kommission/Provision (17,65% BSW/ASW-Satz) und Success Fee.'
          },
          {
            type: 'methodenbox',
            title: 'Kommunikationsbriefing',
            text: 'Das Kommunikationsbriefing ist das zentrale Instrument der Zusammenarbeit zwischen Auftraggeber und Agentur. Es enthält folgende Elemente: (1) Vollständige Auftraggeberadresse, (2) Aufgabe/Rahmenbedingungen (Projektbeschreibung, Abgrenzung, Timing), (3) Situationale Frage: Markt, Distribution, Käufer/Konsumenten, Beeinflusser, Konkurrenz, Vorschriften/Bedingungen, Informationslücken, (4) Ausrichtung/Soll-Positionen: Visionen, Marketingziele, Marketingstrategie, Potenzial, (5) Positionierung/Wettbewerbsvorteile (USP, SEP, UCP), (6) Kommunikationsplattform (Leitbild, Corporate Design, Visual Identity, Kommunikationsziele), (7) Eigene Umsetzungsideen, (8) Zeitplan/Termine, (9) Budgetrahmen, (10) Verantwortlichkeiten.'
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              { term: 'Kommunikationsagentur', def: 'Spezialisiertes Dienstleistungsunternehmen für die Beratung, Konzeption, Planung und Realisierung von Kommunikationsmassnahmen.' },
              { term: 'Full-Service-Werbeagentur', def: 'Werbeagentur, die das gesamte Massnahmenspektrum von Marktforschung bis Werbewirkungskontrolle anbietet.' },
              { term: 'Pitch', def: 'Wettbewerbspräsentation, bei der Agenturen Strategien und Ideen erarbeiten und dem Auftraggeber präsentieren.' },
              { term: 'Kommunikationsbriefing', def: 'Das zentrale Instrument der Zusammenarbeit \u2013 ein umfassendes Dokument mit Aufgabe, Situationsanalyse, Soll-Positionen und Rahmenbedingungen.' },
              { term: 'Agenturhonorar', def: 'Vergütung der Agentur nach Aufwand oder pauschal für erbrachte Dienstleistungen.' },
              { term: 'Mediaagentur', def: 'Spezialisierter Dienstleister für die Streuung von Werbeetats, Erstellung von Mediastrategien und -plänen sowie Mediaeinkauf.' },
              { term: 'Account Planning', def: 'Agenturbereich, der Briefings an die Kreativabteilung erstellt und für die Kontrolle der Kommunikationsstrategie zuständig ist.' }
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Die <strong>Zusammenarbeit mit Kommunikationsagenturen</strong> bietet sich an, wenn Spezialwissen und die fachlich bestmögliche Realisierung spezifischer Kommunikationsaufgaben gefordert sind.',
              'Es gibt spezialisierte Agenturen für beinahe jeden Fachbereich, z. B. <strong>Werbe-, PR-, Media-, Online-Kommunikations-, Event- und Sponsoring-Agenturen</strong>.',
              'Kommunikationsprojekte können dann erfolgreich geplant und umgesetzt werden, wenn diese möglichst gemeinsam und <strong>partnerschaftlich durch Auftraggeber und Agenturen</strong> entwickelt werden.',
              'Bei der <strong>Evaluation der Agenturen</strong> gibt es drei Wege: Direktwahl, Agenturpräsentation und Wettbewerbspräsentation (Pitch).',
              'Ein wichtiges Instrument der Zusammenarbeit ist das <strong>Kommunikationsbriefing</strong>, das alle relevanten Informationen für die Agentur strukturiert zusammenfasst.'
            ]
          }
        ]
      }
    }
  ],

  glossary: [
    { term: 'Kommunikation', def: 'Die Übermittlung von Informationen und Bedeutungsinhalten zum Zweck der Steuerung von Meinungen, Einstellungen, Erwartungen und Verhaltensweisen.' },
    { term: 'Kommunikationspolitik', def: 'Gesamtheit der Kommunikationsinstrumente und -massnahmen eines Unternehmens, um den relevanten Zielgruppen das Unternehmen und seine Leistungen darzustellen.' },
    { term: 'Kommunikationsmix', def: 'Die konkrete Kombination der eingesetzten Kommunikationsinstrumente zur Umsetzung der Kommunikationsstrategie.' },
    { term: 'Integrierte Kommunikation', def: 'Abstimmung aller Kommunikationsmassnahmen auf unterschiedlichen Ebenen, um ein einheitliches, authentisches Bild zu vermitteln. Man unterscheidet inhaltliche, formale und zeitliche Integration.' },
    { term: 'Corporate Identity', def: 'Identität und Selbstverständnis eines Unternehmens. Die strategisch geplante und operativ eingesetzte Selbstdarstellung nach innen und aussen.' },
    { term: 'Corporate Design', def: 'Das definierte visuelle Erscheinungsbild eines Unternehmens nach innen und aussen (Logo, Farbsystem, Bildsprache, Layout-System).' },
    { term: 'Corporate Communication', def: 'Gesamtheit der auf externe und interne Zielgruppen bezogenen, formalen Kommunikationsprozesse eines Unternehmens.' },
    { term: 'Corporate Behaviour', def: 'Das wirkliche, gelebte Verhalten eines Unternehmens, das durch die Anspruchsgruppen wahrnehmbar ist.' },
    { term: 'Werbung', def: 'Bezahlte, unpersönliche Kommunikation über Massenmedien (TV, Print, Online etc.) zur Bekanntmachung und Imagebildung.' },
    { term: 'PR (Public Relations)', def: 'Öffentlichkeitsarbeit: Aufbau, Pflege und Erhalt von Vertrauen, Goodwill und positivem Image bei internen und externen Zielgruppen.' },
    { term: 'Sponsoring', def: 'Förderung von Personen, Organisationen oder Veranstaltungen im Gegenzug für kommunikative Gegenleistungen.' },
    { term: 'Event Marketing', def: 'Planung, Organisation und Durchführung von Veranstaltungen zur emotionalen Ansprache der Zielgruppe.' },
    { term: 'Direct Marketing', def: 'Dialogmarketing: Direkte, personalisierte Kommunikation mit dem Ziel einer messbaren Reaktion (Response).' },
    { term: 'Verkaufsförderung', def: 'Kurzfristige Massnahmen zur Absatzsteigerung am Point of Sale (Promotionen, Aktionen, Displays).' },
    { term: 'Messe', def: 'Zeitlich begrenzte Veranstaltung zum Ausstellen und Vorführen von Produkten/Dienstleistungen.' },
    { term: 'Persönlicher Verkauf', def: 'Direkte, persönliche Kommunikation zwischen Verkäufer und Käufer, immer auf Dialog ausgerichtet.' },
    { term: 'Online-Kommunikation', def: 'Digitale Kommunikationsmassnahmen über Website, Social Media, E-Mail, Apps etc.' },
    { term: 'Social Media', def: 'Plattformen für nutzergenerierten Content und Interaktion (Facebook, Instagram, LinkedIn etc.).' },
    { term: 'Content Marketing', def: 'Erstellung und Verbreitung wertvoller Inhalte, um eine Zielgruppe anzuziehen und zu binden.' },
    { term: 'Zielgruppe', def: 'Definierte Gruppe von Personen oder Organisationen, die mit Kommunikationsmassnahmen angesprochen werden sollen.' },
    { term: 'Botschaft', def: 'Die zentrale Aussage, die mit einer Kommunikationsmassnahme vermittelt werden soll.' },
    { term: 'Kommunikationsziele', def: 'Festgelegte Wirkungen, die durch die Kommunikation bei den Zielgruppen erreicht werden sollen.' },
    { term: 'Mediaplanung', def: 'Planung des Einsatzes von Werbeträgern (Medien) nach Reichweite, Kosten, Zeitpunkt und Zielgruppe.' },
    { term: 'Reichweite', def: 'Anzahl der Personen, die mit einem Medium oder einer Kampagne erreicht werden.' },
    { term: 'Kontakt', def: 'Einmalige Begegnung einer Person mit einem Werbeträger oder Werbemittel.' },
    { term: 'GRP (Gross Rating Point)', def: 'Brutto-Reichweite in Prozent. GRP = Reichweite (%) x Durchschnittskontakte (OTS).' },
    { term: 'TKP (Tausenderkontaktpreis)', def: 'Kosten, um 1000 Personen der Zielgruppe mit einer Werbemassnahme zu erreichen.' },
    { term: 'AIDA-Modell', def: 'Wirkungsmodell der Werbung: Attention, Interest, Desire, Action.' },
    { term: 'Kommunikationsbudget', def: 'Gesamtbetrag, der für Kommunikationsmassnahmen in einer Periode zur Verfügung steht.' },
    { term: 'Briefing', def: 'Aufgabenbeschreibung an eine Agentur mit Informationen zu Ausgangslage, Zielen, Zielgruppen, Budget und Timing.' },
    { term: 'Kreativkonzept', def: 'Die kreative Umsetzungsidee einer Kommunikationsstrategie in konkrete Werbemittel.' },
    { term: 'Copy Strategy', def: 'Strategische Vorgabe für die kreative Umsetzung: Consumer Benefit, Reason Why, Tonality.' },
    { term: 'USP', def: 'Unique Selling Proposition \u2013 einzigartiges Verkaufsversprechen, das ein Angebot von der Konkurrenz abhebt.' },
    { term: 'Corporate Culture', def: 'Alle Werte, Normen, Verhaltens- und Handlungsweisen, die den Charakter des Unternehmens prägen.' },
    { term: 'Corporate Image', def: 'Das Bild, das sich der Markt oder die Öffentlichkeit vom Unternehmen macht (Fremdbild).' },
    { term: 'Corporate Performance', def: 'Marktleistung des Unternehmens (Angebot, Fähigkeiten, vorhandene Ressourcen etc.).' },
    { term: 'Kundenlebenszyklus', def: 'Phasen der Kundenbeziehung: Akquisition (Recruitment), Bindung (Retention), Rückgewinnung (Recovery).' },
    { term: 'CRM (Customer Relationship Management)', def: 'Ganzheitlicher Ansatz der Unternehmensführung, der alle kundenbezogenen Prozesse integriert.' },
    { term: 'Cross-Selling', def: 'Dem Kunden werden ergänzende Leistungen angeboten.' },
    { term: 'Up-Selling', def: 'Dem Kunden werden höherwertige Leistungen verkauft.' },
    { term: 'PESO-Modell', def: 'Vier Grundarten von Content: Paid, Earned, Shared, Owned Media.' },
    { term: 'Owned Media', def: 'Unternehmenseigene Medien wie Website, Blog, Kundenmagazin.' },
    { term: 'Earned Media', def: 'Durch Dritte verdiente Medienpräsenz (Presseberichte, Empfehlungen, Blogartikel).' },
    { term: 'Storytelling', def: 'Erzählerische Vermittlung von Unternehmensbotschaften zur emotionalen Ansprache der Zielgruppe.' },
    { term: 'Relationship Marketing', def: 'Konzentration auf die Etablierung langfristiger Kundenbeziehungen mit bestehenden Kunden.' }
  ]
};
