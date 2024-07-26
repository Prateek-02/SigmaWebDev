class Person{
    constructor(name){
        console.log("Enter Parent Constructor");
        this.species = "homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

}

class Engineer extends Person{
    constructor(name){
        console.log("Enter child constructor");
        super(name);        // to invoke parent class constructor
        console.log("Exit child constructor");
    }

    work(){
        super.eat();
        console.log("solve problems,build something");
    }
}


let enggObj = new Engineer("Prateek");

console.log(enggObj.eat());
console.log(enggObj.work());    // if child and parent have same method, child's method will be used [Method Overriding];
console.log(enggObj.sleep());


console.log(enggObj);

