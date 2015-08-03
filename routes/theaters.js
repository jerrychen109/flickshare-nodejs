var express = require('express');
var router = express.Router();

var showtimes = require('showtimes');

/* GET home page. */
router.get('', function(req, res, next) {
	var location = req.query.location;

	var s = showtimes(location, {});

	s.getTheaters(function(err, theaters) {
		res.type('application/json');
		res.send(theaters);
	});
});

module.exports = router;

