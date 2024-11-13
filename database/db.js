
const mongoose= require('mongoose')
const URI=process.env.MONGO_URI
const connectDB= async()=>{
    try {
        mongoose.connect(URI)
        console.log('Connection Successfull with mongoDB')
    } catch (error) {
        console.log('Error While connecting with Database')
        exit(0)
    }
  
}
module.exports= connectDB