function showTodoItem(newId, newDescription, done) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todoItem'); // เพิ่ม class 'todoItem'
    todoItem.id = newId // ตั้งค่า id

    const todoDetails = document.createElement('p');
    todoDetails.textContent = `${newDescription}`

    const nodoneButton = document.createElement('button')
    if (done) {
        nodoneButton.textContent = 'Done'
        nodoneButton.style.backgroundColor = 'green'
        nodoneButton.style.border = '2px solid black'
        nodoneButton.style.color = 'white'

    } else nodoneButton.textContent = 'Not Done'

    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'

    todoItem.appendChild(todoDetails)
    todoItem.appendChild(nodoneButton)
    todoItem.appendChild(removeButton)

    return todoItem

}

function showNumberOfDone(numberOfNotDone) {
    return `Number of Done: ${numberOfNotDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
    return `Number of Not Done: ${numberOfNotDone}`
}
function removeTodoItem(removeId) {
    let removediv = document.getElementById(removeId)
    removediv.remove()
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }