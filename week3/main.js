const $a = 3
//$a = 10
const _b1c = 1
console.log($a)
console.log(_b1c)
console.log('=== Weakly type dynamic data ===')
let x = 1
// waely and dynamic data types
console.log(x)
console.log(typeof x)
x = 'A'
console.log(x)
console.log(typeof x)
x = true
console.log(typeof x)
console.log(typeof undefined)
console.log(typeof null)

console.log('=== Array uses ===')
let nums = [1, 3, 5, 7, 9]
console.log(typeof nums)
console.log('=== object uses {}, {property key: property value}')
const obj = { id: 1, title: 'JS' }
console.log(typeof obj)

console.log('=== obj = nums')
nums = obj
nums.id = 555
// เป็นเหมือนการลิ้งที่อยู่ใน object เดียวกันเวลาเปลี่ยนมันเลยเปลี่ยนทีที่อยู่ ดังนั้น
// object ใดๆที่ใช้ทีอยู่เดียวกันกับค่าที่เปลี่ยนไปค่าก็จะเปลี่ยนไปทั้งหมด
console.log(obj)

const ids = [101, 105, 110, 120]
ids[0] = 1
console.log(ids)
ids[ids.length] = 150
console.log(ids)

// let ไม่เหมือน const เพราะไม่บังคับให้เราให้ค่ากับตัวแปรทันทีแต่แสดงผลลัพธ์ออกมาเป็น undefined แทน
let m,
    n,
    o = 1
p = true,
    q = null

console.log(m, n, o, p, q)

if (m === undefined) console.log('m is undefined')
if (q === null) console.log('q is null')
// == check only value, do not care data type
if ('2' == 2) console.log(`'2' == 2`)
// === check data type first, if the data type does not match then return false otherwise value will be check
if ('2' === 2) console.log(`'2' === 2`)
else console.log(`'2' !== 2`)

if (typeof m === 'undefined') console.log(`type of m === 'undefined'`);
//null has type of object
if (typeof q === 'object') console.log(`type of q === 'object'`);


function doSomething(activity) {
    return activity
}

console.log(doSomething('online learning'))
console.log(typeof doSomething)

{
    let x = 2
    const y = 3

}
