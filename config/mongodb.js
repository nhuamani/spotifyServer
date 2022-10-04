const mongoose = require("mongoose")

const dbConnect = () => {

    //const DB_URI = process.env.DB_URI
    const DB_URI = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.gyaybgs.mongodb.net/dbSpotify`

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 1000
    }, (err, res) => {
        (!err) ? console.log('***** SUCCESSFUL CONNECTION *****') : console.log('***** CONNECTION ERROR *****');
    })

}

module.exports = dbConnect