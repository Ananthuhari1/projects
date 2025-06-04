function isPangram(sentence) {

  const lower = sentence.toLowerCase();

  const letters = new Set();

  for (let char of lower) 

    if (char >= 'a' && char <= 'z') {
      letters.add(char);
    }
  }

  return letters.size === 26;
}

const input = "The quick brown fox jumps over the lazy dog";

if (isPangram(input)) {
  console.log("It is a pangram");
} else {
  console.log("It is NOT a pangram");
}