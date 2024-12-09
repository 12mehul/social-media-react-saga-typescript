import { PayloadAction } from "@reduxjs/toolkit";
import { ITimeline } from "../types/ITimeline";
import { call, put, takeEvery } from "redux-saga/effects";
import timelineService from "../service/timeline";
import {
  TimelineFailure,
  TimelineRequest,
  TimelineSuccess,
} from "../slice/timelineSlice";

function* timelineSaga(action: PayloadAction<string>) {
  try {
    const res: ITimeline[] = yield call(timelineService, action.payload);
    yield put(TimelineSuccess(res));
  } catch (error) {
    yield put(TimelineFailure(error));
  }
}

export default function* watcherTimeline() {
  yield takeEvery(TimelineRequest.type, timelineSaga);
}
