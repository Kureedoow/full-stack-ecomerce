const express = require('express')
const router = express.Router()

// import registration routes
const registration = require('./registration')
let Api=process.env.API_BASE_URL
router.use('/registration',registration)

module.exports = router
