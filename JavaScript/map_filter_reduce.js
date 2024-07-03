// Filter

/*
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
//         newNums.push(num);
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

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genere === 'History'
})
console.log(userBooks);

*/


// Map

/*
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map( (num) => num+10);

const newNums = myNums.map( (num) => num *10 ).map( (num) => num +1).filter( (num) => num >=40 );  // chaining
console.log(newNums);
*/


// Reduce

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce( (acc,curr) => acc + curr,0)

console.log(myTotal);
