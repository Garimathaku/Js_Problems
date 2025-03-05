// Generate 10 random 3-digit numbers
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Array of 10 Random 3-digit numbers:", arr);

// Finding the 2nd largest and 2nd smallest without sorting the array
let smallest = Infinity, secondSmallest = Infinity;
let largest = -Infinity, secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("2nd Smallest:", secondSmallest);
console.log("2nd Largest:", secondLargest);
