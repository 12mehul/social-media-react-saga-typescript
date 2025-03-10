import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateSlice } from "../types/IStateSlice";
import { ITimeline } from "../types/ITimeline";

const initialState: IStateSlice<ITimeline[]> = {
  loading: false,
  data: [],
  error: null,
};

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    TimelineRequest: (
      state: IStateSlice<ITimeline[]>,
      action: PayloadAction<string>
    ) => {
      state.loading = true;
    },
    TimelineSuccess: (
      state: IStateSlice<ITimeline[]>,
      action: PayloadAction<ITimeline[]>
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    TimelineFailure: (state: IStateSlice<any>, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { TimelineRequest, TimelineSuccess, TimelineFailure } =
  timelineSlice.actions;

export default timelineSlice.reducer;
