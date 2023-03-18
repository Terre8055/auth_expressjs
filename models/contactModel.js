const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    /* @user_id protect contact route so only a logged in user 
    * can perform CRUD operations
    */
    user_id: {
        type: mongoose.Schema.Types.ObjectId, //have user id when contact is created to be assoc w/ user
        required: true,
        ref: "User"
    },
    name: {
        type:String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type:String,
        required: [true, "Please add the email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the phone number"]
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Contact", contactSchema) //export to controllers