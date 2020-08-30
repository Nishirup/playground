const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name = 'Nishita'
data.age = 22

const dataJSON2 = JSON.stringify(data)

fs.writeFileSync('1-json.json',dataJSON2)















/*
const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer) // will give bytes numeric data as output
//console.log(dataBuffer.toString()) // will give the expected output that is json block from 1-json.json file

const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)



/*

//book is an javascript object and it has 2 properties - title and author and we can access them by saying - book.title & book.author
const book = {
	title : 'Ego is the enemy',
	author : 'Ryan Holiday'
}
//bookJSON is a string. it is not an object . so if we try to access bookJSON.title , it will be undefined

//JSON.stringify(object) takes in an object and gives a JSON string back.
//JSON.parse() takes in the JSON string and gives the object back. 

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

/*
console.log(bookJSON)

const bookObj = JSON.parse(bookJSON)
console.log(bookObj)
console.log(bookObj.title)
console.log(bookObj.author)
*/


