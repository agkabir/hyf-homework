const class07Students = [];
function addStudentToClass(studentName) {
  if (!/\s/g.test(studentName)) {
    if (!class07Students.includes(studentName)) {
      if (studentName === "Queen") class07Students.push(studentName);
      else {
        if (class07Students.length <= 5) class07Students.push(studentName);
        else console.log("Cannot add more students to class 07");
      }
    } else console.log(`Student ${studentName} is already in the class`);
  } else console.log("Student name can not be empty");
}

function getNumberOfStudents() {
  console.log(`Number of students in the class : ${class07Students.length}`);
}

// adding students in the class
addStudentToClass("  ");
addStudentToClass("Benzamin");
addStudentToClass("Sara");
// Trying to add duplicate student in the class
addStudentToClass("Benzamin");
addStudentToClass("Bo");
addStudentToClass("Daniel");
addStudentToClass("Chris");
addStudentToClass("Marie");
// calling getNumberOfStudents to display number of students
getNumberOfStudents();
// trying to add new students Hummel in full class
addStudentToClass("Hummel");
// adding Queen in the full class
addStudentToClass("Queen");
// calling getNumberOfStudents again to display number of students after adding Queen
getNumberOfStudents();

function getNumberOfStudents() {
  console.log(`Number of students in the class : ${class07Students.length}`);
}
