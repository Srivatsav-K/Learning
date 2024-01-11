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

// only exports object is modified but not module.exports (since exports is reassigned with a new object literal).
// NOTE: When someone imports from this file. require() function looks under module.exports and not exports. (Here since module.exports object is not modified, it will be an empty object)
exports = {
  username,
  age,
};

// ANOLOGY : consider obj1 as module.exports and obj2 as exports
const obj1 = {
  name: "Bruce wayne",
};

let obj2 = obj1;
obj2.name = "Clark kent"; // Modifying obj2 also modifies obj1 since objects are reference type

// Reassinging with new object literal just changes obj2 and not obj1
obj2 = {
  name: "Diana",
};

console.log({ obj1, obj2 });
