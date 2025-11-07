
const Note = require('../models/note.model');


//CREATE NOTE CONTROLLER 
const createNote = async (req, res) => {

    try {
        const { content } = req.body; //gets the note content
        if (!content) {
            return res.status(400).json({ msg: "Note content is required" });
        }
        const newNote = await Note.create({
            userId: req.user.id, // get user ID from verified token
            content
        })
        res.status(201).json({ msg: "Note created successfully", note: newNote })

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }


}


//GET ALL NOTES CONTROLER
  const getUserNotes = async (req, res) => {
     
    try {
        const userId  = req.user.id; // get user ID from verified token
        const notes = await Note.find({userId}); // find all the note linked to the user
        r
        
    } catch (error) {
        
    }






)