function kelvinToCelsius(kelvin) { 
  return parseFloat((kelvin - 273.15).toFixed(2)); // TODO: replace this
}

function kelvinToFahrenheit(kelvin) {
  return parseFloat(((((kelvin - 273.15) * 9)/5) + 32).toFixed(2)); // TODO: replace this
}

function celsiusToFahrenheit(celsius) {
  return parseFloat(((celsius * 9/5) + 32).toFixed(2)); // TODO: replace this
}

function celsiusToKelvin(celsius) {
  return parseFloat((celsius + 273.15).toFixed(2)); // TODO: replace this
}

function fahrenheitToKelvin(fahrenheit) {
  return parseFloat(((((fahrenheit - 32) * 5)/9) + 273.15).toFixed(2)); // TODO: replace this
}

function fahrenheitToCelsius(fahrenheit) {
  return parseFloat((((fahrenheit - 32) * 5)/9).toFixed(2)); // TODO: replace this
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  let result = 0;
  if (initialUnit === 'K' && finalUnit === 'C') {
    result = kelvinToCelsius(temperature);
  } else if (initialUnit === 'K' && finalUnit === 'F'){
    result = kelvinToFahrenheit(temperature);
  } else if (initialUnit === 'C' && finalUnit === 'F'){
    result = celsiusToFahrenheit(temperature);
  } else if (initialUnit === 'C' && finalUnit === 'K'){
    result = celsiusToKelvin(temperature);
  } else if (initialUnit === 'F' && finalUnit === 'K'){
    result = fahrenheitToKelvin(temperature);
  } else if (initialUnit === 'F' && finalUnit === 'C'){
    result = fahrenheitToCelsius(temperature);
  }
  return result;
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(typeof(convertTemperature(0, 'C', 'F'))); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
