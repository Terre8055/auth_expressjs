const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')



//@desc Get all contacts
//@route GET /api/contacts
//access public

const getContact = asyncHandler(async (req, res) => {
     //mongo returns a promise so use async
    const contacts = await Contact.find()
    res.status(200).json(contacts)

}) 

//@desc Create new contacts
//@route POST /api/contacts
//access public

const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body
    console.log(req.body)
    //check input to find null values
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact
)})

//@desc Update new contacts
//@route PUT /api/contacts/:id
//access public

const updateContactID = asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    
    

    const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
    )

    res.status(200).json(updateContact)
})

//@desc Del contact
//@route DELETE /api/contacts/:id
//access public

const deleteContact = asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    
    

    const updateContact = await Contact.findByIdAndDelete(
    req.params.id,
    req.body,
    {new: true}
    )

    res.status(200).json(updateContact)
})

//@desc GET contact id
//@route GET /api/contacts/:id
//access public

const getContactID = asyncHandler(async (req, res) => {
    // console.log(req.params.id)
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})




module.exports = {getContact, createContact, updateContactID, deleteContact, getContactID}