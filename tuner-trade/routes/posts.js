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

postRouter.get('/user', (req, res, next) =>{
    Post.find({user: req.user._id}, (err, posts) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})
postRouter.post('/', (req, res, next) =>{
    req.body.user = req.user._id
    const post = new Post(req.body)
    post.save((err, newPost) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newPost)
    })

})
//get a post byt the id
postRouter.get('/:postId', (req, res, next) => {
    Post.findById(req.params.postId, (err, post) =>{
        if(err){
            res.status(500)
            return next(err)
        } else if(!post){
            res.status(404)
            return next(new Error('No post item has been found.'))
        }
        return res.send(post)
    })
})
postRouter.put('/:postId', (req, res, next) =>{
    Post.findByIdAndUpdate(
        {_id: req.params.postId, user: req.user._id},
        req.body,
        {new: true},
        (err, post) =>{
            if(err){
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(post)
        }
    )
})
postRouter.delete('/:postId', (req, res, next) =>{
    Post.findByIdAndDelete({_id:req.params.postId, user: req.user._id}, (err, post) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(post)
    })
})


module.exports = postRouter