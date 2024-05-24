const express = require('express');
const loginController = require('../controllers/auth/LoginController');
const registerController = require('../controllers/auth/RegisterController');
const refreshController = require('../controllers/auth/RefreshController');

const authRouter = express.Router();

authRouter.post('/login', loginController);
authRouter.post('/register', registerController);
authRouter.delete('/refresh', refreshController);

module.exports = authRouter;