var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  const { username, password } = req.body;
  if (username === "hi" && password === "hi") {
    req.session.user = {
        user: username,
        loggedIn: true
    };
    res.cookie('sessionID', req.sessionID);
    res.redirect('proj');
  } else {
    res.send('invalid credentials');
  }
});


module.exports = router;
