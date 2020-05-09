//ARROW FUNCTION 4
const event = {
      name:'Birthday party',
      guestList:['Nishita','Shaan'],
      printGuestList() {
              console.log('Guest list for',this.name)
	      this.guestList.forEach((guest) => {
		console.log(guest + ' is attending ' +this.name)
              })
              }
}
event.printGuestList()


//Arrow functions dont bind their own 'this' value. they access the 'this' value in the context in which they are created which in this case is right inside of printGuestList()
//
//code  same as above - the only change is - 
//printGuestList() { 
//	console.log('guest list for',this .name)
//	this.guestList.forEach(function (guest) {
//	this would fail because there is no name inside the scope of this forEach function..to overcome this we use arrow function as in ARROW FUNCTION 4
//	console.log(guest+ 'is attending'+this.name)
//})
//}



/*
//Now we can use one more short hand syntax..like there is no rule to stick to the same syntax as in ARROW FUNCTION 2.There is ES6 method shorthand that allows us to use a shorter more concise syntax while still having access to standard function features like 'this' binding . 
//It is not an arrow function.its just using an alternative syntax available to us when we are setting methods on objects.
const event = {
      name:'Birthday party',
//BELOW IS THE EXAMPLE OF ES6 METHOD DEFINATION SYNTAX
      printGuestList() {
              console.log('Guest list for',this.name)
              }
              }
event.printGuestList()


/*
//Arrow functions as properties on an object
//event is an object with two properties - name and printGuestList
//With our methods -with our functions as object properties we can access to the original object via the 'this' binding . So 'this' is a reference to our object 'event' which means we can access properies on this like this - 'this.name'
//If we use arrow function here - like this - 
//const event = {
//	name:'Birthday party',
//	printGuestList: () => {
//		console.log('Guest list for',this.name)
//		}
//		}
//Here,above, the output will be 'Guest list for undefined'
//it cannot find the name property and assign birthday party to it..this is because arrow functions dont bind their own 'this' value..which means we do not have access to 'this' as a reference to the event object because of the fact we are using an arrow function. 
//So arrow functions aren't well suited for methods properties that are functions..when we want to access 'this'
//So in this case it would be best to use a standard function.
//ARROW FUNCTION 2
const event = {
	name:'Birthday party',
	printGuestList: function() {
		console.log('Guest list for ',this.name)
}
}
event.printGuestList()



//If an arrow function is straightaway returning a simple,then it can use short hand syntax like below but if we have complex logic like if else in our function then that would be used within the curly braces as shown in ARROW FUNCTION 1
const square = (x) => x*x
console.log(square(2)) 


//Arrow function 1- no function keyword given - only argument list is given
const square = (x) => {
	return x*x
}
console.log(square(4))


//Regular function
const square = function (x) {
	return x*x
}

console.log(square(4))
*/
