const fs = require('fs')
const dataBuffer = fs.readFileSync('Breakdown_1.4.json')
//console.log(dataBuffer)
const dataJSON = dataBuffer.toString()
//console.log(dataJSON)
const data = JSON.parse(dataJSON)
//console.log(data.properties.BreakdownRecords.items.properties)

let arrValues = Object.values(data.properties.BreakdownRecords.items);
console.log(arrValues)
for(let i of arrValues){
    console.log("key is: ",Object.keys(i));
}




//Reference - 
/*
 let result=[{"key1":"value1","key2":"value2"}]
for(let i of result){
    console.log("i is: ",i)
    console.log("key is: ",Object.keys(i));
    console.log("value is: ",Object.keys(i).map(key => i[key])) // Object.values can be used as well in newer versions.
}*/
