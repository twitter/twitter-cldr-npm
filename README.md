## twitter-cldr-npm

TwitterCldr [npm](https://npmjs.org/) package.

## Example


```javascript
var TwitterCldr = require('twitter-cldr').load('en');
var formatter = new TwitterCldr.DateTimeFormatter();
fmt.format(new Date(), {"type": "full"});
```