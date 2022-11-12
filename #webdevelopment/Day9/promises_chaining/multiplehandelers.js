// we can add multiple handelers to a promise they run independently
//not like promise chaining which waits to run one promise 

// here is ths example

let promise = new Promise((resolve,reject)=>{
    console.log("i'm incomplete")
    setTimeout(() => {
        console.log("now i'm complete")
        resolve(1)
    }, 2000);
})



//demo in both then to promise i've set 1 sec timer to see of they 
//run in parallel or after completion of one
promise.then(()=>{
    setTimeout(() => {
        console.log("hurrey");

    }, 1000);
})

promise.then((value)=>{
    setTimeout(() => {
        console.log("value");

    }, 1000);
})

// and you'll see both of em completed at same time