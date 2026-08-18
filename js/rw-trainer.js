/* ══════════════════════════════════════════════════════════
   Rechnungswesen-Trainer: Bilanz, Erfolgsrechnung, Kennzahlen
   Aufgaben werden zufällig erzeugt, der Vorrat ist unbegrenzt.
   ══════════════════════════════════════════════════════════ */
(function(){

var e = React.createElement;
var useState = React.useState, useEffect = React.useEffect;
var M = window.KENNZAHLEN_MODUL;

/* ── Hilfsfunktionen ─────────────────────────────────────── */
function chf(v, dez){
  dez = dez || 0;
  return v.toLocaleString('de-CH', {minimumFractionDigits:dez, maximumFractionDigits:dez});
}

/* Nimmt Eingaben wie «12'500», «12500.50» oder «12 500» an. */
function parseZahl(s){
  if(s === null || s === undefined) return NaN;
  var t = String(s).replace(/['\s’]/g, '').replace(',', '.');
  if(t === '') return NaN;
  if(!/^-?\d+(\.\d+)?$/.test(t)) return NaN;
  return parseFloat(t);
}

function mischen(rng, arr){
  var a = arr.slice();
  for(var i=a.length-1;i>0;i--){
    var j = Math.floor(rng()*(i+1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function zufallsRng(){
  var s = Math.floor(Math.random()*2147483000)+1;
  return function(){ s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

/* ── Angabentabelle: unsortierte Konten mit Beträgen ─────── */
function Angaben(props){
  return e('div',{className:'rw-angaben'},
    e('div',{className:'rw-angaben-title'}, props.titel),
    e('table',{className:'rw-angaben-table'},
      e('tbody',null,
        props.konten.map(function(k,i){
          return e('tr',{key:i},
            e('td',null, k.label || k.name),
            e('td',{className:'rw-num'}, chf(k.betrag))
          );
        })
      )
    ),
    props.hinweis ? e('div',{className:'rw-angaben-hint'}, props.hinweis) : null
  );
}

/* ══════════════════════════════════════════════════════════
   Modus 1: Bilanz selbst erstellen
   ══════════════════════════════════════════════════════════ */
var BILANZ_GRUPPEN = [
  {key:'uv',  seite:'aktiven',  titel:'Umlaufvermögen',          summe:'Total Umlaufvermögen'},
  {key:'av',  seite:'aktiven',  titel:'Anlagevermögen',          summe:'Total Anlagevermögen'},
  {key:'kfk', seite:'passiven', titel:'Kurzfristiges Fremdkapital', summe:'Total kurzfristiges Fremdkapital'},
  {key:'lfk', seite:'passiven', titel:'Langfristiges Fremdkapital', summe:'Total langfristiges Fremdkapital'},
  {key:'ek',  seite:'passiven', titel:'Eigenkapital',            summe:'Total Eigenkapital'}
];

function BilanzAufgabe(props){
  var st = useState(null), aufgabe = st[0], setAufgabe = st[1];
  var st2 = useState({}), eingaben = st2[0], setEingaben = st2[1];
  var st3 = useState(null), result = st3[0], setResult = st3[1];
  var st4 = useState(false), loesung = st4[0], setLoesung = st4[1];

  useEffect(function(){ neu(); }, []);

  function neu(){
    var a = M.generateAbschluss(Math.floor(Math.random()*2147483000)+1);
    var rng = zufallsRng();
    a.gemischt = mischen(rng, a.konten);
    setAufgabe(a);
    var leer = {};
    BILANZ_GRUPPEN.forEach(function(g){
      var n = a.konten.filter(function(k){return k.gruppe===g.key}).length;
      leer[g.key] = [];
      for(var i=0;i<n;i++) leer[g.key].push({konto:'', betrag:''});
      leer['summe-'+g.key] = '';
    });
    leer['total-aktiven'] = '';
    leer['total-passiven'] = '';
    setEingaben(leer);
    setResult(null);
    setLoesung(false);
  }

  function setZeile(gruppe, idx, feld, wert){
    setEingaben(function(prev){
      var kopie = Object.assign({}, prev);
      kopie[gruppe] = prev[gruppe].map(function(z,i){
        return i===idx ? Object.assign({}, z, {[feld]:wert}) : z;
      });
      return kopie;
    });
    setResult(null);
  }
  function setSumme(key, wert){
    setEingaben(function(prev){
      var kopie = Object.assign({}, prev);
      kopie[key] = wert;
      return kopie;
    });
    setResult(null);
  }

  function pruefen(){
    var fehler = [];
    var soll = aufgabe.konten;

    BILANZ_GRUPPEN.forEach(function(g){
      var sollGruppe = soll.filter(function(k){return k.gruppe===g.key})
                           .sort(function(a,b){return a.ord-b.ord});
      var ein = eingaben[g.key] || [];
      sollGruppe.forEach(function(sk, i){
        var z = ein[i] || {konto:'', betrag:''};
        if(z.konto !== sk.label){
          fehler.push({ort:g.titel+', Zeile '+(i+1), text:'falsches Konto'});
        } else if(parseZahl(z.betrag) !== sk.betrag){
          fehler.push({ort:g.titel+', Zeile '+(i+1), text:'Betrag stimmt nicht'});
        }
      });
      var sollSumme = sollGruppe.reduce(function(s,k){return s+k.betrag},0);
      if(parseZahl(eingaben['summe-'+g.key]) !== sollSumme){
        fehler.push({ort:g.summe, text:'Zwischensumme stimmt nicht'});
      }
    });

    if(parseZahl(eingaben['total-aktiven']) !== aufgabe.d.GV){
      fehler.push({ort:'Total Aktiven', text:'Bilanzsumme stimmt nicht'});
    }
    if(parseZahl(eingaben['total-passiven']) !== aufgabe.d.GV){
      fehler.push({ort:'Total Passiven', text:'Bilanzsumme stimmt nicht'});
    }

    setResult({ok:fehler.length===0, fehler:fehler});
    if(fehler.length===0 && props.onGeloest) props.onGeloest();
  }

  if(!aufgabe) return null;

  /* Nach Kontonummer sortiert, wie im Kontenrahmen. */
  var kontoOptionen = aufgabe.konten.map(function(k){return k.label}).sort();

  function gruppeBlock(g){
    var sollGruppe = aufgabe.konten.filter(function(k){return k.gruppe===g.key})
                                   .sort(function(a,b){return a.ord-b.ord});
    var ein = eingaben[g.key] || [];
    return e('div',{key:g.key, className:'rw-fgroup'},
      e('div',{className:'rw-fgroup-title'}, g.titel),
      ein.map(function(z, i){
        var fehlerHier = result && !result.ok && result.fehler.some(function(f){
          return f.ort === g.titel+', Zeile '+(i+1);
        });
        return e('div',{key:i, className:'rw-frow'+(fehlerHier?' rw-frow-err':'')},
          e('select',{className:'rw-select', value:z.konto,
            onChange:function(ev){setZeile(g.key, i, 'konto', ev.target.value)}},
            e('option',{value:''},'Konto wählen'),
            kontoOptionen.map(function(n){return e('option',{key:n, value:n}, n)})
          ),
          e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
            placeholder:'Betrag', value:z.betrag,
            onChange:function(ev){setZeile(g.key, i, 'betrag', ev.target.value)}})
        );
      }),
      e('div',{className:'rw-frow rw-frow-sum'
          +(result && !result.ok && result.fehler.some(function(f){return f.ort===g.summe})?' rw-frow-err':'')},
        e('div',{className:'rw-frow-label'}, g.summe),
        e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
          placeholder:'Summe', value:eingaben['summe-'+g.key]||'',
          onChange:function(ev){setSumme('summe-'+g.key, ev.target.value)}})
      ),
      loesung ? e('div',{className:'rw-loesung'},
        sollGruppe.map(function(k,i){
          return e('div',{key:i}, k.label+': '+chf(k.betrag));
        }),
        e('div',{className:'rw-loesung-sum'},
          g.summe+': '+chf(sollGruppe.reduce(function(s,k){return s+k.betrag},0)))
      ) : null
    );
  }

  return e('div',null,
    e(Angaben,{titel:'Angaben: Saldenliste per 31. Dezember',
      konten:aufgabe.gemischt,
      hinweis:'Ordne jedes Konto der richtigen Gruppe zu. Innerhalb jeder Gruppe gilt die Reihenfolge der Kontonummern, im Umlaufvermögen entspricht sie der Liquidität: 1000 Kasse, 1010 Post, 1020 Bankguthaben, 1100 Forderungen, 1200 Handelswaren.'}),

    e('div',{className:'rw-form-grid'},
      e('div',{className:'rw-form-side'},
        e('div',{className:'rw-form-side-title'},'Aktiven'),
        BILANZ_GRUPPEN.filter(function(g){return g.seite==='aktiven'}).map(gruppeBlock),
        e('div',{className:'rw-frow rw-frow-total'
            +(result && !result.ok && result.fehler.some(function(f){return f.ort==='Total Aktiven'})?' rw-frow-err':'')},
          e('div',{className:'rw-frow-label'},'Total Aktiven'),
          e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
            placeholder:'Bilanzsumme', value:eingaben['total-aktiven']||'',
            onChange:function(ev){setSumme('total-aktiven', ev.target.value)}})
        )
      ),
      e('div',{className:'rw-form-side'},
        e('div',{className:'rw-form-side-title'},'Passiven'),
        BILANZ_GRUPPEN.filter(function(g){return g.seite==='passiven'}).map(gruppeBlock),
        e('div',{className:'rw-frow rw-frow-total'
            +(result && !result.ok && result.fehler.some(function(f){return f.ort==='Total Passiven'})?' rw-frow-err':'')},
          e('div',{className:'rw-frow-label'},'Total Passiven'),
          e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
            placeholder:'Bilanzsumme', value:eingaben['total-passiven']||'',
            onChange:function(ev){setSumme('total-passiven', ev.target.value)}})
        )
      )
    ),

    result ? e('div',{className:'rw-feedback '+(result.ok?'ok':'err')},
      result.ok
        ? e('div',null,
            e('div',{className:'rw-fb-title'},'Bilanz korrekt erstellt'),
            e('div',{className:'rw-fb-text'},'Bilanzsumme CHF '+chf(aufgabe.d.GV)
              +'. Gliederung, Beträge und alle Summen stimmen.'))
        : e('div',null,
            e('div',{className:'rw-fb-title'}, result.fehler.length+' Punkt(e) stimmen noch nicht'),
            e('ul',{className:'rw-fb-list'},
              result.fehler.slice(0,10).map(function(f,i){
                return e('li',{key:i}, f.ort+': '+f.text);
              })
            ),
            result.fehler.length>10
              ? e('div',{className:'rw-fb-text'},'sowie '+(result.fehler.length-10)+' weitere')
              : null)
    ) : null,

    e('div',{className:'rw-actions'},
      e('button',{className:'rw-btn rw-btn-primary', onClick:pruefen},'Bilanz prüfen'),
      e('button',{className:'rw-btn rw-btn-ghost', onClick:function(){setLoesung(!loesung)}},
        loesung?'Lösung ausblenden':'Lösung zeigen'),
      e('button',{className:'rw-btn rw-btn-ghost', onClick:neu},'Neue Aufgabe')
    )
  );
}

/* ══════════════════════════════════════════════════════════
   Modus 2: Erfolgsrechnung selbst erstellen
   ══════════════════════════════════════════════════════════ */
function ErAufgabe(props){
  var st = useState(null), aufgabe = st[0], setAufgabe = st[1];
  var st2 = useState(null), ein = st2[0], setEin = st2[1];
  var st3 = useState(null), result = st3[0], setResult = st3[1];
  var st4 = useState(false), loesung = st4[0], setLoesung = st4[1];

  useEffect(function(){ neu(); }, []);

  function neu(){
    var a = M.generateAbschluss(Math.floor(Math.random()*2147483000)+1);
    var rng = zufallsRng();
    a.gemischt = mischen(rng, a.erKonten);
    setAufgabe(a);
    var nAufwand = a.erKonten.filter(function(k){return k.gruppe==='aufwand'}).length;
    var nErtrag  = a.erKonten.filter(function(k){return k.gruppe==='ertrag'}).length;
    var leer = {aufwand:[], ertrag:[], gewinn:'', totalAufwand:'', totalErtrag:''};
    for(var i=0;i<nAufwand;i++) leer.aufwand.push({konto:'', betrag:''});
    for(var j=0;j<nErtrag;j++)  leer.ertrag.push({konto:'', betrag:''});
    setEin(leer);
    setResult(null);
    setLoesung(false);
  }

  function setZeile(seite, idx, feld, wert){
    setEin(function(prev){
      var kopie = Object.assign({}, prev);
      kopie[seite] = prev[seite].map(function(z,i){
        return i===idx ? Object.assign({}, z, {[feld]:wert}) : z;
      });
      return kopie;
    });
    setResult(null);
  }
  function setFeld(key, wert){
    setEin(function(prev){
      var kopie = Object.assign({}, prev);
      kopie[key] = wert;
      return kopie;
    });
    setResult(null);
  }

  function pruefen(){
    var fehler = [];
    ['aufwand','ertrag'].forEach(function(seite){
      var sollSeite = aufgabe.erKonten.filter(function(k){return k.gruppe===seite})
                                      .sort(function(a,b){return a.ord-b.ord});
      sollSeite.forEach(function(sk, i){
        var z = ein[seite][i] || {konto:'', betrag:''};
        var label = (seite==='aufwand'?'Aufwand':'Ertrag')+', Zeile '+(i+1);
        if(z.konto !== sk.label) fehler.push({ort:label, text:'falsches Konto'});
        else if(parseZahl(z.betrag) !== sk.betrag) fehler.push({ort:label, text:'Betrag stimmt nicht'});
      });
    });

    if(parseZahl(ein.gewinn) !== aufgabe.er.gewinn){
      fehler.push({ort:'Gewinn', text:'Saldo stimmt nicht'});
    }
    /* Beide Seiten müssen inklusive Gewinn auf denselben Betrag kommen. */
    if(parseZahl(ein.totalAufwand) !== aufgabe.er.warenertrag){
      fehler.push({ort:'Total Aufwandseite', text:'Summe stimmt nicht'});
    }
    if(parseZahl(ein.totalErtrag) !== aufgabe.er.warenertrag){
      fehler.push({ort:'Total Ertragsseite', text:'Summe stimmt nicht'});
    }

    setResult({ok:fehler.length===0, fehler:fehler});
    if(fehler.length===0 && props.onGeloest) props.onGeloest();
  }

  if(!aufgabe || !ein) return null;

  var optionen = aufgabe.erKonten.map(function(k){return k.label}).sort();

  function zeilen(seite, label){
    return ein[seite].map(function(z,i){
      var ort = (seite==='aufwand'?'Aufwand':'Ertrag')+', Zeile '+(i+1);
      var fehlerHier = result && !result.ok && result.fehler.some(function(f){return f.ort===ort});
      return e('div',{key:i, className:'rw-frow'+(fehlerHier?' rw-frow-err':'')},
        e('select',{className:'rw-select', value:z.konto,
          onChange:function(ev){setZeile(seite, i, 'konto', ev.target.value)}},
          e('option',{value:''},'Konto wählen'),
          optionen.map(function(n){return e('option',{key:n, value:n}, n)})
        ),
        e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
          placeholder:'Betrag', value:z.betrag,
          onChange:function(ev){setZeile(seite, i, 'betrag', ev.target.value)}})
      );
    });
  }

  var sollAufwand = aufgabe.erKonten.filter(function(k){return k.gruppe==='aufwand'})
                                    .sort(function(a,b){return a.ord-b.ord});

  return e('div',null,
    e(Angaben,{titel:'Angaben: Saldenliste der Erfolgskonten',
      konten:aufgabe.gemischt,
      hinweis:'Trage die Konten in der Kontoform ein. Der Gewinn erscheint als Saldo auf der Aufwandseite, damit beide Seiten gleich hoch sind.'}),

    e('div',{className:'rw-form-grid'},
      e('div',{className:'rw-form-side'},
        e('div',{className:'rw-form-side-title'},'Aufwand'),
        e('div',{className:'rw-fgroup'},
          zeilen('aufwand'),
          e('div',{className:'rw-frow rw-frow-sum'
              +(result && !result.ok && result.fehler.some(function(f){return f.ort==='Gewinn'})?' rw-frow-err':'')},
            e('div',{className:'rw-frow-label'},'Gewinn (Saldo)'),
            e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
              placeholder:'Gewinn', value:ein.gewinn,
              onChange:function(ev){setFeld('gewinn', ev.target.value)}})
          ),
          e('div',{className:'rw-frow rw-frow-total'
              +(result && !result.ok && result.fehler.some(function(f){return f.ort==='Total Aufwandseite'})?' rw-frow-err':'')},
            e('div',{className:'rw-frow-label'},'Total'),
            e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
              placeholder:'Total', value:ein.totalAufwand,
              onChange:function(ev){setFeld('totalAufwand', ev.target.value)}})
          )
        ),
        loesung ? e('div',{className:'rw-loesung'},
          sollAufwand.map(function(k,i){return e('div',{key:i}, k.label+': '+chf(k.betrag))}),
          e('div',null,'Gewinn: '+chf(aufgabe.er.gewinn)),
          e('div',{className:'rw-loesung-sum'},'Total: '+chf(aufgabe.er.warenertrag))
        ) : null
      ),
      e('div',{className:'rw-form-side'},
        e('div',{className:'rw-form-side-title'},'Ertrag'),
        e('div',{className:'rw-fgroup'},
          zeilen('ertrag'),
          e('div',{className:'rw-frow rw-frow-total'
              +(result && !result.ok && result.fehler.some(function(f){return f.ort==='Total Ertragsseite'})?' rw-frow-err':'')},
            e('div',{className:'rw-frow-label'},'Total'),
            e('input',{className:'rw-input rw-input-num', type:'text', inputMode:'numeric',
              placeholder:'Total', value:ein.totalErtrag,
              onChange:function(ev){setFeld('totalErtrag', ev.target.value)}})
          )
        ),
        loesung ? e('div',{className:'rw-loesung'},
          e('div',null,'Warenertrag: '+chf(aufgabe.er.warenertrag)),
          e('div',{className:'rw-loesung-sum'},'Total: '+chf(aufgabe.er.warenertrag))
        ) : null
      )
    ),

    result ? e('div',{className:'rw-feedback '+(result.ok?'ok':'err')},
      result.ok
        ? e('div',null,
            e('div',{className:'rw-fb-title'},'Erfolgsrechnung korrekt'),
            e('div',{className:'rw-fb-text'},'Gewinn CHF '+chf(aufgabe.er.gewinn)
              +'. Beide Seiten schliessen mit CHF '+chf(aufgabe.er.warenertrag)+' ab.'))
        : e('div',null,
            e('div',{className:'rw-fb-title'}, result.fehler.length+' Punkt(e) stimmen noch nicht'),
            e('ul',{className:'rw-fb-list'},
              result.fehler.slice(0,10).map(function(f,i){
                return e('li',{key:i}, f.ort+': '+f.text);
              })))
    ) : null,

    e('div',{className:'rw-actions'},
      e('button',{className:'rw-btn rw-btn-primary', onClick:pruefen},'Erfolgsrechnung prüfen'),
      e('button',{className:'rw-btn rw-btn-ghost', onClick:function(){setLoesung(!loesung)}},
        loesung?'Lösung ausblenden':'Lösung zeigen'),
      e('button',{className:'rw-btn rw-btn-ghost', onClick:neu},'Neue Aufgabe')
    )
  );
}

/* ══════════════════════════════════════════════════════════
   Modus 3: Kennzahlen berechnen
   ══════════════════════════════════════════════════════════ */
function KennzahlAufgabe(props){
  var st = useState(null), aufgabe = st[0], setAufgabe = st[1];
  var st2 = useState(null), kz = st2[0], setKz = st2[1];
  var st3 = useState(''), antwort = st3[0], setAntwort = st3[1];
  var st4 = useState(null), result = st4[0], setResult = st4[1];
  var st5 = useState(false), formeln = st5[0], setFormeln = st5[1];
  var st6 = useState(ladeAuswahl), auswahl = st6[0], setAuswahl = st6[1];
  var st7 = useState(false), auswahlOffen = st7[0], setAuswahlOffen = st7[1];

  /* Auswahl der zu übenden Kennzahlen. Ohne gespeicherte Auswahl sind alle aktiv. */
  function ladeAuswahl(){
    try{
      var roh = localStorage.getItem('rw-kz-auswahl');
      if(!roh) return null;
      var liste = JSON.parse(roh);
      var gueltig = liste.filter(function(k){
        return M.KENNZAHLEN.some(function(x){return x.key===k});
      });
      return gueltig.length ? gueltig : null;
    }catch(err){ return null; }
  }
  function speichereAuswahl(liste){
    if(liste === null) localStorage.removeItem('rw-kz-auswahl');
    else localStorage.setItem('rw-kz-auswahl', JSON.stringify(liste));
  }
  function istAktiv(key){
    return auswahl === null || auswahl.indexOf(key) >= 0;
  }
  function aktiveKennzahlen(){
    if(auswahl === null) return M.KENNZAHLEN;
    var gefiltert = M.KENNZAHLEN.filter(function(k){return auswahl.indexOf(k.key)>=0});
    return gefiltert.length ? gefiltert : M.KENNZAHLEN;
  }

  /* Alle Umschalter arbeiten mit dem vorherigen Zustand, damit mehrere
     Klicks in kurzer Folge nicht verloren gehen. */
  function alleKeys(){ return M.KENNZAHLEN.map(function(k){return k.key}); }
  function normieren(liste){
    return liste.length === M.KENNZAHLEN.length ? null : liste;
  }

  function umschalten(key){
    setAuswahl(function(prev){
      var jetzt = prev === null ? alleKeys() : prev.slice();
      var i = jetzt.indexOf(key);
      if(i >= 0){
        /* Die letzte aktive Kennzahl bleibt aktiv, sonst gäbe es keine Aufgaben mehr. */
        if(jetzt.length === 1) return prev;
        jetzt.splice(i, 1);
      } else {
        jetzt.push(key);
      }
      return normieren(jetzt);
    });
  }

  function gruppeUmschalten(items){
    var keys = items.map(function(k){return k.key});
    setAuswahl(function(prev){
      var jetzt = prev === null ? alleKeys() : prev.slice();
      var alleAktiv = keys.every(function(k){return jetzt.indexOf(k)>=0});
      if(alleAktiv){
        var rest = jetzt.filter(function(k){return keys.indexOf(k) < 0});
        if(!rest.length) return prev;
        return normieren(rest);
      }
      keys.forEach(function(k){ if(jetzt.indexOf(k)<0) jetzt.push(k); });
      return normieren(jetzt);
    });
  }

  function alleWaehlen(){ setAuswahl(null); }

  /* Auswahl bei jeder Änderung sichern. */
  useEffect(function(){ speichereAuswahl(auswahl); }, [auswahl]);

  useEffect(function(){ neu(); }, []);

  function neu(nurDiese){
    var a = M.generateAbschluss(Math.floor(Math.random()*2147483000)+1);
    var pool = nurDiese ? [nurDiese] : aktiveKennzahlen();
    var k = pool[Math.floor(Math.random()*pool.length)];
    setAufgabe(a);
    setKz(k);
    setAntwort('');
    setResult(null);
  }

  /* Eine bestimmte Kennzahl gezielt üben. */
  function einzelUeben(k){
    setAuswahlOffen(false);
    setFormeln(false);
    neu(k);
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function pruefen(){
    var soll = kz.calc(aufgabe.d);
    var ist = parseZahl(antwort);
    if(isNaN(ist)){
      setResult({status:'leer'});
      return;
    }
    /* Toleranz: eine halbe Einheit der letzten geforderten Dezimalstelle. */
    var tol = Math.pow(10, -kz.dez) * 0.51;
    var ok = Math.abs(ist - soll) <= tol;
    setResult({status: ok?'ok':'falsch', soll:soll, ist:ist});
    if(ok && props.onGeloest) props.onGeloest();
  }

  if(!aufgabe || !kz) return null;

  var d = aufgabe.d;
  var b = aufgabe.b;
  var anzahlAktiv = auswahl === null ? M.KENNZAHLEN.length : auswahl.length;

  function bilanzZeile(label, wert, klasse){
    return e('tr',{className:klasse||''},
      e('td',null, label), e('td',{className:'rw-num'}, chf(wert)));
  }

  return e('div',null,
    /* Bilanz in Kontoform: Aktiven links, Passiven rechts */
    e('div',{className:'rw-abschluss-block'},
      e('div',{className:'rw-abschluss-title'},'Bilanz'),
      e('div',{className:'rw-konto'},
        e('div',{className:'rw-konto-seite'},
          e('div',{className:'rw-konto-seite-title'},'Aktiven'),
          e('table',{className:'rw-angaben-table'},
            e('tbody',null,
              e('tr',{className:'rw-gruppe'}, e('td',{colSpan:2},'Umlaufvermögen')),
              bilanzZeile('1000/1010/1020 Liquide Mittel', b.kasse+b.post+b.bank),
              bilanzZeile('1100 Forderungen L+L', b.ford),
              bilanzZeile('1200 Handelswaren', b.vorr),
              bilanzZeile('Total Umlaufvermögen', d.UV, 'rw-zwischensumme'),
              e('tr',{className:'rw-gruppe'}, e('td',{colSpan:2},'Anlagevermögen')),
              bilanzZeile('1510 Mobiliar', b.mobil),
              bilanzZeile('1530 Fahrzeuge', b.fahrz),
              bilanzZeile('1600 Immobilien', b.immob),
              bilanzZeile('Total Anlagevermögen', d.AV, 'rw-zwischensumme'),
              bilanzZeile('Total Aktiven', d.GV, 'rw-endsumme')
            )
          )
        ),
        e('div',{className:'rw-konto-seite'},
          e('div',{className:'rw-konto-seite-title'},'Passiven'),
          e('table',{className:'rw-angaben-table'},
            e('tbody',null,
              e('tr',{className:'rw-gruppe'}, e('td',{colSpan:2},'Kurzfristiges Fremdkapital')),
              bilanzZeile('2000 Verbindlichkeiten L+L', b.verbindl),
              b.uebrKfr>0 ? bilanzZeile('2300 Passive Rechnungsabgrenzung', b.uebrKfr) : null,
              bilanzZeile('Total kurzfristiges Fremdkapital', d.kfrFK, 'rw-zwischensumme'),
              e('tr',{className:'rw-gruppe'}, e('td',{colSpan:2},'Langfristiges Fremdkapital')),
              b.darlehen>0 ? bilanzZeile('2450 Darlehen', b.darlehen) : null,
              b.hypothek>0 ? bilanzZeile('2451 Hypotheken', b.hypothek) : null,
              bilanzZeile('Total langfristiges Fremdkapital', d.lfrFK, 'rw-zwischensumme'),
              e('tr',{className:'rw-gruppe'}, e('td',{colSpan:2},'Eigenkapital')),
              bilanzZeile('2800 Aktienkapital (Grundkap.)', b.grundkapital),
              bilanzZeile('2950 Gewinnreserve (Zuwachskap.)', b.reserven),
              bilanzZeile('Total Eigenkapital', d.EK, 'rw-zwischensumme'),
              bilanzZeile('Total Passiven', d.GV, 'rw-endsumme')
            )
          )
        )
      )
    ),

    e('div',{className:'rw-abschluss'},
      e('div',{className:'rw-abschluss-block'},
        e('div',{className:'rw-abschluss-title'},'Erfolgsrechnung'),
        e('table',{className:'rw-angaben-table'},
          e('tbody',null,
            bilanzZeile('4200 Handelswarenaufwand', d.warenaufwand),
            bilanzZeile('5000 Lohnaufwand', d.personal),
            bilanzZeile('6700 Sonstiger betr. Aufwand', d.uebrig),
            bilanzZeile('6800 Abschreibungen', d.abschreibungen),
            bilanzZeile('6900 Finanzaufwand (FK-Zinsen)', d.finanzaufwand),
            bilanzZeile('Total Aufwand', d.gesAufwand, 'rw-zwischensumme'),
            bilanzZeile('3200 Handelserlöse (Umsatz)', d.warenertrag),
            bilanzZeile('Gewinn', aufgabe.er.gewinn, 'rw-endsumme')
          )
        ),
        e('div',{className:'rw-abschluss-title', style:{marginTop:18}},
          'Angaben Vorjahr (Anfangsbestände)'),
        e('table',{className:'rw-angaben-table'},
          e('tbody',null,
            bilanzZeile('1200 Handelswaren, AB', aufgabe.vj.vorr),
            bilanzZeile('1100 Forderungen L+L, AB', aufgabe.vj.ford),
            bilanzZeile('2000 Verbindlichkeiten L+L, AB', aufgabe.vj.verbind),
            bilanzZeile('Eigenkapital, AB', aufgabe.vj.ek),
            bilanzZeile('Gesamtkapital, AB', aufgabe.vj.gk)
          )
        )
      )
    ),

    /* Frage */
    e('div',{className:'rw-frage'},
      e('div',{className:'rw-frage-gruppe'}, kz.gruppe),
      e('div',{className:'rw-frage-name'}, 'Berechne: '+kz.name),
      kz.hinweis ? e('div',{className:'rw-frage-hinweis'}, kz.hinweis) : null,
      e('div',{className:'rw-frage-eingabe'},
        e('input',{className:'rw-input rw-input-antwort', type:'text', inputMode:'decimal',
          placeholder:'Ergebnis', value:antwort,
          onChange:function(ev){setAntwort(ev.target.value); setResult(null)},
          onKeyDown:function(ev){ if(ev.key==='Enter') pruefen(); }}),
        e('span',{className:'rw-einheit'}, kz.einheit)
      ),
      e('div',{className:'rw-frage-genauigkeit'},
        kz.dez===0 ? 'Ergebnis ganzzahlig'
                   : 'Ergebnis auf '+kz.dez+' Dezimalstelle'+(kz.dez>1?'n':'')+' gerundet')
    ),

    result ? e('div',{className:'rw-feedback '+(result.status==='ok'?'ok':'err')},
      result.status==='leer'
        ? e('div',{className:'rw-fb-title'},'Bitte ein Ergebnis eingeben')
        : result.status==='ok'
          ? e('div',null,
              e('div',{className:'rw-fb-title'},'Richtig')
            , e('div',{className:'rw-fb-text'},
                kz.formel+'  =  '+kz.weg(d, aufgabe)+'  =  '
                +M.fmt(result.soll, kz.dez)+' '+kz.einheit))
          : e('div',null,
              e('div',{className:'rw-fb-title'},'Noch nicht richtig'),
              e('div',{className:'rw-fb-text'},
                'Richtig wäre '+M.fmt(result.soll, kz.dez)+' '+kz.einheit+'.'),
              e('div',{className:'rw-fb-text'},
                kz.formel+'  =  '+kz.weg(d, aufgabe)))
    ) : null,

    e('div',{className:'rw-actions'},
      e('button',{className:'rw-btn rw-btn-primary', onClick:pruefen},'Prüfen'),
      e('button',{className:'rw-btn rw-btn-ghost',
        onClick:function(){setFormeln(!formeln)}},
        formeln ? 'Kennzahlen ausblenden'
                : 'Kennzahlen wählen ('+anzahlAktiv+' von '+M.KENNZAHLEN.length+')'),
      e('button',{className:'rw-btn rw-btn-ghost', onClick:function(){neu()}},'Neue Aufgabe')
    ),

    /* Auswahl und Formelsammlung in einem Panel */
    formeln ? e('div',{className:'rw-formeln'},
      e('div',{className:'rw-formeln-kopf'},
        e('div',{className:'rw-formeln-info'},
          anzahlAktiv+' von '+M.KENNZAHLEN.length+' Kennzahlen aktiv. '
          +'Das Häkchen bestimmt, was in «Neue Aufgabe» vorkommt. '
          +'Mit «üben» rechnest du eine Kennzahl sofort.'),
        e('button',{className:'rw-mini-btn', onClick:alleWaehlen,
          disabled:auswahl===null},'Alle aktivieren')
      ),
      gruppen(M.KENNZAHLEN).map(function(g){
        var alleAktiv = g.items.every(function(k){return istAktiv(k.key)});
        return e('div',{key:g.name, className:'rw-formel-gruppe'},
          e('button',{className:'rw-formel-gruppe-title rw-gruppe-btn'
              +(alleAktiv?' aktiv':''),
            onClick:function(){gruppeUmschalten(g.items)},
            title:alleAktiv?'Ganze Gruppe abwählen':'Ganze Gruppe auswählen'},
            e('span',{className:'rw-check'+(alleAktiv?' an':'')}, alleAktiv?'✓':''),
            g.name
          ),
          g.items.map(function(k){
            var an = istAktiv(k.key);
            return e('div',{key:k.key, className:'rw-formel-zeile'+(an?'':' aus')},
              e('button',{className:'rw-check-btn',
                onClick:function(){umschalten(k.key)},
                title:an?'Kennzahl abwählen':'Kennzahl auswählen'},
                e('span',{className:'rw-check'+(an?' an':'')}, an?'✓':'')
              ),
              e('span',{className:'rw-formel-name'}, k.name),
              e('span',{className:'rw-formel-text'}, k.formel),
              e('button',{className:'rw-mini-btn rw-ueben-btn',
                onClick:function(){einzelUeben(k)}},'üben')
            );
          })
        );
      })
    ) : null
  );
}

function gruppen(liste){
  var out = [], idx = {};
  liste.forEach(function(k){
    if(!idx[k.gruppe]){ idx[k.gruppe] = {name:k.gruppe, items:[]}; out.push(idx[k.gruppe]); }
    idx[k.gruppe].items.push(k);
  });
  return out;
}

/* ══════════════════════════════════════════════════════════
   Rahmen mit Modusauswahl
   ══════════════════════════════════════════════════════════ */
var MODI = [
  {key:'bilanz',     label:'Bilanz erstellen'},
  {key:'er',         label:'Erfolgsrechnung erstellen'},
  {key:'kennzahlen', label:'Kennzahlen berechnen'}
];

function Trainer(){
  var st = useState(function(){return localStorage.getItem('lp-dark')==='1'});
  var dark = st[0], setDark = st[1];
  var st2 = useState(function(){return localStorage.getItem('rw-modus')||'bilanz'});
  var modus = st2[0], setModus = st2[1];
  var st3 = useState(function(){return Number(localStorage.getItem('rw-geloest-'+ (localStorage.getItem('rw-modus')||'bilanz')) || 0)});
  var geloest = st3[0], setGeloest = st3[1];

  useEffect(function(){ document.documentElement.className = dark?'dark':''; }, [dark]);
  useEffect(function(){
    setGeloest(Number(localStorage.getItem('rw-geloest-'+modus) || 0));
  }, [modus]);

  function onGeloest(){
    setGeloest(function(g){
      var neu = g+1;
      localStorage.setItem('rw-geloest-'+modus, neu);
      localStorage.setItem('lp-learn-rechnungswesen-bilanz-einfuehrung','1');
      return neu;
    });
  }

  function wechseln(k){
    if(k===modus) return;
    setModus(k);
    localStorage.setItem('rw-modus', k);
  }

  var aktiv = MODI.filter(function(m){return m.key===modus})[0];

  return e('div',null,
    e('div',{className:'nav'},
      e('div',{style:{display:'flex',alignItems:'center',gap:12}},
        e('button',{className:'btn-back',
          onClick:function(){window.location.href='index.html'}},'‹ Übersicht'),
        e('div',null,
          e('div',{className:'nav-title'},'Rechnungswesen'),
          e('div',{className:'nav-sub'}, aktiv.label)
        )
      ),
      e('div',{className:'nav-right'},
        e('span',{className:'rw-nav-count'}, geloest+' gelöst'),
        e('button',{className:'nav-btn', onClick:function(){
          setDark(function(x){ localStorage.setItem('lp-dark', x?'0':'1'); return !x; });
        }}, dark?'Licht':'Dunkel')
      )
    ),

    e('div',{className:'rw-wrap'},
      e('div',{className:'rw-levels'},
        MODI.map(function(m){
          return e('button',{key:m.key,
            className:'rw-level'+(modus===m.key?' active':''),
            onClick:function(){wechseln(m.key)}}, m.label);
        })
      ),

      modus==='bilanz'     ? e(BilanzAufgabe,{key:'b', onGeloest:onGeloest}) : null,
      modus==='er'         ? e(ErAufgabe,{key:'e', onGeloest:onGeloest}) : null,
      modus==='kennzahlen' ? e(KennzahlAufgabe,{key:'k', onGeloest:onGeloest}) : null,

      e('div',{className:'rw-hint'},
        'Jede Aufgabe wird zufällig erzeugt: andere Konten, andere Beträge, andere Kennzahl. Der Vorrat ist unbegrenzt.')
    )
  );
}

window.RW_TRAINER = Trainer;

})();
