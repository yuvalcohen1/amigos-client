import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import connectedUserReducer from "../features/connectedUserSlice";
import postsReducer from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    connectedUser: connectedUserReducer,
    posts: postsReducer,
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
