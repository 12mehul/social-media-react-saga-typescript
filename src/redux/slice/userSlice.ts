import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateSlice } from "../types/IStateSlice";
import { IUser } from "../types/IUser";

const initialState: IStateSlice<IUser[]> = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserRequest: (state: IStateSlice<IUser[]>) => {
      state.loading = true;
    },
    UserSuccess: (
      state: IStateSlice<IUser[]>,
      action: PayloadAction<IUser[]>
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    UserFailure: (state: IStateSlice<any>, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { UserRequest, UserSuccess, UserFailure } = userSlice.actions;

export default userSlice.reducer;
