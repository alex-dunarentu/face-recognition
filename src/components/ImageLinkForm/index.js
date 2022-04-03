import React from "react";
import "./styles.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ImageLinkForm">
      <p>
        Magically detect faces in your pictures
        <br />
        Give it a try
      </p>
      <div className="Form">
        <input onChange={onInputChange} type="text" placeholder="Insert image URL" />
        <button onClick={onButtonSubmit}>
          <span>Detect</span>
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
