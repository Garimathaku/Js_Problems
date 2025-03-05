const n = parseInt(process.argv[2]);
let num = n;
let primeFactors = [];

// Find all prime factors
for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
        primeFactors.push(i);
        num /= i;
    }
}
if (num > 1) primeFactors.push(num); // If prime number > sqrt(N)

console.log(`Prime factors of ${n}:`, primeFactors);
