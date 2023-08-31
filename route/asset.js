// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/asset');
// router.post('/asset',userController.assetDetails);
// module.exports = router;



const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for files (you can change this if needed)
const upload = multer({ storage: storage });

const userController = require('../controller/asset');

// Use multer middleware for handling file uploads
router.post('/asset', upload.single('image'), userController.assetDetails);
router.get('/asset', userController.assetDetailsget);

module.exports = router;
