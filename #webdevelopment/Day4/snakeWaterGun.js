let options = ["snake","water","gun"];

let choice = prompt("Choose snake or water or gun");
console.log(choice)
let autoChoice = options[Math.floor(Math.random()*options.length)];
console.log(autoChoice)

let result = (i,c)=>{
    if(i == "snake"){
        if(c == "snake"){
            alert("Computer choosed snake!")
            return 0;
        }
        else if(c == "water"){
            alert("Computer choosed water!")
            return 1;
        }
        else{
            alert("Computer choosed gun!")
            return -1;
        }
    }
    else if (i == "water"){
        if(c == "water"){
            alert("Computer choosed water!")
            return 0;
        }
        else if(c == "snake"){
            alert("Computer choosed snake!")
            return -1;
        }
        else{
            alert("Computer choosed gun!")
            return 1;
        }
    }
    else if (i == "gun"){
        if(c == "gun"){
            alert("Computer choosed gun!")
            return 0;
        }
        else if(c == "snake"){
            alert("Computer choosed snake!")
            return 1;
        }
        else{
            alert("Computer choosed water!")
            return -1;
        }
    }
}

let output = result(choice,autoChoice)

console.log(output)
if(output == -1){
    alert("You loose!")
}
else if( output == 1){
    alert("You win");
}
else{
    alert("It's draw!")
}