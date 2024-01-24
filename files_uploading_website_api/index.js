const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser')
const {v2} = require('cloudinary');

require('dotenv').config()
require("./db/Connect")

const app = express();

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_SECRET
})

app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))


app.use('/api/v1/user',require('./routes/userRoutes'))
app.use('/api/v1/file',require('./routes/fileRoutes'))


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Connect !")
})



