import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Log/Logout";
import UidContext from "./AppContext";
import { useSelector } from "react-redux";
import { capitalize } from "../Util/functions";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/iconGus.png" alt="Logo-Gus" />
              <h3>The Gus Network</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {capitalize(userData.pseudo)}</h5>
              </NavLink>
            </li>
            {<Logout />}
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
