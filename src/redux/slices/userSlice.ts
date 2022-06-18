import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/User.model";
import { RootState } from "../app/store";

interface UserState {
  value: UserModel | null;
}

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSync: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getUserSync } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
