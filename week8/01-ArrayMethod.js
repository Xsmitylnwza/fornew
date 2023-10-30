function getPassingNames(students) {
    return students.filter((student) => student.score >= 70)
        .map((filterStudent) => filterStudent.name.toUpperCase())
}
// Example usage:
const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }]

const passingNames = getPassingNames(studentScores)
console.log(passingNames)// Output should be: ["ALICE", "BOB", "EVE"    

// find() , findindex()
const studentScoresv2 = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 79 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
]

// ต้องไปทำเพิ่ม
// return student who has name equals to david with in 
// casesensitive and score more than 80
const fountIndex = studentScoresv2.findIndex((student) => student.name.toLowerCase() === 'eve')
console.log(fountIndex)


function ex2(student) {
    return student.filter((student) => student.name.toLowerCase() === 'david' && student.score >= 80)
}

console.log(ex2(studentScoresv2))


const fruit = ['apple', 'mango', 'orange', 'pineapple']
//return boolean to check whether fruits collection startwiths vowel character

function ex3(fruit) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    fruit.some((fruit) => {
        console.log(fruit)
        fruit.toLowerCase().startsWith('a' || 'e' || 'i' || 'o' || 'u')
    })

}

console.log(ex3(fruit))


const maxnum = Math.max(20, 15)
console.log(maxnum)