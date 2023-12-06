const summitbutton = document.querySelector('button')


summitbutton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.type)
    console.log('cancle submit to server')

    let username = document.getElementById('input-user')
    console.log(username.value)
    let password = document.getElementById('input-psw')
    console.log(password.value)
    let messege = document.getElementById('messege')
    if (username.value && password.value) {
        messege.textContent = "everything looks good!!"
    } else {
        messege.innerHTML = '<span style="color:red">missing value!!!</span>'
    }
})