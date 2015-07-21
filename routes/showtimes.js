var express = require('express');
var router = express.Router();

var showtimes = require('showtimes');

/* GET home page. */
router.get('/:zipcode', function(req, res, next) {
	var zipcode = req.params.zipcode;
	var s = showtimes(zipcode, {});

	s.getTheaters( function(err, theaters) {
		res.type('application/json');
		res.send(theaters);
	});
});

module.exports = router;