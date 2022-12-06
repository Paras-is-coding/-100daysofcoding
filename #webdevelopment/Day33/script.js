let keys = Array.from(document.getElementsByClassName("keys"));

let WHITE_KEYS = ['z','x','c','v','b','n','m'];
let BLACK_KEYS = ['s','d','g','h','j'];

let whiteKeys = document.getElementsByClassName("white");
let blackKeys = document.getElementsByClassName("black");

document.addEventListener("keydown" , e=>{
    if(e.repeat){return;}
    let key = e.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(key);
    let blackKeyIndex = BLACK_KEYS.indexOf(key);
    if(whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex]);
    }
    if(blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex]);
    }
})

keys.forEach(key =>{
    key.addEventListener("click",()=>{
        playNote(key);
    })
})

function playNote(key){
    key.classList.add("active");
    let noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    noteSound.addEventListener("ended",()=>{
        key.classList.remove("active");
    })
}
