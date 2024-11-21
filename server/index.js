const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const port = process.env.PORT

app.use(cors({origin:'http://localhost:3000'}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const router = require("./routes/router")
app.use("/empRouter",router)

const main=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Succesfully connected to mongoDB")).catch((err)=>{console.log(err)})
}
main()

app.listen(port,()=>{
    console.log(`Server run at the port ${port} http://localhost:${port}`)
})