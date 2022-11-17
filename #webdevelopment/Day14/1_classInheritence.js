//class inheritence is the way by which one class extends to another
//in JS it is done by using extends keyword

class Employee{
    login(){
        console.log("Employee logged in successfully");
    }
    logout(){
        console.log("Employee logged out successfully")
    }
}



class Programmer extends Employee{
    getCoffee(){
        console.log("You got a cup of coffee")
    }
}

let p = new Programmer();
p.login()
p.getCoffee()
p.logout()
