const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const c = parseFloat(process.argv[4]);

const results = [
  { operation: "a + b * c", value: a + b * c },
  { operation: "a % b + c", value: (b !== 0 ? a % b : NaN) + c },
  { operation: "c + a / b", value: b !== 0 ? c + a / b : NaN },
  { operation: "a * b + c", value: a * b + c },
];

const maxResult = results.reduce((max, curr) => (curr.value > max.value ? curr : max));
const minResult = results.reduce((min, curr) => (curr.value < min.value ? curr : min));

console.log("Results:", results);
console.log("Maximum:", maxResult);
console.log("Minimum:", minResult);
