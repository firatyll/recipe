const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
