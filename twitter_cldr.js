// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

exports.load = function (locale) {
  var TwitterCLDR = require('./full/core');
  var TwitterCLDRDataBundle = require('./full/' + locale);
  TwitterCLDR.set_data(TwitterCLDRDataBundle);
  return TwitterCLDR;
};
