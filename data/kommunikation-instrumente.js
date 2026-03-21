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
          pairs: [{l:'Bekanntmachung',r:'Neue Zahnpasta für Kinder wird durch Werbung bekannt gemacht.'},{l:'Informieren',r:'Konsument wird über Merkmale, Eignung für Kinder, Preis und Verkaufsstellen informiert.'},{l:'Image aufbauen',r:'Image einer Zahnschmelz-aufbauenden und für Kinder geeigneten Zahnpasta wird gefördert.'},{l:'Ersatzbeschaffung sichern',r:'Bestehende Kunden werden erinnert und zum erneuten Kauf animiert.'}],
          options: ['Neue Zahnpasta für Kinder wird durch Werbung bekannt gemacht.','Konsument wird über Merkmale, Eignung für Kinder, Preis und Verkaufsstellen informiert.','Image einer Zahnschmelz-aufbauenden und für Kinder geeigneten Zahnpasta wird gefördert.','Bestehende Kunden werden erinnert und zum erneuten Kauf animiert.'],
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
          pairs: [{l:'Individuelle werbliche Kommunikation zwischen Anbietern und Nachfragern, meist in schriftlicher Form',r:'Direktwerbung'},{l:'Unternehmen mit verschiedenen Leistungsbereichen und gleichen Zielgruppen machen gemeinsame Werbung',r:'Cross-Marketing'},{l:'Städte, Länder oder Regionen werden in einem Film gezeigt',r:'Country oder Location Placement'},{l:'Marketingform, die soziale Netzwerke ausnutzt, sodass sich Nachrichten epidemisch verbreiten',r:'Virales Marketing'}],
          options: ['Direktwerbung','Cross-Marketing','Country oder Location Placement','Virales Marketing'],
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
            {s: 'Mediawerbung ist das bekannteste und am breitesten wirkende Kommunikationsinstrument.', c: true, feedback: 'Die klassische Werbung nimmt bei vielen Unternehmen den Grossteil des Budgets in Anspruch.'},
            {s: 'Die grössten Zuwachsraten verzeichnet der digitale Werbemarkt.', c: true, feedback: 'Die digitale Werbung wächst am stärksten, während Printmedien rückläufig sind.'},
            {s: 'Werbung für Investitionsgüter ist typischerweise emotional und nutzt Massenmedien.', c: false, feedback: 'Investitionsgüterwerbung ist rational und nutzt Fachzeitschriften/Direct Mails.'},
            {s: 'Virales Marketing nutzt soziale Netzwerke, sodass sich Nachrichten epidemisch verbreiten.', c: true, feedback: 'Das ist die korrekte Definition von viralem Marketing.'}
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
          answer: 2,
          tips: ['Der direkte Verkaufsabschluss gehört eher zur Verkaufsförderung.','Werbung arbeitet über Massenmedien, nicht am POS direkt.','Bekanntmachung, Informieren und Image sind klassische Funktionen.'],
          reveal: ['Direkter Verkaufsabschluss am POS ist keine Funktion der Mediawerbung.','Dies gehört zur Verkaufsförderung (VKF).','Mediawerbung fokussiert auf Bekanntheit, Information und Image.']
        },
        {
          id: 8, type: 'fill', q: 'Lückentext: Mediawerbung',
          instruction: 'Ergänzen Sie die Lücken zur Mediawerbung.',
          template: 'Werbung wirkt insbesondere bei guter {0}, möglichst hoher {1}, regelmässiger {2} und bei Einbezug von {3}.',
          blanks: [['Zielgruppenkenntnis'],['Präsenz','Omnipräsenz'],['Wiederholung'],['Emotionen']],
          tips: ['Es geht um die vier Erfolgsfaktoren der Werbewirkung.','Denken Sie an Zielgruppe, Sichtbarkeit, Frequenz und Gefühle.'],
          reveal: ['Zielgruppenkenntnis - man muss die Zielgruppe kennen.','Präsenz/Omnipräsenz - möglichst oft sichtbar sein.','Wiederholung - regelmässige Kontakte.','Emotionen - emotionale Ansprache wirkt.']
        },
        {
          id: 9, type: 'match', q: 'Medienarten zuordnen',
          instruction: 'Ordnen Sie die Beschreibungen den richtigen Medienarten zu.',
          pairs: [{l:'Hohe Reichweite, emotionale Ansprache durch Bild und Ton, teuer',r:'Fernsehen'},{l:'Hohe Druckqualität, längere Lebensdauer, zielgruppenspezifisch',r:'Zeitschriften'},{l:'Plakate, City-Light-Poster, hohe Präsenz im öffentlichen Raum',r:'Aussenwerbung'},{l:'Präzises Targeting, messbar, Banner und Social Media',r:'Digitale Werbung'}],
          options: ['Fernsehen','Zeitschriften','Aussenwerbung','Digitale Werbung'],
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
          pairs: [{l:'Demografisch',r:'Alter, Wohnort'},{l:'Sozioökonomisch',r:'Ausbildung, Berufstätigkeit'},{l:'Psychologisch',r:'Meinung über das Produkt, Konsumtyp (sparsam, hedonistisch)'}],
          options: ['Alter, Wohnort','Ausbildung, Berufstätigkeit','Meinung über das Produkt, Konsumtyp (sparsam, hedonistisch)'],
          tips: ['Demografisch = persönliche Grunddaten.','Sozioökonomisch = wirtschaftliche/soziale Stellung.','Psychologisch = Einstellungen und Werte.'],
          reveal: ['Demografisch: Alter, Wohnort.','Sozioökonomisch: Ausbildung, Berufstätigkeit.','Psychologisch: Meinung über das Produkt, Konsumtyp.']
        },
        {
          id: 11, type: 'match', q: 'Werbeziele klassifizieren (KOG/AFF/KON)',
          instruction: 'Ordnen Sie die Werbeziele den drei Gruppen zu: KOG (kognitiv), AFF (affektiv), KON (konativ). (Rep 7, S.60)',
          pairs: [{l:'Einstellung zu Marken, Produkten und Unternehmen',r:'AFF'},{l:'Kaufabsichten',r:'KON'},{l:'Kenntnis von Marken, Leistungen und Produkten',r:'KOG'},{l:'Vertrauensbildung',r:'AFF'},{l:'Förderung des Wiederverkaufs',r:'KON'},{l:'Erinnerung von Markennamen, Preisen, Slogans',r:'KOG'},{l:'Kundenbindung',r:'KON'},{l:'Emotionales Erleben der Marke',r:'AFF'}],
          options: ['AFF','KON','KOG'],
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
          pairs: [{l:'Reichweite',r:'Wie viel Prozent der Zielgruppe erreichen wir?'},{l:'Kontakte',r:'Wie oft werden die Zielpersonen erreicht?'},{l:'Intensität',r:'Wie viele Medien und wie häufig werden sie eingesetzt?'},{l:'Frequenz',r:'In welchen zeitlichen Abständen erfolgen wie viele Kontakte?'},{l:'Dominanz',r:'Welche Werbemittel, Grössen, Formate und Spotlängen werden eingesetzt?'},{l:'Impact',r:'Wie sind die Werbemittel gestaltet und wo sind sie platziert?'}],
          options: ['Wie viel Prozent der Zielgruppe erreichen wir?','Wie oft werden die Zielpersonen erreicht?','Wie viele Medien und wie häufig werden sie eingesetzt?','In welchen zeitlichen Abständen erfolgen wie viele Kontakte?','Welche Werbemittel, Grössen, Formate und Spotlängen werden eingesetzt?','Wie sind die Werbemittel gestaltet und wo sind sie platziert?'],
          tips: ['Reichweite = Prozent der Zielgruppe.','Kontakte = wie oft erreicht.','Intensität = Anzahl Medien und Häufigkeit.','Impact = Gestaltung und Platzierung.'],
          reveal: ['Reichweite: Wie viel Prozent der Zielgruppe erreichen wir?','Kontakte: Wie oft werden die Zielpersonen erreicht?','Intensität: Wie viele Medien und wie häufig?','Frequenz: In welchen zeitlichen Abständen?','Dominanz: Welche Werbemittel, Grössen, Formate?','Impact: Wie sind die Werbemittel gestaltet und platziert?']
        },
        {
          id: 14, type: 'fill', q: 'Werbekonzept 6 Schritte',
          instruction: 'Das Werbekonzept folgt den klassischen 6 Konzeptschritten. Ergänzen Sie.',
          template: '1. {0}: Analyseergebnisse werden auf werbespezifische Aspekte vertieft. 2. {1}: Beschreibung nach demografischen, psychografischen und verhaltensbezogenen Merkmalen. 3. {2}: kognitiv, affektiv und konativ. 4. {3}: Copystrategie mit Schlüsselelementen. 5. {4}: Mediastrategie und Wahl der Werbemittel. 6. {5}.',
          blanks: [['Analyse'],['Zielgruppen'],['Werbeziele'],['Werbestrategie'],['Massnahmen'],['Realisation, Budget, Kontrolle','Realisation']],
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
            {s: 'Die Werbestrategie ist eine mittel- bis langfristige Grundsatzentscheidung darüber, wie Werbebotschaften, -instrumente und -massnahmen eingesetzt werden sollen.', c: true, feedback: 'Exakte Definition der Werbestrategie.'},
            {s: 'Bei den Werbezielen unterscheidet man kognitive, affektive und exekutive Ziele.', c: false, feedback: 'Es sind kognitive, affektive und konative Ziele (nicht exekutive).'},
            {s: 'Basis zur Definition der Strategie stellt die Positionierung dar.', c: true, feedback: 'Die Positionierung ist die Grundlage für die Strategiedefinition.'},
            {s: 'Intermedia-Selektion vergleicht verschiedene Werbeträger innerhalb einer Mediengattung.', c: false, feedback: 'Intermedia-Selektion vergleicht verschiedene Mediengattungen. Intramedia-Selektion vergleicht innerhalb einer Gattung.'}
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
          answer: 2,
          tips: ['Konativ = handlungsbezogen.','Kenntnis und Erinnerung = kognitiv.','Einstellung = affektiv.','Wiederverkauf = Handlung = konativ.'],
          reveal: ['Förderung des Wiederverkaufs ist konativ (handlungsbezogen).','Kenntnis und Erinnerung sind kognitiv (wissensbezogen).','Einstellung ist affektiv (gefühlsbezogen).']
        },
        {
          id: 19, type: 'match', q: 'Intermedia vs. Intramedia',
          instruction: 'Ordnen Sie die Beschreibungen dem richtigen Selektionsverfahren zu.',
          pairs: [{l:'Vergleich zwischen verschiedenen Mediengattungen (z.B. TV vs. Print)',r:'Intermedia-Selektion'},{l:'Vergleich innerhalb einer Mediengattung (z.B. Blick vs. 20 Minuten)',r:'Intramedia-Selektion'}],
          options: ['Intermedia-Selektion','Intramedia-Selektion'],
          tips: ['Inter = zwischen verschiedenen Gattungen.','Intra = innerhalb einer Gattung.'],
          reveal: ['Intermedia-Selektion: Vergleich zwischen verschiedenen Mediengattungen.','Intramedia-Selektion: Vergleich innerhalb einer Mediengattung.']
        }
      ],
      learningData: {
        title: 'Werbekonzept',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'ein vollständiges Werbekonzept mit folgenden Punkten entwickeln.',
              'eine Situationsanalyse der Werbung vornehmen.',
              'die Zielgruppen und Ziele nennen und darauf aufbauend die umfassende Werbestrategie definieren.',
              'Werbemassnahmen definieren und die Einsatzmöglichkeiten der wichtigsten Werbemedien und Werbeträger beschreiben.',
              'einen Werbemitteleinsatzplan sowie die Grobstruktur eines Werbebudgets erstellen.',
              'Kontrollmassnahmen definieren.'
            ]
          },
          {
            type: 'concept',
            title: '2.1 Werbekonzept und Prozess',
            content: 'Das Werbekonzept beinhaltet die Standardschritte, wie sie auch auf der Ebene der Gesamtkommunikation genutzt werden. Diese werden nun auf der Ebene Kommunikationsabteilung auf die Besonderheiten der Werbung angepasst. Der Prozess umfasst: Analysephase (Situationsanalyse, werbliche Problemstellung), Planungsphase (Positionierung, Werbestrategie, Copy-Strategie, Media-Plattform, Werbemassnahmen, Werbebudget), Implementierungsphase (Realisierung) und Kontrollphase (Kontrolle des Werbeerfolgs).',
            highlight: 'Das Werbekonzept folgt den klassischen 6 Konzeptschritten: Analyse, Zielgruppen, Werbeziele, Werbestrategie, Massnahmen sowie Realisation/Budget/Kontrolle.'
          },
          {
            type: 'concept',
            title: '2.2 Situationsanalyse der Werbung',
            content: 'Die Werbesituationsanalyse umfasst eine Bestandsaufnahme werberelevanter Sachverhalte mit dem Ziel, Chancen und Risiken sowie Stärken und Schwächen offenzulegen und als Grundlage zur Festlegung von Werbezielen zu dienen. Das Ergebnis ist die Herausarbeitung der werblichen Problemstellung eines Produkts, einer Marke bzw. eines Unternehmens.',
            highlight: 'Im Vordergrund steht die Beurteilung hauptsächlich werbespezifischer Aspekte: Bewusstmachung des eigenen Kommunikationsproblems, Erkennen des Werbeverhaltens der Konkurrenz, Trends im Lebensstil der Zielgruppen.'
          },
          {
            type: 'concept',
            title: '2.3 Werbezielgruppen',
            content: 'Die Werbung konzentriert sich meist auf die Abnehmer. Im Wesentlichen werden als Zielgruppen potenzielle und bestehende Abnehmersegmente bearbeitet. Die Beschreibung der Werbezielgruppe erfolgt nach demografischen (inkl. sozioökonomischen) und geografischen Gesichtspunkten, psychologischen Merkmalen (Einstellungsstrukturen, konsumrelevante Faktoren) sowie (kauf-)verhaltensbezogenen Merkmalen (Grad der Motivation, wissensbezogene, verwendungsbezogene, zufriedenheitsbezogene und konsumbezogene Merkmale).',
            highlight: 'Die Zielgruppe sollte so plastisch und dreidimensional wie möglich beschrieben werden, damit die Kreativen (Art Director, Grafiker, Texter) Consumer Insights entwickeln können.'
          },
          {
            type: 'table',
            title: '2.4 Werbeziele (KOG/AFF/KON)',
            headers: ['Zielart', 'Beschreibung'],
            rows: [
              ['Kognitiv (KOG)', 'Kenntnis von Marken, Leistungen und Produkten; Erinnerung von Markennamen, Preisen, Slogans.'],
              ['Affektiv (AFF)', 'Einstellung zu Marken, Produkten und Unternehmen; Vertrauensbildung; emotionales Erleben der Marke.'],
              ['Konativ (KON)', 'Kaufabsichten; Förderung des Wiederverkaufs; Kundenbindung.']
            ]
          },
          {
            type: 'table',
            title: '2.5 Werbestrategien',
            headers: ['Werbestrategie', 'Beschreibung'],
            rows: [
              ['Reklamestrategie', 'Aufmerksamkeit für die Werbebotschaft soll in hohem Mass geschaffen werden. Kaufappelle, Aktionswerbung, Ausverkaufswerbung.'],
              ['Impact-Strategie', 'Die Bekanntheit eines Produkts, einer Marke oder eines Unternehmens soll aufgebaut werden. Informative Werbung, Nachrichten und Neuigkeiten.'],
              ['Image-Strategie', 'Eine starke, eigenständige Produktpersönlichkeit soll aufgebaut werden. Idealprofil (Bedürfnisse der Käufergruppe) wird angesprochen.'],
              ['Motivationsstrategie', 'Starke Verbrauchermotive sollen angesprochen werden. Hohe Erwartungen sollen geweckt und befriedigt werden (z.B. Sicherheit, Lifestyle).'],
              ['Psychoanalytische Strategie', 'Besonders intensive Motivationsstrategie, die stark auf das Unterbewusste abzielt. Soll eine psychologische Konfliktsituation lösen.']
            ]
          },
          {
            type: 'concept',
            title: '2.5.3 Copy-Strategie (Botschaftsstrategie)',
            content: 'Die Copy-Strategie umfasst sämtliche Entscheidungen, die gesamthaft als Anleitung für die Gestalter von Werbebotschaften gelten. Elemente sind: Kommunikative Leitidee (zentrale Botschaft für alle Medien), Hauptbotschaft (was in erster Linie gesagt werden muss), Nebenbotschaften (Preis, Menge, Distributionsort), Psychologische Achse (welches Bedürfnis angesprochen wird), Consumer Benefit (wesentlicher Nutzen für den Konsumenten), Reason Why (Begründung des Consumer Benefits).',
            highlight: 'Die wichtigste Regel ist das KISS-Prinzip: Keep it simple and stupid. Kurze und klare Sätze mit höchstens acht Wörtern. Das AIDA-Prinzip (Attention, Interest, Desire, Action) beschreibt die vier Phasen der Werbewirkung.'
          },
          {
            type: 'concept',
            title: '2.6 Mediastrategie und Mediaselektion',
            content: 'Die Mediastrategie beschäftigt sich mit Mediazielgruppen, Mediazielen und der Mediastrategie im engeren Sinn. Es gibt sechs verschiedene Parameter: Reichweite (Wie viel Prozent der Zielgruppe erreichen wir?), Kontakte (Wie oft werden die Zielpersonen erreicht?), Intensität (Wie viele Medien werden eingesetzt?), Frequenz (In welchen zeitlichen Abständen?), Dominanz (Welche Werbemittel, Grössen, Formate?), Impact (Wie sind die Werbemittel gestaltet und platziert?).',
            highlight: 'Intermedia-Selektion vergleicht verschiedene Mediengattungen (z.B. TV vs. Print). Intramedia-Selektion vergleicht innerhalb einer Mediengattung (z.B. Blick vs. 20 Minuten). Optimal: 3 Kontakte in 4 Wochen, 12 Kontakte in 3 Monaten.'
          },
          {
            type: 'table',
            title: 'Struktur des Werbebudgets',
            headers: ['Gliederung', 'Richtwerte'],
            rows: [
              ['Konzeption', 'CHF 10\'000 - 30\'000'],
              ['Gestaltung / Kreation', 'CHF 20\'000 - 60\'000'],
              ['Realisation / Produktion', 'CHF 20\'000 - 60\'000'],
              ['Umsetzung / Media', 'Entsprechend der Mediawahl und der Umsetzungsform'],
              ['Agenturhonorar', '7-10% des Kommunikationsbudgets'],
              ['Kontrolle, Pretests, Posttests, Reserve', 'CHF 20\'000 - 50\'000, Reserve 2-5%']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Das Werbekonzept folgt 6 Schritten: Analyse, Zielgruppen, Werbeziele, Werbestrategie, Massnahmen, Realisation/Budget/Kontrolle.',
              'Werbeziele werden in kognitive (KOG), affektive (AFF) und konative (KON) Ziele unterteilt.',
              'Die Werbestrategie ist eine mittel- bis langfristige Grundsatzentscheidung über den Einsatz von Werbebotschaften und -instrumenten.',
              'Basis der Strategie ist die Positionierung. Die Copy-Strategie definiert die Botschaft nach dem KISS-Prinzip.',
              'Die Mediastrategie hat 6 Parameter: Reichweite, Kontakte, Intensität, Frequenz, Dominanz, Impact.',
              'Intermedia-Selektion = zwischen Mediengattungen. Intramedia-Selektion = innerhalb einer Gattung.',
              'Pretests prüfen die Werbewirkung vor der Schaltung, Posttests den Werbeerfolg danach.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              'Das <strong>Werbekonzept</strong> folgt den klassischen 6 Konzeptschritten: Analyse, Zielgruppen, Werbeziele, Werbestrategie, Massnahmen sowie Realisation/Budget/Kontrolle.',
              'Die <strong>Analyse</strong>ergebnisse werden aus dem Konzept der Gesamtkommunikation übernommen und auf werbespezifische Aspekte vertieft.',
              'Die <strong>Zielgruppen</strong> der Werbung werden nach demografischen, psychografischen sowie verhaltensbezogenen Merkmalen beschrieben.',
              'Bei den <strong>Werbezielen</strong> unterscheidet man kognitiv-orientierte, affektiv-orientierte und konativ-orientierte Ziele.',
              'Die <strong>Werbestrategie</strong> ist eine mittel- bis langfristige Grundsatzentscheidung. Im Rahmen der Werbestrategie wird die Copystrategie mit Schlüsselelementen, Botschaften und Stil/Tonalität entwickelt.',
              'Die <strong>Massnahmen</strong> werden mittels der Mediastrategie und der Wahl der Werbemittel festgelegt. Die Mediaselektion (Intermedia- und Intramedia-Selektion) bestimmt den Einsatz der Medien.',
              '<strong>Realisation, Budget, Kontrolle:</strong> Werbemittel-Einsatzplan erstellen, Budget aufteilen (Kreation, Produktion, Media-Disposition, Agenturhonorar) und Pre-/Posttests durchführen.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Werbekonzept', def: 'Standardschritte der Werbeplanung, angepasst auf die Besonderheiten der Werbung (6 Konzeptschritte).'},
              {term: 'Copy-Strategie', def: 'Botschaftsstrategie: definiert Leitidee, Hauptbotschaft, Consumer Benefit, Reason Why, Tonalität und Stil.'},
              {term: 'KISS-Prinzip', def: 'Keep it simple and stupid - Werbebotschaften sollen einfach und verständlich formuliert sein.'},
              {term: 'AIDA-Prinzip', def: 'Attention (Aufmerksamkeit), Interest (Interesse), Desire (Verlangen), Action (Handeln) - vier Phasen der Werbewirkung.'},
              {term: 'Mediastrategie', def: 'Festlegung der Medien, Mediazielgruppen, Mediaziele und der sechs Parameter (Reichweite, Kontakte, Intensität, Frequenz, Dominanz, Impact).'},
              {term: 'Intermedia-Selektion', def: 'Auswahl zwischen verschiedenen Mediengattungen (z.B. TV vs. Print vs. Digital).'},
              {term: 'Intramedia-Selektion', def: 'Auswahl innerhalb einer Mediengattung (z.B. Blick vs. 20 Minuten).'},
              {term: 'Werbebudgetierung', def: 'Festlegung des Etats zur Deckung sämtlicher Werbekosten einer Planungsperiode.'}
            ]
          }
        ]
      }
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
          answer: 2,
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
          pairs: [{l:'Zusatznutzen, den die VKF-Kampagne den anvisierten Zielgruppen bieten soll',r:'Sales Promotion Benefit'},{l:'Die Verpackung kann nach dem Verbrauch der Ware für einen anderen Zweck verwendet werden',r:'Zweitnutzenpackung'},{l:'Mittel und Massnahmen der Hersteller und des Handels, um den Verkauf am POS zu unterstützen',r:'Merchandising'},{l:'Zugabe innerhalb der Verpackung',r:'In-Pack'},{l:'Verbraucher senden nummerierte Warenbestellkarten ein; wenn sie Glück haben, gewinnen sie',r:'Sales Promotion Flair'}],
          options: ['Sales Promotion Benefit','Zweitnutzenpackung','Merchandising','In-Pack','Sales Promotion Flair'],
          tips: ['Benefit = Zusatznutzen.','Zweitnutzen = Verpackung wird wiederverwendet.','Merchandising = POS-Unterstützung.','In-Pack = Zugabe in der Verpackung.'],
          reveal: ['Sales Promotion Benefit: Zusatznutzen der VKF-Kampagne.','Zweitnutzenpackung: Verpackung wird für anderen Zweck wiederverwendet.','Merchandising: Massnahmen am POS zur Verkaufsunterstützung.','In-Pack: Zugabe innerhalb der Verpackung.','Sales Promotion Flair: Nummerierte Warenbestellkarten mit Gewinnchance.']
        },
        {
          id: 24, type: 'match', q: 'Produktlebenszyklus und VKF',
          instruction: 'Ordnen Sie die Aussagen zum Produktlebenszyklus zu. (Rep 14, S.86)',
          pairs: [{l:'VKF wird stark eingesetzt',r:'Einführung und Sättigung'},{l:'VKF sollte nicht durchgeführt werden',r:'Entwicklung'}],
          options: ['Einführung und Sättigung','Entwicklung'],
          tips: ['In der Einführungsphase wird VKF stark eingesetzt.','In der Sättigungsphase ebenfalls.','In der Entwicklungsphase ist das Produkt noch nicht am Markt.'],
          reveal: ['VKF wird in der Einführungs- und Sättigungsphase stark eingesetzt.','In der Entwicklungsphase (Produkt ist noch nicht am Markt) sollte keine VKF durchgeführt werden.','Die Phasen des PLZ: Entwicklung, Einführung, Wachstum, Reife, Sättigung, Degeneration, Elimination.']
        },
        {
          id: 25, type: 'fill', q: 'Phasen des Produktlebenszyklus',
          instruction: 'Nennen Sie die sieben Phasen des Produktlebenszyklus.',
          template: '1. {0}, 2. {1}, 3. {2}, 4. {3}, 5. {4}, 6. {5}, 7. {6}',
          blanks: [['Entwicklung'],['Einführung'],['Wachstum'],['Reife'],['Sättigung'],['Degeneration'],['Elimination']],
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
          answer: 1,
          tips: ['Die VKF-Kontrolle ist vergleichsweise einfach.','Man misst die Absatzzahlen während der Aktion.','Steigen die Absatzzahlen spürbar, war die Massnahme erfolgreich.'],
          reveal: ['Die Kontrolle der VKF ist relativ einfach.','Die Absatzzahlen müssen während der Aktion spürbar ansteigen.','Andere Ziele können mithilfe von Marktforschung überprüft werden.']
        },
        {
          id: 28, type: 'tf', q: 'VKF Richtig oder Falsch',
          statements: [
            {s: 'Verkaufsförderung sind zeitlich begrenzte Aktionen mit dem Ziel, durch zusätzliche Anreize Kommunikationsziele zu erreichen.', c: true, feedback: 'Exakte Definition der VKF (Sales Promotion).'},
            {s: 'Die Verkaufsförderung ist ein Pull-Instrument.', c: false, feedback: 'Die VKF ist primär ein Push-Instrument.'},
            {s: 'Merchandising umfasst Mittel und Massnahmen der Hersteller und des Handels, um den Verkauf am POS zu unterstützen.', c: true, feedback: 'Korrekte Definition von Merchandising.'},
            {s: 'Bei der Strategiewahl ist zu beachten, dass die VKF nur positive Auswirkungen auf die Konsumenten haben kann.', c: false, feedback: 'VKF kann auch negative Auswirkungen haben (z.B. Verlagerung statt Mehrumsatz, Imageschädigung).'}
          ],
          tips: ['VKF = zeitlich begrenzte Aktionen.','VKF ist ein Push-Instrument.','VKF kann auch negativ wirken.'],
          reveal: ['Aussage 1: Richtig - exakte Definition.','Aussage 2: Falsch - Push, nicht Pull.','Aussage 3: Richtig - Definition Merchandising.','Aussage 4: Falsch - auch negative Auswirkungen möglich.']
        }
      ],
      learningData: {
        title: 'Verkaufsförderung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale der Verkaufsförderung erklären.',
              'die Aufgaben und Ziele der Verkaufsförderung beschreiben.',
              'die Funktionen der Verkaufsförderung und ihre Einsatzgebiete erläutern.',
              'ein Verkaufsförderungskonzept entwickeln.'
            ]
          },
          {
            type: 'concept',
            title: '3.1 Definition und Merkmale',
            content: 'Verkaufsförderung (Sales Promotion) ist die Analyse, Planung, Durchführung und Kontrolle meist zeitlich begrenzter Aktionen mit dem Ziel, auf nachgelagerten Vertriebsstufen durch zusätzliche Anreize Kommunikationsziele eines Unternehmens zu erreichen. Sie fördert vor allem den Absatz am Verkaufspunkt (Point of Sale). Sie hat Aktionscharakter und baut meist einen direkten Kontakt zur Zielgruppe auf.',
            highlight: 'Während Werbung einen Kaufgrund liefert, bietet Verkaufsförderung einen Anreiz, den Kaufakt zu vollziehen oder voranzutreiben. VKF kann an den Aussendienst, den Handel, an externe Beeinflusser und an Verbraucher gerichtet werden.'
          },
          {
            type: 'concept',
            title: '3.2 Funktionen der Verkaufsförderung',
            content: 'Verkaufsförderung übt eine stark absatzorientierte Funktion aus. Ihr Erfolg misst sich unmittelbar an der Erreichung ökonomischer Ziele (Absatz und Umsatz). Vorgelagert sind psychologische Funktionen.',
            highlight: 'Die sechs Hauptfunktionen der VKF sind: Aktivierung und Motivation, Unterstützung, Dynamisierung, Diffusion, Angewöhnung und Ergänzung.'
          },
          {
            type: 'table',
            title: 'VKF-Elemente im Marketingmix',
            headers: ['Marketingmix-Bereich', 'VKF-Massnahmen'],
            rows: [
              ['Kommunikationspolitik', 'Werbeverträge, Inserate etc.'],
              ['Preispolitik', 'Aktionen, Couponing etc.'],
              ['Distributionspolitik', 'Displays, Zweitplatzierungen etc.'],
              ['Produktpolitik', 'Produktzugaben, Aktionspackungen etc.'],
              ['Personalpolitik', 'Wissensvermittlung, Kompetenzübertragung, Prämien']
            ]
          },
          {
            type: 'concept',
            title: '3.5 Zielgruppen der Verkaufsförderung',
            content: 'Die Zielgruppen der VKF sind: Eigene Mitarbeitende (Staff Promotion) - Aussendienst, Innendienst, Key Account Manager etc.; Handel (Dealer/Trade Promotion) - Grosshandel, Detailhandel, Fachhandel; Konsumenten/Kunden (Consumer Promotion) - Endverbraucher, Produktkäufer; Externe Beeinflusser und Influencer.',
            highlight: 'Der Handel wird nach ABC-Analyse unterteilt: A-Zielgruppen (hohe Kooperationsbereitschaft), B-Zielgruppen (niedrige Kooperationsbereitschaft, hohe Akzeptanz), C-Zielgruppen (hohe Kooperationsbereitschaft, geringe Akzeptanz), D-Zielgruppen (Verzicht).'
          },
          {
            type: 'table',
            title: '3.6 Verkaufsförderungsziele (KOG/AFF/KON)',
            headers: ['Stufe', 'Kognitiv', 'Affektiv', 'Konativ'],
            rows: [
              ['Handelsgerichtet', 'Vermittlung von Produktinfos, Erhöhung der Markenbekanntheit', 'Weckung von Produktinteressen, Formung von Einstellungen und Images', 'Realisierung Produktlistung, Lagerhaltung, Beeinflussung der Produktplatzierung'],
              ['Konsumentengerichtet', 'Aktivierung, Aufmerksamkeit, Markenbekanntheit, Vermittlung von Produktinfos', 'Weckung von Produktinteressen, Formung von Einstellungen, Emotionales Erleben', 'Initiierung von Erst-/Versuchskäufen, Impulskäufe, Wiederkäufe, Beeinflussung der Kaufmengen']
            ]
          },
          {
            type: 'concept',
            title: '3.7 Absatzstrategische Aspekte: Push vs. Pull',
            content: 'Die Push-Strategie fokussiert ihre Mittel und Massnahmen hauptsächlich auf die Bearbeitung der Absatzmittler mit dem Ziel, die eigenen Produkte in deren Sortiment aufzunehmen. Bei der Verkaufsförderung handelt es sich um ein eigentliches Push-Instrument, das dazu dient, Produkte schnell am Markt einzuführen. Meist werden neben der VKF zusätzliche Pull-Massnahmen (z.B. Mediawerbung, PR, PPR) eingesetzt.',
            highlight: 'Die Verkaufsförderung ist dem Marketing- bzw. Kommunikationskonzept untergeordnet. Das VKF-Konzept ist zwingend auf übergeordnete Marketing-Entscheide abzustimmen.'
          },
          {
            type: 'concept',
            title: '3.8 Verkaufsförderungsmassnahmen',
            content: 'VKF-Massnahmen werden für drei Bereiche unterschieden: Konsumgüter (Staff Promotion, Dealer Promotion, Consumer Promotion), Dienstleistungsbereich und Investitionsgüterbereich. Wichtige Massnahmentypen sind: Packungsbezogene VKF (Multipack, Bundled Offer, Geschenkpackungen, Sortimentspackungen, Zweitnutzenpackungen), Zugaben (On-Pack, In-Pack, Give-away), Verkaufsförderungsaktionen (Preisausschreiben, Coupons, Trade-in, Money Back, Sweepstake, Winner in every store) und Merchandising am POS.',
            highlight: 'Merchandising umfasst alle Mittel und Massnahmen des Herstellers und des Handels, um den Abverkauf am POS zu unterstützen: optimale Platzierung, Displays, Regalordnung.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Verkaufsförderung (Sales Promotion) sind zeitlich begrenzte Aktionen zur Absatzsteigerung.',
              'VKF ist ein Push-Instrument - es drückt Produkte über den Handel an die Konsumenten.',
              '6 Funktionen: Aktivierung, Unterstützung, Dynamisierung, Diffusion, Angewöhnung, Ergänzung.',
              '4 Zielgruppen: Eigene Mitarbeitende (Staff), Handel (Trade/Dealer), Konsumenten (Consumer), Externe Beeinflusser.',
              'VKF kann auch negative Auswirkungen haben: nur Kauf bei Promotionen, zeitliche Verlagerung statt Mehrumsatz.',
              'Kontrolle ist relativ einfach: Steigen die Absatzzahlen während der Aktion, waren die Massnahmen erfolgreich.'
            ]
          },
          {
            type: 'summary',
            title: 'Zusammenfassung',
            content: [
              '<strong>Verkaufsförderung</strong> (Sales Promotion) meint meist zeitlich begrenzte Aktionen mit dem Ziel, auf nachgelagerten Vertriebsstufen durch zusätzliche Anreize Kommunikationsziele zu erreichen.',
              '<strong>Zielgruppen</strong> der VKF sind eigene Mitarbeitende, Absatzmittler, Endverbraucher und externe Beeinflusser. Zwischen Hersteller und Absatzmittler gibt es Interessenkonflikte in Bezug auf Listing, Pricing, Platzierung und Promotions-Aktivitäten.',
              'Die <strong>Ziele</strong> der VKF können sein: Kognitiv (Markenbekanntheit steigern), Affektiv (Produktinteresse wecken, Einstellungen formen) und Konativ (Initiierung von Käufen, Beeinflussung der Produktplatzierungen am POS).',
              'Die VKF ist ein <strong>Push-Instrument</strong>, das dazu dient, Produkte schnell am Markt einzuführen. Meist werden zusätzliche Pull-Massnahmen eingesetzt.',
              'Die <strong>Massnahmen</strong> sind auf die vier Zielgruppen Mitarbeitende, Absatzmittler, Endverbraucher und externe Beeinflusser ausgerichtet.',
              'Die <strong>Kontrolle</strong> der VKF ist im Vergleich zu anderen Kommunikationsinstrumenten relativ einfach: Steigen die Absatzzahlen während des Aktionszeitraums, waren die Massnahmen erfolgreich.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Sales Promotion', def: 'Englischer Begriff für Verkaufsförderung - zeitlich begrenzte Aktionen zur Absatzsteigerung.'},
              {term: 'Consumer Promotion', def: 'Konsumentengerichtete Verkaufsförderung, z.B. Gratisproben, Wettbewerbe, Coupons.'},
              {term: 'Dealer/Trade Promotion', def: 'Handelsgerichtete Verkaufsförderung zur Motivation der Absatzmittler.'},
              {term: 'Staff Promotion', def: 'VKF-Massnahmen für eigene Mitarbeitende (Schulung, Wettbewerbe, Prämien).'},
              {term: 'Merchandising', def: 'Mittel und Massnahmen zur Unterstützung des Verkaufs am POS (Displays, Platzierung, Regalordnung).'},
              {term: 'Push-Strategie', def: 'Absatzfördernde Massnahmen werden über den Handel an die Konsumenten gerichtet (Angebotsdruck).'},
              {term: 'Sales Promotion Benefit', def: 'Zusatznutzen, den die VKF-Kampagne den anvisierten Zielgruppen bieten soll.'},
              {term: 'Zweitnutzenpackung', def: 'Verpackung, die nach Verbrauch der Ware für einen anderen Zweck verwendet werden kann.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Die Zielgruppen werden alive mit einem Produkt konfrontiert.',r:'Erlebnisstrategie'},{l:'Neue, bisher nicht bearbeitete Zielgruppen werden angesprochen.',r:'Zielgruppenerschöpfungsstrategie'},{l:'Eine Marke soll stärker positioniert werden.',r:'Imageprofilierungsstrategie'},{l:'Ein neues Produkt wird bei bestimmten Zielgruppen eingeführt.',r:'Einführungsstrategie'}],
          options: ['Erlebnisstrategie','Zielgruppenerschöpfungsstrategie','Imageprofilierungsstrategie','Einführungsstrategie'],
          tips: ['Erlebnis = alive, direkt erleben.','Zielgruppenerschöpfung = neue Zielgruppen.','Imageprofilierung = Marke stärker positionieren.','Einführung = neues Produkt einführen.'],
          reveal: ['Erlebnisstrategie: Zielgruppen erleben das Produkt live.','Zielgruppenerschöpfungsstrategie: Neue Zielgruppen werden erschlossen.','Imageprofilierungsstrategie: Marke wird stärker positioniert.','Einführungsstrategie: Neues Produkt wird eingeführt.']
        },
        {
          id: 31, type: 'match', q: 'Event-Kostenarten',
          instruction: 'Geben Sie je ein Beispiel für die aufgeführten Kostenarten beim Event-Budget. (Rep 18, S.103)',
          pairs: [{l:'Planungskosten',r:'Personalkosten'},{l:'Vorbereitungskosten',r:'Kosten für Einladungen zum Event'},{l:'Durchführungskosten',r:'Raummiete, Honorar für Referenten'},{l:'Nachbearbeitungskosten',r:'Nachfassaktionen an Leute, die nicht teilnehmen konnten'},{l:'Wirkungsmessungen',r:'Befragungen'}],
          options: ['Personalkosten','Kosten für Einladungen zum Event','Raummiete, Honorar für Referenten','Nachfassaktionen an Leute, die nicht teilnehmen konnten','Befragungen'],
          tips: ['Planungskosten = Personalaufwand für die Planung.','Vorbereitungskosten = Einladungen etc.','Durchführungskosten = Location, Referenten.','Nachbearbeitung = Follow-up.'],
          reveal: ['Planungskosten: Personalkosten für die Eventplanung.','Vorbereitungskosten: Kosten für Einladungen.','Durchführungskosten: Raummiete, Honorar.','Nachbearbeitungskosten: Nachfassaktionen.','Wirkungsmessungen: Befragungen der Teilnehmer.']
        },
        {
          id: 32, type: 'fill', q: 'Event-Marketing Definition',
          instruction: 'Ergänzen Sie die Definition von Event-Marketing.',
          template: 'Event-Marketing ist die {0} und {1} Planung von Veranstaltungen als {2} Instrument oder image- und meinungsbildungsfördernde Massnahme zur Durchsetzung der {3} im Rahmen der Marketingkommunikation.',
          blanks: [['zielgerichtete'],['systematische'],['absatzpolitisches'],['Unternehmensziele']],
          tips: ['Event-Marketing ist zielgerichtet und systematisch.','Es ist ein absatzpolitisches Instrument.','Es dient der Durchsetzung der Unternehmensziele.'],
          reveal: ['Zielgerichtet: mit klarem Ziel.','Systematisch: nach Plan und Struktur.','Absatzpolitisches Instrument: dient dem Absatz.','Unternehmensziele: im Rahmen der Marketingkommunikation.']
        },
        {
          id: 33, type: 'match', q: 'Event-Arten unterscheiden',
          instruction: 'Ordnen Sie die Event-Arten der richtigen Kategorie zu.',
          pairs: [{l:'Produktpräsentation, Hauptversammlung',r:'Arbeitsorientierte Veranstaltungen'},{l:'Gala-Abend, Konzert, Showveranstaltung',r:'Infotainment-Aktivitäten'},{l:'Outdoor-Event, Sportveranstaltung, Abenteuer-Event',r:'Freizeitorientierte Aktivitäten'}],
          options: ['Arbeitsorientierte Veranstaltungen','Infotainment-Aktivitäten','Freizeitorientierte Aktivitäten'],
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
          answer: 1,
          tips: ['Event-Marketing hat emotionale und informative Ziele.','Schlüsselinformationen werden vermittelt.','Emotionales Erleben und Kundenbindung stehen im Vordergrund.'],
          reveal: ['Ziele des Event-Marketings sind die Vermittlung von Schlüsselinformationen über Produkte.','Emotionales Erleben von Unternehmen, Marken und Produkten.','Festigung der Kundenbindung.']
        },
        {
          id: 36, type: 'tf', q: 'Massnahmenplanung beim Event',
          statements: [
            {s: 'Die Massnahmenplanung beim Event umfasst Massnahmen vor, während und nach dem Event.', c: true, feedback: 'Alle drei Phasen müssen geplant werden.'},
            {s: 'Beim Event-Marketing ist die Nachbearbeitung unwichtig.', c: false, feedback: 'Die Nachbearbeitung (Follow-up) ist essenziell für den Erfolg.'},
            {s: 'Events werden in arbeitsorientierte Veranstaltungen, Infotainment und freizeitorientierte Aktivitäten unterteilt.', c: true, feedback: 'Dies sind die drei Event-Kategorien.'}
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
      learningData: {
        title: 'Event-Marketing',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale des Event-Marketings erklären.',
              'die Aufgaben und Ziele des Event-Marketings beschreiben.',
              'die Instrumente des Event-Marketings und ihre Einsatzgebiete erläutern.',
              'Ansätze für ein Konzept des Event-Marketings entwickeln.'
            ]
          },
          {
            type: 'concept',
            title: '4.1 Definition und Merkmale von Events',
            content: 'Unter Marketing-Events versteht man geplante Ereignisse in Form von Veranstaltungen und Aktionen, die den Adressaten firmen- und produktbezogene Kommunikationsinhalte erlebnisorientiert vermitteln sollen. Event-Marketing (auch Live-Communication, Live-Marketing) ist ein Instrument der Kommunikation und bezeichnet die zielgerichtete und systematische Planung von Veranstaltungen (Messen, Aussendienstkonferenzen, Verkaufspräsentationen, Sport- und Kulturveranstaltungen) als absatzpolitisches Instrument zur Durchsetzung der Unternehmensziele.',
            highlight: 'Das Schlagwort Erlebnisorientierung charakterisiert den Ansatz: Eine Veranstaltung wird gezielt und geplant zu einem emotional ansprechenden Erlebnis für den Besucher.'
          },
          {
            type: 'table',
            title: 'Arten von Events',
            headers: ['Event-Art', 'Beschreibung'],
            rows: [
              ['Arbeitsorientierte Veranstaltungen', 'Fokus auf Information, z. B. Produktschulung, Verkaufsförderungstrainings.'],
              ['Infotainment', 'Informationsvermittlung in einem Unterhaltungsprogramm, z. B. multimediale Produktpräsentation mit Show-Teilen.'],
              ['Unternehmensveranstaltungen', 'Anlässe für direkte Stakeholder: Mitarbeiteranlässe, Mitglieder-Events, Anlegerversammlungen.'],
              ['Freizeitorientierte Aktivitäten', 'Unterhaltung der Teilnehmer steht im Vordergrund. Hauptziel ist das Erzeugen einer starken emotionalen Wirkung.']
            ]
          },
          {
            type: 'concept',
            title: '4.2 Funktionen des Event-Marketings',
            content: 'Event-Marketing ist heute ein gleichberechtigtes Instrument im Kommunikationsmix. Hintergrund ist die Fragmentierung der Märkte und die Reizüberflutung der Konsumenten durch klassische Werbeformen. Werbung in Zeitung, Radio, Fernsehen oder Internet wird ergänzt oder ersetzt durch eine Aktionsform, die die Zielgruppe direkt erreicht und mit ihr aktiv und emotional interagiert. Das Ziel ist die Vertiefung von Beziehungen zur Zielgruppe.',
            highlight: 'Wenn es darum geht, starke und nachhaltige Eindrücke zu erzeugen, kann kaum ein Kommunikationsinstrument mit der Kommunikationskraft des Live- bzw. Erlebnismarketings konkurrieren.'
          },
          {
            type: 'table',
            title: '4.6 Event-Marketing-Ziele',
            headers: ['Zielkategorie', 'Beispiele'],
            rows: [
              ['Kognitiv-orientierte Ziele', 'Bekanntmachung neuer Produkte, Vermittlung von Schlüsselinformationen über Produkte und Informationen.'],
              ['Affektiv-orientierte Ziele', 'Aktivierung der Wahrnehmung zu Unternehmen/Marken/Produkten, emotionales Erleben, Integration der Marke in die Erlebniswelt, Positionierung durch Emotion.'],
              ['Konativ-orientierte Ziele', 'Festigung der Kundenbindung (Kontaktpflege, Reaktivierung inaktiver Kunden), Direktverkauf und Verkaufsförderung, Anregung zu positiver Mundpropaganda.']
            ]
          },
          {
            type: 'concept',
            title: '4.7 Event-Strategie-Typen',
            content: 'Üblicherweise entscheiden sich Unternehmen für eine der folgenden Event-Strategie-Typen: Einführungsstrategie (neues Produkt oder Dienstleistung wird bei bestimmten Zielgruppen live eingeführt), Zielgruppenerschliessungsstrategie (neue Zielgruppen werden angesprochen und mit den Produkten vertraut gemacht), Imageprofilierungsstrategie (Produkt oder Marke soll gegenüber den Mitbewerbern stärker positioniert werden), Erlebnisstrategie (Zielgruppen sollen live mit einem Produkt konfrontiert werden, hoher Erlebnis- und Erinnerungswert).',
            highlight: 'Die Strategiebestimmung darf die Kreation innovativer Event-Konzepte nicht verhindern, denn letztlich dient die Realisierung von Events der Erreichung der strategischen Kommunikationsziele.'
          },
          {
            type: 'concept',
            title: '4.8 Massnahmen des Event-Marketings',
            content: 'Die Massnahmenplanung umfasst drei Phasen: Vor dem Event (Programmplanung, Einladungen, Mailings, Werbemittel, Schulung Personal, Infrastruktur), während des Events (Attraktionen, Gästeempfang, VIP-Lounge, Dokumentation, Medienbetreuung, Verpflegung) und nach dem Event (Nachbearbeitung, Wirkungskontrolle, Kontaktaufnahme mit Besuchern, Schlussrechnung, Debriefing).',
            highlight: 'Die Nachbearbeitung nach dem Event ist essenziell für den Erfolg. Dazu gehören Schlussrechnung, Debriefing und Verbesserungsmöglichkeiten für den nächsten Event.'
          },
          {
            type: 'concept',
            title: '4.9 Budget und Kontrolle',
            content: 'Events sind ein kostenintensives Kommunikationsinstrument. Relevante Kostenbestandteile sind: Planungskosten (Personalkosten), Vorbereitungskosten (Einladungen, Ankündigungen), Durchführungskosten (Catering, Raummieten, Technik, Honorare), Nachbearbeitungskosten (Nachfassschreiben, Erinnerungsgeschenke) und Wirkungsmessungen (Befragungen). Die Kontrolle umfasst: Kontrolle vor der Veranstaltung inkl. Timing, Kontrolle während der Veranstaltung, Erfolgskontrolle nach der Veranstaltung und Abschlussbericht.',
            highlight: 'Die Zufriedenheit der Besucher kann mittels verteilter Antwortkarten, Online-Befragungen oder telefonischer Befragungen nach der Veranstaltung gemessen werden.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Event-Marketing = zielgerichtete, systematische Planung von Veranstaltungen als Kommunikationsinstrument.',
              'Vier Event-Arten: arbeitsorientiert, Infotainment, Unternehmensveranstaltungen, freizeitorientiert.',
              'Ziele: kognitiv (Bekanntheit), affektiv (Emotion), konativ (Verhalten/Kauf).',
              'Strategie-Typen: Einführung, Zielgruppenerschliessung, Imageprofilierung, Erlebnis.',
              'Massnahmenplanung in drei Phasen: vor, während und nach dem Event.',
              'Budget: Planungs-, Vorbereitungs-, Durchführungs- und Nachbearbeitungskosten.',
              'Abgrenzung zum Sponsoring: Event-Marketing = eigenes inszeniertes Ereignis, Sponsoring = Ereignis findet auch ohne Sponsor statt.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Event-Marketing', def: 'Zielgerichtete und systematische Planung von Veranstaltungen als Kommunikationsinstrument zur Durchsetzung von Unternehmenszielen.'},
              {term: 'Marketing-Event', def: 'Geplantes Ereignis in Form einer Veranstaltung, das firmen- und produktbezogene Inhalte erlebnisorientiert vermittelt.'},
              {term: 'Erlebnisorientierung', def: 'Ansatz, bei dem eine Veranstaltung gezielt zu einem emotionalen Erlebnis für den Besucher gemacht wird.'},
              {term: 'Infotainment', def: 'Verbindung von Information und Unterhaltung bei einer Veranstaltung.'},
              {term: 'Event-Controlling', def: 'Kontrolle und Messung des Erfolgs einer Veranstaltung vor, während und nach dem Event.'},
              {term: 'Einführungsstrategie', def: 'Neues Produkt wird bei bestimmten Zielgruppen live eingeführt.'},
              {term: 'Erlebnisstrategie', def: 'Zielgruppen werden live mit einem Produkt konfrontiert, hoher Erlebnis- und Erinnerungswert steht im Vordergrund.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Swissbau, Bauma',r:'Fachmesse'},{l:'Comptoir Suisse, BEA',r:'Publikumsmesse'},{l:'IGEHO, SIHH',r:'Fachmesse (international)'}],
          options: ['Fachmesse','Publikumsmesse','Fachmesse (international)'],
          tips: ['Es wird zwischen Publikums- und Fachmessen unterschieden.','Auch regionale vs. internationale Messen.','Fachmessen richten sich an Fachpublikum.'],
          reveal: ['Fachmessen: Swissbau, Bauma - für Fachbesucher.','Publikumsmessen: Comptoir Suisse, BEA - für breites Publikum.','Internationale Fachmessen: IGEHO, SIHH.']
        },
        {
          id: 42, type: 'fill', q: 'Drei Phasen der Ausstelleraktivität',
          instruction: 'Die Ausstelleraktivität lässt sich in drei Phasen unterteilen.',
          template: 'Phase 1: {0} – Phase 2: {1} – Phase 3: {2}. Diese drei Phasen beschreiben einen Regelkreis, der Unternehmen mit Menschen und Märkten zusammenführt und verbindet.',
          blanks: [['Vorbereiten'],['Ausstellen'],['Auswerten']],
          tips: ['Die drei Phasen beginnen mit der Vorbereitung.','Die zweite Phase ist die eigentliche Ausstellung.','Die dritte Phase ist die Auswertung.'],
          reveal: ['Phase 1: Vorbereiten - Planung und Standkonzept.','Phase 2: Ausstellen - die eigentliche Messe.','Phase 3: Auswerten - Nachbereitung und Erfolgskontrolle.']
        },
        {
          id: 43, type: 'match', q: 'Messekonzept-Schritte',
          instruction: 'Ein Messekonzept erstellen Sie entlang der bekannten Konzeptschritte. Ordnen Sie die Schritte.',
          pairs: [{l:'1.',r:'Situationsanalyse'},{l:'2.',r:'Zielgruppen'},{l:'3.',r:'Ziele'},{l:'4.',r:'Massnahmen'},{l:'5.',r:'Realisation und Budget'},{l:'6.',r:'Kontrolle'}],
          options: ['Situationsanalyse','Zielgruppen','Ziele','Massnahmen','Realisation und Budget','Kontrolle'],
          tips: ['Das Messekonzept folgt dem gleichen 6-Schritte-Raster.','Es beginnt mit der Situationsanalyse.','Budget und Kontrolle am Schluss.'],
          reveal: ['1. Situationsanalyse.','2. Zielgruppen definieren.','3. Ziele festlegen.','4. Massnahmen planen.','5. Realisation und Budget.','6. Kontrolle.']
        },
        {
          id: 44, type: 'tf', q: 'Messen: Richtig oder Falsch',
          statements: [
            {s: 'Messen ermöglichen einen direkten Kontakt zu einer Vielzahl potenzieller Kunden innerhalb eines kurzen Zeitraums.', c: true, feedback: 'Dies ist einer der Hauptvorteile von Messen.'},
            {s: 'Bei Messen gibt es keine Möglichkeit der Selbstdarstellung.', c: false, feedback: 'Messen bieten gerade die Möglichkeit der Selbstdarstellung und des direkten Feedbacks.'},
            {s: 'Es wird zwischen Publikums- und Fachmessen unterschieden.', c: true, feedback: 'Dies sind die zwei Hauptkategorien von Messen.'},
            {s: 'Die Nachbearbeitung nach einer Messe ist für den Messeerfolg unwichtig.', c: false, feedback: 'Die Nachbearbeitung (Phase 3: Auswerten) ist essenziell.'}
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
      learningData: {
        title: 'Messen und Ausstellungen',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Merkmale von Messen und Ausstellungen erklären.',
              'die Funktionen von Messen und Ausstellungen beschreiben.',
              'die Instrumente und Massnahmen für den Einsatz von Messen und Ausstellungen erläutern.',
              'ein Messe-Konzept entwickeln.'
            ]
          },
          {
            type: 'concept',
            title: '5.1 Definition und Merkmale',
            content: 'Ausstellungen, Messen, Kongresse unterscheiden sich primär durch das Ziel der Veranstaltung. Bei einer Ausstellung liegt der Schwerpunkt auf der Präsentation von Produkten (Werben und Informieren). Bei einer Messe steht das Handeln und Verkaufen im Vordergrund. Bei einem Kongress geht es um Debatten und Gespräche auf hohem Niveau zu einem bestimmten Thema. Mischformen wie Kongressmessen oder Sonderausstellungen sind ebenfalls üblich.',
            highlight: 'Messen und Ausstellungen sind ein wichtiges Kommunikationsinstrument und dienen als Plattform, um neue Kunden zu akquirieren oder bestehende Kontakte zu intensivieren.'
          },
          {
            type: 'concept',
            title: '5.2 Funktionen von Messen und Ausstellungen',
            content: 'Messen und Ausstellungen bieten entscheidende Vorteile: Direkter Kontakt zu vielen potenziellen Kunden in einem kurzen Zeitraum, Feedback zum Produkt- bzw. Dienstleistungsangebot durch Reaktionen der Besucher, Möglichkeit der Selbstdarstellung durch Auswahl und Präsentation des Ausstellungsprogramms und des Messestands, sportliche Erkundung der Konkurrenz sowie Suche nach potenziellen Mitarbeitenden, Aussendienstleuten, Zulieferanten oder Kooperationspartnern.',
            highlight: 'Keine andere Marketingaktivität bietet in vergleichbarer Weise die Gelegenheit, innerhalb kurzer Zeit eine so grosse Zahl potenzieller Interessenten anzutreffen.'
          },
          {
            type: 'concept',
            title: '5.3 Planungsprozess und Messekonzept',
            content: 'Die Ausstelleraktivität lässt sich in drei Phasen unterteilen: Planung (Festlegung der Messeziele, Strategie, Gestaltung der Massnahmen in den Bereichen Produkt, Preis, Vertrieb, Kommunikation, Prozesse, Ausstattung), Durchführung (Führung Messestand, Aufträge/Stil, separate Kundenveranstaltung, Follow-up) und Nachmessearbeit (Controlling, Ergebnis, Vorbereitung nächste Messe). Diese drei Phasen beschreiben einen Regelkreis.',
            highlight: 'Die Entscheidung, ob ein Unternehmen sich an Messen und Ausstellungen beteiligt, hängt von vielen Überlegungen ab. Es ist die Entscheidung, auf Dauer am Markt teilzunehmen.'
          },
          {
            type: 'concept',
            title: '5.7 Durchführung: Dreiminutenerklärung und Gesprächsprotokoll',
            content: 'Die Dreiminutenerklärung ist ein kurzer, allgemeiner Überblick über Unternehmen und Marktleistungen, um Messebesucher in kurzer Zeit einordnen zu können. Jedes Gespräch mit einem Besucher wird auf einem Formblatt (Gesprächsprotokoll) protokolliert mit Angaben wie: Titel, Name, Funktion, Unternehmen, Branche, konkreter Bedarf, spezielle Anforderungen und Wünsche.',
            highlight: 'Das Informationsbriefing sollte jeden Morgen ein anderer Standmitarbeiter vorbereiten, damit jeder die Gelegenheit erhält, seine Eindrücke und Beobachtungen darzustellen.'
          },
          {
            type: 'table',
            title: 'Messebudget - Kostenarten',
            headers: ['Kostenart', 'Beispiele'],
            rows: [
              ['Basiskosten', 'Standmiete, Energiekosten, Ausstellerausweis, Transportkosten, Reisekosten, Personalkosten, Verpflegungskosten, Versicherungskosten.'],
              ['Standausstattung', 'Konzepterstellung, Planung und Realisation durch Standbau-Unternehmen, Auf- und Abbau, Möbel, Beleuchtung, Technik, Standgestaltung.'],
              ['Kommunikation', 'Einladungen, Werbegeschenke, Mailings, Pressemappen, Gutscheine, Prospekte, Kataloge.'],
              ['Sonstige Kosten', 'Schulungen/Trainings, Marktforschung für Planung und/oder Kontrolle.']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Ausstellung = Präsentation/Werben, Messe = Handeln/Verkaufen, Kongress = Debatten/Austausch.',
              'Drei Phasen: Planung, Durchführung, Nachmessearbeit.',
              'Vorteile: direkter Kontakt, Feedback, Selbstdarstellung, Konkurrenzbeobachtung.',
              'Dreiminutenerklärung = kurzer Überblick für den Erstkontakt.',
              'Gesprächsprotokoll = systematische Erfassung der Messekontakte.',
              'Nachbearbeitung ist essenziell: kurzfristig Kontakte aufarbeiten, Ausstellernachbesprechung durchführen.',
              'Zielgruppen: bestehende und neue Geschäftspartner, Einkäufer, Fach- und Führungskräfte, Kooperationspartner.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Messe', def: 'Veranstaltung zum Handeln und Verkaufen, direkter Kontakt zwischen Ausstellern und Fachbesuchern.'},
              {term: 'Ausstellung', def: 'Veranstaltung mit Schwerpunkt auf Präsentation von Produkten, Werben und Informieren.'},
              {term: 'Kongress', def: 'Mehrtägige Fachveranstaltung zu einem bestimmten Thema, Austausch über Neuigkeiten.'},
              {term: 'Dreiminutenerklärung', def: 'Kurzer, allgemeiner Überblick über das Unternehmen und seine Marktleistungen für den Erstkontakt am Messestand.'},
              {term: 'Gesprächsprotokoll', def: 'Formblatt zur systematischen Erfassung aller Kontaktdaten und Gesprächsinhalte bei Messegesprächen.'},
              {term: 'Kongressmesse', def: 'Mischform aus Messe und Kongress, bei der eine Messe um einen thematischen Kongress ergänzt wird.'},
              {term: 'Standkonzept', def: 'Planung der Standgestaltung, Produktpräsentation, Standaktivitäten und Personaleinsatz.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Sportsponsoring',r:'Förderung von sportlichen Anlässen oder Mannschaften'},{l:'Kultursponsoring',r:'Unterstützung von kulturellen Veranstaltungen, z.B. Konzerten'},{l:'Umweltsponsoring',r:'Unterstützung von Naturschutzorganisationen'},{l:'Sozialsponsoring',r:'Förderung des Gesundheitswesens'},{l:'Mediensponsoring',r:'Unterstützung von TV-Sendungen'}],
          options: ['Förderung von sportlichen Anlässen oder Mannschaften','Unterstützung von kulturellen Veranstaltungen, z.B. Konzerten','Unterstützung von Naturschutzorganisationen','Förderung des Gesundheitswesens','Unterstützung von TV-Sendungen'],
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
          template: 'Sponsoring ist die Bereitstellung von {0}, {1} oder {2} durch ein Unternehmen für eine Person, Gruppe oder Organisation gegen eine {3}.',
          blanks: [['Geld'],['Sachmitteln'],['Dienstleistungen'],['Gegenleistung']],
          tips: ['Sponsoring basiert auf dem Prinzip von Leistung und Gegenleistung.','Es können Geld, Sachmittel oder Dienstleistungen bereitgestellt werden.','Eine Gegenleistung (z.B. Werbemöglichkeiten) wird erwartet.'],
          reveal: ['Geld: finanzielle Unterstützung.','Sachmittel: z.B. Ausrüstung, Material.','Dienstleistungen: z.B. Know-how, Personal.','Gegenleistung: z.B. Logoplatzierung, Erwähnung.']
        },
        {
          id: 50, type: 'match', q: 'Sponsoring-Ziele klassifizieren',
          instruction: 'Die Sponsoring-Ziele unterteilen sich in drei Kategorien. Ordnen Sie zu.',
          pairs: [{l:'Bekanntheit steigern, Image verbessern',r:'Unternehmenskommunikationsziele'},{l:'Umsatz steigern, neue Märkte erschliessen',r:'Produkt-/Markenziele'},{l:'Kundenloyalität stärken, Beziehungen pflegen',r:'Beziehungsziele'}],
          options: ['Unternehmenskommunikationsziele','Produkt-/Markenziele','Beziehungsziele'],
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
          answer: 0,
          tips: ['Das Affinitätenkonzept hilft, passende Sponsoring-Engagements zu finden.','Es geht um die Übereinstimmung zwischen Sponsor und Gesponsertem.'],
          reveal: ['Das Affinitätenkonzept hilft bei der Definition der Sponsoringstrategie.','Es analysiert die Übereinstimmung (Affinität) zwischen Sponsor und Gesponsertem.']
        },
        {
          id: 52, type: 'tf', q: 'Sponsoring: Richtig oder Falsch',
          statements: [
            {s: 'Sponsoringmassnahmen werden idealerweise immer durch Massnahmen der Mediawerbung, Verkaufsförderung und Public Relations ergänzt.', c: true, feedback: 'Sponsoring allein reicht nicht aus, es braucht flankierende Massnahmen.'},
            {s: 'Bei der Realisation des Sponsoring gilt es insbesondere rechtliche Bestimmungen zu berücksichtigen.', c: true, feedback: 'Rechtliche Aspekte (Verträge, Markenrechte) sind wichtig.'},
            {s: 'Die Kontrolle beim Sponsoring misst nur die Umsatzwirkung.', c: false, feedback: 'Kontrolliert werden auch Erinnerung, Imagewirkung und Verhaltenswirkung.'}
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
      learningData: {
        title: 'Sponsoring',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale des Sponsoring erklären.',
              'die Formen des Sponsoring unterscheiden.',
              'die Ziele und Zielgruppen des Sponsoring beschreiben.',
              'geeignete Sponsoringstrategien auswählen.',
              'die Massnahmen des Sponsoring und deren Einsatzgebiete erläutern.'
            ]
          },
          {
            type: 'concept',
            title: '6.1 Definition und Merkmale des Sponsoring',
            content: 'Sponsoring ist ein Kommunikationsinstrument, bei dem ein Sponsor dem Gesponserten Geld, Sachmittel, Dienstleistungen oder Know-how zur Verfügung stellt. Im Gegenzug erhält der Sponsor als Gegenleistung die kommunikative Nutzung von Rechten an Personen (z. B. Sportler) oder Logonutzungsrechte. Sponsoring basiert auf dem Prinzip von Leistung und Gegenleistung und unterscheidet sich damit vom Mäzenatentum (keine Gegenleistung erwartet).',
            highlight: 'Sponsoring hat in den letzten Jahren stark an Bedeutung gewonnen: gesellschaftliche Veränderungen, wachsendes Freizeitbewusstsein und die Suche nach neuen Kommunikationswegen haben dazu beigetragen.'
          },
          {
            type: 'table',
            title: '6.2 Formen des Sponsoring',
            headers: ['Sponsoringform', 'Beschreibung'],
            rows: [
              ['Sportsponsoring', 'Circa 80%: Förderung von sportlichen Veranstaltungen, Einrichtungen, Einzelsportlern und Mannschaften. Besonders geeignet zur Erreichung eines Massenpublikums.'],
              ['Kultursponsoring', 'Circa 15%: Unterstützung kultureller Leistungen in den Bereichen bildende Kunst, Literatur, Theater, Kino, Oper, Museen, Konzerte. Geeignet für kleinere, ausgewählte Zielgruppen.'],
              ['Umweltsponsoring', 'Circa 2,5%: Unterstützung von Projekten, die der Umwelt zugutekommen. Der Fördergedanke steht im Vordergrund, z. B. Naturschutzorganisationen.'],
              ['Soziosponsoring', 'Circa 2,5%: Förderung von Einrichtungen des Gemeinwohls und Aktionen zugunsten der Gesellschaft, meist im Gesundheits- und Sozialwesen.'],
              ['Medien-/Programmsponsoring', 'Unterstützung von Presse-, Radio- und TV-Sendungen. Möglichkeiten: Programmsponsoring (Nennung im Vor-/Abspann), Programming, Product Placement.']
            ]
          },
          {
            type: 'concept',
            title: '6.3 Sponsoring-Konzept',
            content: 'Das Sponsoring-Konzept umfasst mehrere Schritte: Bestimmung/Überprüfung der Sponsoring-Situation, Analyse der Rahmenbedingungen, Sponsoring-Ziele (Wahrnehmung, Bekanntheit, Image, Mitarbeitermotivation), Sponsoring-Zielgruppen, Sponsoring-Strategie, Sponsoring-Projektierung (Massnahmen und Realisierung), Sponsoring-Realisierung und Sponsoring-Controlling (Expositionsmessung, Wahrnehmung, Erinnerung, Verhalten).',
            highlight: 'Das Sponsoring-Konzept wird sowohl aus Sicht des Sponsors als auch aus Sicht des Sponsoringnehmers erstellt.'
          },
          {
            type: 'concept',
            title: '6.5 Ziele des Sponsoring',
            content: 'Sponsoringziele sind mittelfristig und/oder projektbezogen ausgerichtet. Sie lassen sich unterteilen in: Unternehmenskommunikationsziele (Goodwill, Aufmerksamkeit, Imageverbesserung, Mitarbeitermotivation), Produkt-/Markenziele (Bekanntheit von Produkten, Verkaufsförderung im Umfeld des Events) und Beziehungsziele (Kundenpflege, Kontaktaufbau zu Kulturschaffenden, Sportlern, Medienschaffenden, Förderung des Teamgedankens).',
            highlight: 'Die Gewichtung der drei Hauptzielsetzungen ist in jedem Unternehmen unterschiedlich und muss sorgfältig auf die angesprochenen Zielgruppen, das Umfeld des Anlasses sowie die erwartete Medienwirkung abgestimmt werden.'
          },
          {
            type: 'concept',
            title: '6.6 Sponsoringstrategie: Auswahl von Sponsorships',
            content: 'Die Auswahl erfolgt über eine sorgfältig erarbeitete Ähnlichkeitsanalyse in zwei Schritten: Grobauswahl (geeignete Förderbereiche: Sport, Kultur, Soziales, Umwelt oder Medien) und Feinauswahl (konkrete Sponsoringbereiche: Einzelpersonen, Gruppen, Institutionen, Events). Der Status des Sponsors kann sein: Exklusiv-Sponsor (einziger Sponsor, Ownership-Ansatz), Hauptsponsor (umfangreiche Rechte), Co-Sponsor (geringerer Beitrag, Branchenexklusivrecht) oder Official Supplier.',
            highlight: 'Die Überprüfung erfolgt über die realisierbare Einbindung in die Unternehmens-, Produkt- oder Markenstrategie. Es muss eine Identifikation der thematischen Zusammenhänge zwischen dem Unternehmen und dem möglichen Förderbereich bestehen.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Sponsoring = Leistung (Geld, Sachmittel) und Gegenleistung (kommunikative Nutzung).',
              'Wichtigste Formen: Sportsponsoring (80%), Kultursponsoring (15%), Umwelt-/Soziosponsoring.',
              'Drei Hauptzielsetzungen: Unternehmenskommunikation, Produkt/Marke, Beziehungspflege.',
              'Sponsor-Status: Exklusiv-Sponsor, Hauptsponsor, Co-Sponsor, Official Supplier.',
              'Sponsoring braucht flankierende Massnahmen (Integration in Werbe-, VKF-, Distributions- und PR-Aktivitäten).',
              'Kontrolle misst: Exposition der Botschaft, Erinnerungswirkung, Imagewirkung, Verhaltens- und Umsatzwirkung.',
              'Abgrenzung zum Mäzenatentum: Mäzen erwartet keine Gegenleistung.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Sponsoring', def: 'Kommunikationsinstrument basierend auf Leistung und Gegenleistung: Sponsor stellt Mittel bereit, Gesponserter bietet kommunikative Nutzungsrechte.'},
              {term: 'Sportsponsoring', def: 'Förderung von sportlichen Veranstaltungen, Einrichtungen und Sportlern durch Sponsoren (ca. 80% aller Sponsoring-Aktivitäten).'},
              {term: 'Kultursponsoring', def: 'Unterstützung kultureller Leistungen wie Kunst, Literatur, Theater, Konzerte durch Unternehmen.'},
              {term: 'Exklusiv-Sponsor', def: 'Einziger Sponsor eines Events oder einer Organisation, besitzt den Ownership-Ansatz.'},
              {term: 'Hauptsponsor', def: 'Sponsor mit umfangreichen Rechten, aber nicht alleiniger Sponsor.'},
              {term: 'Co-Sponsor', def: 'Subsidiary Sponsor mit geringerem materiellem/finanziellem Beitrag, meist mit Branchenexklusivrecht.'},
              {term: 'Programmsponsoring', def: 'Nennung des Sponsors im Vor- oder Abspann von Presse-, Radio- und TV-Sendungen.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Bedarfsmenge, Bedarfszeitpunkte',r:'Potenzialdaten'},{l:'Datum der letzten Bestellung, Kauffrequenz',r:'Reaktionsdaten'},{l:'Art des ersten Kontakts, Datum des ersten Interesses',r:'Aktionsdaten'},{l:'Aktuelle Adressdaten',r:'Grunddaten'},{l:'Kundenwert, Kundenpotenzial',r:'Potenzialdaten'},{l:'Soziodemografische Daten',r:'Grunddaten'},{l:'Durchschnittlicher Bestellwert, Beschwerden',r:'Reaktionsdaten'}],
          options: ['Potenzialdaten','Reaktionsdaten','Aktionsdaten','Grunddaten'],
          tips: ['Grunddaten = Basisdaten wie Adresse, Demografie.','Aktionsdaten = Informationen über eigene Aktionen.','Reaktionsdaten = Kundenreaktionen und Kaufverhalten.','Potenzialdaten = Kundenwert und -potenzial.'],
          reveal: ['Bedarfsmenge/Bedarfszeitpunkte = Potenzialdaten.','Datum letzte Bestellung/Kauffrequenz = Reaktionsdaten.','Art/Datum des ersten Kontakts = Aktionsdaten.','Aktuelle Adressdaten = Grunddaten.','Kundenwert/Kundenpotenzial = Potenzialdaten.','Soziodemografische Daten = Grunddaten.','Durchschn. Bestellwert/Beschwerden = Reaktionsdaten.']
        },
        {
          id: 57, type: 'fill', q: 'Dialogmarketing Definition',
          instruction: 'Ergänzen Sie die Definition des Dialogmarketings.',
          template: 'Dialogmarketing ist eine Kommunikationsform mit dem Ziel, eine {0} Beziehung zum {1} aufzubauen und zu pflegen. Es ermöglicht eine {2} Ansprache und den Aufbau einer {3}.',
          blanks: [['interaktive'],['Kunden'],['individuelle','persönliche'],['Datenbank']],
          tips: ['Dialogmarketing = interaktive Beziehung.','Individuelle Ansprache ist ein Kernmerkmal.','Datenbanken sind das Herzstück.'],
          reveal: ['Interaktive Beziehung zum Kunden.','Individuelle/persönliche Ansprache.','Aufbau und Pflege einer Datenbank.']
        },
        {
          id: 58, type: 'match', q: 'Strategien des Dialogmarketings',
          instruction: 'Ordnen Sie die Beschreibungen den Dialogmarketing-Strategien zu.',
          pairs: [{l:'Neue Kunden gewinnen',r:'Akquisitionsstrategie'},{l:'Bestehende Kunden binden und Mehrwert bieten',r:'Bindungsstrategie'},{l:'Verlorene Kunden zurückgewinnen',r:'Rückgewinnungsstrategie'}],
          options: ['Akquisitionsstrategie','Bindungsstrategie','Rückgewinnungsstrategie'],
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
          answer: 2,
          tips: ['Dialogmarketing = individuelle, persönliche Kommunikation.','TV-Spots sind Massenwerbung, kein Dialog.','Direct Mail, E-Mail und Telefon sind typische DM-Instrumente.'],
          reveal: ['TV-Spot zur Primetime ist Massenwerbung (Mediawerbung), kein Dialogmarketing.','Direct Mail, E-Mail-Marketing und Telefonmarketing sind klassische DM-Massnahmen.']
        },
        {
          id: 60, type: 'tf', q: 'Dialogmarketing: Richtig oder Falsch',
          statements: [
            {s: 'Beim Dialogmarketing steht die individuelle, persönliche Ansprache im Vordergrund.', c: true, feedback: 'Dies ist das Kernmerkmal des Dialogmarketings.'},
            {s: 'Eine Dialogmarketing-Datenbank enthält nur Adressdaten.', c: false, feedback: 'Sie enthält Grunddaten, Aktionsdaten, Reaktionsdaten und Potenzialdaten.'},
            {s: 'Die Stopp-Kleber liegen gesamtschweizerisch bei ca. 45%.', c: true, feedback: 'Ca. 45% der Briefkästen haben Stopp-Kleber.'},
            {s: 'Dialogmarketing hat keine rechtlichen Einschränkungen.', c: false, feedback: 'Das Datenschutzgesetz stellt eine wichtige Einschränkung dar.'}
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
          answer: 1,
          tips: ['Dialog = interaktiver Austausch.','Es geht um Beziehungsaufbau, nicht um Massenreichweite.'],
          reveal: ['Das primäre Ziel des Dialogmarketings ist der Aufbau einer interaktiven Beziehung zum Kunden.','Es geht nicht um Massenreichweite (das wäre Mediawerbung).']
        }
      ],
      learningData: {
        title: 'Dialogmarketing',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale des Dialogmarketings, des Direkt- und des Database-Marketings erklären.',
              'die Zielgruppen und Ziele des Dialogmarketings beschreiben.',
              'die Massnahmen des Dialogmarketings und ihre Einsatzgebiete erläutern.',
              'Ansätze für ein Konzept des Dialogmarketings entwickeln.'
            ]
          },
          {
            type: 'concept',
            title: '7.1 Definitionen und Merkmale',
            content: 'Direktmarketing im Sinn von oft unspezifizierten, sprich unadressierten Massenversänden entwickelte sich in den letzten Jahren immer mehr zu einem Instrument des Dialogs mit neuen, bestehenden und auch ehemaligen Kunden, ganz im Sinn eines zielführenden Customer Relationship Management (CRM). Entsprechend wird dieses Kommunikationsinstrument heute nicht mehr Direktmarketing, sondern Dialogmarketing genannt.',
            highlight: 'Das Dialogmarketing (DM) umfasst sämtliche Kommunikationsmassnahmen, die darauf ausgerichtet sind, durch eine gezielte Einzelansprache einen direkten Kontakt zum Adressaten herzustellen und einen unmittelbaren Dialog zu initiieren.'
          },
          {
            type: 'concept',
            title: '7.1 Vorteile des Dialogmarketings',
            content: 'Gegenüber der klassischen Werbung hat Dialogmarketing wesentliche Vorteile: Bekannte Personen können persönlich und individualisiert kontaktiert werden, es wird ein Dialog und eine Beziehung aufgebaut, die Kunden können persönlich ermittelt und in einer Datenbank erfasst werden, Cross-Selling wird ermöglicht, tiefere Streuverluste als bei Mediawerbung. Die individuelle Kontaktansprache vermindert die Streuverluste und führt zu einer Gewinnverbesserung aufgrund von Kostensenkungspotenzialen.',
            highlight: 'Database-Marketing ist die interne und externe Gewinnung individueller personen- und firmenspezifischer Daten zum Aufbau dauerhafter Kundenbeziehungen.'
          },
          {
            type: 'table',
            title: 'Dialogmarketing-Datenbank: Vier Datenarten',
            headers: ['Datenart', 'Beschreibung'],
            rows: [
              ['Grunddaten', 'Längerfristig gleichbleibende Kundendaten: aktuelle Adress-, soziodemografische und psychologische Daten.'],
              ['Aktionsdaten', 'Informationen über kundenbezogene Massnahmen, die bisher realisiert wurden: Art des ersten Kontakts, Datum des ersten Interesses, Kommunikationsgrundlage (Klub, Kataloge), Werbemitteleinsatz.'],
              ['Reaktionsdaten', 'Informationen über Reaktionen der Kunden auf Aktionen: Datum der letzten Bestellung, Kauffrequenz, durchschnittlicher Bestellwert, Beschwerden.'],
              ['Potenzialdaten', 'Zukunftsbezogene Daten zum Nachfrageverhalten: Bedarfsmenge, Bedarfszeitpunkte, Nutzung von Konkurrenzprodukten, Kundenwert und Kundenpotenzial.']
            ]
          },
          {
            type: 'concept',
            title: '7.3 Ziele des Dialogmarketings',
            content: 'Es gibt viele Einsatzmöglichkeiten des Dialogmarketings mit folgenden Zielen: Kundengewinnungsfunktion (Recruitment) - Interessentengewinnung, Neukundengewinnung; Kundenbindungsfunktion (Retention) - Kundenaktivierung, Kundenpflege, Kommunikation von Klubaktivitäten; Kundenrückgewinnungsfunktion (Recovery) - Entfachung neuer Begeisterung ehemaliger Kunden, neuer Beziehungsaufbau. Weitere Funktionen: Verkaufsfunktion, Einladungsfunktion, Aufgaben analog zur klassischen Kommunikation.',
            highlight: 'Es ist ca. siebenmal leichter (bzw. billiger), einen Stammkunden zum Kauf zu bewegen, als einen neuen Kunden für sich zu gewinnen.'
          },
          {
            type: 'concept',
            title: '7.4 Strategien des Dialogmarketings',
            content: 'Direct Marketing ist darauf ausgerichtet, einen direkten Kontakt zu den Zielgruppen herzustellen und einen Dialog zu initiieren. Vier Hauptstrategien: Akquisitionsstrategie (Neukundenakquisition, Kontakt herstellen), Informationsstrategie (bestehende Kunden über neue Produkte/Preise informieren), Betreuungsstrategie (Kontakte pflegen, Kundenbindung erhöhen, Cross-Selling-Potenziale realisieren), Abverkaufsstrategie (Kunden unmittelbar zum Kauf bewegen, z. B. personalisierte Kataloge, E-Mail-Newsletter mit Bestell-Option).',
            highlight: 'Ein besonders häufig genutztes Instrument im Dialogmarketing ist das Callcenter, das deutlich höhere Erfolgsquoten im Vergleich zum klassischen Mailing erzielt.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Dialogmarketing = gezielte Einzelansprache für direkten Kontakt und Dialog.',
              'Früher Direktmarketing, heute Dialogmarketing im Sinn von CRM.',
              'Database-Marketing = Gewinnung und Nutzung individueller Kundendaten.',
              'Vier Datenarten: Grunddaten, Aktionsdaten, Reaktionsdaten, Potenzialdaten.',
              'Drei Hauptfunktionen: Kundengewinnung (Recruitment), Kundenbindung (Retention), Kundenrückgewinnung (Recovery).',
              'Vier Strategien: Akquisition, Information, Betreuung, Abverkauf.',
              'Callcenter = höhere Erfolgsquoten als klassisches Mailing, aber auch höhere Kosten.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Dialogmarketing', def: 'Sämtliche Kommunikationsmassnahmen zur gezielten Einzelansprache und zum Aufbau eines direkten Dialogs mit dem Kunden.'},
              {term: 'Database-Marketing', def: 'Gewinnung individueller personen- und firmenspezifischer Daten zum Aufbau dauerhafter Kundenbeziehungen.'},
              {term: 'Customer Relationship Management (CRM)', def: 'Zielführendes Management der Kundenbeziehungen über den gesamten Kundenlebenszyklus.'},
              {term: 'Dialogmarketing-Datenbank', def: 'Zentrale Datenbank mit Grund-, Aktions-, Reaktions- und Potenzialdaten der Kunden.'},
              {term: 'Direct-Response-Werbung', def: 'Werbung, bei der der Empfänger sein Interesse bekundet und reagiert, wodurch neue Zielgruppen erschlossen werden.'},
              {term: 'Akquisitionsstrategie', def: 'Strategie zur Neukundengewinnung durch direkten Kontakt und Interessentenansprache.'},
              {term: 'Betreuungsstrategie', def: 'Strategie zur Pflege bestehender Kontakte, Erhöhung der Kundenbindung und Realisierung von Cross-Selling-Potenzialen.'},
              {term: 'One-to-one-Marketing', def: 'Hochgradig individualisiertes Marketing, bei dem das Unternehmen nicht eine Zielgruppe, sondern eine Zielperson sucht.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Hohe Reichweite',r:'Vorteil'},{l:'Hohe Aufmerksamkeit, wenn richtig eingesetzt',r:'Vorteil'},{l:'Tiefe Kosten, wenn richtig eingesetzt',r:'Vorteil'},{l:'Funktionsweise ist nicht immer transparent',r:'Nachteil'},{l:'Hohe Kosten ohne Werbeeffekt, wenn falsch eingesetzt',r:'Nachteil'}],
          options: ['Vorteil','Nachteil'],
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
          template: '1. Eigene {0}, 2. {1} (SEO und SEA), 3. {2}, 4. {3}, 5. {4}, 6. Banner-Werbung ({5}).',
          blanks: [['Website'],['Suchmaschinenmarketing'],['Social-Media-Kommunikation','Social Media'],['E-Mail-Marketing'],['Newsletter'],['Display-Werbung','Display']],
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
          answer: 1,
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
            {s: 'Die Bedeutung der herkömmlichen Medien nimmt zugunsten der Online-Medien ab.', c: true, feedback: 'Online-Massnahmen werden für Unternehmen immer wichtiger.'},
            {s: 'Online-Kommunikation gehört zu den teuersten Kommunikationsformen.', c: false, feedback: 'Online-Kommunikation ist eher günstig, aber zeitintensiv.'},
            {s: 'Google Analytics ist ein kostenloses Tool zur Messung der Online-Aktivitäten.', c: true, feedback: 'Die Grundversion von Google Analytics ist kostenlos.'},
            {s: 'Cookies sind für das Targeting irrelevant.', c: false, feedback: 'Cookies werden für die Kontrolle der Werbung und das Targeting verwendet.'}
          ],
          tips: ['Online wächst, herkömmlich schrumpft.','Online-Kommunikation ist günstig aber zeitintensiv.','Google Analytics ist kostenlos.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - günstig, aber zeitintensiv.','Aussage 3: Richtig.','Aussage 4: Falsch - Cookies sind wichtig fürs Targeting.']
        },
        {
          id: 71, type: 'match', q: 'Social-Media-Kanäle',
          instruction: 'Ordnen Sie die Beschreibungen den Social-Media-Kanälen zu.',
          pairs: [{l:'Kurze Textnachrichten, Echtzeitkommunikation, 280 Zeichen',r:'Twitter/X'},{l:'Foto- und Video-Sharing, visueller Content, Stories',r:'Instagram'},{l:'Berufliches Netzwerk, B2B-Kommunikation',r:'LinkedIn'},{l:'Grösstes soziales Netzwerk, breite Zielgruppe',r:'Facebook'}],
          options: ['Twitter/X','Instagram','LinkedIn','Facebook'],
          tips: ['Twitter/X = kurze Texte.','Instagram = visueller Content.','LinkedIn = beruflich/B2B.','Facebook = breiteste Zielgruppe.'],
          reveal: ['Twitter/X: Kurze Nachrichten, Echtzeit.','Instagram: Fotos, Videos, Stories.','LinkedIn: B2B, berufliches Netzwerk.','Facebook: Grösstes Netzwerk, breite Zielgruppe.']
        }
      ],
      learningData: {
        title: 'Social Media',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'verschiedene Massnahmen der Online-Kommunikation nennen.',
              'die Begriffe SEO und SEA voneinander unterscheiden.',
              'das Vorgehen beim Einsatz von Social Media erläutern.',
              'die wichtigsten Arten von Social-Media-Inhalten beschreiben.',
              'die wichtigsten Kriterien zum Umsetzen von Newsletter-Marketing erklären.'
            ]
          },
          {
            type: 'concept',
            title: '8.1 Massnahmen der digitalen Kommunikation',
            content: 'Die eigene Website ist der Kern der meisten Online-Marketing-Aktivitäten. Sie dient der Kundenbindung, Neukundenakquisition und Beziehungspflege. Neben der Website sind die zwei wichtigsten Massnahmen im Suchmaschinenmarketing: Suchmaschinenoptimierung (SEO) und Suchmaschinenwerbung (SEA). SEO zielt darauf ab, die Website suchmaschinenfreundlich zu gestalten (Key Words in Titeln, Texten und Bildlegenden). SEA wird eingesetzt, damit die eigene Website in Suchmaschinen auf der Resultatseite angezeigt wird (Adwords, bezahlte Anzeigen).',
            highlight: 'Die Benutzerfreundlichkeit (Usability) steht bei der Gestaltung der Website im Vordergrund. Neben Text und Bild können auch Videos, Ton, Downloads und Chat-Funktionen integriert werden.'
          },
          {
            type: 'concept',
            title: '8.2 Social-Media-Kommunikation',
            content: 'Social-Media-Kommunikation (SMM) ist ein Teil der Online-Kommunikation. Unter Social Media werden alle Plattformen verstanden, die es ihren Nutzern erlauben, Inhalte zu kreieren, auszutauschen und sich gegenseitig zu vernetzen. Zu den bekanntesten gehören Instagram, Facebook, TikTok, LinkedIn, Twitter und YouTube. Das entscheidende Element ist der Austausch zwischen den Usern. Das Unternehmen verliert dabei teilweise die Kontrolle über die Inhalte.',
            highlight: 'Social Media Content sollte einzigartig gestaltet und speziell für die Plattform angepasst werden, auf der die Inhalte geteilt werden.'
          },
          {
            type: 'table',
            title: 'Social-Media-Kennzahlen',
            headers: ['Kennzahl', 'Beschreibung'],
            rows: [
              ['Interaktion', 'Klicks, Kommentare, Likes und Antworten auf Social-Media-Beiträge.'],
              ['Reichweite', 'Anzahl der Personen, die Content auf einer Website oder einem Profil gesehen haben.'],
              ['Follower', 'Anzahl der Personen, die einem Profil folgen und den Content regelmässig sehen.'],
              ['Impressionen', 'Anzahl der Aufrufe eines Beitrags, unabhängig davon, ob er angeklickt wird.'],
              ['Videoaufrufe', 'Anzahl der Aufrufe auf YouTube, Facebook, Snapchat, Instagram etc.'],
              ['Mentions', 'Anzahl der Erwähnungen eines Profils durch Mitglieder der Zielgruppe.'],
              ['Shares/Reposts', 'Beiträge, die von Followern in ihrem Netzwerk geteilt oder repostet werden.']
            ]
          },
          {
            type: 'table',
            title: 'Anwendungsbereiche von Social Media',
            headers: ['Plattform', 'Massnahme', 'Beschreibung'],
            rows: [
              ['Instagram', 'Influencer-Marketing', 'Werbung für Produkte und Leistungen durch Influencer.'],
              ['TikTok', 'Influencer-Marketing', 'Werbung für Produkte und Leistungen durch Influencer.'],
              ['Facebook', 'Kundendienst', 'Online-Support für Kundenfragen und Probleme.'],
              ['Blog, Twitter', 'Public Relations', 'Fachartikel und Tweets zu Fachthemen, Fachkompetenz unter Beweis stellen.'],
              ['LinkedIn, Xing', 'Personalmarketing', 'Anwerben von künftigen Mitarbeitenden.'],
              ['YouTube', 'Kundendienst, Imagepflege', 'Videos zur korrekten Installation oder zum Gebrauch der Produkte, Image- und Werbevideos.']
            ]
          },
          {
            type: 'methodenbox',
            title: 'Vorgehen bei der Social-Media-Strategie',
            text: '1. Strategie definieren mit Zielen und Zielgruppen. 2. Passende Plattform(en) wählen anhand der Zielgruppenkenntnisse. 3. Zuhören, was auf der Plattform geschieht, und lernen. 4. Inhalte erstellen und regelmässig veröffentlichen. 5. Relevanten Inhalt wählen und kreativ sein. 6. Auf Kommentare reagieren und interagieren. 7. Traffic auf dem eigenen Kanal und der Website aufbauen. Nicht blind auf jede Plattform aufspringen, sondern mit einer Strategie und einem klaren Ziel an die Sache herangehen.'
          },
          {
            type: 'concept',
            title: '8.2.5 Besonderheiten der Social-Media-Kommunikation',
            content: 'Social-Media-Plattformen leben von User Generated Content und der Interaktion zwischen den Usern. Unternehmen verlieren einen Teil der Kontrolle. Gefürchtet sind Shitstorms, die zu massiven Reputationsschäden führen können. Bei Kritik ist eine transparente, ehrliche und authentische Kommunikation gefragt. Keine Lösung ist das Löschen der Kommentare oder das Schliessen des Kanals. Eine weitere Besonderheit: Jedermann kann gleichberechtigt auf den verschiedenen Kanälen präsent sein und sich eine Community aufbauen.',
            highlight: 'Der Erfolg in den sozialen Medien hängt ganz vom Erfolg des geposteten Contents ab. Gefragt sind spannende Inhalte, Authentizität und ein echtes Interesse an den Themen.'
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Website = Kern der Online-Marketing-Aktivitäten, Usability ist entscheidend.',
              'SEO = Suchmaschinenoptimierung (organisch), SEA = Suchmaschinenwerbung (bezahlt/Adwords).',
              'Social Media = Plattformen zum Kreieren, Austauschen und Vernetzen von Inhalten.',
              'Wichtige Kennzahlen: Interaktion, Reichweite, Follower, Impressionen, Mentions, Shares.',
              'Online-Kommunikation gehört zu den wachsenden Bereichen, Print ist rückläufig.',
              'Social-Media-Strategie: Ziele definieren, Plattform wählen, zuhören, Inhalte erstellen, interagieren.',
              'Shitstorms erfordern transparente, ehrliche Kommunikation - nicht löschen oder ignorieren.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'SEO (Search Engine Optimization)', def: 'Suchmaschinenoptimierung: Website suchmaschinenfreundlich gestalten, damit sie bei relevanten Suchanfragen gefunden wird.'},
              {term: 'SEA (Search Engine Advertising)', def: 'Suchmaschinenwerbung: Bezahlte Anzeigen (Adwords), die bei bestimmten Suchwörtern geschaltet werden.'},
              {term: 'Social Media', def: 'Plattformen, die es Nutzern erlauben, Inhalte zu kreieren, auszutauschen und sich zu vernetzen (Instagram, Facebook, TikTok, LinkedIn etc.).'},
              {term: 'User Generated Content', def: 'Von Nutzern der Plattform erstellte Inhalte, nicht vom Unternehmen selbst.'},
              {term: 'Influencer-Marketing', def: 'Werbung für Produkte und Leistungen durch Personen mit grosser Reichweite und Glaubwürdigkeit in sozialen Medien.'},
              {term: 'Shitstorm', def: 'Massive öffentliche Kritik in sozialen Medien, die zu Reputationsschäden und Umsatzeinbussen führen kann.'},
              {term: 'Usability', def: 'Benutzerfreundlichkeit einer Website oder Anwendung.'},
              {term: 'Display-Werbung', def: 'Online-Werbung in Form von Bannern, Pop-ups und anderen visuellen Formaten auf Websites.'}
            ]
          }
        ]
      }
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
          pairs: [{l:'Anzeige oder Packungsabbildungen in Sekundenbruchteile aufgelöst',r:'Tachistoskop-Test'},{l:'Wiederholte Befragung gleichartiger, aber nicht identischer Zielgruppen',r:'Trackingstudie'},{l:'Beurteilung und Überprüfung der Erinnerungswerte (Posttest)',r:'Folder Test'},{l:'Liefert Indikatoren für die Einschätzung der Anzeigen-Wirkungsvoraussetzungen',r:'Copy Test'},{l:'Kontrolle des Lernerfolgs',r:'Trackingstudie'},{l:'Beurteilung unterschiedlicher Anzeigenentwürfe',r:'Folder Test'},{l:'Vergleich unterschiedlicher Spotkonzepte bzw. Spotlängen',r:'Studiotest'},{l:'Messung der Anzeigenerinnerung, Markenerinnerung, Bildelemente, Texterinnerung',r:'Folder Test'}],
          options: ['Tachistoskop-Test','Trackingstudie','Folder Test','Copy Test','Studiotest'],
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
          pairs: [{l:'Wird vor der Lancierung einer Kampagne durchgeführt',r:'Pre-Test (Vortest)'},{l:'Wird nach der Durchführung einer Kampagne durchgeführt',r:'Post-Test (Nachtest)'},{l:'Dient der Optimierung der Werbemittel',r:'Pre-Test (Vortest)'},{l:'Dient der Erfolgskontrolle',r:'Post-Test (Nachtest)'}],
          options: ['Pre-Test (Vortest)','Post-Test (Nachtest)'],
          tips: ['Pre-Test = vor der Lancierung.','Post-Test = nach der Durchführung.','Pre-Test optimiert, Post-Test kontrolliert.'],
          reveal: ['Pre-Test: Vor der Lancierung, dient der Optimierung.','Post-Test: Nach der Durchführung, dient der Erfolgskontrolle.']
        },
        {
          id: 76, type: 'fill', q: 'Prozess der Kommunikationsforschung',
          instruction: 'Ergänzen Sie die Schritte im Prozess der Kommunikationsforschung.',
          template: '1. Festlegung der {0}. 2. Bestimmung der {1}. 3. {2}. 4. {3}. 5. Präsentation der {4}.',
          blanks: [['Forschungsziele','Ziele'],['Methode','Forschungsmethode'],['Datenerhebung'],['Datenanalyse','Auswertung'],['Ergebnisse','Resultate']],
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
          answer: 1,
          tips: ['WEMF = Werbemedienforschung.','MACH = Media Analysis CH.','WEMF/MACH misst die Mediennutzung in der Schweiz.'],
          reveal: ['WEMF/MACH (Media Analysis CH) misst die Mediennutzung der Schweizer Bevölkerung.','MACH Basic, MACH Consumer, MA Leader sind die wichtigsten Studien.']
        },
        {
          id: 78, type: 'tf', q: 'Kommunikationsforschung: Richtig oder Falsch',
          statements: [
            {s: 'Der Effizienznachweis des Kommunikationsbudgets spielt angesichts knapper werdender Budgets eine immer grössere Rolle.', c: true, feedback: 'Die Werbewirkungs- und Werbeerfolgskontrolle wird immer wichtiger.'},
            {s: 'Pre-Tests werden nach der Durchführung einer Kampagne eingesetzt.', c: false, feedback: 'Pre-Tests werden VOR der Lancierung eingesetzt. Post-Tests nach der Durchführung.'},
            {s: 'Tachistoskop-Tests zeigen Anzeigen oder Packungsabbildungen in Sekundenbruchteilen.', c: true, feedback: 'Der Tachistoskop-Test ist ein klassisches Verfahren.'},
            {s: 'Trackingstudien befragen immer die gleichen Personen.', c: false, feedback: 'Trackingstudien befragen gleichartige, aber NICHT identische Zielgruppen (wiederholte Befragung).'}
          ],
          tips: ['Effizienznachweis wird immer wichtiger.','Pre-Test = vor, Post-Test = nach der Kampagne.','Trackingstudien = nicht-identische Zielgruppen.'],
          reveal: ['Aussage 1: Richtig.','Aussage 2: Falsch - Pre-Tests = vor der Lancierung.','Aussage 3: Richtig.','Aussage 4: Falsch - nicht identische, sondern gleichartige Zielgruppen.']
        },
        {
          id: 79, type: 'match', q: 'Messfaktoren der Kommunikationswirkung',
          instruction: 'Ordnen Sie die Messfaktoren den richtigen Beschreibungen zu.',
          pairs: [{l:'Fähigkeit der Werbung, Aufmerksamkeit zu erzeugen',r:'Stimulationsleistung'},{l:'Fähigkeit der Werbung, Informationen zu vermitteln',r:'Informationsleistung'},{l:'Fähigkeit der Werbung, Einstellungen und Verhalten zu beeinflussen',r:'Persuasionsleistung'}],
          options: ['Stimulationsleistung','Informationsleistung','Persuasionsleistung'],
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
      learningData: {
        title: 'Kommunikationsforschung',
        sections: [
          {
            type: 'intro',
            title: 'Lernziele',
            content: 'Nach der Bearbeitung dieses Kapitels können Sie ...',
            items: [
              'die wichtigsten Begriffe und Merkmale der Kommunikationsforschung erklären.',
              'die Aufgaben und Ziele der Kommunikationsforschung beschreiben.',
              'die Instrumente der Kommunikationsforschung und ihre Einsatzgebiete erläutern.',
              'Ansätze für ein Pre- und ein Posttest-Konzept entwickeln.'
            ]
          },
          {
            type: 'concept',
            title: '9.1 Möglichkeiten der Kommunikationsforschung',
            content: 'Die Kommunikation versucht, durch das Senden von Botschaften spezifische Zielgruppen anzusprechen und zu beeinflussen. Ziel ist die Änderung oder Verstärkung von Einstellungen und Verhalten. Der Umgang der Konsumenten mit diesen Informationen lässt sich in vier Phasen unterteilen: Informationsbeschaffung, Informationswahrnehmung, Informationsverarbeitung und Informationsspeicherung. Es gibt zwei grundlegende Möglichkeiten der Kommunikationsforschung: Pretesting (vor dem Medieneinsatz) und Posttesting (nach dem Medieneinsatz).',
            highlight: 'Wer kommuniziert, will Wirkung mit höchstmöglicher Effizienz. Werbewirkungs- und Werbeerfolgskontrolle liefern die notwendigen Nachweise.'
          },
          {
            type: 'concept',
            title: '9.1.1 Pretesting und 9.1.2 Posttesting',
            content: 'Beim Pretesting gibt es sechs Phasen: 1. Ausgangspunkte und Situationsanalyse, 2. Entwicklung und kreatives Brainstorming, 3. Verdichtung und Konkretisierung zu Konzeptboards, 4. Vorentscheid und Ausformulierung (1-2 Varianten), 5. Wahl des Kommunikationskonzepts, 6. Schaltung der Kommunikationsmittel. Beim Posttesting werden die Kommunikationsmassnahmen während und nach ihrer Schaltung überprüft.',
            highlight: 'Der Prozess der Kommunikationsforschung umfasst: Formulierung des Kommunikationsziels, dann vor der Schaltung (Pretests), während der Schaltung (Tracking-Studien) und nach der Schaltung (Posttests).'
          },
          {
            type: 'concept',
            title: '9.2.1 Recall und Recognition',
            content: 'Recall (Erinnerung) und Recognition (Wiedererkennung) werden in der Kommunikationsforschung prioritär untersucht. Recall ist die aktive Erinnerung an Werbekampagnen, Slogans, Anzeigen, Spots etc. ohne Befragungshilfen. Stufen der Erinnerung: Spontane Erinnerung (Spontaneous Recall), nicht unterstützte Erinnerung (Unaided Recall), angestützte Erinnerung (Prompted Recall), gestützte Erinnerung (Aided Recall). Recognition ist das passive Wiedererkennen einer Anzeige, eines Spots etc. durch Vorlage von Originalheften oder Anzeigen.',
            highlight: 'Recall = aktive Erinnerung ohne Hilfsmittel. Recognition = passives Wiedererkennen bei Vorlage des Originals.'
          },
          {
            type: 'table',
            title: '9.3 Verfahren der Kommunikationswirkungsmessung',
            headers: ['Verfahren', 'Beschreibung'],
            rows: [
              ['Folder Test', 'Messung der Aufmerksamkeits- und Erinnerungsstärke von Anzeigen. Befragte blättern eine Mappe mit Anzeigen durch und werden zu Erinnerungswerten befragt.'],
              ['Studiotest', 'Befragung von Probanden unter kontrollierbaren Testbedingungen. Der Interviewer betreut Teilnehmer einzeln und protokolliert spontane Reaktionen.'],
              ['Tachistoskop-Test', 'Experimentelle Methode: Gegenstände wie Symbole, Logos oder Anzeigen werden in kurzen Zeitintervallen vorgegeben, um spontane Anmutungen zu ermitteln.'],
              ['Attention Tracking', 'Effizientes Verfahren zur Messung der Werbewirkung von Titelseiten und Anzeigen. Probanden klicken am Bildschirm auf Aufmerksamkeitspunkte.'],
              ['Copy Test', 'Testverfahren zur Ermittlung der Wiedererkennungswerte unter Verwendung von Originalzeitschriften. Befragte blättern Seite für Seite durch.'],
              ['Trackingstudien', 'Fortlaufende Befragungen über einen längeren Zeitraum zu Markenbekanntheit, -verwendung und Image. Messung von Werbewirkungsparametern im Zeitverlauf.']
            ]
          },
          {
            type: 'concept',
            title: '9.4 Media- und Kommunikationswirkungsstudien',
            content: 'Unter Mediastudien wird die systematische und wissenschaftliche Erforschung des Beitrags von Kommunikationsmitteln bzw. Kommunikationskanälen zum Werbeerfolg verstanden (Werbeträgerforschung). Die wichtigsten Studien in der Schweiz sind: MACH Basic (Printmedien-Nutzung), Mediapulse TV Data (TV-Nutzung), Mediapulse Radio Data (Radio-Nutzung), MACH Consumer (Konsumverhalten und Mediennutzung), MA Leader (Entscheidungsträger in Wirtschaft und Verwaltung) und weitere.',
            highlight: 'Mediastudien liefern Informationen für die Mediaplanung und die Mediaselektion - sie untersuchen das Medienkonsumverhalten der Bevölkerung.'
          },
          {
            type: 'table',
            title: 'Briefing für Pre- und Posttests',
            headers: ['Schritt', 'Beschreibung'],
            rows: [
              ['1. Kurze Schilderung der Ausgangslage', 'Umfeldanalyse der Situation, Überblick der Kommunikationskonzeption und -strategie.'],
              ['2. Problemdefinition und Ziel der Untersuchung', 'Konkrete Ziele zur Markt-/Meinungsstimmung hinsichtlich Ertrags- und Wirkungsgrundsätze von Kommunikationsmassnahmen.'],
              ['3. Beschreibung der Erhebungsinhalte', 'Programmfragen werden definiert: Beachtung von Massnahmen, Impact, Persuasion.'],
              ['4. Angaben zur Forschungstechnik', 'Erhebungsmethode: Befragung, Beobachtung, Experiment, Gruppendiskussion.'],
              ['5. Zielgruppe = Grundgesamtheit', 'Definition der Personen, über die eine Aussage gemacht werden soll.'],
              ['6. Stichprobenbildung', 'Angemessene Grösse: Pretests 20-50 Personen, Posttests 400-2000 Personen.'],
              ['7. Timing der Arbeitsschritte', 'Pretests: 3-6 Wochen. Posttests: 6-8 Wochen.']
            ]
          },
          {
            type: 'merke',
            title: 'Merke dir!',
            items: [
              'Zwei Grundformen: Pretesting (vor Schaltung) und Posttesting (nach Schaltung).',
              'Recall = aktive Erinnerung (spontan, ungestützt, angestützt, gestützt).',
              'Recognition = passives Wiedererkennen durch Vorlage von Originalmaterial.',
              'Sechs Verfahren: Folder Test, Studiotest, Tachistoskop-Test, Attention Tracking, Copy Test, Trackingstudien.',
              'Werbewirkung = kommunikative Wirkung (Wahrnehmung, Erinnerung, Einstellung).',
              'Werbeerfolg = ökonomische Wirkung (Umsatz, Absatz, Marktanteil).',
              'Mediastudien: MACH Basic (Print), Mediapulse TV/Radio Data, MACH Consumer, MA Leader.'
            ]
          },
          {
            type: 'keyterms',
            title: 'Schlüsselbegriffe',
            terms: [
              {term: 'Pretesting', def: 'Überprüfung der kommunikativen Leistung eines Werbemittels vor dem endgültigen Einsatz der Werbung.'},
              {term: 'Posttesting', def: 'Überprüfung der Kommunikationsmassnahmen während und nach ihrer Schaltung.'},
              {term: 'Recall', def: 'Aktive Erinnerung an Werbekampagnen, Slogans, Anzeigen oder Spots ohne Befragungshilfen.'},
              {term: 'Recognition', def: 'Passives Wiedererkennen einer Anzeige oder eines Spots durch Vorlage von Originalmaterial.'},
              {term: 'Folder Test', def: 'Verfahren zur Messung der Aufmerksamkeits- und Erinnerungsstärke von Anzeigen in einer Testmappe.'},
              {term: 'Tachistoskop-Test', def: 'Experimentelle Methode mit kurzzeitiger Darbietung von Symbolen/Logos zur Ermittlung spontaner Anmutungen.'},
              {term: 'Attention Tracking', def: 'Verfahren zur Messung der Werbewirkung von Titelseiten und Anzeigen durch Blickverfolgung am Bildschirm.'},
              {term: 'MACH Basic', def: 'Wichtigste Schweizer Mediastudie zur Printmedien-Nutzung, Grundgesamtheit: CH + FL ab 14 Jahren.'},
              {term: 'Trackingstudien', def: 'Fortlaufende Befragungen über einen längeren Zeitraum zur Messung von Werbewirkungsparametern und Einstellungsänderungen.'}
            ]
          }
        ]
      }
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
