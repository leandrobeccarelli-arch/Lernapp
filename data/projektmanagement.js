window.BOOK_DATA = {
  id: 'projektmanagement',
  title: 'Projektmanagement für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Projektmanagement',
  author: 'Führer, Züger',
  year: 2017,
  totalPages: 142,
  pages: 142,
  color: '#d97706',
  chapters: [
    {
      id: 'ch1', pageStart: 10, pageEnd: 17, num: 'Teil A – Kapitel 1', title: 'Grundbegriffe des Projektmanagements',
      exercises: [
        {
          id: 1, type: 'match', title: 'Erfolgsfaktoren des Projektmanagements',
          q: 'Auf welche Erfolgsfaktoren des Projektmanagements beziehen sich die folgenden Aussagen?',
          pairs: [
            { l: '\u00abSelbst schwierige und kostspielige Projekte werden bei uns viel zu wenig systematisch angegangen!\u00bb', r: 'Methodik' },
            { l: '\u00abOhne Wir-Gefühl sind hervorragende Projektergebnisse nicht zu erzielen!\u00bb', r: 'Projektteam' },
            { l: '\u00abJedes Projekt braucht Promotoren, die es aktiv unterstützen!\u00bb', r: 'Projektumfeld, insbesondere das Topmanagement als wichtiger Promotor' },
            { l: '\u00abIn vielen Projekten kümmert man sich zu wenig darum, wie man die Betroffenen durch gezielte Massnahmen zu echten Beteiligten macht!\u00bb', r: 'Kommunikation (Stakeholdermanagement)' }
          ],
          options: ['Methodik', 'Projektteam', 'Projektumfeld, insbesondere das Topmanagement als wichtiger Promotor', 'Kommunikation (Stakeholdermanagement)'],
          tips: ['Denken Sie an die vier Erfolgsfaktoren: Methodik, Projektteam, Projektumfeld, Kommunikation.','Überlegen Sie, welche Aussage auf systematisches Vorgehen, Teamgeist, Unterstützung oder Einbindung von Betroffenen abzielt.','Methodik = systematisches Vorgehen, Projektteam = Wir-Gefühl, Projektumfeld = Promotoren, Kommunikation = Betroffene zu Beteiligten machen.'],
          reveal: ['«Systematisch angehen» bezieht sich auf die Methodik.','«Wir-Gefühl» bezieht sich auf das Projektteam.','«Promotoren» bezieht sich auf das Projektumfeld/Topmanagement.','«Betroffene zu Beteiligten machen» bezieht sich auf Kommunikation/Stakeholdermanagement.']
        },
        {
          id: 2, type: 'tf', title: 'Handelt es sich um ein Projekt?',
          q: 'Handelt es sich bei den folgenden Vorhaben um ein Projekt? Begründen Sie Ihre Antwort in Stichworten.',
          statements: [
            { s: 'Kongress eines Berufsverbands (zum 100-jährigen Jubiläum)', c: true },
            { s: 'Umbau des Firmenhauptsitzes', c: true },
            { s: 'Ausbau des MIS (Management-Informationssystems)', c: true },
            { s: 'Jahresplanung der Marketingabteilung', c: false },
            { s: 'Reorganisation des Verkaufs-Innendienstes', c: true }
          ],
          tips: ['Ein Projekt hat sechs Merkmale: zeitlich befristet, komplex, einmalig, begrenzte Ressourcen, innovativ, risikobehaftet.','Routinetätigkeiten und wiederkehrende Aufgaben sind keine Projekte.','Nicht alle sechs Merkmale müssen gleichzeitig zutreffen, aber die meisten sollten erfüllt sein.'],
          reveal: ['Kongress: Ja – einmalig (100 Jahre), zeitlich befristet, komplex.','Umbau: Ja – einmalig, zeitlich befristet, komplex, innovativ.','MIS-Ausbau: Ja – einmalig, komplex, innovativ, risikobehaftet.','Jahresplanung: Nein – wiederkehrende Routineaufgabe, nicht einmalig.','Reorganisation: Ja – einmalig, komplex, innovativ, risikobehaftet.']
        },
        {
          id: 3, type: 'text', title: 'Begrenzte Ressourcen',
          q: 'Welche besondere Rolle spielen begrenzte Ressourcen bei der Projektarbeit?',
          keywords: ['begrenzt', 'Ressourcen', 'kritisch', 'Projekterfolg', 'finanziell', 'Mittel', 'Budget', 'personell', 'Zeit', 'qualifiziert'],
          solution: 'Begrenzte Ressourcen in der Projektpraxis sind meist ein kritisches Thema. Sie gefährden den Projekterfolg. Seien dies zu geringe finanzielle Mittel (Projektbudgets), unzulängliche IT-Systeme oder vor allem auch: zu wenig personelle Ressourcen (zu wenig Zeit für die betreffende Projektarbeit oder zu wenig gut qualifiziert).',
          tips: ['Denken Sie an verschiedene Arten von Ressourcen: finanziell, personell, technisch.','Ressourcenknappheit ist einer der häufigsten Gründe für Projektprobleme.','Auch die Qualifikation der verfügbaren Personen spielt eine Rolle.'],
          reveal: ['Begrenzte Ressourcen gefährden den Projekterfolg.','Finanzielle Mittel (Budget) sind oft zu knapp bemessen.','Personelle Ressourcen: zu wenig Zeit oder zu wenig qualifizierte Mitarbeitende.','Auch unzulängliche IT-Systeme oder Sachmittel können ein Problem darstellen.']
        },
        {
          id: 44, type: 'mc',
          q: 'Anzahl Projektmerkmale',
          instruction: 'Wie viele typische Merkmale kennzeichnen ein Projekt gemäss Lehrbuch?',
          options: ['Vier', 'Fünf', 'Sechs', 'Sieben'],
          answer: 2,
          tips: ['Die Merkmale beginnen mit «zeitlich befristet».','Denken Sie auch an Einmaligkeit, Komplexität und Innovation.','Das sechste Merkmal bezieht sich auf Gefahren.'],
          reveal: ['Sechs Merkmale: Zeitlich befristet, Komplexität, Einmaligkeit, Begrenzte Ressourcen, Innovativ, Risikobehaftet.','Nicht alle Merkmale müssen gleichzeitig zutreffen.']
        },
        {
          id: 45, type: 'fill',
          q: 'Projektmerkmale ergänzen',
          instruction: 'Ergänzen Sie die sechs typischen Merkmale eines Projekts.',
          template: 'Ein Projekt ist gekennzeichnet durch: {0}, Komplexität, {1}, begrenzte Ressourcen, {2} und {3}.',
          blanks: [['zeitlich befristet','Zeitliche Befristung'],['Einmaligkeit','einmalig'],['innovativ','Innovation','Innovativ'],['risikobehaftet','Risikobehaftet','Risiko']],
          tips: ['Das erste Merkmal betrifft Anfang und Ende des Projekts.','Das dritte Merkmal bedeutet, dass ein Projekt etwas Neues schafft.','Das letzte Merkmal bezieht sich auf Unsicherheiten und Gefahren.'],
          reveal: ['Zeitlich befristet: klarer Anfang und klares Ende.','Einmaligkeit: kein Routinevorgang.','Innovativ: Neuigkeitswert vorhanden.','Risikobehaftet: Unsicherheiten und Gefahren.']
        },
        {
          id: 46, type: 'sort',
          q: 'Erfolgsfaktoren nach Ebene',
          instruction: 'Ordnen Sie die Erfolgsfaktoren von der Einzelperson (Projektleiter) bis zum Gesamtumfeld.',
          items: ['Projektleiter','Projektteam','Methodik','Kommunikation','Topmanagement','Projektidee/Projektumfeld'],
          correctOrder: [0,1,2,3,4,5],
          tips: ['Beginnen Sie mit der Einzelperson, die das Projekt direkt führt.','Das Projektteam arbeitet direkt unter dem Projektleiter.','Das Projektumfeld ist der weiteste Kreis.'],
          reveal: ['Projektleiter: Schlüsselperson für den Projekterfolg.','Projektteam: Wir-Gefühl und Zusammenarbeit.','Methodik: Systematisches Vorgehen.','Kommunikation: Stakeholder einbinden.','Topmanagement: Promotor des Projekts.','Projektidee/Projektumfeld: Rahmenbedingungen.']
        },
        {
          id: 47, type: 'mc',
          q: 'Kompetenz des Projektleiters',
          instruction: 'Welche Kompetenz ist für den Projekterfolg beim Projektleiter am ausschlaggebendsten?',
          options: ['Fachkompetenz','Soziale und persönliche Kompetenz','Methodenkompetenz','IT-Kompetenz'],
          answer: 1,
          tips: ['Die Auswahl erfolgt oft aufgrund der Fachkompetenz.','Doch eine andere Kompetenzart ist laut Lehrbuch ausschlaggebend.','Der Projektleiter muss als Generalist wirken.'],
          reveal: ['Die soziale und persönliche Kompetenz sind ausschlaggebend.','Der Projektleiter gestaltet die Rahmenbedingungen für die Zusammenarbeit.','Fachkompetenz allein reicht nicht aus – der PL muss als Generalist wirken.']
        },
        {
          id: 48, type: 'match',
          q: 'Projektarten zuordnen',
          instruction: 'Ordnen Sie die Beispiele der richtigen Projektart zu.',
          pairs: [
            { l: 'Neues Hochregallagersystem errichten', r: 'Bau- und Investitionsprojekt' },
            { l: 'Neue Software für die Buchhaltung einführen', r: 'IT-Projekt' },
            { l: 'Abteilung Verkauf reorganisieren', r: 'Organisationsprojekt' },
            { l: 'Neuen Vertriebskanal aufbauen', r: 'Marketingprojekt' }
          ],
          options: ['Bau- und Investitionsprojekt','F&E-Projekt','Organisationsprojekt','IT-Projekt','Marketingprojekt'],
          tips: ['Bau- und Investitionsprojekte betreffen Sachanlagen.','IT-Projekte betreffen Software und IT-Infrastruktur.','Organisationsprojekte verändern Aufbau- oder Ablauforganisation.'],
          reveal: ['Hochregallagersystem = Bau- und Investitionsprojekt (Sachanlagen).','Software = IT-Projekt.','Reorganisation = Organisationsprojekt.','Vertriebskanal = Marketingprojekt (Kundenakquisition).']
        },
        {
          id: 49, type: 'tf',
          q: 'Aussagen zum Projektmanagement',
          statements: [
            { s: 'Projektmanagement kann nur aus Sicht des Einzelprojekts betrachtet werden.', c: false, feedback: 'Es gibt zwei Perspektiven: Sicht des Unternehmens und Sicht des Einzelprojekts.' },
            { s: 'Das Topmanagement muss seine Rolle als Promotor aktiv wahrnehmen.', c: true, feedback: 'Eine passive Haltung kann den Projekterfolg hemmen oder verunmöglichen.' },
            { s: 'Aus Sicht des Einzelprojekts umfasst das Projektmanagement alle Methoden, Techniken und Prozesse zum Führen und Abwickeln eines Projekts.', c: true, feedback: 'Das ist die Einzelprojekt-Perspektive; die zweite Perspektive ist die Unternehmenssicht (Multiprojektmanagement).' },
            { s: 'Ein Projekt muss immer alle sechs Merkmale gleichzeitig aufweisen.', c: false, feedback: 'Nicht alle Merkmale müssen gleichzeitig zutreffen.' }
          ],
          tips: ['Projektmanagement hat zwei Perspektiven.','Denken Sie an die Einzelprojekt-Perspektive des Projektmanagements.','Die sechs Merkmale müssen nicht alle gleichzeitig zutreffen.'],
          reveal: ['PM hat zwei Perspektiven: Unternehmenssicht und Einzelprojektsicht.','Das Topmanagement ist ein wichtiger Promotor.','Aus Einzelprojektsicht umfasst PM Methoden, Techniken und Prozesse zum Führen und Abwickeln eines Projekts.','Die sechs Merkmale sind Leitlinien, nicht alle müssen gleichzeitig zutreffen.']
        },
        {
          id: 50, type: 'check',
          q: 'Gründe für Projektarbeit',
          instruction: 'Welche der folgenden Gründe sprechen für Projektarbeit?',
          statements: [
            { s: 'Technischer Fortschritt und Zeitdruck', c: true },
            { s: 'Steigende Komplexität realer Situationen', c: true },
            { s: 'Routinetätigkeiten effizienter gestalten', c: false },
            { s: 'Das notwendige Wissen nimmt zu', c: true },
            { s: 'Linienorganisation soll ersetzt werden', c: false }
          ],
          tips: ['Drei Veränderungen sprechen für Projektarbeit.','Es geht um Fortschritt, Komplexität und Wissen.','Routinetätigkeiten und Linienorganisation gehören nicht dazu.'],
          reveal: ['Technischer Fortschritt: Innovationszyklen werden kürzer.','Steigende Komplexität: Reale Situationen werden immer vielschichtiger.','Zunehmendes Wissen: Vermehrt Spezialisten und Teamarbeit nötig.','Routinetätigkeiten und Linienersatz sind keine Gründe für Projektarbeit.']
        },
        {
          id: 51, type: 'sort',
          q: 'Schlüsselfragen im Einzelprojektmanagement',
          instruction: 'Bringen Sie die PM-Komponenten in die logische Reihenfolge eines Projekts.',
          items: ['Projektinitialisierung','Projektplanung','Projektsteuerung (Controlling)','Projektführung und Stakeholdermanagement','Projektabschluss'],
          correctOrder: [0,1,2,3,4],
          tips: ['Ein Projekt beginnt mit der Initialisierung.','Nach der Planung folgt die Steuerung.','Der Abschluss steht am Ende.'],
          reveal: ['1. Projektinitialisierung: Bearbeiten wir die richtigen Projekte?','2. Projektplanung: Wie bearbeiten wir das Projekt fachgemäss?','3. Projektsteuerung: Wie bleiben wir auf dem geplanten Kurs?','4. Projektführung: Wie gehen wir mit betroffenen Menschen um?','5. Projektabschluss: Wie beenden wir das Projekt zweckmässig?']
        },
        {
          id: 52, type: 'fill',
          q: 'Einteilungskriterien für Projektarten',
          instruction: 'Ergänzen Sie drei der Einteilungskriterien, nach denen sich Projektarten klassifizieren lassen.',
          template: 'Projekte lassen sich u.a. einteilen nach: {0}, Grösse und Umfang, {1}, Laufzeit, Bedeutung für das Unternehmen, {2} und Stellung des Auftraggebers.',
          blanks: [['Projektinhalt','Inhalt'],['Komplexität'],['Reichweite']],
          tips: ['Der erste Blank betrifft den fachlichen Gegenstand (Investitions-, IT-, Marketingprojekt usw.).','Wie hoch/mittel/gering ist die Vielschichtigkeit?','regional, national, international bzw. Abteilung, Unternehmen, Konzern.'],
          reveal: ['Projektinhalt: z.B. Investitions-, F&E-, Organisations-, IT-, Marketingprojekte.','Komplexität: hoch, mittel oder gering.','Reichweite: regional, national, international bzw. Abteilung, Unternehmen, Konzern.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Anhand von Beispielen die typischen Merkmale eines Projekts bestimmen.',
            'Die wichtigsten Aspekte des Projektmanagements und die Erfolgsfaktoren für Projekte beschreiben.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Einzelprojektmanagement', def: 'Alle Methoden, Techniken und Prozesse, die das Führen und Abwickeln eines einzelnen Projekts unterstützen.' },
            { term: 'Erfolgsfaktoren', def: 'Sieben Faktoren, die zum Projekterfolg beitragen: Projektleiter, Topmanagement, Projektteam, Methodik, Kommunikation, Information, Projektidee/Projektumfeld.' },
            { term: 'Projektarten', def: 'Einteilung nach Inhalt, Grösse, Komplexität, Laufzeit, Bedeutung, Reichweite, Stellung des Auftraggebers.' },
            { term: 'Projektmanagement', def: 'Bewusste Gestaltung und Lenkung des Projektverlaufs zur Gewährleistung des Projekterfolgs.' },
            { term: 'Projektmerkmale', def: 'Sechs Merkmale: zeitlich befristet, Komplexität, Einmaligkeit, begrenzte Ressourcen, innovativ, risikobehaftet.' }
          ]},
          { type: 'concept', title: 'Projektmerkmale', content: 'Ein Projekt ist gekennzeichnet durch sechs Merkmale, die jedoch nicht alle gleichzeitig zutreffen müssen: Zeitlich befristet (klarer Anfang und klares Ende), Komplexität (vielschichtig), Einmaligkeit, Begrenzte Ressourcen, Innovativ (Neuigkeitswert), Risikobehaftet.', highlight: 'Ein Projekt hat einen klar definierten Anfang und ein klar definiertes Ende.' },
          { type: 'concept', title: 'Warum Projektarbeit?', content: 'Alle grösseren Veränderungs- bzw. Entwicklungsvorhaben in Unternehmen finden fast ausschliesslich über Projekte statt. Drei Veränderungen sprechen dafür: Technischer Fortschritt und Zeitdruck (Innovationszyklen werden kürzer), Steigende Komplexität (viele reale Situationen werden immer komplexer), Das notwendige Wissen nimmt zu (vermehrt Spezialisten und Teamarbeit nötig).' },
          { type: 'table', title: 'Projektarten', headers: ['Art', 'Merkmale bzw. Ziele', 'Beispiele'], rows: [
            ['Bau- und Investitionsprojekte', 'Herstellung, Errichtung oder Beschaffung von Sachanlagen', 'Bauvorhaben, Hochregallagersystem'],
            ['F&E-Projekte', 'Produkt- oder Prozessinnovationen', 'Medizinische Forschung, Produktweiterentwicklung'],
            ['Organisationsprojekte', 'Entwicklung oder Veränderung der Aufbau- und Ablauforganisation', 'Reorganisation, Gründung eines Start-ups'],
            ['IT-Projekte', 'Entwicklung von Softwareprogrammen, Aufbau oder Anpassung der IT-Infrastruktur', 'Neue Software, Implementierung PC-Betriebssystem'],
            ['Marketingprojekte', 'Marktbezogene Entwicklungsvorhaben zur Kundenakquisition und Kundenbindung', 'Neue Vertriebskanäle, Kundenevents']
          ]},
          { type: 'concept', title: 'Projektmanagement – Zwei Perspektiven', content: 'Projektmanagement kann aus zwei Perspektiven betrachtet werden: Aus Sicht des Unternehmens (Institutionalisierung des Projektmanagements, Multiprojektmanagement) und aus Sicht des Einzelprojekts (alle Methoden, Techniken und Prozesse zum Führen und Abwickeln eines Projekts).', highlight: 'Das Ziel des Projektmanagements ist, den Projekterfolg durch die bewusste Gestaltung und Lenkung des Projektverlaufs zu gewährleisten.' },
          { type: 'table', title: 'Schlüsselfragen im Einzelprojektmanagement', headers: ['Schlüsselfrage', 'Projektmanagement-Komponente'], rows: [
            ['Bearbeiten wir die richtigen Projekte?', 'Projektinitialisierung'],
            ['Wie bearbeiten wir das Projekt fachgemäss?', 'Projektplanung'],
            ['Wie bleiben wir auf dem geplanten Kurs?', 'Projektsteuerung (Projektcontrolling)'],
            ['Wie gehen wir mit betroffenen Menschen konstruktiv um?', 'Projektführung und Stakeholdermanagement'],
            ['Wie verschaffen wir dem Projekt den besten Rückenwind?', 'Stakeholdermanagement'],
            ['Wie gehen wir mit Informationen professionell um?', 'Information und Dokumentation'],
            ['Wie beenden wir das Projekt zweckmässig?', 'Projektabschluss']
          ]},
          { type: 'concept', title: 'Erfolgsfaktoren für Projekte', content: 'Sieben Erfolgsfaktoren tragen zur Erreichung eines gewünschten Soll-Zustands entscheidend bei. Sie sind miteinander eng verbunden und können sich gegenseitig positiv oder negativ verstärken.', highlight: 'Die sieben Erfolgsfaktoren sind: Projektleiter, Topmanagement, Projektteam, Methodik, Kommunikation, Information, Projektidee/Projektumfeld.' },
          { type: 'concept', title: 'Projektleiter', content: 'Der Projektleiter gestaltet die Rahmenbedingungen für eine erfolgreiche Zusammenarbeit im Projektteam. Die Auswahl erfolgt oft aufgrund der Fachkompetenz, doch die soziale und persönliche Kompetenz sind ausschlaggebend. Der Projektleiter muss eher als Generalist wirken.', highlight: 'Für den Projekterfolg sind die soziale und die persönliche Kompetenz des Projektleiters ausschlaggebend.' },
          { type: 'concept', title: 'Topmanagement', content: 'Das Topmanagement hat die oberste Entscheidungskompetenz über das Projekt und über dessen Rahmenbedingungen. Es muss seine Rolle als «Promotor» des Projekts wahrnehmen und den Projekterfolg aktiv fördern.', highlight: 'Eine passive Haltung des Topmanagements kann den Projekterfolg hemmen oder verunmöglichen.' },
          { type: 'concept', title: 'Projektteam', content: 'Ein optimales Projektteam wird so zusammengestellt, dass möglichst alle Interessen am Projektergebnis optimal vertreten sind. Es muss allmählich so zusammenwachsen, dass ein Wir-Gefühl entsteht und sich daraus ein produktives Zusammenarbeiten entwickelt.' },
          { type: 'merke', title: 'Merke dir!', items: ['Ein Projekt hat sechs Merkmale: zeitlich befristet, komplex, einmalig, begrenzte Ressourcen, innovativ, risikobehaftet – aber nicht alle müssen gleichzeitig zutreffen.','Projektmanagement lässt sich aus zwei Perspektiven betrachten: aus Sicht des Unternehmens (Multiprojektmanagement) und aus Sicht des Einzelprojekts (Führen und Abwickeln eines Projekts).','Für den Projekterfolg ist die soziale und persönliche Kompetenz des Projektleiters ausschlaggebender als die Fachkompetenz.','Die sieben Erfolgsfaktoren sind eng miteinander verbunden und können sich gegenseitig verstärken.'] },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Typische Merkmale von Projekten: Zeitlich befristet, Komplexität, Einmaligkeit, Begrenzte Ressourcen, Innovativ, Risikobehaftet.',
            'Einteilungskriterien für Projektarten: Projektinhalt, Grösse und Umfang, Komplexität, Laufzeit, Bedeutung für das Unternehmen, Reichweite, Stellung des Kunden bzw. Auftraggebers.',
            'Das Ziel des Projektmanagements ist, den Projekterfolg durch die bewusste Gestaltung und Lenkung des Projektverlaufs zu gewährleisten.',
            'Erfolgsfaktoren: Projektleiter, Topmanagement, Projektteam, Methodik, Kommunikation, Information, Projektidee/Projektumfeld.'
          ]}
        ]
      }
    },
    {
      id: 'ch2', pageStart: 18, pageEnd: 24, num: 'Teil A – Kapitel 2', title: 'Vorgehensmethodik',
      exercises: [
        {
          id: 4, type: 'check', title: 'Aufgaben den Planungsphasen zuordnen',
          q: 'Welche dieser typischen Aufgaben gehören zu welcher Planungsphase im Phasenkonzept? (Kreuzen Sie die Aufgaben an, die zur Vorstudie gehören.)',
          statements: [
            { s: 'Bedürfnisabklärung bei Stakeholdern durchführen', c: true },
            { s: 'Projektabgrenzung vervollständigen', c: true },
            { s: 'Qualitätsanforderungen detailliert beschreiben', c: false },
            { s: 'Ausschreibungsunterlagen (Pflichtenhefte) erstellen', c: false },
            { s: 'Machbarkeit von Lösungsvarianten prüfen', c: true },
            { s: 'Einführung planen', c: false }
          ],
          tips: ['Die Vorstudie ist die erste Phase und dient der groben Orientierung.','In der Vorstudie werden Bedürfnisse abgeklärt und die Machbarkeit geprüft.','Detaillierte Beschreibungen und Ausschreibungen gehören zu späteren Phasen.'],
          reveal: ['Bedürfnisabklärung: Vorstudie (Stakeholder-Bedürfnisse ermitteln).','Projektabgrenzung: Vorstudie (Was gehört zum Projekt, was nicht?).','Qualitätsanforderungen detailliert: Grobkonzept (nicht Vorstudie).','Ausschreibungsunterlagen: Detailkonzept.','Machbarkeitsprüfung: Vorstudie.','Einführung planen: Detailkonzept (nicht Vorstudie).']
        },
        {
          id: 5, type: 'text', title: 'Phasenkonzept vs. Planungszyklus',
          q: 'Erklären Sie einem Aussenstehenden in wenigen Sätzen den Unterschied zwischen dem Phasenkonzept und dem Planungszyklus.',
          keywords: ['Phasenkonzept', 'Projektverlauf', 'Planungszyklus', 'methodisch', 'Phase', 'Schritte', 'Vorgehen', 'innerhalb'],
          solution: 'Mit dem Phasenkonzept legt man das methodische Vorgehen für den gesamten Projektverlauf fest; eine Phase bildet einen abgeschlossenen Aufgabenblock innerhalb des Projekts. Wie der Name schon sagt, definiert der Planungszyklus das methodische Vorgehen innerhalb einer Planungsphase; für die Erreichung des Phasenziels müssen sämtliche sechs Schritte des Planungszyklus durchlaufen werden.',
          tips: ['Das Phasenkonzept betrifft den gesamten Projektverlauf.','Der Planungszyklus betrifft das Vorgehen innerhalb einer Phase.','Der Planungszyklus hat sechs Schritte.'],
          reveal: ['Phasenkonzept: Methodisches Vorgehen für den gesamten Projektverlauf.','Planungszyklus: Methodisches Vorgehen innerhalb einer Planungsphase.','Die sechs Schritte des Planungszyklus: Auftrag, Erhebung, Würdigung, Lösungssuche, Bewertung, Auswahl.']
        },
        {
          id: 6, type: 'match', title: 'Zweck der Vorgehensmethodik',
          q: 'Drei Projektleiterinnen tauschen ihre ersten Erfahrungen aus. Welchen Zweck der Vorgehensmethodik sprechen sie jeweils an?',
          pairs: [
            { l: 'Audrey: \u00abImmer wieder kommt es bei uns zu Grundsatzdiskussionen, ob man nun ein 3-Phasen- oder ein 6-Phasen-Modell einsetzen muss. Ich finde, man sollte nicht ein Modell für alle Projekte vorschreiben, sondern dieses projektbezogen festlegen können.\u00bb', r: 'Einheitliches Vorgehen' },
            { l: 'Bettina: \u00abIch bin ganz deiner Meinung, denn die Hauptsache ist: Der Auftraggeber, das Entscheidungsgremium und ich als Projektleiterin sind uns einig darüber, wann was zu entscheiden ist.\u00bb', r: 'Klare Meilensteine für Entscheidungen' },
            { l: 'Charlotte: \u00abMein letztes Projekt kam mir wie ein Hochseilakt vor, unter anderem, weil ich die Vorgehensmethodik nicht konsequent angewandt habe.\u00bb', r: 'Überblick bewahren trotz Detailarbeit' }
          ],
          options: ['Einheitliches Vorgehen', 'Klare Meilensteine für Entscheidungen', 'Transparenz für Entscheidende und Projektteam', 'Überblick bewahren trotz Detailarbeit', 'Unterstützung der Projektleitung'],
          tips: ['Audrey spricht über die Anzahl Phasen – das betrifft ein einheitliches Modell.','Bettina betont die Einigkeit über Entscheidungszeitpunkte.','Charlotte spricht über den Überblick bei der Detailarbeit.'],
          reveal: ['Audrey: Einheitliches Vorgehen (ein projektbezogenes Modell statt Grundsatzdiskussionen).','Bettina: Klare Meilensteine für Entscheidungen (wann was entschieden wird).','Charlotte: Überblick bewahren trotz Detailarbeit (Vorgehensmethodik als Leitplanke).']
        },
        {
          id: 53, type: 'sort',
          q: 'Basis-Phasenkonzept',
          instruction: 'Bringen Sie die sechs Phasen des Basis-Phasenkonzepts in die richtige Reihenfolge.',
          items: ['Vorstudie','Grobkonzept','Detailkonzept','Realisierung','Einführung','Erhaltung'],
          correctOrder: [0,1,2,3,4,5],
          tips: ['Die ersten drei Phasen gehören zur Planung.','Nach dem Detailkonzept beginnt die Umsetzung.','Die letzte Phase sichert den langfristigen Betrieb.'],
          reveal: ['1. Vorstudie: Grobe Orientierung und Machbarkeit.','2. Grobkonzept: Lösungsvarianten erarbeiten.','3. Detailkonzept: Ausführungsreifes Konzept.','4. Realisierung: Umsetzung des Konzepts.','5. Einführung: Übergabe an Benutzer.','6. Erhaltung: Langfristiger Betrieb sichern.']
        },
        {
          id: 54, type: 'fill',
          q: 'Planungszyklus ergänzen',
          instruction: 'Ergänzen Sie die sechs Schritte des Planungszyklus.',
          template: 'Der Planungszyklus besteht aus: {0}, Erhebung/Analyse, {1}, {2}, Bewertung und {3}.',
          blanks: [['Auftrag/Vertrag','Auftrag','Vertrag'],['Würdigung/Zielrevision','Würdigung','Zielrevision'],['Lösungssuche'],['Auswahl']],
          tips: ['Der erste Schritt betrifft die verbindliche Vereinbarung.','Der dritte Schritt bewertet Stärken, Schwächen, Chancen und Risiken.','Der letzte Schritt ist die definitive Entscheidung.'],
          reveal: ['Auftrag/Vertrag: Verbindliche Vereinbarungen treffen.','Würdigung/Zielrevision: Stärken/Schwächen und Chancen/Risiken beurteilen.','Lösungssuche: Konzeptentwurf und Konzeptanalyse.','Auswahl: Definitiver Entscheid durch Auftraggeber.']
        },
        {
          id: 55, type: 'mc',
          q: 'Planungsphasen im Phasenkonzept',
          instruction: 'Welche drei Phasen gehören zur Planung?',
          options: ['Vorstudie, Grobkonzept, Realisierung','Vorstudie, Grobkonzept, Detailkonzept','Grobkonzept, Detailkonzept, Einführung','Vorstudie, Realisierung, Erhaltung'],
          answer: 1,
          tips: ['Die Planung umfasst die ersten drei Phasen.','Mit dem Abschluss der Planung muss ein ausführungsreifes Konzept vorliegen.','Die Realisierung gehört bereits zur Umsetzung.'],
          reveal: ['Vorstudie, Grobkonzept und Detailkonzept gehören zur Planung.','Nach Abschluss dieser drei Phasen liegt ein ausführungsreifes Konzept vor.','Die Realisierung ist der Beginn der Umsetzungsphase.']
        },
        {
          id: 56, type: 'tf',
          q: 'Aussagen zum Phasenkonzept',
          statements: [
            { s: 'Je nach Projektgrösse können einzelne Phasen zusammengelegt oder weggelassen werden.', c: true, feedback: 'Das Phasenkonzept ist flexibel und wird an das Projekt angepasst.' },
            { s: 'Der Planungszyklus wird nur in der ersten Phase angewandt.', c: false, feedback: 'Der Planungszyklus kommt in jeder Planungsphase zur Anwendung.' },
            { s: 'Kollaborationstools dienen der laufenden Zusammenarbeit im Projektteam.', c: true, feedback: 'IT-gestützte Plattformen ermöglichen den Datenaustausch.' },
            { s: 'Ein Kanbansystem dient ausschliesslich der Kostenplanung.', c: false, feedback: 'Kanbansysteme dienen der Aufgabenorganisation und Fortschrittsverfolgung.' }
          ],
          tips: ['Das Phasenkonzept ist an die Projektgrösse anpassbar.','Der Planungszyklus wird in jeder Phase durchlaufen.','Kanban ist ein Werkzeug für Aufgabenmanagement.'],
          reveal: ['Phasen können flexibel zusammengelegt werden.','Der Planungszyklus wird in allen Planungsphasen angewandt.','Kollaborationstools: IT-Plattformen für Zusammenarbeit.','Kanbansysteme: Selbstorganisation der Projektaufgaben, nicht Kostenplanung.']
        },
        {
          id: 57, type: 'match',
          q: 'PM-Tools den Aufgaben zuordnen',
          instruction: 'Ordnen Sie die Einsatzmöglichkeiten der richtigen Aufgabe zu.',
          pairs: [
            { l: 'Netzplan und Balkendiagramme erstellen', r: 'Projektplanung' },
            { l: 'Soll-Ist-Analysen durchführen', r: 'Projektcontrolling' },
            { l: 'Kommunikationsunterlagen verwalten', r: 'Projektdokumentation' },
            { l: 'Ressourcenplanung durchführen', r: 'Projektplanung' }
          ],
          options: ['Projektplanung','Projektcontrolling','Projektdokumentation'],
          tips: ['Netzpläne und Balkendiagramme sind Planungswerkzeuge.','Soll-Ist-Analysen gehören zum Controlling.','Kommunikationsunterlagen sind Teil der Dokumentation.'],
          reveal: ['Netzplan/Balkendiagramme: Projektplanung (Terminplanung).','Soll-Ist-Analysen: Projektcontrolling (Abweichungen ermitteln).','Kommunikationsunterlagen: Projektdokumentation.','Ressourcenplanung: Projektplanung.']
        },
        {
          id: 58, type: 'check',
          q: 'Ziele der Vorgehensmethodik',
          instruction: 'Welche der folgenden Punkte sind Ziele der Vorgehensmethodik?',
          statements: [
            { s: 'Einheitliches Vorgehen', c: true },
            { s: 'Transparenz für Entscheidende und Projektteam', c: true },
            { s: 'Maximierung des Projektbudgets', c: false },
            { s: 'Klare Meilensteine für Entscheidungen', c: true },
            { s: 'Überblick bewahren trotz Detailarbeit', c: true },
            { s: 'Elimination aller Projektrisiken', c: false }
          ],
          tips: ['Es gibt fünf Ziele der Vorgehensmethodik.','Budgetmaximierung ist kein Ziel.','Risiken können nie vollständig eliminiert werden.'],
          reveal: ['Fünf Ziele: Einheitlichkeit, Transparenz, klare Meilensteine, Unterstützung der PL, Überblick.','Budgetmaximierung ist kein methodisches Ziel.','Risikoelimination ist unrealistisch – es geht um Risikomanagement.']
        },
        {
          id: 59, type: 'sort',
          q: 'Schritte des Planungszyklus',
          instruction: 'Bringen Sie die sechs Schritte des Planungszyklus in die richtige Reihenfolge.',
          items: ['Auftrag/Vertrag','Erhebung/Analyse','Würdigung/Zielrevision','Lösungssuche','Bewertung','Auswahl'],
          correctOrder: [0,1,2,3,4,5],
          tips: ['Der Zyklus beginnt mit der Auftragserteilung.','Nach der Erhebung werden Stärken und Schwächen gewürdigt.','Am Ende steht der Entscheid.'],
          reveal: ['1. Auftrag/Vertrag: Verbindliche Vereinbarungen.','2. Erhebung/Analyse: Informationen sammeln und ordnen.','3. Würdigung/Zielrevision: SWOT beurteilen, Ziele prüfen.','4. Lösungssuche: Varianten sammeln und würdigen.','5. Bewertung: Varianten vergleichen und beurteilen.','6. Auswahl: Entscheid durch Auftraggeber.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Ein einfaches Projekt in sinnvolle Teilschritte (Phasen) gliedern.',
            'Die sechs Teilschritte des Planungszyklus beschreiben.',
            'Einsatzmöglichkeiten von Projektmanagement-Tools in der Projektarbeit nennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Basis-Phasenkonzept', def: 'Sechs Phasen: Vorstudie, Grobkonzept, Detailkonzept, Realisierung, Einführung, Erhaltung.' },
            { term: 'Planungszyklus', def: 'Sechs Schritte innerhalb jeder Planungsphase: Auftrag/Vertrag, Erhebung/Analyse, Würdigung/Zielrevision, Lösungssuche, Bewertung, Auswahl.' },
            { term: 'Planung', def: 'Die ersten drei Phasen (Vorstudie, Grobkonzept, Detailkonzept) gehören zur Planung. Mit deren Abschluss muss ein ausführungsreifes Konzept vorliegen.' },
            { term: 'Kollaborationstools', def: 'IT-gestützte Plattformen für die laufende Zusammenarbeit und den Datenaustausch im Projektteam.' },
            { term: 'Kanbansysteme', def: 'Tools, die es Projektmitarbeitenden ermöglichen, ihre eigenen Projektaufgaben selbst zu organisieren und den Fortschritt zu verfolgen.' }
          ]},
          { type: 'concept', title: 'Ziele der Vorgehensmethodik', content: 'Ein methodisches Vorgehen in der Projektplanung bezweckt: Einheitliches Vorgehen, Transparenz für die Entscheidenden und das Projektteam, Klare Meilensteine für Entscheidungen (Entscheidungspunkte), Unterstützung des Projektleiters bei der Projektplanung und -steuerung, Überblick bewahren trotz Detailarbeit.', highlight: 'Das methodische Vorgehen bildet eine Art Leitplanke für alle Beteiligten.' },
          { type: 'svg', title: 'Basis-Phasenkonzept (6 Phasen)', svg: '<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><marker id="ph-arr" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#d97706"/></marker></defs><rect x="0" y="35" width="100" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="50" y="58" text-anchor="middle" fill="#92400e" font-size="11" font-weight="bold">Vorstudie</text><text x="50" y="72" text-anchor="middle" fill="#78716c" font-size="9">Phase 1</text><line x1="100" y1="60" x2="118" y2="60" stroke="#d97706" stroke-width="2" marker-end="url(#ph-arr)"/><rect x="120" y="35" width="100" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="170" y="58" text-anchor="middle" fill="#92400e" font-size="11" font-weight="bold">Grobkonzept</text><text x="170" y="72" text-anchor="middle" fill="#78716c" font-size="9">Phase 2</text><line x1="220" y1="60" x2="238" y2="60" stroke="#d97706" stroke-width="2" marker-end="url(#ph-arr)"/><rect x="240" y="35" width="100" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="290" y="58" text-anchor="middle" fill="#92400e" font-size="11" font-weight="bold">Detailkonzept</text><text x="290" y="72" text-anchor="middle" fill="#78716c" font-size="9">Phase 3</text><line x1="340" y1="60" x2="358" y2="60" stroke="#d97706" stroke-width="2" marker-end="url(#ph-arr)"/><rect x="360" y="35" width="100" height="50" rx="8" fill="#d97706" stroke="#92400e" stroke-width="2"/><text x="410" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Realisierung</text><text x="410" y="72" text-anchor="middle" fill="#fef3c7" font-size="9">Phase 4</text><line x1="460" y1="60" x2="478" y2="60" stroke="#d97706" stroke-width="2" marker-end="url(#ph-arr)"/><rect x="480" y="35" width="100" height="50" rx="8" fill="#d97706" stroke="#92400e" stroke-width="2"/><text x="530" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Einführung</text><text x="530" y="72" text-anchor="middle" fill="#fef3c7" font-size="9">Phase 5</text><line x1="580" y1="60" x2="598" y2="60" stroke="#d97706" stroke-width="2" marker-end="url(#ph-arr)"/><rect x="600" y="35" width="100" height="50" rx="8" fill="#d97706" stroke="#92400e" stroke-width="2"/><text x="650" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Erhaltung</text><text x="650" y="72" text-anchor="middle" fill="#fef3c7" font-size="9">Phase 6</text><rect x="0" y="95" width="340" height="22" rx="4" fill="none" stroke="#d97706" stroke-width="1" stroke-dasharray="4,3"/><text x="170" y="110" text-anchor="middle" fill="#d97706" font-size="10" font-weight="bold">Planung</text><rect x="360" y="95" width="340" height="22" rx="4" fill="none" stroke="#92400e" stroke-width="1" stroke-dasharray="4,3"/><text x="530" y="110" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Umsetzung</text></svg>' },
          { type: 'concept', title: 'Basis-Phasenkonzept', content: 'Das Basis-Phasenkonzept besteht aus sechs Phasen: Vorstudie, Grobkonzept, Detailkonzept, Realisierung, Einführung und Erhaltung. Die ersten drei Phasen gehören zur Planung. Je nach Projektgrösse und -komplexität können einzelne Phasen zusammengelegt oder weggelassen werden.', highlight: 'Je nach Projektgrösse können einzelne Phasen zusammengelegt oder weggelassen werden.' },
          { type: 'table', title: 'Planungszyklus – Schritte', headers: ['Schritt', 'Aktivitäten'], rows: [
            ['Auftrag / Vertrag', 'Verbindliche Vereinbarungen, bei Änderungen Vertrag überarbeiten'],
            ['Erhebung / Analyse', 'Sammeln und Ordnen relevanter Informationen'],
            ['Würdigung / Zielrevision', 'Stärken/Schwächen sowie Chancen/Risiken beurteilen, evtl. Überarbeitung der Ziele'],
            ['Lösungssuche', 'Lösungen sammeln (Konzeptentwurf) und Lösungsvarianten würdigen (Konzeptanalyse)'],
            ['Bewertung', 'Lösungsvarianten vergleichen und beurteilen, weiterzuverfolgende Variante vorschlagen'],
            ['Auswahl', 'Definitiver Entscheid über zu verfolgende Lösung durch Auftraggeber oder Entscheidungsgremium']
          ]},
          { type: 'table', title: 'Projektmanagement-Tools', headers: ['Aufgabe', 'Einsatzmöglichkeiten'], rows: [
            ['Projektplanung', 'Projektstrukturierung und Aufgabenplanung, Terminplanung (Netzplan und Balkendiagramme), Ressourcenplanung, Kostenplanung'],
            ['Projektcontrolling', 'Projektfortschrittskontrolle, Soll-Ist-Analysen, Risikomanagement, Änderungsmanagement, Issue Management'],
            ['Projektdokumentation', 'Arbeitsunterlagen des Projektteams, Projektdokumentation, Kommunikationsunterlagen']
          ]},
          { type: 'merke', title: 'Merke dir!', items: ['Das Basis-Phasenkonzept hat 6 Phasen: Vorstudie, Grobkonzept, Detailkonzept, Realisierung, Einführung, Erhaltung.','Die ersten drei Phasen bilden die Planung – danach muss ein ausführungsreifes Konzept vorliegen.','Der Planungszyklus (6 Schritte) wird innerhalb jeder Planungsphase durchlaufen.','Phasen können je nach Projektgrösse zusammengelegt oder weggelassen werden.'] },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das methodische Vorgehen in der Projektplanung bezweckt: Einheitlichkeit, Transparenz, Klare Entscheidungsgrundlagen, Planungs- und Steuerungshilfe, Übersicht.',
            'Das Basis-Phasenkonzept besteht aus sechs Phasen: Vorstudie, Grobkonzept, Detailkonzept, Realisierung, Einführung, Erhaltung.',
            'Vorstudie, Grobkonzept und Detailkonzept gehören zur Planung, mit deren Abschluss ein ausführungsreifes Konzept vorliegen muss.',
            'Mit der Realisierung erfolgt die Umsetzung des verabschiedeten Konzepts.',
            'Die Einführung ist die Übergabe der Lösung bzw. des Systems an die Benutzer.',
            'Innerhalb der einzelnen Planungsphasen kommt der Planungszyklus zur Anwendung (6 Schritte).',
            'Zahlreiche Projektmanagement-Tools vereinfachen die Projektplanung und -steuerung. Für die laufende Zusammenarbeit werden Kollaborationstools und Kanbansysteme genutzt.'
          ]}
        ]
      }
    },
    {
      id: 'ch3', pageStart: 26, pageEnd: 34, num: 'Teil B – Kapitel 3', title: 'Projektinitialisierung',
      exercises: [
        {
          id: 7, type: 'check', title: 'Aussagen zum Projektinitialisierungsprozess',
          q: 'Welche der folgenden fünf Aussagen zum Projektinitialisierungsprozess sind richtig?',
          statements: [
            { s: 'Projekte, die voraussichtlich der Unternehmensstrategie zuwiderlaufen, sind grundsätzlich abzulehnen.', c: true },
            { s: 'Vor der Projektfreigabe ist zu prüfen, ob der Projektauftrag mit dem Projektantrag vereinbar ist.', c: true },
            { s: 'Ein Projektauftrag entspricht der Zielvereinbarung zwischen der Projektleiterin und dem Projektteam.', c: false },
            { s: 'Im Antrag müssen visionäre Projektideen nicht so konkret ausgearbeitet sein wie reaktive Projektideen.', c: false },
            { s: 'Ein Projektantrag muss eine grobe Lösungsskizze enthalten.', c: false }
          ],
          tips: ['Projekte, die der Strategie zuwiderlaufen, werden grundsätzlich abgelehnt.','Der Projektauftrag ist eine Vereinbarung zwischen Projektleiter und Auftraggeber, nicht zwischen PL und Team.','Im Antrag müssen auch visionäre Ideen genauso konkret ausgearbeitet sein.'],
          reveal: ['Aussage 1: Richtig – strategiewidrige Projekte sind abzulehnen.','Aussage 2: Richtig – Antrag und Auftrag müssen vereinbar sein.','Aussage 3: Falsch – Der Auftrag ist die Vereinbarung PL-Auftraggeber.','Aussage 4: Falsch – Visionäre Ideen müssen genauso konkret sein.','Aussage 5: Falsch – Der Antrag enthält erste Lösungsideen, keine Pflicht für Skizze.']
        },
        {
          id: 8, type: 'match', title: 'Projektentscheid: Empfehlung',
          q: 'Welche Empfehlung zum Projektentscheid geben Sie für die Projekte 1 bis 5 aufgrund der Einschätzung ihrer wirtschaftlichen und strategischen Bedeutung?',
          pairs: [
            { l: 'Projekt 1: Wirtschaftlich Niedrig, Strategisch Mittel', r: 'Projekt evtl. realisieren' },
            { l: 'Projekt 2: Wirtschaftlich Hoch, Strategisch Mittel', r: 'Projekt realisieren' },
            { l: 'Projekt 3: Wirtschaftlich Hoch, Strategisch Hoch', r: 'Projekt realisieren' },
            { l: 'Projekt 4: Wirtschaftlich Niedrig, Strategisch Niedrig', r: 'Projekt ablehnen' },
            { l: 'Projekt 5: Wirtschaftlich Mittel, Strategisch Hoch', r: 'Projekt realisieren' }
          ],
          options: ['Projekt realisieren', 'Projekt evtl. realisieren', 'Projekt ablehnen'],
          tips: ['Projekte mit hoher wirtschaftlicher ODER strategischer Bedeutung sollten realisiert werden.','Projekte mit niedriger Bewertung in beiden Dimensionen sollten abgelehnt werden.','Bei gemischten Bewertungen: «evtl. realisieren» prüfen.'],
          reveal: ['Projekt 1 (Niedrig/Mittel): Evtl. realisieren – geringe Wirtschaftlichkeit, aber strategisch relevant.','Projekt 2 (Hoch/Mittel): Realisieren – hohe Wirtschaftlichkeit.','Projekt 3 (Hoch/Hoch): Realisieren – hohe Bewertung in beiden Dimensionen.','Projekt 4 (Niedrig/Niedrig): Ablehnen – geringe Bewertung in beiden Dimensionen.','Projekt 5 (Mittel/Hoch): Realisieren – hohe strategische Bedeutung.']
        },
        {
          id: 9, type: 'match', title: 'Reaktive oder visionäre Idee?',
          q: 'Handelt es sich bei den folgenden Beispielen um eine reaktive oder um eine visionäre Idee?',
          pairs: [
            { l: 'Die heutigen Kursräumlichkeiten genügen nicht mehr den Anforderungen. Ein Umzugsprojekt soll diesen Missstand beheben.', r: 'Reaktive Idee' },
            { l: 'Seit Längerem ist die schlechte Benutzerführung in der Zeiterfassungssoftware ein Thema. Deshalb soll nun eine neue Software evaluiert werden.', r: 'Reaktive Idee' },
            { l: 'Eine auf \u00abBio-Fast-Food\u00bb spezialisierte Restaurantkette möchte in die Zentralschweiz expandieren, da sie dort noch keine vergleichbaren Angebote sieht.', r: 'Visionäre Idee' }
          ],
          options: ['Reaktive Idee', 'Visionäre Idee'],
          tips: ['Reaktive Ideen reagieren auf einen unbefriedigenden Zustand.','Visionäre Ideen entstehen aus neuen Chancen.','Fragen Sie sich: Wird ein Problem behoben oder eine neue Chance genutzt?'],
          reveal: ['Kursräumlichkeiten: Reaktiv – Reaktion auf einen Missstand.','Zeiterfassungssoftware: Reaktiv – Reaktion auf schlechte Benutzerführung.','Bio-Fast-Food-Expansion: Visionär – neue Chance in neuem Markt.']
        },
        {
          id: 60, type: 'sort',
          q: 'Projektinitialisierungsprozess',
          instruction: 'Bringen Sie die sechs Schritte der Projektinitialisierung in die richtige Reihenfolge.',
          items: ['Projektidee','Projektantrag','Antragsprüfung','Entscheid','Projektauftrag','Projektfreigabe'],
          correctOrder: [0,1,2,3,4,5],
          tips: ['Alles beginnt mit einer Idee.','Der Antrag wird geprüft, bevor ein Entscheid fällt.','Die Projektfreigabe erfolgt am Schluss durch Unterzeichnung.'],
          reveal: ['1. Projektidee: Reaktiv oder visionär.','2. Projektantrag: Formelles Dokument mit Ausgangslage und Zielen.','3. Antragsprüfung: Acht Schlüsselfragen.','4. Entscheid: Genehmigung oder Ablehnung.','5. Projektauftrag: Zielvereinbarung PL-Auftraggeber.','6. Projektfreigabe: Unterzeichnung und Kick-off.']
        },
        {
          id: 61, type: 'fill',
          q: 'Inhalt des Projektantrags',
          instruction: 'Ergänzen Sie die Inhalte eines vollständigen Projektantrags.',
          template: 'Ein Projektantrag enthält: {0}, Probleme, grobe {1}, erwarteter Nutzen und Projektziele, {2} und Grobschätzung des {3}.',
          blanks: [['Ausgangslage'],['Lösungsidee','Lösungsideen'],['Wirtschaftlichkeitsüberlegungen','Wirtschaftlichkeit'],['Realisierungszeitraums','Realisierungszeitraum']],
          tips: ['Der Antrag beginnt mit der aktuellen Situation.','Es werden erste Ideen zur Problemlösung beschrieben.','Am Ende steht eine grobe zeitliche Einschätzung.'],
          reveal: ['Ausgangslage: Aktuelle Situation und Handlungsbedarf.','Lösungsideen: Erste Ansätze zur Problemlösung.','Wirtschaftlichkeitsüberlegungen: Nutzen und Kosten abwägen.','Realisierungszeitraum: Grobschätzung der Projektdauer.']
        },
        {
          id: 62, type: 'mc',
          q: 'Projektauftrag',
          instruction: 'Was beschreibt der Projektauftrag am besten?',
          options: ['Eine Aufgabenliste für das Projektteam','Eine Zielvereinbarung zwischen Projektleiter und Auftraggeber','Ein Vertrag mit externen Lieferanten','Eine Budgetfreigabe durch die Finanzabteilung'],
          answer: 1,
          tips: ['Der Projektauftrag hat vertraglichen Charakter.','Er ist die wichtigste Leitplanke für das Gesamtprojekt.','Er wird zwischen zwei bestimmten Personen vereinbart.'],
          reveal: ['Der Projektauftrag ist eine Zielvereinbarung zwischen Projektleiter und Auftraggeber.','Er hat vertraglichen Charakter und ist die wichtigste Leitplanke.','Die Projektfreigabe erfolgt durch gegenseitige Unterzeichnung.']
        },
        {
          id: 63, type: 'tf',
          q: 'Aussagen zur Projektinitialisierung',
          statements: [
            { s: 'Versäumnisse in der Projektvorbereitung rächen sich vielfach im weiteren Projektverlauf.', c: true, feedback: 'Eine sorgfältige Initialisierung ist entscheidend.' },
            { s: 'Unternehmen, die visionäre Projektideen fördern, sind erfolgreicher.', c: true, feedback: 'Untersuchungen bestätigen den Vorteil visionärer Ideen.' },
            { s: 'Die Antragsprüfung umfasst fünf Schlüsselfragen.', c: false, feedback: 'Es sind acht Schlüsselfragen.' },
            { s: 'Mangelnde Verfügbarkeit von Ressourcen ist ein Hauptgrund für das Scheitern von Projekten.', c: true, feedback: 'Ressourcenmangel ist in der Praxis einer der häufigsten Gründe.' }
          ],
          tips: ['Sorgfältige Vorbereitung verhindert spätere Probleme.','Die Antragsprüfung hat eine bestimmte Anzahl Fragen.','Ressourcenmangel ist ein häufiges Problem.'],
          reveal: ['Versäumnisse in der Vorbereitung haben schwere Folgen.','Visionäre Projektideen machen Unternehmen erfolgreicher.','Es sind acht Schlüsselfragen, nicht fünf.','Ressourcenmangel ist ein Hauptgrund für Projektscheitern.']
        },
        {
          id: 64, type: 'check',
          q: 'Acht Schlüsselfragen der Antragsprüfung',
          instruction: 'Welche der folgenden Fragen gehören zu den acht Schlüsselfragen der Antragsprüfung?',
          statements: [
            { s: 'Ist das beantragte Vorhaben ein Projekt?', c: true },
            { s: 'Ist das Projekt mit der Unternehmensstrategie vereinbar?', c: true },
            { s: 'Wie hoch ist das Projektbudget?', c: false },
            { s: 'Stehen ausreichend Ressourcen zur Verfügung?', c: true },
            { s: 'Ist der Wille zur Veränderung vorhanden?', c: true },
            { s: 'Welche Konsequenzen hat eine Nichtdurchführung?', c: true }
          ],
          tips: ['Die Schlüsselfragen prüfen Projekttauglichkeit und Machbarkeit.','Das genaue Budget ist kein Teil der Antragsprüfung.','Eine Frage betrifft die Konsequenzen, wenn das Projekt nicht durchgeführt wird.'],
          reveal: ['Projekttauglichkeit: Ist es überhaupt ein Projekt?','Strategievereinbarkeit: Passt es zur Unternehmensstrategie?','Budgethöhe: Keine Schlüsselfrage (Wirtschaftlichkeit schon).','Ressourcenverfügbarkeit: Sind genug Ressourcen da?','Veränderungswille: Wird die Veränderung gewollt?','Nichtdurchführung: Was passiert, wenn man es nicht macht?']
        },
        {
          id: 65, type: 'fill',
          q: 'Projektauftrag-Inhalte',
          instruction: 'Ergänzen Sie die Inhalte des Projektauftrags.',
          template: 'Der Projektauftrag enthält: Ausgangslage, {0}, Restriktionen, {1}, Projektorganisation, {2}, Projektbudget, Chancen und Risiken und {3}.',
          blanks: [['Zielsetzung','Zielsetzungen'],['Projektabgrenzung'],['Projekttermine'],['Information und Berichterstattung','Berichterstattung']],
          tips: ['Nach der Ausgangslage kommen die Ziele.','Die Abgrenzung definiert, was zum Projekt gehört und was nicht.','Am Ende stehen Informationsregelungen.'],
          reveal: ['Zielsetzungen: Was soll erreicht werden?','Projektabgrenzung: Was gehört dazu, was nicht?','Projekttermine: Dauer, Meilensteine, Wunsch-Endtermin.','Information und Berichterstattung: Vorgaben zur Dokumentation.']
        },
        {
          id: 66, type: 'match',
          q: 'Projektportfolio: Bewertungsdimensionen',
          instruction: 'Ordnen Sie die Beschreibungen der richtigen Bewertungsdimension zu.',
          pairs: [
            { l: 'Wie hoch ist der erwartete Return on Investment?', r: 'Wirtschaftliche Bedeutung' },
            { l: 'Wie gut passt das Projekt zur Unternehmensstrategie?', r: 'Strategische Bedeutung' },
            { l: 'Stärkt das Projekt die Marktposition langfristig?', r: 'Strategische Bedeutung' },
            { l: 'Amortisiert sich die Investition innerhalb von zwei Jahren?', r: 'Wirtschaftliche Bedeutung' }
          ],
          options: ['Wirtschaftliche Bedeutung','Strategische Bedeutung'],
          tips: ['Wirtschaftlich = finanzielle Aspekte wie ROI und Amortisation.','Strategisch = langfristige Ausrichtung und Marktposition.','Im Projektportfolio werden beide Dimensionen beurteilt.'],
          reveal: ['ROI und Amortisation sind wirtschaftliche Kriterien.','Strategiepassung und Marktposition sind strategische Kriterien.','Das Projektportfolio kombiniert beide Dimensionen für die Entscheidung.']
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Anhand von Beispielen die Teilschritte des Projektinitialisierungsprozesses bestimmen.',
            'Die Anforderungen an einen vollständigen und klaren Projektantrag nennen.',
            'Einen Projektauftrag auf Klarheit und Vollständigkeit hin prüfen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Projektidee', def: 'Ausgangspunkt jedes Projekts. Unterscheidung in reaktive Ideen (Reaktion auf unbefriedigenden Zustand) und visionäre Ideen (neue Chancen für die Zukunft).' },
            { term: 'Projektantrag', def: 'Dokument mit Ausgangslage, Problemen, grober Lösungsidee, erwartetem Nutzen, Projektzielen, Wirtschaftlichkeitsüberlegungen und Realisierungszeitraum.' },
            { term: 'Antragsprüfung', def: 'Prüfung des Projektantrags durch das Bewilligungsgremium anhand von acht Schlüsselfragen.' },
            { term: 'Projektauftrag', def: 'Zielvereinbarung zwischen Projektleiter und Auftraggeber mit vertraglichem Charakter. Wichtigste Leitplanke für das Gesamtprojekt.' },
            { term: 'Projektfreigabe', def: 'Durch gegenseitige Unterzeichnung des Projektauftrags wird das Projekt einvernehmlich freigegeben. Idealerweise mit Kick-off-Meeting.' },
            { term: 'Projektportfolio', def: 'Hilfsmittel für die Entscheidungsfindung: alle beantragten und laufenden Projekte nach wirtschaftlicher und strategischer Bedeutung beurteilt.' }
          ]},
          { type: 'concept', title: 'Projektinitialisierungsprozess', content: 'Der Projektinitialisierungsprozess besteht aus sechs Vorgehensschritten: Projektidee, Projektantrag, Antragsprüfung, Entscheid, Projektauftrag, Projektfreigabe. Eine umsichtige und systematische Projektinitialisierung hilft, die Frage nach den wichtigen Projekten angemessen und kompetent zu beantworten.', highlight: 'Versäumnisse in der Projektvorbereitung rächen sich vielfach im weiteren Projektverlauf.' },
          { type: 'concept', title: 'Reaktive vs. visionäre Projektideen', content: 'Reaktive Projektideen entstehen als Reaktion auf einen unbefriedigend wahrgenommenen Zustand und streben eine Verbesserung an. Visionäre Projektideen entstehen aus neuen Chancen, die sich für das Unternehmen derzeit bieten. Untersuchungen zeigen, dass Unternehmen, die visionäre Projektideen fördern, erfolgreicher sind.', highlight: 'Unternehmen, die visionäre Projektideen fördern, sind erfolgreicher als solche, die sich vorwiegend auf reaktive Projektideen konzentrieren.' },
          { type: 'table', title: 'Inhalt eines Projektantrags', headers: ['Inhalt', 'Erklärungen'], rows: [
            ['Ausgangslage', 'Aktuelle Situation als Ausgangslage, Handlungsbedarf der aktuell besteht'],
            ['Probleme', 'Aktuelle Probleme und deren Folgen, «Verpasste» Chancen wenn nichts geschieht'],
            ['Lösungsideen', 'Erste Ideen zur Problemlösung'],
            ['Nutzen / Ziele', 'Erwarteter Nutzen durch die Problemlösung, Grobziele für das Projekt'],
            ['Wirtschaftlichkeit', 'Erste Überlegungen zum Nutzen und zu den Kosten des Projekts'],
            ['Realisierungszeitraum', 'Grobschätzung der Projektdauer']
          ]},
          { type: 'concept', title: 'Acht Schlüsselfragen der Antragsprüfung', content: '1. Ist das beantragte Vorhaben ein Projekt? 2. Ist das Projekt mit der Unternehmensstrategie vereinbar? 3. Wie hoch ist das Risiko für einen Misserfolg? 4. Stehen ausreichend Ressourcen zur Verfügung? 5. Ist der Wille zur Veränderung vorhanden? 6. Ist das erforderliche Know-how vorhanden bzw. beschaffbar? 7. Welche wirtschaftlichen Überlegungen hängen mit dem Projekt zusammen? 8. Welche Konsequenzen hat eine Nichtdurchführung?', highlight: 'Mangelnde Verfügbarkeit von Ressourcen ist in der Praxis ein Hauptgrund für das Scheitern von Projekten.' },
          { type: 'table', title: 'Inhalt eines Projektauftrags', headers: ['Inhalt', 'Erklärungen'], rows: [
            ['Ausgangslage', 'Informationen / Tatbestände, auf denen der Auftrag basiert'],
            ['Zielsetzung(en)', 'Mit dem Projekt zu erreichende Ziele'],
            ['Restriktionen', 'Zwingend einzuhaltende interne und externe Vorgaben'],
            ['Projektabgrenzung', 'Komponenten, die zum Projekt gehören bzw. explizit nicht dazu gehören'],
            ['Projektorganisation', 'Aufgaben, Kompetenzen und Verantwortlichkeiten'],
            ['Projekttermine', 'Voraussichtliche Projektdauer, Meilensteine und Wunsch-Endtermin'],
            ['Projektbudget', 'Budget für die Vorstudie, evtl. auch Kostendach für das Gesamtprojekt'],
            ['Schnittstellen', 'Abstimmungsbedarf mit anderen Projekten'],
            ['Chancen und Risiken', 'Hauptchancen und -risiken, die mit dem Projekt verbunden sind'],
            ['Information und Berichterstattung', 'Vorgaben zur Information und zur Dokumentation des Projekts']
          ]},
          { type: 'merke', title: 'Merke dir!', items: ['Der Projektinitialisierungsprozess hat 6 Schritte: Idee, Antrag, Prüfung, Entscheid, Auftrag, Freigabe.','Der Projektauftrag ist die Zielvereinbarung zwischen Projektleiter und Auftraggeber – die wichtigste Leitplanke.','Visionäre Projektideen machen Unternehmen erfolgreicher als rein reaktive.','Versäumnisse in der Projektvorbereitung rächen sich im gesamten Projektverlauf.'] },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Der Projektinitialisierungsprozess besteht aus sechs Vorgehensschritten: Projektidee, Projektantrag, Antragsprüfung, Entscheid, Projektauftrag, Projektfreigabe.',
            'Projektideen: Reaktive Ideen (Veränderung des jetzigen Zustands) und Visionäre Ideen (Chance für die Zukunft).',
            'Der Projektantrag enthält: Ausgangslage, Probleme, grobe Lösungsidee, erwarteter Nutzen/Projektziele, Wirtschaftlichkeitsüberlegungen, Grobschätzung des Realisierungszeitraums.',
            'Antragsprüfung anhand von acht Schlüsselfragen: Projekttauglichkeit, Vereinbarkeit mit der Unternehmensstrategie, Risiko, Ressourcen, Wille zur Veränderung, Know-how, wirtschaftlicher Nutzen, Konsequenzen der Nichtrealisierung.',
            'Der Projektauftrag ist die Zielvereinbarung zwischen Projektleiter und Auftraggeber mit vertraglichem Charakter.',
            'Die Projektfreigabe erfolgt durch Unterzeichnung des Projektauftrags und Kick-off-Meeting.'
          ]}
        ]
      }
    },
    {
      id: 'ch4', pageStart: 36, pageEnd: 45, num: 'Teil B – Kapitel 4', title: 'Projektziele definieren',
      exercises: [
        {
          id: 10, type: 'tf', title: 'Aussagen über den Zieldefinitionsprozess',
          q: 'Sind die folgenden vier Aussagen über den Zieldefinitionsprozess richtig oder falsch?',
          statements: [
            { s: 'Es darf in einem Projekt keine Zielkonflikte geben.', c: false },
            { s: 'Ein unechtes Projektziel ist z.B.: \u00abWir wollen die Controllingprozesse in sämtlichen Unternehmensbereichen automatisieren.\u00bb', c: true },
            { s: 'Alle Muss- und Kann-Ziele sind zu gewichten, damit man später die Lösungsvarianten objektiv beurteilen kann.', c: false }
          ],
          tips: ['Zielkonflikte sind in Projekten normal und müssen bearbeitet werden.','Ein «unechtes» Ziel beschreibt einen Lösungsweg statt einen Soll-Zustand.','Muss-Ziele werden nicht gewichtet – sie sind K.-o.-Kriterien.'],
          reveal: ['Aussage 1: Falsch – Zielkonflikte sind normal und müssen transparent gemacht werden.','Aussage 2: Richtig – «Automatisieren» beschreibt einen Lösungsweg, kein lösungsneutrales Ziel.','Aussage 3: Falsch – Nur Kann-Ziele werden gewichtet, Muss-Ziele sind K.-o.-Kriterien.']
        },
        {
          id: 11, type: 'text', title: 'Operationalisierte Ziele',
          q: 'Warum sind operationalisierte Ziele für ein Projekt wichtig?',
          keywords: ['messen', 'Massstab', 'operationalisiert', 'quantitativ', 'qualitativ', 'Zielerreichung', 'Beurteilung'],
          solution: 'Um die Zielerreichung messen zu können, brauchen Ziele einen Massstab. Sie müssen operationalisiert werden. Als Massstab sind sowohl qualitative als auch quantitative Kriterien möglich.',
          tips: ['Operationalisieren bedeutet «messbar machen».','Es gibt quantitative und qualitative Massstäbe.','Ohne Massstab kann die Zielerreichung nicht beurteilt werden.'],
          reveal: ['Operationalisierte Ziele haben einen klaren Beurteilungsmassstab.','Quantitative Kriterien: z.B. «Kosten max. CHF 50 000».','Qualitative Kriterien: z.B. «Benutzerfreundlichkeit gut bis sehr gut».','Ziele mit Grenzwert eignen sich besonders gut für die Erfolgskontrolle.']
        },
        {
          id: 12, type: 'text', title: 'Präferenzmatrix analysieren',
          q: 'Im Projekt \u00abVerbesserung des Busbetriebs\u00bb wurde eine Präferenzmatrix erhoben.\nA) Wird das Ziel \u00abViele Direktverbindungen\u00bb vor dem Ziel \u00abTiefe Investitionskosten\u00bb bevorzugt?\nB) Was bedeuten die unterschiedlichen Zahlen in den Spalten \u00abM\u00bb und \u00abG\u00bb beim Ziel \u00abTiefe laufende Kosten\u00bb?\nC) Welches Ziel ist gemäss der Präferenzmatrix am tiefsten zu gewichten?',
          keywords: ['bevorzugt', 'Schnittpunkt', 'modifiziert', 'Gewichtung', 'Nennungen', 'Arbeitsbedingungen', 'tiefsten', 'Rang'],
          solution: 'A) Im direkten Vergleich wird das Ziel \u00abTiefe Investitionskosten\u00bb bevorzugt (Buchstabe \u00abb\u00bb im Schnittpunkt). B) In der Spalte \u00abM\u00bb wird die modifizierte Gewichtung angegeben, in der Spalte \u00abG\u00bb die ursprüngliche Gewichtung, die sich aus der Anzahl Nennungen ergibt. Beim Ziel \u00abTiefe laufende Kosten\u00bb wurde die modifizierte Gewichtung um 3% leicht angehoben. C) Das Ziel \u00abGute Arbeitsbedingungen\u00bb hat am wenigsten Nennungen erhalten und ist somit am tiefsten gewichtet. Es erscheint auf dem siebten und letzten Rang.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Anhand von Beispielen beurteilen, ob Projektziele korrekt formuliert wurden.',
            'Einen vorliegenden Zielkatalog von Kann-Zielen korrekt klassifizieren.',
            'Die Bedeutung der Zielgewichtung erklären.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Zieldefinitionsprozess', def: 'Sieben Schritte: Ziele ermitteln, analysieren, klassifizieren, operationalisieren, gewichten, Zielentscheid herbeiführen, Ziele kommunizieren.' },
            { term: 'Muss-Ziele', def: 'Ziele, die unbedingt erreicht werden müssen. Sie werden auch Restriktionen oder K.-o.-Kriterien genannt und nicht gewichtet.' },
            { term: 'Kann-Ziele', def: 'Ziele, die mehr oder weniger gut erfüllt sein können, ohne dass die Lösung insgesamt infrage gestellt würde. Sie erhalten eine unterschiedlich starke Gewichtung.' },
            { term: 'Systemziele', def: 'Beziehen sich auf die erwartete Lösung. Drei Klassen: Wirtschaftliche Ziele, Leistungsziele, Personelle Ziele.' },
            { term: 'Vorgehensziele', def: 'Etappenziele bezüglich der erwarteten Leistung bzw. Qualität, Zeit und Kosten.' },
            { term: 'Präferenzmatrix', def: 'Gewichtungsmethode: Jedes Ziel wird mit jedem anderen verglichen und das bevorzugte im Schnittpunkt notiert (Froschperspektive).' },
            { term: 'Zielbeziehungsmatrix', def: 'Tool zur Analyse von Zielkonflikten: Ziele zueinander in Beziehung setzen (unterstützend, in Konflikt, autonom).' }
          ]},
          { type: 'concept', title: 'Warum Ziele in Projekten?', content: 'Aus folgenden Gründen braucht es eindeutige und zweckmässige Ziele: Koordination (Ausgangslage für sämtliche anfallenden Aufgaben), Steuerung (Leitplanken für den Projektbearbeitungsprozess), Motivation (Beteiligte wissen worum es geht), Lösungssuche (Soll-Zustand definieren), Entscheidungsfindung (Beurteilungskriterien für Lösungsvarianten), Erfolgskontrolle (Soll-Ist-Vergleich).', highlight: 'Projektziele beschreiben einen angestrebten Soll-Zustand oder eine erwünschte Wirkung.' },
          { type: 'concept', title: 'Echte vs. unechte Ziele', content: 'Ein «echtes» Ziel liegt in der Zukunft, ist vorstellbar, ist realistisch, kann nur durch aktives Handeln erreicht werden, wird bewusst angestrebt, will erreicht werden und ist lösungsneutral formuliert. Ein «unechtes» Ziel ist z.B. ein Ereignis, das sowieso eintritt, eine Beschreibung einer Problemlösung oder eines Lösungswegs.', highlight: 'Ein echtes Ziel muss lösungsneutral formuliert sein.' },
          { type: 'concept', title: 'Ziele klassifizieren', content: 'Kann-Ziele werden nach Systemzielen (Wirtschaftliche Ziele, Leistungsziele, Personelle Ziele) und Vorgehenszielen (Etappenziele bezüglich Leistung, Zeit und Kosten) klassifiziert. Muss-Ziele werden nicht weiter untergliedert, sondern separat aufgeführt.', highlight: 'Wirtschaftliche Ziele betreffen die Wirtschaftlichkeit der Lösung, Leistungsziele die Funktion(en), Personelle Ziele die betroffenen Personen.' },
          { type: 'concept', title: 'Ziele operationalisieren', content: '«Ziele operationalisieren» bedeutet, Ziele messbar zu machen. Die Zielerreichung lässt sich dadurch eindeutig beurteilen. Operationalisierte Projektziele müssen einen klaren Beurteilungsmassstab für die Zielerreichung aufweisen, der auf quantitativen und/oder qualitativen Kriterien beruht.', highlight: 'Ziele mit einem Grenzwert eignen sich besonders gut für die Projekterfolgskontrolle.' },
          { type: 'concept', title: 'Ziele gewichten', content: 'Muss-Ziele werden nicht gewichtet, da sie zwingend einzuhalten sind. In vielen Projekten werden nur die Systemziele gewichtet. Die Kann-Ziele sind zu gewichten, bevor die Lösungsvarianten vorliegen. Die Gewichtung ist ein subjektiver Vorgang. Der Auftraggeber entscheidet letztlich über die Gewichtung.', highlight: 'Die Gewichtung muss erfolgen, bevor Lösungsvarianten vorliegen, um objektive Bewertung zu ermöglichen.' },
          { type: 'table', title: 'Systematischer Zieldefinitionsprozess', headers: ['Vorgehensschritte', 'Aktivitäten'], rows: [
            ['Ziele ermitteln', 'Ziele aufgrund der Ansprüche unterschiedlicher Interessengruppen (Stakeholder) sammeln und schriftlich festhalten.'],
            ['Ziele analysieren', 'Kritische Prüfung der formulierten Ziele nach den Kriterien: «echte» Ziele, Bezug zum Projekt, keine redundanten Ziele, Gliederung in Muss- und Kann-Ziele, Zielkonflikte.'],
            ['Ziele klassifizieren', 'Kann-Ziele nach Systemzielen (wirtschaftliche Ziele, Leistungsziele oder personelle Ziele) und Vorgehenszielen (Etappenziele des Projekts) klassifizieren.'],
            ['Ziele operationalisieren', 'Massstab für Ziele festlegen, als Entscheidungs- und Beurteilungsgrundlage.'],
            ['Ziele gewichten', 'Kann-Ziele durch eine stufenweise Gewichtung und/oder in Form einer Präferenzmatrix gewichten. Oft werden nur Systemziele gewichtet.'],
            ['Zielentscheid herbeiführen', 'Systematische schriftliche Zieldokumentation als Bestandteil des Projektauftrags. Zielentscheid bei Entscheidungsgremium herbeiführen.'],
            ['Ziele kommunizieren', 'Ziele allen am Projekt Beteiligten präsentieren.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Für die Projektführung und -steuerung sind eindeutige und zweckmässige Ziele unerlässlich.',
            'Eine systematische Zieldefinition umfasst sieben Schritte: Ziele ermitteln, analysieren, klassifizieren, operationalisieren, gewichten, Zielentscheid herbeiführen, Ziele kommunizieren.',
            'Muss-Ziele müssen zwingend eingehalten werden (K.-o.-Kriterien). Kann-Ziele werden gewichtet.',
            'Kann-Ziele werden nach Systemzielen (Wirtschaftliche, Leistungs-, Personelle Ziele) und Vorgehenszielen klassifiziert.',
            'Operationalisierte Ziele haben einen klaren Beurteilungsmassstab.',
            'Die Zieldokumentation ist Bestandteil des Projektauftrags und muss von den Entscheidungsträgern genehmigt werden.'
          ]}
        ]
      }
    },
    {
      id: 'ch5', pageStart: 46, pageEnd: 54, num: 'Teil B – Kapitel 5', title: 'Stakeholdermanagement',
      exercises: [
        {
          id: 13, type: 'text', title: 'Einfluss-Interessen-Matrix',
          q: 'Welche Empfehlungen geben Sie für die Stakeholdergruppen S1 bis S4, die in der Einfluss-Interessen-Matrix wie folgt positioniert sind?\n- S1: Gering Einfluss, Gering Interesse\n- S2: Hoch Einfluss, Hoch Interesse\n- S3: Mittel Einfluss, Hoch Interesse\n- S4: Hoch Einfluss, Gering Interesse',
          keywords: ['Aktivitäten', 'Beziehungspflege', 'informieren', 'Kooperation', 'zufriedenstellen', 'Machtstellung', 'unterschätzen'],
          solution: 'S1: keine besonderen Aktivitäten ausser ergebnisorientierter Informationen; diese Stakeholder verfügen über wenig Einflussmöglichkeiten auf das Projekt. S2: Kooperation, Beziehungspflege; diese Stakeholder sind die wichtigsten Partner im Projekt, ihr Einfluss und ihr Interesse sind hoch. S3: Aktiv und regelmässig informieren; trotz des geringen Einflusses sind diese Stakeholder besonders in schwierigen Situationen nicht zu unterschätzen, da ihr Interesse am Projekt gross ist. S4: Zufriedenstellen; aufgrund ihrer Machtstellung haben sie einen grossen Einfluss, auch wenn sie sich für das betreffende Projekt weniger zu interessieren scheinen.',
          tips: [], reveal: []
        },
        {
          id: 14, type: 'text', title: 'Schlüsselfragen der Projektumfeldanalyse',
          q: 'Nennen Sie drei Fragen, die nach einer Projektumfeldanalyse beantwortet sein müssen.',
          keywords: ['Stakeholder', 'betroffen', 'Interessen', 'Projektziele', 'vereinbaren'],
          solution: 'Schlüsselfragen bei der Projektumfeldanalyse: 1) Welche Stakeholder sind vom Projektergebnis wie betroffen? 2) Welche Interessen verfolgen die Stakeholder? 3) Wie lassen sich die Projektziele mit den Interessen der relevanten Stakeholder vereinbaren?',
          tips: [], reveal: []
        },
        {
          id: 15, type: 'match', title: 'Stakeholdergruppen identifizieren',
          q: 'Welche Stakeholdergruppen sind gemeint?',
          pairs: [
            { l: 'Die vom Projektergebnis direkt betroffenen Stakeholder', r: 'Kunden (Anwender)' },
            { l: 'Einflussreiche Stakeholder, die den Projekterfolg massgeblich fördern können', r: 'Sponsoren' },
            { l: 'Die vom Projektergebnis indirekt betroffenen Stakeholder, die das Projektergebnis kaum beeinflussen können', r: 'Kunden (Nutzer)' }
          ],
          options: ['Kunden (Anwender)', 'Sponsoren', 'Kunden (Nutzer)', 'Projektteam', 'Auftraggeber'],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Ziele und Grundsätze des Stakeholdermanagements nennen.',
            'Das Vorgehen bei einer Projektumfeldanalyse bestimmen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Stakeholdermanagement', def: 'Bezweckt die Akzeptanz des Projekts bei den Stakeholdern zu fördern und sie dafür zu gewinnen, die Projektziele aktiv zu unterstützen. Auch als Projektmarketing bezeichnet.' },
            { term: 'Einfluss-Interessen-Matrix', def: 'Tool zur Einordnung von Stakeholdern nach ihrem Einfluss und Interesse am Projekt mit entsprechenden Handlungsempfehlungen.' },
            { term: 'Stakeholderidentifikation', def: 'Erster Schritt: Stakeholder identifizieren und gruppieren, Bedürfnisse ermitteln.' },
            { term: 'Lobbying', def: 'Gezielte Einflussnahme auf relevante Stakeholder, um ihre aktive Unterstützung für das Projekt zu sichern.' },
            { term: 'Projektumfeldanalyse', def: 'Systematische Analyse aller Stakeholder, ihrer Interessen und Einflussmöglichkeiten.' }
          ]},
          { type: 'concept', title: 'Warum Stakeholdermanagement?', content: 'Der Projekterfolg hängt massgeblich von der Akzeptanz der betroffenen und beteiligten Personen ab. Diese Akzeptanz bewusst zu fördern, ist vor allem eine Kommunikationsaufgabe. In der Praxis trifft man allerdings immer wieder auf Probleme, die auf eine mangelhafte Kommunikation zurückzuführen sind.', highlight: 'Ein professionelles Stakeholdermanagement zu betreiben, ist ein Muss für jeden Projektleiter.' },
          { type: 'concept', title: 'Stakeholder-Strategie nach Einfluss-Interessen-Matrix', content: 'Hoher Einfluss + Hohes Interesse: Kooperation und Beziehungspflege (wichtigste Partner). Hoher Einfluss + Geringes Interesse: Zufriedenstellen (Machtstellung beachten). Geringer Einfluss + Hohes Interesse: Aktiv und regelmässig informieren. Geringer Einfluss + Geringes Interesse: Keine besonderen Aktivitäten ausser ergebnisorientierter Informationen.', highlight: 'Stakeholder mit hohem Einfluss und hohem Interesse sind die wichtigsten Partner im Projekt.' },
          { type: 'table', title: 'Vorgehen im Stakeholdermanagement', headers: ['Vorgehen', 'Aktivitäten'], rows: [
            ['Projektumfeldanalyse', 'Stakeholderidentifikation und -gruppierung, Bedürfnisermittlung, Ableitung der Anforderungen, Analyse von Einfluss und Interesse (Einfluss-Interessen-Matrix), Analyse der Stakeholderbeziehungen (Stakeholdermap)'],
            ['Stakeholdermanagementkonzept', 'Stakeholdermanagementkonzept entwerfen, zielgruppenadäquate interne und externe Kommunikationsinstrumente auswählen'],
            ['Umsetzung der Massnahmen', 'Massnahmen im Projektplan berücksichtigen, Massnahmen gemäss Konzept durchführen'],
            ['Durchführung und Wirksamkeitskontrolle', 'Wirksamkeitskontrolle der Massnahmen als Basis für allfällige Anpassungen nutzen']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Stakeholdermanagement bezweckt, die Akzeptanz des Projekts bei den Stakeholdern zu fördern und sie dafür zu gewinnen, die Projektziele aktiv zu unterstützen.',
            'Das Vorgehen umfasst: Projektumfeldanalyse, Stakeholdermanagementkonzept entwerfen, Massnahmen umsetzen, Wirksamkeitskontrolle.',
            'Die Einfluss-Interessen-Matrix hilft bei der Einordnung der Stakeholder und der Ableitung von Handlungsempfehlungen.',
            'Stakeholder mit hohem Einfluss und hohem Interesse erfordern Kooperation und Beziehungspflege.'
          ]}
        ]
      }
    },
    {
      id: 'ch6', pageStart: 55, pageEnd: 58, num: 'Teil B – Kapitel 6', title: 'Information und Dokumentation',
      exercises: [
        {
          id: 16, type: 'text', title: 'Kriterien des Dokumentationsmanagements',
          q: 'Nennen Sie drei Kriterien eines angemessenen Dokumentationsmanagements in Projekten.',
          keywords: ['dokumentieren', 'nötig', 'nachvollziehen', 'Projektbeteiligte', 'Projektphasen', 'Aussenstehende'],
          solution: 'Die Kriterien eines angemessenen Dokumentationsmanagements lauten: So viel und so detailliert wie nötig dokumentieren, nicht so viel wie möglich. Die Projektbeteiligten wie auch Aussenstehende sollten den Projektverlauf jederzeit nachvollziehen können. In vielen Fällen eignet sich dafür die Dokumentation analog den Projektphasen am besten.',
          tips: [], reveal: []
        },
        {
          id: 17, type: 'match', title: 'Grundsätze der Projektinformation',
          q: 'Um welchen Grundsatz der Projektinformation geht es bei den folgenden Aussagen?',
          pairs: [
            { l: '\u00abBeziehe den Auftraggeber ein und lass Vertreter der betroffenen Fachbereiche regelmässig an den Projektsitzungen teilnehmen!\u00bb', r: 'Systematisch informieren' },
            { l: '\u00abInformieren heisst auch: Alle müssen dasselbe verstanden haben!\u00bb', r: 'Transparent informieren' },
            { l: '\u00abÜberlege dir den Zeitpunkt der Information gut \u2013 er kann entscheidend sein!\u00bb', r: 'Gezielt informieren' }
          ],
          options: ['Systematisch informieren', 'Gezielt informieren', 'Transparent informieren'],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Anforderungen an ein Informationskonzept beschreiben.',
            'Ein Projekt anforderungsgerecht dokumentieren.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Informationskonzept', def: 'Umfasst die Bausteine: Absender (Wer informiert?), Empfänger (An wen?), Inhalt/Botschaft (Was?), Zeitpunkt (Wann?), Instrument/Medium (Wie?), Ort (Wo?).' },
            { term: 'Projektdokumentation', def: 'Die laufende Projektdokumentation umfasst alle während der Projektarbeit notwendigen Unterlagen. Ihr Aufbau sollte den Projektphasen entsprechen.' },
            { term: 'Dokumentationsmanagement', def: 'Regelt was wann wie dokumentiert wird, welche Tools verwendet werden, wo die Dokumentation gespeichert wird, wie lange sie aufbewahrt wird und wer Zugriffsberechtigungen hat.' }
          ]},
          { type: 'table', title: 'Grundsätze der Projektinformation', headers: ['Grundsatz', 'Was heisst das?'], rows: [
            ['Systematisch informieren', 'Den Auftraggeber einbeziehen, Vertreter der betroffenen Fachbereiche an Projektsitzungen teilnehmen lassen, die vom Projekt betroffenen Personen regelmässig informieren.'],
            ['Gezielt informieren', 'Den Informationsbedarf ermitteln und entsprechend informieren. Den richtigen Zeitpunkt für eine Information wählen: keinesfalls zu spät, aber auch nicht zu früh.'],
            ['Transparent informieren', 'Offen und unmissverständlich kommunizieren. Verständlich informieren, Fachbegriffe einheitlich verwenden und adressatengerechte Informationskanäle einsetzen.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Projektinformationskonzept besteht aus den folgenden Bausteinen: Absender (Wer informiert?), Empfänger (An wen wird informiert?), Inhalt/Botschaft (Was wird informiert?), Zeitpunkt (Wann wird informiert?), Instrument/Medium (Wie wird informiert?), Ort (Wo wird informiert?).',
            'Im Dokumentationsmanagement muss für jedes Projekt geregelt sein: was wann wie dokumentiert wird, welche Tools verwendet werden, wo die Dokumentation gespeichert wird, wie lange sie aufbewahrt wird und wer welche Zugriffsberechtigungen hat.',
            'Die laufende Projektdokumentation umfasst alle während der Projektarbeit notwendigen Unterlagen. Ihr Aufbau sollte den Projektphasen entsprechen.',
            'Kriterien eines angemessenen Dokumentationsmanagements: So viel und so detailliert wie nötig dokumentieren (nicht so viel wie möglich). Der Projektverlauf muss für Beteiligte und Aussenstehende jederzeit nachvollziehbar sein.'
          ]}
        ]
      }
    },
    {
      id: 'ch7', pageStart: 59, pageEnd: 68, num: 'Teil B – Kapitel 7', title: 'Projektorganisation planen',
      exercises: [
        {
          id: 18, type: 'check', title: 'Aussagen zur Projektorganisation',
          q: 'Welche der folgenden Aussagen zur Projektorganisation sind korrekt?',
          statements: [
            { s: 'Der Auftraggeber leitet den Projektausschuss.', c: true },
            { s: 'Der Projektleiter kann dem Project Office die Planungsverantwortung delegieren.', c: false },
            { s: 'Der Projektmitarbeiter trägt die Ausführungsverantwortung für seine Arbeitspakete.', c: true },
            { s: 'Der Teilprojektleiter gehört zur Lenkungsebene.', c: false },
            { s: 'Der Projektleiter trägt die oberste Verantwortung für die Projektergebnisse.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 19, type: 'text', title: 'Stabs-Projektorganisation: Argumente',
          q: 'Die Geschäftsleitung schlägt als Auftraggeberin für das Projekt \u00abMitarbeiter-Bonussystem\u00bb die Stabs-Projektorganisation vor.\nA) Nennen Sie mindestens zwei Argumente, die für diese Organisationsform sprechen.\nB) Nennen Sie mindestens zwei Argumente, die für eine andere Organisationsform sprechen könnten, ob für die reine Projektorganisation oder die Matrix-Projektorganisation.',
          keywords: ['Beeinträchtigung', 'Tagesgeschäft', 'Aufnahme', 'Mitarbeitende', 'organisatorisch', 'Risiko', 'Zielerreichung', 'Komplexität', 'Steuerung'],
          solution: 'A) Argumente für die Stabs-Projektorganisation: Keine Beeinträchtigung des regulären Tagesgeschäfts; Aufnahme von Mitarbeitenden in das Projektteam einfach möglich (keine Wiedereingliederung notwendig, Mitarbeitende können in mehreren Projekten tätig sein); Keine grösseren organisatorischen Massnahmen notwendig. B) Argumente für eine andere Projektorganisationsform: Grosse Bedeutung für das Unternehmen: Kostenfolgen im Entlöhnungssystem; Mittleres bis hohes Risiko der Zielerreichung; Verschiedene Unternehmensbereiche sind zu koordinieren (mittlerer bis hoher Komplexitätsgrad); Bedürfnis des Auftraggebers nach einer zentralen Steuerung.',
          tips: [], reveal: []
        },
        {
          id: 20, type: 'mc', title: 'Oberste Verantwortung in der Projektorganisation',
          q: 'Wer in der Projektorganisation trägt die oberste Verantwortung für die Projektergebnisse?',
          options: ['Der Projektleiter', 'Der Teilprojektleiter', 'Der Auftraggeber', 'Das Projektteam'],
          answer: 2,
          explanation: 'Der Auftraggeber trägt die Gesamtverantwortung für das Projekt und somit auch für die Projektergebnisse.',
          tips: [], reveal: []
        },
        {
          id: 21, type: 'mc', title: 'Organisationsform wählen',
          q: 'Über ein Projekt ist Folgendes bekannt: Das Projekt ist für das Gesamtunternehmen wichtig und imagefoerdernd. Die Unternehmensleitung als Auftraggeberin wünscht deshalb, dass es zentral gesteuert wird. Verschiedene Unternehmensbereiche sind betroffen, die optimal zusammenarbeiten müssen. Eine autonome Projektorganisation ist nicht notwendig, die Mitglieder des Projektteams sollten jedoch durchschnittlich mindestens zehn Stunden pro Woche für das Projekt aufwenden können. Der Zeitdruck ist mittel bis hoch und das Projekt wird voraussichtlich in rund einem Jahr abgeschlossen sein. Welche Organisationsform passt am besten?',
          options: ['Reine Projektorganisation', 'Matrix-Projektorganisation', 'Stabs-Projektorganisation', 'Keine der genannten'],
          answer: 1,
          explanation: 'Für die Matrix-Projektorganisation sprechen die folgenden Kriterien: Grosse Bedeutung für das Unternehmen; Teilzeitmitarbeitereinsatz erforderlich; Verschiedene Unternehmensbereiche sind zu koordinieren (mittlerer bis hoher Komplexitätsgrad); Bedürfnis des Auftraggebers nach einer zentralen Steuerung; Mittelfristige Projektdauer. Eine reine Projektorganisation einzurichten wäre zu aufwendig, und für eine Stabs-Projektorganisation ist das Vorhaben zu bedeutungsvoll und zu umfangreich.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Typische Rollen und ihre Hauptaufgaben innerhalb der Projektorganisation nennen.',
            'Für vorliegende Projektbeispiele eine angemessene Projektorganisation vorschlagen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Stellen bilden', def: 'Aufgaben aus den Arbeitspaketen zu Projektstellen bündeln, Stellenbeschreibung verfassen, Kompetenzen und Verantwortung definieren, Anforderungsprofil formulieren.' },
            { term: 'Instanz-Ebenen', def: 'Lenkung (Auftraggeber, Projektausschuss), Führung (Projektleiter, Teilprojektleiter, Project Office), Ausführung (Projektmitarbeitende), Fachbeteiligung (Teilprojektleiter oder Mitarbeitende aus Fachbereichen).' },
            { term: 'Reine Projektorganisation', def: 'Eigenständige Organisationseinheit. Mitarbeitende arbeiten ausschliesslich für das Projekt. Für sehr grosse, bedeutende Projekte mit hohem Risiko.' },
            { term: 'Matrix-Projektorganisation', def: 'Aufteilung in Projekt- und Linienaufgaben. Projektleiter ist weisungsbefugt. Für mittelgrosse bis grosse Projekte.' },
            { term: 'Stabs-Projektorganisation', def: 'Koordinationsfunktion des Projektleiters. Mitarbeitende arbeiten nebenbei. Für kleinere Projekte mit geringem Risiko.' }
          ]},
          { type: 'concept', title: 'Aufbau der Projektorganisation', content: 'Die Projektorganisation soll das zielgerichtete Zusammenwirken der am Projekt Beteiligten und den reibungslosen Ablauf des Projekts sicherstellen. Dazu braucht es: die Bildung zweckmässiger Stellen mit den entsprechenden Aufgaben, Kompetenzen und Verantwortungen und deren Zuordnung zu den Instanz-Ebenen, sowie die Wahl einer geeigneten Organisationsform.', highlight: 'Der Auftraggeber trägt die Gesamtverantwortung für das Projekt und somit auch für die Projektergebnisse.' },
          { type: 'table', title: 'Entscheidungskriterien für Organisationsformen', headers: ['Kriterien', 'Reine Projektorganisation', 'Matrix-Projektorganisation', 'Stabs-Projektorganisation'], rows: [
            ['Bedeutung für das Unternehmen', 'Sehr gross', 'Gross', 'Gering'],
            ['Grösse des Projekts', 'Sehr gross', 'Gross', 'Klein bis mittelgross'],
            ['Risiko der Zielerreichung', 'Hoch', 'Mittel', 'Gering'],
            ['Projektdauer', 'Lang', 'Mittellang', 'Kurz'],
            ['Komplexitätsgrad', 'Hoch', 'Mittel', 'Gering'],
            ['Mitarbeitereinsatz', 'Permanent', 'Teilzeit', 'Oft nebenamtlich'],
            ['Bedürfnis nach zentraler Steuerung', 'Sehr gross', 'Gross', 'Gering']
          ]},
          { type: 'svg', title: 'Projektorganisationsformen im Vergleich', svg: '<svg viewBox="0 0 720 440" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="120" y="20" text-anchor="middle" fill="#92400e" font-size="13" font-weight="bold">Reine Projektorganisation</text><rect x="70" y="30" width="100" height="30" rx="5" fill="#d97706"/><text x="120" y="50" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Geschäftsleitung</text><line x1="120" y1="60" x2="120" y2="75" stroke="#d97706" stroke-width="2"/><rect x="70" y="75" width="100" height="30" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="120" y="94" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">Projektleiter</text><line x1="120" y1="105" x2="70" y2="125" stroke="#d97706" stroke-width="1.5"/><line x1="120" y1="105" x2="170" y2="125" stroke="#d97706" stroke-width="1.5"/><rect x="40" y="125" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="70" y="142" text-anchor="middle" fill="#92400e" font-size="9">Team A</text><rect x="140" y="125" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="170" y="142" text-anchor="middle" fill="#92400e" font-size="9">Team B</text><text x="120" y="170" text-anchor="middle" fill="#78716c" font-size="9">100% dem Projekt zugeordnet</text><text x="360" y="20" text-anchor="middle" fill="#92400e" font-size="13" font-weight="bold">Matrix-Projektorganisation</text><rect x="310" y="30" width="100" height="30" rx="5" fill="#d97706"/><text x="360" y="50" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Geschäftsleitung</text><line x1="330" y1="60" x2="310" y2="80" stroke="#d97706" stroke-width="1.5"/><line x1="390" y1="60" x2="410" y2="80" stroke="#d97706" stroke-width="1.5"/><rect x="280" y="80" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="310" y="97" text-anchor="middle" fill="#92400e" font-size="9">Abt. A</text><rect x="380" y="80" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="410" y="97" text-anchor="middle" fill="#92400e" font-size="9">Abt. B</text><rect x="280" y="115" width="160" height="25" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/><text x="360" y="132" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Projektleiter (quer)</text><line x1="310" y1="105" x2="310" y2="115" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/><line x1="410" y1="105" x2="410" y2="115" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/><text x="360" y="160" text-anchor="middle" fill="#78716c" font-size="9">Doppelte Unterstellung</text><text x="600" y="20" text-anchor="middle" fill="#92400e" font-size="13" font-weight="bold">Stabs-Projektorganisation</text><rect x="550" y="30" width="100" height="30" rx="5" fill="#d97706"/><text x="600" y="50" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">Geschäftsleitung</text><line x1="600" y1="60" x2="600" y2="80" stroke="#d97706" stroke-width="1.5"/><line x1="600" y1="60" x2="530" y2="80" stroke="#d97706" stroke-width="1.5"/><line x1="600" y1="60" x2="670" y2="80" stroke="#d97706" stroke-width="1.5"/><circle cx="530" cy="88" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="530" y="92" text-anchor="middle" fill="#92400e" font-size="8" font-weight="bold">PL</text><rect x="570" y="80" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="600" y="97" text-anchor="middle" fill="#92400e" font-size="9">Abt. A</text><rect x="640" y="80" width="60" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="670" y="97" text-anchor="middle" fill="#92400e" font-size="9">Abt. B</text><text x="530" y="115" text-anchor="middle" fill="#78716c" font-size="8">Stab (beratend)</text><text x="600" y="160" text-anchor="middle" fill="#78716c" font-size="9">Keine Weisungsbefugnis</text><rect x="10" y="200" width="700" height="230" rx="10" fill="#fefce8" stroke="#d97706" stroke-width="1"/><text x="360" y="225" text-anchor="middle" fill="#92400e" font-size="13" font-weight="bold">Vergleich der Organisationsformen</text><text x="30" y="255" fill="#92400e" font-size="11" font-weight="bold">Reine PO:</text><text x="130" y="255" fill="#78716c" font-size="11">Eigenständig, 100% Projekteinsatz, sehr grosse Projekte</text><text x="30" y="285" fill="#92400e" font-size="11" font-weight="bold">Matrix-PO:</text><text x="130" y="285" fill="#78716c" font-size="11">Projekt- und Linienaufgaben, PL weisungsbefugt, mittelgrosse Projekte</text><text x="30" y="315" fill="#92400e" font-size="11" font-weight="bold">Stabs-PO:</text><text x="130" y="315" fill="#78716c" font-size="11">Koordination, nebenamtlich, kleinere Projekte mit geringem Risiko</text><rect x="30" y="340" width="660" height="75" rx="6" fill="#fff" stroke="#d97706" stroke-width="1"/><text x="360" y="365" text-anchor="middle" fill="#92400e" font-size="11" font-weight="bold">Entscheidungskriterien</text><text x="360" y="385" text-anchor="middle" fill="#78716c" font-size="10">Bedeutung | Grösse | Risiko | Dauer | Komplexität | Mitarbeitereinsatz | Steuerungsbedarf</text><text x="100" y="405" text-anchor="middle" fill="#d97706" font-size="10">Rein: alles HOCH</text><text x="360" y="405" text-anchor="middle" fill="#d97706" font-size="10">Matrix: MITTEL</text><text x="600" y="405" text-anchor="middle" fill="#d97706" font-size="10">Stab: alles GERING</text></svg>' },
          { type: 'table', title: 'Rollen in Projekten', headers: ['Instanzen-Ebene', 'Rollen'], rows: [
            ['Lenkung', 'Auftraggeber: Gesamtverantwortung für das Projekt, Leitung des Projektausschusses. Projektausschuss: Projektsteuerungsgremium.'],
            ['Führung', 'Projektleiter: Planung und Führung des Projekts. Teilprojektleiter: Planung und Führung des Teilprojekts. Project Office: administrative und organisatorische Unterstützung der Projektleitung.'],
            ['Ausführung', 'Projektmitarbeitende: konzeptionelle und ausführende Aufgaben gemäss Stellenbeschreibung.'],
            ['Fachbeteiligung', 'Teilprojektleiter oder Mitarbeitende aus Fachbereichen: fachliche Unterstützung oder aktive Mitarbeit.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die Projektorganisation besteht aus der Bildung zweckmässiger Stellen (Aufgaben, Kompetenzen, Verantwortungen), deren Zuordnung zu den Instanzen und der Wahl der geeigneten Organisationsform.',
            'Als Hilfsmittel für eine klare Organisation bieten sich die Stellenbeschreibung und das Funktionsdiagramm an.',
            'Die wichtigsten Rollen: Auftraggeber (Gesamtverantwortung, Leitung Projektausschuss), Projektleiter (Planung und Führung), Teilprojektleiter, Project Office, Projektmitarbeitende.',
            'Drei Organisationsformen: Reine Projektorganisation (sehr grosse Projekte), Matrix-Projektorganisation (mittelgrosse Projekte), Stabs-Projektorganisation (kleinere Projekte).'
          ]}
        ]
      }
    },
    {
      id: 'ch8', pageStart: 70, pageEnd: 76, num: 'Teil C – Kapitel 8', title: 'Projektstrukturplan',
      exercises: [
        {
          id: 22, type: 'text', title: 'Gliederungsprinzip erkennen',
          q: 'Der Projektleiter des Kongresses \u00abLernen mit Neuen Medien\u00bb weist im Projektstrukturplan die folgende Gliederung aus: Transport, Verpflegung/Übernachtung, Kongressprogramm, Rahmenprogramm, Kongressmarketing.\nA) Um welches Gliederungsprinzip handelt es sich bei diesem Projekt?\nB) Wie beurteilen Sie die gewählte Projektstruktur?',
          keywords: ['Objekt', 'Gliederung', 'sinnvoll', 'abgrenzbar', 'transparent', 'Teilelement', 'nachvollziehbar'],
          solution: 'A) Gliederung nach Objekten. B) Die Gliederung nach Objekten scheint aus folgenden Gründen sinnvoll: Logische Aufteilung von abgrenzbaren Kongress-Teilelementen; Transparente Struktur (für Entscheidungsgremien, Projektleitung und -mitarbeitende nachvollziehbar).',
          tips: [], reveal: []
        },
        {
          id: 23, type: 'text', title: 'Gliederungsprinzip für Möbelproduzenten',
          q: 'Cornelia Vetsch leitet das Projekt \u00abAufbau des Produktmanagements\u00bb für einen Möbelproduzenten von Betten, Tischen und Schränken. Die Möbel werden in der gesamten Schweiz sowie in Deutschland und den Niederlanden an ausgesuchte Möbelhandelsgeschäfte verkauft. Machen Sie Cornelia Vetsch einen Vorschlag, wie sie dieses Projekt sinnvollerweise gliedern könnte, und begründen Sie Ihren Vorschlag in ein paar Sätzen.',
          keywords: ['Projektphasen', 'Organisationsprojekt', 'Vorgehensmethodik', 'Objekte', 'Absatzmärkte', 'Produktmanagement'],
          solution: 'Am ehesten kommen die folgenden Gliederungsprinzipien infrage: Gliederung nach Projektphasen (Begründung: Es handelt sich um ein einfacheres Organisationsprojekt, bei dem die Gliederung gemäss Vorgehensmethodik ausreicht.) Gliederung nach Objekten (Begründung: Sofern unterschiedliche Gegebenheiten in den Absatzmärkten herrschen, die einen wesentlichen Einfluss auf die Produktmanagement-Lösung haben könnten, ist dieses Gliederungsprinzip passender als die Gliederung nach Projektphasen.)',
          tips: [], reveal: []
        },
        {
          id: 24, type: 'text', title: 'Detaillierungsgrad des PSP',
          q: 'Cornelia Vetsch weiss nicht genau, wie detailliert sie den Projektstrukturplan entwickeln muss. Geben Sie ihr einen Ratschlag bezüglich des Detaillierungsgrads.',
          keywords: ['Strukturierungstiefe', 'angemessen', 'Arbeitspakete', 'Arbeitspaketaufträge', 'vergeben', 'beteiligt'],
          solution: 'Eine angemessene Strukturierungstiefe erreichen Sie, wenn Sie allen am Projekt beteiligten Mitarbeitenden klare Arbeitspaketaufträge vergeben können.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Zweck des Projektstrukturplans erklären.',
            'Geeignete Gliederungsprinzipien für ein einfaches Projekt vorschlagen.',
            'Die Inhaltselemente einer Arbeitspaketbeschreibung nennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Projektstrukturplan (PSP)', def: 'Entsteht durch die Zerlegung des Projekts in Teilaufgaben. Er dient dazu, die projektbezogenen Aufgaben zu überblicken.' },
            { term: 'Arbeitspaket', def: 'Die unterste Stufe im PSP. Eine angemessene Strukturierungstiefe ist erreicht, wenn allen Beteiligten klare Arbeitspaketaufträge vergeben werden können.' },
            { term: 'Gliederungsprinzipien', def: 'Vier Prinzipien: Gliederung nach Objekten, nach Funktionen (Verrichtungen), nach Projektphasen, gemischte Gliederung.' },
            { term: 'Objektgliederung', def: 'Gliederung aufgrund der Objekte, die im Rahmen des Projekts «bearbeitet» werden müssen.' },
            { term: 'Funktionsgliederung', def: 'Alle Tätigkeiten (Verrichtungen), die im Rahmen des Projekts verrichtet werden müssen.' },
            { term: 'Projektphasengliederung', def: 'Phasen gemäss Vorgehensmethodik als Strukturierungshilfe.' }
          ]},
          { type: 'concept', title: 'Zweck des Projektstrukturplans', content: 'Der Projektstrukturplan liefert die Grundlagen für die weitere Projektplanung. Das Projekt als Gesamtaufgabe wird stufenweise in Teilaufgaben zerlegt, bis man eine Stufe erreicht hat, bei der ein weiteres Zerlegen unnötig oder nicht mehr sinnvoll erscheint. Diese unterste Stufe wird als Arbeitspaket bezeichnet.', highlight: 'Mit dem schrittweisen Zerlegen wird sichergestellt, dass keine Aufgaben übersehen werden, jede Aufgabe nur einmal bearbeitet wird und jede Aufgabe an der logisch richtigen Stelle bearbeitet wird.' },
          { type: 'table', title: 'Arbeitspaketbeschreibung – Rubriken', headers: ['Rubrik', 'Inhalt'], rows: [
            ['Allgemein', 'Titel des Projekts, Kennzeichnung/Titel des Arbeitspakets, Verantwortliche Person, Auftraggeber, Start- und Endtermin'],
            ['Ziele', 'Mit diesem AP zu erreichende Ziele'],
            ['Ergebnis', 'Beschreibung des Ergebnisses, Quantität und Qualität, Form der Präsentation und Prüfung'],
            ['Schnittstellen', 'Schnittstellen zu anderen AP im Projekt und zu AP in anderen Projekten'],
            ['Aktivitäten / Termine / Aufwand', 'Teilschritte zur Erledigung des AP, Termine für die einzelnen Teilschritte, Aufwandschätzung'],
            ['Voraussetzungen / Restriktionen', 'Finanzielle Ressourcen, Personelle Ressourcen, Zu beachtende Dokumente, Verfügbare Sachmittel'],
            ['Anhang', 'Dokumente, Pläne']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Der Projektstrukturplan (PSP) entsteht durch die Zerlegung des Projekts in Teilaufgaben. Er dient dazu, die projektbezogenen Aufgaben zu überblicken.',
            'Es gibt vier Gliederungsprinzipien: Gliederung nach Objekten, nach Funktionen (Verrichtungen), nach Projektphasen und gemischte Gliederung.',
            'Die Gliederung nach Objekten erfolgt aufgrund der Objekte, die im Rahmen des Projekts bearbeitet werden müssen.',
            'Für die Gliederung nach Funktionen kommen alle Tätigkeiten infrage, die im Rahmen des Projekts verrichtet werden müssen.',
            'Bei der Gliederung nach Projektphasen werden die Phasen gemäss Vorgehensmethodik als Strukturierungshilfe beigezogen.',
            'Die gemischte Gliederung vereinigt die Gliederungsprinzipien nach Objekten, Funktionen und/oder Projektphasen.',
            'Eine angemessene Strukturierungstiefe ist erreicht, wenn allen Beteiligten klare Arbeitspaketaufträge vergeben werden können.'
          ]}
        ]
      }
    },
    {
      id: 'ch9', pageStart: 77, pageEnd: 84, num: 'Teil C – Kapitel 9', title: 'Ablauf- und Terminplanung',
      exercises: [
        {
          id: 25, type: 'text', title: 'Schätzung der Vorgangsdauer',
          q: 'Warum muss die Schätzung der Vorgangsdauer spätestens mit der Ablaufplanung abgeschlossen werden? Als Antwort genügt ein Satz.',
          keywords: ['Ablaufplanung', 'Terminplanung', 'zeitlich', 'Aufwand', 'Vorgang', 'berechnet'],
          solution: 'Weil nach der Ablaufplanung die Terminplanung erfolgt, bei der der zeitliche Aufwand pro Vorgang berechnet wird.',
          tips: [], reveal: []
        },
        {
          id: 26, type: 'text', title: 'Kritischer Pfad in der Netzplan-Technik',
          q: 'Was zeigt der kritische Pfad in der Netzplan-Technik?',
          keywords: ['kritisch', 'Pfad', 'Vorgänge', 'Zeitreserven', 'Zeitverschiebung', 'Endtermin', 'Projektdauer'],
          solution: 'Der kritische Pfad zeigt alle Vorgänge des Projekts, die keine Zeitreserven bis zum Beginn des nächsten Vorgangs aufweisen. Somit wirkt sich eine Zeitverschiebung bei einem solchen Vorgang direkt auf das Ende des Projekts aus.',
          tips: [], reveal: []
        },
        {
          id: 27, type: 'text', title: 'Vorgangsliste vervollständigen',
          q: 'Timo Reichlin, der Projektleiter des Kongresses \u00abLernen mit Neuen Medien\u00bb, muss sein Projekt besser strukturieren. Er hat eine Vorgangsliste erstellt.\nA) Vervollständigen Sie die Spalte \u00abDauer\u00bb in Timo Reichlins Vorgangsliste.\nB) Bestimmen Sie für die Arbeitspakete P3.1 bis P3.5 die Vorgänger.\n\nP3.1: Grobkonzept für Kongressprogramm entwerfen (Entwurf 7 Tage, Präsentation 1 Tag, Entscheidung/Vernehmlassung 5 Tage, Korrekturen 3 Tage = Total 16 Tage)\nP3.2: Detailkonzept für Kongressprogramm erstellen (Entwurf 3 Tage, Präsentation 1 Tag, Entscheidung/Vernehmlassung 5 Tage, Detailkorrekturen 1 Tag = Total 10 Tage)\nP3.3: Referenten aufbieten (Kontaktaufnahme 2 Tage, Wartezeit 10 Tage, Verhandlungen/Briefing 4 Tage = Total 16 Tage)\nP3.4: Dokumentation zusammenstellen (Referatstexte einfordern 30 Tage, red. Überarbeitung 3 Tage, grafische Gestaltung 2 Tage, Gut zum Druck 2 Tage, Aufwand Druckerei 4 Tage = Total 41 Tage)\nP3.5: Detailkonzept für Podiumsdiskussion erstellen (Entwurf 4 Tage, Entscheidung/Vernehmlassung 3 Tage, Detailkorrekturen 1 Tag, Briefing der Moderatorin 1 Tag = Total 9 Tage)',
          keywords: ['Dauer', 'Vorgänger', 'P3.1', 'P3.2', 'P3.3', 'P3.4', 'P3.5', '16', '10', '41', '9'],
          solution: 'A) Dauer: P3.1 = 16 Tage, P3.2 = 10 Tage, P3.3 = 16 Tage, P3.4 = 41 Tage, P3.5 = 9 Tage. B) Vorgänger: P3.1 hat keinen Vorgänger (Startvorgang). P3.2 hat als Vorgänger P3.3 (die Referenten müssen feststehen). P3.3 hat als Vorgänger P3.1 (nach dem Grobkonzept können Referenten aufgeboten werden). P3.4 hat als Vorgänger P3.5 (für das Detailkonzept müssen die Referenten bekannt sein; aus dem Detailkonzept ergibt sich jenes für die Podiumsdiskussion; die Dokumentation kann erst erfolgen, nachdem das Programm feststeht). P3.5 hat als Vorgänger P3.2.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Eine beispielhafte Ablauf- und Terminplanung auf ihre Vollständigkeit hin beurteilen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Vorgangsliste', def: 'Chronologische Anordnung aller Vorgänge (Arbeitspakete) mit Dauer und Vorgängerbeziehungen.' },
            { term: 'Netzplan', def: 'Grafische Darstellung der Vorgangsliste. Daraus lässt sich der kritische Pfad erkennen.' },
            { term: 'Kritischer Pfad', def: 'Zeigt alle Vorgänge ohne Zeitreserven. Eine Zeitverschiebung bei einem solchen Vorgang wirkt sich direkt auf den Endtermin aus.' },
            { term: 'Terminplan', def: 'Vorgangsliste im Balkendiagramm grafisch dargestellt mit Meilensteinen. Wird auch als Gantt-Diagramm bezeichnet.' },
            { term: 'Balkendiagramm', def: 'Übersichtliche und einprägsame Darstellungsform für die Ablauf- und Terminplanung, wird oft für die Kommunikation mit Entscheidungsgremien eingesetzt.' },
            { term: 'Meilensteine', def: 'Wichtige Ereignisse im Projektverlauf, die im Terminplan gekennzeichnet werden.' },
            { term: 'Schätzverfahren', def: 'Verfahren zur Bestimmung der Vorgangsdauer, z.B. Expertenschätzung, Analogieschätzung.' }
          ]},
          { type: 'concept', title: 'Drei Hauptschritte der Ablauf- und Terminplanung', content: 'Die Ablauf- und Terminplanung kann in drei Hauptschritte gegliedert werden: 1. Vorgangsliste erstellen: Alle Arbeitspakete werden chronologisch-logisch miteinander verknüpft, ihre Dauer und die Vorgänger bestimmt. 2. Netzplan erstellen: Die Vorgangsliste wird grafisch dargestellt und der kritische Pfad ermittelt. 3. Terminplan erstellen: Die Vorgangsliste wird im Balkendiagramm grafisch dargestellt und Meilensteine werden ermittelt.', highlight: 'Die Schätzung der Vorgangsdauer muss spätestens mit der Ablaufplanung abgeschlossen werden, weil danach die Terminplanung erfolgt.' },
          { type: 'concept', title: 'Kritischer Pfad', content: 'Der kritische Pfad zeigt alle Vorgänge des Projekts, die keine Zeitreserven bis zum Beginn des nächsten Vorgangs aufweisen. Somit wirkt sich eine Zeitverschiebung bei einem solchen Vorgang direkt auf das Ende des Projekts aus.', highlight: 'Vorgänge auf dem kritischen Pfad haben keine Zeitreserven – Verzögerungen verlängern direkt die Projektdauer.' },
          { type: 'svg', title: 'Balkendiagramm (Gantt-Chart) – Beispiel', svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="300" y="20" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold">Terminplan (Gantt-Diagramm)</text><line x1="140" y1="35" x2="140" y2="250" stroke="#d4d4d4" stroke-width="1"/><text x="70" y="50" text-anchor="middle" fill="#78716c" font-size="10" font-weight="bold">Vorgang</text><text x="200" y="50" text-anchor="middle" fill="#78716c" font-size="9">W1</text><text x="270" y="50" text-anchor="middle" fill="#78716c" font-size="9">W2</text><text x="340" y="50" text-anchor="middle" fill="#78716c" font-size="9">W3</text><text x="410" y="50" text-anchor="middle" fill="#78716c" font-size="9">W4</text><text x="480" y="50" text-anchor="middle" fill="#78716c" font-size="9">W5</text><text x="550" y="50" text-anchor="middle" fill="#78716c" font-size="9">W6</text><line x1="140" y1="55" x2="580" y2="55" stroke="#d4d4d4" stroke-width="1"/><text x="10" y="78" fill="#92400e" font-size="10">A: Analyse</text><rect x="160" y="65" width="110" height="20" rx="4" fill="#d97706"/><text x="10" y="108" fill="#92400e" font-size="10">B: Konzept</text><rect x="270" y="95" width="80" height="20" rx="4" fill="#d97706"/><text x="10" y="138" fill="#92400e" font-size="10">C: Design</text><rect x="270" y="125" width="140" height="20" rx="4" fill="#d97706" opacity="0.7"/><text x="10" y="168" fill="#92400e" font-size="10">D: Umsetzung</text><rect x="350" y="155" width="140" height="20" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="10" y="198" fill="#92400e" font-size="10">E: Test</text><rect x="490" y="185" width="70" height="20" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="10" y="228" fill="#92400e" font-size="10">F: Einführung</text><rect x="490" y="215" width="70" height="20" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><line x1="270" y1="55" x2="270" y2="250" stroke="#d4d4d4" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="340" y1="55" x2="340" y2="250" stroke="#d4d4d4" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="410" y1="55" x2="410" y2="250" stroke="#d4d4d4" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="480" y1="55" x2="480" y2="250" stroke="#d4d4d4" stroke-width="0.5" stroke-dasharray="3,3"/><polygon points="270,57 270,67 275,62" fill="#d97706"/><text x="280" y="67" fill="#d97706" font-size="8" font-weight="bold">MS1</text><polygon points="490,57 490,67 495,62" fill="#d97706"/><text x="500" y="67" fill="#d97706" font-size="8" font-weight="bold">MS2</text><rect x="160" y="245" width="15" height="12" rx="2" fill="#d97706"/><text x="180" y="255" fill="#78716c" font-size="9">Kritischer Pfad</text><rect x="300" y="245" width="15" height="12" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="320" y="255" fill="#78716c" font-size="9">Zeitreserve vorhanden</text><polygon points="440,247 440,257 445,252" fill="#d97706"/><text x="450" y="255" fill="#78716c" font-size="9">Meilenstein</text></svg>' },
          { type: 'svg', title: 'Netzplan – Darstellung mit kritischem Pfad', svg: '<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><defs><marker id="np-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#d97706"/></marker><marker id="np-arr-r" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef4444"/></marker></defs><text x="325" y="20" text-anchor="middle" fill="#92400e" font-size="14" font-weight="bold">Netzplan mit kritischem Pfad</text><rect x="10" y="100" width="90" height="55" rx="6" fill="#fff" stroke="#ef4444" stroke-width="3"/><text x="55" y="118" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">A</text><text x="55" y="132" text-anchor="middle" fill="#78716c" font-size="9">Analyse</text><text x="55" y="148" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 2W</text><rect x="160" y="50" width="90" height="55" rx="6" fill="#fff" stroke="#ef4444" stroke-width="3"/><text x="205" y="68" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">B</text><text x="205" y="82" text-anchor="middle" fill="#78716c" font-size="9">Konzept</text><text x="205" y="98" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 1W</text><rect x="160" y="150" width="90" height="55" rx="6" fill="#fff" stroke="#d97706" stroke-width="2"/><text x="205" y="168" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">C</text><text x="205" y="182" text-anchor="middle" fill="#78716c" font-size="9">Design</text><text x="205" y="198" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 2W</text><rect x="310" y="50" width="90" height="55" rx="6" fill="#fff" stroke="#ef4444" stroke-width="3"/><text x="355" y="68" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">D</text><text x="355" y="82" text-anchor="middle" fill="#78716c" font-size="9">Umsetzung</text><text x="355" y="98" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 2W</text><rect x="460" y="100" width="90" height="55" rx="6" fill="#fff" stroke="#ef4444" stroke-width="3"/><text x="505" y="118" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">E</text><text x="505" y="132" text-anchor="middle" fill="#78716c" font-size="9">Test</text><text x="505" y="148" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 1W</text><line x1="100" y1="118" x2="158" y2="78" stroke="#ef4444" stroke-width="2.5" marker-end="url(#np-arr-r)"/><line x1="100" y1="135" x2="158" y2="175" stroke="#d97706" stroke-width="1.5" marker-end="url(#np-arr)"/><line x1="250" y1="78" x2="308" y2="78" stroke="#ef4444" stroke-width="2.5" marker-end="url(#np-arr-r)"/><line x1="250" y1="175" x2="458" y2="135" stroke="#d97706" stroke-width="1.5" marker-end="url(#np-arr)"/><line x1="400" y1="90" x2="458" y2="118" stroke="#ef4444" stroke-width="2.5" marker-end="url(#np-arr-r)"/><rect x="555" y="100" width="90" height="55" rx="6" fill="#fff" stroke="#ef4444" stroke-width="3"/><text x="600" y="118" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold">F</text><text x="600" y="132" text-anchor="middle" fill="#78716c" font-size="9">Einführung</text><text x="600" y="148" text-anchor="middle" fill="#78716c" font-size="9">Dauer: 1W</text><line x1="550" y1="128" x2="553" y2="128" stroke="#ef4444" stroke-width="2.5" marker-end="url(#np-arr-r)"/><rect x="10" y="240" width="630" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><line x1="30" y1="260" x2="80" y2="260" stroke="#ef4444" stroke-width="3"/><text x="90" y="264" fill="#78716c" font-size="10">Kritischer Pfad (A→B→D→E→F, keine Zeitreserven)</text><line x1="30" y1="278" x2="80" y2="278" stroke="#d97706" stroke-width="1.5"/><text x="90" y="282" fill="#78716c" font-size="10">Nicht-kritischer Vorgang (C, hat Pufferzeit)</text></svg>' },
          { type: 'merke', title: 'Merke dir', content: 'Die gemeinsame Planung im Projektteam fördert die Motivation und das Verantwortungsgefühl aller Beteiligten. Projektmitarbeitende können den Aufwand realistischer einschätzen.' },
          { type: 'table', title: 'Ablauf- und Terminplanung', headers: ['Schritt', 'Aktivitäten'], rows: [
            ['Vorgangsliste erstellen', 'Vorgänge (Arbeitspakete) chronologisch anordnen, Vorgangsdauer bestimmen, Vorgängervorgänge bestimmen.'],
            ['Netzplan erstellen', 'Vorgangsliste grafisch darstellen, Kritischen Pfad ermitteln.'],
            ['Terminplan erstellen', 'Vorgangsliste im Balkendiagramm grafisch darstellen, Meilensteine ermitteln.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Ziel der Ablauf- und Terminplanung ist, die Reihenfolge der Vorgänge eines Projekts, ihre Abhängigkeiten von anderen Vorgängen sowie die Start- und Endtermine jedes einzelnen Vorgangs zu bestimmen.',
            'Vorgangsliste erstellen: Vorgänge chronologisch anordnen, Vorgangsdauer bestimmen, Vorgängervorgänge bestimmen.',
            'Netzplan erstellen: Vorgangsliste grafisch darstellen und kritischen Pfad ermitteln.',
            'Terminplan erstellen: Vorgangsliste im Balkendiagramm grafisch darstellen und Meilensteine ermitteln.',
            'Die Netzplantechnik und das Balkendiagramm haben sich in der Praxis als geeignete Darstellungsformen erwiesen.'
          ]}
        ]
      }
    },
    {
      id: 'ch10', pageStart: 85, pageEnd: 88, num: 'Teil C – Kapitel 10', title: 'Ressourcenplanung',
      exercises: [
        {
          id: 28, type: 'text', title: 'Argumente für sorgfältige Sachmittelplanung',
          q: 'Nennen Sie dem Projektleiter für den Kongress \u00abLernen mit Neuen Medien\u00bb mindestens drei Argumente, die für eine sorgfältige Planung des Sachmittels \u00abKongressort\u00bb sprechen.',
          keywords: ['Grösse', 'Teilnehmerzahl', 'Kongressthema', 'Infrastruktur', 'Mietpreis', 'Erreichbarkeit', 'Reservation'],
          solution: 'Die Evaluation des Kongressorts bzw. geeigneter Kongress-Räumlichkeiten stellt in mehrerlei Hinsicht einen kritischen Erfolgsfaktor für das Projekt dar: Richtige Grösse (angepasst auf die Teilnehmerzahl); Zum Kongressthema passend (gehobene, moderne technische Infrastruktur und Anschlüsse bzw. Leitungen für Demonstrationsmöglichkeiten); Mietpreis (gemäss Budget, beeinflusst unter anderem die Teilnahmegebühren); Gute Erreichbarkeit mit öffentlichen Verkehrsmitteln; Rechtzeitige Reservation.',
          tips: [], reveal: []
        },
        {
          id: 29, type: 'text', title: 'Schwierigkeiten bei interner Rekrutierung',
          q: 'Zählen Sie anhand eines konkreten Projektbeispiels mindestens zwei Schwierigkeiten auf, die sich bei der internen Rekrutierung von Projektmitarbeitenden ergeben.',
          keywords: ['Linienvorgesetzte', 'freigegeben', 'beansprucht', 'Beanspruchung', 'organisatorisch', 'Kompetenzüberprüfung', 'Terminverschiebungen'],
          solution: 'Mögliche Schwierigkeiten bei der internen Rekrutierung: Gute Mitarbeitende werden von den Linienvorgesetzten nur ungern für Projekte \u00abfreigegeben\u00bb. Gute und / oder einflussreiche Mitarbeitende sind oftmals stark beansprucht, sowohl in ihrer Linientätigkeit als auch in weiteren Projekten. Bei einer starken Beanspruchung durch das Projekt braucht es organisatorische Massnahmen (Entlastung in der übrigen Tätigkeit), ansonsten drohen Überlastungen bzw. Terminverschiebungen im Projekt. Eine objektive Kompetenzüberprüfung ist evtl. schwieriger als bei externen (Fach)Spezialisten.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Ressourcenplanung für ein einfaches Projektbeispiel vornehmen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Personelle Ressourcen', def: 'Alle Mitarbeiterleistungen sowie die Leistungen externer Fachleute, die für ein Projekt beansprucht werden.' },
            { term: 'Sachmittel-Ressourcen', def: 'Alle weiteren, nicht personenbezogenen Ressourcen wie z.B. Maschinen-, Hardware- und Softwarekapazitäten, Rohstoff- und Materialeinsatz, Raum- und Fahrzeugbeanspruchung.' },
            { term: 'Ressourcenbedarf', def: 'Welche Personal- und Sachmittel-Ressourcen werden aufgrund der bisherigen Planung für das Projekt benötigt?' },
            { term: 'Kapazitätsengpässe', def: 'Wo und wann entstehen Engpässe bei den Ressourcen? Können durch Zeitpuffer bei nicht-kritischen Arbeitspaketen ausgeglichen werden.' },
            { term: 'Ressourcenplan', def: 'Zuordnung von Personal und Sachmitteln zu den Arbeitspaketen inkl. Ermittlung von Kapazitätsengpässen.' }
          ]},
          { type: 'concept', title: 'Drei Teilschritte der Ressourcenplanung', content: 'Die Ressourcenplanung setzt sich aus drei Teilschritten zusammen: 1. Bedarf ermitteln (Arbeitspaketanalyse: Ressourcen ermitteln, Bedarfsübersicht erstellen), 2. Ressourcen evaluieren (Geeignete Mitarbeitende rekrutieren, Geeignete Sachmittel auswählen), 3. Ressourcenplan erstellen (Einsatz von Personal und Sachmitteln den Arbeitspaketen zuordnen, Kapazitätsengpässe ermitteln und frühzeitig für Kapazitätsausgleich sorgen).', highlight: 'Die Einhaltung des Terminplans hängt massgeblich von der Ressourcenplanung der im Projekt benötigten personellen Ressourcen und Sachmittel ab.' },
          { type: 'concept', title: 'Kapazitätsausgleich', content: 'Absehbare Kapazitätsengpässe können ausgeglichen werden, indem man die in den Arbeitspaketen vorhandenen Zeitpuffer jener Arbeitspakete nutzt, die sich nicht auf dem kritischen Pfad befinden. Die betreffenden Arbeitspakete werden auf der Zeitachse verschoben, ohne den Endtermin des gesamten Projekts zu gefährden.', highlight: 'Kapazitätsengpässe lassen sich durch Verschieben von Arbeitspaketen mit Zeitpuffer (nicht auf dem kritischen Pfad) ausgleichen.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die Einhaltung des Terminplans hängt massgeblich von der Ressourcenplanung der im Projekt benötigten personellen Ressourcen und Sachmittel ab.',
            'Bedarf ermitteln: Arbeitspaketanalyse durchführen, Bedarfsübersicht erstellen.',
            'Ressourcen evaluieren: Geeignete Mitarbeitende rekrutieren (intern und extern), Geeignete Sachmittel auswählen.',
            'Ressourcenplan erstellen: Einsatz von Personal und Sachmitteln den Arbeitspaketen zuordnen, Kapazitätsengpässe ermitteln und frühzeitig für Kapazitätsausgleich sorgen.'
          ]}
        ]
      }
    },
    {
      id: 'ch11', pageStart: 89, pageEnd: 93, num: 'Teil C – Kapitel 11', title: 'Kostenplanung',
      exercises: [
        {
          id: 30, type: 'text', title: 'Direkte vs. indirekte Personalkosten',
          q: 'Erklären Sie den Unterschied zwischen direkten und indirekten Personalkosten anhand eines Beispiels.',
          keywords: ['direkt', 'indirekt', 'Arbeitspaket', 'zugeordnet', 'Projektleiterin', 'Administrator', 'gesamte'],
          solution: 'Direkte Personalkosten können eindeutig einem Arbeitspaket zugeordnet werden (z.B. die Fachspezialistin, die ein Arbeitspaket bearbeitet), indirekte Personalkosten jedoch nicht (z.B. die Projektleiterin oder der Projektadministrator, die für das gesamte Projekt arbeiten).',
          tips: [], reveal: []
        },
        {
          id: 31, type: 'text', title: 'Kostenplanung für Kongress',
          q: 'Der Projektleiter des Kongresses \u00abLernen mit Neuen Medien\u00bb, Timo Reichlin, beschäftigt sich mit der Kostenplanung für sein Projekt.\nA) Welche Kostenarten muss ich im Arbeitspaket P3.3 (Referenten aufbieten) berücksichtigen?\nB) \u00abMir ist klar, dass ich den Kostenplan zum einen nach Kostenarten gliedern soll. Können Sie mir einen konkreten Vorschlag für ein zweites Gliederungskriterium machen?\u00bb',
          keywords: ['Personalkosten', 'Betriebsmittelkosten', 'Honorar', 'Spesen', 'Referenten', 'Kostenträger', 'Projektstrukturplan', 'Transport', 'Verpflegung', 'Kongressprogramm'],
          solution: 'A) Betroffene Kostenarten: Interne Personalkosten (Zeitaufwand für Anrufe); Betriebsmittelkosten (Telefongebühren); Interne Personalkosten (Zeitaufwand für Essen und Weg, Wegspesen, Restaurantrechnung); Externe Personalkosten (Honorar, Spesen für Referenten); interne Personalkosten (Zeitaufwand von T. Reichlin für Verhandlungen); Interne Personalkosten (Zeitaufwand für Briefing). B) Es bietet sich eine Gliederung nach Kostenträgern an, und zwar gemäss Projektstrukturplan nach: Transport; Verpflegung/Übernachtung; Kongressprogramm; Rahmenprogramm; Kongressmarketing.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Für ein einfaches Projekt einen Kostenplan entwerfen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kostenplanung', def: 'Berechnung der Kosten pro Arbeitspaket. Basiert auf einer sorgfältig durchgeführten Termin- und Ressourcenplanung.' },
            { term: 'Kostenarten', def: 'Personalkosten (interne und externe), Materialkosten, Betriebsmittelkosten, Sonstige Kosten.' },
            { term: 'Kostenbudgetierung', def: 'Zusammenzug der Kostenberechnungen in Form einer tabellarischen Darstellung.' },
            { term: 'Kostenplan', def: 'Zusammenzug der Kostenberechnungen, gegliedert nach Kostenarten und/oder Kostenträgern und/oder Zeitperioden.' },
            { term: 'Kostenstellen', def: 'Organisatorische Zuordnung der Kosten (z.B. Abteilungen).' },
            { term: 'Kostenträger', def: 'Zuordnung der Kosten gemäss Projektstrukturplan (z.B. Teilprojekte).' }
          ]},
          { type: 'concept', title: 'Drei Schritte der Kostenplanung', content: 'Die Kostenplanung erfolgt in drei Schritten: 1. Kosten ermitteln (Kosten pro Arbeitspaket anhand des geplanten Mengengerüsts berechnen), 2. Kostenarten bestimmen (Personalkosten intern/extern, Materialkosten, Betriebsmittelkosten, Sonstige Kosten), 3. Kostenplan erstellen (tabellarische Darstellung nach Kostenarten, Kostenträgern oder Zeitperioden).', highlight: 'Die wichtigste Voraussetzung für eine realistische Kostenplanung ist eine sorgfältig durchgeführte Termin- und Ressourcenplanung.' },
          { type: 'concept', title: 'Direkte vs. indirekte Personalkosten', content: 'Direkte Personalkosten können eindeutig einem Arbeitspaket zugeordnet werden (z.B. die Fachspezialistin, die ein Arbeitspaket bearbeitet). Indirekte Personalkosten können nicht eindeutig einem Arbeitspaket zugeordnet werden (z.B. die Projektleiterin oder der Projektadministrator, die für das gesamte Projekt arbeiten).' },
          { type: 'merke', title: 'Praxistipps zur Kostenplanung', content: 'Je umfangreicher ein Projekt, desto aufwendiger ist die Kostenplanung. Personalleistungen machen oft den grössten Kostenblock aus. Erfahrungswerte aus abgeschlossenen Projekten erleichtern die Kostenplanung. Vorlagen für systematische Erfassung der tatsächlichen Kosten bereitstellen. Auch Kosten beachten, die nicht im direkten Zusammenhang mit dem Projekt stehen.' },
          { type: 'table', title: 'Kostenplanung – Schritte', headers: ['Schritt', 'Aktivitäten'], rows: [
            ['Kosten ermitteln', 'Kosten pro Arbeitspaket anhand des geplanten Mengengerüsts berechnen.'],
            ['Kostenarten bestimmen', 'Personalkosten (interne und externe), Materialkosten (Verbrauchsmaterial, Werkstoffe usw.), Betriebsmittelkosten (Maschinen, Raum usw.), Sonstige Kosten als Sammelkonto.'],
            ['Kostenplan erstellen', 'Zusammenzug der Kostenberechnungen in Form einer tabellarischen Darstellung nach folgenden Gliederungskriterien: Kostenarten, Kostenträger oder Zeitperioden.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die wichtigste Voraussetzung für eine realistische Kostenplanung ist eine sorgfältig durchgeführte Termin- und Ressourcenplanung.',
            'Aufgrund des ermittelten Bedarfs an Personal und Sachmitteln pro Arbeitspaket lassen sich die voraussichtlichen Projektkosten berechnen.',
            'Kosten ermitteln: Kosten pro Arbeitspaket anhand des geplanten Mengengerüsts berechnen.',
            'Kostenarten bestimmen: Personalkosten, Materialkosten, Betriebsmittelkosten, Sonstige Kosten.',
            'Kostenplan erstellen: Tabellarische Darstellung nach Kostenarten, Kostenträgern oder Zeitperioden.'
          ]}
        ]
      }
    },
    {
      id: 'ch12', pageStart: 96, pageEnd: 113, num: 'Teil D – Kapitel 12', title: 'Projektcontrolling',
      exercises: [
        {
          id: 32, type: 'tf', title: 'Aussagen zur Projektsteuerung',
          q: 'Welche der folgenden Aussagen zur Projektsteuerung sind richtig?',
          statements: [
            { s: 'Mit der Methode \u00ab0% \u2013 50% \u2013 100%\u00bb lässt sich der Projektstand exakter ermitteln als mit der Methode \u00ab0% \u2013 100%\u00bb.', c: true },
            { s: 'In einem Reorganisationsprojekt ist es schwierig, eine Aussage über die erreichte Qualität der Zwischenergebnisse zu machen.', c: true },
            { s: 'Der Earned Value beantwortet die Frage, wie viel Zeit man für die bisher erbrachte Leistung hätte aufwenden dürfen.', c: false },
            { s: 'Wenn der SPI grösser als 1 ist, bedeutet dies, dass die erbrachte und bewertete Leistung grösser als die tatsächlich angefallenen Kosten ist.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 33, type: 'text', title: 'Arbeitsfortschrittsdiagramm kommentieren',
          q: 'Die Projektleiterin für das neue \u00abCorporate Design\u00bb legt Ihnen den Projektzwischenbericht per 31. August vor und präsentiert dazu ein Arbeitsfortschrittsdiagramm.\nA) Kommentieren Sie das Arbeitsfortschrittsdiagramm in einigen Sätzen.\nB) Formulieren Sie mindestens eine Frage, die Sie der Projektleiterin zu ihrem Zwischenbericht per 31. August stellen würden.',
          keywords: ['Terminverzug', 'Soll-Kurve', 'Ist-Kurve', 'Arbeitsfortschritt', 'Trend', 'Kostenüberschreitung', 'Projektabschluss', 'vorzeitig'],
          solution: 'A) Ab Anfang Mai bis gegen Mitte August lag die Ist-Kurve unter der Soll-Kurve. In diesem Zeitraum wies das Projekt einen Terminverzug auf, der in den Monaten Juni und Juli besonders deutlich ausfiel. Per 31. August zeigt sich ein gegenteiliges Bild: Der tatsächlich erreichte Arbeitsfortschritt ist seit der zweiten Hälfte Juli stark angestiegen und ist mittlerweile um rund 15% höher als geplant. Gemäss Projektplan sollte das Projekt in etwa sechs Wochen abgeschlossen sein. B) Mögliche Fragen: Worauf ist der steile Anstieg im Arbeitsfortschritt der letzten Wochen zurückzuführen? Welche Auswirkungen hat der Arbeitsfortschritt auf die Kostensituation? Wie realistisch ist ein vorzeitiger Projektabschluss?',
          tips: [], reveal: []
        },
        {
          id: 34, type: 'text', title: 'Steuerungsmassnahmen bei Terminverzug',
          q: 'Timo Reichlin, der Projektleiter des Kongresses \u00abLernen mit Neuen Medien\u00bb, stellt einen Terminverzug im Arbeitspaket \u00abRahmenprogramm organisieren\u00bb fest, weil die dafür zuständige Projektmitarbeiterin Olivia Hess zu wenig Zeit für das Projekt einsetzen kann. Schlagen Sie zwei konkrete Steuerungsmassnahmen für dieses Arbeitspaket vor.',
          keywords: ['Verpflichtung', 'Mitarbeiter', 'Vergabe', 'extern', 'Kapazitätenkonflikt', 'Motivation', 'strukturbezogen', 'steuerungsbezogen'],
          solution: 'Mögliche Steuerungsmassnahmen: Verpflichtung eines zusätzlichen Projektmitarbeiters (strukturbezogene Massnahme). Vergabe des Auftrags an eine externe (Event-)Agentur (strukturbezogene Massnahme). Kapazitätenkonflikt mit Olivia Hess und mit ihrem Linienvorgesetzten lösen (steuerungsbezogene Massnahme). Motivation bei Olivia Hess fördern, sofern fehlende Motivation das eigentliche Problem ist (kulturbezogene Massnahme).',
          tips: [], reveal: []
        },
        {
          id: 35, type: 'text', title: 'Argumente für schriftliche Berichtsform',
          q: 'Ein Auftraggeber wünscht, den Projektstand regelmässig mündlich zu besprechen. Seiner Meinung nach braucht es dafür keine schriftlichen Projektstatusberichte. Welche Argumente sprechen dennoch für eine schriftliche Berichtsform?',
          keywords: ['Schriftlichkeit', 'Grundlagen', 'Verbindlichkeit', 'Verantwortung', 'Berichterstattung', 'Rechenschaft', 'Zwischen'],
          solution: 'Argumente für schriftliche Projektstatusberichte: Schriftlichkeit schafft eindeutige, klare Grundlagen. Bei der mündlichen Berichterstattung hingegen besteht die Gefahr, dass wichtige Informationen untergehen oder unterschiedlich interpretiert werden. Der Auftraggeber trägt die oberste Verantwortung für das Projekt. Falls es im Verlauf des Projekts zu Problemen kommen sollte und die Gefahr besteht, dass der Auftraggeber sich dieser Verantwortung entziehen möchte, kann der Projektleiter besser \u00abbeweisen\u00bb, worüber der Auftraggeber informiert war und welche Entscheidungen er getroffen hatte. Die schriftliche Berichterstattung zwingt dazu, regelmässig Rechenschaft über die Projekt-Zwischenergebnisse abzulegen.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Bedeutung und den Aufbau des Controllingprozesses bei Projekten erklären.',
            'Für ein einfaches Projektbeispiel die geeigneten Steuerungsinstrumente vorschlagen.',
            'Den Inhalt eines Projektstatusberichts nennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Projektcontrolling', def: 'Umfasst die Aufgaben: Ist-Situation erheben, Soll-Ist-Vergleich durchführen, Abweichungsursachen ermitteln, Steuerungsmassnahmen entwerfen.' },
            { term: 'Earned Value', def: 'Beantwortet die Frage: Wie viel hätte die bisher erbrachte Leistung kosten dürfen? Grundlage für Termin- und Kostenvergleich.' },
            { term: 'SPI (Schedule Performance Index)', def: 'Earned Value / geplante Kosten. >1 = Vorsprung (mehr geleistet als geplant), <1 = Verzögerung.' },
            { term: 'CPI (Cost Performance Index)', def: 'Earned Value / Ist-Kosten. >1 = unter Budget, <1 = über Budget.' },
            { term: 'Arbeitsfortschrittsdiagramm', def: 'Darstellung des geplanten und tatsächlichen Arbeitsfortschritts über die Zeit (Soll- und Ist-Kurve).' },
            { term: 'Projektstatusbericht', def: 'Regelmässiger schriftlicher Bericht an die Entscheidungsgremien über den Stand des Projekts.' },
            { term: 'Fertigstellungsgrad', def: 'Methoden zur Bestimmung: subjektive Einschätzung, 0%-100%-Methode, 0%-50%-100%-Methode, Definition von Zwischenresultaten.' }
          ]},
          { type: 'concept', title: 'Projektcontrollingprozess', content: 'Der Projektcontrollingprozess besteht aus vier Aufgaben: 1. Ist-Situation erheben: Arbeitsfortschritte (Fertigstellungsgrad) regelmässig erheben und beurteilen. 2. Soll-Ist-Vergleich durchführen: Abweichungen zwischen der Planung (Soll) und der Ist-Situation ermitteln. 3. Abweichungsursachen ermitteln: Ursachenanalyse der Abweichungen. 4. Steuerungsmassnahmen entwerfen und umsetzen: Korrigierend eingreifen, entweder Ist-Verlauf oder Planung anpassen.', highlight: 'Steuerungsmassnahmen zielen darauf ab, die Differenz zwischen Soll und Ist möglichst klein zu halten.' },
          { type: 'concept', title: 'Fertigstellungsgrad ermitteln', content: 'Verschiedene Methoden: Subjektive Einschätzung (persönlich, nicht an eindeutige Kriterien gebunden). Bisher geleistete und noch zu leistende Stunden. Methode «0% – 100%» (nicht fertige zu 0%, fertige zu 100%). Methode «0% – 50% – 100%» (nicht fertige zu 0%, solche in Arbeit zu 50%, fertige zu 100%). Definition von Zwischenresultaten (Bemessung anhand im Voraus definierter Lieferprodukte).', highlight: 'Mit der Methode 0%-50%-100% lässt sich der Projektstand exakter ermitteln als mit der Methode 0%-100%.' },
          { type: 'table', title: 'Erhebungs- und Darstellungstechniken', headers: ['Aufgabe', 'Erhebungs- und Darstellungstechniken'], rows: [
            ['Ist-Situation erheben', 'Arbeitsfortschritt: Arbeitspaketbericht, Arbeitsrapport, Projektmanagement-Tool, Projektstatus-Meeting, Einzelgespräche. Fertigstellungsgrad: verschiedene Methoden.'],
            ['Soll-Ist-Vergleich durchführen', 'Terminvergleich: Balkendiagramm, Arbeitsfortschritts-Vergleichsdiagramm, Meilenstein-Trendanalyse. Kostenvergleich: Kostenvergleichstabelle, Kostenvergleichsdiagramm. Termin- und Kostenvergleich: Earned Value (EV), SPI, CPI, SPI-CPI-Diagramm.']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Zum Projektcontrollingprozess gehören: 1. Ist-Situation erheben (Arbeitsfortschritte und Fertigstellungsgrad), 2. Soll-Ist-Vergleich durchführen, 3. Abweichungsursachen ermitteln, 4. Steuerungsmassnahmen entwerfen und umsetzen.',
            'Die Steuerungsmassnahmen können entweder auf den Ist-Verlauf einwirken (Ist-Korrektur) oder zu einer Planänderung führen (Soll-Korrektur).',
            'Das Reporting (Projektberichterstattung) erfolgt in Form eines regelmässigen Projektstatusberichts.',
            'Earned Value beantwortet: Wie viel hätte die bisher erbrachte Leistung kosten dürfen?',
            'SPI > 1 = Vorsprung, SPI < 1 = Verzögerung. CPI > 1 = unter Budget, CPI < 1 = über Budget.'
          ]}
        ]
      }
    },
    {
      id: 'ch13', pageStart: 114, pageEnd: 119, num: 'Teil D – Kapitel 13', title: 'Änderungen bearbeiten',
      exercises: [
        {
          id: 36, type: 'match', title: 'Änderungen im Änderungsmanagement',
          q: 'Welche der folgenden Änderungen in einem Umbauprojekt sollten im systematischen Änderungsmanagement behandelt werden?',
          pairs: [
            { l: 'Die Denkmalpflege schaltet sich mit Auflagen ins Baubewilligungsverfahren ein.', r: 'Zu behandeln' },
            { l: 'Die Schalldämmung im Grossraumbüro ist unbefriedigend, sodass es zusätzliche bauliche Massnahmen braucht.', r: 'Zu behandeln' },
            { l: 'Der Bodenleger meldet, dass der gewählte Bodenbelag nicht vereinbarungsgemäss lieferbar und folglich mit einer Verzögerung seiner Arbeiten von zehn Tagen zu rechnen sei.', r: 'Nicht zu behandeln' }
          ],
          options: ['Zu behandeln', 'Nicht zu behandeln'],
          tips: [], reveal: []
        },
        {
          id: 37, type: 'text', title: 'Abgelehnte Änderungen dokumentieren',
          q: 'Begründen Sie in wenigen Sätzen, warum auch zurückgestellte oder abgelehnte Änderungen dokumentiert werden sollten.',
          keywords: ['lückenlos', 'nachvollziehen', 'Verbindlichkeit', 'Diskussionen', 'zurückgestellt', 'abgelehnt'],
          solution: 'Dank einer lückenlosen Dokumentation kann auch später nachvollzogen werden, warum bestimmte Änderungen entschieden wurde. Dies schafft mehr Verbindlichkeit und aufwendige Diskussionen über das Für und Wider abgelehnter oder zurückgestellter Änderungen müssen so nicht erneut geführt werden.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Typische Beispiele für Änderungen in einem Projekt und deren Folgen aufzeigen.',
            'Das Vorgehen in einem geordneten Änderungsmanagementprozess beschreiben.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Änderungsantrag', def: 'Ein formelles Dokument (auch «Change Request» genannt), mit dem eine gewünschte Änderung systematisch und einheitlich dokumentiert wird. Es enthält Ausgangslage, beantragte Änderung, betroffene Projektresultate und Projektdaten, Risiken, Konsequenzen bei Nichtänderung und eine Empfehlung der Projektleitung.' },
            { term: 'Änderungsmanagement', def: 'Der systematische Umgang mit notwendigen Änderungen im Projektverlauf. Es bezweckt, Änderungen geordnet zu bearbeiten und nicht willkürlich zu verhindern.' },
            { term: 'Änderungsursachen', def: 'Gründe für Abweichungen vom Projektauftrag, z.B. veränderte Rahmenbedingungen, neue Erkenntnisse, neue Anforderungen oder veränderte interne/externe Rahmenbedingungen.' },
            { term: 'Changemanagement', def: 'Der übergeordnete Prozess des Umgangs mit Veränderungen in Projekten, der sicherstellt, dass Änderungen gründlich geprüft, nachvollziehbar entschieden, dokumentiert und kontrolliert in die Projektarbeit einfliessen.' }
          ]},
          { type: 'concept', title: 'Ursachen für Änderungen', content: 'Das Änderungsmanagement behandelt alle massgeblichen Veränderungen des Projektgegenstands (Projektauftrag, Ziele, Anforderungen, Resultate usw.). Typische Ursachen sind: Ursprünglich formulierte Ziele und Anforderungen sind nicht mehr aktuell oder sogar kontraproduktiv. Anforderungen an das Projektergebnis wurden zu wenig konkret oder unvollständig formuliert, sodass Anpassungen im Leistungsumfang unvermeidbar werden. Innovationen auf dem Markt ermöglichen neue Lösungsansätze. Veränderte interne Rahmenbedingungen (z.B. strategische Neuausrichtung, Reorganisation, Wechsel beim Auftraggeber). Veränderte externe Rahmenbedingungen (z.B. gesetzliche Bestimmungen, behördliche Auflagen, Meinungsumschwung in der Öffentlichkeit).', highlight: 'Viele Projekte unterliegen einem ständigen Anpassungsbedarf, weil mit fortschreitender Projektdauer neue Informationen und Erkenntnisse gewonnen werden.' },
          { type: 'concept', title: 'Folgen nicht gemanagter Änderungen', content: 'Wenn das Projektteam neue Anforderungen, Wünsche oder Rahmenbedingungen ungefiltert annimmt, entstehen folgende Probleme: Terminprobleme (Verzögerungen bei einzelnen Teilprojekten und beim Gesamtprojekt), Kostenüberschreitungen (Änderungen verursachen Zusatzkosten), Fachliche Probleme (bereits erarbeitete Lösungen werden obsolet, Machbarkeitsabklärungen nötig), Frustration im Projektteam (ständige Änderungen lassen das Team zweifeln, ob sich der Einsatz noch lohnt).', highlight: 'Vielfach sind sich Auftraggeber oder Projektkunden der Tragweite ihrer Änderungswünsche nicht bewusst.' },
          { type: 'table', title: 'Grundsätze des Änderungsmanagements', headers: ['Grundsatz', 'Erklärung'], rows: [
            ['Änderungsanträge schriftlich formulieren', 'Nachvollziehbarkeit sicherstellen. Missverständnisse und falsche Erwartungen aufgrund von vagen Vorstellungen vorbeugen.'],
            ['Der Auftraggeber entscheidet', 'Jeden Änderungsantrag vom Auftraggeber genehmigen lassen. Bewusst gefällte Entscheide verringern unangenehme Überraschungen. Als Entscheidungsgrundlage lückenlose Informationen über Hintergründe und Auswirkungen der Änderung aufbereiten.'],
            ['Alle betroffenen Unterlagen aktualisieren', 'Praktisch immer betroffen sind die Termin-/Kosten- und die Ressourcenplanung, oft in Form einer Erhöhung des Projektbudgets und/oder einer Verschiebung des Endtermins. Auch bereits erstellte Teilkonzepte müssen u.U. aktualisiert werden.'],
            ['Anhand der aktualisierten Unterlagen weiterarbeiten', 'Mit der Arbeit am veränderten Projekt erst beginnen, wenn die anfallenden Aufgaben, Termine und Kosten aktualisiert sind und mit dem veränderten Projektauftrag übereinstimmen.']
          ]},
          { type: 'concept', title: 'Änderungsmanagementprozess', content: 'Der Änderungsmanagementprozess besteht aus folgenden Schritten: 1. Änderungsbedarf entsteht, 2. Analyse der Änderungen (Abklärung der Notwendigkeit und Konsequenzen, vor allem der Termin- und Kostenfolgen), 3. Erstellung eines Änderungsantrags (Analyse-Ergebnisse werden in einem Antrag an den Auftraggeber festgehalten), 4. Entscheid über den Änderungsantrag (drei Möglichkeiten: bewilligen, ablehnen, zurückstellen), 5. Aktualisierung aller Dokumente (bei Bewilligung werden alle betroffenen Dokumente angepasst), 6. Weiterarbeit am geänderten Projekt.', highlight: 'In allen drei Fällen (bewilligen, ablehnen, zurückstellen) ist der Entscheid über den Änderungsantrag zu dokumentieren.' },
          { type: 'table', title: 'Inhalt eines Änderungsantrags', headers: ['Inhalt', 'Erklärung'], rows: [
            ['Ausgangslage', 'Situation skizzieren, die zur beantragten Änderung geführt hat, und den Urheber benennen.'],
            ['Beantragte Änderung', 'Änderungen gegenüber der ursprünglichen Planung beschreiben.'],
            ['Betroffene Projektresultate', 'Einfluss der Änderung auf bereits verabschiedete oder in Arbeit befindliche Projektresultate beschreiben.'],
            ['Betroffene Projektdaten', 'Einfluss der Änderung auf die aktuell vereinbarten Projektdaten beschreiben: Wie verändern sich Kosten, Termine oder auch der Umfang des Projekts?'],
            ['Risiken', 'Mögliche Risiken beschreiben, die sich bei einer Bewilligung der Änderung ergeben.'],
            ['Konsequenzen bei Nichtänderung', 'Alle absehbaren Konsequenzen beschreiben, die sich bei einer Ablehnung oder Zurückstellung der Änderung ergeben.'],
            ['Empfehlung der Projektleitung', 'Eine persönliche Stellungnahme bzw. eine Empfehlung zuhanden des Auftraggebers abgeben.']
          ]},
          { type: 'merke', title: 'Praktische Tipps', content: 'In der Projektorganisation von Anfang an die Kompetenzen für die Bewilligung von Änderungsanträgen regeln. Es lohnt sich, nicht jede Änderung sogleich umzusetzen, sondern wenn möglich mehrere Änderungen zu einem Änderungspaket zusammenzufassen. Auch abgelehnte Änderungen lückenlos dokumentieren. Alle am Projekt Beteiligten über eine bewilligte Änderung transparent informieren.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Änderungsmanagement betrifft alle massgeblichen Veränderungen des Projektgegenstands, die sich aus neuen Erkenntnissen, veränderten Anforderungen, neuen Lösungsansätzen und veränderten Rahmenbedingungen ergeben.',
            'Ziele: Gründliche Prüfung der Änderungen und Auswirkungen, nachvollziehbare Entscheide, kontrollierte und geplante Anpassung der weiteren Projektarbeit, Dokumentation.',
            'Änderungsmanagementprozess: Analyse der Änderungen, Erstellen eines Änderungsantrags, Entscheid (bewilligen, ablehnen oder zurückstellen), Aktualisierung aller Dokumente, Weiterarbeit am geänderten Projekt.',
            'Inhalt des Änderungsantrags: Ausgangslage, beantragte Änderung, betroffene Projektresultate, betroffene Projektdaten, Risiken, Konsequenzen bei Nichtänderung, Empfehlung der Projektleitung.'
          ]}
        ]
      }
    },
    {
      id: 'ch14', pageStart: 120, pageEnd: 125, num: 'Teil D – Kapitel 14', title: 'Risiken bearbeiten',
      exercises: [
        {
          id: 38, type: 'text', title: 'Projektrisiken identifizieren',
          q: 'Nennen Sie mindestens drei mögliche Projektrisiken für den Kongress \u00abLernen mit Neuen Medien\u00bb.',
          keywords: ['Personelle', 'Technische', 'Organisatorische', 'Externe', 'Erfahrung', 'IT-Infrastruktur', 'Kosten', 'Terminverschiebungen', 'Zuverlässigkeit', 'Lieferanten'],
          solution: 'Mögliche Projektrisiken: Personelle: mangelnde Erfahrung der Mitarbeitenden. Technische: IT-Infrastruktur fällt während des Kongresses aus, Verbindungszusammenbruch bei den Internetleitungen während einer Produktpräsentation. Organisatorische: Kosten-, Terminverschiebungen. Externe: mangelnde Zuverlässigkeit der Lieferanten (Transport, Verpflegung, Hotel), Referenten sagen kurzfristig ab, zu wenig Teilnehmende usw.',
          tips: [], reveal: []
        },
        {
          id: 39, type: 'match', title: 'Ziele des Risikomanagements',
          q: 'Welche Ziele des Risikomanagements sprechen die beiden Manager an?',
          pairs: [
            { l: 'Harald Gross: \u00abBeim Russland-Expansionsprojekt war uns bewusst: Wenn wir Pech haben, legen uns die lokalen Behörden gewaltige Steine in den Weg und gefährden das ganze Vorhaben; darauf hast du als Aussenstehender kaum Einfluss!\u00bb', r: 'Absicherung gegen unvermeidbare Risiken' },
            { l: 'Theo Stieger: \u00abHabt ihr euch gefragt, ob ihr das Projekt überhaupt starten wollt?\u00bb', r: 'Abschätzen der Risikohaftigkeit des Projekts vor Projektstart' },
            { l: 'Harald Gross: \u00abNatürlich, alles andere wäre fahrlässig. Wir wollten diese Chance unbedingt nutzen, also sagten wir uns: Seien wir gegen jene Risiken gewappnet, auf die wir selbst einwirken können!\u00bb', r: 'Vermeidung erkennbarer Risiken' }
          ],
          options: ['Vermeidung erkennbarer Risiken', 'Absicherung gegen unvermeidbare Risiken', 'Abschätzen der Risikohaftigkeit des Projekts vor Projektstart'],
          tips: [], reveal: []
        },
        {
          id: 40, type: 'text', title: 'Prophylaktische vs. Eventualmassnahme',
          q: 'Erklären Sie einem Aussenstehenden in wenigen Sätzen den Unterschied zwischen einer prophylaktischen Massnahme und einer Eventualmassnahme.',
          keywords: ['prophylaktisch', 'Eintrittswahrscheinlichkeit', 'verringern', 'Eventualmassnahme', 'Schadensausmass', 'reduzieren', 'Tragweite'],
          solution: 'Eine prophylaktische Massnahme zielt darauf ab, die Eintrittswahrscheinlichkeit zu verringern, während man Eventualmassnahmen trifft, um die Tragweite des Schadens (das Schadensausmass) zu reduzieren.',
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Ziele und Grundsätze des Risikomanagements in Projekten beschreiben.',
            'Für einfache Projektbeispiele die möglichen Projektrisiken erkennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Eventualmassnahmen', def: 'Massnahmen, die dazu dienen, die Tragweite des Schadens zu reduzieren, wenn das Risiko eingetreten ist. Sie zielen auf die Reduktion des Schadensausmasses ab.' },
            { term: 'Frühwarnsystem', def: 'Ein System, das dazu dient, frühzeitig auf potenzielle Risiken aufmerksam zu werden und auf deren Eintreten vorbereitet zu sein. Bestimmte Indikatoren geben Aufschluss darüber, ob ein potenzielles Risiko einzutreten droht.' },
            { term: 'Prophylaktische Massnahmen', def: 'Vorbeugende Massnahmen, die bei den Eintretensursachen ansetzen und darauf ausgerichtet sind, die Eintrittswahrscheinlichkeit von Risiken zu minimieren.' },
            { term: 'Risikokategorie', def: 'Einteilung der identifizierten Risiken in Kategorien wie Personelle Risiken, Technische Risiken, Projektmanagement-Risiken, Organisatorische Risiken und Externe Risiken.' },
            { term: 'Risikomanagementprozess', def: 'Ein vierstufiger Prozess bestehend aus: Risiken erkennen, Risiken bewerten, Risiken bewältigen und Risiken überwachen.' },
            { term: 'Risikomanagement-Portfolio', def: 'Eine grafische Darstellung, die erkannte Risiken nach Eintrittswahrscheinlichkeit und Tragweite einordnet. Es dient als Grundlage für die Entscheidung, welche Risiken mit Massnahmen bearbeitet werden müssen.' },
            { term: 'Risikotrend-Graph', def: 'Ein Instrument zur laufenden Überwachung der Risiken und der getroffenen Massnahmen im Projektstatusbericht.' }
          ]},
          { type: 'concept', title: 'Ziele des Risikomanagements', content: 'Jedes Projekt ist mit gewissen Risiken verbunden. Unerwartete Ereignisse und ungeplante Veränderungen im Projektumfeld beeinflussen das Projektgeschehen und bergen erhebliche Gefahren für den Projekterfolg. Hauptziele des Risikomanagements sind: Erkennbare Risiken vermeiden (auslösende Faktoren beseitigen oder abschwächen), sich gegen unvermeidbare Risiken absichern (Folgen des Risikoeintritts begrenzen, z.B. durch Versicherung oder Notfallplan), das Gesamtrisiko vor dem Projektstart abschätzen (Risikoanalyse als Entscheidungshilfe, ob das Projekt überhaupt begonnen werden soll).', highlight: 'Ein umsichtiges Projekt-Risikomanagement hilft, die Projektrisiken angemessen zu steuern, indem man sich rechtzeitig wappnet oder Massnahmen einleitet.' },
          { type: 'table', title: 'Vier Grundsätze des Risikomanagements', headers: ['Grundsatz', 'Erklärung'], rows: [
            ['Unabhängige Experten einbeziehen', 'Unabhängige Experten oder Berater können potenzielle Problemfelder und Risiken objektiver und wertfreier beurteilen und eine wirksame Massnahmenplanung unterstützen.'],
            ['Projektbegleitende Daueraufgabe', 'Das Risikomanagement sollte bereits im Vorfeld des Projekts beginnen und während des gesamten Projekts ein wichtiges Thema sein, um auf eintretende Risiken angemessen reagieren und die Wirksamkeit von Massnahmen beurteilen zu können.'],
            ['Checklisten verwenden', 'Checklisten vereinfachen die Risikoanalyse und helfen, frühzeitig an typische Projektrisiken zu denken, die das Projekt ernsthaft gefährden können.'],
            ['Ehrliche Einschätzung', 'Eine nüchterne, realistische Risikobeurteilung ist umso wichtiger, als in Projekten vielfach der Hang zum «Prinzip Hoffnung» besteht: Mögliche Risiken oder Probleme werden ignoriert und/oder deren Auswirkungen unterschätzt.']
          ]},
          { type: 'concept', title: 'Risikomanagementprozess', content: 'Der Risikomanagementprozess besteht aus vier Schritten, die zyklisch durchlaufen werden: 1. Risiken erkennen (potenzielle Schwachstellen ausfindig machen, möglichst unter Einbezug der wichtigsten Stakeholder, mithilfe von Projektdokumentation, Checklisten, Brainstorming, Interviews und Analyse von Annahmen), 2. Risiken bewerten (Beurteilung anhand der Tragweite für das Projekt und der Eintrittswahrscheinlichkeit, Erstellung eines Risikoportfolios), 3. Risiken bewältigen (konkrete Massnahmen für jene Risiken definieren: prophylaktische Massnahmen, Eventualmassnahmen oder Frühwarnsystem), 4. Risiken überwachen (laufende Kontrolle und Nachführung im Projektstatusbericht).', highlight: 'Es empfiehlt sich, für den Schritt Risiken erkennen einen neutralen Moderator zu verpflichten, der mit dem Blick von aussen für eine objektivere Risikoermittlung sorgt.' },
          { type: 'table', title: 'Bildung von Risikokategorien', headers: ['Kategorie', 'Erläuterung', 'Beispiele'], rows: [
            ['Personelle Risiken', 'Mit dem Einsatz der Projektmitarbeitenden verbundene Risiken', 'Know-how und Fähigkeiten, Motivation, Einstellung zum Projekt, Zuverlässigkeit, Kapazitätsengpässe'],
            ['Technische Risiken', 'Vorhandene/geplante Geräte, Technologien oder Softwareprogramme', 'Neue, unausgereifte oder veraltete Technologien, Systemkompatibilität, Schnittstellenprobleme'],
            ['Projektmanagement-Risiken', 'Mit der Vorgehensmethodik verbundene Risiken', 'Projektplanung, Projektmanagement-Methoden'],
            ['Organisatorische Risiken', 'Mit der Projektabwicklung verbundene Risiken', 'Kosten, Termine, Qualität, Projektziele und -inhalt, Schnittstellen, Projektorganisation'],
            ['Externe Risiken', 'Von aussen einwirkende Risiken', 'Datenschutzbestimmungen, gesetzliche Auflagen, externe Lieferanten']
          ]},
          { type: 'concept', title: 'Risiken bewerten', content: 'Die Ursachenanalyse liefert wichtige Informationen für die Bewertung der Eintrittswahrscheinlichkeit. Die Risiken werden anschliessend nach zwei Kriterien beurteilt: Tragweite für das Projekt (am besten monetär bewerten, d.h. das Schadensausmass in Franken ausweisen; wenn keine gesicherten Daten vorliegen, eine symbolische Skala verwenden) und Eintrittswahrscheinlichkeit (meist eine symbolische Skala von 1 = unwahrscheinlich bis 5 = sehr wahrscheinlich). Das Risikoportfolio gibt einen Überblick über die erkannten Risiken und ihre Bewertung.', highlight: 'Das Risikoportfolio zeigt, welche Risiken mit Massnahmen bearbeitet werden müssen (hohe Eintrittswahrscheinlichkeit und hohe Tragweite) und mit welchen man leben kann.' },
          { type: 'concept', title: 'Risiken bewältigen', content: 'Im dritten Schritt werden konkrete Massnahmen für jene Risiken definiert, die nach ihrer Einstufung im Risikomanagement-Portfolio zu bearbeiten sind. Drei Arten von Massnahmen: Vorbeugende Massnahmen setzen bei den Eintretensursachen an und minimieren die Eintrittswahrscheinlichkeit. Eventualmassnahmen dienen dazu, die Tragweite des Schadens zu reduzieren, wenn das Risiko eingetreten ist. Ein Frühwarnsystem dient dazu, frühzeitig auf potenzielle Risiken aufmerksam zu werden – bestimmte Indikatoren geben Aufschluss darüber, ob ein potenzielles Risiko einzutreten droht.', highlight: 'Bei der Planung aller Massnahmen sind Wirtschaftlichkeitsüberlegungen angebracht: Die Kosten sollten den Nutzen der Schadensminderung nicht übersteigen.' },
          { type: 'concept', title: 'Risiken überwachen', content: 'Die Risiken und die getroffenen Massnahmen sind laufend zu überwachen und im Projektstatusbericht nachzuführen. Dabei stehen folgende Fragen im Vordergrund: Hat sich an der Eintrittswahrscheinlichkeit und/oder an der Tragweite der Risiken durch die Ausführung der geplanten Massnahmen etwas geändert? Wurden die Massnahmen überhaupt ausgeführt? Sind neue Risiken im Projektverlauf hinzugekommen?' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Risikomanagement in Projekten befasst sich mit der Identifikation der potenziellen Probleme, ihrer Ursachenanalyse und der Planung von Massnahmen und ihrer Überwachung.',
            'Die Ziele des Risikomanagements sind: Vermeidung erkennbarer Risiken, Absicherung gegen unvermeidbare Risiken, Abschätzen der Risikohaftigkeit eines Projekts vor dem Projektstart.',
            'Der Risikomanagementprozess besteht aus vier Schritten: Risiken erkennen (Schwachstellen sammeln, in Risikokategorien einteilen), Risiken bewerten (Eintrittswahrscheinlichkeit und Tragweite beurteilen, Risikoportfolio erstellen), Risiken bewältigen (prophylaktische Massnahmen, Frühwarnsystem, Eventualmassnahmen planen), Risiken überwachen (regelmässige Kontrolle, z.B. Risikoanalyseformular, Risikotrend-Graph).'
          ]}
        ]
      }
    },
    {
      id: 'ch15', pageStart: 126, pageEnd: 130, num: 'Teil D – Kapitel 15', title: 'Projektabschluss',
      exercises: [
        {
          id: 41, type: 'text', title: 'Abschlussveranstaltung',
          q: 'Der Auftraggeber eines Projekts streicht den Budgetposten \u00abAbschlussveranstaltung\u00bb, weil er deren Sinn und Zweck nicht einsieht. Nennen Sie dem Auftraggeber mindestens zwei Argumente, die für eine offizielle Abschlussveranstaltung in Projekten sprechen.',
          keywords: ['offiziell', 'Akt', 'Kick-off', 'Schlusspunkt', 'symbolisch', 'Bedeutung', 'Beteiligten'],
          solution: 'Folgende Argumente sprechen für eine offizielle Abschlussveranstaltung: Ein Projekt mit einem offiziellen Akt beenden, wie es mit einem Kick-off-Meeting gestartet wurde. Eine gelungene Abschlussveranstaltung setzt einen positiven Schlusspunkt. Eine gelungene Abschlussveranstaltung hat eine wichtige symbolische Bedeutung für alle Beteiligten.',
          tips: [], reveal: []
        },
        {
          id: 42, type: 'text', title: 'Risiko bei ungeklärter Service-Organisation',
          q: 'Welches Risiko gehen Sie als Projektleiter ein, wenn Sie die Service-Organisation (Ansprechpartner) beim Projektabschluss nicht klar bestimmen?',
          keywords: ['Supportanfragen', 'Projektteam', 'offiziell', 'abgeschlossen', 'Service-Organisation', 'Ansprechpartner', 'verweisen'],
          solution: 'Das Risiko, dass Supportanfragen und weitere Fragen weiterhin bei Ihnen oder beim Projektteam landen, obwohl das Projekt offiziell bereits abgeschlossen ist. Für diese Aufgaben müssten Sie spätestens beim Projektabschluss eine funktionstüchtige Service-Organisation mit den Ansprechpartnern bestimmt haben. Ist dies der Fall, sollten Sie die Anfragenden konsequent an sie verweisen.',
          tips: [], reveal: []
        },
        {
          id: 43, type: 'check', title: 'Inhalte der Abschlussdokumentation',
          q: 'Welche der folgenden Inhalte gehören in die Abschlussdokumentation?',
          statements: [
            { s: 'Arbeitsanweisungen an die Projektmitarbeitenden', c: false },
            { s: 'Benutzerhandbuch', c: true },
            { s: 'Verfahrensdokumentation', c: true },
            { s: 'Projektorganigramm', c: false },
            { s: 'Entscheidungsprotokolle der Projektausschusssitzungen', c: false }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Hauptaufgaben des Projektleiters beim Projektabschluss beschreiben.',
            'Die Anforderungen an eine vollständige Abschlussdokumentation bestimmen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Abschlussdokumentation', def: 'Dokumentation, die das Projektergebnis festhält. Es gibt zwei Arten: die Benutzerdokumentation (Arbeitsanweisungen, Benutzerhandbücher für die betroffenen Mitarbeitenden) und die Verfahrensdokumentation (für die Fachexperten, beschreibt alle relevanten Sachverhalte zur Projektlösung).' },
            { term: 'Abschlussveranstaltung', def: 'Ein offizieller Anlass, der das Projekt symbolisch für alle Beteiligten beendet. Beinhaltet Rückschau, Lessons learned und Abschied.' },
            { term: 'Lessons learned', def: 'Das Erreichte und das Nichterreichte sowie positive und negative Erfahrungen auswerten, reflektieren und Erkenntnisse für weitere Projekte ableiten.' },
            { term: 'Produktiver Betrieb', def: 'Die Phase, in der die Projektlösung in den laufenden Betrieb integriert wird. Die Übergabe wird mit dem Übergabe- und Übernahmeprotokoll formell dokumentiert.' },
            { term: 'Projekterfolgskontrolle', def: 'Die Überprüfung, ob die definierten Projektziele erreicht wurden und ob der Nutzen der Projektlösung wie geplant eintritt. Muss verbindlich nach Projektabschluss festgelegt werden.' },
            { term: 'Schlussabrechnung', def: 'Eine detaillierte Projekt-Schlussabrechnung über die geplanten und effektiv verursachten Projektkosten und die darauf aufbauende Nachkalkulation des Projekts.' },
            { term: 'Schlussbericht', def: 'Ein vollständiger Projekt-Schlussbericht enthält nebst der Abschlussdokumentation auch eine kritische Würdigung der Projektarbeit sowie allfällige Schlussfolgerungen für die künftige Projektarbeit.' },
            { term: 'Service-Organisation', def: 'Die verantwortlichen Ansprechpartner für Fragen und auftretende Probleme nach dem Projektabschluss. In IT-Projekten auch als Service-Organisation bezeichnet.' },
            { term: 'Übergabeprotokoll', def: 'Dokument, das die Übergabeobjekte (z.B. Softwarelösungen, Wartungskonzept), vollständige Dokumentation, Leistungsmerkmale und Übergabemodalitäten festhält.' },
            { term: 'Übernahmeprotokoll', def: 'Dokument, das die Übernahmeobjekte, durchgeführte Prüfungen, festgestellte Mängel, Nachforderungen und Abnahmeentscheidung mit allfälligen Fristen und Verantwortlichkeiten festhält.' },
            { term: 'Wartungskonzept', def: 'Organisatorische Regelungen, die den Umgang mit Fragen, Problemen und Überarbeitungen nach dem Projektabschluss regeln. Beinhaltet die verantwortlichen Ansprechpartner und die notwendigen Wartungsprozesse.' }
          ]},
          { type: 'concept', title: 'Ziele und Einordnung im Phasenkonzept', content: 'Der Projektabschluss ist keine eigentliche Phase in einem Phasenkonzept, sondern ein Sammelbegriff für Aufgaben, die im Zusammenhang mit der Beendigung eines Projekts anfallen. Mit dem Projektabschluss werden zwei Hauptziele verfolgt: Sicherstellen, dass das Projekt ordnungsgemäss beendet wird und alle für das Projekt temporär errichteten organisatorischen und technischen Strukturen aufgelöst werden. Aufgleisen aller Massnahmen, die den Betrieb der Projektlösung auch nach dem formellen Projektabschluss sicherstellen. Die Projektabschlussaufgaben fallen zeitlich vorwiegend zwischen den Phasen «Einführung» und «Erhaltung» an.', highlight: 'Der Projektabschluss ist keine eigentliche Phase, sondern ein Sammelbegriff für Aufgaben bei der Beendigung eines Projekts.' },
          { type: 'concept', title: 'Übergabe der Lösung in den produktiven Betrieb', content: 'Jede Projektlösung muss in den laufenden (produktiven) Betrieb integriert werden. Typischerweise wird diese Übergabe mit dem Übergabe- und mit dem Übernahmeprotokoll formell dokumentiert. Zur Übergabe gehört auch, dass verantwortliche Ansprechpartner für Fragen und auftretende Probleme zur Verfügung stehen. Bei der Übergabe an die Nutzer ist ebenfalls zu regeln, wie mit Fragen, auftretenden Problemen oder notwendigen Überarbeitungen nach dem Projektabschluss umzugehen ist. Diese organisatorischen Regelungen werden als Wartungskonzept bezeichnet.', highlight: 'Erst mit der Unterzeichnung des Übergabe-/Übernahmeprotokolls durch Auftraggeber und Projektleiter ist der formelle Abschluss des Projekts besiegelt.' },
          { type: 'concept', title: 'Dokumentation erstellen', content: 'Die Dokumentation beim Projektabschluss besteht aus der Abschlussdokumentation, dem Schlussbericht und der Schlussabrechnung. Bei der Abschlussdokumentation wird das Projektergebnis festgehalten. Zwei Arten: Die Benutzerdokumentation (Arbeitsanweisungen, Benutzerhandbücher) geht an die betroffenen Mitarbeitenden und muss verständlich und benutzerfreundlich aufbereitet sein. Die Verfahrensdokumentation ist für die Fachexperten bestimmt und beschreibt alle relevanten Sachverhalte zur Projektlösung. Der Projekt-Schlussbericht enthält eine kritische Würdigung der Projektarbeit mit Aussagen zu: Ausgangslage, Projektziele, Projektorganisation, Vorgehensweise, Termine/Kosten/Ressourcenaufwand, Qualität des Projektresultats und des Vorgehens, Zufriedenheit aller Stakeholder, Empfehlungen, Lessons learned und Gesamtbeurteilung.' },
          { type: 'concept', title: 'Projektorganisation aufheben', content: 'Zur Übergabe der Lösung und zur Auflösung der Projektorganisation gehört eine Abschlusssitzung oder -veranstaltung. Der Ablösungsprozess kann ein Gefühl der Leere und einen Trennungsschmerz bewirken. Bei der Auflösung des Projektteams geht es um: Reintegration der internen Projektmitarbeitenden in die Linienfunktion oder Angebote für die Übernahme neuer Projektaufgaben. Auflösung der bestehenden Arbeitsverträge und Schlussabrechnung der erbrachten Leistungen bei den externen Projektmitarbeitenden.' },
          { type: 'concept', title: 'Abschlussveranstaltung', content: 'Ein Abschlussanlass beendet symbolisch das Projekt für die am Projekt Beteiligten. Er sollte folgende Elemente enthalten: Rückschau (Wichtige Ereignisse und Entwicklungsschritte bewusst noch einmal aufleben lassen nach dem Motto «Weisst du noch...?»), Lessons learned (Das Erreichte und das Nichterreichte, positive und negative Erfahrungen auswerten, reflektieren und Erkenntnisse für weitere Projekte ableiten), Abschied (Noch nicht vollständig geklärte Probleme loslassen, um versöhnlich auseinanderzugehen).' },
          { type: 'merke', title: 'Gefahren beim Projektabschluss', content: 'Typische Gefahren: Künstliche Projektverzögerungen (Projektmitarbeitende sehen keine befriedigenden Herausforderungen und schieben den Abschluss künstlich hinaus). Unklare Service-Organisation (Supportanfragen landen weiterhin bei ehemaligen Projektmitarbeitenden). Fehlendes Controlling (wichtige Verbesserungswünsche «versanden»). Keine konsequente Nutzenüberprüfung (die Überprüfung wird nicht klar terminiert und geplant). Fehlende Wartungsbudgets (Unterstützungsleistungen oder Anpassungen erfolgen nur mit Minimalaufwand).' },
          { type: 'merke', title: 'Praxistipps', content: 'Verbindliche Projekterfolgskontrolle: Stellen Sie sicher, dass trotz eines abgeschlossenen Projekts noch Verantwortlichkeiten für die Durchführung der Projekterfolgskontrolle festgelegt werden. Verpflichtung der Ansprechpersonen nach Projektabschluss: Nehmen Sie als ehemaliges Mitglied des Projektteams keine Aufgaben für die Unterstützung der Nutzer mehr direkt an, sondern verweisen Sie konsequent auf die Abläufe und Ansprechpersonen, die im Zusammenhang mit dem Projektabschluss bestimmt wurden.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Als Hauptziele des Projektabschlusses gelten: Sicherstellung des ordnungsgemässen Projektabschlusses, Auflösung der temporären organisatorischen und technischen Strukturen, Definition von Massnahmen, die den Betrieb der Projektlösung nach dem formellen Projektabschluss gewährleisten.',
            'Zu den Hauptaufgaben beim Projektabschluss gehören: Übergabe der Lösung in den produktiven Betrieb (Erstellen eines Übergabeprotokolls und eines Wartungskonzepts), Auflösung des Projektteams (Reintegration der internen Projektmitarbeitenden, Auflösung der Arbeitsverträge mit externen Projektmitarbeitenden), Abschlussveranstaltung (Organisation und Durchführung), Abschlussdokumentation/Projekt-Schlussbericht (Benutzer- und Verfahrensdokumentation, kritische Würdigung der Projektarbeit, Schlussfolgerungen), Projekt-Schlussabrechnung (inkl. Nachkalkulation).'
          ]}
        ]
      }
    }
  ],
  glossary: [
    { term: 'Projekt', def: 'Ein zeitlich befristetes, einmaliges Vorhaben mit begrenzten Ressourcen, das komplex und innovativ ist.' },
    { term: 'Projektmanagement', def: 'Bewusste Gestaltung und Lenkung des Projektverlaufs, um den Projekterfolg zu gewährleisten.' },
    { term: 'Projektarten', def: 'Einteilung von Projekten nach Inhalt, Grösse, Komplexität, Laufzeit, Bedeutung, Reichweite etc.' },
    { term: 'Erfolgsfaktoren', def: 'Projektleiter, Topmanagement, Projektteam, Methodik, Kommunikation, Information, Projektidee.' },
    { term: 'Basis-Phasenkonzept', def: 'Sechs Phasen: Vorstudie, Grobkonzept, Detailkonzept, Realisierung, Einführung, Erhaltung.' },
    { term: 'Planungszyklus', def: 'Sieben Schritte innerhalb der Planungsphasen: Auftrag, Erhebung, Würdigung, Lösungssuche, Bewertung, Auswahl.' },
    { term: 'Projektinitialisierung', def: 'Prozess von der Projektidee über den Projektantrag bis zur Projektfreigabe.' },
    { term: 'Projektauftrag', def: 'Zielvereinbarung zwischen Projektleiter und Auftraggeber; Richtschnur für das Gesamtprojekt.' },
    { term: 'Projektantrag', def: 'Dokument mit Ausgangslage, Problemen, Lösungsidee, erwarteter Nutzen, Projektzielen.' },
    { term: 'Zieldefinition', def: 'Systematischer Prozess: Ziele ermitteln, analysieren, klassifizieren, operationalisieren, gewichten, kommunizieren.' },
    { term: 'SMART-Ziele', def: 'Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert.' },
    { term: 'Stakeholder', def: 'Betroffene und beteiligte Personen bzw. Anspruchsgruppen eines Projekts.' },
    { term: 'Stakeholdermanagement', def: 'Systematische Analyse und Beeinflussung der Stakeholder zur Förderung der Projektziele.' },
    { term: 'Einfluss-Interessen-Matrix', def: 'Tool zur Einordnung von Stakeholdern nach ihrem Einfluss und Interesse am Projekt.' },
    { term: 'Informationskonzept', def: 'Bausteine: Absender, Empfänger, Inhalt, Zeitpunkt, Instrument, Ort.' },
    { term: 'Projektorganisation', def: 'Bildung von Stellen, Zuordnung zu Instanzen, Wahl der Organisationsform.' },
    { term: 'Reine Projektorganisation', def: 'Eigenständige Organisationseinheit; Projektmitarbeitende arbeiten ausschliesslich für das Projekt.' },
    { term: 'Matrix-Projektorganisation', def: 'Aufteilung in Projekt- und Linienaufgaben; Projektleiter ist weisungsbefugt.' },
    { term: 'Stabs-Projektorganisation', def: 'Koordinationsfunktion des Projektleiters; Mitarbeitende arbeiten nebenbei.' },
    { term: 'Projektstrukturplan (PSP)', def: 'Zerlegung des Projekts in Teilaufgaben; systematische Strukturierung mit Arbeitspaketen.' },
    { term: 'Arbeitspaket', def: 'Kleinste Einheit im PSP mit definierten Zielen, Ergebnissen, Aktivitäten und Verantwortlichkeiten.' },
    { term: 'Gliederungsprinzipien', def: 'Nach Objekten, Funktionen, Projektphasen oder gemischt.' },
    { term: 'Vorgangsliste', def: 'Chronologische Anordnung der Vorgänge mit Dauer und Vorgängerbeziehungen.' },
    { term: 'Netzplan', def: 'Grafische Darstellung der Vorgangsliste; zeigt den kritischen Pfad.' },
    { term: 'Kritischer Pfad', def: 'Kette von Vorgängen ohne Zeitreserven; bestimmt die minimale Projektdauer.' },
    { term: 'Terminplan', def: 'Balkendiagramm zur Visualisierung der Vorgangsliste mit Meilensteinen.' },
    { term: 'Ressourcenplanung', def: 'Ermittlung des Bedarfs an Personal und Sachmitteln für die Arbeitspakete.' },
    { term: 'Kostenplanung', def: 'Berechnung der Kosten pro Arbeitspaket; Gliederung nach Kostenarten und Kostenträgern.' },
    { term: 'Projektcontrolling', def: 'Ist-Situation erheben, Soll-Ist-Vergleich, Abweichungsursachen, Steuerungsmassnahmen.' },
    { term: 'Earned Value', def: 'Methode zum Termin- und Kostenvergleich: beantwortet, wie viel die erbrachte Leistung kosten hätte dürfen.' },
    { term: 'SPI (Schedule Performance Index)', def: 'Kennzahl: Earned Value / geplante Kosten. >1 = Vorsprung, <1 = Verzögerung.' },
    { term: 'CPI (Cost Performance Index)', def: 'Kennzahl: Earned Value / Ist-Kosten. >1 = unter Budget, <1 = über Budget.' },
    { term: 'Änderungsmanagement', def: 'Systematische Prüfung, Genehmigung und Dokumentation von Projektänderungen.' },
    { term: 'Risikomanagement', def: 'Identifikation, Bewertung, Bewältigung und Überwachung von Projektrisiken.' },
    { term: 'Prophylaktische Massnahme', def: 'Vorbeugend: Minimierung der Eintrittswahrscheinlichkeit eines Risikos.' },
    { term: 'Eventualmassnahme', def: 'Schadensbegrenzend: Reduktion des Schadensausmasses bei Risikoeintritt.' },
    { term: 'Projektabschluss', def: 'Übergabe, Auflösung Projektteam, Abschlussveranstaltung, Dokumentation, Abrechnung.' }
  ]
};
