const Recipe = require('../database/models/recipe');
const User = require('../database/models/user');

exports.addRecipe = async (req, res) => {
    const { title, ingredients, instructions, image } = req.body;

    if (!title || !ingredients || !instructions || !image) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        let user = req.user;
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        user = await User.findOne({ email: user.userMail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const recipe = new Recipe({
            title,
            ingredients,
            instructions,
            image
        });
        user.recipes.push(recipe);

        await Promise.all([recipe.save(), user.save()]);

        res.status(201).json({ message: 'Recipe added successfully' });
    } catch (error) {
        console.error('Error adding recipe to user:', error);
        res.status(500).json({ message: 'An error occurred while adding the recipe' });
    }
};

exports.updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { title, ingredients, instructions, image } = req.body;

    if (!title || !ingredients || !instructions || !image) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            id,
            { title, ingredients, instructions, image },
            { new: true, runValidators: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
    } catch (error) {
        console.error('Error updating recipe:', error);
        res.status(500).json({ message: 'An error occurred while updating the recipe' });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;

    let user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        user = await User.findOne({ email: user.userMail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.recipes = user.recipes.filter(recipe => recipe._id.toString() !== id);
        await user.save();
        const deletedRecipe = await Recipe.findByIdAndDelete(id);

        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ message: 'An error occurred while deleting the recipe' });
    }
};
