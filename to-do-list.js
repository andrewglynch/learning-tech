const prompt = require('prompt-sync')()

const tasks = []

let newTask = prompt(`What's on your to do list today?    `)

tasks.push(newTask)

let addingTasks = true

while (addingTasks) {
  newTask = prompt('OK, add another task here (or type "done" to finish):    ')
  if (newTask === 'done') {
    addingTasks = false
  } else {
    tasks.push(newTask)
  }
}

console.log(`OK, so your to do list today is:`)
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i+1}: ${tasks[i]}.`)
}
console.log()
console.log(`Time to get after it!`)