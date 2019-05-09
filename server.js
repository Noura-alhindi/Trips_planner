require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const URL =  process.env.URL
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.connect(URL , {useNewUrlParser: true}).then(() => {
    console.log('mongodb running');
}, (err) => console.log(err))




app.listen((PORT),()=>console.log(`active on ${PORT}`))