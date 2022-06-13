import React from "react";
import "./styles.scss";

const FaceRecognition = ({ imageUrl, boxes, isLoading }) => {
  return (
    <div className="FaceRecognition">
      <div className="FaceRecognitionWrapper">
        {isLoading ? (
          <div className="LoadingBoxes">
            <span>Scanning</span>
          </div>
        ) : (
          ""
        )}
        <img id="input-image" src={imageUrl} alt="" onLoad={() => document.getElementById("input-image").scrollIntoView()} />
        {boxes.map((box, index) => (
          <div key={index} className="BoundingBox" style={{ left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow }}></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
