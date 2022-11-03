const express = require('express')
const app = express()
const port = 5000
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
const cors = require('cors')
const routes = require('./routes')

app.use(express.json({
    type: 'application/json'
}))
app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})
