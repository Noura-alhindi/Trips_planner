const User = require('../models/user')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')

router.get('/',(req,res)=>{
    User.find()
    .then(user =>{
        res.send({message: 'User Home'})
    }).catch(err =>{
        res.send({message: err})
    })
})

module.exports = router