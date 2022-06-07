import React from "react";
import { ImageLinkForm, Rank, FaceRecognition } from "../../components";
import "./styles.scss";

const Home = ({ onInputChange, onButtonSubmit, boxes, imageUrl, user }) => {
  return (
    <div className="Home">
      <Rank user={user} />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
};

export default Home;
