import { call, put, takeEvery } from "redux-saga/effects";
import loginService from "../service/login";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../types/ILogin";
import { IUserResponse } from "../types/IAPIResponse";
import { loginFailure, loginRequest, loginSuccess } from "../slice/loginSlice";
import toast from "react-hot-toast";

function* loginSaga(action: PayloadAction<ILogin>) {
  try {
    const res: IUserResponse = yield call(loginService, action.payload);
    yield put(loginSuccess(res));
    localStorage.setItem("token", res.token);
    toast.success("Login successfull!");
  } catch (error: any) {
    yield put(loginFailure(error));
    toast.error(error.response?.data?.message || "Login failed!");
  }
}

export default function* watcherLogin() {
  yield takeEvery(loginRequest.type, loginSaga);
}
