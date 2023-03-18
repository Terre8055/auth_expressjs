const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
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

    //check to see if user already exist
    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(`Hash: ${hashedPassword}`)

    //create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created ${user}`)

    //user created successfully?
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
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