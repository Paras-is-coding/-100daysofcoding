//try..catch construct may have one or more code clause finally

try{
    a;
}
catch(error){
    // b;
    console.log(error.name);//syntax wrong in catch
    console.log(error.message)
}
finally{
    console.log("THis code gets executed no matter what")
}
// console.log("This is outer code let's see if it won't execute if there is error in catch")


// what if try catch and finally are inside function and it returns
// in try only in this case also finally is executed just before return

let c = () =>{
    try{
        let a = 20;
        return;
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("this is finally")
    }
}
c();

console.log("this is outside")
