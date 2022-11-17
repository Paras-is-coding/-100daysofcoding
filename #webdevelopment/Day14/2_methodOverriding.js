// if child class have function with same name as of base class
//child class method will run with child object

class Employee{
    login(){
        console.log("Employee logged in successfully");
    }
    busy(){
        console.log("Employee is busy right now")
    }
    logout(){
        console.log("Employee logged out successfully")
    }
}



class Programmer extends Employee{
    getCoffee(){
        console.log("Hey Programmer, You got a cup of coffee")
    }
    busy(){
        // super.busy()//we can execute busy() of parent using super keyword
        console.log("Programmer is busy right now")
    }
}

let p = new Programmer();
p.login()
p.getCoffee()
p.busy()//this will invoke the child class method busy()
p.logout()


