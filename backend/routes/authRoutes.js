const express = require('express');
const router = express.Router();
//controllers
const authController = require('../controllers/authController');
//middlewares
const authMiddleware = require('../middlewares/auth');

router.post('/login', authController.postLogin);
router.post('/register', authController.postRegister);
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;