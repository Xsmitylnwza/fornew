// เน้นอ่านเหมือนเดิม
//1. create object with object literals

//// composite object หรือก็คือ object ที่ซ้อนกับ object อีกทีนึงนั่นเอง

//2. โจท์ย์ใน Microsoft team
function isImageFileExtension(fileName) {
    return /.jpg$|.png$|.jpeg$|.gif$|.svg$/.test(fileName)
}

console.log(isImageFileExtension('afa.svg'))

function isImageFileExtension2(fileName) {
    return /[a-z]/.test(fileName)
}
console.log(isImageFileExtension2('a'))