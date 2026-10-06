const tokens = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean);
let pos = 0;
const n = Number(tokens[pos++]);
const q = Number(tokens[pos++]);

// Дерево Фенвіка + масив поточних значень: заміна = додавання різниці
const tree = new Float64Array(n + 1);
const a = new Array(n + 1).fill(0);
const add = (i, d) => {
  for (; i <= n; i += i & -i) tree[i] += d;
};
const prefix = (i) => {
  let s = 0;
  for (; i > 0; i -= i & -i) s += tree[i];
  return s;
};

for (let i = 1; i <= n; i++) {
  a[i] = Number(tokens[pos++]);
  add(i, a[i]);
}
const out = [];
for (let i = 0; i < q; i++) {
  const type = tokens[pos++];
  const x = Number(tokens[pos++]);
  const y = Number(tokens[pos++]);
  if (type === 'query') out.push(prefix(y) - prefix(x - 1));
  else {
    add(x, y - a[x]);
    a[x] = y;
  }
}
console.log(out.join('\n'));
