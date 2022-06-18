import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserSync } from "../../redux/slices/userSlice";

export const handleSignUp = async (
  event: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch
) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const newUserBody = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const { data: newUser } = await axios.post(
    "http://localhost:4000/users/sign-up",
    newUserBody
  );

  dispatch(getUserSync(newUser));
  localStorage.setItem("user", JSON.stringify(newUser));
};
