// the solution of callback hell is promises
//callback hell(paramid of doom) is something that happen when there are many 
//callbacks inside callbacks it gets difficult to manage

//a promise is promise of code execution the code either executes 
//orfails in both cases the subscriber will be notified

//syntax of promise is like this
let promise  = new Promise(function(resolve,reject){

});

//resolve and reject are two callbacks provided by js itself. They are called like this ::    resolve(value)   reject(error)


// the promise object returned by neew promise object has these values
//state: initially pending then changes to either "fulfilled" when resolve is called or "rejected" when reject is called
//result: Initially undefined  , then changes to value if resolved resolve(value) or error when rejected reject(error)

//consumers : then and catch
//-> the consuming code can receive the final result of a promise through then and catch

// the most fundmental one is then promise

promise.then(function(result){
    // handle
}
,function(error){
    //handle error
});

//if we are interested only in successful completions, we can provide only one function argument to then()

let p = new Promise(resolve=>{
    setTimeout(() => {
        resolve("done");
    },1000);
})
p.then(alert);

// if we are only interested in errors , we can use null as the first argument : then(null,f) or we can use catch;

promise.catch(alert);

// promise.finally(()=>{}) is used to perform general clesnups


