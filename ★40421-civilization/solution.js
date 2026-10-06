// ★ ЗАДАЧА ДЛЯ ЗАХИСТУ (граф (BFS))
const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const [n, m, k] = data;
const dist = new Int32Array(n * m).fill(-1);
const queue = new Int32Array(n * m);
let tail = 0;

// Багатоджерельний BFS: усі заселені клітинки мають відстань 0
for (let i = 0; i < n * m; i++) {
  if (data[3 + i] === 1) {
    dist[i] = 0;
    queue[tail++] = i;
  }
}
for (let head = 0; head < tail; head++) {
  const v = queue[head];
  const r = (v / m) | 0;
  const c = v % m;
  const d = dist[v] + 1;
  if (r > 0 && dist[v - m] < 0) { dist[v - m] = d; queue[tail++] = v - m; }
  if (r < n - 1 && dist[v + m] < 0) { dist[v + m] = d; queue[tail++] = v + m; }
  if (c > 0 && dist[v - 1] < 0) { dist[v - 1] = d; queue[tail++] = v - 1; }
  if (c < m - 1 && dist[v + 1] < 0) { dist[v + 1] = d; queue[tail++] = v + 1; }
}

// Клітинка заселена через k років, якщо її відстань до найближчої заселеної <= k
let res = 0;
for (let i = 0; i < n * m; i++) if (dist[i] >= 0 && dist[i] <= k) res++;
console.log(res);
