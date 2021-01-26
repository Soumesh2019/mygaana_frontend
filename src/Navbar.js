import React from "react";

import { NavLink } from "react-router-dom";
import SERVER_HOST from "./config/base_url";

const Navbar = ({ isLoggedInProp, setIsLoggedInProp }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    fetch(SERVER_HOST + "/logout", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        const { success } = data;
        success && setIsLoggedInProp();
      });
  };

  return (
    <>
      <div className="navbar-fixed ">
        <nav className="light-blue darken-4">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              <NavLink exact to="/">
                MyGaana
              </NavLink>
            </a>
            <ul className="right hide-on-med-and-down">
              {isLoggedInProp ? (
                <>
                  <li>
                    <NavLink exact to="/upload">
                      Upload
                    </NavLink>
                  </li>
                  <li onClick={handleLogout}>Logout</li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink exact to="/signup">
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/signin">
                      Sign In
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
