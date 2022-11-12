//setTimeout(),clearTimeout and setInterval(),clearInterval() functions

//setTimeout(function,milliseconds,arg1,arg2){}
let count = 0;
let name =()=>{
    count++;
    console.log("hello paras " + greet);
    if(count == 4){
        clearInterval(interval);
    }
}


let greet = "good morning";
let timer = setTimeout(name,2000,greet);
console.log(timer);

// for execution of function continuously after given interval or time

let interval = setInterval(name,4000);


