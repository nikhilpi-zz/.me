'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Create a Resume
 */
exports.create = function(req, res) {

};

/**
 * Show the current Resume
 */
exports.read = function(req, res) {

};

/**
 * Update a Resume
 */
exports.update = function(req, res) {

};

/**
 * Delete an Resume
 */
exports.delete = function(req, res) {

};

/**
 * List of Resumes
 */
exports.list = function(req, res) {

};

exports.index = function(req, res) {
  var resume = {
                  "basics": {
                    "name": "Nikhil Pai",
                    "picture": "",
                    "email": "nikhilpai2016@u.northwestern.edu",
                    "phone": "847-644-8040",
                    "website": "nikhilpi.me",
                    "summary": "",
                    "location": {
                      "address": "604 Davis St, Unit 4",
                      "postalCode": "60201",
                      "city": "Evanston"
                    },
                    "profiles": [{
                      "network": "",
                      "username": "",
                      "url": ""
                    }]
                  },
                  "work": [{
                    "company": "",
                    "position": "",
                    "website": "",
                    "startDate": "",
                    "endDate": "",
                    "summary": "",
                    "highlights": [
                    ""
                    ]
                  }],
                  "volunteer": [{
                    "organization": "",
                    "position": "",
                    "website": "",
                    "startDate": "",
                    "endDate": "",
                    "summary": "",
                    "highlights": [
                      ""
                    ]
                  }],
                  "education": [{
                    "institution": "",
                    "area": "",
                    "studyType": "",
                    "startDate": "",
                    "endDate": "",
                    "gpa": "",
                    "courses": [
                      ""
                    ]
                  }],
                  "awards": [{
                    "title": "",
                    "date": "",
                    "awarder": "",
                    "summary": ""
                  }],
                  "publications": [{
                    "name": "",
                    "publisher": "",
                    "releaseDate": "",
                    "website": "",
                    "summary": ""
                  }],
                  "skills": [{
                    "name": "",
                    "level": "",
                    "keywords": [
                      ""
                    ]
                  }],
                  "languages": [{
                    "language": "",
                    "fluency": ""
                  }],
                  "interests": [{
                    "name": "",
                    "keywords": [
                      ""
                    ]
                  }],
                  "references": [{
                    "name": "",
                    "reference": ""
                  }]
                };

  res.jsonp(resume);
};