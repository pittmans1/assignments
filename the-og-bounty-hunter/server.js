const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounties", require("./routes/bounty"))


app.listen(4600, ()=>{
    console.log("the server is running mate stop worrying π")
})