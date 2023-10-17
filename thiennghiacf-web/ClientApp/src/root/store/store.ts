import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from './rootReducer'

const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./rootSaga";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
sagaMiddleware.run(rootSaga);

export default store;
