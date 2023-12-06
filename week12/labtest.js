// ================== main1 ===========================
//1.select ulStudents ul student the first node with its id
const ulstudents = document.getElementById('students')
//2.select ulStudents2 ul student the first node with CSS selector
const ulstudents2 = document.querySelector('#students')
//3.select programmingLect Pichet with css selector
const programmingLect = document.querySelector('.programming')
//4.select ulStudents3 ul student tag with attributes
const ulstudents3 = document.querySelector('ul#students')
console.log(ulstudents3)
Array.from(ulstudents3.children).forEach((st) => console.log(st))
//5.select ulEle with tag
const ulEle2 = document.getElementsByTagName('ul')
console.log(ulEle2)
//6.select ulEle with tag it parent

//console log All student name



// ================== main2 ============================
//select a collection of specified condition
//HTMLCollection data type-array like (can use index or length)
//cannot use array function (filter, map,...))

//1.select programmingLect2 with elementclassName

//2.select ulTagname with elementbytagname

//try to forEach


//NodeList data type - array-like but NodeList implements only forEach but can not use other array functions
//courseEle select class course with NodeList


const divEle = document.getElementById('bscit-courses')
//3.from divEle try to getall object from class courses

//4. log all course


// =================== main3 ==========================
//1. const programmingLect3 get object from .programming

//2. log all programmingLect3 with pl pl.nodeName,pl.nodeType,pl.nodeValue,pl.attributes

const pEle = document.getElementById('p-01')
//3. If pEle is get from HTMLcollection if we want to get all node from it what we shouuld to do?

//4. get Id value from pEle


const ulEle = document.querySelector('div>ul')

//5.print all value from ulElement
console.log()


// ================= main4 ===========================
//CRUD on any element node
//1.create element, <li></li>
let liele = document.createElement('li')

//2.create attributes <li id="devops" name="devopsLect"></li>
liele.setAttribute('id', 'devops')
liele.setAttribute('name', 'devopsLect')

//3. add text value to element,
//<li class="devops" name="devopsLect">Siam Yamsangsung</li>
liele.innerHTML = '<span style="color: red">Siam Yamsangsung</span>'

//4. add new li element to a parent node
ulEle.insertBefore(liele, ulEle.children[1])

let smthing = window.prompt('KUY')




// ================= main5 ===========================
//window.alert, window.prompt, window.confirm

//1. alert Do you want to Exit

//2. prompt to input user with placeholder and print username

//3. confirm `Goodbye `with username
