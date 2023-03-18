const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler(async(req, res, next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(" ")[1]// the token from bearer header
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("User is not authorized") //if token is not related to exact user or invalid token or token expired
            }
            req.user = decoded.user;//append decoded credentials to request
            next()

            if(!token){
                res.status(401)
                throw new Error("User not authorized or token is mssing in request")
            }
        })
    }
})

module.exports = validateToken