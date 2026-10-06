const s = require('fs').readFileSync(0, 'utf8').trim();
const cnt = new Array(26).fill(0);
for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;
// Із переставлених літер можна скласти паліндром, якщо літер із непарною кількістю не більше однієї
const odd = cnt.filter((c) => c % 2 === 1).length;
console.log(odd <= 1 ? 'YES' : 'NO');
