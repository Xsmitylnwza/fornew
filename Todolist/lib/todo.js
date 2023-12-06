class Todo {
    static runningId = localStorage.getItem('runningId') || 1;
    constructor(description, id = Todo.runningId++) {
        this.id = id
        this.description = description
        this.done = false
        localStorage.setItem('runningId', Todo.runningId);
    }
    getTodo() {
        return this.id + ' ' + this.description
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDone() {
        this.done = !this.done
    }

}

export { Todo };