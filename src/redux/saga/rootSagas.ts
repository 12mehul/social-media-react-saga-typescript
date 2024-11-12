import { all } from "redux-saga/effects";
import watcherRegistration from "./registrationSaga";

export default function* rootSagas() {
  yield all([watcherRegistration()]);
}
