import { addTodoHandler, loadHandler, beforeUnloadHandler } from './eventController.js'


window.addEventListener('load', loadHandler)
window.addEventListener('beforeunload', beforeUnloadHandler);







