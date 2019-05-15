const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripsSchema = new Schema({
    name: {type: String, required: true , unique: true}

})


const Trip =  mongoose.model('Trip',tripsSchema)
module.exports = Trip