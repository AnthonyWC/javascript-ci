'use strict';

var request = require('supertest'),
	app = require('../index').app;

describe('GET /', function () {
	it('Return HTTP response with code 200', function (done) {
		request(app).get('/').expect(200, done);
	});
});