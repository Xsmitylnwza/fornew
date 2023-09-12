let someone = 'x' // emthy String
let who // who=undefined
console.log(typeof someone) // string
let discount = 0
var x = 5
console.log(x) // 5
if (someone) {
    var x = 8
    console.log(x) //1
    who = 'member'
    discount = 0.1
} else {
    var x = 2
    console.log(x) // 2
    who = 'guest'
    discount = 0.05
}
console.log(x)
console.log(who)
console.log(discount)

// ถ้าหากใช้ var แล้วมันจะเปลี่ยนค่าทั้งหมดเลยเพราะว่า var ไม่สนการมีอยู่ของ scope มันจะมองเป็น global scope ดังนั้นใช้ var มีโอกาศชิบหายแบบนี้นะจ้ะ
// ?:
//who = someone ? 'member' : 'guest';

let str = null// undefined
// ใช้ Optional chaining เพื่อให้โปรแกรมยังสามารถรันต่อไปได้อยู่
// ใช้ก็ต่อเมื่อตัวแปรที่มีโอกาศมีค่าเป็น null or undefined พยายามเรียกใช้ method เพื่อแปลงค่ามันจะแสดงค่า eror ออกมา
// แต่ว่าในบางครั้งในการทำโปรแกรมที่เกี่ยวกับข้อมูลค่าบางค่ามันอาจจะมีค่าในครั้งนั้นจริงๆเราจำเป็นที่จะต้องทำให้โปรแกรมสามารถรันต่อไปได้
// เราจึงจำเป็นที่จะต้องเรียกใช้ Optional chaining เพื่อทำให้โปรแกรมยังคงรันต่อไปได้นะจ้ะ
console.log(str?.toLowerCase());

// another ex.
let nums = null
console.log(nums?.[0])

let obj
console.log(obj?.id)

//nullish Coalescing (??)
// ใช้เพื่อที่จะ check ค่าของตัวแปรว่าเป็น null หรือ undefined รึป่าวถ้าเป็นก็ให้มันเปลี่ยนค่าซะ
//[] represents an empty array
//{} represents an empty object
let arr
let nums2
arr = arr ?? []
console.log(arr)
console.log()

// ceil
console.log("=== ceil test ===")
console.log(Math.ceil(1.2));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.7));

// floor
console.log("=== floor test ===")
console.log(Math.floor(1.2))
console.log(Math.floor(1.5))
console.log(Math.floor(1.7))

// round - equals to or more than 0.5 then round up, otherwise it'll round down
console.log("=== round test ===")
console.log(Math.round(1.2))
console.log(Math.round(1.5))
console.log(Math.round(1.7))

// pow Math.pow(base,exp)
console.log("=== power test ===")
console.log(Math.pow(2, 3)) // 8 


console.log("=== random test ===")
// random Dice faceValue in a range 1-6
let random = Math.floor((Math.random() * 6) + 1)
console.log(random)

// random in a range 10 to 50
let random2 = Math.floor((Math.random() * 41) + 10)
console.log(random2)

// random in a range 100-1000
let random3 = Math.floor((Math.random() * 901) + 100)

//random in a range 1-100
let min = 1
let max = 100;
// สูตรการหาค่าสุมแบบ dynamic
function ramdon(max, min) {
    let random4 = Math.floor(Math.random() * (max - min + 1)) + min
}


let random4 = Math.floor(Math.random() * (max - min + 1)) + min

let random5 = Math.floor(Math.random() * max) + min

console.log('=== equalityOperator ===')
if (undefined === null) console.log('undefined === null')
else console.log('undefined !== null')
// == do not care types but only check value
if ('2' == 2) console.log(`'2' == 2`)
else console.log(`'2' != 2`)

//=== start to check data type first. If data types are not the same return
// flase, otherwise then check value
if ('2' === 2) console.log(`'2' === 2`)
else console.log(`'2' !== 2`)

console.log("=== JavaScipt String ===")
let strz1 = "apple"
let strz2 = "Apple"
let strz3 = "APPLE"
let strz4 = "apple"

console.log(strz1 === strz2) // 'a' === 'A' return false
console.log(strz1 !== strz2) // 'a' !== 'A' return true

console.log(strz1 === strz4) // 'a' === 'a', 'p' === 'p' checkไปเรื่อยๆ return true

console.log(strz1 < strz2) // 'a' < 'A' 97<67 return false

console.log(strz1.includes('App')) // false
console.log(strz1.includes('app')) // true

// includes with case insensitive ศัพท์นี้ต้องดูดีๆ
console.log(strz1.includes('App'.toLowerCase()))

// === vs includes()
// 'apple' === 'apple' return true
// 'app' === 'apple' return false

// 'apple'.includes('apple') return true
// 'apple'.includes('app') return true

// Comparing Objects
console.log("=== Comparing Objects")
const a = [1, 2, 3] // a = memory addressl
const b = [1, 2, 3] // b = memory addressl
console.log(a === b) // memory address of a === memory address of l

const c = b // alias give memory address of b to c
console.log(c === b) // true
c[0] = 'A'
console.log(b) // ['A',2,3]
console.log(c) // ['A',2,3]

a[0] = 555
console.log(a)
console.log(b)
console.log(c)

console.log("=== object data type is an object ===")
//object data types is an object
const x2 = { id: 1, title: 'JS' }
const y = { id: 1, title: 'JS' }
const z = y
console.log(x2 === y)
console.log(y === z)

y.id = 888
console.log(x2) // {id: 1, title: 'JS'}
console.log(y) // {id: 888, title: 'JS'}
console.log(z) // {id: 888, title: 'JS'}

// primitive
console.log('=== primitive ===')
let m = 5 // m stores 5
let n = 10 // n stores 10
let o = n // n assign 10 to o then o stores 10
m = 999 // m reassign to 999 then m stores 999
o = 1000 // o reassign to 1000 == 10 //flase
console.log(m) // 999
console.log(n) // 10
console.log(o) // 1000

