//we use http module for standard requests and we use https if we are making a request to a secure server

const http = require('http') //we dont need to install it as it is a core module - we can use it directly

const url = 'http://api.weatherstack.com/current?access_key=a286ee6768afcac9f6b211d5eb60147a&query=45,-75&units=f'

//our core modules typically operate at a lower level and npm modules like 'request' abstract away alot of that complexity . Since we are using the core node module here - we will have to setup things that u might not think should be necessary.For example, in this call back we dont have access to the complete response body.Instead we can go ahead and grab the individual chunks that come through because HTTP data could be streamed in multiple parts.It means we have to listen for these individual chunks to come in and we also have to listen for when all chunks have arrived and the request is done.
//response.on() is a function and it allows us to register a handler.
//There are a few different events we can register callback functions for - one of them is data and we provide the event name as the 1st arg represented as a string.After that  ,we can also provide the callback and thats going to fire when new data comes in and we get access to that data via the 1st and only arg called 'chunck' .So this is a chunk of the response - it might be the entire thing or it might not depending on exactly how the server has been set up.
//the other thing is to figure out when we are done and we can do that using another call to response.on('end',() => {}).We are waiting here for the 'end' event when things are over,this callback function is going to run and it doesn't get any arguments,instead by running - we just know we are done.


const request = http.request( url , (response) => {

	let data = ''
//this will run multiple times for all chunks
	response.on('data' , (chunk) => {
		
		data = data + chunk.toString()
})
//this will run only a single time once things are done
	response.on('end' , () => {

		const body = JSON.parse(data)
		console.log(body)
})

	response.on('error' , (error) => {

	console.log(error)
})

})

request.end()


//DISADVANTAGE - here we have a very basic http request with the core node module.this does provide u everything u need but at a much lower level than u probably expected. thats why in the real world people are not making requests with those core modules instead they are using libraries like 'request' to make the request process much easier.In forecast.js - the callback gets fired a single time when things are ready - we either have the error or we have the response and the body is already there. we dont have to do anything with it like concatenating together the individual chunks to get everything we need.
//The core node modules are supposed to provide those low level implementations and node comes bundled with npm coz u are supposed to be using npm modules when u are building out your applications.
