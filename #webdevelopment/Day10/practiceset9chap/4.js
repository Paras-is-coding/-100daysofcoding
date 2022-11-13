//write a program using Promise.all() inside an async/await to await
//3promises. Compare its results with the case where we await these
//ptomises one by one

let p1 = async ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
                resolve(20)
    },2000);
    })
    }
let p2 = async ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
                resolve(10)
    },1000);
    })
    }
let p3 = async ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
                resolve(30)
    },3000);
    })
    }



let f = async()=>{
    console.time("timer")
    // let a = await p1();
    // let b = await p2();
    // let c = await p3();
    // console.log(a,b,c);

    let a = p1();
    let b = p2();
    let c = p3();
    let abc = await Promise.all([a,b,c]);
    console.log(abc);
    console.timeEnd("timer")

}
f();