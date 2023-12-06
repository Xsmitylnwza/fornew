//select a collection of specified condition
// ใช้ระดับ document
const programmingLect2 = document.getElementsByClassName('programming')
//HTMLCollection data type-array like (can use index or length)
//cannot use array function (filter, map,...))
console.log(programmingLect2)
console.log(programmingLect2.length)

const programmingLect3 = document.querySelector('.programming')
console.log(programmingLect3)
const ulTagname = document.getElementsByTagName('ul')
console.log(ulTagname)
console.log(ulTagname.length)
//return HTMLCollection

const courseEle = document.querySelectorAll('.courses')
console.log(courseEle)
//NodeList data type - array-like but NodeList implements only forEach but can not use other array functions

const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.courses')
console.log(courseUnderDiv)

const courseUnderDoc = document.querySelectorAll('.courses')
console.log(courseUnderDoc)
courseUnderDoc.forEach((doc) => console.log(doc))