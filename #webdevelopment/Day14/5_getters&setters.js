// get and set are used to make getter and setter of a property
//Getters and setters allow you to define Object Accessors (Computed Properties).
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes

class person{
    constructor(name,address,age){
        this.name = name;
        this.address = address;
        this.age =  age;
    }
    get NAME(){
        return this.name.toUpperCase();
    }    
    set NAME(newname){
        this.name = newname.toUpperCase();
    }
}

let o = new person("paras","haldukhal",21);
o.name = "suraj"
console.log(o.name)

//what if we want to get name value in upper case and also set it in uppercase
console.log(o.NAME);
o.NAME = "sunil";
console.log(o.name);



// now lets see instanceof operator 
// it basically tells if an object belongs to class (or it's parent class)
//or not

console.log(o instanceof person)

