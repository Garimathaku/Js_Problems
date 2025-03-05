let low = 1;
let high = 100;
let guess;
let isFound = false;

console.log("Think of a number between 1 and 100");

while (!isFound) {
    guess = Math.floor((low + high) / 2);
    console.log(`Is the number ${guess}?`);
    
    const userInput = require('readline-sync');
    const response = userInput.question("Is it correct? (yes/less/greater): ").toLowerCase();
    
    if (response === 'yes') {
        console.log(`Magic number is ${guess}!`);
        isFound = true;
    } else if (response === 'less') {
        high = guess - 1;
    } else if (response === 'greater') {
        low = guess + 1;
    }
}
