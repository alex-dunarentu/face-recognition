import React from "react";
import Tilt from "react-parallax-tilt";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="Logo">
      <Tilt>
        <div className="LogoImage">
          <img src="/assets/images/logo.png" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
