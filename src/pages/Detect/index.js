import React from "react";
import { ImageLinkForm, Rank, FaceRecognition } from "../../components";
import "./styles.scss";

const Detect = ({ onInputChange, onButtonSubmit, boxes, imageUrl, user }) => {
  return (
    <div className="Detect">
      <Rank user={user} />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
};

export default Detect;
