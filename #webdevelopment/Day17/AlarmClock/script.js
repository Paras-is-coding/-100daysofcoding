let set = document.getElementById("set");
let clear = document.getElementById("clear");

let s = new Audio("sound1.wav");

function playpause(timeout){
    
    if(timeout == -1){
        s.pause();
    }
    else{
        setTimeout(() => {
            s.play();     
    }, timeout*1000);
    }
}


set.addEventListener("click",()=>{
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    playpause(hours.value*60*60 + minutes.value*60 + seconds.value);
    hours.value = '';
    minutes.value = '';
    seconds.value = '';    
    
})

clear.addEventListener("click",()=>{
    playpause(-1);
})