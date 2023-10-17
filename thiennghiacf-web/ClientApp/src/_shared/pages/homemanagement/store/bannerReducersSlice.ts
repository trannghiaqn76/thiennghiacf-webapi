import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { TYPE, ACTIONTYPE } from "./actions";
import { IGenericState, createGenericSlice } from "./genericState";

const func = {
  [ACTIONTYPE]: (state: any) => {
    state.status = 'loading'
  },
}
var a= func[ACTIONTYPE] as ActionCreatorWithoutPayload<any>
const bannerSlice = createGenericSlice({
  name: TYPE,
  initialState: { data: [] as any, status: 'loading' } as IGenericState<string>,
  reducers: {
    ...func
  },
})


export const { start, success, error, getBannerFetch } = bannerSlice.actions;

export default bannerSlice.reducer;
