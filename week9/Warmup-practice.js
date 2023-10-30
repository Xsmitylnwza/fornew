
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
    const yeahbro = student.reduce((count, curr) => {
        return curr ? count + 1 : count
    }, 0)
    return (yeahbro / students.length) * 100
}

console.log(getAttendanceRate(students[0].attendance))


function getAvgScore(student) {
    const xsmity = student.reduce((firstindex, curr) => {
        return firstindex + curr
    })
    return xsmity / student.length
}

console.log(getAvgScore(students[0].testScores))

function underPerformStudents(students) {
    let Upperperformstudent = []
    students.forEach(element => {
        if (getAttendanceRate(element.attendance) >= 80 && getAvgScore(element.testScores) >= 70) {
        }
        else Upperperformstudent.push(element)
    })
    return Upperperformstudent

}

console.log(underPerformStudents(students))