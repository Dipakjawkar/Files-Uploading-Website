const express = require('express');
const {uploads, fileSend, getFiles} = require('../controller/fileConteroller')
const upload = require('../middleware/fileMiddleware')
const {userMiddleware} =require('../middleware/userMiddleware')

const file = express.Router();

file.post('/upload', [userMiddleware, upload.single('file')] ,uploads)
file.get('/get', userMiddleware ,getFiles)

file.get('/:id',fileSend)

module.exports = file;

