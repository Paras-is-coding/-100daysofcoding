// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


//Here we'll learn what is array and object destructing

// Dfn: Destructing assignment is used to unpack values from an array, or propertie from object, into distinct variables

//Array destructing
let a,b,c,p,r;

let arr = [1,3,4];

[a,b,c] = arr;
console.log(a,b,c);
//a , b and c variables are now assigned values 1, 3 and 5

[p,...rest] = arr;
console.log(p,rest);

let arr2 = [2,3,4,5,6];
[,r,...rest] = arr2;
console.log(r,rest);



// similarly destructing object


let marks = {
    maths : 20,
    science : 40,
    health : 67,
    biology : 100
};

let {m,s,h,bio} = marks;

console.log(m,s,h,b);

