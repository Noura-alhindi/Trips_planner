require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT
const cors = require('cors')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const mongooseConnect = require('./config/mongodb')

server.use(express.json())

server.use(session({
    secret : "test",
    resave : false,
    saveUninitialized : true
}))

server.use(passport.initialize())
server.use(passport.session())

//routes
server.use('/api/auth', require('./routes/auth.routes'))
server.use('/api/trips', require('./routes/trips.routes'))
server.use('/api/restaurants', require('./routes/restaurants.routes'))
server.use('/api/user', passport.authenticate('jwt', {session: false}), require('./routes/user.routes'))


server.use('*', (req, res) => {
    res.status(404).json({message : "Data not found!"})
    })

server.listen((PORT),()=>console.log(`active on ${PORT}`))