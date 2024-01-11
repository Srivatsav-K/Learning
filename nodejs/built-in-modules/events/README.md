# events

- Used for event driven programming
- The module returns a `EventEmitter` class using which we can register and listen to events

  ```js
  const EventEmitter = require("node:events");

  const emitter = new EventEmitter();

  // on(event-name,args)
  emitter.on("order-pizza", (data) => {
    console.log(data);
  });

  // Events do not block the thread during execution
  console.log("Do work before event occurs in the system");

  // emit(even-name,args)
  emitter.emit("order-pizza", data);
  ```

- we can also extend from `EventEmitter` to create our own EventEmitter

  ```js
  const EventEmitter = reqiure("node:events");

  class PizzaShop extends EventEmitter {
    constructor() {
      super(); // initialize EventEmitter class
    }

    order(size) {
      this.emit("order", size);
    }
  }
  ```

  ```js
  // index.js
  const PizzaShop = require("./pizza-shop");

  const pizzaShop = new PizzaShop();

  pizzaShop.on("order", (size) => {
    console.log(`Baking ${size} pizza!`);
  });

  pizzaShop.order("large");
  ```

- Most modules like fs, streams, http etc also extend from the EventEmitter class
