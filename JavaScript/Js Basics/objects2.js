// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "Sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Prateek",
            lastname:"Raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2,obj4);   // concatenate the objects
console.log(obj3);

const users = [
    {
        id:1,
        email:"P@gmail.com"
    },
    {
        id:1,
        email:"P@gmail.com"
    },
    {
        id:1,
        email:"P@gmail.com"
    }
]
    

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));    // return the keys of tinderUser object
console.log(Object.values(tinderUser));  // return the values of tinderUser object
console.log(Object.entries(tinderUser));  // return the key value pairs in separate array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // check property is available or not
console.log(tinderUser.hasOwnProperty('isLogged'));
