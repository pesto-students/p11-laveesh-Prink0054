
var numbers = [4, 2, 9, 1, 8];
divideArray(numbers);

function divideArray(numbers) {
    var evenNums = [];
    var oddNums = [];

    // Iterate over the numbers array and divide them into evenNums and oddNums
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNums.push(numbers[i]);
        }
        else if (numbers[i] % 2 !== 0) {

            oddNums.push(numbers[i]);
        }
        else {
            console.log("No Record")
        }
    }

    // Sort the arrays in ascending order
    evenNums.sort(function (a, b) {
        return a - b;
    });

    oddNums.sort(function (a, b) {
        return a - b;
    });

    // Output the sorted arrays to the console
    if (evenNums.length === 0) {
        console.log("Even Numbers:");
        console.log("None");

    } else {
        console.log("Even Numbers:");
        evenNums.forEach(element => {
            console.log(element)
        });
    }

    if (oddNums.length === 0) {
        console.log("Odd Numbers:");
        console.log("None");

    } else {
        console.log("Odd Numbers:");
        oddNums.forEach(element => {
            console.log(element)
        });
    }


}
