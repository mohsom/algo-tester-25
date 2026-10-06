const s = require('fs').readFileSync(0, 'utf8').trim();
// За хід відкриваються всі однакові літери, тож відповідь - кількість різних літер
console.log(new Set(s).size);
