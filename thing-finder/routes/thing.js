const express = require("express")
const thingsRouter = express.Router()
const {v4: uuid}= require("uuid")

const things=[
    {name:"jake", place: "shaw", time:"3pm", _id:uuid()},
    {name:"damian", place: "home", time:"6pm", _id:uuid()},
    {name:"scott", place: "mcdonalds", time:"6am", _id:uuid()},
    {name:"kayla", place: "toilet", time:"all day", _id:uuid()}
]

thingsRouter.get("/", (req,res)=>{
    res.send(things)
})

thingsRouter.get("/search/time", (req, res)=>{
    const time = req.query.time
    const filteredThings= things.filter(thing => thing.time === time)
    res.send(filteredThings)
})

module.exports = thingsRouter