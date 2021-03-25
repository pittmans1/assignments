const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')

postRouter.get('/', (req, res, next) =>{
    Post.find((err, posts) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(posts)
    })
})