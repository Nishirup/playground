//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (num1,num2,callback) => {
	setTimeout(() => {
		sum = num1+num2
		callback(sum)
	},2000)
}




add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

















/*
setTimeout(() => {
	console.log('Two seconds are up')//this is a callback function here
},2000)  	

// A call back function is a function we provide as an argument to another function with the intention of having it called later on. Its not necessary that every time we call a callback funstion..it is always asynchronous..it can be synchronous as well.
// example of asynchronous callback functions - setTimeout()
// example of synchronous call back functions - filter,forEach method of array
const names = ['Nishita','Shaan','Anku','Jen']
const shortNames = names.filter((name) => name.length < 6)
shortNames.forEach((shortname) => {
//	console.log(shortname)
})

//callback implementation ----
const geocode = (address,callback) => {
	setTimeout(() =>{
        const data = {
                latitude:0,
                longitude:0
        }
        callback(data)  
},2000)
}

geocode('Kolkata',(data) => {
console.log(data)
})
//If our function is completely synchronous like geo code was below - we are able to use retun to get a value out of the function and back to the part of the code that called that function.. when our function starts to do something asynchronous,instead of returning a value..we take a callback in as argument and we call the callback with the value we want to send back when we have it.this accomplishes the same goal as the return statement does.












/*
//synchronous---
const geocode = (address,callback) => {
	const data = {
		latitude:0,
		longitude:0
	}
	return data  //the return pattern is no longer going to work for us when we start to do asynchronous things inside of our functions and thats where the callback pattern is going to come into play.
}

const data = geocode('Kolkata')
console.log(data)*/
