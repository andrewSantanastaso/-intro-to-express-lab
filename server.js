const express = require('express')

const app = express()

app.get('/greetings/:username', (req, res) => {
    res.send(`What\'s up ${req.params.username}`)
})

app.get('/roll/:rollNumber', (req, res) => {
    let userReq = parseInt(req.params.rollNumber)
    if (!userReq) {
        res.status(404).send('You must specify a number')

    }
    else {
        res.send(`You rolled ${Math.floor(userReq * Math.random())}`)
    }
})

app.listen(3000, () => {
    console.log('Listening on 3000')
})