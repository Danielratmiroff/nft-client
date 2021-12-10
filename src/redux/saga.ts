import { takeEvery, put, all, fork } from "redux-saga/effects";
import { call } from "typed-redux-saga";
import * as umsApi from "./Apis/umsApi";
import { AxiosError } from "axios";
import { getVisit, getVisitResponse } from ".";

export function* tryGetVisit({ payload }: ReturnType<typeof getVisit>) {
  try {
    const data = yield* call(umsApi.reqVisit);
    console.log(data);
    yield put(getVisitResponse("asdf"));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetVisitInstance() {
  console.log("333");
  yield takeEvery(getVisit.type, tryGetVisit);
}

export default function* rootSaga() {
  console.log("333");
  yield all([fork(watchGetVisitInstance)]);
}
