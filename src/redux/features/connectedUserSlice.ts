import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../models/User.model";
import type { RootState } from "../app/store";
import {
  fetchUserDetailsAndSetJwtCookieByLogin,
  resetConnectedUserAndDeleteJwtCookie,
} from "../thunks/connectedUser-thunks";

interface ConnectedUserState {
  value: UserModel | null;
  status: "idle" | "loading" | "failed";
  statusCode: number;
  errorMessage: string;
}

const initialState: ConnectedUserState = {
  value: null,
  status: "idle",
  statusCode: 200,
  errorMessage: "",
};

export const connectedUserSlice = createSlice({
  name: "connectedUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetailsAndSetJwtCookieByLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserDetailsAndSetJwtCookieByLogin.fulfilled,
        (state, action) => {
          state.status = "idle";
          state.statusCode = 200;
          state.value = action.payload;
          state.errorMessage = "";
        }
      )
      .addCase(
        fetchUserDetailsAndSetJwtCookieByLogin.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.value = null;
          state.statusCode = action.payload.status;
          state.errorMessage = action.payload.data;
        }
      )
      .addCase(resetConnectedUserAndDeleteJwtCookie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        resetConnectedUserAndDeleteJwtCookie.fulfilled,
        (state, action) => {
          state.status = "idle";
          state.statusCode = 200;
          state.value = null;
          state.errorMessage = "";
        }
      )
      .addCase(
        resetConnectedUserAndDeleteJwtCookie.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.statusCode = action.payload.status;
          state.errorMessage = action.payload.data;
        }
      );
  },
});

// export const {  } = connectedUserSlice.actions;

export const selectConnectedUser = (state: RootState) => state.connectedUser;

export default connectedUserSlice.reducer;
