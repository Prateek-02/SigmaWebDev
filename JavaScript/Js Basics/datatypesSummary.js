// Primitive datatypes
// 7 types:- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2)

const bigNumber = 12345678900987n


// Refernce types(Non Primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman","ironman","spiderman"];
let myObj = {
    name: "Prateek",
    age: 20,
    city: "Giridih"
}

const myfunc = function(){
    console.log("Namaste Duniya")
}

console.log(typeof(bigNumber))
console.log(typeof(myfunc))
console.log(typeof(id))
console.log(typeof(heros))
console.log(heros)
console.log(myObj)