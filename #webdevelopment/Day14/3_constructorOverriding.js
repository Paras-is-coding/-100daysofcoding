// constructor overriding is a bit trickey

// if you have no constructor in child automatically perent will be invoked
// if you have child constructor
//1_ you have to call parent constructor using super() first
//2_and you have to do it before using this in child constructor


class Employee{
    constructor(name){
        this.name = name
    }
    login(){
        console.log(`Employee ${this.name} logged in successfully`);
    }
    logout(){
        console.log(`Employee ${this.name} logged out successfully`)
    }
}



class Programmer extends Employee{
    getCoffee(){
        console.log(`${this.name} You got a cup of coffee`)
    }
}

let p = new Programmer("Paras");
//I don't have constructor in child but parent is automatically called
p.login()
p.getCoffee()
p.logout()


// Intern is child of Programmer and Programmer of Employee
// Intern class obj can also use Employee methods Isn't that great
class Intern extends Programmer{
constructor(n){
    super(n);
    //I have to call super class constructor if i've my own constructor also
    console.log("Hello I'm new Intern")
}
}

let i = new Intern("puntu")
i.login()