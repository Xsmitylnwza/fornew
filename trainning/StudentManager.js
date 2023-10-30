const Student = require('./Student'); //
// import Student from './Student'; //only browser

function studentManager() {
  let students = [];

  function addStudent(id, name) {
    students.push(new Student(id, name))
  }

  function getStudentInfo(id) {
    students.find((student) => student.id = id)
  }
  function enrollStudent(id, course) {
    students.forEach((student) => {
      if (student.id === id) {
        student.enroll(course)
      }
    })
  }
  function getAllStudentsInfo() {
    return students
  }

  return { addStudent, getStudentInfo, enrollStudent, getAllStudentsInfo };
}

module.exports = studentManager;
