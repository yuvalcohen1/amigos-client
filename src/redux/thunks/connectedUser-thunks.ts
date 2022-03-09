import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginValuesModel } from "../../models/LoginValues.model";
import { UserModel } from "../../models/User.model";

const api = axios.create({
  baseURL: "http://localhost:4000/users",
});

export const fetchUserDetailsAndSetJwtCookieByLogin = createAsyncThunk<
  UserModel,
  LoginValuesModel
>(
  "connectedUser/fetchUserDetailsAndSetJwtCookieByLogin",
  async (loginValues: LoginValuesModel, thunkApi) => {
    try {
      const { data: user } = await api.post<UserModel>("/login", loginValues, {
        withCredentials: true,
      });

      localStorage.setItem("connectedUser", JSON.stringify(user));

      return user;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);

export const resetConnectedUserAndDeleteJwtCookie = createAsyncThunk(
  "connectedUser/resetConnectedUserAndDeleteJwtCookie",
  async (_, thunkApi) => {
    try {
      await api.post("/delete-token-cookie", {}, {
        withCredentials: true,
      });

      localStorage.setItem("connectedUser", JSON.stringify(null));

      return;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response);
    }
  }
);
