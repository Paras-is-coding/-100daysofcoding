// write the same program from previous question and use async/awaits syntax

console.log("THis is async file")

let load = async (src) =>{

    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        document.body.appendChild(script);
        script.src = src;
        script.onload = resolve(src);
        script.onerror = reject(error);
    })
    
}


async function a(){
    let promise = await load("sample.js");
    console.log(typeof promise)
    console.log(promise);
    // promise.then((value=>{
    //     console.log(value)
    // },error=>{
    //     console.log(error)
    // }))
}
a();