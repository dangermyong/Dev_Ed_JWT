const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true }, () => { 
  console.log('connected to db!') 
})

// Middleware
app.use(express.json())

// Import Routes
const authRoute = require('./routes/auth')

// Route Middleware
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server Up and running on 3000'))
