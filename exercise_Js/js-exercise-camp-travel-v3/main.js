function travelDiscount(id, amount) {   
    let status, price; 
    if (id.includes("STD")) {
        status = "STUDENT"; 
    } else if (id.includes("CORP")) {
        status = "CORPORATE";
    } else {
        return "Maaf, voucher yang anda miliki tidak valid!";
    }

    if(status === "STUDENT"){
        price = 20000 * amount;
        if (amount > 20) {
            price -= (price * 20/100);
        } 
    } else if (status === "CORPORATE"){
        price = 50000 * amount;
        if(amount > 30){
            price -= (price * 25/100);
        }
    }

    return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${price}.`;
}

// console.log(travelDiscount("STD9845-8461-121", 11));
// console.log(travelDiscount("CORP8135-4612-912", 30));
// console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP3888-0-197621", 60));
// console.log(travelDiscount("8347-7-9124365", 99));
// console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
