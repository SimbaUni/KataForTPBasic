// Arrays for the formulary which only stores names and the stockList which stores name, strength, pack size and total packs
const formulary = []
const stockList = []

// Function to check if the medications name is already in the array, if it is not then it is added.
function addMedication(medication) {
    medication.forEach(name => {
        if(formulary.includes(name)){
            console.log(name + ' is already in the formulary');
        } else {
            formulary.push(name);
            console.log(name + ' has been added to the formulary');
        }
    })
    console.log(formulary)
}

// Function to check if the medications name is already in the array, if it is then the array is updated with name, strength, packSize and totalPacks.
function updateStock(stock) {
   
    if(!formulary.includes(stock.name)){
        console.log(stock.name + ' is not currently in the formulary so cannot be updated, please add the medication to the formulary')
    } else {
        stockList.push(stock)
        console.log(stock.name + ' has been updated');
    }
    console.table(stockList)
}

// The hard coding for each Scenario 

addMedication(["Paracetamol", "Ibuprofen"])
addMedication(["Amoxicillin"])
addMedication(["Codeine", "Diclofenac", "Simvastatin", "Tramadol"])

updateStock({name: "Paracetamol", strength: "500mg", packSize: 50, totalPacks: 100 })
updateStock({name: "Ibuprofen", strength: "500mg", packSize: 50, totalPacks: 100 })
updateStock({name: "Amoxicillin", strength: "250mg", packSize: 20, totalPacks: 20 })
updateStock({name: "Tramadol", strength: "50mg", packSize: 100, totalPacks: 5 })
updateStock({name: "Codeine", strength: "30mg", packSize: 10, totalPacks: 20 })
updateStock({name: "Simvastatin", strength: "10mg", packSize: 10, totalPacks: 10 })
updateStock({name: "Warfarin", strength: "3mg", packSize: 50, totalPacks: 5 })
