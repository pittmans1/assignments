const express = require("express")
const randomGetRouter= express.Router()

const random = [
    {word:""}
]
randomGetRouter.get("/", (req, res, next) =>{
    req.body = {word: "i farted"}
    console.log("farts")
    next()
})
randomGetRouter.get("/" ,(req, res, next)=>{
res.send(req.body)
console.log("yes")
})

module.exports= randomGetRouter