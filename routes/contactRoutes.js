const express = require('express')

const router = express.Router()
const {getContact, createContact, updateContactID, deleteContact, getContactID} = require('../controllers/contactController')
const validateToken = require('../middlewares/validateTokenHandler')

router.use(validateToken) //middleware to validate token on all routes
//The router.route() method is used to define a route for the root path (/) of the /api/contacts endpoint

router.route('/')
    .get(getContact)
    .post(createContact)

router.route('/:id')
    .put(updateContactID)
    .delete(deleteContact)
    .get(getContactID)


module.exports = router;