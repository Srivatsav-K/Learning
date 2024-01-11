const path = require("node:path"); // best practise include `node:` resolver

console.log(__dirname); // /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules
console.log(__filename); // /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules/path.js

// basename
console.log(path.basename(__dirname)); // built-in-modules
console.log(path.basename(__filename)); // path.js

// extname
console.log(path.extname(__dirname)); // ""
console.log(path.extname(__filename)); // .js

// parse & format
console.log(path.parse(__filename));
/* 
  {
    root: '/',
    dir: '/Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules',
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }
*/
console.log(path.format(path.parse(__filename))); // /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules/path.js

// isAbsolute
console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute("./README.md")); // false (it is relative )

// join (joined by platform specific seperator as delimiter and normalises)
console.log(path.join("folder1", "folder2", "index.html")); // folder1/folder2/index.html
console.log(path.join("/folder1", "folder2", "index.html")); // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "index.html")); // /folder1/folder2/index.html
console.log(path.join("/folder1", "//folder2", "../index.html")); // /folder1/index.html
console.log(path.join(__dirname, "data.json"), "\n"); // /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules/data.json

// resolve (Starting from leftmost {from} parameter, resolves {to} to an absolute path.)
console.log(path.resolve("folder1", "folder2", "index.html")); // (No forward slash or root specified hence absolute path is added to the arguments and joined) : /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules/folder1/folder2/index.html
console.log(path.resolve("/folder1", "folder2", "index.html")); // (if we specifiy a forward slash absolute path from that root is returned) : /folder1/folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "index.html")); // (if forward slash occurs later in the args. Absolute path from the righ most root is returned) : /folder1/folder2/index.html
console.log(path.resolve("/folder1", "//folder2", "../index.html")); // /index.html
console.log(path.resolve(__dirname, "data.json")); // /Users/srivatsav/Developer/Learning/Node/node-js/built-in-modules/data.json

path.resolve();
