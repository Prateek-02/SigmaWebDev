// Stack (Primitive) -> copy of the memory
// Heap(Non-Primitive) -> Reference of the memory

let name1 = "Prateek"

let anotherName = name1;
anotherName = "Anish";

console.log(name1);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
