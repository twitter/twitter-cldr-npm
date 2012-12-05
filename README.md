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

See documentation for [twitter-cldr-js](http://github.com/twitter/twitter-cldr-js).

### Dependencies

None.

### Authors

* Cameron Dutro: [http://twitter.com/camertron](http://twitter.com/camertron)
* Kirill Lashuk: [http://twitter.com/kl_7](http://twitter.com/kl_7)