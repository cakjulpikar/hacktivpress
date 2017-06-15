var express = require('express');
var router = express.Router();
var articlesControllers = require('../controllers/articlesControllers')
var jwtVerify = require('../helpers/jwtVerify')

router.get('/', articlesControllers.getArticles)
router.get('/:id', articlesControllers.getArticle)
router.post('/', jwtVerify, articlesControllers.postArticle)
router.delete('/:id', jwtVerify, articlesControllers.deleteArticle)
router.patch('/:id', jwtVerify, articlesControllers.updateArticle)

module.exports = router;
