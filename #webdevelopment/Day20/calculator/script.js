        let screen = document.getElementsByClassName("screen")[0];
        let current = document.getElementById("current");
        let previous = document.getElementById("previous");

        let numbers = [0,1,2,3,4,5,6,7,8,9];
        let operators = ["%","+","*","-","/"];


        let buttons = document.getElementsByClassName("buttons");
        Array.from(buttons).forEach(element => {
            element.addEventListener("click", ()=>{                
                if(previous.innerHTML === "" && current.innerHTML === ""){
                    for(value of operators){
                        if(element.innerHTML === value){
                        }
                    }
                    for(value of numbers){
                        if(parseInt(element.innerHTML) == value){
                            current.innerHTML += element.innerHTML;
                        }
                    }
                }
                else if(previous.innerHTML === "" && current.innerHTML !== ""){
                    for(value of numbers){
                        if(parseInt(element.innerHTML) == value){
                            current.innerHTML += element.innerHTML;
                        }
                    }
                    for(value of operators){
                        if(element.innerHTML === value){
                            previous.innerHTML = current.innerHTML + element.innerHTML;
                            current.innerHTML = "";
                        }
                    }
                }
                else if(previous.innerHTML !== "" && current.innerHTML === ""){
                    for(value of numbers){
                        if(parseInt(element.innerHTML) == value){
                            current.innerHTML += element.innerHTML;
                        }
                    }
                }
                else if(previous.innerHTML !== "" && current.innerHTML !== ""){
                    for(value of numbers){
                        if(parseInt(element.innerHTML) == value){
                            current.innerHTML += element.innerHTML;
                        }
                    }
                    for(value of operators){
                        if(element.innerHTML === value ){
                            let operator = previous.innerHTML.charAt(previous.innerHTML.length-1);
                            let prevop = parseInt(previous.innerHTML.slice(0,previous.innerHTML.length -1));
                            let curop = parseInt(current.innerHTML);
                            let ans = null;
                            if(operator === "+"){ans = prevop + curop;}
                            if(operator === "-"){ans = prevop - curop;}
                            if(operator === "%"){ans = prevop % curop;}
                            if(operator === "/"){ans = prevop / curop;}
                            if(operator === "*"){ans = prevop * curop;}
                            previous.innerHTML = ans + value;
                            current.innerHTML = "";
                        }
                    }
                    if(element.innerHTML === "="){
                        let operator = previous.innerHTML.charAt(previous.innerHTML.length - 1);
                            let prevop = parseInt(previous.innerHTML.slice(0,previous.innerHTML.length -1));
                            let curop = parseInt(current.innerHTML);
                            let ans = 0;
                            if(operator === "+"){ans = prevop + curop;}
                            else if(operator === "-"){ans = prevop - curop;}
                            else if(operator === "%"){ans = prevop % curop;}
                            else if(operator === "/"){ans = prevop / curop;}
                            else if(operator === "*"){ans = prevop * curop;}
                            previous.innerHTML = "";
                            current.innerHTML = ans;

                    }
                }
                }
            )
        });

        let allclear = document.getElementById("allclear");
        allclear.addEventListener("click",()=>{
            previous.innerHTML = "";
            current.innerHTML = "";
        })
        let clearentry = document.getElementById("clearentry");
        clearentry.addEventListener("click",()=>{
            if(current.innerHTML !== ""){
                current.innerHTML = current.innerHTML.slice(0,current.innerHTML.length -1)
            }
        })

        Array.from(buttons).forEach(ele=>{
            ele.addEventListener("mouseover",()=>{
                ele.classList.add("light");
            })
            ele.addEventListener("mouseout",()=>{
                ele.classList.remove("light");
            })
        })
        
    