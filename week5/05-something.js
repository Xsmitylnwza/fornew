let a = ['hello']
let value = a[10]
console.log(value)
a[1] = 3.5
console.log(a)
let i = 2
a[i] = 3
console.log(a) // ['hello',3.5,3]
a[i + 1] = 'world'
console.log(a) // ['hello',3.5,3,'world]
a[a[i]] = a[0] // [ 'hello', 3.5, 3, 'hello' ]
console.log(a)