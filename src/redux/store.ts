import { configureStore } from "@reduxjs/toolkit";
import { name, reducer } from "./slice";
import { useDispatch, createSelectorHook } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();

const store = configureStore({
  reducer: {
    [name]: reducer,
  },
});

export default store;
