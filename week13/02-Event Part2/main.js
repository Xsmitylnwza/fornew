const summitbutton = document.getElementById('btn-001')
// 2 register handler function on a target HTML object

// add multiple handler functions on the same event type and HTML object
const doSomething = (e) => {
    console.log(`Good bye, ${e.target.id}`)
}

summitbutton.addEventListener('click', (e) => {
    console.log(`hello, ${e.target.id}`)
})
summitbutton.addEventListener('click', doSomething)

// remove event listener
summitbutton.removeEventListener('click', doSomething)