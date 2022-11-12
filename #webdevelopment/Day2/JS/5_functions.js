// functions are part of code having specific task 
// they are used to reduce repition of code and clean code

// old way of writing function
function displayName(name){
    console.log("The name is " + name);
}

displayName("paras");


function average(a, b){
    console.log("The average is " + (a+b)/2);
}

average(3,5);


//function returning value
function greatest(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let g = greatest(40,44);
console.log("The largest num is " + g);


// mordern way of writing functions
//arrow functions

const sum = (a,b) =>{
    return (a+b);
}

console.log(sum(2,10));