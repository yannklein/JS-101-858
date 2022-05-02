// console.log("Hello everyone");

// console.log(parseInt("42", 10));
// // console.log(parseInt("101", 2)) # give binary number
// console.log((42).toString());

// let age = 21;
const student = "bOra";

// console.log(age, student);

// // re-assignement
// age += 1;
// console.log(age, student);

// // student = "Super Bora"; # CANNOT RE-ASSIGN CONST
// // console.log(age, student)

const students = ["Shingo", "Celso"];
students.push("James");

// // students = [] # CANNOT RE-ASSIGN CONS

// console.log(students);

// console.log(`${student} is ${age}.`)

console.log(student.length);

// console.log(student[0]);

// console.log(student.substring(0,2)); // from index 0 to index 2 excluded
// console.log(student.slice(0,2)); // from index 0 to index 2 excluded
// console.log(student.slice(2)); // from index 2 and up

console.log(student.toLowerCase());
console.log(student.toUpperCase());
// no capitalize!

console.log(students.join()); // join adds comma by default!
console.log(students.join(""));
console.log(students.join("~~~"));

const tildeStudent = students.join("~~~");

console.log(tildeStudent.split());
console.log(tildeStudent.split("~~~"));