// array methods to loop through it
let array = [4,6,8,1,9,0,3];

//forEach()
array.forEach((value,index,array)=>{
    console.log(value+index);
})
//in forEach you can separate function also like:
let display =(value,index,array)=>{
    console.log(value+index);
}
array.forEach((display));

//map() -> returns array after some modification on elements
let duplicate = array.map((value,index,array)=>{
    return value*2;
})
console.log(array);
console.log(duplicate);

//filter()-> returns array after filtering its elements
let filtered = array.filter((value)=>{
    return value<3;
})
console.log(filtered);


//reduce() -> used to reduce array into single value 
// suppose we want find sum of all elements
let sum = array.reduce((a,b)=>{
    return a+b;
})
console.log(sum)
