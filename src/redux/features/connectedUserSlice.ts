import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../models/User.model";
import type { RootState } from "../app/store";
import { fetchUserDetailsAndSetJwtCookieByLogin } from "../thunks/connectedUser-thunks";

interface ConnectedUserState {
  value: UserModel | null;
  status: "idle" | "loading" | "failed";
  statusCode: number;
  errorMessage: string;
}

// {
//   email: "",
//   encryptedPassword: "",
//   birthday: new Date(),
//   firstName: "yuval",
//   lastName: "cohen",
//   isAdmin: 0,
//   profileImg:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDv94lhq4g5u-kKZvmR_zxMJOHDuViXaN0bg&usqp=CAU",
//   _id: "",
// },
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
      );
  },
});

// export const {} = connectedUserSlice.actions;

export const selectConnectedUser = (state: RootState) => state.connectedUser;

export default connectedUserSlice.reducer;
