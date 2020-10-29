const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    directions: [{
        type: String,
        required: true
    }]

})

module.exports = mongoose.model('Recipe', recipeSchema)