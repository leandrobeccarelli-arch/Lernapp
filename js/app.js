/* ══════════════════════════════════════════════════════════
   Lernplattform – Shared App (React 18, createElement)
   Berufsprüfung Marketing- & Verkaufsfachleute
   ══════════════════════════════════════════════════════════ */

(function() {
'use strict';

var e = React.createElement;
var useState = React.useState;
var useEffect = React.useEffect;
var useRef = React.useRef;
var useCallback = React.useCallback;
var useMemo = React.useMemo;

// ─── Data Loading ───────────────────────────────────────────────────────────

var VALID_BOOKS = ['kommunikation-grundlagen','verkaufsplanung','distribution','digitales-marketing','kommunikation-instrumente','marketingkonzept','selbstmanagement','projektmanagement'];

var bookParam = new URLSearchParams(window.location.search).get('book');

if (!bookParam || VALID_BOOKS.indexOf(bookParam) < 0) {
  document.getElementById('root').innerHTML = '<div style="padding:60px 20px;text-align:center;font-family:Inter,sans-serif"><h2>Kein gültiges Buch angegeben</h2><p style="margin-top:12px"><a href="index.html">Zur Buchauswahl</a></p></div>';
  return;
}

// Dynamically inject the data script
var script = document.createElement('script');
script.src = 'data/' + bookParam + '.js?t=' + Date.now();
script.onload = function() {
  if (window.BOOK_DATA) {
    document.title = window.BOOK_DATA.shortTitle + ' – Lernplattform';
    initApp(window.BOOK_DATA);
  } else {
    document.getElementById('root').innerHTML = '<div style="padding:60px 20px;text-align:center;font-family:Inter,sans-serif"><h2>Buchdaten nicht gefunden</h2><p style="margin-top:12px"><a href="index.html">Zur Buchauswahl</a></p></div>';
  }
};
script.onerror = function() {
  document.getElementById('root').innerHTML = '<div style="padding:60px 20px;text-align:center;font-family:Inter,sans-serif"><h2>Buch konnte nicht geladen werden</h2><p style="margin-top:12px"><a href="index.html">Zur Buchauswahl</a></p></div>';
};
document.head.appendChild(script);

// ─── Helpers ────────────────────────────────────────────────────────────────

function normalize(s) {
  return (s || '').trim().toLowerCase().replace(/[äÄ]/g,'ae').replace(/[öÖ]/g,'oe').replace(/[üÜ]/g,'ue').replace(/[ß]/g,'ss').replace(/[^a-z0-9 .,%-]/g,'').replace(/\s+/g,' ');
}

function matchAnswer(input, answers) {
  var n = normalize(input);
  if (!n) return false;
  if (typeof answers === 'string') return n === normalize(answers);
  return answers.some(function(a) { return n === normalize(a); });
}

// Sehr kurze Stichwörter würden als Teilstring mitten in anderen Wörtern treffen
// ("pr" in "Preis", "ja" in "Jahr") und die Auswertung verfälschen. Gleichzeitig muss
// ein Stichwort in deutschen Zusammensetzungen zählen ("fix" in "Fixkosten"). Deshalb
// gilt eine nach Länge gestaffelte Regel:
//   bis 2 Zeichen  -> nur als eigenständiges Wort, Beugungsendung erlaubt
//   3 bis 4 Zeichen -> am Wortanfang ODER am Wortende eines Kompositums
//                     ("fix" in "Fixkosten", "team" in "Verkaufsteam"), aber nie
//                     mitten im Wort ("top" zählt nicht in "stopp")
//   ab 5 Zeichen   -> Teilstring wie bisher ("beratung" in "Beratungskompetenz")
var KEYWORD_EXACT_MAX = 2;
var KEYWORD_PREFIX_MAX = 4;
var KEYWORD_WORTZEICHEN = 'a-z0-9äöüßàáâèéêìíîòóôùúûç';
var KEYWORD_ENDUNG = '(?:e|en|er|es|em|s|n)?';

function keywordFound(haystack, keyword) {
  var k = String(keyword).toLowerCase();
  if (!k) return false;
  if (k.length > KEYWORD_PREFIX_MAX) return haystack.indexOf(k) >= 0;
  var escaped = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var keinWortzeichen = '[^' + KEYWORD_WORTZEICHEN + ']';
  var amWortanfang = '(?:^|' + keinWortzeichen + ')' + escaped;
  var amWortende = escaped + KEYWORD_ENDUNG + '(?:' + keinWortzeichen + '|$)';
  if (k.length <= KEYWORD_EXACT_MAX) {
    return new RegExp('(?:^|' + keinWortzeichen + ')' + escaped + KEYWORD_ENDUNG + '(?:' + keinWortzeichen + '|$)').test(haystack);
  }
  return new RegExp(amWortanfang).test(haystack) || new RegExp(amWortende).test(haystack);
}

function matchKeywords(input, keywords) {
  var n = (input || '').toLowerCase();
  var found = 0;
  keywords.forEach(function(k) { if (keywordFound(n, k)) found++; });
  return found;
}

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function formatTime(s) {
  var m = Math.floor(s / 60);
  var ss = s % 60;
  return String(m).padStart(2, '0') + ':' + String(ss).padStart(2, '0');
}

function loadProgress(bookId) {
  try { return JSON.parse(localStorage.getItem('lp-progress-' + bookId)) || {}; } catch (x) { return {}; }
}
function saveProgress(bookId, p) {
  localStorage.setItem('lp-progress-' + bookId, JSON.stringify(p));
}
function loadExamScores(bookId) {
  try { return JSON.parse(localStorage.getItem('lp-exam-' + bookId)) || {}; } catch (x) { return {}; }
}
function saveExamScore(bookId, chId, score, total) {
  var scores = loadExamScores(bookId);
  var pct = total > 0 ? Math.round(score / total * 100) : 0;
  var existing = scores[chId];
  if (!existing || pct > existing.pct) {
    scores[chId] = { score: score, total: total, pct: pct, date: new Date().toLocaleDateString('de-CH') };
  }
  localStorage.setItem('lp-exam-' + bookId, JSON.stringify(scores));
}
function loadLearnStatus(bookId) {
  try { return JSON.parse(localStorage.getItem('lp-learn-' + bookId)) || {}; } catch (x) { return {}; }
}
function saveLearnStatus(bookId, s) {
  localStorage.setItem('lp-learn-' + bookId, JSON.stringify(s));
}

// ─── Exercise Type Labels ───────────────────────────────────────────────────

var TYPE_LABELS = {
  mc: 'Multiple Choice', tf: 'Richtig/Falsch', fill: 'Lückentext',
  match: 'Zuordnung', check: 'Zuordnung (Tabelle)', calc: 'Berechnung',
  text: 'Freitext', table: 'Tabelle', sort: 'Reihenfolge'
};

var TYPE_ICONS = {
  mc: '', tf: '', fill: '',
  match: '', check: '', calc: '',
  text: '', table: '', sort: ''
};

// ─── Tips Component ─────────────────────────────────────────────────────────

function Tips(props) {
  var st = useState(0);
  var shown = st[0], setShown = st[1];
  var tips = props.tips;
  if (!tips || tips.length === 0) return null;

  return e('div', { className: 'tip-box' },
    tips.slice(0, shown).map(function(t, i) {
      return e('div', { key: i, className: 'tip-content', style: { marginTop: i === 0 ? 0 : 8 } },
        e('strong', { style: { color: 'var(--accent)' } }, 'Tipp ' + (i + 1) + ': '), t
      );
    }),
    shown < tips.length ? e('div', {
      className: 'tip-toggle',
      onClick: function() { setShown(shown + 1); }
    }, '\u25B6 Tipp ' + (shown + 1) + '/' + tips.length + ' anzeigen') : null
  );
}

// ─── Reveal Component ───────────────────────────────────────────────────────

function Reveal(props) {
  var st = useState(0);
  var shown = st[0], setShown = st[1];
  var items = props.items;
  if (!items || items.length === 0) return null;

  return e('div', { className: 'reveal-box' },
    items.slice(0, shown).map(function(s, i) {
      var content = typeof s === 'string' ? s : (s && s.label ? s.label + ': ' + (s.val || '') : (s && s.val ? s.val : (s && s.text ? s.text : (s && typeof s === 'object' ? JSON.stringify(s) : String(s || '')))));
      return e('div', { key: i, className: 'reveal-step' },
        e('strong', null, 'Schritt ' + (i + 1) + ': '), content
      );
    }),
    shown < items.length ? e('div', {
      className: 'reveal-toggle',
      onClick: function() { setShown(shown + 1); }
    }, '\u25B6 L\u00F6sung ' + (shown + 1) + '/' + items.length + ' anzeigen') : null
  );
}

// ─── MC Exercise ────────────────────────────────────────────────────────────

function MCExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;

  // Multi-question MC format: questions: [{id, q, options, answer}, ...]
  if (ex.questions && Array.isArray(ex.questions) && ex.questions.length > 0 && ex.questions[0].options) {
    var totalQ = ex.questions.length;
    var mst = useState(function() { return ex.questions.map(function() { return null; }); });
    var selections = mst[0], setSelections = mst[1];
    var mst2 = useState(false), mchecked = mst2[0], setMChecked = mst2[1];

    function doMCheck(sels) {
      setMChecked(true);
      var correct = 0;
      ex.questions.forEach(function(q, i) {
        if (sels[i] === q.answer) correct++;
      });
      if (onDone) onDone(Math.round(correct / totalQ * 100));
    }

    function selectQ(qi, oi) {
      if (mchecked) return;
      setSelections(function(prev) {
        var newSel = prev.slice();
        newSel[qi] = oi;
        if (examMode && newSel.every(function(s) { return s !== null; })) {
          setTimeout(function() { doMCheck(newSel); }, 0);
        }
        return newSel;
      });
    }

    function mcheck() { doMCheck(selections); }

    function mreset() {
      setSelections(ex.questions.map(function() { return null; }));
      setMChecked(false);
    }

    var allAnswered = selections.every(function(s) { return s !== null; });

    return e('div', null,
      ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
      ex.questions.map(function(q, qi) {
        return e('div', { key: qi, style: { marginBottom: 16 } },
          e('div', { style: { fontWeight: 600, marginBottom: 6, fontSize: '.88rem' } }, (q.id || (qi + 1)) + ') ' + q.q),
          q.options.map(function(opt, oi) {
            var cls = 'mc-option';
            if (mchecked && !examMode) {
              if (oi === selections[qi] && oi === q.answer) cls += ' correct-sel';
              else if (oi === selections[qi] && oi !== q.answer) cls += ' wrong-sel';
              else if (oi === q.answer) cls += ' correct-unsel';
            } else if (oi === selections[qi]) cls += ' selected';
            return e('div', {
              key: oi, className: cls,
              onClick: mchecked ? null : function() { selectQ(qi, oi); }
            },
              e('div', { className: 'mc-radio' }),
              e('span', null, opt)
            );
          })
        );
      }),
      !examMode ? e('div', { className: 'btn-row' },
        e('button', { className: 'btn btn-primary', onClick: mcheck, disabled: !allAnswered }, 'Pr\u00FCfen'),
        mchecked ? e('button', { className: 'btn btn-secondary', onClick: mreset }, 'Nochmal') : null
      ) : null,
      examMode && !mchecked ? e('div', { style: { fontSize: '.8rem', color: 'var(--text2)', marginTop: 8 } }, 'Beantworte alle Fragen') : null,
      examMode && mchecked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
      !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
      !examMode && mchecked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
    );
  }

  // Multi-select MC format (ex.multi = true, ex.correct = [indices])
  if (ex.multi && ex.correct) {
    var mst3 = useState({}), multiSel = mst3[0], setMultiSel = mst3[1];
    var mst4 = useState(false), mchecked2 = mst4[0], setMChecked2 = mst4[1];

    function toggleMulti(i) {
      if (mchecked2) return;
      setMultiSel(function(prev) { var n = Object.assign({}, prev); n[i] = !n[i]; return n; });
    }

    function checkMulti() {
      setMChecked2(true);
      var correctSet = ex.correct;
      var userSet = Object.keys(multiSel).filter(function(k) { return multiSel[k]; }).map(Number);
      var correct = 0;
      correctSet.forEach(function(c) { if (userSet.indexOf(c) !== -1) correct++; });
      var wrong = userSet.filter(function(u) { return correctSet.indexOf(u) === -1; }).length;
      var score = Math.max(0, Math.round((correct - wrong) / correctSet.length * 100));
      if (onDone) onDone(score);
    }

    function resetMulti() { setMultiSel({}); setMChecked2(false); }

    var hasSelection = Object.keys(multiSel).some(function(k) { return multiSel[k]; });

    return e('div', null,
      ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
      ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
      (ex.options || []).map(function(opt, i) {
        var isSelected = !!multiSel[i];
        var isCorrect = ex.correct.indexOf(i) !== -1;
        var cls = 'mc-option';
        if (mchecked2 && !examMode) {
          if (isSelected && isCorrect) cls += ' correct-sel';
          else if (isSelected && !isCorrect) cls += ' wrong-sel';
          else if (!isSelected && isCorrect) cls += ' correct-unsel';
        } else if (isSelected) cls += ' selected';
        return e('div', {
          key: i, className: cls,
          onClick: mchecked2 ? null : function() { toggleMulti(i); }
        },
          e('div', { className: 'mc-radio', style: { borderRadius: 4 } }),
          e('span', null, opt)
        );
      }),
      !examMode ? e('div', { className: 'btn-row' },
        e('button', { className: 'btn btn-primary', onClick: checkMulti, disabled: !hasSelection }, 'Pr\u00FCfen'),
        mchecked2 ? e('button', { className: 'btn btn-secondary', onClick: resetMulti }, 'Nochmal') : null
      ) : null,
      examMode && !mchecked2 ? e('div', { style: { fontSize: '.8rem', color: 'var(--text2)', marginTop: 8 } }, 'W\u00E4hle die richtigen Antworten') : null,
      examMode && mchecked2 ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
      !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
      !examMode && mchecked2 && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
    );
  }

  // Single-question MC format
  var st = useState(null), selected = st[0], setSelected = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function doCheck(sel) {
    setChecked(true);
    var correct = sel === ex.answer;
    if (onDone) onDone(correct ? 100 : 0);
  }

  function check() { doCheck(selected); }

  function reset() { setSelected(null); setChecked(false); }

  function selectOption(i) {
    setSelected(i);
    if (examMode) { doCheck(i); }
  }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    (ex.options || []).map(function(opt, i) {
      var cls = 'mc-option';
      if (checked && !examMode) {
        if (i === selected && i === ex.answer) cls += ' correct-sel';
        else if (i === selected && i !== ex.answer) cls += ' wrong-sel';
        else if (i === ex.answer) cls += ' correct-unsel';
      } else if (i === selected) cls += ' selected';
      return e('div', {
        key: i, className: cls,
        onClick: checked ? null : function() { selectOption(i); }
      },
        e('div', { className: 'mc-radio' }),
        e('span', null, opt)
      );
    }),
    !examMode ? e('div', { className: 'btn-row' },
      e('button', { className: 'btn btn-primary', onClick: check, disabled: selected === null }, 'Pr\u00FCfen'),
      checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ) : null,
    examMode && !checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--text2)', marginTop: 8 } }, 'W\u00E4hle eine Antwort') : null,
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.explanation ? e('div', { className: 'solution-box' }, e('strong', null, 'Erkl\u00E4rung: '), ex.explanation) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── TF Exercise ────────────────────────────────────────────────────────────

function TFExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var statements = ex.statements || [];
  var st = useState({}), answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function select(idx, val) {
    if (checked) return;
    setAnswers(function(prev) { var n = Object.assign({}, prev); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    statements.forEach(function(s, i) { if (answers[i] === s.c) correct++; });
    if (onDone) onDone(statements.length ? Math.round(correct / statements.length * 100) : 0);
  }

  function reset() { setAnswers({}); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    statements.map(function(s, i) {
      var userAns = answers[i];
      return e('div', { key: i, className: 'tf-row' },
        e('div', { className: 'tf-statement' }, s.s),
        e('div', { className: 'tf-buttons' },
          e('button', {
            className: 'tf-btn' + (checked && !examMode ? (userAns === true ? (s.c === true ? ' correct-sel' : ' wrong-sel') : (s.c === true ? ' correct-unsel' : '')) : (userAns === true ? ' selected' : '')),
            onClick: function() { select(i, true); }
          }, 'Richtig'),
          e('button', {
            className: 'tf-btn' + (checked && !examMode ? (userAns === false ? (s.c === false ? ' correct-sel' : ' wrong-sel') : (s.c === false ? ' correct-unsel' : '')) : (userAns === false ? ' selected' : '')),
            onClick: function() { select(i, false); }
          }, 'Falsch')
        ),
        checked && !examMode ? e('div', { className: 'feedback ' + (userAns === s.c ? 'ok' : 'nok') },
          (userAns === s.c ? 'Korrekt' : 'Falsch \u2013 richtig ist: ' + (s.c ? 'Richtig' : 'Falsch')) + (s.feedback ? ' \u00b7 ' + s.feedback : '')
        ) : null
      );
    }),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Fill Exercise ──────────────────────────────────────────────────────────

function FillExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var blanks = ex.blanks || [];
  var template = ex.template || '';
  var st = useState(blanks.map(function() { return ''; }));
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setVals(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function getAccepted(i) {
    if (ex.accept && ex.accept[i]) return ex.accept[i];
    var b = blanks[i];
    return Array.isArray(b) ? b : [b];
  }

  function check() {
    setChecked(true);
    var correct = 0;
    blanks.forEach(function(b, i) {
      if (matchAnswer(vals[i], getAccepted(i))) correct++;
    });
    if (onDone) onDone(blanks.length ? Math.round(correct / blanks.length * 100) : 0);
  }

  function reset() { setVals(blanks.map(function() { return ''; })); setChecked(false); }

  // Build template with blanks
  var parts = template.split(/\{(\d+)\}/);
  var rendered = parts.map(function(part, i) {
    if (i % 2 === 1) {
      var idx = parseInt(part, 10);
      var isCorrect = checked && matchAnswer(vals[idx], getAccepted(idx));
      var isWrong = checked && !isCorrect;
      return e('input', {
        key: 'b' + idx,
        className: 'blank-input' + (!examMode && isCorrect ? ' correct' : '') + (!examMode && isWrong ? ' wrong' : ''),
        value: vals[idx],
        onChange: function(ev) { update(idx, ev.target.value); },
        disabled: checked,
        placeholder: '...'
      });
    }
    return e('span', { key: 't' + i }, part);
  });

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    e('div', { className: 'blank-text' }, rendered),
    checked && !examMode ? e('div', { className: 'solution-box' },
      e('strong', null, 'L\u00F6sung: '),
      blanks.map(function(b, i) {
        return (i > 0 ? ', ' : '') + (i + 1) + '. ' + (Array.isArray(b) ? b[0] : b);
      })
    ) : null,
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Match Exercise ─────────────────────────────────────────────────────────

function MatchExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var pairs = ex.pairs || [];
  var st = useState(pairs.map(function() { return ''; }));
  var answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setAnswers(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    pairs.forEach(function(p, i) { if (answers[i] === p.r) correct++; });
    if (onDone) onDone(pairs.length ? Math.round(correct / pairs.length * 100) : 0);
  }

  function reset() { setAnswers(pairs.map(function() { return ''; })); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    pairs.map(function(p, i) {
      var isCorrect = checked && answers[i] === p.r;
      var isWrong = checked && answers[i] !== p.r;
      return e('div', { key: i, className: 'match-row' },
        e('span', { className: 'match-label' }, p.l),
        e('select', {
          className: 'match-select' + (!examMode && isCorrect ? ' correct' : '') + (!examMode && isWrong ? ' wrong' : ''),
          value: answers[i],
          onChange: function(ev) { update(i, ev.target.value); },
          disabled: checked
        },
          e('option', { value: '' }, '-- W\u00E4hlen --'),
          (ex.options || []).map(function(opt, j) {
            return e('option', { key: j, value: opt }, opt);
          })
        ),
        checked && isWrong && !examMode ? e('span', { style: { fontSize: '.8rem', color: 'var(--green)' } }, '\u2192 ' + p.r) : null
      );
    }),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Check Exercise (Table with Radio/Checkbox) ─────────────────────────────

function CheckExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var statements = ex.statements || [];
  var st = useState({}), answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function select(idx, val) {
    if (checked) return;
    setAnswers(function(prev) { var n = Object.assign({}, prev); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    statements.forEach(function(s, i) { if (answers[i] === s.c) correct++; });
    if (onDone) onDone(statements.length ? Math.round(correct / statements.length * 100) : 0);
  }

  function reset() { setAnswers({}); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    statements.map(function(s, i) {
      var userAns = answers[i];
      var rowClass = '';
      if (checked && !examMode) rowClass = userAns === s.c ? ' correct-row' : ' wrong-row';
      return e('div', { key: i, className: 'tf-row' + rowClass },
        e('div', { className: 'tf-statement' }, s.s),
        e('div', { className: 'tf-buttons' },
          e('button', {
            className: 'tf-btn' + (checked && !examMode ? (userAns === true ? (s.c === true ? ' correct-sel' : ' wrong-sel') : (s.c === true ? ' correct-unsel' : '')) : (userAns === true ? ' selected' : '')),
            onClick: function() { select(i, true); }
          }, 'Richtig'),
          e('button', {
            className: 'tf-btn' + (checked && !examMode ? (userAns === false ? (s.c === false ? ' correct-sel' : ' wrong-sel') : (s.c === false ? ' correct-unsel' : '')) : (userAns === false ? ' selected' : '')),
            onClick: function() { select(i, false); }
          }, 'Falsch')
        ),
        checked && !examMode ? e('div', { className: 'feedback ' + (userAns === s.c ? 'ok' : 'nok') },
          (userAns === s.c ? 'Korrekt' : 'Falsch') + (s.feedback ? ' · ' + s.feedback : '')
        ) : null
      );
    }),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Calc Exercise ──────────────────────────────────────────────────────────

// Schweizer Schreibweisen zulassen: Tausendertrennzeichen als gerader oder
// typografischer Apostroph, Komma als Dezimaltrennzeichen, Währung und Einheit
// vor oder nach der Zahl.
function parseCalcInput(raw) {
  var s = String(raw == null ? '' : raw).toLowerCase().trim();
  s = s.replace(/^[^\d\-]+/, '');              // "CHF 6000" -> "6000"
  s = s.replace(/[^\d]+$/, '');                // "6000 CHF", "26.5 %" -> Zahl
  s = s.replace(/['’‘´`]/g, '');               // Tausendertrennzeichen entfernen
  s = s.replace(/\s/g, '');
  s = s.replace(/,/g, '.');                    // Komma als Dezimaltrennzeichen
  if (!/^-?\d*\.?\d+$/.test(s)) return NaN;    // mehrdeutige Eingaben nicht raten
  return parseFloat(s);
}

function calcFieldOk(f, raw) {
  var userVal = parseCalcInput(raw);
  if (isNaN(userVal)) return false;
  // tolerance ist ABSOLUT (z.B. 200 = ±200 CHF, 0 = exakt); ohne Angabe: ±1% der Lösung
  var tol = (typeof f.tolerance === 'number') ? f.tolerance : Math.abs(f.answer) * 0.01;
  return Math.abs(userVal - f.answer) <= tol + 0.001;
}

// Die gezogene Variante einer Generator-Aufgabe wird pro Aufgabe gemerkt, damit ein
// Zuklappen und erneutes Aufklappen nicht unbemerkt eine völlig andere Aufgabe erzeugt.
var CALC_GENERATOR_VARIANTE = {};

function CalcExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var genSt = useState(function() {
    if (!ex.generator) return null;
    var schluessel = (props.bookId || '') + ':' + ex.id;
    if (!CALC_GENERATOR_VARIANTE[schluessel]) CALC_GENERATOR_VARIANTE[schluessel] = ex.generator();
    return CALC_GENERATOR_VARIANTE[schluessel];
  });
  var gen = genSt[0], setGen = genSt[1];
  var data = gen ? gen.fields : (ex.fields || ex.calcs || []);
  var st = useState(data.map(function() { return ''; }));
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setVals(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    data.forEach(function(f, i) { if (calcFieldOk(f, vals[i])) correct++; });
    if (onDone) onDone(data.length > 0 ? Math.round(correct / data.length * 100) : 100);
  }

  function reset() { setVals(data.map(function() { return ''; })); setChecked(false); }

  function regenerate() {
    var g = ex.generator();
    CALC_GENERATOR_VARIANTE[(props.bookId || '') + ':' + ex.id] = g;
    setGen(g);
    setVals(g.fields.map(function() { return ''; }));
    setChecked(false);
  }

  var instruction = (gen && gen.instruction) || ex.instruction;
  var reveal = (gen && gen.reveal) || ex.reveal;

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal', whiteSpace: 'pre-line' } }, instruction) : null,
    data.map(function(f, i) {
      var isCorrect = checked && calcFieldOk(f, vals[i]);
      var isWrong = checked && !isCorrect;
      return e('div', { key: i, className: 'calc-row' },
        e('span', { className: 'calc-label' }, f.label),
        e('input', {
          className: 'calc-input' + (!examMode && isCorrect ? ' correct' : '') + (!examMode && isWrong ? ' wrong' : ''),
          value: vals[i],
          onChange: function(ev) { update(i, ev.target.value); },
          disabled: checked,
          placeholder: '0'
        }),
        checked && isWrong && !examMode ? e('span', { style: { fontSize: '.8rem', color: 'var(--green)' } }, '\u2192 ' + f.answer) : null
      );
    }),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null,
      !examMode && ex.generator ? e('button', { className: 'btn btn-secondary', onClick: regenerate }, '\u21BB Neue Zahlen') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && reveal ? e(Reveal, { items: reveal }) : null
  );
}

// ─── Text Exercise ──────────────────────────────────────────────────────────

// Mehrteilige Textaufgabe: Pro Teilfrage ein eigenes Feld mit eigener Bewertung.
// Wird nur aktiv, wenn die Aufgabe ein Feld `parts` mitbringt.
function MultiPartTextExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var parts = ex.parts;

  var st = useState(function() { return parts.map(function() { return ''; }); });
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function setAt(i, v) {
    var next = vals.slice();
    next[i] = v;
    setVals(next);
  }

  function partScore(p, text) {
    var kws = p.keywords || [];
    if (kws.length === 0) return (text || '').trim().length > 10 ? 1 : 0;
    var need = Math.min(p.minKeywords || 2, kws.length);
    return Math.min(1, matchKeywords(text, kws) / need);
  }

  function check() {
    setChecked(true);
    var sum = 0;
    parts.forEach(function(p, i) { sum += partScore(p, vals[i]); });
    if (onDone) onDone(Math.round(sum / parts.length * 100));
  }

  function reset() {
    setVals(parts.map(function() { return ''; }));
    setChecked(false);
  }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    parts.map(function(p, i) {
      var kws = p.keywords || [];
      var need = Math.min(p.minKeywords || 2, kws.length);
      var found = checked ? matchKeywords(vals[i], kws) : 0;
      var ok = checked && partScore(p, vals[i]) >= 1;
      return e('div', { key: i, style: { marginTop: 12 } },
        e('div', { style: { fontWeight: 600, fontSize: '.9rem', marginBottom: 4 } },
          (p.label || String.fromCharCode(97 + i) + ')') + ' ' + (p.q || '')
        ),
        e('textarea', {
          className: 'text-input',
          rows: 3,
          value: vals[i],
          onChange: function(ev) { setAt(i, ev.target.value); },
          disabled: checked,
          placeholder: p.placeholder || 'Ihre Antwort...'
        }),
        checked && !examMode ? e('div', { style: { marginTop: 6, fontSize: '.8rem', color: ok ? 'var(--green)' : 'var(--text2)' } },
          (ok ? '✓ ' : '✗ ') + found + ' Stichworte erkannt, mindestens ' + need + ' erwartet.',
          kws.length ? e('div', { style: { color: 'var(--text2)', marginTop: 2 } },
            kws.map(function(k) { return (keywordFound((vals[i] || '').toLowerCase(), k) ? '✓ ' : '✗ ') + k; }).join(', ')
          ) : null,
          p.solution ? e('div', { className: 'solution-box', style: { marginTop: 6 } },
            e('strong', null, 'Musterlösung: '), p.solution
          ) : null
        ) : null
      );
    }),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Prüfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '✓ Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

function TextExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;

  // Extract keywords: top-level or from nested questions
  var allKeywords = ex.keywords || [];
  if (allKeywords.length === 0 && ex.questions && Array.isArray(ex.questions)) {
    ex.questions.forEach(function(q) {
      if (q.keywords) allKeywords = allKeywords.concat(q.keywords);
    });
  }

  var st = useState(''), val = st[0], setVal = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function check() {
    setChecked(true);
    var found = matchKeywords(val, allKeywords);
    var pct = allKeywords.length > 0 ? Math.round(found / allKeywords.length * 100) : (val.trim().length > 10 ? 100 : 0);
    if (onDone) onDone(pct);
  }

  function reset() { setVal(''); setChecked(false); }

  // Build sub-question display for nested questions format
  var subQuestions = (ex.questions && Array.isArray(ex.questions) && ex.questions.length > 0 && ex.questions[0].q) ? ex.questions : null;

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    subQuestions ? e('div', { style: { margin: '8px 0', fontSize: '.85rem', color: 'var(--text2)' } },
      subQuestions.map(function(sq, i) {
        return e('div', { key: i, style: { marginBottom: 4 } },
          e('span', { style: { fontWeight: 600 } }, (sq.label || sq.id || (i + 1)) + ') '),
          sq.q
        );
      })
    ) : null,
    e('textarea', {
      className: 'text-input',
      rows: 4,
      value: val,
      onChange: function(ev) { setVal(ev.target.value); },
      disabled: checked,
      placeholder: 'Ihre Antwort...'
    }),
    checked && !examMode && ex.solution ? e('div', { className: 'solution-box' },
      e('strong', null, 'Musterl\u00F6sung: '), ex.solution
    ) : null,
    checked && !examMode && allKeywords.length > 0 ? e('div', { style: { marginTop: 8, fontSize: '.8rem', color: 'var(--text2)' } },
      'Schl\u00FCsselw\u00F6rter: ' + allKeywords.map(function(k) {
        var found = keywordFound((val || '').toLowerCase(), k);
        return found ? '\u2713 ' + k : '\u2717 ' + k;
      }).join(', ')
    ) : null,
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Table Exercise ─────────────────────────────────────────────────────────

function TableExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var answerCount = 0;
  if (ex.answers) {
    ex.answers.forEach(function(row) {
      row.forEach(function(cell) { if (cell !== null && cell !== undefined && cell !== '') answerCount++; });
    });
  }
  var st = useState(function() {
    if (!ex.answers) return [];
    return ex.answers.map(function(row) { return row.map(function() { return ''; }); });
  });
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(ri, ci, val) {
    setVals(function(prev) {
      var n = prev.map(function(r) { return r.slice(); });
      n[ri][ci] = val;
      return n;
    });
  }

  function check() {
    setChecked(true);
    if (!ex.answers) { if (onDone) onDone(100); return; }
    var correct = 0;
    ex.answers.forEach(function(row, ri) {
      row.forEach(function(cell, ci) {
        if (cell === null || cell === undefined || cell === '') return;
        var userVal = (vals[ri] && vals[ri][ci]) || '';
        if (typeof cell === 'number') {
          var uv = parseFloat(userVal.replace(/[',\s]/g, ''));
          if (!isNaN(uv) && Math.abs(uv - cell) <= Math.abs(cell * 0.01) + 0.01) correct++;
        } else {
          if (matchAnswer(userVal, Array.isArray(cell) ? cell : [cell])) correct++;
        }
      });
    });
    if (onDone) onDone(answerCount > 0 ? Math.round(correct / answerCount * 100) : 100);
  }

  function reset() {
    setVals(ex.answers ? ex.answers.map(function(row) { return row.map(function() { return ''; }); }) : []);
    setChecked(false);
  }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    e('div', { style: { overflowX: 'auto' } },
      e('table', { className: 'check-table' },
        ex.headers ? e('thead', null,
          e('tr', null, ex.headers.map(function(h, i) { return e('th', { key: i }, h); }))
        ) : null,
        e('tbody', null,
          (ex.rows || []).map(function(row, ri) {
            return e('tr', { key: ri },
              row.map(function(cell, ci) {
                // If there's an answer slot for this cell, show input
                var hasAnswer = ex.answers && ex.answers[ri] && (ex.answers[ri][ci] !== null && ex.answers[ri][ci] !== undefined && ex.answers[ri][ci] !== '');
                if (hasAnswer) {
                  var expectedVal = ex.answers[ri][ci];
                  var userVal = (vals[ri] && vals[ri][ci]) || '';
                  var isCorrect = false;
                  if (checked) {
                    if (typeof expectedVal === 'number') {
                      var uv = parseFloat(userVal.replace(/[',\s]/g, ''));
                      isCorrect = !isNaN(uv) && Math.abs(uv - expectedVal) <= Math.abs(expectedVal * 0.01) + 0.01;
                    } else {
                      isCorrect = matchAnswer(userVal, Array.isArray(expectedVal) ? expectedVal : [expectedVal]);
                    }
                  }
                  return e('td', { key: ci },
                    e('input', {
                      className: 'calc-input' + (checked && !examMode ? (isCorrect ? ' correct' : ' wrong') : ''),
                      value: userVal,
                      onChange: function(ev) { update(ri, ci, ev.target.value); },
                      disabled: checked,
                      style: { width: '100%', textAlign: 'left' }
                    }),
                    checked && !isCorrect && !examMode ? e('div', { style: { fontSize: '.75rem', color: 'var(--green)', marginTop: 2 } }, '\u2192 ' + (Array.isArray(expectedVal) ? expectedVal[0] : expectedVal)) : null
                  );
                }
                return e('td', { key: ci }, cell);
              })
            );
          })
        )
      )
    ),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Sort Exercise (Reihenfolge) ───────────────────────────────────────────

function SortExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var correctOrder = ex.items || [];
  var st = useState(function() { return shuffleArray(correctOrder.slice()); });
  var items = st[0], setItems = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function move(fromIdx, toIdx) {
    if (toIdx < 0 || toIdx >= items.length || checked) return;
    setItems(function(prev) {
      var arr = prev.slice();
      var item = arr.splice(fromIdx, 1)[0];
      arr.splice(toIdx, 0, item);
      return arr;
    });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    items.forEach(function(item, i) {
      if (item === correctOrder[i]) correct++;
    });
    if (onDone) onDone(correctOrder.length > 0 ? Math.round(correct / correctOrder.length * 100) : 0);
  }

  function reset() {
    setItems(shuffleArray(correctOrder.slice()));
    setChecked(false);
  }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    e('div', { className: 'sort-list' },
      items.map(function(item, i) {
        var isCorrect = checked && item === correctOrder[i];
        var isWrong = checked && item !== correctOrder[i];
        return e('div', {
          key: item + '-' + i,
          className: 'sort-item' + (isCorrect ? ' sort-correct' : '') + (isWrong ? ' sort-wrong' : ''),
          style: { display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', marginBottom: 6, borderRadius: 8, border: '1px solid ' + (isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--border)'), background: isCorrect ? 'rgba(34,197,94,.08)' : isWrong ? 'rgba(239,68,68,.08)' : 'var(--card)' }
        },
          e('span', { style: { fontWeight: 600, color: 'var(--text2)', fontSize: '.8rem', minWidth: 22 } }, (i + 1) + '.'),
          e('span', { style: { flex: 1, fontSize: '.88rem' } }, item),
          !checked ? e('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
            e('button', {
              className: 'sort-btn',
              disabled: i === 0,
              onClick: function() { move(i, i - 1); },
              style: { padding: '2px 8px', fontSize: '.75rem', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--card)', cursor: i === 0 ? 'default' : 'pointer', opacity: i === 0 ? .3 : 1, color: 'var(--text)' }
            }, '\u25B2') ,
            e('button', {
              className: 'sort-btn',
              disabled: i === items.length - 1,
              onClick: function() { move(i, i + 1); },
              style: { padding: '2px 8px', fontSize: '.75rem', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--card)', cursor: i === items.length - 1 ? 'default' : 'pointer', opacity: i === items.length - 1 ? .3 : 1, color: 'var(--text)' }
            }, '\u25BC')
          ) : null,
          checked && isWrong ? e('span', { style: { fontSize: '.75rem', color: 'var(--green)' } }, '\u2192 ' + (correctOrder.indexOf(item) + 1) + '.') : null
        );
      })
    ),
    e('div', { className: 'btn-row' },
      !checked ? e('button', { className: 'btn btn-primary', onClick: check }, 'Pr\u00FCfen') : null,
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Exercise Card (wrapper) ────────────────────────────────────────────────

function ExerciseCard(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  // Fallback: manche Übungen haben title statt q
  if (!ex.q && ex.title) ex = Object.assign({}, ex, { q: ex.title });
  var exerciseProps = { ex: ex, onDone: onDone, examMode: examMode };

  var comp;
  switch (ex.type) {
    case 'mc': comp = e(MCExercise, exerciseProps); break;
    case 'tf': comp = e(TFExercise, exerciseProps); break;
    case 'fill': comp = e(FillExercise, exerciseProps); break;
    case 'match': comp = e(MatchExercise, exerciseProps); break;
    case 'check': comp = e(CheckExercise, exerciseProps); break;
    case 'calc': comp = e(CalcExercise, exerciseProps); break;
    case 'text': comp = (ex.parts && ex.parts.length) ? e(MultiPartTextExercise, exerciseProps) : e(TextExercise, exerciseProps); break;
    case 'table': comp = e(TableExercise, exerciseProps); break;
    case 'sort': comp = e(SortExercise, exerciseProps); break;
    default: comp = e('div', { style: { color: 'var(--text2)', fontStyle: 'italic' } }, 'Unbekannter Aufgabentyp: ' + ex.type);
  }

  if (ex.svg) {
    return e('div', null,
      e('div', { style: { margin: '0 0 16px', width: '100%' }, dangerouslySetInnerHTML: { __html: ex.svg.replace('<svg ', '<svg width="100%" ') } }),
      comp
    );
  }
  return comp;
}

// ─── Text Formatter (converts flat text to structured elements) ──────────────

// Labels that get bold + their comma-lists become sub-bullets
var LABEL_KEYWORDS = ['Vorteile', 'Nachteile', 'Nachteil', 'Vorteil', 'Pro', 'Kontra', 'Chancen', 'Risiken', 'Stärken', 'Schwächen', 'Herausforderungen', 'Merkmale', 'Funktionen', 'Ziele', 'Ziel', 'Beispiel', 'Beispiele', 'Definition', 'Bedeutung', 'Arten', 'Formen', 'Schritte', 'Phasen', 'Methoden', 'Kriterien', 'Faktoren', 'Elemente', 'Komponenten', 'Kennzahlen', 'Berechnung', 'Formel', 'Merke', 'Grundprinzipien', 'Anforderungen', 'Aufgaben', 'Instrumente', 'Massnahmen', 'Kategorien', 'Bereiche', 'Ebenen', 'Strategie', 'Strategien'];
// Labels that trigger sub-bullet rendering for comma-separated content
var SUBBULLET_LABELS = ['Vorteile', 'Nachteile', 'Nachteil', 'Vorteil', 'Chancen', 'Risiken', 'Stärken', 'Schwächen', 'Herausforderungen', 'Merkmale', 'Funktionen', 'Arten', 'Formen', 'Instrumente', 'Massnahmen', 'Kategorien', 'Bereiche', 'Aufgaben', 'Anforderungen'];

// Parse inline emphasis markup (<strong>/<b> and <em>/<i>) in trusted static content
// into real React elements. Returns the plain string unchanged when no markup is present,
// so tag-free text behaves exactly as before. Content comes from our own data files, not
// user input, so rendering these specific tags is safe (no arbitrary HTML is interpreted).
function inlineRich(text, keyPrefix) {
  if (typeof text !== 'string' || text.indexOf('<') === -1) return text;
  var tokenRegex = /<(strong|b|em|i)>([\s\S]*?)<\/\1>/gi;
  var out = [];
  var lastIndex = 0;
  var idx = 0;
  var m;
  while ((m = tokenRegex.exec(text)) !== null) {
    if (m.index > lastIndex) out.push(text.substring(lastIndex, m.index));
    var tag = m[1].toLowerCase();
    var isBold = (tag === 'strong' || tag === 'b');
    out.push(e(isBold ? 'strong' : 'em', { key: (keyPrefix || 'ir') + '-' + idx }, m[2]));
    lastIndex = tokenRegex.lastIndex;
    idx++;
  }
  if (idx === 0) return text;
  if (lastIndex < text.length) out.push(text.substring(lastIndex));
  return out;
}

// Format a single block of text with bold labels and optional sub-bullets
function formatRichBlock(text, keyPrefix) {
  if (!text || !text.trim()) return null;
  // Check if text contains any known labels
  var labelPattern = new RegExp('(?:\\. |^)(' + LABEL_KEYWORDS.join('|') + '):\\s');
  if (!labelPattern.test(text)) {
    // No labels — return as plain text (with inline emphasis markup applied)
    return e('span', { key: keyPrefix }, inlineRich(text, keyPrefix));
  }
  // Split text at label boundaries using manual approach for browser compat
  var segments = [];
  var labelSplitRegex = new RegExp('(?:\\. |^)(' + LABEL_KEYWORDS.join('|') + '):\\s', 'g');
  var lastIdx = 0;
  var match;
  while ((match = labelSplitRegex.exec(text)) !== null) {
    var matchStart = match[0].startsWith('. ') ? match.index + 2 : match.index;
    if (matchStart > lastIdx) {
      segments.push(text.substring(lastIdx, matchStart).replace(/\.\s*$/, ''));
    }
    lastIdx = matchStart;
  }
  if (lastIdx < text.length) segments.push(text.substring(lastIdx));
  segments = segments.filter(function(s) { return s && s.trim(); });
  if (segments.length <= 1 && !labelPattern.test(segments[0] || '')) {
    return e('span', { key: keyPrefix }, inlineRich(text, keyPrefix));
  }
  var result = [];
  segments.forEach(function(seg, si) {
    var labelMatch = seg.match(new RegExp('^(' + LABEL_KEYWORDS.join('|') + '):\\s(.*)$', 's'));
    if (labelMatch) {
      var label = labelMatch[1];
      var content = labelMatch[2].replace(/\.\s*$/, '').trim();
      var isSubbulletLabel = SUBBULLET_LABELS.indexOf(label) !== -1;
      // Check if content is comma-separated (3+ items suggests a list)
      var commaItems = content.split(/,\s*/);
      if (isSubbulletLabel && commaItems.length >= 3) {
        result.push(e('div', { key: keyPrefix + '-' + si, style: { marginTop: 8 } },
          e('strong', { style: { color: '#334155', fontSize: '.85rem' } }, label + ':'),
          e('ul', { style: { paddingLeft: 18, margin: '4px 0 0 0' } },
            commaItems.map(function(ci, j) {
              var t = ci.trim().replace(/\.\s*$/, '');
              return t ? e('li', { key: j, style: { marginBottom: 2, lineHeight: 1.5, fontSize: '.84rem', color: '#475569' } }, inlineRich(t, keyPrefix + '-' + si + '-li-' + j)) : null;
            }).filter(Boolean)
          )
        ));
      } else {
        // Label with content but not a comma list — bold label, inline content
        result.push(e('div', { key: keyPrefix + '-' + si, style: { marginTop: 4 } },
          e('strong', { style: { color: '#334155', fontSize: '.85rem' } }, label + ': '),
          e('span', { style: { fontSize: '.85rem' } }, inlineRich(content, keyPrefix + '-c-' + si))
        ));
      }
    } else {
      // Non-label segment (intro text)
      result.push(e('span', { key: keyPrefix + '-' + si, style: { fontSize: '.85rem' } }, inlineRich(seg.trim(), keyPrefix + '-s-' + si)));
    }
  });
  return e('div', { key: keyPrefix }, result);
}

// Format title:content pattern — first part before colon becomes bold title
function formatTitledItem(text, keyPrefix) {
  if (!text) return null;
  // Check for "Title: rest of content" pattern
  var titleMatch = text.match(/^([^:]{3,50}):\s(.+)$/s);
  if (titleMatch) {
    var title = titleMatch[1].trim();
    var rest = titleMatch[2].trim();
    // Check if rest contains sub-labels (Vorteile, Nachteile etc.)
    var labelPattern = new RegExp('(?:\\. |^)(' + LABEL_KEYWORDS.join('|') + '):\\s');
    if (labelPattern.test(rest)) {
      return e('div', { key: keyPrefix },
        e('strong', { style: { display: 'block', marginBottom: 4, color: '#1e293b', fontSize: '.88rem' } }, inlineRich(title, keyPrefix + '-t')),
        formatRichBlock(rest, keyPrefix + '-body')
      );
    }
    return e('div', { key: keyPrefix },
      e('strong', { style: { color: '#1e293b', fontSize: '.88rem' } }, inlineRich(title, keyPrefix + '-t'), ': '),
      e('span', { style: { fontSize: '.85rem' } }, inlineRich(rest, keyPrefix + '-r'))
    );
  }
  // No title pattern — check for labels in plain text
  var hasLabels = new RegExp('(?:\\. |^)(' + LABEL_KEYWORDS.join('|') + '):\\s').test(text);
  if (hasLabels) {
    return formatRichBlock(text, keyPrefix);
  }
  return null;
}

function formatText(text) {
  if (!text) return null;
  // Check for numbered lists (1., 2., 3.)
  var hasNumberedList = /(?:^|\n)\d+\.\s/.test(text);
  if (hasNumberedList) {
    var nlParts = text.split(/(?:^|\n)(?=\d+\.\s)/);
    var nlIntro = nlParts[0] && !/^\d+\.\s/.test(nlParts[0].trim()) ? nlParts.shift() : '';
    var nlItems = nlParts.filter(function(s) { return s && s.trim().length > 0; });
    if (nlItems.length > 0) {
      var nlElements = [];
      if (nlIntro && nlIntro.trim()) {
        nlElements.push(e('p', { key: 'intro', style: { marginBottom: 12, lineHeight: 1.7 } }, inlineRich(nlIntro.trim(), 'nl-intro')));
      }
      nlElements.push(e('ol', { key: 'list', style: { paddingLeft: 20, margin: '8px 0' } },
        nlItems.map(function(item, i) {
          var itemText = item.replace(/^\d+\.\s*/, '').trim();
          var rich = formatTitledItem(itemText, 'li-' + i);
          return e('li', { key: i, style: { marginBottom: 12, lineHeight: 1.6 } }, rich || inlineRich(itemText, 'nl-li-' + i));
        })
      ));
      return e('div', null, nlElements);
    }
  }
  // Check for dash list patterns (only at line starts or after colon)
  var hasListDashes = /(?:^|\n)\s*-\s/.test(text) || /(?<=[\.:])(\s*\n|\s{2,})-\s/.test(text);
  if (hasListDashes) {
    var parts = text.split(/\n\s*-\s|(?<=[\.:])(?:\s*\n|\s{2,})-\s/);
    if (/^\s*-\s/.test(text)) {
      parts = text.split(/(?:^|\n)\s*-\s/);
    }
    var intro = parts[0] ? parts[0].replace(/[:\s]*$/, '') : '';
    var items = parts.slice(1).filter(function(s) { return s.trim().length > 0; });
    if (items.length > 0) {
      var elements = [];
      if (intro.trim()) {
        elements.push(e('p', { key: 'intro', style: { marginBottom: 12, lineHeight: 1.7 } }, inlineRich(intro.trim(), 'dash-intro')));
      }
      elements.push(e('ul', { key: 'list', style: { paddingLeft: 20, margin: '8px 0' } },
        items.map(function(item, i) {
          var rich = formatTitledItem(item.trim(), 'li-' + i);
          return e('li', { key: i, style: { marginBottom: 6, lineHeight: 1.6, fontSize: '.88rem' } }, rich || inlineRich(item.trim(), 'dash-li-' + i));
        })
      ));
      return e('div', null, elements);
    }
  }
  // Check for labels in plain text (e.g., "Description. Vorteile: X, Y, Z. Nachteile: A, B, C.")
  var hasLabels = new RegExp('(' + LABEL_KEYWORDS.join('|') + '):\\s').test(text);
  if (hasLabels) {
    var rich = formatRichBlock(text, 'rich');
    if (rich) return e('div', { style: { lineHeight: 1.7 } }, rich);
  }
  // Check for paragraph breaks
  if (text.indexOf('\n\n') !== -1) {
    var paragraphs = text.split('\n\n').filter(function(s) { return s.trim(); });
    return e('div', null, paragraphs.map(function(p, i) {
      return e('p', { key: i, style: { marginBottom: 10, lineHeight: 1.7 } }, inlineRich(p.trim(), 'para-' + i));
    }));
  }
  // Check for single line breaks with content
  if (text.indexOf('\n') !== -1) {
    var lines = text.split('\n').filter(function(s) { return s.trim(); });
    if (lines.length > 1) {
      return e('div', null, lines.map(function(line, i) {
        return e('p', { key: i, style: { marginBottom: 6, lineHeight: 1.6 } }, inlineRich(line.trim(), 'line-' + i));
      }));
    }
  }
  // Plain text
  return e('p', { style: { lineHeight: 1.7 } }, inlineRich(text, 'plain'));
}

// ─── Learning Renderer ──────────────────────────────────────────────────────

function LearningRenderer(props) {
  var data = props.data;
  var bookId = props.bookId;
  var chId = props.chId;

  if (!data) {
    return e('div', { className: 'learn-container', style: { textAlign: 'center', padding: 40, color: 'var(--text2)' } },
      e('div', { style: { fontSize: '1rem', marginBottom: 12, color: 'var(--text2)' } }, ''),
      e('div', { style: { fontSize: '.95rem', fontWeight: 600 } }, 'Theorie wird bald erg\u00E4nzt'),
      e('div', { style: { fontSize: '.85rem', marginTop: 6 } }, 'Der Lerninhalt f\u00FCr dieses Kapitel wird in K\u00FCrze verf\u00FCgbar sein.')
    );
  }

  var readKey = 'lp-learn-' + bookId + '-' + chId;
  var st = useState(function() { return localStorage.getItem(readKey) === '1'; });
  var isRead = st[0], setIsRead = st[1];

  function markAsRead() {
    setIsRead(true);
    localStorage.setItem(readKey, '1');
    if (props.onLearnRead) props.onLearnRead();
  }

  function renderSection(section, idx) {
    var icon = '';
    var sectionClass = 'learn-section';

    if (section.type === 'intro') {
      icon = '';
      sectionClass += ' learn-intro';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          (section.content || section.text) ? e('div', { className: 'learn-intro-text' }, formatText(section.content || section.text)) : null,
          section.items ? e('ul', { className: 'learn-intro-list' },
            section.items.map(function(item, i) { return e('li', { key: i }, item); })
          ) : null
        )
      );
    }

    if (section.type === 'concept') {
      icon = '';
      sectionClass += ' learn-concept';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          (section.content || section.text) ? e('div', { className: 'learn-concept-text' }, formatText(section.content || section.text)) : null,
          section.highlight ? e('div', { className: 'learn-highlight' }, section.highlight) : null
        )
      );
    }

    if (section.type === 'svg') {
      icon = '';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          section.svg ? e('div', { style: { width: '100%', overflowX: 'auto', padding: '16px 0' }, dangerouslySetInnerHTML: { __html: section.svg.replace('<svg ', '<svg width="100%" ') } }) :
          e('div', { style: { padding: 20, textAlign: 'center', color: '#94a3b8', fontSize: '.85rem' } }, 'Grafik: ' + (section.id || ''))
        )
      );
    }

    if (section.type === 'table') {
      icon = '';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          e('div', { className: 'learn-table-wrap' },
            e('table', { className: 'learn-table' },
              section.headers ? e('thead', null,
                e('tr', null, section.headers.map(function(h, i) { return e('th', { key: i }, h); }))
              ) : null,
              e('tbody', null,
                (section.rows || []).map(function(row, ri) {
                  if (!Array.isArray(row)) return null;
                  return e('tr', { key: ri },
                    row.map(function(cell, ci) {
                      return e('td', { key: ci, className: ci === 0 ? 'table-label' : '' }, cell);
                    })
                  );
                })
              )
            )
          )
        )
      );
    }

    if (section.type === 'keyterms') {
      icon = '';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          e('div', { className: 'learn-terms-grid' },
            (section.terms || section.items || []).map(function(t, i) {
              // Unterstützt {term, def}-Objekte und einfache Strings
              if (typeof t === 'string') {
                return e('div', { key: i, className: 'learn-term-card' },
                  e('div', { className: 'learn-term-name' }, t)
                );
              }
              return e('div', { key: i, className: 'learn-term-card' },
                e('div', { className: 'learn-term-name' }, t.term),
                e('div', { className: 'learn-term-def' }, t.def)
              );
            })
          )
        )
      );
    }

    if (section.type === 'merke') {
      icon = '';
      sectionClass += ' learn-merke';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          section.items ? e('ul', { className: 'learn-merke-list' },
            section.items.filter(function(s) { return s && s.trim(); }).map(function(item, i) { return e('li', { key: i }, item.trim()); })
          ) : formatText(section.content || section.text || '')
        )
      );
    }

    if (section.type === 'methodenbox') {
      icon = '';
      sectionClass += ' learn-methodenbox';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          (section.content || section.text) ? e('div', { className: 'learn-method-text', style: { marginBottom: section.items ? 10 : 0 } }, formatText(section.content || section.text)) : null,
          section.items ? section.items.map(function(item, i) {
            // Unterstützt {q, a}-Objekte und einfache Strings
            if (typeof item === 'string') {
              var qm = item.indexOf('? ');
              if (qm > 0 && qm < item.length - 2) {
                return e('div', { key: i, className: 'learn-method-item' },
                  e('div', { className: 'learn-method-q' }, item.slice(0, qm + 1)),
                  e('div', { className: 'learn-method-a' }, item.slice(qm + 2))
                );
              }
              return e('div', { key: i, className: 'learn-method-item' },
                e('div', { className: 'learn-method-a' }, item)
              );
            }
            return e('div', { key: i, className: 'learn-method-item' },
              e('div', { className: 'learn-method-q' }, item.q),
              e('div', { className: 'learn-method-a' }, item.a)
            );
          }) : null
        )
      );
    }

    if (section.type === 'summary') {
      icon = '';
      sectionClass += ' learn-summary';
      return e('div', { key: idx, className: sectionClass },
        e('div', { className: 'learn-section-header' },
          e('span', { className: 'learn-section-icon' }, icon),
          e('span', { className: 'learn-section-title' }, section.title)
        ),
        e('div', { className: 'learn-section-body' },
          e('div', { className: 'learn-summary-text' },
            Array.isArray(section.items)
              ? section.items.map(function(p, i) { return e('div', { key: i, style: { marginBottom: 10, lineHeight: 1.7 } }, formatText(typeof p === 'string' ? p : (p.label ? p.label + ': ' + (p.text || p.val || '') : (p.text || p.val || JSON.stringify(p))))); })
              : Array.isArray(section.content)
                ? section.content.map(function(p, i) { return e('div', { key: i, style: { marginBottom: 10, lineHeight: 1.7 } }, formatText(p)); })
                : formatText(section.content || section.text || '')
          )
        )
      );
    }

    // Fallback
    return e('div', { key: idx, className: sectionClass },
      e('div', { className: 'learn-section-header' },
        e('span', { className: 'learn-section-icon' }, icon),
        e('span', { className: 'learn-section-title' }, section.title || 'Abschnitt')
      ),
      e('div', { className: 'learn-section-body' },
        formatText(section.content || section.text || '')
      )
    );
  }

  return e('div', { className: 'learn-container' },
    data.sections.map(function(section, idx) { return renderSection(section, idx); }),
    e('div', { className: 'learn-complete-bar' },
      e('span', { className: 'learn-progress-text' },
        isRead ? 'Du hast dieses Kapitel als gelesen markiert.' : 'Hast du den gesamten Lerninhalt durchgearbeitet?'
      ),
      e('button', {
        className: 'learn-complete-btn ' + (isRead ? 'done' : 'ready'),
        onClick: isRead ? null : markAsRead
      }, isRead ? '\u2713 Gelesen' : 'Als gelesen markieren')
    )
  );
}

// ─── Exam Mode ──────────────────────────────────────────────────────────────

function ExamMode(props) {
  var chapter = props.chapter, bookId = props.bookId, onBack = props.onBack, onRetry = props.onRetry;
  var exercises = chapter.exercises || [];
  var examCount = Math.max(2, Math.round(exercises.length * (0.6 + Math.random() * 0.2)));

  var st0 = useState('start'), phase = st0[0], setPhase = st0[1];
  var st1 = useState(function() { return shuffleArray(exercises).slice(0, examCount); });
  var examExercises = st1[0];
  var st2 = useState(15 * 60), timeLeft = st2[0], setTimeLeft = st2[1];
  var st3 = useState({}), results = st3[0], setResults = st3[1];
  var timerRef = useRef(null);
  var submitRef = useRef(null);

  var submit = useCallback(function() {
    clearInterval(timerRef.current);
    setPhase('results');
    var total = examExercises.length;
    var correct = 0;
    examExercises.forEach(function(ex) {
      var r = results[ex.id];
      if (r && r.done && r.score >= 60) correct++;
    });
    saveExamScore(bookId, chapter.id, correct, total);
  }, [results, examExercises, bookId, chapter.id]);

  submitRef.current = submit;

  useEffect(function() {
    if (phase === 'running' && timeLeft > 0) {
      timerRef.current = setInterval(function() {
        setTimeLeft(function(t) {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setTimeout(function() { if (submitRef.current) submitRef.current(); }, 0);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return function() { clearInterval(timerRef.current); };
    }
  }, [phase]);

  function markExamDone(exId, score) {
    setResults(function(r) { var n = Object.assign({}, r); n[exId] = { done: true, score: score }; return n; });
  }

  function startExam() { setPhase('running'); }

  var bestScores = loadExamScores(bookId);
  var best = bestScores[chapter.id];

  // Start screen
  if (phase === 'start') {
    return e('div', { className: 'exam-start-screen' },
      e('div', { className: 'exam-start-icon' }, '\uD83C\uDFAF'),
      e('div', { className: 'exam-start-title' }, 'Pr\u00FCfungsmodus'),
      e('div', { className: 'exam-start-desc' },
        examExercises.length + ' zuf\u00E4llig ausgew\u00E4hlte Aufgaben aus ' + exercises.length + ' Aufgaben. Timer: 15 Minuten. Keine Tipps, keine L\u00F6sungen.'
      ),
      best ? e('div', { className: 'exam-start-meta' }, 'Beste Leistung: ' + best.pct + '% (' + best.date + ')') : null,
      e('button', { className: 'exam-start-btn', onClick: startExam }, 'Pr\u00FCfung starten')
    );
  }

  // Results screen
  if (phase === 'results') {
    var total = examExercises.length;
    var correct = 0;
    examExercises.forEach(function(ex) {
      var r = results[ex.id];
      if (r && r.done && r.score >= 60) correct++;
    });
    var pct = total > 0 ? Math.round(correct / total * 100) : 0;
    var passed = pct >= 60;

    return e('div', { className: 'score-screen' },
      e('div', { className: 'score-circle ' + (passed ? 'pass' : 'fail') },
        e('div', { className: 'score-pct' }, pct + '%'),
        e('div', { className: 'score-label' }, passed ? 'Bestanden' : 'Nicht bestanden')
      ),
      e('div', { className: 'score-details' }, correct + ' / ' + total + ' Aufgaben korrekt'),
      e('div', { className: 'score-pass ' + (passed ? 'pass' : 'fail') },
        passed ? 'Gratulation! Kapitel bestanden.' : 'Leider nicht bestanden. Mindestens 60% erforderlich.'
      ),
      best ? e('div', { className: 'score-best' }, 'Beste Leistung: ' + best.pct + '% (' + best.date + ')') : null,
      e('div', { className: 'score-list' },
        examExercises.map(function(ex) {
          var r = results[ex.id];
          var ok = r && r.done && r.score >= 60;
          return e('div', { key: ex.id, className: 'score-list-item' },
            e('div', { className: 'score-list-icon ' + (ok ? 'ok' : 'nok') }, ok ? '\u2713' : '\u2717'),
            e('span', null, (ex.q || ex.title) ? (ex.q || ex.title).substring(0, 60) + ((ex.q || ex.title).length > 60 ? '...' : '') : 'Aufgabe ' + ex.id),
            r && r.done
              ? e('span', { style: { marginLeft: 'auto', fontWeight: 600, color: ok ? 'var(--green)' : 'var(--red)' } }, r.score + '%')
              : e('span', { style: { marginLeft: 'auto', color: 'var(--text2)', fontSize: '.8rem' } }, 'Nicht bearbeitet')
          );
        })
      ),
      e('div', { className: 'exam-btns' },
        e('button', { className: 'btn btn-primary', onClick: onRetry }, 'Nochmal'),
        e('button', { className: 'btn btn-secondary', onClick: onBack }, 'Zur\u00FCck zum Kapitel')
      )
    );
  }

  // Running exam
  return e('div', null,
    e('div', { className: 'exam-timer-bar' },
      e('div', { className: 'exam-timer-info' }, examExercises.length + ' Aufgaben'),
      e('div', { className: 'exam-timer-clock' + (timeLeft < 120 ? ' urgent' : '') },
        formatTime(timeLeft)
      ),
      e('button', { className: 'exam-submit-btn', onClick: submit }, 'Abgeben')
    ),
    e('div', { className: 'exercise-list', style: { paddingTop: 12 } },
      examExercises.map(function(ex, idx) {
        var r = results[ex.id];
        var isDone = r && r.done;
        return e('div', { key: ex.id, className: 'ex-card' },
          e('div', { className: 'ex-header', style: { cursor: 'default' } },
            e('span', { className: 'ex-num' + (isDone ? ' done' : '') }, idx + 1),
            e('div', { className: 'ex-title-wrap' },
              e('div', { className: 'ex-title' }, (ex.q || ex.title) ? (ex.q || ex.title).substring(0, 80) : 'Aufgabe ' + ex.id),
              e('div', { className: 'ex-type' }, TYPE_LABELS[ex.type] || ex.type),
              isDone ? e('span', { className: 'score-badge good' }, 'Bearbeitet') : null
            )
          ),
          e('div', { className: 'ex-body' },
            e(ExerciseCard, {
              ex: ex,
              examMode: true,
              onDone: function(score) { markExamDone(ex.id, score); }
            })
          )
        );
      })
    )
  );
}

// ─── Calculator Panel ───────────────────────────────────────────────────────

function Calculator(props) {
  var onClose = props.onClose;
  var st = useState('0'), disp = st[0], setDisp = st[1];
  var st2 = useState(null), prev = st2[0], setPrev = st2[1];
  var st3 = useState(null), op = st3[0], setOp = st3[1];
  var st4 = useState(true), fresh = st4[0], setFresh = st4[1];
  var st5 = useState([]), hist = st5[0], setHist = st5[1];

  function num(n) { if (fresh) { setDisp(String(n)); setFresh(false); } else { setDisp(disp === '0' ? String(n) : disp + n); } }
  function dec() { if (fresh) { setDisp('0.'); setFresh(false); } else if (disp.indexOf('.') === -1) setDisp(disp + '.'); }
  function calc(a, b, o) { if (o === '+') return a + b; if (o === '\u2212') return a - b; if (o === '\u00D7') return a * b; if (o === '\u00F7') return b !== 0 ? a / b : 0; return b; }
  function oper(o) {
    var cur = parseFloat(disp);
    if (prev !== null && op && !fresh) {
      var r = calc(prev, cur, op);
      setDisp(String(Math.round(r * 1e8) / 1e8));
      setPrev(r);
      setHist(function(h) { return h.concat([prev + ' ' + op + ' ' + cur + ' = ' + Math.round(r * 1e8) / 1e8]); });
    } else { setPrev(cur); }
    setOp(o); setFresh(true);
  }
  function eq() {
    if (prev === null || !op) return;
    var cur = parseFloat(disp);
    var r = calc(prev, cur, op);
    setHist(function(h) { return h.concat([prev + ' ' + op + ' ' + cur + ' = ' + Math.round(r * 1e8) / 1e8]); });
    setDisp(String(Math.round(r * 1e8) / 1e8)); setPrev(null); setOp(null); setFresh(true);
  }
  function cl() { setDisp('0'); setPrev(null); setOp(null); setFresh(true); }
  function pct() { setDisp(String(Math.round(parseFloat(disp) / 100 * 1e8) / 1e8)); }
  function sign() { setDisp(String(parseFloat(disp) * -1)); }
  function b(label, action, cls) { return e('button', { className: 'calc-btn ' + cls, onClick: action }, label); }

  return e('div', { className: 'panel-overlay calc-panel' },
    e('div', { className: 'panel-header' }, e('b', null, 'Taschenrechner'), e('button', { className: 'panel-close', onClick: onClose }, '\u2715')),
    hist.length > 0 ? e('div', { className: 'calc-history' }, hist.slice(-3).map(function(h, i) { return e('div', { key: i, className: 'calc-history-item' }, h); })) : null,
    e('div', { className: 'calc-display' }, disp),
    e('div', { className: 'calc-prev' }, prev !== null && op ? (prev + ' ' + op) : ''),
    e('div', { className: 'calc-grid' },
      b('AC', cl, 'calc-btn-fn'), b('\u00B1', sign, 'calc-btn-op'), b('%', pct, 'calc-btn-op'), b('\u00F7', function() { oper('\u00F7'); }, 'calc-btn-op'),
      b('7', function() { num('7'); }, 'calc-btn-num'), b('8', function() { num('8'); }, 'calc-btn-num'), b('9', function() { num('9'); }, 'calc-btn-num'), b('\u00D7', function() { oper('\u00D7'); }, 'calc-btn-op'),
      b('4', function() { num('4'); }, 'calc-btn-num'), b('5', function() { num('5'); }, 'calc-btn-num'), b('6', function() { num('6'); }, 'calc-btn-num'), b('\u2212', function() { oper('\u2212'); }, 'calc-btn-op'),
      b('1', function() { num('1'); }, 'calc-btn-num'), b('2', function() { num('2'); }, 'calc-btn-num'), b('3', function() { num('3'); }, 'calc-btn-num'), b('+', function() { oper('+'); }, 'calc-btn-op'),
      b('0', function() { num('0'); }, 'calc-btn-num calc-btn-span2'), b('.', dec, 'calc-btn-num'), b('=', eq, 'calc-btn-eq')
    )
  );
}

// ─── Notes Panel ────────────────────────────────────────────────────────────

function Notes(props) {
  return e('div', { className: 'panel-overlay notes-panel' },
    e('div', { className: 'panel-header' },
      e('b', null, 'Notizen'),
      e('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
        e('span', { className: 'notes-meta' }, props.notes.length + ' Zeichen'),
        e('button', { className: 'panel-close', onClick: props.onClose }, '\u2715')
      )
    ),
    e('div', { className: 'notes-body' },
      e('textarea', { value: props.notes, onChange: function(ev) { props.setNotes(ev.target.value); }, placeholder: 'Notizen, Stichworte\u2026' })
    )
  );
}

// ─── Glossary Panel ─────────────────────────────────────────────────────────

// ─── Karteikarten-Trainer ───────────────────────────────────────────────────

function collectFlashcards(bookData) {
  var cards = [];
  (bookData.chapters || []).forEach(function(ch) {
    (((ch.learningData || {}).sections) || []).forEach(function(s) {
      if (s.type === 'keyterms' && s.terms) {
        s.terms.forEach(function(t) {
          if (t && typeof t === 'object' && t.term && t.def) {
            cards.push({ term: t.term, def: t.def, ch: ch.num || ch.id });
          }
        });
      }
    });
  });
  return cards;
}

function loadKnownCards(bookId) {
  try { return JSON.parse(localStorage.getItem('lp-cards-' + bookId)) || {}; } catch (x) { return {}; }
}

function Flashcards(props) {
  var bookData = props.bookData, onClose = props.onClose;
  var allCards = useMemo(function() { return collectFlashcards(bookData); }, [bookData]);
  var stKnown = useState(function() { return loadKnownCards(bookData.id); });
  var known = stKnown[0], setKnown = stKnown[1];
  var stMode = useState(null), mode = stMode[0], setMode = stMode[1]; // null | 'alle' | 'offene'
  var stDeck = useState([]), deck = stDeck[0], setDeck = stDeck[1];
  var stIdx = useState(0), idx = stIdx[0], setIdx = stIdx[1];
  var stFlip = useState(false), flipped = stFlip[0], setFlipped = stFlip[1];
  var stStats = useState({ ok: 0, again: 0 }), stats = stStats[0], setStats = stStats[1];

  var knownCount = allCards.filter(function(c) { return known[c.term]; }).length;

  function start(m) {
    var pool = m === 'offene' ? allCards.filter(function(c) { return !known[c.term]; }) : allCards.slice();
    setDeck(shuffleArray(pool));
    setIdx(0); setFlipped(false); setStats({ ok: 0, again: 0 }); setMode(m);
  }

  function saveKnown(next) {
    setKnown(next);
    localStorage.setItem('lp-cards-' + bookData.id, JSON.stringify(next));
  }

  function answer(gotIt) {
    var card = deck[idx];
    var next = Object.assign({}, known);
    if (gotIt) { next[card.term] = 1; } else { delete next[card.term]; }
    saveKnown(next);
    setStats({ ok: stats.ok + (gotIt ? 1 : 0), again: stats.again + (gotIt ? 0 : 1) });
    if (gotIt) {
      setFlipped(false); setIdx(idx + 1);
    } else {
      // Karte weiter hinten erneut einreihen
      var d = deck.slice();
      d.splice(idx, 1);
      d.splice(Math.min(idx + 3, d.length), 0, card);
      setDeck(d); setFlipped(false);
    }
  }

  var body;
  if (allCards.length === 0) {
    body = e('div', { className: 'fc-empty' }, 'Für dieses Buch sind keine Karteikarten verfügbar.');
  } else if (mode === null) {
    body = e('div', { className: 'fc-start' },
      e('div', { className: 'fc-start-stat' },
        e('span', { className: 'fc-start-num' }, allCards.length),
        ' Begriffe aus ', e('span', { className: 'fc-start-num' }, bookData.chapters.length), ' Kapiteln',
        knownCount > 0 ? e('div', { className: 'fc-start-known' }, knownCount + ' davon als gewusst markiert') : null
      ),
      e('button', { className: 'fc-btn fc-btn-primary', onClick: function() { start('alle'); } }, 'Alle Begriffe üben'),
      knownCount > 0 && knownCount < allCards.length ? e('button', { className: 'fc-btn fc-btn-secondary', onClick: function() { start('offene'); } }, 'Nur offene üben (' + (allCards.length - knownCount) + ')') : null,
      e('div', { className: 'fc-hint' }, 'Karte antippen zum Umdrehen. Danach ehrlich bewerten – nicht Gewusstes kommt gleich nochmals.')
    );
  } else if (idx >= deck.length) {
    body = e('div', { className: 'fc-start' },
      e('div', { className: 'fc-done-icon' }, '✓'),
      e('div', { className: 'fc-start-stat' }, 'Runde beendet: ',
        e('span', { className: 'fc-start-num' }, stats.ok), ' gewusst, ',
        e('span', { className: 'fc-start-num' }, stats.again), ' wiederholt'
      ),
      e('button', { className: 'fc-btn fc-btn-primary', onClick: function() { setMode(null); } }, 'Zurück zur Übersicht')
    );
  } else {
    var card = deck[idx];
    body = e('div', { className: 'fc-play' },
      e('div', { className: 'fc-progress' },
        e('span', null, (idx + 1) + ' / ' + deck.length),
        e('span', { className: 'fc-progress-ch' }, String(card.ch).indexOf('Kapitel') >= 0 ? card.ch : 'Kapitel ' + card.ch)
      ),
      e('div', { className: 'fc-card' + (flipped ? ' flipped' : ''), onClick: function() { setFlipped(!flipped); } },
        e('div', { className: 'fc-card-inner' },
          e('div', { className: 'fc-face fc-front' },
            e('div', { className: 'fc-face-label' }, 'Begriff'),
            e('div', { className: 'fc-term' }, card.term),
            e('div', { className: 'fc-tap' }, 'Antippen zum Umdrehen')
          ),
          e('div', { className: 'fc-face fc-back' },
            e('div', { className: 'fc-face-label' }, 'Definition'),
            e('div', { className: 'fc-def' }, card.def)
          )
        )
      ),
      flipped ? e('div', { className: 'fc-actions' },
        e('button', { className: 'fc-btn fc-btn-again', onClick: function() { answer(false); } }, 'Nochmals'),
        e('button', { className: 'fc-btn fc-btn-ok', onClick: function() { answer(true); } }, 'Gewusst')
      ) : e('div', { className: 'fc-actions fc-actions-placeholder' })
    );
  }

  return e('div', { className: 'fc-backdrop', onClick: function(ev) { if (ev.target === ev.currentTarget) onClose(); } },
    e('div', { className: 'fc-modal' },
      e('div', { className: 'panel-header' },
        e('b', null, 'Karteikarten'),
        mode !== null && idx < deck.length ? e('button', { className: 'fc-header-link', onClick: function() { setMode(null); } }, 'Übersicht') : null,
        e('button', { className: 'panel-close', onClick: onClose }, '✕')
      ),
      body
    )
  );
}

// ─── Prüfungs-Spickzettel ───────────────────────────────────────────────────

function collectCheatsheet(bookData) {
  var out = [];
  (bookData.chapters || []).forEach(function(ch) {
    var points = [];
    (((ch.learningData || {}).sections) || []).forEach(function(s) {
      if (s.type === 'merke') {
        if (s.items) { s.items.forEach(function(it) { if (typeof it === 'string') points.push(it); }); }
        else if (typeof (s.content || s.text) === 'string') { points.push(s.content || s.text); }
      }
    });
    if (points.length) out.push({ num: ch.num || ch.id, title: ch.title, points: points });
  });
  return out;
}

function Cheatsheet(props) {
  var bookData = props.bookData, onClose = props.onClose;
  var data = useMemo(function() { return collectCheatsheet(bookData); }, [bookData]);
  var total = data.reduce(function(s, c) { return s + c.points.length; }, 0);

  return e('div', { className: 'fc-backdrop', onClick: function(ev) { if (ev.target === ev.currentTarget) onClose(); } },
    e('div', { className: 'fc-modal cs-modal' },
      e('div', { className: 'panel-header' },
        e('b', null, 'Prüfungs-Spickzettel'),
        e('span', { className: 'cs-count' }, total + ' Merksätze'),
        e('button', { className: 'panel-close', onClick: onClose }, '✕')
      ),
      e('div', { className: 'cs-body' },
        data.length === 0 ? e('div', { className: 'fc-empty' }, 'Für dieses Buch sind keine Merksätze verfügbar.') :
        data.map(function(ch, i) {
          return e('div', { key: i, className: 'cs-chapter' },
            e('div', { className: 'cs-ch-title' },
              e('span', { className: 'cs-ch-num' }, String(ch.num).indexOf('Kapitel') >= 0 ? ch.num : 'Kapitel ' + ch.num),
              ' ' + ch.title
            ),
            e('ul', { className: 'cs-list' },
              ch.points.map(function(p, j) { return e('li', { key: j }, p); })
            )
          );
        })
      )
    )
  );
}

function Glossary(props) {
  var st = useState(''), search = st[0], setSearch = st[1];
  var glossary = props.glossary || [];
  var filtered = glossary.filter(function(g) {
    return g.term.toLowerCase().indexOf(search.toLowerCase()) >= 0 || g.def.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  });

  return e('div', { className: 'panel-overlay glossary-panel' },
    e('div', { className: 'panel-header' }, e('b', null, 'Glossar'), e('button', { className: 'panel-close', onClick: props.onClose }, '\u2715')),
    e('div', { className: 'glossary-search' }, e('input', { value: search, onChange: function(ev) { setSearch(ev.target.value); }, placeholder: 'Suchen\u2026' })),
    e('div', { className: 'glossary-list' },
      filtered.map(function(g, i) {
        return e('div', { key: i, className: 'glossary-item' },
          e('div', { className: 'glossary-item-title' }, g.term),
          e('div', { className: 'glossary-item-desc' }, g.def)
        );
      }),
      filtered.length === 0 ? e('div', { style: { padding: 16, textAlign: 'center', color: 'var(--text2)', fontSize: '.8rem' } }, 'Keine Eintr\u00E4ge gefunden.') : null
    )
  );
}

// ─── Kontenrahmen Panel ─────────────────────────────────────────────────────

function Kontenrahmen(props) {
  var st = useState(''), search = st[0], setSearch = st[1];
  var st2 = useState(1), activeTab = st2[0], setActiveTab = st2[1];
  var kontenrahmen = props.kontenrahmen || [];

  var activeCls = kontenrahmen.find(function(c) { return c.cls === activeTab; });

  var filteredGroups = [];
  if (activeCls) {
    if (search) {
      var s = search.toLowerCase();
      activeCls.groups.forEach(function(g) {
        var matchedAccounts = g.accounts.filter(function(a) {
          return a.nr.indexOf(s) >= 0 || a.n.toLowerCase().indexOf(s) >= 0;
        });
        if (matchedAccounts.length > 0) {
          filteredGroups.push({ name: g.name, accounts: matchedAccounts });
        }
      });
    } else {
      filteredGroups = activeCls.groups;
    }
  }

  return e('div', { className: 'panel-overlay kr-panel' },
    e('div', { className: 'panel-header' }, e('b', null, 'Kontenrahmen KMU'), e('button', { className: 'panel-close', onClick: props.onClose }, '\u2715')),
    e('div', { className: 'kr-search' }, e('input', { value: search, onChange: function(ev) { setSearch(ev.target.value); }, placeholder: 'Konto suchen (Nr. oder Name)\u2026' })),
    e('div', { className: 'kr-tabs' },
      kontenrahmen.map(function(c) {
        return e('button', {
          key: c.cls,
          className: 'kr-tab' + (activeTab === c.cls ? ' active' : ''),
          onClick: function() { setActiveTab(c.cls); setSearch(''); }
        }, String(c.cls));
      })
    ),
    activeCls ? e('div', { className: 'kr-class-header' }, 'Klasse ' + activeCls.cls + ': ' + activeCls.clsName) : null,
    e('div', { className: 'kr-list' },
      filteredGroups.map(function(g, gi) {
        return e('div', { key: gi, className: 'kr-group' },
          e('div', { className: 'kr-group-title' }, g.name),
          g.accounts.map(function(a, ai) {
            return e('div', { key: ai, className: 'kr-account' },
              e('span', { className: 'kr-num' }, a.nr),
              e('span', { className: 'kr-name' }, a.n)
            );
          })
        );
      }),
      filteredGroups.length === 0 ? e('div', { style: { padding: 16, textAlign: 'center', color: 'var(--text2)', fontSize: '.8rem' } }, 'Keine Konten gefunden.') : null
    )
  );
}

// ─── Mode Tabs ──────────────────────────────────────────────────────────────

function ModeTabs(props) {
  var mode = props.mode, setMode = props.setMode;
  var chProgress = props.chProgress;
  var bestExam = props.bestExam;
  var learnRead = props.learnRead;
  var hasLearningData = props.hasLearningData;

  return e('div', { className: 'mode-tabs' },
    hasLearningData ? e('button', {
      className: 'mode-tab' + (mode === 'lernen' ? ' active-lernen' : ''),
      onClick: function() { setMode('lernen'); }
    },
      'Lernen',
      learnRead ? e('span', { className: 'mode-badge' }, '\u2713') : null
    ) : null,
    e('button', {
      className: 'mode-tab' + (mode === 'ueben' ? ' active-ueben' : ''),
      onClick: function() { setMode('ueben'); }
    },
      '\u00DCben',
      chProgress ? e('span', { className: 'mode-badge' }, chProgress.done + '/' + chProgress.total) : null
    ),
    e('button', {
      className: 'mode-tab' + (mode === 'pruefung' ? ' active-pruefung' : ''),
      onClick: function() { setMode('pruefung'); }
    },
      'Pr\u00FCfung',
      bestExam ? e('span', { className: 'mode-badge' }, bestExam.pct + '%') : null
    )
  );
}

// ─── Buchungssätze-Trainer ────────────────────────────────────────────────────

var BS_KONTEN = [
  'Kasse','Bank','Forderungen L+L','Warenvorrat','Mobilien',
  'Verbindlichkeiten L+L','Darlehen','Eigenkapital',
  'Warenaufwand','Warenertrag','Lohnaufwand','Mietaufwand',
  'Verwaltungsaufwand','Finanzaufwand','Finanzertrag'
];

function BuchungssaetzeTrainer(props) {
  var bookData = props.bookData, onClose = props.onClose;
  var bsData = bookData.buchungssaetze || [];
  if (bsData.length === 0) return e('div', null, 'Keine Buchungss\u00e4tze verf\u00fcgbar.');

  var stP = useState(function() {
    try { return JSON.parse(localStorage.getItem('lp-bs-' + bookData.id)) || {}; } catch(x) { return {}; }
  });
  var bsProgress = stP[0], setBsProgress = stP[1];
  var st = useState(null), openId = st[0], setOpenId = st[1];
  var st2 = useState(0), diffFilter = st2[0], setDiffFilter = st2[1];
  var stSoll = useState({}), sollSel = stSoll[0], setSollSel = stSoll[1];
  var stHaben = useState({}), habenSel = stHaben[0], setHabenSel = stHaben[1];
  var stChecked = useState({}), checked = stChecked[0], setChecked = stChecked[1];
  var stShowTip = useState({}), showTip = stShowTip[0], setShowTip = stShowTip[1];

  useEffect(function() { localStorage.setItem('lp-bs-' + bookData.id, JSON.stringify(bsProgress)); }, [bsProgress]);

  var sorted = bsData.slice().sort(function(a,b) {
    if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
    return bsData.indexOf(a) - bsData.indexOf(b);
  });

  var filtered = diffFilter === 0 ? sorted : sorted.filter(function(bs) { return bs.difficulty === diffFilter; });

  var counts = {1:0,2:0,3:0}, doneCounts = {1:0,2:0,3:0};
  sorted.forEach(function(bs) {
    counts[bs.difficulty]++;
    if (bsProgress[bs.id]) doneCounts[bs.difficulty]++;
  });
  var totalDone = Object.keys(bsProgress).length;
  var totalPct = sorted.length > 0 ? Math.round(totalDone / sorted.length * 100) : 0;

  function checkBS(bs) {
    var s = sollSel[bs.id], h = habenSel[bs.id];
    var correct = s === bs.soll && h === bs.haben;
    setChecked(function(prev) { var n = Object.assign({}, prev); n[bs.id] = { correct: correct, soll: s, haben: h }; return n; });
    if (correct) setBsProgress(function(prev) { var n = Object.assign({}, prev); n[bs.id] = true; return n; });
  }

  function retryBS(bs) {
    setSollSel(function(p) { var n = Object.assign({}, p); delete n[bs.id]; return n; });
    setHabenSel(function(p) { var n = Object.assign({}, p); delete n[bs.id]; return n; });
    setChecked(function(p) { var n = Object.assign({}, p); delete n[bs.id]; return n; });
  }

  function renderSelect(bsId, value, setter, label) {
    return e('select', {
      value: value || '',
      onChange: function(ev) { setter(function(p) { var n = Object.assign({}, p); n[bsId] = ev.target.value; return n; }); },
      style: { padding: '8px 12px', fontSize: '.85rem', borderRadius: 8, border: '2px solid var(--border)', background: 'var(--card)', color: 'var(--text)', minWidth: 180, cursor: 'pointer' }
    },
      e('option', { value: '' }, '-- ' + label + ' w\u00e4hlen --'),
      BS_KONTEN.map(function(k) { return e('option', { key: k, value: k }, k); })
    );
  }

  return e('div', { className: 'container' },
    e('div', { style: { marginBottom: 24 } },
      e('button', { className: 'btn-back', onClick: onClose, style: { marginBottom: 16 } }, '\u2190 Zur\u00fcck zu Kapiteln'),
      e('h2', { style: { margin: '0 0 4px', fontSize: '1.3rem', fontWeight: 700 } }, 'Buchungss\u00e4tze-Trainer'),
      e('p', { style: { margin: '0 0 16px', color: 'var(--text2)', fontSize: '.85rem' } },
        sorted.length + ' Gesch\u00e4ftsf\u00e4lle \u2013 w\u00e4hle f\u00fcr jeden das richtige Soll- und Haben-Konto'
      ),
      e('div', { className: 'progress-bar', style: { maxWidth: 400, marginBottom: 16 } },
        e('div', { className: 'progress-fill', style: { width: totalPct + '%', background: totalPct === 100 ? 'var(--green)' : 'var(--accent)' } })
      ),
      e('div', { style: { fontSize: '.78rem', color: 'var(--text2)', marginBottom: 16 } }, totalDone + '/' + sorted.length + ' korrekt (' + totalPct + '%)'),

      // Difficulty filter
      e('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 } },
        e('button', {
          onClick: function() { setDiffFilter(0); },
          style: { padding: '6px 16px', fontSize: '.8rem', fontWeight: 600, borderRadius: 20, border: '1px solid var(--border)', background: diffFilter === 0 ? 'var(--accent)' : 'var(--card)', color: diffFilter === 0 ? '#fff' : 'var(--text)', cursor: 'pointer' }
        }, 'Alle (' + sorted.length + ')'),
        [1,2,3].map(function(d) {
          return e('button', {
            key: d,
            onClick: function() { setDiffFilter(d); },
            style: { padding: '6px 16px', fontSize: '.8rem', fontWeight: 600, borderRadius: 20, border: '2px solid ' + (diffFilter === d ? DIFF_COLORS[d] : 'var(--border)'), background: diffFilter === d ? DIFF_COLORS[d] : 'var(--card)', color: diffFilter === d ? '#fff' : 'var(--text)', cursor: 'pointer' }
          }, DIFF_LABELS[d] + ' (' + doneCounts[d] + '/' + counts[d] + ')');
        })
      ),

      // Merke box
      e('div', { style: { padding: '12px 16px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)', marginBottom: 20, fontSize: '.82rem', lineHeight: 1.5 } },
        e('strong', null, 'Merke: '), 'Soll an Haben \u2013 ',
        'Aktivkonten (Verm\u00f6gen): Zunahme = Soll, Abnahme = Haben. ',
        'Passivkonten (Schulden/EK): Zunahme = Haben, Abnahme = Soll. ',
        'Aufwandskonten: Zunahme = Soll. Ertragskonten: Zunahme = Haben.'
      )
    ),

    // Exercise list
    filtered.map(function(bs, idx) {
      var isDone = !!bsProgress[bs.id];
      var isOpen = openId === bs.id;
      var ch = checked[bs.id];
      var tip = showTip[bs.id];

      return e('div', { key: bs.id, className: 'ex-card', style: { marginBottom: 12 } },
        e('div', { className: 'ex-header', onClick: function() { setOpenId(isOpen ? null : bs.id); } },
          e('span', { className: 'ex-num' + (isDone ? ' done' : ''), style: { background: isDone ? 'var(--green)' : DIFF_COLORS[bs.difficulty], color: '#fff' } }, idx + 1),
          e('div', { className: 'ex-title-wrap' },
            e('div', { className: 'ex-title' }, bs.q),
            e('div', { style: { display: 'flex', gap: 8, alignItems: 'center', marginTop: 2 } },
              e('span', { style: { fontSize: '.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10, background: DIFF_COLORS[bs.difficulty] + '18', color: DIFF_COLORS[bs.difficulty], border: '1px solid ' + DIFF_COLORS[bs.difficulty] + '40' } }, DIFF_LABELS[bs.difficulty]),
              bs.betrag ? e('span', { style: { fontSize: '.7rem', color: 'var(--text2)' } }, 'CHF ' + bs.betrag.toLocaleString('de-CH')) : null
            ),
            isDone ? e('span', { className: 'score-badge good' }, 'Korrekt') : null
          ),
          e('span', { className: 'ch-arrow' + (isOpen ? ' open' : '') }, '\u25BC')
        ),

        isOpen ? e('div', { className: 'ex-body', style: { padding: '16px 20px' } },
          e('div', { style: { fontSize: '.9rem', marginBottom: 16, lineHeight: 1.5 } }, bs.q),

          // Soll / Haben Selection
          e('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 16 } },
            e('div', null,
              e('div', { style: { fontSize: '.75rem', fontWeight: 700, color: '#059669', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.05em' } }, 'Soll (Belastung)'),
              renderSelect(bs.id, sollSel[bs.id], setSollSel, 'Soll-Konto')
            ),
            e('div', { style: { display: 'flex', alignItems: 'center', paddingTop: 22, fontSize: '1.2rem', fontWeight: 700, color: 'var(--text2)' } }, '/'),
            e('div', null,
              e('div', { style: { fontSize: '.75rem', fontWeight: 700, color: '#ef4444', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.05em' } }, 'Haben (Gutschrift)'),
              renderSelect(bs.id, habenSel[bs.id], setHabenSel, 'Haben-Konto')
            )
          ),

          // Check button or result
          !ch ? e('div', { style: { display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' } },
            e('button', {
              onClick: function() { checkBS(bs); },
              disabled: !sollSel[bs.id] || !habenSel[bs.id],
              className: 'btn-check',
              style: { opacity: (!sollSel[bs.id] || !habenSel[bs.id]) ? .5 : 1 }
            }, 'Pr\u00fcfen'),
            e('button', {
              onClick: function() { setShowTip(function(p) { var n = Object.assign({}, p); n[bs.id] = !p[bs.id]; return n; }); },
              style: { padding: '8px 16px', fontSize: '.82rem', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text2)', cursor: 'pointer' }
            }, tip ? 'Tipp ausblenden' : 'Tipp')
          ) : null,

          // Tip
          tip && !ch ? e('div', { style: { marginTop: 12, padding: '10px 14px', borderRadius: 8, background: '#fef3c7', border: '1px solid #fbbf24', fontSize: '.82rem', color: '#92400e' } },
            'Soll an Haben: ', bs.soll, ' / ', bs.haben
          ) : null,

          // Result
          ch ? e('div', { style: { marginTop: 4 } },
            e('div', { style: { padding: '12px 16px', borderRadius: 10, background: ch.correct ? '#dcfce7' : '#fee2e2', border: '1px solid ' + (ch.correct ? '#86efac' : '#fca5a5'), marginBottom: 12 } },
              e('div', { style: { fontWeight: 700, fontSize: '.9rem', color: ch.correct ? '#166534' : '#991b1b', marginBottom: 4 } },
                ch.correct ? '\u2705 Korrekt!' : '\u274C Leider falsch'
              ),
              !ch.correct ? e('div', { style: { fontSize: '.82rem', color: '#991b1b', marginBottom: 8 } },
                'Deine Antwort: ', ch.soll, ' / ', ch.haben,
                e('br'),
                e('strong', null, 'Richtig: '), bs.soll, ' / ', bs.haben
              ) : null,
              e('div', { style: { fontSize: '.82rem', color: ch.correct ? '#166534' : '#991b1b', lineHeight: 1.5 } },
                e('strong', null, 'Erkl\u00e4rung: '), bs.explain
              )
            ),
            !ch.correct ? e('button', {
              onClick: function() { retryBS(bs); },
              style: { padding: '8px 16px', fontSize: '.82rem', fontWeight: 600, borderRadius: 8, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer' }
            }, '\u21BB Nochmal versuchen') : null
          ) : null
        ) : null
      );
    }),
    e('div', { className: 'footer' }, 'Built by Leandro \u00b7 Compendio Bildungsmedien')
  );
}

// ─── Berechnungs-Trainer ─────────────────────────────────────────────────────

var CALC_DIFFICULTY = {
  11: 1, 46: 1, 47: 1, 48: 1, 178: 1, 230: 1, 89: 1, 124: 1, 160: 1,
  18: 2, 30: 2, 58: 2, 59: 2, 80: 2, 187: 2, 205: 2, 206: 2, 90: 2, 91: 2, 125: 2, 141: 2, 161: 2, 189: 2, 190: 2,
  60: 3, 81: 3, 82: 3, 140: 3, 204: 3, 142: 3, 162: 3, 250: 3,
  // Fallstudien-Rechnungen mit mehreren Feldern und Zufallsvarianten
  98: 3, 101: 3, 102: 3, 103: 3
};

var DIFF_LABELS = { 1: 'Einfach', 2: 'Mittel', 3: 'Schwer' };
var DIFF_COLORS = { 1: '#22c55e', 2: '#f59e0b', 3: '#ef4444' };

function CalcTrainer(props) {
  var bookData = props.bookData, progress = props.progress, markDone = props.markDone, onClose = props.onClose;
  var st = useState(null), openEx = st[0], setOpenEx = st[1];
  var st2 = useState(0), currentDiff = st2[0], setCurrentDiff = st2[1]; // 0=all, 1,2,3

  // Collect all calc exercises across chapters
  var allCalc = [];
  bookData.chapters.forEach(function(ch) {
    (ch.exercises || []).forEach(function(ex) {
      if (ex.type === 'calc') {
        allCalc.push({ ex: ex, chapter: ch.num + ': ' + ch.title, difficulty: CALC_DIFFICULTY[ex.id] || 2 });
      }
    });
  });

  // Sort by difficulty then by id
  allCalc.sort(function(a, b) {
    if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
    return a.ex.id - b.ex.id;
  });

  var filtered = currentDiff === 0 ? allCalc : allCalc.filter(function(c) { return c.difficulty === currentDiff; });

  var doneCount = allCalc.filter(function(c) { return progress[c.ex.id] && progress[c.ex.id].done; }).length;
  var donePct = allCalc.length > 0 ? Math.round(doneCount / allCalc.length * 100) : 0;

  // Count per difficulty
  var counts = { 1: 0, 2: 0, 3: 0 };
  var doneCounts = { 1: 0, 2: 0, 3: 0 };
  allCalc.forEach(function(c) {
    counts[c.difficulty] = (counts[c.difficulty] || 0) + 1;
    if (progress[c.ex.id] && progress[c.ex.id].done) doneCounts[c.difficulty] = (doneCounts[c.difficulty] || 0) + 1;
  });

  return e('div', { className: 'container' },
    e('div', { style: { marginBottom: 24 } },
      e('button', { className: 'btn-back', onClick: onClose, style: { marginBottom: 16 } }, '\u2190 Zur\u00FCck zu Kapiteln'),
      e('h2', { style: { margin: '0 0 4px', fontSize: '1.3rem', fontWeight: 700 } }, 'Berechnungs-Trainer'),
      e('p', { style: { margin: '0 0 16px', color: 'var(--text2)', fontSize: '.85rem' } },
        allCalc.length + ' Berechnungen aus ' + bookData.chapters.length + ' Kapiteln \u2013 von einfach bis komplex'
      ),
      e('div', { className: 'progress-bar', style: { maxWidth: 400, marginBottom: 16 } },
        e('div', { className: 'progress-fill', style: { width: donePct + '%', background: donePct === 100 ? 'var(--green)' : 'var(--accent)' } })
      ),
      e('div', { style: { fontSize: '.78rem', color: 'var(--text2)', marginBottom: 16 } }, doneCount + '/' + allCalc.length + ' gel\u00F6st (' + donePct + '%)'),

      // Difficulty filter tabs
      e('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 } },
        e('button', {
          onClick: function() { setCurrentDiff(0); setOpenEx(null); },
          style: { padding: '6px 16px', fontSize: '.8rem', fontWeight: 600, borderRadius: 20, border: '1px solid var(--border)', background: currentDiff === 0 ? 'var(--accent)' : 'var(--card)', color: currentDiff === 0 ? '#fff' : 'var(--text)', cursor: 'pointer' }
        }, 'Alle (' + allCalc.length + ')'),
        [1, 2, 3].map(function(d) {
          return e('button', {
            key: d,
            onClick: function() { setCurrentDiff(d); setOpenEx(null); },
            style: { padding: '6px 16px', fontSize: '.8rem', fontWeight: 600, borderRadius: 20, border: '2px solid ' + (currentDiff === d ? DIFF_COLORS[d] : 'var(--border)'), background: currentDiff === d ? DIFF_COLORS[d] : 'var(--card)', color: currentDiff === d ? '#fff' : 'var(--text)', cursor: 'pointer' }
          }, DIFF_LABELS[d] + ' (' + doneCounts[d] + '/' + counts[d] + ')');
        })
      )
    ),

    // Exercise list
    filtered.map(function(item, idx) {
      var ex = item.ex;
      var isDone = progress[ex.id] && progress[ex.id].done;
      var isExOpen = openEx === ex.id;
      return e('div', { key: ex.id, className: 'ex-card', style: { marginBottom: 12 } },
        e('div', { className: 'ex-header', onClick: function() { setOpenEx(isExOpen ? null : ex.id); } },
          e('span', { className: 'ex-num' + (isDone ? ' done' : ''), style: { background: isDone ? 'var(--green)' : DIFF_COLORS[item.difficulty], color: '#fff' } }, idx + 1),
          e('div', { className: 'ex-title-wrap' },
            e('div', { className: 'ex-title' }, ex.title || (ex.q ? ex.q.substring(0, 80) : 'Aufgabe ' + ex.id)),
            e('div', { style: { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginTop: 2 } },
              e('span', { style: { fontSize: '.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 10, background: DIFF_COLORS[item.difficulty] + '18', color: DIFF_COLORS[item.difficulty], border: '1px solid ' + DIFF_COLORS[item.difficulty] + '40' } }, DIFF_LABELS[item.difficulty]),
              e('span', { style: { fontSize: '.7rem', color: 'var(--text2)' } }, item.chapter)
            ),
            isDone ? e('span', { className: 'score-badge good' }, 'Gel\u00F6st') : null
          ),
          e('span', { className: 'ch-arrow' + (isExOpen ? ' open' : '') }, '\u25BC')
        ),
        isExOpen ? e('div', { className: 'ex-body' },
          e(ExerciseCard, {
            ex: ex,
            examMode: false,
            onDone: function(score) { markDone(ex.id, score); }
          })
        ) : null
      );
    }),
    e('div', { className: 'footer' }, e('span', { style: { fontWeight: 700, letterSpacing: '.1em' } }, 'BUILT BY LEANDRO'))
  );
}

// ─── Page Viewer (Original-Buchseiten) ──────────────────────────────────────

// Seiten, deren Screenshot beim Erfassen misslungen ist (Datei fehlt, leer oder
// mitten im Ladevorgang aufgenommen). Sie werden mit einem Hinweis statt eines
// leeren Bildes angezeigt.
var BROKEN_PAGES = {
  'digitales-marketing': { 161: 'fehlt' },
  'distribution': { 50: 'leer', 100: 'leer', 150: 'leer' },
  'marketingkonzept': { 14: 'ladefehler', 15: 'leer', 26: 'ladefehler' }
};

var BROKEN_TEXT = {
  'fehlt': 'Von dieser Seite wurde beim Erfassen des Buchs kein Bild gespeichert.',
  'leer': 'Diese Seite wurde beim Erfassen des Buchs leer aufgenommen.',
  'ladefehler': 'Diese Seite wurde aufgenommen, bevor sie fertig geladen war.'
};

function PageViewer(props) {
  var bookId = props.bookId, totalPages = props.totalPages, onClose = props.onClose, startPage = props.startPage || 1;
  var bookData = props.bookData;
  var minPage = props.minPage || 1, maxPage = props.maxPage || totalPages;
  var st = useState(startPage), page = st[0], setPage = st[1];
  var st2 = useState(true), loading = st2[0], setLoading = st2[1];
  var st6 = useState(false), imgError = st6[0], setImgError = st6[1];
  var st3 = useState(''), pageInput = st3[0], setPageInput = st3[1];
  var st4 = useState(''), viewerSearch = st4[0], setViewerSearch = st4[1];
  var st5 = useState(null), viewerResults = st5[0], setViewerResults = st5[1];

  function searchInBook(q) {
    setViewerSearch(q);
    if (!q || q.length < 2 || !bookData) { setViewerResults(null); return; }
    var ql = q.trim().toLowerCase();
    var hits = [];
    (bookData.chapters || []).forEach(function(ch) {
      if (!ch.pageStart) return;
      var found = false;
      if ((ch.title || '').toLowerCase().indexOf(ql) >= 0) found = true;
      (ch.exercises || []).forEach(function(ex) {
        if ((ex.q || '').toLowerCase().indexOf(ql) >= 0 || (ex.instruction || '').toLowerCase().indexOf(ql) >= 0) found = true;
      });
      if (ch.learningData && ch.learningData.sections) {
        ch.learningData.sections.forEach(function(sec) {
          var content = Array.isArray(sec.content) ? sec.content.join(' ') : sec.content || '';
          if ((sec.title || '').toLowerCase().indexOf(ql) >= 0 || content.toLowerCase().indexOf(ql) >= 0
            || (sec.highlight || '').toLowerCase().indexOf(ql) >= 0
            || (sec.items || []).some(function(it) { return (typeof it === 'string' ? it : JSON.stringify(it)).toLowerCase().indexOf(ql) >= 0; })
            || (sec.terms || []).some(function(t) { return (t.term || '').toLowerCase().indexOf(ql) >= 0 || (t.def || '').toLowerCase().indexOf(ql) >= 0; })
          ) found = true;
        });
      }
      if (found) hits.push({ ch: ch, page: ch.pageStart });
    });
    setViewerResults(hits);
  }

  function padPage(n) { return String(n).padStart(3, '0'); }
  var imgSrc = 'screenshots/' + bookId + '/seite_' + padPage(page) + '.jpg';
  var isRestricted = minPage > 1 || maxPage < totalPages;

  var brokenKind = (BROKEN_PAGES[bookId] || {})[page] || null;

  function goTo(n) {
    var p = Math.max(minPage, Math.min(maxPage, n));
    if (p === page) return;
    setPage(p);
    setLoading(true);
    setImgError(false);
  }

  // Nächste Seite anspringen, die nicht als defekt bekannt ist
  function skipBroken(dir) {
    var broken = BROKEN_PAGES[bookId] || {};
    var p = page + dir;
    while (p >= minPage && p <= maxPage && broken[p]) p += dir;
    goTo(p);
  }

  function handleKeyDown(ev) {
    if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') { ev.preventDefault(); goTo(page - 1); }
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') { ev.preventDefault(); goTo(page + 1); }
    if (ev.key === 'Escape') onClose();
  }

  useEffect(function() {
    document.addEventListener('keydown', handleKeyDown);
    return function() { document.removeEventListener('keydown', handleKeyDown); };
  });

  return e('div', {
    style: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,.92)', display: 'flex', flexDirection: 'column' }
  },
    // Top bar
    e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', background: 'rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.1)', flexShrink: 0 } },
      e('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        e('button', {
          onClick: function() { goTo(page - 1); },
          disabled: page <= minPage,
          style: { background: 'rgba(255,255,255,.1)', border: 'none', color: '#fff', padding: '6px 14px', borderRadius: 6, cursor: page > minPage ? 'pointer' : 'default', opacity: page > minPage ? 1 : .3, fontSize: '.85rem' }
        }, '\u2190 Zur\u00FCck'),
        e('div', { style: { display: 'flex', alignItems: 'center', gap: 4 } },
          e('input', {
            type: 'number', min: minPage, max: maxPage,
            value: pageInput || page,
            onFocus: function() { setPageInput(String(page)); },
            onBlur: function() { if (pageInput) { goTo(parseInt(pageInput, 10) || page); } setPageInput(''); },
            onChange: function(ev) { setPageInput(ev.target.value); },
            onKeyDown: function(ev) { if (ev.key === 'Enter') { goTo(parseInt(pageInput, 10) || page); setPageInput(''); ev.target.blur(); } ev.stopPropagation(); },
            style: { width: 50, textAlign: 'center', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', borderRadius: 4, padding: '4px', fontSize: '.85rem' }
          }),
          e('span', { style: { color: 'rgba(255,255,255,.5)', fontSize: '.85rem' } }, isRestricted ? ' / ' + maxPage + ' (S. ' + minPage + '\u2013' + maxPage + ')' : ' / ' + totalPages)
        ),
        e('button', {
          onClick: function() { goTo(page + 1); },
          disabled: page >= maxPage,
          style: { background: 'rgba(255,255,255,.1)', border: 'none', color: '#fff', padding: '6px 14px', borderRadius: 6, cursor: page < maxPage ? 'pointer' : 'default', opacity: page < maxPage ? 1 : .3, fontSize: '.85rem' }
        }, 'Weiter \u2192')
      ),
      e('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
        bookData ? e('div', { style: { position: 'relative' } },
          e('input', {
            type: 'text', value: viewerSearch, placeholder: '\uD83D\uDD0D Im Buch suchen\u2026',
            onChange: function(ev) { searchInBook(ev.target.value); },
            onKeyDown: function(ev) { ev.stopPropagation(); },
            style: { width: 180, padding: '5px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.1)', color: '#fff', fontSize: '.8rem', outline: 'none' }
          }),
          viewerResults && viewerResults.length > 0 ? e('div', {
            style: { position: 'absolute', top: '100%', right: 0, marginTop: 4, background: '#2a2a2a', border: '1px solid rgba(255,255,255,.15)', borderRadius: 8, padding: 6, maxHeight: 300, overflowY: 'auto', zIndex: 10, minWidth: 280 }
          },
            viewerResults.map(function(r, i) {
              return e('div', {
                key: i,
                onClick: function() { goTo(r.page); setViewerResults(null); setViewerSearch(''); },
                onMouseEnter: function(ev) { ev.currentTarget.style.background = 'rgba(255,255,255,.1)'; },
                onMouseLeave: function(ev) { ev.currentTarget.style.background = 'transparent'; },
                style: { padding: '6px 10px', cursor: 'pointer', borderRadius: 4, fontSize: '.78rem', color: '#fff' }
              },
                e('div', { style: { fontWeight: 600 } }, r.ch.title),
                e('div', { style: { opacity: .5, fontSize: '.7rem' } }, 'S. ' + r.ch.pageStart + '\u2013' + r.ch.pageEnd)
              );
            })
          ) : viewerResults && viewerResults.length === 0 && viewerSearch.length >= 2 ? e('div', {
            style: { position: 'absolute', top: '100%', right: 0, marginTop: 4, background: '#2a2a2a', border: '1px solid rgba(255,255,255,.15)', borderRadius: 8, padding: '8px 12px', fontSize: '.78rem', color: 'rgba(255,255,255,.5)' }
          }, 'Keine Treffer') : null
        ) : null,
        e('span', { style: { color: 'rgba(255,255,255,.4)', fontSize: '.7rem' } }, '\u2190\u2192'),
        e('button', {
          onClick: onClose,
          style: { background: 'rgba(255,255,255,.1)', border: 'none', color: '#fff', padding: '6px 14px', borderRadius: 6, cursor: 'pointer', fontSize: '.85rem' }
        }, '\u2715 Schliessen')
      )
    ),
    // Image
    e('div', { style: { flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px', position: 'relative' } },
      (brokenKind || imgError) ? e('div', {
        style: { maxWidth: 420, textAlign: 'center', color: '#fff', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 10, padding: '28px 24px' }
      },
        e('div', { style: { fontSize: '1.6rem', marginBottom: 10 } }, '📄'),
        e('div', { style: { fontWeight: 600, marginBottom: 8, fontSize: '.95rem' } }, 'Seite ' + page + ' ist nicht verfügbar'),
        e('div', { style: { fontSize: '.82rem', opacity: .7, lineHeight: 1.5, marginBottom: 18 } },
          BROKEN_TEXT[brokenKind] || 'Das Bild dieser Seite konnte nicht geladen werden.'),
        e('div', { style: { display: 'flex', gap: 8, justifyContent: 'center' } },
          page > minPage ? e('button', {
            onClick: function() { skipBroken(-1); },
            style: { background: 'rgba(255,255,255,.12)', border: 'none', color: '#fff', padding: '7px 14px', borderRadius: 6, cursor: 'pointer', fontSize: '.8rem' }
          }, '← Vorherige Seite') : null,
          page < maxPage ? e('button', {
            onClick: function() { skipBroken(1); },
            style: { background: 'rgba(255,255,255,.12)', border: 'none', color: '#fff', padding: '7px 14px', borderRadius: 6, cursor: 'pointer', fontSize: '.8rem' }
          }, 'Nächste Seite →') : null
        )
      ) : e('div', { style: { position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' } },
        loading ? e('div', {
          style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'rgba(255,255,255,.6)', fontSize: '.85rem' }
        }, 'Seite wird geladen …') : null,
        e('img', {
          key: bookId + '-' + page,
          src: imgSrc,
          alt: 'Seite ' + page,
          onLoad: function() { setLoading(false); },
          onError: function() { setLoading(false); setImgError(true); },
          style: { maxWidth: '100%', maxHeight: 'calc(100vh - 80px)', objectFit: 'contain', borderRadius: 4, opacity: loading ? .15 : 1, transition: 'opacity .2s' }
        })
      )
    )
  );
}

// ─── Chapter Card ───────────────────────────────────────────────────────────

function ChapterCard(props) {
  var chapter = props.chapter, bookData = props.bookData, progress = props.progress, markDone = props.markDone;
  var chParam = new URLSearchParams(window.location.search).get('ch');
  var st = useState(chParam === chapter.id), isOpen = st[0], setIsOpen = st[1];
  var st2 = useState(null), openEx = st2[0], setOpenEx = st2[1];
  var st3 = useState(chapter.learningData ? 'lernen' : 'ueben'), mode = st3[0], setMode = st3[1];
  var st4 = useState(0), examRetry = st4[0], setExamRetry = st4[1];
  var st6 = useState(false), showFilter = st6[0], setShowFilter = st6[1];
  var st7 = useState(function() {
    try { var saved = JSON.parse(localStorage.getItem('lp-type-filter')); return saved || null; } catch(e) { return null; }
  });
  var typeFilter = st7[0], setTypeFilter = st7[1];

  function toggleTypeFilter(type) {
    setTypeFilter(function(prev) {
      // First time: start with all types enabled
      var allTypes = {};
      Object.keys(TYPE_LABELS).forEach(function(t) { allTypes[t] = true; });
      var current = prev || allTypes;
      var next = Object.assign({}, current);
      next[type] = !next[type];
      // Don't allow disabling ALL types
      var anyOn = Object.keys(next).some(function(t) { return next[t]; });
      if (!anyOn) return current;
      localStorage.setItem('lp-type-filter', JSON.stringify(next));
      return next;
    });
  }

  var exercises = chapter.exercises || [];
  var done = exercises.filter(function(ex) { return progress[ex.id] && progress[ex.id].done; }).length;
  var total = exercises.length;
  var pct = total > 0 ? Math.round(done / total * 100) : 0;

  var examScores = useMemo(function() { return loadExamScores(bookData.id); }, [mode, examRetry]);
  var bestExam = examScores[chapter.id];
  var st5 = useState(function() { return localStorage.getItem('lp-learn-' + bookData.id + '-' + chapter.id) === '1'; });
  var learnRead = st5[0], setLearnRead = st5[1];

  return e('div', { className: 'chapter-card' },
    e('div', { className: 'chapter-header', onClick: function() { setIsOpen(!isOpen); } },
      e('div', { className: 'ch-info' },
        e('div', { className: 'ch-num' }, chapter.num,
          bestExam ? e('span', { className: 'exam-best-inline' }, ' | Pr\u00FCfung: ' + bestExam.pct + '% (' + bestExam.date + ')') : null
        ),
        e('div', { className: 'ch-title' }, chapter.title),
        e('div', { className: 'ch-meta' }, done + '/' + total + ' Aufgaben abgeschlossen'),
        e('div', { className: 'progress-bar' }, e('div', { className: 'progress-fill', style: { width: pct + '%' } }))
      ),
      e('span', { className: 'ch-arrow' + (isOpen ? ' open' : '') }, '\u25BC')
    ),
    isOpen ? e('div', null,
      e(ModeTabs, {
        mode: mode,
        setMode: setMode,
        chProgress: { done: done, total: total },
        bestExam: bestExam,
        learnRead: learnRead,
        hasLearningData: !!(chapter.learningData)
      }),

      // Originalseiten Button
      chapter.pageStart && bookData.totalPages ? e('div', { style: { margin: '8px 0 12px', textAlign: 'right' } },
        e('button', {
          onClick: function() {
            var viewer = document.querySelector('[data-page-viewer]');
            // Set page viewer via URL update trick
            var url = new URL(window.location);
            url.searchParams.set('viewer', chapter.pageStart);
            window.history.replaceState({}, '', url);
            // Find setShowPageViewer in parent - use event
            window.dispatchEvent(new CustomEvent('openPageViewer', { detail: { page: chapter.pageStart, min: chapter.pageStart, max: chapter.pageEnd } }));
          },
          style: { padding: '5px 12px', fontSize: '.75rem', fontWeight: 600, border: '1px solid var(--border)', borderRadius: 6, background: 'var(--card)', color: 'var(--accent)', cursor: 'pointer' }
        }, '\uD83D\uDCD6 Originalseiten (S. ' + chapter.pageStart + '\u2013' + chapter.pageEnd + ')')
      ) : null,

      // Lernen
      mode === 'lernen' ? e(LearningRenderer, {
        data: chapter.learningData,
        bookId: bookData.id,
        chId: chapter.id,
        onLearnRead: function() { setLearnRead(true); }
      }) : null,

      // Ueben
      mode === 'ueben' ? e('div', { className: 'exercise-list' },
        // Filter Bar
        e('div', { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' } },
          e('button', {
            onClick: function() { setShowFilter(!showFilter); },
            style: { padding: '6px 14px', fontSize: '.8rem', fontWeight: 600, border: '1px solid var(--border)', borderRadius: 20, background: showFilter ? 'var(--accent)' : 'var(--card)', color: showFilter ? '#fff' : 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }
          }, 'Filter'),
          typeFilter ? e('button', {
            onClick: function() { setTypeFilter(null); localStorage.removeItem('lp-type-filter'); },
            style: { padding: '4px 10px', fontSize: '.72rem', border: '1px solid var(--border)', borderRadius: 12, background: 'transparent', color: 'var(--text2)', cursor: 'pointer' }
          }, 'Alle anzeigen') : null
        ),
        showFilter ? e('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16, padding: '12px 14px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)' } },
          Object.keys(TYPE_LABELS).map(function(type) {
            var hasExercises = exercises.some(function(ex) { return ex.type === type; });
            if (!hasExercises) return null;
            var isOn = !typeFilter || typeFilter[type] !== false;
            return e('button', {
              key: type,
              onClick: function() { toggleTypeFilter(type); },
              style: { padding: '5px 12px', fontSize: '.76rem', fontWeight: 500, border: '1px solid ' + (isOn ? 'var(--accent)' : 'var(--border)'), borderRadius: 16, background: isOn ? 'var(--accent)' : 'transparent', color: isOn ? '#fff' : 'var(--text2)', cursor: 'pointer', opacity: isOn ? 1 : .5 }
            }, (TYPE_ICONS[type] || '') + ' ' + TYPE_LABELS[type]);
          })
        ) : null,
        // Filtered exercises
        (function() {
          var filtered = typeFilter ? exercises.filter(function(ex) { return typeFilter[ex.type] !== false; }) : exercises;
          if (filtered.length === 0) return e('div', { style: { padding: 20, textAlign: 'center', color: 'var(--text2)', fontSize: '.85rem' } }, 'Keine \u00DCbungen f\u00FCr den gew\u00E4hlten Filter.');
          return filtered.map(function(ex) {
            var isDone = progress[ex.id] && progress[ex.id].done;
            var isExOpen = openEx === ex.id;
            return e('div', { key: ex.id, className: 'ex-card' },
              e('div', { className: 'ex-header', onClick: function() { setOpenEx(isExOpen ? null : ex.id); } },
                e('span', { className: 'ex-num' + (isDone ? ' done' : '') }, ex.id),
                e('div', { className: 'ex-title-wrap' },
                  e('div', { className: 'ex-title' }, (ex.q || ex.title) ? (ex.q || ex.title).substring(0, 80) : 'Aufgabe ' + ex.id),
                  e('div', { className: 'ex-type' }, (TYPE_ICONS[ex.type] || '') + ' ' + (TYPE_LABELS[ex.type] || ex.type)),
                  isDone ? e('span', { className: 'score-badge good' }, 'Erledigt') : null
                ),
                e('span', { className: 'ch-arrow' + (isExOpen ? ' open' : '') }, '\u25BC')
              ),
              isExOpen ? e('div', { className: 'ex-body' },
                e(ExerciseCard, {
                  ex: ex,
                  examMode: false,
                  onDone: function(score) { markDone(ex.id, score); }
                })
              ) : null
            );
          });
        })()
      ) : null,

      // Pruefung
      mode === 'pruefung' ? e(ExamMode, {
        key: 'exam-' + chapter.id + '-' + examRetry,
        chapter: chapter,
        bookId: bookData.id,
        onBack: function() { setMode('ueben'); },
        onRetry: function() { setExamRetry(examRetry + 1); }
      }) : null
    ) : null
  );
}

// ─── App ────────────────────────────────────────────────────────────────────

function initApp(bookData) {
  function App() {
    var st = useState(function() { return localStorage.getItem('lp-dark') === '1'; });
    var dark = st[0], setDark = st[1];
    var st2 = useState(function() { return loadProgress(bookData.id); });
    var progress = st2[0], setProgress = st2[1];
    var st3 = useState(false), showCalc = st3[0], setShowCalc = st3[1];
    var st4 = useState(false), showNotes = st4[0], setShowNotes = st4[1];
    var st5 = useState(false), showGlossar = st5[0], setShowGlossar = st5[1];
    var st5b = useState(false), showKR = st5b[0], setShowKR = st5b[1];
    var stFC = useState(false), showFlashcards = stFC[0], setShowFlashcards = stFC[1];
    var stCS = useState(false), showCheatsheet = stCS[0], setShowCheatsheet = stCS[1];
    var stCT = useState(false), showCalcTrainer = stCT[0], setShowCalcTrainer = stCT[1];
    var stBT = useState(false), showBSTrainer = stBT[0], setShowBSTrainer = stBT[1];
    var viewerParam = new URLSearchParams(window.location.search).get('viewer');
    var stPV = useState(viewerParam === '1' && bookData.totalPages ? { page: 1 } : null), showPageViewer = stPV[0], setShowPageViewer = stPV[1];
    var st6 = useState(function() { return localStorage.getItem('lp-notes-' + bookData.id) || ''; });
    var notes = st6[0], setNotes = st6[1];
    var st7 = useState(false), timerOn = st7[0], setTimerOn = st7[1];
    var st8 = useState(3600), seconds = st8[0], setSeconds = st8[1];
    var timerRef = useRef(null);

    useEffect(function() { document.documentElement.className = dark ? 'dark' : ''; }, [dark]);
    useEffect(function() {
      function onOpenViewer(ev) { setShowPageViewer(ev.detail || { page: 1 }); }
      window.addEventListener('openPageViewer', onOpenViewer);
      return function() { window.removeEventListener('openPageViewer', onOpenViewer); };
    }, []);
    useEffect(function() { saveProgress(bookData.id, progress); }, [progress]);
    useEffect(function() { localStorage.setItem('lp-notes-' + bookData.id, notes); }, [notes]);
    useEffect(function() {
      if (timerOn) {
        timerRef.current = setInterval(function() { setSeconds(function(s) { return s > 0 ? s - 1 : 0; }); }, 1000);
        return function() { clearInterval(timerRef.current); };
      } else { clearInterval(timerRef.current); }
    }, [timerOn]);

    function toggleDark() { setDark(function(d) { localStorage.setItem('lp-dark', d ? '0' : '1'); return !d; }); }
    function toggleTimer() { setTimerOn(function(t) { return !t; }); }
    function resetTimer() { setSeconds(3600); setTimerOn(false); }
    function markDone(exId, score) {
      setProgress(function(p) { var n = Object.assign({}, p); n[exId] = { done: true, score: score }; return n; });
    }
    function resetAll() {
      setProgress({});
      localStorage.removeItem('lp-progress-' + bookData.id);
      localStorage.removeItem('lp-exam-' + bookData.id);
      // Remove all learn keys
      bookData.chapters.forEach(function(ch) {
        localStorage.removeItem('lp-learn-' + bookData.id + '-' + ch.id);
      });
    }

    var stSearch = useState(''), searchQuery = stSearch[0], setSearchQuery = stSearch[1];

    var totalExercises = 0;
    bookData.chapters.forEach(function(ch) { totalExercises += (ch.exercises || []).length; });
    var totalDone = Object.values(progress).filter(function(p) { return p && p.done; }).length;

    // Search: filter chapters and find matching exercises/content
    var searchResults = useMemo(function() {
      var q = searchQuery.trim().toLowerCase();
      if (!q || q.length < 2) return null;
      var results = [];
      bookData.chapters.forEach(function(ch) {
        var chMatch = ch.title.toLowerCase().indexOf(q) >= 0 || (ch.num || '').toLowerCase().indexOf(q) >= 0;
        var matchingExercises = (ch.exercises || []).filter(function(ex) {
          return (ex.q || '').toLowerCase().indexOf(q) >= 0
            || (ex.instruction || '').toLowerCase().indexOf(q) >= 0
            || (ex.template || '').toLowerCase().indexOf(q) >= 0
            || (ex.statements || []).some(function(s) { return (s.s || '').toLowerCase().indexOf(q) >= 0; })
            || (ex.options || []).some(function(o) { return (o || '').toLowerCase().indexOf(q) >= 0; })
            || (ex.pairs || []).some(function(p) { return (p.l || '').toLowerCase().indexOf(q) >= 0 || (p.r || '').toLowerCase().indexOf(q) >= 0; })
            || (ex.questions || []).some(function(qn) { return (qn.q || '').toLowerCase().indexOf(q) >= 0; });
        });
        var matchingSections = [];
        if (ch.learningData && ch.learningData.sections) {
          ch.learningData.sections.forEach(function(sec) {
            if ((sec.title || '').toLowerCase().indexOf(q) >= 0
              || (Array.isArray(sec.content) ? sec.content.join(' ') : sec.content || '').toLowerCase().indexOf(q) >= 0
              || (sec.text || '').toLowerCase().indexOf(q) >= 0
              || (sec.highlight || '').toLowerCase().indexOf(q) >= 0
              || (sec.items || []).some(function(it) { return (typeof it === 'string' ? it : JSON.stringify(it)).toLowerCase().indexOf(q) >= 0; })
              || (sec.terms || []).some(function(t) { return (t.term || '').toLowerCase().indexOf(q) >= 0 || (t.def || '').toLowerCase().indexOf(q) >= 0; })
            ) {
              matchingSections.push(sec);
            }
          });
        }
        // Also search glossary
        var matchingGlossary = (bookData.glossary || []).filter(function(g) {
          return (g.term || '').toLowerCase().indexOf(q) >= 0 || (g.def || '').toLowerCase().indexOf(q) >= 0;
        });
        if (chMatch || matchingExercises.length > 0 || matchingSections.length > 0) {
          results.push({ chapter: ch, chMatch: chMatch, exercises: matchingExercises, sections: matchingSections });
        }
        if (matchingGlossary.length > 0 && results.glossary === undefined) {
          results.glossary = matchingGlossary;
        }
      });
      // Attach glossary results
      if (!results.glossary) {
        var gResults = (bookData.glossary || []).filter(function(g) {
          return (g.term || '').toLowerCase().indexOf(q) >= 0 || (g.def || '').toLowerCase().indexOf(q) >= 0;
        });
        if (gResults.length > 0) results.glossary = gResults;
      }
      return results;
    }, [searchQuery]);

    return e('div', null,
      // Nav
      e('nav', { className: 'nav' },
        e('button', { className: 'btn-back', onClick: function() { window.location.href = 'index.html'; }, style: { marginRight: 12 } }, '\u2190 Alle B\u00FCcher'),
        e('div', null,
          e('div', { className: 'nav-title' }, bookData.shortTitle || bookData.title),
          e('div', { className: 'nav-sub' }, bookData.author + ' (' + bookData.year + ')')
        ),
        e('div', { className: 'nav-right' },
          e('div', { className: 'timer-display' },
            e('span', { onClick: toggleTimer, style: { cursor: 'pointer' } }, timerOn ? '\u23F8' : '\u25B6'),
            e('span', { onClick: toggleTimer, style: { cursor: 'pointer' } }, formatTime(seconds)),
            seconds < 3600 ? e('span', { onClick: resetTimer, style: { cursor: 'pointer', fontSize: '.75rem', opacity: .6 } }, '\u21BB') : null
          ),
          e('div', { className: 'tool-bar' },
            e('button', { className: 'tool-btn' + (showCalc ? ' active' : ''), onClick: function() { setShowCalc(!showCalc); } }, showCalc ? '\u2715 Rechner' : 'Rechner'),
            e('button', { className: 'tool-btn' + (showNotes ? ' active' : ''), onClick: function() { setShowNotes(!showNotes); } }, showNotes ? '\u2715 Notizen' : 'Notizen'),
            e('button', { className: 'tool-btn' + (showGlossar ? ' active' : ''), onClick: function() { setShowGlossar(!showGlossar); } }, showGlossar ? '\u2715 Glossar' : 'Glossar'),
            e('button', { className: 'tool-btn' + (showFlashcards ? ' active' : ''), onClick: function() { setShowFlashcards(!showFlashcards); } }, showFlashcards ? '\u2715 Karten' : 'Karten'),
            bookData.kontenrahmen ? e('button', { className: 'tool-btn' + (showKR ? ' active' : ''), onClick: function() { setShowKR(!showKR); } }, showKR ? '\u2715 Kontenrahmen' : 'Kontenrahmen') : null,
            bookData.totalPages ? e('button', { className: 'tool-btn', onClick: function() { setShowPageViewer({ page: 1 }); } }, '\uD83D\uDCD6 Buch') : null
          ),
          e('span', { className: 'nav-btn', style: { fontSize: '.75rem' } }, totalDone + '/' + totalExercises),
          e('button', { className: 'nav-btn', onClick: toggleDark }, dark ? 'Licht' : 'Dunkel'),
          e('button', { className: 'nav-btn', onClick: resetAll }, 'Reset')
        )
      ),

      // Trainers or Chapters
      showBSTrainer ? e(BuchungssaetzeTrainer, {
        bookData: bookData,
        onClose: function() { setShowBSTrainer(false); }
      }) :
      showCalcTrainer ? e(CalcTrainer, {
        bookData: bookData,
        progress: progress,
        markDone: markDone,
        onClose: function() { setShowCalcTrainer(false); }
      }) :
      e('div', { className: 'container' },
        // Search bar
        e('div', { style: { margin: '0 0 16px', position: 'relative' } },
          e('input', {
            type: 'text',
            value: searchQuery,
            onChange: function(ev) { setSearchQuery(ev.target.value); },
            placeholder: 'Kapitel, \u00DCbungen, Begriffe durchsuchen\u2026',
            style: { width: '100%', padding: '10px 14px 10px 36px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text)', fontSize: '.88rem', outline: 'none', boxSizing: 'border-box' }
          }),
          e('span', { style: { position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: .4, fontSize: '.9rem', pointerEvents: 'none' } }, '\uD83D\uDD0D'),
          searchQuery.length > 0 ? e('span', {
            onClick: function() { setSearchQuery(''); },
            style: { position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', opacity: .4, fontSize: '.85rem' }
          }, '\u2715') : null
        ),
        // Search results
        searchResults && searchQuery.length >= 2 ? e('div', { style: { marginBottom: 20 } },
          searchResults.length === 0 && !searchResults.glossary ? e('div', { style: { padding: '16px', color: 'var(--text2)', fontSize: '.85rem', textAlign: 'center' } }, 'Keine Ergebnisse f\u00FCr \u00AB' + searchQuery + '\u00BB') :
          e('div', null,
            e('div', { style: { fontSize: '.75rem', fontWeight: 600, color: 'var(--text2)', marginBottom: 8, letterSpacing: '.03em' } },
              searchResults.length + ' Kapitel' + (searchResults.glossary ? ', ' + searchResults.glossary.length + ' Glossar-Treffer' : '')
            ),
            searchResults.map(function(r, i) {
              return e('div', { key: i, style: { padding: '10px 14px', marginBottom: 6, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)' } },
                e('div', { style: { fontWeight: 600, fontSize: '.88rem', color: 'var(--accent)' } }, r.chapter.num + ' \u2013 ' + r.chapter.title),
                r.exercises.length > 0 ? e('div', { style: { marginTop: 6, fontSize: '.8rem', color: 'var(--text2)' } },
                  r.exercises.length + ' \u00DCbung' + (r.exercises.length > 1 ? 'en' : '') + ': ',
                  r.exercises.map(function(ex, j) {
                    return (j > 0 ? ', ' : '') + (ex.q || ex.title || 'Aufgabe ' + ex.id);
                  })
                ) : null,
                r.sections.length > 0 ? e('div', { style: { marginTop: 4, fontSize: '.8rem', color: 'var(--text2)' } },
                  'Lerninhalt: ' + r.sections.map(function(s) { return s.title || s.type; }).join(', ')
                ) : null
              );
            }),
            searchResults.glossary ? e('div', { style: { padding: '10px 14px', marginTop: 6, borderRadius: 8, background: 'var(--card)', border: '1px solid var(--border)' } },
              e('div', { style: { fontWeight: 600, fontSize: '.88rem', color: 'var(--accent)', marginBottom: 6 } }, 'Glossar'),
              searchResults.glossary.map(function(g, i) {
                return e('div', { key: i, style: { fontSize: '.8rem', marginBottom: 4 } },
                  e('strong', null, g.term + ': '), g.def
                );
              })
            ) : null
          )
        ) : null,
        // Prüfungs-Spickzettel Banner
        (function() {
          var csData = collectCheatsheet(bookData);
          if (csData.length === 0) return null;
          var csTotal = csData.reduce(function(s, c) { return s + c.points.length; }, 0);
          return e('div', {
            onClick: function() { setShowCheatsheet(true); },
            className: 'cs-banner'
          },
            e('div', { style: { flex: 1 } },
              e('div', { style: { fontWeight: 700, fontSize: '.95rem' } }, 'Prüfungs-Spickzettel'),
              e('div', { style: { fontSize: '.78rem', opacity: .85, marginTop: 2 } }, csTotal + ' Merksätze aus ' + csData.length + ' Kapiteln – kompakt zur Schlusswiederholung')
            ),
            e('span', { style: { fontSize: '.8rem', opacity: .5, fontWeight: 600 } }, '›')
          );
        })(),
        // Berechnungs-Trainer Button (only if book has calc exercises)
        (function() {
          var hasCalc = bookData.chapters.some(function(ch) {
            return (ch.exercises || []).some(function(ex) { return ex.type === 'calc'; });
          });
          if (!hasCalc) return null;
          var calcCount = 0;
          bookData.chapters.forEach(function(ch) {
            (ch.exercises || []).forEach(function(ex) { if (ex.type === 'calc') calcCount++; });
          });
          var calcDone = 0;
          bookData.chapters.forEach(function(ch) {
            (ch.exercises || []).forEach(function(ex) {
              if (ex.type === 'calc' && progress[ex.id] && progress[ex.id].done) calcDone++;
            });
          });
          return e('div', {
            onClick: function() { setShowCalcTrainer(true); },
            style: { margin: '0 0 16px', padding: '14px 18px', borderRadius: 8, background: 'linear-gradient(135deg, #418091, #00172D, #215064)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, transition: 'transform .15s', color: '#fff', border: '1px solid rgba(255,255,255,.08)' }
          },
            e('div', { style: { flex: 1 } },
              e('div', { style: { fontWeight: 700, fontSize: '.95rem' } }, 'Berechnungs-Trainer'),
              e('div', { style: { fontSize: '.78rem', opacity: .85, marginTop: 2 } }, calcCount + ' Berechnungen \u2013 von einfach bis komplex'),
              calcDone > 0 ? e('div', { style: { marginTop: 6 } },
                e('div', { style: { height: 4, borderRadius: 2, background: 'rgba(255,255,255,.25)', width: 200 } },
                  e('div', { style: { height: 4, borderRadius: 2, background: '#fff', width: Math.round(calcDone / calcCount * 100) + '%' } })
                )
              ) : null
            ),
            e('span', { style: { fontSize: '.8rem', opacity: .5, fontWeight: 600 } }, '\u203A')
          );
        })(),
        // Buchungssätze-Trainer Button
        (function() {
          var bsData = bookData.buchungssaetze;
          if (!bsData || bsData.length === 0) return null;
          var bsDone = 0;
          try { var bsProg = JSON.parse(localStorage.getItem('lp-bs-' + bookData.id)) || {}; bsDone = Object.keys(bsProg).length; } catch(x) {}
          return e('div', {
            onClick: function() { setShowBSTrainer(true); },
            style: { margin: '0 0 16px', padding: '14px 18px', borderRadius: 8, background: 'linear-gradient(135deg, #215064, #00172D, #123a52)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, color: '#fff', border: '1px solid rgba(255,255,255,.08)' }
          },
            e('div', { style: { flex: 1 } },
              e('div', { style: { fontWeight: 700, fontSize: '.95rem' } }, 'Buchungss\u00e4tze-Trainer'),
              e('div', { style: { fontSize: '.78rem', opacity: .85, marginTop: 2 } }, bsData.length + ' Gesch\u00e4ftsf\u00e4lle \u2013 Soll an Haben \u00fcben'),
              bsDone > 0 ? e('div', { style: { marginTop: 6 } },
                e('div', { style: { height: 4, borderRadius: 2, background: 'rgba(255,255,255,.25)', width: 200 } },
                  e('div', { style: { height: 4, borderRadius: 2, background: '#fff', width: Math.round(bsDone / bsData.length * 100) + '%' } })
                )
              ) : null
            ),
            e('span', { style: { fontSize: '.8rem', opacity: .5, fontWeight: 600 } }, '\u203A')
          );
        })(),
        bookData.chapters.map(function(ch) {
          return e(ChapterCard, {
            key: ch.id,
            chapter: ch,
            bookData: bookData,
            progress: progress,
            markDone: markDone
          });
        }),
        e('div', { className: 'footer' }, e('span', { style: { fontWeight: 700, letterSpacing: '.1em' } }, 'BUILT BY LEANDRO'))
      ),

      // Panels
      showCalc ? e(Calculator, { onClose: function() { setShowCalc(false); } }) : null,
      showNotes ? e(Notes, { onClose: function() { setShowNotes(false); }, notes: notes, setNotes: setNotes }) : null,
      showGlossar ? e(Glossary, { onClose: function() { setShowGlossar(false); }, glossary: bookData.glossary }) : null,
      showFlashcards ? e(Flashcards, { onClose: function() { setShowFlashcards(false); }, bookData: bookData }) : null,
      showCheatsheet ? e(Cheatsheet, { onClose: function() { setShowCheatsheet(false); }, bookData: bookData }) : null,
      showKR && bookData.kontenrahmen ? e(Kontenrahmen, { onClose: function() { setShowKR(false); }, kontenrahmen: bookData.kontenrahmen }) : null,
      showPageViewer && bookData.totalPages ? e(PageViewer, { bookId: bookData.id, totalPages: bookData.totalPages, bookData: bookData, startPage: showPageViewer.page || 1, minPage: showPageViewer.min || 1, maxPage: showPageViewer.max || bookData.totalPages, onClose: function() { setShowPageViewer(null); } }) : null
    );
  }

  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
}

})();
