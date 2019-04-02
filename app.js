const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' })
})

app.listen(PORT)

module.exports = app