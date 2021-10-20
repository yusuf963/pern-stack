const { json } = require('express')
require('dotenv').config()
const express = require('express')
const { ConnectionStates } = require('mongoose')
const router = require('./views/resturants')

const app = express()
//Middleware
app.use(express.json())

// import routers
app.use('/api/v1/resrurant', router)
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})