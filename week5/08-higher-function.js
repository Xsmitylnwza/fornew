// 1.function declaration
function concat(str1, str2) {
    return str1 + str2
}

// calling function, excute fucntion
console.log(concat('hello', 'world')) // helloworld

// 2.function expression
const toLower = function (str) {
    return str.toLowerCase()
}
//calling function, execute function
console.log(toLower('HELLOWORLD'))

const doSomething = toLower
console.log(doSomething('HI')) // กลายเป็ฯ function
const y = toLower('Hey') // ไม่เป็น function แต่เก็บค่าจาก function toLower()
console.log(y) // 'hey'
console.log(typeof y) // string 
console.log(typeof doSomething)
// ไม่เกี่ยวกุลอง 
const xsmity = concat
console.log(xsmity('kuyrai', 'sus'))

const doIt = function (op, str1, str2) {
    // parametor passing 
    // op=concat, str1 = 'good', str2='morning' 
    return op(str1, str2)
}

console.log(doIt(concat, 'good', 'morning')) // goodmorning
console.log(doIt(toLower, 'GOOD', 'MORNING')) // good รับได้ช่องเดียวก็ทำช่องเดียวไม่สน

function a() {
    return toLower
}

const m = a()
console.log(m('ABC'))

