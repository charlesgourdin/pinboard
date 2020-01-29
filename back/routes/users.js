const express = require('express')
const router = express.Router()
const connection = require('../helpers/db')


//GET

router.get('/all', (req, res) => {

    connection.query('SELECT * FROM users', (error, result) => {
        if (error) {
            res.status(500).send('Error retrieving playlist');
        } else {
            res.json(result);
        }
    })
})


//POST 

router.post('/', (req, res) => {

    let newUser = {
        pseudo: req.body.pseudo,
        mail: req.body.mail,
        password: req.body.password
    }
    connection.query('INSERT INTO users SET ?', newUser, (error, result)=>{
        if (error) {
            console.log(error);
            res.status(500).json({ flash: error.message })
        } else {
            res.status(200).json({ flash: "New user created", newUser })
        }
    })
})

module.exports = router;
