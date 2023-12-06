const divEle = document.getElementById('exampleElement')

console.log(divEle.textContent)
console.log(divEle.innerText)
console.log(divEle.innerHTML)

//CRUD on any element node
//1.create element, <li></li>
const newLiEle = document.createElement('li')

//2.create attributes <li id="devops" name="devopsLect"></li>
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')

//3. add text value to element,
//<li class="devops" name="devopsLect">Siam Yamsangsung</li>
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'

//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
// divParent.appendChild(newLiEle)

const ulELe2 = document.querySelector('div.lecturers>ul')
console.log(ulELe2.children[1])
const ulEle = document.querySelectorAll('div.lecturers>ul>li')
console.log(ulEle[1])

// divParent.insertBefore(newLiEle, ulEle[1])
divParent.replaceChild(newLiEle, ulEle[1])

divParent.removeChild(ulEle[2])
