
const mongoose= require('mongoose')
const URI=process.env.MONGO_URI
// const URI='mongodb+srv://contactshamim62:Koltech123@cluster0.siioaq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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