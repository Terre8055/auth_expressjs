const express = require('express')
const router = express.Router()
const {registerUser, loginUser, currentUser} = require('../controllers/userController')
const validateToken = require('../middlewares/validateTokenHandler')


router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current', validateToken, currentUser)//can use validateToken since current user is private

module.exports = router;