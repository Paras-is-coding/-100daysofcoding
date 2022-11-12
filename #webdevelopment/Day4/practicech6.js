/* Q1 write a program using prompt function to take input of age as a value from the user and use a text to tell him if he can drive*/

// let age = Number.parseInt(prompt("Enter your age "));

// if(age<18){
//     alert("You are underage to drive!")
// }
// else{
//     alert("You are eligible to drive.")
// }


/*Q2 use confirm to ask the user if he wants to see the prompt again*/
// let again = true;
// while(again)
// {
    
//     let age = Number.parseInt(prompt("Enter your age "));
// if(age<0){
//     console.error("Age can't be negative");
// }
// else if(age<18){
//     alert("You are underage to drive!");

//     again = confirm("Want prompt again?")
// }
// else{
//     alert("You are eligible to drive.");

//     again = confirm("Want prompt again?")
// }
// }


/*in the previous question use console.error to log the error if the age intered is negative (edited above)*/


/*Write a program to change the url to google.com(redicection) if the user enters a number greater than 4 */

// let num = prompt("Enter a number");
// Number.parseInt(num);
// if(num>4){
//     location.href= "https://www.google.com";
// }

/* change the background of the page to yellow, red or any other color based ontuser input through prompt */

let color = prompt("Enter a color")
document.body.style.background = color