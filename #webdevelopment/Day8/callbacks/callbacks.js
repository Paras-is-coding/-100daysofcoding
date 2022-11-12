// a call back function is a function passed into another function
// as an argument, which is then invoked inside the outer function to complete an action

// console.log("Hello")

// function loadScript(src,callback){
//     let script = document.createElement("script");
//     script.src = src;
//     //we are calling callback() function when script is loaded
//     script.onload =()=> callback()
//     document.head.append(script);
// }

// // now calling loadScript function like this

// loadScript("https://google.com",(script)=>{
//     alert("Script loaded");
// })

//handeling errors using callbacks
function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;//script tag ko src ma function bata aako src value
    //we are calling callback() function when script is loaded
    script.onload =()=> callback();

    //we are calling callback function if loading is failed also
    script.onerror = () => callback(new Error("failed of sth"));

    document.head.append(script);
}

// now calling loadScript function like this

loadScript("https://googlee.com",(script)=>{
    if(error){
        console.log("there is error");
    }
    else{
        alert("Script loaded");
    }
})