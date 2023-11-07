var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/proj/proj');
});

router.get('/about', function(req, res, next) {
  res.send(`About`);
});

router.get('/login', function(req, res) {
    res.render('pages/proj/login', { auth: req.session.user });
});

router.get('/logout', function(req, res) {
    console.log(req.session.user);
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.clearCookie('sessionID');
        res.redirect('/proj');
    });
});

module.exports = router;
