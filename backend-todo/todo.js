const express = require("express")
const todoRouter= express.Router()
const {v4: uuid} = require("uuid")

const todos= [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }
]

todoRouter.get("/",(res, req, next) =>{
    res.send(todos)
})
todoRouter.get("/:todosId", (res, req, next) =>{
const todosId = req.params.todosId
const foundTodo = todos.find(todo => todo._id === todosId)
res.send(foundTodo)
})
todoRouter.delete("/:todosId" , (res, req, next) =>{
    const todosId= req.params.todosId
    const todosIndex = todos.findIndex(todo => todo._id === todosId)
    todos.splice(todosIndex, 1)
    res.send(`successfully deleted ${todosId}`)
})
todoRouter.put("/:todosId" , (req, res ,next) =>{
    const todosId = req.params.todosId
    const updateTodo = req.body
    const todosIndex = todos.findIndex(todo => todo._id === todosId)
    const updatedTodo = Object.assign(todos[todosIndex], updateTodo)
    res.send(updatedTodo)
})






module.exports= todoRouter