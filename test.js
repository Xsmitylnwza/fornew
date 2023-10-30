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


const obj = {}
if (JSON.stringify(obj) === '{}') {
    console.log("KUY")
}

const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Eve', age: 28 },
    // เพิ่มข้อมูลผู้ใช้เพิ่มเติมได้ตามต้องการ
];

function addUser(obb) {
    users.splice(users.length, 0, obb)
}
function removeUser(id) {
    users.splice(id - 1, 1)
}

addUser({ id: 5, name: 'heh', age: 80 })
removeUser(2)
users

function getYoungUsers(age) {
    return users.slice().filter(user => user.age < age)

}

let hehe = getYoungUsers(15)
console.log(hehe)