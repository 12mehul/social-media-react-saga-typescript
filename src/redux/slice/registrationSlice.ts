import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateSlice } from "../types/IStateSlice";
import { IRegistration } from "../types/IRegistration";
import { IUserReponse } from "../types/IAPIResponse";

const initialState: IStateSlice<IRegistration> = {
  loading: false,
  data: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  },
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationRequest: (
      state: IStateSlice<IRegistration>,
      action: PayloadAction<IRegistration>
    ) => {
      state.loading = true;
      state.data = action.payload;
    },
    registrationSuccess: (
      state: IStateSlice<IRegistration>,
      action: PayloadAction<IUserReponse>
    ) => {
      state.loading = false;
    },
    registrationFailure: (
      state: IStateSlice<any>,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registrationRequest, registrationSuccess, registrationFailure } =
  registrationSlice.actions;

export default registrationSlice.reducer;
