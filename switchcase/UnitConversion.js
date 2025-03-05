const conversionType = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);

switch (conversionType) {
  case 1:
    console.log(`${value} Feet = ${value * 12} Inches`);
    break;
  case 2:
    console.log(`${value} Feet = ${value * 0.3048} Meters`);
    break;
  case 3:
    console.log(`${value} Inches = ${value / 12} Feet`);
    break;
  case 4:
    console.log(`${value} Meters = ${value * 3.28084} Feet`);
    break;
  default:
    console.log("Invalid choice! Use:\n1 - Feet to Inch\n2 - Feet to Meter\n3 - Inch to Feet\n4 - Meter to Feet");
}
