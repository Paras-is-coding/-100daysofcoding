class collageForm{
    //this is how you make constructor and it's same as c++ constructor
    constructor(name,department,regno){
        this.name = name;
        this.department = department;
        this.registrationno = regno;
    }
    preview(){
        console.log(`Data in this form are : Name: ${this.name} Department: ${this.department} Registration Number:  ${this.registrationno}`)
    }
    fill(){
        console.log(`${this.name} you successfully filled the form`)
    }
    submit(){
        console.log(`Form successfully submitted by ${this.name}`)
    }
}

let parasForm = new collageForm("Paras Chand","CSIT","40224568")
parasForm.preview()
parasForm.fill()
parasForm.submit()
