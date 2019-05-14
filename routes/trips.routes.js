const Trip = require('../models/trips')
const router = require('express')

router.get('/',(req,res )=>{
    res.send({message : "You are here"})
    // Trip.find()
    // .then(trips =>{

    })


module.exports = router