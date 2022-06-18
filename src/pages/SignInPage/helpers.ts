import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserSync } from "../../redux/slices/userSlice";

export const handleSignIn = async (
  event: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch
) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  const signInBody = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const { data: user } = await axios.post(
    "http://localhost:4000/users/sign-in",
    signInBody
  );

  dispatch(getUserSync(user));
  localStorage.setItem("user", JSON.stringify(user));
};
