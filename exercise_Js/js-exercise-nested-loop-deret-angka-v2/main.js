function deretanAngkaHinggaN(n) {
    let deret = "";
    if (n<=1) {
        return "Incorrect param";
    } else {
        for(let i=n; i>0; i--){
            for (let j = i-1; j > 0 ; j--) {
                deret += j
            }
        }
        return deret;
    }
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
