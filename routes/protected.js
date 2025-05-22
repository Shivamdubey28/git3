const express = require('express')
const personName = require('../mongoose/userSchema.js')
const router = express.Router()
const isLoggedin = require('../middleware/isLoggedin.js')
const isAdmin = require('../middleware/isAdmin.js')

router.get('/check',isLoggedin,(req,res) => {
    res.send('<h1>Checked Shivam Dubey</h1>')
})

router.get('/users',async (req,res) => {
    const users = await personName.find({},'email')
    res.json(users)
})

router.post('/update',async (req,res) => {
    const {email} = req.body
    await personName.updateOne({email},{isAdmin:true})
    res.send({email})
})

router.get('/admincheck',isAdmin,isLoggedin,(req,res) => {
    res.send('<h1>admin checked</h1>')
})

module.exports = router