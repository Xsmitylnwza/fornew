//3.create array with Array () constructor
//3.1 with empty parameter

const x = new Array() // x=[]
console.log(x)
console.log(x.length)

// 3.2 with intial size of array

const y = new Array(5)
console.log(y) // []
console.log(y.length) // 5

// 3.3 with inital value
const z = new Array(1, 3, 5, 7)
console.log(z) // [1,3,5,7]
console.log(z.length) // 4

console.log()
console.log('=== factory method')
// 4 factory method

const x2 = Array.of(10)
console.log(x2) // [10]
console.log(x2.length)

const y2 = Array.of(x2)
console.log(y2)
console.log(y2.length)


const z2 = Array.of('1', 1 + 1, true)
console.log(z2) // ['1',2,true]
console.log(z2.length) // 3


// 5. create array with Array.form()
console.log('=== 5. create array with Array.form() ===')
const x3 = [1, 2, 4, 8, 16, 32]
const y3 = Array.from(x3)
console.log(x3)
console.log(y3)
console.log(y3.length)
//memory address of x equals to memory address of y
if (x === y) console.log('x === y')
else console.log('x !== y')























