let array = [
    "Initializing Hack program ...",
    "Phone number : 980088899",
    "Hacking Manish's username ...",
    "Username found manish Bhatta",
    "Connecting to facebook ..."
]
let a =async (value)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            
        },2000);
        resolve(value);
    })
}

let hacker = async ()=>{
    for(value of array){
        await display(value);
    }
}
