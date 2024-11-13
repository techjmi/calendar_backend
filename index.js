const express=require('express')
require("dotenv").config() 
const connectDB = require('./database/db')
const app= express()
var cors = require('cors')
const PORT=process.env.PORT||8000
const event_rouet= require('./routes/event_routes')


connectDB() 
app.use(cors())
// app.use(cors({
//     origin: 'https://calendar-8nsa.onrender.com',  // Allow requests from this specific origin
//     methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
//     credentials: true // Enable credentials if needed
//   }));
app.use(cors({
  origin: [/\.render\.com$/], // Allow requests from all subdomains on Render
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

app.use(express.json())
app.use('/calendar', event_rouet)  
app.listen(PORT,()=>{
    console.log(`the servr is running on port ${PORT}`)
})