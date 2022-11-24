//IIFE stands for immediately Invoked function expression
//JS facilitates us to invoke a function at it's definition
//  (  fun(){}  )() like this 
// TO avoid polluting global namespace ,execute an async/await,etc



//lets make a function that returns a new promise and call it 

let p = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(50);
        }, 2000);
    })
}


// let f = async () => {
// let a = await p()
// console.log(a)
// let b = await p()
// console.log(b)
// let c = await p()
// console.log(c)
// }

// f();


// this is IIFE -> Immediately Invoked Function Expression
(
    async () => {
        let a = await p()
        console.log(a)
        let b = await p()
        console.log(b)
        let c = await p()
        console.log(c)
        }
)()


