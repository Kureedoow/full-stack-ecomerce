const express = require('express')
const router = express.Router()

// import registration routes
const registration = require('./registration')

router.use('/registration', registration)

module.exports = router
