var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')

router.post('/signin', usersControllers.signin)
router.post('/signup', usersControllers.signup)

module.exports = router;
