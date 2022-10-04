const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongodb')

// Variables de entorno
require('dotenv').config()

// Inicializamos Express
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.set('port', process.env.PORT || 3001)


app.listen(app.get('port'), () => {
    console.log(`App listening on port http://localhost:${ app.get('port') }`)
})

dbConnect()