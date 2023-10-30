
class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }
    getTodo() {
        return this
    }

    setDescription(newDescription) {
        if (this.todo) {
            this.description = newDescription
            console.log('change success')
        } else console.log('no permission')

    }
}
function todoManagement() {
    let todos = []
    function addTodo(description) {
        const newTodo = new Todo(todos.length + 1, description);
        todos.push(newTodo);
        console.log(todos)
        return todos.length;
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
        return todos.filter((element) => element.id != removeId)
    }

    return { addTodo, findTodo, findIndexTodo, removeTodo }
}

// let todoManager = todoManagement();
// todoManager.addTodo('xsmity01')
// todoManager.addTodo('xsmity02')
// todoManager.addTodo('xsmity03')

// console.log(todoManager.findTodo(1))
// console.log(todoManager.findIndexTodo(1))


// // มันแยก function class กันมันfindTodoตัวนี้เลยมองไม่เห็นสิ่งที่ addTodo add เข้าไป
// // const { addTodo } = todoManagement();
// // const { findTodo } = todoManagement();

// //solution เลยต้องทำแบบนี้ถึงจะอยู่ใน stack เดียวกัน
// const { addTodo, findTodo } = todoManagement()


// modul

module.exports = todoManagement


