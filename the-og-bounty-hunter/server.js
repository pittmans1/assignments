const express = require("express")
const app = express()
const mongoose= require('mongoose')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bountiesdb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},
() => console.log("the DB is connected."))
app.use("/bounties", require("./routes/bounty"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(4600, ()=>{
    console.log("the server is running mate stop worrying π")
})