'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.aoapp = function(req, res) {
  res.render('aocalvin');
};