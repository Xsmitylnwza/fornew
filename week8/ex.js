const numbers = [5, 1, 7, 3, 2];
numbers.sort(function (a, b) {
    return a - b
})
console.log(numbers)

numbers.sort((a, b) => b - a)
console.log(numbers)

numbers.sort()
console.log(numbers)

const characters = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
characters.sort()
console.log(characters)

const mixedValues = [10, 'apple', 5, 'banana', 'cherry', 3];
mixedValues.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b; // เรียงตัวเลข
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b); // เรียงอักขระ
    } else {
        return typeof a === 'number' ? -1 : 1; // แยกตัวเลขและอักขระ
    }
});
console.log(mixedValues); // ผลลัพธ์: [3, 5, 10, "apple", "banana", "cherry"]


const numbers2 = [-5, 3, 0, -2, 7, 1];
numbers2.sort((a, b) => {
    if (a < 0 && b >= 0) {
        return -1; // นำค่าลบไว้ข้างหน้า
    } else if (a >= 0 && b < 0) {
        return 1; // นำค่าบวกไว้ข้างหน้า
    } else {
        return a - b; // เรียงตามค่า
    }
});

console.log(numbers2); // ผลลัพธ์: [-5, -2, 0, 1, 3, 7]


const participants = [
    { name: 'Alice', score: 88 },
    { name: 'Bob', score: 88 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 75 },
];

participants.sort((a, b) => {
    if (a.score < b.score) {
        return -1
    } else if (a.score > b.score) {
        return 1
    } else return a.score - b.score
})


console.log(participants)





