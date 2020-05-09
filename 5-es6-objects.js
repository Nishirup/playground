//Object property shorthand - this allows us to add values onto an object with a shorthand syntax under certain conditions.
//this shorthand syntax can be used when defining an object-when we are setting up a property whose value comes from a variable of the same name
//for using shorthand syntax - the variable names need to match up exactly

const name = 'Nishita'
const userAge = 21

const user = {
	name, //->after using shorthand syntax - it creates a name property on user object whose value comes from the variable (name) with the same name
	//name:name, ->before using shorthand syntax
	age:userAge,
	location:'Kolkata'
}
console.log(user)


//Object destructuring - it is useful when you have an object and you are trying to access properties from it. The whole goal of destructuring is to extract object properties and their values into individual variables - this is really useful when you are working with complex objects that have a lot of properties you are constantly referencing. 

const product = {
	label:'Red book',
	price:3,
	stock:201,
	salePrice:undefined
}
/*one way is this -  but here we need to write many such lines to access those values
const label = product.label
const price = product.price*/

//destructure syntax
//const {label,stock} = product //inside {},we will have the properties we want to access and on rhs - we will have the object which we want to destructure
//const {label,stock,rating} = product//the value of rating will be undefined because we dont have such property in that object product but as it creates a new variable called rating - so its value will be undefined
//console.log(label)
//console.log(stock)

//advantages of destructuring --
//1) we can rename the variable we end up creating
//const {label:productLabel,stock} = product -> we renamed label to productLabel - it means we are creating a variable called productLabel whose value comes from label property of product object.
//2)ability to set up a default value for the variable should the object not have that property--this default will only be used if there is no property matching on product object.if there is,the default wont be used
/*
const {label:productLabel,stock,rating = 5} = product
console.log(productLabel)
console.log(rating)
*/
//We can also use destructuring when we are working with function arguments
const transaction = (type,{ label,stock = 0} = {} ) => {
	console.log(type)
	console.log(label,stock)
}
transaction('order',product)
transaction('order')
