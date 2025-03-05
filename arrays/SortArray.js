// Generate 10 random 3-digit numbers
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Array of 10 Random 3-digit numbers:", arr);

// Sort the array
arr.sort((a, b) => a - b);

console.log("Sorted Array:", arr);

// Finding the 2nd largest and 2nd smallest
let secondSmallest = arr[1];
let secondLargest = arr[arr.length - 2];

console.log("2nd Smallest:", secondSmallest);
console.log("2nd Largest:", secondLargest);
