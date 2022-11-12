//note that if we use callback functions for multiple callbacks the code becomes unreadable but samethig we can do using promises chaining and code well readable form

// here is example of promises chaining

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("done certain job");
        resolve("first promised task completed");
    },2000)
})

promise.then(value=>{
    console.log(value);
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("second job being done in 2 seconds");
            resolve("second job done");
        },2000)
    })
}).then(value=>{
    console.log(value)
})

promise.catch(error=>{
    console.log(error);
})