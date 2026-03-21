window.BOOK_DATA = {
  id: 'rechnungswesen',
  title: 'Rechnungswesen f\u00fcr Marketing- und Verkaufsverantwortliche',
  shortTitle: 'Rechnungswesen f\u00fcr M+V',
  author: 'Robert Baumann',
  year: 2017,
  pages: 323,
  color: '#059669',
  chapters: [
    // ============================================================
    // Kapitel 1: Uebersicht ueber das Fachgebiet (Fragen 1-3)
    // ============================================================
    {
      id: 'ch1', num: 'Teil A \u2022 Kapitel 1', title: '\u00dcbersicht \u00fcber das Fachgebiet',
      exercises: [
        {
          id: 1, type: 'text',
          title: 'Hauptbereiche und Hilfsbereiche des Rechnungswesens',
          q: 'Die beiden Hauptbereiche des Rechnungswesens sind das finanzielle und das betriebliche Rechnungswesen. Es gibt Hilfsbereiche und erg\u00e4nzende Bereiche.\nA) Nennen Sie mindestens 3 Hilfsbereiche.\nB) Nennen Sie mindestens 3 erg\u00e4nzende Bereiche.\nC) Nennen Sie mindestens 2 Elemente des finanziellen Rechnungswesens.\nD) Nennen Sie mindestens 2 Elemente des betrieblichen Rechnungswesens.',
          keywords: ['Debitorenbuchhaltung','Kreditorenbuchhaltung','Anlagenbuchhaltung','Konzernrechnung','Bilanz','Erfolgsanalyse','Planung','Budgetierung','Erfolgsrechnung','Kostentr\u00e4gerrechnung','Kalkulation'],
          solution: 'A) Hilfsbereiche: Debitorenbuchhaltung, Kreditorenbuchhaltung, Anlagenbuchhaltung u.a.\nB) Erg\u00e4nzende Bereiche: Konzernrechnung, Bilanz- und Erfolgsanalyse, Planung und Budgetierung u.a.\nC) Finanzielles RW: Erfolgsrechnung, Bilanz u.a.\nD) Betriebliches RW: Kostentr\u00e4gerrechnung, Kalkulation u.a.',
          tips: [], reveal: []
        },
        {
          id: 2, type: 'text',
          title: 'Interne vs. externe Rechnungen',
          q: 'Die beiden Hauptbereiche des Rechnungswesens werden auch als interne und externe Rechnungen bezeichnet. Welchem Bereich entsprechen wohl die internen Rechnungen? (1 Satz.)',
          keywords: ['betrieblich','Betriebsbuchhaltung','intern'],
          solution: 'Die internen Rechnungen entsprechen dem betrieblichen Rechnungswesen (Betriebsbuchhaltung), das vor allem f\u00fcr F\u00fchrungsaufgaben ben\u00f6tigt wird.',
          tips: [], reveal: []
        },
        {
          id: 3, type: 'mc',
          title: 'Dokumentation im Rechnungswesen',
          q: 'Zwei Stichworte, die zusammen mit dem Rechnungswesen fallen, sind Dokumentation und F\u00fchrung. Zu welchem Hauptbereich passt wohl eher die Dokumentation?',
          options: ['Zum betrieblichen Rechnungswesen','Zum finanziellen Rechnungswesen','Zu beiden gleichermassen','Zu keinem von beiden'],
          answer: 1,
          explanation: 'Das finanzielle Rechnungswesen ist prim\u00e4r auf Dokumentation ausgerichtet, w\u00e4hrend das betriebliche Rechnungswesen vor allem f\u00fcr F\u00fchrungsaufgaben ben\u00f6tigt wird.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 2: Bilanz (Fragen 4-11)
    // ============================================================
    {
      id: 'ch2', num: 'Teil A \u2022 Kapitel 2', title: 'Bilanz: Ausweis von Verm\u00f6gen und Schulden',
      exercises: [
        {
          id: 4, type: 'tf',
          title: 'Zusammenh\u00e4nge in der Bilanz',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Die Summe der Aktiven ist gleich hoch wie die Summe der Passiven.', c: true },
            { s: 'Eigenkapital und Fremdkapital ergeben zusammen die Bilanzsumme.', c: true },
            { s: 'Das Eigenkapital (Reinverm\u00f6gen) entspricht den Aktiven minus dem Fremdkapital.', c: true },
            { s: 'Das Anlageverm\u00f6gen ist immer h\u00f6her als das Umlaufverm\u00f6gen.', c: false },
            { s: 'Die Aktiven werden stets durch das Fremd- und Eigenkapital aufgewogen.', c: true },
            { s: 'Das Fremdkapital ist so hoch wie das Umlaufverm\u00f6gen.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 5, type: 'text',
          title: 'Was zeigt die Bilanz?',
          q: 'Was zeigt die Bilanz? (1 Satz.)',
          keywords: ['Verm\u00f6gen','Kapital','Aktiven','Passiven','Stichtag','finanzielle Lage'],
          solution: 'Die Bilanz zeigt das Verm\u00f6gen (oder: die Aktiven) und das Kapital (oder: die Passiven) eines Unternehmens an einem bestimmten Stichtag.',
          tips: [], reveal: []
        },
        {
          id: 6, type: 'text',
          title: 'Charakter des Reinverm\u00f6gens',
          q: 'Was macht den Charakter des Reinverm\u00f6gens aus? (2 bis 3 S\u00e4tze.)',
          keywords: ['Differenz','Verm\u00f6gen','Schulden','Risiko','Ausgleich','unternehmerisch'],
          solution: 'Das Reinverm\u00f6gen ergibt sich als Differenz aus dem noch vorhandenen Verm\u00f6gen und den noch vorhandenen Schulden. Es bringt die Bilanz zum Ausgleich und tr\u00e4gt das Risiko der unternehmerischen T\u00e4tigkeit.',
          tips: [], reveal: []
        },
        {
          id: 7, type: 'text',
          title: 'Partizipationskapital in der Bilanz',
          q: 'Die Bilanz eines Handelsunternehmens weist den Posten \u00abPartizipationskapital\u00bb aus. Was k\u00f6nnen Sie daraus in Bezug auf das Unternehmen schliessen? (2 bis 3 S\u00e4tze.)',
          keywords: ['Aktiengesellschaft','AG','Eigenkapitalposition'],
          solution: 'Der Posten \u00abPartizipationskapital\u00bb ist eine Eigenkapitalposition, die bei der Aktiengesellschaft vorkommen kann. Das fragliche Unternehmen muss also eine AG sein.',
          tips: [], reveal: []
        },
        {
          id: 8, type: 'mc',
          title: 'Bilanzgliederung bei Elektrizit\u00e4tsunternehmen',
          q: 'Die Bilanz eines Elektrizit\u00e4tsunternehmens weist Anlageverm\u00f6gen vor Umlaufverm\u00f6gen und Eigenkapital vor lang- und kurzfristigem Fremdkapital aus. Verst\u00f6sst das Unternehmen damit gegen gesetzliche Gliederungsvorschriften?',
          options: ['Ja, das ist ein Verstoss','Nein, bei sogenannten anlageintensiven Unternehmen ist diese Anordnung regelm\u00e4ssig anzutreffen','Ja, aber nur bei AG','Nein, es gibt keine Gliederungsvorschriften'],
          answer: 1,
          explanation: 'Nein. Bei sogenannten anlageintensiven Unternehmen ist diese Anordnung regelm\u00e4ssig anzutreffen. Sie folgt dem Gedanken: \u00abWas uns lang erhalten bleibt, kommt zuerst.\u00bb',
          tips: [], reveal: []
        },
        {
          id: 9, type: 'text',
          title: 'Nettoumlaufverm\u00f6gen (NUV)',
          q: 'Wie wird das Nettoumlaufverm\u00f6gen (NUV) berechnet? (Gleichung.)',
          keywords: ['Umlaufverm\u00f6gen','kurzfristiges','Fremdkapital','minus'],
          solution: 'NUV = Umlaufverm\u00f6gen \u2013 kurzfristiges Fremdkapital',
          tips: [], reveal: []
        },
        {
          id: 10, type: 'text',
          title: 'Bilanz im Gleichgewicht',
          q: 'Warum ist die Bilanz stets im Gleichgewicht? (1 Satz.)',
          keywords: ['Eigenkapital','Differenz','Aktiven','Fremdkapital','Ausgleich'],
          solution: 'Das Eigenkapital ist die Differenzgr\u00f6sse von Aktiven und Fremdkapital und als solche bringt es die Bilanz immer ins Gleichgewicht.',
          tips: [], reveal: []
        },
        {
          id: 11, type: 'calc',
          title: 'Bilanz erstellen \u2013 Plastikwaren Ellinger',
          q: 'Das Einzelunternehmen \u00abPlastikwaren Ellinger\u00bb weist folgende Posten in der Schlussbilanz I aus. Berechnen Sie die Bilanzsumme.\n\nAktiven: Kasse 22, Post 63, Forderungen L+L 120, \u00dcbr. Forderungen 15, Warenvorrat 140, Materialvorrat 80, Mobilien 155, Immobilien 275\nPassiven: Bankschuld 35, Kurzfr. Darlehen 10, Verbindlichkeiten L+L 170, Langfr. Darlehen 85, Hypotheken 200, Eigenkapital 340, Gewinn 30',
          fields: [
            { label: 'Total Aktiven', answer: 870, unit: 'CHF' },
            { label: 'Total Passiven', answer: 870, unit: 'CHF' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 3: Erfolgsrechnung (Fragen 12-18)
    // ============================================================
    {
      id: 'ch3', num: 'Teil A \u2022 Kapitel 3', title: 'Erfolgsrechnung: Ausweis von Ertrag, Aufwand und Erfolg',
      exercises: [
        {
          id: 12, type: 'tf',
          title: 'Zusammenh\u00e4nge in der Erfolgsrechnung',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Ist der Erfolg negativ, dann gilt: Aufwand = Ertrag + Verlust.', c: true },
            { s: 'Ist der Erfolg positiv, dann gilt: Ertrag = Aufwand \u2013 Gewinn.', c: false },
            { s: 'Ist der Erfolg positiv, dann gilt: Ertrag \u2013 Aufwand = Gewinn.', c: true },
            { s: 'Ist der Erfolg negativ, dann gilt: Gewinn = Aufwand \u2013 Ertrag.', c: false },
            { s: 'Erfolg kann sowohl Gewinn als auch Verlust bezeichnen.', c: true },
            { s: 'Verlust stellt einen \u00dcberschuss von Ertrag \u00fcber Aufwand dar.', c: false },
            { s: 'Gewinn stellt einen \u00dcberschuss von Ertrag \u00fcber Aufwand dar.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 13, type: 'text',
          title: 'Was bedeutet Aufwand?',
          q: 'Was bedeutet Aufwand? Und wie wirkt er sich auf das Reinverm\u00f6gen aus? (2 bis 3 S\u00e4tze.)',
          keywords: ['Wertverzehr','Ressourcenverbrauch','mindert','Reinverm\u00f6gen','ung\u00fcnstig'],
          solution: 'Aufwand bedeutet Wertverzehr (Ressourcenverbrauch). Er mindert das Reinverm\u00f6gen. Aufwand wirkt sich ung\u00fcnstig auf die Verm\u00f6genslage (auf das Reinverm\u00f6gen) aus.',
          tips: [], reveal: []
        },
        {
          id: 14, type: 'text',
          title: 'Was zeigt die Erfolgsrechnung?',
          q: 'Was zeigt die Erfolgsrechnung? (2 bis 3 S\u00e4tze.)',
          keywords: ['wirtschaftliche Lage','erfolgswirksam','Aufwand','Ertrag','Rechnungsperiode','Gewinn','Verlust'],
          solution: 'Die Erfolgsrechnung spiegelt die wirtschaftliche Lage eines Unternehmens. Sie zeigt die erfolgswirksamen Vorg\u00e4nge (Aufwand, Ertrag), die w\u00e4hrend einer Rechnungsperiode angefallen sind, und weist den Erfolg (Gewinn bzw. Verlust) aus.',
          tips: [], reveal: []
        },
        {
          id: 15, type: 'mc',
          title: 'Was passt nicht zum Rest?',
          q: 'Was passt nicht zum Rest? (1) Gewinn, (2) Verlust, (3) Ertrag, (4) Erfolg.',
          options: ['Gewinn','Verlust','Ertrag','Erfolg'],
          answer: 2,
          explanation: 'Ertrag (3). Ertrag bezeichnet einen erfolgswirksamen Vorgang. Die anderen drei Punkte sind Bezeichnungen f\u00fcr das Ergebnis der Erfolgsrechnung (Erfolg als Oberbegriff bzw. Gewinn oder Verlust im konkreten Fall).',
          tips: [], reveal: []
        },
        {
          id: 16, type: 'text',
          title: 'Bruttogewinn im Handelsunternehmen',
          q: 'Wie ist im Handelsunternehmen der Bruttogewinn definiert? (Gleichung.)',
          keywords: ['Warenertrag','Warenaufwand','minus'],
          solution: 'Bruttogewinn = Warenertrag \u2013 Warenaufwand',
          tips: [], reveal: []
        },
        {
          id: 17, type: 'text',
          title: 'Bedeutung der Abk\u00fcrzung EBIT',
          q: 'Was bedeutet die englische Abk\u00fcrzung EBIT? Und wie wird der Begriff auf Deutsch umschrieben? (2 bis 3 S\u00e4tze.)',
          keywords: ['Earnings','Interest','Taxes','Erfolg','Zinsen','Steuern','betrieblich'],
          solution: 'EBIT = Earnings before Interest and Taxes. Auf Deutsch: Erfolg vor Zinsen und Steuern. EBIT misst den betrieblichen Erfolg, unabh\u00e4ngig von der Art des Anlageverm\u00f6gens und der Finanzierungsstruktur bzw. vom Steuersystem.',
          tips: [], reveal: []
        },
        {
          id: 18, type: 'calc',
          title: 'Mehrstufige Erfolgsrechnung erstellen',
          q: 'Erstellen Sie eine mehrstufige Erfolgsrechnung mit den folgenden Erfolgsposten eines Warenhandelsunternehmens (Jahr 20_6):\nWertpapierertr\u00e4ge 35, Warenaufwand 100, Verkaufserl\u00f6se 240, Personalaufwand 90, \u00dcbriger betrieblicher Aufwand 40, Ausserordentlicher Aufwand 10, Liegenschaftserfolg (Aufwand) 5, Finanzaufwand 15.\n\nBerechnen Sie den Bruttogewinn, Betriebserfolg und Unternehmensgewinn.',
          fields: [
            { label: 'Bruttogewinn', answer: 140, unit: 'CHF' },
            { label: 'Betriebserfolg (Verlust)', answer: -5, unit: 'CHF' },
            { label: 'Unternehmensgewinn', answer: 15, unit: 'CHF' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 4: Bilanz und ER im Zusammenhang (Fragen 19-32)
    // ============================================================
    {
      id: 'ch4', num: 'Teil A \u2022 Kapitel 4', title: 'Bilanz und Erfolgsrechnung im Zusammenhang',
      exercises: [
        {
          id: 19, type: 'match',
          title: 'Erfolgswirksame und -unwirksame Vorg\u00e4nge',
          q: 'Ordnen Sie den folgenden Punkten 1 bis 4 die Begriffe A bis H zu.',
          pairs: [
            { l: '1: Erfolgsunwirksam zwischen zwei Bilanzkonten', r: 'B: Aktivtausch' },
            { l: '2: Erfolgswirksam (ung\u00fcnstig f\u00fcr das Reinverm\u00f6gen)', r: 'A: Aufwandszunahme' },
            { l: '3: Erfolgswirksam (g\u00fcnstig f\u00fcr das Reinverm\u00f6gen)', r: 'D: Ertragszunahme' },
            { l: '4: Erfolgsunwirksam zwischen zwei Erfolgskonten', r: 'F: Aufwandsminderung' }
          ],
          options: ['A: Aufwandszunahme','B: Aktivtausch','D: Ertragszunahme','F: Aufwandsminderung','G: Kapitalbeschaffung','H: Ertragsminderung'],
          tips: [], reveal: []
        },
        {
          id: 20, type: 'tf',
          title: 'Liquidit\u00e4ts- und Erfolgswirksamkeit',
          q: 'Kreuzen Sie an, wie sich die folgenden Gesch\u00e4ftsf\u00e4lle auf die Geldmittel auswirken und ob sie erfolgswirksam sind.',
          statements: [
            { s: 'Kasse / Handelserlse 15 000: Geldmittel nehmen zu, erfolgswirksam ja.', c: true },
            { s: 'FLL / Handelserlse 13 000: Geldmittel bleiben gleich, erfolgswirksam ja.', c: true },
            { s: 'Post / FLL 12 500: Geldmittel nehmen zu, erfolgswirksam nein.', c: true },
            { s: 'Raumaufwand / Bankguthaben 3 700: Geldmittel nehmen ab, erfolgswirksam ja.', c: true },
            { s: 'Abschreibungen / Mobiliar 22 500: Geldmittel bleiben gleich, erfolgswirksam ja.', c: true },
            { s: 'Bankguthaben / Finanzertrag 100: Geldmittel nehmen zu, erfolgswirksam ja.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 21, type: 'match',
          title: 'Geldflussrechnung \u2013 Begriffe zuordnen',
          q: 'Ordnen Sie den Punkten 1 bis 10 je das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Liquidit\u00e4t', r: 'F: \u2026 ist mit der Luft zum Atmen zu vergleichen.' },
            { l: '2: Zeitraumrechnungen', r: 'D: Erfolgsrechnung, Geldflussrechnung.' },
            { l: '3: Cashflow', r: 'J: Geldfluss der Gesch\u00e4ftst\u00e4tigkeit.' },
            { l: '4: Bilanz', r: 'H: Zeitpunktrechnung.' },
            { l: '5: Negativer Cashflow', r: 'A: Cashdrain.' },
            { l: '7: Praxis-Cashflow', r: 'G: Gewinn zuz\u00fcglich Abschreibungen.' },
            { l: '8: Nettoumlaufverm\u00f6gen', r: 'I: Umlaufverm\u00f6gen abz\u00fcglich kurzfristigen Fremdkapitals.' },
            { l: '9: Geldflussrechnung', r: 'E: \u2026 gibt Auskunft \u00fcber die Ursachen der Liquidit\u00e4ts\u00e4nderung.' }
          ],
          options: ['A: Cashdrain.','D: Erfolgsrechnung, Geldflussrechnung.','E: \u2026 gibt Auskunft \u00fcber die Ursachen der Liquidit\u00e4ts\u00e4nderung.','F: \u2026 ist mit der Luft zum Atmen zu vergleichen.','G: Gewinn zuz\u00fcglich Abschreibungen.','H: Zeitpunktrechnung.','I: Umlaufverm\u00f6gen abz\u00fcglich kurzfristigen Fremdkapitals.','J: Geldfluss der Gesch\u00e4ftst\u00e4tigkeit.'],
          tips: [], reveal: []
        },
        {
          id: 22, type: 'text',
          title: 'Phasen des Rechnungszyklus',
          q: 'In welche Phasen kann der Rechnungszyklus gegliedert werden? (1 Satz.)',
          keywords: ['Er\u00f6ffnung','laufende Erfassung','Abschluss'],
          solution: 'Der Rechnungszyklus umfasst drei Phasen: (1) Er\u00f6ffnung, (2) laufende Erfassung der Gesch\u00e4ftsf\u00e4lle, (3) Abschluss.',
          tips: [], reveal: []
        },
        {
          id: 23, type: 'text',
          title: 'Anfangsbest\u00e4nde vortragen',
          q: 'Auf welche Konten werden Anfangsbest\u00e4nde vorgetragen? (1 Satz.)',
          keywords: ['Bestandskonten','Bilanzkonten','Aktiv','Passiv'],
          solution: 'Anfangsbest\u00e4nde werden auf die Bestandskonten (Bilanzkonten) vorgetragen, also auf die Aktiv- und Passivkonten.',
          tips: [], reveal: []
        },
        {
          id: 24, type: 'text',
          title: 'Konten ohne Anfangsbest\u00e4nde',
          q: 'Welche Konten werden am Anfang lediglich eingerichtet, haben aber keine Anfangsbest\u00e4nde? (1 Satz.)',
          keywords: ['Erfolgskonten','Aufwands','Ertrags'],
          solution: 'Die Erfolgskonten (Aufwands- und Ertragskonten) werden am Anfang eingerichtet, haben aber keine Anfangsbest\u00e4nde.',
          tips: [], reveal: []
        },
        {
          id: 25, type: 'text',
          title: 'Saldieren',
          q: 'Saldieren ist ein Fachausdruck. Wof\u00fcr? (1 Satz.)',
          keywords: ['Differenz','Soll','Haben','ermitteln','Abschluss'],
          solution: 'Saldieren bedeutet, die Differenz zwischen Soll und Haben eines Kontos zu ermitteln (= das Konto abschliessen).',
          tips: [], reveal: []
        },
        {
          id: 26, type: 'text',
          title: 'Doppelter Erfolgsausweis',
          q: 'Was bedeutet \u00abdoppelter Erfolgsausweis\u00bb? (2 bis 3 S\u00e4tze.)',
          keywords: ['Bilanz','Erfolgsrechnung','nachweisen','Schlussbilanz','Gewinn','Verlust'],
          solution: 'Der Erfolg (Gewinn oder Verlust) l\u00e4sst sich beim Abschluss doppelt nachweisen: in der Erfolgsrechnung und in der Bilanz. In der Bilanz erscheint der Gewinn beim Eigenkapital (Schlussbilanz I vor Gewinnverwendung).',
          tips: [], reveal: []
        },
        {
          id: 27, type: 'mc',
          title: 'Schlussbilanz I zu Schlussbilanz II',
          q: 'Welcher Schritt f\u00fchrt von der Schlussbilanz I zur Schlussbilanz II?',
          options: ['Die Bewertung der Aktiven','Die Gewinnverwendung','Die Er\u00f6ffnung der neuen Periode','Die Abschreibungen'],
          answer: 1,
          explanation: 'Die Gewinnverwendung (oder Verlustdeckung) f\u00fchrt von der Schlussbilanz I (vor Gewinnverwendung) zur Schlussbilanz II (nach Gewinnverwendung).',
          tips: [], reveal: []
        },
        {
          id: 28, type: 'text',
          title: 'Gewinnthesaurierung',
          q: 'Was bedeutet der Fachausdruck \u00abGewinnthesaurierung\u00bb? (1 Satz.)',
          keywords: ['einbehalten','zur\u00fcckbehalten','nicht aussch\u00fctten','Reserven'],
          solution: 'Gewinnthesaurierung bedeutet, dass der Gewinn im Unternehmen einbehalten (zur\u00fcckbehalten) und den Reserven zugewiesen wird, anstatt ihn auszusch\u00fctten.',
          tips: [], reveal: []
        },
        {
          id: 29, type: 'text',
          title: 'Verlust im Spiel',
          q: 'Gewinnverwendung ist ein Fachausdruck. Wie lautet der Fachausdruck, wenn ein Verlust im Spiel ist? (1 Satz.)',
          keywords: ['Verlustdeckung','Verlustverwendung'],
          solution: 'Der Fachausdruck lautet \u00abVerlustdeckung\u00bb.',
          tips: [], reveal: []
        },
        {
          id: 30, type: 'calc',
          title: 'Rechnungszyklus \u2013 Bike Store',
          q: 'L\u00f6sen Sie folgende Aufgaben zum Rechnungszyklus des Musterunternehmens \u00abBike Store\u00bb.\nA) Um welchen Betrag hat sich das Eigenkapital (Reinverm\u00f6gen) in der Schlussbilanz I gegen\u00fcber der Er\u00f6ffnungsbilanz ver\u00e4ndert?',
          fields: [
            { label: 'Ver\u00e4nderung EK (= Gewinn)', answer: 0, unit: 'CHF (gem\u00e4ss Buchtext)' }
          ],
          tips: [], reveal: []
        },
        {
          id: 31, type: 'text',
          title: 'Praxis-Cashflow',
          q: 'A) Wie berechnet man den Praxis-Cashflow? (Gleichung.)',
          keywords: ['Gewinn','Abschreibungen','zuz\u00fcglich','plus'],
          solution: 'Praxis-Cashflow = Gewinn + Abschreibungen (vereinfachte Formel).',
          tips: [], reveal: []
        },
        {
          id: 32, type: 'match',
          title: 'Geldzufluss oder Geldabfluss?',
          q: 'F\u00fchren die folgenden Vorg\u00e4nge zu einem Geldzufluss oder Geldabfluss? In welchem Bereich (Gesch\u00e4fts-, Investitions- bzw. Finanzierungsbereich)?',
          pairs: [
            { l: 'Barkauf von neuen Laptops f\u00fcr die Aussendienstmitarbeiter', r: 'Geldabfluss, Investitionsbereich' },
            { l: 'Bankberierung des Aktienkapitals bei der Gr\u00fcndung', r: 'Geldzufluss, Finanzierungsbereich' },
            { l: 'Auszahlung von L\u00f6hnen', r: 'Geldabfluss, Gesch\u00e4ftsbereich' },
            { l: 'Tageseinnahmen f\u00fcr Barverkufe im Laden', r: 'Geldzufluss, Gesch\u00e4ftsbereich' },
            { l: 'Teilr\u00fcckzahlung einer Hypothek ab Bankkonto', r: 'Geldabfluss, Finanzierungsbereich' }
          ],
          options: ['Geldabfluss, Investitionsbereich','Geldzufluss, Finanzierungsbereich','Geldabfluss, Gesch\u00e4ftsbereich','Geldzufluss, Gesch\u00e4ftsbereich','Geldabfluss, Finanzierungsbereich'],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 5: Buchfuehrung (Fragen 33-43)
    // ============================================================
    {
      id: 'ch5', num: 'Teil A \u2022 Kapitel 5', title: 'Buchf\u00fchrung',
      exercises: [
        {
          id: 33, type: 'mc',
          title: 'Was passt nicht zum Rest? (Buchf\u00fchrung)',
          q: '(Single Choice, jeweils eine Option pro Zeile ist zu w\u00e4hlen.) Was passt nicht zum Rest?\nZeile 1: (A) Umlaufverm\u00f6gen, (B) Anlageverm\u00f6gen, (C) Aufwand, (D) Eigenkapital \u2013 welches passt nicht?',
          options: ['A: Umlaufverm\u00f6gen','B: Anlageverm\u00f6gen','C: Aufwand','D: Eigenkapital'],
          answer: 2,
          explanation: 'C: Aufwand passt nicht zum Rest. Umlaufverm\u00f6gen, Anlageverm\u00f6gen und Eigenkapital sind Bilanzpositionen. Aufwand geh\u00f6rt zur Erfolgsrechnung.',
          tips: [], reveal: []
        },
        {
          id: 34, type: 'text',
          title: 'Systematik der Konten',
          q: 'Erg\u00e4nzen Sie in der folgenden Darstellung die fehlenden Begriffe zur Systematik der Konten der Buchf\u00fchrung:\nKonten der Buchf\u00fchrung gliedern sich in: ___-konten und ___-konten.\nBestandskonten gliedern sich in: ___-konten und ___-konten.\nErfolgskonten gliedern sich in: Aufwandskonten und ___-konten.',
          keywords: ['Bestands','Erfolgs','Aktiv','Passiv','Ertrags'],
          solution: 'Konten der Buchf\u00fchrung: Bestandskonten und Erfolgskonten.\nBestandskonten: Aktivkonten und Passivkonten.\nErfolgskonten: Aufwandskonten und Ertragskonten.',
          tips: [], reveal: []
        },
        {
          id: 35, type: 'text',
          title: 'Soll- und Habensaldo',
          q: 'Welche Konten schliessen mit einem Sollsaldo ab und welche mit einem Habensaldo? (2 bis 3 S\u00e4tze.)',
          keywords: ['Aktiv','Aufwand','Sollsaldo','Passiv','Ertrags','Habensaldo'],
          solution: 'Aktivkonten und Aufwandskonten schliessen mit einem Sollsaldo ab. Passivkonten und Ertragskonten schliessen mit einem Habensaldo ab.',
          tips: [], reveal: []
        },
        {
          id: 36, type: 'mc',
          title: 'Bestand als Saldo',
          q: 'Bei welchen Konten ist der Saldo ein Bestand?',
          options: ['Bei den Erfolgskonten','Bei den Bestandskonten (Bilanzkonten)','Bei allen Konten','Bei keinem Konto'],
          answer: 1,
          explanation: 'Bei den Bestandskonten (Bilanzkonten) ist der Saldo ein Bestand. Bei Erfolgskonten zeigt der Saldo den \u00dcberschuss der Aufwands- bzw. Ertragszunahmen.',
          tips: [], reveal: []
        },
        {
          id: 37, type: 'text',
          title: 'Grundprinzip der doppelten Buchf\u00fchrung',
          q: 'Wie lautet das Grundprinzip der doppelten Buchf\u00fchrung? (1 Satz.)',
          keywords: ['Soll','Haben','zwei','Konten','Total'],
          solution: 'Das Grundprinzip der doppelten Buchf\u00fchrung ist, dass jeder Gesch\u00e4ftsfall in zwei Konten verbucht wird, einmal im Soll und einmal im Haben. Stets gilt, dass das Total Soll = das Total Haben ist.',
          tips: [], reveal: []
        },
        {
          id: 38, type: 'text',
          title: 'Buchungssatz',
          q: 'Wie heisst die Kurzformel \u00abSoll an Haben\u00bb mit dem Fachausdruck? (Stichwort.)',
          keywords: ['Buchungssatz'],
          solution: 'Buchungssatz.',
          tips: [], reveal: []
        },
        {
          id: 39, type: 'text',
          title: 'Oberstes Gebot der Buchf\u00fchrung',
          q: 'Wie lautet das oberste Gebot f\u00fcr die Ordnungsm\u00e4ssigkeit der Buchf\u00fchrung? (1 Satz.)',
          keywords: ['Beleg','ohne','Buchung','keine'],
          solution: 'Keine Buchung ohne Beleg! Das ist der Grundsatz bei der Erfassung von Gesch\u00e4ftsf\u00e4llen.',
          tips: [], reveal: []
        },
        {
          id: 40, type: 'text',
          title: 'Kontierungsstempel',
          q: 'Wozu dient ein Kontierungsstempel? (1 Satz.)',
          keywords: ['Buchungssatz','Beleg','Konto','Soll','Haben','zuordnen'],
          solution: 'Der Kontierungsstempel dient dazu, den Buchungssatz direkt auf dem Beleg festzuhalten, um die Zuordnung zu den Konten (Soll und Haben) zu dokumentieren.',
          tips: [], reveal: []
        },
        {
          id: 41, type: 'text',
          title: 'Formen des Gesch\u00e4ftsverkehrs',
          q: 'In welchen Formen kann ein Buchhaltungsprogramm den Gesch\u00e4ftsverkehr anzeigen? Nennen Sie zwei Formen. (Stichw\u00f6rter.)',
          keywords: ['Journal','Kontenausz\u00fcge','Bilanz','Erfolgsrechnung','chronologisch','sachlogisch'],
          solution: 'Die zwei Formen sind: (1) Journal (chronologische Darstellung) und (2) Kontenausz\u00fcge (sachlogische Darstellung).',
          tips: [], reveal: []
        },
        {
          id: 42, type: 'text',
          title: 'Kontenplan und Kontenrahmen',
          q: 'In welchem Verh\u00e4ltnis stehen \u00abKontenplan\u00bb und \u00abKontenrahmen\u00bb?',
          keywords: ['Musterordnung','ableiten','branchenuebergreifend','individuell','Unternehmen'],
          solution: 'Der Kontenrahmen ist eine Musterordnung f\u00fcr Konten mit branchen\u00fcbergreifender G\u00fcltigkeit. Der Kontenplan wird vom Unternehmen aus dem Kontenrahmen abgeleitet und enth\u00e4lt die individuell verwendeten Konten.',
          tips: [], reveal: []
        },
        {
          id: 43, type: 'match',
          title: 'Kontonummern zuordnen',
          q: 'Setzen Sie zu den Kontobezeichnungen die jeweilige Kontonummer ein bzw. umgekehrt. Sie k\u00f6nnen im Kontenplan KMU im Anhang nachschlagen.',
          pairs: [
            { l: 'Unterhalt, Reparaturen, Ersatz', r: '6500' },
            { l: 'Vorr\u00e4te Material', r: '1210' },
            { l: 'Hypotheken', r: '2451' },
            { l: '\u00dcbriger Ertrag', r: '6800' },
            { l: 'Fahrzeug- und Transportaufwand', r: '6200' }
          ],
          options: ['6500','1210','2451','6800','6200'],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 6: Rechnungslegung (Fragen 44-51)
    // ============================================================
    {
      id: 'ch6', num: 'Teil A \u2022 Kapitel 6', title: 'Rechnungslegung \u2013 Allgemeines und Vorschriften',
      exercises: [
        {
          id: 44, type: 'tf',
          title: 'Rechnungslegungs- und Bewertungsvorschriften',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Die Vorschriften gem\u00e4ss OR 957\u2013963b gelten unabh\u00e4ngig von der Rechtsform.', c: true },
            { s: 'Die Artikel OR 959\u2013960e umfassen die allgemeinen Vorschriften zur Jahresrechnung.', c: true },
            { s: 'Die Jahresrechnung einer (kleineren) AG besteht aus dem Gesch\u00e4ftsbericht und dem Lagebericht.', c: false },
            { s: 'Der Gesch\u00e4ftsbericht einer grossen AG besteht nach den Vorgaben im OR aus dem Lagebericht und der Jahresrechnung mit Bilanz, Erfolgsrechnung, Anhang und Geldflussrechnung.', c: true },
            { s: 'Laut Bewertungsvorschriften des OR ist eine Unter- bzw. \u00dcberbewertung der Aktiven mit R\u00fccksicht auf das dauernde Gedeihen des Unternehmens erlaubt.', c: true },
            { s: 'Einzelunternehmen und Personengesellschaften d\u00fcrfen auf Wunsch eine einfache Buchhaltung f\u00fchren (\u00abMilchb\u00fcchleinrechnung\u00bb).', c: true },
            { s: 'Eine Unterbewertung von Fremdkapital ist nicht erlaubt.', c: false },
            { s: 'Eine Bildung von stillen Reserven verbessert den extern ausgewiesenen Erfolg gegen\u00fcber dem internen tats\u00e4chlichen Erfolg.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 45, type: 'match',
          title: 'Rechnungslegungsvorschriften zuordnen',
          q: 'Ordnen Sie den folgenden Punkten 1 bis 8 je das Passende aus der Liste A bis H zu.',
          pairs: [
            { l: '1: Jahresrechnung', r: 'C: Gegenstand von OR 958a.' },
            { l: '2: Gesch\u00e4ftsbericht', r: 'D: Wortbericht innerhalb des Gesch\u00e4ftsberichts.' },
            { l: '3: Struktur des Rechnungslegungsrechts', r: 'H: Allgemeine Bestimmungen, Jahresrechnung, Rechnungslegung f\u00fcr gr\u00f6ssere Unternehmen, Abschluss nach anerkanntem Standard, Konzernrechnung.' },
            { l: '5: Lagebericht', r: 'D: Wortbericht innerhalb des Gesch\u00e4ftsberichts.' },
            { l: '6: Pflicht zur Buchf\u00fchrung', r: 'E: Gegenstand von OR 957.' },
            { l: '7: IFRS, Swiss GAAP FER, US GAAP', r: 'G: Beispiel f\u00fcr anerkannte Standards der Rechnungslegung.' }
          ],
          options: ['C: Gegenstand von OR 958a.','D: Wortbericht innerhalb des Gesch\u00e4ftsberichts.','E: Gegenstand von OR 957.','G: Beispiel f\u00fcr anerkannte Standards der Rechnungslegung.','H: Allgemeine Bestimmungen, Jahresrechnung, Rechnungslegung f\u00fcr gr\u00f6ssere Unternehmen, Abschluss nach anerkanntem Standard, Konzernrechnung.'],
          tips: [], reveal: []
        },
        {
          id: 46, type: 'calc',
          title: 'Bewertung einer Immobilie',
          q: 'Ein Unternehmen hat vor 10 Jahren eine Immobilie f\u00fcr CHF 1 200 000.\u2013 gekauft. Heute k\u00f6nnte die Immobilie f\u00fcr CHF 1 800 000.\u2013 verkauft werden. Zu welchem Wert darf die Immobilie h\u00f6chstens bilanziert werden?',
          fields: [{ label: 'H\u00f6chstwert', answer: 1200000, unit: 'CHF' }],
          tips: [], reveal: []
        },
        {
          id: 47, type: 'calc',
          title: 'Bewertung von Aktien',
          q: 'Ein Unternehmen hat vor 10 Monaten b\u00f6rsenkotierte Aktien zu einem Kurs von CHF 1 000.\u2013 gekauft. Am Abschlussstichtag hat die Aktie einen Kurs von CHF 1 185.\u2013. Zu welchem Kurs darf die Aktie h\u00f6chstens bilanziert werden?',
          fields: [{ label: 'H\u00f6chstwert', answer: 1185, unit: 'CHF' }],
          tips: [], reveal: []
        },
        {
          id: 48, type: 'calc',
          title: 'Bewertung von Vorr\u00e4ten',
          q: 'Zu den Vorr\u00e4ten eines Unternehmens liegen folgende Daten vor: Buchwert CHF 220 000.\u2013, Ver\u00e4usserungswert auf dem Markt CHF 260 000.\u2013, noch anfallende Kosten bis zum Verkauf CHF 14 000.\u2013, Anschaffungskosten CHF 220 000.\u2013. Zu welchem Wert d\u00fcrfen die Vorr\u00e4te am Abschlussstichtag h\u00f6chstens bilanziert werden?',
          fields: [{ label: 'H\u00f6chstwert', answer: 220000, unit: 'CHF' }],
          tips: [], reveal: []
        },
        {
          id: 49, type: 'text',
          title: 'Fortf\u00fchrungsprinzip',
          q: 'Was k\u00f6nnte das Fortf\u00fchrungsprinzip mit der Redewendung \u00abDas Ganze ist mehr als die Summe der Teile\u00bb zu tun haben? (2 bis 3 S\u00e4tze.)',
          keywords: ['Fortf\u00fchrung','Liquidation','Einzelver\u00e4usserung','Gesamtwert','h\u00f6her'],
          solution: 'Beim Fortf\u00fchrungsprinzip (Going Concern) geht man davon aus, dass das Unternehmen weiterbesteht. Der Wert eines laufenden Unternehmens ist in der Regel h\u00f6her als die Summe der Einzelver\u00e4usserungswerte bei einer Liquidation.',
          tips: [], reveal: []
        },
        {
          id: 50, type: 'text',
          title: 'Realisationsprinzip',
          q: 'Ein Versandhaus verbucht bei Bestellungseingang die bestellten Waren als Erl\u00f6s aus Warenverkauf. Welches Prinzip wird hier verletzt? (2 bis 3 S\u00e4tze.)',
          keywords: ['Realisationsprinzip','Vorsicht','Ertrag','Leistungserbringung','realisiert'],
          solution: 'Das Realisationsprinzip (Vorsichtsprinzip) wird verletzt. Ein Ertrag darf erst verbucht werden, wenn die Leistung erbracht und der Anspruch auf die Gegenleistung realisiert ist. Bei Bestellungseingang ist die Leistung noch nicht erbracht.',
          tips: [], reveal: []
        },
        {
          id: 51, type: 'text',
          title: 'Niederstwertprinzip',
          q: 'Eine AG (Goldschmiedeprodukte) bilanziert den Goldvorrat zum Tageswert von CHF 37 250.\u2013 pro Kilo bei durchschnittlichen Anschaffungskosten von CHF 37 568.\u2013 pro Kilo. Welches Prinzip wird hier eingehalten? (2 bis 3 S\u00e4tze.)',
          keywords: ['Niederstwertprinzip','Vorsicht','tieferer','Anschaffungswert','Marktwert'],
          solution: 'Das Niederstwertprinzip (Impari\u00e4tsprinzip) wird eingehalten. Bei der Bewertung von Aktiven ist der tiefere von Anschaffungswert und Marktwert massgebend. Da der Tageswert tiefer ist, wird dieser korrekt verwendet.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 7: Wertanpassungen 1 (Fragen 52-60)
    // ============================================================
    {
      id: 'ch7', num: 'Teil A \u2022 Kapitel 7', title: 'Rechnungslegung \u2013 Wertanpassungen 1',
      exercises: [
        {
          id: 52, type: 'match',
          title: 'Mobilien und Abschreibungen',
          q: 'Ordnen Sie den Punkten 1 bis 8 das Passende (Aussage, Umschreibung oder Gleichung) aus der Liste A bis H zu.',
          pairs: [
            { l: '1: Linear', r: 'G: Vorgehen zur Ermittlung von Abschreibungsbetr\u00e4gen, bei dem jedes Jahr ein gleicher Prozentsatz von den Anschaffungskosten abgeschrieben wird.' },
            { l: '2: Indirekt', r: 'D: Vorgehen zur Verbuchung, bei dem der Abschreibungsbetrag in einem Konto Wertberichtigung gegengebucht wird.' },
            { l: '3: Ver\u00e4usserungsgewinn', r: 'F: Der Buchwert ist gr\u00f6sser als der Liquidationserl\u00f6s.' },
            { l: '5: Direkt', r: 'A: Vorgehen zur Verbuchung, bei dem der Abschreibungsbetrag im jeweiligen Konto des Anlageguts gegengebucht wird.' },
            { l: '8: Degressiv', r: 'C: Vorgehen zur Ermittlung von Abschreibungsbetr\u00e4gen, bei dem jedes Jahr ein gleicher Prozentsatz vom verbleibenden Buchwert abgeschrieben wird.' }
          ],
          options: ['A: Vorgehen zur Verbuchung, bei dem der Abschreibungsbetrag im jeweiligen Konto des Anlageguts gegengebucht wird.','C: Vorgehen zur Ermittlung von Abschreibungsbetr\u00e4gen, bei dem jedes Jahr ein gleicher Prozentsatz vom verbleibenden Buchwert abgeschrieben wird.','D: Vorgehen zur Verbuchung, bei dem der Abschreibungsbetrag in einem Konto Wertberichtigung gegengebucht wird.','F: Der Buchwert ist gr\u00f6sser als der Liquidationserl\u00f6s.','G: Vorgehen zur Ermittlung von Abschreibungsbetr\u00e4gen, bei dem jedes Jahr ein gleicher Prozentsatz von den Anschaffungskosten abgeschrieben wird.'],
          tips: [], reveal: []
        },
        {
          id: 53, type: 'text',
          title: 'Abschreibung in der Buchhaltung',
          q: 'Mobile Sachanlageg\u00fcter (z. B. Maschinen) entwerten sich im Lauf der Nutzungsjahre. Wie wird in der Buchhaltung der Wertverzehr ber\u00fccksichtigt? (1 Satz.)',
          keywords: ['Abschreibung','Wertverzehr','Nutzungsdauer','Aufwand'],
          solution: 'Der Wertverzehr wird durch j\u00e4hrliche Abschreibungen (Aufwand) ber\u00fccksichtigt, die den Buchwert des Anlageguts \u00fcber die Nutzungsdauer reduzieren.',
          tips: [], reveal: []
        },
        {
          id: 54, type: 'text',
          title: 'Direkte vs. indirekte Abschreibung',
          q: 'Welches Buchungsverfahren liefert mehr Informationen: die direkte oder die indirekte Abschreibung? (2 bis 3 S\u00e4tze.)',
          keywords: ['indirekt','Anschaffungskosten','Wertberichtigung','kumuliert','direkt','Buchwert'],
          solution: 'Die indirekte Abschreibung liefert mehr Informationen: Aus den Konten lassen sich sowohl die Anschaffungskosten als auch die kumulierten Abschreibungen (Wertberichtigung) und somit der Buchwert ablesen. Bei der direkten Abschreibung sind die Anschaffungskosten nicht mehr erkennbar.',
          tips: [], reveal: []
        },
        {
          id: 55, type: 'text',
          title: 'Abschreibungen vs. andere Aufwendungen',
          q: 'Was charakterisiert Abschreibungen im Vergleich mit den meisten andern Aufwendungen? Verwenden Sie bei der Antwort den Begriff \u00abAusgaben\u00bb. (2 bis 3 S\u00e4tze.)',
          keywords: ['Ausgabe','Anschaffung','fr\u00fcher','nicht liquidit\u00e4tswirksam','zeitlich','versetzt'],
          solution: 'Abschreibungen sind ein Aufwand, dem keine aktuelle Ausgabe gegen\u00fcbersteht. Die Ausgabe (Anschaffung) wurde fr\u00fcher get\u00e4tigt. Abschreibungen sind daher nicht liquidit\u00e4tswirksam.',
          tips: [], reveal: []
        },
        {
          id: 56, type: 'mc',
          title: 'Indirekte Abschreibung: Buchwert ermitteln?',
          q: 'Ist es m\u00f6glich, bei indirekter Abschreibung der Buchwert aus den Konten zu ermitteln?',
          options: ['Nein, das ist nicht m\u00f6glich','Ja, der Buchwert ergibt sich als Differenz aus dem Anlagekonto und dem Wertberichtigungskonto','Ja, aber nur am Jahresende','Nur bei linearer Abschreibung'],
          answer: 1,
          explanation: 'Ja. Bei der indirekten Abschreibung ergibt sich der Buchwert als Differenz zwischen dem Anlagekonto (zeigt Anschaffungskosten) und dem Konto Wertberichtigung (zeigt kumulierte Abschreibungen).',
          tips: [], reveal: []
        },
        {
          id: 57, type: 'mc',
          title: 'Direkte Abschreibung: Anschaffungskosten ermitteln?',
          q: 'Ist es m\u00f6glich, bei direkter Abschreibung die Anschaffungskosten aus den Konten zu ermitteln?',
          options: ['Ja, das ist leicht m\u00f6glich','Nein, bei direkter Abschreibung zeigt das Konto nur den Buchwert, nicht die Anschaffungskosten','Ja, aber nur im ersten Jahr','Nur bei degressiver Abschreibung'],
          answer: 1,
          explanation: 'Nein. Bei der direkten Abschreibung wird der Abschreibungsbetrag direkt vom Anlagekonto abgezogen. Das Konto zeigt nur noch den Buchwert, nicht die urspr\u00fcnglichen Anschaffungskosten.',
          tips: [], reveal: []
        },
        {
          id: 58, type: 'calc',
          title: 'Lineare Abschreibung berechnen',
          q: 'Ermitteln Sie den Abschreibungsbetrag pro Jahr gem\u00e4ss der linearen Abschreibungsmethode.\n\nNr. 1: Anschaffungskosten CHF 14 000, Nutzungsdauer 5 Jahre, Endwert 0.\nNr. 2: Anschaffungskosten CHF 10 800, Nutzungsdauer 8 Jahre, Endwert CHF 2 000.\nNr. 3: Anschaffungskosten CHF 29 000, Nutzungsdauer 3 Jahre, Endwert CHF 5 000.',
          fields: [
            { label: 'Nr. 1: Abschreibung/Jahr', answer: 2800, unit: 'CHF' },
            { label: 'Nr. 2: Abschreibung/Jahr', answer: 1100, unit: 'CHF' },
            { label: 'Nr. 3: Abschreibung/Jahr', answer: 8000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 59, type: 'calc',
          title: 'Lineare vs. degressive Abschreibung',
          q: 'H. Holzer er\u00f6ffnet eine Schreinerei. Er kauft Werkzeuge im Gesamtwert von CHF 20 000.\u2013. Die voraussichtliche Nutzungsdauer ist 4 Jahre und der gesch\u00e4tzte Endwert (Restwert am Ende der Nutzungsdauer) betr\u00e4gt CHF 0.\u2013.\n\nA) Lineare Abschreibung: Wie hoch ist der j\u00e4hrliche Abschreibungsbetrag?\nB) Abschreibung vom Buchwert (40% degressiv): Wie hoch ist die Abschreibung im Jahr 1?',
          fields: [
            { label: 'A) Linear: Abschreibung/Jahr', answer: 5000, unit: 'CHF' },
            { label: 'B) Degressiv Jahr 1 (40%)', answer: 8000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 60, type: 'calc',
          title: 'Buchwert in der Betriebsbuchhaltung',
          q: 'Ein Getr\u00e4nkehersteller f\u00fchrt eine Abf\u00fcllanlage in der Anlagebuchhaltung. Sie wurde im Januar des Jahres 1 angeschafft. In der FIBU wird die Abf\u00fcllanlage mit 40% degressiv vom Buchwert abgeschrieben. In der BEBU: Nutzungsdauer von 6 Jahren (Restwert null), linear ab.\n\nA) Wie hoch waren die Anschaffungskosten, wenn der Buchwert Ende Jahr 3 in der FIBU CHF 207 360.\u2013 betr\u00e4gt?\nB) Berechnen Sie den Buchwert in der BEBU am 31.12. im Jahr 3.',
          fields: [
            { label: 'A) Anschaffungskosten', answer: 960000, unit: 'CHF' },
            { label: 'B) Buchwert BEBU Ende Jahr 3', answer: 480000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 8: Wertanpassungen 2 (Fragen 62-83)
    // ============================================================
    {
      id: 'ch8', num: 'Teil A \u2022 Kapitel 8', title: 'Rechnungslegung \u2013 Wertanpassungen 2',
      exercises: [
        {
          id: 62, type: 'tf',
          title: 'Verluste aus Forderungen, Wertberichtigung, transitorische Posten und R\u00fcckstellungen',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Das Konto Verluste Forderungen ist das Wertberichtigungskonto zu Forderungen.', c: false },
            { s: 'Das Konto \u00abWertberichtigung Forderungen\u00bb wird in der Regel als ruhender Bestand gef\u00fchrt.', c: true },
            { s: 'Am Ende der Gesch\u00e4ftsperiode wird die Ver\u00e4nderung der erforderlichen H\u00f6he der Wertberichtigung Forderungen gebucht.', c: true },
            { s: 'Die Bildung und Aufl\u00f6sung von Aktiven bzw. Passiven Rechnungsabgrenzungen hat keinen Einfluss auf den Erfolg (Gewinn oder Verlust).', c: false },
            { s: 'Bei der Bilanzgliederung geh\u00f6ren die Aktiven Rechnungsabgrenzungen zum Umlaufverm\u00f6gen und die Passiven Rechnungsabgrenzungen geh\u00f6ren zum Fremdkapital.', c: true },
            { s: 'Einzelr\u00fcckstellungen werden f\u00fcr einzelne verfolgbare Ereignisse gebildet, z. B. f\u00fcr einen Prozess aus einer Schadenersatzforderung.', c: true },
            { s: 'Die Bildung einer R\u00fcckstellung ist in der laufenden Periode erfolgsunwirksam.', c: false },
            { s: 'Bei der Bildung von R\u00fcckstellungen wird im Haben des Kontos R\u00fcckstellungen und im Soll eines Erfolgskontos gebucht.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 63, type: 'tf',
          title: 'Stille Reserven',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Unterbewertungen von Aktiven bzw. \u00dcberbewertungen von Fremdkapital f\u00fchren zu stillen Reserven.', c: true },
            { s: 'Auf allen Aktivpositionen k\u00f6nnen stille Reserven gebildet werden.', c: true },
            { s: 'Stille Reserven k\u00f6nnen auf Fremdkapitalpositionen gebildet werden.', c: true },
            { s: 'Stille Reserven werden als \u00abstill\u00bb bezeichnet, weil sie von aussen (in der externen Bilanz) nicht sichtbar sind.', c: true },
            { s: 'Eine interne Bilanz zeigt das um stille Reserven verminderte Reinverm\u00f6gen.', c: false },
            { s: 'Der Unterschied zwischen dem EK laut interner und dem EK laut externer Bilanz entspricht der Ver\u00e4nderung von stillen Reserven.', c: false },
            { s: 'Stille Reserven werden aufgel\u00f6st, indem Aktiven \u00fcberbewertet werden bzw. Fremdkapital unterbewertet wird.', c: true },
            { s: 'Die Ver\u00e4nderung von stillen Reserven stimmt mit der Differenz zwischen Erfolg laut interner ER und dem Erfolg laut externer ER \u00fcberein.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 64, type: 'text',
          title: 'Forderungsausfall',
          q: 'Es gibt immer wieder Kunden, die ihre Rechnungen nicht bezahlen. Wie wird in der Buchhaltung ein endg\u00fcltiger Forderungsausfall ber\u00fccksichtigt? (2 bis 3 S\u00e4tze.)',
          keywords: ['Verluste Forderungen','Debitor','Wertberichtigung','ausbuchen','Aufwand'],
          solution: 'Ein endg\u00fcltiger Forderungsausfall wird \u00fcber das Konto \u00abVerluste Forderungen\u00bb (Aufwand) verbucht. Der Debitor wird ausgebucht. Falls eine Wertberichtigung vorhanden ist, wird diese anteilig aufgel\u00f6st.',
          tips: [], reveal: []
        },
        {
          id: 65, type: 'text',
          title: 'Mutmassliche Verluste aus Forderungen',
          q: 'Da es immer wieder Kunden gibt, die ihre Rechnungen nicht bezahlen, kann das Total der Forderungen aus Lieferungen und Leistungen nicht als 100% sicheres Aktivum behandelt werden. Wie werden mutmassliche Verluste aus Forderungen ber\u00fccksichtigt? (2 bis 3 S\u00e4tze.)',
          keywords: ['Wertberichtigung','Delkredere','Prozentsatz','pauschale'],
          solution: 'Mutmassliche Verluste aus Forderungen werden durch eine Wertberichtigung Forderungen (Delkredere) ber\u00fccksichtigt. Es wird ein pauschaler Prozentsatz auf den Forderungsbestand angewandt, um das voraussichtliche Ausfallrisiko abzubilden.',
          tips: [], reveal: []
        },
        {
          id: 66, type: 'text', title: 'Methoden zur Erfassung des Warenverkehrs',
          q: 'Welches sind die beiden im Lehrtext erw\u00e4hnten Methoden zur Erfassung des Warenverkehrs? (Stichw\u00f6rter.)',
          keywords: ['einfachere','anspruchsvollere','Drei-Konten','Zwei-Konten','Aufwand','Ertrag','Bestand'],
          solution: 'Die beiden Methoden sind: die buchungstechnisch einfachere Methode (Warenaufwand/Warenertrag) und die buchungstechnisch anspruchsvollere Methode (mit laufender Bestandsnachf\u00fchrung).',
          tips: [], reveal: []
        },
        {
          id: 67, type: 'text', title: 'Konto f\u00fcr Wareneink\u00e4ufe',
          q: 'Auf welchem Konto werden Wareneink\u00e4ufe bei der buchungstechnisch einfacheren Methode erfasst? (Stichwort.)',
          keywords: ['Warenaufwand','Wareneinkauf'],
          solution: 'Warenaufwand (oder: Wareneinkauf).',
          tips: [], reveal: []
        },
        {
          id: 68, type: 'text', title: 'Verkauf von Waren',
          q: 'Wie wird der Verkauf von Waren bei der buchungstechnisch anspruchsvolleren Methode erfasst? (1 Satz.)',
          keywords: ['Warenertrag','Warenbestand','Einstandswert','zwei Buchungen'],
          solution: 'Bei der anspruchsvolleren Methode werden zwei Buchungen vorgenommen: (1) Erlsbuchung auf dem Konto Warenertrag und (2) gleichzeitig Ausbuchung des Einstandswerts vom Konto Warenbestand.',
          tips: [], reveal: []
        },
        {
          id: 69, type: 'text', title: 'Bestandsver\u00e4nderung',
          q: 'Was bedeutet die Ver\u00e4nderung des Warenbestands, wenn das Konto Warenbestand als ruhendes Konto gef\u00fchrt wird? (2 bis 3 S\u00e4tze.)',
          keywords: ['Inventur','Differenz','Anfangsbestand','Endbestand','Bestandskorrektur'],
          solution: 'Wenn das Konto Warenbestand als ruhendes Konto gef\u00fchrt wird, muss am Jahresende eine Inventur durchgef\u00fchrt werden. Die Differenz zwischen Anfangsbestand und Endbestand (physisch ermittelt) wird als Bestandskorrektur gebucht.',
          tips: [], reveal: []
        },
        {
          id: 70, type: 'text', title: 'Bestandsdifferenz',
          q: 'Was bedeutet die Differenz des Warenbestands, wenn das Konto Warenbestand mit laufender Bestandsnachf\u00fchrung gef\u00fchrt wird? (1 Satz.)',
          keywords: ['Inventurdifferenz','Schwund','Diebstahl','Fehlbuchung'],
          solution: 'Die Differenz ist eine Inventurdifferenz, die auf Schwund, Diebstahl, Verderb oder Fehlbuchungen zur\u00fcckzuf\u00fchren ist.',
          tips: [], reveal: []
        },
        {
          id: 71, type: 'text', title: 'Saldo Warenaufwand',
          q: 'Was bedeutet der Saldo des Kontos Warenaufwand vor der Erfassung der Bestands\u00e4nderung bei der buchungstechnisch einfacheren Methode? (Stichwort.)',
          keywords: ['Einstandswert','eingekaufte','Ware','Wareneinkauf'],
          solution: 'Einstandswert der eingekauften Ware (= Wareneinkauf).',
          tips: [], reveal: []
        },
        {
          id: 72, type: 'text', title: 'Arten von Vorr\u00e4ten',
          q: 'A) Welche Arten von Vorr\u00e4ten gibt es im Herstellungsprozess eines Produktionsunternehmens? (Stichw\u00f6rter.)\nB) Welches ist die Wertbasis der jeweiligen Vorr\u00e4te?',
          keywords: ['Rohstoffe','Halbfabrikate','Fertigfabrikate','Anschaffungskosten','Herstellkosten'],
          solution: 'A) Rohstoffe/Material, Halbfabrikate, Fertigfabrikate.\nB) Rohstoffe: Anschaffungskosten. Halbfabrikate und Fertigfabrikate: Herstellkosten.',
          tips: [], reveal: []
        },
        {
          id: 73, type: 'text', title: 'ARA und PRA',
          q: 'Wie werden Aktive Rechnungsabgrenzungen (ARA) und Passive Rechnungsabgrenzungen (PRA) in der Praxis auch noch bezeichnet? (Stichw\u00f6rter.)',
          keywords: ['Transitorische Aktiven','Transitorische Passiven','TA','TP'],
          solution: 'ARA = Transitorische Aktiven (TA). PRA = Transitorische Passiven (TP).',
          tips: [], reveal: []
        },
        {
          id: 74, type: 'text', title: 'ARA und PRA Zuordnung',
          q: 'Was von den Punkten (1) bis (4) geh\u00f6rt zu den Aktiven Rechnungsabgrenzungen (ARA) und was zu den Passiven Rechnungsabgrenzungen (PRA)? (1) noch nicht bezahlte Aufwendungen, (2) vorausbezahlte Aufwendungen, (3) im Voraus erhaltene Ertr\u00e4ge, (4) noch nicht erhaltene Ertr\u00e4ge. (Stichw\u00f6rter.)',
          keywords: ['ARA','PRA','vorausbezahlt','noch nicht erhaltene'],
          solution: 'ARA: (2) vorausbezahlte Aufwendungen und (4) noch nicht erhaltene Ertr\u00e4ge.\nPRA: (1) noch nicht bezahlte Aufwendungen und (3) im Voraus erhaltene Ertr\u00e4ge.',
          tips: [], reveal: []
        },
        {
          id: 75, type: 'text', title: 'R\u00fcckstellungen in der Bilanz',
          q: 'Wo werden die R\u00fcckstellungen in der Bilanz eingeordnet? Und warum? (2 bis 3 S\u00e4tze.)',
          keywords: ['Fremdkapital','Verbindlichkeit','Verpflichtung','ungewiss','k\u00fcnftig'],
          solution: 'R\u00fcckstellungen werden im Fremdkapital (langfristig oder kurzfristig) eingeordnet, weil sie ungewisse k\u00fcnftige Verpflichtungen darstellen. Sie sind Verbindlichkeiten, deren H\u00f6he, F\u00e4lligkeit oder Eintretenswahrscheinlichkeit noch unsicher sind.',
          tips: [], reveal: []
        },
        {
          id: 76, type: 'text', title: 'Beispiele f\u00fcr R\u00fcckstellungen',
          q: 'Was sind typische Beispiele f\u00fcr R\u00fcckstellungen? Nennen Sie 3 Beispiele. (Stichw\u00f6rter.)',
          keywords: ['Garantie','Prozess','Schadenersatz','Steuern','Restrukturierung','Altlasten'],
          solution: 'Typische Beispiele: Garantier\u00fcckstellungen, Prozessrisiken (Schadenersatzforderungen), Steuerr\u00fcckstellungen, Restrukturierungsr\u00fcckstellungen, Umweltaltlasten.',
          tips: [], reveal: []
        },
        {
          id: 77, type: 'mc',
          title: 'Stille Reserven durch \u00dcberbewertung?',
          q: 'Stille Reserven entstehen durch \u00dcberbewertung von Aktiven bzw. Unterbewertung von Fremdkapital. Stimmt diese Aussage?',
          options: ['Ja, genau so ist es','Nein, es ist umgekehrt: durch Unterbewertung von Aktiven bzw. \u00dcberbewertung von Fremdkapital','Stille Reserven entstehen nur bei Aktiven','Stille Reserven entstehen nur bei Passiven'],
          answer: 1,
          explanation: 'Nein, es ist umgekehrt. Stille Reserven entstehen durch Unterbewertung von Aktiven und/oder \u00dcberbewertung von Fremdkapital.',
          tips: [], reveal: []
        },
        {
          id: 78, type: 'text', title: 'Bildung stiller Reserven',
          q: 'Wie k\u00f6nnen stille Reserven gebildet werden? (1 Satz.)',
          keywords: ['Unterbewertung','Aktiven','\u00dcberbewertung','Fremdkapital','Aufwand','erh\u00f6hen'],
          solution: 'Stille Reserven k\u00f6nnen gebildet werden, indem Aktiven \u00fcberm\u00e4ssig abgeschrieben (unterbewertet) werden oder Fremdkapital zu hoch angesetzt (\u00fcberbewertet) wird.',
          tips: [], reveal: []
        },
        {
          id: 79, type: 'text', title: 'Stille Reserven aufl\u00f6sen',
          q: 'Wie l\u00e4sst sich mittels stiller Reserven in der externen Rechnung ein Verlust in einen Gewinn umwandeln? (1 Satz.)',
          keywords: ['Aufl\u00f6sung','Aktiven','h\u00f6her','bewerten','Ertrag'],
          solution: 'Durch die Aufl\u00f6sung stiller Reserven (z. B. durch h\u00f6here Bewertung von Aktiven) entsteht ein zus\u00e4tzlicher Ertrag in der externen Rechnung, der einen Verlust in einen Gewinn umwandeln kann.',
          tips: [], reveal: []
        },
        {
          id: 80, type: 'calc',
          title: 'Wertberichtigung Forderungen berechnen',
          q: 'Berechnen Sie die fehlenden Gr\u00f6ssen in der folgenden Tabelle:\nJahr 2: Bestand Forderungen Ende Jahr ?, WB Forderungen in % 5.0%, WB Forderungen in CHF 4 500.00\nJahr 5: Bestand Forderungen Ende Jahr 120 000.00, WB Forderungen in % 4.0%',
          fields: [
            { label: 'Jahr 2: Bestand Forderungen', answer: 90000, unit: 'CHF' },
            { label: 'Jahr 5: WB Forderungen in CHF', answer: 4800, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 81, type: 'calc',
          title: 'Warenbestand \u2013 Drei-Konten-Methode',
          q: 'Das Handelsunternehmen weist in vier aufeinanderfolgenden Jahren die Werte gem\u00e4ss der folgenden Tabelle aus. Berechnen Sie:\nJahr 20_1: Warenbestand Anfang 30, Einstandswert eingekaufte Ware 200, Warenbestand Ende 165.\nJahr 20_2: Warenbestand Anfang 20, Einstandswert eingekaufte Ware 180, Warenbestand Ende 40.\n\nBestandsaenderung = Endbestand - Anfangsbestand\nEinstandswert verkaufte Ware = Einstandswert eingekaufte Ware - Bestandsaenderung',
          fields: [
            { label: '20_1: Bestandsver\u00e4nderung', answer: 135, unit: 'CHF (in Tsd.)' },
            { label: '20_1: Einstandswert verkaufte Ware', answer: 65, unit: 'CHF (in Tsd.)' },
            { label: '20_2: Bestandsver\u00e4nderung', answer: 20, unit: 'CHF (in Tsd.)' },
            { label: '20_2: Einstandswert verkaufte Ware', answer: 160, unit: 'CHF (in Tsd.)' }
          ],
          tips: [], reveal: []
        },
        {
          id: 82, type: 'calc',
          title: 'Stille Reserven bei Maschine',
          q: 'Eine Maschine wurde Anfang des Jahres 01 f\u00fcr CHF 150 000.\u2013 angeschafft. Man sch\u00e4tzt die Nutzungsdauer auf 6 Jahre (Endwert null).\n\nIntern: linear (16 2/3% von den Anschaffungskosten).\nExtern: degressiv (33 1/3% vom Buchwert).\n\nBerechnen Sie die Buchwerte und stillen Reserven per 31.12.01.',
          fields: [
            { label: 'Interne Abschreibung Jahr 1', answer: 25000, unit: 'CHF' },
            { label: 'Interner Restwert Ende 01', answer: 125000, unit: 'CHF' },
            { label: 'Externe Abschreibung Jahr 1', answer: 50000, unit: 'CHF' },
            { label: 'Externer Buchwert Ende 01', answer: 100000, unit: 'CHF' },
            { label: 'Stille Reserven Bestand Ende 01', answer: 25000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 83, type: 'text',
          title: 'Stille Reserven bei Aktiengesellschaft',
          q: 'Es geht um die ersten f\u00fcnf Gesch\u00e4ftsjahre einer Aktiengesellschaft, die im Jahr 01 mit einem Aktienkapital von 200 gegr\u00fcndet wurde. Der Erfolg wird Ende Jahr jeweils den Reserven zugewiesen. Der Begriff Eigenkapital (EK) umfasst das Aktienkapital sowie offene Reserven und (bei den internen Bilanzen auch) stille Reserven. Erkl\u00e4ren Sie den Zusammenhang zwischen internem und externem EK.',
          keywords: ['intern','extern','Differenz','stille Reserven','h\u00f6her','tats\u00e4chlich'],
          solution: 'Das interne Eigenkapital ist stets h\u00f6her (oder gleich hoch) wie das externe Eigenkapital. Die Differenz entspricht den stillen Reserven. Das interne EK zeigt den tats\u00e4chlichen Wert des Unternehmens, w\u00e4hrend das externe EK den nach aussen publizierten (konservativen) Wert zeigt.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 9: Einfuehrung in die Kostenrechnung (Fragen 84-88)
    // ============================================================
    {
      id: 'ch9', num: 'Teil B \u2022 Kapitel 9', title: 'Einf\u00fchrung in die Kostenrechnung',
      exercises: [
        {
          id: 84, type: 'text',
          title: 'Hauptbereiche des Rechnungswesens',
          q: 'Finanz- und Betriebsbuchhaltung sind die beiden Hauptbereiche des Rechnungswesens. Worin dokumentiert die Finanzbuchhaltung vor allem? Und was soll die Betriebsbuchhaltung liefern?',
          keywords: ['Verm\u00f6gens','Finanz','Ertragslage','F\u00fchrungsinformationen','detailliert','Kostentr\u00e4ger'],
          solution: 'Die Finanzbuchhaltung dokumentiert vor allem die Verm\u00f6gens-, Finanz- und Ertragslage eines Unternehmens. Die Betriebsbuchhaltung soll detaillierte F\u00fchrungsinformationen an das Management liefern (z. B. Kosten pro Kostentr\u00e4ger).',
          tips: [], reveal: []
        },
        {
          id: 85, type: 'match',
          title: 'Begriffe der BEBU zuordnen',
          q: 'Ordnen Sie den Punkten 1 bis 10 das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Kostenstellenrechnung', r: 'D: Sind Orte (z. B. Abteilungen), an denen Kosten anfallen.' },
            { l: '2: Einzelkosten', r: 'B: K\u00f6nnen direkt einem Produkt zugerechnet werden.' },
            { l: '3: Herstellkosten', r: 'F: = Materialkosten + Fertigungskosten.' },
            { l: '5: Kostenartenrechnung', r: 'A: Zeigt, welche Kosten in welcher H\u00f6he angefallen sind.' },
            { l: '6: Gemeinkosten', r: 'E: K\u00f6nnen nur indirekt \u00fcber die Kostenstellenrechnung auf die Kostentr\u00e4ger verrechnet werden.' },
            { l: '9: Kostentr\u00e4ger', r: 'J: Sind die erstellten Produkte oder Dienstleistungen.' },
            { l: '10: Kostentr\u00e4gerrechnung', r: 'G: Zeigt, wof\u00fcr die Kosten angefallen sind und welches Ergebnis die verschiedenen Produkte erzielt haben.' }
          ],
          options: ['A: Zeigt, welche Kosten in welcher H\u00f6he angefallen sind.','B: K\u00f6nnen direkt einem Produkt zugerechnet werden.','D: Sind Orte (z. B. Abteilungen), an denen Kosten anfallen.','E: K\u00f6nnen nur indirekt \u00fcber die Kostenstellenrechnung auf die Kostentr\u00e4ger verrechnet werden.','F: = Materialkosten + Fertigungskosten.','G: Zeigt, wof\u00fcr die Kosten angefallen sind und welches Ergebnis die verschiedenen Produkte erzielt haben.','J: Sind die erstellten Produkte oder Dienstleistungen.'],
          tips: [], reveal: []
        },
        {
          id: 86, type: 'tf',
          title: 'Der BAB',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Einzelkosten sind Kosten, die dem einzelnen Produkt zweifelsfrei zugeordnet werden k\u00f6nnen und deshalb direkt von der Kostenartenrechnung in die Kostentr\u00e4gerrechnung \u00fcbertragen werden.', c: true },
            { s: 'Die Gesamtaufwendungen laut Finanzbuchhaltung (FIBU) sind immer niedriger als die Gesamtkosten laut Betriebsbuchhaltung (BEBU).', c: false },
            { s: 'In der Kostenstellenrechnung werden alle Kosten auf Kostenstellen verteilt.', c: false },
            { s: 'Gemeinkosten sind Kostenstellen zuzuordnen, sei es unmittelbar oder \u00fcber m\u00f6glichst verursachungsgerechte Schl\u00fcssel.', c: true },
            { s: 'Ist in der FIBU ein Gewinn ausgewiesen, kann der Gesamterfolg laut BEBU sowohl positiv als auch negativ sein.', c: true },
            { s: 'Um von den Herstellkosten der Produktion zu den Herstellkosten der verkauften Produkte zu gelangen, ist eine Bestandszunahme der Halb- und Fertigfabrikate zu addieren.', c: false },
            { s: 'Die Herstellkosten der verkauften Produkte entsprechen den Selbstkosten der verkauften Produkte.', c: false },
            { s: 'Der Erl\u00f6s abz\u00fcglich der Selbstkosten ergibt das Betriebsergebnis pro Kostentr\u00e4ger.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 87, type: 'check',
          title: 'Kostenart, Kostenstelle oder Kostentr\u00e4ger?',
          q: 'Bestimmen Sie durch Ankreuzen, ob es sich um eine Kostenart, eine Kostenstelle oder einen Kostentr\u00e4ger handelt.',
          statements: [
            { s: 'Vertrieb \u2192 Kostenstelle', c: true },
            { s: 'Geh\u00e4lter \u2192 Kostenart', c: true },
            { s: 'Kalkulatorische Abschreibungen \u2192 Kostenart', c: true },
            { s: 'Montage \u2192 Kostenstelle', c: true },
            { s: 'Werbekosten \u2192 Kostenart', c: true },
            { s: 'H\u00e4cksler \u2192 Kostentr\u00e4ger', c: true },
            { s: 'Rosenm\u00e4her \u2192 Kostentr\u00e4ger', c: true },
            { s: 'Versicherungspr\u00e4mien \u2192 Kostenart', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 88, type: 'match',
          title: 'Verrechnungsfluss im betrieblichen Rechnungswesen',
          q: 'Ordnen Sie den Punkten 1 bis 9 in der Grafik das Passende aus der Liste A bis N zu.',
          pairs: [
            { l: '(1): \u00dcbernahme der Zahlen der FIBU f\u00fcr die BEBU', r: 'F: Finanzbuchhaltung.' },
            { l: '(2): Die Kosten werden ermittelt', r: 'B: Betriebsbuchhaltung.' },
            { l: '(3): Material, Personal, Miete, Abschreibungen, Zinsen', r: 'L: Kostenarten.' },
            { l: '(4): Produkt A, Produkt B, Dienstleistung L, Auftrag X, Projekt Z', r: 'D: Kostentr\u00e4ger.' },
            { l: '(6): Direkte Zuordnung der Einzelkosten', r: 'A: Direkte Verrechnung.' },
            { l: '(9): Materialstelle, Fertigung, Verwaltung und Vertrieb', r: 'I: Kostenstellen.' }
          ],
          options: ['A: Direkte Verrechnung.','B: Betriebsbuchhaltung.','D: Kostentr\u00e4ger.','F: Finanzbuchhaltung.','I: Kostenstellen.','L: Kostenarten.'],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 10: Ausgewaehlte Fragen der Kostenrechnung (Fragen 110-123)
    // ============================================================
    {
      id: 'ch10', num: 'Teil B \u2022 Kapitel 10', title: 'Ausgew\u00e4hlte Fragen der Kostenrechnung',
      exercises: [
        {
          id: 110, type: 'match',
          title: 'Begriffe zu Kostenrechnungssystemen',
          q: 'Ordnen Sie den Punkten 1 bis 8 das Passende aus der Liste A bis H zu.',
          pairs: [
            { l: '1: Variable Kosten', r: 'H: Ver\u00e4ndern sich mit der Besch\u00e4ftigungsh\u00f6he.' },
            { l: '2: Fixe Kosten', r: 'E: Fallen unabh\u00e4ngig von der Besch\u00e4ftigungsh\u00f6he an.' },
            { l: '3: Vollkostensysteme', r: 'A: Werden f\u00fcr langfristige (strategische) Entscheidungen ben\u00f6tigt.' },
            { l: '5: Teilkosten', r: 'B: Werden als Erl\u00f6se abz\u00fcglich variabler Kosten festgelegt.' },
            { l: '6: Teilkostensysteme', r: 'C: Werden f\u00fcr kurzfristige (taktische) Entscheidungen ben\u00f6tigt.' },
            { l: '7: Deckungsbeitr\u00e4ge', r: 'B: Werden als Erl\u00f6se abz\u00fcglich variabler Kosten festgelegt.' }
          ],
          options: ['A: Werden f\u00fcr langfristige (strategische) Entscheidungen ben\u00f6tigt.','B: Werden als Erl\u00f6se abz\u00fcglich variabler Kosten festgelegt.','C: Werden f\u00fcr kurzfristige (taktische) Entscheidungen ben\u00f6tigt.','E: Fallen unabh\u00e4ngig von der Besch\u00e4ftigungsh\u00f6he an.','H: Ver\u00e4ndern sich mit der Besch\u00e4ftigungsh\u00f6he.'],
          tips: [], reveal: []
        },
        {
          id: 111, type: 'tf',
          title: 'Teilkostenrechnungen',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Einzelkosten = variable Kosten.', c: false },
            { s: 'Mischkosten (an Kostenstellen) m\u00fcssen durch eine Kostenspaltung in die variablen und fixen Anteile getrennt werden.', c: true },
            { s: 'Der Deckungsbeitrag kann nicht nur auf eine Periode bezogen sein.', c: false },
            { s: 'Der Verrechnungsablauf (Kostenarten-, Kostenstellen- und Kostentr\u00e4gerrechnung) muss bei der Deckungsbeitragsrechnung umgestellt werden.', c: false },
            { s: 'Bei steigenden Ausbringungsmengen kommt es zu einer Fixkosten-Degression.', c: true },
            { s: 'Bei geraden Kostenverl\u00e4ufen gilt: variable Kosten = proportionale Kosten = Grenzkosten.', c: true },
            { s: 'Deckungsbeitrag = Selbstkosten \u2013 variable Kosten.', c: false },
            { s: 'Gemeinkosten = indirekte Kosten.', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 113, type: 'text',
          title: 'L\u00fcckentext: Voll- und Teilkostenrechnung',
          q: 'Erg\u00e4nzen Sie den folgenden L\u00fcckentext:\nBei der Vollkostenrechnung werden die ___ Kosten den Kostentr\u00e4gern belastet. Das Ergebnis der Vollkostenrechnung ist der ___ pro Kostentr\u00e4ger.\nBei der Teilkostenrechnung werden nur die ___ Kosten den Kostentr\u00e4gern belastet. Das Ergebnis der Teilkostenrechnung ist der ___ pro Kostentr\u00e4ger.',
          keywords: ['gesamten','Nettoerfolg','variablen','Deckungsbeitrag','Selbstkosten','vollen'],
          solution: 'Vollkostenrechnung: die gesamten (vollen) Kosten \u2192 Ergebnis: Nettoerfolg (Selbstkosten) pro Kostentr\u00e4ger.\nTeilkostenrechnung: die variablen Kosten \u2192 Ergebnis: Deckungsbeitrag pro Kostentr\u00e4ger.',
          tips: [], reveal: []
        },
        {
          id: 114, type: 'text',
          title: 'Fixe Kosten',
          q: 'Was bedeuten die folgenden Begriffe? Umschreiben Sie jeden Begriff mit eigenen Worten:\nA) Fixe Kosten. (1 Satz.)',
          keywords: ['unabh\u00e4ngig','Besch\u00e4ftigung','konstant','Kapazit\u00e4t','Menge'],
          solution: 'Fixe Kosten sind Kosten, die unabh\u00e4ngig von der Besch\u00e4ftigungsh\u00f6he (Produktionsmenge) anfallen, z. B. Miete, Versicherungen, Geh\u00e4lter.',
          tips: [], reveal: []
        },
        {
          id: 115, type: 'text',
          title: 'Variable vs. fixe Kosten',
          q: 'Was k\u00f6nnte jeweils der Grund sein,\nA) dass variable Kosten auch als Produktkosten bezeichnet werden? (2 bis 3 S\u00e4tze.)\nB) dass fixe Kosten auch Strukturkosten heissen? (2 bis 3 S\u00e4tze.)',
          keywords: ['Produkt','Menge','Struktur','Kapazit\u00e4t','Bereitschaft','unabh\u00e4ngig'],
          solution: 'A) Variable Kosten werden auch Produktkosten genannt, weil sie direkt mit der Herstellung eines Produkts zusammenh\u00e4ngen und sich proportional zur Menge ver\u00e4ndern.\nB) Fixe Kosten heissen Strukturkosten, weil sie die Kosten der Betriebsbereitschaft (Kapazit\u00e4t, Struktur) darstellen und unabh\u00e4ngig von der Produktionsmenge anfallen.',
          tips: [], reveal: []
        },
        {
          id: 116, type: 'text',
          title: 'Einstufiges Direct Costing',
          q: 'Was kennzeichnet ein einstufiges Direct Costing? (1 Satz.)',
          keywords: ['gesamte','fixe','Kosten','Block','abgezogen','Deckungsbeitrag'],
          solution: 'Beim einstufigen Direct Costing werden die gesamten fixen Kosten des Unternehmens in einem Block vom Total der Deckungsbeitr\u00e4ge abgezogen.',
          tips: [], reveal: []
        },
        {
          id: 117, type: 'text',
          title: 'Problem beim einstufigen Direct Costing',
          q: 'Welches Problem ergibt sich beim einstufigen Direct Costing? (2 bis 3 S\u00e4tze.)',
          keywords: ['Wirtschaftlichkeitskontrolle','Fixkosten','mangelnde','differenziert','Zuordnung'],
          solution: 'Beim einstufigen Direct Costing werden alle Fixkosten in einem Block zusammengefasst. Dadurch fehlt die M\u00f6glichkeit einer differenzierten Wirtschaftlichkeitskontrolle der einzelnen Fixkostenbereiche.',
          tips: [], reveal: []
        },
        {
          id: 118, type: 'text',
          title: 'Mehrstufiges Direct Costing',
          q: 'Was ist der Vorteil des mehrstufigen Direct Costing? (2 bis 3 S\u00e4tze.)',
          keywords: ['differenziert','Stufen','Fixkosten','Produkt','Bereich','Analyse'],
          solution: 'Das mehrstufige Direct Costing differenziert die Fixkosten in mehrere Stufen (Produkt-Fixkosten, Bereichs-Fixkosten, Unternehmens-Fixkosten). Dies erm\u00f6glicht eine differenziertere Analyse und bessere Wirtschaftlichkeitskontrolle.',
          tips: [], reveal: []
        },
        {
          id: 119, type: 'text',
          title: 'Begriff der Deckungsbeitragsrechnung: Bereichs-Fixkosten',
          q: '\u00abDiese Kosten sind nicht variabel und betreffen jeweils einen ganzen Zweig eines Unternehmens, z. B. die Tafelschokolade-Herstellung eines Schokoladenherstellers.\u00bb Was wird hier umschrieben? (Begriff der Deckungsbeitragsrechnung.)',
          keywords: ['Bereichs-Fixkosten','Produkt-Fixkosten','fixe','Bereich'],
          solution: 'Bereichs-Fixkosten (oder Produktgruppen-Fixkosten).',
          tips: [], reveal: []
        },
        {
          id: 120, type: 'text',
          title: 'Produkt-Einzelkosten',
          q: '\u00abDazu geh\u00f6ren bei einem Schokoladenhersteller z. B. die Werbekosten f\u00fcr den Schoko-Riegel Cranberry Boost.\u00bb Was wird hier umschrieben? (Begriff der Deckungsbeitragsrechnung.)',
          keywords: ['Produkt-Einzelkosten','Produkt-Fixkosten','variabel','Einzelkosten'],
          solution: 'Produkt-Fixkosten (fixe Kosten, die einem einzelnen Produkt zugeordnet werden k\u00f6nnen).',
          tips: [], reveal: []
        },
        {
          id: 121, type: 'text',
          title: 'Unternehmens-Fixkosten',
          q: '\u00abDie Gussformen f\u00fcr die 100-g-Tafelschokoladen fallen als feste Kosten an und werden beim Schokoladenhersteller f\u00fcr die ganze Palette dieser Tafelschokoladen verwendet.\u00bb Was wird hier umschrieben?',
          keywords: ['Bereichs-Fixkosten','Produktgruppen'],
          solution: 'Bereichs-Fixkosten (Kosten, die einem ganzen Produktbereich zugeordnet werden).',
          tips: [], reveal: []
        },
        {
          id: 122, type: 'text',
          title: 'Fixkostendegression',
          q: '\u00abWenn die produzierte und verkaufte Menge der Schoko-Riegel Venus um 20% zunimmt, dann nehmen die St\u00fcckkosten zu Vollkosten ab.\u00bb Welches Ph\u00e4nomen wird hier umschrieben? (Stichwort.)',
          keywords: ['Fixkostendegression','Degression','St\u00fcckkosten'],
          solution: 'Fixkostendegression: Bei steigender Ausbringungsmenge verteilen sich die Fixkosten auf mehr St\u00fcck, wodurch die St\u00fcckkosten sinken.',
          tips: [], reveal: []
        },
        {
          id: 123, type: 'text',
          title: 'Nettoerfolg vs. Deckungsbeitrag',
          q: 'In der Vollkostenrechnung wird der Erfolg pro Kostentr\u00e4ger ermittelt. Welches ist die entsprechende Gr\u00f6sse in der Teilkostenrechnung? (Stichwort.)',
          keywords: ['Deckungsbeitrag'],
          solution: 'Deckungsbeitrag.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 11: Kalkulationen (Fragen 126-140)
    // ============================================================
    {
      id: 'ch11', num: 'Teil B \u2022 Kapitel 11', title: 'Kalkulationen: Berechnungen rund um Betriebsleistungen',
      exercises: [
        {
          id: 126, type: 'tf',
          title: 'Zusammenh\u00e4nge bei der Kalkulation',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Einzelkosten werden in der Kalkulation direkt auf die Leistungseinheit verrechnet.', c: true },
            { s: 'Materialkosten sind Einzelkosten.', c: false },
            { s: 'Herstellkosten = Fertigungskosten.', c: false },
            { s: 'In den Herstellkosten eines Produkts sind alle Gemeinkosten enthalten.', c: false },
            { s: 'Die Selbstkosten umfassen die gesamten Kosten von der Herstellung bis zum Verkauf.', c: true },
            { s: 'Einzelkosten werden immer als Zuschlagsbasis f\u00fcr die Gemeinkostenzuschl\u00e4ge benutzt.', c: false }
          ],
          tips: [], reveal: []
        },
        {
          id: 127, type: 'match',
          title: 'Kalkulation \u2013 Begriffe zuordnen',
          q: 'Ordnen Sie den Punkten 1 bis 10 das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Bruttogewinn', r: 'J: = Warenertrag \u2013 Warenaufwand.' },
            { l: '2: Zuschlagskalkulation', r: 'E: Kalkulationsverfahren, bei dem Einzelkosten direkt und Gemeinkosten \u00fcber Kalkulationss\u00e4tze verrechnet werden.' },
            { l: '3: Herstellkosten', r: 'F: = Materialkosten + Fertigungskosten.' },
            { l: '4: Handelsmarge in %', r: 'B: Bruttogewinn in Prozenten des Warenertrags (oder: Nettoerls).' },
            { l: '5: Kalkulationssatz', r: 'G: Kann ein Zuschlagssatz oder ein Kostensatz sein.' },
            { l: '6: Bruttogewinnzuschlag in %', r: 'A: = Bruttogewinn \u00d7 100 / Einstand.' },
            { l: '8: Fertigungskosten', r: 'H: = Fertigungseinzelkosten + Fertigungs-Gemeinkosten.' }
          ],
          options: ['A: = Bruttogewinn \u00d7 100 / Einstand.','B: Bruttogewinn in Prozenten des Warenertrags (oder: Nettoerls).','E: Kalkulationsverfahren, bei dem Einzelkosten direkt und Gemeinkosten \u00fcber Kalkulationss\u00e4tze verrechnet werden.','F: = Materialkosten + Fertigungskosten.','G: Kann ein Zuschlagssatz oder ein Kostensatz sein.','H: = Fertigungseinzelkosten + Fertigungs-Gemeinkosten.','J: = Warenertrag \u2013 Warenaufwand.'],
          tips: [], reveal: []
        },
        {
          id: 128, type: 'mc',
          title: 'Kalkulation eines Liefervertrags',
          q: 'Vor der Anpassung des Liefervertrags von 400 auf 640 Maschinen war bei einer Liefermenge von 400 Maschinen der Preis pro Maschine ...',
          options: ['gleich hoch, n\u00e4mlich CHF 7 937.50','niedriger, n\u00e4mlich CHF 5 500.\u2013','niedriger, n\u00e4mlich CHF 7 900.\u2013','h\u00f6her, n\u00e4mlich CHF 8 500.\u2013','h\u00f6her, n\u00e4mlich CHF 12 700.\u2013'],
          answer: 3,
          explanation: 'H\u00f6her, n\u00e4mlich CHF 8 500.\u2013. Bei gr\u00f6sserer Liefermenge k\u00f6nnen die Fixkosten auf mehr Einheiten verteilt werden, was den St\u00fcckpreis senkt.',
          tips: [], reveal: []
        },
        {
          id: 129, type: 'text', title: 'Gemeinkosten',
          q: '\u00ab\u00dcber den Aufwand der Ware selbst (Warenaufwand) hinausgehender Aufwand, der direkt mit dem Handelsbetrieb zu tun hat, z. B. Personalaufwand, Raumaufwand, Abschreibungen.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Gemeinkosten','Gemeinkostenzuschlag','Betriebsaufwand'],
          solution: 'Gemeinkosten (oder: Gemeinkostenzuschlag).',
          tips: [], reveal: []
        },
        {
          id: 130, type: 'text', title: 'Einstand',
          q: '\u00abWert der Ware nach Beschaffung, im Wesentlichen die Zahlung f\u00fcr die Ware an den Lieferanten zuz\u00fcglich etwaiger Bezugskosten.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Einstand','Einstandspreis','Bezugspreis'],
          solution: 'Einstand (Einstandspreis).',
          tips: [], reveal: []
        },
        {
          id: 131, type: 'text', title: 'Nettobarerls',
          q: '\u00abWert des Warenverkaufs ohne die Minderungen (Habenseite des Kontos Warenertrag).\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Nettobarerls','Nettoerl\u00f6s','Nettoverkauf'],
          solution: 'Nettobarerls (oder: Nettoerl\u00f6s).',
          tips: [], reveal: []
        },
        {
          id: 132, type: 'text', title: 'Betriebsgewinn',
          q: '\u00abBruttogewinn \u2013 Gemeinaufwand + sonstige Ertr\u00e4ge.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Betriebsgewinn','Betriebsergebnis','EBIT'],
          solution: 'Betriebsgewinn (oder: Betriebsergebnis).',
          tips: [], reveal: []
        },
        {
          id: 133, type: 'text', title: 'Nettobareinstand',
          q: '\u00abEinstand + Bruttogewinn.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Selbstkosten','Nettobarerls','Bruttoverkaufspreis'],
          solution: 'Nettobarerls (oder: Bruttoverkaufspreis inkl. Bruttogewinn).',
          tips: [], reveal: []
        },
        {
          id: 134, type: 'text', title: 'Nettoerl\u00f6s \u2013 Handelsmarge',
          q: '\u00abNettoerl\u00f6s \u2013 Handelsmarge.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Einstand','Warenaufwand','Wareneinsatz'],
          solution: 'Einstand (Warenaufwand, Wareneinsatz).',
          tips: [], reveal: []
        },
        {
          id: 135, type: 'text', title: 'Nettoerl\u00f6s \u2013 Reingewinnzuschlag',
          q: '\u00abNettoerl\u00f6s \u2013 kalkulatorischer Gewinnzuschlag.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Selbstkosten'],
          solution: 'Selbstkosten.',
          tips: [], reveal: []
        },
        {
          id: 136, type: 'text', title: 'Materialkosten + Fertigungskosten',
          q: '\u00abMaterialkosten + Fertigungskosten.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Herstellkosten'],
          solution: 'Herstellkosten.',
          tips: [], reveal: []
        },
        {
          id: 137, type: 'text', title: 'Reingewinnzuschlag',
          q: '\u00abNettoerl\u00f6s \u2013 kalkulatorischer Gewinnzuschlag.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Selbstkosten'],
          solution: 'Selbstkosten.',
          tips: [], reveal: []
        },
        {
          id: 138, type: 'text', title: 'Verwaltungs- und Vertriebskosten',
          q: '\u00abHerstellkosten + Verwaltungs- und Vertriebs-Gemeinkosten.\u00bb Was wird umschrieben? (Stichwort.)',
          keywords: ['Selbstkosten'],
          solution: 'Selbstkosten.',
          tips: [], reveal: []
        },
        {
          id: 139, type: 'text', title: 'Einkaufs- und Verkaufskalkulation',
          q: 'Eine vollst\u00e4ndige Kalkulation im Warenhandel umfasst die Einkaufskalkulation und die Verkaufskalkulation. In welche Richtung ist bei einer aufbauenden Kalkulation zu rechnen?',
          keywords: ['aufbauend','unten','Einstand','Nettoerls','aufbauend','oben'],
          solution: 'Bei einer aufbauenden Kalkulation rechnet man vom Einstand nach oben zum Nettobarerls (Verkaufspreis).',
          tips: [], reveal: []
        },
        {
          id: 140, type: 'calc',
          title: 'Handelskalkulation: Bruttokreditankauf zu Nettobarankauf',
          q: 'Erg\u00e4nzen Sie die fehlenden Werte:\nNr. 1: Bruttokreditankauf CHF 1 250.00, Rabatt 20%, Skonto 2%.\nNr. 2: Bruttokreditankauf CHF 1 500.00, Rabatt 40%, Skonto 1.5%.',
          fields: [
            { label: 'Nr. 1: Nettokreditankauf (nach Rabatt)', answer: 1000, unit: 'CHF' },
            { label: 'Nr. 1: Nettobarankauf (nach Skonto)', answer: 980, unit: 'CHF' },
            { label: 'Nr. 2: Nettokreditankauf (nach Rabatt)', answer: 900, unit: 'CHF' },
            { label: 'Nr. 2: Nettobarankauf (nach Skonto)', answer: 886.5, unit: 'CHF' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 12: Break-even-Analyse (Fragen 145-159)
    // ============================================================
    {
      id: 'ch12', num: 'Teil B \u2022 Kapitel 12', title: 'Entscheidungen auf Teilkostenbasis und Break-even-Analyse',
      exercises: [
        {
          id: 145, type: 'match',
          title: 'Teilkostenrechnung und Break-even-Analyse',
          q: 'Ordnen Sie den Punkten 1 bis 10 das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Deckungsbeitrag', r: 'D: = Erl\u00f6s \u2013 variable Kosten.' },
            { l: '2: St\u00fcckkosten', r: 'J: Volle Selbstkosten pro Leistungseinheit.' },
            { l: '3: Break-even-Punkt', r: 'G: Auch: Nutzschwelle, Gewinnschwelle, toter Punkt.' },
            { l: '4: Deckungsbeitrag pro St\u00fcck', r: 'A: = Verkaufspreis \u2013 variable St\u00fcckkosten.' },
            { l: '5: Variable bzw. fixe Kosten', r: 'F: Einteilung von Kosten in Bezug auf ihre Zurechenbarkeit auf Kostentr\u00e4ger.' },
            { l: '10: Nutzschwelle (mengenmssig)', r: 'H: = Fixkosten / St\u00fcck-Deckungsbeitrag.' }
          ],
          options: ['A: = Verkaufspreis \u2013 variable St\u00fcckkosten.','D: = Erl\u00f6s \u2013 variable Kosten.','F: Einteilung von Kosten in Bezug auf ihre Zurechenbarkeit auf Kostentr\u00e4ger.','G: Auch: Nutzschwelle, Gewinnschwelle, toter Punkt.','H: = Fixkosten / St\u00fcck-Deckungsbeitrag.','J: Volle Selbstkosten pro Leistungseinheit.'],
          tips: [], reveal: []
        },
        {
          id: 146, type: 'text',
          title: 'Break-even-Diagramm',
          q: 'Nennen Sie die Bezeichnungen der Achsen und der wichtigsten Linien in einem Break-even-Diagramm.',
          keywords: ['Absatz','Werte','Totalkosten','Nettoerls','Fixkosten','Variable','Gewinn','Verlust','Nutzschwelle'],
          solution: 'X-Achse: Absatz (Verkaufsmenge). Y-Achse: Werte (Erl\u00f6s, Kosten, DB). Linien: Nettoerls, Totalkosten (Selbstkosten), Fixkosten, Variable Kosten. Schnittpunkt Erls/Totalkosten = Break-even-Punkt (Nutzschwelle).',
          tips: [], reveal: []
        },
        {
          id: 147, type: 'check',
          title: 'Break-even-Berechnung',
          q: 'Der Einstandspreis eines Artikels betr\u00e4gt CHF 4.\u2013, der Verkaufspreis CHF 6.50. Die Gemeinkosten sind alle fix und betragen CHF 52 000.\u2013. Welche Optionen treffen zu?',
          statements: [
            { s: 'Selbstkosten = CHF 4.\u2013', c: false },
            { s: 'Deckungsbeitrag pro St\u00fcck = CHF 4.\u2013', c: false },
            { s: 'Mengenmssige Nutzschwelle = 8 000 St\u00fcck', c: false },
            { s: 'Wertmssige Nutzschwelle = CHF 52 000.\u2013', c: false },
            { s: 'Wertmssige Nutzschwelle = CHF 32 000.\u2013', c: false },
            { s: 'Deckungsbeitrag pro St\u00fcck = CHF 2.50', c: true },
            { s: 'Mengenmssige Nutzschwelle = 20 800 St\u00fcck', c: true },
            { s: 'Wertmssige Nutzschwelle = CHF 135 200.\u2013', c: true },
            { s: 'Deckungsbeitrag an der Nutzschwelle = CHF 52 000.\u2013', c: true }
          ],
          tips: [], reveal: []
        },
        {
          id: 148, type: 'text', title: 'Einflussfaktoren bei preispolitischen Entscheidungen',
          q: 'Welches sind Einflussfaktoren bei preispolitischen Entscheidungen? (3 Beispiele.)',
          keywords: ['Kosten','Nachfrage','Konkurrenz','Markt','Kunden','Wettbewerb','Preiselastizit\u00e4t'],
          solution: 'Einflussfaktoren: (1) Kosten (Selbstkosten als Preisuntergrenze), (2) Nachfrage/Markt (Zahlungsbereitschaft der Kunden), (3) Konkurrenz/Wettbewerb (Preise der Mitbewerber).',
          tips: [], reveal: []
        },
        {
          id: 149, type: 'text', title: 'Preisspielraum von oben',
          q: 'Wodurch wird der Preisspielraum eines Unternehmens von oben her beschr\u00e4nkt? (1 Satz.)',
          keywords: ['Nachfrage','Kunden','Zahlungsbereitschaft','Markt','Konkurrenz'],
          solution: 'Der Preisspielraum wird von oben durch die Nachfrage bzw. die Zahlungsbereitschaft der Kunden und die Preise der Konkurrenz beschr\u00e4nkt.',
          tips: [], reveal: []
        },
        {
          id: 150, type: 'text', title: 'Preisspielraum von unten',
          q: 'Durch welchen Faktor wird der Preisspielraum des Unternehmens gegen unten beschr\u00e4nkt? (1 Satz.)',
          keywords: ['Kosten','Selbstkosten','Preisuntergrenze','variable'],
          solution: 'Von unten wird der Preisspielraum durch die Kosten (kurzfristig: variable Kosten als absolute Preisuntergrenze; langfristig: Selbstkosten) beschr\u00e4nkt.',
          tips: [], reveal: []
        },
        {
          id: 151, type: 'text', title: 'Normales Nachfrageverhalten',
          q: 'Wie ist das normale Nachfrageverhalten? (1 Satz.)',
          keywords: ['sinkt','steigt','Preis','Menge','mehr','weniger'],
          solution: 'Bei steigendem Preis sinkt die nachgefragte Menge, bei sinkendem Preis steigt sie (normales Nachfrageverhalten).',
          tips: [], reveal: []
        },
        {
          id: 152, type: 'mc',
          title: 'Erl\u00f6sverhalten bei festgelegtem Preis',
          q: 'Mit welchem Erl\u00f6sverhalten ist bei einem festgelegten Preis zu rechnen?',
          options: ['Progressiv steigend','Konstant','Proportional (linear steigend)','Degressiv'],
          answer: 2,
          explanation: 'Bei einem festgelegten Preis verh\u00e4lt sich der Erl\u00f6s proportional (linear): Erl\u00f6s = Preis \u00d7 Menge.',
          tips: [], reveal: []
        },
        {
          id: 153, type: 'text', title: 'Erl\u00f6sverhalten bei nicht festgelegten Preisen',
          q: 'Mit welchem Erl\u00f6sverhalten ist bei noch nicht festgelegten Preisen zu rechnen? (2 bis 3 S\u00e4tze.)',
          keywords: ['degressiv','Preissenkung','Mengenrabatt','niedrigerer','Preis'],
          solution: 'Bei noch nicht festgelegten Preisen ist mit einem degressiven Erl\u00f6sverhalten zu rechnen, da bei steigender Absatzmenge typischerweise Preissenkungen (z. B. Mengenrabatte) notwendig sind.',
          tips: [], reveal: []
        },
        {
          id: 154, type: 'text', title: 'Langfristige Preisuntergrenze',
          q: 'Woran orientiert sich die langfristige Preisuntergrenze? (1 Satz.)',
          keywords: ['Selbstkosten','volle','Kosten','langfristig','decken'],
          solution: 'Die langfristige Preisuntergrenze orientiert sich an den vollen Selbstkosten, die langfristig durch den Preis gedeckt sein m\u00fcssen.',
          tips: [], reveal: []
        },
        {
          id: 155, type: 'text', title: 'Kurzfristige Preisuntergrenze',
          q: 'An welchem Wert (oder welchen Werten) orientiert sich die kurzfristige Preisuntergrenze? (2 bis 3 S\u00e4tze.)',
          keywords: ['variable','Kosten','Deckungsbeitrag','positiv','kurzfristig'],
          solution: 'Die kurzfristige Preisuntergrenze orientiert sich an den variablen Kosten. Solange der Preis die variablen Kosten \u00fcbersteigt (positiver Deckungsbeitrag), lohnt es sich kurzfristig, das Produkt weiter anzubieten.',
          tips: [], reveal: []
        },
        {
          id: 156, type: 'text', title: 'Sortimentsentscheidung',
          q: 'Nach welchem Kriterium sollten die Produkte in einem Sortiment gef\u00f6rdert werden, wenn wirtschaftliche \u00dcberlegungen im Vordergrund stehen und freie Kapazit\u00e4ten vorhanden sind?',
          keywords: ['Deckungsbeitrag','h\u00f6chsten','St\u00fcck','f\u00f6rdern','Produkt'],
          solution: 'Produkte mit dem h\u00f6chsten Deckungsbeitrag (pro St\u00fcck oder pro Engpasseinheit) sollten gef\u00f6rdert werden.',
          tips: [], reveal: []
        },
        {
          id: 157, type: 'text', title: 'Ausgelastete Kapazit\u00e4ten',
          q: 'Welches Kriterium ist heranzuziehen, wenn die Kapazit\u00e4ten ausgelastet sind? (1 Satz.)',
          keywords: ['Deckungsbeitrag','Engpasseinheit','Stunde','Maschinenstunde'],
          solution: 'Bei ausgelasteten Kapazit\u00e4ten ist der Deckungsbeitrag pro Engpasseinheit (z. B. pro Maschinenstunde) heranzuziehen.',
          tips: [], reveal: []
        },
        {
          id: 158, type: 'text',
          title: 'VoltAmpere GmbH \u2013 Zusatzauftrag',
          q: 'Die VoltAmpere GmbH stellt einen beliebten Werkzeugkoffer f\u00fcr Elektriker her. Selbstkosten auf Vollkostenbasis: Einzelmaterialkosten CHF 810 000.\u2013 (variabel), Material-GK CHF 60 000.\u2013 (Variator 9), Fertigungs-GK CHF 540 000.\u2013 (Variator 0), Verwaltungs- und Vertriebs-GK CHF 390 000.\u2013 (fix).\n\nProduktionsmenge 3 000 Koffer (80% Kapazit\u00e4t). Durchschnittspreis CHF 640.\u2013. Ein Abnehmer m\u00f6chte 650 Koffer zu EUR 540.\u2013 (Kurs 1.10) kaufen.\n\nC) Wie w\u00fcrde die Entscheidung aus Vollkostensicht lauten?',
          keywords: ['ablehnen','Verlust','Selbstkosten','h\u00f6her','Preis','unter'],
          solution: 'C) Aus Vollkostensicht: Die Selbstkosten pro Koffer betragen CHF 600.\u2013. Der angebotene Preis (EUR 540 \u00d7 1.10 = CHF 594.\u2013) liegt unter den Selbstkosten. \u2192 Aus Vollkostensicht w\u00fcrde man den Auftrag ablehnen.',
          tips: [], reveal: []
        },
        {
          id: 159, type: 'text',
          title: 'Mindestpreis bei Teilkostensicht',
          q: 'Bei der Entscheidung aus Teilkostensicht: Was ist der relevante Vergleich?',
          keywords: ['variable','Kosten','Deckungsbeitrag','positiv','annehmen','St\u00fcck'],
          solution: 'Aus Teilkostensicht vergleicht man den Preis mit den variablen St\u00fcckkosten. Solange der Preis die variablen Kosten \u00fcbersteigt (positiver Deckungsbeitrag), lohnt sich der Zusatzauftrag kurzfristig.',
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 13: Finanzielle Kennzahlen (Fragen 168-188)
    // ============================================================
    {
      id: 'ch13', num: 'Teil C \u2022 Kapitel 13', title: 'Finanzielle Kennzahlen',
      exercises: [
        {
          id: 168, type: 'match',
          title: 'Bereiche der Bilanz- und Erfolgsanalyse',
          q: 'Ordnen Sie den Punkten 1 bis 8 das Passende aus der Liste A bis H zu. (KZ = Kennzahlen)',
          pairs: [
            { l: '1: KZ zur Verm\u00f6gensstruktur', r: 'E: Kennzahlen der Verm\u00f6gensstruktur (z. B. Immobilisierungsgrad).' },
            { l: '2: Aktivit\u00e4tskennzahlen', r: 'D: Dazu geh\u00f6ren z. B. Lagerumschlag, durchschnittliche Debitorenfrist oder Kreditorenfrist.' },
            { l: '3: Liquidit\u00e4tskennzahlen', r: 'F: Differenz zwischen liquidit\u00e4tswirksamem Ertrag und Aufwand.' },
            { l: '5: Rentabilit\u00e4tskennzahlen', r: 'H: Messen den Erfolg in Bezug auf das Kapital (oder allenfalls den Umsatz).' },
            { l: '6: KZ zur Finanzierungsstruktur', r: 'G: Eigenfinanzierungsgrad, Fremdfinanzierungsgrad, Selbstfinanzierungsgrad.' },
            { l: '8: Erfolg', r: 'C: Differenz zwischen Ertrag und Aufwand.' }
          ],
          options: ['C: Differenz zwischen Ertrag und Aufwand.','D: Dazu geh\u00f6ren z. B. Lagerumschlag, durchschnittliche Debitorenfrist oder Kreditorenfrist.','E: Kennzahlen der Verm\u00f6gensstruktur (z. B. Immobilisierungsgrad).','F: Differenz zwischen liquidit\u00e4tswirksamem Ertrag und Aufwand.','G: Eigenfinanzierungsgrad, Fremdfinanzierungsgrad, Selbstfinanzierungsgrad.','H: Messen den Erfolg in Bezug auf das Kapital (oder allenfalls den Umsatz).'],
          tips: [], reveal: []
        },
        {
          id: 169, type: 'text', title: 'Abschlussrechnungen und Kennzahlen',
          q: 'Ordnen Sie den Punkten 1 bis 12 in der Grafik (Schlussbilanz \u2192 Erfolgsrechnung) das Passende zu.\nNennen Sie: (1) und (2) f\u00fcr die Schlussbilanz, (5) und (6) f\u00fcr die Erfolgsrechnung.',
          keywords: ['Aktiven','Passiven','Aufwand','Ertrag','Gewinn','Verlust','Bilanz','Erfolgsrechnung'],
          solution: '(1) Aktiven, (2) Passiven (in der Schlussbilanz). (5) Aufwendungen, (6) Ertr\u00e4ge (in der Erfolgsrechnung).',
          tips: [], reveal: []
        },
        {
          id: 170, type: 'match',
          title: 'Kennzahlen zuordnen',
          q: 'Ordnen Sie den Punkten 1 bis 10 das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Umsatzrentabilit\u00e4t', r: 'G: = Gewinn \u00d7 100 / Umsatz.' },
            { l: '2: Anlagedeckungsgrad 2', r: 'J: = (Eigenkapital + langfristiges Fremdkapital) \u00d7 100 / Anlageverm\u00f6gen.' },
            { l: '3: Eigenfinanzierungsgrad', r: 'A: = Eigenkapital \u00d7 100 / Gesamtkapital.' },
            { l: '4: Cashflow', r: 'F: = Liquidit\u00e4tsbeitrag aus Umsatzttigkeit.' },
            { l: '5: Produktivit\u00e4tskennzahlen', r: 'I: = messen eine wertmssige Ergiebigkeit, z. B. Umsatz pro Mitarbeiter.' },
            { l: '6: Liquidit\u00e4tsgrad 2', r: 'B: = (Fl\u00fcssige Mittel + Forderungen) \u00d7 100 / kurzfristiges Fremdkapital.' },
            { l: '7: Return on Investment', r: 'D: = Gewinn \u00d7 100 / Kapital.' },
            { l: '9: Kapitalumschlag', r: 'E: = Umsatz / Kapital.' },
            { l: '10: Eigenkapitalrentabilit\u00e4t', r: 'H: = Gewinn \u00d7 100 / Eigenkapital.' }
          ],
          options: ['A: = Eigenkapital \u00d7 100 / Gesamtkapital.','B: = (Fl\u00fcssige Mittel + Forderungen) \u00d7 100 / kurzfristiges Fremdkapital.','D: = Gewinn \u00d7 100 / Kapital.','E: = Umsatz / Kapital.','F: = Liquidit\u00e4tsbeitrag aus Umsatzttigkeit.','G: = Gewinn \u00d7 100 / Umsatz.','H: = Gewinn \u00d7 100 / Eigenkapital.','I: = messen eine wertmssige Ergiebigkeit, z. B. Umsatz pro Mitarbeiter.','J: = (Eigenkapital + langfristiges Fremdkapital) \u00d7 100 / Anlageverm\u00f6gen.'],
          tips: [], reveal: []
        },
        {
          id: 171, type: 'tf',
          title: 'Kennzahlen',
          q: 'Sind die folgenden Aussagen richtig oder falsch?',
          statements: [
            { s: 'Bei hohem Eigenfinanzierungsgrad ist auch der Fremdfinanzierungsgrad hoch.', c: false },
            { s: 'Bei hohem Eigenfinanzierungsgrad ist meistens auch der Anlagedeckungsgrad hoch.', c: true },
            { s: 'Je h\u00f6her der Anlagedeckungsgrad 2 ist, desto besser ist die goldene Bilanzregel eingehalten.', c: true },
            { s: 'Ein Unternehmen mit einer Quick Ratio von 150% muss sich keine Gedanken \u00fcber seine Zahlungsf\u00e4higkeit machen, da es ja liquide ist.', c: false },
            { s: 'Die wichtigste Liquidit\u00e4tskennzahl ist die Kassenliquidit\u00e4t, da sie nur darauf R\u00fccksicht nimmt, was auch tats\u00e4chlich in der Kassa ist.', c: false },
            { s: 'Vertikale Bilanzkennzahlen sind z. B. der Eigenfinanzierungsgrad und die Anlageintensit\u00e4t. Horizontale Bilanzkennzahlen sind z. B. die Quick Ratio und der Deckungsgrad 2.', c: true },
            { s: 'Bei der Orientierung am Liquidit\u00e4tsgrad 2 besteht die Gefahr, dass sich die Warenvorr\u00e4te als unverk\u00e4uflich erweisen und damit eine zu hohe Liquidit\u00e4t vorget\u00e4uscht wird.', c: false },
            { s: 'Ist der Anlagedeckungsgrad 1 unter 100%, ist die goldene Bilanzregel mit Sicherheit nicht eingehalten worden.', c: false }
          ],
          tips: [], reveal: []
        },
        { id: 172, type: 'text', title: 'Hoher Eigenfinanzierungsgrad', q: 'Welchen Vorteil hat ein hoher Eigen- und Selbstfinanzierungsgrad f\u00fcr ein Unternehmen? (1 Satz.)', keywords: ['Unabh\u00e4ngigkeit','Stabilit\u00e4t','Risiko','Fremdkapital','Zinsen','Kreditgeber'], solution: 'Ein hoher Eigenfinanzierungsgrad erh\u00f6ht die finanzielle Unabh\u00e4ngigkeit und Stabilit\u00e4t des Unternehmens, da es weniger von Kreditgebern abh\u00e4ngig ist und weniger Zinskosten tr\u00e4gt.', tips: [], reveal: [] },
        { id: 173, type: 'text', title: 'Hoher Immobilisierungsgrad', q: 'Welchen Nachteil hat ein hoher Immobilisierungsgrad f\u00fcr ein Unternehmen? (1 Satz.)', keywords: ['gebunden','langfristig','unflexibel','Liquidit\u00e4t','Flexibilit\u00e4t'], solution: 'Ein hoher Immobilisierungsgrad bedeutet, dass ein grosser Teil des Verm\u00f6gens langfristig gebunden ist, was die Flexibilit\u00e4t und Liquidit\u00e4t einschr\u00e4nkt.', tips: [], reveal: [] },
        { id: 174, type: 'text', title: 'Liquidit\u00e4tsgrad 2', q: 'Was misst der Liquidit\u00e4tsgrad 2 und wie hoch sollte er sein? (2 bis 3 S\u00e4tze.)', keywords: ['Quick Ratio','fl\u00fcssige Mittel','Forderungen','kurzfristiges Fremdkapital','100%','mindestens'], solution: 'Der Liquidit\u00e4tsgrad 2 (Quick Ratio) misst, ob die fl\u00fcssigen Mittel und kurzfristigen Forderungen ausreichen, um die kurzfristigen Schulden zu decken. Er sollte mindestens 100% betragen. Formel: (Fl\u00fcssige Mittel + Forderungen) \u00d7 100 / kurzfristiges FK.', tips: [], reveal: [] },
        { id: 175, type: 'text', title: 'Tiefer Liquidit\u00e4tsgrad 2', q: 'Ein Unternehmen hat einen zu tiefen Liquidit\u00e4tsgrad 2. Welche Massnahmen k\u00f6nnen helfen, diesen Mangel zu beheben? (2 Stichworte oder 2 kurze S\u00e4tze.)', keywords: ['Forderungen','eintreiben','Zahlungsziel','Kapitalerh\u00f6hung','Kosten','senken','Kredit','Lager','reduzieren'], solution: 'Massnahmen: (1) Forderungen schneller eintreiben (k\u00fcrzere Zahlungsziele). (2) Kurzfristiges FK in langfristiges umschichten. (3) Kapitalerh\u00f6hung. (4) Kosten senken / Lagerbestand reduzieren.', tips: [], reveal: [] },
        { id: 176, type: 'text', title: '\u00dcberdeckung in der Liquidit\u00e4tsstaffel', q: 'Wenn es in der Liquidit\u00e4tsstaffel eine \u00dcberdeckung in der 2. Stufe gibt, was bedeutet dies f\u00fcr den Liquidit\u00e4tsgrad 2? (1 Satz.)', keywords: ['\u00fcber','100%','ausreichend','gedeckt','positiv'], solution: 'Eine \u00dcberdeckung in der 2. Stufe bedeutet, dass der Liquidit\u00e4tsgrad 2 \u00fcber 100% liegt, also ausreichend Liquidit\u00e4t vorhanden ist.', tips: [], reveal: [] },
        { id: 177, type: 'text', title: 'Anlagedeckungsgrad 1 \u00fcber 100%', q: 'Wenn der Anlagedeckungsgrad 1 \u00fcber 100% liegt, ist dann die goldene Bilanzregel eingehalten oder nicht? (2 bis 3 S\u00e4tze.)', keywords: ['eingehalten','Eigenkapital','Anlageverm\u00f6gen','langfristig','\u00fcberfinanziert'], solution: 'Ja, die goldene Bilanzregel ist eingehalten. Ein Anlagedeckungsgrad 1 \u00fcber 100% bedeutet, dass das gesamte Anlageverm\u00f6gen durch Eigenkapital finanziert ist. Das Unternehmen hat sogar einen \u00dcberschuss an Eigenkapital.', tips: [], reveal: [] },
        {
          id: 178, type: 'calc',
          title: 'Handelsmarge berechnen',
          q: 'Die Kennzahl \u00abWarenertrag zu Warenaufwand\u00bb betr\u00e4gt in einem Handelsunternehmen durchschnittlich 150%. Wie hoch ist die durchschnittliche Handelsmarge des Unternehmens?',
          fields: [{ label: 'Handelsmarge', answer: 33.33, unit: '% (gerundet)' }],
          tips: [], reveal: []
        },
        { id: 179, type: 'text', title: 'Effektivverschuldung', q: 'Wie ermittelt man die Effektivverschuldung? (Gleichung.)', keywords: ['Fremdkapital','fl\u00fcssige Mittel','minus','abz\u00fcglich'], solution: 'Effektivverschuldung = Fremdkapital \u2013 fl\u00fcssige Mittel.', tips: [], reveal: [] },
        { id: 180, type: 'text', title: 'Free Cashflow', q: 'Wof\u00fcr kann ein positiver Free Cashflow eingesetzt werden? (1 Satz.)', keywords: ['Dividenden','Schulden','zur\u00fcckzahlen','Investitionen','Aktion\u00e4re'], solution: 'Ein positiver Free Cashflow kann f\u00fcr Dividendenaussch\u00fcttungen an die Aktion\u00e4re, R\u00fcckzahlung von Schulden oder zus\u00e4tzliche Investitionen eingesetzt werden.', tips: [], reveal: [] },
        { id: 181, type: 'text', title: 'Kapitalrentabilit\u00e4t als Produkt', q: 'Die Kapitalrentabilit\u00e4t kann als Produkt (als Multiplikation) von zwei Kennzahlen berechnet werden. Welches sind diese zwei Kennzahlen? (Gleichung.)', keywords: ['Umsatzrentabilit\u00e4t','Kapitalumschlag','Gewinnmarge'], solution: 'Kapitalrentabilit\u00e4t = Umsatzrentabilit\u00e4t \u00d7 Kapitalumschlag = (Gewinn/Umsatz) \u00d7 (Umsatz/Kapital).', tips: [], reveal: [] },
        { id: 182, type: 'text', title: 'Verschuldungsfaktor', q: 'Was misst der Verschuldungsfaktor und warum gilt er als doppelt empfindlicher \u00abFiebermesser\u00bb? (3 bis 5 S\u00e4tze.)', keywords: ['Fremdkapital','Cashflow','Jahre','tilgen','Verschuldung','steigt','sinkt'], solution: 'Der Verschuldungsfaktor zeigt, wie viele Jahre es dauern w\u00fcrde, das Fremdkapital aus dem Cashflow zu tilgen. Er gilt als \u00abdoppelt empfindlich\u00bb, weil er sowohl bei steigendem Fremdkapital (Z\u00e4hler) als auch bei sinkendem Cashflow (Nenner) steigt. Bei einer Verschlechterung der Gesch\u00e4ftslage verschlechtert sich der Faktor also doppelt.', tips: [], reveal: [] },
        { id: 183, type: 'text', title: 'DuPont-Schema', q: 'Was ist das DuPont-Schema? (1 Satz.)', keywords: ['Kennzahlensystem','Rentabilit\u00e4t','Spitze','zerleg','Faktoren'], solution: 'Das DuPont-Schema ist ein Kennzahlensystem, das die Kapitalrentabilit\u00e4t (ROI) an der Spitze in ihre Einflussfaktoren (Umsatzrentabilit\u00e4t und Kapitalumschlag) zerlegt.', tips: [], reveal: [] },
        { id: 184, type: 'text', title: 'Spitzenkennzahl DuPont', q: 'Welche Kennzahl steht an der Spitze des DuPont-Schemas? (Stichwort.)', keywords: ['Kapitalrentabilit\u00e4t','ROI','Return on Investment','Gesamtkapitalrentabilit\u00e4t'], solution: 'Kapitalrentabilit\u00e4t (ROI = Return on Investment).', tips: [], reveal: [] },
        { id: 185, type: 'text', title: 'Zwei Faktoren des DuPont-Schemas', q: 'In welche zwei Faktoren wird die Spitzenkennzahl im DuPont-Schema zerlegt?', keywords: ['Umsatzrentabilit\u00e4t','Kapitalumschlag','Gewinnmarge'], solution: 'Die zwei Faktoren sind: (1) Umsatzrentabilit\u00e4t (Gewinn/Umsatz) und (2) Kapitalumschlag (Umsatz/Kapital).', tips: [], reveal: [] },
        { id: 186, type: 'text', title: 'Zwei Schienen des DuPont-Schemas', q: 'Die Aufteilung der Spitzenkennzahl in zwei Faktoren erlaubt es, Rentabilit\u00e4tsverbesserungen in zwei Bereichen (auf zwei Schienen) auszuloten. Welches sind diese beiden Schienen?', keywords: ['Gewinnschiene','Umsatzschiene','Kosten','Ertr\u00e4ge','Kapital','Verm\u00f6gen'], solution: 'Die beiden Schienen sind: (1) Gewinnschiene (Verbesserung der Umsatzrentabilit\u00e4t durch h\u00f6here Ertr\u00e4ge oder tiefere Kosten) und (2) Umsatzschiene (Verbesserung des Kapitalumschlags durch effizienteren Kapitaleinsatz).', tips: [], reveal: [] },
        {
          id: 187, type: 'calc',
          title: 'Kennzahlen berechnen',
          q: 'Erg\u00e4nzen Sie die leeren Felder in der folgenden Tabelle. Die erste Zeile ist bereits ausgef\u00fcllt.\nNr. 1: FK=40, KFFK=15, GK=100, EFG=60%, LG2=120%, LM u. kurzfr. Ford.=18\nNr. 2: FK=72, GK=120, LG2=105%, LM u. kurzfr. Ford.=42\n\nBerechnen Sie das fehlende KFFK f\u00fcr Nr. 2.',
          fields: [
            { label: 'Nr. 2: EFG (Eigenfinanzierungsgrad)', answer: 40, unit: '%' },
            { label: 'Nr. 2: KFFK', answer: 40, unit: '(gerundet)' }
          ],
          tips: [], reveal: []
        },
        { id: 188, type: 'text', title: 'Beurteilung von Kennzahlen', q: 'Wie beurteilen Sie die folgenden Kennzahlen? Begr\u00fcnden Sie Ihre Antwort mit je 2 bis 3 S\u00e4tzen.\nA) Eigenfinanzierungsgrad von 10%\nB) Liquidit\u00e4tsgrad 2 von 250%', keywords: ['niedrig','hoch','Risiko','Unabh\u00e4ngigkeit','\u00fcberliquid','gebunden'], solution: 'A) Ein EFG von 10% ist sehr niedrig. Das Unternehmen ist stark fremdfinanziert und somit abh\u00e4ngig von Kreditgebern. Das Risiko bei wirtschaftlichen Schwierigkeiten ist hoch.\nB) Ein LG2 von 250% ist sehr hoch. Das deutet auf \u00dcberliquidit\u00e4t hin, was bedeutet, dass zu viel Kapital kurzfristig gebunden ist statt ertragbringend eingesetzt zu werden.', tips: [], reveal: [] }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 14: Investitionen (Fragen 191-206)
    // ============================================================
    {
      id: 'ch14', num: 'Teil C \u2022 Kapitel 14', title: 'Investitionen: Entscheidungen \u00fcber Mittelbindungen',
      exercises: [
        {
          id: 191, type: 'match',
          title: 'Investitionen \u2013 Begriffe zuordnen',
          q: 'Ordnen Sie den Punkten 1 bis 10 das Passende aus der Liste A bis J zu.',
          pairs: [
            { l: '1: Erweiterungsinvestitionen', r: 'I: Dienen zur Vergr\u00f6sserung der Kapazit\u00e4t des Unternehmens.' },
            { l: '2: Zeitwert', r: 'J: Wert einer Zahlung im Zeitpunkt des tats\u00e4chlichen Anfalls.' },
            { l: '3: Sachinvestitionen', r: 'E: Mittelbindung in Maschinen, Fahrzeugen, Apparaten, Immobilien.' },
            { l: '4: Kostenvergleichsrechnung', r: 'F: Statisches Rechnungsverfahren.' },
            { l: '5: Pay-back-Methode', r: 'F: Statisches Rechnungsverfahren.' },
            { l: '6: Barwert', r: 'A: Abgezinster Wert einer Zahlung.' },
            { l: '7: Interner Ertragssatz', r: 'G: Tats\u00e4chliche Verzinsung einer Investition.' },
            { l: '8: Ersatzinvestitionen', r: 'D: Verbrauchte Anlagen werden durch gleichwertige erneuert.' },
            { l: '9: Finanzinvestitionen', r: 'H: Dazu z\u00e4hlen Darlehen, Beteiligungen, Wertschriften u.a.' },
            { l: '10: Kapitalwertmethode', r: 'B: Dynamisches Rechenverfahren.' }
          ],
          options: ['A: Abgezinster Wert einer Zahlung.','B: Dynamisches Rechenverfahren.','D: Verbrauchte Anlagen werden durch gleichwertige erneuert.','E: Mittelbindung in Maschinen, Fahrzeugen, Apparaten, Immobilien.','F: Statisches Rechnungsverfahren.','G: Tats\u00e4chliche Verzinsung einer Investition.','H: Dazu z\u00e4hlen Darlehen, Beteiligungen, Wertschriften u.a.','I: Dienen zur Vergr\u00f6sserung der Kapazit\u00e4t des Unternehmens.','J: Wert einer Zahlung im Zeitpunkt des tats\u00e4chlichen Anfalls.'],
          tips: [], reveal: []
        },
        {
          id: 192, type: 'tf',
          title: 'Investitionsrechnung \u2013 statische Methoden',
          q: 'Sind die folgenden Aussagen richtig (R) oder falsch (F)?',
          statements: [
            { s: 'Bei den statischen Methoden ist der Zeitfaktor (Auf- und Abzinsen) wichtig.', c: false },
            { s: 'Ein Liquidationserl\u00f6s erh\u00f6ht das Durchschnittskapital.', c: true },
            { s: 'Ein Liquidationserl\u00f6s erh\u00f6ht den Abschreibungsbedarf.', c: false },
            { s: 'Kosten einer Grossrevision erh\u00f6hen das Durchschnittskapital.', c: false },
            { s: 'Sind Daten f\u00fcr einen Gewinnvergleich vorhanden, k\u00f6nnen die Renditen berechnet werden.', c: true },
            { s: 'Sind die Nutzungsjahre der Investitionsalternativen gleich, ist keine R\u00fcckflusszahl zu errechnen.', c: false },
            { s: 'Die Alternative mit der tiefsten R\u00fcckflusszahl schneidet am besten ab.', c: true },
            { s: 'Mit der Renditerechnung k\u00f6nnen Investitionsprojekte ganz unterschiedlicher Art (Nutzungsdauer, Kapital usw.) miteinander verglichen werden.', c: true }
          ],
          tips: [], reveal: []
        },
        { id: 193, type: 'text', title: 'Investition vs. Finanzierung', q: 'Wodurch unterscheiden sich Investition und Finanzierung? (2 bis 3 S\u00e4tze.)', keywords: ['Investition','Mittelverwendung','Finanzierung','Mittelbeschaffung','Aktiven','Passiven'], solution: 'Investition ist die Mittelverwendung (Einsatz von Geld f\u00fcr den Erwerb von Verm\u00f6gensgegenst\u00e4nden = Aktivseite). Finanzierung ist die Mittelbeschaffung (Beschaffung der finanziellen Mittel = Passivseite).', tips: [], reveal: [] },
        {
          id: 194, type: 'mc',
          title: 'Technisch vs. wirtschaftlich bedingtes Nutzungsende',
          q: 'In welchen F\u00e4llen ergibt sich das technisch bedingte Nutzungsende sp\u00e4ter als das wirtschaftlich bedingte Nutzungsende einer Anlage?',
          options: ['Wenn die Anlage schlecht gewartet wird','Wenn die Anlage technisch noch funktionsf\u00e4hig ist, aber wirtschaftlich nicht mehr rentabel betrieben werden kann','Wenn es keine Alternative gibt','Nie'],
          answer: 1,
          explanation: 'In den meisten F\u00e4llen kann eine Anlage technisch l\u00e4nger genutzt werden, als es wirtschaftlich sinnvoll ist (z. B. wegen h\u00f6herer Wartungskosten, Energieverbrauch oder veralteter Technologie).',
          tips: [], reveal: []
        },
        { id: 195, type: 'text', title: 'Sunk Costs', q: 'In einem Konzern steht man vor folgendem Entscheid:\n- Soll ein leer stehendes Fabrikgeb\u00e4ude verkauft werden?\n- Soll man das Geb\u00e4ude benutzen, um darin ein neu entwickeltes Produkt herzustellen?\n\nDer Buchwert betr\u00e4gt CHF 50 000.\u2013, der Marktwert im Fall eines Verkaufs CHF 300 000.\u2013. Welcher Betrag ist relevant f\u00fcr den Investitionsentscheid? (2 bis 3 S\u00e4tze.)', keywords: ['Marktwert','300 000','Opportunit\u00e4tskosten','relevant','Buchwert','irrelevant'], solution: 'Der Marktwert von CHF 300 000.\u2013 ist relevant f\u00fcr den Investitionsentscheid (Opportunit\u00e4tskosten = entgangener Verkaufserl\u00f6s). Der Buchwert von CHF 50 000.\u2013 ist ein Sunk Cost und f\u00fcr die Entscheidung irrelevant.', tips: [], reveal: [] },
        { id: 196, type: 'text', title: 'Dynamische vs. statische Methoden', q: 'Warum sind dynamische Methoden exakter, aber schwieriger anzuwenden? (2 bis 3 S\u00e4tze.)', keywords: ['Zeitwert','Abzinsung','Aufzinsung','Zukunft','Sch\u00e4tzung','unsicher','Zinssatz'], solution: 'Dynamische Methoden ber\u00fccksichtigen den Zeitwert des Geldes (Auf- und Abzinsung). Dadurch sind sie exakter. Sie sind aber schwieriger, weil die zuk\u00fcnftigen Ein- und Auszahlungen gesch\u00e4tzt werden m\u00fcssen und die Wahl des Kalkulationszinssatzes unsicher ist.', tips: [], reveal: [] },
        { id: 197, type: 'text', title: 'Quantitative Gr\u00f6ssen', q: 'Welche quantitativen Gr\u00f6ssen sind f\u00fcr eine Investitionsentscheidung relevant? (5 Stichw\u00f6rter.)', keywords: ['Anschaffungskosten','Nutzungsdauer','Betriebskosten','Erl\u00f6se','Liquidationserl\u00f6s','Kalkulationszinssatz','Kapital'], solution: 'Quantitative Gr\u00f6ssen: Anschaffungskosten, Nutzungsdauer, j\u00e4hrliche Betriebskosten, j\u00e4hrliche Erl\u00f6se, Liquidationserl\u00f6s, Kalkulationszinssatz.', tips: [], reveal: [] },
        { id: 198, type: 'text', title: 'Qualitative Gr\u00f6ssen', q: 'Welche der quantitativen Gr\u00f6ssen lassen sich im Allgemeinen recht einfach ermitteln? (1 Satz.)', keywords: ['Anschaffungskosten','Kaufpreis','aktuell','bekannt','Offerte'], solution: 'Die Anschaffungskosten lassen sich im Allgemeinen recht einfach ermitteln, da sie auf aktuellen Offerten oder Kaufvertr\u00e4gen basieren.', tips: [], reveal: [] },
        { id: 199, type: 'text', title: 'Nutzen einer Investition', q: 'Wie l\u00e4sst sich der Nutzen einer Investition umschreiben? (1 Satz.)', keywords: ['Ertr\u00e4ge','Einsparungen','R\u00fcckfl\u00fcsse','zuk\u00fcnftig','generiert'], solution: 'Der Nutzen einer Investition l\u00e4sst sich umschreiben als die zuk\u00fcnftigen Ertr\u00e4ge (Einnahmen, Einsparungen, R\u00fcckfl\u00fcsse), die durch die Investition generiert werden.', tips: [], reveal: [] },
        { id: 200, type: 'text', title: 'Statische Verfahren', q: 'Was kennzeichnet die statischen Verfahren der Investitionsrechnung? (1 Satz.)', keywords: ['Durchschnittswerte','Periode','Zeitwert','nicht','vereinfacht'], solution: 'Die statischen Verfahren der Investitionsrechnung arbeiten mit Durchschnittswerten pro Periode und ber\u00fccksichtigen den Zeitwert des Geldes nicht (vereinfachte Betrachtung).', tips: [], reveal: [] },
        { id: 201, type: 'text', title: 'Dynamische Verfahren', q: 'Welcher Grundsatz pr\u00e4gt die dynamischen Verfahren der Investitionsrechnung? (2 bis 3 S\u00e4tze.)', keywords: ['Zeitwert','Geld','Abzinsung','fr\u00fcher','sp\u00e4ter','Zinsen','Barwert'], solution: 'Der Grundsatz lautet: Ein Franken heute ist mehr wert als ein Franken morgen (Zeitwert des Geldes). Dynamische Verfahren ber\u00fccksichtigen dies durch Auf- bzw. Abzinsung aller Ein- und Auszahlungen auf einen gemeinsamen Zeitpunkt.', tips: [], reveal: [] },
        { id: 202, type: 'text', title: 'Statische vs. dynamische Methoden', q: 'In welchen F\u00e4llen sind statische Verfahren besser geeignet als dynamische Methoden? (2 bis 3 S\u00e4tze.)', keywords: ['einfach','\u00fcberschl\u00e4gig','kurzfristig','\u00e4hnlich','Nutzungsdauer','schnell'], solution: 'Statische Verfahren sind besser geeignet, wenn: (1) eine schnelle, \u00fcberschl\u00e4gige Berechnung gen\u00fcgt, (2) die Investitionsalternativen \u00e4hnliche Nutzungsdauern und Kapitaleins\u00e4tze haben, (3) die Investitionsbetr\u00e4ge relativ gering sind.', tips: [], reveal: [] },
        { id: 203, type: 'text', title: 'Entscheidungskriterium bei statischen Methoden', q: 'Wie wird bei den statischen Rechenmethoden entschieden? Erg\u00e4nzen Sie die einzelnen Aussagen.\nA) Kostenvergleichsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nB) Gewinnvergleichsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nC) Renditerechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nD) Amortisationsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...', keywords: ['tiefsten','h\u00f6chsten','Kosten','Gewinn','Rendite','k\u00fcrzeste','R\u00fcckflussdauer'], solution: 'A) ... die tiefsten Kosten verursacht.\nB) ... den h\u00f6chsten Gewinn erzielt.\nC) ... die h\u00f6chste Rendite aufweist.\nD) ... die k\u00fcrzeste R\u00fcckflussdauer (Amortisationsdauer) hat.', tips: [], reveal: [] },
        {
          id: 204, type: 'calc',
          title: 'Investitionsvergleich',
          q: 'Das Getr\u00e4nkeunternehmen Hahnenburger AG steht vor der Anschaffung einer neuer Abf\u00fcllanlage. Vergleichen Sie Anlage A und B:\n\nAnlage A: Anschaffungskosten 240 000, Wartung 2 000, Lohn 5 600, Material 1 200, Energie 900, Jahreserls 60 000, Liquidationserls 0, Nutzung 8 Jahre, Kalk. Zinssatz 6%.\nAnlage B: Anschaffungskosten 180 000, Wartung 1 200, Lohn 15 000, Material 1 200, Energie 2 100, Jahreserls 65 000, Liquidationserls 0, Nutzung 8 Jahre, Kalk. Zinssatz 6%.\n\nBerechnen Sie die j\u00e4hrlichen Kosten (inkl. Abschreibung und kalkulatorische Zinsen).',
          fields: [
            { label: 'Anlage A: Abschreibung/Jahr', answer: 30000, unit: 'CHF' },
            { label: 'Anlage A: Kalk. Zinsen (auf Durchschnittskapital)', answer: 7200, unit: 'CHF' },
            { label: 'Anlage B: Abschreibung/Jahr', answer: 22500, unit: 'CHF' },
            { label: 'Anlage B: Kalk. Zinsen (auf Durchschnittskapital)', answer: 5400, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 205, type: 'calc',
          title: 'Durchschnittlich investiertes Kapital',
          q: 'Die folgende Tabelle enth\u00e4lt Daten f\u00fcr f\u00fcnf Investitionsprojekte. Wie hoch ist jeweils das durchschnittlich investierte Kapital?\n\nProjekt 1: Kaufpreis 100 000, Bezugskosten 0, Montagekosten 0, Nutzungsdauer 5 Jahre, Restwert 0.\nProjekt 2: Kaufpreis 150 000, Bezugskosten 15 000, Montagekosten 35 000, Nutzungsdauer 8 Jahre, Restwert 0.',
          fields: [
            { label: 'Projekt 1: Durchschn. investiertes Kapital', answer: 50000, unit: 'CHF' },
            { label: 'Projekt 2: Durchschn. investiertes Kapital', answer: 100000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 206, type: 'calc',
          title: 'Garage: Investitionsvergleich',
          q: 'Eine Garage muss einen neuen Werkstattplatz mit Hebeb\u00fchne und Diagnosestation einrichten. Zwei Anlagen stehen daf\u00fcr zur Auswahl.\n\nAnlage A: Kapitaleinsatz 600, Nutzungsdauer 5 Jahre, Kalk. Zinssatz 10%, J\u00e4hrliche Betriebskosten 500.\nAnlage B: Kapitaleinsatz 720, Nutzungsdauer 6 Jahre, Kalk. Zinssatz 10%, J\u00e4hrliche Betriebskosten 460.\n\nBerechnen Sie die j\u00e4hrliche Abschreibung.',
          fields: [
            { label: 'Anlage A: Abschreibung/Jahr', answer: 120, unit: '(Kurzzahlen)' },
            { label: 'Anlage B: Abschreibung/Jahr', answer: 120, unit: '(Kurzzahlen)' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: null
    },

    // ============================================================
    // Kapitel 15: Planung, Budgetierung, Controlling (Fragen 211-234)
    // ============================================================
    {
      id: 'ch15', num: 'Teil C \u2022 Kapitel 15', title: 'Planung, Budgetierung, Controlling, Finanzen',
      exercises: [
        {
          id: 211, type: 'match',
          title: 'F\u00fchrungskreislauf',
          q: 'Bringen Sie die folgenden vier Vorg\u00e4nge (A bis D) in die richtige Reihenfolge:\nA: Kontrollieren, B: Planen, C: Anordnen, D: Entscheiden.',
          pairs: [
            { l: '1. Schritt', r: 'B: Planen' },
            { l: '2. Schritt', r: 'D: Entscheiden' },
            { l: '3. Schritt', r: 'C: Anordnen' },
            { l: '4. Schritt', r: 'A: Kontrollieren' }
          ],
          options: ['A: Kontrollieren','B: Planen','C: Anordnen','D: Entscheiden'],
          tips: [], reveal: []
        },
        {
          id: 212, type: 'match',
          title: 'Planung / Budgetierung',
          q: 'Ordnen Sie den Punkten 1 bis 8 das Passende aus der Liste A bis H zu.',
          pairs: [
            { l: '1: Leistungswirtschaftliche Ziele', r: 'D: Produkt- und Marktziele.' },
            { l: '2: Strategische Entwicklung', r: 'H: Abbildung in Mehrjahrespl\u00e4nen.' },
            { l: '3: Einzelpl\u00e4ne', r: 'A: Absatz-, Produktions-, Personal-, Beschaffungs-, Investitionsplan usw.' },
            { l: '5: Strategische Fortschreibung', r: 'H: Abbildung in Mehrjahrespl\u00e4nen.' },
            { l: '6: Finanzwirtschaftliche Ziele', r: 'B: Liquidit\u00e4ts-, Ertrags- und Sicherheitsziele.' },
            { l: '7: Operative Planung', r: 'F: Jahresbudget.' },
            { l: '8: Gesamtpl\u00e4ne', r: 'E: Plan-Bilanz, Plan-Erfolgsrechnung, Plan-Geldflussrechnung.' }
          ],
          options: ['A: Absatz-, Produktions-, Personal-, Beschaffungs-, Investitionsplan usw.','B: Liquidit\u00e4ts-, Ertrags- und Sicherheitsziele.','D: Produkt- und Marktziele.','E: Plan-Bilanz, Plan-Erfolgsrechnung, Plan-Geldflussrechnung.','F: Jahresbudget.','H: Abbildung in Mehrjahrespl\u00e4nen.'],
          tips: [], reveal: []
        },
        { id: 213, type: 'text', title: 'F\u00fchrungsebenen und Zielsetzungsprozess', q: 'Ordnen Sie den Punkten 1 bis 8 in der Grafik (F\u00fchrungsebenen) das Passende zu. Nennen Sie (4), (5) und (6).', keywords: ['strategisch','operativ','langfristig','mittelfristig','kurzfristig','Vision','Ziele'], solution: '(4) = strategische Ebene (langfristig), (5) = mittelfristige Ebene, (6) = operative Ebene (kurzfristig).', tips: [], reveal: [] },
        { id: 214, type: 'text', title: 'F\u00fchrungskreislauf und F\u00fchrungsebenen', q: 'Wie h\u00e4ngen der F\u00fchrungskreislauf und die F\u00fchrungsebenen zusammen? (3 bis 5 S\u00e4tze.)', keywords: ['Planung','Kontrolle','strategisch','operativ','Ziele','R\u00fcckmeldung','Budget','Soll','Ist'], solution: 'Der F\u00fchrungskreislauf (Planen, Entscheiden, Anordnen, Kontrollieren) wird auf allen F\u00fchrungsebenen durchlaufen. Von oben nach unten erfolgt eine Operationalisierung (Konkretisierung) von Zielen. Von unten nach oben l\u00e4uft die R\u00fcckmeldung \u00fcber die Zielerreichung (Soll-Ist-Vergleiche).', tips: [], reveal: [] },
        { id: 215, type: 'text', title: 'Finanzwirtschaftliche Ziele', q: 'Im Budgetierungsprozess kommt einer Hauptkategorie von Zielen eine besondere Bedeutung zu. Um welche Kategorie von Zielen handelt es sich? Grund? (2 bis 3 S\u00e4tze.)', keywords: ['finanzwirtschaftlich','messbar','quantifizierbar','Liquidit\u00e4t','Ertrag','Sicherheit'], solution: 'Es sind die finanzwirtschaftlichen Ziele (Liquidit\u00e4ts-, Ertrags- und Sicherheitsziele). Sie sind besonders wichtig, weil sie sich gut quantifizieren und messen lassen und somit f\u00fcr die Budgetierung und das Controlling geeignet sind.', tips: [], reveal: [] },
        { id: 216, type: 'text', title: 'Strategische Entwicklungen', q: 'Mit welchem Instrument werden strategische Entwicklungen abgebildet und \u00fcberwacht? (1 Satz.)', keywords: ['Businessplan','Mehrjahresplan','strategische Planung'], solution: 'Strategische Entwicklungen werden mit Businesspl\u00e4nen (Mehrjahrespl\u00e4nen) abgebildet und \u00fcberwacht.', tips: [], reveal: [] },
        { id: 217, type: 'text', title: 'Strategische Fortschreibung', q: 'Welches Instrument dient zur strategischen Fortschreibung? (Stichwort.)', keywords: ['Mehrjahresbudget','Mehrjahresplan'], solution: 'Mehrjahresbudget (Mehrjahresplan).', tips: [], reveal: [] },
        { id: 218, type: 'text', title: 'Budget, Buchf\u00fchrung und Ist-Rechnungen', q: 'Wie h\u00e4ngen Budget, Buchf\u00fchrung und Ist-Rechnungen im operativen F\u00fchrungskreislauf zusammen? (3 bis 5 S\u00e4tze.)', keywords: ['Plan','Soll','Ist','Vergleich','Abweichung','Massnahmen','Kontrolle'], solution: 'Das Budget enth\u00e4lt die geplanten (Soll-)Werte. Die Buchf\u00fchrung liefert die Ist-Werte (tats\u00e4chliche Ergebnisse). Durch Soll-Ist-Vergleiche werden Abweichungen identifiziert, analysiert und gegebenenfalls Massnahmen eingeleitet.', tips: [], reveal: [] },
        { id: 219, type: 'text', title: 'Absatzplan', q: 'Was wird im Absatzplan festgehalten? (1 Satz.)', keywords: ['Menge','Preis','Umsatz','Produkte','Absatz','geplant'], solution: 'Im Absatzplan werden die geplanten Absatzmengen, Preise und Ums\u00e4tze pro Produkt(gruppe) festgehalten.', tips: [], reveal: [] },
        { id: 220, type: 'text', title: 'Absatzplan und Gesamtpl\u00e4ne', q: 'Welche wichtige Gr\u00f6sse ergibt sich aus dem Absatzplan f\u00fcr die Gesamtpl\u00e4ne und in welche Gesamtpl\u00e4ne fliesst diese Gr\u00f6sse ein? (2 bis 3 S\u00e4tze.)', keywords: ['Umsatz','Plan-Erfolgsrechnung','Plan-Geldflussrechnung','Ertr\u00e4ge'], solution: 'Aus dem Absatzplan ergibt sich der geplante Umsatz (Ertr\u00e4ge). Dieser fliesst in die Plan-Erfolgsrechnung und in die Plan-Geldflussrechnung ein.', tips: [], reveal: [] },
        { id: 221, type: 'text', title: 'Investitionsplan', q: 'Was wird im Investitionsplan festgehalten? (2 Stichw\u00f6rter.)', keywords: ['Investitionen','Projekte','Anschaffungen','Kapital','Betrag','Zeitplan'], solution: 'Im Investitionsplan werden die geplanten Investitionsprojekte und die daf\u00fcr vorgesehenen Betr\u00e4ge (sowie der Zeitplan) festgehalten.', tips: [], reveal: [] },
        { id: 222, type: 'text', title: 'Plan-Erfolgsrechnung', q: 'Welche Gr\u00f6sse wird f\u00fcr die Plan-Erfolgsrechnung bzw. Plan-Betriebsrechnung aus dem Investitionsplan abgeleitet? (1 Satz.)', keywords: ['Abschreibungen','Kapitalkosten','Zinsen'], solution: 'Aus dem Investitionsplan werden die geplanten Abschreibungen und Kapitalkosten (Zinsen) f\u00fcr die Plan-Erfolgsrechnung abgeleitet.', tips: [], reveal: [] },
        { id: 223, type: 'text', title: 'Absatzplan vs. Produktionsplan', q: 'Ein Unternehmen produziert Kocht\u00f6pfe und importiert daneben asiatische Kochutensilien, die es als Handelsware verkauft. Was wird im Absatzplan und was im Produktionsplan festgehalten? (2 bis 3 S\u00e4tze.)', keywords: ['Absatzplan','Verkauf','Menge','Produktionsplan','Fertigung','Herstellung'], solution: 'Im Absatzplan werden alle geplanten Verk\u00e4ufe festgehalten (Kocht\u00f6pfe und Handelsware). Im Produktionsplan wird nur die eigene Fertigung (Kocht\u00f6pfe) mit den geplanten Produktionsmengen festgehalten.', tips: [], reveal: [] },
        { id: 224, type: 'text', title: 'Kurzfristige Erfolgsrechnungen', q: 'Wozu dienen kurzfristige Erfolgsrechnungen? (2 bis 3 S\u00e4tze.)', keywords: ['unterjhrig','Kontrolle','Quartal','Monat','Steuerung','fr\u00fchzeitig','Abweichung'], solution: 'Kurzfristige Erfolgsrechnungen (monatlich, quartalweise) dienen der unterj\u00e4hrigen Kontrolle und Steuerung. Sie erm\u00f6glichen es, Abweichungen fr\u00fchzeitig zu erkennen und Gegenmassnahmen einzuleiten.', tips: [], reveal: [] },
        { id: 225, type: 'text', title: 'Leitfunktion finanzwirtschaftlicher Ziele', q: 'Finanzwirtschaftliche Ziele haben eine Leitfunktion. Was bedeutet das? (2 bis 3 S\u00e4tze.)', keywords: ['Richtung','vorgeben','Orientierung','Ziel','Budget','Massst\u00e4be'], solution: 'Die Leitfunktion bedeutet, dass finanzwirtschaftliche Ziele die Richtung vorgeben und als Orientierung f\u00fcr das gesamte Unternehmen dienen. Sie setzen Massst\u00e4be f\u00fcr Planung, Entscheidung und Kontrolle.', tips: [], reveal: [] },
        { id: 226, type: 'text', title: 'Messfunktion finanzwirtschaftlicher Ziele', q: 'Finanzwirtschaftliche Ziele haben eine Messfunktion. Was bedeutet das? (2 bis 3 S\u00e4tze.)', keywords: ['messen','quantifizieren','Soll','Ist','Vergleich','Zielerreichung'], solution: 'Die Messfunktion bedeutet, dass finanzwirtschaftliche Ziele sich gut quantifizieren lassen und somit die Messung der Zielerreichung erm\u00f6glichen. Durch Soll-Ist-Vergleiche kann festgestellt werden, ob die Ziele erreicht wurden.', tips: [], reveal: [] },
        { id: 227, type: 'text', title: 'Kostenstellenbericht', q: 'Was ist der Inhalt eines Kostenstellenberichts? (Mind. 3 Stichw\u00f6rter mit je 1 Umschreibung.)', keywords: ['Soll','Ist','Abweichung','Kostenart','Kostenstelle','Budget','Massnahmen'], solution: 'Inhalt: (1) Soll-Werte (budgetierte Kosten pro Kostenart), (2) Ist-Werte (tats\u00e4chliche Kosten), (3) Abweichungen (Differenzen zwischen Soll und Ist), ggf. Analyse der Abweichungsursachen.', tips: [], reveal: [] },
        { id: 228, type: 'text', title: 'Kostentr\u00e4gerbericht', q: 'Was ist der Inhalt eines Kostentr\u00e4gerberichts? (Mind. 3 Stichw\u00f6rter mit je 1 Umschreibung.)', keywords: ['Produkt','Selbstkosten','Erl\u00f6s','Gewinn','Verlust','Plan','Ist'], solution: 'Inhalt: (1) Erl\u00f6se pro Produkt/Kostentr\u00e4ger, (2) Selbstkosten (geplant und effektiv), (3) Ergebnis (Gewinn/Verlust) pro Kostentr\u00e4ger. Vergleich Plan vs. Ist.', tips: [], reveal: [] },
        { id: 229, type: 'text', title: 'Soll-Ist-Vergleich', q: 'N. Erd st\u00f6rt sich daran, dass im Zusammenhang mit Kosten und Werten mal von \u00abSoll\u00bb, mal von \u00abPlan\u00bb die Rede ist. Wie antworten Sie? (2 bis 3 S\u00e4tze.)', keywords: ['synonym','gleichbedeutend','Plan','Budget','Soll','Vorgabe'], solution: '\u00abSoll\u00bb und \u00abPlan\u00bb werden im Controlling-Kontext weitgehend synonym verwendet. Beide bezeichnen die budgetierten bzw. geplanten Vorgabewerte, die mit den tats\u00e4chlichen Ist-Werten verglichen werden.', tips: [], reveal: [] },
        {
          id: 230, type: 'calc',
          title: 'Umsatzabweichung',
          q: 'Der Verkaufsplan des Produkts N sieht f\u00fcr das erste Halbjahr mit einer geplanten Menge und einem geplanten Preis einen Umsatz von CHF 360 000.\u2013 vor. Die Halbjahresabrechnung zeigt, dass mit N ein Umsatz von CHF 348 000.\u2013 erzielt wurde.\n\nA) Wie bezeichnet man die Differenz der beiden Betr\u00e4ge? (Stichwort.)\nB) Wie hoch ist die Differenz?',
          fields: [
            { label: 'Abweichung (Soll - Ist)', answer: 12000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        { id: 231, type: 'text', title: 'Zusammenhang Controlling-Begriffe', q: 'Wie h\u00e4ngen die folgenden Stichw\u00f6rter zusammen: starres Kostenstellenbudget, flexibles Kostenstellenbudget, Kostenspaltung, Ist-Werte, Plan-Werte, Soll-Werte, Verbrauchsabweichung, Besch\u00e4ftigungsabweichung, Gesamtabweichung? (Inhaltlich und sprachlich korrekter Text mit 3 bis 5 S\u00e4tzen.)', keywords: ['starr','flexibel','Verbrauch','Besch\u00e4ftigung','Abweichung','variabel','fix','Auslastung'], solution: 'Das starre Budget basiert auf einer bestimmten Auslastung. Das flexible Budget ber\u00fccksichtigt die tats\u00e4chliche Auslastung durch Kostenspaltung in variable und fixe Anteile. Die Gesamtabweichung (Soll - Ist) l\u00e4sst sich in Verbrauchsabweichung (Effizienz) und Besch\u00e4ftigungsabweichung (Auslastung) aufteilen.', tips: [], reveal: [] },
        { id: 232, type: 'text', title: 'Liquidit\u00e4t als Ziel', q: 'Die Liquidit\u00e4t ist eines der finanziellen Hauptziele jedes Unternehmens.\nA) Was f\u00fcr Folgen kann es haben, wenn diesem Ziel zu wenig Beachtung geschenkt wird? (2 bis 3 S\u00e4tze.)', keywords: ['Zahlungsunf\u00e4hig','Konkurs','Insolvenz','Gl\u00e4ubiger','Betreibung'], solution: 'A) Wird der Liquidit\u00e4t zu wenig Beachtung geschenkt, droht Zahlungsunf\u00e4higkeit (Illiquidit\u00e4t). Dies kann zu Betreibungen durch Gl\u00e4ubiger und im schlimmsten Fall zum Konkurs (Insolvenz) f\u00fchren.', tips: [], reveal: [] },
        { id: 233, type: 'text', title: 'Ertrag/Aufwand vs. Einnahmen/Ausgaben', q: 'Wenn es um den Erfolg eines Unternehmens geht, wird in den Gr\u00f6ssen Ertrag und Aufwand gedacht. Wenn es dagegen um die Liquidit\u00e4t geht, wird in den Gr\u00f6ssen Einnahmen und Ausgaben gedacht. Entwickeln Sie ein Gesp\u00fcr f\u00fcr die Unterschiede.', keywords: ['Erfolg','Ertrag','Aufwand','Liquidit\u00e4t','Einnahmen','Ausgaben','Geld','Periodisierung'], solution: 'Ertrag und Aufwand beziehen sich auf die periodengerechte Erfolgsermittlung (wann ist die Leistung erbracht?). Einnahmen und Ausgaben beziehen sich auf tats\u00e4chliche Geldbewegungen (wann fliesst das Geld?). Oft entsprechen sich Ertrag und Einnahmen bzw. Aufwand und Ausgaben, aber nicht immer (z. B. Abschreibungen = Aufwand, aber keine Ausgabe).', tips: [], reveal: [] },
        { id: 234, type: 'text', title: 'Liquidit\u00e4tsplan', q: 'Am detailliertesten ist der Liquidit\u00e4tsplan, der auf kurze Zeitr\u00e4ume (Tage, Wochen) ausgerichtet ist. Nennen Sie die Kennzahl sowie das geeignetere Instrument zur \u00dcberwachung der Liquidit\u00e4t. (Stichw\u00f6rter.)', keywords: ['Liquidit\u00e4tsgrad','Liquidit\u00e4tsplan','Geldflussrechnung','Cashflow'], solution: 'Kennzahl: Liquidit\u00e4tsgrad (z. B. Quick Ratio). Geeigneteres Instrument: Liquidit\u00e4tsplan (Geldflussrechnung), da er die zeitliche Komponente ber\u00fccksichtigt.', tips: [], reveal: [] }
      ],
      learningData: null
    }
  ],

  // ============================================================
  // GLOSSARY
  // ============================================================
  glossary: [
    { term: 'Bilanz', def: 'Gegen\u00fcberstellung von Verm\u00f6gen (Aktiven) und Kapital (Passiven) an einem bestimmten Stichtag.' },
    { term: 'Erfolgsrechnung', def: 'Zeigt die erfolgswirksamen Vorg\u00e4nge (Aufwand, Ertrag) einer Rechnungsperiode und den Erfolg (Gewinn/Verlust).' },
    { term: 'Aktiven', def: 'Verm\u00f6gensseite der Bilanz: Umlaufverm\u00f6gen und Anlageverm\u00f6gen.' },
    { term: 'Passiven', def: 'Kapitalseite der Bilanz: Fremdkapital und Eigenkapital.' },
    { term: 'Eigenkapital', def: 'Reinverm\u00f6gen = Verm\u00f6gen (Aktiven) minus Schulden (Fremdkapital).' },
    { term: 'Fremdkapital', def: 'Schulden des Unternehmens gegen\u00fcber Dritten.' },
    { term: 'Aufwand', def: 'Wertverzehr (Ressourcenverbrauch) bei der Leistungserstellung. Mindert das Reinverm\u00f6gen.' },
    { term: 'Ertrag', def: 'Wertzuwachs durch Verkauf von G\u00fctern/Dienstleistungen. Mehrt das Reinverm\u00f6gen.' },
    { term: 'Gewinn', def: 'Positiver Erfolg: Ertrag ist gr\u00f6sser als Aufwand.' },
    { term: 'Verlust', def: 'Negativer Erfolg: Aufwand ist gr\u00f6sser als Ertrag.' },
    { term: 'Buchungssatz', def: 'Kurzformel zur Erfassung eines Gesch\u00e4ftsfalls: Soll an Haben.' },
    { term: 'Kontenrahmen', def: 'Musterordnung f\u00fcr Konten mit branchen\u00fcbergreifender G\u00fcltigkeit (z.B. KMU-Kontenrahmen).' },
    { term: 'Kontenplan', def: 'Vom Unternehmen abgeleitete Kontenstruktur basierend auf dem Kontenrahmen.' },
    { term: 'Abschreibung', def: 'Wertminderung von Anlageg\u00fctern \u00fcber die Nutzungsdauer.' },
    { term: 'Lineare Abschreibung', def: 'Gleich hoher Abschreibungsbetrag pro Jahr (von den Anschaffungskosten).' },
    { term: 'Degressive Abschreibung', def: 'Abschreibung als gleicher Prozentsatz vom jeweiligen Buchwert.' },
    { term: 'Wertberichtigung', def: 'Indirekte Methode der Erfassung von Abschreibungen \u00fcber ein Korrekturkonto.' },
    { term: 'Stille Reserven', def: 'Differenz zwischen internem und externem Eigenkapital durch Unterbewertung/\u00dcberbewertung.' },
    { term: 'Transitorische Abgrenzungen', def: 'Aktive (ARA) und Passive (PRA) Rechnungsabgrenzungen f\u00fcr periodengerechte Zuordnung.' },
    { term: 'R\u00fcckstellungen', def: 'Verbindlichkeiten f\u00fcr ungewisse Verpflichtungen oder drohende Verluste.' },
    { term: 'Cashflow', def: 'Geldfluss aus der Gesch\u00e4ftst\u00e4tigkeit; misst die Liquidit\u00e4tswirksamkeit.' },
    { term: 'Kostenrechnung', def: 'Internes Rechnungswesen zur Ermittlung der Kosten pro Kostentr\u00e4ger.' },
    { term: 'Einzelkosten', def: 'Kosten, die einem Produkt direkt zugeordnet werden k\u00f6nnen.' },
    { term: 'Gemeinkosten', def: 'Kosten, die nicht direkt zugeordnet werden k\u00f6nnen und \u00fcber Schl\u00fcssel verteilt werden.' },
    { term: 'Fixe Kosten', def: 'Kosten, die unabh\u00e4ngig von der Besch\u00e4ftigungsh\u00f6he anfallen.' },
    { term: 'Variable Kosten', def: 'Kosten, die sich mit der Besch\u00e4ftigungsh\u00f6he ver\u00e4ndern.' },
    { term: 'Deckungsbeitrag', def: 'Differenz aus Erl\u00f6s und variablen Kosten.' },
    { term: 'Break-even-Punkt', def: 'Nutzschwelle: Absatzmenge, bei der Erl\u00f6se gleich Gesamtkosten sind.' },
    { term: 'Kalkulation', def: 'Berechnung der Selbstkosten und des Verkaufspreises eines Produkts.' },
    { term: 'Zuschlagskalkulation', def: 'Kalkulationsverfahren mit Gemeinkostenzuschl\u00e4gen auf Einzelkosten.' },
    { term: 'Handelskalkulation', def: 'Kalkulation im Handel: Br\u00fccke zwischen Einstand und Nettobarerlos.' },
    { term: 'Bruttogewinn', def: 'Warenertrag minus Warenaufwand im Handelsunternehmen.' },
    { term: 'EBIT', def: 'Earnings before Interest and Taxes = Erfolg vor Zinsen und Steuern.' },
    { term: 'EBITDA', def: 'Earnings before Interest, Taxes, Depreciation and Amortization.' },
    { term: 'Eigenfinanzierungsgrad', def: 'Eigenkapital \u00d7 100 / Gesamtkapital.' },
    { term: 'Liquidit\u00e4tsgrad 2', def: '(Fl\u00fcssige Mittel + Forderungen) \u00d7 100 / kurzfristiges Fremdkapital.' },
    { term: 'Return on Investment', def: 'Gewinn \u00d7 100 / investiertes Kapital.' },
    { term: 'Kapitalumschlag', def: 'Umsatz / Kapital. Zeigt wie oft das Kapital pro Periode umgesetzt wird.' },
    { term: 'DuPont-Schema', def: 'Kennzahlensystem mit Kapitalrentabilit\u00e4t an der Spitze.' },
    { term: 'Investitionsrechnung', def: 'Verfahren zur Beurteilung der Vorteilhaftigkeit von Investitionen.' },
    { term: 'Kostenvergleichsrechnung', def: 'Statische Methode: Vergleich der j\u00e4hrlichen Kosten von Investitionsalternativen.' },
    { term: 'Gewinnvergleichsrechnung', def: 'Statische Methode: Vergleich der j\u00e4hrlichen Gewinne von Investitionsalternativen.' },
    { term: 'Amortisationsrechnung', def: 'Pay-back-Methode: Berechnung der R\u00fcckflussdauer einer Investition.' },
    { term: 'Budget', def: 'Finanzplan f\u00fcr eine zuk\u00fcnftige Periode auf Basis von Sch\u00e4tzungen.' },
    { term: 'Soll-Ist-Vergleich', def: 'Controlling-Instrument: Vergleich von geplanten und tats\u00e4chlichen Werten.' }
  ]
};
