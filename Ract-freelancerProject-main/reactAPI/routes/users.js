const router = require('express').Router()
const controller = require('../controller/')

router.get('/', controller.user.get);
router.post('/login', controller.user.post.login)
//router.post('/register', controller.post.register)

//router.post('/verify', controller.post.verifyLogin);
// router.get('/logout', handler.get.logout)

// router.post('/login', handler.post.login)
// router.post('/register', handler.post.register)

module.exports = router