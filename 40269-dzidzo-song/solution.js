const s = require('fs').readFileSync(0, 'utf8').trim();
// Видалення будь-якої літери з однієї серії однакових літер дає той самий рядок,
// тож різних результатів стільки, скільки серій
let runs = 1;
for (let i = 1; i < s.length; i++) if (s[i] !== s[i - 1]) runs++;
console.log(runs);
