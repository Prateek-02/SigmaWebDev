function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400,800))

// Object passed in function
const user = {
    item : "t-shirt",
    price : 199
}

function handleObject(anything){
    console.log(`item is ${anything.item} and price is ${anything.price}`);
}

handleObject(user);
// or
handleObject({
    item : "lower",
    price : 399
})


// array passed in function
const myarr = [200,400,600,900]

function returnSecondValue(value){
    return (value[1]);
}

let ans = returnSecondValue(myarr);
console.log("Second value is: "+ans);
//or
let ans2 = returnSecondValue([100,200,500,800]);
console.log("Second value is: "+ans2);

