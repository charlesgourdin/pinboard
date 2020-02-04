const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const verifyToken = require('../helpers/verifyToken')
const connection = require('../helpers/db')
const base64Img = require('base64-img')

router.get('/profil/:id', verifyToken, (req, res) => {
    userId = req.params.id
    const path=`/home/administrateur/Projet/pinboard/back/upload/user${userId}/profilPic.jpg`

    base64Img.base64(path, (err, data)=>{
        res.send(data)
    })
})


module.exports = router;
