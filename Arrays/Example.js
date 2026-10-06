let students = [
    {name:"Kundan",marks: 85},
    {name:"Rahul",marks: 35},
    {name:"Amit",marks: 72},
    {name:"Priya",marks: 90}
]

//Get students who passed
let passedStudents = students.filter(student => student.marks >=40);

//Get only their nmaes
let names = passedStudents.map(student => student.name);
console.log("Passed : " ,names);