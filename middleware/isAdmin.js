const personName = require('../mongoose/userSchema.js')
const jwt   = require('jsonwebtoken');


const key = "$gfd%!"

const  isAdmin = async (req,res,next) => {
    const token = req.cookies['auth-token'];

     if(token){
            const verified = jwt.verify(token,key)
            req.user = verified.user;
            console.log(req.user)
           
     }

     const id = req.user.id


     const user = await personName.findById(id)

    console.log(user)

    

    if(user.isAdmin){
        next()
    }
}

module.exports = isAdmin