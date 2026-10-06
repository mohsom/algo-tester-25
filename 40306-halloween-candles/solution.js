const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const m = data[1];
const l = data.slice(2, 2 + m);

// Чи можна нарізати щонайменше n свічок довжини len (з кожної свічки виходить floor(l / len) штук)
const enough = (len) => {
  let cnt = 0;
  for (const x of l) cnt += Math.floor(x / len);
  return cnt >= n;
};

// Бінарний пошук за відповіддю: якщо довжина len підходить, то і менша підходить
let lo = 0;
let hi = 101;
for (let i = 0; i < 100; i++) {
  const mid = (lo + hi) / 2;
  if (enough(mid)) lo = mid;
  else hi = mid;
}
console.log(lo.toFixed(8));
