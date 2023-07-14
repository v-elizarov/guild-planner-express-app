const express = require('express')
const app = express()
require('dotenv').config()

const placeRouter = require('./routes/place.routes')
const buildRouter = require('./routes/build.routes')
const roleRouter = require('./routes/role.routes')

const PORT = process.env.EXPRESS_PORT || 8080

app.use(express.json())
app.use('/api', placeRouter)
app.use('/api', buildRouter)
app.use('/api', roleRouter)

app.listen(PORT, () => {
    console.log(`Server works on ${PORT} port.`)
})