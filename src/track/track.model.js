const mongoose = require('mongoose')

const track = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },

    singer: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    album: {
        type: String,
        require: true
    },
    
    createdDate: {
        type: Date,
        default: new Date()
    },

    updatedDate: Date,
}, { versionKey: false })

module.exports =mongoose.model('track',track)