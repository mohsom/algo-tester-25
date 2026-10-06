const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const k = data[1];
// Найдовша серія підряд елементів, що >= k
let best = 0;
let cur = 0;
for (let i = 0; i < n; i++) {
  cur = data[2 + i] >= k ? cur + 1 : 0;
  if (cur > best) best = cur;
}
console.log(best);
