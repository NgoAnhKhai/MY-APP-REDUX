import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import multiCounterReducer from "../features/counter/mutiCounter/multiCounterSlice";
import todoSliceReducer from "../todo/todoSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoSliceReducer,
  }),
});
