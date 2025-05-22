const jwt   = require('jsonwebtoken');


const key = "$gfd%!"

const isLoggedin = (req,res,next) => {
    const token = req.cookies['auth-token'];
    
    if(token){
        const verified = jwt.verify(token,key)
        req.user = verified.user;
        next()
    }

}

module.exports = isLoggedin