// Action type
export const ORDER_ICECREAM = "ORDER_ICECREAM";

// Action generator/creator
export function orderIcecream(payload) {
  return { type: ORDER_ICECREAM, payload: payload }; // action
}
