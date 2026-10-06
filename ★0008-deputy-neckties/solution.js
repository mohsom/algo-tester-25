// ★ ЗАДАЧА ДЛЯ ЗАХИСТУ (бінарний пошук)
const [first, second] = require('fs').readFileSync(0, 'utf8').split('\n');
const [n, m] = first.trim().split(/\s+/).map(Number);
const a = second.trim().split(/\s+/).map(Number);

// Чи можна нарізати щонайменше m краваток довжини L
const enough = (L) => {
  let cnt = 0;
  for (const x of a) cnt += Math.floor(x / L);
  return cnt >= m;
};

let lo = 0;
let hi = a.reduce((s, x) => s + x, 0) / m; // довшою за сумарну довжину / m краватка бути не може
for (let i = 0; i < 100; i++) {
  const mid = (lo + hi) / 2;
  if (enough(mid)) lo = mid;
  else hi = mid;
}
console.log(lo.toFixed(7));
