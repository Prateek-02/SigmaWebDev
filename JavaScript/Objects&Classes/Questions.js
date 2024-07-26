let DATA = "Secret Information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
}


let student1 = new User("Prateek","abc@gmail.com");
let student2 = new User("Anish","xyz@gmail.com");

let teacher1 = new User("Dean","dean@college.com")

console.log(student1);
console.log(student2);
console.log(teacher1);

student1.viewData();
student2.viewData();

teacher1.viewData();