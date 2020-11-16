const mongoose = require('mongoose')

const shoppingSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Shopping', shoppingSchema)