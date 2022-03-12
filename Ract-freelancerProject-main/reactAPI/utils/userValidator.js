const { body } = require('express-validator')

module.exports = [
    body('username', 'Username should be valid!')
    .isLength({ min: 3 }),

    body('password')
    .isLength({ min: 3 })
    .withMessage('Password is required and need to be at least 3 characters.')
]