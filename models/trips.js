const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripsSchema = new Schema({

})


const Trip =  mongoose.model('Trip',tripsSchema)
module.exports = Trip