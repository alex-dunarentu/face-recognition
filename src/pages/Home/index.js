import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <h1 className="AppName">Face Recognition</h1>
        <p className="AppDescription">
          Detect and locate human faces within an image from any angle, with the AI Face Detection Model from the leader in Computer Vision, Clarifai,
          which returns high-precision face bounding boxes.
        </p>
      </div>
      <div className="Advantages">
        <h2>Features</h2>
        <div className="Features Container">
          <div className="Feature">
            <img src="/assets/images/adaptation.svg" alt="Logo" />
            <p>Adapt to Various Scenes</p>
          </div>
          <div className="Feature">
            <img src="/assets/images/unlimited.svg" alt="Logo" />
            <p>Unlimited Number of Faces</p>
          </div>
          <div className="Feature">
            <img src="/assets/images/accurate.svg" alt="Logo" />
            <p>Accurate</p>
          </div>
        </div>
      </div>
      <div className="Description Container">
        <p>
          Try Face Recognition now by providing an image URL.
          <br /> This is all possible with the help of the Clarifai API.
        </p>
        <Link className="TryNow" to="/detect">
          Try now
        </Link>
      </div>
    </div>
  );
};

export default Home;
