const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super(); // initialize EventEmitter class
    this.orderNumber = 0;
  }

  order(preferences = {}) {
    this.orderNumber++;

    this.emit("order", preferences.size, preferences.toppings);
  }

  displayOrderNumber() {
    return this.orderNumber;
  }
}

module.exports = PizzaShop;
