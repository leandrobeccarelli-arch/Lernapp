/* ══════════════════════════════════════════════════════════
   Finanzielle Kennzahlen: Generator und Formeln
   Quelle: SIMAKOM F+R FiBu, Kap. 13.3 bis 13.6 (Wolfisberg)
   Alle Formeln gegen das Zahlenbeispiel «Beispiel AG» geprüft.
   ══════════════════════════════════════════════════════════ */
(function(){

function makeRng(seed){
  var s = seed % 2147483647;
  if(s <= 0) s += 2147483646;
  return function(){ s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
function between(rng, min, max, step){
  step = step || 1;
  return Math.max(step, Math.round((min + rng()*(max-min))/step)*step);
}

/* ── Abschluss erzeugen: Bilanz, Erfolgsrechnung, Vorjahresangaben ── */
function generateAbschluss(seed){
  var rng = makeRng(seed);

  /* Bilanz: Aktiven frei, Eigenkapital als Restgrösse. */
  var liqM   = between(rng, 20, 90, 5);
  var ford   = between(rng, 40, 150, 5);
  var vorr   = between(rng, 60, 220, 5);
  var mobil  = between(rng, 10, 60, 5);
  var fahrz  = between(rng, 20, 90, 5);
  var immob  = between(rng, 80, 400, 10);

  var UV = liqM + ford + vorr;
  var AV = mobil + fahrz + immob;
  var GV = UV + AV;

  /* Fremdkapital auf 40 bis 70 Prozent der Bilanzsumme, damit das
     Eigenkapital positiv bleibt und die Kennzahlen im üblichen Bereich liegen. */
  var fkAnteil = 0.40 + rng()*0.30;
  var FK = Math.round(GV * fkAnteil / 5) * 5;
  var kfrAnteil = 0.30 + rng()*0.35;
  var kfrFK = Math.round(FK * kfrAnteil / 5) * 5;
  var lfrFK = FK - kfrFK;

  var EK = GV - FK;
  /* Eigenkapital aufteilen: Grundkapital und Zuwachskapital (Reserven). */
  var reserven = Math.max(5, Math.round(EK * (0.08 + rng()*0.22) / 5) * 5);
  var grundkapital = EK - reserven;

  /* Erfolgsrechnung: Ertrag vorgeben, Aufwände als Anteile, Gewinn als Rest. */
  var warenertrag = Math.round(GV * (1.5 + rng()*2.2) / 5) * 5;
  var marge = 0.22 + rng()*0.18;                       /* Handelsmarge */
  var warenaufwand   = Math.round(warenertrag * (1-marge) / 5) * 5;
  var personal       = Math.round(warenertrag * (0.10 + rng()*0.10) / 5) * 5;
  var uebrig         = Math.round(warenertrag * (0.02 + rng()*0.04) / 5) * 5;
  var abschreibungen = Math.round(AV * (0.05 + rng()*0.07) / 5) * 5;
  var finanzaufwand  = Math.max(5, Math.round(FK * (0.02 + rng()*0.03) / 5) * 5);

  /* Gewinn als Restgrösse; bei Verlust den Warenaufwand senken. */
  var summeAufwand = warenaufwand + personal + uebrig + abschreibungen + finanzaufwand;
  var gewinn = warenertrag - summeAufwand;
  var minGewinn = Math.max(5, Math.round(warenertrag * 0.01 / 5) * 5);
  if(gewinn < minGewinn){
    warenaufwand -= (minGewinn - gewinn);
    warenaufwand = Math.round(warenaufwand / 5) * 5;
    summeAufwand = warenaufwand + personal + uebrig + abschreibungen + finanzaufwand;
    gewinn = warenertrag - summeAufwand;
  }

  /* Vorjahresangaben für die Durchschnittswerte. */
  var vjVorr    = Math.max(5, Math.round(vorr  * (0.80 + rng()*0.35) / 5) * 5);
  var vjFord    = Math.max(5, Math.round(ford  * (0.80 + rng()*0.35) / 5) * 5);
  var vjVerbind = Math.max(5, Math.round(kfrFK * (0.80 + rng()*0.35) / 5) * 5);
  var vjEK      = Math.max(5, EK - gewinn);
  var vjGK      = Math.max(5, GV - gewinn);

  /* Liquide Mittel auf Kasse, Post und Bank verteilen. */
  var kasse = Math.max(5, Math.round(liqM * (0.08 + rng()*0.12) / 5) * 5);
  var post  = Math.max(5, Math.round(liqM * (0.20 + rng()*0.20) / 5) * 5);
  var bank  = liqM - kasse - post;
  if(bank < 5){ bank = 5; post = liqM - kasse - bank; }

  /* Kurzfristiges Fremdkapital auf zwei Positionen verteilen. */
  var verbindl = Math.max(5, Math.round(kfrFK * (0.60 + rng()*0.30) / 5) * 5);
  var uebrKfr  = kfrFK - verbindl;

  /* Langfristiges Fremdkapital auf Darlehen und Hypothek verteilen. */
  var hypothek = lfrFK > 40 ? Math.round(lfrFK * (0.45 + rng()*0.35) / 5) * 5 : 0;
  var darlehen = lfrFK - hypothek;

  /* Einzelkonten mit Nummern aus dem Schweizer Schul-Kontenrahmen KMU
     (Auszug für die kaufmännische Grundbildung, Stand 27.06.2024).
     Die Nummernfolge entspricht im Umlaufvermögen der Liquiditätsfolge,
     darum ist ord identisch mit der Reihenfolge der Kontonummern. */
  var konten = [
    {nr:'1000', name:'Kasse',                                    betrag:kasse,        gruppe:'uv',  ord:1},
    {nr:'1010', name:'Post',                                     betrag:post,         gruppe:'uv',  ord:2},
    {nr:'1020', name:'Bankguthaben',                             betrag:bank,         gruppe:'uv',  ord:3},
    {nr:'1100', name:'Forderungen aus Lieferungen und Leistungen',betrag:ford,        gruppe:'uv',  ord:4},
    {nr:'1200', name:'Handelswaren',                             betrag:vorr,         gruppe:'uv',  ord:5},
    {nr:'1510', name:'Mobiliar und Einrichtungen',               betrag:mobil,        gruppe:'av',  ord:1},
    {nr:'1530', name:'Fahrzeuge',                                betrag:fahrz,        gruppe:'av',  ord:2},
    {nr:'1600', name:'Immobilien',                               betrag:immob,        gruppe:'av',  ord:3},
    {nr:'2000', name:'Verbindlichkeiten aus Lieferungen und Leistungen', betrag:verbindl, gruppe:'kfk', ord:1},
    {nr:'2300', name:'Passive Rechnungsabgrenzung',              betrag:uebrKfr,      gruppe:'kfk', ord:2},
    {nr:'2450', name:'Darlehen',                                 betrag:darlehen,     gruppe:'lfk', ord:1},
    {nr:'2451', name:'Hypotheken',                               betrag:hypothek,     gruppe:'lfk', ord:2},
    {nr:'2800', name:'Aktienkapital',                            betrag:grundkapital, gruppe:'ek',  ord:1},
    {nr:'2950', name:'Gesetzliche Gewinnreserve',                betrag:reserven,     gruppe:'ek',  ord:2}
  ].filter(function(k){ return k.betrag > 0; })
   .map(function(k){ return Object.assign({}, k, {label:k.nr+' '+k.name}); });

  /* Konten der Erfolgsrechnung. */
  var erKonten = [
    {nr:'4200', name:'Handelswarenaufwand',          betrag:warenaufwand,   gruppe:'aufwand', ord:1},
    {nr:'5000', name:'Lohnaufwand',                  betrag:personal,       gruppe:'aufwand', ord:2},
    {nr:'6700', name:'Sonstiger betrieblicher Aufwand', betrag:uebrig,      gruppe:'aufwand', ord:3},
    {nr:'6800', name:'Abschreibungen',               betrag:abschreibungen, gruppe:'aufwand', ord:4},
    {nr:'6900', name:'Finanzaufwand',                betrag:finanzaufwand,  gruppe:'aufwand', ord:5},
    {nr:'3200', name:'Handelserlöse',                betrag:warenertrag,    gruppe:'ertrag',  ord:1}
  ].filter(function(k){ return k.betrag > 0; })
   .map(function(k){ return Object.assign({}, k, {label:k.nr+' '+k.name}); });

  return {
    konten:konten, erKonten:erKonten,
    b:{liqM:liqM, ford:ford, vorr:vorr, mobil:mobil, fahrz:fahrz, immob:immob,
       kasse:kasse, post:post, bank:bank, verbindl:verbindl, uebrKfr:uebrKfr,
       darlehen:darlehen, hypothek:hypothek,
       kfrFK:kfrFK, lfrFK:lfrFK, grundkapital:grundkapital, reserven:reserven},
    er:{warenaufwand:warenaufwand, personal:personal, uebrig:uebrig,
        abschreibungen:abschreibungen, finanzaufwand:finanzaufwand,
        warenertrag:warenertrag, gewinn:gewinn},
    vj:{vorr:vjVorr, ford:vjFord, verbind:vjVerbind, ek:vjEK, gk:vjGK},
    /* Abgeleitete Grössen, damit die Formeln lesbar bleiben. */
    d:abgeleitet({liqM:liqM, ford:ford, vorr:vorr, mobil:mobil, fahrz:fahrz, immob:immob,
                  kfrFK:kfrFK, lfrFK:lfrFK, grundkapital:grundkapital, reserven:reserven},
                 {warenaufwand:warenaufwand, personal:personal, uebrig:uebrig,
                  abschreibungen:abschreibungen, finanzaufwand:finanzaufwand,
                  warenertrag:warenertrag, gewinn:gewinn},
                 {vorr:vjVorr, ford:vjFord, verbind:vjVerbind, ek:vjEK, gk:vjGK})
  };
}

function abgeleitet(b, er, vj){
  var UV = b.liqM + b.ford + b.vorr;
  var AV = b.mobil + b.fahrz + b.immob;
  var GV = UV + AV;
  var FK = b.kfrFK + b.lfrFK;
  var EK = b.grundkapital + b.reserven;
  var gesAufwand = er.warenaufwand + er.personal + er.uebrig
                 + er.abschreibungen + er.finanzaufwand;
  return {
    UV:UV, AV:AV, GV:GV, GK:GV,
    kfrFK:b.kfrFK, lfrFK:b.lfrFK, FK:FK, EK:EK,
    liqM:b.liqM, ford:b.ford, vorr:b.vorr,
    grundkapital:b.grundkapital, reserven:b.reserven,
    warenertrag:er.warenertrag, warenaufwand:er.warenaufwand,
    personal:er.personal, uebrig:er.uebrig,
    abschreibungen:er.abschreibungen, finanzaufwand:er.finanzaufwand,
    gesAufwand:gesAufwand, gewinn:er.gewinn,
    bruttogewinn: er.warenertrag - er.warenaufwand,
    cashflow: er.gewinn + er.abschreibungen,
    /* Krediteinkäufe: Warenaufwand = AB + Einkäufe - EB  →  Einkäufe = WA + EB - AB */
    krediteinkaeufe: er.warenaufwand + b.vorr - vj.vorr,
    oLager:  (vj.vorr + b.vorr)/2,
    oDebi:   (vj.ford + b.ford)/2,
    oKredi:  (vj.verbind + b.kfrFK)/2,
    oEK:     (vj.ek + EK)/2,
    oGK:     (vj.gk + GV)/2,
    effektivverschuldung: FK - b.liqM - b.ford
  };
}

function fmt(v, dez){
  return v.toLocaleString('de-CH', {minimumFractionDigits:dez, maximumFractionDigits:dez});
}

/* ── Kennzahlen-Katalog ────────────────────────────────────
   einheit: '%', 'mal', 'Tage', 'CHF'
   dez:     Dezimalstellen für Prüfung und Anzeige
   calc:    Berechnung aus den abgeleiteten Grössen
   weg:     Lösungsweg mit eingesetzten Zahlen
   ────────────────────────────────────────────────────────── */
var KENNZAHLEN = [
  /* (1) Vermögensstruktur */
  {key:'int-uv', gruppe:'Vermögensstruktur', name:'Intensität Umlaufvermögen',
   formel:'Umlaufvermögen · 100 / Gesamtvermögen', einheit:'%', dez:1,
   calc:d=>d.UV*100/d.GV,
   weg:d=>fmt(d.UV,0)+' · 100 / '+fmt(d.GV,0)},

  {key:'int-av', gruppe:'Vermögensstruktur', name:'Intensität Anlagevermögen',
   hinweis:'auch Anlageintensität oder Immobilisierungsgrad',
   formel:'Anlagevermögen · 100 / Gesamtvermögen', einheit:'%', dez:1,
   calc:d=>d.AV*100/d.GV,
   weg:d=>fmt(d.AV,0)+' · 100 / '+fmt(d.GV,0)},

  /* (2) Finanzierungsstruktur */
  {key:'ffg', gruppe:'Finanzierungsstruktur', name:'Fremdfinanzierungsgrad',
   hinweis:'auch Verschuldungsgrad',
   formel:'Fremdkapital · 100 / Gesamtkapital', einheit:'%', dez:1,
   calc:d=>d.FK*100/d.GK,
   weg:d=>fmt(d.FK,0)+' · 100 / '+fmt(d.GK,0)},

  {key:'efg', gruppe:'Finanzierungsstruktur', name:'Eigenfinanzierungsgrad',
   hinweis:'auch Eigenkapitalquote',
   formel:'Eigenkapital · 100 / Gesamtkapital', einheit:'%', dez:1,
   calc:d=>d.EK*100/d.GK,
   weg:d=>fmt(d.EK,0)+' · 100 / '+fmt(d.GK,0)},

  {key:'sfg', gruppe:'Finanzierungsstruktur', name:'Selbstfinanzierungsgrad',
   formel:'Zuwachskapital · 100 / Grundkapital', einheit:'%', dez:1,
   calc:d=>d.reserven*100/d.grundkapital,
   weg:d=>fmt(d.reserven,0)+' · 100 / '+fmt(d.grundkapital,0)},

  /* (3) Liquidität */
  {key:'liq1', gruppe:'Liquidität', name:'Liquiditätsgrad 1',
   hinweis:'auch Cash Ratio',
   formel:'liquide Mittel · 100 / kurzfristiges Fremdkapital', einheit:'%', dez:1,
   calc:d=>d.liqM*100/d.kfrFK,
   weg:d=>fmt(d.liqM,0)+' · 100 / '+fmt(d.kfrFK,0)},

  {key:'liq2', gruppe:'Liquidität', name:'Liquiditätsgrad 2',
   hinweis:'auch Quick Ratio',
   formel:'(liquide Mittel + kurzfristige Forderungen) · 100 / kurzfristiges Fremdkapital',
   einheit:'%', dez:1,
   calc:d=>(d.liqM+d.ford)*100/d.kfrFK,
   weg:d=>'('+fmt(d.liqM,0)+' + '+fmt(d.ford,0)+') · 100 / '+fmt(d.kfrFK,0)},

  {key:'liq3', gruppe:'Liquidität', name:'Liquiditätsgrad 3',
   hinweis:'auch Current Ratio',
   formel:'Umlaufvermögen · 100 / kurzfristiges Fremdkapital', einheit:'%', dez:1,
   calc:d=>d.UV*100/d.kfrFK,
   weg:d=>fmt(d.UV,0)+' · 100 / '+fmt(d.kfrFK,0)},

  /* (4) Deckungsverhältnisse */
  {key:'adg1', gruppe:'Deckungsverhältnisse', name:'Anlagedeckungsgrad 1',
   formel:'Eigenkapital · 100 / Anlagevermögen', einheit:'%', dez:1,
   calc:d=>d.EK*100/d.AV,
   weg:d=>fmt(d.EK,0)+' · 100 / '+fmt(d.AV,0)},

  {key:'adg2', gruppe:'Deckungsverhältnisse', name:'Anlagedeckungsgrad 2',
   formel:'(Eigenkapital + langfristiges Fremdkapital) · 100 / Anlagevermögen',
   einheit:'%', dez:1,
   calc:d=>(d.EK+d.lfrFK)*100/d.AV,
   weg:d=>'('+fmt(d.EK,0)+' + '+fmt(d.lfrFK,0)+') · 100 / '+fmt(d.AV,0)},

  /* Struktur der Erfolgsrechnung */
  {key:'aufw-personal', gruppe:'Aufwandstruktur', name:'Aufwandstruktur Personalaufwand',
   formel:'Personalaufwand · 100 / Gesamtaufwand', einheit:'%', dez:1,
   calc:d=>d.personal*100/d.gesAufwand,
   weg:d=>fmt(d.personal,0)+' · 100 / '+fmt(d.gesAufwand,0)},

  {key:'aufw-waren', gruppe:'Aufwandstruktur', name:'Aufwandstruktur Warenaufwand',
   formel:'Warenaufwand · 100 / Gesamtaufwand', einheit:'%', dez:1,
   calc:d=>d.warenaufwand*100/d.gesAufwand,
   weg:d=>fmt(d.warenaufwand,0)+' · 100 / '+fmt(d.gesAufwand,0)},

  /* Wirtschaftlichkeit */
  {key:'wirtsch', gruppe:'Wirtschaftlichkeit', name:'Wirtschaftlichkeit innerhalb der ER',
   hinweis:'Warenertrag im Verhältnis zum Warenaufwand',
   formel:'Ertrag · 100 / Aufwand', einheit:'%', dez:1,
   calc:d=>d.warenertrag*100/d.warenaufwand,
   weg:d=>fmt(d.warenertrag,0)+' · 100 / '+fmt(d.warenaufwand,0)},

  /* Erfolgskennzahlen */
  {key:'bg', gruppe:'Erfolg', name:'Bruttogewinn',
   formel:'Warenertrag − Warenaufwand', einheit:'CHF', dez:0,
   calc:d=>d.bruttogewinn,
   weg:d=>fmt(d.warenertrag,0)+' − '+fmt(d.warenaufwand,0)},

  {key:'unternehmenserfolg', gruppe:'Erfolg', name:'Unternehmenserfolg',
   formel:'Gesamtertrag − Gesamtaufwand', einheit:'CHF', dez:0,
   calc:d=>d.warenertrag-d.gesAufwand,
   weg:d=>fmt(d.warenertrag,0)+' − '+fmt(d.gesAufwand,0)},

  {key:'bg-zuschlag', gruppe:'Erfolg', name:'Bruttogewinn-Zuschlag',
   hinweis:'auch Bruttogewinn-Satz',
   formel:'Bruttogewinn · 100 / Warenaufwand', einheit:'%', dez:2,
   calc:d=>d.bruttogewinn*100/d.warenaufwand,
   weg:d=>fmt(d.bruttogewinn,0)+' · 100 / '+fmt(d.warenaufwand,0)},

  {key:'handelsmarge', gruppe:'Erfolg', name:'Handelsmarge',
   hinweis:'auch Bruttogewinn-Quote oder Bruttogewinn-Marge',
   formel:'Bruttogewinn · 100 / Warenertrag', einheit:'%', dez:2,
   calc:d=>d.bruttogewinn*100/d.warenertrag,
   weg:d=>fmt(d.bruttogewinn,0)+' · 100 / '+fmt(d.warenertrag,0)},

  {key:'reingewinnmarge', gruppe:'Erfolg', name:'Reingewinnmarge',
   hinweis:'auch Umsatzrentabilität',
   formel:'Unternehmensgewinn · 100 / Umsatz', einheit:'%', dez:2,
   calc:d=>d.gewinn*100/d.warenertrag,
   weg:d=>fmt(d.gewinn,0)+' · 100 / '+fmt(d.warenertrag,0)},

  /* Aktivität Lager */
  {key:'o-lager', gruppe:'Lager', name:'Durchschnittlicher Lagerbestand',
   formel:'(Anfangsbestand + Endbestand) / 2', einheit:'CHF', dez:1,
   calc:d=>d.oLager,
   weg:(d,a)=>'('+fmt(a.vj.vorr,0)+' + '+fmt(d.vorr,0)+') / 2'},

  {key:'lagerumschlag', gruppe:'Lager', name:'Lagerumschlag',
   formel:'Warenaufwand / durchschnittlicher Lagerbestand', einheit:'mal', dez:2,
   calc:d=>d.warenaufwand/d.oLager,
   weg:d=>fmt(d.warenaufwand,0)+' / '+fmt(d.oLager,1)},

  {key:'lagerdauer', gruppe:'Lager', name:'Durchschnittliche Lagerdauer',
   formel:'360 Tage / Lagerumschlag', einheit:'Tage', dez:1,
   calc:d=>360/(d.warenaufwand/d.oLager),
   weg:d=>'360 / '+fmt(d.warenaufwand/d.oLager,2)},

  /* Aktivität Debitoren */
  {key:'o-debi', gruppe:'Debitoren', name:'Durchschnittlicher Debitorenbestand',
   formel:'(Anfangsbestand + Endbestand) / 2', einheit:'CHF', dez:1,
   calc:d=>d.oDebi,
   weg:(d,a)=>'('+fmt(a.vj.ford,0)+' + '+fmt(d.ford,0)+') / 2'},

  {key:'debiumschlag', gruppe:'Debitoren', name:'Debitorenumschlag',
   hinweis:'alle Warenverkäufe gelten als Kreditverkäufe',
   formel:'Kreditverkäufe Waren / durchschnittlicher Debitorenbestand',
   einheit:'mal', dez:2,
   calc:d=>d.warenertrag/d.oDebi,
   weg:d=>fmt(d.warenertrag,0)+' / '+fmt(d.oDebi,1)},

  {key:'debifrist', gruppe:'Debitoren', name:'Durchschnittliche Debitorenfrist',
   formel:'360 Tage / Debitorenumschlag', einheit:'Tage', dez:1,
   calc:d=>360/(d.warenertrag/d.oDebi),
   weg:d=>'360 / '+fmt(d.warenertrag/d.oDebi,2)},

  /* Aktivität Kreditoren */
  {key:'krediteinkaeufe', gruppe:'Kreditoren', name:'Krediteinkäufe Waren',
   hinweis:'Warenaufwand = Anfangsbestand + Einkäufe − Endbestand',
   formel:'Warenaufwand + Endbestand − Anfangsbestand', einheit:'CHF', dez:0,
   calc:d=>d.krediteinkaeufe,
   weg:(d,a)=>fmt(d.warenaufwand,0)+' + '+fmt(d.vorr,0)+' − '+fmt(a.vj.vorr,0)},

  {key:'krediumschlag', gruppe:'Kreditoren', name:'Kreditorenumschlag',
   formel:'Krediteinkäufe Waren / durchschnittlicher Kreditorenbestand',
   einheit:'mal', dez:2,
   calc:d=>d.krediteinkaeufe/d.oKredi,
   weg:d=>fmt(d.krediteinkaeufe,0)+' / '+fmt(d.oKredi,1)},

  {key:'kredifrist', gruppe:'Kreditoren', name:'Durchschnittliche Kreditorenfrist',
   formel:'360 Tage / Kreditorenumschlag', einheit:'Tage', dez:1,
   calc:d=>360/(d.krediteinkaeufe/d.oKredi),
   weg:d=>'360 / '+fmt(d.krediteinkaeufe/d.oKredi,2)},

  /* Rentabilität */
  {key:'roi', gruppe:'Rentabilität', name:'Rentabilität des Kapitals (ROI)',
   formel:'Gewinn · 100 / durchschnittliches Kapital', einheit:'%', dez:2,
   calc:d=>d.gewinn*100/d.oGK,
   weg:(d,a)=>fmt(d.gewinn,0)+' · 100 / (('+fmt(a.vj.gk,0)+' + '+fmt(d.GK,0)+') / 2)'},

  {key:'roe', gruppe:'Rentabilität', name:'Rentabilität des Eigenkapitals (ROE)',
   formel:'Gewinn · 100 / durchschnittliches Eigenkapital', einheit:'%', dez:2,
   calc:d=>d.gewinn*100/d.oEK,
   weg:(d,a)=>fmt(d.gewinn,0)+' · 100 / (('+fmt(a.vj.ek,0)+' + '+fmt(d.EK,0)+') / 2)'},

  {key:'roa', gruppe:'Rentabilität', name:'Rentabilität des Gesamtkapitals (ROA)',
   hinweis:'Rückfluss inklusive Fremdkapitalzinsen',
   formel:'(Gewinn + Fremdkapitalzinsen) · 100 / durchschnittliches Gesamtkapital',
   einheit:'%', dez:2,
   calc:d=>(d.gewinn+d.finanzaufwand)*100/d.oGK,
   weg:(d,a)=>'('+fmt(d.gewinn,0)+' + '+fmt(d.finanzaufwand,0)+') · 100 / (('
              +fmt(a.vj.gk,0)+' + '+fmt(d.GK,0)+') / 2)'},

  /* Cashflow und Verschuldung */
  {key:'cashflow', gruppe:'Cashflow', name:'Cashflow',
   hinweis:'vereinfacht: Gewinn plus Abschreibungen',
   formel:'Gewinn + Abschreibungen', einheit:'CHF', dez:0,
   calc:d=>d.cashflow,
   weg:d=>fmt(d.gewinn,0)+' + '+fmt(d.abschreibungen,0)},

  {key:'cf-umsatzrate', gruppe:'Cashflow', name:'Cashflow-Umsatzrate',
   formel:'Cashflow · 100 / Umsatz', einheit:'%', dez:2,
   calc:d=>d.cashflow*100/d.warenertrag,
   weg:d=>fmt(d.cashflow,0)+' · 100 / '+fmt(d.warenertrag,0)},

  {key:'effektivverschuldung', gruppe:'Cashflow', name:'Effektivverschuldung',
   formel:'Fremdkapital − liquide Mittel − Forderungen', einheit:'CHF', dez:0,
   calc:d=>d.effektivverschuldung,
   weg:d=>fmt(d.FK,0)+' − '+fmt(d.liqM,0)+' − '+fmt(d.ford,0)},

  {key:'verschuldungsfaktor', gruppe:'Cashflow', name:'Verschuldungsfaktor',
   hinweis:'Ergebnis in Jahren',
   formel:'Effektivverschuldung / Cashflow', einheit:'Jahre', dez:2,
   calc:d=>d.effektivverschuldung/d.cashflow,
   weg:d=>fmt(d.effektivverschuldung,0)+' / '+fmt(d.cashflow,0)}
];

window.KENNZAHLEN_MODUL = {
  generateAbschluss: generateAbschluss,
  abgeleitet: abgeleitet,
  KENNZAHLEN: KENNZAHLEN,
  fmt: fmt
};

})();
