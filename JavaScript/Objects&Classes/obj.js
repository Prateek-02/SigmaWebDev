// const student = {
//     fullname : "Prateek Raj",
//     marks : 94.4,
//     printMarks: function () {
//         console.log("marks = ",this.marks);
//     }
// }

// console.log(student.fullname);
// console.log(student.marks);


const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    // or
    calcTax2 : function() {
        console.log("tax rate is 10%");
    }
}

console.log(employee.calcTax1());
console.log(employee.calcTax2());

const karanArjun = {
    salary : 50000,
    calcTax1(){
        console.log("tax rate is 20%");
    }
};

karanArjun.__proto__ = employee;    // functions of the given class comes under the karanArjun object
console.log(karanArjun.calcTax1()); // if object and protype have same method, object's method will be used