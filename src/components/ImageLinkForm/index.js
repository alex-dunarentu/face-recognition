import React from "react";
import "./styles.scss";

const ImageLinkForm = () => {
  return (
    <div className="ImageLinkForm">
      <p>
        Magically detect faces in your pictures
        <br />
        Give it a try
      </p>
      <div className="Form">
        <input type="text" />
        <button>
          <span>Detect</span>
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
