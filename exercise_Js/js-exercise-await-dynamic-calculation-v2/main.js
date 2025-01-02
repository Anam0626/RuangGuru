async function calculate(number1, number2) {
  if (number1 === 0 && number2 === 0) {
    throw 'number1 and number2 cannot be 0';
  } else {
    if (number1 % 2 === 1) {
      return number1 * number2;
    } else {
      if (number2 % 2 === 0) {
        return number1 - number2;
      } else {
        return number1 + number2;
      }
    }
  }
}

module.exports = calculate;
