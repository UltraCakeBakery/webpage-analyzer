Got it! Let's update the example and API description to reflect initializing a new analyzer instance and passing an array of CSS and JavaScript file contents. Here's an updated version:

---

## webpage-analyzer

**Library for scanning and analyzing a webpage. Insert the HTML, stylesheets, and JavaScript files to get useful information back.**

### Features:
- Detect content management systems (CMS)
- Identify CMS plugins and their versions
- Discover JavaScript libraries and their plugins
- Recognize CSS UI libraries and frameworks
- Inspect frontend frameworks
- Analyze minification and optimization of assets

### Example Usage:

```javascript
const WebpageAnalyzer = require('webpage-analyzer');

// Initialize a new analyzer instance
const analyzer = new WebpageAnalyzer();

const htmlContent = `<!DOCTYPE html>...`;
const cssContents = [
  `body { ... }`,
  `.header { ... }`
];
const jsContents = [
  `$(document).ready(function() { ... });`,
  `console.log('Hello, world!');`
];

// Analyze the webpage contents
const results = analyzer.analyze({
  html: htmlContent,
  css: cssContents,
  js: jsContents
});

console.log(results);
/*
{
  technologies: [
    {
      technology: "jquery",
      versions: ["3.1.1", "3.2.4"],
      minification: {
        version: false,
        minimized: false
      }
    },
    ...
  ]
}
*/
```

### Installation:

```bash
npm install webpage-analyzer
```

### API:

#### `new WebpageAnalyzer()`

- Initializes a new instance of the analyzer.

#### `analyze(options)`

- **options**: An object containing:
  - `html` (string): The HTML content of the webpage.
  - `css` (array of strings): An array of CSS file contents.
  - `js` (array of strings): An array of JavaScript file contents.
  
- **Returns**: An object with the detected technologies, their versions, and minification details.

### Contribution:

Contributions are welcome! Please submit a pull request or open an issue on [GitHub](https://github.com/your-repo/webpage-analyzer).

### License:

This project is licensed under the MIT License.

---

This example shows how to initialize a new `WebpageAnalyzer` instance and pass arrays of CSS and JavaScript file contents to the `analyze` method. Adjust the code and documentation as necessary to fit the exact implementation details of your package.
