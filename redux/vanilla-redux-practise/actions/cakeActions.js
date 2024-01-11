// Action type
export const ORDER_CAKE = "ORDER_CAKE";

// Action generator/creator
export function orderCake(payload) {
  return { type: ORDER_CAKE, payload: payload }; // action
}
