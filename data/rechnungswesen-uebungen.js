// ─── Rechnungswesen Übungen – Extracted Book Data ───────────────────────────
// Source: buecher/rechnungswesen-uebungen.html (494KB, 16 chapters, 110 exercises)
// Extracted: 2026-03-20

window.BOOK_DATA = {
  id: 'rechnungswesen-uebungen',
  title: 'Rechnungswesen – Aufgaben und Übungen',
  shortTitle: 'Rechnungswesen Übungen',
  author: 'Compendio-Autorenteam',
  year: 2017,
  pages: 280,
  color: '#3b82f6',
  chapters: [
    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 1: Übersicht über das Fachgebiet
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch1',
      num: 'Kapitel 1',
      title: 'Übersicht über das Fachgebiet',
      exercises: [
        {
          id: 1,
          type: 'fill',
          q: 'Lückentext – Das Fachgebiet Rechnungswesen. Ergänzen Sie die fehlenden Begriffe zu den Hauptbereichen des Rechnungswesens.',
          template: 'A) Das Rechnungswesen kann in {0} Hauptbereiche gegliedert werden, nämlich das {1} Rechnungswesen (externer Abschluss mit Bilanz, {2} und evtl. weiteren Elementen) und das {3} Rechnungswesen (interner Abschluss mit der Erfassung der {4}).\n\nB) Die Hauptbereiche werden durch verschiedene {5} unterstützt. Dazu gehören beispielsweise die {6}, die {7} und die {8}.\n\nC) Das Rechnungswesen erfüllt im Unternehmen eine {9} für die Planung, {10}, Kontrolle und {11}.',
          blanks: [['zwei','2'],['finanzielle','finanzielles'],['Erfolgsrechnung'],['betriebliche','betriebliches'],['Kosten'],['Nebenbuchhaltungen'],['Lohnbuchhaltung'],['Debitorenbuchhaltung'],['Kreditorenbuchhaltung'],['wichtige Grundlage'],['Entscheidung'],['Führung','Fuehrung']],
          tips: ['Das Rechnungswesen hat zwei Hauptbereiche: einen externen und einen internen.','Die externe Seite erstellt Bilanz und Erfolgsrechnung, die interne erfasst die Kosten.','Nebenbuchhaltungen sind z.B. Lohn-, Debitoren- und Kreditorenbuchhaltung.'],
          reveal: [{label:'1',val:'zwei'},{label:'2',val:'finanzielle'},{label:'3',val:'Erfolgsrechnung'},{label:'4',val:'betriebliche'},{label:'5',val:'Kosten'},{label:'6',val:'Nebenbuchhaltungen'},{label:'7',val:'Lohnbuchhaltung'},{label:'8',val:'Debitorenbuchhaltung'},{label:'9',val:'Kreditorenbuchhaltung'},{label:'10',val:'wichtige Grundlage'},{label:'11',val:'Entscheidung'},{label:'12',val:'Führung'}]
        },
        {
          id: 2,
          type: 'tf',
          q: 'Richtig oder falsch? – Buchhaltung und Rechnungswesen',
          statements: [
            {s:'Das Rechnungswesen ist im Unternehmen wichtige Grundlage für Planung, Entscheidung, Kontrolle und Führung.', c: true},
            {s:'Rechnungswesen und Buchhaltung sind letztlich das Gleiche, nämlich jeweils andere Ausdrücke für Finanzbuchhaltung.', c: false,reason:'Das Rechnungswesen umfasst mehr als nur die Buchhaltung. Es beinhaltet auch die Betriebsbuchhaltung, Hilfsrechnungen und Auswertungen.'},
            {s:'Neben der Finanzbuchhaltung ist die Betriebsbuchhaltung ein Hauptbereich des Rechnungswesens.', c: true},
            {s:'Die Debitoren- und Kreditorenbuchhaltung (Kunden- und Lieferantenbuchh.) sind Beispiele für Nebenbereiche (Hilfsrechnungen) des Rechnungswesens.', c: true},
            {s:'Die Buchhaltung kann über alle Vorgänge, die sich in einem Unternehmen ereignen, Auskunft geben.', c: false,reason:'Die Buchhaltung erfasst nur zahlenmässig erfassbare Vorgänge, nicht alle Vorgänge (z.B. keine qualitativen Aspekte wie Mitarbeiterzufriedenheit).'},
            {s:'Die Finanzbuchhaltung ist Grundlage für weitere Bereiche des Rechnungswesens.', c: true}
          ],
          tips: ['Rechnungswesen ist der Oberbegriff – Buchhaltung ist nur ein Teil davon.','Die Buchhaltung erfasst nur zahlenmässig messbare Geschäftsvorgänge.','Die Finanzbuchhaltung bildet die Basis für alle anderen Bereiche.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – RW umfasst mehr als nur Buchhaltung'},{label:'3',val:'Richtig'},{label:'4',val:'Richtig'},{label:'5',val:'Falsch – nur zahlenmässig erfassbare Vorgänge'},{label:'6',val:'Richtig'}]
        },
        {
          id: 3,
          type: 'match',
          q: 'Zuordnungsaufgabe – Bereiche des Rechnungswesens. Ordnen Sie die Begriffe den Bereichen des Rechnungswesens zu.',
          pairs: [
            {l:'A) Debitorenbuchhaltung (Kundenbuchhaltung)',r:'1 – Hilfsrechnungen'},
            {l:'B) Kalkulation',r:'3 – Hauptbereich Betriebsbuchhaltung'},
            {l:'C) Bilanz',r:'2 – Hauptbereich Finanzbuchhaltung'},
            {l:'D) Kostenartenrechnung',r:'3 – Hauptbereich Betriebsbuchhaltung'},
            {l:'E) Bilanz- und Erfolgsanalyse',r:'4 – Auswertung der Buchhaltung'},
            {l:'F) Kreditorenbuchhaltung (Lieferantenbuchhaltung)',r:'1 – Hilfsrechnungen'},
            {l:'G) Lohnbuchhaltung',r:'1 – Hilfsrechnungen'},
            {l:'H) Erfolgsrechnung',r:'2 – Hauptbereich Finanzbuchhaltung'}
          ],
          options: ['1 – Hilfsrechnungen','2 – Hauptbereich Finanzbuchhaltung','3 – Hauptbereich Betriebsbuchhaltung','4 – Auswertung der Buchhaltung'],
          tips: ['Finanzbuchhaltung = Bilanz + Erfolgsrechnung (extern).','Betriebsbuchhaltung = Kalkulation + Kostenrechnung (intern).','Hilfsrechnungen unterstützen: Debitoren, Kreditoren, Lohn.'],
          reveal: [{label:'A',val:'Debitorenbuchhaltung → 1 (Hilfsrechnungen)'},{label:'B',val:'Kalkulation → 3 (Betriebsbuchhaltung)'},{label:'C',val:'Bilanz → 2 (Finanzbuchhaltung)'},{label:'D',val:'Kostenartenrechnung → 3 (Betriebsbuchhaltung)'},{label:'E',val:'Bilanz- und Erfolgsanalyse → 4 (Auswertung)'},{label:'F',val:'Kreditorenbuchhaltung → 1 (Hilfsrechnungen)'},{label:'G',val:'Lohnbuchhaltung → 1 (Hilfsrechnungen)'},{label:'H',val:'Erfolgsrechnung → 2 (Finanzbuchhaltung)'}]
        },
        {
          id: 4,
          type: 'text',
          q: 'Was wird umschrieben? Geben Sie die Bezeichnung ein.',
          questions: [
            {label:'A',text:'(...) bildet den Verkehr des Unternehmens mit seinen Marktpartnern ab.',answers:['Finanzbuchhaltung','FIBU']},
            {label:'B',text:'Detaillierte Bestandsaufnahme der Ist-Bestände auf einen Stichtag hin.',answers:['Inventar']},
            {label:'C',text:'Erfassung und Abrechnung aller mit dem Personal zusammenhängender Aufwendungen.',answers:['Lohnbuchhaltung']},
            {label:'D',text:'Zeigt die Herkunft und Verwendung der finanziellen Mittel auf.',answers:['Geldflussrechnung','Mittelflussrechnung','Kapitalflussrechnung']},
            {label:'E',text:'Auswertung von Abschlussrechnungen mit Kennzahlen.',answers:['Bilanz- und Erfolgsanalyse','Bilanzanalyse','Bilanz und Erfolgsanalyse']},
            {label:'F',text:'(...) dient in erster Linie der Führung des Unternehmens mit Zahlen.',answers:['Betriebsbuchhaltung','BEBU','Betriebsbuchaltung']}
          ],
          tips: ['Die Finanzbuchhaltung bildet den Verkehr mit externen Partnern ab.','Die Geldflussrechnung zeigt die Liquiditätsentwicklung.','Die Betriebsbuchhaltung dient der internen Führung.'],
          reveal: [{label:'A',val:'Finanzbuchhaltung'},{label:'B',val:'Inventar'},{label:'C',val:'Lohnbuchhaltung'},{label:'D',val:'Geldflussrechnung'},{label:'E',val:'Bilanz- und Erfolgsanalyse'},{label:'F',val:'Betriebsbuchhaltung'}]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die zwei Hauptbereiche des Rechnungswesens unterscheiden (FIBU und BEBU)',
            'Die Rolle der Nebenbuchhaltungen (Hilfsrechnungen) kennen',
            'Die Funktion des Rechnungswesens im Unternehmen verstehen'
          ]},
          { type: 'concept', title: 'Zwei Hauptbereiche', content: 'Das Rechnungswesen gliedert sich in zwei Hauptbereiche: Das finanzielle Rechnungswesen (externer Abschluss mit Bilanz und Erfolgsrechnung) und das betriebliche Rechnungswesen (interner Abschluss mit der Erfassung der Kosten).', highlight: 'Finanzbuchhaltung = extern, Betriebsbuchhaltung = intern' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Finanzbuchhaltung (FIBU)', def: 'Externer Abschluss: Bilanz und Erfolgsrechnung. Bildet den Verkehr mit Marktpartnern ab.' },
            { term: 'Betriebsbuchhaltung (BEBU)', def: 'Interner Abschluss. Dient der Führung des Unternehmens mit Zahlen.' },
            { term: 'Nebenbuchhaltungen', def: 'Hilfsrechnungen wie Debitoren-, Kreditoren- und Lohnbuchhaltung.' },
            { term: 'Inventar', def: 'Detaillierte Bestandsaufnahme der Ist-Bestände auf einen Stichtag.' },
            { term: 'Geldflussrechnung', def: 'Zeigt die Herkunft und Verwendung der finanziellen Mittel (dritte Abschlussrechnung).' },
            { term: 'Bilanz- und Erfolgsanalyse', def: 'Auswertung von Abschlussrechnungen mit Kennzahlen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Das Rechnungswesen erfüllt im Unternehmen eine wichtige Grundlage für die Planung, Entscheidung, Kontrolle und Führung. Die Buchhaltung erfasst nur zahlenmässig erfassbare Geschäftsvorgänge.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 2: Bilanz – Ausweis von Vermögen und Schulden
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch2',
      num: 'Kapitel 2',
      title: 'Bilanz – Ausweis von Vermögen und Schulden',
      exercises: [
        { id: 5, type: 'fill', q: 'Lückentext – Aussagen zur Bilanz', tips: ['Die Bilanz zeigt Vermögen und Kapital zu einem bestimmten Zeitpunkt.','Aktiven = Vermögen (UV + AV), Passiven = Kapital (FK + EK).','Aktivseite = Mittelverwendung, Passivseite = Mittelherkunft.'], reveal: [{label:'5A-1',val:'Gegenüberstellung'},{label:'5A-2',val:'Vermögen'},{label:'5A-3',val:'Stichtag'},{label:'5B-1',val:'Aktivseite'},{label:'5B-2',val:'Vermögens'},{label:'5C-1',val:'Umlaufvermögen'},{label:'5C-2',val:'Anlagevermögen'},{label:'5C-3',val:'Passivseite'},{label:'5C-4',val:'Fremdkapital'},{label:'5C-5',val:'Eigenkapital'},{label:'5D-1',val:'Passivseite'},{label:'5D-2',val:'Kapitals'}], answers: [['Gegenüberstellung'],['Vermögen'],['Stichtag'],['Aktivseite'],['Vermögens'],['Umlaufvermögen'],['Anlagevermögen'],['Passivseite'],['Fremdkapital'],['Eigenkapital'],['Passivseite'],['Kapitals']] },
        { id: 6, type: 'tf', q: 'Richtig oder falsch? – Zusammenhänge in der Bilanz', tips: ['Die goldene Bilanzregel: Langfristiges Kapital ≥ Anlagevermögen.','Eigenkapital = Aktiven − Fremdkapital (immer!).','Rechtsformtypische EK-Posten: AG hat Aktienkapital, EU hat Eigenkapital.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Richtig'},{label:'3',val:'Falsch – FK kann auch tiefer sein als EK'},{label:'4',val:'Richtig'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – langfr. Kapital (EK+langfr.FK) ≥ AV'}], statements: [{s:'Anlagevermögen und Eigenkapital zählen zum langfristigen Bereich.', c: true},{s:'Stets gilt: Eigenkapital = Aktiven – Fremdkapital.', c: true},{s:'Das Fremdkapital ist immer höher als das Eigenkapital.', c: false,reason:'Es gibt Unternehmen, bei denen das Eigenkapital höher ist als das Fremdkapital.'},{s:'Das Nettoumlaufvermögen ist positiv, wenn die goldene Bilanzregel eingehalten wird.', c: true},{s:'Der Block Eigenkapital enthält rechtsformtypische Posten.', c: true},{s:'Zur Einhaltung der goldenen Bilanzregel muss das Eigenkapital mindestens so hoch sein wie das Anlagevermögen.', c: false,reason:'Die goldene Bilanzregel besagt, dass das langfristige Kapital (EK + langfr. FK) mindestens so hoch sein muss wie das AV.'}] },
        { id: 7, type: 'calc', q: 'Ergänzung der fehlenden Grösse. Berechnen Sie die fehlende Grösse. Alle Beträge in CHF 1\'000.', tips: ['Grundformel: Vermögen = Fremdkapital + Eigenkapital.','Reinvermögen = Eigenkapital = Vermögen − Schulden.'], reveal: [{label:'Zeile 1',val:'Reinvermögen/EK = 570 − 290 = 280'},{label:'Zeile 2',val:'Vermögen = 100 + 320 = 420'},{label:'Zeile 3',val:'Vermögen = 200 + 750 = 950'},{label:'Zeile 4',val:'EK = 600 − 490 = 110'}], rows: [{labels:['Vermögen','Schulden','Reinvermögen/EK'],vals:[570,290,null],answer:280},{labels:['Reinvermögen','Schulden','Vermögen'],vals:[100,320,null],answer:420},{labels:['Eigenkapital','Fremdkapital','Vermögen'],vals:[200,750,null],answer:950},{labels:['Vermögen','Fremdkapital','EK'],vals:[600,490,null],answer:110}] },
        { id: 8, type: 'match', q: 'Zuordnungsaufgabe – Bilanzpositionen. Ordnen Sie jede Position der richtigen Bilanzhauptgruppe zu (UV, AV, FK, EK).', tips: ['UV: Vermögen < 1 Jahr (Kasse, Bank, Forderungen, Vorräte).','AV: Vermögen > 1 Jahr (Immobilien, Maschinen, Fahrzeuge).','FK: Schulden. EK: Aktienkapital, Reserven.'], reveal: [{label:'Liquide Mittel',val:'UV'},{label:'Hypotheken',val:'FK'},{label:'Aktivdarlehen',val:'AV'},{label:'Aktienkapital',val:'EK'}], pairs: [{l:'Liquide Mittel',r:'UV'},{l:'Hypotheken',r:'FK'},{l:'Aktivdarlehen (Fälligkeit in 2 Jahren)',r:'AV'},{l:'Bankguthaben',r:'UV'},{l:'Kasse',r:'UV'},{l:'Aktienkapital',r:'EK'},{l:'Rohmaterial',r:'UV'},{l:'Forderungen aus Lieferungen und Leistungen',r:'UV'},{l:'Verbindlichkeiten aus Lieferungen und Leistungen',r:'FK'},{l:'Fahrzeuge',r:'AV'},{l:'Eigenkapital',r:'EK'},{l:'Büromaschinen und Informatik',r:'AV'},{l:'Mobiliar und Einrichtungen',r:'AV'},{l:'Darlehensschulden (Fälligkeit in 6 Monaten)',r:'FK'},{l:'Reserven',r:'EK'},{l:'Fertigfabrikatebestand',r:'UV'},{l:'Rückstellungen',r:'FK'},{l:'Immobilien',r:'AV'},{l:'Wertschriften',r:'UV'},{l:'Post',r:'UV'},{l:'Maschinen',r:'AV'}], options: ['UV','AV','FK','EK'] },
        { id: 9, type: 'match', q: 'Buchhalterische Kurzbezeichnungen. Wählen Sie den passenden buchhalterischen Begriff.', tips: ['Forderungen aus L+L = offene Kundenrechnungen (Debitoren).','Verbindlichkeiten aus L+L = offene Lieferantenrechnungen (Kreditoren).','Hypothek = Darlehen mit Grundpfand als Sicherheit.'], reveal: [{label:'1',val:'Kasse'},{label:'2',val:'Bank(schuld)'},{label:'3',val:'Fahrzeuge'},{label:'4',val:'Mobiliar'},{label:'5',val:'Halbfabrikate'},{label:'6',val:'Maschinen'},{label:'7',val:'Immobilien'},{label:'8',val:'Warenbestand'},{label:'9',val:'Bank(guthaben)'},{label:'10',val:'Verbindlichkeiten aus L+L'},{label:'11',val:'Rohmaterialvorrat'},{label:'12',val:'Post'},{label:'13',val:'Fertigfabrikate'},{label:'14',val:'Aktivdarlehen'},{label:'15',val:'Hypothek'},{label:'16',val:'Forderungen aus L+L'}], pairs: [{l:'Bargeld in der Kasse',r:'Kasse'},{l:'Schuld auf einem Kontokorrentkonto bei einer Bank',r:'Bank(schuld)'},{l:'Bestand an Transportmitteln',r:'Fahrzeuge'},{l:'Einrichtungsgegenstände im Laden oder Büro',r:'Mobiliar'},{l:'Zwischenprodukte (noch nicht fertiggestellte Produkte)',r:'Halbfabrikate'},{l:'Maschinen für die Erzeugung von Produkten',r:'Maschinen'},{l:'Liegenschaften, die zum Unternehmen gehören',r:'Immobilien'},{l:'Vorräte an Handelswaren',r:'Warenbestand'},{l:'Guthaben bei einer Bank',r:'Bank(guthaben)'},{l:'Noch nicht bezahlte Rechnungen von Lieferanten',r:'Verbindlichkeiten aus L+L'},{l:'Rohstoffe für die Verarbeitung',r:'Rohmaterialvorrat'},{l:'Guthaben bei der Post',r:'Post'},{l:'Fertig erstellte Erzeugnisse zum Verkauf',r:'Fertigfabrikate'},{l:'An einen Dritten gewährtes Darlehen',r:'Aktivdarlehen'},{l:'Erhaltenes Darlehen gegen Verpfändung der Liegenschaft',r:'Hypothek'},{l:'Offene Rechnungen an Kunden',r:'Forderungen aus L+L'}], options: ['Kasse','Bank(schuld)','Fahrzeuge','Mobiliar','Halbfabrikate','Maschinen','Immobilien','Warenbestand','Bank(guthaben)','Verbindlichkeiten aus L+L','Rohmaterialvorrat','Post','Fertigfabrikate','Aktivdarlehen','Hypothek','Forderungen aus L+L'] },
        { id: 10, type: 'text', q: 'Was wird umschrieben? (Bilanzpositionen)', tips: ['Flüssige Mittel = Kasse + Post + Bank.','Bilanzsumme = Total Aktiven = Total Passiven.','Umlaufvermögen = kurzfristig gebundene Vermögenswerte.'], reveal: [{label:'A',val:'Forderungen aus L+L'},{label:'B',val:'Bilanzsumme'},{label:'C',val:'Verbindlichkeiten aus L+L'},{label:'D',val:'Umlaufvermögen'},{label:'E',val:'Post'},{label:'F',val:'Flüssige Mittel'},{label:'G',val:'Fertigfabrikate'},{label:'H',val:'Passiven'},{label:'I',val:'Bilanz'},{label:'J',val:'Aktiven'},{label:'K',val:'Anlagevermögen'}], questions: [{label:'A',text:'Guthaben gegenüber Kunden oder offene Kundenrechnungen.',answers:['Forderungen aus L+L','Forderungen','Debitoren']},{label:'B',text:'Bezeichnung für die Summe der Aktiven und der Passiven.',answers:['Bilanzsumme']},{label:'C',text:'Schulden gegenüber Lieferanten.',answers:['Verbindlichkeiten aus L+L','Kreditoren']},{label:'D',text:'Meist kurzfristige Vermögensposten.',answers:['Umlaufvermögen']},{label:'E',text:'Guthaben gegenüber der Post.',answers:['Post']},{label:'F',text:'Kasse, Post, Bank zusammengefasst.',answers:['Flüssige Mittel','Liquide Mittel']},{label:'G',text:'Vorrat an fertiggestellten Produkten.',answers:['Fertigfabrikate']},{label:'H',text:'Bilanzseite mit Fremdkapital und Eigenkapital.',answers:['Passiven']},{label:'I',text:'Gegenüberstellung von Vermögen und Kapital.',answers:['Bilanz']},{label:'J',text:'Bilanzseite mit dem Vermögen.',answers:['Aktiven']},{label:'K',text:'Längerfristig gebundenes Sachvermögen.',answers:['Anlagevermögen']}] },
        { id: 11, type: 'table', q: 'Bilanzpositionen in Bilanzschema einordnen', tips: ['Aktiven: zuerst UV, dann AV.','Passiven: zuerst FK, dann EK.','Rohmaterial/Fertigfabrikate → UV. Produktionsanlagen → AV.'], reveal: [{label:'Branche',val:'Produktionsbetrieb / Industrie'},{label:'Rechtsform',val:'Aktiengesellschaft (AG)'}], correctAktiven: ['Flüssige Mittel','Forderungen aus L+L','Rohmaterial und Halbfabrikate','Fertigfabrikate','Mobiliar und Büroeinrichtungen','Produktionsanlagen'], correctPassiven: ['Verbindlichkeiten aus L+L','Bankschuld','Darlehen (Darlehensschulden)','Aktienkapital','Reserven und Gewinnvortrag'] },
        { id: 12, type: 'table', q: 'Ergänzung der fehlenden Grössen (Papierindustrie)', tips: ['Ordnen Sie alle Posten in die Bilanz ein.','Total Aktiven muss gleich Total Passiven sein.','Finanzanlagen und Sachanlagen gehören zum AV.'], reveal: [{label:'Aktiv: Flüssige Mittel',val:'90'},{label:'Aktiv: Vorräte',val:'77'},{label:'Aktiv: Finanzanlagen',val:'15'},{label:'Aktiv: Sachanlagen',val:'271'},{label:'Total',val:'625 = 625'}], fields: [{name:'Flüssige Mittel',answer:90},{name:'Vorräte',answer:77},{name:'Finanzanlagen',answer:15},{name:'Sachanlagen',answer:271},{name:'Bankschulden',answer:25},{name:'Darlehensschulden und Hypotheken',answer:125},{name:'Aktienkapital',answer:220},{name:'Reserven u. Gewinnvortrag',answer:114}] },
        { id: 13, type: 'table', q: 'Bilanzen für zwei Unternehmen erstellen', tips: ['Berechnen Sie den fehlenden Posten so, dass Aktiven = Passiven.','Waren → Detailhandel. Rohmaterial + Maschinen → Industrie.','Einzelunternehmen: nur «Eigenkapital». AG: Aktienkapital + Reserven.'], reveal: [{label:'13A: EK',val:'Eigenkapital = 610 − 450 = 160'},{label:'13A: Branche',val:'Detailhandel'},{label:'13A: Rechtsform',val:'Einzelunternehmen'},{label:'13B: Bank',val:'Bankschuld = 900 − 867 = 33'},{label:'13B: Branche',val:'Produktionsbetrieb / Industrie'},{label:'13B: Rechtsform',val:'Aktiengesellschaft (AG)'}], partA: {missingField:'Eigenkapital',answer:160,branche:'Detailhandel',rechtsform:'Einzelunternehmen'}, partB: {missingField:'Bankschuld',answer:33,branche:'Produktionsbetrieb',rechtsform:'Aktiengesellschaft (AG)'} },
        { id: 14, type: 'table', q: 'Bilanzen von Dienstleistungsunternehmen', tips: ['Vorauszahlungen von Kunden = kurzfristiges Fremdkapital.','Nicht fakturierte DL = UV.','Berechnen Sie die fehlende Position über: Aktiven = Passiven.'], reveal: [{label:'14A: Reserven',val:'613 − 241 = 372'},{label:'14B: Flüssige Mittel',val:'185 − 170 = 15'}], partA: {missingField:'Reserven',answer:372}, partB: {missingField:'Flüssige Mittel',answer:15} },
        { id: 15, type: 'text', q: 'Bilanz aus einem Geschäftsbericht (Meyer Burger). Beantworten Sie die Fragen zur Konzernbilanz 2016.', tips: ['Zeitpunktrechnung: Achten Sie auf die Datumsangaben.','Prozentzahlen zeigen den Anteil jeder Position an der Bilanzsumme (100%).','Summationsstaffeln: FK-Blöcke werden zuerst summiert.'], reveal: [{label:'A',val:'Ja – Stichtage 31.12.2016 und 31.12.2015'},{label:'B',val:'Serviceleistung, nicht obligatorisch'},{label:'C',val:'Anteil jeder Position an der Bilanzsumme (100%)'},{label:'D',val:'Staffel 1: 271141+124323=395464; Staffel 2: 395464+234424=629889'},{label:'E',val:'Warenvorräte (Vorräte / Inventories)'}], questions: [{id:'a',q:'Ist die Bilanz eine Zeitpunktrechnung?',accept:['zeitpunkt','stichtag','31.12']},{id:'b',q:'Prozentzahlen: Serviceleistung oder obligatorisch?',accept:['service','freiwillig','nicht obligatorisch']},{id:'c',q:'Wie sind die Prozentzahlen zu lesen?',accept:['anteil','bilanzsumme','100%']},{id:'d',q:'Summationsstaffeln der Passivseite zuordnen',accept:['395','629','staffel']},{id:'e',q:'Um welche Bilanzposition handelt es sich (Detailtabelle)?',accept:['vorr','warenvorr','inventori']}] },
        { id: 16, type: 'fill', q: 'Kreuzworträtsel zum Thema Bilanz. Was ist in den Reihen gesucht?', tips: ['Südlich des Gotthards = Italienisch.','«Weniger am Rotieren» = Anlage...','Passiv sitzen = Passiven. Unterm Strich gleich = Bilanzsumme.'], reveal: [{label:'1',val:'BILANCIA'},{label:'2',val:'ANLAGEVERMÖGEN'},{label:'3',val:'PASSIVEN'},{label:'4',val:'EIGENKAPITAL'},{label:'5',val:'FREMDKAPITAL'},{label:'6',val:'AKTIVEN'},{label:'7',val:'BILANZSUMME'}], clues: [{nr:1,hint:'Südlich des Gotthards das Sinnbild für die Bilanz.',ans:['bilancia'],display:'BILANCIA'},{nr:2,hint:'Auf der Aktivseite viel weniger am Rotieren.',ans:['anlagevermoegen','anlagevermögen'],display:'ANLAGEVERMÖGEN'},{nr:3,hint:'Eine Ansammlung von Couch-Potatoes? Kapital hängt darunter ab.',ans:['passiven'],display:'PASSIVEN'},{nr:4,hint:'Aktienkapital, Reserven und Gewinnvortrag gehören dazu.',ans:['eigenkapital'],display:'EIGENKAPITAL'},{nr:5,hint:'Solches aufzunehmen, beschönigt der Bankräuber seine Tat.',ans:['fremdkapital'],display:'FREMDKAPITAL'},{nr:6,hint:'Vermögensposten; bringen Schwung ins Vereinsleben.',ans:['aktiven'],display:'AKTIVEN'},{nr:7,hint:'Unterm Strich passt es links wie rechts.',ans:['bilanzsumme'],display:'BILANZSUMME'}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Aufbau und die Struktur einer Bilanz verstehen',
            'Bilanzpositionen den Hauptgruppen zuordnen (UV, AV, FK, EK)',
            'Die goldene Bilanzregel anwenden können',
            'Bilanzen für verschiedene Unternehmenstypen erstellen'
          ]},
          { type: 'concept', title: 'Aufbau der Bilanz', content: 'Die Bilanz ist eine summarische Gegenüberstellung von Vermögen und Kapital an einem Stichtag. Die Aktivseite zeigt die Zusammensetzung des Vermögens (Mittelverwendung), die Passivseite zeigt die Zusammensetzung des Kapitals (Mittelherkunft).', highlight: 'Aktiven = Vermögen, Passiven = Kapital (FK + EK)' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Umlaufvermögen (UV)', def: 'Kurzfristig gebundene Vermögenswerte: Kasse, Bank, Forderungen, Vorräte.' },
            { term: 'Anlagevermögen (AV)', def: 'Langfristig gebundene Vermögenswerte: Immobilien, Maschinen, Fahrzeuge.' },
            { term: 'Fremdkapital (FK)', def: 'Schulden des Unternehmens: Verbindlichkeiten, Darlehen, Hypotheken, Rückstellungen.' },
            { term: 'Eigenkapital (EK)', def: 'Eigene Mittel: Aktienkapital, Reserven, Gewinnvortrag. EK = Aktiven − FK.' },
            { term: 'Bilanzsumme', def: 'Total Aktiven = Total Passiven. Stets im Gleichgewicht.' },
            { term: 'Goldene Bilanzregel', def: 'Langfristiges Kapital (EK + langfr. FK) soll mindestens so hoch sein wie das Anlagevermögen.' },
            { term: 'Nettoumlaufvermögen', def: 'UV − kurzfristiges FK. Ist positiv, wenn die goldene Bilanzregel eingehalten wird.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Stets gilt: Eigenkapital = Aktiven − Fremdkapital. Das Fremdkapital ist NICHT immer höher als das Eigenkapital. Die Bilanz ist eine Zeitpunktrechnung (Stichtag).' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aktiven: zuerst UV (Liquiditätsreihenfolge), dann AV',
            'Passiven: zuerst FK (kurzfr. vor langfr.), dann EK',
            'Rechtsformtypische EK-Posten: AG → Aktienkapital + Reserven, EU → Eigenkapital',
            'Bilanzgleichung: Vermögen = Fremdkapital + Eigenkapital'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 3: Erfolgsrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch3',
      num: 'Kapitel 3',
      title: 'Erfolgsrechnung: Ausweis von Ertrag, Aufwand und Erfolg',
      exercises: [
        { id: 17, type: 'fill', q: 'Lückentext: Erfolgsrechnung', tips: ['Aufwand = Wertverzehr.','Die ER bezieht sich auf einen Zeitraum.','Geschäftsberichte nutzen meist die Staffelform.'], reveal: [{label:'A-1',val:'Abnahme'},{label:'A-2',val:'Zunahme'},{label:'A-3',val:'Aufwand'},{label:'B',val:'Zeitraum'},{label:'C',val:'Berichtsform / Staffelform'},{label:'D-1',val:'Wertzuwachs'},{label:'D-2',val:'Zunahme'},{label:'D-3',val:'Abnahme'}], answers: [['Abnahme'],['Zunahme'],['Aufwand'],['raum'],['Berichtsform','Staffelform'],['Wertzuwachs'],['Zunahme'],['Abnahme']] },
        { id: 18, type: 'tf', q: 'Richtig oder falsch? Erfolgsrechnung', tips: ['Erfolg kann Gewinn ODER Verlust sein.','EBIT = Betriebsergebnis.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – «Erfolg» ist der Oberbegriff'},{label:'3',val:'Falsch – Stufenzahl variiert'},{label:'4',val:'Richtig'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – meist Berichtsform'},{label:'7',val:'Richtig'}], statements: [{s:'Gewinn bedeutet in der ER einen Ertragsüberschuss.', c: true},{s:'Gewinn ist der allgemeine Ausdruck für den Saldo der ER.', c: false,reason:'Der allgemeine Ausdruck ist «Erfolg».'},{s:'Eine gestufte ER hat immer drei Stufen.', c: false,reason:'Die Stufung variiert.'},{s:'Bruttogewinn ist ein Ergebnis in einer gestuften ER.', c: true},{s:'Der EBIT dient zum Vergleich betrieblicher Ergebnisse.', c: true},{s:'In Geschäftsberichten findet man die ER meist in Kontoform.', c: false,reason:'Meist in Berichtsform.'},{s:'Eine einfache Stufung ist «betrieblich» und «neutral».', c: true}] },
        { id: 19, type: 'table', q: 'Bezeichnung für Aufwand bzw. Ertrag. Bestimmen Sie A/E und die buchhalterische Bezeichnung.', tips: ['Aufwand = Wertverbrauch. Ertrag = Wertschöpfung.','Personal → Lohnaufwand. Miete → Raumaufwand.'], reveal: [{label:'1',val:'A – Personalaufwand'},{label:'2',val:'E – Finanzertrag'},{label:'3',val:'A – Handelswarenaufwand'}], items: [{s:'Löhne und Beiträge an Sozialversicherungen',ae:'A',bez:['Personalaufwand']},{s:'Zins auf Bankguthaben gutgeschrieben',ae:'E',bez:['Finanzertrag','Zinsertrag']},{s:'Handelswaren gekauft und verbraucht',ae:'A',bez:['Handelswarenaufwand','Warenaufwand']},{s:'Rechnung für Dienstleistungen',ae:'E',bez:['Dienstleistungsertrag']},{s:'Material für Herstellung verbraucht',ae:'A',bez:['Materialaufwand']},{s:'Miete für Räumlichkeiten',ae:'A',bez:['Raumaufwand']},{s:'Zins für Darlehen bezahlt',ae:'A',bez:['Finanzaufwand','Zinsaufwand']},{s:'Handelswaren verkauft',ae:'E',bez:['Handelserlös','Warenertrag']},{s:'Abschreibungen auf Anlagegüter',ae:'A',bez:['Abschreibungen']},{s:'Räumlichkeiten vermietet',ae:'E',bez:['Immobilienertrag']},{s:'Selbst hergestellte Waren verkauft',ae:'E',bez:['Produktionserlös']},{s:'Elektrizität/Heizöl verbraucht',ae:'A',bez:['Energieaufwand']},{s:'Anlagegüter reparieren lassen',ae:'A',bez:['Unterhalt und Reparaturen']},{s:'Verwaltungsaufwand',ae:'A',bez:['Verwaltungsaufwand']},{s:'Inserate, Prospekte bezahlt',ae:'A',bez:['Werbeaufwand']},{s:'Sonstiger betrieblicher Aufwand',ae:'A',bez:['Sonstiger betrieblicher Aufwand']},{s:'Sonstiger betrieblicher Ertrag',ae:'E',bez:['Sonstiger betrieblicher Ertrag']},{s:'Betriebsfremde Erträge',ae:'E',bez:['Betriebsfremder Ertrag']},{s:'Ausserordentlicher Aufwand',ae:'A',bez:['Ausserordentlicher Aufwand']}] },
        { id: 20, type: 'text', q: 'Das Geschäft eines Unternehmens abbilden. Ertrags- und Aufwandsposten pro Branche.', tips: ['Der wichtigste Ertrag zeigt, was das Unternehmen verkauft.','Handel: Warenertrag. Industrie: Produktionserlöse.'], reveal: [{label:'Handel – Ertrag',val:'Warenertrag / Handelserlöse'},{label:'Industrie – Ertrag',val:'Produktionserlöse'}], branches: [{name:'Handelsunternehmen',ertrag:['Warenertrag','Handelserlöse'],aufwand:['Warenaufwand','Personalaufwand','Raumaufwand']},{name:'Industrieunternehmen',ertrag:['Produktionserlöse'],aufwand:['Materialaufwand','Personalaufwand','Energieaufwand']},{name:'Dienstleistungsunternehmen',ertrag:['Dienstleistungserlöse'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Transportunternehmen',ertrag:['Transportertrag'],aufwand:['Treibstoffaufwand','Fahrzeugaufwand']},{name:'Beratungsunternehmen',ertrag:['Honorarertrag'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Gastgewerbe',ertrag:['Dienstleistungserlöse'],aufwand:['Warenaufwand','Personalaufwand']},{name:'Banken',ertrag:['Zinsertrag','Kommissionsertrag'],aufwand:['Zinsaufwand','Personalaufwand']},{name:'Versicherungen',ertrag:['Prämienertrag'],aufwand:['Schadenaufwand','Personalaufwand']}] },
        { id: 21, type: 'calc', q: 'Erstellen der Erfolgsrechnung. Berechnen Sie Total Aufwand, Ertrag und Ergebnis.', tips: ['Sortieren: Erträge und Aufwände trennen.','Gewinn = Ertrag − Aufwand.'], reveal: [{label:'A: Gewinn',val:'29\'600'},{label:'B: Verlust',val:'6\'800'},{label:'C: Gewinn',val:'39\'200'},{label:'D: Gewinn',val:'36\'000'}], subsData: [{label:'A) Architekturbüro',totalAufwand:252900,totalErtrag:282500,result:29600,resultLabel:'Gewinn'},{label:'B) Handelsunternehmen',totalAufwand:346800,totalErtrag:340000,result:-6800,resultLabel:'Verlust'},{label:'C) Motorrad- und Fahrradhandel',totalAufwand:485900,totalErtrag:525100,result:39200,resultLabel:'Gewinn'},{label:'D) Transportunternehmen',totalAufwand:294000,totalErtrag:330000,result:36000,resultLabel:'Gewinn'}] },
        { id: 22, type: 'calc', q: 'Dreistufige Erfolgsrechnung einer Lederwarenhandlung', tips: ['Stufe 1: Betriebsgewinn.','Stufe 2: Neutral.','Stufe 3: Ausserordentlich.'], reveal: [{label:'Betriebsgewinn',val:'16\'900'},{label:'Neutraler Erfolg',val:'1\'500'},{label:'Unternehmensgewinn',val:'17\'500'}], solution: {betrAufwand:153100,betrErtrag:170000,betriebsgewinn:16900,neutrAufwand:9200,neutrErtrag:10700,neutralerErfolg:1500,aoAufwand:900,aoErtrag:0,aoErfolg:-900,unternehmensgewinn:17500} },
        { id: 23, type: 'calc', q: 'Zweistufige Erfolgsrechnung einer Garage', tips: ['Bruttoerlös = Summe aller Verkaufserlöse.','Betriebsergebnis = Nettoerlös − betriebliche Aufwände.'], reveal: [{label:'Bruttoerlös',val:'1\'265'},{label:'Nettoerlös',val:'1\'135'},{label:'Betriebsergebnis',val:'161'},{label:'Unternehmensgewinn',val:'133'}], solution: {bruttoerloes:1265,erlmind:130,nettoerloes:1135,betrAufwand:974,betriebsergebnis:161,neutrErtrag:65,neutrAufwand:23,neutralErfolg:42,aoErfolg:-70,unternehmensgewinn:133} },
        { id: 24, type: 'check', q: 'Wie wirken sich Vorgänge auf die Stufenergebnisse aus? (+, −, 0)', tips: ['+ = erhöht das Ergebnis, − = senkt es, 0 = keine Auswirkung.','Bruttogewinn: Nur Warenaufwand/-ertrag.'], reveal: [{label:'1',val:'BG: 0 | Betr: − | UG: −'},{label:'2',val:'BG: 0 | Betr: 0 | UG: +'}], transactions: [{s:'Bezahlung der Löhne via Bank',bg:'0',betg:'-',ug:'-'},{s:'Kursgewinne auf Wertschriften',bg:'0',betg:'0',ug:'+'},{s:'Nachträgliche Rabatte auf Wareneinkäufen',bg:'+',betg:'+',ug:'+'},{s:'Bodenreinigung des Ladenlokals',bg:'0',betg:'-',ug:'-'},{s:'Warenverkäufe auf Kredit',bg:'+',betg:'+',ug:'+'},{s:'Unterhaltsarbeiten am Gewerbegebäude',bg:'0',betg:'0',ug:'-'},{s:'Abschreibung Ladeneinrichtung',bg:'0',betg:'-',ug:'-'},{s:'Mietaufwand und Gutschrift Immobilien',bg:'0',betg:'-',ug:'0'}] },
        { id: 25, type: 'text', q: 'Erfolgsrechnung aus einem Geschäftsbericht (Meyer Burger)', tips: ['Zeitraumrechnung: ER zeigt Aufwand/Ertrag über eine Periode.','EBITDA = vor Abschreibungen. EBIT = vor Zinsen und Steuern.'], reveal: [{label:'A',val:'Ja – Zeitraum 1.1.–31.12.'},{label:'F',val:'Lage verbessert sich – Verlust wird kleiner'}], questions: [{id:'a',label:'Zeitpunkt- oder Zeitraumrechnung?',keywords:['zeitraum','1.1','31.12']},{id:'b',label:'Prozentzahlen: Serviceleistung oder obligatorisch?',keywords:['serviceleistung','nicht obligatorisch']},{id:'c',label:'Wie sind die Prozentzahlen zu lesen?',keywords:['anteil','nettoerlös','100%']},{id:'d',label:'Erläuterung sonstiger Betriebsaufwand',keywords:['sonstiger betriebsaufwand']},{id:'e',label:'Zwischenergebnisse den KHG zuordnen',keywords:['brutto','personal','ebitda','ebit']},{id:'f',label:'Verschlimmert oder verbessert sich die Lage?',keywords:['verbessert','kleiner']}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Aufwand und Ertrag unterscheiden und den richtigen Konten zuordnen',
            'Eine gestufte Erfolgsrechnung aufstellen (zwei- und dreistufig)',
            'Die Darstellungsformen der ER kennen (Kontoform vs. Staffelform)',
            'Zwischenergebnisse wie Bruttogewinn, EBIT und Unternehmensgewinn berechnen'
          ]},
          { type: 'concept', title: 'Erfolgsrechnung', content: 'Die Erfolgsrechnung zeigt den Ertrag und Aufwand einer Periode (Zeitraum). Aufwand bedeutet Wertverzehr (Abnahme des Vermögens bzw. Zunahme der Schulden). Ertrag bedeutet Wertzuwachs. Das Ergebnis (Saldo) ist der Erfolg: Gewinn oder Verlust.', highlight: 'ER = Zeitraumrechnung (im Gegensatz zur Bilanz = Zeitpunktrechnung)' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aufwand', def: 'Wertverzehr: einseitige Abnahme des Vermögens oder einseitige Zunahme der Schulden.' },
            { term: 'Ertrag', def: 'Wertzuwachs: einseitige Zunahme des Vermögens oder einseitige Abnahme der Schulden.' },
            { term: 'Bruttogewinn', def: 'Nettoerlös − Warenaufwand (Einstandswert). Erstes Zwischenergebnis.' },
            { term: 'EBIT', def: 'Earnings Before Interest and Taxes. Betriebsergebnis, dient dem Vergleich.' },
            { term: 'Kontoform (T-Form)', def: 'Darstellung im Unterricht. Aufwand links, Ertrag rechts.' },
            { term: 'Staffelform (Berichtsform)', def: 'Darstellung in Geschäftsberichten. Schrittweise Berechnung.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: '«Erfolg» ist der Oberbegriff (nicht «Gewinn»). Gewinn = Ertragsüberschuss, Verlust = Aufwandsüberschuss. In Geschäftsberichten wird die ER meist in der Staffelform (Berichtsform) dargestellt, nicht in der Kontoform.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 4: Bilanz und Erfolgsrechnung im Zusammenhang
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch4',
      num: 'Kapitel 4',
      title: 'Bilanz und Erfolgsrechnung im Zusammenhang',
      exercises: [
        { id: 26, type: 'tf', q: 'Geldflussrechnungen in verschiedenen Unternehmenssituationen', tips: ['GFR zeigt Geldzu- und -abflüsse in 3 Bereichen.','Positiver operativer Cashflow = Kerngeschäft generiert Geld.'], reveal: [{label:'1',val:'Richtig – Start-up: negativer CF'},{label:'2',val:'Falsch – Unternehmen B hat negativen CF (-130)'}], statements: [{s:'Die GFR des Unternehmens C wäre am ehesten bei einem Start-up-Unternehmen vorzufinden.', c: true},{s:'Investoren wären am glücklichsten mit Unternehmen B.', c: false,reason:'Unternehmen B hat negativen operativen CF.'},{s:'Nur bei Unternehmen B sind die Erträge höher als die Aufwendungen.', c: false,reason:'Unternehmen B hat negativen operativen CF (-130).'},{s:'Die GFR von Unternehmen A findet man am ehesten bei einem starken Unternehmen.', c: true}] },
        { id: 27, type: 'text', q: 'Geldflussrechnung aus einem Geschäftsbericht', tips: ['Die GFR ist eine Zeitraumrechnung.','Praxis-Cashflow = Gewinn + Abschreibungen.'], reveal: [{label:'A',val:'Zeitraumrechnung'},{label:'B',val:'Ja: drei Bereiche'},{label:'C',val:'Operativer CF 2015 negativ'}], questions: [{id:'a',label:'Zeitpunkt- oder Zeitraumrechnung?',keywords:['zeitraum']},{id:'b',label:'Drei Bereiche erkennbar?',keywords:['geschäftstätigkeit','investition','finanzierung']},{id:'c',label:'Was fällt am CF 2015 auf?',keywords:['negativ','verbrennt']},{id:'d',label:'Flüssige Mittel zu- oder abgenommen?',keywords:['abgenommen']},{id:'e',label:'Massnahme gegen Finanzlage?',keywords:['kapitalerhöhung','finanzierung']},{id:'f',label:'Praxis-Cashflow vs. echter CF?',keywords:['working capital','abschreibung']}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Zusammenhang zwischen Bilanz und Erfolgsrechnung verstehen',
            'Die Kontenarten der doppelten Buchhaltung kennen (Bilanz- und Erfolgskonten)',
            'Erfolgswirksame und erfolgsunwirksame Buchungen unterscheiden',
            'Die Geldflussrechnung als dritte Abschlussrechnung verstehen'
          ]},
          { type: 'concept', title: 'Doppelter Erfolgsnachweis', content: 'Die doppelte Buchhaltung basiert auf zwei Arten von Konten: Bilanzkonten (Aktiv- und Passivkonten) und Erfolgskonten (Aufwands- und Ertragskonten). Der Erfolg kann doppelt nachgewiesen werden: in der Schlussbilanz (Differenz Aktiven − FK) und in der Erfolgsrechnung (Differenz Ertrag − Aufwand).', highlight: 'Vor der Gewinnverbuchung: SB I, nach der Gewinnverbuchung: SB II' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Bilanzkonten', def: 'Aktiv- und Passivkonten. Haben einen Anfangsbestand und einen Endbestand.' },
            { term: 'Erfolgskonten', def: 'Aufwands- und Ertragskonten. Haben keinen Anfangsbestand.' },
            { term: 'Erfolgswirksam', def: 'Buchung berührt ein Erfolgskonto und verändert den Gewinn/Verlust.' },
            { term: 'Erfolgsunwirksam', def: 'Buchung berührt nur Bilanzkonten (AT, PT, KB, KR).' },
            { term: 'Geldflussrechnung (GFR)', def: 'Zeigt die Geldzu- und -abflüsse in drei Bereichen: operativ, Investition, Finanzierung.' },
            { term: 'Cashflow', def: 'Mittelzufluss aus der Geschäftstätigkeit. Praxis-Cashflow = Gewinn + Abschreibungen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Ein positiver operativer Cashflow bedeutet, dass das Kerngeschäft Geld generiert. Bei einem Startup ist ein negativer Cashflow zu Beginn normal. Ein starkes Unternehmen hat in der Regel einen positiven operativen Cashflow.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 5: Buchführung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch5',
      num: 'Kapitel 5',
      title: 'Buchführung',
      exercises: [
        { id: 28, type: 'fill', q: 'Lückentext: Buchungsmöglichkeiten auf Bilanz- und Erfolgskonten', tips: ['AT: a+/a−, PT: p−/p+, KB: a+/p+, KR: a−/p−','Erfolgskonten haben keinen Anfangsbestand.'], reveal: [{label:'A',val:'Aktivtausch, Zusammensetzung, Bilanzsumme'},{label:'B',val:'Gleichgewicht/Gleichung'},{label:'H',val:'Ertragskonto'},{label:'I',val:'Bilanzkonten, Anfangsbestand, Endbestand'}], answers: [['Aktivtausch'],['Zusammensetzung'],['Bilanzsumme'],['Gleichgewicht','Bilanzgleichung'],['a+/p+'],['nimmt','steigt'],['zu'],['Kapitalrückzahlung'],['nimmt ab','sinkt'],['Aufwandskonto'],['Ertragskonto'],['Passivkonten'],['Bilanzkonten'],['Aktivkonten'],['Passivkonten'],['Ertragskonto'],['Bilanzkonten'],['Anfangsbestand'],['Endbestand','Schlussbestand']] },
        { id: 29, type: 'tf', q: 'Richtig oder falsch? Wirkungen von Bilanzveränderungen', tips: ['AT und PT verändern die Bilanzsumme nicht.','KB und KR verändern die Bilanzsumme.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – AT verändert BS nicht'}], statements: [{s:'Ein Passivtausch verändert die Bilanzsumme nicht.', c: true},{s:'Ein Aktivtausch erhöht die Bilanzsumme.', c: false,reason:'AT verändert die BS nicht.'},{s:'Kapitalrückzahlung führt zu BS-Veränderung.', c: true},{s:'Beim PT ändert sich die Kapitalzusammensetzung.', c: true},{s:'Bei KB nimmt eine Aktiv- und eine Passivposition zu.', c: true},{s:'Beim AT wird eine Aktiv- erhöht und eine Passivposition vermindert.', c: false,reason:'Beim AT sind beide auf der Aktivseite.'}] },
        { id: 30, type: 'fill', q: 'Lückentext: Aufgaben der Buchhaltung', tips: ['Die Buchhaltung dient dem Erfolgsausweis und der Vermögenskontrolle.'], reveal: [{label:'1',val:'Erfolgs'},{label:'2',val:'Gewinn'}], answers: [['Erfolgs','Erfolg'],['Gewinn'],['Vermögen'],['lückenlose','lückenlos'],['Geschäftsverkehrs','Geschäftsverkehr'],['Vermögen'],['Schulden']] },
        { id: 31, type: 'tf', q: 'Richtig oder falsch? Zusammenhänge im Erfolgskonto', tips: ['Saldo = Differenz stärkere − schwächere Seite.','Erfolgskonten haben keinen Anfangsbestand.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – Saldo steht auf der schwächeren Seite'}], statements: [{s:'Der Saldo ergibt sich als Differenz zwischen stärkerer und schwächerer Seite.', c: true},{s:'Ist die Habenseite stärker, steht der Saldo im Haben.', c: false,reason:'Saldo steht auf der schwächeren Seite (im Soll).'},{s:'Ist die Sollseite stärker, steht der Saldo im Haben.', c: true},{s:'Sollsaldo eines Erfolgskontos = Ertrag.', c: false,reason:'Sollüberschuss = Aufwand.'},{s:'Erfolgskonten werden mit Anfangsbestand eröffnet.', c: false,reason:'Kein Anfangsbestand.'},{s:'Habensaldo eines Erfolgskontos = Ertragskonto.', c: true}] },
        { id: 32, type: 'match', q: 'Zuordnung: Begriffe der doppelten Buchhaltung', tips: ['SB I = vor Erfolgsverbuchung, SB II = nach.'], reveal: [{label:'A',val:'4 – Buchungssatz'},{label:'B',val:'5 – Schlussbilanz II'}], pairs: [{l:'A) Kontoaufruf durch Kurzanweisung',r:'4'},{l:'B) Bilanz nach Erfolgsverbuchung',r:'5'},{l:'C) Erfolg auf Aktivseite und Ertragsseite',r:'6'},{l:'D) Oberstes Gebot der Ordnungsmässigkeit',r:'8'},{l:'E) Erfolg auf Passivseite und Aufwandsseite',r:'2'},{l:'F) Bilanz vor Erfolgsverbuchung',r:'1'},{l:'G) Doppelter Erfolgsnachweis',r:'7'},{l:'H) Vierkontentheorie',r:'3'}], options: ['1','2','3','4','5','6','7','8'] },
        { id: 33, type: 'match', q: 'Zuordnung: Konten zu vier Kontenarten', tips: ['Aufwand/Ertrag = Erfolgskonten. Aktiv/Passiv = Bestandeskonten.'], reveal: [{label:'Löhne und Gehälter',val:'Aufwandskonto'},{label:'Aktienkapital',val:'Passivkonto'}], pairs: [{l:'Löhne und Gehälter',r:'AW'},{l:'Aktienkapital',r:'PA'},{l:'Fertigfabrikatevorrat',r:'AK'},{l:'Bank(schuld)',r:'PA'},{l:'Warenertrag',r:'ER'},{l:'Sozialversicherungsaufwand',r:'AW'},{l:'Materialaufwand',r:'AW'},{l:'Kasse',r:'AK'},{l:'Mietzins Ladenlokal',r:'AW'},{l:'Erlöse aus Arbeiten',r:'ER'},{l:'Unterhalt und Reparaturen',r:'AW'},{l:'Werbung',r:'AW'},{l:'Werbeeinnahmen',r:'ER'},{l:'Wertschriften',r:'AK'},{l:'Verbindlichkeiten aus L+L',r:'PA'},{l:'Rückstellungen',r:'PA'},{l:'Handelswarenbestand',r:'AK'},{l:'Versicherung Fahrzeuge',r:'AW'},{l:'Reserven',r:'PA'},{l:'Rohmaterialvorrat',r:'AK'},{l:'Mietzinseinnahmen Personalwohnungen',r:'ER'}], options: ['AK','PA','AW','ER'] },
        { id: 34, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Buchungsmöglichkeiten', tips: ['AT: Aktiv+/Aktiv−. PT: Passiv−/Passiv+.','KB: Aktiv+/Passiv+. KR: Aktiv−/Passiv−.'], reveal: [{label:'A',val:'1 – Aktivtausch'},{label:'B',val:'3 – Kapitalbeschaffung'}], pairs: [{l:'A) Kauf Fahrzeug gegen bar',r:'1'},{l:'B) Kauf Mobiliar auf Rechnung',r:'3'},{l:'C) Bezahlung Lieferantenrechnungen',r:'4'},{l:'D) Barverkauf ausgedienten Gestells',r:'1'},{l:'E) Rückzahlung Hypothek über Bank',r:'2'},{l:'F) Darlehen erhalten, bar',r:'3'},{l:'G) Kunden zahlen auf Postkonto',r:'1'},{l:'H) Bezug Bargeld von Bank (Schuld)',r:'4'}], options: ['1','2','3','4'] },
        { id: 35, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Bilanz- und Erfolgskonten', tips: ['Buchungssatz: Soll/Haben bestimmt die Kontenarten.'], reveal: [{label:'A',val:'Warenaufwand / Verb. L+L → Aufwand + Passiv'}], pairs: [{l:'A) Wareneinkauf auf Rechnung',r:'2'},{l:'B) Barverkauf von Waren',r:'1'},{l:'C) Lohnzahlung über Bank',r:'3'},{l:'D) Mietzahlung bar',r:'3'},{l:'E) DL-Ertrag auf Postkonto',r:'1'},{l:'F) Zinsertrag auf Bankkonto',r:'1'}], options: ['1','2','3'] },
        { id: 36, type: 'match', q: 'Wie verändert sich die Bilanzsumme?', tips: ['AT und PT: BS bleibt gleich.','KB: BS steigt. KR: BS sinkt.'], reveal: [{label:'A',val:'Bleibt gleich (AT)'},{label:'B',val:'Nimmt zu (KB)'}], pairs: [{l:'A) Bareinzahlung Postkonto',r:'GL'},{l:'B) Kauf Mobiliar auf Rechnung',r:'ZU'},{l:'C) Barzahlung Lieferantenrechnung',r:'AB'},{l:'D) Umwandlung kurzfr. Schuld in Darlehen',r:'GL'},{l:'E) Tilgung Darlehen via Bank',r:'AB'},{l:'F) Aufnahme Hypothek',r:'ZU'},{l:'G) Einlösung Wertschrift',r:'GL'},{l:'H) Rückstellung → Verbindlichkeit',r:'GL'}], options: ['GL','ZU','AB'] },
        { id: 37, type: 'match', q: 'Notierung der Bilanzveränderung zu Geschäftsfällen', tips: ['AT: a+/a−.','KB: a+/p+.'], reveal: [{label:'A',val:'a+/a− (AT)'},{label:'B',val:'a+/p+ (KB)'}], pairs: [{l:'A) Bareinzahlung Postkonto',r:'AT'},{l:'B) Kauf Mobiliar auf Rechnung',r:'KB'},{l:'C) Barzahlung Lieferantenrechnung',r:'KR'},{l:'D) Umwandlung Schuld in Darlehen',r:'PT'},{l:'E) Tilgung Darlehen via Bank',r:'KR'},{l:'F) Aufnahme Hypothek',r:'KB'},{l:'G) Einlösung Wertschrift',r:'AT'},{l:'H) Rückstellung → Verbindlichkeit',r:'PT'}], options: ['AT','PT','KB','KR'] },
        { id: 38, type: 'match', q: 'Zuordnung: Buchungssätze zu Buchungsmöglichkeiten', tips: ['Buchungssatz Soll/Haben bestimmt die Buchungsmöglichkeit.'], reveal: [{label:'A',val:'1 – Aktivtausch'}], pairs: [{l:'A) Maschinen / Kasse',r:'1'},{l:'B) Mobiliar / Verbindlichkeiten L+L',r:'3'},{l:'C) Verbindlichkeiten L+L / Bank',r:'4'},{l:'D) Darlehen / Hypothek',r:'2'},{l:'E) Bankschuld / Kasse',r:'4'},{l:'F) Post / Forderungen L+L',r:'1'},{l:'G) Fahrzeuge / Darlehen',r:'3'},{l:'H) Verbindlichkeiten L+L / Rückstellungen',r:'2'}], options: ['1','2','3','4'] },
        { id: 39, type: 'match', q: 'Grafische Aufgabe zu Erfolgsvorgängen', tips: ['Aufwandskonten: Soll = Zunahme.','Ertragskonten: Haben = Zunahme.'], reveal: [{label:'A',val:'Aufwandsbuchung (Aufwandskonto Soll / Aktivkonto Haben)'}], pairs: [{l:'A) Barzahlung Miete',r:'1'},{l:'B) Bareinnahme Warenverkauf',r:'2'},{l:'C) Lohnzahlung per Bank',r:'1'},{l:'D) Bankgutschrift für DL',r:'2'},{l:'E) Wareneinkauf auf Rechnung',r:'3'},{l:'F) Zinsertrag auf Post',r:'2'}], options: ['1','2','3'] },
        { id: 40, type: 'text', q: 'Einzelfragen zum Thema Buchungstechnik', tips: ['Die Bilanz wird in Konten aufgelöst.','Journal = chronologisch. Hauptbuch = sachlich.'], reveal: [{label:'A',val:'Jeder Geschäftsfall auf mindestens zwei Konten'},{label:'B',val:'Journal = chronologisch, Hauptbuch = sachlich'}], questions: [{id:'a',q:'Was bedeutet "doppelte Buchhaltung"?',keywords:['zwei konten','soll','haben']},{id:'b',q:'Journal vs. Hauptbuch?',keywords:['chronolog','sachlich']},{id:'c',q:'Ablauf Eröffnung bis Schlussbilanz?',keywords:['eröffnung','geschäftsf','abschluss']},{id:'d',q:'Was ist der doppelte Erfolgsnachweis?',keywords:['bilanz','erfolgsrechnung','beide']},{id:'e',q:'Rolle des Belegs?',keywords:['beleg','grundlage','keine buchung']}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die vier Typen von Bilanzveränderungen kennen und anwenden',
            'Buchungssätze formulieren (Soll an Haben)',
            'Den Zusammenhang zwischen Journal und Hauptbuch verstehen',
            'Den doppelten Erfolgsnachweis in Bilanz und ER nachvollziehen'
          ]},
          { type: 'concept', title: 'Vier Bilanzveränderungstypen', content: 'Jeder Geschäftsfall verändert die Bilanz auf eine von vier Arten: Aktivtausch (a+/a−), Passivtausch (p−/p+), Kapitalbeschaffung (a+/p+) oder Kapitalrückzahlung (a−/p−). Beim AT und PT bleibt die Bilanzsumme gleich, bei KB steigt sie und bei KR sinkt sie.', highlight: 'AT und PT: Bilanzsumme bleibt gleich. KB: steigt. KR: sinkt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Aktivtausch (AT)', def: 'Aktiv+ / Aktiv−. Bilanzsumme bleibt gleich. Bsp: Kauf Fahrzeug bar.' },
            { term: 'Passivtausch (PT)', def: 'Passiv− / Passiv+. Bilanzsumme bleibt gleich. Bsp: Darlehen in Hypothek umwandeln.' },
            { term: 'Kapitalbeschaffung (KB)', def: 'Aktiv+ / Passiv+. Bilanzsumme steigt. Bsp: Kauf Mobiliar auf Rechnung.' },
            { term: 'Kapitalrückzahlung (KR)', def: 'Aktiv− / Passiv−. Bilanzsumme sinkt. Bsp: Bezahlung Lieferantenrechnung.' },
            { term: 'Buchungssatz', def: 'Kontoaufruf: Soll an Haben (z.B. Maschinen / Kasse = Aktivtausch).' },
            { term: 'Journal', def: 'Chronologische Aufzeichnung aller Geschäftsfälle.' },
            { term: 'Hauptbuch', def: 'Sachliche Ordnung der Buchungen nach Konten.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Grundregel der doppelten Buchhaltung: Jeder Geschäftsfall wird auf mindestens zwei Konten gebucht (Soll und Haben). Ohne Beleg keine Buchung! Erfolgskonten haben keinen Anfangsbestand und werden am Periodenende über die ER abgeschlossen.' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Aktivkonten: Zunahme im Soll, Abnahme im Haben',
            'Passivkonten: Zunahme im Haben, Abnahme im Soll',
            'Aufwandskonten: Zunahme im Soll (wie Aktivkonten)',
            'Ertragskonten: Zunahme im Haben (wie Passivkonten)',
            'SB I = vor Erfolgsverbuchung, SB II = nach Erfolgsverbuchung'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 6: Rechnungslegung – Vorschriften
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch6',
      num: 'Kapitel 6',
      title: 'Rechnungslegung – Vorschriften',
      exercises: [
        { id: 41, type: 'fill', q: 'Lückentext: Rechnungslegungs- und Bewertungsvorschriften', tips: ['OR 960 regelt Bewertung von Aktiven und Verbindlichkeiten.','Aktiven höchstens zu Anschaffungs- oder Herstellungskosten.'], reveal: [{label:'A',val:'Einzelbewertung; zusammengefasst'},{label:'E',val:'Anschaffungs- oder Herstellungskosten; Nutzungswertmethode'}], answers: [['Einzelbewertung'],['zusammengefasst'],['Rechnungslegungsvorschriften'],['Rechtsform'],['Bilanzwert'],['Eigenkapital'],['feststehende'],['Inventur'],['Schätzung'],['Anschaffungs- oder Herstellungskosten'],['Nutzungswertmethode'],['Herstellungskosten'],['Anschaffungskosten']] },
        { id: 42, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den Bewertungsvorschriften', tips: ['Für Aktiven Höchstbewertung, für FK Mindestbewertung.','Unterbewertung erlaubt (Vorsichtsprinzip).'], reveal: [{label:'1',val:'Falsch – für Aktiven Höchst-, für FK Mindestbewertung'}], statements: [{s:'Für Aktiven gelten Mindestbewertungsvorschriften, für FK Höchstbewertungsvorschriften.', c: false,reason:'Umgekehrt.'},{s:'Der Ertragswert wird vor allem bei Immobilien angewendet.', c: false,reason:'Primär Anschaffungskosten abzüglich Abschreibungen.'},{s:'Kasse, Bank, leicht realisierbare Wertschriften stehen im Wert fest.', c: true},{s:'Unter- und Überbewertung der Aktiven ist erlaubt.', c: false,reason:'Nur Unterbewertung.'},{s:'Ersterfassung: zwei Höchstwerte (gekauft vs. selbst hergestellt).', c: true},{s:'Überbewertung von FK ist nicht erlaubt.', c: false,reason:'Überbewertung FK ist erlaubt (Vorsichtsprinzip).'}] },
        { id: 43, type: 'match', q: 'Zuordnungsaufgabe: Rechnungslegungsvorschriften', tips: ['Grundsätze: Klarheit, Verständlichkeit, Vollständigkeit.','Jahresrechnung: Bilanz, Erfolgsrechnung, Anhang.'], reveal: [{label:'1',val:'C'},{label:'2',val:'E'}], pairs: [{l:'1. Grundsätze ordnungsmässiger Rechnungslegung',r:'C'},{l:'2. Jahresrechnung',r:'E'},{l:'3. Lagebericht',r:'H'},{l:'4. Grundlage der Rechnungslegung',r:'A'},{l:'5. Geschäftsbericht',r:'B'},{l:'6. Buchführungspflicht',r:'F'},{l:'7. Strengere Vorgaben für grössere Unternehmen',r:'G'},{l:'8. Darstellungsformen der Erfolgsrechnung',r:'D'}], options: ['A','B','C','D','E','F','G','H'] },
        { id: 44, type: 'text', q: 'Theoriefragen zu den Bewertungsvorschriften', tips: ['Bewertung = Frankenwert jedem Posten zuordnen.','Niederstwertprinzip bei Vorräten.'], reveal: [{label:'A',val:'Bewertung = Festlegung des Frankenwerts'},{label:'B',val:'Niederstwertprinzip anwenden'}], questions: [{id:'a',q:'Was ist Bewertung?',keywords:['Frankenwert','Bilanzposten','Wert']},{id:'b',q:'Laborgeräte: zu welchem Preis bilanzieren?',keywords:['2950','5290','Niederstwert']},{id:'c',q:'Lower of cost or market übersetzen',keywords:['Niederstwert','niedrigere']},{id:'d',q:'Für welche Position gilt «Anschaffungskosten»?',keywords:['Sachanlage','Anlagevermögen']}] },
        { id: 45, type: 'mc', q: 'Wählen Sie die Antwort: Bewertungsfragen beim Jahresabschluss', tips: ['Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Transport + Montage.','Vorräte: Niederstwertprinzip.'], reveal: [{label:'A',val:'CHF 129 000.–'},{label:'B',val:'CHF 240.–'}], questions: [{id:'a',q:'Aktivierung Spezialmaschine?',options:['CHF 95 000.–','CHF 125 000.–','CHF 129 000.–','CHF 117 000.–'],answer:2},{id:'b',q:'Bewertung Rohmaterialien?',options:['CHF 250.–','CHF 240.–','CHF 265.–','CHF 275.–'],answer:1},{id:'c',q:'Wertschriften bilanzieren?',answer:2},{id:'d',q:'Liegenschaft bilanzieren?',options:['750 000.–','386 000.–','450 000.–','610 000.–'],answer:2}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die gesetzlichen Rechnungslegungsvorschriften (OR) kennen',
            'Die Bewertungsvorschriften für Aktiven und Fremdkapital verstehen',
            'Den Aufbau eines Geschäftsberichts kennen (Jahresrechnung, Lagebericht)',
            'Die Grundsätze ordnungsmässiger Rechnungslegung anwenden'
          ]},
          { type: 'concept', title: 'Bewertungsvorschriften', content: 'Gemäss OR 960 ist bei Aktiven und Verbindlichkeiten grundsätzlich die Einzelbewertung vorgeschrieben. Für Aktiven gelten Höchstbewertungsvorschriften (max. Anschaffungs- oder Herstellungskosten), für Fremdkapital gelten Mindestbewertungsvorschriften. Eine Unterbewertung der Aktiven ist erlaubt (Vorsichtsprinzip), eine Überbewertung nicht.', highlight: 'Aktiven: Höchstbewertung. FK: Mindestbewertung. Unterbewertung erlaubt, Überbewertung nicht.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Jahresrechnung', def: 'Bilanz, Erfolgsrechnung und Anhang.' },
            { term: 'Geschäftsbericht', def: 'Jahresrechnung + Lagebericht (für grössere Unternehmen).' },
            { term: 'Buchführungspflicht', def: 'Nach OR 957 für juristische Personen in jedem Fall.' },
            { term: 'Anschaffungskosten', def: 'Katalogpreis − Rabatt − Skonto + Transport + Montage.' },
            { term: 'Herstellungskosten', def: 'Höchstwert für selbst produzierte Güter.' },
            { term: 'GoR', def: 'Grundsätze ordnungsmässiger Rechnungslegung: Klarheit, Verständlichkeit, Vollständigkeit, Verlässlichkeit.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Gemäss OR 960a gibt es bei der Ersterfassung von Aktiven zwei Höchstwerte: Anschaffungskosten (für gekaufte Güter) und Herstellungskosten (für selbst produzierte Güter). Kasse, Post- und Bankkonten sowie leicht realisierbare Wertschriften stehen im Wert fest.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 7: Abschreibungen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch7',
      num: 'Kapitel 7',
      title: 'Abschreibungen',
      exercises: [
        { id: 46, type: 'fill', q: 'Lückentext: Wertanpassungen (Abschreibungen)', tips: ['Linear: Prozent der Anschaffungskosten.','Indirekte Abschreibung: Wertberichtigungskonto.'], reveal: [{label:'A',val:'linearen; Anschaffungskosten'},{label:'C',val:'Wertberichtigung; indirekte'}], answers: [['linearen','linear'],['Anschaffungskosten'],['leistungsabhängigen'],['Leistungseinheiten'],['Abschreibungsbetrag pro Leistungseinheit'],['Wertberichtigung','WB'],['indirekte','indirekten']] },
        { id: 47, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Sachanlagen und Abschreibungen', tips: ['Bei indirekter Abschreibung: kumulierte Abschreibungen aus WB-Konto.','WB ist ein Minus-Aktivkonto.'], reveal: [{label:'1',val:'Richtig'},{label:'5',val:'Falsch – WB ist Minus-Aktivkonto'}], statements: [{s:'Kumulierte Abschreibungen bei indirekter Methode aus Konto Abschreibungen.', c: true},{s:'Bei Abschreibung vom Buchwert wird Wert null nicht erreicht.', c: true},{s:'Bei indirekter Abschreibung bleibt Betrag immer gleich.', c: false,reason:'Hängt von der Methode ab.'},{s:'Umstellung: Maschine an WB Maschine.', c: true},{s:'WB ist ein Minus-Passivkonto.', c: false,reason:'WB ist ein Minus-Aktivkonto.'},{s:'Degressive Abschreibung: Prozent des Buchwerts.', c: true}] },
        { id: 48, type: 'calc', q: 'Wirkungen von Über- bzw. Unterbewertungen im Fremdkapital', tips: ['Rückstellungen sind FK.','Bei richtiger Bewertung: Rückstellung = 60, EK = 500.'], reveal: [{label:'Fall 1',val:'Rückstellungen = 60, EK = 500'},{label:'Fall 2',val:'Rückstellungen = 3, EK = 557'},{label:'Fall 3',val:'Rückstellungen = 90, EK = 470'}], correctRueck: [60,3,90], correctEK: [500,557,470] },
        { id: 49, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Inventar und Inventur', tips: ['Inventar = Verzeichnis. Inventur = Tätigkeit der Bestandsaufnahme.'], reveal: [{label:'1',val:'Richtig'},{label:'4',val:'Falsch – Inventur ist die Tätigkeit'}], statements: [{s:'Das Inventar ist ein Verzeichnis, Resultat einer Bestandsaufnahme.', c: true},{s:'Inventar enthält nur belegte Posten.', c: false,reason:'Alle zu bewertenden Posten.'},{s:'Inventur ist ein detailliertes Verzeichnis.', c: true},{s:'Inventur ist die Tätigkeit der Bestandsaufnahme.', c: false,reason:'Definition verwechselt.'},{s:'Inventar umfasst sämtliche Posten.', c: false,reason:'Nur die zu bewertenden.'},{s:'Inventar umfasst die zu bewertenden Posten.', c: true}] },
        { id: 50, type: 'text', q: 'Theoriefragen zur Abschreibung', tips: ['Indirekte Methode ist aufschlussreicher.','Abschreibungen sind nicht zahlungswirksam.'], reveal: [{label:'A',val:'Indirekte Methode aufschlussreicher'},{label:'C',val:'Nicht zahlungswirksam'}], questions: [{id:'a',q:'Welches Verfahren ist aufschlussreicher?',keywords:['indirekte','aufschlussreich']},{id:'b',q:'Abschreibung von Anschaffungskosten vs. Buchwert?',keywords:['konstant','linear','degressiv']},{id:'c',q:'Unterschied zu anderem Aufwand?',keywords:['nicht zahlungswirksam']},{id:'d',q:'Buchwert bei indirekter Abschreibung ermittelbar?',keywords:['ja','WB','Differenz']},{id:'e',q:'Anschaffungskosten bei direkter Abschreibung ermittelbar?',keywords:['nein','nicht','direkt']}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Methoden der Abschreibung kennen (linear, degressiv, leistungsabhängig)',
            'Direkte und indirekte Abschreibungsmethode unterscheiden',
            'Wirkungen von Über- und Unterbewertungen im Fremdkapital verstehen',
            'Inventar und Inventur unterscheiden'
          ]},
          { type: 'concept', title: 'Abschreibungsmethoden', content: 'Bei den linearen Abschreibungen wird der jährliche Abschreibungsbetrag in Prozent der Anschaffungskosten berechnet (konstanter Betrag). Bei der degressiven Methode wird in Prozent des Buchwerts abgeschrieben (abnehmender Betrag). Bei der leistungsabhängigen Methode wird der Abschreibungsbetrag pro Leistungseinheit mit den beanspruchten Leistungseinheiten multipliziert.', highlight: 'Linear = % der Anschaffungskosten. Degressiv = % des Buchwerts.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Direkte Abschreibung', def: 'Abschreibung direkt auf dem Anlagekonto. Anschaffungskosten nicht mehr ersichtlich.' },
            { term: 'Indirekte Abschreibung', def: 'Abschreibung über ein Wertberichtigungskonto (WB). Anschaffungskosten bleiben sichtbar.' },
            { term: 'Wertberichtigung (WB)', def: 'Minus-Aktivkonto. Zeigt die kumulierten Abschreibungen.' },
            { term: 'Buchwert', def: 'Anschaffungskosten − kumulierte Abschreibungen.' },
            { term: 'Inventar', def: 'Verzeichnis (Ergebnis der Bestandsaufnahme).' },
            { term: 'Inventur', def: 'Tätigkeit der Bestandsaufnahme.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Das Wertberichtigungskonto (WB) ist ein Minus-Aktivkonto (nicht ein Passivkonto!). Bei der degressiven Abschreibung wird der Wert null normalerweise nicht erreicht. Abschreibungen sind nicht zahlungswirksam (kein Geldabfluss). Die indirekte Methode ist aufschlussreicher, da Anschaffungskosten und kumulierte Abschreibungen separat ersichtlich sind.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 8: Wertanpassungen und Rechnungsabgrenzungen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch8',
      num: 'Kapitel 8',
      title: 'Wertanpassungen und Rechnungsabgrenzungen',
      exercises: [
        { id: 51, type: 'fill', q: 'Lückentext: Wertanpassungen', tips: ['Verluste aus Forderungen vom Konto Debitoren abgeschrieben.'], reveal: [{label:'A',val:'tatsächlichen; Forderungen aus L+L'},{label:'C',val:'Inventur; Soll; Haben'}], answers: [['endgültigen'],['direkt'],['endgültigen'],['über','indirekt'],['Verluste Forderungen','Debitorenverluste'],['Bestandskorrekturen'],['Soll'],['negativ'],['Haben'],['positiv']] },
        { id: 52, type: 'fill', q: 'Lückentext: Rechnungsabgrenzungen', tips: ['ARA = Transitorische Aktiven.','Rückstellungen für ungewisse Verpflichtungen.'], reveal: [{label:'A',val:'Transitorische Aktiven; Transitorische Passiven'}], answers: [['Transitorische Aktiven','TA'],['Transitorische Passiven','TP'],['Aufwand'],['nächste'],['nächste'],['zu hoch'],['Aufwand'],['laufende'],['laufende'],['zu tief'],['Höhe'],['Betrag'],['Zeitpunkt']] },
        { id: 53, type: 'tf', q: 'Richtig oder falsch? Forderungen, WB, transitorische Posten, Rückstellungen', tips: ['Verluste Forderungen ist ein Aufwandkonto.','ARA = UV, PRA = kurzfristiges FK.'], reveal: [{label:'1',val:'Falsch – Aufwandkonto'}], statements: [{s:'Verluste Forderungen ist Ertragsminderungskonto.', c: false,reason:'Es ist ein Aufwandkonto.'},{s:'WB-Bestand abhängig vom Forderungsbestand.', c: true},{s:'Am Ende wird immer der ganze WB-Betrag gebucht.', c: false,reason:'Nur die Differenz.'},{s:'ARA zum UV, PRA zum FK.', c: true},{s:'Gesamtrückstellungen für gleichartige Vorgänge.', c: true},{s:'Bildung Rückstellung ist erfolgswirksam.', c: true},{s:'Rückstellung: Soll Rückstellungen / Haben Erfolgskonto.', c: false,reason:'Umgekehrt: Soll Aufwandkonto / Haben Rückstellungen.'}] },
        { id: 54, type: 'calc', q: 'Berechnung WB Forderungen (Delkredere)', tips: ['WB in CHF = Forderungsbestand × WB-Satz in %.'], reveal: [{label:'Jahr 1',val:'WB = 80 000 × 5% = 4 000'},{label:'Jahr 2',val:'Ford. = 5 000 / 4% = 125 000'}], rows: [{label:'Jahr 1',answer:4000},{label:'Jahr 2',answer:125000},{label:'Jahr 3',answer:4400},{label:'Jahr 4',answer:6}] },
        { id: 55, type: 'check', q: 'Geschäftsfälle betragsmässig zwischen zwei Jahren abgrenzen', tips: ['Prüfen: Buchung ins laufende oder nächste Jahr?','Verursachung im selben Jahr → keine Abgrenzung.'], reveal: [{label:'1',val:'Laufendes 03: 2 Mon. = 2000; Nächstes 04: 1 Mon. = 1000'}], geschaeftsfaelle: [{nr:1,text:'Mietzins 12 000.– für Nov. bis Jan. im Voraus bezahlt.',needsAbgrenzung:'Ja'},{nr:2,text:'Maschinenreparatur in Woche 50, Rechnung fehlt noch.',needsAbgrenzung:'Ja'},{nr:3,text:'Warenbestellung vor Jahresende, Lieferung im Jan.',needsAbgrenzung:'Nein'},{nr:4,text:'Zeitschriftenabos im Voraus, 6 000.– laufen noch ins 04.',needsAbgrenzung:'Ja'},{nr:5,text:'Säumige Mieter zahlen Dezembermieten.',needsAbgrenzung:'Nein'},{nr:6,text:'Darlehen ab 01.08., Zinszahlung Ende Jan. fällig.',needsAbgrenzung:'Ja'}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Verluste aus Forderungen und Wertberichtigungen (Delkredere) verbuchen',
            'Aktive und passive Rechnungsabgrenzungen verstehen',
            'Transitorische Aktiven (ARA) und Passiven (PRA) unterscheiden',
            'Rückstellungen bilden und ihre Auswirkungen kennen'
          ]},
          { type: 'concept', title: 'Rechnungsabgrenzungen', content: 'Rechnungsabgrenzungen sorgen dafür, dass Aufwand und Ertrag der richtigen Periode zugeordnet werden. Aktive Rechnungsabgrenzungen (ARA/Transitorische Aktiven) grenzen Aufwand ab, der zwar verbucht, aber die nächste Periode betrifft, oder Ertrag, der die laufende Periode betrifft, aber noch nicht verbucht ist. Passive Rechnungsabgrenzungen (PRA/Transitorische Passiven) wirken umgekehrt.', highlight: 'ARA = Transitorische Aktiven (UV). PRA = Transitorische Passiven (kurzfr. FK).' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Debitorenverluste', def: 'Tatsächliche, endgültige Verluste aus Forderungen. Werden direkt vom Konto Forderungen L+L abgeschrieben.' },
            { term: 'Wertberichtigung Forderungen (Delkredere)', def: 'Pauschale Wertkorrektur auf dem Forderungsbestand. Bestand abhängig vom Forderungsbestand.' },
            { term: 'ARA (Transitorische Aktiven)', def: 'Vorausbezahlter Aufwand der nächsten Periode, oder noch nicht erhaltener Ertrag der laufenden Periode.' },
            { term: 'PRA (Transitorische Passiven)', def: 'Noch nicht bezahlter Aufwand der laufenden Periode, oder im Voraus erhaltener Ertrag der nächsten Periode.' },
            { term: 'Rückstellungen', def: 'Gebildet für ungewisse Verpflichtungen. Unsicherheit bei Höhe, Betrag und/oder Zeitpunkt des Eintretens.' },
            { term: 'Bestandskorrekturen', def: 'Differenzen aus der Inventur. Zunahmen wirken positiv, Abnahmen negativ auf den Periodenerfolg.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Bildung einer Rückstellung ist erfolgswirksam und belastet den Erfolg der Periode, in der die ungewisse Verpflichtung entsteht. Die Buchung lautet: Aufwandkonto / Rückstellungen (nicht umgekehrt!). Ohne Abgrenzung würde der Erfolg der Periode verzerrt dargestellt.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 9: Stille Reserven und interne Rechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch9',
      num: 'Kapitel 9',
      title: 'Stille Reserven und interne Rechnung',
      exercises: [
        { id: 56, type: 'fill', q: 'Lückentext: stille Reserven', tips: ['Stille Reserven durch Unterbewertung Aktiven oder Überbewertung FK.','Bildung stiller Reserven mindert den ausgewiesenen Erfolg.'], reveal: [{label:'A',val:'Betrag der stillen Reserven; tiefer/niedriger'}], answers: [['den Betrag','Betrag'],['tiefer','niedriger'],['mindert'],['externen'],['internen'],['erhöht'],['externen'],['Auflösung'],['Betrag'],['Veränderung']] },
        { id: 57, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den stillen Reserven', tips: ['Beim Konto Kasse keine stillen Reserven möglich.'], reveal: [{label:'1',val:'Falsch – erhöht den internen, nicht externen Gewinn'}], statements: [{s:'Bildung stiller Reserven erhöht den internen Reingewinn.', c: false,reason:'Mindert den externen Gewinn.'},{s:'Beim Konto Kasse können stille Reserven gebildet werden.', c: false,reason:'Kasse hat festen Wert.'},{s:'EUR-Forderung zu tieferem Kurs = stille Reserven.', c: true},{s:'Stille Reserven sind «still» weil intern nicht ersichtlich.', c: true},{s:'Auflösung stiller Reserven: Erfolg wird zu hoch ausgewiesen.', c: false,reason:'Extern zu hoch dargestellt.'},{s:'Unterbewertung Vorräte: Vorratsabnahme löst stille Reserven auf.', c: true}] },
        { id: 58, type: 'calc', q: 'Externe Schlussbilanz aus der internen ableiten', tips: ['Stille Reserven auf Aktiven: Extern = Intern − stille Reserve.','EK extern = Total A extern − Total FK extern.'], reveal: [{label:'Vorräte extern',val:'130'},{label:'Mobilien extern',val:'225'},{label:'EK extern',val:'250'}], fields: [{label:'Vorräte (extern)',answer:130},{label:'Mobilien (extern)',answer:225},{label:'Rückstellungen (extern)',answer:25},{label:'Eigenkapital (extern)',answer:250},{label:'Bilanzsumme (extern)',answer:455}] },
        { id: 59, type: 'calc', q: 'Bilanzgleichung und stille Reserven', tips: ['Stille Reserven = Unterbewertung Aktiven + Überbewertung FK.','Aktiven − FK = EK.'], reveal: [{label:'A – extern',val:'Aktiven = 1000, FK = 400, EK = 600'}], fieldsA: [{label:'Externe Bilanz: Aktiven',answer:1000},{label:'Wertunterschied: Aktiven',answer:-100},{label:'Wertunterschied: FK',answer:40},{label:'Wertunterschied: EK',answer:-140},{label:'Interne Bilanz: FK',answer:360},{label:'Interne Bilanz: EK',answer:740}], fieldsB: [{label:'Interne Bilanz: Aktiven',answer:910},{label:'Interne Bilanz: FK',answer:440},{label:'Wertunterschied: Aktiven',answer:-70},{label:'Wertunterschied: FK',answer:20},{label:'Externe Bilanz: FK',answer:460},{label:'Externe Bilanz: EK',answer:380}] },
        { id: 60, type: 'mc', q: 'Wählen Sie die Antwort: Stille Reserven bei einer AG', tips: ['Mobiliar CHF 1.– = Erinnerungsfranken.','Bildung stiller Reserven verkleinert den ausgewiesenen Gewinn.'], reveal: [{label:'A',val:'Erinnerungsfranken'},{label:'E',val:'Verkleinert ausgewiesenen Gewinn'}], questions: [{id:'a',q:'Mobiliar CHF 1.– ?',answer:2},{id:'b',q:'Was gehört zum EK?',answer:2},{id:'c',q:'Wo keine stillen Reserven?',answer:2},{id:'d',q:'Welche Aussage ist richtig?',answer:3},{id:'e',q:'Warum Selbstfinanzierung?',answer:1}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Stille Reserven verstehen: Entstehung durch Unterbewertung Aktiven oder Überbewertung FK',
            'Bildung und Auflösung stiller Reserven und deren Auswirkung auf den Erfolg kennen',
            'Zwischen externer (publizierter) und interner (bereinigter) Bilanz unterscheiden'
          ]},
          { type: 'concept', title: 'Stille Reserven', content: 'Stille Reserven entstehen durch Unterbewertung von Aktiven oder Überbewertung von Fremdkapital. Sie sind in der publizierten (externen) Bilanz nicht erkennbar. Die Bildung stiller Reserven mindert den extern ausgewiesenen Erfolg, die Auflösung erhöht ihn. Die interne Bilanz zeigt die bereinigten (echten) Werte.', highlight: 'Bildung stiller Reserven → externer Gewinn sinkt. Auflösung → externer Gewinn steigt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Stille Reserven', def: 'Differenz zwischen dem internen (echten) Wert und dem extern ausgewiesenen Wert. Entstehen durch bewusste Unterbewertung.' },
            { term: 'Externe Bilanz', def: 'Die publizierte Bilanz mit möglicherweise stillen Reserven.' },
            { term: 'Interne Bilanz', def: 'Die bereinigte Bilanz mit den echten (höheren) Werten.' },
            { term: 'Erinnerungsfranken', def: 'Bilanzierung einer Anlage zu CHF 1.−, obwohl sie mehr wert ist (stille Reserven).' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Beim Konto Kasse können KEINE stillen Reserven gebildet werden (Bargeld hat einen festen Wert). Stille Reserven sind «still», weil sie in der externen Bilanz nicht erkennbar sind. Die Bildung stiller Reserven ist eine Form der Selbstfinanzierung.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 10: Einführung in die Kostenrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch10',
      num: 'Kapitel 10',
      title: 'Einführung in die Kostenrechnung',
      exercises: [
        { id: 61, type: 'fill', q: 'Lückentext: Kostenrechnung', tips: ['Kosten nach Kostenarten, Kostenstellen und Kostenträgern.','Einzelkosten direkt, Gemeinkosten indirekt.'], reveal: [{label:'A1',val:'Kostenarten'},{label:'A2',val:'Kostenstellen'},{label:'A3',val:'Kostenträgern'}], answers: [['Kostenarten'],['Kostenstellen'],['Kostenträgern'],['Einzelkosten'],['Gemeinkosten'],['Gemeinkosten'],['Einzelkosten'],['sachliche Abgrenzungen'],['Kostenartenrechnung'],['Kostenstellenrechnung'],['Verursacherprinzip']] },
        { id: 62, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Kostenrechnung', tips: ['Direkte Kosten werden den Kostenträgern direkt zugeordnet.','Herstellkosten = Materialkosten + Fertigungskosten.'], reveal: [{label:'1',val:'Falsch – Einzelkosten direkt den Kostenträgern'}], statements: [{s:'Direkte Kosten werden direkt den Kostenstellen belastet.', c: false,reason:'Direkt den Kostenträgern.'},{s:'Sachliche Abgrenzung = Differenz FIBU-Aufwand und BEBU-Kosten.', c: true},{s:'Aus der Kostenstellenrechnung sehen wir das Kostentotal der Produkte.', c: false,reason:'Kostenträgerrechnung zeigt das.'},{s:'Kostenstellenrechnung ist Grundlage für Kostenartenrechnung.', c: false,reason:'Umgekehrt.'},{s:'Material-GK + Fertigungs-GK = Selbstkosten.', c: false,reason:'Selbstkosten = HK + VVGK.'},{s:'Materialkosten + Fertigungskosten = Herstellkosten.', c: true}] },
        { id: 63, type: 'match', q: 'Zuordnung: Kostenart – Kostenstelle – Kostenträger', tips: ['Kostenarten: Gehälter, Zinsen, Versicherungen.','Kostenstellen: Verwaltung, Vertrieb, Kantine.'], reveal: [{label:'Werbekosten',val:'Kostenart'},{label:'Vertrieb',val:'Kostenstelle'}], pairs: [{l:'Werbekosten',r:'Kostenart'},{l:'Vertrieb',r:'Kostenstelle'},{l:'Kaffeemaschinen',r:'Kostenträger'},{l:'Kantine',r:'Kostenstelle'},{l:'Verwaltung',r:'Kostenstelle'},{l:'Gehälter',r:'Kostenart'},{l:'Kalkulatorische Abschreibungen',r:'Kostenart'},{l:'Waschmaschinen',r:'Kostenträger'},{l:'Rohmaterial',r:'Kostenart'},{l:'Zinsen',r:'Kostenart'},{l:'Bügeleisen',r:'Kostenträger'},{l:'Montage',r:'Kostenstelle'},{l:'Versicherungsprämien',r:'Kostenart'}], options: ['Kostenart','Kostenstelle','Kostenträger'] },
        { id: 64, type: 'text', q: 'Einzelfragen zum Thema Kostenrechnung', tips: ['Einzelkosten können einem Kostenträger direkt zugeordnet werden.','Drei Hauptkostenstellen: Material, Fertigung, V+V.'], reveal: [{label:'A',val:'Einzelkosten direkt zurechenbar'},{label:'E',val:'Material, Fertigung, Verwaltung und Vertrieb'}], questions: [{id:'A',q:'Merkmal von Einzelkosten?',keywords:['direkt','zugeordnet','Kostenträger']},{id:'B',q:'Worauf baut die BEBU auf?',keywords:['Finanzbuchhaltung','FIBU']},{id:'C',q:'Was ist eine sachliche Abgrenzung?',keywords:['Differenz','Aufwand','Kosten']},{id:'D',q:'Was besagt die Kostenträgerrechnung?',keywords:['Kosten','Produkt','Stückkosten']},{id:'E',q:'Drei Hauptkostenstellen?',keywords:['Material','Fertigung','Verwaltung']},{id:'F',q:'Was ist eine Bezugsgrösse?',keywords:['Verteilschlüssel','Umlage','Gemeinkosten']}] },
        { id: 65, type: 'calc', q: 'Aufwände in Kosten überführen', tips: ['Geschäftsinhaber bezog Material privat (−30).','Sozialkosten 25% vom bereinigten Lohn.'], reveal: [{label:'Materialaufwand',val:'Abgr: −30, Kosten: 2700'}], rows: [{label:'Materialaufwand',aufwand:2730,abgr:-30,kosten:2700},{label:'Lohnaufwand',aufwand:3250,abgr:-250,kosten:3000},{label:'Sozialaufwand',aufwand:611,abgr:139,kosten:750},{label:'Raumaufwand',aufwand:468,abgr:0,kosten:468},{label:'Zinsaufwand',aufwand:156,abgr:44,kosten:200},{label:'Versicherungsaufwand',aufwand:104,abgr:18,kosten:122},{label:'Energieaufwand',aufwand:143,abgr:0,kosten:143}] },
        { id: 66, type: 'calc', q: 'Betriebsabrechnung der Produkte O und P', tips: ['Unternehmerlohn 180 berücksichtigen.','Zuschlagssätze berechnen.'], reveal: [{label:'Material-GK-Zuschlag',val:'25%'},{label:'Fertigungs-GK-Zuschlag',val:'75%'}], calcs: [{label:'Unternehmerlohn',answer:180},{label:'Material: Kostenstelle Material',answer:200},{label:'Material: Kostenstelle Fertigung',answer:600},{label:'Material-GK-Zuschlag in %',answer:25},{label:'Fertigungs-GK-Zuschlag in %',answer:75}] },
        { id: 67, type: 'calc', q: 'Fahrradhersteller Keller GmbH: Auswertung des BAB', tips: ['Zuschlagssatz = GK / Bezugsgrösse × 100.'], reveal: [{label:'Material-ZS',val:'19.56%'}], calcs: [{label:'Material-ZS in %',answer:19.56},{label:'Rahmenherstellung CHF/h',answer:36.92},{label:'Zubehörproduktion CHF/Löhne',answer:161.62},{label:'Montage CHF/h',answer:25.00},{label:'Entwurf CHF/Stk',answer:13.61},{label:'V.u.V. in % der HK',answer:15.43}] },
        { id: 68, type: 'calc', q: 'Betriebsabrechnung der Race Equipment AG', tips: ['Rohmaterial im Verhältnis 88:176.','Einzellöhne: 2/6 Snowboard, 4/6 Carving Ski.'], reveal: [{label:'Gewinn Snowboards',val:'560'},{label:'Gewinn Carving Skis',val:'680'}], calcs: [{label:'Total Rohmaterial Snowboards',answer:1280},{label:'Total Rohmaterial Carving Skis',answer:2560},{label:'Einzellöhne Snowboards',answer:747},{label:'Einzellöhne Carving Skis',answer:1493},{label:'Gewinn/Verlust Snowboards',answer:560},{label:'Gewinn/Verlust Carving Skis',answer:680}] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die drei Stufen der Kostenrechnung verstehen: Kostenarten, Kostenstellen, Kostenträger',
            'Einzelkosten und Gemeinkosten unterscheiden',
            'Sachliche Abgrenzungen zwischen FIBU und BEBU vornehmen',
            'Einen einfachen Betriebsabrechnungsbogen (BAB) erstellen'
          ]},
          { type: 'concept', title: 'Aufbau der Kostenrechnung', content: 'In der Betriebsbuchhaltung (BEBU) werden die Kosten nach drei Gesichtspunkten erfasst: Kostenarten (welche Kosten?), Kostenstellen (wo sind sie angefallen?) und Kostenträger (wofür sind sie angefallen?). Einzelkosten werden direkt den Kostenträgern zugeordnet, Gemeinkosten werden über die Kostenstellenrechnung verteilt.', highlight: 'Einzelkosten → direkt auf Kostenträger. Gemeinkosten → über Kostenstellen verteilt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kostenarten', def: 'Welche Kosten? Z.B. Material, Löhne, Zinsen, Versicherungen, Abschreibungen.' },
            { term: 'Kostenstellen', def: 'Wo sind die Kosten angefallen? Z.B. Material, Fertigung, Verwaltung, Vertrieb.' },
            { term: 'Kostenträger', def: 'Wofür sind die Kosten angefallen? Z.B. Produkt A, Produkt B.' },
            { term: 'Einzelkosten (direkte Kosten)', def: 'Kosten, die einem Kostenträger direkt zugeordnet werden können.' },
            { term: 'Gemeinkosten (indirekte Kosten)', def: 'Kosten, die nicht direkt zugeordnet werden können und über Kostenstellen umgelegt werden.' },
            { term: 'Sachliche Abgrenzung', def: 'Differenz zwischen Aufwand (FIBU) und Kosten (BEBU). Z.B. kalkulatorische Kosten.' },
            { term: 'Verursacherprinzip', def: 'Wer die Kosten verursacht, soll sie auch tragen.' },
            { term: 'Bezugsgrösse', def: 'Verteilschlüssel für die Umlage der Gemeinkosten auf Kostenträger.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die Kostenstellenrechnung bildet die Grundlage für die Kostenträgerrechnung (nicht umgekehrt!). Herstellkosten = Materialkosten + Fertigungskosten. Selbstkosten = Herstellkosten + VVGK (Verwaltungs- und Vertriebsgemeinkosten).' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 11: Ausgewählte Fragen der Kostenrechnung
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch11',
      num: 'Kapitel 11',
      title: 'Ausgewählte Fragen der Kostenrechnung',
      exercises: [
        { id: 69, type: 'fill', q: 'Lückentext: Kostenrechnungssysteme', tips: ['Die Ist-Kostenrechnung verwendet tatsächliche Kosten.','Direct Costing: nur variable Kosten.'], reveal: [{label:'A',val:'Ist-Kostenrechnung'},{label:'C',val:'variablen / fixen / Deckungsbeitrag'}], answers: [['Ist-Kostenrechnung'],['Ist-Kosten'],['Normalkostenrechnung'],['vergangenheitsorientiert'],['Vollkostenrechnung'],['Teilkostenrechnung'],['variablen'],['fixen'],['Einzelkosten'],['Gemeinkosten'],['proportionalen'],['fixen']] },
        { id: 70, type: 'tf', q: 'Richtig oder falsch? Kostenrechnungssysteme', tips: ['Einzelkosten ≠ variable Kosten immer.','DB = Nettoerlös − variable Kosten.'], reveal: [{label:'1',val:'Falsch – Einzelkosten nicht immer = variable Kosten'}], statements: [{s:'Einzelkosten = variable Kosten.', c: false,reason:'Nicht identisch.'},{s:'Standardkostenrechnung gehört zu Vollkostensystemen.', c: true},{s:'DB = Selbstkosten − variable Kosten.', c: false,reason:'DB = Nettoerlös − variable Kosten.'},{s:'Normalkostenrechnung und Ist-Kostenrechnung unterscheiden sich.', c: true},{s:'Prozesskostenrechnung ist ein Teilkostensystem.', c: false,reason:'Ist ein Vollkostensystem.'}] },
        { id: 71, type: 'text', q: 'Umschreibung von Fachbegriffen der Kostenrechnung', tips: ['Variable Kosten ändern sich mit der Beschäftigung.','Fixe Kosten bleiben bei Beschäftigungsänderung gleich.'], reveal: [{label:'A',val:'Kosten, die sich proportional zur Beschäftigung ändern'}], questions: [{id:'a',q:'Variable Kosten?',keywords:['proportional','Beschäftigung','veränderlich']},{id:'b',q:'Fixe Kosten?',keywords:['gleich','unverändert','konstant']},{id:'c',q:'Deckungsbeitrag?',keywords:['Erlös','variable','Kosten']},{id:'d',q:'Break-even?',keywords:['Gewinnschwelle','Nutzschwelle','Nullpunkt']}] },
        { id: 72, type: 'text', q: 'Kostenverläufe aufzeichnen', tips: ['Fixe Kosten: waagrechte Linie.','Variable Kosten: steigende Gerade durch Nullpunkt.'], reveal: [{label:'A',val:'Fixe Kosten = waagrechte Linie'},{label:'B',val:'Variable Kosten = steigende Gerade'}], questions: [{id:'a',q:'Beschreiben Sie den Verlauf fixer Kosten.',keywords:['waagrecht','konstant','horizontal']},{id:'b',q:'Beschreiben Sie den Verlauf variabler Kosten.',keywords:['steigend','proportional','Gerade']}] },
        { id: 73, type: 'calc', q: 'Betriebsabrechnung im Direct Costing', tips: ['Im Direct Costing werden nur variable Kosten den Produkten zugerechnet.','Fixe Kosten werden als Block vom Gesamt-DB abgezogen.'], reveal: [{label:'DB Produkt A',val:'Berechnung: Erlös − variable Kosten'}], calcs: [] }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Verschiedene Kostenrechnungssysteme kennen (Ist-, Normal-, Standardkostenrechnung)',
            'Voll- und Teilkostenrechnung unterscheiden',
            'Variable und fixe Kosten unterscheiden und grafisch darstellen',
            'Den Deckungsbeitrag berechnen (Nettoerlös − variable Kosten)'
          ]},
          { type: 'concept', title: 'Kostenrechnungssysteme', content: 'Die ursprüngliche Form ist die Ist-Kostenrechnung, bei der die tatsächlichen Kosten verrechnet werden. Bei der Vollkostenrechnung werden ALLE Kosten auf die Kostenträger verrechnet. Bei der Teilkostenrechnung (z.B. Direct Costing) werden nur die variablen Kosten den Kostenträgern zugerechnet; die fixen Kosten werden als Block vom Gesamt-Deckungsbeitrag abgezogen.', highlight: 'Vollkosten = alle Kosten. Teilkosten (Direct Costing) = nur variable Kosten.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Ist-Kostenrechnung', def: 'Verrechnet die tatsächlich angefallenen Kosten.' },
            { term: 'Normalkostenrechnung', def: 'Verwendet Durchschnittswerte aus der Vergangenheit.' },
            { term: 'Standardkostenrechnung', def: 'Vollkostensystem mit vorgegebenen Plankosten.' },
            { term: 'Variable Kosten', def: 'Kosten, die sich proportional zur Produktionsmenge verändern.' },
            { term: 'Fixe Kosten', def: 'Kosten, die unabhängig von der Produktionsmenge gleich bleiben.' },
            { term: 'Deckungsbeitrag (DB)', def: 'Nettoerlös − variable Kosten. Beitrag zur Deckung der Fixkosten und zum Gewinn.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Einzelkosten sind NICHT immer gleich variable Kosten (z.B. fixe Einzelkosten). Im Direct Costing werden nur variable Kosten den Kostenträgern zugerechnet. Nicht verrechnete fixe Kosten müssen durch den Gesamt-Deckungsbeitrag gedeckt werden.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 12: Kalkulationen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch12',
      num: 'Kapitel 12',
      title: 'Kalkulationen: Berechnungen rund um Betriebsleistungen',
      exercises: [
        {
          id: 74, type: 'fill',
          q: 'Lückentext: Kalkulationsgrössen',
          template: 'A) Der Bruttogewinn ist die Differenz zwischen {0} und {1}.\n\nB) Nach Berücksichtigung von {2} und sonstigen Erträgen ergibt sich der {3} bzw. {4} des Handelsunternehmens.\n\nC) Beim Bruttogewinnzuschlag in Prozent wird der Bruttogewinn als Prozentsatz vom {5} (bei Gesamtkalkulation) bzw. vom {6} (bei Einzelkalkulation) ausgedrückt.\n\nD) Bei der Handelsmarge in Prozent wird der Bruttogewinn als Prozentsatz vom {7} (bei Gesamtkalkulation) bzw. vom {8} (bei Einzelkalkulation) ausgedrückt.\n\nE) Wenn wir vom Total der {9} die Material-Gemeinkosten abziehen, so erhalten wir die Einzelmaterialkosten. Diese Kosten werden direkt auf die {10} übertragen.\n\nF) Nettoerlös − Selbstkosten = {11}.\n\nG) Nettoerlös − Warenaufwand = {12}.\n\nH) Selbstkosten + Reingewinn = {13}.\n\nI) Gemeinkosten + Reingewinn = {14}.',
          blanks: [['Nettoerlös','Nettoumsatz'],['Warenaufwand','Einstand','Einstandswert'],['betriebsfremden Aufwänden','betriebsfremde Aufwände','Gemeinaufwand'],['Bruttogewinn'],['Reingewinn'],['Einstandswert','Einstand'],['Nettoerlös'],['Einstandswert','Einstand'],['Selbstkosten'],['Warenaufwand','Einstandswert'],['Nettoerlös','Kostenträger'],['Reingewinn'],['Selbstkosten','Bruttogewinn'],['Nettoerlös','Bruttoerlös'],['Nettoerlös']],
          tips: ['Bruttogewinn = Nettoerlös − Warenaufwand (Einstand).','Reingewinn = Bruttogewinn − Gemeinaufwand + sonstige Erträge.','Nettoerlös − Selbstkosten = Reingewinn.'],
          reveal: [{label:'A',val:'Nettoerlös / Warenaufwand (Einstand)'},{label:'B',val:'betriebsfremden Aufwänden / Bruttogewinn / Reingewinn'},{label:'C',val:'Einstandswert / Nettoerlös'},{label:'D',val:'Einstandswert / Selbstkosten'},{label:'E',val:'Warenaufwand / Nettoerlös / Nettoerlös'},{label:'F',val:'Reingewinn / Reingewinnzuschlag'},{label:'G',val:'Selbstkosten / Reingewinnzuschlag'},{label:'H',val:'Nettoerlös / Bruttoerlös'},{label:'I',val:'Gemeinkosten / Nettoerlös'}]
        },
        {
          id: 75, type: 'tf',
          q: 'Richtig oder falsch? Kalkulation (Handelsbetrieb)',
          tips: ['Handelsmarge und Bruttogewinnzuschlag: In Franken sind sie gleich gross.','In Prozenten ist die Handelsmarge immer kleiner als der Bruttogewinnzuschlag.','Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand, der Reingewinnzuschlag auf den Selbstkosten.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – In Franken gleich, in Prozent ist Handelsmarge kleiner'},{label:'3',val:'Falsch – In Prozenten ist Handelsmarge kleiner (grössere Bezugsgrösse)'},{label:'4',val:'Richtig'},{label:'5',val:'Falsch – In Prozenten ist Bruttogewinnzuschlag grösser als Handelsmarge'},{label:'6',val:'Richtig'}],
          statements: [
            {s:'In Franken gemessen ist in einer bestimmten Situation die Handelsmarge bzw. der Bruttogewinnzuschlag gleich gross.', c: true},
            {s:'In Franken gemessen ist in einer bestimmten Situation die Handelsmarge höher als der Bruttogewinnzuschlag.', c: false,reason:'In Franken sind sie identisch.'},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation die Handelsmarge höher als der entsprechende Bruttogewinnzuschlag.', c: false,reason:'Die Handelsmarge in % ist immer kleiner, da sie auf dem grösseren Nettoerlös basiert.'},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation der Bruttogewinnzuschlag höher als die entsprechende Handelsmarge.', c: true},
            {s:'In Prozenten gemessen ist in einer bestimmten Situation der Bruttogewinnzuschlag gleich hoch wie die entsprechende Handelsmarge.', c: false,reason:'Nur in Franken gleich, nicht in Prozent.'},
            {s:'Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand und der Reingewinnzuschlag auf den Selbstkosten.', c: true}
          ]
        },
        {
          id: 76, type: 'tf',
          q: 'Richtig oder falsch? Kalkulation (Produktionsbetrieb)',
          tips: ['Kalkulation = Ermittlung der Selbstkosten, nicht nur der Material-Gemeinkosten.','Material- + Fertigungskosten = Herstellkosten.','VVGK werden von den Herstellkosten subtrahiert, nicht von den Selbstkosten.'],
          reveal: [{label:'1',val:'Falsch – Kalkulation ermittelt die Selbstkosten'},{label:'2',val:'Richtig'},{label:'3',val:'Richtig'},{label:'4',val:'Falsch – Mat.+Fert. = Herstellkosten'},{label:'5',val:'Falsch – VVGK von den Selbstkosten subtrahieren ergibt Herstellkosten'},{label:'6',val:'Richtig'}],
          statements: [
            {s:'Bei der Kalkulation geht es um die Ermittlung der Material-Gemeinkosten.', c: false,reason:'Kalkulation ermittelt die Selbstkosten (Gesamtkosten eines Produkts).'},
            {s:'Die Kalkulationen können als Gesamt- oder Einzelkalkulation durchgeführt werden.', c: true},
            {s:'Das Kalkulationsschema besagt, wo Kosten entstanden sind.', c: true},
            {s:'Wenn wir die Material- und Fertigungskosten addieren, erhalten wir die Selbstkosten.', c: false,reason:'Mat.+Fert. = Herstellkosten. Selbstkosten = Herstellkosten + VVGK.'},
            {s:'Wenn wir von den Selbstkosten die Verwaltungs- und Vertriebs-Gemeinkosten subtrahieren, erhalten wir die Fertigungs-Gemeinkosten.', c: false,reason:'Selbstkosten − VVGK = Herstellkosten.'},
            {s:'Wenn wir die Materialeinzelkosten mit den Material-Gemeinkosten addieren, so erhalten wir das Total der Materialkosten.', c: true}
          ]
        },
        {
          id: 77, type: 'match',
          q: 'Zuordnung: Kalkulationsarten. Ordnen Sie den folgenden Punkten 1 bis 8 das Passende aus der Liste A bis H zu.',
          tips: ['Gesamtkalkulation = Kalkulation aller Waren.','Einkaufskalkulation = Kalkulation des Einstands.','Nachkalkulation = Kalkulation mit effektiven Werten.'],
          reveal: [{label:'1. Gesamtkalkulation',val:'D – Kalkulation aller Waren (Sortiment)'},{label:'2. Einkaufskalkulation',val:'E – Kalkulation des Einstands'},{label:'3. Aufbauende Kalkulation',val:'F – Kalkulation vom kleineren zum grösseren Wert'},{label:'4. Einzelkalkulation',val:'A – Kalkulation für einen Artikel (Stück oder Los)'},{label:'5. Betriebskalkulation',val:'H – Kalkulation der eigenen Leistungserstellung'},{label:'6. Abbauende Kalkulation',val:'B – Kalkulation vom grösseren zum kleineren Wert'},{label:'7. Verkaufskalkulation',val:'G – Kalkulation des Listenpreises'},{label:'8. Nachkalkulation',val:'C – Kalkulation mit effektiven Werten'}],
          pairs: [
            {l:'1. Gesamtkalkulation',r:'D'},
            {l:'2. Einkaufskalkulation',r:'E'},
            {l:'3. Aufbauende Kalkulation',r:'F'},
            {l:'4. Einzelkalkulation',r:'A'},
            {l:'5. Betriebskalkulation',r:'H'},
            {l:'6. Abbauende Kalkulation',r:'B'},
            {l:'7. Verkaufskalkulation',r:'G'},
            {l:'8. Nachkalkulation',r:'C'}
          ],
          options: ['A','B','C','D','E','F','G','H']
        },
        {
          id: 78, type: 'text',
          q: 'Einzelfragen zum Thema Kalkulation. Umschreiben Sie die Begriffe bzw. notieren Sie, welche Grösse aus der Gleichung resultiert.',
          tips: ['Gemeinaufwand des Handelsbetriebs = alle Kosten ausser Warenaufwand.','Einstandswert = Einkaufspreis + Bezugskosten − Rabatte.','Nettoerlös − Reingewinnzuschlag = Selbstkosten.'],
          reveal: [{label:'A',val:'Alle Kosten des Handelsbetriebs, die nicht direkt dem Warenaufwand zugeordnet werden (Personal, Miete, etc.).'},{label:'B',val:'Reingewinn (Betriebsgewinn)'},{label:'C',val:'Gesamtkosten der Beschaffung: Einkaufspreis + Bezugskosten − Rabatte/Skonti.'},{label:'D',val:'Nettoerlös (Nettoumsatz)'},{label:'E',val:'Einstandswert (Warenaufwand)'}],
          questions: [
            {id:'A',q:'Gemeinaufwand des Handelsbetriebs',keywords:['Kosten','Warenaufwand','Gemein','Personal','Miete','indirekt']},
            {id:'B',q:'= Bruttogewinn − Gemeinaufwand + sonstige Erträge',keywords:['Reingewinn','Betriebsgewinn','Nettoergebnis']},
            {id:'C',q:'Einstandswert',keywords:['Einkaufspreis','Bezugskosten','Rabatt','Beschaffung','Lieferant']},
            {id:'D',q:'= Einstand + Bruttogewinn',keywords:['Nettoerlös','Verkaufspreis','Umsatz']},
            {id:'E',q:'= Nettoerlös − Handelsmarge',keywords:['Einstand','Warenaufwand','Einstandswert']}
          ]
        },
        {
          id: 79, type: 'calc',
          q: 'Kalkulation: Ergänzung fehlender Grössen. Ergänzen Sie in den folgenden Tabellen die fehlenden Werte (Einkaufs- bzw. Verkaufskalkulation).',
          tips: ['Einkaufskalkulation: Bruttokreditankauf − Rabatt = Nettokreditankauf − Skonto = Nettobarankauf + Bezugskosten = Einstand.','Rabatt wird vom Bruttokreditankauf berechnet.','Skonto wird vom Nettokreditankauf berechnet.'],
          reveal: [{label:'Nr.1 Einkauf: Nettobarankauf',val:'1323.00'},{label:'Nr.2 Einkauf: Rabatt',val:'390.00'},{label:'Nr.3 Einkauf: Skonto',val:'7332.00'},{label:'Nr.4 Einkauf: Nettobarankauf',val:'2293.20'},{label:'Nr.1 Verkauf: Rabatt',val:'608.94'},{label:'Nr.3 Verkauf: Bruttokreditverkauf',val:'2500.00'}],
          calcs: [
            {label:'Nr.1 Einkauf: Nettobarankauf (1800−25%=1350−2%)',answer:1323},
            {label:'Nr.2 Einkauf: Rabatt (2600×15%)',answer:390},
            {label:'Nr.3 Einkauf: Skonto (9400−20%=7520, davon Skonto)',answer:7332},
            {label:'Nr.4 Einkauf: Nettobarankauf (3000−Rabatt−2%)',answer:2293.20},
            {label:'Nr.1 Verkauf: Rabatt (1822.80/(1−0.02)/(1−0.25)×25%)',answer:608.94},
            {label:'Nr.2 Verkauf: Skonto (3702.60→Skonto berechnen)',answer:0},
            {label:'Nr.3 Verkauf: Bruttokreditverkauf',answer:2500}
          ]
        },
        {
          id: 80, type: 'calc',
          q: 'Kalkulationsstaffel. Ein Möbelgeschäft kalkuliert ein Regalsystem. Listenpreis CHF 400.−, Wiederverkaufsrabatt 25%, Lieferantenskonto 2%, Bezugskosten CHF 56.−, Bruttogewinnzuschlag 40%, Verkaufsskonto 2%, Einführungsrabatt 20%.',
          tips: ['Listenpreis 400, Wiederverkaufsrabatt 25% = 300.','Lieferantenskonto 2% vom Nettokreditankauf.','Bruttogewinnzuschlag 40%, Skonto 2%, Einführungsrabatt 20%.'],
          reveal: [{label:'Bruttokreditankauf',val:'400.00'},{label:'Rabatt (25%)',val:'100.00'},{label:'Nettokreditankauf',val:'300.00'},{label:'Skonto (2%)',val:'6.00'},{label:'Nettobarankauf',val:'294.00'},{label:'Bezugskosten',val:'56.00'},{label:'Einstand',val:'350.00'},{label:'Bruttogewinnzuschlag (40%)',val:'140.00'},{label:'Nettobarverkauf',val:'490.00'},{label:'Skonto (2%)',val:'10.00'},{label:'Nettokreditverkauf',val:'500.00'},{label:'Rabatt (20%)',val:'125.00'},{label:'Bruttokreditverkauf',val:'625.00'}],
          calcs: [
            {label:'Bruttokreditankauf (Listenpreis)',answer:400},
            {label:'− Rabatt (25%)',answer:100},
            {label:'= Nettokreditankauf',answer:300},
            {label:'− Skonto (2%)',answer:6},
            {label:'= Nettobarankauf',answer:294},
            {label:'+ Bezugskosten',answer:56},
            {label:'= Einstand',answer:350},
            {label:'+ Bruttogewinnzuschlag (40%)',answer:140},
            {label:'= Nettobarverkauf',answer:490},
            {label:'+ Skonto (2%)',answer:10},
            {label:'= Nettokreditverkauf',answer:500},
            {label:'+ Rabatt (20%)',answer:125},
            {label:'= Bruttokreditverkauf',answer:625}
          ]
        },
        {
          id: 81, type: 'calc',
          q: 'Durchschnittliche Zuschlagssätze (Gesamtkalkulation). Die Meier Trading AG erzielt einen Nettoumsatz von CHF 816\'000.−. Die Gemeinkosten betragen CHF 140\'000.− und der Bruttogewinn entspricht 27.5% des Einstandswerts.',
          tips: ['Nettoumsatz 816\'000, Gemeinkosten 140\'000, Bruttogewinn = 27.5% des Einstandswerts.','Einstandswert = Nettoumsatz − Bruttogewinn.','Reingewinn = Nettoumsatz − Einstandswert − Gemeinkosten.'],
          reveal: [{label:'Einstandswert',val:'640000'},{label:'Bruttogewinn',val:'176000'},{label:'Reingewinn',val:'36000'},{label:'Selbstkosten',val:'780000'},{label:'Gemeinkostenzuschlag',val:'21.88%'},{label:'Reingewinnzuschlag',val:'4.62%'}],
          calcs: [
            {label:'Einstandswert (CHF)',answer:640000},
            {label:'Bruttogewinn (CHF)',answer:176000},
            {label:'Reingewinn (CHF)',answer:36000},
            {label:'Selbstkosten (CHF)',answer:780000},
            {label:'Gemeinkostenzuschlag (%)',answer:21.88},
            {label:'Reingewinnzuschlag (%)',answer:4.62}
          ]
        },
        {
          id: 82, type: 'calc',
          q: 'Kalkulation einer Sitzplatzüberdachung (Modell Ticino). Einzelmaterial CHF 400, Einzellöhne 4 Std. à CHF 75, Material-GK 12.5%, Fertigungs-GK 1: 50% auf EL, Fertigungs-GK 2: 1 Std. à CHF 100, VVGK 10% der HK, Reingewinn 8% der SK.',
          tips: ['Einzelmaterial CHF 400, Einzellöhne 4 Stunden × CHF 75 = CHF 300.','Material-GK 12.5% auf EM, Fertigungs-GK 1: 50% auf EL, Fertigungs-GK 2: 1 Std. × CHF 100.','VVGK 10% der HK, Reingewinnzuschlag 8% der SK.'],
          reveal: [{label:'Einzelmaterial',val:'400.00'},{label:'Material-GK (12.5%)',val:'50.00'},{label:'Materialkosten',val:'450.00'},{label:'Einzellöhne (4×75)',val:'300.00'},{label:'Fertigungs-GK 1 (50%)',val:'150.00'},{label:'Fertigungs-GK 2 (1×100)',val:'100.00'},{label:'Fertigungskosten',val:'550.00'},{label:'Herstellkosten',val:'1000.00'},{label:'VVGK (10%)',val:'100.00'},{label:'Selbstkosten',val:'1100.00'},{label:'Reingewinnzuschlag (8%)',val:'88.00'},{label:'Nettoerlös',val:'1188.00'}],
          calcs: [
            {label:'Einzelmaterial',answer:400},
            {label:'Material-Gemeinkosten (12.5%)',answer:50},
            {label:'Materialkosten',answer:450},
            {label:'Einzellöhne (4×75)',answer:300},
            {label:'Fertigungs-GK 1 (50% auf EL)',answer:150},
            {label:'Fertigungs-GK 2 (1×100)',answer:100},
            {label:'Fertigungskosten',answer:550},
            {label:'Herstellkosten',answer:1000},
            {label:'VVGK (10% der HK)',answer:100},
            {label:'Selbstkosten',answer:1100},
            {label:'Reingewinnzuschlag (8%)',answer:88},
            {label:'Nettoerlös',answer:1188}
          ]
        },
        {
          id: 83, type: 'calc',
          q: 'Kalkulation Surfbretter (Surf AG). EM CHF 1\'300, EL 32.5 Std. à CHF 60, Mat-GK 20%, Fert-GK CHF 78/Std., VVGK 20% der HK, Reingewinn 10% der SK, MWST 8.0%, Rabatt 5%, Skonto 2%.',
          tips: ['Einzelmaterial CHF 1\'300, Einzellöhne 32.5 Std. × CHF 60 = CHF 1\'950.','Material-GK 20%, Fertigungs-GK CHF 78/EL-Stunde, VVGK 20% der HK, Reingewinn 10% der SK.','MWST 8.0%, Rabatt 5%, Skonto 2%.'],
          reveal: [{label:'Einzelmaterial',val:'1300'},{label:'Material-GK (20%)',val:'260'},{label:'Materialkosten',val:'1560'},{label:'Einzellöhne (32.5×60)',val:'1950'},{label:'Fertigungs-GK (32.5×78)',val:'2535'},{label:'Fertigungskosten',val:'4485'},{label:'Herstellkosten',val:'6045'},{label:'VVGK (20%)',val:'1209'},{label:'Selbstkosten',val:'7254'},{label:'Reingewinn (10%)',val:'725'},{label:'Nettoerlös',val:'7979'},{label:'Bruttokreditverkaufspreis inkl. MWST',val:'9254'}],
          calcs: [
            {label:'Einzelmaterial',answer:1300},
            {label:'Material-GK (20%)',answer:260},
            {label:'Materialkosten',answer:1560},
            {label:'Einzellöhne (32.5×60)',answer:1950},
            {label:'Fertigungs-GK (32.5×78)',answer:2535},
            {label:'Fertigungskosten',answer:4485},
            {label:'Herstellkosten',answer:6045},
            {label:'VVGK (20%)',answer:1209},
            {label:'Selbstkosten',answer:7254},
            {label:'Reingewinn (10%)',answer:725},
            {label:'Nettoerlös',answer:7979},
            {label:'Bruttokreditverkaufspreis inkl. MWST (gerundet)',answer:9254}
          ]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Kalkulationsgrössen für Handels- und Produktionsbetriebe kennen',
            'Einkaufs- und Verkaufskalkulationen durchführen',
            'Das Kalkulationsschema eines Produktionsbetriebs anwenden',
            'Zuschlagssätze berechnen (Gemeinkostenzuschlag, Reingewinnzuschlag)'
          ]},
          { type: 'concept', title: 'Kalkulationsschema Handel', content: 'Im Handel: Bruttokreditankauf − Rabatt = Nettokreditankauf − Skonto = Nettobarankauf + Bezugskosten = Einstand (Warenaufwand). Einstand + Bruttogewinn = Nettoerlös. Bruttogewinnzuschlag basiert auf dem Einstandswert, Handelsmarge basiert auf dem Nettoerlös.', highlight: 'Handelsmarge und Bruttogewinnzuschlag: In Franken gleich, in Prozenten ist die Marge kleiner.' },
          { type: 'concept', title: 'Kalkulationsschema Produktion', content: 'Im Produktionsbetrieb: Einzelmaterial + Material-GK = Materialkosten. Einzellöhne + Fertigungs-GK = Fertigungskosten. Materialkosten + Fertigungskosten = Herstellkosten. Herstellkosten + VVGK = Selbstkosten. Selbstkosten + Reingewinn = Nettoerlös.', highlight: 'Herstellkosten = Material + Fertigung. Selbstkosten = HK + VVGK.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Einstandswert (Einstand)', def: 'Gesamtkosten der Beschaffung: Einkaufspreis − Rabatt − Skonto + Bezugskosten.' },
            { term: 'Bruttogewinn', def: 'Nettoerlös − Warenaufwand (Einstand).' },
            { term: 'Bruttogewinnzuschlag', def: 'Bruttogewinn in % des Einstandswerts (vom Kleineren zum Grösseren).' },
            { term: 'Handelsmarge', def: 'Bruttogewinn in % des Nettoerlöses (vom Grösseren zum Kleineren).' },
            { term: 'Herstellkosten', def: 'Materialkosten + Fertigungskosten.' },
            { term: 'Selbstkosten', def: 'Herstellkosten + Verwaltungs- und Vertriebsgemeinkosten (VVGK).' },
            { term: 'Reingewinn', def: 'Nettoerlös − Selbstkosten.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Der Gemeinkostenzuschlag erfolgt auf dem Warenaufwand (Einstand), der Reingewinnzuschlag auf den Selbstkosten. Nettoerlös − Selbstkosten = Reingewinn. Nettoerlös − Warenaufwand = Bruttogewinn.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 13: Entscheidungen auf Teilkostenbasis und Break-even-Analyse
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch13',
      num: 'Kapitel 13',
      title: 'Entscheidungen auf Teilkostenbasis und Break-even-Analyse',
      exercises: [
        {
          id: 84, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zur Preisfindung',
          tips: ['Der Deckungsbeitrag kann sich auf mehrere Perioden beziehen.','Kostendeckung ist EIN Kriterium bei der Preisfestsetzung.','Preissenkung führt in der Regel zu höherer Nachfragemenge.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Richtig'},{label:'3',val:'Richtig'},{label:'4',val:'Falsch – bei Zusatzaufträgen kann auch unter Selbstkosten akzeptiert werden'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – auch Mengenänderungen beeinflussen den Umsatz'},{label:'7',val:'Falsch – höherer Preis kann zu tieferem Umsatz führen'},{label:'8',val:'Richtig'}],
          statements: [
            {s:'Der Deckungsbeitrag kann nicht nur auf eine Periode bezogen sein.', c: true},
            {s:'Kostendeckung ist eines der Kriterien bei der Preisfestsetzung.', c: true},
            {s:'Als langfristige Preisuntergrenze gelten die vollen Selbstkosten.', c: true},
            {s:'Bei der Preisfestsetzung von Zusatzaufträgen müssen stets die vollen Selbstkosten gedeckt sein.', c: false,reason:'Bei Zusatzaufträgen genügt es kurzfristig, wenn die variablen Kosten gedeckt sind (Preisuntergrenze).'},
            {s:'Mithilfe der Betriebsrechnung kann eine absolute Preisobergrenze bestimmt werden.', c: true},
            {s:'Nur durch eine Preisänderung kann der Umsatz (Erlös) beeinflusst werden.', c: false,reason:'Auch Mengenänderungen beeinflussen den Umsatz.'},
            {s:'Eine Preiserhöhung führt immer auch zu höherem Umsatz.', c: false,reason:'Höherer Preis kann zu tieferer Menge und somit zu tieferem Umsatz führen.'},
            {s:'Eine Preissenkung bewirkt in der Regel eine höhere Nachfragemenge.', c: true}
          ]
        },
        {
          id: 85, type: 'fill',
          q: 'Lückentext: Prinzip der Nutzschwelle',
          template: 'A) Die {0} bezeichnet jene Mengen- oder Umsatzgrösse, bei der das Unternehmen weder Gewinn noch Verlust erwirtschaftet. Der englische Begriff lautet {1}. Die Differenz zwischen Nettoerlös und variablen Kosten nennt man {2}. Im Handelsbetrieb entspricht diese Grösse dem Bruttogewinn.\n\nB) {3} sind alle Kosten, die unabhängig der Produktionsmenge resp. des Verkaufsumsatzes gleich gross bleiben. {4} steigen bzw. fallen, wenn die Produktionsmenge bzw. der Verkaufsumsatz steigt / sinkt.\n\nC) Die fixen Kosten entsprechen im Handelsbetrieb meist den {5}, da diese in den meisten Fällen eher fix sind.\n\nD) Entspricht der Deckungsbeitrag total den {6} Kosten, dann ist die Nutzschwelle erreicht. Ebenfalls wird die Nutzschwelle erreicht, wenn der {7} den Selbstkosten (Kostentotal) entspricht.',
          blanks: [['Nutzschwelle','Break-even','Break-even-Point'],['Break-even-Point','Break-even','Nutzschwelle'],['Deckungsbeitrag'],['Fixkosten','fixe Kosten','Fixe Kosten'],['Variable Kosten','variable Kosten'],['Gemeinkosten'],['fixen','fixe','Fixkosten'],['Nettoerlös','Umsatz','Nettoumsatz']],
          tips: ['Die Nutzschwelle = Break-even-Point.','Fixkosten sind unabhängig von der Produktionsmenge.','Deckungsbeitrag = Nettoerlös − variable Kosten.'],
          reveal: [{label:'1',val:'Nutzschwelle'},{label:'2',val:'Break-even-Point'},{label:'3',val:'Deckungsbeitrag'},{label:'4',val:'Fixkosten'},{label:'5',val:'Variable Kosten'},{label:'6',val:'Gemeinkosten'},{label:'7',val:'fixen'},{label:'8',val:'Nettoerlös'}]
        },
        {
          id: 86, type: 'tf',
          q: 'Richtig oder falsch? Break-even-Analyse',
          tips: ['Wenn DB < Fixkosten → Verlust.','Im Warenhandel: Einstand = variable Kosten.','Proportionale Kosten verändern sich im gleichen Verhältnis wie die Verkaufshöhe.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – Gemeinkosten sind meist fixe Kosten'},{label:'3',val:'Richtig'},{label:'4',val:'Richtig'},{label:'5',val:'Falsch – DB = Nettoerlös − variable Kosten (nicht Selbstkosten)'},{label:'6',val:'Richtig'}],
          statements: [
            {s:'Wenn die Summe der Deckungsbeiträge kleiner ist als die Höhe der Fixkosten, dann verbleibt ein Verlust.', c: true},
            {s:'Die Gemeinkosten sind in der Regel variable Kosten.', c: false,reason:'Gemeinkosten sind meist fixe Kosten.'},
            {s:'Im Warenhandel zählt der Einstand zu den variable Kosten.', c: true},
            {s:'Proportionale Kosten sind variable Kosten, die sich mit der Verkaufshöhe im gleichen Verhältnis verändern.', c: true},
            {s:'Im Warenhandel entspricht der Deckungsbeitrag der Differenz zwischen Nettoerlös und Selbstkosten.', c: false,reason:'DB = Nettoerlös − variable Kosten (nicht Selbstkosten).'},
            {s:'Der Deckungsbeitrag ist die Differenz von Nettoerlös und variablen Kosten.', c: true}
          ]
        },
        {
          id: 87, type: 'tf',
          q: 'Richtig oder falsch? Nutzschwellenanalyse',
          tips: ['An der Nutzschwelle: Nettoerlös = Deckungsbeitrag ist falsch (NE = Selbstkosten).','DB pro Stück × mengenmässige NS = wertmässige NS ist falsch (NS wertmässig = NS Menge × Preis).','Bei gestiegenen Fixkosten und gleichem NE steigt die Nutzschwelle.'],
          reveal: [{label:'1',val:'Falsch – An der NS gilt: NE = Selbstkosten, bzw. DB = FK'},{label:'2',val:'Richtig'},{label:'3',val:'Falsch – Wertmässige NS = mengenmässige NS × NE pro Stück'},{label:'4',val:'Falsch – DB = NE − variable Kosten'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – nur zufällig so; an der NS gilt: DB = FK'},{label:'7',val:'Richtig'},{label:'8',val:'Falsch – mengenmässige NS steigt, da DB/Stück kleiner'}],
          statements: [
            {s:'An der Nutzschwelle gilt: Nettoerlös = Deckungsbeitrag.', c: false,reason:'An der NS gilt: Nettoerlös = Selbstkosten, bzw. DB = Fixkosten.'},
            {s:'Der Erfolg ergibt sich aus der Differenz von Deckungsbeitrag und fixen Kosten.', c: true},
            {s:'Die wertmässige Nutzschwelle ergibt sich aus dem Deckungsbeitrag pro Stück mal der mengenmässigen Nutzschwelle.', c: false,reason:'Wertmässige NS = mengenmässige NS × Nettoerlös pro Stück.'},
            {s:'Der Deckungsbeitrag entspricht der Differenz zwischen Nettoerlös und Selbstkosten.', c: false,reason:'DB = Nettoerlös − variable Kosten.'},
            {s:'Soll ein bestimmter Gewinn mindestens erzielt werden, so erhöht sich der Deckungsbedarf in der Nutzschwellenanalyse.', c: true},
            {s:'An der Nutzschwelle sind die variablen Kosten immer genau so hoch wie die fixen Kosten.', c: false,reason:'Das ist nur zufällig so – an der NS gilt: DB = Fixkosten.'},
            {s:'Bei gestiegenen Fixkosten (variable Kosten und Nettoerlös bleiben gleich) wird auch die Nutzschwelle höher.', c: true},
            {s:'Bei geringerem Nettoerlös pro Stück (Kosten bleiben gleich) sinkt die Nutzschwelle.', c: false,reason:'Die mengenmässige NS steigt, da der DB pro Stück kleiner wird.'}
          ]
        },
        {
          id: 88, type: 'text',
          q: 'Nutzschwellendiagramm erläutern',
          tips: ['Im Nutzschwellendiagramm: Fixkosten = horizontale Linie.','Gesamtkosten = Fixkosten + variable Kosten (Gerade ab FK-Niveau).','Nutzschwelle = Schnittpunkt von Nettoerlös- und Gesamtkostenkurve.'],
          reveal: [{label:'A',val:'Punkt S: Gewinnzone – Nettoerlös > Gesamtkosten.'},{label:'B',val:'Punkt T: Verlustzone – Gesamtkosten > Nettoerlös.'},{label:'C',val:'1) Kosten/Erlös, 2) Absatz, 3) Nettoerlös, 4) Gesamtkosten, 5) Variable Kosten, 6) Fixkosten, 7) Nutzschwelle'}],
          questions: [
            {id:'A',q:'Was zeigt Punkt S im Diagramm (oberhalb der Nutzschwelle)?',keywords:['Gewinn','Nettoerlös','grösser','Kosten','positiv']},
            {id:'B',q:'Was zeigt Punkt T im Diagramm (unterhalb der Nutzschwelle)?',keywords:['Verlust','Kosten','grösser','Nettoerlös','negativ']},
            {id:'C',q:'Welche 7 Bezeichnungen gehören ins Nutzschwellendiagramm?',keywords:['Fixkosten','variable','Gesamtkosten','Nettoerlös','Nutzschwelle','Gewinn','Verlust']}
          ]
        },
        {
          id: 89, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Baumarkt). X-100 (VP 300, var.K 225, Beratung 15 Min.) vs. Z-300 (VP 450, var.K 315, Beratung 30 Min.). Berechnen Sie DB je Stück, DB je Minute und DB-Marge.',
          tips: ['DB pro Stück = Verkaufspreis − variable Kosten.','DB pro Minute = DB pro Stück / Zeitbedarf pro Stück.','Bei freier Kapazität: Produkt mit höherem DB/Stück bevorzugen. Bei Engpass: DB/Zeiteinheit massgebend.'],
          reveal: [{label:'DB je Stück X-100',val:'75'},{label:'DB je Stück Z-300',val:'135'},{label:'DB je Min. X-100',val:'5'},{label:'DB je Min. Z-300',val:'4.5'},{label:'DB-Marge X-100',val:'25%'},{label:'DB-Marge Z-300',val:'30%'}],
          calcs: [
            {label:'DB je Stück X-100',answer:75},
            {label:'DB je Stück Z-300',answer:135},
            {label:'DB je Min. X-100',answer:5},
            {label:'DB je Min. Z-300',answer:4.5},
            {label:'DB-Marge X-100 (%)',answer:25},
            {label:'DB-Marge Z-300 (%)',answer:30}
          ]
        },
        {
          id: 90, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Bierausschank). Zapfbier (VP 4.00, var.K 2.00, 2 Min.), Flaschenbier (VP 4.50, var.K 3.50, 0.5 Min.). Berechnen Sie DB je Stück und DB je Minute.',
          tips: ['DB/Stück = Preis − variable Kosten.','DB/Minute bei Engpass entscheidend.','Zapfbier: DB 2.00/Stück, 1.00/Min. Flaschenbier: DB 1.00/Stück, 2.00/Min.'],
          reveal: [{label:'DB je Stück Zapfbier',val:'2.00'},{label:'DB je Stück Flaschenbier',val:'1.00'},{label:'DB je Min. Zapfbier',val:'1.00'},{label:'DB je Min. Flaschenbier',val:'2.00'}],
          calcs: [
            {label:'DB je Stück Zapfbier',answer:2},
            {label:'DB je Stück Flaschenbier',answer:1},
            {label:'DB je Min. Zapfbier',answer:1},
            {label:'DB je Min. Flaschenbier',answer:2}
          ]
        },
        {
          id: 91, type: 'calc',
          q: 'Entscheidungen auf Teilkostenbasis (Grillstand). Bratwurst (VP 7, var.K 3, 5 Min., max 20 Stück), Kotelett (VP 15, var.K 9, 8 Min., max 10 Stück). Berechnen Sie DB/Stück, Kapazität/Stunde und DB/Stunde.',
          tips: ['Bratwurst: VP 7, var.K 3, Grillzeit 5 Min. → DB 4/Stück.','Kotelett: VP 15, var.K 9, Grillzeit 8 Min. → DB 6/Stück.','Bei Engpass: DB/Stunde entscheidend. Bratwurst: 48/Std., Kotelett: 45/Std.'],
          reveal: [{label:'DB je Stück Bratwurst',val:'4'},{label:'DB je Stück Kotelett',val:'6'},{label:'Kapazität/Stunde Bratwurst',val:'12'},{label:'Kapazität/Stunde Kotelett',val:'7.5'},{label:'DB/Stunde Bratwurst',val:'48'},{label:'DB/Stunde Kotelett',val:'45'}],
          calcs: [
            {label:'DB je Stück Bratwurst',answer:4},
            {label:'DB je Stück Kotelett',answer:6},
            {label:'Kapazität/Stunde Bratwurst',answer:12},
            {label:'Kapazität/Stunde Kotelett',answer:7.5},
            {label:'DB/Stunde Bratwurst',answer:48},
            {label:'DB/Stunde Kotelett',answer:45}
          ]
        },
        {
          id: 92, type: 'calc',
          q: 'Make or buy? (Transportleistungen). Eigener Fahrzeugbetrieb: Fixkosten CHF 36\'000/Jahr, variable Kosten CHF 0.50/km. Externe Logistik: CHF 0.90/km. Transportbedarf ca. 60\'000 km/Jahr.',
          tips: ['Variable Kosten eigen = CHF 0.50/km.','Fixkosten Fahrzeugbetrieb = CHF 36\'000/Jahr.','Vollkosten eigen = (36\'000 + 0.50 × 60\'000) / 60\'000 = CHF 1.10/km.'],
          reveal: [{label:'Variable Kosten pro km (eigen)',val:'0.50'},{label:'Vollkosten pro km bei 60\'000 km',val:'1.10'},{label:'Kosten pro km Fremdbezug',val:'0.90'},{label:'Kritische Transportleistung',val:'90000'}],
          calcs: [
            {label:'Variable Kosten pro km (eigen)',answer:0.50},
            {label:'Vollkosten pro km bei 60\'000 km (eigen)',answer:1.10},
            {label:'Kosten pro km Fremdbezug',answer:0.90},
            {label:'Kritische Transportleistung (km) bei der Make = Buy',answer:90000}
          ]
        },
        {
          id: 93, type: 'calc',
          q: 'Nutzschwelle eines Handelsbetriebs. Nettoerlös pro Stück CHF 16.−, Einstand pro Stück CHF 6.−, Gemeinkosten (alle fix) CHF 300\'000.−.',
          tips: ['Nettoerlös pro Stück CHF 16, Einstand CHF 6, Gemeinkosten (fix) CHF 300\'000.','DB pro Stück = 16 − 6 = 10.','Mengenmässige NS = FK / DB pro Stück = 300\'000 / 10 = 30\'000 Stück.'],
          reveal: [{label:'DB pro Stück',val:'10'},{label:'Mengenmässige Nutzschwelle',val:'30000'},{label:'Wertmässige Nutzschwelle',val:'480000'}],
          calcs: [
            {label:'DB pro Stück (CHF)',answer:10},
            {label:'Mengenmässige Nutzschwelle (Stück)',answer:30000},
            {label:'Wertmässige Nutzschwelle (CHF)',answer:480000}
          ]
        },
        {
          id: 94, type: 'calc',
          q: 'Verschiedene Berechnungen zu einem Ein-Produkt-Betrieb. Nettoumsatz 576\'000, variable Kosten 480\'000, fixe Kosten 87\'000, verkaufte Erzeugnisse 32\'000 Stück.',
          tips: ['Nettoumsatz 576\'000, variable Kosten 480\'000, fixe Kosten 87\'000, 32\'000 Stück.','Variable Kosten je Stück = 480\'000 / 32\'000 = 15.','DB je Stück = 18 − 15 = 3.'],
          reveal: [{label:'Variable Kosten je Stück',val:'15'},{label:'Nettoerlös je Stück',val:'18'},{label:'Deckungsbeitrag je Stück',val:'3'},{label:'Deckungsbeitrag total',val:'96000'},{label:'Mengenmässige Nutzschwelle',val:'29000'},{label:'Wertmässige Nutzschwelle',val:'522000'},{label:'Betriebserfolg',val:'9000'}],
          calcs: [
            {label:'Variable Kosten je Stück',answer:15},
            {label:'Nettoerlös je Stück',answer:18},
            {label:'Deckungsbeitrag je Stück',answer:3},
            {label:'Deckungsbeitrag total',answer:96000},
            {label:'Mengenmässige Nutzschwelle (Stück)',answer:29000},
            {label:'Wertmässige Nutzschwelle (CHF)',answer:522000},
            {label:'Betriebserfolg (CHF)',answer:9000}
          ]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die Nutzschwelle (Break-even-Point) mengen- und wertmässig berechnen',
            'Entscheidungen auf Teilkostenbasis treffen (Deckungsbeitrag pro Stück und pro Engpasseinheit)',
            'Preisuntergrenzen für reguläre und Zusatzaufträge kennen',
            'Make-or-Buy-Entscheidungen auf Basis des Deckungsbeitrags treffen'
          ]},
          { type: 'concept', title: 'Nutzschwelle (Break-even)', content: 'Die Nutzschwelle bezeichnet jene Mengen- oder Umsatzgrösse, bei der das Unternehmen weder Gewinn noch Verlust erwirtschaftet. An der Nutzschwelle gilt: Deckungsbeitrag total = Fixkosten, bzw. Nettoerlös = Selbstkosten. Mengenmässige NS = Fixkosten / DB pro Stück. Wertmässige NS = mengenmässige NS × Nettoerlös pro Stück.', highlight: 'Nutzschwelle: DB total = Fixkosten. Gewinn = DB − Fixkosten.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Nutzschwelle (Break-even-Point)', def: 'Punkt, an dem weder Gewinn noch Verlust entsteht. DB = Fixkosten.' },
            { term: 'Deckungsbeitrag (DB)', def: 'Nettoerlös − variable Kosten. Beitrag zur Deckung der Fixkosten.' },
            { term: 'Langfristige Preisuntergrenze', def: 'Volle Selbstkosten müssen gedeckt sein.' },
            { term: 'Kurzfristige Preisuntergrenze', def: 'Variable Kosten müssen gedeckt sein (bei Zusatzaufträgen).' },
            { term: 'DB pro Engpasseinheit', def: 'Bei Engpass: DB / Zeiteinheit entscheidend, nicht DB / Stück.' },
            { term: 'Make or Buy', def: 'Eigenfertigung vs. Fremdbezug. Vergleich der Gesamtkosten bei kritischer Menge.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'DB ist NICHT Nettoerlös − Selbstkosten, sondern Nettoerlös − variable Kosten! An der Nutzschwelle gilt NICHT Nettoerlös = DB, sondern Nettoerlös = Selbstkosten bzw. DB = Fixkosten. Bei Engpass ist nicht der DB pro Stück entscheidend, sondern der DB pro Engpasseinheit (z.B. pro Minute, pro Maschinenstunde).' },
          { type: 'summary', title: 'Zusammenfassung', items: [
            'Fixkosten im Handel = Gemeinkosten (meist fix)',
            'Variable Kosten im Handel = Einstand (Warenaufwand)',
            'Mengenmässige NS = Fixkosten / DB pro Stück',
            'Wertmässige NS = mengenmässige NS × Preis pro Stück',
            'Bei Gewinnziel: (Fixkosten + Gewinnziel) / DB pro Stück'
          ]}
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 14: Finanzielle Kennzahlen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14',
      num: 'Kapitel 14',
      title: 'Finanzielle Kennzahlen',
      exercises: [
        {
          id: 95, type: 'fill',
          q: 'Lückentext: Bilanz- und Erfolgsanalyse',
          template: 'A) Bei der zweckmässigen Gliederung einer Abschlussrechnung spricht man von einer {0} Bereinigung. Dazu gehört auch, dass die {1} von den entsprechenden Anlagekonten bzw. Forderungen aus Lieferungen und Leistungen (Debitoren) subtrahiert werden.\n\nB) Bei der materiellen Bereinigung handelt es sich um Korrekturen der {2}.\n\nC) Die Zahlungsbereitschaft wird mit den sogenannten {3} ermittelt.\n\nD) Beim Eigenfinanzierungsgrad wird das {4} ins Verhältnis zum {5} gesetzt.\n\nE) Die Sicherheit eines Unternehmens ermitteln wir mit der Kennzahl {6} oder {7}.',
          blanks: [['formellen','formelle'],['stillen Reserven','stille Reserven'],['stillen Reserven','stille Reserven'],['Liquiditätsgraden','Liquiditätsgrade','Liquidität'],['Eigenkapital'],['Gesamtkapital','Bilanzsumme'],['Anlagedeckungsgrad'],['Verschuldungsfaktor','Effektivverschuldung']],
          tips: ['Zweckmässige Gliederung = formelle Bereinigung.','Materielle Bereinigung = stille Reserven auflösen.','Eigenfinanzierungsgrad = EK / Gesamtkapital.'],
          reveal: [{label:'1',val:'formellen'},{label:'2',val:'stillen Reserven'},{label:'3',val:'stillen Reserven'},{label:'4',val:'Liquiditätsgraden'},{label:'5',val:'Eigenkapital'},{label:'6',val:'Gesamtkapital'},{label:'7',val:'Anlagedeckungsgrad'},{label:'8',val:'Verschuldungsfaktor'}]
        },
        {
          id: 96, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zu Kennzahlen',
          tips: ['Fremdfinanzierungsgrad kann über 100% sein (wenn neg. EK).','Postüberweisung verbessert nicht den Liquiditätsgrad 2 (Aktivtausch).','Goldene Bilanzregel: Langfristiges Kapital ≥ Anlagevermögen.'],
          reveal: [{label:'1',val:'Falsch – Bei negativem EK (Überschuldung) ist FFG >100%'},{label:'2',val:'Falsch – Aktivtausch, kein Einfluss auf Liquiditätsgrad 2'},{label:'3',val:'Falsch – Goldene Bilanzregel: Langfristiges Kapital ≥ AV'},{label:'4',val:'Richtig'},{label:'5',val:'Falsch – 3% ist sehr tief'},{label:'6',val:'Falsch – Buchwert/Aktie = EK / Anzahl Aktien'}],
          statements: [
            {s:'Ein Fremdfinanzierungsgrad von über 100% ist in der Praxis nicht möglich.', c: false,reason:'Bei negativem Eigenkapital (Überschuldung) ist der Fremdfinanzierungsgrad >100%.'},
            {s:'Eine Postüberweisung von Kunden verbessert den Liquiditätsgrad 2.', c: false,reason:'Aktivtausch (Post↑, Debitoren↓) – kein Einfluss auf Liquiditätsgrad 2.'},
            {s:'Die goldene Bilanzregel besagt, dass das Eigenkapital ca. 50% der Passiven betragen soll.', c: false,reason:'Die goldene Bilanzregel besagt: Langfristiges Kapital ≥ Anlagevermögen.'},
            {s:'Die Umwandlung eines kurzfristigen Darlehens in ein langfristiges erhöht den Anlagedeckungsgrad 2.', c: true},
            {s:'Eine Eigenkapitalrendite von 3% darf grundsätzlich als gut bezeichnet werden.', c: false,reason:'3% ist sehr tief; eine gute EK-Rendite liegt deutlich höher (mind. 8-10%).'},
            {s:'Mit dem Selbstfinanzierungsgrad kann man den Bilanzwert einer Aktie annähernd bestimmen.', c: false,reason:'Der Buchwert pro Aktie ergibt sich aus EK / Anzahl Aktien, nicht aus dem Selbstfinanzierungsgrad.'}
          ]
        },
        {
          id: 97, type: 'match',
          q: 'Zuordnung: Bilanz- und Erfolgsanalyse. Ordnen Sie den Punkten 1 bis 6 die passende Formel aus der Liste A bis L zu.',
          tips: ['Anlagedeckungsgrad 2 = (EK + langfristiges FK) × 100 / AV.','Liquiditätsgrad 2 = (Flüssige Mittel + kurzfristige Forderungen) × 100 / kurzfristiges FK.','Cashflow = Mittelzufluss aus Geschäftstätigkeit.'],
          reveal: [{label:'1. Anlagedeckungsgrad 2',val:'K'},{label:'2. Nutzschwelle (Menge)',val:'H'},{label:'3. Durchschn. Debitorenfrist',val:'A'},{label:'4. Liquiditätsgrad 2',val:'J'},{label:'5. Debitorenumschlag',val:'B'},{label:'6. Wirtschaftlichkeit',val:'L'}],
          pairs: [
            {l:'1. Anlagedeckungsgrad 2',r:'K'},
            {l:'2. Nutzschwelle (Menge)',r:'H'},
            {l:'3. Durchschn. Debitorenfrist',r:'A'},
            {l:'4. Liquiditätsgrad 2',r:'J'},
            {l:'5. Debitorenumschlag',r:'B'},
            {l:'6. Wirtschaftlichkeit',r:'L'}
          ],
          options: ['A','B','C','D','E','F','G','H','I','J','K','L']
        },
        {
          id: 98, type: 'text',
          q: 'Wie heisst der Fachausdruck? Setzen Sie den Fachausdruck für die folgenden Umschreibungen zur Bilanz- und Erfolgsanalyse.',
          tips: ['Stille Reserven → Aktiven werden unterbewertet.','Abschreibungssatz → Jahresertrag in Prozent einer Anlage.','Bereinigte Bilanz → effektive Werte.'],
          reveal: [{label:'Aktiven wurden unterbewertet',val:'Stille Reserven'},{label:'Jahresertrag in Prozent einer Anlage',val:'Abschreibungssatz'},{label:'Bilanz mit effektiven Werten',val:'Bereinigte Bilanz'},{label:'Abschreibungen + Reingewinn',val:'Cashflow'}],
          questions: [
            {id:'A',q:'Aktiven wurden unterbewertet.',keywords:['Stille Reserven','stille','Reserven']},
            {id:'B',q:'Jahresertrag in Prozent einer Anlage.',keywords:['Abschreibungssatz','Abschreibung']},
            {id:'C',q:'Bilanz, die die effektiven Werte zeigt.',keywords:['Bereinigte Bilanz','bereinigt']},
            {id:'D',q:'Grösse, die Abschreibungen und Reingewinn darstellt.',keywords:['Cashflow','Cash-flow','Cash Flow']}
          ]
        },
        {
          id: 99, type: 'text',
          q: 'Theoriefragen zu Kennzahlen',
          tips: ['Hoher Fremdfinanzierungsgrad = hohe Zinslast + Abhängigkeit von Gläubigern.','Liquiditätsgrad 2 = (FM + kurzfr. Forderungen) / kurzfr. FK × 100. Sollte mind. 100% betragen.','Dividendenausschüttung reduziert das EK und damit die Liquidität.'],
          reveal: [{label:'A',val:'1) Hohe Zinslast (hoher Zinsaufwand). 2) Abhängigkeit von Gläubigern, schlechte Bonität.'},{label:'B',val:'Misst die Fähigkeit, kurzfristige Verbindlichkeiten mit FM + kurzfr. Forderungen zu decken. Sollte mind. 100% betragen.'},{label:'C',val:'1) Forderungen schneller einziehen. 2) Kurzfristiges FK in langfristiges umwandeln. 3) Nicht benötigte Aktiven verkaufen.'},{label:'D',val:'Die Dividendenausschüttung reduziert die flüssigen Mittel und verschlechtert somit die Liquidität.'}],
          questions: [
            {id:'A',q:'Welche 2 wesentliche Nachteile hat ein zu hoher Fremdfinanzierungsgrad?',keywords:['Zinslast','Abhängigkeit','Gläubiger','Risiko','Verschuldung','Bonität']},
            {id:'B',q:'Was sagt der Liquiditätsgrad 2 aus und wie hoch sollte er sein?',keywords:['Zahlungsbereitschaft','100%','kurzfristig','Forderungen','flüssige Mittel']},
            {id:'C',q:'Wie kann ein tiefer Liquiditätsgrad 2 kurzfristig verbessert werden? Nennen Sie 2 Massnahmen.',keywords:['Forderungen','einziehen','kurzfristig','Darlehen','langfristig','Verkauf','Aktiven']},
            {id:'D',q:'Welchen Einfluss hat eine Dividendenausschüttung auf die Liquidität?',keywords:['sinkt','reduziert','Abfluss','negativ','Mittelabfluss','tiefere']}
          ]
        },
        {
          id: 100, type: 'tf',
          q: 'Richtig oder falsch? Aussagen zur Anlageintensität. Anlageintensität Jahr 1: 40%, Jahr 2: 30%.',
          tips: ['Anlageintensität 40% → 60% UV, 40% AV.','Im Jahr 2 sinkt die Anlageintensität auf 30% → 70% UV.','Gesunkene Anlageintensität: Mögliche Gründe sind Abschreibungen, Desinvestitionen.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – 60:40 = 3:2, Aussage ist tatsächlich korrekt'},{label:'3',val:'Falsch – Mit nur 40% Anlageintensität eher nicht anlageintensiv'},{label:'4',val:'Falsch – Investitionen allein bestimmen nicht die Anlageintensität'},{label:'5',val:'Richtig'}],
          statements: [
            {s:'Im Jahr 2 sind weniger Mittel im Anlagevermögen gebunden als im Jahr 1.', c: true},
            {s:'Im Jahr 1 entfallen auf 3 Franken, die im Umlaufvermögen gebunden sind, 2 Franken, die durch Investitionen gebunden sind.', c: false,reason:'40% AV und 60% UV → auf 3 Fr. UV kommen 2 Fr. AV, also richtig. ABER: die Aussage sagt 3:2, aber 60:40 = 3:2 → tatsächlich richtig.'},
            {s:'Wahrscheinlich handelt es sich um ein anlageintensives Unternehmen wie z.B. ein Elektrizitätswerk.', c: false,reason:'Mit nur 40% Anlageintensität ist es eher nicht anlageintensiv.'},
            {s:'Es sind sicher keine neuen Investitionen vorgenommen worden, sonst wäre ja die Anlageintensität gestiegen.', c: false,reason:'Investitionen allein bestimmen nicht die Anlageintensität – auch das UV kann sich verändert haben.'},
            {s:'Die gesunkene Anlageintensität könnte darauf zurückzuführen sein, dass keine neuen Investitionen mehr vorgenommen worden sind.', c: true}
          ]
        },
        {
          id: 101, type: 'calc',
          q: 'Bilanz- und Erfolgsanalyse der RedTrade AG. UV (FM 260, Ford. L+L 3100, Vorräte 3700), AV (Einrichtungen 2000, Fahrzeuge 600, Immobilien 5700). Passiven: Kurzfr. FK (Verb. L+L 2900, Dividenden 600), Langfr. FK (Hypotheken 3900, Darlehen 900, Rückstell. 460), EK (Aktienkapital 5000, Res./Gew.vortrag 1600).',
          tips: ['Anlageintensität = AV / Bilanzsumme × 100.','Eigenfinanzierungsgrad = EK / Gesamtkapital × 100.','Liquiditätsgrad 2 = (FM + Ford. L+L) / kurzfr. FK × 100.'],
          reveal: [{label:'Anlageintensität 20_2',val:'37.11%'},{label:'Verschuldungsgrad 20_2',val:'57.36%'},{label:'Eigenfinanzierungsgrad 20_2',val:'42.64%'},{label:'Liquiditätsgrad 2',val:'85.71%'},{label:'Liquiditätsgrad 3',val:'115.71%'},{label:'Net Working Capital',val:'1560'}],
          calcs: [
            {label:'Anlageintensität 20_2 (%)',answer:37.11},
            {label:'Verschuldungsgrad 20_2 (%)',answer:57.36},
            {label:'Eigenfinanzierungsgrad 20_2 (%)',answer:42.64},
            {label:'Liquiditätsgrad 2 (%)',answer:85.71},
            {label:'Liquiditätsgrad 3 (%)',answer:115.71},
            {label:'Net Working Capital (NUV)',answer:1560}
          ]
        },
        {
          id: 102, type: 'calc',
          q: 'Ermittlung der Eigenkapitalrentabilität. AV 1\'650\'000, EFG 60%, FKZ 9%, Intensität UV 45%, GK-Rentabilität 12%.',
          tips: ['EK-Rentabilität = Gewinn / EK × 100.','AV 1\'650\'000, EFG 60%, FKZ 9%, Intensität UV 45%.','Gesamtkapital = AV + UV. UV = AV × (Intensität UV / Intensität AV).'],
          reveal: [{label:'Umlaufvermögen',val:'1350000'},{label:'Gesamtkapital',val:'3000000'},{label:'Eigenkapital (60%)',val:'1800000'},{label:'Fremdkapital (40%)',val:'1200000'},{label:'FK-Zinsaufwand (9%)',val:'108000'},{label:'Rentabilität des GK',val:'12%'},{label:'Gewinn',val:'252000'},{label:'EK-Rentabilität',val:'14%'}],
          calcs: [
            {label:'Umlaufvermögen',answer:1350000},
            {label:'Gesamtkapital (Bilanzsumme)',answer:3000000},
            {label:'Eigenkapital (60%)',answer:1800000},
            {label:'Fremdkapital (40%)',answer:1200000},
            {label:'FK-Zinsaufwand (9%)',answer:108000},
            {label:'Rentabilität des GK (%)',answer:12},
            {label:'Gewinn (GK-Rent. × GK − FK-Zins)',answer:252000},
            {label:'Eigenkapitalrentabilität (%)',answer:14}
          ]
        },
        {
          id: 103, type: 'calc',
          q: 'Rechnerische Zusammenhänge im DuPont-Schema. X: Umsatz 5\'000\'000, Gewinn 500\'000, Kapital 5\'000\'000. Y: Umsatz 10\'000\'000, Gewinn 500\'000. Z: Umsatz 10\'000\'000, Kapital 1\'000\'000, KapRent 10%.',
          tips: ['DuPont: Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag.','Umsatzrentabilität = Gewinn / Umsatz × 100.','Kapitalumschlag = Umsatz / Kapitaleinsatz.'],
          reveal: [{label:'X: Umsatzrentabilität',val:'10%'},{label:'X: Kapitalumschlag',val:'1'},{label:'X: Kapitalrentabilität',val:'10%'},{label:'Y: Umsatzrentabilität',val:'5%'},{label:'Y: Kapitalumschlag',val:'2'},{label:'Y: Kapitalrentabilität',val:'10%'},{label:'Z: Umsatzrentabilität',val:'10%'},{label:'Z: Kapitalumschlag',val:'10'},{label:'Z: Kapitalrentabilität',val:'10%'}],
          calcs: [
            {label:'X: Umsatzrentabilität (%)',answer:10},
            {label:'X: Kapitalumschlag',answer:1},
            {label:'X: Kapitalrentabilität (%)',answer:10},
            {label:'Y: Umsatzrentabilität (%)',answer:5},
            {label:'Y: Kapitalumschlag',answer:2},
            {label:'Y: Kapitalrentabilität (%)',answer:10},
            {label:'Z: Umsatzrentabilität (%)',answer:10},
            {label:'Z: Kapitalumschlag',answer:10},
            {label:'Z: Kapitalrentabilität (%)',answer:10}
          ]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Die wichtigsten Kennzahlen der Bilanz- und Erfolgsanalyse berechnen',
            'Liquiditätsgrade, Eigenfinanzierungsgrad und Anlagedeckungsgrad interpretieren',
            'Das DuPont-Schema verstehen (Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag)',
            'Formelle und materielle Bereinigung der Bilanz durchführen'
          ]},
          { type: 'concept', title: 'Kennzahlengruppen', content: 'Finanzielle Kennzahlen lassen sich in vier Gruppen einteilen: Liquiditätskennzahlen (Zahlungsbereitschaft), Finanzierungskennzahlen (Kapitalstruktur), Rentabilitätskennzahlen (Ertragskraft) und Aktivitätskennzahlen (Umschlag). Die Kennzahlen werden aus der bereinigten Bilanz und ER berechnet.', highlight: 'Vier Gruppen: Liquidität, Finanzierung, Rentabilität, Aktivität.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Liquiditätsgrad 2 (Quick Ratio)', def: '(Flüssige Mittel + kurzfr. Forderungen) / kurzfr. FK × 100. Sollte mindestens 100% betragen.' },
            { term: 'Eigenfinanzierungsgrad', def: 'Eigenkapital / Gesamtkapital × 100.' },
            { term: 'Fremdfinanzierungsgrad', def: '100% − Eigenfinanzierungsgrad. Kann bei Überschuldung über 100% liegen.' },
            { term: 'Anlagedeckungsgrad 2', def: '(EK + langfr. FK) / AV × 100. Goldene Bilanzregel: ≥ 100%.' },
            { term: 'Eigenkapitalrentabilität', def: 'Gewinn / EK × 100.' },
            { term: 'DuPont-Schema', def: 'Kapitalrentabilität = Umsatzrentabilität × Kapitalumschlag.' },
            { term: 'Cashflow', def: 'Praxis: Gewinn + Abschreibungen. Zeigt die Innenfinanzierungskraft.' },
            { term: 'Verschuldungsfaktor', def: 'Effektivverschuldung / Cashflow. Zeigt, wie viele Jahre nötig, um Schulden zu tilgen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Die goldene Bilanzregel besagt NICHT, dass das EK ca. 50% der Passiven betragen soll, sondern dass langfristiges Kapital (EK + langfr. FK) mindestens so hoch sein muss wie das Anlagevermögen. Eine Postüberweisung von Kunden (Post↑, Debitoren↓) ist ein Aktivtausch und hat KEINEN Einfluss auf den Liquiditätsgrad 2.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 15: Investitionen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch15',
      num: 'Kapitel 15',
      title: 'Investitionen: Entscheidungen über Mittelbindungen',
      exercises: [
        {
          id: 104, type: 'calc',
          q: 'Beurteilung von 3 Anlagen bei 2 Beschäftigungsstufen. Bau-AG: 3 Anlagen zur Auswahl (AK: 360\'000/300\'000/250\'000, Nutzungsdauer 8 J., Restwerte 20\'000/15\'000/10\'000, Kapazität 15\'000, Kalk.Zinssatz 8%).',
          tips: ['Kalkulatorische Abschreibung = (Anschaffung − Restwert) / Nutzungsdauer.','Fixkosten = Abschreibung + Gehälter + Nebenkosten.','Gesamtkosten = Fixkosten + variable Kosten × Menge.'],
          reveal: [{label:'Kalk. Abschreibung Anlage 1',val:'42500'},{label:'Kalk. Abschreibung Anlage 2',val:'35625'},{label:'Kalk. Abschreibung Anlage 3',val:'30000'},{label:'Gesamtkosten Anlage 1 bei 15\'000',val:'367500'},{label:'Gesamtkosten Anlage 2 bei 15\'000',val:'350625'},{label:'Gesamtkosten Anlage 3 bei 15\'000',val:'345000'}],
          calcs: [
            {label:'Kalk. Abschreibung Anlage 1',answer:42500},
            {label:'Kalk. Abschreibung Anlage 2',answer:35625},
            {label:'Kalk. Abschreibung Anlage 3',answer:30000},
            {label:'Gesamtkosten Anlage 1 bei 15\'000 Einheiten',answer:367500},
            {label:'Gesamtkosten Anlage 2 bei 15\'000 Einheiten',answer:350625},
            {label:'Gesamtkosten Anlage 3 bei 15\'000 Einheiten',answer:345000}
          ]
        },
        {
          id: 105, type: 'calc',
          q: 'Beurteilung von 2 Investitionsalternativen. IndigoTrade AG: A: Auszahlung 80\'000, Einzahlungen J1-5: 26/24/22/18/15. B: Auszahlung 75\'000, Einzahlungen J1-3: 25/30/35. Kalk.Zinssatz 8%.',
          tips: ['Kapitalwert = Summe der abgezinsten Einzahlungen − Auszahlung.','Kalkulationszinssatz 8%.','Alternative A: 80\'000 Auszahlung, Einzahlungen 26+24+22+18+15.'],
          reveal: [{label:'Kapitalwert Alternative A',val:'15578'},{label:'Kapitalwert Alternative B',val:'5731'}],
          calcs: [
            {label:'Kapitalwert Alternative A (CHF)',answer:15578},
            {label:'Kapitalwert Alternative B (CHF)',answer:5731}
          ]
        },
        {
          id: 106, type: 'calc',
          q: 'Nutzschwellenberechnung: Beispiel Produktionsbetrieb. Fixkosten Produktionsanlage CHF 57\'000, EL CHF 1.25/Stk., EM CHF 0.85/Stk., Fertigungszeit 2 Min./Stk., übrige Fixkosten V.u.V. CHF 129\'000.',
          tips: ['Fixkosten = CHF 57\'000 (Produktionsanlage) + CHF 129\'000 (übrige FK V.u.V.) = CHF 186\'000.','Einzelkosten pro Stück = CHF 1.25 (EL) + CHF 0.85 (EM) = CHF 2.10.','Fertigungszeit 2 Min. = 30 Stück/Stunde, 2000 Std. = 60\'000 Stück.'],
          reveal: [{label:'Herstellkosten je Stück',val:'5.20'},{label:'Selbstkosten insgesamt',val:'312000'},{label:'Nutzschwelle in Stück',val:'50959'}],
          calcs: [
            {label:'Herstellkosten je Stück (bei 2\'000 Std.)',answer:5.20},
            {label:'Selbstkosten insgesamt (bei 2\'000 Std.)',answer:312000},
            {label:'Nutzschwelle in Stück (VP CHF 5.75)',answer:50959}
          ]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Statische und dynamische Investitionsrechnungsverfahren unterscheiden',
            'Die Kapitalwertmethode anwenden (Barwert der Einzahlungen − Auszahlung)',
            'Kostenvergleichsrechnung und Gewinnvergleichsrechnung durchführen',
            'Die Amortisationsdauer (Pay-back) berechnen'
          ]},
          { type: 'concept', title: 'Investitionsrechnungsverfahren', content: 'Investitionsrechnungsverfahren werden grob gegliedert in statische Methoden (ohne Berücksichtigung des Zeitfaktors) und dynamische Methoden (mit Berücksichtigung des Zeitwerts des Geldes). Bei den Daten unterscheidet man zwischen vergangenheitsorientierten, zukunftsorientierten und irreversiblen Daten (sunk costs).', highlight: 'Statisch: kein Zeitfaktor. Dynamisch: Zeitwert des Geldes berücksichtigt.' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Kostenvergleichsrechnung', def: 'Statisches Verfahren. Vergleicht die Gesamtkosten verschiedener Alternativen.' },
            { term: 'Gewinnvergleichsrechnung', def: 'Statisches Verfahren. Vergleicht den Gewinn verschiedener Alternativen.' },
            { term: 'Kapitalwertmethode', def: 'Dynamisches Verfahren. Kapitalwert = Summe der abgezinsten Einzahlungen − Auszahlung.' },
            { term: 'Pay-back-Methode (Amortisationsrechnung)', def: 'Berechnet die Dauer, bis die Investition sich amortisiert hat.' },
            { term: 'Barwert', def: 'Heutiger Wert einer zukünftigen Zahlung (abgezinst).' },
            { term: 'Kalkulationszinssatz', def: 'Zinssatz für die Abzinsung zukünftiger Zahlungen.' },
            { term: 'Sunk Costs', def: 'Bereits getätigte, irreversible Ausgaben. Dürfen Investitionsentscheid nicht beeinflussen.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Nutzen einer Investition sind nicht nur zusätzliche Einnahmen, sondern auch Kosteneinsparungen. Ein Restwert am Ende der Nutzungsdauer senkt die jährlichen Abschreibungskosten. Bei der Kapitalwertmethode gilt: Kapitalwert > 0 → Investition lohnt sich.' }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 16: Planung, Budgetierung, Controlling, Finanzen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch16',
      num: 'Kapitel 16',
      title: 'Planung, Budgetierung, Controlling, Finanzen',
      exercises: [
        {
          id: 107, type: 'fill',
          q: 'Lückentext: Planung und Budgetkreislauf',
          template: 'A) Planen, Entscheiden, Anordnen, Kontrollieren sind Phasen des {0}. Über den Zielsetzungsprozess sind die {1} und die {2} Planung miteinander verbunden.\n\nB) Es gibt verschiedene Kategorien von Unternehmenszielen. Produktziele und Marktziele zählen zu den {3}. Liquiditätsziele, {4} und Sicherheitsziele sind {5}.\n\nC) Das geeignete Instrument für die strategische {6} sind Businesspläne.\n\nD) Die {7} legen offen, ob die {8} erreichbar sind. Wenn nein, kommt es zur {9} der Einzelpläne, bis die definierten Zielwerte erreicht sind. Wenn ja, kommt es zur {10}.',
          blanks: [['Managementkreislaufs','Managementkreislauf','Führungskreislauf'],['strategische','strategischen'],['operative','operativen'],['Leistungszielen','Leistungsziele'],['Rentabilitätsziele','Rentabilitätszielen'],['Finanzzielen','Finanzziele'],['Planung'],['Budgets','Budget'],['Zielwerte'],['Überarbeitung','Anpassung','Revision'],['Verabschiedung','Genehmigung']],
          tips: ['Planen, Entscheiden, Anordnen, Kontrollieren = Managementkreislauf.','Strategische Planung → Businesspläne.','Budgets legen offen, ob Zielwerte erreichbar sind.'],
          reveal: [{label:'1',val:'Managementkreislaufs'},{label:'2',val:'strategische'},{label:'3',val:'operative'},{label:'4',val:'Leistungszielen'},{label:'5',val:'Rentabilitätsziele'},{label:'6',val:'Finanzzielen'},{label:'7',val:'Planung'},{label:'8',val:'Budgets'},{label:'9',val:'Zielwerte'},{label:'10',val:'Überarbeitung'},{label:'11',val:'Verabschiedung'}]
        },
        {
          id: 108, type: 'text',
          q: 'Theoriefragen zum Thema Planung und Budgetierung',
          tips: ['Businesspläne = strategisches Instrument.','Budgetierung: Bottom-up, Top-down oder Gegenstromverfahren.','Budgetsystem: Zeithorizont, Detaillierungsgrad, Erstellungsverfahren.'],
          reveal: [{label:'A',val:'Businesspläne (Geschäftspläne für neue Vorhaben oder Strategie-Updates).'},{label:'B',val:'Die strategische Analyse (Umfeld, Stärken/Schwächen). Instrumente: SWOT-Analyse, Mehrjahres-Finanzplan.'},{label:'C',val:'Z.B. Zeithorizont (jährlich, rollierend), Detaillierungsgrad (Grob-/Feinbudget), Erstellungsverfahren (Top-down, Bottom-up, Gegenstrom).'}],
          questions: [
            {id:'A',q:'Welches Instrument wird bevorzugtermassen für die strategische Entwicklung eingesetzt?',keywords:['Businessplan','Businesspläne','strategisch','Mehrjahresplan']},
            {id:'B',q:'Welches ist in der strategischen Planung der andere Aspekt neben der strategischen Entwicklung? Welche Instrumente werden dabei eingesetzt?',keywords:['Analyse','Mehrjahresplan','Budget','Kontrolle','Planung','Finanzplan']},
            {id:'C',q:'Welche Gestaltungsaspekte gibt es bei einem Budgetsystem? Nennen Sie mind. 1 Aspekt mit einer stichwortartigen Erläuterung.',keywords:['Zeithorizont','Detaillierungsgrad','Top-down','Bottom-up','Gegenstrom','rollierend','Erstellungsverfahren']}
          ]
        },
        {
          id: 109, type: 'calc',
          q: 'Kostenträgerabrechnung (Produktlinie OP, September). Prod. O: Ist-Menge 1\'500, Plan-Menge 1\'400, Plan-Preis 32.00, Ist-Umsatz 45\'750. Prod. P: Plan-Menge 15\'000, Plan-Preis 5.25, Ist-Preis 5.00, Plan var.K 2.80.',
          tips: ['Abweichung = Ist − Plan.','Positive Abweichung beim Umsatz = günstig, positive Abweichung bei Kosten = ungünstig.','Gesamt-DB = Umsatz − variable Gesamtkosten.'],
          reveal: [{label:'Ist-Absatzmenge Produkt O',val:'1500'},{label:'Ist-Preis Produkt O',val:'30.50'},{label:'Ist-Umsatz Produkt O',val:'45750'},{label:'Abweichung Umsatz Produkt P',val:'-600'},{label:'Ist var. Kosten Produkt P',val:'2.80'},{label:'Gesamt-DB Ist',val:'3700'}],
          calcs: [
            {label:'Ist-Absatzmenge Produkt O (Stk.)',answer:1500},
            {label:'Ist-Preis Produkt O (CHF/Stk.)',answer:30.50},
            {label:'Ist-Umsatz Produkt O (CHF)',answer:45750},
            {label:'Abweichung Umsatz Produkt P (CHF)',answer:-600},
            {label:'Ist var. Kosten Produkt P (CHF/Stk.)',answer:2.80},
            {label:'Gesamt-DB Ist (CHF)',answer:3700}
          ]
        },
        {
          id: 110, type: 'calc',
          q: 'Nutzschwellenberechnung mit Gewinnziel. Produkt C: Verkaufspreis CHF 40.−, Einstand CHF 20.−, Gemeinkosten (alle fix) CHF 160\'000.−.',
          tips: ['Nutzschwelle mengen = FK / DB pro Stück.','DB pro Stück = Verkaufspreis − Einstand = 40 − 20 = 20.','Für Gewinnziel: (FK + Gewinnziel) / DB pro Stück.'],
          reveal: [{label:'Nutzschwelle mengenmässig',val:'8000'},{label:'Nutzschwelle wertmässig',val:'320000'},{label:'Zusätzliche Stücke für Gewinn CHF 40\'000',val:'2000'},{label:'Mehr-Umsatz für zusätzliche Werbekosten CHF 10\'000',val:'20000'}],
          calcs: [
            {label:'Nutzschwelle mengenmässig (Stück)',answer:8000},
            {label:'Nutzschwelle wertmässig (CHF)',answer:320000},
            {label:'Zusätzliche Stücke für Gewinn CHF 40\'000',answer:2000},
            {label:'Mehr-Umsatz für zusätzliche Werbekosten CHF 10\'000 (CHF)',answer:20000}
          ]
        }
      ],
      learningData: {
        sections: [
          { type: 'intro', title: 'Lernziele', items: [
            'Den Managementkreislauf und Budgetkreislauf verstehen',
            'Strategische und operative Planung unterscheiden',
            'Budgets als Planungsinstrument einsetzen und interpretieren',
            'Soll-Ist-Vergleiche (Abweichungsanalysen) durchführen'
          ]},
          { type: 'concept', title: 'Planung und Budgetierung', content: 'Planen, Entscheiden, Anordnen und Kontrollieren sind die Phasen des Managementkreislaufs. Die strategische Planung arbeitet mit Businessplänen (Mehrjahrespläne), die operative Planung mit Budgets (Jahrespläne). Budgets legen offen, ob die definierten Zielwerte erreichbar sind. Wenn nicht, werden die Einzelpläne überarbeitet.', highlight: 'Strategisch = Businesspläne (langfristig). Operativ = Budgets (kurzfristig).' },
          { type: 'keyterms', title: 'Schlüsselbegriffe', terms: [
            { term: 'Managementkreislauf', def: 'Planen → Entscheiden → Anordnen → Kontrollieren.' },
            { term: 'Strategische Planung', def: 'Langfristige Planung mit Businessplänen. Umfasst strategische Entwicklung und Analyse.' },
            { term: 'Operative Planung', def: 'Kurzfristige Planung mit Budgets (Jahresplanung).' },
            { term: 'Leistungsziele', def: 'Produktziele und Marktziele eines Unternehmens.' },
            { term: 'Finanzziele', def: 'Liquiditätsziele, Rentabilitätsziele und Sicherheitsziele.' },
            { term: 'Soll-Ist-Vergleich', def: 'Vergleich der geplanten Werte (Budget) mit den tatsächlichen Werten.' },
            { term: 'Controlling', def: 'Steuerung und Kontrolle. Kein Controllingbericht sollte ausführlicher sein als nötig.' },
            { term: 'Gegenstromverfahren', def: 'Budgeterstellung durch Kombination von Top-down und Bottom-up.' }
          ]},
          { type: 'merke', title: 'Merke dir', content: 'Es gilt: Keine Planung ohne Kontrolle, und keine Kontrolle ohne Planung. Damit eine sinnvolle Kontrolle möglich ist, müssen Plan- und Ist-Rechnungen die gleiche Struktur haben. Ein guter Controllingbericht ist NICHT ausführlich und detailliert, sondern enthält nur so viele Daten, wie der Empfänger benötigt.' }
        ]
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // GLOSSAR
  // ═══════════════════════════════════════════════════════════════════════════
  glossary: [
    { term: 'Aktiven', def: 'Linke Bilanzseite. Zeigt das Vermögen des Unternehmens.' },
    { term: 'Passiven', def: 'Rechte Bilanzseite. Zeigt die Finanzierung (FK + EK).' },
    { term: 'Umlaufvermögen (UV)', def: 'Kurzfristige Vermögenswerte: Kasse, Bank, Forderungen, Vorräte.' },
    { term: 'Anlagevermögen (AV)', def: 'Langfristige Vermögenswerte: Immobilien, Maschinen, Fahrzeuge.' },
    { term: 'Fremdkapital (FK)', def: 'Schulden des Unternehmens: Verbindlichkeiten, Darlehen, Hypotheken.' },
    { term: 'Eigenkapital (EK)', def: 'Eigene Mittel: Aktienkapital, Reserven, Gewinnvortrag.' },
    { term: 'Bilanz', def: 'Gegenüberstellung von Vermögen und Kapital zu einem Stichtag.' },
    { term: 'Bilanzsumme', def: 'Total Aktiven = Total Passiven.' },
    { term: 'Erfolgsrechnung', def: 'Zeigt Aufwand und Ertrag einer Periode. Ergebnis = Gewinn/Verlust.' },
    { term: 'Finanzbuchhaltung', def: 'Externer Abschluss mit Bilanz und Erfolgsrechnung.' },
    { term: 'Betriebsbuchhaltung', def: 'Interner Abschluss, dient der Unternehmensführung.' },
    { term: 'Nebenbuchhaltungen', def: 'Hilfsbuchhaltungen: Debitoren, Kreditoren, Lohn.' },
    { term: 'Debitorenbuchhaltung', def: 'Erfasst offene Forderungen gegenüber Kunden.' },
    { term: 'Kreditorenbuchhaltung', def: 'Erfasst offene Verbindlichkeiten gegenüber Lieferanten.' },
    { term: 'Lohnbuchhaltung', def: 'Abrechnung von Löhnen und Sozialversicherungen.' },
    { term: 'Geldflussrechnung', def: 'Dritte Abschlussrechnung. Zeigt Liquiditätsveränderung.' },
    { term: 'Inventar', def: 'Detaillierte Bestandsaufnahme aller Vermögens- und Schuldenposten.' },
    { term: 'Liquidität', def: 'Fähigkeit, Zahlungsverpflichtungen fristgerecht zu erfüllen.' },
    { term: 'Flüssige Mittel', def: 'Kasse + Post + Bankguthaben.' },
    { term: 'Forderungen aus L+L', def: 'Offene Rechnungen an Kunden (Debitoren).' },
    { term: 'Verbindlichkeiten aus L+L', def: 'Offene Rechnungen von Lieferanten (Kreditoren).' },
    { term: 'Hypothek', def: 'Darlehen, besichert durch Grundpfand (Liegenschaft).' },
    { term: 'Goldene Bilanzregel', def: 'Langfristiges Kapital ≥ Anlagevermögen.' },
    { term: 'Nettoumlaufvermögen', def: 'UV − kurzfristiges FK. Sollte positiv sein.' },
    { term: 'Fertigfabrikate', def: 'Fertig produzierte Erzeugnisse, bereit zum Verkauf.' },
    { term: 'Halbfabrikate', def: 'Noch nicht fertiggestellte Zwischenprodukte.' },
    { term: 'Rückstellungen', def: 'Verbindlichkeiten mit unsicherem Betrag oder Zeitpunkt.' },
    { term: 'Wertschriften', def: 'Kurzfristige Finanzanlagen (Aktien, Obligationen).' },
    { term: 'Deckungsbeitrag', def: 'Verkaufspreis − variable Kosten.' },
    { term: 'Abschreibung', def: 'Wertminderung von Anlagevermögen über die Nutzungsdauer.' },
    { term: 'Kennzahlen', def: 'Rentabilität, Liquidität, Deckungsgrade, Umschlagsziffern.' },
    { term: 'Bilanzanalyse', def: 'Auswertung der Bilanz und Erfolgsrechnung mit Kennzahlen.' }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KONTENRAHMEN KMU (Reference Data)
  // ═══════════════════════════════════════════════════════════════════════════
  kontenrahmen: [
    { cls: 1, clsName: 'Aktiven', groups: [
      { grp: '10', name: 'Umlaufvermögen (UV)', accounts: [
        { nr: '1000', n: 'Kasse' }, { nr: '1010', n: 'Post' }, { nr: '1020', n: 'Bankguthaben' },
        { nr: '1060', n: 'Wertschriften' }, { nr: '1100', n: 'Forderungen aus L+L' }, { nr: '1109', n: 'WB FLL (Delkredere)' },
        { nr: '1170', n: 'Vorsteuer MWST' }, { nr: '1176', n: 'Verrechnungssteuer' },
        { nr: '1200', n: 'Handelswaren' }, { nr: '1210', n: 'Rohstoffe' }, { nr: '1300', n: 'ARA (Transitorische Aktiven)' }
      ]},
      { grp: '14', name: 'Anlagevermögen (AV)', accounts: [
        { nr: '1440', n: 'Wertschriften des AV' }, { nr: '1450', n: 'Darlehen (Aktivdarlehen)' }, { nr: '1480', n: 'Beteiligungen' },
        { nr: '1500', n: 'Maschinen und Apparate' }, { nr: '1510', n: 'Mobiliar und Einrichtungen' }, { nr: '1520', n: 'Büromaschinen, Informatik' },
        { nr: '1530', n: 'Fahrzeuge' }, { nr: '1600', n: 'Immobilien' }, { nr: '1700', n: 'Patente, Marken, Lizenzen' }
      ]}
    ]},
    { cls: 2, clsName: 'Passiven', groups: [
      { grp: '20', name: 'Kurzfristiges Fremdkapital', accounts: [
        { nr: '2000', n: 'Verbindlichkeiten aus L+L (Kreditoren)' }, { nr: '2100', n: 'Bankverbindlichkeiten' },
        { nr: '2200', n: 'Geschuldete MWST' }, { nr: '2300', n: 'PRA (Transitorische Passiven)' }, { nr: '2330', n: 'Kurzfristige Rückstellungen' }
      ]},
      { grp: '24', name: 'Langfristiges Fremdkapital', accounts: [
        { nr: '2400', n: 'Bankverbindlichkeiten (langfr.)' }, { nr: '2450', n: 'Darlehen (Passivdarlehen)' }, { nr: '2451', n: 'Hypotheken' },
        { nr: '2600', n: 'Rückstellungen (langfr.)' }
      ]},
      { grp: '28', name: 'Eigenkapital (EK)', accounts: [
        { nr: '2800', n: 'Eigenkapital / Aktienkapital' }, { nr: '2850', n: 'Privat' }, { nr: '2891', n: 'Jahresgewinn oder -verlust' },
        { nr: '2950', n: 'Gesetzliche Gewinnreserve' }, { nr: '2970', n: 'Gewinn- oder Verlustvortrag' }
      ]}
    ]},
    { cls: 3, clsName: 'Betrieblicher Ertrag', groups: [
      { grp: '3', name: 'Erträge', accounts: [
        { nr: '3000', n: 'Produktionserlöse' }, { nr: '3200', n: 'Handelserlöse (Warenertrag)' },
        { nr: '3400', n: 'Dienstleistungserlöse' }, { nr: '3800', n: 'Verluste Forderungen (Debitorenverluste)' }
      ]}
    ]},
    { cls: 4, clsName: 'Aufwand für Material, Handelswaren', groups: [
      { grp: '4', name: 'Materialaufwand', accounts: [
        { nr: '4000', n: 'Materialaufwand' }, { nr: '4200', n: 'Handelswarenaufwand (Warenaufwand)' }
      ]}
    ]},
    { cls: 5, clsName: 'Personalaufwand', groups: [
      { grp: '5', name: 'Personal', accounts: [
        { nr: '5000', n: 'Lohnaufwand' }, { nr: '5700', n: 'Sozialversicherungsaufwand' }
      ]}
    ]},
    { cls: 6, clsName: 'Übriger betrieblicher Aufwand', groups: [
      { grp: '6', name: 'Übriger Aufwand & Finanzen', accounts: [
        { nr: '6000', n: 'Raumaufwand (Mietaufwand)' }, { nr: '6100', n: 'Unterhalt, Reparaturen, Ersatz' },
        { nr: '6500', n: 'Verwaltungsaufwand' }, { nr: '6600', n: 'Werbeaufwand' },
        { nr: '6800', n: 'Abschreibungen' }, { nr: '6900', n: 'Finanzaufwand (Zinsaufwand)' }, { nr: '6950', n: 'Finanzertrag (Zinsertrag)' }
      ]}
    ]},
    { cls: 8, clsName: 'Betriebsfremd / Ausserordentlich', groups: [
      { grp: '8', name: 'Betriebsfremd und ausserordentlich', accounts: [
        { nr: '8000', n: 'Betriebsfremder Aufwand' }, { nr: '8100', n: 'Betriebsfremder Ertrag' },
        { nr: '8500', n: 'Ausserordentlicher Aufwand' }, { nr: '8900', n: 'Direkte Steuern' }
      ]}
    ]},
    { cls: 9, clsName: 'Abschluss', groups: [
      { grp: '9', name: 'Abschluss', accounts: [
        { nr: '9200', n: 'Jahresgewinn oder -verlust' }
      ]}
    ]}
  ]
};
