const news = require('express').Router();
const newsController = require('../../controllers/news');

news.get('/news/:value',newsController());



module.exports = news;