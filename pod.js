function productOfDigits(num) {

  const digits = num.toString().split('');

  let product = 1;

  for (let digit of digits) {

    if (!isNaN(digit)) {
      product *= parseInt(digit);
    }
  }

  return product;
}

const num = 234;
console.log("Product of digits:", productOfDigits(num));