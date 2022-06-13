import React from "react";
import "./styles.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, isLoading }) => {
  return (
    <div className="ImageLinkForm">
      <img className="LogoImage" src="/assets/images/fingerprint.svg" alt="Logo" />
      <div className="Form">
        <div className="FormGroup">
          <label>Image URL</label>
          <input onChange={onInputChange} type="text" />
        </div>
        <button onClick={onButtonSubmit} className={isLoading ? "LockButton" : ""}>
          <span>Detect</span>
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
