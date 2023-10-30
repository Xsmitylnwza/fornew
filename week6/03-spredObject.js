const obj1 = { id: 1, name: 'Somchai' }
const obj2 = { ...obj1, id: 5 } // sprad operator มันจะ coppy แค่ data มันมาแต่ไม่ได้ copy memory address มาด้วย

console.log(obj2)
// กฏของมันคือถ้าชื่อ property ซ้ำมันจะทำการ replace ทันที
