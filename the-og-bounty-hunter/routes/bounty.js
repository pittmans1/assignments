const express = require("express")
const bountyRouter = express.Router()
const {v4: uuid} = require("uuid")


const bounties=[
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
    {firstName: "", lastName:"", living: true, bounty:"$22222", type:"sith", _id: uuid()},
]
bountyRouter.get("/", (req, res)=>{
    res.send(bounties)
})
bountyRouter.get("/:bountyId", (req,res) =>{
    const bountyId= req.params.bountyId
    const foundBounty = bountyId.find(bounty => bounty.id === bountyId)
    res.send(foundBounty)
})


bountyRouter.post("/",(req, res)=>{
    const newBounty = req.body
    newBounty._id=uuid()
    bounties.push(newBounty)
    res.send(`successfully added ${newBounty.firstName}`)
})
bountyRouter.delete("/:bountyId", (req, res)=>{
 const bountyId = req.params.bountyId
 const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountyId)
 bounties.splice(bountiesIndex, 1)
 res.send("the bounty has been removed")
})

bountyRouter.put("/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountiesIndex=bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountiesIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter