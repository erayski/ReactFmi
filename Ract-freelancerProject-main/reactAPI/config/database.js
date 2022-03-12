const mongoose = require('mongoose')
const dbString = require('./config').dbUrl

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
      
    )
}