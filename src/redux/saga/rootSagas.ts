import { all } from "redux-saga/effects";
import watcherRegistration from "./registrationSaga";
import watcherLogin from "./loginSaga";
import watcherUser from "./userSaga";
import watcherProfile from "./profileSaga";
import watcherTimeline from "./timelineSaga";

export default function* rootSagas() {
  yield all([
    watcherRegistration(),
    watcherLogin(),
    watcherUser(),
    watcherProfile(),
    watcherTimeline(),
  ]);
}
