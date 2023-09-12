const x = [1, 3, 5]
const y = [2, 4, 6, 8, 10, 12]

//destructing array
const [a] = x // a=x[0]
// o use a rest operator
const [m, n, ...o] = y //m=y [0], n=y[1], o=[y[2], y[3], y[4]]
console.log(a) // 1
console.log(m) // 2
console.log(n) // 4
console.log(o) // [6,8,10,12]
// ... in front of x is a spread operator
const z = [...x, 2, 4, ...x]
console.log(z) // [1,3,5,2,4,1,3,5]

//destructuring with skip element
const [, e] = x
console.log(e) // 3

const [k, , l, , ...h] = y
console.log(k) // 2
console.log(l) // 6
console.log(h) // [10,12]