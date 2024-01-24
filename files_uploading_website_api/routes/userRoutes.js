const express = require('express');
const {signup,signin,signout, verify} = require('../controller/userController')
const {userMiddleware} = require('../middleware/userMiddleware')

const userRoute = express.Router();

userRoute.post('/signup',signup)
userRoute.post('/signin',signin)
userRoute.get('/signout',signout)
userRoute.get('/verify',userMiddleware,verify)

module.exports = userRoute

