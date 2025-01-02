function countAndSum(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if(i < 3){
      sum += (i+1);
    } else {
      number -= i;
      i = 0;
      sum += (i+1);
    }
  }
  return sum;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
