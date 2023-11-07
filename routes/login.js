var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  const { username, password } = req.body;
  if (username === "hi" && password === "hi") {
    //console.log(req);
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
/*TODO:
- email validation
- database integration
- layout
- review part of site
- isalpak sa internet (production)
*/

module.exports = router;
