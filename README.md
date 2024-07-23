![logo](logo.svg)

# Yara - a language grammar for [highlight.js](https://highlightjs.org/)

![version](https://badgen.net/npm/v/highlightjs-yara) ![license](https://badgen.net/badge/license/CC0%201.0/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-yara) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-yara)
[![Build Status](https://travis-ci.com/highlightjs/highlightjs-yara.svg?branch=master)](https://travis-ci.com/highlightjs/highlightjs-yara)

YARA is a tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples. With YARA you can create descriptions of malware families (or whatever you want to describe) based on textual or binary patterns. Each description, a.k.a. rule, consists of a set of strings and a boolean expression which determine its logic.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-yara/dist/yara.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-yara/dist/yara.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsYara = require('highlightjs-yara');

hljs.registerLanguage("yara", hljsYara);
hljs.initHighlightingOnLoad();
```

### React

You need to import both Highlight.js and third-party language like Yara:

```js
import React, {Component} from 'react'
import 'highlight.js/scss/darcula.scss' # your favourite theme
import yara from './yara'
import hljs from 'highlight.js'
hljs.registerLanguage('yara', yara);

class Highlighter extends Component
{
  constructor(props)
  {
    super(props);
    hljs.initHighlightingOnLoad();
  }

  render()
  {
    let {children} = this.props;
    return
    {
      <pre ref={(node) => this.node = node}>
        <code className="yara">
          {children}
        </code>
      </pre>
    }
  }
}

export default Highlighter;
```

## License

highlightjs-yara is released under the CC0 1.0 License. See [LICENSE][1] file
for details.

### Author

Deniz Demirci 


## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Yara: <https://github.com/Yara-Rules>

[1]: https://github.com/hoosin/highlightjs-yara/blob/master/LICENSE
