const express = require('express')

const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`What\'s up ${req.params.username}`)
})

app.listen(3000, () => {
    console.log('Listening on 3000')
})