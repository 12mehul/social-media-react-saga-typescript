import { call, put, takeEvery } from "redux-saga/effects";
import userService from "../service/user";
import { IUser } from "../types/IUser";
import { UserFailure, UserRequest, UserSuccess } from "../slice/userSlice";

function* userSaga() {
  try {
    const res: IUser[] = yield call(userService);
    yield put(UserSuccess(res));
  } catch (error) {
    yield put(UserFailure(error));
  }
}

export default function* watcherUser() {
  yield takeEvery(UserRequest().type, userSaga);
}