const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
let pos = 0;
const n = data[pos++];
const m = data[pos++];

// Дерево Фенвіка: точкове додавання та префіксна сума за O(log n)
const tree = new Float64Array(n + 1);
const add = (i, d) => {
  for (; i <= n; i += i & -i) tree[i] += d;
};
const prefix = (i) => {
  let s = 0;
  for (; i > 0; i -= i & -i) s += tree[i];
  return s;
};

for (let i = 1; i <= n; i++) add(i, data[pos++]);
const out = [];
for (let q = 0; q < m; q++) {
  const type = data[pos++];
  const a = data[pos++];
  const b = data[pos++];
  if (type === 1) out.push(prefix(b) - prefix(a - 1));
  else add(a, b);
}
console.log(out.join('\n'));
