function calcAge (age, params){
    let result;
    if(age < 1){
        return "Age cannot be under 1 year";
    } else {
        if (params === "months") {
            result = age * 12;
        } else if (params === 'days'){
            result = age * 365;
        }
    }
    return result;
}
console.log(calcAge(-1, "days"))

module.exports = calcAge;