// arrays are special variable that can hold multiple values

// declared as 
let array1 = ["paras",21,"male"];

//or
let array2 = new Array();
array2 = ["ram",22, "male"]

console.log(array1,array2)

//array methods
console.log(array1.length)
console.log(array2.sort())
console.log(array2.push("he's a god"))
console.log(array2)

//accessing elements of array 
for(let a=0; a<array2.length; a++){
    console.log(array2[a]);
}
//using for of loop to access values
for(let b of array2){
    console.log(b);
}

//using for in loop to access index
for(let c in array2){
    console.log(c);
}

// using forEach function to run function for each element in arrray
array2.forEach((element)=>{
    console.log(element)
})


// using methods in arrays

let data = ["paras", 21, "haldukhal", 500];

//toString 
let str = array1.toString();
console.log(str);
console.log(array1);

//join
console.log(data.join("-"));

//push and pop
console.log(data.pop());
console.log(data.push(800));//returns new length

//shift and unshift//does samething as push pop but in the beggining
console.log(data.shift());
console.log(data.unshift("paras"));

// delete 
// delete element but leaves hole there
delete array1[2]
console.log(array1)

//splice and slice
//splice is used to add iteams to the array
data.splice(2,0,"I added this line")
console.log(data)

//slice gives the new sliced array 
console.log(data.slice(2))
