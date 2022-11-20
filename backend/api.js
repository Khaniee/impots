const express = require('express');
const api = express.Router()

api.get('/', (req, res) => {
    res.status(400)
    res.json({message: "You hit our API so hard!"})
})

module.exports = api