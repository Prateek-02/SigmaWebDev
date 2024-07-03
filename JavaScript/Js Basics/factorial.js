// Calculate the factorial of the given number

// Using for Loop

let n = 6
function facFor(n){
    if(n==0){
        return 1;
    }
    let fact = 1 ;
    for(let i = 1;i<=n;i++){
        fact*=i
    }
    return fact;
}
console.log(facFor(n))

// Using reduce method

function facRed(n){
    let arr = Array.from(Array(n+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
console.log(facRed(n))

