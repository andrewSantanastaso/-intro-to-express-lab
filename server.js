const express = require('express')
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];


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

app.get('/collectibles/:idx', (req, res) => {
    let userReq = parseInt(req.params.idx)
    if (userReq >= 0 && userReq < collectibles.length) {

        res.send(`You\'ve selected ${collectibles[userReq].name}, that will be $${collectibles[userReq].price}.Thank you!`)
    }
    else {
        res.send('This item is not yet in stock')
    }
})

app.listen(3000, () => {
    console.log('Listening on 3000')
})