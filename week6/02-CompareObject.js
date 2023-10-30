// === or == compare reference address between two objects
const st1 = {
    studentId: 651305000101,
    firstname: 'Somchat',
    lastname: 'Sookjai',
    studentId: 1
}

const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651305000102 }
const st4 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651305000102 }
const st2 = st1
console.log(st1 === st3)
console.log(st1 === st2)
console.log(st3 === st4)

//create compare fucntion to compare two students
function compareStudent(st1, st2) {
    return st1.studentId === st2.studentId
}

console.log(compareStudent(st1, st2))
console.log(compareStudent(st3, st4))
console.log(compareStudent(st1, st2))

const obj1 = {}
const obj2 = { id: 1 }

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))

// if (JSON.stringify(obj1) === '{}') console.log('object is an empty')
// else console.log('object is not empty')

// if (JSON.stringify(obj2) === '{}') console.log('object is an empty')
// else console.log('object is not empty')

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}'
}

console.log(isEmpty(obj1))
console.log(isEmpty(obj2))

