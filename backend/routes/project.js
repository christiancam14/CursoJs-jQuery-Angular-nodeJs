'use strict'

var express = require('express');
const { router } = require('../app');
var ProjectController = require('../controllers/project');

var route = express.Router();

route.get('/home', ProjectController.home);
route.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);

module.exports = router;

// 224|