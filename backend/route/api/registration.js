const express = require('express')
const registrationController = require('../../controller/registrationController')
const secureAPI = require('../../middleWare/secureAPI')
const router = express.Router()
router.post('/',secureAPI,registrationController)


module.exports = router
