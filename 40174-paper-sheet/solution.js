const n = Number(require('fs').readFileSync(0, 'utf8').trim());
// Квадратів зі стороною k у сітці n x n є (n-k+1)^2, тож усього 1^2 + 2^2 + ... + n^2
console.log(String((n * (n + 1) * (2 * n + 1)) / 6));
