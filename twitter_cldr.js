// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

exports.load = function (locale) {
  /**
   * Generated programmatically via Ruby:
   *
   * ```rb
   * Dir.entries('./full').filter{ |x| x.end_with?('.js') && x != 'core.js' }.map{ |x| x.slice(0, x.length - 3) }.sort
   * ```
   */
  var localeFileNames = ['af', 'ar', 'be', 'bg', 'bn', 'ca', 'cs', 'cy', 'da', 'de', 'de-CH', 'el', 'en', 'en-150', 'en-AU', 'en-CA', 'en-GB', 'en-IE', 'en-SG', 'en-ZA', 'es', 'es-419', 'es-CO', 'es-MX', 'es-US', 'eu', 'fa', 'fi', 'fil', 'fr', 'fr-BE', 'fr-CA', 'fr-CH', 'ga', 'gl', 'he', 'hi', 'hr', 'hu', 'id', 'is', 'it', 'it-CH', 'ja', 'ko', 'lv', 'msa', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sq', 'sr', 'sv', 'ta', 'th', 'tr', 'uk', 'ur', 'vi', 'zh-cn', 'zh-tw'];

  var localeFileName = localeFileNames.find(function (fileName) {
    return fileName.toLowerCase() === locale.toLowerCase();
  });

  return ('./full/' + (localeFileName || locale));
};
