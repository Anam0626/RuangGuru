function vocalCounter(array) {
    let vocal = "aiueo";
    let totalvocal = "";
    array.forEach(element => {
        for (let i = 0; i < vocal.length; i++) {
            if(element === vocal[i] || element === vocal[i].toUpperCase()){
                totalvocal += element;
            }          
        }
    });
    if (totalvocal === "") {
        return "Tidak ada huruf vokal yang ditemukan"
    } else {
        return `Jumlah vokal yang ditemukan sebanyak ${totalvocal.length} berupa ${totalvocal}`;
    }
}

// console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
// console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
