import { takeEvery, put, all, fork } from "redux-saga/effects";
import { call } from "typed-redux-saga";
import * as umsApi from "./Apis/umsApi";
import { AxiosError } from "axios";
import { getVisit, getVisitResponse } from ".";

export function* tryGetVisit({ payload }: ReturnType<typeof getVisit>) {
  try {
    const data = yield* call(umsApi.reqVisit);
    yield put(getVisitResponse(data));
  } catch (error) {
    console.log("Err: ", error);
  }
}

export function* watchGetVisitInstance() {
  yield takeEvery(getVisit.type, tryGetVisit);
}

export default function* rootSaga() {
  yield all([fork(watchGetVisitInstance)]);
}
