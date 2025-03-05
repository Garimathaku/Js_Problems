const number = parseInt(process.argv[2]);

const placeValues = {
  1: "Unit",
  10: "Ten",
  100: "Hundred",
  1000: "Thousand",
  10000: "Ten Thousand",
  100000: "Lakh",
  1000000: "Ten Lakh",
};

console.log(placeValues[number] || "Please enter a valid place value (1, 10, 100, 1000, etc.).");
