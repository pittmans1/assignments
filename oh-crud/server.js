const express =require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/cruddb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},
() => console.log("the db is now connected gtg mate."))

 app.use("/inventory" , require("./routes/inventory"))
 app.use((err, req, res, next) =>{
     console.log(err)
     return res.send({errMsg: err.message})
 })

app.listen(4800, () => {
    console.log("server is up and running.")
})