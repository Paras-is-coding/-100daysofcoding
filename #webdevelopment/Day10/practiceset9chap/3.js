//create a promise which rejects after 3 seconds use an async/await
//to get its value. Use a try catch to handle its error

async function f(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error("this is error"))
        },3000);
    })
}


let fun = async ()=>{

    try{
        let a = await f();
        console.log(a);
    }
    catch(error){
        console.log(error.name)
        console.log("the error is handeled")
    }
}

fun();