## twitter-cldr-npm

TwitterCldr [npm](https://npmjs.org/) package.

### Installation

Installation is easy with npm:

```
npm install twitter_cldr
```

### Loading It Up

```javascript
var TwitterCldr = require('twitter_cldr').load('en');
var formatter = new TwitterCldr.DateTimeFormatter();
fmt.format(new Date(), {"type": "full"});
```

### Usage

See usage documentation for [twitter-cldr-js](http://github.com/twitter/twitter-cldr-js).

### Dependencies

* None.

### Tests

See [twitter-cldr-js](http://github.com/twitter/twitter-cldr-js) for test suite.

### Authors

* Cameron Dutro: [http://twitter.com/camertron](http://twitter.com/camertron)
* Kirill Lashuk: [http://twitter.com/kl_7](http://twitter.com/kl_7)

### Links

* [twitter-cldr-rb](http://github.com/twitter/twitter-cldr-rb) - Ruby version
* [twitter-cldr-js](http://github.com/twitter/twitter-cldr-js) - JavaScript library for Ruby on Rails
* [CLDR Homepage](http://cldr.unicode.org/) - Where all the data comes from
* [ICU Homepage](http://site.icu-project.org/) - IBM's C++/Java internationalization library that TwitterCLDR is based on