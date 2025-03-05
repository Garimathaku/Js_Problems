let heads = 0;
let tails = 0;
let flips = 0;

while (heads < 11 && tails < 11) {
    const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
    if (flip === 'Heads') {
        heads++;
    } else {
        tails++;
    }
    flips++;
}

console.log(`After ${flips} flips, Heads: ${heads}, Tails: ${tails}`);
