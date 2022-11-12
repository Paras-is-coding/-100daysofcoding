//in this topic promiseAPI we will just learn about 6 methods of 
// promise class

// firstly let's make some promises
let p1 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("one done")
    }, 1000);
})
let p2 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("two done")
    }, 2000);
})
let p3 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("three done")
    }, 3000);
})

//Promise.all(promises) returns array of values passed by resolve 
//if all the promises passed to function are resolved
let promise_all = Promise.all([p1,p2,p3]);
promise_all.then(value=>{
    console.log(value);
})

//if we know some of promises may not get resolved promise.all will throw error
//so we use promise.allSettled
// it will return values if resolved or error value if theres error
let p4 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("four done")
    }, 1000);
})
let p5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("p5 rejected")
    }, 2000);
})
let p6 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("six done")
    }, 3000);
})

let all_settled = Promise.allSettled([p4,p5,p6]);
all_settled.then(value=>{
    console.log(value);
})

//waits for first one to complete its error/result willbe outcome
let race = Promise.race([p4,p6]);
race.then(value=>{
    console.log(value);
})
race.catch(value=>{
    console.log(value)
})

//waits for any one to complete(resolve) first until last 
let any = Promise.any([p5,p6])
any.then(value=>{
    console.log(value);
})

//promise.resolve(value)  makes the resoved promise with given value
//promise.reject(value)  makes rejected promise with given value

console.log(Promise.resolve(4));
// console.log(Promise.reject("rejected"));