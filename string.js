function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const myString = "hello";
const reversedString = reverseString(myString);
console.log(reversedString); // Output: olleh