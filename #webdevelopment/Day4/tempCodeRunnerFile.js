let options = ["snake","water","gun"];

let choice = prompt("Choose snake or water or gun");
let autoChoice = options[Math.floor(Math.random()*options.length)];

let result = (choice,autoChoice)=>{
    if(choice == snake){
        if(autoChoice == snake){
            alert("Computer choosed snake!")
            return 0;
        }
        else if(autoChoice == water){
            alert("Computer choosed water!")
            return 1;
        }
        else{
            alert("Computer choosed gun!")
            return -1;
        }
    }
    else if (choice == water){
        if(autoChoice == water){
            alert("Computer choosed water!")
            return 0;
        }
        else if(autoChoice == snake){
            alert("Computer choosed snake!")
            return -1;
        }
        else{
            alert("Computer choosed gun!")
            return 1;
        }
    }
    else if (choice == gun){
        if(autoChoice == gun){
            alert("Computer choosed gun!")
            return 0;
        }
        else if(autoChoice == snake){
            alert("Computer choosed snake!")
            return 1;
        }
        else{
            alert("Computer choosed water!")
            return -1;
        }
    }
}


if(result == -1){
    alert("You loose!")
}
else if( result == 1){
    alert("You win");
}
else{
    alert("It's draw!")
}