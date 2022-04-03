import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email ", email);
    console.log("Password ", password);
  };

  return (
    <div className="SignIn">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="FormGroup">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          <small className="GroupTextMuted">We'll never share your email with anyone else.</small>
        </div>
        <div className="FormGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="on"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="FormActions">
          <button type="submit">
            <span>Sign In</span>
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
