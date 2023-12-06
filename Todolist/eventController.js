import { TodoListManagement } from './lib/todomanagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from './UI/todoList.js'
let { addTodo, findTodo, findIndexTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone, loadTodos } = TodoListManagement()


let addbtn = document.querySelector('#addBtn')
let addtodo = document.querySelector('div#addTodo>input')
let ListTodo = document.querySelector('#listTodo')
let todoItem = document.querySelector('.todoItem')
let numdone = document.querySelector('#done')
let numnotdone = document.querySelector('#notDone')
function getnum() {
    let NumberOfDone = getNumberOfDone()
    let NumberOfNotDone = getNumberOfNotDone()
    numdone.textContent = showNumberOfDone(NumberOfDone)
    numnotdone.textContent = showNumberOfNotDone(NumberOfNotDone)
}

function addTodoHandler() {
    let newtodo
    if (addtodo.value != '') {
        newtodo = addTodo(addtodo.value)
        console.log(addtodo.value)
        console.log(getTodos())
    }
    ListTodo.appendChild(showTodoItem(newtodo.id, newtodo.description))

    let newItem = document.querySelector('.todoItem:last-child')

    let allbtn = newItem.querySelectorAll('button')
    allbtn[0].addEventListener(('click'), notDoneButtonHandler)
    allbtn[1].addEventListener(('click'), removeButtonHandler)
    getnum()
}

function notDoneButtonHandler(e) {
    let target = e.target
    let parentNode = target.parentNode

    if (target.textContent == 'Not Done') {
        target.textContent = 'Done'
        target.style.backgroundColor = 'green'
        target.style.border = '2px solid black'
        target.style.color = 'white'
    } else {
        target.textContent = 'Not Done'
        target.style.backgroundColor = ''
        target.style.border = ''
        target.style.color = 'black'

    }
    console.log(parentNode.id)
    setItemToDone(parentNode.id)


    getnum()
}
function removeButtonHandler(e) {
    let target = e.target
    let parentNode = target.parentNode
    let removeId = parentNode.id

    console.log(removeId)
    removeTodoItem(removeId)
    removeTodo(removeId)

    getnum()
}
function loadHandler() {
    let userTodos = localStorage.getItem('todos')
    let todo = JSON.parse(userTodos)
    console.log(todo)
    if (todo.length != 0 && todo != null && todo != undefined) {
        loadTodos(todo)
    }
    let todos = getTodos()
    todos.forEach((todo) => {
        ListTodo.appendChild(showTodoItem(todo.id, todo.description, todo.done))
        let newItem = document.querySelector('.todoItem:last-child')
        let allbtn = newItem.querySelectorAll('button')
        allbtn[0].addEventListener(('click'), notDoneButtonHandler)
        allbtn[1].addEventListener(('click'), removeButtonHandler)
    })
    getnum()
}
function beforeUnloadHandler(event) {
    event.preventDefault()
    localStorage.setItem('todos', JSON.stringify(getTodos()))
    clearTodo()

}

addbtn.addEventListener('click', addTodoHandler)

export { addTodoHandler, loadHandler, beforeUnloadHandler }