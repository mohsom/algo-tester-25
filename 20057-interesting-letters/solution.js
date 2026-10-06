const [, s] = require('fs').readFileSync(0, 'utf8').split('\n').map((x) => x.trim());
const k = Math.round(Math.sqrt(s.length));

// Шифр записує повідомлення у квадрат k x k по діагоналях (кожна діагональ - зверху вниз),
// а лист - це рядки квадрата підряд. Тож літера (i, j) листа - це s[i * k + j].
// Щоб розшифрувати, обходимо клітинки у порядку діагоналей: d = i + j, потім за зростанням i.
let res = '';
for (let d = 0; d <= 2 * (k - 1); d++) {
  for (let i = 0; i < k; i++) {
    const j = d - i;
    if (j >= 0 && j < k) res += s[i * k + j];
  }
}
console.log(res);
