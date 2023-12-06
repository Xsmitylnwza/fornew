import { validUsername, validEmail, valiadpassword } from "./validate.js";

let colorbtn = document.getElementById('color-btn')
function getrandomColor() {
  let randomnum = Math.floor(Math.random() * 5)
  let rainbowbg = document.querySelector('#rainbow')
  const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
  rainbowbg.style.backgroundColor = colorArray[randomnum]
  console.log(rainbowbg)
}

colorbtn.addEventListener('click', getrandomColor)

let addbtn = document.querySelector('#add-btn')
let iteminput = document.querySelector("#item-input")
function notebackpack() {
  let newli = document.createElement('li')
  newli.textContent = iteminput.value
  let ul = document.querySelector('#listItem>ul')
  ul.appendChild(newli)
}

addbtn.addEventListener('click', notebackpack)

let information = document.querySelectorAll('#input-list>form>input')
let returnmessge = document.querySelector('#input-list>form>p')
let summitbtn = document.querySelector('#submit-btn')
console.log(summitbtn)
summitbtn.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('hello')
  let username = information[0].value
  let email = information[1].value
  let password = information[2].value

  if (!validUsername(username)) {
    returnmessge.textContent = 'Username is not valid'
  } else if (!validEmail(email)) {
    returnmessge.textContent = 'Email format not valid'
  } else if (!valiadpassword(password)) {
    returnmessge.textContent = 'Password format not valid'
  } else returnmessge.textContent = 'Successfully! Yay'
})


