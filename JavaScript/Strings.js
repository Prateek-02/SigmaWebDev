//Strings are immutable

console.log("This is Strings tutorial")

let a = "Prateek";
console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log("Length of the string is: " +a.length)

let name = "Prateek";
let friend  = "Rohit";
console.log("His name is "+ name + " and his friend's name is "+friend);
// OR
console.log(`His name is ${name} and his friend's name is ${friend}`);

let b = "shivam";
console.log(b.toUpperCase());
console.log(b.slice(0,5));
console.log(b.slice(1))
console.log(b.replace("sh","77"));

console.log(b.concat(a))

console.log(a.indexOf("r"));
console.log(b.startsWith("s"));
console.log(b.endsWith("a"));