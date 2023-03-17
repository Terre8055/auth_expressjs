const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')



//@desc Register User
//@route POST /api/users/register
//access public

const registerUser = asyncHandler(async (req,res) => {
    res.json({message: 'Register the user'})
}) 

//@desc lOGIN User
//@route POST /api/users/login
//access public

const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'Login the user'})
}) 

//@desc Info of current User
//@route GET /api/users/current
//access private

const currentUser = asyncHandler(async (req,res) => {
    res.json({message: 'Current info of user'})
}) 






module.exports = {registerUser, loginUser, currentUser}