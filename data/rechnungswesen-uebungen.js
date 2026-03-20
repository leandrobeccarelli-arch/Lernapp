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
          instruction: 'Ergänzen Sie die fehlenden Begriffe.',
          sections: [
            { label: 'A)', template: 'Das Rechnungswesen kann in ___ Hauptbereiche gegliedert werden, nämlich das ___ Rechnungswesen (externer Abschluss mit Bilanz, ___ und evtl. weiteren Elementen) und das ___ Rechnungswesen (interner Abschluss mit der Erfassung der ___).', blanks: ['zwei', 'finanzielle', 'Erfolgsrechnung', 'betriebliche', 'Kosten'] },
            { label: 'B)', template: 'Die Hauptbereiche werden durch verschiedene ___ unterstützt. Dazu gehören beispielsweise die ___, die ___ und die ___.', blanks: ['Nebenbuchhaltungen', 'Lohnbuchhaltung', 'Debitorenbuchhaltung', 'Kreditorenbuchhaltung'] },
            { label: 'C)', template: 'Das Rechnungswesen erfüllt im Unternehmen eine ___ für die Planung, ___, Kontrolle und ___.', blanks: ['wichtige Grundlage', 'Entscheidung', 'Führung'] }
          ],
          answers: [['zwei','2'],['finanzielle','finanzielles'],['Erfolgsrechnung'],['betriebliche','betriebliches'],['Kosten'],['Nebenbuchhaltungen'],['Lohnbuchhaltung'],['Debitorenbuchhaltung'],['Kreditorenbuchhaltung'],['wichtige Grundlage'],['Entscheidung'],['Führung','Fuehrung']],
          tips: ['Das Rechnungswesen hat zwei Hauptbereiche: einen externen und einen internen.','Die externe Seite erstellt Bilanz und Erfolgsrechnung, die interne erfasst die Kosten.','Nebenbuchhaltungen sind z.B. Lohn-, Debitoren- und Kreditorenbuchhaltung.'],
          reveal: [{label:'1',val:'zwei'},{label:'2',val:'finanzielle'},{label:'3',val:'Erfolgsrechnung'},{label:'4',val:'betriebliche'},{label:'5',val:'Kosten'},{label:'6',val:'Nebenbuchhaltungen'},{label:'7',val:'Lohnbuchhaltung'},{label:'8',val:'Debitorenbuchhaltung'},{label:'9',val:'Kreditorenbuchhaltung'},{label:'10',val:'wichtige Grundlage'},{label:'11',val:'Entscheidung'},{label:'12',val:'Führung'}]
        },
        {
          id: 2,
          type: 'tf',
          q: 'Richtig oder falsch? – Buchhaltung und Rechnungswesen',
          statements: [
            {text:'Das Rechnungswesen ist im Unternehmen wichtige Grundlage für Planung, Entscheidung, Kontrolle und Führung.',correct:'R'},
            {text:'Rechnungswesen und Buchhaltung sind letztlich das Gleiche, nämlich jeweils andere Ausdrücke für Finanzbuchhaltung.',correct:'F',reason:'Das Rechnungswesen umfasst mehr als nur die Buchhaltung. Es beinhaltet auch die Betriebsbuchhaltung, Hilfsrechnungen und Auswertungen.'},
            {text:'Neben der Finanzbuchhaltung ist die Betriebsbuchhaltung ein Hauptbereich des Rechnungswesens.',correct:'R'},
            {text:'Die Debitoren- und Kreditorenbuchhaltung (Kunden- und Lieferantenbuchh.) sind Beispiele für Nebenbereiche (Hilfsrechnungen) des Rechnungswesens.',correct:'R'},
            {text:'Die Buchhaltung kann über alle Vorgänge, die sich in einem Unternehmen ereignen, Auskunft geben.',correct:'F',reason:'Die Buchhaltung erfasst nur zahlenmässig erfassbare Vorgänge, nicht alle Vorgänge (z.B. keine qualitativen Aspekte wie Mitarbeiterzufriedenheit).'},
            {text:'Die Finanzbuchhaltung ist Grundlage für weitere Bereiche des Rechnungswesens.',correct:'R'}
          ],
          tips: ['Rechnungswesen ist der Oberbegriff – Buchhaltung ist nur ein Teil davon.','Die Buchhaltung erfasst nur zahlenmässig messbare Geschäftsvorgänge.','Die Finanzbuchhaltung bildet die Basis für alle anderen Bereiche.'],
          reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – RW umfasst mehr als nur Buchhaltung'},{label:'3',val:'Richtig'},{label:'4',val:'Richtig'},{label:'5',val:'Falsch – nur zahlenmässig erfassbare Vorgänge'},{label:'6',val:'Richtig'}]
        },
        {
          id: 3,
          type: 'match',
          q: 'Zuordnungsaufgabe – Bereiche des Rechnungswesens. Ordnen Sie die Begriffe den Bereichen des Rechnungswesens zu.',
          items: [
            {label:'A) Debitorenbuchhaltung (Kundenbuchhaltung)',correct:'1 – Hilfsrechnungen'},
            {label:'B) Kalkulation',correct:'3 – Hauptbereich Betriebsbuchhaltung'},
            {label:'C) Bilanz',correct:'2 – Hauptbereich Finanzbuchhaltung'},
            {label:'D) Kostenartenrechnung',correct:'3 – Hauptbereich Betriebsbuchhaltung'},
            {label:'E) Bilanz- und Erfolgsanalyse',correct:'4 – Auswertung der Buchhaltung'},
            {label:'F) Kreditorenbuchhaltung (Lieferantenbuchhaltung)',correct:'1 – Hilfsrechnungen'},
            {label:'G) Lohnbuchhaltung',correct:'1 – Hilfsrechnungen'},
            {label:'H) Erfolgsrechnung',correct:'2 – Hauptbereich Finanzbuchhaltung'}
          ],
          categories: ['1 – Hilfsrechnungen','2 – Hauptbereich Finanzbuchhaltung','3 – Hauptbereich Betriebsbuchhaltung','4 – Auswertung der Buchhaltung'],
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
      learningData: null
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
        { id: 6, type: 'tf', q: 'Richtig oder falsch? – Zusammenhänge in der Bilanz', tips: ['Die goldene Bilanzregel: Langfristiges Kapital ≥ Anlagevermögen.','Eigenkapital = Aktiven − Fremdkapital (immer!).','Rechtsformtypische EK-Posten: AG hat Aktienkapital, EU hat Eigenkapital.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Richtig'},{label:'3',val:'Falsch – FK kann auch tiefer sein als EK'},{label:'4',val:'Richtig'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – langfr. Kapital (EK+langfr.FK) ≥ AV'}], statements: [{text:'Anlagevermögen und Eigenkapital zählen zum langfristigen Bereich.',correct:'R'},{text:'Stets gilt: Eigenkapital = Aktiven – Fremdkapital.',correct:'R'},{text:'Das Fremdkapital ist immer höher als das Eigenkapital.',correct:'F',reason:'Es gibt Unternehmen, bei denen das Eigenkapital höher ist als das Fremdkapital.'},{text:'Das Nettoumlaufvermögen ist positiv, wenn die goldene Bilanzregel eingehalten wird.',correct:'R'},{text:'Der Block Eigenkapital enthält rechtsformtypische Posten.',correct:'R'},{text:'Zur Einhaltung der goldenen Bilanzregel muss das Eigenkapital mindestens so hoch sein wie das Anlagevermögen.',correct:'F',reason:'Die goldene Bilanzregel besagt, dass das langfristige Kapital (EK + langfr. FK) mindestens so hoch sein muss wie das AV.'}] },
        { id: 7, type: 'calc', q: 'Ergänzung der fehlenden Grösse. Berechnen Sie die fehlende Grösse. Alle Beträge in CHF 1\'000.', tips: ['Grundformel: Vermögen = Fremdkapital + Eigenkapital.','Reinvermögen = Eigenkapital = Vermögen − Schulden.'], reveal: [{label:'Zeile 1',val:'Reinvermögen/EK = 570 − 290 = 280'},{label:'Zeile 2',val:'Vermögen = 100 + 320 = 420'},{label:'Zeile 3',val:'Vermögen = 200 + 750 = 950'},{label:'Zeile 4',val:'EK = 600 − 490 = 110'}], rows: [{labels:['Vermögen','Schulden','Reinvermögen/EK'],vals:[570,290,null],answer:280},{labels:['Reinvermögen','Schulden','Vermögen'],vals:[100,320,null],answer:420},{labels:['Eigenkapital','Fremdkapital','Vermögen'],vals:[200,750,null],answer:950},{labels:['Vermögen','Fremdkapital','EK'],vals:[600,490,null],answer:110}] },
        { id: 8, type: 'check', q: 'Zuordnungsaufgabe – Bilanzpositionen. Ordnen Sie jede Position der richtigen Bilanzhauptgruppe zu (UV, AV, FK, EK).', tips: ['UV: Vermögen < 1 Jahr (Kasse, Bank, Forderungen, Vorräte).','AV: Vermögen > 1 Jahr (Immobilien, Maschinen, Fahrzeuge).','FK: Schulden. EK: Aktienkapital, Reserven.'], reveal: [{label:'Liquide Mittel',val:'UV'},{label:'Hypotheken',val:'FK'},{label:'Aktivdarlehen',val:'AV'},{label:'Aktienkapital',val:'EK'}], items: [{name:'Liquide Mittel',correct:'UV'},{name:'Hypotheken',correct:'FK'},{name:'Aktivdarlehen (Fälligkeit in 2 Jahren)',correct:'AV'},{name:'Bankguthaben',correct:'UV'},{name:'Kasse',correct:'UV'},{name:'Aktienkapital',correct:'EK'},{name:'Rohmaterial',correct:'UV'},{name:'Forderungen aus Lieferungen und Leistungen',correct:'UV'},{name:'Verbindlichkeiten aus Lieferungen und Leistungen',correct:'FK'},{name:'Fahrzeuge',correct:'AV'},{name:'Eigenkapital',correct:'EK'},{name:'Büromaschinen und Informatik',correct:'AV'},{name:'Mobiliar und Einrichtungen',correct:'AV'},{name:'Darlehensschulden (Fälligkeit in 6 Monaten)',correct:'FK'},{name:'Reserven',correct:'EK'},{name:'Fertigfabrikatebestand',correct:'UV'},{name:'Rückstellungen',correct:'FK'},{name:'Immobilien',correct:'AV'},{name:'Wertschriften',correct:'UV'},{name:'Post',correct:'UV'},{name:'Maschinen',correct:'AV'}], categories: ['UV','AV','FK','EK'] },
        { id: 9, type: 'match', q: 'Buchhalterische Kurzbezeichnungen. Wählen Sie den passenden buchhalterischen Begriff.', tips: ['Forderungen aus L+L = offene Kundenrechnungen (Debitoren).','Verbindlichkeiten aus L+L = offene Lieferantenrechnungen (Kreditoren).','Hypothek = Darlehen mit Grundpfand als Sicherheit.'], reveal: [{label:'1',val:'Kasse'},{label:'2',val:'Bank(schuld)'},{label:'3',val:'Fahrzeuge'},{label:'4',val:'Mobiliar'},{label:'5',val:'Halbfabrikate'},{label:'6',val:'Maschinen'},{label:'7',val:'Immobilien'},{label:'8',val:'Warenbestand'},{label:'9',val:'Bank(guthaben)'},{label:'10',val:'Verbindlichkeiten aus L+L'},{label:'11',val:'Rohmaterialvorrat'},{label:'12',val:'Post'},{label:'13',val:'Fertigfabrikate'},{label:'14',val:'Aktivdarlehen'},{label:'15',val:'Hypothek'},{label:'16',val:'Forderungen aus L+L'}], items: [{text:'Bargeld in der Kasse',answer:'Kasse'},{text:'Schuld auf einem Kontokorrentkonto bei einer Bank',answer:'Bank(schuld)'},{text:'Bestand an Transportmitteln',answer:'Fahrzeuge'},{text:'Einrichtungsgegenstände im Laden oder Büro',answer:'Mobiliar'},{text:'Zwischenprodukte (noch nicht fertiggestellte Produkte)',answer:'Halbfabrikate'},{text:'Maschinen für die Erzeugung von Produkten',answer:'Maschinen'},{text:'Liegenschaften, die zum Unternehmen gehören',answer:'Immobilien'},{text:'Vorräte an Handelswaren',answer:'Warenbestand'},{text:'Guthaben bei einer Bank',answer:'Bank(guthaben)'},{text:'Noch nicht bezahlte Rechnungen von Lieferanten',answer:'Verbindlichkeiten aus L+L'},{text:'Rohstoffe für die Verarbeitung',answer:'Rohmaterialvorrat'},{text:'Guthaben bei der Post',answer:'Post'},{text:'Fertig erstellte Erzeugnisse zum Verkauf',answer:'Fertigfabrikate'},{text:'An einen Dritten gewährtes Darlehen',answer:'Aktivdarlehen'},{text:'Erhaltenes Darlehen gegen Verpfändung der Liegenschaft',answer:'Hypothek'},{text:'Offene Rechnungen an Kunden',answer:'Forderungen aus L+L'}] },
        { id: 10, type: 'text', q: 'Was wird umschrieben? (Bilanzpositionen)', tips: ['Flüssige Mittel = Kasse + Post + Bank.','Bilanzsumme = Total Aktiven = Total Passiven.','Umlaufvermögen = kurzfristig gebundene Vermögenswerte.'], reveal: [{label:'A',val:'Forderungen aus L+L'},{label:'B',val:'Bilanzsumme'},{label:'C',val:'Verbindlichkeiten aus L+L'},{label:'D',val:'Umlaufvermögen'},{label:'E',val:'Post'},{label:'F',val:'Flüssige Mittel'},{label:'G',val:'Fertigfabrikate'},{label:'H',val:'Passiven'},{label:'I',val:'Bilanz'},{label:'J',val:'Aktiven'},{label:'K',val:'Anlagevermögen'}], questions: [{label:'A',text:'Guthaben gegenüber Kunden oder offene Kundenrechnungen.',answers:['Forderungen aus L+L','Forderungen','Debitoren']},{label:'B',text:'Bezeichnung für die Summe der Aktiven und der Passiven.',answers:['Bilanzsumme']},{label:'C',text:'Schulden gegenüber Lieferanten.',answers:['Verbindlichkeiten aus L+L','Kreditoren']},{label:'D',text:'Meist kurzfristige Vermögensposten.',answers:['Umlaufvermögen']},{label:'E',text:'Guthaben gegenüber der Post.',answers:['Post']},{label:'F',text:'Kasse, Post, Bank zusammengefasst.',answers:['Flüssige Mittel','Liquide Mittel']},{label:'G',text:'Vorrat an fertiggestellten Produkten.',answers:['Fertigfabrikate']},{label:'H',text:'Bilanzseite mit Fremdkapital und Eigenkapital.',answers:['Passiven']},{label:'I',text:'Gegenüberstellung von Vermögen und Kapital.',answers:['Bilanz']},{label:'J',text:'Bilanzseite mit dem Vermögen.',answers:['Aktiven']},{label:'K',text:'Längerfristig gebundenes Sachvermögen.',answers:['Anlagevermögen']}] },
        { id: 11, type: 'table', q: 'Bilanzpositionen in Bilanzschema einordnen', tips: ['Aktiven: zuerst UV, dann AV.','Passiven: zuerst FK, dann EK.','Rohmaterial/Fertigfabrikate → UV. Produktionsanlagen → AV.'], reveal: [{label:'Branche',val:'Produktionsbetrieb / Industrie'},{label:'Rechtsform',val:'Aktiengesellschaft (AG)'}], correctAktiven: ['Flüssige Mittel','Forderungen aus L+L','Rohmaterial und Halbfabrikate','Fertigfabrikate','Mobiliar und Büroeinrichtungen','Produktionsanlagen'], correctPassiven: ['Verbindlichkeiten aus L+L','Bankschuld','Darlehen (Darlehensschulden)','Aktienkapital','Reserven und Gewinnvortrag'] },
        { id: 12, type: 'table', q: 'Ergänzung der fehlenden Grössen (Papierindustrie)', tips: ['Ordnen Sie alle Posten in die Bilanz ein.','Total Aktiven muss gleich Total Passiven sein.','Finanzanlagen und Sachanlagen gehören zum AV.'], reveal: [{label:'Aktiv: Flüssige Mittel',val:'90'},{label:'Aktiv: Vorräte',val:'77'},{label:'Aktiv: Finanzanlagen',val:'15'},{label:'Aktiv: Sachanlagen',val:'271'},{label:'Total',val:'625 = 625'}], fields: [{name:'Flüssige Mittel',answer:90},{name:'Vorräte',answer:77},{name:'Finanzanlagen',answer:15},{name:'Sachanlagen',answer:271},{name:'Bankschulden',answer:25},{name:'Darlehensschulden und Hypotheken',answer:125},{name:'Aktienkapital',answer:220},{name:'Reserven u. Gewinnvortrag',answer:114}] },
        { id: 13, type: 'table', q: 'Bilanzen für zwei Unternehmen erstellen', tips: ['Berechnen Sie den fehlenden Posten so, dass Aktiven = Passiven.','Waren → Detailhandel. Rohmaterial + Maschinen → Industrie.','Einzelunternehmen: nur «Eigenkapital». AG: Aktienkapital + Reserven.'], reveal: [{label:'13A: EK',val:'Eigenkapital = 610 − 450 = 160'},{label:'13A: Branche',val:'Detailhandel'},{label:'13A: Rechtsform',val:'Einzelunternehmen'},{label:'13B: Bank',val:'Bankschuld = 900 − 867 = 33'},{label:'13B: Branche',val:'Produktionsbetrieb / Industrie'},{label:'13B: Rechtsform',val:'Aktiengesellschaft (AG)'}], partA: {missingField:'Eigenkapital',answer:160,branche:'Detailhandel',rechtsform:'Einzelunternehmen'}, partB: {missingField:'Bankschuld',answer:33,branche:'Produktionsbetrieb',rechtsform:'Aktiengesellschaft (AG)'} },
        { id: 14, type: 'table', q: 'Bilanzen von Dienstleistungsunternehmen', tips: ['Vorauszahlungen von Kunden = kurzfristiges Fremdkapital.','Nicht fakturierte DL = UV.','Berechnen Sie die fehlende Position über: Aktiven = Passiven.'], reveal: [{label:'14A: Reserven',val:'613 − 241 = 372'},{label:'14B: Flüssige Mittel',val:'185 − 170 = 15'}], partA: {missingField:'Reserven',answer:372}, partB: {missingField:'Flüssige Mittel',answer:15} },
        { id: 15, type: 'text', q: 'Bilanz aus einem Geschäftsbericht (Meyer Burger). Beantworten Sie die Fragen zur Konzernbilanz 2016.', tips: ['Zeitpunktrechnung: Achten Sie auf die Datumsangaben.','Prozentzahlen zeigen den Anteil jeder Position an der Bilanzsumme (100%).','Summationsstaffeln: FK-Blöcke werden zuerst summiert.'], reveal: [{label:'A',val:'Ja – Stichtage 31.12.2016 und 31.12.2015'},{label:'B',val:'Serviceleistung, nicht obligatorisch'},{label:'C',val:'Anteil jeder Position an der Bilanzsumme (100%)'},{label:'D',val:'Staffel 1: 271141+124323=395464; Staffel 2: 395464+234424=629889'},{label:'E',val:'Warenvorräte (Vorräte / Inventories)'}], questions: [{id:'a',q:'Ist die Bilanz eine Zeitpunktrechnung?',accept:['zeitpunkt','stichtag','31.12']},{id:'b',q:'Prozentzahlen: Serviceleistung oder obligatorisch?',accept:['service','freiwillig','nicht obligatorisch']},{id:'c',q:'Wie sind die Prozentzahlen zu lesen?',accept:['anteil','bilanzsumme','100%']},{id:'d',q:'Summationsstaffeln der Passivseite zuordnen',accept:['395','629','staffel']},{id:'e',q:'Um welche Bilanzposition handelt es sich (Detailtabelle)?',accept:['vorr','warenvorr','inventori']}] },
        { id: 16, type: 'fill', q: 'Kreuzworträtsel zum Thema Bilanz. Was ist in den Reihen gesucht?', tips: ['Südlich des Gotthards = Italienisch.','«Weniger am Rotieren» = Anlage...','Passiv sitzen = Passiven. Unterm Strich gleich = Bilanzsumme.'], reveal: [{label:'1',val:'BILANCIA'},{label:'2',val:'ANLAGEVERMÖGEN'},{label:'3',val:'PASSIVEN'},{label:'4',val:'EIGENKAPITAL'},{label:'5',val:'FREMDKAPITAL'},{label:'6',val:'AKTIVEN'},{label:'7',val:'BILANZSUMME'}], clues: [{nr:1,hint:'Südlich des Gotthards das Sinnbild für die Bilanz.',ans:['bilancia'],display:'BILANCIA'},{nr:2,hint:'Auf der Aktivseite viel weniger am Rotieren.',ans:['anlagevermoegen','anlagevermögen'],display:'ANLAGEVERMÖGEN'},{nr:3,hint:'Eine Ansammlung von Couch-Potatoes? Kapital hängt darunter ab.',ans:['passiven'],display:'PASSIVEN'},{nr:4,hint:'Aktienkapital, Reserven und Gewinnvortrag gehören dazu.',ans:['eigenkapital'],display:'EIGENKAPITAL'},{nr:5,hint:'Solches aufzunehmen, beschönigt der Bankräuber seine Tat.',ans:['fremdkapital'],display:'FREMDKAPITAL'},{nr:6,hint:'Vermögensposten; bringen Schwung ins Vereinsleben.',ans:['aktiven'],display:'AKTIVEN'},{nr:7,hint:'Unterm Strich passt es links wie rechts.',ans:['bilanzsumme'],display:'BILANZSUMME'}] }
      ],
      learningData: null
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
        { id: 18, type: 'tf', q: 'Richtig oder falsch? Erfolgsrechnung', tips: ['Erfolg kann Gewinn ODER Verlust sein.','EBIT = Betriebsergebnis.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – «Erfolg» ist der Oberbegriff'},{label:'3',val:'Falsch – Stufenzahl variiert'},{label:'4',val:'Richtig'},{label:'5',val:'Richtig'},{label:'6',val:'Falsch – meist Berichtsform'},{label:'7',val:'Richtig'}], statements: [{text:'Gewinn bedeutet in der ER einen Ertragsüberschuss.',correct:'R'},{text:'Gewinn ist der allgemeine Ausdruck für den Saldo der ER.',correct:'F',reason:'Der allgemeine Ausdruck ist «Erfolg».'},{ text:'Eine gestufte ER hat immer drei Stufen.',correct:'F',reason:'Die Stufung variiert.'},{text:'Bruttogewinn ist ein Ergebnis in einer gestuften ER.',correct:'R'},{text:'Der EBIT dient zum Vergleich betrieblicher Ergebnisse.',correct:'R'},{text:'In Geschäftsberichten findet man die ER meist in Kontoform.',correct:'F',reason:'Meist in Berichtsform.'},{text:'Eine einfache Stufung ist «betrieblich» und «neutral».',correct:'R'}] },
        { id: 19, type: 'table', q: 'Bezeichnung für Aufwand bzw. Ertrag. Bestimmen Sie A/E und die buchhalterische Bezeichnung.', tips: ['Aufwand = Wertverbrauch. Ertrag = Wertschöpfung.','Personal → Lohnaufwand. Miete → Raumaufwand.'], reveal: [{label:'1',val:'A – Personalaufwand'},{label:'2',val:'E – Finanzertrag'},{label:'3',val:'A – Handelswarenaufwand'}], items: [{text:'Löhne und Beiträge an Sozialversicherungen',ae:'A',bez:['Personalaufwand']},{text:'Zins auf Bankguthaben gutgeschrieben',ae:'E',bez:['Finanzertrag','Zinsertrag']},{text:'Handelswaren gekauft und verbraucht',ae:'A',bez:['Handelswarenaufwand','Warenaufwand']},{text:'Rechnung für Dienstleistungen',ae:'E',bez:['Dienstleistungsertrag']},{text:'Material für Herstellung verbraucht',ae:'A',bez:['Materialaufwand']},{text:'Miete für Räumlichkeiten',ae:'A',bez:['Raumaufwand']},{text:'Zins für Darlehen bezahlt',ae:'A',bez:['Finanzaufwand','Zinsaufwand']},{text:'Handelswaren verkauft',ae:'E',bez:['Handelserlös','Warenertrag']},{text:'Abschreibungen auf Anlagegüter',ae:'A',bez:['Abschreibungen']},{text:'Räumlichkeiten vermietet',ae:'E',bez:['Immobilienertrag']},{text:'Selbst hergestellte Waren verkauft',ae:'E',bez:['Produktionserlös']},{text:'Elektrizität/Heizöl verbraucht',ae:'A',bez:['Energieaufwand']},{text:'Anlagegüter reparieren lassen',ae:'A',bez:['Unterhalt und Reparaturen']},{text:'Verwaltungsaufwand',ae:'A',bez:['Verwaltungsaufwand']},{text:'Inserate, Prospekte bezahlt',ae:'A',bez:['Werbeaufwand']},{text:'Sonstiger betrieblicher Aufwand',ae:'A',bez:['Sonstiger betrieblicher Aufwand']},{text:'Sonstiger betrieblicher Ertrag',ae:'E',bez:['Sonstiger betrieblicher Ertrag']},{text:'Betriebsfremde Erträge',ae:'E',bez:['Betriebsfremder Ertrag']},{text:'Ausserordentlicher Aufwand',ae:'A',bez:['Ausserordentlicher Aufwand']}] },
        { id: 20, type: 'text', q: 'Das Geschäft eines Unternehmens abbilden. Ertrags- und Aufwandsposten pro Branche.', tips: ['Der wichtigste Ertrag zeigt, was das Unternehmen verkauft.','Handel: Warenertrag. Industrie: Produktionserlöse.'], reveal: [{label:'Handel – Ertrag',val:'Warenertrag / Handelserlöse'},{label:'Industrie – Ertrag',val:'Produktionserlöse'}], branches: [{name:'Handelsunternehmen',ertrag:['Warenertrag','Handelserlöse'],aufwand:['Warenaufwand','Personalaufwand','Raumaufwand']},{name:'Industrieunternehmen',ertrag:['Produktionserlöse'],aufwand:['Materialaufwand','Personalaufwand','Energieaufwand']},{name:'Dienstleistungsunternehmen',ertrag:['Dienstleistungserlöse'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Transportunternehmen',ertrag:['Transportertrag'],aufwand:['Treibstoffaufwand','Fahrzeugaufwand']},{name:'Beratungsunternehmen',ertrag:['Honorarertrag'],aufwand:['Personalaufwand','Raumaufwand']},{name:'Gastgewerbe',ertrag:['Dienstleistungserlöse'],aufwand:['Warenaufwand','Personalaufwand']},{name:'Banken',ertrag:['Zinsertrag','Kommissionsertrag'],aufwand:['Zinsaufwand','Personalaufwand']},{name:'Versicherungen',ertrag:['Prämienertrag'],aufwand:['Schadenaufwand','Personalaufwand']}] },
        { id: 21, type: 'calc', q: 'Erstellen der Erfolgsrechnung. Berechnen Sie Total Aufwand, Ertrag und Ergebnis.', tips: ['Sortieren: Erträge und Aufwände trennen.','Gewinn = Ertrag − Aufwand.'], reveal: [{label:'A: Gewinn',val:'29\'600'},{label:'B: Verlust',val:'6\'800'},{label:'C: Gewinn',val:'39\'200'},{label:'D: Gewinn',val:'36\'000'}], subsData: [{label:'A) Architekturbüro',totalAufwand:252900,totalErtrag:282500,result:29600,resultLabel:'Gewinn'},{label:'B) Handelsunternehmen',totalAufwand:346800,totalErtrag:340000,result:-6800,resultLabel:'Verlust'},{label:'C) Motorrad- und Fahrradhandel',totalAufwand:485900,totalErtrag:525100,result:39200,resultLabel:'Gewinn'},{label:'D) Transportunternehmen',totalAufwand:294000,totalErtrag:330000,result:36000,resultLabel:'Gewinn'}] },
        { id: 22, type: 'calc', q: 'Dreistufige Erfolgsrechnung einer Lederwarenhandlung', tips: ['Stufe 1: Betriebsgewinn.','Stufe 2: Neutral.','Stufe 3: Ausserordentlich.'], reveal: [{label:'Betriebsgewinn',val:'16\'900'},{label:'Neutraler Erfolg',val:'1\'500'},{label:'Unternehmensgewinn',val:'17\'500'}], solution: {betrAufwand:153100,betrErtrag:170000,betriebsgewinn:16900,neutrAufwand:9200,neutrErtrag:10700,neutralerErfolg:1500,aoAufwand:900,aoErtrag:0,aoErfolg:-900,unternehmensgewinn:17500} },
        { id: 23, type: 'calc', q: 'Zweistufige Erfolgsrechnung einer Garage', tips: ['Bruttoerlös = Summe aller Verkaufserlöse.','Betriebsergebnis = Nettoerlös − betriebliche Aufwände.'], reveal: [{label:'Bruttoerlös',val:'1\'265'},{label:'Nettoerlös',val:'1\'135'},{label:'Betriebsergebnis',val:'161'},{label:'Unternehmensgewinn',val:'133'}], solution: {bruttoerloes:1265,erlmind:130,nettoerloes:1135,betrAufwand:974,betriebsergebnis:161,neutrErtrag:65,neutrAufwand:23,neutralErfolg:42,aoErfolg:-70,unternehmensgewinn:133} },
        { id: 24, type: 'check', q: 'Wie wirken sich Vorgänge auf die Stufenergebnisse aus? (+, −, 0)', tips: ['+ = erhöht das Ergebnis, − = senkt es, 0 = keine Auswirkung.','Bruttogewinn: Nur Warenaufwand/-ertrag.'], reveal: [{label:'1',val:'BG: 0 | Betr: − | UG: −'},{label:'2',val:'BG: 0 | Betr: 0 | UG: +'}], transactions: [{text:'Bezahlung der Löhne via Bank',bg:'0',betg:'-',ug:'-'},{text:'Kursgewinne auf Wertschriften',bg:'0',betg:'0',ug:'+'},{text:'Nachträgliche Rabatte auf Wareneinkäufen',bg:'+',betg:'+',ug:'+'},{text:'Bodenreinigung des Ladenlokals',bg:'0',betg:'-',ug:'-'},{text:'Warenverkäufe auf Kredit',bg:'+',betg:'+',ug:'+'},{text:'Unterhaltsarbeiten am Gewerbegebäude',bg:'0',betg:'0',ug:'-'},{text:'Abschreibung Ladeneinrichtung',bg:'0',betg:'-',ug:'-'},{text:'Mietaufwand und Gutschrift Immobilien',bg:'0',betg:'-',ug:'0'}] },
        { id: 25, type: 'text', q: 'Erfolgsrechnung aus einem Geschäftsbericht (Meyer Burger)', tips: ['Zeitraumrechnung: ER zeigt Aufwand/Ertrag über eine Periode.','EBITDA = vor Abschreibungen. EBIT = vor Zinsen und Steuern.'], reveal: [{label:'A',val:'Ja – Zeitraum 1.1.–31.12.'},{label:'F',val:'Lage verbessert sich – Verlust wird kleiner'}], questions: [{id:'a',label:'Zeitpunkt- oder Zeitraumrechnung?',keywords:['zeitraum','1.1','31.12']},{id:'b',label:'Prozentzahlen: Serviceleistung oder obligatorisch?',keywords:['serviceleistung','nicht obligatorisch']},{id:'c',label:'Wie sind die Prozentzahlen zu lesen?',keywords:['anteil','nettoerlös','100%']},{id:'d',label:'Erläuterung sonstiger Betriebsaufwand',keywords:['sonstiger betriebsaufwand']},{id:'e',label:'Zwischenergebnisse den KHG zuordnen',keywords:['brutto','personal','ebitda','ebit']},{id:'f',label:'Verschlimmert oder verbessert sich die Lage?',keywords:['verbessert','kleiner']}] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 4: Bilanz und Erfolgsrechnung im Zusammenhang
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch4',
      num: 'Kapitel 4',
      title: 'Bilanz und Erfolgsrechnung im Zusammenhang',
      exercises: [
        { id: 26, type: 'tf', q: 'Geldflussrechnungen in verschiedenen Unternehmenssituationen', tips: ['GFR zeigt Geldzu- und -abflüsse in 3 Bereichen.','Positiver operativer Cashflow = Kerngeschäft generiert Geld.'], reveal: [{label:'1',val:'Richtig – Start-up: negativer CF'},{label:'2',val:'Falsch – Unternehmen B hat negativen CF (-130)'}], statements: [{text:'Die GFR des Unternehmens C wäre am ehesten bei einem Start-up-Unternehmen vorzufinden.',correct:'R'},{text:'Investoren wären am glücklichsten mit Unternehmen B.',correct:'F',reason:'Unternehmen B hat negativen operativen CF.'},{text:'Nur bei Unternehmen B sind die Erträge höher als die Aufwendungen.',correct:'F',reason:'Unternehmen B hat negativen operativen CF (-130).'},{text:'Die GFR von Unternehmen A findet man am ehesten bei einem starken Unternehmen.',correct:'R'}] },
        { id: 27, type: 'text', q: 'Geldflussrechnung aus einem Geschäftsbericht', tips: ['Die GFR ist eine Zeitraumrechnung.','Praxis-Cashflow = Gewinn + Abschreibungen.'], reveal: [{label:'A',val:'Zeitraumrechnung'},{label:'B',val:'Ja: drei Bereiche'},{label:'C',val:'Operativer CF 2015 negativ'}], questions: [{id:'a',label:'Zeitpunkt- oder Zeitraumrechnung?',keywords:['zeitraum']},{id:'b',label:'Drei Bereiche erkennbar?',keywords:['geschäftstätigkeit','investition','finanzierung']},{id:'c',label:'Was fällt am CF 2015 auf?',keywords:['negativ','verbrennt']},{id:'d',label:'Flüssige Mittel zu- oder abgenommen?',keywords:['abgenommen']},{id:'e',label:'Massnahme gegen Finanzlage?',keywords:['kapitalerhöhung','finanzierung']},{id:'f',label:'Praxis-Cashflow vs. echter CF?',keywords:['working capital','abschreibung']}] }
      ],
      learningData: null
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
        { id: 29, type: 'tf', q: 'Richtig oder falsch? Wirkungen von Bilanzveränderungen', tips: ['AT und PT verändern die Bilanzsumme nicht.','KB und KR verändern die Bilanzsumme.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – AT verändert BS nicht'}], statements: [{text:'Ein Passivtausch verändert die Bilanzsumme nicht.',correct:'R'},{text:'Ein Aktivtausch erhöht die Bilanzsumme.',correct:'F',reason:'AT verändert die BS nicht.'},{text:'Kapitalrückzahlung führt zu BS-Veränderung.',correct:'R'},{text:'Beim PT ändert sich die Kapitalzusammensetzung.',correct:'R'},{text:'Bei KB nimmt eine Aktiv- und eine Passivposition zu.',correct:'R'},{text:'Beim AT wird eine Aktiv- erhöht und eine Passivposition vermindert.',correct:'F',reason:'Beim AT sind beide auf der Aktivseite.'}] },
        { id: 30, type: 'fill', q: 'Lückentext: Aufgaben der Buchhaltung', tips: ['Die Buchhaltung dient dem Erfolgsausweis und der Vermögenskontrolle.'], reveal: [{label:'1',val:'Erfolgs'},{label:'2',val:'Gewinn'}], answers: [['Erfolgs','Erfolg'],['Gewinn'],['Vermögen'],['lückenlose','lückenlos'],['Geschäftsverkehrs','Geschäftsverkehr'],['Vermögen'],['Schulden']] },
        { id: 31, type: 'tf', q: 'Richtig oder falsch? Zusammenhänge im Erfolgskonto', tips: ['Saldo = Differenz stärkere − schwächere Seite.','Erfolgskonten haben keinen Anfangsbestand.'], reveal: [{label:'1',val:'Richtig'},{label:'2',val:'Falsch – Saldo steht auf der schwächeren Seite'}], statements: [{text:'Der Saldo ergibt sich als Differenz zwischen stärkerer und schwächerer Seite.',correct:'R'},{text:'Ist die Habenseite stärker, steht der Saldo im Haben.',correct:'F',reason:'Saldo steht auf der schwächeren Seite (im Soll).'},{text:'Ist die Sollseite stärker, steht der Saldo im Haben.',correct:'R'},{text:'Sollsaldo eines Erfolgskontos = Ertrag.',correct:'F',reason:'Sollüberschuss = Aufwand.'},{text:'Erfolgskonten werden mit Anfangsbestand eröffnet.',correct:'F',reason:'Kein Anfangsbestand.'},{text:'Habensaldo eines Erfolgskontos = Ertragskonto.',correct:'R'}] },
        { id: 32, type: 'match', q: 'Zuordnung: Begriffe der doppelten Buchhaltung', tips: ['SB I = vor Erfolgsverbuchung, SB II = nach.'], reveal: [{label:'A',val:'4 – Buchungssatz'},{label:'B',val:'5 – Schlussbilanz II'}], items: [{label:'A) Kontoaufruf durch Kurzanweisung',correct:'4'},{label:'B) Bilanz nach Erfolgsverbuchung',correct:'5'},{label:'C) Erfolg auf Aktivseite und Ertragsseite',correct:'6'},{label:'D) Oberstes Gebot der Ordnungsmässigkeit',correct:'8'},{label:'E) Erfolg auf Passivseite und Aufwandsseite',correct:'2'},{label:'F) Bilanz vor Erfolgsverbuchung',correct:'1'},{label:'G) Doppelter Erfolgsnachweis',correct:'7'},{label:'H) Vierkontentheorie',correct:'3'}] },
        { id: 33, type: 'check', q: 'Zuordnung: Konten zu vier Kontenarten', tips: ['Aufwand/Ertrag = Erfolgskonten. Aktiv/Passiv = Bestandeskonten.'], reveal: [{label:'Löhne und Gehälter',val:'Aufwandskonto'},{label:'Aktienkapital',val:'Passivkonto'}], items: [{name:'Löhne und Gehälter',correct:'AW'},{name:'Aktienkapital',correct:'PA'},{name:'Fertigfabrikatevorrat',correct:'AK'},{name:'Bank(schuld)',correct:'PA'},{name:'Warenertrag',correct:'ER'},{name:'Sozialversicherungsaufwand',correct:'AW'},{name:'Materialaufwand',correct:'AW'},{name:'Kasse',correct:'AK'},{name:'Mietzins Ladenlokal',correct:'AW'},{name:'Erlöse aus Arbeiten',correct:'ER'},{name:'Unterhalt und Reparaturen',correct:'AW'},{name:'Werbung',correct:'AW'},{name:'Werbeeinnahmen',correct:'ER'},{name:'Wertschriften',correct:'AK'},{name:'Verbindlichkeiten aus L+L',correct:'PA'},{name:'Rückstellungen',correct:'PA'},{name:'Handelswarenbestand',correct:'AK'},{name:'Versicherung Fahrzeuge',correct:'AW'},{name:'Reserven',correct:'PA'},{name:'Rohmaterialvorrat',correct:'AK'},{name:'Mietzinseinnahmen Personalwohnungen',correct:'ER'}], categories: ['AK','PA','AW','ER'] },
        { id: 34, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Buchungsmöglichkeiten', tips: ['AT: Aktiv+/Aktiv−. PT: Passiv−/Passiv+.','KB: Aktiv+/Passiv+. KR: Aktiv−/Passiv−.'], reveal: [{label:'A',val:'1 – Aktivtausch'},{label:'B',val:'3 – Kapitalbeschaffung'}], items: [{label:'A) Kauf Fahrzeug gegen bar',correct:'1'},{label:'B) Kauf Mobiliar auf Rechnung',correct:'3'},{label:'C) Bezahlung Lieferantenrechnungen',correct:'4'},{label:'D) Barverkauf ausgedienten Gestells',correct:'1'},{label:'E) Rückzahlung Hypothek über Bank',correct:'2'},{label:'F) Darlehen erhalten, bar',correct:'3'},{label:'G) Kunden zahlen auf Postkonto',correct:'1'},{label:'H) Bezug Bargeld von Bank (Schuld)',correct:'4'}] },
        { id: 35, type: 'match', q: 'Zuordnung: Geschäftsfälle zu Bilanz- und Erfolgskonten', tips: ['Buchungssatz: Soll/Haben bestimmt die Kontenarten.'], reveal: [{label:'A',val:'Warenaufwand / Verb. L+L → Aufwand + Passiv'}], items: [{label:'A) Wareneinkauf auf Rechnung',correct:'2'},{label:'B) Barverkauf von Waren',correct:'1'},{label:'C) Lohnzahlung über Bank',correct:'3'},{label:'D) Mietzahlung bar',correct:'3'},{label:'E) DL-Ertrag auf Postkonto',correct:'1'},{label:'F) Zinsertrag auf Bankkonto',correct:'1'}] },
        { id: 36, type: 'check', q: 'Wie verändert sich die Bilanzsumme?', tips: ['AT und PT: BS bleibt gleich.','KB: BS steigt. KR: BS sinkt.'], reveal: [{label:'A',val:'Bleibt gleich (AT)'},{label:'B',val:'Nimmt zu (KB)'}], items: [{name:'A) Bareinzahlung Postkonto',correct:'GL'},{name:'B) Kauf Mobiliar auf Rechnung',correct:'ZU'},{name:'C) Barzahlung Lieferantenrechnung',correct:'AB'},{name:'D) Umwandlung kurzfr. Schuld in Darlehen',correct:'GL'},{name:'E) Tilgung Darlehen via Bank',correct:'AB'},{name:'F) Aufnahme Hypothek',correct:'ZU'},{name:'G) Einlösung Wertschrift',correct:'GL'},{name:'H) Rückstellung → Verbindlichkeit',correct:'GL'}], categories: ['GL','ZU','AB'] },
        { id: 37, type: 'check', q: 'Notierung der Bilanzveränderung zu Geschäftsfällen', tips: ['AT: a+/a−.','KB: a+/p+.'], reveal: [{label:'A',val:'a+/a− (AT)'},{label:'B',val:'a+/p+ (KB)'}], items: [{name:'A) Bareinzahlung Postkonto',correct:'AT'},{name:'B) Kauf Mobiliar auf Rechnung',correct:'KB'},{name:'C) Barzahlung Lieferantenrechnung',correct:'KR'},{name:'D) Umwandlung Schuld in Darlehen',correct:'PT'},{name:'E) Tilgung Darlehen via Bank',correct:'KR'},{name:'F) Aufnahme Hypothek',correct:'KB'},{name:'G) Einlösung Wertschrift',correct:'AT'},{name:'H) Rückstellung → Verbindlichkeit',correct:'PT'}], categories: ['AT','PT','KB','KR'] },
        { id: 38, type: 'match', q: 'Zuordnung: Buchungssätze zu Buchungsmöglichkeiten', tips: ['Buchungssatz Soll/Haben bestimmt die Buchungsmöglichkeit.'], reveal: [{label:'A',val:'1 – Aktivtausch'}], items: [{label:'A) Maschinen / Kasse',correct:'1'},{label:'B) Mobiliar / Verbindlichkeiten L+L',correct:'3'},{label:'C) Verbindlichkeiten L+L / Bank',correct:'4'},{label:'D) Darlehen / Hypothek',correct:'2'},{label:'E) Bankschuld / Kasse',correct:'4'},{label:'F) Post / Forderungen L+L',correct:'1'},{label:'G) Fahrzeuge / Darlehen',correct:'3'},{label:'H) Verbindlichkeiten L+L / Rückstellungen',correct:'2'}] },
        { id: 39, type: 'match', q: 'Grafische Aufgabe zu Erfolgsvorgängen', tips: ['Aufwandskonten: Soll = Zunahme.','Ertragskonten: Haben = Zunahme.'], reveal: [{label:'A',val:'Aufwandsbuchung (Aufwandskonto Soll / Aktivkonto Haben)'}], items: [{label:'A) Barzahlung Miete',correct:'1'},{label:'B) Bareinnahme Warenverkauf',correct:'2'},{label:'C) Lohnzahlung per Bank',correct:'1'},{label:'D) Bankgutschrift für DL',correct:'2'},{label:'E) Wareneinkauf auf Rechnung',correct:'3'},{label:'F) Zinsertrag auf Post',correct:'2'}] },
        { id: 40, type: 'text', q: 'Einzelfragen zum Thema Buchungstechnik', tips: ['Die Bilanz wird in Konten aufgelöst.','Journal = chronologisch. Hauptbuch = sachlich.'], reveal: [{label:'A',val:'Jeder Geschäftsfall auf mindestens zwei Konten'},{label:'B',val:'Journal = chronologisch, Hauptbuch = sachlich'}], questions: [{id:'a',q:'Was bedeutet "doppelte Buchhaltung"?',keywords:['zwei konten','soll','haben']},{id:'b',q:'Journal vs. Hauptbuch?',keywords:['chronolog','sachlich']},{id:'c',q:'Ablauf Eröffnung bis Schlussbilanz?',keywords:['eröffnung','geschäftsf','abschluss']},{id:'d',q:'Was ist der doppelte Erfolgsnachweis?',keywords:['bilanz','erfolgsrechnung','beide']},{id:'e',q:'Rolle des Belegs?',keywords:['beleg','grundlage','keine buchung']}] }
      ],
      learningData: null
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
        { id: 42, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den Bewertungsvorschriften', tips: ['Für Aktiven Höchstbewertung, für FK Mindestbewertung.','Unterbewertung erlaubt (Vorsichtsprinzip).'], reveal: [{label:'1',val:'Falsch – für Aktiven Höchst-, für FK Mindestbewertung'}], statements: [{text:'Für Aktiven gelten Mindestbewertungsvorschriften, für FK Höchstbewertungsvorschriften.',correct:'F',reason:'Umgekehrt.'},{text:'Der Ertragswert wird vor allem bei Immobilien angewendet.',correct:'F',reason:'Primär Anschaffungskosten abzüglich Abschreibungen.'},{text:'Kasse, Bank, leicht realisierbare Wertschriften stehen im Wert fest.',correct:'R'},{text:'Unter- und Überbewertung der Aktiven ist erlaubt.',correct:'F',reason:'Nur Unterbewertung.'},{text:'Ersterfassung: zwei Höchstwerte (gekauft vs. selbst hergestellt).',correct:'R'},{text:'Überbewertung von FK ist nicht erlaubt.',correct:'F',reason:'Überbewertung FK ist erlaubt (Vorsichtsprinzip).'}] },
        { id: 43, type: 'match', q: 'Zuordnungsaufgabe: Rechnungslegungsvorschriften', tips: ['Grundsätze: Klarheit, Verständlichkeit, Vollständigkeit.','Jahresrechnung: Bilanz, Erfolgsrechnung, Anhang.'], reveal: [{label:'1',val:'C'},{label:'2',val:'E'}], items: [{label:'1. Grundsätze ordnungsmässiger Rechnungslegung',correctKey:'C'},{label:'2. Jahresrechnung',correctKey:'E'},{label:'3. Lagebericht',correctKey:'H'},{label:'4. Grundlage der Rechnungslegung',correctKey:'A'},{label:'5. Geschäftsbericht',correctKey:'B'},{label:'6. Buchführungspflicht',correctKey:'F'},{label:'7. Strengere Vorgaben für grössere Unternehmen',correctKey:'G'},{label:'8. Darstellungsformen der Erfolgsrechnung',correctKey:'D'}] },
        { id: 44, type: 'text', q: 'Theoriefragen zu den Bewertungsvorschriften', tips: ['Bewertung = Frankenwert jedem Posten zuordnen.','Niederstwertprinzip bei Vorräten.'], reveal: [{label:'A',val:'Bewertung = Festlegung des Frankenwerts'},{label:'B',val:'Niederstwertprinzip anwenden'}], questions: [{id:'a',q:'Was ist Bewertung?',keywords:['Frankenwert','Bilanzposten','Wert']},{id:'b',q:'Laborgeräte: zu welchem Preis bilanzieren?',keywords:['2950','5290','Niederstwert']},{id:'c',q:'Lower of cost or market übersetzen',keywords:['Niederstwert','niedrigere']},{id:'d',q:'Für welche Position gilt «Anschaffungskosten»?',keywords:['Sachanlage','Anlagevermögen']}] },
        { id: 45, type: 'mc', q: 'Wählen Sie die Antwort: Bewertungsfragen beim Jahresabschluss', tips: ['Anschaffungskosten = Katalogpreis − Rabatt − Skonto + Transport + Montage.','Vorräte: Niederstwertprinzip.'], reveal: [{label:'A',val:'CHF 129 000.–'},{label:'B',val:'CHF 240.–'}], questions: [{id:'a',q:'Aktivierung Spezialmaschine?',options:['CHF 95 000.–','CHF 125 000.–','CHF 129 000.–','CHF 117 000.–'],correct:2},{id:'b',q:'Bewertung Rohmaterialien?',options:['CHF 250.–','CHF 240.–','CHF 265.–','CHF 275.–'],correct:1},{id:'c',q:'Wertschriften bilanzieren?',correct:2},{id:'d',q:'Liegenschaft bilanzieren?',options:['750 000.–','386 000.–','450 000.–','610 000.–'],correct:2}] }
      ],
      learningData: null
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
        { id: 47, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Sachanlagen und Abschreibungen', tips: ['Bei indirekter Abschreibung: kumulierte Abschreibungen aus WB-Konto.','WB ist ein Minus-Aktivkonto.'], reveal: [{label:'1',val:'Richtig'},{label:'5',val:'Falsch – WB ist Minus-Aktivkonto'}], statements: [{text:'Kumulierte Abschreibungen bei indirekter Methode aus Konto Abschreibungen.',correct:'R'},{text:'Bei Abschreibung vom Buchwert wird Wert null nicht erreicht.',correct:'R'},{text:'Bei indirekter Abschreibung bleibt Betrag immer gleich.',correct:'F',reason:'Hängt von der Methode ab.'},{text:'Umstellung: Maschine an WB Maschine.',correct:'R'},{text:'WB ist ein Minus-Passivkonto.',correct:'F',reason:'WB ist ein Minus-Aktivkonto.'},{text:'Degressive Abschreibung: Prozent des Buchwerts.',correct:'R'}] },
        { id: 48, type: 'calc', q: 'Wirkungen von Über- bzw. Unterbewertungen im Fremdkapital', tips: ['Rückstellungen sind FK.','Bei richtiger Bewertung: Rückstellung = 60, EK = 500.'], reveal: [{label:'Fall 1',val:'Rückstellungen = 60, EK = 500'},{label:'Fall 2',val:'Rückstellungen = 3, EK = 557'},{label:'Fall 3',val:'Rückstellungen = 90, EK = 470'}], correctRueck: [60,3,90], correctEK: [500,557,470] },
        { id: 49, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Inventar und Inventur', tips: ['Inventar = Verzeichnis. Inventur = Tätigkeit der Bestandsaufnahme.'], reveal: [{label:'1',val:'Richtig'},{label:'4',val:'Falsch – Inventur ist die Tätigkeit'}], statements: [{text:'Das Inventar ist ein Verzeichnis, Resultat einer Bestandsaufnahme.',correct:'R'},{text:'Inventar enthält nur belegte Posten.',correct:'F',reason:'Alle zu bewertenden Posten.'},{text:'Inventur ist ein detailliertes Verzeichnis.',correct:'R'},{text:'Inventur ist die Tätigkeit der Bestandsaufnahme.',correct:'F',reason:'Definition verwechselt.'},{text:'Inventar umfasst sämtliche Posten.',correct:'F',reason:'Nur die zu bewertenden.'},{text:'Inventar umfasst die zu bewertenden Posten.',correct:'R'}] },
        { id: 50, type: 'text', q: 'Theoriefragen zur Abschreibung', tips: ['Indirekte Methode ist aufschlussreicher.','Abschreibungen sind nicht zahlungswirksam.'], reveal: [{label:'A',val:'Indirekte Methode aufschlussreicher'},{label:'C',val:'Nicht zahlungswirksam'}], questions: [{id:'a',q:'Welches Verfahren ist aufschlussreicher?',keywords:['indirekte','aufschlussreich']},{id:'b',q:'Abschreibung von Anschaffungskosten vs. Buchwert?',keywords:['konstant','linear','degressiv']},{id:'c',q:'Unterschied zu anderem Aufwand?',keywords:['nicht zahlungswirksam']},{id:'d',q:'Buchwert bei indirekter Abschreibung ermittelbar?',keywords:['ja','WB','Differenz']},{id:'e',q:'Anschaffungskosten bei direkter Abschreibung ermittelbar?',keywords:['nein','nicht','direkt']}] }
      ],
      learningData: null
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
        { id: 53, type: 'tf', q: 'Richtig oder falsch? Forderungen, WB, transitorische Posten, Rückstellungen', tips: ['Verluste Forderungen ist ein Aufwandkonto.','ARA = UV, PRA = kurzfristiges FK.'], reveal: [{label:'1',val:'Falsch – Aufwandkonto'}], statements: [{text:'Verluste Forderungen ist Ertragsminderungskonto.',correct:'F',reason:'Es ist ein Aufwandkonto.'},{text:'WB-Bestand abhängig vom Forderungsbestand.',correct:'R'},{text:'Am Ende wird immer der ganze WB-Betrag gebucht.',correct:'F',reason:'Nur die Differenz.'},{text:'ARA zum UV, PRA zum FK.',correct:'R'},{text:'Gesamtrückstellungen für gleichartige Vorgänge.',correct:'R'},{text:'Bildung Rückstellung ist erfolgswirksam.',correct:'R'},{text:'Rückstellung: Soll Rückstellungen / Haben Erfolgskonto.',correct:'F',reason:'Umgekehrt: Soll Aufwandkonto / Haben Rückstellungen.'}] },
        { id: 54, type: 'calc', q: 'Berechnung WB Forderungen (Delkredere)', tips: ['WB in CHF = Forderungsbestand × WB-Satz in %.'], reveal: [{label:'Jahr 1',val:'WB = 80 000 × 5% = 4 000'},{label:'Jahr 2',val:'Ford. = 5 000 / 4% = 125 000'}], rows: [{label:'Jahr 1',answer:4000},{label:'Jahr 2',answer:125000},{label:'Jahr 3',answer:4400},{label:'Jahr 4',answer:6}] },
        { id: 55, type: 'check', q: 'Geschäftsfälle betragsmässig zwischen zwei Jahren abgrenzen', tips: ['Prüfen: Buchung ins laufende oder nächste Jahr?','Verursachung im selben Jahr → keine Abgrenzung.'], reveal: [{label:'1',val:'Laufendes 03: 2 Mon. = 2000; Nächstes 04: 1 Mon. = 1000'}], geschaeftsfaelle: [{nr:1,text:'Mietzins 12 000.– für Nov. bis Jan. im Voraus bezahlt.',needsAbgrenzung:'Ja'},{nr:2,text:'Maschinenreparatur in Woche 50, Rechnung fehlt noch.',needsAbgrenzung:'Ja'},{nr:3,text:'Warenbestellung vor Jahresende, Lieferung im Jan.',needsAbgrenzung:'Nein'},{nr:4,text:'Zeitschriftenabos im Voraus, 6 000.– laufen noch ins 04.',needsAbgrenzung:'Ja'},{nr:5,text:'Säumige Mieter zahlen Dezembermieten.',needsAbgrenzung:'Nein'},{nr:6,text:'Darlehen ab 01.08., Zinszahlung Ende Jan. fällig.',needsAbgrenzung:'Ja'}] }
      ],
      learningData: null
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
        { id: 57, type: 'tf', q: 'Richtig oder falsch? Aussagen zu den stillen Reserven', tips: ['Beim Konto Kasse keine stillen Reserven möglich.'], reveal: [{label:'1',val:'Falsch – erhöht den internen, nicht externen Gewinn'}], statements: [{text:'Bildung stiller Reserven erhöht den internen Reingewinn.',correct:'F',reason:'Mindert den externen Gewinn.'},{text:'Beim Konto Kasse können stille Reserven gebildet werden.',correct:'F',reason:'Kasse hat festen Wert.'},{text:'EUR-Forderung zu tieferem Kurs = stille Reserven.',correct:'R'},{text:'Stille Reserven sind «still» weil intern nicht ersichtlich.',correct:'R'},{text:'Auflösung stiller Reserven: Erfolg wird zu hoch ausgewiesen.',correct:'F',reason:'Extern zu hoch dargestellt.'},{text:'Unterbewertung Vorräte: Vorratsabnahme löst stille Reserven auf.',correct:'R'}] },
        { id: 58, type: 'calc', q: 'Externe Schlussbilanz aus der internen ableiten', tips: ['Stille Reserven auf Aktiven: Extern = Intern − stille Reserve.','EK extern = Total A extern − Total FK extern.'], reveal: [{label:'Vorräte extern',val:'130'},{label:'Mobilien extern',val:'225'},{label:'EK extern',val:'250'}], fields: [{label:'Vorräte (extern)',correct:130},{label:'Mobilien (extern)',correct:225},{label:'Rückstellungen (extern)',correct:25},{label:'Eigenkapital (extern)',correct:250},{label:'Bilanzsumme (extern)',correct:455}] },
        { id: 59, type: 'calc', q: 'Bilanzgleichung und stille Reserven', tips: ['Stille Reserven = Unterbewertung Aktiven + Überbewertung FK.','Aktiven − FK = EK.'], reveal: [{label:'A – extern',val:'Aktiven = 1000, FK = 400, EK = 600'}], fieldsA: [{label:'Externe Bilanz: Aktiven',correct:1000},{label:'Wertunterschied: Aktiven',correct:-100},{label:'Wertunterschied: FK',correct:40},{label:'Wertunterschied: EK',correct:-140},{label:'Interne Bilanz: FK',correct:360},{label:'Interne Bilanz: EK',correct:740}], fieldsB: [{label:'Interne Bilanz: Aktiven',correct:910},{label:'Interne Bilanz: FK',correct:440},{label:'Wertunterschied: Aktiven',correct:-70},{label:'Wertunterschied: FK',correct:20},{label:'Externe Bilanz: FK',correct:460},{label:'Externe Bilanz: EK',correct:380}] },
        { id: 60, type: 'mc', q: 'Wählen Sie die Antwort: Stille Reserven bei einer AG', tips: ['Mobiliar CHF 1.– = Erinnerungsfranken.','Bildung stiller Reserven verkleinert den ausgewiesenen Gewinn.'], reveal: [{label:'A',val:'Erinnerungsfranken'},{label:'E',val:'Verkleinert ausgewiesenen Gewinn'}], questions: [{id:'a',q:'Mobiliar CHF 1.– ?',correct:2},{id:'b',q:'Was gehört zum EK?',correct:2},{id:'c',q:'Wo keine stillen Reserven?',correct:2},{id:'d',q:'Welche Aussage ist richtig?',correct:3},{id:'e',q:'Warum Selbstfinanzierung?',correct:1}] }
      ],
      learningData: null
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
        { id: 62, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Kostenrechnung', tips: ['Direkte Kosten werden den Kostenträgern direkt zugeordnet.','Herstellkosten = Materialkosten + Fertigungskosten.'], reveal: [{label:'1',val:'Falsch – Einzelkosten direkt den Kostenträgern'}], statements: [{text:'Direkte Kosten werden direkt den Kostenstellen belastet.',correct:'F',reason:'Direkt den Kostenträgern.'},{text:'Sachliche Abgrenzung = Differenz FIBU-Aufwand und BEBU-Kosten.',correct:'R'},{text:'Aus der Kostenstellenrechnung sehen wir das Kostentotal der Produkte.',correct:'F',reason:'Kostenträgerrechnung zeigt das.'},{text:'Kostenstellenrechnung ist Grundlage für Kostenartenrechnung.',correct:'F',reason:'Umgekehrt.'},{text:'Material-GK + Fertigungs-GK = Selbstkosten.',correct:'F',reason:'Selbstkosten = HK + VVGK.'},{text:'Materialkosten + Fertigungskosten = Herstellkosten.',correct:'R'}] },
        { id: 63, type: 'match', q: 'Zuordnung: Kostenart – Kostenstelle – Kostenträger', tips: ['Kostenarten: Gehälter, Zinsen, Versicherungen.','Kostenstellen: Verwaltung, Vertrieb, Kantine.'], reveal: [{label:'Werbekosten',val:'Kostenart'},{label:'Vertrieb',val:'Kostenstelle'}], items: [{label:'Werbekosten',correct:'Kostenart'},{label:'Vertrieb',correct:'Kostenstelle'},{label:'Kaffeemaschinen',correct:'Kostenträger'},{label:'Kantine',correct:'Kostenstelle'},{label:'Verwaltung',correct:'Kostenstelle'},{label:'Gehälter',correct:'Kostenart'},{label:'Kalkulatorische Abschreibungen',correct:'Kostenart'},{label:'Waschmaschinen',correct:'Kostenträger'},{label:'Rohmaterial',correct:'Kostenart'},{label:'Zinsen',correct:'Kostenart'},{label:'Bügeleisen',correct:'Kostenträger'},{label:'Montage',correct:'Kostenstelle'},{label:'Versicherungsprämien',correct:'Kostenart'}] },
        { id: 64, type: 'text', q: 'Einzelfragen zum Thema Kostenrechnung', tips: ['Einzelkosten können einem Kostenträger direkt zugeordnet werden.','Drei Hauptkostenstellen: Material, Fertigung, V+V.'], reveal: [{label:'A',val:'Einzelkosten direkt zurechenbar'},{label:'E',val:'Material, Fertigung, Verwaltung und Vertrieb'}], questions: [{id:'A',q:'Merkmal von Einzelkosten?',keywords:['direkt','zugeordnet','Kostenträger']},{id:'B',q:'Worauf baut die BEBU auf?',keywords:['Finanzbuchhaltung','FIBU']},{id:'C',q:'Was ist eine sachliche Abgrenzung?',keywords:['Differenz','Aufwand','Kosten']},{id:'D',q:'Was besagt die Kostenträgerrechnung?',keywords:['Kosten','Produkt','Stückkosten']},{id:'E',q:'Drei Hauptkostenstellen?',keywords:['Material','Fertigung','Verwaltung']},{id:'F',q:'Was ist eine Bezugsgrösse?',keywords:['Verteilschlüssel','Umlage','Gemeinkosten']}] },
        { id: 65, type: 'calc', q: 'Aufwände in Kosten überführen', tips: ['Geschäftsinhaber bezog Material privat (−30).','Sozialkosten 25% vom bereinigten Lohn.'], reveal: [{label:'Materialaufwand',val:'Abgr: −30, Kosten: 2700'}], rows: [{label:'Materialaufwand',aufwand:2730,abgr:-30,kosten:2700},{label:'Lohnaufwand',aufwand:3250,abgr:-250,kosten:3000},{label:'Sozialaufwand',aufwand:611,abgr:139,kosten:750},{label:'Raumaufwand',aufwand:468,abgr:0,kosten:468},{label:'Zinsaufwand',aufwand:156,abgr:44,kosten:200},{label:'Versicherungsaufwand',aufwand:104,abgr:18,kosten:122},{label:'Energieaufwand',aufwand:143,abgr:0,kosten:143}] },
        { id: 66, type: 'calc', q: 'Betriebsabrechnung der Produkte O und P', tips: ['Unternehmerlohn 180 berücksichtigen.','Zuschlagssätze berechnen.'], reveal: [{label:'Material-GK-Zuschlag',val:'25%'},{label:'Fertigungs-GK-Zuschlag',val:'75%'}], calcs: [{label:'Unternehmerlohn',answer:180},{label:'Material: Kostenstelle Material',answer:200},{label:'Material: Kostenstelle Fertigung',answer:600},{label:'Material-GK-Zuschlag in %',answer:25},{label:'Fertigungs-GK-Zuschlag in %',answer:75}] },
        { id: 67, type: 'calc', q: 'Fahrradhersteller Keller GmbH: Auswertung des BAB', tips: ['Zuschlagssatz = GK / Bezugsgrösse × 100.'], reveal: [{label:'Material-ZS',val:'19.56%'}], calcs: [{label:'Material-ZS in %',answer:19.56},{label:'Rahmenherstellung CHF/h',answer:36.92},{label:'Zubehörproduktion CHF/Löhne',answer:161.62},{label:'Montage CHF/h',answer:25.00},{label:'Entwurf CHF/Stk',answer:13.61},{label:'V.u.V. in % der HK',answer:15.43}] },
        { id: 68, type: 'calc', q: 'Betriebsabrechnung der Race Equipment AG', tips: ['Rohmaterial im Verhältnis 88:176.','Einzellöhne: 2/6 Snowboard, 4/6 Carving Ski.'], reveal: [{label:'Gewinn Snowboards',val:'560'},{label:'Gewinn Carving Skis',val:'680'}], calcs: [{label:'Total Rohmaterial Snowboards',answer:1280},{label:'Total Rohmaterial Carving Skis',answer:2560},{label:'Einzellöhne Snowboards',answer:747},{label:'Einzellöhne Carving Skis',answer:1493},{label:'Gewinn/Verlust Snowboards',answer:560},{label:'Gewinn/Verlust Carving Skis',answer:680}] }
      ],
      learningData: null
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
        { id: 70, type: 'tf', q: 'Richtig oder falsch? Kostenrechnungssysteme', tips: ['Einzelkosten ≠ variable Kosten immer.','DB = Nettoerlös − variable Kosten.'], reveal: [{label:'1',val:'Falsch – Einzelkosten nicht immer = variable Kosten'}], statements: [{text:'Einzelkosten = variable Kosten.',correct:'F',reason:'Nicht identisch.'},{text:'Standardkostenrechnung gehört zu Vollkostensystemen.',correct:'R'},{text:'DB = Selbstkosten − variable Kosten.',correct:'F',reason:'DB = Nettoerlös − variable Kosten.'},{text:'Normalkostenrechnung und Ist-Kostenrechnung unterscheiden sich.',correct:'R'},{text:'Prozesskostenrechnung ist ein Teilkostensystem.',correct:'F',reason:'Ist ein Vollkostensystem.'}] },
        { id: 71, type: 'text', q: 'Umschreibung von Fachbegriffen der Kostenrechnung', tips: ['Variable Kosten ändern sich mit der Beschäftigung.','Fixe Kosten bleiben bei Beschäftigungsänderung gleich.'], reveal: [{label:'A',val:'Kosten, die sich proportional zur Beschäftigung ändern'}], questions: [{id:'a',q:'Variable Kosten?',keywords:['proportional','Beschäftigung','veränderlich']},{id:'b',q:'Fixe Kosten?',keywords:['gleich','unverändert','konstant']},{id:'c',q:'Deckungsbeitrag?',keywords:['Erlös','variable','Kosten']},{id:'d',q:'Break-even?',keywords:['Gewinnschwelle','Nutzschwelle','Nullpunkt']}] },
        { id: 72, type: 'text', q: 'Kostenverläufe aufzeichnen', tips: ['Fixe Kosten: waagrechte Linie.','Variable Kosten: steigende Gerade durch Nullpunkt.'], reveal: [{label:'A',val:'Fixe Kosten = waagrechte Linie'},{label:'B',val:'Variable Kosten = steigende Gerade'}], questions: [{id:'a',q:'Beschreiben Sie den Verlauf fixer Kosten.',keywords:['waagrecht','konstant','horizontal']},{id:'b',q:'Beschreiben Sie den Verlauf variabler Kosten.',keywords:['steigend','proportional','Gerade']}] },
        { id: 73, type: 'calc', q: 'Betriebsabrechnung im Direct Costing', tips: ['Im Direct Costing werden nur variable Kosten den Produkten zugerechnet.','Fixe Kosten werden als Block vom Gesamt-DB abgezogen.'], reveal: [{label:'DB Produkt A',val:'Berechnung: Erlös − variable Kosten'}], calcs: [] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 12: Kalkulationen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch12',
      num: 'Kapitel 12',
      title: 'Kalkulationen: Berechnungen rund um Betriebsleistungen',
      exercises: [
        { id: 74, type: 'fill', q: 'Lückentext: Kalkulationsgrössen', tips: ['Kalkulation = Kostenberechnung pro Produkt/Auftrag.'], reveal: [], answers: [] },
        { id: 75, type: 'tf', q: 'Richtig oder falsch? Kalkulation (Handelsbetrieb)', tips: ['Bruttogewinn = Nettoerlös − Einstandspreis.'], reveal: [], statements: [] },
        { id: 76, type: 'tf', q: 'Richtig oder falsch? Kalkulation (Produktionsbetrieb)', tips: ['Selbstkosten = Herstellkosten + VVGK.'], reveal: [], statements: [] },
        { id: 77, type: 'match', q: 'Zuordnung: Kalkulationsarten', tips: ['Vorkalkulation vor der Produktion, Nachkalkulation danach.'], reveal: [], items: [] },
        { id: 78, type: 'text', q: 'Einzelfragen zum Thema Kalkulation', tips: ['Zuschlagskalkulation: GK werden über Zuschlagssätze verrechnet.'], reveal: [], questions: [] },
        { id: 79, type: 'calc', q: 'Kalkulation: Ergänzung fehlender Grössen', tips: ['Nettoerlös = Bruttoerlös − Erlösminderungen.'], reveal: [], calcs: [] },
        { id: 80, type: 'calc', q: 'Kalkulationsstaffel', tips: ['Material-EK + Material-GK = Materialkosten.','Materialkosten + Fertigungskosten = Herstellkosten.'], reveal: [], calcs: [] },
        { id: 81, type: 'calc', q: 'Durchschnittliche Zuschlagssätze (Gesamtkalkulation)', tips: ['Zuschlagssatz = GK / Bezugsgrösse × 100.'], reveal: [], calcs: [] },
        { id: 82, type: 'calc', q: 'Kalkulation einer Sitzplatzüberdachung', tips: ['Einzelmaterialkosten + Material-GK-Zuschlag = Materialkosten.'], reveal: [], calcs: [] },
        { id: 83, type: 'calc', q: 'Kalkulation Surfbretter', tips: ['Herstellkosten + VVGK = Selbstkosten.','Selbstkosten + Gewinn = Nettoerlös.'], reveal: [], calcs: [] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 13: Entscheidungen auf Teilkostenbasis und Break-even-Analyse
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch13',
      num: 'Kapitel 13',
      title: 'Entscheidungen auf Teilkostenbasis und Break-even-Analyse',
      exercises: [
        { id: 84, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Preisfindung', tips: ['Kurzfristig: Preis muss variable Kosten decken.'], reveal: [], statements: [] },
        { id: 85, type: 'fill', q: 'Lückentext: Prinzip der Nutzschwelle', tips: ['Nutzschwelle = Menge, bei der Erlös = Gesamtkosten.'], reveal: [], answers: [] },
        { id: 86, type: 'tf', q: 'Richtig oder falsch? Break-even-Analyse', tips: ['Am Break-even-Punkt: Gewinn = 0.'], reveal: [], statements: [] },
        { id: 87, type: 'tf', q: 'Richtig oder falsch? Nutzschwellenanalyse', tips: ['Nutzschwellenmenge = Fixkosten / DB pro Stück.'], reveal: [], statements: [] },
        { id: 88, type: 'text', q: 'Nutzschwellendiagramm erläutern', tips: ['Oberhalb der Nutzschwelle: Gewinnzone.','Unterhalb: Verlustzone.'], reveal: [], questions: [] },
        { id: 89, type: 'calc', q: 'Entscheidungen auf Teilkostenbasis (Baumarkt)', tips: ['Zusatzauftrag annehmen, wenn Preis > variable Kosten.'], reveal: [], calcs: [] },
        { id: 90, type: 'calc', q: 'Entscheidungen auf Teilkostenbasis (Bierausschank)', tips: ['DB = Verkaufspreis − variable Kosten pro Stück.'], reveal: [], calcs: [] },
        { id: 91, type: 'calc', q: 'Entscheidungen auf Teilkostenbasis (Grillstand)', tips: ['Nutzschwelle = Fixkosten / DB pro Stück.'], reveal: [], calcs: [] },
        { id: 92, type: 'calc', q: 'Make or buy? (Transportleistungen)', tips: ['Eigenfertigung vs. Fremdbezug vergleichen.'], reveal: [], calcs: [] },
        { id: 93, type: 'calc', q: 'Nutzschwelle eines Handelsbetriebs', tips: ['Nutzschwellenumsatz = Fixkosten / DB-Marge in %.'], reveal: [], calcs: [] },
        { id: 94, type: 'calc', q: 'Verschiedene Berechnungen zu einem Ein-Produkt-Betrieb', tips: ['Gewinn = (Preis − variable Kosten) × Menge − Fixkosten.'], reveal: [], calcs: [] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 14: Finanzielle Kennzahlen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14',
      num: 'Kapitel 14',
      title: 'Finanzielle Kennzahlen',
      exercises: [
        { id: 95, type: 'fill', q: 'Lückentext: Bilanz- und Erfolgsanalyse', tips: ['Kennzahlen setzen Grössen zueinander in Beziehung.'], reveal: [], answers: [] },
        { id: 96, type: 'tf', q: 'Richtig oder falsch? Aussagen zu Kennzahlen', tips: ['Eigenkapitalrentabilität = Gewinn / EK × 100.'], reveal: [], statements: [] },
        { id: 97, type: 'match', q: 'Zuordnung: Bilanz- und Erfolgsanalyse', tips: ['Liquiditätsgrade messen die Zahlungsfähigkeit.'], reveal: [], items: [] },
        { id: 98, type: 'text', q: 'Wie heisst der Fachausdruck?', tips: ['Anlageintensität = AV / Total Aktiven × 100.'], reveal: [], questions: [] },
        { id: 99, type: 'text', q: 'Theoriefragen zu Kennzahlen', tips: ['Leverage-Effekt: FK-Einsatz kann EK-Rendite erhöhen.'], reveal: [], questions: [] },
        { id: 100, type: 'tf', q: 'Richtig oder falsch? Aussagen zur Anlageintensität', tips: ['Hohe Anlageintensität = viel AV, wenig UV.'], reveal: [], statements: [] },
        { id: 101, type: 'calc', q: 'Bilanz- und Erfolgsanalyse der RedTrade AG', tips: ['Berechnen Sie Liquidität, Rentabilität und Deckungsgrade.'], reveal: [], calcs: [] },
        { id: 102, type: 'calc', q: 'Ermittlung der Eigenkapitalrentabilität', tips: ['EK-Rentabilität = Gewinn / EK × 100.'], reveal: [], calcs: [] },
        { id: 103, type: 'calc', q: 'Rechnerische Zusammenhänge im DuPont-Schema', tips: ['ROI = Umsatzrentabilität × Kapitalumschlag.'], reveal: [], calcs: [] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 15: Investitionen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch15',
      num: 'Kapitel 15',
      title: 'Investitionen: Entscheidungen über Mittelbindungen',
      exercises: [
        { id: 104, type: 'calc', q: 'Beurteilung von 3 Anlagen bei 2 Beschäftigungsstufen', tips: ['Gesamtkosten = Fixkosten + variable Kosten × Menge.'], reveal: [], calcs: [] },
        { id: 105, type: 'calc', q: 'Beurteilung von 2 Investitionsalternativen', tips: ['Payback-Periode = Investition / jährlicher Cashflow.'], reveal: [], calcs: [] },
        { id: 106, type: 'calc', q: 'Nutzschwellenberechnung: Beispiel Produktionsbetrieb', tips: ['Nutzschwelle = Fixkosten / DB pro Stück.'], reveal: [], calcs: [] }
      ],
      learningData: null
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KAPITEL 16: Planung, Budgetierung, Controlling, Finanzen
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch16',
      num: 'Kapitel 16',
      title: 'Planung, Budgetierung, Controlling, Finanzen',
      exercises: [
        { id: 107, type: 'fill', q: 'Lückentext: Planung und Budgetkreislauf', tips: ['Budget = zahlenmässiger Ausdruck eines Plans.'], reveal: [], answers: [] },
        { id: 108, type: 'text', q: 'Theoriefragen zum Thema Planung', tips: ['Strategische Planung: langfristig. Operative Planung: kurzfristig.'], reveal: [], questions: [] },
        { id: 109, type: 'calc', q: 'Kostenträgerabrechnung (Produktlinie OP)', tips: ['Soll-Ist-Vergleich zeigt Abweichungen.'], reveal: [], calcs: [] },
        { id: 110, type: 'calc', q: 'Nutzschwellenberechnung mit Gewinnziel', tips: ['Zielmenge = (Fixkosten + Gewinnziel) / DB pro Stück.'], reveal: [], calcs: [] }
      ],
      learningData: null
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
