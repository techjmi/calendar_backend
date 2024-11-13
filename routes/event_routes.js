const express= require("express")
const {event_Controller, fetchEvent, editEvent, deleteEvent,} = require("../controller/event_controller")
const route= express.Router()
route.post('/create', event_Controller)
route.get('/events', fetchEvent)
// Edit event route
route.put('/edit/:id', editEvent);  // PUT request to edit an event by ID

// Delete event route
route.delete('/delete/:id', deleteEvent);
module.exports=route