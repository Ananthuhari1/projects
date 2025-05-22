// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Example usage:
const celsius = 25;
const fahrenheit = 77;

console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is equal to ${fahrenheitToCelsius(fahrenheit)}°C`);
