const str = [...'hello world']

for (const [index, value] of str.entries()) {
    console.log(`${index} and  ${value}`)
}

console.log('=============================')
for (const value of str) {
    console.log(value)
}

console.log('=============================')

for (const value of str.entries()) {
    console.log(`${value}`)
}