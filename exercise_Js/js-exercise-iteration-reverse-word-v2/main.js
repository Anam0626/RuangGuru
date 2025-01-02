function reverseUnique(word) {
  let reverse = "";
  let i = word.length;
  while (i>0) {
    if(word[i-1] === word[i]){
      reverse += word[i-2];
      i--;
    } else {
      reverse += word[i-1];
    }
    i--;
  }
  return reverse;
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
