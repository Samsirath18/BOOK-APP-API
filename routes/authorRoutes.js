const express = require('express');
const root = express.Router();
const authorController = require('../controllers/authorController');
const router = require('./bookRoutes');

// CRUD des auteurs
router.post('/', authorController.createAuthor);
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router; 