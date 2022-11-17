//Static methods are used to implement functions that belong to
//class as a whole and not to any particular object

class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    run(){
        console.log(`${this.name} is running`)
    }
    //Animal class ko static function object le access garna mildaina
    //but Animal.capitalize() garera jun thau bata ni milxa
    static capitalize(word){
        this.word = word;
        return word.charAt(0).toUpperCase() + word.substr(1,word.length);
        
    }
}

console.log(Animal.capitalize("paras"));

let a = new Animal(Animal.capitalize("elephant"));
a.run();

let b = new Animal("bear");
b.run();
// b.capitalize("hello"); -->this dosen't work