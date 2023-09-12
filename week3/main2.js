//x is a global scope
// declare = ประกาศค่า
let x = 1
console.log(x)
// สามารถตั้งชื่อซ้ำกันได้ถ้าเกิดตัวแปรชื่อซ้ำกันอยู่คนละ scope
{
    //x is a block scope
    let x = 5
    console.log(x)
    console.log(y)
    var y = 111
}
console.log(y)
x = 10
console.log(x)
function doIt() {
    if (1) {
        // block scope
        let x = 555
        console.log(x)
    } else console.log(`not 1`)
    console.log(`special global scope ${x}`) // เป็น global เพราะว่าไม่มีตัวแปรอื่นแล้วนอกจาก global ที่สามารถอ่านได้
}

console.log(x) // global scope x of line#2
function doSomething() {
    let x = 'A' // function scope
    console.log(x)
}
doSomething()
console.log(x) // global scope x of line#2
doIt()
let hehe = []
if (hehe.length) {
    console.log('heheheheheeeeeeee')
}

let m = 1
// explicit type conversation explicit = ชัดเจน 
console.log(typeof m)
// number -> string
console.log(typeof String(m))
// number -> boolean
console.log(typeof Boolean(m))

// if need bolean but 1 is number, so implicit conversion is called automatically
if (1) console.log('implicit conversation is working')


const xsmity = function (x, y = "hee") {
    console.log(x, y)
}
xsmity('test x')

// local compare
// local variable