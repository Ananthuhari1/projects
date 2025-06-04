function countDigits(num) {
  const digitCount = num.toString().length;
  return digitCount;
}
const num = 98765;
console.log("Number of digits:", countDigits(num));