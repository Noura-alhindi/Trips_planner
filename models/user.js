const mongoose  = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema ({
    username : {type: String , required: true , unique: true },
    email : { type: String , required: true , unique: true },
    password : { type: String , required: true},
    trips : [{ type: Schema.Types.ObjectId, ref : 'Trips'}]
},{timestamps: true })

userSchema.pre('save',function(next){
    if (this.password && this.isModified('password')){
        bcrypt.hash(this.password , saltRounds,(err , hash )=>{
            if(err){return next()}
            this.password = hash 
            next()
        })
    }
})

    userSchema.methods.verifyPassword = (plainPassword, hashedPassword ,cb )=>{
        bcrypt.compare(plainPassword,hashedPassword, (err, response)=>{
            if(err){
                return cb(err)
            }
            return cb(null, response)
        })
    }

    const User = mongoose.model('User',userSchema)
    module.exports = User