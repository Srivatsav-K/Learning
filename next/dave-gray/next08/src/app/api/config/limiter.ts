import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true, // The default behaviour is to wait for the duration of the rate limiting that's currently in effect before the promise is resolved, but if you pass in "fireImmediately": true, the promise will be resolved immediately with remainingRequests set to -1:
});
