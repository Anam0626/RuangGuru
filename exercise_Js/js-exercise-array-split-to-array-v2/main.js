function splitToArr(str) {
  let name = "";
  let result = [];
  if (str === undefined) {
    return `Invalid input`;
  } else if (str === "") {
    return `Data not available`;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ";" && str[i] !== "-") {
        if(name.length === 0){
          name += str[i].toUpperCase();
        } else {
          name += str[i];
        }
      } else {
        result.push(name);
        name = "";
      }
    }
    result.push(name);
  }
  return result;
}

console.log(
  splitToArr("dito.bagus-aditira.jamhuri;afista.pratama-eddy.permana")
);
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
