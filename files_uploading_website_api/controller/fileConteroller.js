// const upload = require('../middleware/fileMiddleware')
// const {uploadFile} = require('../utils/cloudinaryUpload')
const { dataUri } = require('../utils/dataUri')
const fileModel = require('../model/fileModel')
const { v2 } = require('cloudinary')
const fs = require('fs')
const path = require('path');
const userMobel = require('../model/userMobel');


exports.uploads = async (req, res) => {
  const user = await userMobel.findOne({ _id: req.user._id });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No file sent' });
  }

  // console.log(req.file.buffer)
  const file = req.file;
  const fileUri = dataUri(file)

  const fileRes = await v2.uploader.upload(fileUri.content,
    {
      folder: 'uploads'
    })

  if (!fileRes) {
    res.send({
      message: "Server Error !",
      success: false
    })
  }

  const fileDetails = await new fileModel({
    "name": file.originalname,
    "uri": fileRes.url,
    "format": fileRes.format,
    "size": fileRes.bytes,
    user
  })
  await fileDetails.save();


  res.json({
    success: true,
    message: 'File uploaded successfully',
    file: fileDetails
  });
}

exports.fileSend = async (req, res) => {
  const fileId = req.params.id

  const file = await fileModel.findOne({ _id: fileId });
  if (!file) {
    return res.send({
      success: false,
      message: 'file not found !'
    })
  }

  await fileModel.updateOne({ _id: file._id }, { $push: { views: Date.now() } });

  return res.send({
    success: true,
    message: "file found !",
    file
  })
}

exports.getFiles = async (req, res) => {
  try {
 
    const files = await fileModel.find({ "user": req.user._id });

    if (!files) {
      return res.send({
        message: "file not found !",
        success: false
      })
    }
    return res.send({
      message: "files found ! ",
      success: true,
      files
    })

  } catch {
    return res.send({
      success: false,
      message: "callback error !"
    })
  }
}