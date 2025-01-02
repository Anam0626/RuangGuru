function calculatePromise(number1, number2) {
  const result = new Promise((resolve, reject) => {
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    } else {
      if (number1 % 2 === 1) {
        resolve(number1*number2);
      } else {
        if (number2 % 2 === 0) {
          resolve(number1-number2);
        } else {
          resolve(number1+number2);
        }
      }
    }
  })
  return result
}

calculatePromise(0,0)
  .then(function(res){
    console.log(res);
  }) 
  .catch(function(err){
    console.log(err);
  })

module.exports = calculatePromise;
