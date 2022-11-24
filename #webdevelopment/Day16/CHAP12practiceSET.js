//Q1 Write a JS program to print the following after 2 seconds delay
//hello world

let p = async (s)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            console.log(s);
            resolve(1);
        },2000);
    })
}


(async function(){
    let a  = await p("hello");
    let b = await p("world");
})()



//Q2 Write a JS program to find average of numbers in an array using spread syntax

let arr = [2,4,5,5,6,7];

((a,b,c,d,e,f)=>{
console.log((a+b+c+d+e+f)/6)
})(...arr);

//Q3 Wrie a JF function which resolves a promise after n seconds.The function takes n as the parameter.Use an IIFE to esecute

(async ()=>{
    let np = (n)=>{
        return new Promise(resolve=>{
            setTimeout(() => {
                console.log("The promise is resolved in " + n+ " seconds." )
                resolve(1);
            },n*1000);
        })
    }
    for(value of  arr){
        let done = await np(value);
    }
})();


//Q4 Write a simple interest calculator using JS

let price = 10,rate=20,interest =20;

let si = (p,t,r)=> p*t*r/100;

console.log("The simple interest is " + si(price,rate,interest));