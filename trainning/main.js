const StudentManager = require('./StudentManager');
const { addStudent, getStudentInfo, enrollStudent, getAllStudentsInfo } = StudentManager()

addStudent(1, 'joji')
addStudent(2, 'pretty boy')
addStudent(3, 'yeah right')
enrollStudent(3, 'nectar')
console.log(getAllStudentsInfo())
