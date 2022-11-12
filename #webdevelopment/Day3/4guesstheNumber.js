/*Write a javascript program to generate a random number and store
it in a variable. The program then takes an input from the user to
tell them whether the guess was correct , greater or lesser than 
the original number. 
100-(no of guesses) is score of the user,
The program is expected to terminate once the number is gussed. Number should be betwen 1-100*/

//Math.random generates random number between 0 upto 1
//Math.floor is used to just take whole number floor value
let num = (Math.floor(Math.random()*100))+1;
let guesses = 0;

do{
    var i = Number.parseInt(prompt("Guess the number!"))
        guesses++;
    if(i == num){
        alert(`${i} is the correct guess`);
        alert(`Your score is ${100-guesses}`);
    }
    else if(num > i){
        alert(`The number is greater than ${i}`);
        
    }
    else{
        alert(`The number is lesser than ${i}`);
        
    }

}while(i!=num);

