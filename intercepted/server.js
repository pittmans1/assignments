const express= require("express")
const app = express()

app.use(express.json())

app.use("/random" , require("./randomGet"))



app.listen(8100, ()=>{
 console.log("your server is running appropriatley")
})