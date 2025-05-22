function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add the last digit
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}

const number = 738;
console.log(`Sum of digits of ${number}:`, sumOfDigits(number));
