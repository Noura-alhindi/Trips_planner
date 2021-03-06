const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {type: String, required: true , unique: true},
    cuisines:{type: String  },
    rating:{type: String  },
    image:{type: String  },
})


const Restaurant =  mongoose.model('Restaurant',restaurantSchema)
module.exports = Restaurant