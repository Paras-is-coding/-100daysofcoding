
//q1 try to add number to string
let name = "paras";
let num = 21;
let sum = name + num;
console.log(sum);

//q2 use typeof operator to find type of that
console.log(typeof (name + 21));

//q3 create the const object and try to change its value to number later
const obj = {
    name : "paras",
    age : 21,
    gender: "male",
    single : true
}
console.log(obj);

// obj = 45; || obj = {} || obj = "chand" ->cant do it 


//q4 try to add new key to const obj 
//here's how its done 
obj.character = "good";
obj.girlfriends = null;

console.log(obj);


//q5 create a js dictionary to create word meaning program of 5 words
const dictionary = {
    osculate : "to kiss",
    bureaucracy : "a system of government in which most of the important decisions are taken by state officials rather than by elected representatives.",
    arrogant : "having or revealing an exaggerated sense of one's own importance or abilities.",
    nice : "giving pleasure or satisfaction; pleasant or attractive.",
    help : "make it easier or possible for (someone) to do something by offering ones services or resources."

}
console.log(dictionary.arrogant);


