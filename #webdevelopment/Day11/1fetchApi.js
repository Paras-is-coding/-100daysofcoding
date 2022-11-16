
//fetch("url",{options})   without options a get request is sent

let p = fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

//getting a response in two stages

//firstly the response is class containing status and ok
p.then(response=>{
    console.log(response.status)
    console.log(response.ok)
    
    // then we need to another method to access body in different  format
    return response.json();
    //return response.text()  response.formData()  etc
}).then(value=>{
    console.log(value);
})


