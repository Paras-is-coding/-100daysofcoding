
let s = document.querySelector('[data-seconds-needle]');
let m = document.querySelector('[data-minutes-needle]');
let h = document.querySelector('[data-hours-needle]');

let sendDegrees = (element,ratio)=>{
    element.style.setProperty('--rotation',ratio * 360);
}

let runClock =()=>{
    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentDate.getHours()) /12 ;
    console.log
    sendDegrees(s,secondsRatio);
    sendDegrees(m,minutesRatio);
    sendDegrees(h,hoursRatio);
}



setInterval(runClock,1000);
document.onload = runClock();




