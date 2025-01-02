function travelSeat(passengers, seatColumn) {
    if (seatColumn <= 0) {
        return "Invalid number";
    } else if(passengers.length === 0){
        return "Oops! tickets not sold!"
    } 
    let result = [];
    let seat = [];
    passengers.sort();
    passengers.forEach(orang => {
        seat.push(orang);
        if(seat.length === seatColumn){
            result.push(seat);
            seat = []
        }
    }); 
    let seatAvailable = (seatColumn - seat.length);
    
    if (seat.length > 0 && seat.length < seatColumn) {
        for (let i = 0; i < seatAvailable; i++) {
            seat.push("Seat available");
        }
        result.push(seat);
        seat = [];
    }

    return result
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));
console.log(travelSeat(["Ayah", "Ibu", "Kakak", "Adik"], 3));

module.exports = travelSeat