function trasureHunter(dailyLog) {
  let i = 0;
  let hartaKarun = 0;
  while (i < dailyLog.length) {
    if (dailyLog[i] === "$") {
      hartaKarun += 100;
    } else if (dailyLog[i] === "x") {
      if (hartaKarun < 10) {
        hartaKarun = 0;
      } else {
        hartaKarun -= 10;
      }
    } else if (dailyLog[i] === "#") {
      if (hartaKarun === 0) {
        hartaKarun = 0;
      } else {
        hartaKarun -= hartaKarun * (50/100);
      }
    }
    i++;
  }
  return hartaKarun;
}

console.log(trasureHunter("$x#")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
