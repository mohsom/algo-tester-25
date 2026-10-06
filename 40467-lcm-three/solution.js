const [a, b, c] = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);
const gcd = (x, y) => (y === 0n ? x : gcd(y, x % y));
const lcm = (x, y) => (x / gcd(x, y)) * y;
// НСК трьох чисел може сягати 10^18, тому використовуємо BigInt
console.log(String(lcm(lcm(a, b), c)));
