const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: [true, "Please add the user name"]
    },
    email: {
        type:String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already exist"]
    },
    password: {
        type: String,
        required: [true, "Please add user password"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema) //export to controllers
