//select the first node with its id
const ulStudents = document.getElementById('students')
console.log(ulStudents)
//select the first node with CSS selector
const ulStudents2 = document.querySelector('#students');
console.log(ulStudents2)

// query selector เอาแค่ตัวแรกที่เจอใน node tree
const programmingLect = document.querySelector('.programming') // class selector
console.log(programmingLect)


const ulStudents3 = document.querySelector('ul[id=students]') //tag with attribute
console.log(ulStudents3)

const ulEle = document.querySelector('ul') // tag name
console.log(ulEle)

const divUl = document.querySelector('div>ul')// ul have parent is div
console.log(divUl) // tag with its parent

const divLi = document.querySelectorAll('ul#students>li')
console.log(divLi)
divLi.forEach(div => console.log(div.textContent))
//select a collection