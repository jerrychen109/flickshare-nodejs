var express = require('express');
var router = express.Router();

var showtimes = require('showtimes');

/* GET home page. */
router.get('/showtimes?zip', function(req, res, next) {
	var zipcode = req.query.zip;
	var s = showtimes(zipcode, {});

	s.getTheaters( function(err, theaters) {
		res.type('application/json');
		res.send(theaters);
	});
});

module.exports = router;