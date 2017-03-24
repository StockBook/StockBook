const video = require('express').Router();
const videoController = require('../../controllers/videos');

video.get('/video/show', videoController.show(video));
video.post('/video/add', videoController.add(video));
video.get('/video/showall', videoController.showAll(video));


module.exports = video;