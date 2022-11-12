
//use logical operator to find if age lies betn 10 and 20
let age = 4;
if(age>= 10 && age<=20){
    console.log("yes");
}
else{
    console.log("no");
}

//demonstrate switch case statement

let a = "a";

switch(a){
    case "a":
        console.log("Its string a")
        break;
    case 50: 
        console.log("Its num 50");
        break;
}

//find if a number is divisible by  2 and 3 or not

let num = 8;
if (num%2 == 0 && num%3==0){
    console.log("Your num is divisible by 2 and 3")
}
else{
    console.log("Your num is not divisible by 2 and 3")
}
//find if a number is either ivisible by  2 or by 3 

let num2 = 8;
if (num2%2 == 0 || num2%3==0){
    console.log("Your num is divisible by 2 or 3")
}
else{
    console.log("Your num is not divisible by 2 or 3")
}

// use if ternary operator

let myage = 14;
let meroage = myage>18? " my age is 18+": "my age is minor";
console.log(meroage);