import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers, createSlice } from "@reduxjs/toolkit"
import { TYPE } from "./actions"

export interface IGenericState<T> {
    data?: T
    status: 'loading' | 'finished' | 'error'
  }
  
export const createGenericSlice = <
    T,
    Reducers extends SliceCaseReducers<IGenericState<T>>
  >({
    name = '',
    initialState,
    reducers,
  }: {
    name: string
    initialState: IGenericState<T>
    reducers: ValidateSliceCaseReducers<IGenericState<T>, Reducers>
  }) => {
    return createSlice({
      name,
      initialState,
      reducers: {
        start(state: any ) {
          state.status = 'loading'
        },
        /**
         * If you want to write to values of the state that depend on the generic
         * (in this case: `state.data`, which is T), you might need to specify the
         * State type manually here, as it defaults to `Draft<GenericState<T>>`,
         * which can sometimes be problematic with yet-unresolved generics.
         * This is a general problem when working with immer's Draft type and generics.
         */
        success(state: IGenericState<T>, action: PayloadAction<T>) {
          console.log(action.payload,'action.payload')
          state.data = action.payload;
          state.status = 'finished';
        },
        error(state: IGenericState<T>, action: PayloadAction<T>) {
          state.data = action.payload;
          state.status = 'finished';
        },
        ...reducers,
      },
    })
  }
  