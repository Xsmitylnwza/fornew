const { TodoManagement } = require('./TodoManagement')
const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } = TodoManagement()

addTodo('yeahman')
addTodo('wtfman')

console.log(getTodos())