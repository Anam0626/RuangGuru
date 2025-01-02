function printNumber(totalNumber) {
    let output = "";
    for (let i = 0; i < totalNumber ; i++) {
        if (i<3) {
            output += i+1; 
            console.log(totalNumber, i)
        } else {
            totalNumber -= i;
            i = 0;
            output += i+1
            console.log(totalNumber, i)
        }   
    }
    return output;
}
// 4, 7, 10
// console.log(printNumber(4));
// console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
// console.log(printNumber(30));

module.exports = printNumber
