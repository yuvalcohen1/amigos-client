import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./NavbarLogin.css";

type Props = {};

const NavbarLogin = (props: Props) => {
  return (
    <div className="navbar-login">
      <div className="logo">AMIGOS</div>

      <LoginForm />
    </div>
  );
};

export default NavbarLogin;
