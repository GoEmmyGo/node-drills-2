
require('dotenv').config()
const port = process.env.PORT || 3035
const express = require('express')
const cors = require('cors')
const app = express()
const {getinput, addinput} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/api/input', getinput)
app.post('/api/input', addinput)

app.listen(port, () => console.log(`SERVER RUNNING ON ${port}`))