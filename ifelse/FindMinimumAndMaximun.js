const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", Math.min(...numbers));
console.log("Maximum Value:", Math.max(...numbers));
