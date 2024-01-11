const DrinkMachine = require("./drink-machine");
const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, toppings) => {
  console.log(
    `Baking ${size} pizza with the followings toppings : ${toppings.join(", ")}`
  );
  drinkMachine.serveDrink(size);
});

console.log(pizzaShop.displayOrderNumber());

pizzaShop.order({ size: "large", toppings: ["pepporoni", "mushrooms"] });
