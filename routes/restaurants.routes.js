const Restaurant = require('../models/restaurant')
const router = require('express').Router()

router.get('/', (request, response)=>{
    Restaurant.find({})
    .then(restaurant => {
    if(restaurant.length < 1){
    return response.json({ restaurant : restaurant, message : 'nothing found'})
    }
    response.status(200).json({ restaurant : restaurant})
    })
    .catch(err => {
    response.send({ message : err})
    })

})


router.post('/', (request, response)=>{

    let data = {
    name : request.body.name,
    cuisines:request.body.cuisines,
    rating:request.body.rating,
    image:request.body.image,
    }
    
    let restaurant = new Restaurant(data)
    
        restaurant.save()
        .then(()=> {
        
        response.status(200).json({ restaurant : restaurant, message: "saved"})
        })
        .catch(err => {
        response.send({ message : err})
        })
        
    })


module.exports = router
