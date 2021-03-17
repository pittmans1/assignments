const express = require("express")
const app = express()
app.use(express.json())

app.use("/things", require("./routes/thing"))

app.listen(4400, ()=>{
    console.log("its running now!")
})