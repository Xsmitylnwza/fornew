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
const haha = studentScoresv2.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase() + ' ' + student.score)
console.log(haha)
//2. return student who has name equals to david with in casesensitive and score more than 80
const davidkung = studentScoresv2.filter((student) => student.name.toLowerCase() === 'david' && student.score > 80)
console.log(davidkung)

//3. find index student name eve ignore case
const findindex = studentScoresv2.findIndex((student) => student.name.toLowerCase() === 'eve')
console.log(findindex)


const fruit = ['!']
//4.return boolean to check whether fruits collection startwiths vowel character
console.log(fruit.some((fza) => /[!@#$%^]/.test(fza)))

const testza = ['kuy', 'rai', 'sus']
console.log(/hey/.test(testza))
// ANS in 02
//1.concat the first index of array of fruit and return to string
const fruit2 = ['apple', 'mango', 'orange', 'pineapple']
console.log(fruit2.reduce((real, fruit) => {
    return real += fruit.charAt(0)
}, ""))

//2. find multiple of all this array value
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((real, num) => {
    return real *= num
}))


//3. create function that return total_price of all product
const sellProducts = [
    { id: 1, price: 100, sell: 5 },
    { id: 2, price: 50, sell: 2 },
    { id: 3, price: 25, sell: 10 }
]
function total_price(arr) {
    return arr.reduce((sum, entry) => {
        return sum += (entry.price * entry.sell)
    }, 0)
}
console.log(total_price(sellProducts))



// ANS in 03
const fruit3 = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//1. splice with remove mango and orange
console.log(fruit3.splice(1, 2))
fruit3
//2. splcie with add docker and mango in index 2
console.log(fruit3.splice(2, 0, 'docker', 'mango'))
fruit3
//3. replace mango with mangoteen
fruit3.splice(3, 1, 'mangoteen')
fruit3



// ANS in 04
const animal = ['ant', 'dogs', 'cats', 'bird', 'Bird']
const message = 'Practices make perfect'
// string includes - includes substring (case sensitive)
//1.is messege have ice in string?
console.log(animal.includes('ice'))


//2.is messege have make in string ?
// array includes - includes string in array elements (case sensitive)
//3. is animal have nats?
//4. is animal have cats?
//5. revese order of animal

//6. sort animal


const nums2 = [5, 1, 10, 1000, 2, 3, 50]
//7. sort num with asending order
console.log(nums2.sort((a, b) => a - b))
//8. sort num with decending order
console.log((nums2.sort((a, b) => b - a)))
////9.return sorted array by fullname (ascending order and ignore case)
const person = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
]
person.sort((a, b) => {
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) {
        return 1
    } else if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) {
        return -1
    } else return 0
})
console.log(person)
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
console.log(numbers2.sort((a, b) => a - b))


//12. sort data by score decending order
const participants = [
    { name: 'Alice', score: 88 },
    { name: 'Bob', score: 88 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 75 },
];
participants.sort((a, b) => {
    return b.score - a.score
})
console.log(participants)







