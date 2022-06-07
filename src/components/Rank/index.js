import React from "react";
import "./styles.scss";

const Rank = ({ user }) => {
  console.log(user);
  return (
    <div className="Rank">
      <div className="RankWrapper">
        <div className="RankInfo">{user.name}, your current entry count is...</div>
        <div className="RankPosition">{user.entries}</div>
      </div>
    </div>
  );
};

export default Rank;
