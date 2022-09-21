import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/Slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
