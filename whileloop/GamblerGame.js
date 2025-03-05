let money = 100;
let betCount = 0;
let winCount = 0;

while (money > 0 && money < 200) {
    betCount++;
    if (Math.random() < 0.5) {
        money++; // Win Re 1
        winCount++;
    } else {
        money--; // Lose Re 1
    }
}

if (money === 0) {
    console.log(`Gambler went broke after ${betCount} bets.`);
} else {
    console.log(`Gambler reached Rs 200 after ${betCount} bets, winning ${winCount} times.`);
}
