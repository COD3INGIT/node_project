const express = require('express')
const User = require('../models/users')
const userService = require('./user.service')
const router = express.Router()

router.post('/auth/signup',userService.signup)

router.post('/auth/login',userService.login)

module.exports = router ;