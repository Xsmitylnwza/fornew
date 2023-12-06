const programmingLect3 = document.querySelectorAll('.programming')
//NodeList, implement only forEach, not all array function implemented

console.log(programmingLect3)
programmingLect3.forEach((pl) => {
    console.log(pl)
    console.log(pl.nodeName)
    console.log(pl.nodeType)
    console.log(pl.nodeValue)
    console.log(pl.attributes) // get all attributes of element
    Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.length)
Array.from(pEleAttributes).forEach((attr) => {
    console.log(attr.name)
    console.log(attr.value)
})
// ใช้สำหรับรู้อยู่แล้วว่า attribute อะไรที่เราสนใจ
console.log(pEle.getAttribute('class'))

const ulEle = document.getElementsByTagName('ul')
//return  HTMLCollection - array - like, not implement forEach

const ulEleArray = Array.from(ulEle)
Array.from(ulEleArray).forEach((ul) => console.log(ul))

const xsmity = document.querySelectorAll('div>ul>li')
console.log(xsmity)
xsmity.forEach(x => console.log(x.textContent))