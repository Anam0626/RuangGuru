let addNumber = function(numStr, options) {
    let result = "";
    if (options === "left") {
        for (let i = 0; i < numStr.length-1; i++) {
            result += String(Number(numStr[i]) + Number(numStr[i+1]))           
        }
    } else if(options === "right"){
        for (let i = numStr.length-1; i > 0; i--) {
            result += String(Number(numStr[i]) + Number(numStr[i-1]));        
        }
    }
    return result
}

module.exports = addNumber;
