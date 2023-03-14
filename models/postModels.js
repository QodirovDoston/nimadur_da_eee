const mongoose = require('mongoose')

const postShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titleEng: {
        type: String,
        required: true
    },
    descriptionRu: {
        type: String,
        required: true
    },
    descriptionEn: {
        type: String,
        required: true
    },
    media: {
        type: Object,
        required: true,
        default: {}
    },
    category: {
        type: String,
        required: true
    },
    userID: {
        type: Object,
        required: true,
        default: {}
    },
    links: {
        type: String,
        required: true
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
},{
    timestamps: true
})

module.exports = mongoose.model('Post', postShema)