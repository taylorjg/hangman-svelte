const path = require('path')
const express = require('express')
const api = require('./api')

const port = process.env.PORT || 3060
const publicFolder = path.join(__dirname, '..', 'public')

const app = express()
app.use(express.static(publicFolder))
app.use('/api', api)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
