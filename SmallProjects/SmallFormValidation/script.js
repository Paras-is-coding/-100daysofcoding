let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

function displayError(id,message){
    let place = document.getElementById(id);
    place.style.display = "inline";
    place.innerHTML = message;
}

form.addEventListener("submit",(e)=>{

    let name = document.getElementById("name");
    if(name.value.length<3){
        displayError("ename","*Name can't be shorter than 3 characters!");
        e.preventDefault();
    } 
    
    let password = document.getElementById("password");
    if(password.value.length <=6){
        displayError("epassword","*At least 7 characters in Password!");
        e.preventDefault();
    }

    let number = document.getElementById("number");
    if(number.value.length<10 || number.value.length > 10){
        displayError("enumber","*Phone number should be exactly 10 digits long!");
        e.preventDefault();
    }

    let dob = document.getElementById("dob");
    if(dob.value > 00/00/2004){
        displayError("edob","*You are under 18 Nibba/Nibbi!");
        e.preventDefault();
    }
    if(password.value.length >20){
        displayError("epassword","*At most 20 characters in Password!");
        e.preventDefault();

    }

})