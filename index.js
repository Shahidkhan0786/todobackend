const express = require("express")
const app = express()
require('dotenv').config()
const dbconnection = require("./config/database") 
var cors = require('cors') 
const morgan = require('morgan')
let todoRoutes = require("./routes/TodoRoutes")
const PORT = process.env.PORT || 8001
app.use(express.json());
app.use(cors())
app.use(morgan("common"));
dbconnection();
app.use("/api" , todoRoutes)


app.listen(PORT ,()=>{
    console.log(`App is running and up on port ${PORT}`)
})