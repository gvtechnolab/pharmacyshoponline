/* Instruments */
import { cartSlice, counterSlice, wishlistSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  wishlist: wishlistSlice.reducer,
  cart: cartSlice.reducer,
};
