var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.send(`About`);
});

router.get('/main-test', function (req, res, next) {
  res.render('pages/main');
});
module.exports = router;
