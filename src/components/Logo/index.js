import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img className="LogoImage" src="/assets/images/fingerprint.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
