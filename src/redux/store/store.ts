import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSagas from "../saga/rootSagas";
import registrationReducer from "../slice/registrationSlice";
import loginReducer from "../slice/loginSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
