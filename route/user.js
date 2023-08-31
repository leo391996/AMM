const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const userNameMiddleware = require('../middleware/userNameValidation');
const emailMiddleware = require('../middleware/emailValidation');
const validationMiddleware = require('../middleware/validationMiddleware');


router.post('/register',userNameMiddleware,emailMiddleware,userController.RegisterDetails);
router.post('/login',emailMiddleware,userController.LoginDetails);
router.get('/login',validationMiddleware, userController.LoginDetailsget);
// router.get('/login', userController.LoginDetailsget);


module.exports = router;