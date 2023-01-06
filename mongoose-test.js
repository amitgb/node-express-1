const mongoose = require('mongoose')


const connectionString = "mongodb+srv://fbsroot:fbs%40123@cluster0.dtzgtou.mongodb.net/test"
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connection established successfully...")
})
.catch(()=>{
    console.log("Error connecting...")
})

