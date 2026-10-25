// ★ ЗАДАЧА ДЛЯ ЗАХИСТУ (бінарний пошук)
const lines = require('fs').readFileSync(0, 'utf8').split('\n');
const [, , x] = lines[0].trim().split(/\s+/).map(BigInt);
// Числа до 10^18 не вміщаються точно в Number, тому використовуємо BigInt
const a = lines[1].trim().split(/\s+/).map(BigInt);
const b = lines[2].trim().split(/\s+/).map(BigInt);
b.sort((p, q) => (p < q ? -1 : p > q ? 1 : 0));

const abs = (v) => (v < 0n ? -v : v);

// Для кожного a[i] бінарним пошуком шукаємо у відсортованому b перший елемент >= x - a[i];
// найближчі до цільового значення - цей елемент і його попередник
let best = null;
for (const ai of a) {
  const target = x - ai;
  let lo = 0;
  let hi = b.length; // перший індекс, де b[idx] >= target
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (b[mid] >= target) hi = mid;
    else lo = mid + 1;
  }
  if (lo < b.length) {
    const d = abs(ai + b[lo] - x);
    if (best === null || d < best) best = d;
  }
  if (lo > 0) {
    const d = abs(ai + b[lo - 1] - x);
    if (best === null || d < best) best = d;
  }
}
console.log(String(best));
