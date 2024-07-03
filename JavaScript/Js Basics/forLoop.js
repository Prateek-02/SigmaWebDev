let a = [1,93,51,6,88]

// Normal for loop
/*
for(let i = 0;i<a.length;i++){
    const element = a[i]
    console.log(element)
}
*/

// loop inside loop

/*
for(let i=1;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        console.log(i + "X" + j + "=" + i*j);
    }
}
*/

// forEach loop
/*
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
*/


// forIn loop
/*
let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}
*/

//forOf loop
/*
for (const iterator of a) {
    console.log(a)
}
*/


