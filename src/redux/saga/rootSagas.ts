import { all } from "redux-saga/effects";
import watcherRegistration from "./registrationSaga";
import watcherLogin from "./loginSaga";

export default function* rootSagas() {
  yield all([watcherRegistration(), watcherLogin()]);
}
