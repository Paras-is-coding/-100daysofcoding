// so quiz is write the same function of loadScript that we write in callback but this time using promises

// so using callbacks function was like this

// console.log("Here we go");

// let loadScript = (src,callback) =>{
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload =  callback(null,script);

//     script.onerror = callback(new Error("Not loaded"));
    
// };

// loadScript("https://www.google.com", (error,script)=>{
//     if(error){
//         console.error(error);
//     }
//     else{
//         console.log("script loaded successfully, src : " + script.src);
//     }
// });

//__________________
//doing it using promises

let promise = new Promise((resolve,reject)=>{
    let script = document.createElement("script");
    script.src = "https://www.google.com";

    script.onload = resolve(script);
    script.onerror = reject(new Error("Not loaded"));
});

promise.then(function(result){
    console.log("successfully loaded");
},function(error){
    console.error(error);
})