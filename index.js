const express=require('express')
require("dotenv").config() 
const connectDB = require('./database/db')
const app= express()
var cors = require('cors')
const PORT=process.env.PORT||8000
const event_rouet= require('./routes/event_routes')


connectDB() 
app.use(cors())
app.use(express.json())
app.use('/calendar', event_rouet)  
app.listen(PORT,()=>{
    console.log(`the servr is running on port ${PORT}`)
})