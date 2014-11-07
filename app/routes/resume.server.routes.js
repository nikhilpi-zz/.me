'use strict';

var resume = require('../../app/controllers/resume');

module.exports = function(app) {
	// Routing logic   
	// ...
  app.route('/resume').get(resume.index);
  app.route('/resume/basics').get(resume.basics);
};