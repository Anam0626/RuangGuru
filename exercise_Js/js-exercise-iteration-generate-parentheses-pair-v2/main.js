function generateParenthesesPair(numberOfPairs) {
  let start = "";
  let end = "";
  for(i = 0; i < numberOfPairs; i++){
    start += "(";
    end += ")";
  }
  start + end;
  return start + end;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
