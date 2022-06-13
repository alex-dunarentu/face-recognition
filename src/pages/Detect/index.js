import React from "react";
import { ImageLinkForm, Rank, FaceRecognition } from "../../components";
import "./styles.scss";

const Detect = ({ onInputChange, onButtonSubmit, boxes, imageUrl, user, isLoading }) => {
  return (
    <div className="Detect">
      <Rank user={user} />
      <ImageLinkForm isLoading={isLoading} onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition isLoading={isLoading} boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
};

export default Detect;
