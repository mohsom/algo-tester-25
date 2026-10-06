// ★ ЗАДАЧА ДЛЯ ЗАХИСТУ (бінарне дерево (купа))
const lines = require('fs').readFileSync(0, 'utf8').split('\n');
const [n, p] = lines[0].trim().split(/\s+/).map(Number);

// Двійкова купа (max-heap) на масиві: діти вершини i - це 2i+1 та 2i+2
const heap = [p];
const out = [];

function siftUp(i) {
  let swaps = 0;
  while (i > 0) {
    const parent = (i - 1) >> 1;
    if (heap[parent] >= heap[i]) break;
    [heap[parent], heap[i]] = [heap[i], heap[parent]];
    i = parent;
    swaps++;
  }
  return swaps;
}

function siftDown(i) {
  let swaps = 0;
  const size = heap.length;
  for (;;) {
    let big = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < size && heap[l] > heap[big]) big = l;
    if (r < size && heap[r] > heap[big]) big = r;
    if (big === i) break;
    [heap[big], heap[i]] = [heap[i], heap[big]];
    i = big;
    swaps++;
  }
  return swaps;
}

for (let i = 1; i <= n; i++) {
  const line = lines[i].trim();
  let swaps;
  if (line[0] === '+') {
    heap.push(Number(line.slice(1)));
    swaps = siftUp(heap.length - 1);
  } else {
    const last = heap.pop(); // останній ген ієрархії
    if (heap.length > 0) {
      heap[0] = last;
      swaps = siftDown(0);
    } else {
      swaps = 0;
    }
  }
  out.push(swaps + ' ' + heap[0]);
}
console.log(out.join('\n'));
