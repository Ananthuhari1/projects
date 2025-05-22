function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) { // Check if it's a letter
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// Example usage
const inputString = "Hello, how are you?";
const result = countVowelsAndConsonants(inputString);
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);
