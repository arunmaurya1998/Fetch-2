let root = document.getElementById("root")
console.log('hello')

async function showdata(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json()
        console.log(data)
        displayData(data)
    } catch (error) {
        alert(error)
    }
}

function displayData(task){
task.forEach(({id, title, completed}) => {
    let taskCard = document.createElement("div")
    taskCard.className = "taskCard"

    let taskTitleElement = document.createElement("p")
    taskTitleElement.textContent = `Title : ${title}`

    let taskCompletedElement = document.createElement("p")
    taskCompletedElement.textContent = `Is completed : ${completed}`;
    // `Task Completed : ${completed.toString()}`

    let taskIdElement = document.createElement("p")
    taskIdElement.textContent = `Id : ${id}`

    taskCard.append(taskIdElement, taskTitleElement,  taskCompletedElement)


    root.append(taskCard)

})
}

showdata()