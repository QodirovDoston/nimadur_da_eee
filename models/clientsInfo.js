const mongoose = require('mongoose')

const clentSchema = new mongoose.Schema({
    media: {
        type: Object,
        required: true,
        default: {}
    },
    type1: {
        type: Object,
        required: true,
        default: {}
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Clients', clentSchema)