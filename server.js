const express = require('express')
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv').config()
const connectDb = require('./config/dbConnection')

connectDb();
const app = express()
const port = process.env.PORT || 3000;


//middleware
app.use(bodyParser.json())
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler)






app.listen(port, () => console.log(`server is listening at PORT: ${port}`))