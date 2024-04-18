// var is globally scoped 
// let is block scoped
let a = 5;
let b = 6;
let c = "Harry";

// console.log(a+b);
// console.log(typeof c);
{
    let a = 66;
    console.log(a);    // output = 66;
}
console.log(a);        // output = 5;

const a1 = 6;    // const value cannot be changed

let x = "Prateek";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let o = {
    name:"Anish",
    "job code": 5600,
    "is_hardworking" : true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);