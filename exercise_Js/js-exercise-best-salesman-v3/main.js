function rekapSalesByName(data, name) {
    data.forEach(element => {
        for (const key in name) {
            if (element.salesName === key) {
                name[key] += element.totalSales;
            }        
        }
    });    
    return name;
}

function salesReport(data, correction) {
    let name = {
        Adi: 0,
        Budi: 0,
        Poltak: 0,
        Sri: 0,
        Udin: 0
    }
    correction.forEach(element => {        
        if (element.type === "tambah") {
            delete element.type;
            data.push(element);
        } else if (element.type === "koreksi"){
            delete element.type;
            let change = data.find((key) => key.salesDate == element.salesDate && key.salesName == element.salesName);
            change.totalSales = element.totalSales;
        }
    });    
    let nameResult = rekapSalesByName(data, name); 
    let monthlySalesResult = 0;
    let totalHighestSales = 0;
    let bestSales;
    
    for (const key in nameResult) {
        monthlySalesResult += nameResult[key];   
        if (nameResult[key] > totalHighestSales) {
            totalHighestSales = nameResult[key];
            bestSales = key;
        }
    }   
    
    let result = {
        monthlySales: monthlySalesResult,
        totalSalesByName: nameResult,
        bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestSales} dengan total penjualan dalam 1 bulan sebesar ${totalHighestSales}`
    }
    return result
}


const data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
];

const correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    },
    {
        type: 'koreksi',
        salesName: 'Udin',
        totalSales: 20,
        salesDate: 2
    }
]

console.log(salesReport(data, correction));


module.exports = {
    salesReport,
}
