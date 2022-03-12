const User = require('../model/User')
const jwt = require('../utils/jwt')
const {cookie} = require('../config/config')
const { validationResult } = require('express-validator')


module.exports = {
    get: (req, res, next) => {
        console.log(req.query.id);
        User.findById(req.query.id)
            .then((user) => res.send(user))
            .catch(next)
    },
    post: {
        login: (req, res, next) => {
            const { username, password } = req.body;
            User.findOne({ username })
                .then((user) => 
                Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = jwt.createToken({ id: user._id });
                    res.header("authorization", token).send(user);
                })
                .catch(next);
        },
        register: (req, res, next) => {
            const { username, password } = req.body;
            User.create({ username, password })
                .then((createdUser) =>{                
                const token = jwt.createToken({ id: createdUser._id });
                res.header("Authorization", token).send(createdUser);
            //  res.send(createdUser)
                })
                .catch(next)
        },
        verifyLogin:(req,res,next)=>{
            const token = req.body.token || '';

            Promise.all([
               jwt.verifyToken(token),
                User.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }
    
                    User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status:true,
                                user
                            })
                        });
                })
                .catch(err => {
                    if (!redirectAuthenticated) { next(); return; }
    
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }
    
                    return res.send({
                        status:false
                    });
                })
        
        }


        
    }
}