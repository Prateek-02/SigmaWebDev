// var c = 300;

let a = 300;

if(true){
    let a = 10;
    const b = 20;  
    var c = 30;    // var is global
    // console.log("Inner: "+a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "prateek"

    function Two(){
        const website = "youtube"
        console.log(`${username}`);
    }
    // console.log(website);
    Two();
}
one();

if(true){
    const username = "prateek";
    if(username === "prateek"){
        const website = "youtube"
        // console.log(username+website)
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting  +++++++++++++++++++++

function addOne(num){
    return num+1;
}

let res = addOne(5);
console.log(res);