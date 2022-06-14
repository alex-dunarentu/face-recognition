import React from "react";
import "./styles.scss";

const Rank = ({ user }) => {
  return (
    <div className="Rank">
      <div className="RankWrapper">
        <div className="RankInfo">Hello {user.name}, here is your current number of detections:</div>
        <div className="RankPosition">{user.entries}</div>
      </div>
    </div>
  );
};

export default Rank;
