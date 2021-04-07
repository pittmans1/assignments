const express = require('express')
const post = require('../models/post')
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

postRouter.get('/user', (req, res, next) =>{
    post.find({user: req.user._id}, (err, posts) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

