const cors = require('cors');
const express = require('express')
const connectDB = require('./db/db.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/first.js')
const userProtector = require('./routes/protected.js')

const app = express()


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(cookieParser())
app.use(bodyParser.json());
app.use('/k',userRouter)
app.use('/l',userProtector)

app.get('/',(req,res) => {
    res.send("<h1>Shivam</h1>")
})


app.listen(4000,() => {
    console.log(`Example app listening on 4000`)
})

connectDB()