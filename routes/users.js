var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<a href="#">respond with a resource</a>');
});
module.exports = router;
