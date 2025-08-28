const express = require('express')
const router = express.Router()

// import authentication routes
const authentication = require('./api/authentication')

router.use('/api/v1/authentication', authentication)

module.exports = router
