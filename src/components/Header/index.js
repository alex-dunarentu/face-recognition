import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <nav className="Header">
      <div className="HeaderWrapper">
        <Logo />
        <div className="Navigation">
          <div className="NavigationOption">
            <Link to="/sign-in">Sign In</Link>
          </div>
          <div className="NavigationOption">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
