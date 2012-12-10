Most changes to twitter-cldr-npm should happen by modifying twitter-cldr-js and running the `compile` rake task.

As always, thanks for contributing, and happy coding!

### Key branches
- `master` is the latest released version

### Pull requests
- Submit pull requests against the `master` branch
- Try not to pollute your pull request with unintended changes -- keep them simple and small

### Compiling from twitter-cldr-js

You'll need to set up your Ruby build environment first:

1.  Install Ruby (usually with [RVM](https://rvm.io/) or [rbenv](https://github.com/sstephenson/rbenv))
2.  `gem install bundler`
3.  `git clone https://github.com/twitter/twitter-cldr-js`
4.  `cd /path/to/twitter-cldr-js`
5.  `bundle install`
6.  `bundle exec rake twitter_cldr:js:compile OUTPUT_DIR=/path/to/twitter-cldr-npm`

### License
By contributing your code, you agree to license your contribution under the terms of the Apache License v2:
https://github.com/twitter/twitter-cldr-npm/blob/master/LICENSE