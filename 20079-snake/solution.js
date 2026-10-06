const lines = require('fs').readFileSync(0, 'utf8').split('\n');
let [x, y] = lines[0].trim().split(/\s+/).map(Number);
const s = lines[1].trim();

// Координати лишаються в межах [-1e6, 2e6], тож кодуємо клітинку одним числом
const OFFSET = 1100000;
const W = 4000000;
const key = (cx, cy) => (cx + OFFSET) * W + (cy + OFFSET);

const visited = new Set([key(x, y)]);
let answer = 'Success';
for (let i = 0; i < s.length; i++) {
  const ch = s[i];
  if (ch === 'L') x--;
  else if (ch === 'R') x++;
  else if (ch === 'U') y++;
  else y--;
  const k = key(x, y);
  if (visited.has(k)) {
    answer = 'Fail\n' + (i + 1);
    break;
  }
  visited.add(k);
}
console.log(answer);
