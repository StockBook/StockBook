const router = require('express').Router();
const blogController = require('../../controllers/blog');

router.get('/blog/:siteName', blogController.index());

module.exports = router;