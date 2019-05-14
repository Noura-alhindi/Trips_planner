const User = require('../models/user')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportHelper = require('../config/passport')

router.get('/', (request, response, next) => {
    //custom jwt authenticate
    passport.authenticate('jwt', {session: false}, (err, user, info)=>{
        console.log("got here")
        if(err){ return response.status(400).json({ message: err }) }
    
            if(info !== undefined){
            return response.json({ message: info.message })
            }else{
            User.find({})
            .then((user)=>{
                response.json({ user: user });
            })
    
            }
    
            
        })(request, response, next)
    
        
    })

router.post('/register', (req,res)=>{
    let data ={
    username : req.body.username,
    email : req.body.email,
    password : req.body.password
    }
    let user = new User (data)
    user.save()
    .then(()=>{
        res.status(200).json({ message:"Registered Successfully"})
    }).catch(err =>{
        res.status(401).json({message: "You Are not Allowed To Register"})
    })
})

router.post('/login',(req,res)=>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
        
    req.login(user, {session: false}, (err) => {
        if (err) {
            return res.status(401).json({message: err});
        }
                user.password = '' //remove password
                console.log(user)
                const token = jwt.sign(user.toJSON(), 'your_jwt_secret', { expiresIn: 60 * 60 });
                return res.status(200).json({user, token});
                });
            })(req, res);
        })
    
        module.exports = router