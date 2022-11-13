//q1 load javascript file in a browser using promises.Use .then()
//to display an alert wien the load is complete


let  loadscript = async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        document.body.appendChild(script);
        script.src = src;
        script.onload = resolve("The async file is loaded to the page");
        script.onerror = reject(error);
    })
}

let promise = loadscript("2async.js");

promise.then((value=>{
    console.log(value);//use alert here acc to Q
},error=>{
    console.log(error)
}))

