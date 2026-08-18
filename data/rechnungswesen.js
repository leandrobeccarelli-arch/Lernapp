window.BOOK_DATA = {
  title: "Rechnungswesen: Bilanz, Erfolgsrechnung und Kennzahlen",
  author: "SIMAKOM Managementschule, Daniel Wolfisberg",
  year: 2026,
  chapters: [
    {
      id: "bilanz-einfuehrung",
      num: "Kapitel 1",
      title: "Bilanz und Erfolgsrechnung erstellen",
      pageStart: 1,
      pageEnd: 5,
      learningData: {
        sections: [
          {
            type: "intro",
            title: "Was die Bilanz zeigt",
            content: "Die Bilanz stellt das Vermögen (Aktiven) der Finanzierung (Passiven) an einem bestimmten Stichtag gegenüber. Die Aktiven stehen links und zeigen, wie das Kapital investiert ist. Die Passiven stehen rechts und zeigen, woher das Kapital stammt. Beide Seiten sind immer gleich hoch."
          },
          {
            type: "concept",
            title: "Gliederung der Aktiven",
            content: "Das Umlaufvermögen umfasst Positionen, die sich innerhalb eines Jahres in Geld verwandeln, geordnet nach Liquidität: Kasse, Post, Bank, Forderungen aus Lieferungen und Leistungen, Warenvorrat. Das Anlagevermögen bleibt langfristig im Unternehmen: Mobiliar und Einrichtungen, Fahrzeuge, Immobilien."
          },
          {
            type: "concept",
            title: "Gliederung der Passiven",
            content: "Das kurzfristige Fremdkapital ist innerhalb eines Jahres fällig, etwa Verbindlichkeiten aus Lieferungen und Leistungen. Das langfristige Fremdkapital umfasst Darlehen und Hypotheken. Das Eigenkapital besteht aus dem Grundkapital (Aktienkapital) und dem Zuwachskapital (Reserven und Gewinnvortrag)."
          },
          {
            type: "concept",
            title: "Die Erfolgsrechnung",
            content: "Die Erfolgsrechnung stellt Aufwand und Ertrag einer Periode gegenüber. In der Kontoform stehen die Aufwände links, die Erträge rechts. Der Gewinn erscheint als Saldo auf der Aufwandseite, damit beide Seiten gleich hoch abschliessen. Ein Verlust würde entsprechend auf der Ertragsseite stehen."
          },
          {
            type: "merke",
            title: "Merke dir!",
            items: [
              "Die Bilanz ist immer ausgeglichen: Total Aktiven = Total Passiven.",
              "Das Umlaufvermögen wird nach Liquidität geordnet: Kasse, Post, Bank, Forderungen, Warenvorrat.",
              "Das Eigenkapital ist eine Restgrösse: Total Aktiven minus Total Fremdkapital.",
              "Der Gewinn ist der Saldo der Erfolgsrechnung: Gesamtertrag minus Gesamtaufwand."
            ]
          },
          {
            type: "keyterms",
            title: "Schlüsselbegriffe",
            terms: [
              {term: "Aktiven", def: "Linke Bilanzseite. Zeigt, wie das Kapital investiert ist: Umlaufvermögen und Anlagevermögen."},
              {term: "Passiven", def: "Rechte Bilanzseite. Zeigt, woher das Kapital stammt: Fremdkapital und Eigenkapital."},
              {term: "Umlaufvermögen", def: "Vermögen, das sich innerhalb eines Jahres in Geld verwandelt: liquide Mittel, Forderungen, Warenvorrat."},
              {term: "Anlagevermögen", def: "Vermögen, das langfristig im Unternehmen bleibt: Mobiliar, Fahrzeuge, Immobilien."},
              {term: "Kurzfristiges Fremdkapital", def: "Schulden, die innerhalb eines Jahres fällig werden, etwa Verbindlichkeiten aus Lieferungen und Leistungen."},
              {term: "Langfristiges Fremdkapital", def: "Schulden mit einer Laufzeit über einem Jahr, etwa Darlehen und Hypotheken."},
              {term: "Grundkapital", def: "Vom Eigentümer eingebrachtes Kapital, bei der Aktiengesellschaft das Aktienkapital."},
              {term: "Zuwachskapital", def: "Im Unternehmen erarbeitetes und zurückbehaltenes Kapital: Reserven und Gewinnvortrag."},
              {term: "Gewinn", def: "Saldo der Erfolgsrechnung: Gesamtertrag minus Gesamtaufwand."}
            ]
          }
        ]
      },
      exercises: []
    },
    {
      id: "finanzielle-kennzahlen",
      num: "Kapitel 2",
      title: "Finanzielle Kennzahlen und Auswertung",
      pageStart: 6,
      pageEnd: 12,
      learningData: {
        sections: [
          {
            type: "intro",
            title: "Vertikal und horizontal auswerten",
            content: "Die vertikale Auswertung betrachtet eine Bilanzseite für sich: die Vermögensstruktur bei den Aktiven, die Finanzierungsstruktur bei den Passiven. Die horizontale Auswertung vergleicht die beiden Seiten miteinander: die Liquidität bei den kurzfristigen Positionen, die Deckungsverhältnisse bei den langfristigen."
          },
          {
            type: "concept",
            title: "Kennzahlen zur Vermögensstruktur",
            content: "Intensität Umlaufvermögen = Umlaufvermögen · 100 / Gesamtvermögen. Intensität Anlagevermögen = Anlagevermögen · 100 / Gesamtvermögen. Die Intensität des Anlagevermögens heisst auch Anlageintensität oder Immobilisierungsgrad."
          },
          {
            type: "concept",
            title: "Kennzahlen zur Finanzierungsstruktur",
            content: "Fremdfinanzierungsgrad = Fremdkapital · 100 / Gesamtkapital, auch Verschuldungsgrad genannt. Eigenfinanzierungsgrad = Eigenkapital · 100 / Gesamtkapital, auch Eigenkapitalquote genannt. Selbstfinanzierungsgrad = Zuwachskapital · 100 / Grundkapital."
          },
          {
            type: "concept",
            title: "Liquiditätskennzahlen",
            content: "Liquiditätsgrad 1 = liquide Mittel · 100 / kurzfristiges Fremdkapital, auch Cash Ratio. Liquiditätsgrad 2 = (liquide Mittel + kurzfristige Forderungen) · 100 / kurzfristiges Fremdkapital, auch Quick Ratio. Liquiditätsgrad 3 = Umlaufvermögen · 100 / kurzfristiges Fremdkapital, auch Current Ratio."
          },
          {
            type: "concept",
            title: "Deckungsverhältnisse",
            content: "Anlagedeckungsgrad 1 = Eigenkapital · 100 / Anlagevermögen. Anlagedeckungsgrad 2 = (Eigenkapital + langfristiges Fremdkapital) · 100 / Anlagevermögen."
          },
          {
            type: "concept",
            title: "Erfolgskennzahlen",
            content: "Bruttogewinn = Warenertrag minus Warenaufwand. Betriebserfolg = betrieblicher Ertrag minus betrieblicher Aufwand. Unternehmenserfolg = Gesamtertrag minus Gesamtaufwand. Der durchschnittliche Bruttogewinn-Zuschlag rechnet den Bruttogewinn auf den Warenaufwand, die Handelsmarge auf den Warenertrag. Die Reingewinnmarge (Umsatzrentabilität) setzt den Unternehmensgewinn zum Umsatz."
          },
          {
            type: "concept",
            title: "Aktivitätskennzahlen",
            content: "Der durchschnittliche Bestand ist (Anfangsbestand + Endbestand) / 2. Der Lagerumschlag rechnet den Warenaufwand auf den durchschnittlichen Lagerbestand, der Debitorenumschlag die Kreditverkäufe auf den durchschnittlichen Debitorenbestand, der Kreditorenumschlag die Krediteinkäufe auf den durchschnittlichen Kreditorenbestand. Die zugehörige Frist ergibt sich aus 360 Tagen geteilt durch den Umschlag."
          },
          {
            type: "concept",
            title: "Rentabilität und Cashflow",
            content: "ROI = Gewinn · 100 / durchschnittliches Kapital. ROE = Gewinn · 100 / durchschnittliches Eigenkapital. ROA = (Gewinn + Fremdkapitalzinsen) · 100 / durchschnittliches Gesamtkapital. Die Effektivverschuldung ist Fremdkapital minus liquide Mittel minus Forderungen. Der Verschuldungsfaktor teilt die Effektivverschuldung durch den Cashflow und ergibt eine Zahl in Jahren."
          },
          {
            type: "merke",
            title: "Merke dir!",
            items: [
              "Vertikale Auswertung heisst innerhalb einer Bilanzseite, horizontale Auswertung heisst über beide Seiten hinweg.",
              "Fremdfinanzierungsgrad und Eigenfinanzierungsgrad ergänzen sich immer auf 100 Prozent.",
              "Bei allen Umschlagskennzahlen steht im Zähler eine Grösse der Erfolgsrechnung und im Nenner ein durchschnittlicher Bestand aus der Bilanz.",
              "Jede Frist in Tagen ergibt sich aus 360 geteilt durch den zugehörigen Umschlag."
            ]
          },
          {
            type: "keyterms",
            title: "Schlüsselbegriffe",
            terms: [
              {term: "Anlageintensität", def: "Anlagevermögen · 100 / Gesamtvermögen. Auch Immobilisierungsgrad genannt."},
              {term: "Verschuldungsgrad", def: "Fremdkapital · 100 / Gesamtkapital. Andere Bezeichnung für den Fremdfinanzierungsgrad."},
              {term: "Eigenkapitalquote", def: "Eigenkapital · 100 / Gesamtkapital. Andere Bezeichnung für den Eigenfinanzierungsgrad."},
              {term: "Cash Ratio", def: "Liquiditätsgrad 1: liquide Mittel · 100 / kurzfristiges Fremdkapital."},
              {term: "Quick Ratio", def: "Liquiditätsgrad 2: (liquide Mittel + kurzfristige Forderungen) · 100 / kurzfristiges Fremdkapital."},
              {term: "Current Ratio", def: "Liquiditätsgrad 3: Umlaufvermögen · 100 / kurzfristiges Fremdkapital."},
              {term: "Bruttogewinn", def: "Warenertrag minus Warenaufwand."},
              {term: "Handelsmarge", def: "Bruttogewinn · 100 / Warenertrag. Auch Bruttogewinn-Quote oder Bruttogewinn-Marge."},
              {term: "Bruttogewinn-Zuschlag", def: "Bruttogewinn · 100 / Warenaufwand. Auch Bruttogewinn-Satz."},
              {term: "Reingewinnmarge", def: "Unternehmensgewinn · 100 / Umsatz. Auch Umsatzrentabilität."},
              {term: "ROI", def: "Return on Investment: Rückfluss auf dem investierten Kapital, Gewinn · 100 / durchschnittliches Kapital."},
              {term: "ROE", def: "Return on Equity: Rückfluss auf dem Eigenkapital, Gewinn · 100 / durchschnittliches Eigenkapital."},
              {term: "ROA", def: "Return on Assets: Rückfluss inklusive Fremdkapitalzinsen auf dem gesamten Kapital."},
              {term: "Effektivverschuldung", def: "Fremdkapital minus liquide Mittel minus Forderungen."},
              {term: "Verschuldungsfaktor", def: "Effektivverschuldung / Cashflow. Ergebnis in Jahren."},
              {term: "Lagerumschlag", def: "Warenaufwand / durchschnittlicher Lagerbestand. Gibt an, wie oft das Lager pro Jahr erneuert wird."},
              {term: "Durchschnittliche Lagerdauer", def: "360 Tage / Lagerumschlag."},
              {term: "Debitorenfrist", def: "360 Tage / Debitorenumschlag. Zeigt, wie lange Kunden im Schnitt zum Bezahlen brauchen."}
            ]
          }
        ]
      },
      exercises: []
    }
  ],
  glossary: [
    {term: "Bilanz", def: "Gegenüberstellung von Vermögen (Aktiven) und Finanzierung (Passiven) an einem Stichtag."},
    {term: "Erfolgsrechnung", def: "Gegenüberstellung von Aufwand und Ertrag einer Periode. Der Saldo ist Gewinn oder Verlust."},
    {term: "Kontoform", def: "Darstellung mit zwei Seiten: bei der Bilanz Aktiven links und Passiven rechts, bei der Erfolgsrechnung Aufwand links und Ertrag rechts."},
    {term: "Saldenliste", def: "Verzeichnis aller Konten mit ihren Schlussbeständen, Grundlage für den Abschluss."},
    {term: "Stichtag", def: "Der Tag, auf den sich die Bilanz bezieht, in der Regel der 31. Dezember."},
    {term: "Vertikale Auswertung", def: "Auswertung innerhalb einer Bilanzseite: Vermögensstruktur oder Finanzierungsstruktur."},
    {term: "Horizontale Auswertung", def: "Auswertung über beide Bilanzseiten hinweg: Liquidität und Deckungsverhältnisse."},
    {term: "Cashflow", def: "Vereinfacht Gewinn plus Abschreibungen. Zeigt den Geldzufluss aus der Geschäftstätigkeit."}
  ]
};
