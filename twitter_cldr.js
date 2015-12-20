// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

exports.load = function (locale) {
  var TwitterCLDR = require('./assets/twitter_cldr.js');
  var TwitterCLDRData = require('./assets/full/' + locale);
  TwitterCLDR.set_data(TwitterCLDRData);
  return TwitterCLDR;
};
