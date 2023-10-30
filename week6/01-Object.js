//1. create object with object literals
const st1 = { studentId: 65130500099, firstname: 'Somchai', lastname: 'Sookjai' }

console.log(typeof st1)
console.log(st1)

const st2 = {} // empty object
console.log(typeof st2)

console.log(Object.keys(st1)) // array of property key
console.log(Object.values(st1)) // array of property values

// literals มีข้อเสียคือเวลาสร้าง object ใหม่มันจำเป็นที่จะต้อง repeat code ทุกครั้ง
const st3 = { studentId: 651305000100, firstname: 'Somchai2', lastname: 'Sookjai2' }
console.log(st3)

// composite object หรือก็คือ object ที่ซ้อนกับ object อีกทีนึงนั่นเอง
const st4 = {
    firstname: 'Pornchai',
    lastname: 'Jaidee',
    studentId: 65130500099,
    address: { province: 'Bankkok', country: 'Thailand' },
    firstname: 'yeahman',
    // getFullName: function() {
    //     return `${this.firstname} ${this.lastname}`
    // }}
    // เป็นการลดรูปสไลด์
    getFullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(st4)

//property value can store fucntion
const st5 = {
    firstname: 'Porntip', lastname: 'Dee', studentId: 651305000105, getFullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

console.log(st5.getFullname())

//get property 1) objectname.propertykey 2) objectname["propertykey"]
console.log(st4.firstname)
console.log(st4['lastname']) // ทำ dynamic key ได้
//dynamic property: add a new one, update or delete existing property
st4.email = 'pornchai.jai@kmutt.ac.th' // add new property
st4.lastname = 'Pronsus'
st4.getAddress = function () {
    return this.address
}
console.log(st4.getAddress())
console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4))
//empty object {} === const st2=new Object()
console.log(Object.prototype.isPrototypeOf(st2))
console.log(st4.address.country)
console.log(st4['address']['country'])


// constructor function
function Person(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
}

//2. create object by using constructor function
const p1 = new Person(1001, 'Adam', 'Jo')
const p2 = new Person(1002, 'Joji', 'Yeahright')
const p3 = new Person(1003, 'Fuji', 'Damn')

console.log(p1)
console.log(p2)
console.log(p3)
p1.email = 'adam@gmail.com'
console.log(p1)

// Object prototype <-- Person prototype <-- p1 ดังนั้นเช็ค prototype เลยเป็น true
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))

// 3. create object by using Class (ES6 Classes)
// javascript is a prototype based, not class based
// Systactic sugar
class Circle {
    constructor(r) {
        this.radius = r
    }
    //shared method among circle objecets
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getRadius() {
        return this.radius
    }
}

const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1.area())
console.log(c2.area())
console.log(c3.area())
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())

// Object prototype <- Circle prototype <- c1
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))

//4. create object with Object.create() function
// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))
pp1.hobbies = ['reading', 'shoping', 'kuyrai']
// จะเรียกแค่ onwer property 
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))



if (JSON.stringify({}) == '{}') {
    console.log('eiei')
}