const f4 = (x) => {
    const value = x || 0
    return value * value
}

console.log(f4(null))

let kuy = {
    name: 'xsmity', lastname: 'Sokgampang'
}
console.log(Object.keys(kuy))
let arr = ['']
arr = arr ?? [1, 2]
console.log(arr?.length)

let k = 100
function test() {
    let k = 120
    console.log(k)
}

test()

let o = !1
console.log(o)
let v = 5 - '1'
console.log(v)

const f1 = (x) => {

}
function b2() {
    return 10
}
function a(b) {
    return b() * 100
}

console.log(a(b2))

const { ...x } = { Fullname: { fisrtname: 'chaimongkon', lastname: 'yeahman' } }
console.log(x)

let kuy2 = null

kuy2 = kuy2 ?? 'hee'
console.log(kuy2)
