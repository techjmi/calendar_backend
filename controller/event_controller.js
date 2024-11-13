// const Event = require('../models/Event'); 

const Event = require("../modal/event_schema");

const event_Controller = async (req, res) => {
    const { title, description, eventDate } = req.body;

    try {
        // Check if all required fields are provided
        if (!title || !description || !eventDate) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Create a new event with the provided data
        const newEvent = new Event({
            title,
            description,
            eventDate
        });

        // Save the event to the database
        await newEvent.save();

        // Send success response
        res.status(201).json({
            message: 'Event created successfully',
            event: newEvent
        });

    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
const fetchEvent = async (req, res) => {
    try {
      const { eventDate } = req.query; // Expecting a date query parameter, e.g., /events?eventDate=2024-04-12
  
      // Fetch events based on the date if provided; otherwise, fetch all events
      const events = eventDate
        ? await Event.find({ eventDate }) // Filter by date if provided
        : await Event.find(); // Otherwise fetch all events
  
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events', error });
    }
  };
  
  const editEvent = async (req, res) => {
    try {
      const { id } = req.params; // Get the event ID from the request params
      const updatedEventData = req.body; // Get the updated event data from the request body
  
      // Find the event by ID and update it
      const updatedEvent = await Event.findByIdAndUpdate(id, updatedEventData, {
        new: true,  // Returns the updated document
        runValidators: true,  // Runs validation for the updated fields
      });
  
      // If the event is not found
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      // Send the updated event as response
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ message: 'Error updating event', error });
    }
  };
  const deleteEvent = async (req, res) => {
    console.log('delete called')
    try {
      const { id } = req.params;  // Get the event ID from the request params
  console.log('..the', id)
      // Find the event by ID and delete it
      const deletedEvent = await Event.findByIdAndDelete(id);
  
      // If the event is not found
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      // Send success response
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ message: 'Error deleting event', error });
    }
  };
module.exports = {event_Controller, fetchEvent, editEvent, deleteEvent};
