//unary operators has single operand
//binary operatos has two operands
/*types of operators are arithmetic(+, -, *, /, %),exponent **
, inc++ and dec--, assignment comparision, and logical */

//arithmetic operators
let num = 5;
let num2 = 4;

console.log(num++);//print then inc
console.log(num);
console.log(--num);//dec then print
console.log(num**num2);//power


//asignment operators

num2 += 2;
if(num2!=4){
    console.log("num two is not 4 here.")
}

//comparision operators
let a = 2;
let b = 2;
let c = "2";
if(a==b){
    console.log("a == equals b");
}
if(a===b){
    console.log("a === equals b");
}
if(a==c){
    console.log("a == equals c");
}
if(a===c){
    console.log("a === equals c");
}


//logical
let paras = true;
let chand = true;
if(paras == true && chand == true){
    console.log("everything is true")
}
else{
    console.log("everything is not true")
}
if(paras ==true || chand == true ){
    console.log("something is true")
}
else{
    console.log("nothing is true")
}


paras = false;
if(paras == true && chand == true){
    console.log("everything is true")
}
else{
    console.log("everything is not true")
}
if(paras ==true || chand == true ){
    console.log("something is true")
}
else{
    console.log("nothing is true")
}


chand = false;
if(paras == true && chand == true){
    console.log("everything is true")
}
else{
    console.log("everything is not true")
}
if(paras ==true || chand == true ){
    console.log("something is true")
}
else{
    console.log("nothing is true")
}

