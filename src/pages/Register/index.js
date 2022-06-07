import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles.scss";

const Register = ({ loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    };

    console.log("name ", name);
    console.log("Email ", email);
    console.log("Password ", password);

    const data = await fetch(`http://localhost:3000/register`, requestOptions);
    const response = await data.json();
    if (response.status === "success") {
      console.log(response.user);
      loadUser(response.user);
      setRegistered(true);
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="FormGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        </div>
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
            <span>Register</span>
          </button>
        </div>
      </form>
      {registered ? <Navigate to="/" /> : ""}
    </div>
  );
};

export default Register;
