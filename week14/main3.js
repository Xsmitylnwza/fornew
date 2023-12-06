
let color = document.querySelector('.color')

let whatcolor = document.querySelector('.output')

color.addEventListener('input', function () {
    document.body.style.backgroundColor = color.value
    console.log(color.value)
    whatcolor.textContent = color.value
})