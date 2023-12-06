const studentScoresv2 = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 79 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
]
// ANS in 01
//1. write function that return student name with uppercase with score more equal or more 70
const yeahright = studentScoresv2.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase())
console.log(yeahright)
//2. return student who has name equals to david with in casesensitive and score more than 80
const davidkung = studentScoresv2.filter((student) => student.name.toLowerCase() === 'david' && student.score > 80)
console.log(davidkung)

//3. find index student name eve ignore case
console.log(studentScoresv2.findIndex((student) => student.name.toLowerCase() === 'eve'))

const fruit = ['apple', 'mango', 'orange', 'grape']
//4.return boolean to check whether fruits collection startwiths vowel character
console.log(fruit.some((fza) => /^[aeiou]/.test(fza)))

// ANS in 02
//1.concat the first index of array of fruit and return to string
const fruit2 = ['apple', 'mango', 'orange', 'pineapple']
const concat = fruit2.reduce((sum, fruit) => {
    return sum += fruit.charAt(0)
}, "")
console.log(concat)


//2. find multiple of all this array value
const nums = [1, 2, 3, 4, 5]
const multiple = nums.reduce((sum, num) => {
    return sum *= num
})
console.log(multiple)



//3. create function that return total_price of all product
const sellProducts = [
    { id: 1, price: 100, sell: 5 },
    { id: 2, price: 50, sell: 2 },
    { id: 3, price: 25, sell: 10 }
]

// ANS in 03
const fruit3 = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//1. splice with remove mango and orange
fruit3.splice(1, 2)
fruit3
//2. splcie with add docker and mango in index 2
fruit3.splice(2, 0, "docker", 'mango')
fruit3
//3. replace mango with mangoteen
fruit3.splice(3, 1, 'mangoteen')
console.log(fruit3)




// ANS in 04
const animal = ['ant', 'dogs', 'cats', 'bird', 'Bird']
const message = 'Practices make perfect'
// string includes - includes substring (case sensitive)
//1.is messege have ice in string?



//2.is messege have make in string ?
// array includes - includes string in array elements (case sensitive)
//3. is animal have nats?
//4. is animal have cats?
//5. revese order of animal

//6. sort animal
animal.sort()

const nums2 = [5, 1, 10, 1000, 2, 3, 50]
//7. sort num with asending order
console.log(nums2.sort((a, b) => a - b))
//8. sort num with decending order
console.log(nums2.sort((a, b) => b - a))

////9.return sorted array by fullname (ascending order and ignore case)
const person = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
]

console.log(person.sort((p1, p2) => {
    if (p1.fullname < p2.fullname) return 1
    if (p1.fullname > p2.fullname) return -1
}))
//ANS in ex
//10. return [3, 5, 10, "apple", "banana", "cherry"]
const mixedValues = [10, 'apple', 5, 'banana', 'cherry', 3];
mixedValues.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b)
    } else return typeof a === 'number' ? -1 : 1
})
console.log(mixedValues)


//11. return [-5, -2, 0, 1, 3, 7]
const numbers2 = [-5, 3, 0, -2, 7, 1];



//12. sort data by score decending order
const participants = [
    { name: 'Alice', score: 88 },
    { name: 'Bob', score: 88 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 75 },
];
participants.sort((p1, p2) => {
    return p2.score - p1.score
})

console.log(participants)







