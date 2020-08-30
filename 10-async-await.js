//async-await is a set of tools that makes it easy to work with promises.await is only used with async functions.
//we will use the same promise methods like before - the only change will be how we manage our code when we have a lot of asynchronous things going on.
//when we dont return anything explicitly from the function - undefined is implicitly returned

// const doWork = () => {

// }

// console.log(doWork())//printing the return type of doWork()
const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a<0 || b<0)
            {
                return reject('Numbers must be non-negative')
            }
            resolve(a+b)
        },2000)
    })
}
//declaring the function as async - async functions always return a promise - that promise is fulfilled with the value the developer chhose to return from the function.
const doWork = async () => {
    // throw new Error('something went wrong')
    // return 'Nishita'
    //here we will call add() a couple of times using await.Using async-await,we are gonna remove the need for all of those callback functions.We get access to await operator in async function.the await operator gets used with a promise.we can get a promise because add returns a promise.
    //with async-await - it looks as if add() is one synchronous function.we can create a variable to get access to the value that the promise is fulfilled with.here, we still have to wait for those 2 secs - the advantage here is syntactical.
    const sum = await add(1,-2)
    const sum2 = await add (sum,100)
    const sum3 = await add(sum2, -1)
    return sum3
}

// console.log(doWork())
//result is the value which is returned by doWork()
//catch() will work when promise is rejected - so that can be done if we throw error from our async function - thats going to be the same as rejecting the promise that comes back from the async function
doWork().then((result) => {
    console.log('result' ,result)
}).catch((e) => {
    console.log('e',e)
})

//above using async-await , we have used a code which looks synchronous but to perform asynchronous tasks.
//another problem with promise chaining is it is difficult to have all of the values in the same scope.with async-await, we have the access to all the individual results in the same scope allowing for a lot of flexibility.
