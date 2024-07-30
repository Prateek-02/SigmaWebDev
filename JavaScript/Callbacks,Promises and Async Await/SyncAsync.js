// Asynchronus Programming:- Due to synchronous programming, sometimes imp. instructions get blocked due to some previous instructions, 
// causes a delay in the UI. Asynchronous code execution allows to excute next instructions immediately
// and does not block the flow


console.log("one");
console.log("two");

setTimeout( () => {
    console.log("Hello");
},2000);   // timeout

console.log("three");
console.log("four");