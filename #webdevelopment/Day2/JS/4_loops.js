// for loop 
for(a=0; a<5; a++){
    console.log("for loop is runnning " + a +" times");
}

//for in loop
// used to iterate over key of object
let marks = {
    paras: 77,
    asdk:90,
    dfhkl:89
}
for(let names in marks){
    console.log(names);
}

//for of loop 
// used to iterate over values of a iteratable eg arrays and strings
let myname = "paras chand";
for(let characters of myname){
    console.log(characters);
}

//while loop
let b = 2; 
while(b<7){
    console.log("through while loop "+ (b-1)+" times");
    b++;
}

//do while loop
let name = "paras";

let len = name.length;
let i=0;

do{
    console.log(" "+name[i]);
    i++;
}while(i<len);