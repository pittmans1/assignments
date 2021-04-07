const express =  require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')
const Post = require('../models/post')

commentRouter.post('/:postId', (req, res, next) =>{
    req.body.post = req.params.postId
    req.body.user = req.user._id
    const comment = new Comment(req.body)
    comment.save((err, newComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        Post.findOneAndUpdate(
            {_id: req.params.postId},
            {$push:{comment: newComment}},
            (err, updatedPost)=>{
            res.status(500)
            return next(err)
            }
        )
        return res.status(201).send(newComment)
    })
})

commentRouter.get('/:commentId', (req, res, next) =>{
    Comment.findById(req.params.postId.commentId, (err, comment) =>{
        if(err){
            res.status(500)
            return next(err)
        }else if(!comment){
            res.status(404)
            return next ( new Error('Sorry, No comment found. '))
        }
        return res.send(comment)
    })
})

commentRouter.put('/:commentId', (req, res, next) =>{
    Comment.findByIdAndUpdate(
        {_id: req.params.postId.commentId, user: req.user._id},
        req.body,
        {new: true},
        (err, comment) =>{
            if(err){
                console.log('Error')
                res.status(500)
                return next(err)
            }
            return res.send(comment)
        }
    )
})

commentRouter.delete('/:commentId', (req, res, next)=>{
    Comment.findByIdAndDelete({_id: req.params.postId.commentId, user: req.user._id}, (err, comment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(comment)
    })
})


module.exports = commentRouter