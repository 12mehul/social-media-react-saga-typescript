import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegistration } from "../types/IRegistration";
import { IUserResponse } from "../types/IAPIResponse";

interface RegistrationState {
  loading: boolean;
  registrationData: IRegistration | null;
  responseData: IUserResponse | null;
  error: string | null;
}

const initialState: RegistrationState = {
  loading: false,
  registrationData: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  },
  responseData: null,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationRequest: (
      state: RegistrationState,
      action: PayloadAction<IRegistration>
    ) => {
      state.loading = true;
      state.registrationData = action.payload;
    },
    registrationSuccess: (
      state: RegistrationState,
      action: PayloadAction<IUserResponse>
    ) => {
      state.loading = false;
      state.responseData = action.payload;
    },
    registrationFailure: (
      state: RegistrationState,
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
