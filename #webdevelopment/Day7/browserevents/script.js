let fb = document.getElementById("fb");

fb.addEventListener("click", function(){
    window.open("https://www.facebook.com")
})

//keep fetching contents of a website in every 5 seconds using js
// setInterval(function(){
//     let url = "https://jsomplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))

// },3000)

//await not working will see it later
let bulb = document.getElementById("bulb");

setInterval(() => {
    bulb.classList.toggle("glow");    
},1000);