const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


//Get All
bountyRouter.get("/", (req, res, next)=>{
    Bounty.find((err, bounties)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
bountyRouter.get("/:bountyId", (req,res) =>{
    const bountyId= req.params.bountyId
    const foundBounty = bountyId.find(bounty => bounty.id === bountyId)
    res.send(foundBounty)
})

bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
bountyRouter.post("/",(req, res, next)=>{
 const newBounty = new Bounty(req.body)
 newBounty.save((err, savedBounty) =>{
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(200).send(savedBounty)
 })
})
bountyRouter.delete("/:bountyId", (req, res, next)=>{
Bounty.findOneAndDelete({ _id: req.params.bountyId}, (err, deletedItem) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`successfully deleted ${deletedItem.firstName} from the database! `)
})
})

bountyRouter.put("/:bountyId", (req, res, next) =>{
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, //what to update 
        req.body, //update object with said data
        {new: true}, // send back the updated version
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter