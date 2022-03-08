const TODOS_URL = 'https://jsonplaceholder.typicode.com/users'

const resalt = fetch(TODOS_URL, {
    method: 'GET'
})
const container = document.querySelector('#data-container')

const toggleAtribute = () => {
    const loaderHtml = document.querySelector('#loader')
    console.log(loaderHtml)
    const isLoader = loaderHtml.hasAttribute('hidden')
    if (isLoader) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}

const addTodoList = (text) => {
    const liTodoElem = document.createElement('li')
    const linkTodoElem = document.createElement('a')
    linkTodoElem.href = '#'
    linkTodoElem.textContent = text
    liTodoElem.append(linkTodoElem)
    container.append(liTodoElem)

    return liTodoElem
}


const getAllTodos = () => {
    toggleAtribute()
    resalt
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then((todos) => {
            todos.forEach(item => {
                const todoElement = addTodoList(item.name)
                console.log(todoElement)
            })
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleAtribute()
        })
}

getAllTodos() 
    