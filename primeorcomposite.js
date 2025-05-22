function primeorcomposite(n) {
    

if (n <= 1) {
    return "Neither prime nor composite";
  }
 else if (n === 2) {
    return "Prime";
  }
 else  if(n % 2 === 0) {
    return "Composite";
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return "Composite";
    }
  
  return "Prime";
}

console.log(isPrime ? `${n} is a prime number.` : `${n} is  a composite number.`);
}