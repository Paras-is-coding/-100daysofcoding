let name = prompt("Enter the name to proceed");

let array = [
    "Initializing Hack program ...",
    "Trying to connect Server 1",
    "Failed ! Wait ...",
    "Trying Server 2 ...",
    "Penetrating to server 2",
    `Searching for ${name} in your friend list`,
    `Username ${name} found`,
    "Phone number & Password found",
    "Connecting to facebook ...",
    "I'd open on mobile device",
    "Connection to device ...",
    `You have now access to ${name}'s device`
    // "Fetching Phone Number and Password",
    // "Phone number : ********** (copy)",
    // "Password : ********** (copy)"
]

let terminal = document.getElementById("terminal");


let sleep = async (seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true);
        },seconds*1000); 
    })
}

let showHack = async (message)=>{
    await sleep(2);
    terminal.innerHTML = terminal.innerHTML + message + "<br>";
}

(async ()=>{
    for(let i=0;i<array.length; i++){
        await showHack(array[i]);
    }
})();


