let bulbs = document.getElementsByClassName("bulbs");



for(let index=0; index<bulbs.length; index++){
    if(index%2 ==0){
        setInterval(() => {
            bulbs[index].classList.toggle("blue");    
        },3000);
        setInterval(() => {
            bulbs[index].classList.toggle("blue");    
        },2000);
        setInterval(() => {
            bulbs[index].classList.toggle("green");    
        },1000);
        
    }
    else{
        setInterval(() => {
            bulbs[index].classList.toggle("green");    
        },3000);
        setInterval(() => {
            bulbs[index].classList.toggle("red");    
        },1000);
        setInterval(() => {
            bulbs[index].classList.toggle("blue");    
        },1000);
    }
}

// setInterval(() => {
//     bulb.classList.toggle("glow");    
// },1000);

