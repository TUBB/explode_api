var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var userAgent = req.header('User-Agent');
  console.log('User-Agent: %s', userAgent);
  var cookie = req.header('Cookie');
  console.log('Cookie: %s', cookie);
  var data = fs.readFileSync('assets/users.json', 'utf8');
  res.cookie('EXPLODE_ID', '32884929384892489');
  res.cookie('EXPLODE_TIME', '0000220140124041');

  setTimeout(function () {
    res.send(data);
  }, 5000);
});

module.exports = router;
