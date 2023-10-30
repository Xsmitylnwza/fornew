const animal = ['ant', 'dogs', 'cats', 'bird', 'Bird']
const message = 'Practices make perfect'

// string includes - includes substring (case sensitive)
console.log(message.includes('ice'))
console.log(message.includes('make'))

// array includes - includes string in array elements (case sensitive)
console.log(animal.includes('ats'))
console.log(animal.includes('cats'))


animal.reverse()
console.log(animal)

animal.sort()
console.log(animal)

const nums = [5, 1, 10, 1000, 2, 3, 50]
nums.sort()
console.log(nums)

const numsza = nums.sort((a, b) => a - b)
console.log(numsza)

const person = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
]


// การบ้าน
// return sorted array by fullname (ascending order and ignore case)
//[ { id: 2, fullname: 'ann'}]

const sortignorecase = person.sort((a, b) => {
    if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
        return -1
    } else if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
        return 1
    } else return 0
})

console.log(sortignorecase)