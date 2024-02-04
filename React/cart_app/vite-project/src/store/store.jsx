import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: productReducer,
  },
});

export default store;
