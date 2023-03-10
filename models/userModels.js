const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 1
    },
    media: {
        type: Object,
        required: false,
        default: {}
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)