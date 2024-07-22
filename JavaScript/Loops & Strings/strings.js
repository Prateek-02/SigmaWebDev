const name = "Prateek"
const repoCount = 20

// console.log(name + repoCount)

console.log(`Hello my name is ${name} and repoCount is ${repoCount}`)

const gameName = new String('prateek-pr')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);         // gives the length of the string
console.log(gameName.toUpperCase());  // convert string to uppercase
console.log(gameName.charAt(6));      // gives the character present at the given index
console.log(gameName.indexOf('e'));   // gives the index of the given character

const newString = gameName.substring(1,5);   // include the starting index and exclude the ending index and convert the string to the substring
console.log(newString);

const anotherString = gameName.slice(2,6);
console.log(anotherString);

const newStringOne = "    prateek   ";   
console.log(newStringOne.trim());        // it will trim the extra spaces

const url = "https://prateek.com/prateek%20raj";    
console.log(url.replace('%20','-'));       // it will replace item with the given item

console.log(url.includes('prateek'));      // it will return that the given keyword is present or not

console.log(gameName.split('-'))   // split the string whenever there is a '-'

