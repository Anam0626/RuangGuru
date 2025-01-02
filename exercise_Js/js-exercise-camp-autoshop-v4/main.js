function convertItems(items) {
    let result = [];
    items.forEach(element => {
        result.push(element.split("|"));
    });
    return result; // TODO: replace this
}

function filterItems(items) {
    let result = [];
    items.forEach(element => {
        let num = Number.parseInt(element[1]);
        if (element[1] !== undefined) {
            element[1] = num;
            result.push(element);
        } 
    });
    return result;
}

function generateSpareParts(items) {
    // items.forEach(element => {
    //     result.push({
    //         name: element[0],
    //         price: element[1],
    //         category: element[2]
    //     })        
    // });
    // return result
    let result = items.map((item) => {
        let obj = {};
        obj.name = item[0];
        obj.price = item[1];
        obj.category = item[2];

        return obj;
    })
    return result
}

function itemsStatistics(items) {
    let result = {}
    items.forEach(element => {        
        if (result[element[2]] === undefined) {
            result[element[2]] = 1
        } else {
            result[element[2]] ++
        }
    });   
    return result
}

function generateItemsData(items) {
    let spareParts = generateSpareParts(filterItems(convertItems(items)));
    let statistics = itemsStatistics(filterItems(convertItems(items)));
    let result = {
        spare_parts: [],
        statistics
    };
    
    spareParts.forEach(element => {
        result.spare_parts.push(element);
    });
        
    return result
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

// console.log(generateItemsData(items));
// convertItems(items);
// filterItems(convertItems(items));
console.log(generateSpareParts(filterItems(convertItems(items))));
// console.log(itemsStatistics(filterItems(convertItems(items))));


module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}