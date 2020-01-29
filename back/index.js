const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = require('./routes')

const port = 4000

//Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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