let shortName = function(name, options){
    let nameSplit = name.split(" ");    
    
    if (nameSplit.length === 1) {
        return `Invalid Name`;
    } else if(options === "first"){
        return `${nameSplit[0][0]}. ${nameSplit[1]}`;
    } else if (options === "last") {
        return `${nameSplit[0]} ${nameSplit[1][0]}.`;
    } else if (options === "full"){
        return `${nameSplit[0]} ${nameSplit[1]}`
    }
    
}

console.log(shortName("Kirana Larasati", "last"))
module.exports = shortName