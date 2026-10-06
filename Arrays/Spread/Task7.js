let students = [
    {name :"Kundan", marks:85},
    {name :"Rahul", marks:35},
    {name :"Priti", marks:72},
    {name :"Priya", marks:90},
]

//Get students who passed
let passedStudents = students.filter(student => student.marks >= 40);

//Get only their names
let names = passedStudents.map(student => student.name);

console.log(names);

let student = students.find(student=>student.marks > 80);
console.log(student);

let hasFailed = students.some(student=>student.marks<40);
console.log(hasFailed);

let allPassed = students.every(student=>student.marks >= 40);
console.log(allPassed)