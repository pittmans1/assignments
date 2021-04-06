const express = require('express')
const messageRouter = express.Router()
const message = require('../models/message.js')
const Post = require('../models/')



messageRouter.post('/:userId', (req, res, next) =>{
    req.body.content = req.params.userId
    req.body.sender = req.params.sender._id
    req.body.reciever = req.params.reciever._id
})