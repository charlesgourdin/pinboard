const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const verifyToken = require('../helpers/verifyToken')
const connection = require('../helpers/db')
const sharp = require('sharp');
const fs = require('fs')

router.get('/profil/:id', verifyToken, (req, res) => {
    userId = req.params.id
    res.status(200).json({
        src: `/user${userId}/profilPic.jpg`
    })
})


module.exports = router;
