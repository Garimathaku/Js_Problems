const n = parseInt(process.argv[2]);
let power = 1;
let i = 0;

console.log(`Powers of 2 up to 2^${n} or 256:`);
while (power <= 256 && i <= n) {
    console.log(`2^${i} = ${power}`);
    i++;
    power = Math.pow(2, i);
}
