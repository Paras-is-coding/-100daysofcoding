console.log(console);

let a = {
    name:"paras",
    age : 21
}
console.table(a)
console.assert(80<9)
console.warn("THis is a warning")
console.error("This is an error")
console.info("THis is some important info")
console.clear()

//you acan calculate time in which this for loop runs using time and timeEnd
console.time("here")
for(let i=0; i<5000;i++){
    let something = 0;
}
console.timeEnd("here");
