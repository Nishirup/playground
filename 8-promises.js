//promises are the enhancements of callbacks - which helps us to maintain asynchronous code in an easier way than callbacks.(Compare 9-callback-example.js with this file)
//Advantages of promises - 
//1)clear semantics - resolve is called when there is success and reject is called when there is an error.In case of callbacks , we had to figure out by looking at the arguments as we have only 1 function there
//2)with promises - we can handle both error and success conditions easily using then() and catch().We provide 2 separate functions making it easier for us to manage our asynchronous tasks but in callbacks we need to write the conditional logic for it.
//3)we can either have a resolve or reject at one time.both can't be there.I mean if we put both reject and resolve functions in the setTimeout() below - it wont crash the program - but once reject(the first function - reject or response) is called - the promise stops looking for new calls to resolve or reject.Similarly,we can't call reject() again with a new error string.So,it helps to not mess up things.
// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1,2,3])
//         reject('Things went wrong!')
//         reject('error!')
//     }, 2000)
// })



//doWorkPromise is an object on which we can access different functions - here we will be using then() - it allows us to register a function to run when things go well
//this below function will only work if things go well
//catch() works when things go wrong or we have error
//then() works when things go well and we have value coming from resolve() function
// doWorkPromise.then((result) => {
//     console.log('Success!!' , result)
// }).catch((error)=> {
//     console.log('Error!!',error)
    
// })


//
//
//                                    fulfilled      
//                                  /
//Promise            ---pending --> 
//                                  \            
//                                     rejected
//
//So when we first create the promise,the promise is called as pending.So,our promise is pending for 2 sec before resolve or reject is called.A promise is pending until resolve or reject is executed.
//Now if resolve is called your promise is considered as fulfilled.If reject is called your promise is considered as rejected.


const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        },2000)
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)
//     //calling 2 promises - one promise inside another - this may get complex with time when code increases and thats not ideal.We can avoid this by using "promise chaining"
//     add(sum,5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })


//PROMISE CHAINING-here the 1st then() executes when add(1,3) promise is fulfilled.the 2nd then()executes when add(sum,6) promise is fulfilled.
add(1,3).then((sum)=> {
    console.log(sum)
    return add(sum,6) //returns a promise
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
