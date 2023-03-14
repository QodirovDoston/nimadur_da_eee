const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titleEng: {
        type: String,
        required: true
    },
    media: {
        type: Object,
        required: true,
        default: {}
    },
    type1: {
        type: Object,
        required: true,
        default: {}
    },
    type2: {
        type: Object,
        required: true,
        default: {}
    },
    type3: {
        type: Object,
        required: true,
        default: {}
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Team', teamSchema)