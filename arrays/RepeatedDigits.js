let repeatedNumbers = [];

for (let i = 10; i <= 99; i++) {
    let num = i.toString();
    if (num[0] === num[1]) {
        repeatedNumbers.push(i);
    }
}

console.log("Digits that are repeated twice between 0 and 100:", repeatedNumbers);
