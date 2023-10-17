import homeSaga from "../../_shared/pages/homemanagement/store/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
