const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')



//@desc Register User
//@route POST /api/users/register
//access public

const registerUser = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body
    console.log(req.body)
    //check input to find null values
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
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