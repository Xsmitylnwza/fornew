let score = 40
let grade
// <40 => 'F',40-70-'B', 71-100 => 'A'
if (score <= 0 && score > 100) grade = 'invalid scores'
else {
    if (score <= 40) grade = 'F'
    else if (score <= 70) grade = 'B'
    else if (score <= 100) grade = 'A'
}


console.log(grade)

console.log('=== switch case test ===')
let greadeMeaning
switch (grade) {
    case 'F':
        greadeMeaning = 'Need Improvement'
        break;
    case 'B':
        greadeMeaning = 'Good'
        break;
    case 'A':
        greadeMeaning = 'Very Good'
        break;
    default:
        greadeMeaning = 'KUY RAI SUS'
}

console.log(greadeMeaning)

let ch = 'o'
let isVowel = false
switch (ch) {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
        isVowel = true
}
console.log(isVowel)


console.log('=== for loop test ===')
for (let index = 0; index < 10; index++) {
    console.log(index)
}

console.log('=== for off test ===')
let nums = [10, 20, 30]
for (let num of nums) {
    console.log(num)
}

console.log('=== for in test ===')
let obj = { id: 1, title: 'JS' }
for (const key in obj) {
    console.log(key) // ล้ำจาด
    console.log(obj[key])
    console.log(`${key}:${obj[key]}`)
    console.log('=============')
}
