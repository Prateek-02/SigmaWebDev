// singleton(Object.create)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Prateek",
    "full name" : "Prateek Raj",
    [mySym] : "mykey1",
    age : 20,
    location : "Giridih",
    email : "prateek@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Prateek@chatgpt.com";  // it will update the email of the user
// Object.freeze(JsUser)     // it will freeze all the values of the object if we want to change any value after freezing it will not be updated

JsUser.email = "Prateek@chatgptmicrosoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());