import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "@/store/slice/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "@/store/slice/counterSlice/counterSlice";
import inputReducer from "@/store/slice/inputSlice/inputSlice";
import buttonReducer from "@/store/slice/buttonSlice/buttonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer,
    button: buttonReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});
setupListeners(store.dispatch);
