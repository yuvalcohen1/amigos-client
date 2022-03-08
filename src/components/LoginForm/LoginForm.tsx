import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/app/hooks";
import { fetchUserDetailsAndSetJwtCookieByLogin } from "../../redux/thunks/connectedUser-thunks";
import "./LoginForm.css";

type Props = {};

const LoginForm = (props: Props) => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  //   const { status: connectedUserStatus, errorMessage } =
  //     useAppSelector(selectConnectedUser);

  useEffect(() => {
    console.log(loginValues);
  }, [loginValues]);

  const handleLogin = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      dispatch(fetchUserDetailsAndSetJwtCookieByLogin(loginValues));
    },
    [loginValues, dispatch]
  );

  const handleChange = useCallback(
    (e: any) => {
      setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
    },
    [loginValues]
  );

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="login-form-group">
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          className="login-email"
          id="login-email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          className="login-password"
          id="login-password"
          name="password"
          onChange={handleChange}
          required
        />
      </div>

      <button className="login-btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
