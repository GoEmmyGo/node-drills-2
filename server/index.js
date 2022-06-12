
require('dotenv').config()
const port = process.env.PORT || 3035
const express = require('express')
const cors = require('cors')
const app = express()
const {getInfo, addInfo} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/api/info', getInfo)
app.post('/api/info', addInfo)

app.listen(port, () => console.log(`SERVER RUNNING ON ${port}`))