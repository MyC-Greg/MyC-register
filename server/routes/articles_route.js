const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/articles_controller');

// get Article
router.get('/getArticles/:pilar', ArticlesController.getArticles);
router.get('/getPictures/:id', ArticlesController.getPictures);
router.get('/getArticle/:id', ArticlesController.getArticle);

module.exports = router;