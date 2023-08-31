const express = require('express');
const router = express.Router();
const userController = require('../controller/popup');
// const userNameMiddleware = require('../middleware/userNameValidation');
// const emailMiddleware = require('../middleware/emailValidation');
// const validationMiddleware = require('../middleware/validationMiddleware');


router.post('/workorder',userController.workorderDetails);
router.get('/workorder',userController.workorderDetailsget);
router.put('/workorder/:id',userController.workorderDetailsupdate);
router.delete('/workorder/:id',userController.workorderDetailsdelete)

// router.post('/login',emailMiddleware,userController.LoginDetails);
// router.get('/login',validationMiddleware, userController.LoginDetailsget);
// router.get('/login', userController.LoginDetailsget);


module.exports = router;