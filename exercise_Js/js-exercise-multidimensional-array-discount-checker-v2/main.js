function discountChecker(costumers, date) {
    let result = [];
    let dateSplit = date.split("-");    
    let day = parseInt(dateSplit[0]);

    costumers.forEach(element => {
        let status = element[1];
        let arrPrice = element[0].split(" ");
        let diskon = arrPrice[1];
        if (status === "member") {
            result.push(element);
        } else if (status === "non-member"){
            if (diskon % 2 === 0 && day % 2 === 0) {
                result.push(element);
            } else if(diskon % 2 !== 0 && day % 2 !== 0){
                result.push(element);
            }
        }
        
    });

    return result
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
