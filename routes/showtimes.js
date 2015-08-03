var express = require('express');
var router = express.Router();

var showtimes = require('showtimes');

/* GET home page. */
router.get('', function(req, res, next) {
	var location = req.query.location;
	var date = req.query.date;
	var tid = req.query.tid;

	var s = showtimes(location, {"date": date});

	s.getShowtimes(function(err, data) {
		res.type('application/json');
		res.send(data);
	});
});

module.exports = router;

