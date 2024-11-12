import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../slice/registrationSlice";
import rootSagas from "../saga/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
