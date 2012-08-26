exports.load = function(locale) {
  return require('./full/' + locale);
}