// way of writing strings
let name1 = 'paras';
let name2 = "somiya";

let line = `${name1} really don't know who ${name2} is!`
let gap = "          Hey     ";

console.log(line);


//string functions
//note that use of string functions dosen't change string indeed it returns a new string 
//some common string functions are
console.log(name1.length)//it's a property 
console.log(name2.slice(2,6))
console.log(line.replace("paras" ,"I"))
console.log(gap)
console.log(gap.trim());
console.log(line.toLowerCase())
console.log(line.toUpperCase())

console.log(gap.trim().concat(" ",line))



//printing the string using for loop
let verse = "Darling! Darling! I don't have a problem"

let sentence="";
for(let i=0; i<verse.length; i++){
    sentence +=verse[i];
}
console.log(sentence);