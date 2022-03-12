const router = require('../routes/')

module.exports = (app) => {
   
    app.use('/user', router.users)

    app.use('/job', router.models)

    
}