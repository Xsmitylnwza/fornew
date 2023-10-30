const fruit = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
//splice with remove
const removeELements = fruit.splice(1, 2)
console.log(removeELements)
console.log(fruit)

//splice with add
const deleted = fruit.splice(2, 0, 'mango', 'DOCKER')
console.log(deleted)
console.log(fruit)

//splice with replace
const deletedFruit = fruit.splice(2, 1, 'mangosteen')
console.log(deletedFruit)
console.log(fruit)