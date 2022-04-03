import React from "react";
import { ImageLinkForm, Rank, FaceRecognition } from "../../components";
import "./styles.scss";

const Home = ({ onInputChange, onButtonSubmit, boxes, imageUrl }) => {
  return (
    <div className="Home">
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
};

export default Home;
