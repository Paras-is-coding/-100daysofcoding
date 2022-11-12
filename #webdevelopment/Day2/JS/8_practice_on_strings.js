// what will this print console.log("har\"".length)
console.log("har\"".length);


//explore the includes, startwith and endwith string function

let line = "My name is paras and i'm a good boy hehe you know!";
console.log(line.includes("paras"));
console.log(line.startsWith("My"));
console.log(line.startsWith("name"));
console.log(line.endsWith("name"));
console.log(line.endsWith("!"));

//convert given string into lowercase
console.log(line.toLowerCase());

//extract the amount out of this string"I do have RS 2000"
let newline = "I do have RS 2000";
console.log(parseInt(newline.slice(13)))

//change the fourth character of the given string
let string = "bingo";
string[3]="o";
string[4]="d";
console.log(string);
//note nothing changed and also no error is thrown 
// note that string charactres cannot be changed as stringis immutable

