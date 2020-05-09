const greeter = (name = 'user') => {
	console.log('Hello '+name)
}

greeter('Nishita')

greeter() //output will be undefined
