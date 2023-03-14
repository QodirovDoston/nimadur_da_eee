const mongoose = require('mongoose')

const clentSchema = new mongoose.Schema({
    type1: {
        type: Object,
        required: true,
        default: {}
    }
},{
    timestamps: true
})

module.exports = mongoose.model('ClientsMessage', clentSchema)