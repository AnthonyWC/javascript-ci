'use strict';

var express = require('express'),
	app = express();

app.get('/', function (req, res) {
	res.status(500).send('Testing...')
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
	console.log('Running on port', app.get('port'));
});

module.exports.app = app;
