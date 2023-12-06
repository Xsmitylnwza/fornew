import { Todo } from "./todo.js"

function TodoListManagement() {
    let todos = []

    function addTodo(desc) {
        let newtodo = new Todo(desc)
        todos.push(newtodo)
        return newtodo
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id = searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id = searchId)
    }
    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id != removeId)
        return todos
    }
    function getTodos() {
        return todos
    }
    function getNumberOfDone() {
        let donetodos = todos.filter((todo) => todo.done === true)
        return donetodos.length
    }
    function getNumberOfNotDone() {
        let notdonetodos = todos.filter((todo) => todo.done === false)
        return notdonetodos.length
    }
    function clearTodo() {
        todos = []
    }
    function setItemToDone(doneId) {
        todos.forEach((todo) => {
            if (todo.id == doneId) {
                todo.setDone()
            }
        })
    }
    function loadTodos(userTodos) {
        userTodos.forEach((todo) => {
            let newtodo = new Todo(todo.description, todo.id)
            newtodo.done = todo.done ? todo.done : false
            todos.push(newtodo)
        })
    }

    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone, loadTodos }
}

export { TodoListManagement }