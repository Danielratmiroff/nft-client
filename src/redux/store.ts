import { configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { systemReducer, umsSaga } from ".";
import axios from "axios";
import http from "https";

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const store = configureStore({
  reducer: {
    system: systemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([sagaMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();
export const axiosInstance = axios.create({
  // refactor -> disabled credentials
  withCredentials: false,
});

export default store;

function* rootSaga() {
  yield all([fork(umsSaga)]);
}
runSaga(rootSaga);
