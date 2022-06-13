import React from "react";
import "./styles.scss";

const Profile = ({ user }) => {
  const { name, email, entries, joined } = user;
  const date = new Date(joined);
  return (
    <div className="Profile">
      {user.name !== "visitor" ? (
        <>
          <h1>Profile</h1>
          <div className="Property">Name</div>
          <span className="Value">{name}</span>
          <div className="Property">Email</div>
          <span className="Value">{email}</span>
          <div className="Property">Detections</div>
          <span className="Value">{entries}</span>
          <div className="Property">Joined</div>
          <span className="Value">{date.toLocaleDateString()}</span>
        </>
      ) : (
        <span className="EdgeCase">Please sign in first.</span>
      )}
    </div>
  );
};

export default Profile;
