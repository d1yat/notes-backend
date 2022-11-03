const express = require('express')
const router = express.Router()
const notes = require('./notes.js')
const product = require('./product.js')

router.use([
  notes,
  product
])

module.exports = router
