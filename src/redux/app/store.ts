import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import connectedUserReducer from "../features/connectedUserSlice";

export const store = configureStore({
  reducer: {
    connectedUser: connectedUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;