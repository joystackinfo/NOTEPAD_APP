const express = require("express");
const router = express.Router();
const Note = require("../models/note.model.js");
const verifyToken = require('../middleware/authmiddleware.js');
const { createNote, getUserNotes, updateNote, deleteNote } = require("../controllers/note.controller.js");


//Create user
router.post("/" , verifyToken , createNote); // create note route


//Get user notes
router.get("/" , verifyToken , getUserNotes); // get user notes route


//Update note
router.put('/:id', verifyToken, updateNote); //update note route


//Delete note
router.delete('/:id', verifyToken, deleteNote); // delete note route


// Example test route
router.get("/", (req, res) => {
  res.send("Notes route working!");
});

module.exports = router;
