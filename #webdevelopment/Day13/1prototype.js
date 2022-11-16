//java script objects have a special property called prototype
//that is either null  or references anoteher obj

//when we try to read a property from a object and it's missing on 
//the object but present in its prototype JS automatically takes it from
//its prototype

let a = {
    name: "paras",
    age : 22
}

console.log(a.age)

let b = {
    hello: ()=>{
        console.log("hello")
    },

}


b.__proto__ = a;
console.log(b.hello)
console.log(b.name)//b uses property of as we set a as prototype of b
