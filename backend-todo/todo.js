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






module.exports= todoRouter