const express = require('express')
const handleUserLogin = require('../controllers/lofinController')
const handleSignupcontroller = require('../controllers/signupController.js')
const router = express.Router()


router.post('/login',handleUserLogin)
router.post('/signup',handleSignupcontroller)

module.exports = router