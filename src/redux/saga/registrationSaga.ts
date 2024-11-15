import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRegistration } from "../types/IRegistration";
import {
  registrationFailure,
  registrationRequest,
  registrationSuccess,
} from "../slice/registrationSlice";
import registrationService from "../service/registration";
import { IUserResponse } from "../types/IAPIResponse";
import toast from "react-hot-toast";

function* registrationSaga(action: PayloadAction<IRegistration>) {
  try {
    const res: IUserResponse = yield call(registrationService, action.payload);
    yield put(registrationSuccess(res));
    toast.success("Registration successfull!");
  } catch (error: any) {
    yield put(registrationFailure(error));
    toast.error(error.response?.data?.message || "Registration failed!");
  }
}

export default function* watcherRegistration() {
  yield takeEvery(registrationRequest.type, registrationSaga);
}
