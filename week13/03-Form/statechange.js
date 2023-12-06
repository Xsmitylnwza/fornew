document.addEventListener('DOMContentLoaded', () => {
    console.log('Your DOM tree built')
})

window.addEventListener('load', () => {
    console.log('Your Application Loaded')
})
window.addEventListener('mousemove', function (e) {
    console.log(`X: ${e.screenX}`)
    console.log(`Y: ${e.screenY}`)

})
window.addEventListener('beforeunload', () => {
    localStorage.setItem('myCat', 'Tom')
})

// window.addEventListener('mousemove', (e) => {
//     console.log(`x:${e.screenX} y:${e.screenY}`)
// })

const userElement = document.getElementById('input-user')

const pswElement = document.getElementById('input-psw')


// focus ทำงานก็ต่อเมื่อเรากดไปที่ไหน เช่นเรากดไปที่ form
userElement.addEventListener('focus', () => {
    console.log('Your focus is on username')
})

// blur จะเกิดขึ้นก็ต่อเมื่อเรากดออกจาก form นั่นเองครับน้องๆ
userElement.addEventListener('blur', () => {
    console.log('Your username input textbox is blured')
})

// keydown คือตอนเรากด
// using keydown and keypress to detect number characters 0-9
userElement.addEventListener('keydown', (e) => {
    console.log(`${e.key}, ${e.code}`)
    if (e.key >= 0 && e.key <= 9) {
        e.preventDefault()
    }
})
//key up คือปล่อยมือจาก keyboard
// event fired, text value on username will show at p element
userElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const pElement = document.querySelector('p')
        pElement.textContent = e.target.value
    }
})

// framework จะช่วยลดการเขียนโค๊ดการทำงานของเรา
userElement.addEventListener('input', (e) => {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value

})