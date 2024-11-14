import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateSlice } from "../types/IStateSlice";
import { ILogin } from "../types/ILogin";
import { IUserReponse } from "../types/IAPIResponse";

const initialState: IStateSlice<ILogin> = {
  loading: false,
  data: {
    email: "",
    password: "",
  },
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (
      state: IStateSlice<ILogin>,
      action: PayloadAction<ILogin>
    ) => {
      state.loading = true;
      state.data = action.payload;
    },
    loginSuccess: (
      state: IStateSlice<ILogin>,
      action: PayloadAction<IUserReponse>
    ) => {
      state.loading = false;
    },
    loginFailure: (state: IStateSlice<any>, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
