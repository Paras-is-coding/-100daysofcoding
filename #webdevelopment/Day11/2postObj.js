// to make a POST request, we need to use fetch options 
// method : "POST"
//body : {the request boy}
// JSONPlaceholder is website where you can find syntax and links to api



/* let p = fetch("url",{
    method : "POST",
    headers : {
        "content-Type" : "application/json"
    },
    body : JSON.stringify({
        "name" : "paras",
        "age" : 23
    })
});

p.then(resolve=>{
    return resolve.json();
}).then(value=>{
    console.log(value)
})                                  */



// now lets do samething using async functions

let fetching = async ()=>{
    let p =  await fetch("url",{
        method : "POST",
        headers : {"content-Type" : "application/json"},
        body : {
            "name" : "paras",
            age : 22
        }
    })

    let value = await p.json();
    return value; 
}

let mainfun = async ()=>{
    let value = await fetching();
    console.log(value);
}



//get reaquest using async functions
let mainfunc2 = async ()=>{
    let p2 = await fetch("url");
    let value = await p2.json();
    console.log(value);
}