// 1. create a user class with two properties name and email.It also has a method called viewData() that allows user to view the website data

/*
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
*/


// 2 crate a new class called Admin which inherits from user. Add a new method called editData to Admin that allows it to edit website data.

let DATA = "Secret Information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        DATA = "Secret Information updated";
    }
}

let admin1 = new Admin("admin","admin@college.com");

admin1.editData();
admin1.viewData();
