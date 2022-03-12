const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../model');

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.cookie] || '';

        Promise.all([
            jwt.verifyToken(token),
           models.TokenBlackList.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                models.User.findById(data.id)
                    .then((user) => {
                        return res.send(true)
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }

                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    res.status(401).send('UNAUTHORIZED!');
                    return;
                }

                return res.send(false);
            })
    }

};