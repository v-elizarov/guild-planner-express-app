const express = require('express')
const app = express()
require('dotenv').config()

const placeRouter = require('./routes/place.routes')

const PORT = process.env.EXPRESS_PORT || 8080

app.use(express.json())
app.use('/api', placeRouter)

app.listen(PORT, () => {
    console.log(`Server works on ${PORT} port.`)
})