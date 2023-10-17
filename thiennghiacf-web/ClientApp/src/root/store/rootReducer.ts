import { combineReducers } from '@reduxjs/toolkit'
import bannerReducersSlice from "../../_shared/pages/homemanagement/store/bannerReducersSlice";

export const rootReducer = combineReducers({banner:bannerReducersSlice})
export type RootState = ReturnType<typeof rootReducer>