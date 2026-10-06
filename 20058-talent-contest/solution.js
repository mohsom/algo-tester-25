const lines = require('fs').readFileSync(0, 'utf8').split('\n').map((x) => x.trim());
const [n, k] = lines[0].split(/\s+/).map(Number);

// Префіксні суми кількості мішків: сума в будь-якому квадраті за O(1)
const p = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    p[i][j] = p[i - 1][j] + p[i][j - 1] - p[i - 1][j - 1] + Number(lines[i][j - 1]);
  }
}

// Перебираємо сторону квадрата від найбільшої і шукаємо будь-яке розташування з <= k мішками
let best = 0;
for (let side = n; side >= 1 && best === 0; side--) {
  for (let i = side; i <= n && best === 0; i++) {
    for (let j = side; j <= n; j++) {
      const bags = p[i][j] - p[i - side][j] - p[i][j - side] + p[i - side][j - side];
      if (bags <= k) {
        best = side;
        break;
      }
    }
  }
}
console.log(best);
