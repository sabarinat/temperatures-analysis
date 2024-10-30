var express = require('express');
var routes = require('./routes');
var router = express.Router();
router.use(routes)

module.exports = router;