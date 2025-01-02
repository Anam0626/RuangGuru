function checkDatatype(i) {
    if (i === null) {
        return "null";
    } else if (Array.isArray(i)){
        return "array";
    } else {
        return `${typeof(i)}`;
    }
}

checkDatatype("stirng")

module.exports = {checkDatatype};