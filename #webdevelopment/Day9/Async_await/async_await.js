// so asyns/await are basically keywords they are used to make
//promises chaining more handy instead of making series of .then()
//we put promises in async function that will return promises
// and we can stop the execution of other functions until one is finished

async function paras(){
    
let banglore = new Promise(resolve=>{
    setTimeout(() => {
        resolve("20 deg")
    }, 2000);
})
let mnr = new Promise(resolve=>{
    setTimeout(() => {
        resolve("15 deg")
    }, 5000);
})

let b = await banglore;
let m = await mnr;
return([b,m])
}

let a = paras();
console.log(a)
a.then(value=>{
    console.log(value)
})