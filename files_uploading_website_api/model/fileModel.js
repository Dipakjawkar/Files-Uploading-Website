const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    uri: {
        type: String,
    },
    format: {
        type: String,
    },
    size:{
        type:String,
    },
    views: [
        {
            type: Date
        }
    ],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }

},{
    timestamps:{
        createdAt:"create-at",
        updatedAt:"update-at"
    }
})

module.exports = mongoose.model("files",fileSchema)
