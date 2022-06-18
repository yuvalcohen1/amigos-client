import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/User.model";
import { RootState } from "../app/store";

const initialState: UserModel | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSync: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getUserSync } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
