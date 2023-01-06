const express = require('express')
const app = express()

require('dotenv').config()


const productsRouter = require('./api/routes/products')

const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Connect to Mongo Database (Deployed on Mongo Atlas Cloud Service)
// const connectionString = process.env.connectionString

const username = process.env.dbuser
const password = process.env.dbpassword

const connectionString = "mongodb+srv://" + username + ":" + password + "@cluster0.dtzgtou.mongodb.net/test"
console.log(connectionString)
mongoose.connect(connectionString)

// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg: "This is a simple get request"
//     })
// })


// Setup the body parser middleware to handle encoded urls and json data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.use(morgan("dev")) // "dev" is one of the pre-defined formats for morgan




app.use('/products', productsRouter)

module.exports = app