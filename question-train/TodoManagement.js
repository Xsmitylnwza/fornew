const Todo = require('./Todo');
function TodoManagement() {
    let todos = []

    function addTodo(desc) {
        todos.push(new Todo(todos.length + 1, desc))
    }
    function findTodo(searchId) {
        return todos.find(todo => todo.id = searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex(todo => todo.id = searchId)
    }
    function removeTodo(removeId) {
        todos.filter((todo) => todo.id != removeId)
    }
    function getTodos() {
        return todos
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos }
}

module.exports = TodoManagement