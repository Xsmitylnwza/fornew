//แม่งเน้นอ่านเหมือนกันพวกนี้
// ANS 02

const nums = [10, 20, 30, 40, 50]
const obj = {
    id: 1001,
    title: 'JS Beginner',
    isbn: 7241326384,
    authors: { fullname: 'Jame Smith' }
}
//1.destructuring array index 0 and 1
const [x1, x2] = nums
console.log(x1, x2)

//2.get isbn value with name bookId
const { isbn: bookId } = obj
console.log(bookId)


//3.get full name of author name it authorName
const { authors: { fullname: authorName } } = obj
console.log(authorName)


// ANS 03 งง
// do anything shit result should be jsGuy is Somchai
function getFirstName({ displayName, fullName: { firstName } }) {
    return `${displayName} is ${firstName}`
}
const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
        firstName: 'Somchai',
        lastName: 'DeeJai'
    }
}

console.log(getFirstName(students))

// ANS 04 ทำ TodoList ของ wk09 แต่ว่าใช้การ import แยก class กัน and test it in main class

