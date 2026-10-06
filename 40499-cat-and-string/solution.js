const s = require('fs').readFileSync(0, 'utf8').trim();
// Між кожною парою сусідніх однакових літер потрібна окрема вставка іншої літери,
// тож відповідь - кількість позицій i, де s[i] === s[i + 1]
let res = 0;
for (let i = 1; i < s.length; i++) if (s[i] === s[i - 1]) res++;
console.log(res);
