// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//The spread(...) syntax allows an iterable, such as an array or string,to be expanded in places where zero or morearguments (for fumction calls )or elements(for array literals) are expected.

//Spread syntax looks exactly like rest syntax.In a way, spread syntax is the opposite of rest syntax.Spread syntax "expands and array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

//Here is an example


// 1 expanded in places where zero or morearguments (for fumction calls ) are expected
function sum(x,y,z){
    return x+y+z;
}

const numbers = [3,4,5,6];//last one is ignored

console.log(...numbers);
console.log(sum(...numbers));



//elements(for array literals) are expected
const object = {...numbers};
console.log(object);


// const obj = { key1: 'value1' };
// const array = [...obj]; // TypeError: obj is not iterable

//making object from a string using spread syntax
let myname = "paras";
let myobject ={...myname}
console.log(myobject)


//Quizz
//Output of the following?
const a="the",b="no";

const c= {a,b};
console.log(c);
//ans: so output is c is displayed as object
