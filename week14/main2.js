//localStorage
// let counter = localStorage.getItem('count')
// if (counter == null) {
//     localStorage.setItem('count', 1)
// } else {
//     localStorage.setItem('count', ++counter)
// }

// alert(`counter=${counter}`)

//sessionStorage
let counter2 = sessionStorage.getItem('count')
if (counter2 == null) {
    sessionStorage.setItem('count', 1)

} else {
    sessionStorage.setItem('count', ++counter2)

}
counter2 = sessionStorage.getItem('count')
alert(`counter=${counter2}`)

sessionStorage.removeItem('count')
sessionStorage.clear() //all items removed