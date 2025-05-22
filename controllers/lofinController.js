const userName = require('../mongoose/userSchema.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const key = "$gfd%!"

async function handleUserLogin(req,res){
    const {email,password} = req.body
    
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(password,salt)
    await userName.create({
        email,
        password: secPass
    })

    const data = {
        user :{
            email : email
        }
    }

    const token = jwt.sign(data,key)

    console.log("Inserted")
    console.log(token)
    res.send({email,password})

}

module.exports = handleUserLogin
