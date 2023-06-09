function calcWordFrequencies() {
    var input = prompt("Enter a list of words (separated by spaces):");
    var words = input.split(" ");
    var frequencies = new Map();

    // Count the frequency of each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (frequencies.has(word)) {
            frequencies.set(word, frequencies.get(word) + 1);
        } else {
            frequencies.set(word, 1);
        }
    }

    // Output the words and their frequencies
    frequencies.forEach(function (value, key) {
        console.log(key + " " + value);
    });
}

calcWordFrequencies()
