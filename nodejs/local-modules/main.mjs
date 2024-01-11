import math, { subtract } from "./math-esm.mjs";
import data from "./data.json" assert { type: "json" };

console.log(math.add(2, 3));
console.log(subtract(6, 3));

// alternatively, import all the exports from "./math-esm.mjs"
/* 
  import * as math from "./math-esm.mjs";

  const {
    subtract,
    default: { add },
  } = math;

  console.log(add(1, 2));
  console.log(subtract(2, 1)); 
*/

console.log(data);
