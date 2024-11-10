const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))
if(todos) {
    todos.forEach(todo => {
        addTodo(todo)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = (todo ? todo.text : input.value)
    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText=todoText
        todoEl.addEventListener('click', () => {
            setTimeout(() => {
                todoEl.classList.toggle('completed')
                updateLS()
            },50)

        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            setTimeout(() => {
                todoEl.remove() 
                updateLS()
            },30)
            
        })
        todosUL.appendChild(todoEl)
        setTimeout(() => input.value='' ,10)
        updateLS()
    }
}


function updateLS() {
    console.log('popp')
    const todosEl = document.querySelectorAll('li');

    let todos = []
    todosEl.forEach(todo => {
        todos.push({
            text : todo.innerText ,
            completed : todo.classList.contains('completed')
        }) 
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}