//1. get button with querySelector but we shouldn't select with tag becuase data can change everytime
// we should selector with id or class 
let summitbutton = document.querySelector("button")
// console.log(summitbutton)
// test
let outter = document.querySelector("#outer-div")
// console.log(outter)
// test
let inner = document.querySelector("#inner-div")
// console.log(inner)

const innerDiv = document.getElementById('inner-div')
const outerDiv = document.getElementById('outer-div')
//2. register handle function on a target HTML object
//summitbutton.addEventListener('click', () => console.log('summit button is clicked'))

// ใช้ตัว e เพื่อไปรับ event object ที่ส่งเข้ามาเพื่อนำค่า attribute หรือ object ตัวนั้นมาแสดงผล
// พอ clcik แล้วจะเกิดการ bubbling ขึ้นมาโดยมันจะส่งผลการทำงานไปยัง Inner div ที่เป็น parent node ด้วย
const doSomething = (e) => {
    console.log("===============================")
    // console.log('submit button is clicked')
    // console.log(e)
    console.log(e.target.id)
    // console.log(e.type)
    // console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
}

summitbutton.addEventListener('click', doSomething, true)


// inner-div ปรากฏว่าพอกด outter div แล้ว eventlistener จะทำการเรียกใช้ evenetListener ของ inner div ด้วย
// console.log(innerDiv)

innerDiv.addEventListener('click', (event) => {
    console.log("===========================")
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
}, true)


outerDiv.addEventListener('click', (event) => {
    console.log("============================")
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)

}, true)