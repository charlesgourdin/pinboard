const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const verifyToken = require('../helpers/verifyToken')
const connection = require('../helpers/db')
const sharp = require('sharp');
const fs = require('fs')

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

//SignUp
router.post('/new', (req, res) => {

  let newUser = {
    pseudo: req.body.data.pseudo,
    mail: req.body.data.email,
    password: req.body.data.password
  }

  connection.query('INSERT INTO users SET ?', newUser, (error, response) => {
    if (error) {
      console.log(error);
      res.status(500).json({ flash: error.message })
    } else {
      connection.query('SELECT * FROM users WHERE mail = ?', [newUser.mail], (error, response) => {
        if (error) {
          res.status(500).json(error);
        }
        else {
          user = response[0]
          pseudo = user.pseudo
          userId = user.id
          jwt.sign({ user }, 'pinboard1234', (err, token) => {
            res.status(200).json({
              token,
              pseudo,
              id: user.id
            })
          })
        }
      })
    }
  })
})

//SignIn
router.post('/auth', (req, res) => {
  const id = req.body.data
  console.log(id.email)
  connection.query('SELECT * FROM users WHERE mail = ?', [id.email], (error, response) => {
    if (error)
      res.status(500).json(error);
    else if (response.length > 0) {
      if (response[0].password === id.password) {
        console.log('Identification OK')
        user = response[0]
        pseudo = user.pseudo
        userId = user.id

        jwt.sign({ user }, 'pinboard1234', (err, token) => {
          res.status(200).json({
            token,
            pseudo,
            id: user.id
          })
        })
      } else {
        console.log("Mot de passe invalide")
        res.status(401).json({ message: "Mot de passe invalide" })
      }
    } else {
      console.log("email invalide")
      res.status(401).json({ message: "Email invalide" })
    }
  })
})

//Image de profil
router.post('/upload', verifyToken, (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let file = req.files.file;
  const userId = req.body.userId

  //Je crée un dossier pour le user
  fs.mkdir(`./upload/user${userId}`, { recursive: true }, (err) => {
    if (err) throw err;

    // Je stock la photo temporaire
    file.mv(`./upload/user${userId}/profilPicTemp.jpg`, function (err) {
      if (err)
        return res.status(500).send(err);

      //Je retourne la photo, je la stock puis je supprime la photo temporaire
      sharp(`./upload/user${userId}/profilPicTemp.jpg`)
        .rotate()
        .toFile(`./upload/user${userId}/profilPic.jpg`)
        .then(() => {
          fs.unlink(`./upload/user${userId}/profilPicTemp.jpg`, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        })

      connection.query(`UPDATE users SET img = ?  WHERE id = ?`, [`${userId}-profilPic`, userId], (error, response) => {
        if (error) {
          console.log(error);
          res.status(500).json({ flash: error.message })
        } else {
          res.send('File uploaded!');
        }
      })
    });
  });

})

module.exports = router;
