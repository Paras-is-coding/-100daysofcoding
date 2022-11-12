//practice questions on loops and functions 

//question no 1
//write a for loop to display marks of all students in a marks object

let marks = {
    paras: 98,
    subam: 67,
    jagriti: 96,
    billie:98,
    ayush: 02
}

//Object.keya(marks) gives an array of keys in marks object
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are "+marks[Object.keys(marks)[i]]);
}

//question no 2
//do the same thing using for in loop
// so this can be done pretty easily using for in loop
for(let key in marks){
    console.log(key);
    console.log("The marks of " + key+ " are " + marks[key]);
}

//write a program to ask user to enter a number until user guess the correct number

// let number = 5;
// let i;
// while(i != number){
//     i = prompt("Enter a number : ");
// }


// write a function to find mean of 5 numbers

let mean = (a,b,c,d,e) =>{
    return(a+b+c+d+e)/5;
}
console.log("The mean is " +mean(2,3,4,5,6))