const userName = require('../mongoose/userSchema.js')
const express = require('express')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const key = "$gfd%!"




async function handleLoginController(req,res){
    const {email,password} = req.body

    const user = await userName.findOne({email})
    console.log(user)
    if(user){

        const passwordCompare = await bcrypt.compare(password,user.password)
        if(passwordCompare){
            const data = {
                user : {
                    id : user.id
        
                }
            }
        
            const token = jwt.sign(data,key)
            res.cookie('auth-token', token, { httpOnly: true });

            res.send({email})
        }
       
        
    }

 
}

module.exports = handleLoginController 