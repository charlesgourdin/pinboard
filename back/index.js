const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const verifyToken = require('./helpers/verifyToken')


const port = 4000

//Configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/images', express.static('upload')) 

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl)
    next()
})

app.use('/api', router)

//Routes
app.get('/', (req, res) => {
    res.send('Express fonctionne')
})

//Server
app.listen(port, (err) => {
    if (err) {
        throw new Error("serveur don't listen")
    }
    console.log(`Server is listening on port ${port}`)
})