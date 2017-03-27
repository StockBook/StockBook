const videoCategory = require('express').Router();
const videoCategoryController = require('../../controllers/videos/categories');

videoCategory

videoCategory.get('/categories', videoCategoryController.index());
videoCategory.post('/categories/add', videoCategoryController.add());


module.exports = videoCategory;