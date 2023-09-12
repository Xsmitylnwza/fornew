let nums = [1, 2, 3, 4, 5]
console.log(nums[0]) // reading nums array at index 0

let values
// console.log(values[0]) ถ้าทำแบบนี้จะทำให้โปรแกรม error เพราะว่าเราไปเจาะจงหาค่าที่ต้องการแต่มันยังไม่มีเราจึงจำเป็นต้องใช้ optional chaining ในการสำรอง
// เพื่อให้โปรแกรมสามารถรันไปต่อได้โดยไม่สนการเจาะจงค่าที่ต้องการ
console.log(values?.[0]) // optional chaining

let obj = { id: 1, title: 'JS' }
console.log(obj.id)

let obj2
console.log(obj2?.id) // optional chaining