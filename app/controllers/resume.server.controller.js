'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/**
 * Create a Resume
 */


exports.index = function(req, res) {
  res.jsonp(resume);
}; 

exports.basics = function(req,res){
  res.jsonp(resume.basics);
};

var resume = {
                  "basics": {
                    "name": "Nikhil Pai",
                    "picture": "",
                    "email": "nikhil.pai@u.northwestern.edu",
                    "phone": "847-644-8040",
                    "website": "nikhilpi.me",
                    "summary": "",
                    "location": {
                      "address": "604 Davis St, Unit 4",
                      "postalCode": "60201",
                      "city": "Evanston",
                    },
                    "profiles": [{
                      "network": "Linkedin",
                      "username": "nikhilpi",
                      "url": "http://linkedin.com/in/nikhilpi/"
                    },
                    {
                      "network": "Github",
                      "username": "nikhilpi",
                      "url": "https://github.com/nikhilpi"
                    }]
                  },
                  "work": [{
                    "company": "Groupon",
                    "position": "Homepage Software Developer Intern",
                    "website": "http://groupon.com",
                    "startDate": "2014-06-23",
                    "endDate": "2014-08-29",
                    "summary": "",
                    "highlights": [
                    ""
                    ]
                  },
                  {
                    "company": "Knight Lab",
                    "position": "Technology Student Fellow",
                    "website": "http://knightlab.northwestern.edu/",
                    "startDate": "2014-07-24",
                    "endDate": "",
                    "summary": "",
                    "highlights": [
                    ""
                    ]
                  },
                  {
                    "company": "Spotme Fitness",
                    "position": "Design Intern",
                    "website": "https://spotmefit.com/",
                    "startDate": "2013-05-15",
                    "endDate": "2013-08-15",
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