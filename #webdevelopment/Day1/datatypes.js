// primitive and non primitive datatypes
// primitive datatypes are :: NNSSBBU that are

//number
let num1 =89;
//Null
let empty = null;
//string
let str = "paras";
//symbol
let sym = Symbol("I am symbol");
//boolean
let rain = true;
let notrain = false;

//bigint
let num2 = BigInt("555");

//undefined
let a = undefined;
let u;

console.log(num1,str,sym,rain,notrain,num2,a,u);
console.log(typeof str);

//non primitive type 

//objects (object name , key and value(or property and value))
const man = {
    "name" : "paras",
    "age" : 21,
    issingle : true

}

console.log(man.name);
console.log(man["age"]);
console.log(man);


