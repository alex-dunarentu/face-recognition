import React from "react";
import Logo from "../Logo";
import "./styles.scss";

const Header = () => {
  return (
    <nav className="Header">
      <Logo />
      <div className="Navigation">
        <div className="NavigationOption">Sign In</div>
        <div className="NavigationOption">Register</div>
      </div>
    </nav>
  );
};

export default Header;
