import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { selectConnectedUser } from "../../redux/features/connectedUserSlice";
import LoginForm from "../LoginForm/LoginForm";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const { value: connectedUser, status } = useAppSelector(selectConnectedUser);

  return (
    <div className="navbar">
      <div
        className="navbar-left"
        style={connectedUser ? { width: "30vw" } : { width: "55vw" }}
      >
        <div className="logo">AMIGOS</div>
        {connectedUser ? (
          <div className="search-profiles-container">
            <input
              className="search-profiles-input"
              type="text"
              placeholder="Search..."
            />
            <button className="search-profiles-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>

      {connectedUser && (
        <div className="navbar-right">
          <div className="profile-and-notifications">
            <button className="move-to-personal-profile-btn">
              <img
                src={connectedUser?.profileImg}
                alt="profile-img"
                className="profile-img"
              />
              <span>{connectedUser?.firstName}</span>
            </button>
            <button className="notifications-btn">
              <FontAwesomeIcon className="notifications-icon" icon={faBell} />
            </button>
          </div>

          <button className="logout-btn">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
