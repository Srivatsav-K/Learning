// Requiring modules
require("./add");
console.log("Hello  from index.js");

// Module wrapping.
// The below modules are wrapped in respective iife's before getting loaded. Hence, no variable name conflicts.
require("./batman");
require("./superman");

// Module caching
const superHero = require("./super-hero"); // Loaded and cached

console.log(superHero.getName()); // Batman
superHero.setName("Superman");
console.log(superHero.getName()); // Superman

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // Superman
// Although a new instance of class SuperHero with default parameter batman(new SuperHero("Batman")) is being exported from "./super-hero". Nodejs caches it. Therefore even if we require a module multiple times, node loads the module only once. In this case the same object is loaded and since objects are pass by reference, we get the same superhero object who's name is modified to superman. TO check this run debugger and see require.cache local variable
// In real world, when the same module is imported in multiple files it helps with performance

// Module.exports vs exports
const { username, age } = require("./object-reference");
console.log(username, age);

// Importing json files
const data = require("./data.json");
console.log(data.name);
