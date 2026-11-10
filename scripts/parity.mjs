// Content parity: legacy/*.html (source of truth) vs dist/*.html.
// Usage: npm run build && node scripts/parity.mjs
//
// For every page it prints
//   (a) sentences in the NEW page that are not in the legacy page   (excluding a small UI allowlist)
//   (b) sentences in the LEGACY page that are missing from the new page (excluding a small allowlist)
//   (c) legacy sentences that appear in a different order
//   (d) new-page words that do not occur anywhere in the legacy page
// Only the approved typo fixes below are applied to the legacy side before comparing.
// Exit code 1 if any list is non-empty.
import fs from 'node:fs';

const PAGES = ['index', 'ecommerceu_segmentation', 'ecommerceu_dashboard', 'ecommerceu_eda', 'ecommerceu_feature_adoption',
  'sql_assignment', 'tableau_assignment', 'spreadsheet_assignment', 'bbca'];

// ---- Approved typo / naming fixes (legacy -> new). Anything else must match exactly. ----
const FIXES = [
  ['E-commerceU naming (EcommerceU / eCommerceU -> E-commerceU)', /e-?commerceu/g, 'ecommerceu'],
  ['Lavel -> Level', /\blavel\b/g, 'level'],
  ['Spreadheet -> Spreadsheet', /\bspreadheet\b/g, 'spreadsheet'],
  ['tableu -> Tableau', /\btableu\b/g, 'tableau'],
  ['commere -> commerce', /\bcommere\b/g, 'commerce'],
  ['convertion -> conversion', /\bconvertion\b/g, 'conversion'],
  ['feminime -> feminine', /\bfeminime\b/g, 'feminine'],
  ['"the the" -> "the"', /\bthe the\b/g, 'the'],
  ['They wants -> They want', /\bthey wants\b/g, 'they want'],
  ["hasn't used -> haven't used", /\bhasn't used\b/g, "haven't used"],
  ['Please used -> Please use', /\bplease used\b/g, 'please use'],
  ['can be define -> can be defined', /\bcan be define\b/g, 'can be defined'],
  ['Advance projects -> Advanced projects', /\badvance projects\b/g, 'advanced projects'],
];

// ---- Allowlists (normalised, punctuation stripped) ----
// New-page strings that are UI chrome / structure labels, not content.
const UI_NEW = new Set([
  'skip to content', 'adharul imron data analyst', 'work', 'skills', 'contact', 'selected work', 'see my work', 'read case study',
  'course work more', 'on this page', 'next case study', 'email', 'github', 'linkedin', `${new Date().getFullYear()} adharul imron`,
  'cluster', 'category', 'price range', 'attributes',                     // DataTable column headers
  'task 1', 'task 2', 'task 3', 'task 4', 'task 5', 'task 6', 'task 7',    // SQL per-task section headings (TOC)
]);
// Legacy-only strings intentionally not carried over.
const LEGACY_ONLY = new Set([
  'projects',            // home section title replaced by "Selected Work" / "Course work & more" (owner's brief)
  'more',                // legacy card button, replaced by "Read case study"
  '62 812 3298 3610',    // phone number: removed by owner decision
]);

const read = (f) => fs.readFileSync(f, 'utf8');
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/&amp;/g, '&');

const BLOCK = /<\/?(p|li|ul|ol|h[1-6]|tr|td|th|caption|figcaption|figure|summary|details|dt|dd|dl|pre|button|div|section|article|header|footer|nav|aside|main|table|thead|tbody|br|hr|form|label)\b[^>]*>/gi;
function blocks(html) {
  html = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/<pre\b[\s\S]*?<\/pre>/gi, (m) => `\n${m.replace(/<[^>]+>/g, '')}\n`); // code: text only, keep inline tokens together
  html = html.replace(/<\/(a|span)>(?=<(a|span)\b)/gi, '</$1>\n');                       // adjacent siblings with no whitespace = separate items
  html = html.replace(BLOCK, '\n').replace(/<[^>]+>/g, '');
  return decode(html).split('\n').map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
}
const sentences = (bs) => bs.flatMap((b) => b.split(/(?<=[.!?])(?<!(?:^|\s)\d{1,2}\.)\s+(?=[A-Z0-9"'(‘“])/).map((s) => s.trim()).filter(Boolean));
const base = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').toLowerCase();
const words = (s) => base(s).replace(/[^a-z0-9'%]+/g, ' ').replace(/(^| )'+|'+( |$)/g, ' ').trim().replace(/\s+/g, ' ');
const applyFixes = (s) => { let t = base(s); for (const [, re, to] of FIXES) t = t.replace(re, to); return t; };
const legacyWords = (s) => words(applyFixes(s));
const newWords = (s) => words(applyFixes(s).replace(/e-?commerceu/g, 'ecommerceu')); // new side only normalises the brand spelling

function legacyHtml(page) {
  const h = read(`legacy/${page}.html`);
  if (page !== 'index') return h.slice(h.indexOf('<!-- Content -->'), h.indexOf('<!-- Sidebar -->'));
  const main = h.slice(h.indexOf('<!-- Header -->'), h.indexOf('<!-- Sidebar -->')).replace(/<ul class="icons">[\s\S]*?<\/ul>/, '');
  const contact = h.slice(h.indexOf('<h2>Get in touch</h2>'), h.indexOf('<!-- Footer -->'));
  return main + contact;
}
function newHtml(page) {
  let h = read(`dist/${page}.html`);
  h = h.slice(h.indexOf('<body'));
  return h.replace(/<aside aria-labelledby="next-title"[\s\S]*?<\/aside>/, ''); // next-case card is checked separately
}
const nextCaseHtml = (page) => (read(`dist/${page}.html`).match(/<aside aria-labelledby="next-title"[\s\S]*?<\/aside>/) || [''])[0];

// Home cards show each project's tool chips; a chip is valid if it literally occurs on THAT project's legacy page.
function homeChips() {
  const ok = new Set(); const h = read('dist/index.html');
  for (const art of h.match(/<article[\s\S]*?<\/article>/g) || []) {
    const slug = (art.match(/href="\/([a-z_]+)\.html"/) || [])[1]; if (!slug) continue;
    const full = ` ${sentences(blocks(legacyHtml(slug))).map(legacyWords).join(' ')} `;
    for (const m of art.matchAll(/<span class="inline-block[^"]*">([^<]+)<\/span>/g)) { const w = newWords(m[1]); if (full.includes(` ${w} `)) ok.add(w); }
  }
  return ok;
}
let problems = 0;
const out = [];
const say = (s = '') => out.push(s);
say('APPROVED FIXES applied to the legacy side before comparing (count of occurrences in legacy source):');
const allLegacy = PAGES.map((p) => base(decode(read(`legacy/${p}.html`)))).join(' ');
for (const [label, re] of FIXES) say(`  - ${label}: ${(allLegacy.match(re) || []).length}`);
say(`UI allowlist (new-only): ${[...UI_NEW].join(' | ')}`);
say(`Legacy-only allowlist: ${[...LEGACY_ONLY].join(' | ')}`);
say('');

const chipWords = new Set(); // words of valid home chips are not "new words"
const indexSentences = sentences(blocks(legacyHtml('index'))).map(legacyWords);
const indexFull = ` ${indexSentences.join(' ')} `;

for (const page of PAGES) {
  const L = sentences(blocks(legacyHtml(page)));
  const N = sentences(blocks(newHtml(page)));
  const Lw = L.map(legacyWords), Nw = N.map(newWords);
  const Lfull = ` ${Lw.join(' ')} `, Nfull = ` ${Nw.join(' ')} `;

  const chipOk = page === "index" ? homeChips() : new Set();
  if (page === "index") chipOk.forEach((c) => c.split(" ").forEach((w) => chipWords.add(w)));
  const onlyNew = N.filter((s, i) => Nw[i] && !UI_NEW.has(Nw[i]) && !chipOk.has(Nw[i]) && !Lfull.includes(` ${Nw[i]} `));
  const onlyLegacy = L.filter((s, i) => Lw[i] && !LEGACY_ONLY.has(Lw[i]) && !Nfull.includes(` ${Lw[i]} `));
  const order = []; let cursor = 0;
  const cardStart = page === 'index' ? Lw.indexOf('projects') : -1, cardEnd = page === 'index' ? Lw.indexOf('get in touch') : -1;
  L.forEach((s, i) => {
    const w = Lw[i]; if (!w || LEGACY_ONLY.has(w)) return;
    if (cardStart >= 0 && i > cardStart && i < cardEnd) return; // cards re-tiered by owner (Selected Work / Course work & more)
    const at = Nfull.indexOf(` ${w} `, cursor);
    if (at >= 0) cursor = at + 1;
    else if (Nfull.includes(` ${w} `)) order.push(s);
  });
  const legacySet = new Set(Lfull.split(' ').filter(Boolean));
  const newOnlyWords = [...new Set(Nfull.split(' ').filter(Boolean))].filter((w) => !legacySet.has(w) && !chipWords.has(w) && !new RegExp(`(^| )${w}( |$)`).test([...UI_NEW].join(' ')));

  // <title> and next-case card
  const title = decode((read(`dist/${page}.html`).match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const legTitle = decode((read(`legacy/${page}.html`).match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const titleOk = page === 'index' || legacyWords(legTitle) === newWords(title);
  const nextBlocks = sentences(blocks(nextCaseHtml(page))).map(newWords).filter((w) => w && !UI_NEW.has(w));
  const nextBad = nextBlocks.filter((w) => !indexFull.includes(` ${w} `));

  const legImgs = (legacyHtml(page).match(/<img\b[^>]*>/g) || []).filter((i) => !/ecommerceu_logo/.test(i)).length;
  const newImgs = page === 'index' ? null : (newHtml(page).match(/<img\b/g) || []).length;
  const imgOk = page === 'index' || legImgs === newImgs;
  const bad = (imgOk ? 0 : 1) + onlyNew.length + onlyLegacy.length + order.length + newOnlyWords.length + (titleOk ? 0 : 1) + nextBad.length;
  problems += bad;
  say(`=== ${page}.html   legacy sentences: ${L.length}   new sentences: ${N.length}   ${bad ? 'DIFFERENCES' : 'IDENTICAL (after allowlist + approved fixes)'}`);
  say(`  <title>: ${titleOk ? 'matches legacy' : `MISMATCH  legacy="${legTitle}"  new="${title}"`}`);
  say(`  (a) in NEW but not in legacy: ${onlyNew.length}`); onlyNew.forEach((s) => say(`      + ${s}`));
  say(`  (b) in LEGACY but missing from new: ${onlyLegacy.length}`); onlyLegacy.forEach((s) => say(`      - ${s}`));
  say(`  (c) out of order: ${order.length}`); order.forEach((s) => say(`      ~ ${s}`));
  say(`  (d) new words not found anywhere in legacy page: ${newOnlyWords.length ? newOnlyWords.join(', ') : 'none'}`);
  say(`  (f) real images (legacy, excluding the placeholder logo) vs new: ${page === 'index' ? 'n/a (cards use thumbnails)' : `${legImgs} vs ${newImgs} ${imgOk ? 'OK' : 'MISMATCH'}`}`);
  say(`  (e) next-case card text not from legacy/index.html: ${nextBad.length}`); nextBad.forEach((s) => say(`      ! ${s}`));
  say('');
}
console.log(out.join('\n'));
console.log(problems ? `RESULT: ${problems} difference(s)` : 'RESULT: no differences (only allowlisted UI strings and approved typo fixes)');
process.exit(problems ? 1 : 0);
