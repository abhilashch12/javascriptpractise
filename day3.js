let studentDetails = [{name:"Abhi",marks:35},
                      {name:"ravi",marks:50},
                      {name:"raju",marks:90},
                      {name:"karthik",marks:85},
                      {name:"ramesh",marks:75},
                      {name:"raja",marks:83}];
let studentNames = studentDetails.map(student=>student.name);
console.log(studentNames);
console.log(studentDetails);
let brightStudents = studentDetails.filter(mark => mark.marks>60)
                                    .map(mark => mark.name);
console.log(brightStudents);
let totalMarks = studentDetails.reduce((total,student)=>{
                                        return total+student.marks;
},0);
console.log(totalMarks);
const average = (totalMarks / studentDetails.length).toFixed(1);
console.log("Average:", average); 
let firstStudent = studentDetails.find(first => first.marks>80);
console.log(firstStudent);
let noStudent = studentDetails.find(noone=>noone.marks>95);
console.log(noStudent);
function gradeChecker(mark){
    if (mark>=90) return "A";
    if (mark>=80) return "B";
    if (mark>=70) return "C";
    if (mark>=60) return "D";
    if (mark>=50) return "E";
    return "F";
}
let updatedStudents = studentDetails.map(students => ({
    ...students,
    grade: gradeChecker(students.marks)
}));
console.log(updatedStudents);
export {updatedStudents};
