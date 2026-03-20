window.BOOK_DATA = {
  id: 'kommunikation-instrumente',
  title: 'Instrumente der Kommunikation für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Kommunikation Instrumente',
  author: 'Markus Aerni',
  year: 2023,
  pages: 198,
  color: '#9333ea',
  chapters: [
    // ============================================================
    // KAPITEL 1: Mediawerbung - Definition und Merkmale (Ex 1-9)
    // ============================================================
    {
      id: 'ch1', num: 'Teil A – Kapitel 1', title: 'Mediawerbung - Definition und Merkmale',
      exercises: [
        {
          id: 1, type: 'text', q: 'Werbung und Emotionen',
          instruction: 'Die Werbung sollte nur auf die Emotionen der Zielgruppen ausgerichtet sein. Wie beurteilen Sie diese Aussage? (Rep 1, S.33)',
          questions: [
            {q: 'Beurteilen Sie die Aussage kritisch.', keywords: ['kommunikationsinstrument','emotionen','information','produktwissen','vermittelt','verkaufen'], minKeywords: 2}
          ],
          tips: ['Werbung hat mehrere Ziele, nicht nur emotionale Ansprache.','Denken Sie an die Vermittlung von Produktwissen.','Werbung dient auch der Information und dem Verkauf.'],
          reveal: ['Werbung ist ein Kommunikationsinstrument mit dem Ziel, Produkte zu verkaufen.','Entsprechend dürfen neben der reinen Ansprache der Emotionen auch der Aspekt der Information und die Vermittlung von Produktwissen nicht vergessen werden.']
        },
        {
          id: 2, type: 'match', q: 'Funktionen der Werbung',
          instruction: 'Nennen Sie 4 Funktionen der Werbung und ordnen Sie sie einem Beispiel zu. (Rep 2, S.33)',
          items: ['Bekanntmachung','Informieren','Image aufbauen','Ersatzbeschaffung sichern'],
          options: ['Neue Zahnpasta für Kinder wird durch Werbung bekannt gemacht.','Konsument wird über Merkmale, Eignung für Kinder, Preis und Verkaufsstellen informiert.','Image einer Zahnschmelz-aufbauenden und für Kinder geeigneten Zahnpasta wird gefördert.','Bestehende Kunden werden erinnert und zum erneuten Kauf animiert.'],
          correct: ['Neue Zahnpasta für Kinder wird durch Werbung bekannt gemacht.','Konsument wird über Merkmale, Eignung für Kinder, Preis und Verkaufsstellen informiert.','Image einer Zahnschmelz-aufbauenden und für Kinder geeigneten Zahnpasta wird gefördert.','Bestehende Kunden werden erinnert und zum erneuten Kauf animiert.'],
          tips: ['Bekanntmachung = etwas Neues bekanntmachen.','Informieren = Details über Merkmale, Preis etc.','Image = Positionierung und Imageaufbau.','Ersatzbeschaffung = Wiederkauf sichern.'],
          reveal: ['Bekanntmachung: Neue Zahnpasta wird bekannt gemacht.','Informieren: Konsument erhält Infos über Merkmale und Preis.','Image: Zahnschmelz-Image wird aufgebaut.','Ersatzbeschaffung: Bestehende Kunden werden erinnert.']
        },
        {
          id: 3, type: 'text', q: 'Zeitschriftenarten unterscheiden',
          instruction: 'Worin unterscheiden sich General-Interest-Zeitschriften, Zielgruppenzeitschriften und Special-Interest-Zeitschriften? Nennen Sie je ein Beispiel. (Rep 3, S.34)',
          questions: [
            {q: 'Erklären Sie die drei Arten und geben Sie Beispiele.', keywords: ['general','breit','publikum','zielgruppe','special','sachgebiet','hobby','teenager','illustrierte','gartenidee','anlagen'], minKeywords: 3}
          ],
          tips: ['General-Interest = breites Publikum, allgemeine Informationen.','Zielgruppenzeitschriften = spezielle Zielgruppe.','Special-Interest = bestimmtes Sachgebiet oder Hobby.'],
          reveal: ['General-Interest-Zeitschriften versorgen ein breites Publikum mit allgemeinen Informationen. Beispiel: Schweizer Illustrierte, Bunte.','Zielgruppenzeitschriften sprechen eine spezielle Zielgruppe an. Beispiel: Teenager, Bravo, Brigitte.','Special-Interest-Zeitschriften bieten spezielle Informationen für ein bestimmtes Sachgebiet. Beispiel: Anlagen, Gartenidee.']
        },
        {
          id: 4, type: 'match', q: 'Fachbegriffe Mediawerbung zuordnen',
          instruction: 'Ordnen Sie den Beschreibungen die zutreffenden Begriffe zu. (Rep 4, S.34)',
          items: ['Individuelle werbliche Kommunikation zwischen Anbietern und Nachfragern, meist in schriftlicher Form','Unternehmen mit verschiedenen Leistungsbereichen und gleichen Zielgruppen machen gemeinsame Werbung','Städte, Länder oder Regionen werden in einem Film gezeigt','Marketingform, die soziale Netzwerke ausnutzt, sodass sich Nachrichten epidemisch verbreiten'],
          options: ['Direktwerbung','Cross-Marketing','Country oder Location Placement','Virales Marketing'],
          correct: ['Direktwerbung','Cross-Marketing','Country oder Location Placement','Virales Marketing'],
          tips: ['Direktwerbung = persönlich, schriftlich.','Cross-Marketing = gemeinsame Werbung verschiedener Unternehmen.','Placement = Platzierung in Filmen.','Viral = epidemische Verbreitung.'],
          reveal: ['Individuelle werbliche Kommunikation = Direktwerbung.','Gemeinsame Werbung = Cross-Marketing.','In Filmen gezeigt = Country oder Location Placement.','Epidemische Verbreitung = Virales Marketing.']
        },
        {
          id: 5, type: 'text', q: 'Konsum- vs. Investitionsgüterwerbung',
          instruction: 'Worin unterscheidet sich die Werbung für Konsumgüter von derjenigen für Investitionsgüter? (Rep 5, S.34)',
          questions: [
            {q: 'Beschreiben Sie die Unterschiede.', keywords: ['emotional','rational','massenmedien','fachzeitschriften','lifestyle','produktorientiert','facts','direct'], minKeywords: 3}
          ],
          tips: ['Denken Sie an die Art der Ansprache.','Welche Medien werden jeweils eingesetzt?','Welche Argumente stehen im Vordergrund?'],
          reveal: ['Konsumgüter: Emotionale Ansprache, Lifestyle-Themen, Massenmedien (TV, Zeitungen, Aussenwerbung).','Investitionsgüter: Rationale, produktorientierte Ansprache, Facts and Figures, Fachzeitschriften und Direct Mails.']
        },
        {
          id: 6, type: 'tf', q: 'Richtig oder Falsch: Mediawerbung',
          statements: [
            {s: 'Mediawerbung ist das bekannteste und am breitesten wirkende Kommunikationsinstrument.', correct: true, feedback: 'Die klassische Werbung nimmt bei vielen Unternehmen den Grossteil des Budgets in Anspruch.'},
            {s: 'Die grössten Zuwachsraten verzeichnet der digitale Werbemarkt.', correct: true, feedback: 'Die digitale Werbung wächst am stärksten, während Printmedien rückläufig sind.'},
            {s: 'Werbung für Investitionsgüter ist typischerweise emotional und nutzt Massenmedien.', correct: false, feedback: 'Investitionsgüterwerbung ist rational und nutzt Fachzeitschriften/Direct Mails.'},
            {s: 'Virales Marketing nutzt soziale Netzwerke, sodass sich Nachrichten epidemisch verbreiten.', correct: true, feedback: 'Das ist die korrekte Definition von viralem Marketing.'}
          ],
          tips: ['Mediawerbung ist das sichtbarste Instrument.','Digital wächst, Print schrumpft.','Investitionsgüter = rationale Ansprache.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Richtig - digitaler Markt hat die grössten Zuwachsraten.','Aussage 3: Falsch - Investitionsgüterwerbung ist rational.','Aussage 4: Richtig - virale Verbreitung.']
        },
        {
          id: 7, type: 'mc', q: 'Funktionen der Werbung (MC)',
          instruction: 'Welche der folgenden ist KEINE typische Funktion der Mediawerbung?',
          options: [
            'Bekanntmachung',
            'Informieren',
            'Direkter Verkaufsabschluss am POS',
            'Image aufbauen'
          ],
          correct: 2,
          tips: ['Der direkte Verkaufsabschluss gehört eher zur Verkaufsförderung.','Werbung arbeitet über Massenmedien, nicht am POS direkt.','Bekanntmachung, Informieren und Image sind klassische Funktionen.'],
          reveal: ['Direkter Verkaufsabschluss am POS ist keine Funktion der Mediawerbung.','Dies gehört zur Verkaufsförderung (VKF).','Mediawerbung fokussiert auf Bekanntheit, Information und Image.']
        },
        {
          id: 8, type: 'fill', q: 'Lückentext: Mediawerbung',
          instruction: 'Ergänzen Sie die Lücken zur Mediawerbung.',
          segments: ['Werbung wirkt insbesondere bei guter ',{blank: true, answer: ['Zielgruppenkenntnis'], width: 180},', möglichst hoher ',{blank: true, answer: ['Präsenz','Omnipräsenz'], width: 140},', regelmässiger ',{blank: true, answer: ['Wiederholung'], width: 140},' und bei Einbezug von ',{blank: true, answer: ['Emotionen'], width: 140},'.'],
          tips: ['Es geht um die vier Erfolgsfaktoren der Werbewirkung.','Denken Sie an Zielgruppe, Sichtbarkeit, Frequenz und Gefühle.'],
          reveal: ['Zielgruppenkenntnis - man muss die Zielgruppe kennen.','Präsenz/Omnipräsenz - möglichst oft sichtbar sein.','Wiederholung - regelmässige Kontakte.','Emotionen - emotionale Ansprache wirkt.']
        },
        {
          id: 9, type: 'match', q: 'Medienarten zuordnen',
          instruction: 'Ordnen Sie die Beschreibungen den richtigen Medienarten zu.',
          items: ['Hohe Reichweite, emotionale Ansprache durch Bild und Ton, teuer','Hohe Druckqualität, längere Lebensdauer, zielgruppenspezifisch','Plakate, City-Light-Poster, hohe Präsenz im öffentlichen Raum','Präzises Targeting, messbar, Banner und Social Media'],
          options: ['Fernsehen','Zeitschriften','Aussenwerbung','Digitale Werbung'],
          correct: ['Fernsehen','Zeitschriften','Aussenwerbung','Digitale Werbung'],
          tips: ['TV = Bild und Ton, teuer.','Zeitschriften = hohe Druckqualität.','Aussenwerbung = öffentlicher Raum.','Digital = Targeting und Messbarkeit.'],
          reveal: ['Fernsehen: emotionale Ansprache, grösste Reichweite.','Zeitschriften: hohe Druckqualität, zielgruppenspezifisch.','Aussenwerbung: Plakate, Präsenz im öffentlichen Raum.','Digitale Werbung: präzises Targeting, messbar.']
        }
      ],
      learningData: {
        title: 'Mediawerbung - Definition und Merkmale',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale der Mediawerbung erklären.',
              'die Funktionen und die Wirkung der Werbung beschreiben.',
              'die Medien, ihre Eigenschaften und Einsatzgebiete erklären.',
              'Unterschiede zwischen Konsum- und Investitionsgüterwerbung benennen.'
            ]
          },
          {
            type: 'concept',
            title: '1.1 Definition der Mediawerbung',
            content: 'Mediawerbung (oder einfach kurz: Werbung) dient der gezielten und bewussten Beeinflussung des Menschen zu meist kommerziellen Zwecken. Der Werbetreibende spricht Bedürfnisse teils durch emotionale, teils durch informierende Werbebotschaften zum Zweck der Handlungsmotivation an. Werbung appelliert, involviert, vergleicht, macht betroffen oder neugierig. Werbung wird als eine von mehreren Funktionen der Marktkommunikation im Marketing verstanden.',
            highlight: 'Mediawerbung gehört zu den bekanntesten Kommunikationsinstrumenten und ist nach wie vor das am besten sichtbare und am breitesten wirkende Kommunikationsinstrument.'
          },
          {
            type: 'table',
            title: 'Ansätze der Werbung in verschiedenen Wissenschaften',
            headers: ['Wissenschaft', 'Ansatz'],
            rows: [
              ['Psychologie', 'Werbepsychologie: Wie Werbung gestaltet sein muss, um Aufmerksamkeit und Beeinflussung zu erzielen.'],
              ['Soziologie', 'Soziale Einflüsse auf das Konsumverhalten (Familie, Freunde, Meinungsführer).'],
              ['Betriebswirtschaftslehre', 'Werbekostenrechnung und Werbeerfolgskontrolle, Werbewirkung und Effizienz.'],
              ['Kommunikationswissenschaft', 'Kommunikationsinhalte (Pretest) und Werbeerfolgskontrolle (Posttest), Medienanalyse.']
            ]
          },
          {
            type: 'concept',
            title: '1.2 Funktionen und Wirkung der Mediawerbung',
            content: 'Die Mediawerbung ist innerhalb des Kommunikationsmix das relevanteste Kommunikationsinstrument. Wie kein anderes Instrument ist die Werbung geeignet, Werte wie Bekanntheit, Produktwissen, Einstellungsentwicklung und Verhaltensbeeinflussung fast zeitgleich zu steuern. Typische Funktionen der Werbung sind: Bekanntmachung, Informieren, Image aufbauen, Ersatzbeschaffung sichern, Motivierung und Distributionsaufbau.',
            highlight: 'Werbung wirkt insbesondere bei guter Zielgruppenkenntnis, möglichst hoher Präsenz (Omnipräsenz), regelmässiger Wiederholung und bei Einbezug von Emotionen.'
          },
          {
            type: 'table',
            title: '1.3 Medien - Übersicht',
            headers: ['Medium', 'Merkmale'],
            rows: [
              ['Zeitungen', 'Hohe Reichweite, regional steuerbar, kurze Vorlaufzeit, relativ günstig.'],
              ['Zeitschriften', 'Hohe Druckqualität, längere Lebensdauer, zielgruppenspezifisch.'],
              ['Fernsehen', 'Grösste Reichweite, emotionale Ansprache durch Bild und Ton, teuer.'],
              ['Radio', 'Hohe Reichweite, günstig, Begleitmedium, keine visuelle Komponente.'],
              ['Kinowerbung', 'Hohe Aufmerksamkeit, junges Publikum, eingeschränkte Reichweite.'],
              ['Aussenwerbung', 'Plakate, City-Light-Poster: hohe Präsenz im öffentlichen Raum.'],
              ['Digitale Werbung', 'Banner, Social Media, Suchmaschinen: präzises Targeting, messbar.'],
              ['Direktwerbung', 'Persönliche Ansprache, hohe Individualisierung, messbare Response.']
            ]
          },
          {
            type: 'concept',
            title: '1.4 Konsum- vs. Investitionsgüterwerbung',
            content: 'Die Werbung für Konsumgüter enthält eine emotionalere Ansprache, es werden häufiger Lifestyle-Themen und unterschwellige Bedürfnisse angesprochen. Meist werden Massenmedien eingesetzt. Die Werbung für Investitionsgüter ist rationaler, produktorientierter abgefasst. Facts and Figures zählen, es werden selten übertriebene Werbeversprechen abgegeben. Meist werden Fachzeitschriften und Direct Mails als Kommunikationsinstrumente eingesetzt.',
            highlight: 'Sonderformen der Werbung sind Cross-Marketing, Mundpropaganda, virales Marketing, Product Placement und Testimonials.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Mediawerbung ist das bekannteste und am breitesten wirkende Kommunikationsinstrument.',
              'Werbung wirkt bei: guter Zielgruppenkenntnis, hoher Präsenz, Wiederholung und Emotionen.',
              'Funktionen: Bekanntmachung, Informieren, Image aufbauen, Ersatzbeschaffung sichern.',
              'Medien: Zeitungen, Zeitschriften, TV, Radio, Kino, Aussen, Digital, Direkt.',
              'Konsumgüterwerbung = emotional, Massenmedien. Investitionsgüterwerbung = rational, Fachmedien.',
              'Sonderformen: Cross-Marketing, Virales Marketing, Product Placement, Testimonials.',
              'General-Interest-Zeitschriften: breites Publikum. Zielgruppenzeitschriften: spezielle Zielgruppe. Special-Interest: Fachgebiet.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Werbung</strong> ist ein Instrument der Marketingkommunikation. Sie befasst sich mit dem Transport von Werbebotschaften an eine Zielgruppe im Rahmen eines Unternehmens zur Erreichung eines bestimmten Ergebnisses.',
              'Typische <strong>Funktionen</strong> der Werbung sind beispielsweise die Bekanntmachung, die Imageförderung, die Motivierung oder der Distributionsaufbau.',
              'Formen von <strong>Medien</strong> sind Zeitungen, Zeitschriften, Fernsehwerbung, Radiowerbung, Kinowerbung, digitale Werbung, Direktwerbung und Aussenwerbung.',
              '<strong>Sonderformen der Werbung</strong> sind Cross-Marketing, Mundpropaganda, virales Marketing, Product Placement und Testimonials.',
              'Je nachdem, ob ein <strong>Konsum- oder ein Investitionsgut</strong> beworben wird, unterscheiden sich Strategieansätze und Zielgruppenansprache der Werbung stark.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Mediawerbung', def: 'Gezielte und bewusste Beeinflussung des Menschen zu kommerziellen Zwecken über Massenmedien.'},
              {term: 'Werbewirkung', def: 'Die Wirkung von Werbemassnahmen auf Bekanntheit, Einstellung und Verhalten der Zielgruppe.'},
              {term: 'Cross-Marketing', def: 'Unternehmen mit verschiedenen Leistungsbereichen und gleichen oder ähnlichen Zielgruppen machen gemeinsame Werbung.'},
              {term: 'Product Placement', def: 'Städte, Länder oder Regionen (bzw. Produkte) werden gezielt in einem Film, einer Serie etc. platziert.'},
              {term: 'Virales Marketing', def: 'Marketingform, die soziale Netzwerke und Medien ausnutzt, sodass sich Nachrichten epidemisch verbreiten.'},
              {term: 'Direktwerbung', def: 'Individuelle werbliche Kommunikation zwischen Anbietern und Nachfragern, meist in schriftlicher Form.'},
              {term: 'Konsumgüterwerbung', def: 'Emotionale Ansprache, Lifestyle-Themen, Massenmedien.'},
              {term: 'Investitionsgüterwerbung', def: 'Rationale, produktorientierte Ansprache, Fachzeitschriften und Direct Mails.'}
            ]
          }
        ]
      }
    },

    // ============================================================
    // KAPITEL 2: Werbekonzept (Ex 10-19)
    // ============================================================
    {
      id: 'ch2', num: 'Teil A – Kapitel 2', title: 'Werbekonzept',
      exercises: [
        {
          id: 10, type: 'match', q: 'Segmentierungskriterien der Werbung',
          instruction: 'Nennen Sie drei Segmentierungskriterien und geben Sie je zwei Beispiele. (Rep 6, S.60)',
          items: ['Demografisch','Sozioökonomisch','Psychologisch'],
          options: ['Alter, Wohnort','Ausbildung, Berufstätigkeit','Meinung über das Produkt, Konsumtyp (sparsam, hedonistisch)'],
          correct: ['Alter, Wohnort','Ausbildung, Berufstätigkeit','Meinung über das Produkt, Konsumtyp (sparsam, hedonistisch)'],
          tips: ['Demografisch = persönliche Grunddaten.','Sozioökonomisch = wirtschaftliche/soziale Stellung.','Psychologisch = Einstellungen und Werte.'],
          reveal: ['Demografisch: Alter, Wohnort.','Sozioökonomisch: Ausbildung, Berufstätigkeit.','Psychologisch: Meinung über das Produkt, Konsumtyp.']
        },
        {
          id: 11, type: 'match', q: 'Werbeziele klassifizieren (KOG/AFF/KON)',
          instruction: 'Ordnen Sie die Werbeziele den drei Gruppen zu: KOG (kognitiv), AFF (affektiv), KON (konativ). (Rep 7, S.60)',
          items: ['Einstellung zu Marken, Produkten und Unternehmen','Kaufabsichten','Kenntnis von Marken, Leistungen und Produkten','Vertrauensbildung','Förderung des Wiederverkaufs','Erinnerung von Markennamen, Preisen, Slogans','Kundenbindung','Emotionales Erleben der Marke'],
          options: ['AFF','KON','KOG'],
          correct: ['AFF','KON','KOG','AFF','KON','KOG','KON','AFF'],
          tips: ['KOG = Wissen, Kenntnis, Erinnerung.','AFF = Einstellung, Emotionen, Vertrauen.','KON = Handlung, Kauf, Wiederverkauf, Bindung.'],
          reveal: ['Einstellung = AFF (affektiv).','Kaufabsichten = KON (konativ).','Kenntnis = KOG (kognitiv).','Vertrauensbildung = AFF.','Förderung Wiederverkauf = KON.','Erinnerung = KOG.','Kundenbindung = KON.','Emotionales Erleben = AFF.']
        },
        {
          id: 12, type: 'text', q: 'Motivations- vs. psychoanalytische Strategie',
          instruction: 'Worin unterscheiden sich die Motivationsstrategie und die psychoanalytische Strategie? (Rep 8, S.60)',
          questions: [
            {q: 'Erklären Sie den Unterschied.', keywords: ['motivationsstrategie','verbrauchermotive','lifestyle','psychoanalytische','unterbewusstsein','konfliktsituation','intensiv'], minKeywords: 3}
          ],
          tips: ['Motivationsstrategie = Verbrauchermotive ansprechen.','Psychoanalytische Strategie = Unterbewusstsein ansprechen.','Die psychoanalytische Strategie ist eine besonders intensive Form.'],
          reveal: ['Motivationsstrategie: starke Verbrauchermotive (z.B. Lifestyle-Bedürfnisse) werden angesprochen.','Psychoanalytische Strategie: eine besonders intensive Motivationsstrategie, die stark auf das Unterbewusstsein abzielt. Sie soll eine psychologische Konfliktsituation lösen.']
        },
        {
          id: 13, type: 'match', q: 'Mediastrategie-Parameter',
          instruction: 'Ordnen Sie den Parametern der Mediastrategie die passende Frage zu. (Rep 9, S.60)',
          items: ['Reichweite','Kontakte','Intensität','Frequenz','Dominanz','Impact'],
          options: ['Wie viel Prozent der Zielgruppe erreichen wir?','Wie oft werden die Zielpersonen erreicht?','Wie viele Medien und wie häufig werden sie eingesetzt?','In welchen zeitlichen Abständen erfolgen wie viele Kontakte?','Welche Werbemittel, Grössen, Formate und Spotlängen werden eingesetzt?','Wie sind die Werbemittel gestaltet und wo sind sie platziert?'],
          correct: ['Wie viel Prozent der Zielgruppe erreichen wir?','Wie oft werden die Zielpersonen erreicht?','Wie viele Medien und wie häufig werden sie eingesetzt?','In welchen zeitlichen Abständen erfolgen wie viele Kontakte?','Welche Werbemittel, Grössen, Formate und Spotlängen werden eingesetzt?','Wie sind die Werbemittel gestaltet und wo sind sie platziert?'],
          tips: ['Reichweite = Prozent der Zielgruppe.','Kontakte = wie oft erreicht.','Intensität = Anzahl Medien und Häufigkeit.','Impact = Gestaltung und Platzierung.'],
          reveal: ['Reichweite: Wie viel Prozent der Zielgruppe erreichen wir?','Kontakte: Wie oft werden die Zielpersonen erreicht?','Intensität: Wie viele Medien und wie häufig?','Frequenz: In welchen zeitlichen Abständen?','Dominanz: Welche Werbemittel, Grössen, Formate?','Impact: Wie sind die Werbemittel gestaltet und platziert?']
        },
        {
          id: 14, type: 'fill', q: 'Werbekonzept 6 Schritte',
          instruction: 'Das Werbekonzept folgt den klassischen 6 Konzeptschritten. Ergänzen Sie.',
          segments: ['1. ',{blank: true, answer: ['Analyse'], width: 120},': Analyseergebnisse werden auf werbespezifische Aspekte vertieft. 2. ',{blank: true, answer: ['Zielgruppen'], width: 140},': Beschreibung nach demografischen, psychografischen und verhaltensbezogenen Merkmalen. 3. ',{blank: true, answer: ['Werbeziele'], width: 140},': kognitiv, affektiv und konativ. 4. ',{blank: true, answer: ['Werbestrategie'], width: 140},': Copystrategie mit Schlüsselelementen. 5. ',{blank: true, answer: ['Massnahmen'], width: 140},': Mediastrategie und Wahl der Werbemittel. 6. ',{blank: true, answer: ['Realisation, Budget, Kontrolle','Realisation'], width: 180},'.'],
          tips: ['Das Werbekonzept folgt dem gleichen 6-Schritte-Raster wie andere Konzepte.','Schritt 1 beginnt immer mit der Analyse.','Die Werbeziele werden in drei Gruppen eingeteilt.'],
          reveal: ['1. Analyse der werbespezifischen Aspekte.','2. Zielgruppen nach Segmentierungskriterien beschreiben.','3. Werbeziele: KOG, AFF, KON.','4. Werbestrategie mit Copystrategie.','5. Massnahmen: Mediastrategie und Werbemittelwahl.','6. Realisation, Budget und Kontrolle.']
        },
        {
          id: 15, type: 'text', q: 'Copystrategie erklären',
          instruction: 'Was ist die Copystrategie und welche Elemente enthält sie?',
          questions: [
            {q: 'Erklären Sie die Copystrategie.', keywords: ['botschaft','schlüsselelemente','tonality','stil','werbebotschaft','positionierung','kreation'], minKeywords: 2}
          ],
          tips: ['Die Copystrategie definiert die Werbebotschaft.','Sie enthält Schlüsselelemente, Botschaften und Stil/Tonalität.','Sie ist Teil der Werbestrategie (Schritt 4).'],
          reveal: ['Die Copystrategie wird im Rahmen der Werbestrategie entwickelt.','Sie definiert die Schlüsselelemente der Werbebotschaft.','Stil und Tonalität werden festgelegt.','Sie bildet die kreative Basis für die Umsetzung.']
        },
        {
          id: 16, type: 'tf', q: 'Richtig oder Falsch: Werbekonzept',
          statements: [
            {s: 'Die Werbestrategie ist eine mittel- bis langfristige Grundsatzentscheidung darüber, wie Werbebotschaften, -instrumente und -massnahmen eingesetzt werden sollen.', correct: true, feedback: 'Exakte Definition der Werbestrategie.'},
            {s: 'Bei den Werbezielen unterscheidet man kognitive, affektive und exekutive Ziele.', correct: false, feedback: 'Es sind kognitive, affektive und konative Ziele (nicht exekutive).'},
            {s: 'Basis zur Definition der Strategie stellt die Positionierung dar.', correct: true, feedback: 'Die Positionierung ist die Grundlage für die Strategiedefinition.'},
            {s: 'Intermedia-Selektion vergleicht verschiedene Werbeträger innerhalb einer Mediengattung.', correct: false, feedback: 'Intermedia-Selektion vergleicht verschiedene Mediengattungen. Intramedia-Selektion vergleicht innerhalb einer Gattung.'}
          ],
          tips: ['Drei Werbeziel-Gruppen: KOG, AFF, KON.','Intermedia = zwischen verschiedenen Mediengattungen.','Intramedia = innerhalb einer Mediengattung.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - konativ, nicht exekutiv.','Aussage 3: Richtig.','Aussage 4: Falsch - Intermedia = zwischen Gattungen.']
        },
        {
          id: 17, type: 'text', q: 'Briefing an die Agentur',
          instruction: 'Welche Punkte sollte ein Briefing an die Werbeagentur mindestens enthalten?',
          questions: [
            {q: 'Nennen Sie die wichtigsten Punkte eines Briefings.', keywords: ['markt','konkurrenz','zielgruppe','positionierung','budget','termin','zielsetzung','copyplattform'], minKeywords: 3}
          ],
          tips: ['Das Briefing enthält Angaben zum Unternehmen, Produkt, Markt.','Zielgruppe(n) und Positionierung müssen definiert sein.','Budget, Termine und Verantwortlichkeiten gehören dazu.'],
          reveal: ['Übrige Marktteilnehmer, insb. Konkurrenz.','Marketing-/Kommunikations-Zielsetzungen.','Zielgruppe(n) der Kommunikation.','Positionierung/kommunikative Problemstellung.','Copyplattform grob vorgeben.','Musts/Don\'ts: Vorgaben/Restriktionen.','Werbedauer/Termine.','Budget, Verantwortlichkeit.']
        },
        {
          id: 18, type: 'mc', q: 'Werbeziele (MC)',
          instruction: 'Welches Werbeziel ist konativ orientiert?',
          options: [
            'Kenntnis von Marken und Produkten',
            'Einstellung zu Marken und Unternehmen',
            'Förderung des Wiederverkaufs',
            'Erinnerung von Markennamen und Slogans'
          ],
          correct: 2,
          tips: ['Konativ = handlungsbezogen.','Kenntnis und Erinnerung = kognitiv.','Einstellung = affektiv.','Wiederverkauf = Handlung = konativ.'],
          reveal: ['Förderung des Wiederverkaufs ist konativ (handlungsbezogen).','Kenntnis und Erinnerung sind kognitiv (wissensbezogen).','Einstellung ist affektiv (gefühlsbezogen).']
        },
        {
          id: 19, type: 'match', q: 'Intermedia vs. Intramedia',
          instruction: 'Ordnen Sie die Beschreibungen dem richtigen Selektionsverfahren zu.',
          items: ['Vergleich zwischen verschiedenen Mediengattungen (z.B. TV vs. Print)','Vergleich innerhalb einer Mediengattung (z.B. Blick vs. 20 Minuten)'],
          options: ['Intermedia-Selektion','Intramedia-Selektion'],
          correct: ['Intermedia-Selektion','Intramedia-Selektion'],
          tips: ['Inter = zwischen verschiedenen Gattungen.','Intra = innerhalb einer Gattung.'],
          reveal: ['Intermedia-Selektion: Vergleich zwischen verschiedenen Mediengattungen.','Intramedia-Selektion: Vergleich innerhalb einer Mediengattung.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 3: Verkaufsförderung (Ex 20-28)
    // ============================================================
    {
      id: 'ch3', num: 'Teil A – Kapitel 3', title: 'Verkaufsförderung',
      exercises: [
        {
          id: 20, type: 'text', q: 'Funktionen der Verkaufsförderung',
          instruction: 'Nennen Sie drei Funktionen der Verkaufsförderung. (Rep 10, S.85)',
          questions: [
            {q: 'Drei Funktionen der VKF:', keywords: ['aktivierung','motivation','unterstützung','dynamisierung','diffusion','angewöhnung','ergänzung'], minKeywords: 3}
          ],
          tips: ['Die VKF hat sechs Hauptfunktionen.','Denken Sie an Aktivierung, Unterstützung, Dynamisierung.','Auch Diffusion, Angewöhnung und Ergänzung.'],
          reveal: ['Aktivierung und Motivation.','Unterstützung.','Dynamisierung.','Diffusion.','Angewöhnung.','Ergänzung.']
        },
        {
          id: 21, type: 'mc', q: 'Push- oder Pull-Instrument?',
          instruction: 'Ist die Verkaufsförderung ein Push- oder ein Pull-Instrument? (Rep 11, S.85)',
          options: [
            'Nur ein Push-Instrument',
            'Nur ein Pull-Instrument',
            'Primär ein Push-Instrument, wird aber meist mit Pull-Instrumenten kombiniert',
            'Weder Push noch Pull'
          ],
          correct: 2,
          tips: ['VKF ist primär Push - Produkte schnell in den Markt einführen.','Meist werden aber zusätzlich Pull-Massnahmen eingesetzt.','Z.B. Mediawerbung oder PR als Pull-Instrumente.'],
          reveal: ['Die Verkaufsförderung ist ein Push-Instrument.','Absatzfördernde Massnahmen werden über den Handel an die Konsumenten gerichtet.','Meist werden neben der VKF zusätzlich Pull-Instrumente eingesetzt (z.B. Mediawerbung, PR).']
        },
        {
          id: 22, type: 'text', q: 'Negative Auswirkungen der VKF',
          instruction: 'Kann sich die Verkaufsförderung negativ auf die Konsumenten auswirken? Nennen Sie ein Beispiel. (Rep 12, S.85)',
          questions: [
            {q: 'Begründen Sie mit Beispiel.', keywords: ['promotion','mehrumsatz','verlagerung','preisaktionen','image','negativ','kaufen','nur'], minKeywords: 2}
          ],
          tips: ['Manche Leute kaufen nur bei Promotionen.','Es kann zu einer zeitlichen Verlagerung der Umsätze kommen.','Häufige Preisaktionen können das Image negativ beeinflussen.'],
          reveal: ['Es gibt Leute, die gewisse Produkte nur kaufen, wenn es Promotionen dafür gibt.','Es kommt nicht zu einem Mehrumsatz, sondern nur zu einer zeitlichen Verlagerung der üblichen Umsätze.','Ausserdem können häufige Preisaktionen negativ auf das Image der Marke auswirken.']
        },
        {
          id: 23, type: 'match', q: 'VKF-Fachbegriffe zuordnen',
          instruction: 'Ordnen Sie den Erklärungen die zutreffenden Fachbegriffe zu. (Rep 13, S.86)',
          items: ['Zusatznutzen, den die VKF-Kampagne den anvisierten Zielgruppen bieten soll','Die Verpackung kann nach dem Verbrauch der Ware für einen anderen Zweck verwendet werden','Mittel und Massnahmen der Hersteller und des Handels, um den Verkauf am POS zu unterstützen','Zugabe innerhalb der Verpackung','Verbraucher senden nummerierte Warenbestellkarten ein; wenn sie Glück haben, gewinnen sie'],
          options: ['Sales Promotion Benefit','Zweitnutzenpackung','Merchandising','In-Pack','Sales Promotion Flair'],
          correct: ['Sales Promotion Benefit','Zweitnutzenpackung','Merchandising','In-Pack','Sales Promotion Flair'],
          tips: ['Benefit = Zusatznutzen.','Zweitnutzen = Verpackung wird wiederverwendet.','Merchandising = POS-Unterstützung.','In-Pack = Zugabe in der Verpackung.'],
          reveal: ['Sales Promotion Benefit: Zusatznutzen der VKF-Kampagne.','Zweitnutzenpackung: Verpackung wird für anderen Zweck wiederverwendet.','Merchandising: Massnahmen am POS zur Verkaufsunterstützung.','In-Pack: Zugabe innerhalb der Verpackung.','Sales Promotion Flair: Nummerierte Warenbestellkarten mit Gewinnchance.']
        },
        {
          id: 24, type: 'match', q: 'Produktlebenszyklus und VKF',
          instruction: 'Ordnen Sie die Aussagen zum Produktlebenszyklus zu. (Rep 14, S.86)',
          items: ['VKF wird stark eingesetzt','VKF sollte nicht durchgeführt werden'],
          options: ['Einführung und Sättigung','Entwicklung'],
          correct: ['Einführung und Sättigung','Entwicklung'],
          tips: ['In der Einführungsphase wird VKF stark eingesetzt.','In der Sättigungsphase ebenfalls.','In der Entwicklungsphase ist das Produkt noch nicht am Markt.'],
          reveal: ['VKF wird in der Einführungs- und Sättigungsphase stark eingesetzt.','In der Entwicklungsphase (Produkt ist noch nicht am Markt) sollte keine VKF durchgeführt werden.','Die Phasen des PLZ: Entwicklung, Einführung, Wachstum, Reife, Sättigung, Degeneration, Elimination.']
        },
        {
          id: 25, type: 'fill', q: 'Phasen des Produktlebenszyklus',
          instruction: 'Nennen Sie die sieben Phasen des Produktlebenszyklus.',
          segments: ['1. ',{blank: true, answer: ['Entwicklung'], width: 120},', 2. ',{blank: true, answer: ['Einführung'], width: 120},', 3. ',{blank: true, answer: ['Wachstum'], width: 120},', 4. ',{blank: true, answer: ['Reife'], width: 100},', 5. ',{blank: true, answer: ['Sättigung'], width: 120},', 6. ',{blank: true, answer: ['Degeneration'], width: 130},', 7. ',{blank: true, answer: ['Elimination'], width: 120}],
          tips: ['Der PLZ beginnt mit der Entwicklung.','Nach der Einführung folgen Wachstum und Reife.','Am Ende stehen Sättigung, Degeneration und Elimination.'],
          reveal: ['1. Entwicklung - Produktidee wird entwickelt.','2. Einführung - Markteinführung.','3. Wachstum - Umsatz steigt.','4. Reife - Wachstum verlangsamt sich.','5. Sättigung - Markt ist gesättigt.','6. Degeneration - Umsatz sinkt.','7. Elimination - Produkt wird vom Markt genommen.']
        },
        {
          id: 26, type: 'text', q: 'VKF-Zielgruppen',
          instruction: 'An welche vier Zielgruppen können sich VKF-Massnahmen richten?',
          questions: [
            {q: 'Nennen Sie die vier Zielgruppen der VKF.', keywords: ['mitarbeitende','absatzmittler','endverbraucher','beeinflusser','influencer','handel'], minKeywords: 3}
          ],
          tips: ['Die VKF richtet sich an interne und externe Zielgruppen.','Denken Sie an eigene Mitarbeitende und den Handel.','Auch Endverbraucher und Beeinflusser/Influencer gehören dazu.'],
          reveal: ['1. Eigene Mitarbeitende.','2. Absatzmittler (Handel).','3. Endverbraucher (Konsumenten).','4. Externe Beeinflusser, evtl. Influencer.']
        },
        {
          id: 27, type: 'mc', q: 'VKF-Kontrolle',
          instruction: 'Wie wird die Kontrolle bei der Verkaufsförderung durchgeführt?',
          options: [
            'Durch aufwendige Marktforschung mit Pre- und Posttests',
            'Die Kontrolle ist relativ einfach: Steigen die Absatzzahlen während des Aktionszeitraums?',
            'Kontrolle ist bei der VKF nicht möglich',
            'Nur durch externe Berater'
          ],
          correct: 1,
          tips: ['Die VKF-Kontrolle ist vergleichsweise einfach.','Man misst die Absatzzahlen während der Aktion.','Steigen die Absatzzahlen spürbar, war die Massnahme erfolgreich.'],
          reveal: ['Die Kontrolle der VKF ist relativ einfach.','Die Absatzzahlen müssen während der Aktion spürbar ansteigen.','Andere Ziele können mithilfe von Marktforschung überprüft werden.']
        },
        {
          id: 28, type: 'tf', q: 'VKF Richtig oder Falsch',
          statements: [
            {s: 'Verkaufsförderung sind zeitlich begrenzte Aktionen mit dem Ziel, durch zusätzliche Anreize Kommunikationsziele zu erreichen.', correct: true, feedback: 'Exakte Definition der VKF (Sales Promotion).'},
            {s: 'Die Verkaufsförderung ist ein Pull-Instrument.', correct: false, feedback: 'Die VKF ist primär ein Push-Instrument.'},
            {s: 'Merchandising umfasst Mittel und Massnahmen der Hersteller und des Handels, um den Verkauf am POS zu unterstützen.', correct: true, feedback: 'Korrekte Definition von Merchandising.'},
            {s: 'Bei der Strategiewahl ist zu beachten, dass die VKF nur positive Auswirkungen auf die Konsumenten haben kann.', correct: false, feedback: 'VKF kann auch negative Auswirkungen haben (z.B. Verlagerung statt Mehrumsatz, Imageschädigung).'}
          ],
          tips: ['VKF = zeitlich begrenzte Aktionen.','VKF ist ein Push-Instrument.','VKF kann auch negativ wirken.'],
          reveal: ['Aussage 1: Richtig - exakte Definition.','Aussage 2: Falsch - Push, nicht Pull.','Aussage 3: Richtig - Definition Merchandising.','Aussage 4: Falsch - auch negative Auswirkungen möglich.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 4: Event-Marketing (Ex 29-37)
    // ============================================================
    {
      id: 'ch4', num: 'Teil A – Kapitel 4', title: 'Event-Marketing',
      exercises: [
        {
          id: 29, type: 'text', q: 'Event-Marketing vs. Werbung: Zielgruppenmenge',
          instruction: 'Wird beim Event-Marketing eine kleinere, ähnlich grosse oder grössere Zielgruppenmenge angesprochen als bei der Werbung? (Rep 16, S.103)',
          questions: [
            {q: 'Begründen Sie Ihre Antwort.', keywords: ['kleiner','deutlich','events','kapazitätsbegrenzung','kostenintensiv','intensiver','nachhaltiger','homogen'], minKeywords: 3}
          ],
          tips: ['Events haben Kapazitätsbegrenzungen.','Nur ca. 10% aller Events sind auf 1000+ Teilnehmer ausgerichtet.','Event-Erlebnisse wirken intensiver und nachhaltiger.'],
          reveal: ['Die Zielgruppenmenge ist beim Event-Marketing deutlich kleiner als bei der Werbung.','Events unterliegen Kapazitätsbegrenzungen.','Nur ca. 10% aller Events sind auf 1000+ Teilnehmer ausgerichtet.','35% aller Events werden auf durchschnittlich 200 Teilnehmer ausgelegt.','Event-Erlebnisse wirken intensiver und nachhaltiger, wenn die Zielgruppen nicht zu umfangreich und möglichst homogen ausgewählt sind.']
        },
        {
          id: 30, type: 'match', q: 'Event-Strategie-Typen',
          instruction: 'Ordnen Sie den Beschreibungen die zutreffenden Strategie-Typen zu. (Rep 17, S.103)',
          items: ['Die Zielgruppen werden alive mit einem Produkt konfrontiert.','Neue, bisher nicht bearbeitete Zielgruppen werden angesprochen.','Eine Marke soll stärker positioniert werden.','Ein neues Produkt wird bei bestimmten Zielgruppen eingeführt.'],
          options: ['Erlebnisstrategie','Zielgruppenerschöpfungsstrategie','Imageprofilierungsstrategie','Einführungsstrategie'],
          correct: ['Erlebnisstrategie','Zielgruppenerschöpfungsstrategie','Imageprofilierungsstrategie','Einführungsstrategie'],
          tips: ['Erlebnis = alive, direkt erleben.','Zielgruppenerschöpfung = neue Zielgruppen.','Imageprofilierung = Marke stärker positionieren.','Einführung = neues Produkt einführen.'],
          reveal: ['Erlebnisstrategie: Zielgruppen erleben das Produkt live.','Zielgruppenerschöpfungsstrategie: Neue Zielgruppen werden erschlossen.','Imageprofilierungsstrategie: Marke wird stärker positioniert.','Einführungsstrategie: Neues Produkt wird eingeführt.']
        },
        {
          id: 31, type: 'match', q: 'Event-Kostenarten',
          instruction: 'Geben Sie je ein Beispiel für die aufgeführten Kostenarten beim Event-Budget. (Rep 18, S.103)',
          items: ['Planungskosten','Vorbereitungskosten','Durchführungskosten','Nachbearbeitungskosten','Wirkungsmessungen'],
          options: ['Personalkosten','Kosten für Einladungen zum Event','Raummiete, Honorar für Referenten','Nachfassaktionen an Leute, die nicht teilnehmen konnten','Befragungen'],
          correct: ['Personalkosten','Kosten für Einladungen zum Event','Raummiete, Honorar für Referenten','Nachfassaktionen an Leute, die nicht teilnehmen konnten','Befragungen'],
          tips: ['Planungskosten = Personalaufwand für die Planung.','Vorbereitungskosten = Einladungen etc.','Durchführungskosten = Location, Referenten.','Nachbearbeitung = Follow-up.'],
          reveal: ['Planungskosten: Personalkosten für die Eventplanung.','Vorbereitungskosten: Kosten für Einladungen.','Durchführungskosten: Raummiete, Honorar.','Nachbearbeitungskosten: Nachfassaktionen.','Wirkungsmessungen: Befragungen der Teilnehmer.']
        },
        {
          id: 32, type: 'fill', q: 'Event-Marketing Definition',
          instruction: 'Ergänzen Sie die Definition von Event-Marketing.',
          segments: ['Event-Marketing ist die ',{blank: true, answer: ['zielgerichtete'], width: 140},' und ',{blank: true, answer: ['systematische'], width: 140},' Planung von Veranstaltungen als ',{blank: true, answer: ['absatzpolitisches'], width: 160},' Instrument oder image- und meinungsbildungsfördernde Massnahme zur Durchsetzung der ',{blank: true, answer: ['Unternehmensziele'], width: 170},' im Rahmen der Marketingkommunikation.'],
          tips: ['Event-Marketing ist zielgerichtet und systematisch.','Es ist ein absatzpolitisches Instrument.','Es dient der Durchsetzung der Unternehmensziele.'],
          reveal: ['Zielgerichtet: mit klarem Ziel.','Systematisch: nach Plan und Struktur.','Absatzpolitisches Instrument: dient dem Absatz.','Unternehmensziele: im Rahmen der Marketingkommunikation.']
        },
        {
          id: 33, type: 'match', q: 'Event-Arten unterscheiden',
          instruction: 'Ordnen Sie die Event-Arten der richtigen Kategorie zu.',
          items: ['Produktpräsentation, Hauptversammlung','Gala-Abend, Konzert, Showveranstaltung','Outdoor-Event, Sportveranstaltung, Abenteuer-Event'],
          options: ['Arbeitsorientierte Veranstaltungen','Infotainment-Aktivitäten','Freizeitorientierte Aktivitäten'],
          correct: ['Arbeitsorientierte Veranstaltungen','Infotainment-Aktivitäten','Freizeitorientierte Aktivitäten'],
          tips: ['Events werden in drei Kategorien unterteilt.','Arbeitsorientiert = sachlich, beruflich.','Infotainment = Information + Entertainment.','Freizeitorientiert = Spass und Erlebnis.'],
          reveal: ['Arbeitsorientiert: Produktpräsentationen, Hauptversammlungen.','Infotainment: Gala-Abende, Konzerte, Showveranstaltungen.','Freizeitorientiert: Outdoor-Events, Sportveranstaltungen.']
        },
        {
          id: 34, type: 'text', q: 'Event-Zielgruppen',
          instruction: 'Welche Zielgruppen gibt es beim Event-Marketing?',
          questions: [
            {q: 'Nennen Sie die Event-Zielgruppen.', keywords: ['mitarbeitende','absatzmittler','bestehende','potenzielle','kunden','opinion','leader','medien'], minKeywords: 3}
          ],
          tips: ['Event-Zielgruppen sind interne und externe Gruppen.','Denken Sie auch an Meinungsführer und Medien.'],
          reveal: ['Eigene Mitarbeitende.','Absatzmittler.','Bestehende Kunden.','Potenzielle Kunden.','Opinion Leader und Medien.']
        },
        {
          id: 35, type: 'mc', q: 'Event-Marketing Ziele',
          instruction: 'Was sind die Hauptziele des Event-Marketings?',
          options: [
            'Ausschliesslich kurzfristige Umsatzsteigerung',
            'Vermittlung von Schlüsselinformationen, emotionales Erleben, Kundenbindung',
            'Nur Imagebildung, kein Verkauf',
            'Ausschliesslich Mitarbeitermotivation'
          ],
          correct: 1,
          tips: ['Event-Marketing hat emotionale und informative Ziele.','Schlüsselinformationen werden vermittelt.','Emotionales Erleben und Kundenbindung stehen im Vordergrund.'],
          reveal: ['Ziele des Event-Marketings sind die Vermittlung von Schlüsselinformationen über Produkte.','Emotionales Erleben von Unternehmen, Marken und Produkten.','Festigung der Kundenbindung.']
        },
        {
          id: 36, type: 'tf', q: 'Massnahmenplanung beim Event',
          statements: [
            {s: 'Die Massnahmenplanung beim Event umfasst Massnahmen vor, während und nach dem Event.', correct: true, feedback: 'Alle drei Phasen müssen geplant werden.'},
            {s: 'Beim Event-Marketing ist die Nachbearbeitung unwichtig.', correct: false, feedback: 'Die Nachbearbeitung (Follow-up) ist essenziell für den Erfolg.'},
            {s: 'Events werden in arbeitsorientierte Veranstaltungen, Infotainment und freizeitorientierte Aktivitäten unterteilt.', correct: true, feedback: 'Dies sind die drei Event-Kategorien.'}
          ],
          tips: ['Massnahmenplanung = vor, während und nach dem Event.','Nachbearbeitung ist wichtig für den Erfolg.','Drei Event-Kategorien.'],
          reveal: ['Aussage 1: Richtig - drei Phasen.','Aussage 2: Falsch - Nachbearbeitung ist essenziell.','Aussage 3: Richtig - drei Kategorien.']
        },
        {
          id: 37, type: 'text', q: 'Event-Konzept erstellen',
          instruction: 'Ein Event-Marketing-Konzept folgt den bekannten Konzeptschritten. Welche sind das?',
          questions: [
            {q: 'Nennen Sie die Konzeptschritte für ein Event.', keywords: ['situationsanalyse','zielgruppen','ziele','strategie','massnahmen','budget','kontrolle','realisation'], minKeywords: 4}
          ],
          tips: ['Ein Event-Konzept folgt dem gleichen 6-Schritte-Raster.','Es beginnt mit der Situationsanalyse.','Budget, Realisation und Kontrolle gehören dazu.'],
          reveal: ['1. Situationsanalyse.','2. Zielgruppen definieren.','3. Ziele festlegen.','4. Strategie entwickeln.','5. Massnahmen planen.','6. Budget, Realisation und Kontrolle.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 5: Messen und Ausstellungen (Ex 38-45)
    // ============================================================
    {
      id: 'ch5', num: 'Teil A – Kapitel 5', title: 'Messen und Ausstellungen',
      exercises: [
        {
          id: 38, type: 'text', q: 'Messe vs. Ausstellung',
          instruction: 'Beschreiben Sie den Unterschied zwischen einer Messe und einer Ausstellung. (Rep 20, S.123)',
          questions: [
            {q: 'Erklären Sie die Unterschiede.', keywords: ['messe','handeln','verkaufen','fachpublikum','ausstellung','präsentation','visuell','interessenten','kundenkreis'], minKeywords: 3}
          ],
          tips: ['Messen: Handeln und Verkaufen.','Ausstellungen: Präsentation von Produkten.','Beide sind wichtige Kommunikationsinstrumente.'],
          reveal: ['Messen: Handeln und verkaufen. Traditionell für Fachpublikum, heute auch für Verbraucher.','Ausstellungen: Schwerpunkt auf visueller Darstellung. Bestimmte Artikel werden einem ausgewählten Kundenkreis vorgestellt.','Beide dienen als Plattform, um neue Kunden zu akquirieren und bestehende Kontakte zu intensivieren.']
        },
        {
          id: 39, type: 'text', q: 'Ziele der Messeteilnahme',
          instruction: 'Nennen Sie mindestens fünf Ziele, die mit der Teilnahme an einer Messe erreicht werden können. (Rep 21, S.123)',
          questions: [
            {q: 'Nennen Sie mindestens 5 Messeziele.', keywords: ['geschäftskontakte','projekte','leistungsfähigkeit','bedürfnisse','markt','preisgestaltung','neukunden','absatzchancen','produktideen'], minKeywords: 4}
          ],
          tips: ['Denken Sie an Kontakte, Projekte und Leistungsfähigkeit.','Auch Marktinformationen und Preisgestaltung sind Ziele.','Neukunden und Produktideen gehören dazu.'],
          reveal: ['1. Vorhandene Geschäftskontakte entwickeln bzw. neue anbahnen.','2. Geschäfte und Projekte vorbereiten oder abschliessen.','3. Leistungsfähigkeit des Unternehmens darstellen.','4. Aktuelle Bedürfnisse und Erwartungen des Markts kennenlernen.','5. Produkt- und Sortimentsgestaltung am Kunden orientieren.','6. Preisgestaltung am Kunden und Markt orientieren.','7. Test der Absatzchancen neuer Produkte.','8. Aus Kundenbedürfnissen neue Produktideen entwickeln.','9. Persönliche Kontakte für verschiedene Zielsetzungen herstellen.','10. Aus Gesprächen Marktinformationen gewinnen.']
        },
        {
          id: 40, type: 'text', q: 'Dreiminutenerklärung und Alleinstellungsmerkmal',
          instruction: 'A) Was ist eine Dreiminutenerklärung? B) Was ist das Alleinstellungsmerkmal? (Rep 22, S.123)',
          questions: [
            {q: 'Erklären Sie beide Begriffe.', keywords: ['kurz','aussagefähig','unternehmen','leistungs','angebots','angebot','produkt','dienstleistung','eigenschaft','unterschied','wettbewerb'], minKeywords: 3}
          ],
          tips: ['Dreiminutenerklärung = kurze, prägnante Unternehmenspräsentation.','Alleinstellungsmerkmal = was unterscheidet uns von der Konkurrenz?'],
          reveal: ['A) Dreiminutenerklärung: Eine kurze, allgemeine und doch aussagefähige Aussage über das Unternehmen und seine Leistungs- und Angebotsmöglichkeiten.','B) Alleinstellungsmerkmal: Angebot, Produkte oder Dienstleistungen und ihre möglichen Anwendungen mit Eigenschaften, die sich von den Wettbewerbern der Branche deutlich abheben.']
        },
        {
          id: 41, type: 'match', q: 'Messearten unterscheiden',
          instruction: 'Ordnen Sie die Messearten den Kategorien zu.',
          items: ['Swissbau, Bauma','Comptoir Suisse, BEA','IGEHO, SIHH'],
          options: ['Fachmesse','Publikumsmesse','Fachmesse (international)'],
          correct: ['Fachmesse','Publikumsmesse','Fachmesse (international)'],
          tips: ['Es wird zwischen Publikums- und Fachmessen unterschieden.','Auch regionale vs. internationale Messen.','Fachmessen richten sich an Fachpublikum.'],
          reveal: ['Fachmessen: Swissbau, Bauma - für Fachbesucher.','Publikumsmessen: Comptoir Suisse, BEA - für breites Publikum.','Internationale Fachmessen: IGEHO, SIHH.']
        },
        {
          id: 42, type: 'fill', q: 'Drei Phasen der Ausstelleraktivität',
          instruction: 'Die Ausstelleraktivität lässt sich in drei Phasen unterteilen.',
          segments: ['Phase 1: ',{blank: true, answer: ['Vorbereiten'], width: 140},' – Phase 2: ',{blank: true, answer: ['Ausstellen'], width: 140},' – Phase 3: ',{blank: true, answer: ['Auswerten'], width: 140},'. Diese drei Phasen beschreiben einen Regelkreis, der Unternehmen mit Menschen und Märkten zusammenführt und verbindet.'],
          tips: ['Die drei Phasen beginnen mit der Vorbereitung.','Die zweite Phase ist die eigentliche Ausstellung.','Die dritte Phase ist die Auswertung.'],
          reveal: ['Phase 1: Vorbereiten - Planung und Standkonzept.','Phase 2: Ausstellen - die eigentliche Messe.','Phase 3: Auswerten - Nachbereitung und Erfolgskontrolle.']
        },
        {
          id: 43, type: 'match', q: 'Messekonzept-Schritte',
          instruction: 'Ein Messekonzept erstellen Sie entlang der bekannten Konzeptschritte. Ordnen Sie die Schritte.',
          items: ['1.','2.','3.','4.','5.','6.'],
          options: ['Situationsanalyse','Zielgruppen','Ziele','Massnahmen','Realisation und Budget','Kontrolle'],
          correct: ['Situationsanalyse','Zielgruppen','Ziele','Massnahmen','Realisation und Budget','Kontrolle'],
          tips: ['Das Messekonzept folgt dem gleichen 6-Schritte-Raster.','Es beginnt mit der Situationsanalyse.','Budget und Kontrolle am Schluss.'],
          reveal: ['1. Situationsanalyse.','2. Zielgruppen definieren.','3. Ziele festlegen.','4. Massnahmen planen.','5. Realisation und Budget.','6. Kontrolle.']
        },
        {
          id: 44, type: 'tf', q: 'Messen: Richtig oder Falsch',
          statements: [
            {s: 'Messen ermöglichen einen direkten Kontakt zu einer Vielzahl potenzieller Kunden innerhalb eines kurzen Zeitraums.', correct: true, feedback: 'Dies ist einer der Hauptvorteile von Messen.'},
            {s: 'Bei Messen gibt es keine Möglichkeit der Selbstdarstellung.', correct: false, feedback: 'Messen bieten gerade die Möglichkeit der Selbstdarstellung und des direkten Feedbacks.'},
            {s: 'Es wird zwischen Publikums- und Fachmessen unterschieden.', correct: true, feedback: 'Dies sind die zwei Hauptkategorien von Messen.'},
            {s: 'Die Nachbearbeitung nach einer Messe ist für den Messeerfolg unwichtig.', correct: false, feedback: 'Die Nachbearbeitung (Phase 3: Auswerten) ist essenziell.'}
          ],
          tips: ['Messen = direkter Kontakt, kurzer Zeitraum.','Möglichkeit der Selbstdarstellung ist ein Vorteil.','Nachbearbeitung ist wichtig.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Selbstdarstellung ist ein Kernvorteil.','Aussage 3: Richtig.','Aussage 4: Falsch - Nachbearbeitung ist essenziell.']
        },
        {
          id: 45, type: 'text', q: 'Standkonzept erstellen',
          instruction: 'Welche Themen sollte ein kurzes Standkonzept behandeln? (Rep 23, S.123)',
          questions: [
            {q: 'Nennen Sie die Elemente eines Standkonzepts.', keywords: ['standgestaltung','produktpräsentation','standaktivitäten','personaleinsatz','design'], minKeywords: 3}
          ],
          tips: ['Ein Standkonzept behandelt die Gestaltung des Standes.','Auch Produktpräsentation und Aktivitäten am Stand.','Personaleinsatz muss geplant werden.'],
          reveal: ['Standgestaltung: Design, Grösse, Aufteilung.','Produktpräsentation: Wie werden Produkte präsentiert?','Standaktivitäten: Mini-Events, Degustationen, Vorträge.','Personaleinsatz: Anzahl, Qualifikation, Briefing.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 6: Sponsoring (Ex 46-53)
    // ============================================================
    {
      id: 'ch6', num: 'Teil A – Kapitel 6', title: 'Sponsoring',
      exercises: [
        {
          id: 46, type: 'text', q: 'Gründe für Bedeutungszunahme des Sponsoring',
          instruction: 'Nennen Sie drei Gründe für die starke Bedeutungszunahme des Sponsoring. (Rep 24, S.137)',
          questions: [
            {q: 'Drei Gründe für das Wachstum des Sponsoring.', keywords: ['positionierung','emotionale','freizeit','kommunikationsbarrieren','zapping','steigende','mediakosten','akzeptanz','öffentlichkeit','exklusiv','beziehung'], minKeywords: 3}
          ],
          tips: ['Neue Positionierungsmöglichkeiten über emotionale Argumente.','Kommunikationsbarrieren können umgangen werden.','Steigende Mediakosten der klassischen Werbung.'],
          reveal: ['Neue Positionierungsmöglichkeiten über emotionale Argumente.','Ansprache der Konsumenten in der Freizeit.','Kommunikationsbarrieren (Werbebeschränkungen) und Zapping-Gefahr können umgangen werden.','Steigende Mediakosten der klassischen Werbung.','Sponsoring ermöglicht den Aufbau einer exklusiven Werbe- und Beziehungsplattform.','Positive Akzeptanz in der Öffentlichkeit.']
        },
        {
          id: 47, type: 'match', q: 'Sponsoringformen und Beispiele',
          instruction: 'Nennen Sie drei Sponsoringformen und geben Sie ein Beispiel dafür. (Rep 25, S.137)',
          items: ['Sportsponsoring','Kultursponsoring','Umweltsponsoring','Sozialsponsoring','Mediensponsoring'],
          options: ['Förderung von sportlichen Anlässen oder Mannschaften','Unterstützung von kulturellen Veranstaltungen, z.B. Konzerten','Unterstützung von Naturschutzorganisationen','Förderung des Gesundheitswesens','Unterstützung von TV-Sendungen'],
          correct: ['Förderung von sportlichen Anlässen oder Mannschaften','Unterstützung von kulturellen Veranstaltungen, z.B. Konzerten','Unterstützung von Naturschutzorganisationen','Förderung des Gesundheitswesens','Unterstützung von TV-Sendungen'],
          tips: ['Sportsponsoring ist die bekannteste Form.','Kultursponsoring unterstützt Kunst und Kultur.','Umweltsponsoring fördert Nachhaltigkeit.'],
          reveal: ['Sportsponsoring: Mannschaften, Events.','Kultursponsoring: Konzerte, Ausstellungen.','Umweltsponsoring: Naturschutz.','Sozialsponsoring: Gesundheit, Bildung.','Mediensponsoring: TV, Radio.']
        },
        {
          id: 48, type: 'text', q: 'Exklusiv-Sponsor vs. Hauptsponsor',
          instruction: 'A) Worin unterscheidet sich der Exklusiv-Sponsor vom Hauptsponsor? B) Sind mit dem Sponsoringbeitrag sämtliche Aufwände abgegolten? (Rep 26, S.137)',
          questions: [
            {q: 'Erklären Sie die Unterschiede und die Kostenfrage.', keywords: ['exklusiv','einzige','hauptsponsor','umfangreiche','rechte','co-sponsor','official supplier','nicht','zusätzlich'], minKeywords: 3}
          ],
          tips: ['Der Exklusiv-Sponsor ist der einzige Sponsor.','Der Hauptsponsor hat umfangreiche Rechte.','Neben dem Sponsoringbeitrag fallen weitere Kosten an.'],
          reveal: ['A) Der Exklusiv-Sponsor ist der einzige Sponsor, während der Hauptsponsor über umfangreiche Rechte am Event verfügt.','Der Co-Sponsor hat meist Branchenexklusivrechte. Der Official Supplier hat Exklusivrechte innerhalb einer Produktkategorie.','B) Nein. Neben dem Sponsoringbeitrag fallen zusätzliche Kosten an (z.B. Aktivierungsmassnahmen).']
        },
        {
          id: 49, type: 'fill', q: 'Sponsoring-Definition',
          instruction: 'Ergänzen Sie die Definition von Sponsoring.',
          segments: ['Sponsoring ist die Bereitstellung von ',{blank: true, answer: ['Geld'], width: 100},', ',{blank: true, answer: ['Sachmitteln'], width: 130},' oder ',{blank: true, answer: ['Dienstleistungen'], width: 150},' durch ein Unternehmen für eine Person, Gruppe oder Organisation gegen eine ',{blank: true, answer: ['Gegenleistung'], width: 140},'.'],
          tips: ['Sponsoring basiert auf dem Prinzip von Leistung und Gegenleistung.','Es können Geld, Sachmittel oder Dienstleistungen bereitgestellt werden.','Eine Gegenleistung (z.B. Werbemöglichkeiten) wird erwartet.'],
          reveal: ['Geld: finanzielle Unterstützung.','Sachmittel: z.B. Ausrüstung, Material.','Dienstleistungen: z.B. Know-how, Personal.','Gegenleistung: z.B. Logoplatzierung, Erwähnung.']
        },
        {
          id: 50, type: 'match', q: 'Sponsoring-Ziele klassifizieren',
          instruction: 'Die Sponsoring-Ziele unterteilen sich in drei Kategorien. Ordnen Sie zu.',
          items: ['Bekanntheit steigern, Image verbessern','Umsatz steigern, neue Märkte erschliessen','Kundenloyalität stärken, Beziehungen pflegen'],
          options: ['Unternehmenskommunikationsziele','Produkt-/Markenziele','Beziehungsziele'],
          correct: ['Unternehmenskommunikationsziele','Produkt-/Markenziele','Beziehungsziele'],
          tips: ['Sponsoring-Ziele: Unternehmenskommunikation, Produkt/Marke, Beziehungen.','Bekanntheit und Image = Kommunikation.','Umsatz = Markenziele.','Loyalität = Beziehungsziele.'],
          reveal: ['Unternehmenskommunikationsziele: Bekanntheit, Image.','Produkt-/Markenziele: Umsatz, neue Märkte.','Beziehungsziele: Kundenloyalität, Beziehungspflege.']
        },
        {
          id: 51, type: 'mc', q: 'Sponsoringstrategie',
          instruction: 'Was hilft bei der Definition der Sponsoringstrategie?',
          options: [
            'Das Affinitätenkonzept',
            'Die ABC-Analyse',
            'Das AIDA-Modell',
            'Die Balanced Scorecard'
          ],
          correct: 0,
          tips: ['Das Affinitätenkonzept hilft, passende Sponsoring-Engagements zu finden.','Es geht um die Übereinstimmung zwischen Sponsor und Gesponsertem.'],
          reveal: ['Das Affinitätenkonzept hilft bei der Definition der Sponsoringstrategie.','Es analysiert die Übereinstimmung (Affinität) zwischen Sponsor und Gesponsertem.']
        },
        {
          id: 52, type: 'tf', q: 'Sponsoring: Richtig oder Falsch',
          statements: [
            {s: 'Sponsoringmassnahmen werden idealerweise immer durch Massnahmen der Mediawerbung, Verkaufsförderung und Public Relations ergänzt.', correct: true, feedback: 'Sponsoring allein reicht nicht aus, es braucht flankierende Massnahmen.'},
            {s: 'Bei der Realisation des Sponsoring gilt es insbesondere rechtliche Bestimmungen zu berücksichtigen.', correct: true, feedback: 'Rechtliche Aspekte (Verträge, Markenrechte) sind wichtig.'},
            {s: 'Die Kontrolle beim Sponsoring misst nur die Umsatzwirkung.', correct: false, feedback: 'Kontrolliert werden auch Erinnerung, Imagewirkung und Verhaltenswirkung.'}
          ],
          tips: ['Sponsoring braucht flankierende Massnahmen.','Rechtliche Bestimmungen sind wichtig.','Kontrolle misst verschiedene Wirkungen.'],
          reveal: ['Aussage 1: Richtig - Sponsoring braucht Ergänzung.','Aussage 2: Richtig - rechtliche Aspekte beachten.','Aussage 3: Falsch - auch Erinnerung, Image, Verhalten werden gemessen.']
        },
        {
          id: 53, type: 'text', q: 'Sponsoring-Kontrollphase',
          instruction: 'Was wird in der Kontrollphase des Sponsoring gemessen?',
          questions: [
            {q: 'Nennen Sie die Kontrollbereiche.', keywords: ['exposition','erinnerung','imagewirkung','verhaltens','umsatzwirkung','botschaft'], minKeywords: 3}
          ],
          tips: ['In der Kontrollphase werden verschiedene Wirkungen gemessen.','Denken Sie an Exposition, Erinnerung und Image.','Auch Verhaltens- und Umsatzwirkung werden gemessen.'],
          reveal: ['Exposition der Sponsoring-Botschaft.','Erinnerungs- und Imagewirkung.','Verhaltens- und Umsatzwirkung.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 7: Dialogmarketing (Ex 54-62)
    // ============================================================
    {
      id: 'ch7', num: 'Teil A – Kapitel 7', title: 'Dialogmarketing',
      exercises: [
        {
          id: 54, type: 'text', q: 'Vorteile des Dialogmarketings',
          instruction: 'Nennen Sie zwei Vorteile des Dialogmarketings gegenüber der klassischen Werbung. (Rep 27, S.147)',
          questions: [
            {q: 'Zwei Vorteile des Dialogmarketings.', keywords: ['persönlich','individuell','dialog','beziehung','datenbank','cross-selling','kontaktiert','bekannte'], minKeywords: 2}
          ],
          tips: ['Dialogmarketing ermöglicht persönliche Ansprache.','Es baut eine Beziehung auf.','Datenbanken ermöglichen gezieltes Cross-Selling.'],
          reveal: ['Bekannte Personen können persönlich und individualisiert kontaktiert werden.','Es wird ein Dialog aufgebaut und daraus folgend eine Beziehung mit dem Kunden.','Die Kunden können persönlich ermittelt und in einer Datenbank erfasst werden.','Den Kunden können weitere, auf ihre Bedürfnisse abgestimmte Produkte angeboten werden (Cross-Selling).']
        },
        {
          id: 55, type: 'text', q: 'Nachteile des Dialogmarketings',
          instruction: 'Nennen Sie zwei Nachteile des Dialogmarketings gegenüber der klassischen Werbung. (Rep 28, S.147)',
          questions: [
            {q: 'Zwei Nachteile des Dialogmarketings.', keywords: ['rechtlich','datenschutz','stopp','kleber','response','schwach','einschränkung'], minKeywords: 2}
          ],
          tips: ['Datenschutz ist ein grosses Thema.','Stopp-Kleber nehmen zu.','Die Response-Rate ist oft schwach.'],
          reveal: ['Rechtliche Einschränkungen (Datenschutzgesetz).','Die Stopp-Kleber sind weiter zunehmend (ca. 45% gesamtschweizerisch).','Allgemein schwache Response-Rate.']
        },
        {
          id: 56, type: 'match', q: 'Dialogmarketing-Datenbank',
          instruction: 'Eine Dialogmarketing-Datenbank enthält vier Datenarten. Ordnen Sie die Kriterien den Datenarten zu. (Rep 29, S.147)',
          items: ['Bedarfsmenge, Bedarfszeitpunkte','Datum der letzten Bestellung, Kauffrequenz','Art des ersten Kontakts, Datum des ersten Interesses','Aktuelle Adressdaten','Kundenwert, Kundenpotenzial','Soziodemografische Daten','Durchschnittlicher Bestellwert, Beschwerden'],
          options: ['Potenzialdaten','Reaktionsdaten','Aktionsdaten','Grunddaten'],
          correct: ['Potenzialdaten','Reaktionsdaten','Aktionsdaten','Grunddaten','Potenzialdaten','Grunddaten','Reaktionsdaten'],
          tips: ['Grunddaten = Basisdaten wie Adresse, Demografie.','Aktionsdaten = Informationen über eigene Aktionen.','Reaktionsdaten = Kundenreaktionen und Kaufverhalten.','Potenzialdaten = Kundenwert und -potenzial.'],
          reveal: ['Bedarfsmenge/Bedarfszeitpunkte = Potenzialdaten.','Datum letzte Bestellung/Kauffrequenz = Reaktionsdaten.','Art/Datum des ersten Kontakts = Aktionsdaten.','Aktuelle Adressdaten = Grunddaten.','Kundenwert/Kundenpotenzial = Potenzialdaten.','Soziodemografische Daten = Grunddaten.','Durchschn. Bestellwert/Beschwerden = Reaktionsdaten.']
        },
        {
          id: 57, type: 'fill', q: 'Dialogmarketing Definition',
          instruction: 'Ergänzen Sie die Definition des Dialogmarketings.',
          segments: ['Dialogmarketing ist eine Kommunikationsform mit dem Ziel, eine ',{blank: true, answer: ['interaktive'], width: 120},' Beziehung zum ',{blank: true, answer: ['Kunden'], width: 100},' aufzubauen und zu pflegen. Es ermöglicht eine ',{blank: true, answer: ['individuelle','persönliche'], width: 130},' Ansprache und den Aufbau einer ',{blank: true, answer: ['Datenbank'], width: 120},'.'],
          tips: ['Dialogmarketing = interaktive Beziehung.','Individuelle Ansprache ist ein Kernmerkmal.','Datenbanken sind das Herzstück.'],
          reveal: ['Interaktive Beziehung zum Kunden.','Individuelle/persönliche Ansprache.','Aufbau und Pflege einer Datenbank.']
        },
        {
          id: 58, type: 'match', q: 'Strategien des Dialogmarketings',
          instruction: 'Ordnen Sie die Beschreibungen den Dialogmarketing-Strategien zu.',
          items: ['Neue Kunden gewinnen','Bestehende Kunden binden und Mehrwert bieten','Verlorene Kunden zurückgewinnen'],
          options: ['Akquisitionsstrategie','Bindungsstrategie','Rückgewinnungsstrategie'],
          correct: ['Akquisitionsstrategie','Bindungsstrategie','Rückgewinnungsstrategie'],
          tips: ['Akquisition = neue Kunden.','Bindung = bestehende Kunden.','Rückgewinnung = verlorene Kunden.'],
          reveal: ['Akquisitionsstrategie: Neue Kunden gewinnen.','Bindungsstrategie: Bestehende Kunden binden.','Rückgewinnungsstrategie: Verlorene Kunden zurückgewinnen.']
        },
        {
          id: 59, type: 'mc', q: 'Massnahmen des Dialogmarketings',
          instruction: 'Welches ist KEINE typische Massnahme des Dialogmarketings?',
          options: [
            'Direct Mail (adressiert)',
            'E-Mail-Marketing',
            'TV-Spot zur Primetime',
            'Telefonmarketing'
          ],
          correct: 2,
          tips: ['Dialogmarketing = individuelle, persönliche Kommunikation.','TV-Spots sind Massenwerbung, kein Dialog.','Direct Mail, E-Mail und Telefon sind typische DM-Instrumente.'],
          reveal: ['TV-Spot zur Primetime ist Massenwerbung (Mediawerbung), kein Dialogmarketing.','Direct Mail, E-Mail-Marketing und Telefonmarketing sind klassische DM-Massnahmen.']
        },
        {
          id: 60, type: 'tf', q: 'Dialogmarketing: Richtig oder Falsch',
          statements: [
            {s: 'Beim Dialogmarketing steht die individuelle, persönliche Ansprache im Vordergrund.', correct: true, feedback: 'Dies ist das Kernmerkmal des Dialogmarketings.'},
            {s: 'Eine Dialogmarketing-Datenbank enthält nur Adressdaten.', correct: false, feedback: 'Sie enthält Grunddaten, Aktionsdaten, Reaktionsdaten und Potenzialdaten.'},
            {s: 'Die Stopp-Kleber liegen gesamtschweizerisch bei ca. 45%.', correct: true, feedback: 'Ca. 45% der Briefkästen haben Stopp-Kleber.'},
            {s: 'Dialogmarketing hat keine rechtlichen Einschränkungen.', correct: false, feedback: 'Das Datenschutzgesetz stellt eine wichtige Einschränkung dar.'}
          ],
          tips: ['Individuelle Ansprache = Kernmerkmal.','Datenbank = vier Datenarten.','Datenschutz = wichtige Einschränkung.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - vier Datenarten.','Aussage 3: Richtig.','Aussage 4: Falsch - Datenschutzgesetz.']
        },
        {
          id: 61, type: 'text', q: 'Budget im Dialogmarketing',
          instruction: 'Welche Kostenfaktoren müssen beim Dialogmarketing-Budget berücksichtigt werden?',
          questions: [
            {q: 'Nennen Sie die Kostenfaktoren.', keywords: ['datenbank','adress','produktion','versand','porto','kreation','personal','response'], minKeywords: 3}
          ],
          tips: ['Denken Sie an Datenbank- und Adresskosten.','Produktion, Versand und Porto sind wichtig.','Auch Kreation und Personalkosten.'],
          reveal: ['Datenbankaufbau und -pflege.','Adressbeschaffung und -aktualisierung.','Kreation und Produktion der Werbemittel.','Versand und Porto.','Personalkosten für Bearbeitung.','Response-Handling.']
        },
        {
          id: 62, type: 'mc', q: 'Ziele des Dialogmarketings',
          instruction: 'Was ist das primäre Ziel des Dialogmarketings?',
          options: [
            'Möglichst viele Personen mit einer Botschaft zu erreichen',
            'Eine interaktive Beziehung zum Kunden aufzubauen und zu pflegen',
            'Das Image des Unternehmens in der Öffentlichkeit zu verbessern',
            'Möglichst günstig zu werben'
          ],
          correct: 1,
          tips: ['Dialog = interaktiver Austausch.','Es geht um Beziehungsaufbau, nicht um Massenreichweite.'],
          reveal: ['Das primäre Ziel des Dialogmarketings ist der Aufbau einer interaktiven Beziehung zum Kunden.','Es geht nicht um Massenreichweite (das wäre Mediawerbung).']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 8: Social Media (Ex 63-71)
    // ============================================================
    {
      id: 'ch8', num: 'Teil A – Kapitel 8', title: 'Social Media',
      exercises: [
        {
          id: 63, type: 'match', q: 'Vor- und Nachteile von Online-Medien',
          instruction: 'Ordnen Sie die Aussagen den Vor- oder Nachteilen von Online-Medien zu. (Rep 30, S.159)',
          items: ['Hohe Reichweite','Hohe Aufmerksamkeit, wenn richtig eingesetzt','Tiefe Kosten, wenn richtig eingesetzt','Funktionsweise ist nicht immer transparent','Hohe Kosten ohne Werbeeffekt, wenn falsch eingesetzt'],
          options: ['Vorteil','Nachteil'],
          correct: ['Vorteil','Vorteil','Vorteil','Nachteil','Nachteil'],
          tips: ['Online-Medien bieten hohe Reichweite und Aufmerksamkeit.','Kosten können tief sein, aber auch hoch bei falscher Nutzung.','Transparenz ist nicht immer gegeben.'],
          reveal: ['Vorteile: Hohe Reichweite, hohe Aufmerksamkeit, tiefe Kosten (wenn richtig).','Nachteile: Funktionsweise nicht immer transparent, hohe Kosten ohne Effekt bei falscher Nutzung.']
        },
        {
          id: 64, type: 'text', q: 'SEO und SEA Budget',
          instruction: 'Kommentieren Sie die Aussage: \u00abSEO und SEA sind wichtig, deshalb sollte das Budget etwa 50% zu 50% aufgeteilt sein.\u00bb (Rep 31, S.159)',
          questions: [
            {q: 'Ihre Kommentierung.', keywords: ['sinn','kombinieren','nicht','50','fixkosten','variabel','optimierung','klick','agentur','aufwand'], minKeywords: 3}
          ],
          tips: ['SEO und SEA sollten kombiniert werden.','Die optimale Budgetaufteilung ist nicht 50:50.','SEO = Fixkosten (Optimierung), SEA = variable Kosten (pro Klick).'],
          reveal: ['Es macht Sinn, SEO und SEA zu kombinieren.','Die optimale Budgetaufteilung muss jedoch nicht 50:50 sein.','SEO sind häufig Fixkosten (Optimierung der Website durch Mitarbeitende oder Agenturkosten).','SEA sind in der Regel variable Kosten (pro Klick).']
        },
        {
          id: 65, type: 'fill', q: 'Formen der digitalen Kommunikation',
          instruction: 'Die gängigen Formen der digitalen Kommunikation sind:',
          segments: ['1. Eigene ',{blank: true, answer: ['Website'], width: 120},', 2. ',{blank: true, answer: ['Suchmaschinenmarketing'], width: 200},' (SEO und SEA), 3. ',{blank: true, answer: ['Social-Media-Kommunikation','Social Media'], width: 200},', 4. ',{blank: true, answer: ['E-Mail-Marketing'], width: 160},', 5. ',{blank: true, answer: ['Newsletter'], width: 120},', 6. Banner-Werbung (',{blank: true, answer: ['Display-Werbung','Display'], width: 150},').'],
          tips: ['Es gibt sechs gängige Formen.','Die Website ist die Basis.','Suchmaschinenmarketing, Social Media und E-Mail sind zentral.'],
          reveal: ['1. Eigene Website.','2. Suchmaschinenmarketing SEO und SEA.','3. Social-Media-Kommunikation.','4. E-Mail-Marketing.','5. Newsletter.','6. Banner-Werbung (Display-Werbung).']
        },
        {
          id: 66, type: 'text', q: 'Social-Media-Strategie',
          instruction: 'Was muss bei der Umsetzung einer Social-Media-Strategie beachtet werden?',
          questions: [
            {q: 'Nennen Sie wichtige Aspekte.', keywords: ['zeit','aufwand','wandel','ausprobieren','content','zielgruppe','kanal','regelmässig'], minKeywords: 3}
          ],
          tips: ['Social-Media-Strategie erfordert Zeit und Aufwand.','Der schnelle Wandel verlangt Flexibilität.','Content und Kanalwahl sind entscheidend.'],
          reveal: ['Die Umsetzung erfordert Zeit und ist mit Aufwand verbunden.','Der schnelle Wandel in der Social-Media-Welt verlangt auch etwas Ausprobieren.','Content muss regelmässig und zielgruppengerecht erstellt werden.','Die richtige Kanalwahl ist entscheidend.']
        },
        {
          id: 67, type: 'text', q: 'Social-Media-Analyse (Fallbeispiel)',
          instruction: 'Ein KMU hat einen Instagram-Account mit 7 Abonnenten und postet monatlich ein Bild mit dem Spruch \u00abDamit wird\'s hygienisch sauber\u00bb. Formulieren Sie vier Fragen zur Situationsanalyse. (Rep 32, S.159)',
          questions: [
            {q: 'Vier Analysefragen formulieren.', keywords: ['instagram','richtig','kanal','funktioniert','inhalte','relevant','oft','wann','kunden','erreichen'], minKeywords: 3}
          ],
          tips: ['Fragen Sie, ob Instagram der richtige Kanal ist.','Fragen Sie nach der Funktionsweise von Instagram.','Fragen Sie nach den Inhalten und der Posting-Frequenz.'],
          reveal: ['1. Ist Instagram der richtige Social-Media-Kanal für uns?','2. Wie funktioniert Instagram?','3. Welche Inhalte sind für unsere Kunden relevant?','4. Wie oft und wann sollen wir unsere Beiträge posten, damit wir unsere Kunden erreichen?']
        },
        {
          id: 68, type: 'mc', q: 'Content Management System',
          instruction: 'Was ist ein Content Management System (CMS)?',
          options: [
            'Ein System zur Verwaltung von Kundenbeziehungen',
            'Eine Software zur Erstellung und Verwaltung von Website-Inhalten',
            'Ein Tool für die Mediaplanung',
            'Ein Instrument der Marktforschung'
          ],
          correct: 1,
          tips: ['CMS = Content Management System.','Es dient der Erstellung und Verwaltung von Inhalten.','Open-Source-CMS können kostenlos genutzt werden.'],
          reveal: ['Ein CMS ist eine Software zur Erstellung und Verwaltung von Website-Inhalten.','Es kann als Open-Source-Software kostenlos genutzt werden.','Beispiele: WordPress, Joomla, Drupal.']
        },
        {
          id: 69, type: 'text', q: 'Kontrollinstrumente der Online-Kommunikation',
          instruction: 'Welche Kontrollinstrumente stehen bei der Online-Kommunikation zur Verfügung?',
          questions: [
            {q: 'Nennen Sie Kontrollinstrumente.', keywords: ['besucher','verweildauer','kommentieren','weiterleiten','liken','abonnenten','newsletter','klick','google','analytics','aktivitäten'], minKeywords: 3}
          ],
          tips: ['Bei keiner anderen Kommunikationsform gibt es so viele Kontrollinstrumente.','Denken Sie an Website-Statistiken und Social-Media-Metriken.','Google Analytics ist ein bekanntes Tool.'],
          reveal: ['Besucherzahlen und Verweildauer auf der Website.','Kommentare, Likes, Shares und Weiterleitungen.','Newsletter-Abonnenten und Abmeldungen.','Klickraten der Online-Werbung.','Google Analytics als kostenloses Tool zur Messung von Aktivitäten.']
        },
        {
          id: 70, type: 'tf', q: 'Online-Medien: Richtig oder Falsch',
          statements: [
            {s: 'Die Bedeutung der herkömmlichen Medien nimmt zugunsten der Online-Medien ab.', correct: true, feedback: 'Online-Massnahmen werden für Unternehmen immer wichtiger.'},
            {s: 'Online-Kommunikation gehört zu den teuersten Kommunikationsformen.', correct: false, feedback: 'Online-Kommunikation ist eher günstig, aber zeitintensiv.'},
            {s: 'Google Analytics ist ein kostenloses Tool zur Messung der Online-Aktivitäten.', correct: true, feedback: 'Die Grundversion von Google Analytics ist kostenlos.'},
            {s: 'Cookies sind für das Targeting irrelevant.', correct: false, feedback: 'Cookies werden für die Kontrolle der Werbung und das Targeting verwendet.'}
          ],
          tips: ['Online wächst, herkömmlich schrumpft.','Online-Kommunikation ist günstig aber zeitintensiv.','Google Analytics ist kostenlos.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - günstig, aber zeitintensiv.','Aussage 3: Richtig.','Aussage 4: Falsch - Cookies sind wichtig fürs Targeting.']
        },
        {
          id: 71, type: 'match', q: 'Social-Media-Kanäle',
          instruction: 'Ordnen Sie die Beschreibungen den Social-Media-Kanälen zu.',
          items: ['Kurze Textnachrichten, Echtzeitkommunikation, 280 Zeichen','Foto- und Video-Sharing, visueller Content, Stories','Berufliches Netzwerk, B2B-Kommunikation','Grösstes soziales Netzwerk, breite Zielgruppe'],
          options: ['Twitter/X','Instagram','LinkedIn','Facebook'],
          correct: ['Twitter/X','Instagram','LinkedIn','Facebook'],
          tips: ['Twitter/X = kurze Texte.','Instagram = visueller Content.','LinkedIn = beruflich/B2B.','Facebook = breiteste Zielgruppe.'],
          reveal: ['Twitter/X: Kurze Nachrichten, Echtzeit.','Instagram: Fotos, Videos, Stories.','LinkedIn: B2B, berufliches Netzwerk.','Facebook: Grösstes Netzwerk, breite Zielgruppe.']
        }
      ],
      learningData: null
    },

    // ============================================================
    // KAPITEL 9: Kommunikationsforschung (Ex 72-80)
    // ============================================================
    {
      id: 'ch9', num: 'Teil B – Kapitel 9', title: 'Kommunikationsforschung',
      exercises: [
        {
          id: 72, type: 'text', q: 'Kommunikationswirkungsmessung',
          instruction: 'Beschreiben Sie das inhaltliche und zeitliche Vorgehen bei der Kommunikationswirkungsmessung vor dem Medieneinsatz. (Rep 33, S.179)',
          questions: [
            {q: 'Vorgehen beim Pretesting.', keywords: ['pretest','verdichtung','konzepte','konzeptboards','grafische','umsetzung','brainstorming','varianten','ausformulierung','folder','studiotests','tachistoskop','copy'], minKeywords: 3}
          ],
          tips: ['Pretesting findet vor der Lancierung statt.','Es geht um Verdichtung, Konkretisierung und Tests.','Instrumente: Folder Tests, Studiotests, Tachistoskop-Tests, Copy Tests.'],
          reveal: ['Pretesting - Vorgehen: Verdichtung, Konkretisierung von Ideen zu Konzepten, verbale und/oder optische Konzeptboards.','Die Entwicklung der kreativen Brainstorming-Phase wird verdichtet; Ausformulierung der tragfähigen Konzepte (1-2 Varianten).','Instrumente: Folder Tests, Studiotests, Tachistoskop-Tests, Copy Tests.','Messfaktoren: Stimulationsleistung, Informationsleistung, Persuasionsleistung.']
        },
        {
          id: 73, type: 'match', q: 'Kommunikationswirkungsmessverfahren zuordnen',
          instruction: 'Ordnen Sie die Begriffe dem entsprechenden Kommunikationswirkungsmessungsverfahren zu. (Rep 34, S.179)',
          items: ['Anzeige oder Packungsabbildungen in Sekundenbruchteile aufgelöst','Wiederholte Befragung gleichartiger, aber nicht identischer Zielgruppen','Beurteilung und Überprüfung der Erinnerungswerte (Posttest)','Liefert Indikatoren für die Einschätzung der Anzeigen-Wirkungsvoraussetzungen','Kontrolle des Lernerfolgs','Beurteilung unterschiedlicher Anzeigenentwürfe','Vergleich unterschiedlicher Spotkonzepte bzw. Spotlängen','Messung der Anzeigenerinnerung, Markenerinnerung, Bildelemente, Texterinnerung'],
          options: ['Tachistoskop-Test','Trackingstudie','Folder Test','Copy Test','Studiotest'],
          correct: ['Tachistoskop-Test','Trackingstudie','Folder Test','Copy Test','Trackingstudie','Folder Test','Studiotest','Folder Test'],
          tips: ['Tachistoskop = Sekundenbruchteile.','Trackingstudie = wiederholte Befragung.','Folder Test = Erinnerungswerte, Anzeigenbeurteilung.','Copy Test = Wirkungsvoraussetzungen.'],
          reveal: ['Tachistoskop-Test: Sekundenbruchteile.','Trackingstudie: Wiederholte Befragung nicht-identischer Zielgruppen.','Folder Test: Erinnerungswerte (Posttest) und Anzeigenbeurteilung.','Copy Test: Indikatoren für Wirkungsvoraussetzungen.','Studiotest: Vergleich von Spotkonzepten.']
        },
        {
          id: 74, type: 'text', q: 'MACH-Studien',
          instruction: 'Beschreiben Sie die wichtigsten Unterschiede der Mediastudien MACH Basic, MACH Consumer und MA Leader. (Rep 35, S.179)',
          questions: [
            {q: 'Unterschiede erklären.', keywords: ['basic','allgemeine','mediennutzung','bevölkerung','consumer','einkaufsgewohnheiten','leader','führungskräfte','funktion','unternehmen'], minKeywords: 4}
          ],
          tips: ['MACH Basic erforscht die allgemeine Mediennutzung.','MACH Consumer ergänzt um Einkaufsgewohnheiten.','MA Leader fokussiert auf Führungskräfte.'],
          reveal: ['MACH Basic: Erforscht die allgemeine Mediennutzung der Schweizer Bevölkerung insgesamt. Grundgesamtheit: 6 565 000 Personen.','MACH Consumer: Basierend auf MACH Basic werden die Einkaufsgewohnheiten erhoben und damit in Bezug zur allgemeinen Mediennutzung gebracht. Grundgesamtheit: 6 565 000 Personen.','MA Leader: Befragung der schweizerischen Führungskräfte, ergänzt mit Angaben zu deren Funktion in ihren Unternehmen. Grundgesamtheit: Leader 438 000, Top-Leader 151 000 Personen.']
        },
        {
          id: 75, type: 'match', q: 'Pre-Test vs. Post-Test',
          instruction: 'Ordnen Sie die Beschreibungen dem richtigen Verfahren zu.',
          items: ['Wird vor der Lancierung einer Kampagne durchgeführt','Wird nach der Durchführung einer Kampagne durchgeführt','Dient der Optimierung der Werbemittel','Dient der Erfolgskontrolle'],
          options: ['Pre-Test (Vortest)','Post-Test (Nachtest)'],
          correct: ['Pre-Test (Vortest)','Post-Test (Nachtest)','Pre-Test (Vortest)','Post-Test (Nachtest)'],
          tips: ['Pre-Test = vor der Lancierung.','Post-Test = nach der Durchführung.','Pre-Test optimiert, Post-Test kontrolliert.'],
          reveal: ['Pre-Test: Vor der Lancierung, dient der Optimierung.','Post-Test: Nach der Durchführung, dient der Erfolgskontrolle.']
        },
        {
          id: 76, type: 'fill', q: 'Prozess der Kommunikationsforschung',
          instruction: 'Ergänzen Sie die Schritte im Prozess der Kommunikationsforschung.',
          segments: ['1. Festlegung der ',{blank: true, answer: ['Forschungsziele','Ziele'], width: 160},'. 2. Bestimmung der ',{blank: true, answer: ['Methode','Forschungsmethode'], width: 140},'. 3. ',{blank: true, answer: ['Datenerhebung'], width: 140},'. 4. ',{blank: true, answer: ['Datenanalyse','Auswertung'], width: 140},'. 5. Präsentation der ',{blank: true, answer: ['Ergebnisse','Resultate'], width: 140},'.'],
          tips: ['Der Prozess beginnt mit der Festlegung der Forschungsziele.','Danach wird die Methode bestimmt.','Datenerhebung, -analyse und Präsentation folgen.'],
          reveal: ['1. Forschungsziele festlegen.','2. Methode bestimmen.','3. Datenerhebung durchführen.','4. Datenanalyse/Auswertung.','5. Präsentation der Ergebnisse.']
        },
        {
          id: 77, type: 'mc', q: 'Institutionen der Kommunikationsforschung',
          instruction: 'Welche Institution misst die Mediennutzung der Schweizer Bevölkerung?',
          options: [
            'Google Analytics',
            'WEMF/MACH',
            'Nielsen',
            'Comscore'
          ],
          correct: 1,
          tips: ['WEMF = Werbemedienforschung.','MACH = Media Analysis CH.','WEMF/MACH misst die Mediennutzung in der Schweiz.'],
          reveal: ['WEMF/MACH (Media Analysis CH) misst die Mediennutzung der Schweizer Bevölkerung.','MACH Basic, MACH Consumer, MA Leader sind die wichtigsten Studien.']
        },
        {
          id: 78, type: 'tf', q: 'Kommunikationsforschung: Richtig oder Falsch',
          statements: [
            {s: 'Der Effizienznachweis des Kommunikationsbudgets spielt angesichts knapper werdender Budgets eine immer grössere Rolle.', correct: true, feedback: 'Die Werbewirkungs- und Werbeerfolgskontrolle wird immer wichtiger.'},
            {s: 'Pre-Tests werden nach der Durchführung einer Kampagne eingesetzt.', correct: false, feedback: 'Pre-Tests werden VOR der Lancierung eingesetzt. Post-Tests nach der Durchführung.'},
            {s: 'Tachistoskop-Tests zeigen Anzeigen oder Packungsabbildungen in Sekundenbruchteilen.', correct: true, feedback: 'Der Tachistoskop-Test ist ein klassisches Verfahren.'},
            {s: 'Trackingstudien befragen immer die gleichen Personen.', correct: false, feedback: 'Trackingstudien befragen gleichartige, aber NICHT identische Zielgruppen (wiederholte Befragung).'}
          ],
          tips: ['Effizienznachweis wird immer wichtiger.','Pre-Test = vor, Post-Test = nach der Kampagne.','Trackingstudien = nicht-identische Zielgruppen.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Pre-Tests = vor der Lancierung.','Aussage 3: Richtig.','Aussage 4: Falsch - nicht identische, sondern gleichartige Zielgruppen.']
        },
        {
          id: 79, type: 'match', q: 'Messfaktoren der Kommunikationswirkung',
          instruction: 'Ordnen Sie die Messfaktoren den richtigen Beschreibungen zu.',
          items: ['Fähigkeit der Werbung, Aufmerksamkeit zu erzeugen','Fähigkeit der Werbung, Informationen zu vermitteln','Fähigkeit der Werbung, Einstellungen und Verhalten zu beeinflussen'],
          options: ['Stimulationsleistung','Informationsleistung','Persuasionsleistung'],
          correct: ['Stimulationsleistung','Informationsleistung','Persuasionsleistung'],
          tips: ['Stimulation = Aufmerksamkeit.','Information = Wissensvermittlung.','Persuasion = Überzeugung und Verhaltensänderung.'],
          reveal: ['Stimulationsleistung: Aufmerksamkeit erzeugen.','Informationsleistung: Informationen vermitteln.','Persuasionsleistung: Einstellungen und Verhalten beeinflussen.']
        },
        {
          id: 80, type: 'text', q: 'Werbewirkung und Werbeerfolg',
          instruction: 'Erklären Sie den Unterschied zwischen Werbewirkung und Werbeerfolg.',
          questions: [
            {q: 'Unterschied Werbewirkung vs. Werbeerfolg.', keywords: ['werbewirkung','wahrnehmung','erinnerung','einstellung','werbeerfolg','ökonomisch','umsatz','absatz','marktanteil','kommunikativ'], minKeywords: 3}
          ],
          tips: ['Werbewirkung = kommunikative Wirkung (Wahrnehmung, Erinnerung).','Werbeerfolg = ökonomische Wirkung (Umsatz, Absatz).','Werbewirkung ist die Voraussetzung für Werbeerfolg.'],
          reveal: ['Werbewirkung: Kommunikative Wirkung - wie wird die Werbung wahrgenommen, erinnert, wie beeinflusst sie Einstellungen?','Werbeerfolg: Ökonomische Wirkung - wie wirkt sich die Werbung auf Umsatz, Absatz und Marktanteil aus?','Die Werbewirkung ist die Voraussetzung für den Werbeerfolg.']
        }
      ],
      learningData: null
    }
  ],
  glossary: [
    {term: 'Mediawerbung', def: 'Bezahlte, unpersönliche Kommunikation über Massenmedien (Print, TV, Radio, Online) zur gezielten Beeinflussung von Zielgruppen.'},
    {term: 'Printwerbung', def: 'Werbung in gedruckten Medien wie Zeitungen, Zeitschriften und Fachmagazinen.'},
    {term: 'TV-Werbung', def: 'Fernsehwerbung in Form von Spots, Sponsoring-Hinweisen oder Product Placement im TV.'},
    {term: 'Radiowerbung', def: 'Werbung über Hörfunk, z.B. Radiospots, Jingles und Programmsponsoring.'},
    {term: 'Aussenwerbung', def: 'Werbung im öffentlichen Raum: Plakate, Leuchtschriften, City-Light-Poster, Verkehrsmittelwerbung.'},
    {term: 'Online-Werbung', def: 'Digitale Werbung über Websites, Banner, Social Media, Suchmaschinen und E-Mail.'},
    {term: 'Direktwerbung', def: 'Individuelle werbliche Kommunikation zwischen Anbietern und Nachfragern, meist in schriftlicher Form.'},
    {term: 'Dialogmarketing', def: 'Kommunikationsform mit dem Ziel, eine interaktive Beziehung zum Kunden aufzubauen und zu pflegen.'},
    {term: 'Verkaufsförderung (VKF)', def: 'Zeitlich begrenzte Aktionen mit dem Ziel, auf nachgelagerten Vertriebsstufen durch zusätzliche Anreize Kommunikationsziele zu erreichen.'},
    {term: 'POS-Marketing', def: 'Marketingmassnahmen am Point of Sale (Verkaufsort), z.B. Displays, Degustationen, Sonderplatzierungen.'},
    {term: 'Sampling', def: 'Verteilung von Gratismustern an potenzielle Kunden zur Produktbekanntmachung.'},
    {term: 'Coupon', def: 'Gutschein, der dem Konsumenten einen Preisvorteil beim Kauf eines Produkts gewährt.'},
    {term: 'Display', def: 'Aufsteller oder Präsentationsmittel am POS zur auffälligen Warenpräsentation.'},
    {term: 'Sponsoring', def: 'Bereitstellung von Geld, Sachmitteln oder Dienstleistungen durch ein Unternehmen für eine Person, Gruppe oder Organisation gegen eine Gegenleistung.'},
    {term: 'Eventmarketing', def: 'Zielgerichtete und systematische Planung von Veranstaltungen als absatzpolitisches Instrument.'},
    {term: 'Public Relations', def: 'Kommunikation im öffentlichen Umfeld zur Erreichung eines guten Rufs (Goodwill) - Meinungspflege.'},
    {term: 'Medienarbeit', def: 'Systematische Pflege der Beziehungen zu Journalisten und Medien als Teil der PR.'},
    {term: 'Pressekonferenz', def: 'Informationsveranstaltung für Medienvertreter zu aktuellen Themen eines Unternehmens.'},
    {term: 'Medienmitteilung', def: 'Schriftliche Information an Medien über Neuigkeiten, Ereignisse oder Stellungnahmen.'},
    {term: 'Corporate Publishing', def: 'Unternehmenseigene Publikationen wie Kundenmagazine, Geschäftsberichte und Newsletters.'},
    {term: 'Messen und Ausstellungen', def: 'Schauveranstaltungen mit Marktcharakter, die den Verkauf von Waren und Dienstleistungen fördern sollen.'},
    {term: 'Product Placement', def: 'Gezielte Platzierung von Markenprodukten in Film, TV oder anderen Medien.'},
    {term: 'Influencer Marketing', def: 'Einsatz von Meinungsführern (Influencern) zur Verbreitung von Markenbotschaften.'},
    {term: 'Guerilla Marketing', def: 'Unkonventionelle, oft überraschende Marketingmassnahmen mit geringem Budget aber hoher Wirkung.'},
    {term: 'Ambient Marketing', def: 'Werbung, die in den Alltag der Zielgruppe integriert wird (z.B. auf Pizzakartons, Zapfpistolen).'},
    {term: 'Viral Marketing', def: 'Marketingform, die soziale Netzwerke und Medien ausnutzt, sodass sich die Nachrichten epidemisch verbreiten.'},
    {term: 'Native Advertising', def: 'Werbung, die sich nahtlos in den redaktionellen Inhalt einer Plattform einfügt.'},
    {term: 'Programmatic Advertising', def: 'Automatisierter, datengesteuerter Ein- und Verkauf von Werbeflächen in Echtzeit.'},
    {term: 'Crossmedia', def: 'Vernetzung verschiedener Kommunikationskanäle zu einer integrierten Kampagne.'},
    {term: 'Mediaplanung', def: 'Systematische Planung des Einsatzes von Werbeträgern und Werbemitteln zur optimalen Zielgruppenansprache.'},
    {term: 'Streuplan', def: 'Zeitliche und mediale Verteilung der Werbemassnahmen innerhalb einer Kampagne.'},
    {term: 'Werbewirkung', def: 'Messung der Wirkung von Werbemassnahmen auf die Zielgruppe (Wahrnehmung, Erinnerung, Verhalten).'},
    {term: 'Pre-Test', def: 'Werbewirkungsforschung vor der Lancierung einer Kampagne (Vortest).'},
    {term: 'Post-Test', def: 'Werbewirkungsforschung nach Durchführung einer Kampagne (Nachtest/Erfolgskontrolle).'},
    {term: 'Werbeerfolg', def: 'Messbarer Beitrag der Werbung zur Erreichung der Kommunikations- und Marketingziele.'}
  ]
};
