const EventEmitter = require("node:events"); // Returns a class EventEmitter which encapsulates functinality to emit events and respond to them

const emitter = new EventEmitter();

// on(event-name,args)
emitter.on("order-pizza", ({ size, topping }, name) => {
  console.log(
    `Order recieved ${name}! Baking a ${size} pizza with ${topping} `
  );
});

// can register multiple listeners for the same event
emitter.on("order-pizza", ({ size }) => {
  if (size === "large") {
    console.log("Serving a complimentary drink");
  }
});

// Events do not block the thread during execution
console.log("Do work before event occurs in the system");

// emit(even-name,args)
emitter.emit(
  "order-pizza",
  {
    size: "large",
    topping: "chicken",
  },
  "srivatsav"
);

/* 
  console o/p : 
  Do work before event occurs in the system
  Order recieved! Baking a large pizza with chicken 
  Serving a complimentary drink
*/
