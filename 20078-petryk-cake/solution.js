const [n, r] = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
// Видима площа найбільшого ярусу = pi*r^2/n (рівна площі кожного ярусу),
// тож сумарна площа зверху pi*r^2 ділиться на n рівних частин, а найменший круг має площу pi*r^2/n
console.log((r / Math.sqrt(n)).toFixed(7));
