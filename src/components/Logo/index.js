import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img src="/assets/images/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
