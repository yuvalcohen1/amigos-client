import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectConnectedUser } from "../../redux/features/connectedUserSlice";
import { resetConnectedUserAndDeleteJwtCookie } from "../../redux/thunks/connectedUser-thunks";
import "./NavbarConnected.css";

type Props = {};

const NavbarConnected = (props: Props) => {
  const { value: connectedUser } = useAppSelector(selectConnectedUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await dispatch(resetConnectedUserAndDeleteJwtCookie());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <div className="navbar-connected">
      <div className="navbar-connected-left">
        <div className="logo">AMIGOS</div>

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
      </div>

      <div className="navbar-connected-right">
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

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarConnected;
