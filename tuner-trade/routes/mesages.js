const express = require('express')
const messageRouter = express.Router()
const message = require('../models/message.js')
const Post = require('../models/')



messageRouter.post('/message', (req, res, next) =>{
    
    req.body.sender = req.params.sender._id
    req.body.reciever = req.params.reciever._id
    const message = new Message(req.body)
    message.save((err, newMessage) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newMessage)
    })
})