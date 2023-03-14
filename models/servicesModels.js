const mongoose = require('mongoose')

const servicesShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titleEng: {
        type: String,
        required: true
    },
    contentRu: {
        type: String,
        required: true
    },
    contentEn: {
        type: String,
        required: true
    },
    media: {
        type: Object,
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
    services1: {
        type: String,
        required: true
    },
    services2: {
        type: String,
        required: true
    },
    services3: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Service', servicesShema)