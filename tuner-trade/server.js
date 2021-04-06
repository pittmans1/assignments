const express = requre('express')
const socket = require('socket.io')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt= require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/user-authetication',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    },
    ()=> console.log('connected to the database')
)

app.use('/auth', require('./routes/'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/post', require('./routes/posts'))
app.use('/api/message', require('./routes/mesages'))

app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "UnathorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

 app.listen(8500, ()=>{
    console.log('server is running on local server 8500')
})

