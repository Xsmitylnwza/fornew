// เน้นอ่านเหมือนเดิม
//1. create object with object literals

//// composite object หรือก็คือ object ที่ซ้อนกับ object อีกทีนึงนั่นเอง

//2. โจท์ย์ใน Microsoft team
function isImageFileExtension(fileName) {
    const extension = ['.png', '.jpg', '.jpeg', '.gif', '.svg']
    extension.forEach((ex) => {
        if (fileName.includes(ex)) {
            console.log(true)
        }
    })

    return false
}

console.log(isImageFileExtension('haha.jpg'))