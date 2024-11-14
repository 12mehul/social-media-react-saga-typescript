import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRegistration } from "../types/IRegistration";
import {
  registrationFailure,
  registrationRequest,
  registrationSuccess,
} from "../slice/registrationSlice";
import registrationService from "../service/registration";
import { IUserReponse } from "../types/IAPIResponse";

function* registrationSaga(action: PayloadAction<IRegistration>) {
  try {
    const res: IUserReponse = yield call(registrationService, action.payload);
    yield put(registrationSuccess(res));
  } catch (error) {
    yield put(registrationFailure(error));
  }
}

export default function* watcherRegistration() {
  yield takeEvery(registrationRequest.type, registrationSaga);
}
