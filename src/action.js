import { INCREASE, DECREASE } from "./actionTypes";

/**
 * +1
 */
export const increase = () => ({
  type: INCREASE,
  // payload: {
  //   count
  // }
});

/**
 * -1
 */
export const decrease = () => ({
  type: DECREASE,
  // payload: {
  //   count
  // }
});