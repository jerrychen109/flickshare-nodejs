var express = require('express');
var router = express.Router();

var showtimes = require('showtimes');

/* GET home page. */
router.get('/:location', function(req, res, next) {
	var location = req.params.location;
	var s = showtimes(location, {"date": 3});

	s.getTheaters( function(err, theaters) {
		res.type('application/json');
		res.send(theaters);
	});
});

module.exports = router;

