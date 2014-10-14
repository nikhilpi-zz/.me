'use strict';

var resume = require('../../app/controllers/resume');

module.exports = function(app) {
	// Routing logic   
	// ...
  app.route('/').get(resume.index);
};