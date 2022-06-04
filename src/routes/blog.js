const express = require('express');
const { body } = require('express-validator')
const router = express.Router();

const blogController = require('../controllers/blog')

// Create blog => POST
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage('Input tittle kurang dari 5 karakter'),
    body('body').isLength({ min: 5 }).withMessage('Input body kurang dari 5 karakter')],
    blogController.createBlogPost);

module.exports = router