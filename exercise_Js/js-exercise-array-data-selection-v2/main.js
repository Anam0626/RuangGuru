function dataSelection(data, amount, start) {
    let result = [];
    if (data.length === 0) {
        return "Data not found";
    } else if(typeof(amount) === "string" || typeof(start) === "string"){
        return "Invalid command";
    } else if(amount <= 0){
        return "Minimum amount is 1";
    } else if(start < 0){
        return "Starting number cannot be below 0";
    } else {
        for (let i = start-1; i < data.length; i++) {
            if (result.length < amount) {
                result.push(data[i]);
            }
        }
    }
    return result
}

// console.log(dataSelection(["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3));
// console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
// console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
// console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
// console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
// console.log(dataSelection([], 1, 3));
console.log(dataSelection(["Dimitri", "Alvin", "Arrizal", "Indra"], 0, 2));
console.log(dataSelection(["Andrean", "Patra", "Ardi", "Rudy"], -1, 1));

module.exports = dataSelection
