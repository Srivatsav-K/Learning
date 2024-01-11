const obj1 = {
  "hello/world": "hi",
};

const obj2 = {
  ["hello/world"]: "hi",
};

console.log(obj1, obj2);
