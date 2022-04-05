'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var crypto = require('crypto');
var multipartMiddleware = multipart({ uploadDir: './uploads' });
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './uploads/albums')
    },
    filename: function (req, file, cb) {
        cb(null, "user" + Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });


var mul_upload = multer({dest: './uploads/albums',storage});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
// router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
// router.post('/upload-image/:id',  upload.single('image'), ProjectController.uploadAvatar);
router.post('/upload-image/:id', upload.single('image'),ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;