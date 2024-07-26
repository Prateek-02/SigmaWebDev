class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems,build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}



let prateekObj = new Engineer();

console.log(prateekObj.eat());
console.log(prateekObj.work());    // if child and parent have same method, child's method will be used [Method Overriding];
console.log(prateekObj.sleep());