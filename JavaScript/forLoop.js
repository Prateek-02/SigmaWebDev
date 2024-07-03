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


// Map , Filter , Reduce

let arr = [1,13,5,7,11]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }

// Map

/*
let newArr = arr.map(e=>{
    return e**2
})
console.log(newArr)
*/


// Filter
const greaterThanseven = (e) =>{
    return e > 7;
}
console.log(arr.filter(greaterThanseven))


const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter( (e) => {
//     return e > 4;
// })
// console.log(newNums);

// const newNums = [];

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);n'
//     }
// });

// console.log(newNums);

const books = [
    {
        title : 'Book One', genere: 'Fiction', publish: 1981, edition : 2004
    },
    {
        title : 'Book Two', genere: 'Non-Fiction', publish: 1992, edition : 2008
    },
    {
        title : 'Book Three', genere: 'History', publish: 1999, edition : 2007
    },
    {
        title : 'Book Four', genere: 'Non-Fiction', publish: 1989, edition : 2010
    },
    {
        title : 'Book Five', genere: 'Fiction', publish: 2009, edition : 2014
    },
    {
        title : 'Book Six', genere: 'Science', publish: 1987, edition : 2010
    },
    {
        title : 'Book Seven', genere: 'Fiction', publish: 1986, edition : 1996
    },
    {
        title : 'Book Eight', genere: 'History', publish: 2011, edition : 2016
    }
];


let userBooks = books.filter( (bk) => bk.genere === 'History')

userBooks = books.filter( (bk) => bk.publish >= 2000)
console.log(userBooks);

//Reduce

/*
let arr2 = [1,2,3,4,5,6]

const red = (a,b) => {
    return a*b
}

console.log(arr2.reduce(red))
*/

