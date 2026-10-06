let n = Number(require('fs').readFileSync(0, 'utf8').trim());
// Кількість нулів у кінці n! = кількість п'ятірок у розкладі: n/5 + n/25 + n/125 + ...
let res = 0;
while (n >= 5) {
  n = Math.floor(n / 5);
  res += n;
}
console.log(res);
