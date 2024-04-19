function nice(name){
    console.log("Hey "+ name +" you are nice!");
    console.log("Hey "+ name +" you are good!");
    console.log("Hey "+ name +" your tshirt is nice!");
    console.log("Hey "+ name +" your course is good too!");
}

nice("Prateek");

function sum(a,b, c=3){
    // console.log(a+b);
    return a+b+c; 
}
res1 = sum(9,2);
res2 = sum(7,9);
res3 = sum(8,5,1);

console.log("The sum of the numbers is: "+res1);
console.log("The sum of the numbers is: "+res2);
console.log("The sum of the numbers is: "+res3);


const func1 = (x) => {
    console.log("I am an arrow function",x);
}
func1(34);
func1(45);
func1(90);



