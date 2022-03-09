import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { selectConnectedUser } from "../../redux/features/connectedUserSlice";
import NavbarConnected from "../NavbarConnected/NavbarConnected";
import NavbarLogin from "../NavbarLogin/NavbarLogin";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const { value: connectedUser } = useAppSelector(selectConnectedUser);

  return (
    <div className="navbar">
      {connectedUser ? <NavbarConnected /> : <NavbarLogin />}
    </div>
  );
};

export default Navbar;
