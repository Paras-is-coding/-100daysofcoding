// Create a Javascript class to create a complex number. Create a constructor to set the real and the complex part

class ComplexNumber{
    constructor(a,b){
        this._real = a;
        this.complex = b;
    }
    get(){
        return this._real +  " + " + this.complex +"i" 
    }
//Q2 add a method to add two complex numbers in the above class
    addTwoComplexNumbers(second){
        return ((this._real+second.real) + " + " + (this.complex + second.complex) + "i");
    }

    //Q5 use getters and setters to set and get the real and imaginary perts of the complex number
    set real(real){
        this._real = real;
    }
    set imaginary(complex){
        this.complex = complex;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this.imaginary;
    }

    
}
let c = new ComplexNumber(4,5);
console.log(c.get());

let a = new ComplexNumber(2,4);
console.log(a.addTwoComplexNumbers(c));


a.real = 8;
a.imaginary =10;
console.log(`${a._real} + ${a.complex}i`)


//Q3 create a class student from a class human override a method and see changes

class human{
    constructor(name){
        this.name = name
    }
    display(){
        console.log(`${this.name} is a human`)
    }
}
class student extends human{
    display(){
        super.display()
        console.log(`${this.name} is a student`)
    }
}

let s1 = new student("paras")
s1.display();

//Q4 see if student is instanceof human 
//it's false because instanceof see if and object belongs to class or its parent class or not
console.log(student instanceof human)



