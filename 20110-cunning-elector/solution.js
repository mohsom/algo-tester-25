const lines = require('fs').readFileSync(0, 'utf8').split('\n').map((x) => x.trim());
const n = Number(lines[0]);
// Лічильник виборців у кабінках: якщо хтось виходить, коли нікого немає - дані суперечливі
let inside = 0;
let error = false;
for (let i = 1; i <= n; i++) {
  if (lines[i] === 'In') inside++;
  else if (--inside < 0) {
    error = true;
    break;
  }
}
if (error) console.log('Error');
else console.log(inside > 0 ? 'Cunning elector' : 'Just a fantasy');
