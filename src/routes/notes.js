const express = require('express')
const router = express.Router()
const { 
    getAllNotesHandler, 
    addNoteHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
} = require('../controllers/NoteController.js')

router.get('/notes', getAllNotesHandler)
router.post('/notes', addNoteHandler)
router.put('/notes/:id', editNoteByIdHandler)
router.delete('/notes/:id', deleteNoteByIdHandler)

module.exports = router