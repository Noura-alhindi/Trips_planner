const Trip = require('../models/trips')
const router = require('express').Router()

router.get('/', (request, response)=>{
    Trip.find({})
    .then(trips => {
    if(trips.length < 1){
    return response.json({ trips : trips, message : 'nothing found'})
    }
    response.status(200).json({ trips : trips})
    })
    .catch(err => {
    response.send({ message : err})
    })

})


router.post('/', (request, response)=>{

    let data = {
    name : request.body.name,
    days : request.body.days
    }
    
    let trip = new Trip(data)
    
        trip.save()
        .then(()=> {
        
        response.status(200).json({ trip : trip, message: "saved"})
        })
        .catch(err => {
        response.send({ message : err})
        })
        
    })


module.exports = router
