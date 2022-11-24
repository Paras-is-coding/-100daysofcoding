setInterval(() => {
    fetch("https://catfact.ninja/fact").then(response=>{
    if(response.ok){
        console.log("success")
    }
    else{
        console.log("failed")
    }
    return response.json()
}).then(value=>{
    document.getElementsByClassName("catsfact")[0].innerHTML= value.fact;

})

},5000);


// let p = fetch("https://api.publicapis.org/entries");
// p.then(response=>{
//     return response.json()
// }).then(value=>{
//     // console.log(value);
//     console.log(value.entries[0].API )
//     console.log(value.entries[0].Description )
//     console.log(value.entries[0].Auth )
//     console.log(value.entries[0].HTTPS )
//     console.log(value.entries[0].Cors )
//     console.log(value.entries[0].Link )
//     console.log(value.entries[0].Category )
// })


