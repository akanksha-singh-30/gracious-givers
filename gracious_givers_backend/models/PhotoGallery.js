// Author: Viraj Jigar Shah (B00879448)

const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    eventID: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('uploadImageId', uploadSchema);