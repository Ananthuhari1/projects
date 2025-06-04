function reverseWords(sentence) {

  const words = sentence.trim().split(/\s+/);

  const reversed = words.reverse();

  return reversed.join(' ');
}

const input = "JavaScript is fun";
console.log("Reversed sentence:", reverseWords(input));