// Synchronous way

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);


// Asynchronous way

function hello(){
    console.log("Hello");
}

setTimeout(hello,3000);