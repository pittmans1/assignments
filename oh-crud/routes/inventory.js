const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')


inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })

    
})
inventoryRouter.get("/:inventoryId", (req, res) => {
    const inventoryId= req.params.inventoryId
    const foundInventory = inventoryId.find(inventory => inventory.Id === inventoryId)
    res.send(foundInventory)
    })
 inventoryRouter.post("/", (req, res, next) => {
     const newItem = new Inventory(req.body)
     newItem.save((err, savedItem) => {
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(200).send(savedItem)
     })
     
    })
    inventoryRouter.delete("/:inventoryId", (req, res, next) => {
        Inventory.findOneAndDelete({_id : req.params.inventoryId}, (err, deletedItem) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`successfully deteled ${deletedItem.name}.`)
        })
    })

    inventoryRouter.put("/:inventoryId", (req, res, next) => {
        Inventory.findOneAndUpdate(
            {_id: req.params.inventoryId},
            req.body,
            {new: true},
            (err, updatedInventory) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedInventory)
            }
        )
    })

    module.exports = inventoryRouter