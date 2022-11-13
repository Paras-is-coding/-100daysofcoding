// for all the build in errors , the error object has two main properties

try{
    // a;//variable is not defined
    let a;
}
catch(error){
    
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}


// throwing custom error

try{
    let age = 200;
    if(age>150){
        throw new Error("The age is probably incorrect")
    }
}
catch(error){
    console.log(error)

    console.log(error.name)
    console.log(error.message)

}

//throwing different types of error
try{
    let b;
    throw new SyntaxError("The syntax is wrong")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
}