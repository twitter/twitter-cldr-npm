// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

exports.load = function(locale) {
  return require('./full/' + locale);
}