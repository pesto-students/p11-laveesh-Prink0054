// Function that returns a closure
function counter() {
    let count = 0; // Variable within the closure

    // Inner function (closure) that increments count and returns its value
    function increment() {
        count++;
        return count;
    }

    return increment; // Return the closure
}

// Create two instances of the counter function
const firstCounter = counter();
const secondCounter = counter();

// Array to store the returned values from firstCounter
const firstValues = [];

// Call firstCounter five times and store the returned values in the firstValues array
for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
}

// Array to store the returned values from secondCounter
const secondValues = [];

// Call secondCounter three times and store the returned values in the secondValues array
for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
}

// Print the arrays
console.log("firstValues array:", firstValues);
console.log("secondValues array:", secondValues);
