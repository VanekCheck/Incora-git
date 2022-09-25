import {User,Task, Project, App} from './classes.js'

const userIvan = new User('Ivan')
const userRoman = new User('Roman')

const task1 = new Task('title1', 10, false, userIvan)
const task2 = new Task('title2', 12, false, userIvan)
const task3 = new Task('title3', 4, true, userRoman)

const project1 = new Project([task1, task2, task3])

project1.editTask(task1.id, { title: 'hello', durationInMin: 20 })

console.log(project1)

// project1.deleteTask(task2.id);

console.log(project1)

console.log(project1.getTotalTime())

project1.getAllTasksByDeveloper(userIvan.id).forEach(task => console.log(task.getInfo()))
