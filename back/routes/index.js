const express = require('express')
const router = express.Router()
const users = require('./users')
const images = require('./images')
const search = require('./search')

router.use('/users', users)

router.use('/images', images)

router.use('/search', search)

module.exports = router