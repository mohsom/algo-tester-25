const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const m = data[1];
const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const a = data[2 + 3 * i];
  const b = data[3 + 3 * i];
  const c = data[4 + 3 * i];
  adj[a].push([b, c]);
  adj[b].push([a, c]);
}

// Алгоритм Дейкстри з двійковою купою пар [відстань, вершина]
const dist = new Array(n + 1).fill(Infinity);
dist[1] = 0;
const heap = [[0, 1]];

const push = (item) => {
  heap.push(item);
  let i = heap.length - 1;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (heap[p][0] <= heap[i][0]) break;
    [heap[p], heap[i]] = [heap[i], heap[p]];
    i = p;
  }
};
const pop = () => {
  const top = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    let i = 0;
    for (;;) {
      let s = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
  }
  return top;
};

while (heap.length > 0) {
  const [d, v] = pop();
  if (d > dist[v]) continue; // застарілий запис
  for (const [u, w] of adj[v]) {
    if (d + w < dist[u]) {
      dist[u] = d + w;
      push([dist[u], u]);
    }
  }
}

let total = 0;
for (let v = 2; v <= n; v++) total += dist[v];
console.log(total);
