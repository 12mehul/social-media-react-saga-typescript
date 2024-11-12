import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRegistration } from "../types/IRegistration";
import {
  registrationFailure,
  registrationRequest,
  registrationSuccess,
} from "../slice/registrationSlice";
import registrationData from "../service/registration";

function* registrationSaga(action: PayloadAction<IRegistration>) {
  try {
    const res: IRegistration = yield call(registrationData, action.payload);
    yield put(registrationSuccess(res));
  } catch (error) {
    yield put(registrationFailure(error));
  }
}

export default function* watcherRegistration() {
  yield takeEvery(registrationRequest.type, registrationSaga);
}
