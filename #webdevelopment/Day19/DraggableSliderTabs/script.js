//  @import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Kanit:wght@400;500&family=Pacifico&family=Rubik&family=Rubik+Distressed&family=Uchen&display=swap');



// font-family: 'DynaPuff', cursive;
// font-family: 'Kanit', sans-serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Rubik', sans-serif;
// font-family: 'Rubik Distressed', cursive;
// font-family: 'Uchen', serif;

let topics = document.querySelector("#topics");
let icons = document.getElementsByTagName("i");
let t =Array.from( document.getElementsByTagName("li"));
console.log(t)


let isDragging = false;

const dragging = (e)=>{
    if(!isDragging) return;
    topics.classList.add("dragging");
    topics.scrollLeft -= e.movementX;
}

topics.addEventListener("mousedown",()=>{isDragging = true});

let body= document.getElementsByTagName("body")[0];
body.addEventListener("mouseup",()=>{
    isDragging = false;
    topics.classList.remove("dragging");
});
topics.addEventListener("mouseup",()=>{
    isDragging = false;
    topics.classList.remove("dragging");
});
topics.addEventListener("mousemove",dragging);




// event listoner  to i on click

for(let icon of icons){
    icon.addEventListener("click",()=>{
        //if cliked icon is left, redue 350 from topics scrollLeft else add
        if(icon.id === "left"){
            topics.scrollLeft -= 200;
        }
        else{
            topics.scrollLeft += 200;
        }
    })
}

t[4].classList.add("active");

t.forEach(element => {
    element.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
    })
});