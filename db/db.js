const mongoose = require('mongoose')

MONGO_URI = "mongodb://dubeyshivam512:shivamshivam@ac-6xfhjfg-shard-00-00.bsjppuh.mongodb.net:27017,ac-6xfhjfg-shard-00-02.bsjppuh.mongodb.net:27017/?ssl=true&replicaSet=atlas-qc34uv-shard-0&authSource=admin&retryWrites=true&w=majority"


const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log("DB connected")
    }catch(err){
        console.log(err)
    }
} 




// mongoose.connect(MONGO_URI/"Shivam Dubey")
// .then(() => {
//     console.log("DB connected successfully")
// })
// .catch((err) => {
//     console.log("Error",err)
// })

module.exports = connectDB