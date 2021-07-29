# unicode-property-aliases [![unicode-property-aliases on npm](https://img.shields.io/npm/v/unicode-property-aliases)](https://www.npmjs.com/package/unicode-property-aliases)

_unicode-property-aliases_ offers the Unicode property alias mappings in an easy-to-consume JavaScript format.

## Installation

To use _unicode-property-aliases_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-property-aliases
```

Then, `require` it:

```js
const propertyAliases = require('unicode-property-aliases');
```

## Usage

This module exports a `Map` object. The most common usage is to convert a property alias to its canonical form:

```js
propertyAliases.get('sfc')
// → 'Simple_Case_Folding'
```

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch -m 'Release v%s'
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-property-aliases_ is available under the [MIT](https://mths.be/mit) license.
