const student = {
  firstName: "Boris",
  lastName: "Paillard",
};

console.log(typeof student);
// => "object"

console.log(student);
console.log(student["firstName"]);
console.log(student.firstName);

student.firstName = "Super Boris"
console.log(student);

const firstNameKey = "firstName"
console.log(student[firstNameKey]);
console.log(student.firstNameKey); // doesn't work!