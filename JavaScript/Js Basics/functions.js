function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("E");
    console.log("E");
    console.log("K");
}

// sayMyName();

/*
function addTwoNums(num1, num2){
    console.log(num1 + num2);
}

addTwoNums(3,4);     // 7
addTwoNums(3,"4");   // 34
*/

function addTwoNums(num1, num2){
    // let result = num1+num2;
    // return result;
    return num1+num2;
}

const result = addTwoNums(3,5);
// console.log("Result: "+ result);

function loginUserMessage(username){
    if(username === ""){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`
}

const res = loginUserMessage("");
console.log(res);

