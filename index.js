const express = require('express')
const cors = require('cors')

// variables de entorno
require('dotenv').config()

// inicializamos Express
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.set('port', process.env.PORT || 3001)
console.log(process.env.PORT);


app.listen(app.get('port'), () => {
    console.log(`App listening on port http://localhost:${ app.get('port') }`)
})
