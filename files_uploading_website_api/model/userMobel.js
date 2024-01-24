const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: {
        type:String
    },
    files:[
        {
            type:mongoose.Types.ObjectId,
            ref:"files"
        }
    ]
})

module.exports = mongoose.model('user',userSchema);