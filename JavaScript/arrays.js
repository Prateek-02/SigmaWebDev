// Arrays are mutable

let arr = [1,2,3,4,5,7]

arr[0] = 5688
console.log(arr)
console.log(arr.length)
console.log(arr[0])

for(let i=0;i<6;i++){
    console.log(i +":"+arr[i])
}

console.log("Type of array: "+typeof(arr))

console.log(arr.toString())    // toString is a method to convert array to string

console.log(arr.join(" and "))   // join is used to join all the array elements using a separator and convert all values to string

arr.pop()      // it will pop the last element
console.log(arr) 

arr.push(100)  // it will push the element at the last of the array
console.log(arr) 

arr.shift()
console.log(arr) // it removes the first element for the array

arr.unshift("Jack")    // it adds the element at the first of array
console.log(arr)  

let arr2 = [20,34,56,79]
let arr3 = arr.concat(arr2)    // it is used to concat arrays
console.log(arr3)

arr2.sort()
console.log(arr2)

let numbers = [1,2,3,4,5]
numbers.splice(1,2)    // 1 is starting index and 2 is number of elements to be deleted
console.log(numbers)

let x = [8,9,4,5]
let a = x.slice(2)       // it will give all the elements starting from the given index to end of the array
console.log(a)

let b = x.slice(1,3)     // it will give the elements starting from given index till the ending index excluding the ending index
console.log(b)

x.reverse()              /// it reverses the array
console.log(x)

console.log(Array.from("Prateek"))      // it will create an array using the string

console.log(x.indexOf(9));      // it will return the index of the given element

console.log(x.includes(5));     // it will return that value is present or not in the array