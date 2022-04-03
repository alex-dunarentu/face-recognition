import React from "react";
import "./styles.scss";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="FaceRecognition">
      <img src={imageUrl} alt="Uploaded image" />
    </div>
  );
};

export default FaceRecognition;
