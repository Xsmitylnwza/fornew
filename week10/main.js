const { todoManagement, doSomething } = require('./TodoManagement')
let { addTodo, findTodo } = todoManagement()
console.log(addTodo('xsmity'))
console.log(findTodo(1))
console.log(doSomething('eiei'))

