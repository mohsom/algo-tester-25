const data = require('fs').readFileSync(0, 'utf8').split(/\s+/).filter(Boolean).map(Number);
const q = data[0];

// Щасливих чисел (з цифр 4 і 7) до 10^9 лише 1022, тож усі їхні попарні суми - це ~500 тисяч значень
const lucky = [];
const gen = (x) => {
  if (x > 1e9) return;
  if (x > 0) lucky.push(x);
  gen(x * 10 + 4);
  gen(x * 10 + 7);
};
gen(0);

const sums = new Set();
for (let i = 0; i < lucky.length; i++) {
  for (let j = i; j < lucky.length; j++) sums.add(lucky[i] + lucky[j]);
}

const out = [];
for (let i = 1; i <= q; i++) out.push(sums.has(data[i]) ? 'YES' : 'NO');
console.log(out.join('\n'));
