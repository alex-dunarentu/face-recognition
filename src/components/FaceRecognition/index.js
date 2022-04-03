import React from "react";
import "./styles.scss";

const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log(boxes);
  return (
    <div className="FaceRecognition">
      <div className="FaceRecognitionWrapper">
        <img id="input-image" src={imageUrl} alt="Uploaded content" />
        {boxes.map((box, index) => (
          <div key={index} className="BoundingBox" style={{ left: box.leftCol, right: box.rightCol, top: box.topRow, bottom: box.bottomRow }}></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
