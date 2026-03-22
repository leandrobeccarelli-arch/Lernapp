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

var bookParam = new URLSearchParams(window.location.search).get('book');

if (!bookParam) {
  document.getElementById('root').innerHTML = '<div style="padding:60px 20px;text-align:center;font-family:Inter,sans-serif"><h2>Kein Buch angegeben</h2><p style="margin-top:12px"><a href="index.html">Zur Buchauswahl</a></p></div>';
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
  document.getElementById('root').innerHTML = '<div style="padding:60px 20px;text-align:center;font-family:Inter,sans-serif"><h2>Buch nicht gefunden: ' + bookParam + '</h2><p style="margin-top:12px"><a href="index.html">Zur Buchauswahl</a></p></div>';
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

function matchKeywords(input, keywords) {
  var n = (input || '').toLowerCase();
  var found = 0;
  keywords.forEach(function(k) { if (n.indexOf(k.toLowerCase()) >= 0) found++; });
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
  var pct = Math.round(score / total * 100);
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
      var content = typeof s === 'string' ? s : (s && s.label ? s.label + ': ' + s.val : (s && s.val ? s.val : String(s)));
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
      var newSel = selections.slice();
      newSel[qi] = oi;
      setSelections(newSel);
      if (examMode && newSel.every(function(s) { return s !== null; })) {
        doMCheck(newSel);
      }
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
  var st = useState({}), answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function select(idx, val) {
    if (checked) return;
    setAnswers(function(prev) { var n = Object.assign({}, prev); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    ex.statements.forEach(function(s, i) { if (answers[i] === s.c) correct++; });
    if (onDone) onDone(Math.round(correct / ex.statements.length * 100));
  }

  function reset() { setAnswers({}); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    ex.statements.map(function(s, i) {
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
          userAns === s.c ? 'Korrekt' : 'Falsch \u2013 richtig ist: ' + (s.c ? 'Richtig' : 'Falsch')
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
  var st = useState(ex.blanks.map(function() { return ''; }));
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setVals(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function getAccepted(i) {
    if (ex.accept && ex.accept[i]) return ex.accept[i];
    var b = ex.blanks[i];
    return Array.isArray(b) ? b : [b];
  }

  function check() {
    setChecked(true);
    var correct = 0;
    ex.blanks.forEach(function(b, i) {
      if (matchAnswer(vals[i], getAccepted(i))) correct++;
    });
    if (onDone) onDone(Math.round(correct / ex.blanks.length * 100));
  }

  function reset() { setVals(ex.blanks.map(function() { return ''; })); setChecked(false); }

  // Build template with blanks
  var parts = ex.template.split(/\{(\d+)\}/);
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
      ex.blanks.map(function(b, i) {
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
  var st = useState(ex.pairs.map(function() { return ''; }));
  var answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setAnswers(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    ex.pairs.forEach(function(p, i) { if (answers[i] === p.r) correct++; });
    if (onDone) onDone(Math.round(correct / ex.pairs.length * 100));
  }

  function reset() { setAnswers(ex.pairs.map(function() { return ''; })); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    ex.pairs.map(function(p, i) {
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
          ex.options.map(function(opt, j) {
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
  var st = useState({}), answers = st[0], setAnswers = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function select(idx, val) {
    if (checked) return;
    setAnswers(function(prev) { var n = Object.assign({}, prev); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    ex.statements.forEach(function(s, i) { if (answers[i] === s.c) correct++; });
    if (onDone) onDone(Math.round(correct / ex.statements.length * 100));
  }

  function reset() { setAnswers({}); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    ex.statements.map(function(s, i) {
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
          userAns === s.c ? 'Korrekt' : 'Falsch'
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

function CalcExercise(props) {
  var ex = props.ex, onDone = props.onDone, examMode = props.examMode;
  var data = ex.fields || ex.calcs || [];
  var st = useState(data.map(function() { return ''; }));
  var vals = st[0], setVals = st[1];
  var st2 = useState(false), checked = st2[0], setChecked = st2[1];

  function update(idx, val) {
    setVals(function(prev) { var n = prev.slice(); n[idx] = val; return n; });
  }

  function check() {
    setChecked(true);
    var correct = 0;
    data.forEach(function(f, i) {
      var userVal = parseFloat(vals[i].replace(/[',\s]/g, ''));
      var tol = f.tolerance || 0.01;
      if (!isNaN(userVal) && Math.abs(userVal - f.answer) <= Math.abs(f.answer * tol) + 0.001) correct++;
    });
    if (onDone) onDone(data.length > 0 ? Math.round(correct / data.length * 100) : 100);
  }

  function reset() { setVals(data.map(function() { return ''; })); setChecked(false); }

  return e('div', null,
    ex.q ? e('div', { className: 'ex-instruction' }, ex.q) : null,
    ex.instruction ? e('div', { className: 'ex-instruction', style: { marginTop: 4, fontWeight: 'normal' } }, ex.instruction) : null,
    data.map(function(f, i) {
      var userVal = parseFloat(vals[i].replace(/[',\s]/g, ''));
      var tol = f.tolerance || 0.01;
      var isCorrect = checked && !isNaN(userVal) && Math.abs(userVal - f.answer) <= Math.abs(f.answer * tol) + 0.001;
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
      !examMode && checked ? e('button', { className: 'btn btn-secondary', onClick: reset }, 'Nochmal') : null
    ),
    examMode && checked ? e('div', { style: { fontSize: '.8rem', color: 'var(--green)', marginTop: 8 } }, '\u2713 Beantwortet') : null,
    !examMode && ex.tips ? e(Tips, { tips: ex.tips }) : null,
    !examMode && checked && ex.reveal ? e(Reveal, { items: ex.reveal }) : null
  );
}

// ─── Text Exercise ──────────────────────────────────────────────────────────

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
        var found = (val || '').toLowerCase().indexOf(k.toLowerCase()) >= 0;
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
    if (onDone) onDone(Math.round(correct / correctOrder.length * 100));
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
  var exerciseProps = { ex: ex, onDone: onDone, examMode: examMode };

  var comp;
  switch (ex.type) {
    case 'mc': comp = e(MCExercise, exerciseProps); break;
    case 'tf': comp = e(TFExercise, exerciseProps); break;
    case 'fill': comp = e(FillExercise, exerciseProps); break;
    case 'match': comp = e(MatchExercise, exerciseProps); break;
    case 'check': comp = e(CheckExercise, exerciseProps); break;
    case 'calc': comp = e(CalcExercise, exerciseProps); break;
    case 'text': comp = e(TextExercise, exerciseProps); break;
    case 'table': comp = e(TableExercise, exerciseProps); break;
    case 'sort': comp = e(SortExercise, exerciseProps); break;
    default: comp = e('div', { style: { color: 'var(--text2)', fontStyle: 'italic' } }, 'Unbekannter Aufgabentyp: ' + ex.type);
  }

  if (ex.svg) {
    return e('div', null,
      e('div', { style: { margin: '0 0 16px', width: '100%' }, dangerouslySetInnerHTML: { __html: ex.svg } }),
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

// Format a single block of text with bold labels and optional sub-bullets
function formatRichBlock(text, keyPrefix) {
  if (!text || !text.trim()) return null;
  // Check if text contains any known labels
  var labelPattern = new RegExp('(?:\\. |^)(' + LABEL_KEYWORDS.join('|') + '):\\s');
  if (!labelPattern.test(text)) {
    // No labels — return as plain text
    return e('span', { key: keyPrefix }, text);
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
    return e('span', { key: keyPrefix }, text);
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
              return t ? e('li', { key: j, style: { marginBottom: 2, lineHeight: 1.5, fontSize: '.84rem', color: '#475569' } }, t) : null;
            }).filter(Boolean)
          )
        ));
      } else {
        // Label with content but not a comma list — bold label, inline content
        result.push(e('div', { key: keyPrefix + '-' + si, style: { marginTop: 4 } },
          e('strong', { style: { color: '#334155', fontSize: '.85rem' } }, label + ': '),
          e('span', { style: { fontSize: '.85rem' } }, content)
        ));
      }
    } else {
      // Non-label segment (intro text)
      result.push(e('span', { key: keyPrefix + '-' + si, style: { fontSize: '.85rem' } }, seg.trim()));
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
        e('strong', { style: { display: 'block', marginBottom: 4, color: '#1e293b', fontSize: '.88rem' } }, title),
        formatRichBlock(rest, keyPrefix + '-body')
      );
    }
    return e('div', { key: keyPrefix },
      e('strong', { style: { color: '#1e293b', fontSize: '.88rem' } }, title + ': '),
      e('span', { style: { fontSize: '.85rem' } }, rest)
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
        nlElements.push(e('p', { key: 'intro', style: { marginBottom: 12, lineHeight: 1.7 } }, nlIntro.trim()));
      }
      nlElements.push(e('ol', { key: 'list', style: { paddingLeft: 20, margin: '8px 0' } },
        nlItems.map(function(item, i) {
          var itemText = item.replace(/^\d+\.\s*/, '').trim();
          var rich = formatTitledItem(itemText, 'li-' + i);
          return e('li', { key: i, style: { marginBottom: 12, lineHeight: 1.6 } }, rich || itemText);
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
        elements.push(e('p', { key: 'intro', style: { marginBottom: 12, lineHeight: 1.7 } }, intro.trim()));
      }
      elements.push(e('ul', { key: 'list', style: { paddingLeft: 20, margin: '8px 0' } },
        items.map(function(item, i) {
          var rich = formatTitledItem(item.trim(), 'li-' + i);
          return e('li', { key: i, style: { marginBottom: 6, lineHeight: 1.6, fontSize: '.88rem' } }, rich || item.trim());
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
      return e('p', { key: i, style: { marginBottom: 10, lineHeight: 1.7 } }, p.trim());
    }));
  }
  // Check for single line breaks with content
  if (text.indexOf('\n') !== -1) {
    var lines = text.split('\n').filter(function(s) { return s.trim(); });
    if (lines.length > 1) {
      return e('div', null, lines.map(function(line, i) {
        return e('p', { key: i, style: { marginBottom: 6, lineHeight: 1.6 } }, line.trim());
      }));
    }
  }
  // Plain text
  return e('p', { style: { lineHeight: 1.7 } }, text);
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
            (section.terms || []).map(function(t, i) {
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
          section.items ? section.items.map(function(item, i) {
            return e('div', { key: i, className: 'learn-method-item' },
              e('div', { className: 'learn-method-q' }, item.q),
              e('div', { className: 'learn-method-a' }, item.a)
            );
          }) : section.text ? e('div', { className: 'learn-method-text' }, formatText(section.text)) : null
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
            Array.isArray(section.content)
              ? section.content.map(function(p, i) { return e('p', { key: i, style: { marginBottom: 10, lineHeight: 1.7 }, dangerouslySetInnerHTML: { __html: p } }); })
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
    var pct = Math.round(correct / total * 100);
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
            e('span', null, ex.q ? ex.q.substring(0, 60) + (ex.q.length > 60 ? '...' : '') : 'Aufgabe ' + ex.id),
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
              e('div', { className: 'ex-title' }, ex.q ? ex.q.substring(0, 80) : 'Aufgabe ' + ex.id),
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
    e('button', {
      className: 'mode-tab' + (mode === 'ueben' ? ' active-ueben' : ''),
      onClick: function() { setMode('ueben'); }
    },
      '\u00DCben',
      chProgress ? e('span', { className: 'mode-badge' }, chProgress.done + '/' + chProgress.total) : null
    ),
    hasLearningData ? e('button', {
      className: 'mode-tab' + (mode === 'lernen' ? ' active-lernen' : ''),
      onClick: function() { setMode('lernen'); }
    },
      'Lernen',
      learnRead ? e('span', { className: 'mode-badge' }, '\u2713') : null
    ) : null,
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
  60: 3, 81: 3, 82: 3, 140: 3, 204: 3, 142: 3, 162: 3, 250: 3
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

// ─── Chapter Card ───────────────────────────────────────────────────────────

function ChapterCard(props) {
  var chapter = props.chapter, bookData = props.bookData, progress = props.progress, markDone = props.markDone;
  var st = useState(false), isOpen = st[0], setIsOpen = st[1];
  var st2 = useState(null), openEx = st2[0], setOpenEx = st2[1];
  var st3 = useState('ueben'), mode = st3[0], setMode = st3[1];
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
                  e('div', { className: 'ex-title' }, ex.q ? ex.q.substring(0, 80) : 'Aufgabe ' + ex.id),
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
    var stCT = useState(false), showCalcTrainer = stCT[0], setShowCalcTrainer = stCT[1];
    var stBT = useState(false), showBSTrainer = stBT[0], setShowBSTrainer = stBT[1];
    var st6 = useState(function() { return localStorage.getItem('lp-notes-' + bookData.id) || ''; });
    var notes = st6[0], setNotes = st6[1];
    var st7 = useState(false), timerOn = st7[0], setTimerOn = st7[1];
    var st8 = useState(3600), seconds = st8[0], setSeconds = st8[1];
    var timerRef = useRef(null);

    useEffect(function() { document.documentElement.className = dark ? 'dark' : ''; }, [dark]);
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

    var totalExercises = 0;
    bookData.chapters.forEach(function(ch) { totalExercises += (ch.exercises || []).length; });
    var totalDone = Object.values(progress).filter(function(p) { return p && p.done; }).length;

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
            bookData.kontenrahmen ? e('button', { className: 'tool-btn' + (showKR ? ' active' : ''), onClick: function() { setShowKR(!showKR); } }, showKR ? '\u2715 Kontenrahmen' : 'Kontenrahmen') : null
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
            style: { margin: '0 0 16px', padding: '14px 18px', borderRadius: 8, background: 'linear-gradient(135deg, var(--accent), #6366f1)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, transition: 'transform .15s', color: '#fff' }
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
            style: { margin: '0 0 16px', padding: '14px 18px', borderRadius: 8, background: 'linear-gradient(135deg, #059669, #0d9488)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }
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
      showKR && bookData.kontenrahmen ? e(Kontenrahmen, { onClose: function() { setShowKR(false); }, kontenrahmen: bookData.kontenrahmen }) : null
    );
  }

  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
}

})();
