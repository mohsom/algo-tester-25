const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const k = data[1];
const a = data.slice(2, 2 + n);

// Кількість підмасивів, у яких не більше limit різних елементів (ковзне вікно)
function atMost(limit) {
  if (limit <= 0) return 0;
  const cnt = new Map();
  let distinct = 0;
  let left = 0;
  let res = 0;
  for (let right = 0; right < n; right++) {
    const c = cnt.get(a[right]) || 0;
    if (c === 0) distinct++;
    cnt.set(a[right], c + 1);
    while (distinct > limit) {
      const d = cnt.get(a[left]) - 1;
      cnt.set(a[left], d);
      if (d === 0) distinct--;
      left++;
    }
    res += right - left + 1; // усі підмасиви, що закінчуються в right
  }
  return res;
}

const total = (n * (n + 1)) / 2;
console.log(String(total - atMost(k - 1)));
