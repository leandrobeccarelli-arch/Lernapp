window.BOOK_DATA = {
  id: 'projektmanagement',
  title: 'Projektmanagement für Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Projektmanagement',
  author: 'Führer, Züger',
  year: 2017,
  pages: 142,
  color: '#d97706',
  chapters: [
    {
      id: 'ch1', num: 'Teil A – Kapitel 1', title: 'Grundbegriffe des Projektmanagements',
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
          tips: [], reveal: []
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
          tips: [], reveal: []
        },
        {
          id: 3, type: 'text', title: 'Begrenzte Ressourcen',
          q: 'Welche besondere Rolle spielen begrenzte Ressourcen bei der Projektarbeit?',
          keywords: ['begrenzt', 'Ressourcen', 'kritisch', 'Projekterfolg', 'finanziell', 'Mittel', 'Budget', 'personell', 'Zeit', 'qualifiziert'],
          solution: 'Begrenzte Ressourcen in der Projektpraxis sind meist ein kritisches Thema. Sie gefährden den Projekterfolg. Seien dies zu geringe finanzielle Mittel (Projektbudgets), unzulängliche IT-Systeme oder vor allem auch: zu wenig personelle Ressourcen (zu wenig Zeit für die betreffende Projektarbeit oder zu wenig gut qualifiziert).',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },
    {
      id: 'ch2', num: 'Teil A – Kapitel 2', title: 'Vorgehensmethodik',
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
          tips: [], reveal: []
        },
        {
          id: 5, type: 'text', title: 'Phasenkonzept vs. Planungszyklus',
          q: 'Erklären Sie einem Aussenstehenden in wenigen Sätzen den Unterschied zwischen dem Phasenkonzept und dem Planungszyklus.',
          keywords: ['Phasenkonzept', 'Projektverlauf', 'Planungszyklus', 'methodisch', 'Phase', 'Schritte', 'Vorgehen', 'innerhalb'],
          solution: 'Mit dem Phasenkonzept legt man das methodische Vorgehen für den gesamten Projektverlauf fest; eine Phase bildet einen abgeschlossenen Aufgabenblock innerhalb des Projekts. Wie der Name schon sagt, definiert der Planungszyklus das methodische Vorgehen innerhalb einer Planungsphase; für die Erreichung des Phasenziels müssen sämtliche sechs Schritte des Planungszyklus durchlaufen werden.',
          tips: [], reveal: []
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
          tips: [], reveal: []
        }
      ],
      learningData: null
    },
    {
      id: 'ch3', num: 'Teil B – Kapitel 3', title: 'Projektinitialisierung',
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
          tips: [], reveal: []
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
          tips: [], reveal: []
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
          tips: [], reveal: []
        }
      ],
      learningData: null
    },
    {
      id: 'ch4', num: 'Teil B – Kapitel 4', title: 'Projektziele definieren',
      exercises: [
        {
          id: 10, type: 'tf', title: 'Aussagen über den Zieldefinitionsprozess',
          q: 'Sind die folgenden vier Aussagen über den Zieldefinitionsprozess richtig oder falsch?',
          statements: [
            { s: 'Es darf in einem Projekt keine Zielkonflikte geben.', c: false },
            { s: 'Ein unechtes Projektziel ist z.B.: \u00abWir wollen die Controllingprozesse in sämtlichen Unternehmensbereichen automatisieren.\u00bb', c: true },
            { s: 'Alle Muss- und Kann-Ziele sind zu gewichten, damit man später die Lösungsvarianten objektiv beurteilen kann.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 11, type: 'text', title: 'Operationalisierte Ziele',
          q: 'Warum sind operationalisierte Ziele für ein Projekt wichtig?',
          keywords: ['messen', 'Massstab', 'operationalisiert', 'quantitativ', 'qualitativ', 'Zielerreichung', 'Beurteilung'],
          solution: 'Um die Zielerreichung messen zu können, brauchen Ziele einen Massstab. Sie müssen operationalisiert werden. Als Massstab sind sowohl qualitative als auch quantitative Kriterien möglich.',
          tips: [], reveal: []
        },
        {
          id: 12, type: 'text', title: 'Präferenzmatrix analysieren',
          q: 'Im Projekt \u00abVerbesserung des Busbetriebs\u00bb wurde eine Präferenzmatrix erhoben.\nA) Wird das Ziel \u00abViele Direktverbindungen\u00bb vor dem Ziel \u00abTiefe Investitionskosten\u00bb bevorzugt?\nB) Was bedeuten die unterschiedlichen Zahlen in den Spalten \u00abM\u00bb und \u00abG\u00bb beim Ziel \u00abTiefe laufende Kosten\u00bb?\nC) Welches Ziel ist gemäss der Präferenzmatrix am tiefsten zu gewichten?',
          keywords: ['bevorzugt', 'Schnittpunkt', 'modifiziert', 'Gewichtung', 'Nennungen', 'Arbeitsbedingungen', 'tiefsten', 'Rang'],
          solution: 'A) Im direkten Vergleich wird das Ziel \u00abTiefe Investitionskosten\u00bb bevorzugt (Buchstabe \u00abb\u00bb im Schnittpunkt). B) In der Spalte \u00abM\u00bb wird die modifizierte Gewichtung angegeben, in der Spalte \u00abG\u00bb die ursprüngliche Gewichtung, die sich aus der Anzahl Nennungen ergibt. Beim Ziel \u00abTiefe laufende Kosten\u00bb wurde die modifizierte Gewichtung um 3% leicht angehoben. C) Das Ziel \u00abGute Arbeitsbedingungen\u00bb hat am wenigsten Nennungen erhalten und ist somit am tiefsten gewichtet. Es erscheint auf dem siebten und letzten Rang.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },
    {
      id: 'ch5', num: 'Teil B – Kapitel 5', title: 'Stakeholdermanagement',
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
      learningData: null
    },
    {
      id: 'ch6', num: 'Teil B – Kapitel 6', title: 'Information und Dokumentation',
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
            { l: '\u00abEs ist wichtig, sich sehr genau zu überlegen, wer welche Informationen erhalten soll!\u00bb', r: 'Systematisch informieren' },
            { l: '\u00abInformieren heisst auch: Alle müssen dasselbe verstanden haben!\u00bb', r: 'Transparent informieren' },
            { l: '\u00abÜberlege dir den Zeitpunkt der Information gut \u2013 er kann entscheidend sein!\u00bb', r: 'Gezielt informieren' }
          ],
          options: ['Systematisch informieren', 'Gezielt informieren', 'Transparent informieren'],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },
    {
      id: 'ch7', num: 'Teil B – Kapitel 7', title: 'Projektorganisation planen',
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
      learningData: null
    },
    {
      id: 'ch8', num: 'Teil C – Kapitel 8', title: 'Projektstrukturplan',
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
      learningData: null
    },
    {
      id: 'ch9', num: 'Teil C – Kapitel 9', title: 'Ablauf- und Terminplanung',
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
      learningData: null
    },
    {
      id: 'ch10', num: 'Teil C – Kapitel 10', title: 'Ressourcenplanung',
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
      learningData: null
    },
    {
      id: 'ch11', num: 'Teil C – Kapitel 11', title: 'Kostenplanung',
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
      learningData: null
    },
    {
      id: 'ch12', num: 'Teil D – Kapitel 12', title: 'Projektcontrolling',
      exercises: [
        {
          id: 32, type: 'tf', title: 'Aussagen zur Projektsteuerung',
          q: 'Welche der folgenden Aussagen zur Projektsteuerung sind richtig?',
          statements: [
            { s: 'Mit der Methode \u00ab0% \u2013 50% \u2013 100%\u00bb lässt sich der Projektstand exakter ermitteln als mit der Methode \u00ab0% \u2013 100%\u00bb.', c: true },
            { s: 'In einem Reorganisationsprojekt ist es schwierig, eine Aussage über die erreichte Qualität der Zwischenergebnisse zu machen.', c: true },
            { s: 'Der Earned Value beantwortet die Frage, wie viel die bisher erbrachte Leistung hätte kosten dürfen.', c: false },
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
      learningData: null
    },
    {
      id: 'ch13', num: 'Teil D – Kapitel 13', title: 'Änderungen bearbeiten',
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
      learningData: null
    },
    {
      id: 'ch14', num: 'Teil D – Kapitel 14', title: 'Risiken bearbeiten',
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
      learningData: null
    },
    {
      id: 'ch15', num: 'Teil D – Kapitel 15', title: 'Projektabschluss',
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
      learningData: null
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
