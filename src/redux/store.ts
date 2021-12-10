import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, createSelectorHook } from "react-redux";
import axios from "axios";
import http from "https";
import { systemReducer, umsSaga } from ".";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

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
  httpAgent: new http.Agent({
    rejectUnauthorized: false,
  }),
});
export default store;

function* rootSaga() {
  yield all([fork(umsSaga)]);
}
runSaga(rootSaga);
