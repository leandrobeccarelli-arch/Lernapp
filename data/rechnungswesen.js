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
    // Kapitel 1: Übersicht über das Fachgebiet (Fragen 1-3)
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Eine Übersicht über das Rechnungswesen mit Haupt- und Nebenbereichen geben.',
            'Einige wichtige Zwillingsbegriffe nennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aufgaben, Instrumente und Bereiche des Rechnungswesens', def: 'Kernthemen dieses Kapitels' }
          ]},
          { type: 'concept', title: 'Das Rechnungswesen als Servicefunktion', content: 'Das Rechnungswesen erfüllt im Unternehmen eine Servicefunktion und dient der Unternehmensführung als wichtige Entscheidungsgrundlage. Es wird eingesetzt als Planungs- und Entscheidungsinstrument, Kontrollinstrument und Führungsinstrument.', highlight: 'Servicefunktion für Planung, Entscheidung, Kontrolle und Führung' },
          { type: 'table', title: 'Bereiche des Rechnungswesens', headers: ['Hilfsbereiche', 'Hauptbereiche', 'Ergänzungen / Auswertung'], rows: [
            ['Debitorenbuchhaltung', 'Finanzbuchhaltung (FIBU)', 'Konzernrechnung'],
            ['Kreditorenbuchhaltung', 'Betriebsbuchhaltung (BEBU)', 'Bilanz- und Erfolgsanalyse'],
            ['Kassenbuchhaltung', 'Erfassung Geschäftsverkehr', 'Planung, Budgetierung'],
            ['Lohnbuchhaltung', 'Erfolgsrechnung, Bilanz', 'Controlling, Statistiken'],
            ['Anlagenbuchhaltung', 'BAB, Kalkulation', 'Sonderrechnungen'],
            ['Lagerbuchhaltung', 'Break-even-Analysen', 'Investitionsrechnungen'],
            ['Inventur / Inventar', '', '']
          ]},
          { type: 'merke', title: 'Intern vs. Extern', content: 'Die Finanzbuchhaltung (externes RW) richtet sich an aussenstehende Anspruchsgruppen und dient vor allem zur Dokumentation. Die Betriebsbuchhaltung (internes RW) ist eine rein interne Rechnungslegung für Führungsaufgaben.' },
          { type: 'concept', title: 'Austausch mit den Märkten', content: 'Ein Unternehmen tauscht über Märkte Güter und Geld aus: Auf Beschaffungsmärkten ist es Nachfrager (Kauf gegen Geld), auf Absatzmärkten Anbieter (Verkauf gegen Geld). Auf Kapitalmärkten ist es sowohl Nachfrager als auch Anbieter.', highlight: 'Beschaffungsmarkt, Absatzmarkt, Kapitalmarkt' },
          { type: 'table', title: 'Wichtige Begriffspaare im Rechnungswesen', headers: ['Begriff', 'Erklärung'], rows: [
            ['Ausgaben / Einnahmen', 'Beziehen sich auf Geld. Ein Geldabgang ist eine Ausgabe, ein Geldzugang eine Einnahme.'],
            ['Aufwand / Ertrag', 'Begriffe der Erfolgsrechnung. Aufwand = Wertverzehr (mindert Reinvermögen), Ertrag = Wertzuwachs (mehrt Reinvermögen).'],
            ['Kosten / Leistungen', 'Analoge Begriffe zu Aufwand / Ertrag in der Betriebsbuchhaltung.'],
            ['Abgänge / Zugänge', 'Beziehen sich auf Bestände von Vermögens- oder Kapitalposten. Die Bilanz weist diese aus.']
          ]},
          { type: 'svg', title: 'Bereiche des Rechnungswesens', svg: '<svg viewBox="0 0 750 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="rwHilf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.12"/><stop offset="100%" stop-color="#059669" stop-opacity="0.04"/></linearGradient><linearGradient id="rwHaupt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.25"/><stop offset="100%" stop-color="#059669" stop-opacity="0.1"/></linearGradient><linearGradient id="rwErg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.15"/><stop offset="100%" stop-color="#059669" stop-opacity="0.06"/></linearGradient></defs><rect x="5" y="5" width="740" height="390" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="38" text-anchor="middle" font-size="18" font-weight="700" fill="#059669">Bereiche des Rechnungswesens</text><rect x="20" y="60" width="180" height="300" rx="10" fill="url(#rwHilf)" stroke="#059669" stroke-width="1.5"/><text x="110" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Hilfsbereiche</text><line x1="40" y1="98" x2="180" y2="98" stroke="#059669" stroke-width="1" stroke-opacity="0.4"/><text x="110" y="125" text-anchor="middle" font-size="12" fill="#374151">Lohnbuchhaltung</text><text x="110" y="155" text-anchor="middle" font-size="12" fill="#374151">Debitoren-</text><text x="110" y="170" text-anchor="middle" font-size="12" fill="#374151">buchhaltung</text><text x="110" y="200" text-anchor="middle" font-size="12" fill="#374151">Kreditoren-</text><text x="110" y="215" text-anchor="middle" font-size="12" fill="#374151">buchhaltung</text><text x="110" y="245" text-anchor="middle" font-size="12" fill="#374151">Anlagen-</text><text x="110" y="260" text-anchor="middle" font-size="12" fill="#374151">buchhaltung</text><text x="110" y="290" text-anchor="middle" font-size="12" fill="#374151">Kassenbuchhaltung</text><text x="110" y="320" text-anchor="middle" font-size="12" fill="#374151">Lagerbuchhaltung</text><text x="110" y="350" text-anchor="middle" font-size="12" fill="#374151">Inventur / Inventar</text><rect x="260" y="60" width="230" height="300" rx="10" fill="url(#rwHaupt)" stroke="#059669" stroke-width="2"/><text x="375" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Hauptbereiche</text><line x1="280" y1="98" x2="470" y2="98" stroke="#059669" stroke-width="1" stroke-opacity="0.4"/><rect x="278" y="110" width="194" height="105" rx="8" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1.5"/><text x="375" y="133" text-anchor="middle" font-size="13" font-weight="700" fill="#059669">FIBU</text><text x="375" y="150" text-anchor="middle" font-size="11" fill="#065f46">(extern)</text><text x="375" y="172" text-anchor="middle" font-size="11" fill="#374151">Bilanz</text><text x="375" y="189" text-anchor="middle" font-size="11" fill="#374151">Erfolgsrechnung</text><text x="375" y="206" text-anchor="middle" font-size="11" fill="#374151">Geldflussrechnung</text><rect x="278" y="225" width="194" height="105" rx="8" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1.5"/><text x="375" y="248" text-anchor="middle" font-size="13" font-weight="700" fill="#059669">BEBU</text><text x="375" y="265" text-anchor="middle" font-size="11" fill="#065f46">(intern)</text><text x="375" y="287" text-anchor="middle" font-size="11" fill="#374151">Kostenrechnung</text><text x="375" y="304" text-anchor="middle" font-size="11" fill="#374151">Kalkulation</text><text x="375" y="321" text-anchor="middle" font-size="11" fill="#374151">Break-even-Analysen</text><rect x="550" y="60" width="180" height="300" rx="10" fill="url(#rwErg)" stroke="#059669" stroke-width="1.5"/><text x="640" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Ergänzungen /</text><text x="640" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Auswertung</text><line x1="570" y1="112" x2="710" y2="112" stroke="#059669" stroke-width="1" stroke-opacity="0.4"/><text x="640" y="140" text-anchor="middle" font-size="12" fill="#374151">Planungsrechnung</text><text x="640" y="170" text-anchor="middle" font-size="12" fill="#374151">Kennzahlen</text><text x="640" y="200" text-anchor="middle" font-size="12" fill="#374151">Investitions-</text><text x="640" y="215" text-anchor="middle" font-size="12" fill="#374151">rechnung</text><text x="640" y="245" text-anchor="middle" font-size="12" fill="#374151">Konzernrechnung</text><text x="640" y="275" text-anchor="middle" font-size="12" fill="#374151">Bilanz- und</text><text x="640" y="290" text-anchor="middle" font-size="12" fill="#374151">Erfolgsanalyse</text><text x="640" y="320" text-anchor="middle" font-size="12" fill="#374151">Controlling</text><polygon points="205,210 220,200 220,205 240,205 240,215 220,215 220,220" fill="#059669" fill-opacity="0.6"/><polygon points="495,210 510,200 510,205 530,205 530,215 510,215 510,220" fill="#059669" fill-opacity="0.6"/></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das Rechnungswesen erfüllt eine Servicefunktion für Planung, Entscheidung, Kontrolle und Führung.',
            'Die Hauptbereiche sind die Finanzbuchhaltung und die Betriebsbuchhaltung.',
            'Ein einfaches Unternehmensmodell ordnet die Güter- und Geldflüsse über Beschaffungs-, Absatz- und Kapitalmärkte.',
            'Bestimmte Begriffspaare (wie Aufwand / Ertrag, Kosten / Leistungen) sind für das Fachgebiet zentral.'
          ]}
        ]
      }
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
          explanation: 'Nein. Bei sogenannten anlageintensiven Unternehmen ist diese Anordnung regelm\u00e4ssig anzutreffen. Sie folgt dem Gedanken: \u00abWas uns lang erhalten bleibt, kommt zürst.\u00bb',
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Eine Bilanz in der Gliederung gemäss Kontenrahmen KMU lesen.',
            'Wichtige Bilanzpositionen und die Zusammenhänge zwischen ihnen selbstständig erklären.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aktiven', def: 'Vermögensseite der Bilanz (links): Was ist an Vermögen vorhanden?' },
            { term: 'Passiven', def: 'Kapitalseite der Bilanz (rechts): Wer hat Kapital zur Verfügung gestellt?' },
            { term: 'Bilanzsumme', def: 'Total Aktiven = Total Passiven' },
            { term: 'Eigenkapital', def: 'Differenz zwischen Aktiven und Fremdkapital (Reinvermögen)' },
            { term: 'Fremdkapital', def: 'Schulden gegenüber Dritten' },
            { term: 'Umlaufvermögen', def: 'Kurzfristig verfügbare Vermögenswerte (Kasse, Post, Forderungen, Vorräte)' },
            { term: 'Anlagevermögen', def: 'Langfristig gebundene Vermögenswerte (Finanzanlagen, Mobile/Immobile Sachanlagen)' }
          ]},
          { type: 'concept', title: 'Grundgleichung der Bilanz', content: 'Die Bilanz zeigt das Vermögen (Aktiven) und das Kapital (Passiven) eines Unternehmens an einem bestimmten Stichtag. Es gilt immer:\n\nAktiven = Passiven\nAktiven = Fremdkapital + Eigenkapital\nEigenkapital = Aktiven - Fremdkapital\n\nDas Bilanzgleichgewicht ist immer gewahrt. Das Eigenkapital bringt die Bilanz zum Ausgleich.', highlight: 'Aktiven = Fremdkapital + Eigenkapital' },
          { type: 'merke', title: 'Zeitpunktrechnung', content: 'Die Bilanz ist eine Zeitpunktrechnung. Sie zeigt Vermögen, Schulden und Reinvermögen, die zu einem bestimmten Zeitpunkt vorhanden sind. Das Wort Bilanz stammt vom italienischen bilancia = Waage.' },
          { type: 'table', title: 'Grobgliederung der Bilanz (vier Blöcke)', headers: ['Aktiven (Vermögen)', 'Passiven (Kapital)'], rows: [
            ['Umlaufvermögen (UV): Flüssige Mittel, Forderungen, Vorräte, aktive RA', 'Kurzfristiges Fremdkapital (kfr. FK): Verbindlichkeiten L+L, Bankschulden kfr., passive RA'],
            ['Anlagevermögen (AV): Finanzanlagen, Mobile Sachanlagen, Immobile Sachanlagen', 'Langfristiges Fremdkapital (lfr. FK): Darlehen, Hypotheken, lfr. Rückstellungen'],
            ['', 'Eigenkapital (EK): Grund-/Stammkapital, Reserven, Gewinnvortrag, Jahresgewinn']
          ]},
          { type: 'svg', title: 'Bilanzstruktur (T-Konto)', svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="bAkt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.15"/><stop offset="100%" stop-color="#059669" stop-opacity="0.05"/></linearGradient><linearGradient id="bPas" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.25"/><stop offset="100%" stop-color="#059669" stop-opacity="0.1"/></linearGradient></defs><rect x="10" y="10" width="680" height="400" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="350" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#059669">Bilanz per 31.12.</text><line x1="350" y1="55" x2="350" y2="390" stroke="#059669" stroke-width="2"/><line x1="30" y1="80" x2="670" y2="80" stroke="#059669" stroke-width="1.5"/><text x="190" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="#065f46">Aktiven (Vermögen)</text><text x="510" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="#065f46">Passiven (Kapital)</text><rect x="40" y="90" width="300" height="120" rx="8" fill="url(#bAkt)"/><text x="190" y="115" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Umlaufvermögen (UV)</text><text x="190" y="138" text-anchor="middle" font-size="12" fill="#374151">Flüssige Mittel</text><text x="190" y="156" text-anchor="middle" font-size="12" fill="#374151">Forderungen aus L+L</text><text x="190" y="174" text-anchor="middle" font-size="12" fill="#374151">Vorräte</text><text x="190" y="192" text-anchor="middle" font-size="12" fill="#374151">Aktive Rechnungsabgrenzung</text><rect x="40" y="220" width="300" height="120" rx="8" fill="url(#bAkt)"/><text x="190" y="245" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Anlagevermögen (AV)</text><text x="190" y="268" text-anchor="middle" font-size="12" fill="#374151">Finanzanlagen</text><text x="190" y="286" text-anchor="middle" font-size="12" fill="#374151">Mobile Sachanlagen</text><text x="190" y="304" text-anchor="middle" font-size="12" fill="#374151">Immobile Sachanlagen</text><text x="190" y="322" text-anchor="middle" font-size="12" fill="#374151">Immaterielle Werte</text><rect x="360" y="90" width="300" height="75" rx="8" fill="url(#bPas)"/><text x="510" y="115" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Kurzfristiges FK</text><text x="510" y="138" text-anchor="middle" font-size="12" fill="#374151">Verbindlichkeiten L+L</text><text x="510" y="156" text-anchor="middle" font-size="12" fill="#374151">Passive Rechnungsabgrenzung</text><rect x="360" y="175" width="300" height="75" rx="8" fill="url(#bPas)"/><text x="510" y="200" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Langfristiges FK</text><text x="510" y="223" text-anchor="middle" font-size="12" fill="#374151">Darlehen, Hypotheken</text><text x="510" y="241" text-anchor="middle" font-size="12" fill="#374151">Rückstellungen</text><rect x="360" y="260" width="300" height="80" rx="8" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/><text x="510" y="285" text-anchor="middle" font-size="14" font-weight="700" fill="#059669">Eigenkapital (EK)</text><text x="510" y="308" text-anchor="middle" font-size="12" fill="#374151">Aktienkapital, Reserven</text><text x="510" y="326" text-anchor="middle" font-size="12" fill="#374151">Gewinnvortrag, Jahresgewinn</text><rect x="40" y="355" width="300" height="35" rx="6" fill="#059669" fill-opacity="0.2"/><text x="190" y="378" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Total Aktiven</text><rect x="360" y="355" width="300" height="35" rx="6" fill="#059669" fill-opacity="0.2"/><text x="510" y="378" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Total Passiven</text><text x="350" y="378" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">=</text></svg>' },
          { type: 'concept', title: 'Goldene Bilanzregel und NUV', content: 'Langfristig gebundenes Vermögen (AV) muss durch langfristiges Kapital (lfr. FK + EK) gedeckt sein. Das Nettoumlaufvermögen (NUV) ergibt sich als Differenz aus UV und kfr. FK und sollte positiv sein.', highlight: 'NUV = Umlaufvermögen - kurzfristiges Fremdkapital > 0' },
          { type: 'table', title: 'Eigenkapital nach Rechtsform', headers: ['Rechtsform', 'Eigenkapitalpositionen'], rows: [
            ['Einzelunternehmen', 'Eigenkapital des Inhabers, Privat'],
            ['Kollektivgesellschaft', 'Kapital A, Kapital B, Kapital C usw.'],
            ['Aktiengesellschaft (AG)', 'Aktienkapital, Partizipationskapital, Reserven, Gewinnvortrag/Verlustvortrag, Jahresgewinn'],
            ['GmbH', 'Stammkapital, Reserven, Gewinnvortrag, Jahresgewinn']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die Bilanz ist eine summarische Übersicht zu Vermögen, Fremd- und Eigenkapital an einem Stichtag.',
            'Aktiven = Passiven, Aktiven = FK + EK, EK = Aktiven - FK.',
            'Aktivseite zeigt die Zusammensetzung des Vermögens und wie das Kapital investiert wurde.',
            'Passivseite zeigt die Zusammensetzung des Kapitals und wie das Vermögen finanziert wurde.',
            'Das Eigenkapital ist die Differenz zwischen Vermögen und Schulden und trägt das unternehmerische Risiko.',
            'Die Bilanz wird in vier Blöcke gegliedert: UV, AV, kfr. FK, lfr. FK und EK.'
          ]}
        ]
      }
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
          keywords: ['Earnings','Interest','Taxes','Erfolg','Zinsen','Steürn','betrieblich'],
          solution: 'EBIT = Earnings before Interest and Taxes. Auf Deutsch: Erfolg vor Zinsen und Steürn. EBIT misst den betrieblichen Erfolg, unabh\u00e4ngig von der Art des Anlageverm\u00f6gens und der Finanzierungsstruktur bzw. vom Steürsystem.',
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Eine Erfolgsrechnung in der Gliederung gemäss Kontenrahmen KMU lesen und wichtige Positionen umschreiben.',
            'Den Aufbau einer mehrstufigen Erfolgsrechnung verstehen und die Zwischenresultate interpretieren.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aufwand', def: 'Wertverzehr (Ressourcenverbrauch), mindert das Reinvermögen.' },
            { term: 'Ertrag', def: 'Wertzuwachs, mehrt das Reinvermögen.' },
            { term: 'Erfolg', def: 'Differenz zwischen Ertrag und Aufwand. Gewinn (positiv) oder Verlust (negativ).' },
            { term: 'EBITDA', def: 'Betriebsergebnis vor Abschreibungen, Zinsen und Steürn.' },
            { term: 'EBIT', def: 'Betriebsergebnis vor Zinsen und Steürn.' },
            { term: 'EBT', def: 'Betriebsergebnis vor Steürn.' }
          ]},
          { type: 'merke', title: 'Zeitraumrechnung', content: 'Die Erfolgsrechnung ist eine Zeitraumrechnung. Sie zeigt die erfolgswirksamen Vorgänge während einer bestimmten Periode.' },
          { type: 'concept', title: 'Stufung der Erfolgsrechnung', content: 'Im betrieblichen Bereich werden Aufwände und Erträge aus der eigentlichen Geschäftstätigkeit erfasst. Im neutralen Bereich betriebsfremde, periodenfremde oder ausserordentliche Erfolge.\n\nBetriebsgewinn + Neutraler Erfolg = Unternehmensgewinn', highlight: 'Betriebsgewinn + Neutraler Erfolg = Unternehmensgewinn' },
          { type: 'svg', title: 'Aufbau der Erfolgsrechnung', svg: '<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><marker id="arER" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#059669"/></marker></defs><rect x="10" y="10" width="680" height="380" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="350" y="42" text-anchor="middle" font-size="18" font-weight="700" fill="#059669">Mehrstufige Erfolgsrechnung</text><rect x="40" y="60" width="280" height="40" rx="8" fill="#059669" fill-opacity="0.12"/><text x="180" y="85" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Nettoerlöse (Umsatz)</text><rect x="380" y="60" width="280" height="40" rx="8" fill="#dc2626" fill-opacity="0.1"/><text x="520" y="85" text-anchor="middle" font-size="14" font-weight="600" fill="#991b1b">Material-/Warenaufwand</text><line x1="180" y1="100" x2="180" y2="120" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><line x1="520" y1="100" x2="350" y2="120" stroke="#991b1b" stroke-width="1.5" stroke-dasharray="4,3"/><rect x="200" y="120" width="300" height="32" rx="6" fill="#059669" fill-opacity="0.08"/><text x="350" y="141" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">= Bruttoergebnis (Bruttogewinn)</text><line x1="350" y1="152" x2="350" y2="168" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><text x="150" y="178" text-anchor="end" font-size="12" fill="#991b1b">- Personalaufwand</text><rect x="200" y="168" width="300" height="28" rx="6" fill="#059669" fill-opacity="0.08"/><text x="350" y="187" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">= Bruttoergebnis 2</text><line x1="350" y1="196" x2="350" y2="208" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><text x="150" y="222" text-anchor="end" font-size="12" fill="#991b1b">- Übriger Betriebsaufwand</text><rect x="200" y="210" width="300" height="28" rx="6" fill="#059669" fill-opacity="0.12"/><text x="350" y="229" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">= EBITDA</text><line x1="350" y1="238" x2="350" y2="250" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><text x="150" y="264" text-anchor="end" font-size="12" fill="#991b1b">- Abschreibungen</text><rect x="200" y="252" width="300" height="28" rx="6" fill="#059669" fill-opacity="0.15"/><text x="350" y="271" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">= EBIT (Betriebserfolg)</text><line x1="350" y1="280" x2="350" y2="292" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><text x="150" y="306" text-anchor="end" font-size="12" fill="#6b7280">+/- Finanzerfolg</text><rect x="200" y="294" width="300" height="28" rx="6" fill="#059669" fill-opacity="0.15"/><text x="350" y="313" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">= EBT</text><line x1="350" y1="322" x2="350" y2="334" stroke="#059669" stroke-width="1.5" marker-end="url(#arER)"/><text x="150" y="348" text-anchor="end" font-size="12" fill="#6b7280">+/- Neutraler Erfolg, - Steürn</text><rect x="200" y="340" width="300" height="36" rx="8" fill="#059669" fill-opacity="0.25" stroke="#059669" stroke-width="1.5"/><text x="350" y="364" text-anchor="middle" font-size="15" font-weight="700" fill="#059669">= Jahresgewinn / -verlust</text></svg>' },
          { type: 'table', title: 'Mehrstufige ER (Berichtsform)', headers: ['Stufe', 'Berechnung'], rows: [
            ['Betrieblicher Ertrag aus L+L', 'Nettoerl\u00f6se'],
            ['- Material-/Warenaufwand', '= Bruttoergebnis 1'],
            ['- Personalaufwand', '= Bruttoergebnis 2'],
            ['- Übriger Betriebsaufwand', '= EBITDA'],
            ['- Abschreibungen', '= EBIT'],
            ['+/- Finanzerfolg', '= EBT'],
            ['+/- Neutraler Erfolg, - Steürn', '= Jahresgewinn/-verlust']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die ER ist eine Zeitraumrechnung und weist den Erfolg (Gewinn/Verlust) aus.',
            'Aufwand = Wertverzehr, Ertrag = Wertzuwachs.',
            'Wichtige Zwischenergebnisse: EBITDA, EBIT und EBT.',
            'Branchentypische und branchenunabhängige Erfolgsposten werden unterschieden.'
          ]}
        ]
      }
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
          options: ['Die Bewertung der Aktiven','Die Gewinnverwendung','Die Er\u00f6ffnung der neün Periode','Die Abschreibungen'],
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
            { l: 'Barkauf von neün Laptops f\u00fcr die Aussendienstmitarbeiter', r: 'Geldabfluss, Investitionsbereich' },
            { l: 'Bankberierung des Aktienkapitals bei der Gr\u00fcndung', r: 'Geldzufluss, Finanzierungsbereich' },
            { l: 'Auszahlung von L\u00f6hnen', r: 'Geldabfluss, Gesch\u00e4ftsbereich' },
            { l: 'Tageseinnahmen f\u00fcr Barverkufe im Laden', r: 'Geldzufluss, Gesch\u00e4ftsbereich' },
            { l: 'Teilr\u00fcckzahlung einer Hypothek ab Bankkonto', r: 'Geldabfluss, Finanzierungsbereich' }
          ],
          options: ['Geldabfluss, Investitionsbereich','Geldzufluss, Finanzierungsbereich','Geldabfluss, Gesch\u00e4ftsbereich','Geldzufluss, Gesch\u00e4ftsbereich','Geldabfluss, Finanzierungsbereich'],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Zusammenhang zwischen Bilanz und Erfolgsrechnung erklären.',
            'Die Unterschiede zwischen erfolgswirksamen und -unwirksamen Geschäftsfällen darlegen.',
            'Den Rechnungszyklus einer Periode nachvollziehen.',
            'Den doppelten Erfolgsnachweis und die Erfolgsverwendung darstellen.',
            'Die Liquiditätswirksamkeit von Geschäftsfällen erkennen und die Berechnung des Cashflows vornehmen.'
          ]},
          { type: 'concept', title: 'Erfolgswirksam vs. erfolgsunwirksam', content: 'Erfolgswirksame Vorgänge betreffen je einen Erfolgs- und einen Bilanzposten und verändern einseitig das Reinvermögen. Erfolgsunwirksame Vorgänge betreffen nur Bilanzposten (Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung/-Minderung).', highlight: 'Vorgänge, die als Aufwand bzw. Ertrag erfasst werden, sind erfolgswirksam.' },
          { type: 'table', title: '4 Fälle von Geschäftsvorgängen', headers: ['Fall', 'Posten', 'Wirkung'], rows: [
            ['1', 'Bilanzposten / Bilanzposten', 'Erfolgsunwirksam (z.B. Aktivtausch)'],
            ['2', 'Erfolgsposten / Bilanzposten', 'Erfolgswirksam (z.B. Aufwand)'],
            ['3', 'Bilanzposten / Erfolgsposten', 'Erfolgswirksam (z.B. Ertrag)'],
            ['4', 'Erfolgsposten / Erfolgsposten', 'Erfolgsunwirksam (selten)']
          ]},
          { type: 'concept', title: 'Rechnungszyklus', content: 'Ein Rechnungszyklus umfasst drei Phasen:\n1. Eröffnung: Anfangsbestände auf Bilanzkonten vortragen, Erfolgskonten einrichten\n2. Laufende Erfassung: Geschäftsfälle während der Periode buchen\n3. Abschluss: Konten saldieren, Erfolgsrechnung und Schlussbilanz I erstellen', highlight: 'Eröffnung - Laufende Erfassung - Abschluss' },
          { type: 'svg', title: 'Zusammenhang Bilanz und Erfolgsrechnung', svg: '<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><marker id="arZH" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#059669"/></marker></defs><rect x="10" y="10" width="700" height="360" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="360" y="42" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">Doppelter Erfolgsnachweis</text><rect x="30" y="60" width="300" height="200" rx="10" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1.5"/><text x="180" y="82" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Schlussbilanz I</text><line x1="180" y1="90" x2="180" y2="250" stroke="#059669" stroke-width="1.5"/><line x1="40" y1="95" x2="320" y2="95" stroke="#059669" stroke-width="1"/><text x="110" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Aktiven</text><text x="250" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Passiven</text><text x="110" y="135" text-anchor="middle" font-size="11" fill="#374151">UV</text><text x="250" y="135" text-anchor="middle" font-size="11" fill="#374151">kfr. FK</text><text x="110" y="155" text-anchor="middle" font-size="11" fill="#374151">AV</text><text x="250" y="155" text-anchor="middle" font-size="11" fill="#374151">lfr. FK</text><rect x="195" y="175" width="120" height="35" rx="6" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="255" y="197" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">EK inkl. Erfolg</text><text x="255" y="245" text-anchor="middle" font-size="11" fill="#065f46">Erfolg = Δ EK</text><rect x="390" y="60" width="300" height="200" rx="10" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1.5"/><text x="540" y="82" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Erfolgsrechnung</text><line x1="540" y1="90" x2="540" y2="250" stroke="#059669" stroke-width="1.5"/><line x1="400" y1="95" x2="680" y2="95" stroke="#059669" stroke-width="1"/><text x="470" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="#991b1b">Aufwand</text><text x="610" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Ertrag</text><text x="470" y="135" text-anchor="middle" font-size="11" fill="#374151">Warenaufwand</text><text x="610" y="135" text-anchor="middle" font-size="11" fill="#374151">Warenertrag</text><text x="470" y="155" text-anchor="middle" font-size="11" fill="#374151">Personalaufwand</text><text x="610" y="155" text-anchor="middle" font-size="11" fill="#374151">Finanzertrag</text><text x="470" y="175" text-anchor="middle" font-size="11" fill="#374151">Raumaufwand</text><text x="610" y="175" text-anchor="middle" font-size="11" fill="#374151">Übr. Ertrag</text><rect x="400" y="195" width="130" height="35" rx="6" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="465" y="217" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">Gewinn</text><text x="540" y="245" text-anchor="middle" font-size="11" fill="#065f46">Erfolg = Ertrag − Aufwand</text><path d="M 255 215 Q 255 310 360 310 Q 465 310 465 235" stroke="#059669" stroke-width="2" fill="none" marker-end="url(#arZH)"/><path d="M 465 235 Q 465 310 360 310 Q 255 310 255 215" stroke="#059669" stroke-width="2" fill="none" marker-end="url(#arZH)"/><rect x="295" y="295" width="130" height="28" rx="6" fill="#fff" stroke="#059669" stroke-width="1.5"/><text x="360" y="314" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">Gleicher Erfolg!</text><text x="360" y="355" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Ertrag − Aufwand = Veränderung Eigenkapital</text></svg>' },
          { type: 'concept', title: 'Doppelter Erfolgsnachweis', content: 'Der Erfolg lässt sich beim Abschluss doppelt nachweisen: In der Erfolgsrechnung (Ertrag minus Aufwand) und in der Schlussbilanz I (Aktiven minus Passiven = Eigenkapital). Die Schlussbilanz II entsteht nach der Erfolgsverwendung.', highlight: 'Erfolg = Ertrag - Aufwand = Veränderung des Eigenkapitals' },
          { type: 'concept', title: 'Gewinnverwendung und Verlustdeckung', content: 'Bei Gewinn: Rückbehalt (Thesaurierung) und/oder Ausschüttung. Bei Verlust: Ausweis und Vortrag, Deckung aus Reserven (AG, GmbH) oder Kapitalreduktion.', highlight: 'Selbstfinanzierung durch zurückbehaltene Gewinne' },
          { type: 'concept', title: 'Liquiditätswirksamkeit', content: 'Liquiditätswirksame Geschäftsvorgänge verändern die flüssigen Mittel (Kasse, Post, Bank). Liquiditätsunwirksame haben keinen Einfluss auf die flüssigen Mittel. Zwei wichtige finanzwirtschaftliche Ziele: Liquidität (Zahlungsfähigkeit) und Rentabilität (Verhältnis Gewinn zu Kapital).', highlight: 'Liquidität ist die Luft zum Atmen, Rentabilität die Nahrung zum Überleben.' },
          { type: 'concept', title: 'Geldflussrechnung (Cashflow)', content: 'Die Geldflussrechnung erklärt die Veränderung der flüssigen Mittel während einer Periode. Sie zeigt den Geldzu-/-abfluss in drei Bereichen: Geschäftsbereich (= Cashflow), Investitionsbereich, Finanzierungsbereich. Der Cashflow misst die Liquiditätswirksamkeit von Erfolgsvorgängen.', highlight: 'Cashflow = Gewinn + Abschreibungen (vereinfacht)' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Erfolgswirksame Vorgänge betreffen Erfolgs- und Bilanzposten und verändern das Reinvermögen.',
            'Der Rechnungszyklus umfasst Eröffnung, laufende Erfassung und Abschluss.',
            'Der Erfolg lässt sich doppelt nachweisen: in der ER und in der Schlussbilanz I.',
            'Die Geldflussrechnung zeigt den Cashflow in drei Bereichen.',
            'Liquidität und Rentabilität sind die zwei zentralen finanzwirtschaftlichen Ziele.'
          ]}
        ]
      }
    },

    // ============================================================
    // Kapitel 5: Buchführung (Fragen 33-43)
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
          keywords: ['Musterordnung','ableiten','branchenübergreifend','individüll','Unternehmen'],
          solution: 'Der Kontenrahmen ist eine Musterordnung f\u00fcr Konten mit branchen\u00fcbergreifender G\u00fcltigkeit. Der Kontenplan wird vom Unternehmen aus dem Kontenrahmen abgeleitet und enth\u00e4lt die individüll verwendeten Konten.',
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Das Prinzip der doppelten Buchführung anwenden.',
            'Erfassungstechniken in der Praxis verstehen.',
            'Die Begriffe Kontenrahmen und Kontenplan erklären.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Soll', def: 'Linke Seite eines Kontos.' },
            { term: 'Haben', def: 'Rechte Seite eines Kontos.' },
            { term: 'Saldo', def: 'Differenz zwischen stärkerer und schwächerer Kontenseite.' },
            { term: 'Buchungssatz', def: 'Übersetzung eines Geschäftsfalls in die Buchhaltungssprache: Soll an Haben.' },
            { term: 'Journal', def: 'Chronologische Aufzeichnung aller Buchungen.' },
            { term: 'Hauptbuch', def: 'Sachliche Ordnung aller Buchungen auf Konten.' },
            { term: 'Kontenrahmen KMU', def: 'Branchenübergreifende Musterordnung der Konten in der Schweiz.' }
          ]},
          { type: 'concept', title: 'Vier Kontenarten', content: 'Die doppelte Buchführung beruht auf vier Kontenarten:\n- Aktivkonten (für die Aktiven): AB im Soll, Zunahmen im Soll, Abnahmen im Haben\n- Passivkonten (für die Passiven): AB im Haben, Zunahmen im Haben, Abnahmen im Soll\n- Aufwandskonten: Zunahmen im Soll, Saldo im Haben\n- Ertragskonten: Zunahmen im Haben, Saldo im Soll', highlight: 'Jeder Geschäftsfall wird in zwei Konten verbucht: einmal im Soll und einmal im Haben.' },
          { type: 'merke', title: 'Grundprinzip', content: 'Total Soll = Total Haben. Es wird immer zürst das Sollkonto und dann das Habenkonto genannt. Zwischen den Konten schreibt man / oder an.' },
          { type: 'concept', title: 'Erfassungsschritte', content: '1. Keine Buchung ohne Beleg (oberstes Gebot)\n2. Kontierung/Buchungssatz: Belege werden mit Kontierungsstempel versehen\n3. Erfassung im Buchhaltungsprogramm: Journal und Hauptbuch', highlight: 'Keine Buchung ohne Beleg!' },
          { type: 'concept', title: 'Kontenrahmen und Kontenplan', content: 'Ein Kontenplan ist das Verzeichnis der in einem Unternehmen verwendeten Konten. Die meisten Kontenpläne beruhen auf einem Kontenrahmen (Musterordnung). In der Schweiz gilt der Kontenrahmen KMU branchenübergreifend.', highlight: 'Kontenrahmen KMU = branchenübergreifende Musterordnung' },
          { type: 'svg', title: 'Die vier Kontenarten und ihre Buchungsregeln', svg: '<svg viewBox="0 0 750 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="kaS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669" stop-opacity="0.25"/><stop offset="100%" stop-color="#059669" stop-opacity="0.05"/></linearGradient><linearGradient id="kaH" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669" stop-opacity="0.05"/><stop offset="100%" stop-color="#059669" stop-opacity="0.25"/></linearGradient></defs><rect x="5" y="5" width="740" height="410" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="18" font-weight="700" fill="#059669">Die vier Kontenarten und ihre Buchungsregeln</text><rect x="20" y="50" width="345" height="165" rx="10" fill="url(#kaS)" stroke="#059669" stroke-width="1.5"/><text x="192" y="72" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Aktivkonto</text><line x1="192" y1="80" x2="192" y2="210" stroke="#059669" stroke-width="1.5"/><line x1="30" y1="80" x2="355" y2="80" stroke="#059669" stroke-width="1"/><text x="111" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Soll</text><text x="273" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Haben</text><text x="111" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">Anfangsbestand</text><text x="273" y="118" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><text x="111" y="140" text-anchor="middle" font-size="11" fill="#374151">Zunahme</text><text x="273" y="165" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Saldo</text><rect x="270" y="155" width="80" height="18" rx="4" fill="#059669" fill-opacity="0.1"/><text x="111" y="195" text-anchor="middle" font-size="10" fill="#065f46">stärkere Seite</text><rect x="385" y="50" width="345" height="165" rx="10" fill="url(#kaH)" stroke="#059669" stroke-width="1.5"/><text x="557" y="72" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Passivkonto</text><line x1="557" y1="80" x2="557" y2="210" stroke="#059669" stroke-width="1.5"/><line x1="395" y1="80" x2="720" y2="80" stroke="#059669" stroke-width="1"/><text x="476" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Soll</text><text x="638" y="96" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Haben</text><text x="476" y="118" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><text x="638" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">Anfangsbestand</text><text x="638" y="140" text-anchor="middle" font-size="11" fill="#374151">Zunahme</text><rect x="470" y="155" width="80" height="18" rx="4" fill="#059669" fill-opacity="0.1"/><text x="510" y="165" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Saldo</text><text x="638" y="195" text-anchor="middle" font-size="10" fill="#065f46">stärkere Seite</text><rect x="20" y="235" width="345" height="165" rx="10" fill="url(#kaS)" stroke="#059669" stroke-width="1.5"/><text x="192" y="257" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Aufwandskonto</text><line x1="192" y1="265" x2="192" y2="395" stroke="#059669" stroke-width="1.5"/><line x1="30" y1="265" x2="355" y2="265" stroke="#059669" stroke-width="1"/><text x="111" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Soll</text><text x="273" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Haben</text><text x="111" y="303" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">Zunahme</text><text x="273" y="303" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><rect x="270" y="340" width="80" height="18" rx="4" fill="#059669" fill-opacity="0.1"/><text x="310" y="350" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Saldo</text><text x="111" y="380" text-anchor="middle" font-size="10" fill="#065f46">stärkere Seite</text><rect x="385" y="235" width="345" height="165" rx="10" fill="url(#kaH)" stroke="#059669" stroke-width="1.5"/><text x="557" y="257" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Ertragskonto</text><line x1="557" y1="265" x2="557" y2="395" stroke="#059669" stroke-width="1.5"/><line x1="395" y1="265" x2="720" y2="265" stroke="#059669" stroke-width="1"/><text x="476" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Soll</text><text x="638" y="281" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Haben</text><text x="476" y="303" text-anchor="middle" font-size="11" fill="#374151">Abnahme</text><text x="638" y="303" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">Zunahme</text><rect x="470" y="340" width="80" height="18" rx="4" fill="#059669" fill-opacity="0.1"/><text x="510" y="350" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Saldo</text><text x="638" y="380" text-anchor="middle" font-size="10" fill="#065f46">stärkere Seite</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die doppelte Buchführung beruht auf vier Kontenarten: Aktiv-, Passiv-, Aufwands- und Ertragskonten.',
            'Ein Konto ist eine zweiseitige Rechnung (Soll links, Haben rechts).',
            'Der Saldo ist der Überschuss der stärkeren über die schwächere Kontenseite.',
            'Jeder Geschäftsfall wird in zwei Konten gebucht (Soll an Haben).',
            'Der Kontenrahmen KMU ist die Musterordnung für Schweizer Unternehmen.'
          ]}
        ]
      }
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
            { s: 'Laut Bewertungsvorschriften des OR ist eine Unter- bzw. \u00dcberbewertung der Aktiven mit R\u00fccksicht auf das daürnde Gedeihen des Unternehmens erlaubt.', c: true },
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die rechtlichen Grundlagen des Rechnungswesens (Rechnungslegungs- und Bewertungsvorschriften) verstehen.',
            'Die wichtigsten Bewertungsgrundsätze nennen und in ihren Auswirkungen auf den Jahresabschluss verstehen.',
            'Die Präsentation des Jahresabschlusses aufzeigen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Rechnungslegung', def: 'Darstellung der wirtschaftlichen und finanziellen Lage des Unternehmens durch Jahresrechnung.' },
            { term: 'Jahresrechnung', def: 'Besteht aus Bilanz und Erfolgsrechnung, je nach Rechtsform plus Anhang und Geldflussrechnung.' },
            { term: 'Jahresabschluss', def: 'Erstellung der Jahresrechnung am Ende des Geschäftsjahrs.' },
            { term: 'Bewertungsgrundsätze', def: 'Prinzip der Unternehmensführung, Stetigkeitsprinzip und Vorsichtsprinzip mit Konkretisierungen.' }
          ]},
          { type: 'concept', title: 'Rechnungslegungsrecht (OR)', content: 'Das Rechnungslegungsrecht findet sich im 32. Titel des OR und gliedert sich in fünf Abschnitte:\n1. Allgemeine Bestimmungen (OR 957-958f)\n2. Jahresrechnung (OR 959-960e)\n3. Rechnungslegung für grössere Unternehmen\n4. Abschluss nach anerkanntem Standard\n5. Konzernrechnung', highlight: 'OR 957-963b: 5 Abschnitte des Rechnungslegungsrechts' },
          { type: 'table', title: 'Präsentation des Abschlusses', headers: ['Rechtsform', 'Bestandteile'], rows: [
            ['Einzelunternehmen / Personengesellschaft (klein)', 'Jahresrechnung: Bilanz + Erfolgsrechnung'],
            ['Grössere Unternehmen (3. Abschnitt OR)', 'Geschäftsbericht: Lagebericht + Jahresrechnung (Bilanz, ER, Anhang, ggf. Geldflussrechnung)'],
            ['Mit anerkanntem Standard', '+ Abschluss nach anerkanntem Standard zur Rechnungslegung'],
            ['Konzern', '+ Konzernrechnung']
          ]},
          { type: 'merke', title: 'Bewertungsgrundsätze', content: 'Vorsichtsprinzip: Aktiven eher unter-, Fremdkapital eher überbewerten. Konkretisierungen: Realisationsprinzip, Imparitätsprinzip und Niederstwertprinzip. Stetigkeitsprinzip: Gleiche Bewertungsmethoden beibehalten.' },
          { type: 'svg', title: 'Bewertungsgrundsätze nach OR', svg: '<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="bgTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.25"/><stop offset="100%" stop-color="#059669" stop-opacity="0.1"/></linearGradient><linearGradient id="bgSub" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.15"/><stop offset="100%" stop-color="#059669" stop-opacity="0.05"/></linearGradient></defs><rect x="5" y="5" width="690" height="340" rx="12" fill="none" stroke="#059669" stroke-width="2"/><rect x="220" y="20" width="260" height="45" rx="10" fill="url(#bgTop)" stroke="#059669" stroke-width="2"/><text x="350" y="49" text-anchor="middle" font-size="15" font-weight="700" fill="#059669">Bewertungsgrundsätze</text><line x1="350" y1="65" x2="350" y2="95" stroke="#059669" stroke-width="2"/><line x1="200" y1="95" x2="500" y2="95" stroke="#059669" stroke-width="2"/><line x1="200" y1="95" x2="200" y2="115" stroke="#059669" stroke-width="2"/><line x1="500" y1="95" x2="500" y2="115" stroke="#059669" stroke-width="2"/><rect x="95" y="115" width="210" height="45" rx="8" fill="url(#bgTop)" stroke="#059669" stroke-width="1.5"/><text x="200" y="143" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Vorsichtsprinzip</text><rect x="395" y="115" width="210" height="60" rx="8" fill="url(#bgSub)" stroke="#059669" stroke-width="1.5"/><text x="500" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Stetigkeitsprinzip</text><text x="500" y="160" text-anchor="middle" font-size="10" fill="#374151">Gleiche Bewertungsmethoden</text><text x="500" y="172" text-anchor="middle" font-size="10" fill="#374151">beibehalten</text><line x1="200" y1="160" x2="200" y2="190" stroke="#059669" stroke-width="1.5"/><line x1="100" y1="190" x2="350" y2="190" stroke="#059669" stroke-width="1.5"/><line x1="100" y1="190" x2="100" y2="210" stroke="#059669" stroke-width="1.5"/><line x1="225" y1="190" x2="225" y2="210" stroke="#059669" stroke-width="1.5"/><line x1="350" y1="190" x2="350" y2="210" stroke="#059669" stroke-width="1.5"/><rect x="20" y="210" width="160" height="65" rx="8" fill="url(#bgSub)" stroke="#059669" stroke-width="1.5"/><text x="100" y="233" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Realisationsprinzip</text><text x="100" y="252" text-anchor="middle" font-size="10" fill="#374151">Gewinne erst bei</text><text x="100" y="264" text-anchor="middle" font-size="10" fill="#374151">Realisation erfassen</text><rect x="145" y="210" width="160" height="65" rx="8" fill="url(#bgSub)" stroke="#059669" stroke-width="1.5"/><text x="225" y="233" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Imparitätsprinzip</text><text x="225" y="252" text-anchor="middle" font-size="10" fill="#374151">Verluste sofort erfassen,</text><text x="225" y="264" text-anchor="middle" font-size="10" fill="#374151">Gewinne erst bei Realisation</text><rect x="270" y="210" width="160" height="65" rx="8" fill="url(#bgSub)" stroke="#059669" stroke-width="1.5"/><text x="350" y="233" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Niederstwertprinzip</text><text x="350" y="252" text-anchor="middle" font-size="10" fill="#374151">Aktiven zum niedrigeren</text><text x="350" y="264" text-anchor="middle" font-size="10" fill="#374151">Wert bewerten</text><rect x="20" y="295" width="660" height="38" rx="8" fill="#059669" fill-opacity="0.08"/><text x="350" y="319" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Grundsatz: Aktiven eher unter-, Fremdkapital eher überbewerten → vorsichtige Darstellung</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Das OR regelt die Rechnungslegung in 5 Abschnitten.',
            'Die allgemeinen Bestimmungen regeln Buchführungspflicht, Grundsätze und Bestandteile.',
            'Bewertungsgrundsätze: Vorsichtsprinzip, Stetigkeitsprinzip, Realisationsprinzip.',
            'Die Präsentation hängt von Rechtsform und Grösse des Unternehmens ab.'
          ]}
        ]
      }
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
          keywords: ['Abschreibung','Wertverzehr','Nutzungsdaür','Aufwand'],
          solution: 'Der Wertverzehr wird durch j\u00e4hrliche Abschreibungen (Aufwand) ber\u00fccksichtigt, die den Buchwert des Anlageguts \u00fcber die Nutzungsdaür reduzieren.',
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
          solution: 'Abschreibungen sind ein Aufwand, dem keine aktülle Ausgabe gegen\u00fcbersteht. Die Ausgabe (Anschaffung) wurde fr\u00fcher get\u00e4tigt. Abschreibungen sind daher nicht liquidit\u00e4tswirksam.',
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
          q: 'Ermitteln Sie den Abschreibungsbetrag pro Jahr gem\u00e4ss der linearen Abschreibungsmethode.\n\nNr. 1: Anschaffungskosten CHF 14 000, Nutzungsdaür 5 Jahre, Endwert 0.\nNr. 2: Anschaffungskosten CHF 10 800, Nutzungsdaür 8 Jahre, Endwert CHF 2 000.\nNr. 3: Anschaffungskosten CHF 29 000, Nutzungsdaür 3 Jahre, Endwert CHF 5 000.',
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
          q: 'H. Holzer er\u00f6ffnet eine Schreinerei. Er kauft Werkzeuge im Gesamtwert von CHF 20 000.\u2013. Die voraussichtliche Nutzungsdaür ist 4 Jahre und der gesch\u00e4tzte Endwert (Restwert am Ende der Nutzungsdaür) betr\u00e4gt CHF 0.\u2013.\n\nA) Lineare Abschreibung: Wie hoch ist der j\u00e4hrliche Abschreibungsbetrag?\nB) Abschreibung vom Buchwert (40% degressiv): Wie hoch ist die Abschreibung im Jahr 1?',
          fields: [
            { label: 'A) Linear: Abschreibung/Jahr', answer: 5000, unit: 'CHF' },
            { label: 'B) Degressiv Jahr 1 (40%)', answer: 8000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 60, type: 'calc',
          title: 'Buchwert in der Betriebsbuchhaltung',
          q: 'Ein Getr\u00e4nkehersteller f\u00fchrt eine Abf\u00fcllanlage in der Anlagebuchhaltung. Sie wurde im Januar des Jahres 1 angeschafft. In der FIBU wird die Abf\u00fcllanlage mit 40% degressiv vom Buchwert abgeschrieben. In der BEBU: Nutzungsdaür von 6 Jahren (Restwert null), linear ab.\n\nA) Wie hoch waren die Anschaffungskosten, wenn der Buchwert Ende Jahr 3 in der FIBU CHF 207 360.\u2013 betr\u00e4gt?\nB) Berechnen Sie den Buchwert in der BEBU am 31.12. im Jahr 3.',
          fields: [
            { label: 'A) Anschaffungskosten', answer: 960000, unit: 'CHF' },
            { label: 'B) Buchwert BEBU Ende Jahr 3', answer: 480000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Bedeutung und Wirkung von Bewertungen erklären.',
            'Wichtige Vorgänge der Wertanpassung nennen.',
            'Die Wirkungsweise der verschiedenen Abschreibungsmethoden (linear, degressiv) erkennen und Abschreibungen sowohl direkt als auch indirekt verbuchen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Bewertung', def: 'Einer Sache, einem Vorgang usw. einen Wert zuordnen. In der Buchhaltung werden Werte in Geldeinheiten gemessen.' },
            { term: 'Wertermittlung', def: 'Durch Ablesen/Zählen (eindeutig fest) oder durch Bewertung (nicht ohne Weiteres fest).' },
            { term: 'Inventur', def: 'Tätigkeit der Bestandsaufnahme: zählen, messen, wiegen, bewerten.' },
            { term: 'Inventar', def: 'Detailliertes Verzeichnis sämtlicher Vermögensteile und Schulden an einem Stichtag.' },
            { term: 'Abschreibung', def: 'Wertanpassung von Sachanlagen während der Nutzungsdaür.' }
          ]},
          { type: 'concept', title: 'Wertanpassung durch Abschreibungen', content: 'Sachanlagen werden beim Zugang aktiviert (zu Anschaffungskosten). Über die Nutzungsdaür müssen sie im Wert angepasst werden. Abschreibungen haben drei Aufgaben:\n1. Verteilung der Anschaffungskosten auf die Nutzungsjahre\n2. Richtige Vermögens- und Erfolgsermittlung\n3. Geldzufluss für Ersatz- oder Neuinvestitionen', highlight: 'Abschreibungsbetrag = Anschaffungskosten / Anzahl Nutzungsjahre (linear)' },
          { type: 'table', title: 'Abschreibungsmethoden', headers: ['Methode', 'Beschreibung', 'Formel'], rows: [
            ['Lineare Abschreibung', 'Gleichmässige Abschreibung von den Anschaffungskosten', 'Abschreibungsbetrag = AK / Nutzungsjahre'],
            ['Abschreibung vom Buchwert (degressiv)', 'Doppelter Satz der linearen, jeweils vom verbleibenden Buchwert', 'Satz = 2 x linearer Satz, auf Buchwert angewendet'],
            ['Direkte Abschreibung', 'Abschreibung direkt auf dem Anlagekonto', 'Abschreibung / Mobilien'],
            ['Indirekte Abschreibung', 'Über Wertberichtigungskonto (WB)', 'Abschreibung / WB Mobilien']
          ]},
          { type: 'merke', title: 'Pro-Memoria-Franken', content: 'Vollständig abgeschriebene Anlagen werden mit CHF 1.- (Pro-Memoria-Franken) in der Bilanz geführt, solange sie noch vorhanden sind. Dies dient dem Grundsatz der Vollständigkeit.' },
          { type: 'svg', title: 'Lineare vs. degressive Abschreibung', svg: '<svg viewBox="0 0 750 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="abLin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.3"/><stop offset="100%" stop-color="#059669" stop-opacity="0.1"/></linearGradient><linearGradient id="abDeg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#065f46" stop-opacity="0.3"/><stop offset="100%" stop-color="#065f46" stop-opacity="0.1"/></linearGradient></defs><rect x="5" y="5" width="740" height="390" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="18" font-weight="700" fill="#059669">Lineare vs. degressive Abschreibung</text><text x="188" y="58" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Linear (vom Anschaffungswert)</text><text x="563" y="58" text-anchor="middle" font-size="13" font-weight="600" fill="#065f46">Degressiv (vom Buchwert)</text><text x="188" y="74" text-anchor="middle" font-size="11" fill="#374151">AK 100\'000, 5 Jahre, 20%</text><text x="563" y="74" text-anchor="middle" font-size="11" fill="#374151">AK 100\'000, 40% vom BW</text><line x1="375" y1="45" x2="375" y2="385" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><line x1="48" y1="85" x2="48" y2="290" stroke="#374151" stroke-width="1.5"/><line x1="48" y1="290" x2="340" y2="290" stroke="#374151" stroke-width="1.5"/><rect x="68" y="130" width="44" height="160" rx="4" fill="url(#abLin)" stroke="#059669" stroke-width="1"/><rect x="122" y="130" width="44" height="160" rx="4" fill="url(#abLin)" stroke="#059669" stroke-width="1"/><rect x="176" y="130" width="44" height="160" rx="4" fill="url(#abLin)" stroke="#059669" stroke-width="1"/><rect x="230" y="130" width="44" height="160" rx="4" fill="url(#abLin)" stroke="#059669" stroke-width="1"/><rect x="284" y="130" width="44" height="160" rx="4" fill="url(#abLin)" stroke="#059669" stroke-width="1"/><text x="90" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">20k</text><text x="144" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">20k</text><text x="198" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">20k</text><text x="252" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">20k</text><text x="306" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">20k</text><text x="90" y="304" text-anchor="middle" font-size="9" fill="#374151">J1</text><text x="144" y="304" text-anchor="middle" font-size="9" fill="#374151">J2</text><text x="198" y="304" text-anchor="middle" font-size="9" fill="#374151">J3</text><text x="252" y="304" text-anchor="middle" font-size="9" fill="#374151">J4</text><text x="306" y="304" text-anchor="middle" font-size="9" fill="#374151">J5</text><text x="35" y="95" text-anchor="middle" font-size="9" fill="#374151">100k</text><text x="35" y="295" text-anchor="middle" font-size="9" fill="#374151">0</text><text x="188" y="328" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Buchwert:</text><circle cx="90" cy="342" r="3" fill="#059669"/><circle cx="144" cy="350" r="3" fill="#059669"/><circle cx="198" cy="358" r="3" fill="#059669"/><circle cx="252" cy="366" r="3" fill="#059669"/><circle cx="306" cy="374" r="3" fill="#059669"/><line x1="90" y1="342" x2="144" y2="350" stroke="#059669" stroke-width="1.5"/><line x1="144" y1="350" x2="198" y2="358" stroke="#059669" stroke-width="1.5"/><line x1="198" y1="358" x2="252" y2="366" stroke="#059669" stroke-width="1.5"/><line x1="252" y1="366" x2="306" y2="374" stroke="#059669" stroke-width="1.5"/><text x="90" y="338" text-anchor="middle" font-size="8" fill="#059669">80k</text><text x="144" y="346" text-anchor="middle" font-size="8" fill="#059669">60k</text><text x="198" y="354" text-anchor="middle" font-size="8" fill="#059669">40k</text><text x="252" y="362" text-anchor="middle" font-size="8" fill="#059669">20k</text><text x="306" y="370" text-anchor="middle" font-size="8" fill="#059669">0</text><line x1="423" y1="85" x2="423" y2="290" stroke="#374151" stroke-width="1.5"/><line x1="423" y1="290" x2="715" y2="290" stroke="#374151" stroke-width="1.5"/><rect x="443" y="126" width="44" height="164" rx="4" fill="url(#abDeg)" stroke="#065f46" stroke-width="1"/><rect x="497" y="191" width="44" height="99" rx="4" fill="url(#abDeg)" stroke="#065f46" stroke-width="1"/><rect x="551" y="231" width="44" height="59" rx="4" fill="url(#abDeg)" stroke="#065f46" stroke-width="1"/><rect x="605" y="255" width="44" height="35" rx="4" fill="url(#abDeg)" stroke="#065f46" stroke-width="1"/><rect x="659" y="269" width="44" height="21" rx="4" fill="url(#abDeg)" stroke="#065f46" stroke-width="1"/><text x="465" y="121" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">40k</text><text x="519" y="186" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">24k</text><text x="573" y="226" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">14.4k</text><text x="627" y="250" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">8.6k</text><text x="681" y="264" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">5.2k</text><text x="465" y="304" text-anchor="middle" font-size="9" fill="#374151">J1</text><text x="519" y="304" text-anchor="middle" font-size="9" fill="#374151">J2</text><text x="573" y="304" text-anchor="middle" font-size="9" fill="#374151">J3</text><text x="627" y="304" text-anchor="middle" font-size="9" fill="#374151">J4</text><text x="681" y="304" text-anchor="middle" font-size="9" fill="#374151">J5</text><text x="410" y="95" text-anchor="middle" font-size="9" fill="#374151">100k</text><text x="410" y="295" text-anchor="middle" font-size="9" fill="#374151">0</text><text x="563" y="328" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Buchwert:</text><circle cx="465" cy="345" r="3" fill="#065f46"/><circle cx="519" cy="353" r="3" fill="#065f46"/><circle cx="573" cy="361" r="3" fill="#065f46"/><circle cx="627" cy="367" r="3" fill="#065f46"/><circle cx="681" cy="372" r="3" fill="#065f46"/><line x1="465" y1="345" x2="519" y2="353" stroke="#065f46" stroke-width="1.5"/><line x1="519" y1="353" x2="573" y2="361" stroke="#065f46" stroke-width="1.5"/><line x1="573" y1="361" x2="627" y2="367" stroke="#065f46" stroke-width="1.5"/><line x1="627" y1="367" x2="681" y2="372" stroke="#065f46" stroke-width="1.5"/><text x="465" y="341" text-anchor="middle" font-size="8" fill="#065f46">60k</text><text x="519" y="349" text-anchor="middle" font-size="8" fill="#065f46">36k</text><text x="573" y="357" text-anchor="middle" font-size="8" fill="#065f46">21.6k</text><text x="627" y="363" text-anchor="middle" font-size="8" fill="#065f46">13k</text><text x="681" y="368" text-anchor="middle" font-size="8" fill="#065f46">7.8k</text></svg>' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Beim Jahresabschluss sind verschiedene Wertanpassungen vorzunehmen.',
            'Bewertungen haben Einfluss auf den Ausweis des Eigenkapitals und des Erfolgs.',
            'Ein Existenz- und Wertnachweis durch Inventur und Inventar ist regelmässig zu erbringen.',
            'Die lineare Abschreibung ergibt jedes Jahr den gleichen Betrag.',
            'Die degressive Abschreibung vom Buchwert ergibt jedes Jahr kleinere Beträge.',
            'Direkte Abschreibung: auf dem Anlagekonto. Indirekte: über WB-Konto.'
          ]}
        ]
      }
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
          keywords: ['Garantie','Prozess','Schadenersatz','Steürn','Restrukturierung','Altlasten'],
          solution: 'Typische Beispiele: Garantier\u00fcckstellungen, Prozessrisiken (Schadenersatzforderungen), Steürr\u00fcckstellungen, Restrukturierungsr\u00fcckstellungen, Umweltaltlasten.',
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
          q: 'Das Handelsunternehmen weist in vier aufeinanderfolgenden Jahren die Werte gem\u00e4ss der folgenden Tabelle aus. Berechnen Sie:\nJahr 20_1: Warenbestand Anfang 30, Einstandswert eingekaufte Ware 200, Warenbestand Ende 165.\nJahr 20_2: Warenbestand Anfang 20, Einstandswert eingekaufte Ware 180, Warenbestand Ende 40.\n\nBestandsänderung = Endbestand - Anfangsbestand\nEinstandswert verkaufte Ware = Einstandswert eingekaufte Ware - Bestandsänderung',
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
          q: 'Eine Maschine wurde Anfang des Jahres 01 f\u00fcr CHF 150 000.\u2013 angeschafft. Man sch\u00e4tzt die Nutzungsdaür auf 6 Jahre (Endwert null).\n\nIntern: linear (16 2/3% von den Anschaffungskosten).\nExtern: degressiv (33 1/3% vom Buchwert).\n\nBerechnen Sie die Buchwerte und stillen Reserven per 31.12.01.',
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Endgültige und mutmassliche Verluste aus Forderungen unterscheiden und deren Verbuchung nachvollziehen.',
            'Gründe für Wertanpassungen bei Vorraten nennen und die Wirkungen von Zu- bzw. Abnahmen auf den Erfolg nachvollziehen.',
            'Den Zweck von transitorischen Posten erläutern und Verbuchungsbeispiele nachvollziehen.',
            'Den Begriff Rückstellungen erklären und deren Einordnung in die Bilanz vornehmen.',
            'Den Zusammenhang zwischen Bewertung und stillen Reserven verstehen und den Unterschied von stillen und offenen Reserven darlegen.',
            'Bestand, Bildung und Auflösung von stillen Reserven nachvollziehen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Verluste aus Forderungen', def: 'Endgültige (direkte Abschreibung) oder mutmassliche (indirekte Abschreibung über WB Forderungen) Ausfälle bei Debitoren.' },
            { term: 'Wertberichtigung Forderungen (Delkredere)', def: 'WB-Konto als ruhendes Konto zur indirekten Erfassung mutmasslicher Forderungsausfälle. Wird am Jahresende auf die gewünschte Höhe korrigiert.' },
            { term: 'Bestandsänderungen', def: 'Differenzen bei Vorraten (Waren, Material, Halb-/Fertigfabrikate), die bei der Inventur festgestellt werden und zu erfolgswirksamen Korrekturen führen.' },
            { term: 'Aktive Rechnungsabgrenzung (ARA)', def: 'Guthaben gegenüber der nächsten Periode: vorausbezahlte Aufwendungen oder noch nicht erhaltene Erträge. Gehört zum Umlaufvermögen.' },
            { term: 'Passive Rechnungsabgrenzung (PRA)', def: 'Schuld gegenüber der nächsten Periode: noch nicht bezahlte Aufwendungen oder im Voraus erhaltene Erträge. Gehört zum Fremdkapital.' },
            { term: 'Rückstellungen', def: 'Verpflichtungen oder drohende Verluste mit Unsicherheiten bezüglich Höhe, Fälligkeit oder Empfänger. Gehören zum Fremdkapital.' },
            { term: 'Stille Reserven', def: 'Entstehen durch Unterbewertung von Aktiven oder Überbewertung von Fremdkapital. Verzerren das Bild der wirtschaftlichen Lage in der externen Rechnungslegung.' }
          ]},
          { type: 'concept', title: 'Verluste aus Forderungen', content: 'Tatsächlich eingetretene Verluste werden direkt vom Konto Forderungen L+L abgeschrieben (Gegenkonto: Verluste Forderungen). Mutmassliche Verluste werden indirekt über das WB-Konto (Delkredere) erfasst. Die Wertberichtigung kann individüll oder pauschal geschätzt werden. Nachträgliche Zahlungen im gleichen Jahr werden als Rückbuchung erfasst, spätere als ausserordentlicher Ertrag.' },
          { type: 'concept', title: 'Bestandsänderungen bei Vorraten', content: 'Bei der Inventur werden Vorräte nach Art, Menge und Wert erfasst. Eine Vorratszunahme wird als erfolgswirksame Aktivzunahme (positiv auf Erfolg), eine Vorratsabnahme als erfolgswirksame Aktivabnahme (negativ auf Erfolg) gebucht. Im Handelsunternehmen genügt ein Konto Warenbestand, im Produktionsunternehmen gibt es Material-, Halbfabrikate- und Fertigfabrikatebestand.' },
          { type: 'concept', title: 'Transitorische Posten und Rückstellungen', content: 'Die Erfolgsrechnung soll Aufwand und Ertrag verursachungsgerecht ausweisen. Wenn Belegverbuchung und Verursachung nicht in dieselbe Periode fallen, sind zeitliche Abgrenzungen über transitorische Konten nötig. Aktive Rechnungsabgrenzungen (ARA) gehören zum Umlaufvermögen, Passive Rechnungsabgrenzungen (PRA) zum kurzfristigen Fremdkapital. Rückstellungen werden für ungewisse Verpflichtungen gebildet (Garantieleistungen, Prozessrisiken, Reparaturen usw.).' },
          { type: 'merke', title: 'Stille Reserven', content: 'Stille Reserven verzerren das Bild der wirtschaftlichen Lage in der externen Rechnungslegung. Die interne Rechnungslegung soll auf möglichst objektiven Werten beruhen und muss von stillen Reserven bereinigt werden. Die Bildung verschlechtert den externen Erfolgsausweis, die Auflösung verbessert ihn.' },
          { type: 'svg', title: 'Stille Reserven — Externe vs. Interne Bilanz', svg: '<svg viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="srExt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.12"/><stop offset="100%" stop-color="#059669" stop-opacity="0.04"/></linearGradient><linearGradient id="srInt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.25"/><stop offset="100%" stop-color="#059669" stop-opacity="0.1"/></linearGradient></defs><rect x="5" y="5" width="740" height="370" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">Stille Reserven — Externe vs. Interne Bilanz</text><rect x="20" y="50" width="310" height="300" rx="10" fill="url(#srExt)" stroke="#059669" stroke-width="1.5"/><text x="175" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Externe Bilanz</text><line x1="175" y1="85" x2="175" y2="340" stroke="#059669" stroke-width="1.5"/><line x1="30" y1="85" x2="320" y2="85" stroke="#059669" stroke-width="1"/><text x="100" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Aktiven</text><text x="250" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Passiven</text><rect x="35" y="110" width="130" height="120" rx="6" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1"/><text x="100" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Aktiven</text><text x="100" y="155" text-anchor="middle" font-size="10" fill="#374151">(unterbewertet)</text><text x="100" y="180" text-anchor="middle" font-size="9" fill="#374151">tiefer als</text><text x="100" y="195" text-anchor="middle" font-size="9" fill="#374151">wahrer Wert</text><text x="100" y="220" text-anchor="middle" font-size="18" fill="#059669">&#x2193;</text><rect x="185" y="110" width="130" height="75" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="250" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">FK</text><text x="250" y="155" text-anchor="middle" font-size="10" fill="#374151">(überbewertet)</text><text x="250" y="175" text-anchor="middle" font-size="14" fill="#059669">&#x2191;</text><rect x="185" y="195" width="130" height="35" rx="6" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="250" y="217" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">EK (klein)</text><text x="175" y="265" text-anchor="middle" font-size="10" fill="#374151">Vorsichtsprinzip:</text><text x="175" y="280" text-anchor="middle" font-size="10" fill="#374151">Aktiven tief, FK hoch</text><text x="175" y="330" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">= Pflichtbilanz (OR)</text><rect x="420" y="50" width="310" height="300" rx="10" fill="url(#srInt)" stroke="#059669" stroke-width="1.5"/><text x="575" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">Interne Bilanz</text><line x1="575" y1="85" x2="575" y2="340" stroke="#059669" stroke-width="1.5"/><line x1="430" y1="85" x2="720" y2="85" stroke="#059669" stroke-width="1"/><text x="500" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Aktiven</text><text x="650" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Passiven</text><rect x="435" y="110" width="130" height="160" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="500" y="140" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Aktiven</text><text x="500" y="160" text-anchor="middle" font-size="10" fill="#374151">(wahrer Wert)</text><text x="500" y="185" text-anchor="middle" font-size="18" fill="#059669">&#x2191;</text><text x="500" y="205" text-anchor="middle" font-size="9" fill="#374151">höher als</text><text x="500" y="220" text-anchor="middle" font-size="9" fill="#374151">extern gezeigt</text><rect x="585" y="110" width="130" height="55" rx="6" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1"/><text x="650" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">FK</text><text x="650" y="155" text-anchor="middle" font-size="10" fill="#374151">(wahrer Wert)</text><rect x="585" y="175" width="130" height="95" rx="6" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="2" stroke-dasharray="4,3"/><text x="650" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">EK (gross)</text><text x="650" y="220" text-anchor="middle" font-size="10" fill="#065f46">= extern EK</text><text x="650" y="238" text-anchor="middle" font-size="10" fill="#065f46">+ stille Res.</text><text x="650" y="258" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">&#x2191; Differenz</text><text x="575" y="310" text-anchor="middle" font-size="10" fill="#374151">Effektive Vermögensverh.</text><text x="575" y="330" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46">= Managementbilanz</text><text x="370" y="175" text-anchor="middle" font-size="12" font-weight="700" fill="#059669" transform="rotate(-90,370,175)">Stille Reserven</text><path d="M340 130 Q350 130 350 140 L350 200 Q350 210 340 210" fill="none" stroke="#059669" stroke-width="1.5"/><path d="M400 130 Q390 130 390 140 L390 200 Q390 210 400 210" fill="none" stroke="#059669" stroke-width="1.5"/><text x="370" y="230" text-anchor="middle" font-size="9" fill="#374151">= Differenz</text></svg>' },
          { type: 'table', title: 'Stille Reserven: Bestand, Bildung und Auflösung', headers: ['Stille Reserven ...', 'Bestand', 'Bildung', 'Auflösung'], rows: [
            ['... in den Aktiven (Unterbewertung)', 'Differenz zwischen höherem tatsächlichem und tieferem ausgewiesenem Wert', 'Durch höhere Wertminderungen als nötig (z.B. zu hohe Abschreibungen)', 'Durch geringere Wertminderungen als nötig oder Aufwertung'],
            ['... im Fremdkapital (Überbewertung)', 'Differenz zwischen tieferem tatsächlichem und höherem ausgewiesenem Wert', 'Durch Höherbewertung des Passivpostens (z.B. zu hohe Rückstellung)', 'Durch Rückgängigmachen der Höherbewertung'],
            ['... und Eigenkapital', 'Gegenwert zu Unterbewertungen in Aktiven und Überbewertungen im FK', 'SB I vor Verbuchung des Erfolgs: Bestand stiller Reserven noch unverändert', 'SB I vor Verbuchung des Erfolgs: Bestand stiller Reserven noch unverändert']
          ]},
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Tatsächlich eingetretene Verluste aus Forderungen werden direkt abgeschrieben, mutmassliche künftige Verluste werden über das Konto WB Forderungen (Delkredere) erfasst.',
            'Bestandsänderungen bei Vorraten führen zu erfolgswirksamen Korrekturen: Zunahme = positive, Abnahme = negative Wirkung auf den Erfolg.',
            'Die Erfolgsrechnung soll Aufwand und Ertrag verursachungsgerecht ausweisen; dafür stehen ARA und PRA als transitorische Konten zur Verfügung.',
            'Rückstellungen werden für ungewisse Verpflichtungen oder drohende Verluste gebildet.',
            'Stille Reserven entstehen durch Unterbewertung von Aktiven bzw. Überbewertung von FK und müssen für die interne Rechnungslegung bereinigt werden.'
          ]}
        ]
      }
    },

    // ============================================================
    // Kapitel 9: Einführung in die Kostenrechnung (Fragen 84-88)
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Unterschied zwischen Finanz- und Betriebsbuchhaltung verstehen und die ihnen zukommende Bedeutung erklären.',
            'Den Aufbau des Betriebsabrechnungsbogens (BAB) in den drei Hauptbereichen (Kostenarten, Kostenstellen, Kostenträger) erläutern und einen BAB für einfache Beispiele erstellen.',
            'Den Sinn und das Wesen der Abgrenzungen (sachlich und zeitlich) erklären.',
            'Die Bedeutung von Umlageschlüsseln zur Verteilung der Fixkosten auf Kostenträger aufzeigen.',
            'Aufzeigen, wie sich unternehmerische Entscheidungen auf die Kostenstellen- und die Kostenträgerrechnung auswirken.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Betriebsabrechnungsbogen (BAB)', def: 'Schema zur transparenten Darstellung der Arbeitsschritte einer Kostenrechnung. Gliedert sich in Kostenarten-, Kostenstellen- und Kostenträgerrechnung.' },
            { term: 'Einzelkosten (direkte Kosten)', def: 'Kosten, die direkt auf die Kostenträger verteilt werden können (z.B. Einzelmaterial, Einzellöhne).' },
            { term: 'Gemeinkosten (indirekte Kosten)', def: 'Kosten, die indirekt über die Kostenstellenrechnung auf die Kostenträger verrechnet werden müssen.' },
            { term: 'Herstellkosten', def: 'Summe aus den gesamten Material- und Fertigungskosten (Einzel- und Gemeinkosten).' },
            { term: 'Selbstkosten', def: 'Summe aus Herstellkosten und Verwaltungs- und Vertriebs-Gemeinkosten.' },
            { term: 'Zuschlagssatz', def: 'Prozentualer Zuschlag auf einen Bezugswert zur Verrechnung der Gemeinkosten auf die Kostenträger.' },
            { term: 'Kostenstellen', def: 'Organisatorische Einheiten des Betriebs (z.B. Material, Fertigung, Verwaltung und Vertrieb), in denen die Gemeinkosten gesammelt werden.' }
          ]},
          { type: 'concept', title: 'Verhältnis Finanz- und Betriebsbuchhaltung', content: 'Das finanzielle Rechnungswesen (FIBU) dokumentiert die Vermögens-, Finanz- und Ertragslage nach handels- und steürrechtlichen Gesichtspunkten. Die Betriebsbuchhaltung (BEBU) liefert detaillierte Führungsinformationen für das Management. Beide Systeme sind nicht losgelöst voneinander, sondern hängen zusammen.' },
          { type: 'concept', title: 'Die drei Kernelemente des BAB', content: 'Kostenartenrechnung: Ermittlung der effektiv für die betriebliche Leistungserstellung entstandenen Kosten (mit sachlichen Abgrenzungen). Kostenstellenrechnung: Zuordnung der Gemeinkosten auf die Kostenstellen und Ermittlung der Zuschlagssätze. Kostenträgerrechnung: Zuteilung sämtlicher Kosten (Einzel- und Gemeinkosten) auf die Kostenträger. Die Differenz zum Nettoerlös ergibt den Erfolg je Kostenträger.' },
          { type: 'svg', title: 'Betriebsabrechnungsbogen (BAB) – Schema', svg: '<svg viewBox="0 0 750 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><marker id="arBAB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#059669"/></marker></defs><rect x="5" y="5" width="740" height="410" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">Betriebsabrechnungsbogen (BAB)</text><rect x="20" y="50" width="160" height="310" rx="10" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1.5"/><text x="100" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Kostenarten-</text><text x="100" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">rechnung</text><text x="100" y="115" text-anchor="middle" font-size="11" fill="#374151">Materialkosten</text><text x="100" y="135" text-anchor="middle" font-size="11" fill="#374151">Personalkosten</text><text x="100" y="155" text-anchor="middle" font-size="11" fill="#374151">Raumkosten</text><text x="100" y="175" text-anchor="middle" font-size="11" fill="#374151">Abschreibungen</text><text x="100" y="195" text-anchor="middle" font-size="11" fill="#374151">Zinsen</text><text x="100" y="215" text-anchor="middle" font-size="11" fill="#374151">Übrige Kosten</text><line x1="30" y1="235" x2="170" y2="235" stroke="#059669" stroke-width="1"/><text x="100" y="258" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Einzelkosten</text><text x="100" y="278" text-anchor="middle" font-size="11" fill="#374151">(direkt zurechenbar)</text><text x="100" y="305" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Gemeinkosten</text><text x="100" y="325" text-anchor="middle" font-size="11" fill="#374151">(indirekt)</text><rect x="210" y="50" width="280" height="310" rx="10" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-width="1.5"/><text x="350" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Kostenstellen-</text><text x="350" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">rechnung</text><rect x="225" y="100" width="110" height="55" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="280" y="122" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Material</text><text x="280" y="142" text-anchor="middle" font-size="10" fill="#6b7280">Mat.-GK-Zuschlag</text><rect x="365" y="100" width="110" height="55" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="420" y="122" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Fertigung</text><text x="420" y="142" text-anchor="middle" font-size="10" fill="#6b7280">Fert.-GK-Zuschlag</text><rect x="225" y="175" width="110" height="55" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="280" y="197" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Verwaltung</text><text x="280" y="217" text-anchor="middle" font-size="10" fill="#6b7280">VVGK-Zuschlag</text><rect x="365" y="175" width="110" height="55" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="420" y="197" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Vertrieb</text><text x="420" y="217" text-anchor="middle" font-size="10" fill="#6b7280">VVGK-Zuschlag</text><text x="350" y="265" text-anchor="middle" font-size="11" fill="#065f46">Zuschlagssätze</text><text x="350" y="285" text-anchor="middle" font-size="11" fill="#065f46">= GK / Einzelkosten × 100</text><rect x="520" y="50" width="210" height="310" rx="10" fill="#059669" fill-opacity="0.18" stroke="#059669" stroke-width="1.5"/><text x="625" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Kostenträger-</text><text x="625" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">rechnung</text><rect x="535" y="100" width="180" height="30" rx="5" fill="#fff" stroke="#059669" stroke-width="1"/><text x="625" y="120" text-anchor="middle" font-size="11" fill="#374151">Materialkosten</text><rect x="535" y="138" width="180" height="30" rx="5" fill="#fff" stroke="#059669" stroke-width="1"/><text x="625" y="158" text-anchor="middle" font-size="11" fill="#374151">+ Fertigungskosten</text><rect x="535" y="176" width="180" height="30" rx="5" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="625" y="196" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">= Herstellkosten</text><rect x="535" y="214" width="180" height="30" rx="5" fill="#fff" stroke="#059669" stroke-width="1"/><text x="625" y="234" text-anchor="middle" font-size="11" fill="#374151">+ VVGK</text><rect x="535" y="252" width="180" height="30" rx="5" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1"/><text x="625" y="272" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">= Selbstkosten</text><rect x="535" y="290" width="180" height="30" rx="5" fill="#fff" stroke="#059669" stroke-width="1"/><text x="625" y="310" text-anchor="middle" font-size="11" fill="#374151">Nettoerlös</text><rect x="535" y="328" width="180" height="30" rx="5" fill="#059669" fill-opacity="0.25" stroke="#059669" stroke-width="1.5"/><text x="625" y="348" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">= Erfolg/KT</text><line x1="180" y1="260" x2="210" y2="260" stroke="#059669" stroke-width="2" marker-end="url(#arBAB)"/><text x="195" y="252" text-anchor="middle" font-size="9" fill="#059669">GK</text><line x1="180" y1="310" x2="530" y2="310" stroke="#059669" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arBAB)"/><text x="355" y="345" text-anchor="middle" font-size="9" fill="#059669">EK direkt</text><line x1="490" y1="200" x2="530" y2="200" stroke="#059669" stroke-width="2" marker-end="url(#arBAB)"/><text x="375" y="390" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Einzelkosten → direkt | Gemeinkosten → indirekt über Zuschlagssätze</text></svg>' },
          { type: 'merke', title: 'Wichtige Ergebnisse des BAB', content: 'Herstellkosten = Materialkosten + Fertigungskosten (je Einzel- und Gemeinkosten). Selbstkosten = Herstellkosten + Verwaltungs- und Vertriebs-Gemeinkosten. Die Differenz zwischen Nettoerlös und Selbstkosten ergibt den Erfolg (Gewinn oder Verlust) je Kostenträger.' },
          { type: 'concept', title: 'Kostenträgerrechnung und Erfolgsrechnung', content: 'Die kurzfristige Erfolgsrechnung kann als Absatzerfolgsrechnung (Umsatzkostenverfahren) oder als Produktionserfolgsrechnung (Gesamtkostenverfahren) präsentiert werden. Bei der Absatzerfolgsrechnung werden dem Umsatz die Herstellkosten der verkauften Fabrikate gegenübergestellt. Bei der Produktionserfolgsrechnung wird dem Gesamtertrag die Gesamtproduktion gegenübergestellt.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Finanz- und Betriebsbuchhaltung sind die beiden Hauptbereiche des Rechnungswesens.',
            'Die Finanzbuchhaltung dokumentiert die Vermögens-, Finanz- und Ertragslage; die Betriebsbuchhaltung liefert detaillierte Führungsinformationen.',
            'Der BAB zeigt den Verrechnungsfluss: Kostenartenrechnung, Kostenstellenrechnung, Kostenträgerrechnung.',
            'Einzelkosten werden direkt, Gemeinkosten indirekt über Zuschlagssätze auf die Kostenträger verrechnet.',
            'Die Kostenträgerrechnung ermittelt das Betriebsergebnis differenziert pro Kostenträger.'
          ]}
        ]
      }
    },

    // ============================================================
    // Kapitel 10: Ausgewählte Fragen der Kostenrechnung (Fragen 110-123)
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Gliederungskriterien für Kostenrechnungssysteme nennen.',
            'Die Grundzüge der Teilkostenrechnung (Deckungsbeitragsrechnung) darlegen.',
            'Eine mehrstufige Deckungsbeitragsrechnung erstellen und verstehen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Vollkostensysteme', def: 'Ist-Kostenrechnung, Normalkostenrechnung, Standard-/Plan-Kostenrechnung, Prozesskostenrechnung. Verrechnen alle Kosten auf die Kostenträger.' },
            { term: 'Teilkostensysteme', def: 'Direct Costing (einstufig/mehrstufig), Grenzplankostenrechnung, relative Einzelkostenrechnung. Verrechnen nur die variablen Kosten auf die Kostenträger.' },
            { term: 'Variable Kosten', def: 'Verändern sich mit der Beschäftigung (z.B. Material). Können proportional, überproportional oder unterproportional verlaufen.' },
            { term: 'Fixe Kosten', def: 'Fallen unabhängig von der Beschäftigung an (z.B. Mieten, Abschreibungen). Können absolut fix oder sprungfix sein.' },
            { term: 'Deckungsbeitrag', def: 'Erlös minus variable Kosten. Dient zur Deckung der Fixkosten und als Beitrag an den Gewinn.' },
            { term: 'Fixkosten-Degression', def: 'Bei steigenden Mengen sinken die Fixkosten pro Stück, bei sinkenden Mengen steigen sie.' }
          ]},
          { type: 'concept', title: 'Vollkostenrechnung vs. Teilkostenrechnung', content: 'Die Vollkostenrechnung wälzt alle Kosten (variable und fixe) auf die Kostenträger um, um die vollen Selbstkosten zu ermitteln. Die Teilkostenrechnung belastet nur die variablen Kosten. Der Deckungsbeitrag (Erlös minus variable Kosten) dient zur Deckung der Fixkosten. Langfristige (strategische) Entscheidungen basieren auf Vollkosten, kurzfristige (taktische) Entscheidungen auf Teilkosten.' },
          { type: 'concept', title: 'Kostenverhalten: fixe und variable Kosten', content: 'Variable Kosten verändern sich mit der Beschäftigung (produzierte Menge). Fixe Kosten fallen unabhängig von der Produktion an und ergeben sich aus der Bereitstellung von Kapazität. Gemischte Kostenverläufe enthalten sowohl fixe als auch variable Anteile und müssen für die Teilkostenrechnung in ihre Bestandteile zerlegt werden.' },
          { type: 'svg', title: 'Fixe vs. variable Kosten', svg: '<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><rect x="5" y="5" width="690" height="370" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="350" y="35" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">Kostenverhalten: Fixe und variable Kosten</text><line x1="60" y1="320" x2="340" y2="320" stroke="#374151" stroke-width="1.5"/><line x1="60" y1="320" x2="60" y2="60" stroke="#374151" stroke-width="1.5"/><text x="200" y="350" text-anchor="middle" font-size="12" fill="#374151">Menge (Beschäftigung)</text><text x="40" y="190" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90,40,190)">Kosten (CHF)</text><text x="200" y="55" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Gesamtkosten</text><line x1="60" y1="200" x2="330" y2="200" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/><text x="335" y="198" font-size="11" font-weight="600" fill="#dc2626">Fixkosten</text><line x1="60" y1="200" x2="330" y2="80" stroke="#059669" stroke-width="2.5"/><text x="335" y="80" font-size="11" font-weight="600" fill="#059669">Totalkosten</text><line x1="60" y1="320" x2="330" y2="200" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3"/><text x="335" y="200" font-size="11" font-weight="600" fill="#3b82f6">var. Kosten</text><line x1="390" y1="320" x2="670" y2="320" stroke="#374151" stroke-width="1.5"/><line x1="390" y1="320" x2="390" y2="60" stroke="#374151" stroke-width="1.5"/><text x="530" y="350" text-anchor="middle" font-size="12" fill="#374151">Menge (Beschäftigung)</text><text x="370" y="190" text-anchor="middle" font-size="12" fill="#374151" transform="rotate(-90,370,190)">Kosten/Stück</text><text x="530" y="55" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Stückkosten</text><path d="M 400 80 Q 480 200 660 260" stroke="#dc2626" stroke-width="2.5" fill="none" stroke-dasharray="8,4"/><text x="665" y="258" font-size="11" font-weight="600" fill="#dc2626">FK/Stück</text><line x1="400" y1="220" x2="660" y2="220" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3"/><text x="665" y="218" font-size="11" font-weight="600" fill="#3b82f6">vK/Stück</text><path d="M 400 80 Q 500 230 660 270" stroke="#059669" stroke-width="2.5" fill="none"/><text x="665" y="275" font-size="11" font-weight="600" fill="#059669">SK/Stück</text><text x="530" y="310" text-anchor="middle" font-size="10" fill="#6b7280">Fixkosten-Degression</text></svg>' },
          { type: 'concept', title: 'Einstufige und mehrstufige Deckungsbeitragsrechnung', content: 'Beim einstufigen Direct Costing werden die Fixkosten insgesamt in einem Block abgezogen. Beim mehrstufigen Direct Costing werden die Fixkosten differenziert: Produkt-Fixkosten (DB 2), Produktgruppen-Fixkosten (DB 3), Bereichs-Fixkosten (DB 4) und Unternehmens-Fixkosten, bis man als Endergebnis den Betriebserfolg erhält.' },
          { type: 'merke', title: 'Vorteile und Nachteile', content: 'Vollkostenrechnung: Vorteil ist die Ermittlung der vollen Kosten und einer Untergrenze für die Preise. Nachteil: Fixkosten-Proportionalisierung führt zu Planungsfehlern. Teilkostenrechnung: Vorteil ist die bessere Entscheidungsgrundlage für kurzfristige Entscheidungen. Nachteil: Kurzfristige Preiszugeständnisse bei Zusatzaufträgen können generellen Druck auf die Preise auslösen.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Kostenrechnungssysteme unterscheiden sich nach dem Inhalt (Ist-, Normal-, Plan-Kosten) und dem Umfang (Voll- vs. Teilkosten).',
            'Variable Kosten verändern sich mit der Beschäftigung, fixe Kosten bleiben konstant.',
            'Der Deckungsbeitrag = Erlös minus variable Kosten; er dient zur Deckung der Fixkosten und als Gewinnbeitrag.',
            'Das einstufige Direct Costing zieht die Fixkosten in einem Block ab; das mehrstufige differenziert die Fixkosten nach Produkt, Produktgruppe, Bereich und Unternehmen.',
            'Langfristige Entscheidungen erfordern Vollkosten, kurzfristige Entscheidungen Teilkosten.'
          ]}
        ]
      }
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
          q: 'Eine vollst\u00e4ndige Kalkulation im Warenhandel umfasst die Einkaufskalkulation und die Verkaufskalkulation. In welche Richtung ist bei einer aufbaünden Kalkulation zu rechnen?',
          keywords: ['aufbaünd','unten','Einstand','Nettoerls','aufbaünd','oben'],
          solution: 'Bei einer aufbaünden Kalkulation rechnet man vom Einstand nach oben zum Nettobarerls (Verkaufspreis).',
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Hauptbereiche der Kalkulation nach dem Transformationsprozess (Einkauf, Leistungserstellung, Verkauf) gliedern und wichtige Aspekte des Kalkulierens nennen.',
            'Kalkulationen mithilfe der Zuschlagskalkulation sowie der Divisionskalkulation durchführen.',
            'Kalkulationen der Leistungserstellung in Handel, Produktion und Dienstleistung durchführen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Einkaufskalkulation', def: 'Ermittlung des Einstands (Einstandspreis) aufgrund der Lieferantenofferte und der Bezugskosten.' },
            { term: 'Verkaufskalkulation', def: 'Ermittlung des Bruttoverkaufspreises ausgehend vom Nettoerlös über Verkaufssonderkosten, Rabatte und Skonti.' },
            { term: 'Handelskalkulation', def: 'Kalkulation im Handelsbetrieb; der Bruttogewinn ist die zentrale Grösse (Warenwert im Verkauf minus Warenwert im Einkauf).' },
            { term: 'Zuschlagskalkulation', def: 'Häufigstes Kalkulationsverfahren für Produktions- und Dienstleistungsbetriebe. Gemeinkosten werden über Zuschlagssätze auf Einzelkosten verrechnet.' },
            { term: 'Divisionskalkulation', def: 'Einfachstes Verfahren: Gesamtkosten dividiert durch produzierte Menge ergibt Selbstkosten je Einheit.' },
            { term: 'Äquivalenzziffernkalkulation', def: 'Modifizierte Divisionskalkulation für ähnliche Produkte. Kostenunterschiede werden durch Äquivalenzziffern (Verhältniszahlen) ausgedrückt.' }
          ]},
          { type: 'concept', title: 'Hauptbereiche der Kalkulation', content: 'Die Kalkulation lässt sich am Betriebsprozess orientieren: Einkaufskalkulation (Ermittlung der Anschaffungskosten), Kalkulation der Leistungserstellung (Ermittlung der Selbstkosten bzw. des Nettoerlöses) und Verkaufskalkulation (Ermittlung der Verkaufspreise). Wichtige Aspekte sind: Gesamt-/Einzelkalkulation, Vor-/Nachkalkulation, aufbaünde/abbaünde Kalkulation, einstufige/mehrstufige Kalkulation.' },
          { type: 'svg', title: 'Kalkulationsweg: Vom Einkauf zum Verkauf', svg: '<svg viewBox="0 0 750 350" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="kalPh1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.1"/><stop offset="100%" stop-color="#059669" stop-opacity="0.05"/></linearGradient><linearGradient id="kalPh2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.18"/><stop offset="100%" stop-color="#059669" stop-opacity="0.08"/></linearGradient><linearGradient id="kalPh3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.28"/><stop offset="100%" stop-color="#059669" stop-opacity="0.12"/></linearGradient></defs><rect x="5" y="5" width="740" height="340" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">Kalkulationsweg: Vom Einkauf zum Verkauf</text><rect x="15" y="50" width="220" height="280" rx="10" fill="url(#kalPh1)" stroke="#059669" stroke-width="1.5"/><text x="125" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Einkaufskalkulation</text><rect x="30" y="90" width="190" height="30" rx="6" fill="#059669" fill-opacity="0.08"/><text x="125" y="110" text-anchor="middle" font-size="11" fill="#374151">Listenpreis (Brutto)</text><text x="125" y="132" text-anchor="middle" font-size="11" fill="#374151">&#x2212; Rabatt</text><text x="125" y="150" text-anchor="middle" font-size="11" fill="#374151">&#x2212; Skonto</text><text x="125" y="168" text-anchor="middle" font-size="11" fill="#374151">+ Bezugskosten</text><text x="125" y="190" text-anchor="middle" font-size="14" fill="#059669">&#x2193;</text><rect x="30" y="198" width="190" height="30" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="125" y="218" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">= Einstandspreis</text><text x="125" y="248" text-anchor="middle" font-size="10" fill="#374151">Was kostet uns</text><text x="125" y="263" text-anchor="middle" font-size="10" fill="#374151">die Ware im Lager?</text><path d="M240 190 L260 190 L255 185 M260 190 L255 195" fill="none" stroke="#059669" stroke-width="2"/><rect x="265" y="50" width="220" height="280" rx="10" fill="url(#kalPh2)" stroke="#059669" stroke-width="1.5"/><text x="375" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Leistungserstellung</text><rect x="280" y="90" width="190" height="25" rx="6" fill="#059669" fill-opacity="0.08"/><text x="375" y="108" text-anchor="middle" font-size="11" fill="#374151">Einzelmaterial</text><rect x="280" y="122" width="190" height="25" rx="6" fill="#059669" fill-opacity="0.08"/><text x="375" y="140" text-anchor="middle" font-size="11" fill="#374151">Einzellöhne</text><rect x="280" y="154" width="190" height="25" rx="6" fill="#059669" fill-opacity="0.08"/><text x="375" y="172" text-anchor="middle" font-size="11" fill="#374151">+ Gemeinkosten (GK)</text><text x="375" y="198" text-anchor="middle" font-size="14" fill="#059669">&#x2193;</text><rect x="280" y="206" width="190" height="30" rx="6" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="375" y="226" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">= Herstellkosten</text><text x="375" y="256" text-anchor="middle" font-size="10" fill="#374151">Was kostet die</text><text x="375" y="271" text-anchor="middle" font-size="10" fill="#374151">Produktion/Leistung?</text><path d="M490 190 L510 190 L505 185 M510 190 L505 195" fill="none" stroke="#059669" stroke-width="2"/><rect x="515" y="50" width="220" height="280" rx="10" fill="url(#kalPh3)" stroke="#059669" stroke-width="1.5"/><text x="625" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Verkaufskalkulation</text><rect x="530" y="90" width="190" height="25" rx="6" fill="#059669" fill-opacity="0.08"/><text x="625" y="108" text-anchor="middle" font-size="11" fill="#374151">Herstellkosten</text><text x="625" y="132" text-anchor="middle" font-size="11" fill="#374151">+ VVGK</text><rect x="530" y="142" width="190" height="25" rx="6" fill="#059669" fill-opacity="0.1"/><text x="625" y="160" text-anchor="middle" font-size="11" fill="#374151">= Selbstkosten</text><text x="625" y="180" text-anchor="middle" font-size="11" fill="#374151">+ Gewinnzuschlag</text><text x="625" y="200" text-anchor="middle" font-size="14" fill="#059669">&#x2193;</text><rect x="530" y="208" width="190" height="30" rx="6" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5"/><text x="625" y="228" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">= Nettoerlös</text><text x="625" y="258" text-anchor="middle" font-size="10" fill="#374151">Was müssen wir</text><text x="625" y="273" text-anchor="middle" font-size="10" fill="#374151">mindestens erlösen?</text><text x="125" y="310" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">Phase 1</text><text x="375" y="310" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">Phase 2</text><text x="625" y="310" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">Phase 3</text></svg>' },
          { type: 'table', title: 'Schema Einkaufskalkulation', headers: ['Posten', 'Richtung'], rows: [
            ['Bruttokreditankauf (Listenpreis)', '100%'],
            ['- Rabatt', 'Abzug'],
            ['= Nettokreditankauf', 'Fakturierter Preis'],
            ['- Skonto', 'Abzug'],
            ['= Nettobarankauf', 'Zahlung an Hersteller'],
            ['+ Bezugskosten', 'Zuschlag'],
            ['= Einstand', 'Einstandspreis pro Stück']
          ]},
          { type: 'table', title: 'Schema Verkaufskalkulation (aufbaünd)', headers: ['Posten', 'Richtung'], rows: [
            ['Nettoerlös', '100%'],
            ['+ Verkaufssonderkosten', 'Zuschlag'],
            ['= Nettobarverkauf', 'Zahlung falls Skonto'],
            ['+ Skonto', 'Zuschlag'],
            ['= Nettokreditverkauf', 'Fakturierter Preis'],
            ['+ Rabatt', 'Zuschlag'],
            ['= Bruttokreditverkauf', 'Katalogpreis']
          ]},
          { type: 'concept', title: 'Zuschlagskalkulation im Produktionsbetrieb', content: 'Bei der Herstellung entstehen direkte Kosten (Einzelmaterial, Einzellöhne) und indirekte Kosten (Gemeinkosten). Die Gemeinkosten werden über Zuschlagssätze auf die Einzelkosten verrechnet. Die differenzierte Zuschlagskalkulation unterscheidet Materialkosten, Fertigungskosten und Verwaltungs-/Vertriebskosten. Bei der summarischen Zuschlagskalkulation wird nur ein einziger Zuschlagssatz verwendet.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die Bereiche der Kalkulationen orientieren sich am Betriebsprozess: Einkaufskalkulation, Kalkulation der Leistungserstellung, Verkaufskalkulation.',
            'Einkaufskalkulation: [Bruttokreditankauf] - Rabatt - Skonto + Bezugskosten = Einstand.',
            'Verkaufskalkulation: [Nettoerlös] + Verkaufssonderkosten + Skonto + Rabatt = Bruttokreditverkauf.',
            'Im Handelsbetrieb ist der Bruttogewinn die zentrale Grösse.',
            'Im Produktionsbetrieb ist die Zuschlagskalkulation das häufigste Verfahren.',
            'Die Divisionskalkulation eignet sich für Einproduktbetriebe, die Äquivalenzziffernkalkulation für ähnliche Produkte.'
          ]}
        ]
      }
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Einflussgrössen der Preisentscheidung nennen und den Preisspielraum umschreiben.',
            'Die Begriffe Grenzkosten und Grenzpreis erläutern und angemessen verwenden.',
            'Preisuntergrenzen ermitteln (lang- und kurzfristig, mit und ohne Kapazitätsengpässe).',
            'Sortimentsentscheidungen und Make-or-Buy-Entscheidungen vornehmen.',
            'Den Break-even-Punkt sowohl mengen- als auch wertmässig ermitteln und darstellen.',
            'Auswirkungen von einfacheren unternehmerischen Entscheidungen auf die Veränderung des Break-even-Punkts einschätzen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Break-even-Punkt (Nutzschwelle)', def: 'Der Punkt, an dem der Erlös gerade die Kosten deckt und der Erfolg null ist. Auch als toter Punkt bezeichnet.' },
            { term: 'Deckungsbeitrag', def: 'Erlös minus variable Kosten. Dient zur Deckung der Fixkosten und als Gewinnbeitrag.' },
            { term: 'Preisuntergrenze', def: 'Langfristig: volle Selbstkosten. Kurzfristig bei freien Kapazitäten: variable Kosten (Grenzkosten).' },
            { term: 'Grenzpreis', def: 'Bei knappen Kapazitäten: Grenzkosten plus Opportunitätskosten (entgangener Deckungsbeitrag).' },
            { term: 'Make-or-Buy', def: 'Entscheidung zwischen Eigenherstellung und Fremdbezug, basierend auf Grenzkostenüberlagerungen.' },
            { term: 'Sensitivitätsanalyse', def: 'Was-wenn-Untersuchungen zur Auswirkung von veränderten Fixkosten, Verkaufspreisen oder variablen Kosten auf die Nutzschwelle.' }
          ]},
          { type: 'concept', title: 'Entscheidungen auf Teilkostenbasis', content: 'Ergebnisse der Teilkostenrechnung werden bei der Preis- und Sortimentspolitik verwendet. Die Preisuntergrenze ist langfristig durch die vollen Selbstkosten gegeben. Kurzfristig muss bei freien Kapazitäten nur der variable Kostenanteil gedeckt sein (Grenzkosten). Bei knappen Kapazitäten ist der Grenzpreis = Grenzkosten + Opportunitätskosten. Die Sortimentsbeurteilung erfolgt aufgrund von Deckungsbeiträgen.' },
          { type: 'svg', title: 'Break-even-Diagramm', svg: '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><rect x="5" y="5" width="690" height="410" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="350" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">Break-even-Analyse (Nutzschwelle)</text><line x1="80" y1="360" x2="660" y2="360" stroke="#374151" stroke-width="2"/><line x1="80" y1="360" x2="80" y2="55" stroke="#374151" stroke-width="2"/><text x="370" y="395" text-anchor="middle" font-size="13" fill="#374151">Absatz (Menge)</text><text x="50" y="210" text-anchor="middle" font-size="13" fill="#374151" transform="rotate(-90,50,210)">CHF (Erlös / Kosten)</text><line x1="80" y1="260" x2="640" y2="260" stroke="#dc2626" stroke-width="2" stroke-dasharray="10,5"/><text x="648" y="258" font-size="11" font-weight="600" fill="#dc2626">FK</text><line x1="80" y1="260" x2="640" y2="90" stroke="#f59e0b" stroke-width="2.5"/><text x="648" y="92" font-size="11" font-weight="600" fill="#f59e0b">TK</text><line x1="80" y1="360" x2="640" y2="80" stroke="#059669" stroke-width="2.5"/><text x="648" y="78" font-size="11" font-weight="600" fill="#059669">Erlös</text><circle cx="380" cy="170" r="6" fill="#059669" stroke="#fff" stroke-width="2"/><line x1="380" y1="170" x2="380" y2="360" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="380" y1="170" x2="80" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/><rect x="320" y="145" width="120" height="24" rx="5" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1"/><text x="380" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#059669">Break-even</text><text x="380" y="378" text-anchor="middle" font-size="11" fill="#059669">NS (Menge)</text><text x="72" y="168" text-anchor="end" font-size="11" fill="#059669">NS (CHF)</text><path d="M 200 270 L 200 310" stroke="none"/><rect x="140" y="280" width="120" height="40" rx="6" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/><text x="200" y="300" text-anchor="middle" font-size="12" font-weight="600" fill="#dc2626">Verlustzone</text><text x="200" y="315" text-anchor="middle" font-size="10" fill="#991b1b">TK > Erlös</text><rect x="440" y="100" width="140" height="40" rx="6" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/><text x="510" y="120" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">Gewinnzone</text><text x="510" y="135" text-anchor="middle" font-size="10" fill="#065f46">Erlös > TK</text><text x="350" y="410" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">NS = Fixkosten / Deckungsbeitrag pro Stück</text></svg>' },
          { type: 'concept', title: 'Grundlagen der Break-even-Analyse', content: 'Die Nutzschwelle wird erreicht, wenn der Erfolg gerade null ist. Zwei gleichwertige Bedingungen: (1) Nettoerlös = Selbstkosten, (2) Deckungsbeitrag = Fixkosten. Die Herleitung kann tabellarisch, formelmässig und grafisch erfolgen. Mengenmessig: NS = Fixkosten / DB pro Mengeneinheit. Wertmässig: NS = Fixkosten / Deckungsbeitragsmarge.' },
          { type: 'methodenbox', title: 'Formeln zur Break-even-Analyse', text: 'Mengenmassige Nutzschwelle: NS = Fixkosten / Deckungsbeitrag pro Stück.\nWertmässige Nutzschwelle: NS = Fixkosten / Deckungsbeitragsmarge.\nDeckungsbeitragsmarge = Deckungsbeitrag / Nettoerlös.\nDeckungsbedarf = Fixkosten (an der Nutzschwelle); für andere Ziele: Fixkosten + gewünschter Gewinn.' },
          { type: 'concept', title: 'Sensitivitätsanalysen (Was-wenn-Fragen)', content: 'Veränderte Fixkosten: Steigende Fixkosten erhöhen die Nutzschwelle, sinkende senken sie. Veränderte Verkaufspreise: Eine Preiserhöhung macht die Nettoerlöskurve steiler und senkt die Nutzschwelle. Veränderte variable Kosten: Steigende variable Kostensätze erhöhen die Nutzschwelle.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Die Preisuntergrenze ist langfristig durch die vollen Selbstkosten, kurzfristig durch die variablen Kosten (Grenzkosten) gegeben.',
            'Bei knappen Kapazitäten ist der Grenzpreis = Grenzkosten + Opportunitätskosten.',
            'Die Sortimentsbeurteilung erfolgt aufgrund von Deckungsbeiträgen; bei Kapazitätsengpässen ist der engpassbezogene Deckungsbeitrag relevant.',
            'Die Break-even-Analyse untersucht, wie viel Ware verkauft werden muss, damit die Gewinnzone erreicht wird.',
            'An der Nutzschwelle sind zwei Bedingungen erfüllt: Nettoerlös = Selbstkosten und Deckungsbeitrag = Fixe Kosten.',
            'NS (mengenmässig) = Fixkosten / DB pro Stück; NS (wertmässig) = Fixkosten / Deckungsbeitragsmarge.'
          ]}
        ]
      }
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
        { id: 182, type: 'text', title: 'Verschuldungsfaktor', q: 'Was misst der Verschuldungsfaktor und warum gilt er als doppelt empfindlicher \u00abFiebermesser\u00bb? (3 bis 5 S\u00e4tze.)', keywords: ['Fremdkapital','Cashflow','Jahre','tilgen','Verschuldung','steigt','sinkt'], solution: 'Der Verschuldungsfaktor zeigt, wie viele Jahre es daürn w\u00fcrde, das Fremdkapital aus dem Cashflow zu tilgen. Er gilt als \u00abdoppelt empfindlich\u00bb, weil er sowohl bei steigendem Fremdkapital (Z\u00e4hler) als auch bei sinkendem Cashflow (Nenner) steigt. Bei einer Verschlechterung der Gesch\u00e4ftslage verschlechtert sich der Faktor also doppelt.', tips: [], reveal: [] },
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Zweck und die Arten von Kennzahlen umschreiben.',
            'Die wichtigsten Rahmenbedingungen der Bilanz- und Erfolgsanalyse nennen und umschreiben.',
            'Aufzeigen, was unter Bereinigung zu verstehen ist.',
            'Die wichtigsten Kennzahlen für eine Auswertung der Bilanz nennen und berechnen.',
            'Die wichtigsten Kennzahlen für eine Auswertung der Erfolgsrechnung nennen und berechnen.',
            'Kennzahlensysteme (DuPont-Schema) erklären.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kennzahlen', def: 'Verdichten Informationen. Können absolute Zahlen (Einzelzahlen, Summen, Mittelwerte) oder Verhältniszahlen (Gliederungs-, Beziehungs-, Indexzahlen) sein.' },
            { term: 'Bereinigung', def: 'Formelle Bereinigung (Zusammenzug und Aufspaltung von Posten) und materielle Bereinigung (Korrektur um stille Reserven).' },
            { term: 'Liquidität', def: 'Zahlungsbereitschaft; gemessen z.B. durch Liquiditätsgrad 2 (Quick Ratio) = (Flüssige Mittel + Forderungen) / kurzfristiges FK.' },
            { term: 'Rentabilität', def: 'Verhältnis von Erfolg zu Kapital. Eigenkapitalrentabilität = Erfolg * 100 / Eigenkapital. Gesamtkapitalrentabilität = (Erfolg + FK-Zinsen) * 100 / Gesamtkapital.' },
            { term: 'Eigenfinanzierungsgrad', def: 'Eigenkapital * 100 / Gesamtkapital. Zeigt die finanzielle Unabhängigkeit.' },
            { term: 'Anlagedeckungsgrad', def: 'Anlagedeckungsgrad 1 = Eigenkapital / Anlagevermögen. Anlagedeckungsgrad 2 = (Eigenkapital + langfristiges FK) / Anlagevermögen (goldene Bilanzregel).' },
            { term: 'DuPont-Schema', def: 'Kennzahlensystem, das von der Kapitalrentabilität (ROI) ausgeht und diese in Umsatzrentabilität und Kapitalumschlag aufteilt.' }
          ]},
          { type: 'concept', title: 'Auswertung der Bilanz', content: 'Die Bilanz wird in vier Bereichen ausgewertet: (1) Vermögensstruktur (vertikal, Aktivseite): Intensität Umlauf-/Anlagevermögen. (2) Finanzierungsstruktur (vertikal, Passivseite): Eigen-/Fremdfinanzierungsgrad. (3) Liquiditätskennzahlen (horizontal): Verhältnis von kurzfristigen Aktiven zu kurzfristigem FK. (4) Deckungsverhältnisse (horizontal): Anlagedeckungsgrad 1 und 2 (goldene Bilanzregel).' },
          { type: 'concept', title: 'Auswertung der Erfolgsrechnung', content: 'Vertikal: Aufwands- und Ertragsstruktur (prozentuale Anteile). Horizontal: Wirtschaftlichkeit und Erfolg. Wichtige Kennzahlen sind die Betriebsgewinnmarge (Unternehmensgewinnmarge) und die Umsatzrentabilität. Aktivitätskennzahlen messen den Umschlag und die durchschnittliche Verweildaür (Frist) für Vorräte, Debitoren und Kreditoren.' },
          { type: 'svg', title: 'DuPont-Schema (ROI-Baum)', svg: '<svg viewBox="0 0 750 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><rect x="5" y="5" width="740" height="390" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="375" y="35" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">DuPont-Schema</text><rect x="275" y="45" width="200" height="42" rx="8" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="2"/><text x="375" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">Return on Investment (ROI)</text><text x="375" y="80" text-anchor="middle" font-size="11" fill="#065f46">= Gewinn / Kapital × 100</text><line x1="300" y1="87" x2="175" y2="115" stroke="#059669" stroke-width="1.5"/><line x1="450" y1="87" x2="575" y2="115" stroke="#059669" stroke-width="1.5"/><text x="375" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#059669">×</text><rect x="75" y="115" width="200" height="42" rx="8" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-width="1.5"/><text x="175" y="133" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Umsatzrentabilität</text><text x="175" y="150" text-anchor="middle" font-size="11" fill="#374151">= Gewinn / Umsatz × 100</text><rect x="475" y="115" width="200" height="42" rx="8" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-width="1.5"/><text x="575" y="133" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Kapitalumschlag</text><text x="575" y="150" text-anchor="middle" font-size="11" fill="#374151">= Umsatz / Kapital</text><line x1="120" y1="157" x2="80" y2="185" stroke="#059669" stroke-width="1"/><line x1="230" y1="157" x2="270" y2="185" stroke="#059669" stroke-width="1"/><text x="175" y="177" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">/</text><rect x="20" y="185" width="120" height="35" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="80" y="207" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Gewinn</text><rect x="210" y="185" width="120" height="35" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="270" y="207" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Umsatz</text><line x1="520" y1="157" x2="480" y2="185" stroke="#059669" stroke-width="1"/><line x1="630" y1="157" x2="670" y2="185" stroke="#059669" stroke-width="1"/><text x="575" y="177" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">/</text><rect x="410" y="185" width="120" height="35" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="470" y="207" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Umsatz</text><rect x="610" y="185" width="120" height="35" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="670" y="207" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Kapital</text><line x1="50" y1="220" x2="50" y2="250" stroke="#059669" stroke-width="1"/><line x1="110" y1="220" x2="110" y2="250" stroke="#059669" stroke-width="1"/><text x="80" y="243" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">−</text><rect x="15" y="250" width="55" height="30" rx="5" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1"/><text x="42" y="270" text-anchor="middle" font-size="10" fill="#374151">Ertrag</text><rect x="82" y="250" width="60" height="30" rx="5" fill="#dc2626" fill-opacity="0.06" stroke="#dc2626" stroke-width="1"/><text x="112" y="270" text-anchor="middle" font-size="10" fill="#991b1b">Aufwand</text><line x1="640" y1="220" x2="640" y2="250" stroke="#059669" stroke-width="1"/><line x1="700" y1="220" x2="700" y2="250" stroke="#059669" stroke-width="1"/><text x="670" y="243" text-anchor="middle" font-size="12" font-weight="700" fill="#059669">+</text><rect x="605" y="250" width="55" height="30" rx="5" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1"/><text x="632" y="270" text-anchor="middle" font-size="10" fill="#374151">UV</text><rect x="672" y="250" width="55" height="30" rx="5" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1"/><text x="699" y="270" text-anchor="middle" font-size="10" fill="#374151">AV</text><rect x="50" y="310" width="280" height="35" rx="6" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="190" y="332" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Gewinnschiene: Erträge erhöhen / Kosten senken</text><rect x="420" y="310" width="280" height="35" rx="6" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/><text x="560" y="332" text-anchor="middle" font-size="12" font-weight="600" fill="#065f46">Umsatzschiene: Kapital effizienter einsetzen</text><text x="375" y="375" text-anchor="middle" font-size="13" font-weight="600" fill="#059669">ROI = Umsatzrentabilität × Kapitalumschlag</text></svg>' },
          { type: 'concept', title: 'DuPont-Schema', content: 'Das DuPont-Schema geht von der Kapitalrentabilität (Return on Investment, ROI) aus und verästelt sich über mehrere Stufen. ROI = Umsatzrentabilität * Kapitalumschlag. Die Umsatzrentabilität = Gewinn / Umsatz. Der Kapitalumschlag = Umsatz / eingesetztes Kapital. Überlegungen zur Rentabilitätsverbesserung können auf allen Stufen des Unternehmens angestellt werden.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Vor einer Auswertung sind Bereinigungen vorzunehmen: formelle (Zusammenzug/Aufspaltung) und materielle (Korrektur um stille Reserven).',
            'Vermögens- und Finanzierungsstruktur werden vertikal analysiert (z.B. Anlageintensität, Eigenfinanzierungsgrad).',
            'Liquiditätskennzahlen und Deckungsverhältnisse werden horizontal analysiert (z.B. Liquiditätsgrad 2, Anlagedeckungsgrad).',
            'Erfolgskennzahlen: Betriebsgewinnmarge, Umsatzrentabilität, Rentabilität des Eigen- und Gesamtkapitals.',
            'Aktivitätskennzahlen messen Umschlag und Verweildaür (Vorräte, Debitoren, Kreditoren).',
            'Das DuPont-Schema ist ein Kennzahlensystem zur systematischen Rentabilitätsverbesserung.'
          ]}
        ]
      }
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
            { l: '8: Ersatzinvestitionen', r: 'D: Verbrauchte Anlagen werden durch gleichwertige erneürt.' },
            { l: '9: Finanzinvestitionen', r: 'H: Dazu z\u00e4hlen Darlehen, Beteiligungen, Wertschriften u.a.' },
            { l: '10: Kapitalwertmethode', r: 'B: Dynamisches Rechenverfahren.' }
          ],
          options: ['A: Abgezinster Wert einer Zahlung.','B: Dynamisches Rechenverfahren.','D: Verbrauchte Anlagen werden durch gleichwertige erneürt.','E: Mittelbindung in Maschinen, Fahrzeugen, Apparaten, Immobilien.','F: Statisches Rechnungsverfahren.','G: Tats\u00e4chliche Verzinsung einer Investition.','H: Dazu z\u00e4hlen Darlehen, Beteiligungen, Wertschriften u.a.','I: Dienen zur Vergr\u00f6sserung der Kapazit\u00e4t des Unternehmens.','J: Wert einer Zahlung im Zeitpunkt des tats\u00e4chlichen Anfalls.'],
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
            { s: 'Mit der Renditerechnung k\u00f6nnen Investitionsprojekte ganz unterschiedlicher Art (Nutzungsdaür, Kapital usw.) miteinander verglichen werden.', c: true }
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
        { id: 197, type: 'text', title: 'Quantitative Gr\u00f6ssen', q: 'Welche quantitativen Gr\u00f6ssen sind f\u00fcr eine Investitionsentscheidung relevant? (5 Stichw\u00f6rter.)', keywords: ['Anschaffungskosten','Nutzungsdaür','Betriebskosten','Erl\u00f6se','Liquidationserl\u00f6s','Kalkulationszinssatz','Kapital'], solution: 'Quantitative Gr\u00f6ssen: Anschaffungskosten, Nutzungsdaür, j\u00e4hrliche Betriebskosten, j\u00e4hrliche Erl\u00f6se, Liquidationserl\u00f6s, Kalkulationszinssatz.', tips: [], reveal: [] },
        { id: 198, type: 'text', title: 'Qualitative Gr\u00f6ssen', q: 'Welche der quantitativen Gr\u00f6ssen lassen sich im Allgemeinen recht einfach ermitteln? (1 Satz.)', keywords: ['Anschaffungskosten','Kaufpreis','aktüll','bekannt','Offerte'], solution: 'Die Anschaffungskosten lassen sich im Allgemeinen recht einfach ermitteln, da sie auf aktüllen Offerten oder Kaufvertr\u00e4gen basieren.', tips: [], reveal: [] },
        { id: 199, type: 'text', title: 'Nutzen einer Investition', q: 'Wie l\u00e4sst sich der Nutzen einer Investition umschreiben? (1 Satz.)', keywords: ['Ertr\u00e4ge','Einsparungen','R\u00fcckfl\u00fcsse','zuk\u00fcnftig','generiert'], solution: 'Der Nutzen einer Investition l\u00e4sst sich umschreiben als die zuk\u00fcnftigen Ertr\u00e4ge (Einnahmen, Einsparungen, R\u00fcckfl\u00fcsse), die durch die Investition generiert werden.', tips: [], reveal: [] },
        { id: 200, type: 'text', title: 'Statische Verfahren', q: 'Was kennzeichnet die statischen Verfahren der Investitionsrechnung? (1 Satz.)', keywords: ['Durchschnittswerte','Periode','Zeitwert','nicht','vereinfacht'], solution: 'Die statischen Verfahren der Investitionsrechnung arbeiten mit Durchschnittswerten pro Periode und ber\u00fccksichtigen den Zeitwert des Geldes nicht (vereinfachte Betrachtung).', tips: [], reveal: [] },
        { id: 201, type: 'text', title: 'Dynamische Verfahren', q: 'Welcher Grundsatz pr\u00e4gt die dynamischen Verfahren der Investitionsrechnung? (2 bis 3 S\u00e4tze.)', keywords: ['Zeitwert','Geld','Abzinsung','fr\u00fcher','sp\u00e4ter','Zinsen','Barwert'], solution: 'Der Grundsatz lautet: Ein Franken heute ist mehr wert als ein Franken morgen (Zeitwert des Geldes). Dynamische Verfahren ber\u00fccksichtigen dies durch Auf- bzw. Abzinsung aller Ein- und Auszahlungen auf einen gemeinsamen Zeitpunkt.', tips: [], reveal: [] },
        { id: 202, type: 'text', title: 'Statische vs. dynamische Methoden', q: 'In welchen F\u00e4llen sind statische Verfahren besser geeignet als dynamische Methoden? (2 bis 3 S\u00e4tze.)', keywords: ['einfach','\u00fcberschl\u00e4gig','kurzfristig','\u00e4hnlich','Nutzungsdaür','schnell'], solution: 'Statische Verfahren sind besser geeignet, wenn: (1) eine schnelle, \u00fcberschl\u00e4gige Berechnung gen\u00fcgt, (2) die Investitionsalternativen \u00e4hnliche Nutzungsdaürn und Kapitaleins\u00e4tze haben, (3) die Investitionsbetr\u00e4ge relativ gering sind.', tips: [], reveal: [] },
        { id: 203, type: 'text', title: 'Entscheidungskriterium bei statischen Methoden', q: 'Wie wird bei den statischen Rechenmethoden entschieden? Erg\u00e4nzen Sie die einzelnen Aussagen.\nA) Kostenvergleichsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nB) Gewinnvergleichsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nC) Renditerechnung: Gew\u00e4hlt wird diejenige Investition, die ...\nD) Amortisationsrechnung: Gew\u00e4hlt wird diejenige Investition, die ...', keywords: ['tiefsten','h\u00f6chsten','Kosten','Gewinn','Rendite','k\u00fcrzeste','R\u00fcckflussdaür'], solution: 'A) ... die tiefsten Kosten verursacht.\nB) ... den h\u00f6chsten Gewinn erzielt.\nC) ... die h\u00f6chste Rendite aufweist.\nD) ... die k\u00fcrzeste R\u00fcckflussdaür (Amortisationsdaür) hat.', tips: [], reveal: [] },
        {
          id: 204, type: 'calc',
          title: 'Investitionsvergleich',
          q: 'Das Getr\u00e4nkeunternehmen Hahnenburger AG steht vor der Anschaffung einer neür Abf\u00fcllanlage. Vergleichen Sie Anlage A und B:\n\nAnlage A: Anschaffungskosten 240 000, Wartung 2 000, Lohn 5 600, Material 1 200, Energie 900, Jahreserls 60 000, Liquidationserls 0, Nutzung 8 Jahre, Kalk. Zinssatz 6%.\nAnlage B: Anschaffungskosten 180 000, Wartung 1 200, Lohn 15 000, Material 1 200, Energie 2 100, Jahreserls 65 000, Liquidationserls 0, Nutzung 8 Jahre, Kalk. Zinssatz 6%.\n\nBerechnen Sie die j\u00e4hrlichen Kosten (inkl. Abschreibung und kalkulatorische Zinsen).',
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
          q: 'Die folgende Tabelle enth\u00e4lt Daten f\u00fcr f\u00fcnf Investitionsprojekte. Wie hoch ist jeweils das durchschnittlich investierte Kapital?\n\nProjekt 1: Kaufpreis 100 000, Bezugskosten 0, Montagekosten 0, Nutzungsdaür 5 Jahre, Restwert 0.\nProjekt 2: Kaufpreis 150 000, Bezugskosten 15 000, Montagekosten 35 000, Nutzungsdaür 8 Jahre, Restwert 0.',
          fields: [
            { label: 'Projekt 1: Durchschn. investiertes Kapital', answer: 50000, unit: 'CHF' },
            { label: 'Projekt 2: Durchschn. investiertes Kapital', answer: 100000, unit: 'CHF' }
          ],
          tips: [], reveal: []
        },
        {
          id: 206, type: 'calc',
          title: 'Garage: Investitionsvergleich',
          q: 'Eine Garage muss einen neün Werkstattplatz mit Hebeb\u00fchne und Diagnosestation einrichten. Zwei Anlagen stehen daf\u00fcr zur Auswahl.\n\nAnlage A: Kapitaleinsatz 600, Nutzungsdaür 5 Jahre, Kalk. Zinssatz 10%, J\u00e4hrliche Betriebskosten 500.\nAnlage B: Kapitaleinsatz 720, Nutzungsdaür 6 Jahre, Kalk. Zinssatz 10%, J\u00e4hrliche Betriebskosten 460.\n\nBerechnen Sie die j\u00e4hrliche Abschreibung.',
          fields: [
            { label: 'Anlage A: Abschreibung/Jahr', answer: 120, unit: '(Kurzzahlen)' },
            { label: 'Anlage B: Abschreibung/Jahr', answer: 120, unit: '(Kurzzahlen)' }
          ],
          tips: [], reveal: []
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Bedeutung von Investitionen erklären und die wichtigsten Investitionsarten nennen.',
            'Die Grundlagen für eine Investitionsrechnung darstellen.',
            'Die wichtigsten statischen und dynamischen Methoden der Investitionsrechnung nennen und ihre Anwendung an einfachen Beispielen nachvollziehen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Investitionen', def: 'Führen zunächst zu Auszahlungen und später zu Einzahlungen. Durch Investitionen werden Mittel gebunden. Sachinvestitionen, Finanzinvestitionen und immaterielle Investitionen.' },
            { term: 'Finanzierungen', def: 'Führen zunächst zu Einzahlungen und später zu Auszahlungen (Tilgungen, Zinsen). Durch Finanzierungen werden Mittel beschafft.' },
            { term: 'Statische Methoden', def: 'Berücksichtigen den Zeitfaktor nicht (keine Auf-/Abzinsung): Kostenvergleichsrechnung, Gewinnvergleichsrechnung, Renditerechnung, Amortisationsrechnung.' },
            { term: 'Dynamische Methoden', def: 'Berücksichtigen den Zeitfaktor mittels Zinseszinsrechnung: Kapitalwertmethode, Annuitätenmethode, Methode des internen Ertragssatzes, dynamische Pay-back-Methode.' },
            { term: 'Kostenvergleichsrechnung', def: 'Vergleich der Kosten zwischen Investitionsalternativen. Entscheidungskriterium: Kostendifferenz.' },
            { term: 'Renditerechnung (Rentabilitätsrechnung)', def: 'Gewinn bezogen auf das eingesetzte Kapital ergibt die Rentabilität pro Investition.' },
            { term: 'Amortisationsrechnung (Pay-back)', def: 'Berechnet, in wie vielen Jahren die investierte Geldsumme zurückfliesst. Statisch: Durchschnittswerte. Dynamisch: Abgezinste Zahlungen.' }
          ]},
          { type: 'concept', title: 'Arten und Anlässe von Investitionen', content: 'Nach der Art der Mittelanlage: Sachinvestitionen (Immobilien, Maschinen, Werkzeuge), Finanzinvestitionen (Darlehen, Beteiligungen, Wertschriften) und immaterielle Investitionen (Forschung, Patente, Lizenzen, Werbung). Nach dem Zweck: Gründungs-, Ersatz-, Modernisierungs-, Rationalisierungs-, Erweiterungs-, Umstellungs-, Diversifizierungs-, Sicherungs- und Umwelt-/Sozialinvestitionen.' },
          { type: 'concept', title: 'Statische Methoden der Investitionsrechnung', content: 'Statische Methoden berücksichtigen den Zeitfaktor nicht. Kostenvergleichsrechnung: Vergleich der unterschiedlichen Kosten. Gewinnvergleichsrechnung: Vergleich der Gewinne (Erlöse minus Kosten). Renditerechnung: Gewinn bezogen auf eingesetztes Kapital. Amortisationsrechnung: In wie vielen Jahren fliesst die Investitionssumme zurück? Vorteil: einfach und anschaulich.' },
          { type: 'svg', title: 'Statische vs. dynamische Investitionsrechnung', svg: '<svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><rect x="5" y="5" width="710" height="390" rx="12" fill="none" stroke="#059669" stroke-width="2"/><text x="360" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="#059669">Methoden der Investitionsrechnung</text><rect x="25" y="55" width="320" height="310" rx="10" fill="#059669" fill-opacity="0.06" stroke="#059669" stroke-width="1.5"/><text x="185" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Statische Methoden</text><text x="185" y="98" text-anchor="middle" font-size="11" fill="#6b7280">Ohne Zeitfaktor (Durchschnittswerte)</text><rect x="45" y="115" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="60" y="130" font-size="11" fill="#059669" font-weight="600">1.</text><text x="80" y="130" font-size="12" fill="#374151">Kostenvergleichsrechnung</text><text x="80" y="146" font-size="10" fill="#6b7280">→ tiefste Kosten wählen</text><rect x="45" y="160" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="60" y="175" font-size="11" fill="#059669" font-weight="600">2.</text><text x="80" y="175" font-size="12" fill="#374151">Gewinnvergleichsrechnung</text><text x="80" y="191" font-size="10" fill="#6b7280">→ höchsten Gewinn wählen</text><rect x="45" y="205" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="60" y="220" font-size="11" fill="#059669" font-weight="600">3.</text><text x="80" y="220" font-size="12" fill="#374151">Renditerechnung</text><text x="80" y="236" font-size="10" fill="#6b7280">→ höchste Rendite wählen</text><rect x="45" y="250" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="60" y="265" font-size="11" fill="#059669" font-weight="600">4.</text><text x="80" y="265" font-size="12" fill="#374151">Amortisationsrechnung (Pay-back)</text><text x="80" y="281" font-size="10" fill="#6b7280">→ kürzeste Rückflussdaür wählen</text><rect x="45" y="305" width="280" height="45" rx="6" fill="#059669" fill-opacity="0.1"/><text x="185" y="322" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Vorteil: Einfach, schnell</text><text x="185" y="340" text-anchor="middle" font-size="11" fill="#991b1b">Nachteil: Zeitwert ignoriert</text><rect x="375" y="55" width="320" height="310" rx="10" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-width="1.5"/><text x="535" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#065f46">Dynamische Methoden</text><text x="535" y="98" text-anchor="middle" font-size="11" fill="#6b7280">Mit Zeitfaktor (Auf-/Abzinsung)</text><rect x="395" y="115" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="410" y="130" font-size="11" fill="#059669" font-weight="600">1.</text><text x="430" y="130" font-size="12" fill="#374151">Kapitalwertmethode (NPV)</text><text x="430" y="146" font-size="10" fill="#6b7280">→ positiver Kapitalwert = vorteilhaft</text><rect x="395" y="160" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="410" y="175" font-size="11" fill="#059669" font-weight="600">2.</text><text x="430" y="175" font-size="12" fill="#374151">Annuitätenmethode</text><text x="430" y="191" font-size="10" fill="#6b7280">→ gleichmässige Jahresbeträge</text><rect x="395" y="205" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="410" y="220" font-size="11" fill="#059669" font-weight="600">3.</text><text x="430" y="220" font-size="12" fill="#374151">Interner Ertragssatz (IRR)</text><text x="430" y="236" font-size="10" fill="#6b7280">→ tats. Verzinsung der Investition</text><rect x="395" y="250" width="280" height="38" rx="6" fill="#fff" stroke="#059669" stroke-width="1"/><text x="410" y="265" font-size="11" fill="#059669" font-weight="600">4.</text><text x="430" y="265" font-size="12" fill="#374151">Dynamische Pay-back-Methode</text><text x="430" y="281" font-size="10" fill="#6b7280">→ abgezinste Rückflüsse</text><rect x="395" y="305" width="280" height="45" rx="6" fill="#059669" fill-opacity="0.15"/><text x="535" y="322" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">Vorteil: Exakt, Zeitwert berücksichtigt</text><text x="535" y="340" text-anchor="middle" font-size="11" fill="#991b1b">Nachteil: Aufwendiger, Schätzungen nötig</text><text x="360" y="385" text-anchor="middle" font-size="13" font-weight="600" fill="#059669">Grundsatz: Ein Franken heute ist mehr wert als ein Franken morgen</text></svg>' },
          { type: 'concept', title: 'Dynamische Methoden der Investitionsrechnung', content: 'Dynamische Methoden beziehen alle Zahlungsströme über die ganze Nutzungszeit ein und berücksichtigen den Zeitfaktor mittels Zinseszinsrechnung. Grundsatz: Geld, das heute zur Verfügung steht, ist mehr wert als Geld in der Zukunft. Künftige Zahlungen werden auf den heutigen Zeitpunkt abgezinst. Der Kalkulationszinssatz wird vom Investor festgelegt; die tatsächlich erreichte Verzinsung heisst interner Ertragssatz.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Investitionen unterscheiden sich nach Art (Sach-, Finanz-, immaterielle) und nach Zweck (Gründungs-, Ersatz-, Erweiterungsinvestitionen usw.).',
            'Mithilfe von Investitionsrechnungen soll die Vorteilhaftigkeit eines oder mehrerer Investitionsobjekte ermittelt werden.',
            'Wichtige quantifizierbare Grössen: Investitionsbetrag, Nutzen, Kalkulationszinssatz, Nutzungsdaür, Liquidationserlös.',
            'Statische Methoden (ohne Zeitfaktor): Kostenvergleich, Gewinnvergleich, Renditerechnung, Amortisationsrechnung.',
            'Dynamische Methoden (mit Zeitfaktor): Kapitalwertmethode, Annuitätenmethode, interner Ertragssatz, dynamische Pay-back-Methode.'
          ]}
        ]
      }
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
        { id: 224, type: 'text', title: 'Kurzfristige Erfolgsrechnungen', q: 'Wozu dienen kurzfristige Erfolgsrechnungen? (2 bis 3 S\u00e4tze.)', keywords: ['unterjhrig','Kontrolle','Quartal','Monat','Steürung','fr\u00fchzeitig','Abweichung'], solution: 'Kurzfristige Erfolgsrechnungen (monatlich, quartalweise) dienen der unterj\u00e4hrigen Kontrolle und Steürung. Sie erm\u00f6glichen es, Abweichungen fr\u00fchzeitig zu erkennen und Gegenmassnahmen einzuleiten.', tips: [], reveal: [] },
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
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Führungskreislauf, die Führungsebenen und den Zielsetzungsprozess umschreiben.',
            'Zwischen Strategieentwicklung und -fortschreibung differenzieren.',
            'Den Budgetkreislauf auf der operativen Ebene beschreiben und den Aufbau des Budgetsystems erklären.',
            'Wichtige Formen von Soll-Ist-Vergleichen für die Kontrolle nennen.'
          ]},
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Budget', def: 'Ergebnis des Budgetprozesses. Dient als Vorgabe bei der Umsetzung der Planung. Liefert Soll-Werte, mit denen die Ist-Werte verglichen werden können.' },
            { term: 'Führungskreislauf', def: 'Vier Phasen: (1) Planen, (2) Entscheiden, (3) Anordnen (Aufgabenübertragung), (4) Kontrollieren. Gilt auf strategischer und operativer Ebene.' },
            { term: 'Strategische Planung', def: 'Mittel- bis langfristige Planung. Strategische Entwicklungen werden durch Businesspläne, strategische Fortschreibung durch Mehrjahrespläne dargestellt.' },
            { term: 'Operative Planung (Jahresbudget)', def: 'Kurzfristige Planung auf Jahresbasis mit hohem Detaillierungsgrad. Einzelpläne werden zu Gesamtrechnungen (Plan-ER, Plan-Bilanz, Plan-Geldflussrechnung) zusammengeführt.' },
            { term: 'Soll-Ist-Vergleich', def: 'Vergleich zwischen Plan-Werten (Soll) und effektiven Werten (Ist). Grundlage für Controllingberichte auf Detail- und Gesamtebene.' },
            { term: 'Abweichungsanalyse', def: 'Untersuchung von Preis-/Satzabweichungen und Mengenabweichungen. Starres Budget: Plan bei 100% Beschäftigung. Flexibles Budget: Plan angepasst an tatsächliche Beschäftigung.' },
            { term: 'Finanzmanagement', def: 'Umfasst Finanzplanung und -kontrolle. Am detailliertesten ist der Liquiditätsplan, der auf kurze Zeiträume (Tage, Wochen) ausgerichtet ist.' }
          ]},
          { type: 'concept', title: 'Führungskreislauf und Führungsebenen', content: 'Ein Unternehmen braucht Visionen und Ziele. Die Realisierung erfolgt Schritt für Schritt, Jahr für Jahr. Der Führungskreislauf (Planen, Entscheiden, Anordnen, Kontrollieren) gilt auf der strategischen und operativen Ebene. Die Operationalisierung der Ziele erfolgt von oben nach unten (Zielpyramide), die Rückkopplung von unten nach oben über die Ergebnisse der Zielerreichung.' },
          { type: 'svg', title: 'Führungskreislauf', svg: '<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif"><defs><linearGradient id="fkBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.06"/><stop offset="100%" stop-color="#059669" stop-opacity="0.02"/></linearGradient><linearGradient id="fkBox" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669" stop-opacity="0.2"/><stop offset="100%" stop-color="#059669" stop-opacity="0.08"/></linearGradient></defs><rect x="5" y="5" width="690" height="390" rx="12" fill="url(#fkBg)" stroke="#059669" stroke-width="2"/><text x="245" y="35" text-anchor="middle" font-size="16" font-weight="700" fill="#059669">Führungskreislauf</text><circle cx="245" cy="195" r="140" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="6,4"/><circle cx="245" cy="195" r="40" fill="#059669" fill-opacity="0.12" stroke="#059669" stroke-width="1.5"/><text x="245" y="192" text-anchor="middle" font-size="14" font-weight="700" fill="#059669">Führung</text><text x="245" y="207" text-anchor="middle" font-size="9" fill="#065f46">Kreislauf</text><rect x="195" y="45" width="100" height="38" rx="8" fill="url(#fkBox)" stroke="#059669" stroke-width="1.5"/><text x="245" y="69" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Planen</text><rect x="355" y="148" width="110" height="38" rx="8" fill="url(#fkBox)" stroke="#059669" stroke-width="1.5"/><text x="410" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Entscheiden</text><rect x="195" y="305" width="100" height="38" rx="8" fill="url(#fkBox)" stroke="#059669" stroke-width="1.5"/><text x="245" y="329" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Kontrollieren</text><rect x="85" y="148" width="100" height="38" rx="8" fill="url(#fkBox)" stroke="#059669" stroke-width="1.5"/><text x="135" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">Anordnen</text><path d="M295 62 Q340 80 355 148" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#fkArrow)"/><path d="M355 186 Q340 260 295 310" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#fkArrow)"/><path d="M195 320 Q140 300 135 186" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#fkArrow)"/><path d="M135 148 Q140 90 195 65" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#fkArrow)"/><defs><marker id="fkArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#059669"/></marker></defs><text x="330" y="100" text-anchor="middle" font-size="10" fill="#374151">Ziele setzen</text><text x="350" y="260" text-anchor="middle" font-size="10" fill="#374151">Ergebnisse</text><text x="350" y="275" text-anchor="middle" font-size="10" fill="#374151">prüfen</text><text x="125" y="260" text-anchor="middle" font-size="10" fill="#374151">Aufgaben</text><text x="125" y="275" text-anchor="middle" font-size="10" fill="#374151">übertragen</text><text x="145" y="110" text-anchor="middle" font-size="10" fill="#374151">Rück-</text><text x="145" y="125" text-anchor="middle" font-size="10" fill="#374151">kopplung</text><rect x="500" y="60" width="185" height="70" rx="10" fill="#059669" fill-opacity="0.15" stroke="#059669" stroke-width="1.5"/><text x="592" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Strategisch</text><text x="592" y="103" text-anchor="middle" font-size="11" fill="#374151">Mittel-/langfristig</text><text x="592" y="120" text-anchor="middle" font-size="11" fill="#374151">(3 &#x2013; 5 Jahre)</text><rect x="500" y="145" width="185" height="70" rx="10" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="1.5"/><text x="592" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Operativ</text><text x="592" y="188" text-anchor="middle" font-size="11" fill="#374151">Kurzfristig</text><text x="592" y="205" text-anchor="middle" font-size="11" fill="#374151">(1 Jahr / Budget)</text><text x="592" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#059669">Führungsebenen</text><path d="M592 130 L592 145" fill="none" stroke="#059669" stroke-width="1.5"/><text x="592" y="240" text-anchor="middle" font-size="10" fill="#374151">Strategische Ziele werden</text><text x="592" y="255" text-anchor="middle" font-size="10" fill="#374151">operativ umgesetzt</text><text x="592" y="275" text-anchor="middle" font-size="10" fill="#374151">(Top-down: Zielpyramide)</text><text x="592" y="295" text-anchor="middle" font-size="10" fill="#374151">(Bottom-up: Rückkopplung)</text><path d="M570 260 L570 290" fill="none" stroke="#059669" stroke-width="1" marker-end="url(#fkArrow)"/><path d="M614 290 L614 260" fill="none" stroke="#059669" stroke-width="1" marker-end="url(#fkArrow)"/></svg>' },
          { type: 'concept', title: 'Strategische Planung', content: 'Strategische Entwicklungen werden bevorzugt in Form von Businessplänen dargestellt. Businesspläne werden nicht nur bei Unternehmensgründungen eingesetzt, sondern auch bei Erneürung, Erweiterung oder Umgestaltung. Die strategische Fortschreibung geht um Mehrjahrespläne bestehender Geschäfte. Beide werden in Gesamtrechnungen (Plan-ER, Plan-Bilanz, Plan-Geldflussrechnung) integriert.' },
          { type: 'concept', title: 'Operative Planung und Budgetierung', content: 'Auf der operativen Ebene werden Jahresbudgets erstellt. Einzelpläne (Absatz-, Produktions-, Personal-, Beschaffungs-, Investitionsplan usw.) werden zu Gesamtrechnungen zusammengeführt. Die Budgeterstellung ist selbst ein Kreislauf: Zahlen von Einzelplänen werden zu Gesamtrechnungen zusammengezogen und mit Schlüsselkennzahlen geprüft, ob die finanziellen Ziele erreichbar sind.' },
          { type: 'concept', title: 'Controllingberichte und Soll-Ist-Vergleiche', content: 'Controlling baut auf dem betrieblichen Rechnungswesen auf. Soll-Ist-Vergleiche werden auf Detailstufe (Kostenstellen- und Kostenträgerberichte) und auf der Stufe von Gesamtrechnungen durchgeführt. Abweichungen können in Mengen- und Preis-/Satzabweichungen zerlegt werden. Bei einem flexiblen Budget wird der Plan-Wert an die tatsächliche Beschäftigung angepasst.' },
          { type: 'concept', title: 'Finanzmanagement und Finanzplanung', content: 'Das Finanzmanagement koordiniert die Beschaffung, Verwendung und Verwaltung der finanziellen Mittel. Die Finanzplanung ist eine rollende Planung. Am detailliertesten ist der Liquiditätsplan, der auf kurze Zeiträume (Tage, Wochen) ausgerichtet ist. Liquidität ist eines der finanziellen Hauptziele: Zahlungsunfähigkeit kann zu Betreibungen und Konkurs führen.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Budgets sind die rechnerische Unterstützung der Planungsphase im Führungskreislauf.',
            'Die Führungsebenen sind über die Ziele miteinander verbunden; finanzwirtschaftliche Ziele haben eine Leit- und eine Messfunktion.',
            'Auf der strategischen Ebene werden Gesamtrechnungen für die mittel- bis langfristige Planung eingesetzt (Businesspläne, Mehrjahrespläne).',
            'Auf der operativen Ebene werden Jahresbudgets erstellt; Einzelpläne werden zu Gesamtrechnungen zusammengeführt.',
            'Die Budgeterstellung ist selbst ein Kreislauf mit Schlüsselkennzahlen zur Prüfung der Zielerreichung.',
            'Controllingberichte: Soll-Ist-Vergleiche auf Detail- und Gesamtebene.',
            'Das Finanzmanagement umfasst Finanzplanung und -kontrolle; am detailliertesten ist der Liquiditätsplan.'
          ]}
        ]
      }
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
    { term: 'Abschreibung', def: 'Wertminderung von Anlageg\u00fctern \u00fcber die Nutzungsdaür.' },
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
    { term: 'EBIT', def: 'Earnings before Interest and Taxes = Erfolg vor Zinsen und Steürn.' },
    { term: 'EBITDA', def: 'Earnings before Interest, Taxes, Depreciation and Amortization.' },
    { term: 'Eigenfinanzierungsgrad', def: 'Eigenkapital \u00d7 100 / Gesamtkapital.' },
    { term: 'Liquidit\u00e4tsgrad 2', def: '(Fl\u00fcssige Mittel + Forderungen) \u00d7 100 / kurzfristiges Fremdkapital.' },
    { term: 'Return on Investment', def: 'Gewinn \u00d7 100 / investiertes Kapital.' },
    { term: 'Kapitalumschlag', def: 'Umsatz / Kapital. Zeigt wie oft das Kapital pro Periode umgesetzt wird.' },
    { term: 'DuPont-Schema', def: 'Kennzahlensystem mit Kapitalrentabilit\u00e4t an der Spitze.' },
    { term: 'Investitionsrechnung', def: 'Verfahren zur Beurteilung der Vorteilhaftigkeit von Investitionen.' },
    { term: 'Kostenvergleichsrechnung', def: 'Statische Methode: Vergleich der j\u00e4hrlichen Kosten von Investitionsalternativen.' },
    { term: 'Gewinnvergleichsrechnung', def: 'Statische Methode: Vergleich der j\u00e4hrlichen Gewinne von Investitionsalternativen.' },
    { term: 'Amortisationsrechnung', def: 'Pay-back-Methode: Berechnung der R\u00fcckflussdaür einer Investition.' },
    { term: 'Budget', def: 'Finanzplan f\u00fcr eine zuk\u00fcnftige Periode auf Basis von Sch\u00e4tzungen.' },
    { term: 'Soll-Ist-Vergleich', def: 'Controlling-Instrument: Vergleich von geplanten und tats\u00e4chlichen Werten.' }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KONTENRAHMEN KMU (Reference Data)
  // ═══════════════════════════════════════════════════════════════════════════
  kontenrahmen: [
    { cls: 1, clsName: 'Aktiven', groups: [
      { grp: '10', name: 'Fl\u00fcssige Mittel, Wertschriften, Forderungen', accounts: [
        { nr: '1000', n: 'Kasse' }, { nr: '1010', n: 'Post' }, { nr: '1020', n: 'Bankguthaben' },
        { nr: '1040', n: 'Kassenobligationen' }, { nr: '1060', n: 'Wertschriften (kurzfristig)' },
        { nr: '1100', n: 'Forderungen aus L+L (Debitoren)' }, { nr: '1109', n: 'WB Forderungen (Delkredere)' },
        { nr: '1140', n: 'Vorsch\u00fcsse und Darlehen (kurzfr.)' }, { nr: '1170', n: 'Vorsteür MWST' },
        { nr: '1176', n: 'Verrechnungssteür' }, { nr: '1180', n: 'Sonstige kurzfristige Forderungen' }
      ]},
      { grp: '12', name: 'Vorr\u00e4te und nicht fakturierte Dienstleistungen', accounts: [
        { nr: '1200', n: 'Handelswaren' }, { nr: '1210', n: 'Rohstoffe' },
        { nr: '1220', n: 'Halbfabrikate' }, { nr: '1230', n: 'Fertigfabrikate' },
        { nr: '1250', n: 'Nicht fakturierte Dienstleistungen' }, { nr: '1260', n: 'Fertige Erzeugnisse' },
        { nr: '1280', n: 'WB Vorr\u00e4te' }
      ]},
      { grp: '13', name: 'Aktive Rechnungsabgrenzung', accounts: [
        { nr: '1300', n: 'ARA (Transitorische Aktiven)' }
      ]},
      { grp: '14', name: 'Finanzanlagen', accounts: [
        { nr: '1440', n: 'Wertschriften des AV' }, { nr: '1450', n: 'Darlehen (Aktivdarlehen)' },
        { nr: '1460', n: 'Festgelder (langfristig)' }, { nr: '1480', n: 'Beteiligungen' }
      ]},
      { grp: '15', name: 'Mobile Sachanlagen', accounts: [
        { nr: '1500', n: 'Maschinen und Apparate' }, { nr: '1510', n: 'Mobiliar und Einrichtungen' },
        { nr: '1520', n: 'B\u00fcromaschinen, Informatik' }, { nr: '1530', n: 'Fahrzeuge' },
        { nr: '1540', n: 'Werkzeuge und Ger\u00e4te' }
      ]},
      { grp: '16', name: 'Immobile Sachanlagen', accounts: [
        { nr: '1600', n: 'Gesch\u00e4ftsliegenschaften' }, { nr: '1610', n: 'Wohnliegenschaften' },
        { nr: '1680', n: 'WB Immobilien' }
      ]},
      { grp: '17', name: 'Immaterielle Anlagen', accounts: [
        { nr: '1700', n: 'Patente, Marken, Lizenzen' }, { nr: '1770', n: 'Goodwill' },
        { nr: '1780', n: 'WB immaterielle Anlagen' }
      ]}
    ]},
    { cls: 2, clsName: 'Passiven', groups: [
      { grp: '20', name: 'Kurzfristiges Fremdkapital', accounts: [
        { nr: '2000', n: 'Verbindlichkeiten aus L+L (Kreditoren)' },
        { nr: '2030', n: 'Erhaltene Anzahlungen' }, { nr: '2050', n: 'Kontokorrent-Schulden' },
        { nr: '2100', n: 'Bankverbindlichkeiten (kurzfr.)' },
        { nr: '2120', n: 'Verbindlichkeiten Leasing (kurzfr.)' },
        { nr: '2200', n: 'Geschuldete MWST (Umsatzsteür)' },
        { nr: '2206', n: 'Abrechnungskonto MWST' },
        { nr: '2210', n: '\u00dcbrige geschuldete Steürn' },
        { nr: '2270', n: 'Qüllensteür' }, { nr: '2280', n: 'Direkte Steürn' }
      ]},
      { grp: '23', name: 'Passive Rechnungsabgrenzung und kurzfristige R\u00fcckstellungen', accounts: [
        { nr: '2300', n: 'PRA (Transitorische Passiven)' },
        { nr: '2330', n: 'Kurzfristige R\u00fcckstellungen' }
      ]},
      { grp: '24', name: 'Langfristiges Fremdkapital', accounts: [
        { nr: '2400', n: 'Bankverbindlichkeiten (langfr.)' },
        { nr: '2420', n: 'Verbindlichkeiten Leasing (langfr.)' },
        { nr: '2450', n: 'Darlehen (Passivdarlehen)' }, { nr: '2451', n: 'Hypotheken' },
        { nr: '2500', n: 'Obligationenanleihen' },
        { nr: '2600', n: 'R\u00fcckstellungen (langfr.)' }
      ]},
      { grp: '28', name: 'Eigenkapital', accounts: [
        { nr: '2800', n: 'Aktienkapital / Stammkapital' },
        { nr: '2810', n: 'Partizipationskapital' },
        { nr: '2850', n: 'Privat (Einzelunternehmen)' },
        { nr: '2891', n: 'Jahresgewinn oder -verlust' },
        { nr: '2900', n: 'Gesetzliche Kapitalreserve (Agio)' },
        { nr: '2950', n: 'Gesetzliche Gewinnreserve' },
        { nr: '2960', n: 'Freiwillige Gewinnreserve' },
        { nr: '2970', n: 'Gewinn- oder Verlustvortrag' },
        { nr: '2979', n: 'Bilanzgewinn oder -verlust' }
      ]}
    ]},
    { cls: 3, clsName: 'Betrieblicher Ertrag aus Lieferungen und Leistungen', groups: [
      { grp: '30', name: 'Produktionserl\u00f6se', accounts: [
        { nr: '3000', n: 'Produktionserl\u00f6se' }, { nr: '3010', n: 'Erl\u00f6se Nebenprodukte' }
      ]},
      { grp: '32', name: 'Handelserl\u00f6se', accounts: [
        { nr: '3200', n: 'Handelserl\u00f6se (Warenertrag)' }, { nr: '3210', n: 'Erl\u00f6se Handelswaren B' }
      ]},
      { grp: '34', name: 'Dienstleistungserl\u00f6se', accounts: [
        { nr: '3400', n: 'Dienstleistungserl\u00f6se' }, { nr: '3410', n: 'Honorarertrag' }
      ]},
      { grp: '36', name: '\u00dcbrige Erl\u00f6se', accounts: [
        { nr: '3600', n: '\u00dcbrige Erl\u00f6se aus L+L' }
      ]},
      { grp: '37', name: 'Eigenleistungen und Eigenverbrauch', accounts: [
        { nr: '3700', n: 'Eigenleistungen' }, { nr: '3710', n: 'Eigenverbrauch' }
      ]},
      { grp: '38', name: 'Erl\u00f6sminderungen', accounts: [
        { nr: '3800', n: 'Skonti' }, { nr: '3805', n: 'Verluste Forderungen (Debitorenverluste)' },
        { nr: '3810', n: 'Rabatte, Preisnachl\u00e4sse' },
        { nr: '3900', n: 'Bestandes\u00e4nderungen Halb- und Fertigfabrikate' }
      ]}
    ]},
    { cls: 4, clsName: 'Aufwand f\u00fcr Material, Handelswaren, Dienstleistungen', groups: [
      { grp: '40', name: 'Materialaufwand', accounts: [
        { nr: '4000', n: 'Materialaufwand' }, { nr: '4070', n: 'Skonti auf Materialaufwand' },
        { nr: '4080', n: 'Bestandes\u00e4nderungen Materialvorr\u00e4te' }
      ]},
      { grp: '42', name: 'Handelswarenaufwand', accounts: [
        { nr: '4200', n: 'Handelswarenaufwand (Warenaufwand)' }, { nr: '4270', n: 'Skonti auf Handelswaren' },
        { nr: '4280', n: 'Bestandes\u00e4nderungen Handelswaren' }
      ]},
      { grp: '44', name: 'Aufwand f\u00fcr Drittleistungen', accounts: [
        { nr: '4400', n: 'Aufwand f\u00fcr Drittleistungen' }, { nr: '4500', n: 'Energieaufwand (Produktion)' }
      ]}
    ]},
    { cls: 5, clsName: 'Personalaufwand', groups: [
      { grp: '50', name: 'L\u00f6hne und Geh\u00e4lter', accounts: [
        { nr: '5000', n: 'Lohnaufwand' }, { nr: '5040', n: 'Leistungen Dritter (Tempor\u00e4re)' },
        { nr: '5060', n: 'Erfolgsbeteiligungen' }
      ]},
      { grp: '52', name: 'Sozialversicherungsaufwand', accounts: [
        { nr: '5200', n: 'AHV, IV, EO, ALV' }, { nr: '5210', n: 'FAK (Familienausgleichskasse)' },
        { nr: '5220', n: 'BVG (Pensionskasse)' }, { nr: '5230', n: 'UVG (Unfallversicherung)' },
        { nr: '5240', n: 'KTG (Krankentaggeld)' }, { nr: '5250', n: 'Qüllensteür' }
      ]},
      { grp: '57', name: '\u00dcbriger Personalaufwand', accounts: [
        { nr: '5700', n: '\u00dcbriger Personalaufwand' }, { nr: '5800', n: 'Ausbildung und Weiterbildung' },
        { nr: '5810', n: 'Spesen' }, { nr: '5820', n: 'Personalverpflegung' },
        { nr: '5900', n: 'Leistungen von Sozialversicherungen' }
      ]}
    ]},
    { cls: 6, clsName: '\u00dcbriger betrieblicher Aufwand, Abschreibungen, Finanzerfolg', groups: [
      { grp: '60', name: 'Raumaufwand', accounts: [
        { nr: '6000', n: 'Raumaufwand (Mietaufwand)' }, { nr: '6010', n: 'Nebenkosten (Heizung, Strom)' },
        { nr: '6040', n: 'Reinigung' }, { nr: '6050', n: 'Unterhalt Gesch\u00e4ftsr\u00e4ume' }
      ]},
      { grp: '61', name: 'Unterhalt und Reparaturen', accounts: [
        { nr: '6100', n: 'Unterhalt und Reparaturen Maschinen' },
        { nr: '6110', n: 'Unterhalt und Reparaturen Mobiliar' },
        { nr: '6120', n: 'Unterhalt und Reparaturen Fahrzeuge' },
        { nr: '6130', n: 'Leasingaufwand Mobilien' }
      ]},
      { grp: '62', name: 'Fahrzeug- und Transportaufwand', accounts: [
        { nr: '6200', n: 'Fahrzeugaufwand' }, { nr: '6210', n: 'Transportaufwand' },
        { nr: '6260', n: 'Betriebsversicherungen' }
      ]},
      { grp: '63', name: 'Sachversicherungen, Abgaben', accounts: [
        { nr: '6300', n: 'Sachversicherungen' }, { nr: '6360', n: 'Abgaben, Geb\u00fchren, Bewilligungen' }
      ]},
      { grp: '65', name: 'Verwaltungsaufwand', accounts: [
        { nr: '6500', n: 'B\u00fcromaterial, Drucksachen' }, { nr: '6503', n: 'Fachliteratur' },
        { nr: '6510', n: 'Telefon, Internet' }, { nr: '6520', n: 'Beitr\u00e4ge, Spenden' },
        { nr: '6530', n: 'Buchf\u00fchrung und Beratung' }, { nr: '6570', n: 'Informatikaufwand' },
        { nr: '6580', n: 'Rechts- und Beratungskosten' }
      ]},
      { grp: '66', name: 'Werbeaufwand', accounts: [
        { nr: '6600', n: 'Werbeaufwand' }, { nr: '6610', n: 'Reiseaufwand, Kundenspesen' },
        { nr: '6620', n: 'Messeaufwand' }
      ]},
      { grp: '68', name: 'Abschreibungen', accounts: [
        { nr: '6800', n: 'Abschreibungen Maschinen' }, { nr: '6810', n: 'Abschreibungen Mobiliar' },
        { nr: '6820', n: 'Abschreibungen B\u00fcromaschinen/IT' }, { nr: '6830', n: 'Abschreibungen Fahrzeuge' },
        { nr: '6840', n: 'Abschreibungen Immobilien' }, { nr: '6850', n: 'Abschreibungen immaterielle Anlagen' }
      ]},
      { grp: '69', name: 'Finanzaufwand und Finanzertrag', accounts: [
        { nr: '6900', n: 'Zinsaufwand (Finanzaufwand)' }, { nr: '6910', n: 'Bankspesen' },
        { nr: '6920', n: 'Kursverluste' }, { nr: '6940', n: 'Wertberichtigungen Finanzanlagen' },
        { nr: '6950', n: 'Zinsertrag (Finanzertrag)' }, { nr: '6960', n: 'Wertschriftenertrag' },
        { nr: '6970', n: 'Kursgewinne' }
      ]}
    ]},
    { cls: 7, clsName: 'Betrieblicher Nebenerfolg', groups: [
      { grp: '70', name: 'Ertrag Nebenbetrieb', accounts: [
        { nr: '7000', n: 'Ertrag Nebenbetrieb' }, { nr: '7010', n: 'Aufwand Nebenbetrieb' }
      ]},
      { grp: '75', name: 'Ertrag betriebliche Liegenschaften', accounts: [
        { nr: '7500', n: 'Ertrag betriebliche Liegenschaften' },
        { nr: '7510', n: 'Aufwand betriebliche Liegenschaften' }
      ]},
      { grp: '79', name: 'Erfolg aus Ver\u00e4usserung von Anlageverm\u00f6gen', accounts: [
        { nr: '7900', n: 'Gewinn aus Ver\u00e4usserung Anlageverm\u00f6gen' },
        { nr: '7910', n: 'Verlust aus Ver\u00e4usserung Anlageverm\u00f6gen' }
      ]}
    ]},
    { cls: 8, clsName: 'Ausserordentlicher, einmaliger oder periodenfremder Erfolg', groups: [
      { grp: '80', name: 'Betriebsfremder Erfolg', accounts: [
        { nr: '8000', n: 'Betriebsfremder Aufwand' }, { nr: '8100', n: 'Betriebsfremder Ertrag' }
      ]},
      { grp: '85', name: 'Ausserordentlicher / einmaliger / periodenfremder Erfolg', accounts: [
        { nr: '8500', n: 'Ausserordentlicher Aufwand' }, { nr: '8510', n: 'Ausserordentlicher Ertrag' },
        { nr: '8900', n: 'Direkte Steürn' }
      ]}
    ]},
    { cls: 9, clsName: 'Abschluss', groups: [
      { grp: '90', name: 'Erfolgsrechnung', accounts: [
        { nr: '9000', n: 'Er\u00f6ffnungsbilanz' }, { nr: '9100', n: 'Erfolgsrechnung' },
        { nr: '9200', n: 'Jahresgewinn oder -verlust' }
      ]}
    ]}
  ]
};
