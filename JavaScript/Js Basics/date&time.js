// Dates

let myDate = new Date();
console.log(myDate.toString());             // gives day,date and time(in 24 hrs format)
console.log(myDate.toDateString());         // gives day and date
console.log(myDate.toLocaleDateString());   // gives only date
console.log(myDate.toLocaleString());       // gives both date and time(in 12 hrs format)
console.log(myDate.toTimeString());         // gives time(in 24hrs format)

// let myCreatedDate = new Date(2024,0,23);
// let myCreatedDate = new Date("2024-03-9");
let myCreatedDate = new Date("04-03-2024");
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);   // give timestamp in milisecond
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());     //gives current month(in number)
console.log(newDate.getDay());       // gives current day of week(in number)

newDate.toLocaleString('default',{
    weekday: "long",
});
