// ARRAY CRUD
const students = ['Azat', 'Yuki', 'Nana'];

// Create
students.push("Devin")
console.log(students);
// Read
console.log(students[1]);

// Update
students[1] = "Super Yuki"; 
console.log(students);

// Delete
students.splice(1, 2) // remove, from index 1, two elements
console.log(students);

// Iterate
// JS arrow function () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});