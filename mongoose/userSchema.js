const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    isAdmin:{
        type:Boolean,
    }
},{timestamps:true})

const userName = mongoose.model("userName",userSchema)

module.exports = userName