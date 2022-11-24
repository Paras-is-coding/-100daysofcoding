//basically there are three scopes 
//funciton scope  var , let ,const -> if inside function
//block scope let , const -> if inside block
//and global scope var, let ,const -> if present globally


// now about hoisting
// JS pulls all the declarations at the top of variables and functions
a=10;
b=20;
console.log(b);
console.log(a);
hello();

// let a;//canno't access initialized with let or const
var b;
function hello(){
    console.log("hello")
}




// also no hoisting is applied in function and class expression 

// v();
// o = new w();
// o.fun();


let v = function (){
    console.log("a")
}
let w = class{
    fun(){
        console.log("b");
    }
}


v();
o = new w();
o.fun();