const fruit = ['apple', 'mango', 'orange', 'pineapple']

// ไปแก้ด้วย
const yeah = fruit.reduce((firstChar, fruit) =>
    firstChar.concat(fruit[0]), '')

console.log(yeah)

const nums = [1, 2, 3, 4, 5] // 1 * 2 * 3 *4 *5
const eiei = nums.reduce((total, num) => total * num)
console.log(eiei)

const sellProducts = [
    { id: 1, price: 100, sell: 5 },
    { id: 2, price: 50, sell: 2 },
    { id: 3, price: 25, sell: 10 }
]

const result = sellProducts.reduce((total, num) => total + (num.price * num.sell), 0)
//(num.price * num.sell)
console.log(result)


