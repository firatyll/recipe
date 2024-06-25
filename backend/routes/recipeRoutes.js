const express = require('express');
const router = express.Router();
//controllers
const recipeController = require('../controllers/recipeController');
//middlewares
const authMiddleware = require('../middlewares/auth');

//recipe
router.post('/', authMiddleware, recipeController.addRecipe);
router.put('/:id', authMiddleware, recipeController.updateRecipe);
router.delete('/:id', authMiddleware, recipeController.deleteRecipe);
//favorite
router.post('/favorite/:id', authMiddleware, recipeController.addFavorite);
router.delete('/favorite/:id', authMiddleware, recipeController.deleteFavorite);
router.get('/favorite', authMiddleware, recipeController.getAllFavorites);

module.exports = router;