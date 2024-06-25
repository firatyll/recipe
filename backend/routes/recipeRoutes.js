const express = require('express');
const router = express.Router();
//controllers
const recipeController = require('../controllers/recipeController');
//middlewares
const authMiddleware = require('../middlewares/auth');

router.post('/', authMiddleware, recipeController.addRecipe);
router.put('/:id', authMiddleware, recipeController.updateRecipe);
router.delete('/:id', authMiddleware, recipeController.deleteRecipe);

module.exports = router;