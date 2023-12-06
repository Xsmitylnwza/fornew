//ไปอ่านเอาแม่งทฤษฏี
//1. TodoList in Management
class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }
    getTodo() {
        return this
    }
    setDescription(newDescription) {
        this.description = newDescription
    }

}
function TodoManagement() {
    let todos = []

    function addTodo(desc) {
        todos.push(new Todo(todos.length + 1, desc))
    }
    function findTodo(searchId) {
        return todos.find(todo => todo.id = searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex(todo => todo.id = searchId)
    }
    function removeTodo(removeId) {
        todos.filter((todo) => todo.id != removeId)
    }
    function getTodos() {
        return todos
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos }
}
//2. Student Attendance and Performance Tracking
const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    }
]
function getAttendanceRate(student) {
    let count = 0
    student.attendance.forEach((index) => {
        if (index) ++count
    })
    return count * 20
}
function getAvgScore(student) {
    return student.testScores.reduce((sum, score) => {
        return sum += score
    }, 0) / student.testScores.length
}

console.log(getAvgScore(students[0]))

function underPerformStudents(students) {
    let result = []
    students.forEach((student) => {
        if (getAttendanceRate(student) < 80 && getAvgScore(student) < 70) {
            result.push({ name: student.name, attendanceRate: getAttendanceRate(student), avgScore: getAvgScore(student) })
        }
    })
    return result
}

console.log(underPerformStudents(students))