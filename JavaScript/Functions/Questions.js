// 1 (Count number of Vowels in the given string)

/*
function countVowels(str){
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        // console.log(char);
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            count++;
        }
    }
    return(`Number of vowels in the string are: ${count}`);
}

const res = countVowels("ApnaCollege");
console.log(res);
*/

// Using Arrow function

/*
const countVowels = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        // console.log(char);
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            count++;
        }
    }
    return(`Numbes of vowels in the string are: ${count}`);
}

const res = countVowels("ApnaCollege");
console.log(res);
*/


// 2(For a given arr of numbers, print the square of each value using for each loop)

/*
let num = [67,52,39];

let calcSquare = (num) =>{
    console.log(num*num);
}
num.forEach(calcSquare);

*/


// 3 (Filter out the marks of students that scored 90+)

let arr = [30,93,92,99,94,90];

let Marks = arr.filter((marks) => {
    return marks > 90;
})

console.log(`Marks greater than 90 are: [${Marks}]`);


