const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const verifyToken = require('../helpers/verifyToken')
const connection = require('../helpers/db')
const sharp = require('sharp');
const fs = require('fs')

router.get('/:pseudo', (req, res) => {
    pseudo = req.params.pseudo+'%'
    console.log(pseudo)

    connection.query(`SELECT * FROM users WHERE pseudo LIKE ? `, [pseudo], (error, result) => {
        if (error) {
            res.status(500).send('Error retrieving user');
        } else {
            res.json(result);
        }
    })

})


module.exports = router;
