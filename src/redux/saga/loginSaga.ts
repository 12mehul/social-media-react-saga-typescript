import { call, put, takeEvery } from "redux-saga/effects";
import loginService from "../service/login";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../types/ILogin";
import { IUserReponse } from "../types/IAPIResponse";
import { loginFailure, loginRequest, loginSuccess } from "../slice/loginSlice";

function* loginSaga(action: PayloadAction<ILogin>) {
  try {
    const res: IUserReponse = yield call(loginService, action.payload);
    yield put(loginSuccess(res));
    localStorage.setItem("token", res.token);
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* watcherLogin() {
  yield takeEvery(loginRequest.type, loginSaga);
}
