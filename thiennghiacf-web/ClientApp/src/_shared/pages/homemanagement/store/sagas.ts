import { put, takeEvery } from "redux-saga/effects";
import { success, start } from "./bannerReducersSlice";
import { ACTIONTYPE, GETBANNER } from "./actions";

const sagas = {
  *[ACTIONTYPE]() {
    try{
      yield put(start());
      yield put(success([{id:1, name:"nghiatv5"}] as any));
    }
    catch(error){
      yield put(error(""));
    }
  },
};
export default function* homeSaga() {
  yield takeEvery(GETBANNER, sagas[ACTIONTYPE]);
}
