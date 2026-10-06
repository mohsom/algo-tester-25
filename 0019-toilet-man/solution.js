const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const n = data[0];
const m = data[1];
const adj = Array.from({ length: n + 1 }, () => []);
const radj = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const a = data[2 + 2 * i];
  const b = data[3 + 2 * i];
  adj[a].push(b);
  radj[b].push(a);
}

// Ітеративний обхід у глибину від v (рекурсія при n = 10^5 переповнила б стек).
// Позначає досяжні з start вершини в seen.
function dfs(graph, start, seen) {
  const stack = [[start, 0]];
  seen[start] = true;
  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    const [v, i] = top;
    if (i < graph[v].length) {
      top[1]++;
      const u = graph[v][i];
      if (!seen[u]) {
        seen[u] = true;
        stack.push([u, 0]);
      }
    } else {
      stack.pop();
    }
  }
}

// Кандидат - корінь останнього обходу в глибину, запущеного з ще не відвіданих вершин:
// якщо шукана вершина існує, то обхід, що її почав, відвідає все і він буде останнім коренем.
const seen = new Array(n + 1).fill(false);
let candidate = 1;
for (let v = 1; v <= n; v++) {
  if (!seen[v]) {
    candidate = v;
    dfs(adj, v, seen);
  }
}

// Перевіряємо, що кандидат досягає всіх вершин
const reach = new Array(n + 1).fill(false);
dfs(adj, candidate, reach);
let ok = true;
for (let v = 1; v <= n; v++) if (!reach[v]) ok = false;

if (!ok) {
  console.log(-1);
} else {
  // Усі вершини, з яких можна дійти до кандидата, теж досягають усіх (через кандидата).
  // Знаходимо їх обходом по зворотних ребрах і беремо найменший номер.
  const back = new Array(n + 1).fill(false);
  dfs(radj, candidate, back);
  let ans = candidate;
  for (let v = 1; v <= n; v++) {
    if (back[v]) {
      ans = v;
      break;
    }
  }
  console.log(ans);
}
