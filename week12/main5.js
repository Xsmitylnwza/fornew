//window.alert, window.prompt, window.confirm

window.alert('Do you want to exit')

// return user input, ok=user input, cancle=null
const username = window.prompt('Please enter your name', 'ex.,Somchai Jaidee')
console.log(username)

//return boolean, ok=true, cancel=false
const isExit = window.confirm(`Goodbye, ${username}`)
console.log(isExit)