// ★ ЗАДАЧА ДЛЯ ЗАХИСТУ (граф)
const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const adj = Array.from({ length: n + 1 }, () => []);
const deg = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  const a = data[1 + 2 * i];
  const b = data[2 + 2 * i];
  adj[a].push(b);
  adj[b].push(a);
  deg[a]++;
  deg[b]++;
}

// Зв'язний граф із n вершин і n ребер має рівно один цикл.
// Послідовно прибираємо листки (вершини ступеня 1) - залишаються вершини циклу.
const removed = new Array(n + 1).fill(false);
const queue = [];
for (let v = 1; v <= n; v++) if (deg[v] === 1) queue.push(v);
for (let head = 0; head < queue.length; head++) {
  const v = queue[head];
  removed[v] = true;
  for (const u of adj[v]) {
    if (removed[u]) continue;
    if (--deg[u] === 1) queue.push(u);
  }
}

const cycle = [];
for (let v = 1; v <= n; v++) if (!removed[v]) cycle.push(v);
console.log(cycle.length);
console.log(cycle.join(' '));
