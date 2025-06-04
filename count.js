function countWords(sentence) {

  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const input = "Hello world, how are you?";
console.log("Number of words:", countWords(input)); 