const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage for files (you can change this if needed)
const upload = multer({ storage: storage });

const userController = require('../controller/spec');

// Use multer middleware for handling file uploads
router.post('/spec', upload.single('image'), userController.specDetails);

module.exports = router;
