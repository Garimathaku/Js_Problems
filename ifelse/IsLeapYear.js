const year = parseInt(process.argv[2]);

if (year >= 1000 && year <= 9999) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  console.log(isLeap ? "Leap Year" : "Not a Leap Year");
} else {
  console.log("Please enter a 4-digit year.");
}
