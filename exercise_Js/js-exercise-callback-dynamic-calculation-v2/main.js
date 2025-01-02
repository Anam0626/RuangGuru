function calculate(number1, number2, callback) {
  let result;
  
  if (number1 % 2 === 1) {
    result = number1 * number2;
  } else {
    if (number1 % 2 === 0 && number2 % 2 === 0) {
      result = number1 - number2;
    } else if(number1 % 2 === 0 && number2 %2 === 1){
      result = number1 + number2;
    }
  }
  setTimeout(() => {
    callback(result);
  }, 2000);
}

function showResult(result){
  console.log(result);
}

calculate(6,1,showResult)

  
  module.exports = calculate;
  