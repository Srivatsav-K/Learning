# Modules

- A module is a encapsulated and resusable peice of code that has it's own context
- Each file is a separate module that is isolated by default

## Types of modules

- Local modules : Modules that we create in our app
- Built-in modules : Modules that ship with node out of the box
- Third-party modules : Modules created by other devs

## Ways of exporting/importing

- Basic way:
  To import a code from another file:

  ```js
  // add.js
  const sum = (a, b) => {
    return a + b;
  };

  const add = sum(2, 1);

  console.log(add);
  ```

  ```js
  // index.js
  require("./add");

  console.log("Hello  from index.js");
  ```

- Recommended

  ```js
  // add.js
  const sum = (a, b) => {
    return a + b;
  };
  module.exports = sum;
  ```

  ```js
  // index.js
  const add = require("./add");

  console.log("Hello  from index.js");

  const sum = add(1, 2);
  console.log(sum);
  ```

- Conflicting variable names while importing

  - Each file has it's own scope and when we require it in the main file it internally uses iife therefore there wont be any errors

  ```js
  //superman.js
  const superHero = "Superman";
  console.log("🚀 ~ file: superman.js:2 ~ superHero:", superHero);
  ```

  ```js
  //batman.js
  const superHero = "batman";
  console.log("🚀 ~ file: batman.js:2 ~ superHero:", superHero);
  ```

  ```js
  //index.js
  require("./batman");
  require("./superman");
  // No error. require() behaves as an iife
  ```

  ```js
  (function () {
    const superHero = "Superman";
    console.log("🚀 ~ file: iife.js:3 ~ superHero:", superHero);
  })();

  (function () {
    const superHero = "Batman";
    console.log("🚀 ~ file: iife.js:8 ~ superHero:", superHero);
  })();
  ```

## Module wrapping

- Every module in node.js gets wrapped in an iife before being loaded
- IIFE helps keep the top level variables scoped to the module rather than the global object
- IIFE that wraps each module contains 5 parameters which are important for the functioning of a module

- Therefore, node converts a file into an iife with 5 parameters during execution. Which are:

  - `exports`
  - `require`
  - `module`
  - `__filename`
  - `__dirname`

  That is why we have access to variables such as `__dirname`, `module` etc. (These variables are not global but are present in the scope of the iife as parameters)

  ```js
  //superman.js
  const superHero = "Superman";
  console.log("🚀 ~ file: superman.js:2 ~ superHero:", superHero);
  ```

  During execution node converts this to :

  ```js
  (function (exports, require, module, __filename, __dirname) {
    const superHero = "Superman";
    console.log("🚀 ~ file: superman.js:2 ~ superHero:", superHero);
  })();
  ```

## Module caching

```js
// Module caching
const superHero = require("./super-hero"); // Loaded and cached

console.log(superHero.getName()); // Batman
superHero.setName("Superman");
console.log(superHero.getName()); // Superman

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // Superman
```

- Although a new instance of class SuperHero with default parameter batman(new SuperHero("Batman")) is being exported from "./super-hero". Nodejs caches it.
- Therefore even if we require a module multiple times, node loads the module only once. In this case the same object is loaded and since objects are pass by reference, we get the same superhero object who's name is modified to superman.
- To check this run debugger and see require.cache local variable
- In real world, when the same module is imported in multiple files it helps with performance

## import / export patterns

- Define and export

  ```js
  const add = (a, b) => a + b;
  module.exports = add;
  ```

- Directly attach the default export

  ```js
  module.exports = (a, b) => a - b;
  ```

- Attach to the exports object

  ```js
  module.exports.multiply = (a, b) => a * b;
  module.exports.divide = (a, b) => a / b;
  ```

- Not recommended but possible (using the exports variable provided by iife)

  ```js
  exports.square = (n) => n ** n;
  ```

  - This is because `exports` is a reference to `module.exports`. See below for more info

## `module.exports` vs `exports`

- When a module is imported. `require()` function looks under module.exports and not exports.
- `exports` is a reference object to `module.exports`
- When we modify `exports`, `module.exports` is modified.

  ```js
  const username = "Sri";
  const age = 18;

  // username and age are added to module.exports.
  exports.username = username;
  exports.age = age;

  // above is same as below ( as exports is a reference to module.exports, modifying properties in exports also modifies properties in module.exports ):
  module.exports = {
    username,
    age,
  };
  ```

- But when we reassign and do the below only `exports` is modified and not `module.exports`. Since `module.exports` is not modified it will be `{}`

  ```js
  // only exports object is modified but not module.exports (since exports is reassigned with a new object literal).
  exports = {
    username,
    age,
  };
  ```

- Internally this is how `module.exports` and `exports` are defined:

  ```js
  const module = {
    exports: {},
  };

  let exports = module.exports;
  ```

## ES modules (since ES2015 / node14)

- File extension ends with `.mjs`

- exporting:

  ```js
  // math-esm.mjs
  const add = (a, b) => a + b;

  export const subtract = (a, b) => a - b;

  export default { add }; //or export default (a, b) => a * b;
  ```

- importing

  ```js
  //main.mjs
  import math, { subtract } from "./math-esm.mjs";
  console.log(math.add(2, 3));
  console.log(subtract(6, 3));

  // alternatively, import all the exports from "./math-esm.mjs"
  import * as math from "./math-esm.mjs";
  const {
    subtract,
    default: { add },
  } = math;
  console.log(add(1, 2));
  console.log(subtract(2, 1));
  ```

## Importing .json

- Always use file extension in import path as node will look for .js file named data first if not found only then data.json

- ESM

  ```js
  import data from "./data.json" assert { type: "json" };
  console.log(data);
  ```

- CJS

  ```js
  const data = require("./data.json");
  console.log(data.name);
  ```
