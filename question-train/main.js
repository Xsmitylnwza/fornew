const TodoManagement = require('./TodoManagement')
const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } = TodoManagement()

addTodo('kuy')
addTodo('kuy2')
addTodo('kuy3')
addTodo('kuy4')

console.log(getTodos())