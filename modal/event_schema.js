
const mongoose= require('mongoose')

const event_schema= new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    eventDate:{
        // type:Date, "default":Date.now()
        type:Date
    },
    reminderEnabled: { type: Boolean, default: true },
})
//create a model
const Event= mongoose.model('Event', event_schema)
module.exports=Event