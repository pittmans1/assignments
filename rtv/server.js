const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require('express-jwt')

process.env.SECRET


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/RTV',
    {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    },
    ()=> console.log('database is connected, congrats')
)


app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/post', require('./routes/post.js'))
app.use('/api/comment', require('./routes/comment.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name=== "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log('server is running on your local port 8000')
})