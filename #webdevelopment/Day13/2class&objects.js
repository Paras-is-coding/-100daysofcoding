class collageForm{
    fill(name){
        this.name = name;
        console.log(`${name} you successfully filled the form`)
    }
    submit(){
        console.log(`Form is submitted by ${this.name}`)
    }
}//this is how we create class

let parasForm = new collageForm();//this is how we create object


//and this is how you  call methods of class for a object
parasForm.fill("Paras Chand");
parasForm.submit();



//and obiously we can create multiple objecta of a class
// a class is basically template
let binodForm = new collageForm();
let q = new collageForm();

binodForm.fill("binod");
q.fill("samir")

binodForm.submit()
q.submit()
