const express = require('express')
const router = express.Router()
const notes = require('./routes/notes.js')

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.use(notes)

module.exports = router
