let minMax = function (str){
    let splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        for (let j = 0; j < splitStr.length-i-1; j++) {
            if(splitStr[j] > splitStr[j+1]){
                let temp = splitStr[j];
                splitStr[j] = splitStr[j+1];
                splitStr[j+1] = temp;
            }
        }
    }
    
    if(splitStr[0] === splitStr[splitStr.length-1]){
        return `Nilai terkecil dan terbesar adalah ${splitStr[0]}`;
    } else {
        return `Nilai terkecil adalah ${splitStr[0]}, dan terbesar adalah ${splitStr[splitStr.length-1]}`;
    }
    // let split = str.split('').map(Number);
    // let min = Math.min(...split);
    // let max = Math.max(...split);
    // if (min === max) {
    //     return `Nilai terkecil dan terbesar adalah ${min}`;
    // } else {
    //     return `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
    // }
    
}


module.exports = minMax;