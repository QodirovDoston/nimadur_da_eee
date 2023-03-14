const mongoose = require('mongoose')

const categoryShema = new mongoose.Schema({
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
    media: {
        type: Object,
        required: true,
        default: {}
    },
    descriptionEn: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Category', categoryShema)