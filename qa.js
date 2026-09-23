/* ============================================================
   qa.js — run after every authoring batch:  node qa.js
   Fails loudly on data-integrity problems and prints the
   content-quality picture so standards don't quietly slip.
   ============================================================ */
global.window = {};
require('./curriculum-data.js');
require('./original-lessons.js');
require('./original-lessons-2.js');
require('./original-lessons-3.js');
require('./knowledge-cards.js');
require('./knowledge-cards-2.js');
require('./knowledge-cards-3.js');
require('./knowledge-cards-4.js');
require('./sequence.js');

const S = window.SEQ, KC = window.KC, L = {};
window.LESSONS.forEach(x => L[x.id] = x);
let bad = 0, warn = 0;
const err  = m => { console.log('  ERROR  ' + m); bad++; };
const wrn  = m => { console.log('  warn   ' + m); warn++; };

console.log('=== INTEGRITY ===');
const seen = new Set();
window.LESSONS.forEach(l => { if(seen.has(l.id)) err('duplicate lesson id ' + l.id); seen.add(l.id); });
for(const y of [1,2,3,4]) for(const st of ['history','science','body'])
  for(const u of S[y][st]) for(const id of u.l)
    if(!L[id]) err(`sequence unit "${u.u}" points at missing lesson ${id}`);
for(const k of Object.keys(KC)){
  if(!L[k]) err(`knowledge card ${k} has no matching lesson`);
  KC[k].forEach((c,i) => {
    if(!c.f || !c.q || !c.a || !c.t) err(`card ${k}[${i}] missing a field`);
    if(c.t < 1 || c.t > 3)          err(`card ${k}[${i}] bad tier ${c.t}`);
  });
}

console.log('=== CONTENT QUALITY ===');
for(const k of Object.keys(KC)){
  const card = KC[k], t1 = card.filter(c => c.t === 1).length;
  if(card.length < 8)  wrn(`lesson ${k} "${L[k] ? L[k].title : '?'}" has only ${card.length} facts (target 8-12)`);
  if(card.length > 14) wrn(`lesson ${k} has ${card.length} facts — too many for one session`);
  if(t1 < 2)           wrn(`lesson ${k} has only ${t1} tier-1 facts — the youngest gets almost nothing`);
}
window.LESSONS.filter(l => l.id >= 1000).forEach(l => {
  const words = (l.story.replace(/<[^>]+>/g,' ').match(/\S+/g) || []).length;
  if(words > 800) wrn(`original lesson ${l.id} is ${words} words — aim under ~700`);
  if(words < 300) wrn(`original lesson ${l.id} is only ${words} words — likely too thin`);
  if((l.story.match(/<h3/g) || []).length < 2) wrn(`original lesson ${l.id} has under 2 sections — paging won't work well`);
  if(!l.discussion || l.discussion.length < 3) wrn(`original lesson ${l.id} needs 3 discussion prompts`);
  if(!l.quiz || l.quiz.length < 3)             wrn(`original lesson ${l.id} needs 3 fallback quiz items`);
});

console.log('=== COVERAGE ===');
let facts = 0; Object.keys(KC).forEach(k => facts += KC[k].length);
const rows = [];
for(const st of ['history','science','body']){
  let ready=0, story=0, todo=0;
  for(const u of S[1][st]){
    const has = u.l.length, carded = has && u.l.some(id => KC[id]);
    if(carded) ready++; else if(has) story++; else todo++;
  }
  rows.push(`  ${st.padEnd(8)} total ${(ready+story+todo).toString().padStart(3)}   READY ${ready.toString().padStart(3)}   STORY ${story.toString().padStart(3)}   TODO ${todo.toString().padStart(3)}`);
}
rows.forEach(r => console.log(r));
console.log(`  lessons ${window.LESSONS.length}   cards ${Object.keys(KC).length}   knowledge facts ${facts}`);

console.log(bad ? `\nFAILED — ${bad} error(s), ${warn} warning(s)` : `\nPASS — 0 errors, ${warn} warning(s)`);
process.exit(bad ? 1 : 0);
