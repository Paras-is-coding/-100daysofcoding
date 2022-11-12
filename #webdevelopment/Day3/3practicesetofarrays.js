// some questions practiced on arrays

//Q1 create an array of numbers and take input from user to enter 
// numbers to this array
let numbers = [3,5,6,2,6];
// let num = prompt("Enter a number ");
// num = Number.parseInt(num);
// numbers.push(num);

//Q2 keep adding numbers to the array until 0 is added


// while(num != 0){
// num = prompt("Enter a number ");
// num = Number.parseInt(num);
// numbers.push(num);
// }


//filter for the numbers divisible by 2 from the array

let n = numbers.filter((value)=>{
    return (value%2==0);
})
console.log(n)

// create an array of square of given numbers
let sq = numbers.map((val)=>{
    return val*2;
})
console.log(sq)

//use reduce to calculate factorial of a given number from an array
//of first n natural numbers(n being the number whose factorial
//is to be calculated)

let natural = [1,2,3,4,5,6,7,8]
let fact = natural.reduce((a,b)=>{
    return a*b;
})
console.log(fact)