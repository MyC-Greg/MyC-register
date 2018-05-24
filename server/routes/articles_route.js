const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/articles_controller');

// get Article
router.get('/getArticles', ArticlesController.getArticles);
router.get('/getPictures/:id', ArticlesController.getPictures);

module.exports = router;